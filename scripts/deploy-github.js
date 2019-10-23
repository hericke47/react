const ghpages = require("gh-pages");

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/hericke47/hericke47.git"
  },
  () => {
    console.log("Deploy Complete!");
  }
);
