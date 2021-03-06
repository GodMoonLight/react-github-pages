const host = window.location.hostname;
let user = process.env.USER_NAME;

if (host.trim()
  .endsWith('.github.io')) {
  [user] = host.toString()
    .split('.');
}
const USER_NAME = user;

const PAGE_SIZE = 10;
const BASE_URL = 'https://api.github.com';

// not use deconstruction, the bug of dotenv
const USER_AVATAR = process.env.AVATAR;
const title = process.env.TITLE;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const REPO = USER_NAME.concat('.github.io');

const DESCRIPTION = '## Introduction\n'
  + '\n'
  + 'Blog is based on GitHub Pages and GitHub API, implementation no backend, dynamically publish blog system.\n'
  + 'The data is  stored in the GitHub Gists and  add and update by GitHub API .\n'
  + 'Leave your stars if you like. \n╭(●｀∀´●)╯╰(●’◡’●)╮\n'
  + '\n'
  + '## Demo\n'
  + '\n'
  + '[https://godmoonlight.github.io/](https://godmoonlight.github.io/)\n'
  + '\n'
  + '\n'
  + '## Feature\n'
  + '\n'
  + '   - [x]  Based on GitHub Pages, no backend\n'
  + '   - [x]  dynamically publish blog \n'
  + '   - [x]  Single Page Application\n'
  + '\n'
  + '\n'
  + '## Use Quickly\n'
  + '\n'
  + '\n'
  + 'Click the "`+`" next GitHub avatar, choice ` Import repository`,\n'
  + 'fill `https://github.com/GodMoonLight/godmoonlight.github.io.git ` as clone URL,\n'
  + 'fill `yourGitHubName.github.io` as repository name.\n'
  + '\n'
  + '\n'
  + 'Now `https://yourGitHubName.github.io` is your blog.\n'
  + '\n'
  + 'e.g.\n'
  + '```\n'
  + 'https://godmoonlight.github.io\n'
  + '```\n'
  + '\n'
  + '#### get Token\n'
  + '\n'
  + '`github` > `settings` > `Developer settings` > `Personal access tokens` check `gist` permission to get a new Token\n'
  + '\n'
  + '#### set Token\n'
  + '\n'
  + 'In you Blog, click the you avatar in the nav, the click `Setting` to the Setting Page to add Token.\n'
  + '\n'
  + '### Development\n'
  + '\n'
  + '[https://github.com/GodMoonLight/react-github-pages](https://github.com/GodMoonLight/react-github-pages).\n'
  + '\n';

export {
  BASE_URL,
  USER_NAME,
  USER_AVATAR,
  PAGE_SIZE,
  DESCRIPTION,
  title as TITLE,
  REPO,
  clientId as CLIENT_ID,
  clientSecret as CLIENT_SECRET,
};
