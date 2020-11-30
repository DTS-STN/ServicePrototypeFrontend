import React from "react";
import { FooterBox } from "./FooterBox";

export default {
  title: "Components/Molecules/FooterBox",
  component: FooterBox,
};
const Template = (args) => <FooterBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "some text",
  privacyLink: "https://www.canada.ca/en/transparency/privacy.html",
  privacyText: "Privacy",
  contactLink: "https://www.canada.ca/en/transparency/terms.html",
  contactText: "Contact information",
  termsAndConditionsLink: "https://www.canada.ca/en/transparency/terms.html",
  termsAndConditionsText: "Terms and conditions",
  footerCanadaCaAltText: "Canada.ca logo",
};
