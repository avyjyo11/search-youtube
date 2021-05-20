import axios from "axios";
import { API_KEY } from "../config";

export const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  headers: {
    Accept: "application/json",
  },
  params: {
    key: API_KEY,
    part: "snippet",
    maxResults: 11,
  },
});
