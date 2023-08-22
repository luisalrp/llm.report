# Use the official Node.js image as a parent image
FROM node:18

# Set the working directory in the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies in the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 to have it mapped by Docker daemon
EXPOSE 3000

# Specify the command to run on container start
CMD [ "npm", "start" ]
