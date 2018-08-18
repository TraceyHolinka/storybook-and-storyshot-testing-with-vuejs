#Frontend

## Features

- Server Side Rendering
- Vue + vue-router + vue-stash working together
- Server-side data pre-fetching
- Client-side state & DOM hydration
- Automatically inlines CSS used by rendered components only
- Single-file Vue Components
- Hot-reload in development
- CSS extraction for production

## Requirements

- Node v8+

## Documentation

- [Vue 2.0](https://vuejs.org/v2/guide/)
- [Vue Router](https://router.vuejs.org/en/essentials/getting-started.html)
- [Vue Apollo](https://github.com/Akryum/vue-apollo)

## Plugins

### VSCode

- Vetur
- GraphicQL for VSCode
- PostCSS syntax
- Jest
- ESlint
- Prettier

### Chrome

- [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Apollo devtools](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm)

## Build Setup

Install dependencies

```bash
yarn install
yarn run dev
```

Serve with hot reload at localhost:8080

## Run StoryShot Tests

In a new tab/window run storybook

```bash
yarn run storybook
```

In a different tabe/window run snapshot tests

```bash
yarn run storyshots
```
