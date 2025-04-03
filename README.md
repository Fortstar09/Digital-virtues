# Digital Virtues GmbH Homepage

This is the official website for Digital Virtues GmbH, built with SvelteKit and Svelte 5.

## Development

### Prerequisites

- Install [Node Version Manager](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- Install recent Node version: `nvm install v20.16.0`
- Install dependencies: `npm install`

### Start Development Server

`npm run dev -- --open`

### Test Build

```sh
npm run build
npm run preview
```

## Deployment

Just commit your changes, GitLab automation will take care of everything.

## Technology Stack

- **Framework**: SvelteKit with Svelte 5
- **Styling**: SASS (with a preference for Vanilla CSS features where possible)
- **Content**: MDsveX for markdown content
- **Build Tool**: Vite
- **Testing**: Playwright for integration tests, Vitest for unit tests

## TODO

- https://www.youtube.com/watch?v=eWmDW4zEXt4
- https://rodneylab.com/sveltekit-seo/#twitter-cards
- Create reusable Digital Virtues Organization Object
    - https://schema.org/Organization
- Test & Refine Rich Microdata
    - https://search.google.com/test/rich-results
    - https://validator.schema.org/
