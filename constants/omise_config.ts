import Omise from "omise-react-native";
import {
  OMISE_API,
  OMISE_PUBLIC_KEY,
  OMISE_SECRET_KEY,
  OMISE_USER_AGENT_NAME,
  OMISE_USER_AGENT_VERSION,
} from "@env";
import { ChargePropType } from "@/types/PropTypes";
import base64 from "base-64";

Omise.config(OMISE_PUBLIC_KEY, OMISE_SECRET_KEY, "2017-11-12");

export default Omise;

export const createCharge = (data: ChargePropType) => {
  return new Promise((resolve, reject) => {
    return fetch(`${OMISE_API}/charges`, {
      method: "POST",
      cache: "no-cache",
      headers: {
        Authorization: "Basic " + base64.encode(OMISE_SECRET_KEY + ":"),
        "User-Agent": OMISE_USER_AGENT_NAME + "/" + OMISE_USER_AGENT_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok && response.status === 200) {
          resolve(response.json());
        } else {
          // console.log("response not ok", response);
          reject(response.json());
        }
      })
      .catch((error) => {
        resolve(JSON.stringify(error));
      });
  });
};