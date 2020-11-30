import React from "react";
import { FooterLinks } from "./FooterLinks";

export default {
  title: "Components/Molecules/FooterLinks",
  component: FooterLinks,
  decorators: [
    (Story) => (
      <div className="w-full h-48 flex flex-col justify-center items-center bg-footer-blue bg-footer-parliament-image bg-no-repeat bg-right-bottom text-white">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <FooterLinks {...args} />;

export const Primary = Template.bind({});

Primary.args = {
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
