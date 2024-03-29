# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18.7.0-alpine as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies and Generate the build of the application
RUN npm install && npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:1.23-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
