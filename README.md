# GitHub Example

[![](https://img.shields.io/badge/Node.js-13.8.0-yellowgreen.svg)](https://nodejs.org/en/) [![](https://img.shields.io/badge/LICENSE-MIT-red.svg)](./LICENSE) [![](https://img.shields.io/badge/octokit-rest.js-black.svg)](https://octokit.github.io/rest.js/v17/) [![](https://img.shields.io/badge/octokit-authApp.js-black.svg)](https://github.com/octokit/auth-app.js)

NodeJS implementation.

## How to Setup and Run

```Bash
$ npm i
$ npm run example
```

You'll see:

```Bash
Authentication succeeded: {"type":"token","token":"sgre....","tokenType":"oauth"}

Token acquired: "awewewe..."

Client initialized: {"log":{},"actions":{},"activity":{},"apps":{},"checks":{},"codesOfConduct":{},"emojis":{},"gists":{},"git":{},"gitignore":{},"interactions":{},"issues":{},"licenses":{},"markdown":{},"meta":{},"migrations":{},"orgs":{},"projects":{},"pulls":{},"rateLimit":{},"reactions":{},"repos":{},"search":{},"teams":{},"users":{}}!

Member invited!

Example complete! Please check https://github.com/orgs/:org/people/pending_invitations

Service shutting down: 0
```

## APIs

API endpoints used:

1. [auth/#via-oauth-and-personal-access-tokens](https://developer.github.com/v3/auth/#via-oauth-and-personal-access-tokens)
1. [orgs/members#add-a-member](https://developer.github.com/v3/orgs/members/#add-a-member)

## SDK

All corresponding JS methods are provided through the handy [@octokit](https://github.com/octokit/rest.js) SDK:

1. [octokit/auth-token.js](https://github.com/octokit/auth-token.js)
1. [rest.js/v17#orgs-create-invitation](https://octokit.github.io/rest.js/v17#orgs-create-invitation)

> They live in [/helpers/github.js](/helpers/github.js) within this codebase.

## License

[MIT Licensed](https://opensource.org/licenses/MIT) - [view the license](LICENSE.md).