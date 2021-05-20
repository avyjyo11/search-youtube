import { youtube } from "./axios";

export async function search(params = {}) {
  const {
    data: { items = [] },
  } = await youtube.get("/search", { params });

  return items;
}
