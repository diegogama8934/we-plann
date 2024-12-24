This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


### Folder structure


## Components

This folder is dedicated to have all components that will be used in the Application.

> There is an index.ts file that is dedicated to export all the Components of the folder, in order to import all the components from this file when we need someone in the pages or other components.

- Core Components

  Core Components are dedicated to show and have the logic of the ui of the application itself. Core components don´t have to be rendered in landing page, for example, because they are dedicated to build the UI of the core aplication.

- Presentation Components

  Presentation Components are dedicated to show and have the logic of the onboarding section of the product, this must include the components of login and signup.

- Tremor Chart

  For the functional requirements of the products, is needed to use Charts in order to show data in a comfortable UI view. So the project will use Tremor Charts to show that data. **This folder must not be changed**.

## Hooks

## Interfaces

## Querys

## ui

## Utils