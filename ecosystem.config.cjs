module.exports = {
  apps: [
    {
      name: "neynar-gm-bot",
      script: "./dist/app.js",
      instances: 1,
      exec_mode: "fork",
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
        interval: 5000,
        ignoreInitial: true,
      },
    },
  ],
};
