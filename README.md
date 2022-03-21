# Node Typescript Project Boilerplate

Basic node backend initialization project.

## Creation sequence

```sh
mkdir node-ts-basics && cd node-ts-basics
git init
echo "node_modules\ndist\ncoverage\n.env" > .gitignore
yarn init # fill basic info
node -v > .nvmrc # defines the node version being used
yarn add -D typescript ts-node @types/typescript # basic dev packages
npx tsc --init # generates tsconfig.json with standard values
yarn add -D eslint # syntax checking for best practices usage (VSCode ESLint extension: dbaeumer.vscode-eslint)
npx eslint --init # setup eslint: options... 
# > How would you like to use ESLint? · style [To check syntax, find problems, and enforce code style]
# > What type of modules does your project use? · esm [JavaScript modules (import/export)]
# > Which framework does your project use? · none ((no frontend framework))
# > Does your project use TypeScript? · Yes
# > Where does your code run? · node (note: with NextJS you can select both browser + node)
# > How would you like to define a style for your project? · guide
# > Which style guide do you want to follow? · airbnb
# > What format do you want your config file to be in? · JavaScript
# Following dependencies are installed:
# - @typescript-eslint/eslint-plugin@latest 
# - eslint-config-airbnb-base@latest 
# - eslint@^7.32.0 || ^8.2.0 
# - eslint-plugin-import@^2.25.2 
# - @typescript-eslint/parser@latest
rm package-lock.json # remove it to avoid duplicate lock files
echo "node_modules\ndist\ncoverage" > .eslintignore
yarn add -D prettier # keep consistent code styling (VSCode Prettier extension: esbenp.prettier-vscode)
echo "{ \"tabWidth\": 2, \"printWidth\": 120, \"singleQuote\": true, \"trailingComma\": \"es5\", \"semi\": true }" > .prettierrc
yarn add -D eslint-plugin-prettier eslint-config-prettier # needed to setup properly with eslint
yarn add -D eslint-import-resolver-typescript tsconfig-paths # to use absolute paths instead of relative
# edit .eslintrc.js rules to avoid conflict with prettier. [in line comments in the file]
# edit tsconfig.json rules to avoid conflict with prettier. [in line comments in the file]

```
