Requerimietos:
* Node.js
* NPM

// Crea package.json
npm init

// Insalar librerias
npm install --save-dev @types/node nodemon ts-node typescript

// Ejecutar TS (tsconfig.js)
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true


"tsNode": "cd src && ts-node index.ts",

nodemon.json

npm i --save-dev rimraf

package.json
"build:prod": "rimraf ./build && tsc",
"start:prod": "npm run build:prod && node ./build/index.js"

......
npm install
npm run start

node .\01-fundamentals.ts