import axios from "axios";
import { DragontailVersion, VERSIONS_URL } from "./dragontail";

export const getLatestVersion = async (): Promise<DragontailVersion> => {
  return axios
    .get(VERSIONS_URL)
    .catch((err) =>
      Promise.reject("Failed to fetch data dragon versions" + String(err))
    )
    .then((resp) => {
      if (!resp)
        return Promise.reject(
          "Got void response from data dragon version endpoint"
        );

      return resp.data[0];
    });
};
