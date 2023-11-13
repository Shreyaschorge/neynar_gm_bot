import cron from "node-cron";
import { AxiosError } from "axios";
import { MESSAGE } from "./utils";
import neynarClient from "./neynarClient";
import {
  PUBLISH_CAST_TIME,
  SIGNER_UUID,
  TIME_ZONE,
  NEYNAR_API_KEY,
} from "./config";

if (!SIGNER_UUID) {
  throw new Error("SIGNER_UUID is not defined");
}

if (!NEYNAR_API_KEY) {
  throw new Error("NEYNAR_API_KEY is not defined");
}

const publishCast = async (msg: string) => {
  try {
    await neynarClient.publishCast(SIGNER_UUID, msg);
    console.log("Cast published successfully");
  } catch (error) {
    console.log((error as AxiosError).response?.data || (error as Error));
  }
};

publishCast("Hello from Shreyas's GM Bot! I'm here to brighten your day with daily cheer. Look forward to a warm 'GM' everyday!");

const [hour, minute] = PUBLISH_CAST_TIME.split(":");

cron.schedule(
  `${minute} ${hour} * * *`,
  function () {
    publishCast(MESSAGE);
  },
  {
    scheduled: true,
    timezone: TIME_ZONE,
  }
);

console.log(
  `Cron job scheduled at ${PUBLISH_CAST_TIME} ${TIME_ZONE}, please don't restart your system before the scheduled time.`
);
