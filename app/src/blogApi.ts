import { resolve } from "path";
import { Article } from "./app/types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" }); // SSR (cache: no-storeでSSRになる)
  if (!res.ok) {
    throw new Error("error error");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await res.json();
  return articles;
};
