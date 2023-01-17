FROM node:18-alpine

# Create app directory
WORKDIR /home/node/app

# Copy all flies from current directory to app directory
COPY . .

# Install dependencies with yarn
RUN yarn install

RUN cp /home/node/app/src/assets/Inter.ttf /home/node/app/node_modules/payload/dist/admin/assets/fonts/