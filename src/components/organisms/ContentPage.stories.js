import React, { useEffect } from "react";
import { ContentPage } from "./ContentPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../redux/reducers";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./../../i18n";
import { composeWithDevTools } from "redux-devtools-extension";
import { ReactKeycloakProvider } from "@react-keycloak/web";

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

const keycloak = {
  init: () => {
    return Promise.resolve({});
  },
  login: () => {},
  logout: () => {},
};

export default {
  title: "Components/Organisms/ContentPage",
  component: ContentPage,
  decorators: [
    (Story) => {
      return (
        <ReactKeycloakProvider authClient={keycloak}>
          <Provider store={createStore(rootReducer, composeWithDevTools())}>
            <Wrapper>
              <Story />
            </Wrapper>
          </Provider>
        </ReactKeycloakProvider>
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
