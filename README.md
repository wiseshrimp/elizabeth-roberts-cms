# ERA CMS

![](https://media.licdn.com/dms/image/v2/C4D0BAQHmjUSDHrgDAA/company-logo_200_200/company-logo_200_200/0/1630570108503/elizabeth_roberts_architecture_design_logo?e=2147483647&v=beta&t=W3y0as1nUevdNYe1uPIYjArrq9eeK1uOxU7s7pw5izg)

A custom Sanity Studio CMS for managing the [Elizabeth Roberts website content](http://elizabethroberts.com 'Elizabeth Roberts website content'), codebase at [this repo](https://github.com/elizabethrobertsarchitects/elizabeth-roberts?tab=readme-ov-file 'this repo').

## Getting Started

### Prerequisites

- Node.js 20+ (use `.nvmrc`)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
nvm use
npm run dev
```

The studio will be available at `http://localhost:3333`

### Environment Variables

Create a `.env` file in the root directory:

```env
BASE_URL=https://elizabethroberts.netlify.app
```

## Available Scripts

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm run dev`            | Start development server         |
| `npm run build`          | Build for production             |
| `npm run deploy`         | Deploy to Sanity's hosted studio |
| `npm run deploy-graphql` | Deploy GraphQL API               |

## Content Structure

### Documents

- **Homepage** - Main landing page with modular content blocks
- **Projects** - Portfolio projects with galleries, descriptions, and metadata
- **Objects** - Standalone object/product items
- **Studio** - About/studio page content
- **Jobs** - Job listings (orderable via drag-and-drop)
- **Contact** - Contact page information

### Settings

- **Navigation** - Site navigation configuration
- **Project Settings** - Project filtering options and display settings

## Features

### Plugins

- **Vision** - GROQ query testing tool
- **Media** - Advanced media library for managing assets
- **Tags** - Multi-tag input with autocomplete
- **Orderable Document List** - Drag-and-drop ordering for Projects and Jobs

### Custom Actions

- **Preview Draft** - Preview unpublished changes on the frontend
- **Preview Published** - Preview the live published version
- **Unpublish** - Remove from live site while keeping as draft

## Deployment

### Sanity Hosted Studio

```bash
npm run deploy
```

### Netlify

| Setting           | Value           |
| ----------------- | --------------- |
| Build command     | `npm run build` |
| Publish directory | `dist`          |
| Node version      | `20`            |

## Project Info

- **Project ID**: `i9b4x4a0`
- **Dataset**: `production`
- **Frontend URL**: https://elizabethroberts.netlify.app

## Querying Content

Use GROQ to query content. Example for ordered projects:

```groq
*[_type == "project"] | order(orderRank) {
  title,
  slug,
  mainImage,
  projectType
}
```

Example for ordered jobs:

```groq
*[_type == "jobPage"] | order(orderRank) {
  title,
  slug,
  description
}
```

## Schema Overview

```
schemas/
├── documents/          # Main document types
│   ├── project.ts      # Portfolio projects
│   ├── objectItem.ts   # Object items
│   ├── job.ts          # Job listings
│   └── pages/          # Singleton pages
├── types/              # Reusable object types
│   ├── customImage.ts  # Image with hotspot & caption
│   ├── galleryImage.ts # Gallery image with optional reference
│   ├── textEditor.ts   # Rich text editor
│   └── ...
└── reusables/          # Shared field definitions
    └── slug.ts         # URL slug field
```

## Deploy

Automatically pushing to main will deploy changes via automatic deploy setup with Netlify.
