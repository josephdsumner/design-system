//
// inspired by: https://github.com/hashicorp/mktg-content-workflows/blob/main/shared/search/collect-headings.ts
//

// remark
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import { defaultSchema } from 'hast-util-sanitize';

import _ from 'lodash';

// plugins
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import remarkStripBadges from 'remark-strip-badges';

// customisations
const remarkHtmlSanitise = _.cloneDeep(defaultSchema, {
  tagNames: [
    'custom-tag',
    'another-custom-tag',
    'CustomTag',
    'Doc::Content::HdsPrinciples',
    'Doc::TokensList',
    'doc-content-hds-principles',
    'doc-badge',
    'doc-wcag-list',
    'doc-a-11-y-support',
    'doc-tokens-list',
    'doc-component-api',
  ],
  // using a regex like `/^@/` doesn't work, is not recognized as a valid attribute
  attributes: { '*': ['at-arg-'] },
});

// const remarkHtmlHandlers = {
//   image(h, node, ...rest) {
//     // console.log('NODE', JSON.stringify(node, null, 2));
//     // console.log('REST', JSON.stringify(rest, null, 2));
//     // const props = { hello: 'world!' };
//     // return h(node, node, props);
//   },
// };

// replace `<DOC::(*)>` tags with HTML-compatible `<doc->` custom tags
const replaceDocTags = (markdownContent) =>
  markdownContent
    .replace(/(<\/?)C\.Property/gim, (_match, p1) => {
      const tag = p1 + 'Doc::ComponentApi::Property';
      return tag;
    })
    .replace(/(<\/?)(Doc::[^>\s]+)([^>]*)/gim, (_match, p1, p2, p3) => {
      const tag = p1 + _.kebabCase(p2).replaceAll('::', '-');
      const attrs = p3.replaceAll('@', 'at-arg-').replace(/( as \|\w+\|)/, '');
      return `${tag}${attrs}`;
    });

// ========================================================================

export async function parseMarkdown(markdownContent) {
  const headings = [];
  const paragraphs = [];
  const tables = { cells: [] };
  const htmlTags = [];

  let sanitazedContent;
  sanitazedContent = replaceDocTags(markdownContent);
  console.log('----------------------------');
  console.log(sanitazedContent);
  console.log('----------------------------');

  const headingMapper = () => (tree) => {
    visit(tree, 'heading', (node) => {
      const content = stringifyChildNodes(node);
      headings.push({ content: content, level: node.depth });
    });
  };

  const paragraphMapper = () => (tree) => {
    visit(tree, 'paragraph', (node) => {
      // TODO!
      // How do we avoid HTML tags (eg. `<code>`) be indexed as words, but return only their "innerText"?
      const content = stringifyChildNodes(node);
      paragraphs.push({ content: content });
    });
  };

  const tableMapper = () => (tree) => {
    visit(tree, 'tableCell', (node) => {
      const content = stringifyChildNodes(node);
      tables.cells.push({ content: content });
    });
  };

  const htmlTagsMapper = () => (tree) => {
    visit(tree, 'html', (node) => {
      console.log('HTML', JSON.stringify(node, null, 2));
      console.log('parent', node.parent);
      htmlTags.push({ html: node.value });
    });
  };

  // const logNodes = () => (tree) => {
  //   visit(tree, (node) => {
  //     console.log('LOG', JSON.stringify(node, null, 2));
  //   });
  // };

  await remark()
    .use(remarkHtml, {
      sanitize: remarkHtmlSanitise,
      // handlers: remarkHtmlHandlers,
    })
    // .use(logNodes)
    .use(remarkGfm)
    .use(remarkStripBadges)
    .use(remarkSqueezeParagraphs)
    .use(headingMapper)
    .use(paragraphMapper)
    .use(tableMapper)
    .use(htmlTagsMapper)
    .process(sanitazedContent);

  return { headings, paragraphs, tables, htmlTags };
}

// ====================================

// collect text from children nodes of a parent node.
// notice: this will visit nodes recursively via "depth-first" strategy.

function stringifyChildNodes(node) {
  const text = node.children.reduce((acc, child) => {
    if ('children' in child) {
      acc += stringifyChildNodes(child);
    } else if ('value' in child) {
      acc += child.value;
    }
    return acc;
  }, '');

  return text;
}
