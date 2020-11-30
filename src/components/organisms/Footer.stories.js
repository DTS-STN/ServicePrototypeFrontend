import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Components/Organisms/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  privacyLink: "https://www.canada.ca/en/transparency/privacy.html",
  privacyText: "Privacy",
  contactLink: "https://www.canada.ca/en/transparency/terms.html",
  contactText: "Contact information",
  termsAndConditionsLink: "https://www.canada.ca/en/transparency/terms.html",
  termsAndConditionsText: "Terms and conditions",
  footerCanadaCaAltText: "Canada.ca logo",
  links: [
    {
      link: "https://some-link-1.com",
      linkText: "some-link-1",
    },
    {
      link: "https://some-link-2.com",
      linkText: "some-lin-2",
    },
    {
      link: "https://some-link-3.com",
      linkText: "some-link-3",
    },
    {
      link: "https://some-link-4.com",
      linkText: "some-link-4",
    },
    {
      link: "https://some-link-5.com",
      linkText: "some-link-5",
    },
    {
      link: "https://some-link-6.com",
      linkText: "some-link-6",
    },
    {
      link: "https://some-link-7.com",
      linkText: "some-link-7",
    },
    {
      link: "https://some-link-8.com",
      linkText: "some-link-8",
    },
  ],
};
