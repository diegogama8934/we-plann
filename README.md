# We plan

We plan is a Software solution that let families or partners to organize their finances by taking control the earnings and losses of the money and how they decide to distribute them.

## Technical Tools

- Next JS is the framework used to bootstrap the project.

  [Next JS Documentation](https://nextjs.org)

- Tailwind CSS is the CSS framework used to style the entire application.

  [Tailwind CSS Documentation](https://tailwindcss.com/)

- Typscript is the languaje decided to develop the project.

  [Typescript Documentation](https://www.typescriptlang.org/)

- PostgreSQL will be the database of the project.

  [PostgreSQL Documentation](https://www.postgresql.org/)

- AWS Amplify will be the responsable to the CI/CD process.

  [AWS Amplify Documentation](https://aws.amazon.com/es/amplify)

- Prisma will be the ORM to interact with the database.

  [Prisma Documentation](https://www.prisma.io/)

## Getting Started

After you clone the project

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In the future, this part will have the steps to setup the database.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Folder structure

The folder structure described in the following are the main folders of the project, they will always exist. In case the project come bigger, this folder structure can change internally. For example, components project can be divided in more folders than the current ones but it never must be deleted.


### Components

This folder is dedicated to have all components that will be used in the Application.

> There is an index.ts file that is dedicated to export all the Components of the folder, in order to import all the components from this file when we need someone in the pages or other components.

- Core Components

  Core Components are dedicated to show and have the logic of the ui of the application itself. Core components don´t have to be rendered in landing page, for example, because they are dedicated to build the UI of the core aplication.

- Presentation Components

  Presentation Components are dedicated to show and have the logic of the onboarding section of the product, this must include the components of login and signup.

- Tremor Chart

  For the functional requirements of the products, is needed to use Charts in order to show data in a comfortable UI view. So the project will use Tremor Charts to show that data. **This folder must not be changed**.

***

### Hooks

When it is complex logic inside components to handle its behavior, the hooks folder can wrap the logic and export it to the component in order to keep the components reading the clearist posible.

> An index.ts file will be a direct child of the hooks folder. This file is the responsible to export all the hooks inside the folder. The reason of this is to keep the imporatation in the components only to one place (the index.ts)

- useOnWindowResize.ts

  This file is used by Tremor Chart to work itself. **This file must not be deleted or modified**

***

### Interfaces

In order to keep the components and constants with common structure, interfaces folder is dedicated to keep the types in one place and share it along the entire folders of the project. Some details about the interfaces folder:

> As every main folder will work in the project, the file index.ts will be the responsible to export the interfaces along the entire app. This help to keep the importation in constants and components only from one file and if the structure of the folders change the only refactorized file will be that index.ts.

### Querys

***

### UI

***

### Utils