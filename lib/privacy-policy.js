import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { Marked } from 'marked';

const SOURCE = join(process.cwd(), 'content', 'privacy-policy.md');
// Unfilled details in the source look like "[Insert ...]".
const PLACEHOLDER = /\[Insert [^\]]+\]/g;
const NUMBERED = /^(\d+(?:\.\d+)*)\.?\s+(.*)$/;

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// Parses content/privacy-policy.md at build time. Edit that file to change the policy.
export function getPrivacyPolicy() {
  const source = readFileSync(SOURCE, 'utf8').replace(/\r\n/g, '\n');
  const bodyStart = source.indexOf('\n## ');
  const header = source.slice(0, bodyStart);
  const body = source.slice(bodyStart + 1);
  const field = (label) => header.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`))?.[1].trim();

  const toc = [];
  const usedIds = new Set();
  const marked = new Marked({ gfm: true, breaks: true });
  marked.use({
    renderer: {
      heading({ tokens, depth, text }) {
        const [, num = null, title = text] = text.match(NUMBERED) ?? [];
        let id = slugify(title);
        while (usedIds.has(id)) id += '-x';
        usedIds.add(id);
        if (depth === 2) toc.push({ id, num, title });

        const inner = this.parser
          .parseInline(tokens)
          .replace(/^(\d+(?:\.\d+)*\.?)\s+/, '<span class="policy-num">$1</span> ');
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      link({ href, tokens }) {
        const label = this.parser.parseInline(tokens);
        if (/^https:\/\/(www\.)?heartloop\.in(\/|$)/.test(href)) return `<a href="${href}">${label}</a>`;
        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;
      },
    },
  });

  const html = marked
    .parse(body)
    .replace(PLACEHOLDER, (text) => `<mark class="policy-placeholder" title="Needs confirmation before publishing">${text}</mark>`);

  return {
    effectiveDate: field('Effective Date'),
    lastUpdated: field('Last Updated'),
    website: field('Website'),
    html,
    toc,
    placeholders: [...new Set(body.match(PLACEHOLDER) ?? [])],
  };
}
