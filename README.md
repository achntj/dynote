# DYNOTE

Dynote is a fast and lightweight note taking tool written in TypeScript. It is built for everyone- from developers to someone with no code experience. Rather than typing markdown in your code-editor, Dynote allows you to do it in the Browser, while in development.

## Setup

- Forking this repository makes it much easier. However, incase you want to start from cloning, follow along-

- Clone this repository.

```shell
git clone https://github.com/achintyajha/dynote.git dynote-notes
```

- Install all dependencies

```shell
    cd dynote-notes
    npm i
```

- Setup a cloud-based heroku postgres server.

Follow this guide: <https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1>

Add the database URL to your .env file. (Rename .env.example to .env)

- Push changes to the database

```shell
    npx prisma db push
```

- Start the development server

```shell
    npm run dev
```

Great! This was just a one-time setup. Now you can start writing from the 'New Post' option. For configuration, you can change the name and description on the home page through the `config.json` file.

Now create a new github repository and add it as a remote repository to this project. Once you push the changes, deployment is easy with vercel.

## Deployment

- Login to Vercel and create a new project with your github repository. Add the Database URL (that you added in the .env file) to the vercel environment variables. That's it, your project is now available online!

