# STAGE 1: BUILD
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g corepack \
    && corepack enable \
    && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --no-optional

COPY . .

ENV NODE_ENV=production

RUN pnpm build

FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g corepack && corepack enable

COPY --from=builder /app ./

EXPOSE 3000

CMD ["pnpm", "start"]
