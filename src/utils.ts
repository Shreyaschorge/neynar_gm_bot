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

export const MESSAGE = `Good morning... ${getEmoji()}`;
