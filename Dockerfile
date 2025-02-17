# STAGE 1: BUILD
FROM node:20-alpine AS builder

WORKDIR /app

# Cài đặt Corepack & pnpm
RUN npm install -g corepack \
    && corepack enable \
    && corepack prepare pnpm@latest --activate

# Copy package.json và pnpm-lock.yaml để cài đặt dependencies trước
COPY package.json pnpm-lock.yaml ./

# Cài đặt dependencies
RUN pnpm install --frozen-lockfile --no-optional

# Copy toàn bộ mã nguồn
COPY . .

# Thiết lập biến môi trường
ENV NODE_ENV=production

# Build ứng dụng Next.js
RUN pnpm build

# STAGE 2: RUNTIME
FROM node:20-alpine AS runner

WORKDIR /app

# Cài đặt Corepack nếu cần
RUN npm install -g corepack && corepack enable

# Copy toàn bộ mã nguồn & build từ builder stage
COPY --from=builder /app ./

# Chạy Next.js ở chế độ production
EXPOSE 3000

CMD ["pnpm", "start"]
