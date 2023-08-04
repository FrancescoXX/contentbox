# ContentBox

The organized solution for Content Creators.

## Core idea

If you are an active content creator, probably you have many pieces of content. 

The problem is that you have to manage them in different places, and it's hard to keep track of them. 

ContentBox is a solution to this problem. It's a place where you can store all your content, and it's easy to manage.

you can add content from different sources, and you can search for them easily (search will be integrated with Algolia).

## Tech Stack

- Docusaurus
- React
- JavaScript
- Algolia (search)

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
