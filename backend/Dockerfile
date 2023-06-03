FROM node:latest
COPY . .
RUN npm i nodemon bcrypt && npm i
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=4096
CMD npm run dev:server



