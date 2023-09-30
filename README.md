# Simple Blog App

This is a basic blog app that allows users to create, read, update, and delete blog posts. It provides a straightforward platform for sharing your thoughts and ideas with others. The app is built using technologies such as Next.js, Mongodb Atlas, Prisma, and Firebase, making it easy to get started and customize according to your needs.

## Features

- **Create:** Write and publish new blog posts.
- **Read:** Browse and view existing blog posts.
- **Update:** Edit and update your blog posts as needed.
- **Delete:** Remove unwanted blog posts.

## Contribution

Contributions are welcome! If you have any improvements or suggestions for this app, please [create an issue](https://github.com/GrantLicata/Blog/issues) or [submit a pull request](https://github.com/GrantLicata/Blog/pulls). We appreciate your help in making this app even better.

## Local Setup

If you have cloned this project, you will want to run the following commands in your terminal or multiplexer to properly setup the local development environment.

Install all packages associated with the project.

    npm install

Initialize the development server for Next.

    npm run dev

Initialize the prisma studio GUI.

    npx prisma studio

If schema is modified then update using the following.

    npx prisma generate
