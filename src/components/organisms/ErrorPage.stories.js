import React, { useEffect } from "react";
import { ErrorPage } from "./ErrorPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../../redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./../../i18n";
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
  title: "Components/Organisms/ErrorPage",
  component: ErrorPage,
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

const Template = (args) => <ErrorPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  errorTitle: "Some Error",
  error: {
    error: "error",
  },
};

export const WithString = Template.bind({});
WithString.args = {
  errorTitle: "Some Error",
  error:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
