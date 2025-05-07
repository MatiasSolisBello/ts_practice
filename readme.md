Requerimietos:
* Node.js
* NPM

Crea package.json
```shell
npm init
```

Instalar librerias
```shell
npm install --save-dev @types/node nodemon ts-node typescript
```

Crear archivo tsconfig.json
```shell
npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
```

Scripts recomendados en package.json
```json
"scripts": {
  "tsNode": "cd src && ts-node index.ts",
  "build:prod": "rimraf ./build && tsc",
  "start:prod": "npm run build:prod && node ./build/index.js",
  "start": "nodemon"
}
```

nodemon.json
```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/index.ts"
}
```

Borrar la carpeta build o dist antes de volver a compilar el proyecto
```shell
npm i --save-dev rimraf
```

Instalar paquetes y ejecutar proyecto general o archivo especifico
```shell
npm install
npm run start
node .\01-fundamentals.ts
```
