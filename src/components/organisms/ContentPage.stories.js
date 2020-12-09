import React, { useEffect } from "react";
import { ContentPage } from "./ContentPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../redux/reducers";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./../../i18n";
import { composeWithDevTools } from "redux-devtools-extension";

function Wrapper(props) {
  const language = useSelector((state) => state.language);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  return <>{props.children}</>;
}

export default {
  title: "Components/Organisms/ContentPage",
  component: ContentPage,
  decorators: [
    (Story) => {
      return (
        <Provider store={createStore(rootReducer, composeWithDevTools())}>
          <Wrapper>
            <Story />
          </Wrapper>
        </Provider>
      );
    },
  ],
};

const Template = (args) => <ContentPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content:
    "# react-markdown\n" +
    "\n" +
    "[![Build][build-badge]][build]\n" +
    "[![Coverage][coverage-badge]][coverage]\n" +
    "[![Downloads][downloads-badge]][downloads]\n" +
    "[![Size][size-badge]][size]\n" +
    "[![Sponsors][sponsors-badge]][collective]\n" +
    "[![Backers][backers-badge]][collective]\n" +
    "[![Chat][chat-badge]][chat]\n" +
    "\n" +
    "Markdown component for React using [**remark**][remark].\n" +
    "\n" +
    "[Learn markdown here][learn] and [check out the demo here][demo].\n" +
    "\n" +
    "## Install\n" +
    "\n" +
    "[npm][]:\n" +
    "\n" +
    "```sh\n" +
    "npm install react-markdown\n" +
    "```\n" +
    "\n" +
    "## Why this one?\n" +
    "\n" +
    "There are other ways for markdown in React out there so why use this one?\n" +
    "The two main reasons are that they often rely on `dangerouslySetInnerHTML` or\n" +
    "have bugs with how they handle markdown.\n" +
    "`react-markdown` uses a syntax tree to build the virtual dom which allows for\n" +
    "updating only the changing DOM instead of completely overwriting.\n" +
    "`react-markdown` is 100% CommonMark (optionally GFM) compliant and has\n" +
    "extensions to support custom syntax.\n" +
    "\n" +
    "## Use\n" +
    "\n" +
    "A basic hello world:\n" +
    "\n" +
    "```jsx\n" +
    "import React from 'react'\n" +
    "import ReactMarkdown from 'react-markdown'\n" +
    "import {render} from 'react-dom'\n" +
    "\n" +
    "render(<ReactMarkdown># Hello, *world*!</ReactMarkdown>, document.body)\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<h1>\n" +
    "  Hello, <em>world</em>!\n" +
    "</h1>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "Here is an example using `require`s, passing the markdown as a string, and how\n" +
    "to use a plugin ([`remark-gfm`][gfm], which adds support for strikethrough,\n" +
    "tables, tasklists and URLs directly):\n" +
    "\n" +
    "```jsx\n" +
    "const React = require('react')\n" +
    "const ReactMarkdown = require('react-markdown')\n" +
    "const render = require('react-dom').render\n" +
    "const gfm = require('remark-gfm')\n" +
    "\n" +
    "const markdown = `Just a link: https://reactjs.com.`\n" +
    "\n" +
    "render(<ReactMarkdown plugins={[gfm]} children={markdown} />, document.body)\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<p>\n" +
    '  Just a link: <a href="https://reactjs.com">https://reactjs.com</a>.\n' +
    "</p>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "## API\n" +
    "\n" +
    "### `props`\n" +
    "\n" +
    "*   `children` (`string`, default: `''`)\\\n" +
    "    Markdown to parse\n" +
    "*   `className` (`string?`)\\\n" +
    "    Wrap the markdown in a `div` with this class name\n" +
    "*   `allowDangerousHtml` (`boolean`, default: `false`)\\\n" +
    "    This project is safe by default and escapes HTML.\n" +
    "    Use `allowDangerousHtml: true` to allow dangerous html instead.\n" +
    "    See [security][]\n" +
    "*   `skipHtml` (`boolean`, default: `false`)\\\n" +
    "    Ignore HTML in Markdown\n" +
    "*   `sourcePos` (`boolean`, default: `false`)\\\n" +
    "    Pass a prop to all renderers with a serialized position\n" +
    '    (`data-sourcepos="3:1-3:13"`)\n' +
    "*   `rawSourcePos` (`boolean`, default: `false`)\\\n" +
    "    Pass a prop to all renderers with their [position][]\n" +
    "    (`sourcePosition: {start: {line: 3, column: 1}, end:…}`)\n" +
    "*   `includeNodeIndex` (`boolean`, default: `false`)\\\n" +
    "    Pass [`index`][index] and `parentChildCount` in props to all renderers\n" +
    "*   `allowedTypes` (`Array.<string>`, default: list of all types)\\\n" +
    "    Node types to allow (can’t combine w/ `disallowedTypes`).\n" +
    "    All types are available at `ReactMarkdown.types`\n" +
    "*   `disallowedTypes` (`Array.<string>`, default: `[]`)\\\n" +
    "    Node types to disallow (can’t combine w/ `allowedTypes`)\n" +
    "*   `allowNode` (`(node, index, parent) => boolean?`, optional)\\\n" +
    "    Function called to check if a node is allowed (when truthy) or not.\n" +
    "    `allowedTypes` / `disallowedTypes` is used first!\n" +
    "*   `unwrapDisallowed` (`boolean`, default: `false`)\\\n" +
    "    Extract (unwrap) the children of not allowed nodes.\n" +
    "    By default, when `strong` is not allowed, it and it’s content is dropped,\n" +
    "    but with `unwrapDisallowed` the node itself is dropped but the content used\n" +
    "*   `linkTarget` (`string` or `(url, text, title) => string`, optional)\\\n" +
    '    Target to use on links (such as `_blank` for `<a target="_blank"…`)\n' +
    "*   `transformLinkUri` (`(uri) => string`, default:\n" +
    "    [`./uri-transformer.js`][uri], optional)\\\n" +
    "    URL to use for links.\n" +
    "    The default allows only `http`, `https`, `mailto`, and `tel`, and is\n" +
    "    available at `ReactMarkdown.uriTransformer`.\n" +
    "    Pass `null` to allow all URLs.\n" +
    "    See [security][]\n" +
    "*   `transformImageUri` (`(uri) => string`, default:\n" +
    "    [`./uri-transformer.js`][uri], optional)\\\n" +
    "    Same as `transformLinkUri` but for images\n" +
    "*   `renderers` (`Object.<Component>`, default: `{}`)\\\n" +
    "    Object mapping node types to React components.\n" +
    "    Merged with the default renderers (available at `ReactMarkdown.renderers`).\n" +
    "    Which props are passed varies based on the node\n" +
    "*   `plugins` (`Array.<Plugin>`, default: `[]`)\\\n" +
    "    List of [remark plugins][remark-plugins] to use.\n" +
    "    See the next section for examples on how to pass options\n" +
    "\n" +
    "## Examples\n" +
    "\n" +
    "### Use a plugin\n" +
    "\n" +
    "This example shows how to use a plugin.\n" +
    "In this case, [`remark-gfm`][gfm], which adds support for\n" +
    "strikethrough, tables, tasklists and URLs directly:\n" +
    "\n" +
    "```jsx\n" +
    "import React from 'react'\n" +
    "import ReactMarkdown from 'react-markdown'\n" +
    "import {render} from 'react-dom'\n" +
    "import gfm from 'remark-gfm'\n" +
    "\n" +
    "const markdown = `A paragraph with *emphasis* and **strong importance**.\n" +
    "\n" +
    "> A block quote with ~strikethrough~ and a URL: https://reactjs.org.\n" +
    "\n" +
    "* Lists\n" +
    "* [ ] todo\n" +
    "* [x] done\n" +
    "\n" +
    "A table:\n" +
    "\n" +
    "| a | b |\n" +
    "| - | - |\n" +
    "`\n" +
    "\n" +
    "render(<ReactMarkdown plugins={[gfm]} children={markdown} />, document.body)\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<>\n" +
    "  <p>\n" +
    "    A paragraph with <em>emphasis</em> and <strong>strong importance</strong>.\n" +
    "  </p>\n" +
    "  <blockquote>\n" +
    "    <p>\n" +
    "      A block quote with <del>strikethrough</del> and a URL:{' '}\n" +
    '      <a href="https://reactjs.org">https://reactjs.org</a>.\n' +
    "    </p>\n" +
    "  </blockquote>\n" +
    "  <ul>\n" +
    "    <li>Lists</li>\n" +
    "    <li>\n" +
    '      <input checked={false} readOnly={true} type="checkbox" /> todo\n' +
    "    </li>\n" +
    "    <li>\n" +
    '      <input checked={true} readOnly={true} type="checkbox" /> done\n' +
    "    </li>\n" +
    "  </ul>\n" +
    "  <p>A table:</p>\n" +
    "  <table>\n" +
    "    <thead>\n" +
    "      <tr>\n" +
    "        <td>a</td>\n" +
    "        <td>b</td>\n" +
    "      </tr>\n" +
    "    </thead>\n" +
    "  </table>\n" +
    "</>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "### Use a plugin with options\n" +
    "\n" +
    "This example shows how to use a plugin and give it options.\n" +
    "To do that, use an array with the plugin at the first place, and the options\n" +
    "second.\n" +
    "[`remark-gfm`][gfm] has an option to allow only double tildes for strikethrough:\n" +
    "\n" +
    "```jsx\n" +
    "import React from 'react'\n" +
    "import ReactMarkdown from 'react-markdown'\n" +
    "import {render} from 'react-dom'\n" +
    "import gfm from 'remark-gfm'\n" +
    "\n" +
    "render(\n" +
    "  <ReactMarkdown plugins={[[gfm, {singleTilde: false}]]}>\n" +
    "    This ~is not~ strikethrough, but ~~this is~~!\n" +
    "  </ReactMarkdown>,\n" +
    "  document.body\n" +
    ")\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<p>\n" +
    "  This ~is not~ strikethrough, but <del>this is</del>!\n" +
    "</p>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "### Use custom renderers (syntax highlight)\n" +
    "\n" +
    "This example shows how you can overwrite the normal handling of a node by\n" +
    "passing a renderer.\n" +
    "In this case, we apply syntax highlighting with the seriously super amazing\n" +
    "[`react-syntax-highlighter`][react-syntax-highlighter] by\n" +
    "[**@conorhastings**][conor]:\n" +
    "\n" +
    "```jsx\n" +
    "import React from 'react'\n" +
    "import ReactMarkdown from 'react-markdown'\n" +
    "import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'\n" +
    "import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'\n" +
    "import {render} from 'react-dom'\n" +
    "\n" +
    "const renderers = {\n" +
    "  code: ({language, value}) => {\n" +
    "    return <SyntaxHighlighter style={dark} language={language} children={value} />\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "// Did you know you can use tildes instead of backticks for code in markdown? ✨\n" +
    "const markdown = `Here is some JavaScript code:\n" +
    "\n" +
    "~~~js\n" +
    "console.log('It works!')\n" +
    "~~~\n" +
    "`\n" +
    "\n" +
    "render(<ReactMarkdown renderers={renderers} children={markdown} />, document.body)\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<>\n" +
    "  <p>Here is some JavaScript code:</p>\n" +
    '  <SyntaxHighlighter language="js" style={dark} children="console.log(\'It works!\')" />\n' +
    "</>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "### Use a plugin and custom renderers (math)\n" +
    "\n" +
    "This example shows how a syntax extension is used to support math in markdown\n" +
    "that adds new node types ([`remark-math`][math]), which are then handled by\n" +
    "renderers to use [`react-katex`][react-katex]:\n" +
    "\n" +
    "```jsx\n" +
    "import React from 'react'\n" +
    "import ReactMarkdown from 'react-markdown'\n" +
    "import {InlineMath, BlockMath} from 'react-katex'\n" +
    "import {render} from 'react-dom'\n" +
    "import math from 'remark-math'\n" +
    "import 'katex/dist/katex.min.css' // `react-katex` does not import the CSS for you\n" +
    "\n" +
    "const renderers = {\n" +
    "  inlineMath: ({value}) => <InlineMath math={value} />,\n" +
    "  math: ({value}) => <BlockMath math={value} />\n" +
    "}\n" +
    "\n" +
    "render(\n" +
    "  <ReactMarkdown\n" +
    "    plugins={[math]}\n" +
    "    renderers={renderers}\n" +
    "    children={`The lift coefficient ($C_L$) is a dimensionless coefficient.`}\n" +
    "  />,\n" +
    "  document.body\n" +
    ")\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<p>\n" +
    '  The lift coefficient (<InlineMath math="C_L" />) is a dimensionless coefficient.\n' +
    "</p>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "## Appendix A: HTML in markdown\n" +
    "\n" +
    "`react-markdown` typically escapes HTML (or ignores it, with `skipHtml`),\n" +
    "because it is dangerous and defeats the purpose of this library.\n" +
    "\n" +
    "However, if you are in a trusted environment (you trust the markdown), you can\n" +
    "`react-markdown/with-html`:\n" +
    "\n" +
    "```jsx\n" +
    "const React = require('react')\n" +
    "const ReactMarkdownWithHtml = require('react-markdown/with-html')\n" +
    "const render = require('react-dom').render\n" +
    "\n" +
    "const markdown = `\n" +
    'This Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">allowDangerousHtml</code> property to false.\n' +
    "`\n" +
    "\n" +
    "render(<ReactMarkdownWithHtml children={markdown} allowDangerousHtml />, document.body)\n" +
    "```\n" +
    "\n" +
    "<details>\n" +
    "<summary>Show equivalent JSX</summary>\n" +
    "\n" +
    "```jsx\n" +
    "<p>\n" +
    '  This Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require\n' +
    "  the <code>html-parser</code> AST plugin to be loaded, in addition to setting the{' '}\n" +
    '  <code className="prop">allowDangerousHtml</code> property to false.\n' +
    "</p>\n" +
    "```\n" +
    "\n" +
    "</details>\n" +
    "\n" +
    "If you want to specify options for the HTML parsing step, you can instead import\n" +
    "the extension directly:\n" +
    "\n" +
    "```jsx\n" +
    "const ReactMarkdown = require('react-markdown')\n" +
    "const htmlParser = require('react-markdown/plugins/html-parser')\n" +
    "\n" +
    "// For more info on the processing instructions, see\n" +
    "// <https://github.com/aknuds1/html-to-react#with-custom-processing-instructions>\n" +
    "const parseHtml = htmlParser({\n" +
    "  isValidNode: (node) => node.type !== 'script',\n" +
    "  processingInstructions: [\n" +
    "    /* ... */\n" +
    "  ]\n" +
    "})\n" +
    "\n" +
    "<ReactMarkdown astPlugins={[parseHtml]} allowDangerousHtml children={markdown} />\n" +
    "```\n" +
    "\n" +
    "## Appendix B: Node types\n" +
    "\n" +
    "The node types available by default are:\n" +
    "\n" +
    "*   `root` — Whole document\n" +
    "*   `text` — Text (`foo`)\n" +
    "*   `break` — Hard break (`<br>`)\n" +
    "*   `paragraph` — Paragraph (`<p>`)\n" +
    "*   `emphasis` — Emphasis (`<em>`)\n" +
    "*   `strong` — Strong (`<strong>`)\n" +
    "*   `thematicBreak` — Horizontal rule (`<hr>`)\n" +
    "*   `blockquote` — Block quote (`<blockquote>`)\n" +
    "*   `link` — Link (`<a>`)\n" +
    "*   `image` — Image (`<img>`)\n" +
    "*   `linkReference` — Link through a reference (`<a>`)\n" +
    "*   `imageReference` — Image through a reference (`<img>`)\n" +
    "*   `list` — List (`<ul>` or `<ol>`)\n" +
    "*   `listItem` — List item (`<li>`)\n" +
    "*   `definition` — Definition for a reference (not rendered)\n" +
    "*   `heading` — Heading (`<h1>` through `<h6>`)\n" +
    "*   `inlineCode` — Inline code (`<code>`)\n" +
    "*   `code` — Block of code (`<pre><code>`)\n" +
    "*   `html` — HTML node (Best-effort rendering)\n" +
    "*   `virtualHtml` — If `allowDangerousHtml` is not on and `skipHtml` is off, a\n" +
    "    naive HTML parser is used to support basic HTML\n" +
    "*   `parsedHtml` — If `allowDangerousHtml` is on, `skipHtml` is off, and\n" +
    "    `html-parser` is used, more advanced HTML is supported\n" +
    "\n" +
    "With [`remark-gfm`][gfm], the following are also available:\n" +
    "\n" +
    "*   `delete` — Delete text (`<del>`)\n" +
    "*   `table` — Table (`<table>`)\n" +
    "*   `tableHead` — Table head (`<thead>`)\n" +
    "*   `tableBody` — Table body (`<tbody>`)\n" +
    "*   `tableRow` — Table row (`<tr>`)\n" +
    "*   `tableCell` — Table cell (`<td>` or `<th>`)\n" +
    "\n" +
    "## Security\n" +
    "\n" +
    "Use of `react-markdown` is secure by default.\n" +
    "Overwriting `transformLinkUri` or `transformImageUri` to something insecure or\n" +
    "turning `allowDangerousHtml` on, will open you up to XSS vectors.\n" +
    "Furthermore, the `plugins` you use and `renderers` you write may be insecure.\n" +
    "\n" +
    "## Related\n" +
    "\n" +
    "*   [`MDX`](https://github.com/mdx-js/mdx)\n" +
    "    — JSX *in* markdown\n" +
    "*   [`remark-gfm`](https://github.com/remarkjs/remark-gfm)\n" +
    "    — Plugin for GitHub flavored markdown support\n" +
    "\n" +
    "## Contribute\n" +
    "\n" +
    "See [`contributing.md`][contributing] in [`remarkjs/.github`][health] for ways\n" +
    "to get started.\n" +
    "See [`support.md`][support] for ways to get help.\n" +
    "\n" +
    "This project has a [code of conduct][coc].\n" +
    "By interacting with this repository, organization, or community you agree to\n" +
    "abide by its terms.\n" +
    "\n" +
    "## License\n" +
    "\n" +
    "[MIT][license] © [Espen Hovlandsdal][author]\n" +
    "\n" +
    "[build-badge]: https://github.com/remarkjs/react-markdown/workflows/main/badge.svg\n" +
    "\n" +
    "[build]: https://github.com/remarkjs/react-markdown/actions\n" +
    "\n" +
    "[coverage-badge]: https://img.shields.io/codecov/c/github/remarkjs/react-markdown.svg\n" +
    "\n" +
    "[coverage]: https://codecov.io/github/remarkjs/react-markdown\n" +
    "\n" +
    "[downloads-badge]: https://img.shields.io/npm/dm/react-markdown.svg\n" +
    "\n" +
    "[downloads]: https://www.npmjs.com/package/react-markdown\n" +
    "\n" +
    "[size-badge]: https://img.shields.io/bundlephobia/minzip/react-markdown.svg\n" +
    "\n" +
    "[size]: https://bundlephobia.com/result?p=react-markdown\n" +
    "\n" +
    "[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg\n" +
    "\n" +
    "[backers-badge]: https://opencollective.com/unified/backers/badge.svg\n" +
    "\n" +
    "[collective]: https://opencollective.com/unified\n" +
    "\n" +
    "[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg\n" +
    "\n" +
    "[chat]: https://github.com/remarkjs/remark/discussions\n" +
    "\n" +
    "[npm]: https://docs.npmjs.com/cli/install\n" +
    "\n" +
    "[health]: https://github.com/remarkjs/.github\n" +
    "\n" +
    "[contributing]: https://github.com/remarkjs/.github/blob/HEAD/contributing.md\n" +
    "\n" +
    "[support]: https://github.com/remarkjs/.github/blob/HEAD/support.md\n" +
    "\n" +
    "[coc]: https://github.com/remarkjs/.github/blob/HEAD/code-of-conduct.md\n" +
    "\n" +
    "[license]: license\n" +
    "\n" +
    "[author]: https://espen.codes/\n" +
    "\n" +
    "[remark]: https://github.com/remarkjs/remark\n" +
    "\n" +
    "[demo]: https://remarkjs.github.io/react-markdown/\n" +
    "\n" +
    "[learn]: https://commonmark.org/help/\n" +
    "\n" +
    "[position]: https://github.com/syntax-tree/unist#position\n" +
    "\n" +
    "[index]: https://github.com/syntax-tree/unist#index\n" +
    "\n" +
    "[gfm]: https://github.com/remarkjs/remark-gfm\n" +
    "\n" +
    "[math]: https://github.com/remarkjs/remark-math\n" +
    "\n" +
    "[remark-plugins]: https://github.com/remarkjs/remark/blob/main/doc/plugins.md#list-of-plugins\n" +
    "\n" +
    "[uri]: https://github.com/remarkjs/react-markdown/blob/v5/src/uri-transformer.js\n" +
    "\n" +
    "[security]: #security\n" +
    "\n" +
    "[react-katex]: https://github.com/talyssonoc/react-katex\n" +
    "\n" +
    "[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter\n" +
    "\n" +
    "[conor]: https://github.com/conorhastings\n",
};
