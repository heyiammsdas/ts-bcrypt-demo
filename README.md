mkdir bcrypt-ts && cd bcrypt-ts

npm init -y

npm install bcryptjs
npm install typescript ts-node @types/node bcrypt

npx tsc --init

In tsconfig.json, set "module": "esnext", "target": "es2017", "moduleResolution": "node".

Create src/index.ts and write bcrypt code.

Run with → npx ts-node index.ts OR
npx tsc -> node dist/index.js
