import React from "react";
import { useTranslation } from "react-i18next";
import { ActionButton } from "../components/atoms/ActionButton";
import { PageDescription } from "../components/atoms/PageDescription";
import { Title } from "../components/atoms/Title";

export function Home() {
  const { t } = useTranslation();
  return (
    <div className="font-sans">
      <div className="m-auto pl-8">
        <Title>{t("homePageTitle")}</Title>
      </div>
      <div className="text-2xl m-auto p-6 leading-none">
        <PageDescription>{t("pageDescription")}</PageDescription>
      </div>
      <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-blue-700 leading-tight">
            Tailwind and Create React App
          </h1>
          <p className="text-base text-gray-700 leading-normal">
            Building apps together
          </p>
          <ActionButton text={"Hello!"} />
        </div>
      </div>
    </div>
  );
}
