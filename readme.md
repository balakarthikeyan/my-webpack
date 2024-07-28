# Pull Ubuntu
```
docker pull ubuntu
mkdir -p -v ~/projects/demo
docker run -t -d -p 3000:3000 --name ubuntu -v ~/projects/demo:/opt/apps ubuntu:latest
docker start ubuntu
docker exec -it ubuntu bin/bash
```
# Install NVM
```
apt-get update
apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
# Install Node
```
nvm --version
nvm install node
nvm alias default 10.24.1
nvm use 
```

# Webpack ?
Webpack is a static module bundler for modern JavaScript applications, but its not limited to Javascript only it can be extended to process CSS, HTML, any other resources if you have the right plugin.

- Entry point
- Output
- Loaders
- Plugins
- Mode
- Code splitting

# Create a project
```
npm init -y
npm i webpack webpack-cli webpack-dev-server --save-dev
npm i html-webpack-plugin --save-dev
npm i webpack-dev-server --save-dev
npm i css-loader style-loader --save-dev
npm i sass-loader sass --save-dev
npm i @babel/core babel-loader @babel/preset-env --save-dev
npm i eslint eslint-loader --save-dev // deprecated
npm i eslint --save-dev 
npm i eslint-webpack-plugin --save-dev
npm i @babel/eslint-parser --save-dev
npm i eslint-config-prettier eslint-plugin-prettier --save-dev
npm i --save-exact prettier --save-dev 
npm i file-loader --save-dev
npm i clean-webpack-plugin --save-dev
npm i jest --save-dev 
npm i webpack-bundle-analyzer --save-dev
npm i friendly-errors-webpack-plugin --save-dev
npm i postcss postcss-import postcss-loader postcss-preset-env --save-
npm i stylelint stylelint-webpack-plugin --save-dev
npm i stylelint-config-standard --save-dev
npm i mini-css-extract-plugin cssnano --save-dev
```

## Clean & Audit
```
npm cache clean --force
npm audit fix --force
```
### Package description

 - `ts-loader` used to load .ts modules
 - `webpack` is a bundler to help you complies JavaScript Modules and your source code into one package.
 - `rimraf` used to remove the build folder
 - `nodemon` used for development and for hot reload
 - `webpack-dev-server` is used in webpackv5 for dev server development and hot reload
 - `dotenv` allow you load different .env file for your development, production and or local server
 - `--save-dev` save the packages name and version, and installed them in dev-dependency, which mean those package whould not makes your production build heavier.
 - `eslint`Is a tool to identify and report on code patterns.
 - `eslint-config-prettier` Turns off ESLint rules that would conflict with Prettier's formatting.
 - `prettier` An opinionated code formatter. Used to enforce a consistent style.

## What is Babel?
Babel is a JavaScript compiler and "transpiler", a tool that translate our actual javascript to support the target browser/node server javascript version.

## What is Prettier?
Prettier is an code formatter for JavaScript and other popular languages. Prettier enforces a consistent format by parsing code and reprinting it with its own rules that take the maximum line length into account, wrapping code when necessary.

 - `semi:` Whether to add semicolons at the end of statements.
 - `trailingComma:` Which style of trailing commas to use. which adds trailing commas in arrays and objects where possible.
 - `singleQuote:` Whether to use single quotes for strings instead of double quotes.
 - `printWidth:` The maximum line length before Prettier will wrap the code onto a new line.
 - `tabWidth:` The number of spaces to use for each level of indentation.

## What is ESLint?
ESLint is a JavaScript linting utility. Linting is a type of static analysis that finds problematic patterns and codes that don’t adhere to certain style guidelines.

 - `env` Environments your script is designed to run in.
 - `extends` Allows ESLint to use a pre-existing ESLint configuration and will make overrides.
 - `parser` Converts code to an Abstract Syntax Tree (AST).
 - `parserOptions` Tells ESLint what version of JavaScript we are targeting.
 - `plugins` Are additional rules that can be used in order configure your ESLint.
 - `settings` Is shared settings that specify information that should be consistent across all of its rules.
 - `rules` Where we can configure the different rules our plugins and ESLint has to offer.

 ## Rules
semi: This rule requires that semicolons are used to end statements.
no-console: This rule disallows the use of console.log() statements in your code. 
quotes: This rule requires that double quotes are used for strings.

## Jest Tests
jest --coverage
jest --watchAll