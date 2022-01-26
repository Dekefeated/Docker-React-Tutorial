# Build Phase
FROM node:16-alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# /app/build <--- All the files from React Build (Production)

# Run Phase
FROM nginx
# copy something from other phase
COPY --from=builder /app/build /usr/share/nginx/html
