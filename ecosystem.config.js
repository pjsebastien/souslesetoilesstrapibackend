module.exports = {
  apps: [
    {
      script: "server.js",
      watch: ".",
    },
  ],

  deploy: {
    production: {
      user: "ubuntu",
      host: "141.95.159.91",
      ref: "origin/main",
      repo: "https://github.com/pjsebastien/souslesetoilesstrapibackend.git",
      path: "/home/ubuntu/sites",
      "pre-deploy-local": "",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env",
      "pre-setup": "",
    },
  },
};
