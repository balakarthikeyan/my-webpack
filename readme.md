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

Babel is a JavaScript compiler and "transpiler", a tool that translate our actual javascript to support the target browser/node server javascript version.

ESLint check inconsistencies in code helping us with rules and to enforce the same code style across all code base.

# Create a project
```
npm init -y
npm i webpack webpack-cli webpack-dev-server --save-dev
npm i html-webpack-plugin --save-dev
npm i webpack-dev-server --save-dev
npm i css-loader style-loader --save-dev
npm i sass-loader sass --save-dev
npm i @babel/core babel-loader @babel/preset-env --save-dev
```

```
npm cache clean --force
npm audit fix --force
```