FROM node:16-alpine AS build


# RUN apk update && \
#     apk add --no-cache libc6-compat autoconf automake libtool make tiff jpeg zlib zlib-dev pkgconf nasm file gcc musl-dev
RUN apk add --no-cache libc6-compat

RUN mkdir -p /app

WORKDIR /app


COPY . .

RUN yarn install
RUN yarn build
# RUN rm -rf node_modules

# RUN yarn install --production


# Second part - Running
FROM node:16-alpine

RUN npm install --global pm2

ENV NODE_ENV=production

RUN mkdir -p /app

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./
COPY --from=build /app/package-lock.json ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.js ./next.config.js

EXPOSE 3245

CMD ["pm2-runtime", "npm", "--", "start"]

# CMD ["yarn", "start"]




# EXPOSE 3245
# CMD ["yarn", "start"]




# COPY package.json yarn.lock ./
# RUN yarn install --frozen-lockfile

# FROM node:16 as builder
# WORKDIR /app
# COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
# RUN yarn build

# FROM node:16 as runner
# WORKDIR /app
# ENV NODE_ENV production
# # If you are using a custom next.config.js file, uncomment this line.
# # COPY --from=builder /my-project/next.config.js ./
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json


# RUN yarn install

# CMD ["yarn", "dev"]