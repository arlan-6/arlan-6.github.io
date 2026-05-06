# Arlan Portfolio

Personal portfolio for Alibay Arlan Akhanuly, built with Next.js, React, TypeScript, Tailwind CSS, and shadcn-style UI primitives.

Live site:

```txt
https://arlan-6.github.io/
```

## Features

- Responsive single-page portfolio
- Profile sidebar with contacts, social links, skills, and languages
- Education and project sections
- Expandable project details with GitHub links
- Interactive bottom contact section for Telegram/email messages
- Static export configured for GitHub Pages

## Development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Useful Commands

Type-check:

```bash
npx tsc --noEmit
```

Lint:

```bash
npm run lint
```

Build static export:

```bash
npm run build
```

The static site is generated into the `out/` directory.

## Project Structure

```txt
app/                         Next.js app entry
components/portfolio/        Portfolio sections and layout components
components/ui/               Shared UI primitives
lib/cv-data.ts               Portfolio content and CV data
.github/workflows/deploy.yml GitHub Pages deployment workflow
```

## Deployment

This repository is configured for GitHub Pages as a user site:

```txt
arlan-6.github.io
```

Deployment runs automatically through GitHub Actions when changes are pushed to `main`.

To deploy:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

In GitHub repository settings, set:

```txt
Settings -> Pages -> Source -> GitHub Actions
```

After the workflow succeeds, the site is available at:

```txt
https://arlan-6.github.io/
```
