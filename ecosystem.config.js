module.exports = {
  apps: [
    {
      name: "neynar-gm-bot",
      script: "./dist/app.js",
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: ["node_modules", ".git", "dist/*.map"],
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      watch_options: {
        followSymlinks: false,
        usePolling: true,
        interval: 5000, // Check for changes every 10 seconds to avoid rapid restarts
        ignoreInitial: true,
      },
    },
  ],
};
