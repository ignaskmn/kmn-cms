FROM node:18-alpine

ENV MONGODB_URI=mongodb+srv://kmnweb:KaunoMenai56@cluster0.pccwr.mongodb.net/kmn-payload-nextjs?retryWrites=true&w=majority
ENV PAYLOAD_SECRET=081b04e3-1deb-4f8e-967f-89f9a7c3d623
# Create app directory
WORKDIR /home/node/app

# Copy all flies from current directory to app directory
COPY . .

# Install dependencies with yarn
RUN yarn install

RUN cp /home/node/app/src/assets/Inter.ttf /home/node/app/node_modules/payload/dist/admin/assets/fonts/