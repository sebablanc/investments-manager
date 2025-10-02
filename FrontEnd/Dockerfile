# --- Stage 1: Build the Angular application ---
# We use a Node.js image to compile the Angular code
FROM node:20-slim AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package files (they are now in the root of the build context)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend source code (e.g., src/, angular.json)
COPY . .

# Build the Angular application for production (adjust output path)
# Assuming your build output goes into a directory like 'dist/project-name'
# We will copy the contents of dist/ into the final Nginx folder
RUN npm run build

# --- Stage 2: Serve the static files using Nginx ---
# We use a very lightweight nginx image for serving
FROM nginx:alpine

# Find the build output path (e.g., /app/dist/frontend-project) and copy its contents
# Adjust the exact path below based on your angular.json build output
COPY --from=build /app/dist/FrontEnd/browser /usr/share/nginx/html

# Inject custom Nginx configuration for Reverse Proxy
# This overwrites the default Nginx config to include your reverse proxy rules.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the standard HTTP port
EXPOSE 80

# The default Nginx CMD runs the server
CMD ["nginx", "-g", "daemon off;"]
