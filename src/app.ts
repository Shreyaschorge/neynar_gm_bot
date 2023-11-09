import cron from "node-cron";
import dotenv from "dotenv";
import { NeynarAPIClient } from "@neynar/nodejs-sdk";
import { AxiosError } from "axios";
dotenv.config();

const neynarClient = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);

const emoji = [
  "☀️",
  "🌅",
  "🥞",
  "🌅​🐦​🪱",
  "🌅​🐦🐛",
  "☀️⬆️👀",
  "👦🚿☀️",
  "👩🚿☀️",
  "🏃👟☀️",
  "🏃🛌🌅",
  "⛱️🚶🌅",
  "🌅​🙆‍♀️​📷​",
  "🌞🤳",
  "☀️​​☕​➡️️​😋",
  "🍵​☀️",
  "​☕​☀️",
  "🍩​☕​🌅",
  "⚡​☕​​🌅 ",
  "🥞​🍳​☀️",
  "☕️​🥞🥐​​🌅​",
  "🍫​🥞​🥛🧒☀️",
];

const getEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emoji.length);
  return emoji[randomIndex];
};

const MESSAGE = `Good morning... ${getEmoji()}`;

const publishCast = () => {
  try {
    neynarClient.publishCast(process.env.SIGNER_UUID!, MESSAGE);
    console.log("Cast published successfully");
  } catch (error) {
    console.log((error as AxiosError).response?.data || (error as Error));
  }
};

const publishCastTime = process.env.PUBLISH_CAST_TIME! || '09:00';

const [hour, minute] = publishCastTime.split(":");

cron.schedule(
  `${minute} ${hour} * * *`,
  function () {
    publishCast();
  },
  {
    scheduled: true,
    timezone: process.env.TIME_ZONE,
  }
);

