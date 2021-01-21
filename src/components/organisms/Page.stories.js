import React, { useEffect } from "react";
import { Page } from "./Page";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import "./../../i18n";

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
  title: "Components/Organisms/Page",
  component: Page,
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

const Template = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "content",
};
