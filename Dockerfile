FROM public.ecr.aws/docker/library/node:18.17

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY . .

RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
