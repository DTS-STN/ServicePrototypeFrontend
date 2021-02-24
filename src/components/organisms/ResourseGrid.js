import React from "react";
import { ResourceCardArticle } from "../molecules/ResourceCardArticle";
import imagePlaceHolder from "../../assets/images/imagePlaceholder.svg";

/**
 * Resource Grid
 */

export function ResourceGrid() {
  const resourceList = [
    { title: "first title", content: "my content" },
    { title: " second title", content: "my content 2" },
  ];
  const resourceArticles = [];
  for (let i = 0; i < resourceList.length; i++) {
    const item = resourceList[i];
    resourceArticles.push(
      <ResourceCardArticle
        articleImage={imagePlaceHolder}
        title={item.title}
        content={item.content}
        key={item.title}
      />
    );
  }
  return (
    <div className="w-full mt-8 flex flex-col">
      <p className="text-xl font-bold">Recommended Resources</p>
      <div className="flex flex-row">{resourceArticles}</div>
    </div>
  );
}
