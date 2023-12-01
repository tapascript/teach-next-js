This is a [Next.js](https://nextjs.org/) project aim to teach by adding the important functionalities of Next.js and demonstrate them in the [tapasScript YouTube channel](https://youtube.com/@tapasadhikary).

The project also includes a JSON-Server to demonstrate Server Actions.

## Getting Started

First, run the Next.js project in the development server:

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Run the JSON Server

Open a Terminal and,

- Browse to the `src/server` folder.
- Run `npm install -g json-server`
- `yarn install`
- Run the server locally with the following command:

```bash
json-server --watch data/todos.json --port 3001
```
- The server will run on `http://localhost:3001/tasks`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Playlist on tapaScript](https://www.youtube.com/watch?v=VSB2h7mVhPg&list=PLIJrr73KDmRwz_7QUvQ9Az82aDM9I8L_8) - Learn about Next.js features and API with practical knowledge and programming.
- [Dynamic routes recipes from Next.js App Router](https://blog.greenroots.info/dynamic-routes-nextjs-app-router) - Learn about dynamic routes and other routing essentials from the Next.js App Router in a beginner-friendly way, with many code examples and visuals.
- [Understanding Next.js Server Actions With Examples](https://blog.greenroots.info/understanding-nextjs-server-actions-with-examples) - React Server Components are a game changer. Learn Server Actions with Server Components in Next.js with many examples.