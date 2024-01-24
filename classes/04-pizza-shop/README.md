# Pizza Shop

App developed during 4th part of ReactJS specialization

# Worked Topics
- [Shadcn UI (Icon lib)](https://ui.shadcn.com/docs)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Prettier Tailwind Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [Eslint Simple Import Plugin](https://github.com/lydell/eslint-plugin-simple-import-sort)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

# Final result

## Screenshot
![Result](/classes/04-pizza-shop/result.png "Final result")

## Demo video


## Notes
- Add eslint rules
  - `npm i -D @rocketseat/eslint-config`
  - eslintrc.json 
    - `{
        "extends": "@rocketseat/eslint-config/react"
      }`
- Fix linting 
  - `npx eslint src --ext .ts,.tsx --fix`
- Run JSON Server
  - `npx json-server server.json -p 3333 -w`
