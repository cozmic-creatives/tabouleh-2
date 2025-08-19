# Multi-stage Dockerfile for production deployment
# Stage 1: Build the application
FROM node:alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package.json package-lock.json* ./

# Install dependencies with legacy peer deps to support React 19
RUN npm ci --legacy-peer-deps

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production server  
FROM node:alpine

# Install serve (simple static file server with SPA support)
RUN npm install -g serve

# Copy built assets from builder stage
COPY --from=builder /app/dist /app

# Expose port 80
EXPOSE 80

# Start serve with SPA routing
CMD ["serve", "-s", "/app", "-p", "80"]