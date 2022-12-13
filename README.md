# NextJS + Supabase + Tailwind template (In Progress)

- TODO: Add supabase

This template is directly based on [Alex Eagleson's](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7) template tutorial. You can view his step-by-step guide [here](https://www.youtube.com/watch?v=Iu5aZDqZt8E)

## Basic

- Must use node >= 14.0.0

- npm as a package manager

## Code Formatting

- Using mostly defaults by prettier, check `.prettierrc` for more information

- eslint

## Git Hooks

- Using [Husky](https://typicode.github.io/husky/#/?id=automatic-recommended) to run lint on commit and run build on push.

- Using [commitlint](https://commitlint.js.org/#/) to enforce commit convetion ([subject]:[message]). ex. (`feat: added widget`).

  - For list of subjects check `commitlint.config.js` which uses default configuration from [commitlint](https://commitlint.js.org/#/)
