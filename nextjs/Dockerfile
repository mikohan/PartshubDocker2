FROM node:16-alpine

WORKDIR /app

RUN npm install --global pm2

COPY ./package.json ./

RUN npm install --omit=dev

COPY ./ ./

RUN npm run build


CMD ["pm2-runtime", "npm", "--", "start"]