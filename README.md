# Project #13 - Argent Bank

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v18](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) for backend

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

#### optional

 - docker

### Instructions

#### without docker

in backend folder

```bash
# Install dependencies
npm i nodemon bcrypt && npm i

# Start backend server
npm run dev:server

# Populate database with two users
npm run populate-db
```

in frontend folder

change DATABASE_URL in .env file

```bash
DATABASE_URL="mongodb://127.0.0.1/argentBankDB"
```
or 
```bash
DATABASE_URL="mongodb://localhost/argentBankDB"
```


```bash
# Install dependencies
npm install

# Start frontend server
npm run dev
```

#### with docker

change DATABASE_URL in .env file
```bash
DATABASE_URL="mongodb://mongo/argentBankDB"
```

```bash
# create docker container
docker-compose build

# Start docker container
docker-compose up -d

# Populate database with two users
## enter in container
docker exec -it backend sh

##in container
npm run populate-db
```

### URls

#### Frontend
http://localhost:8000/

#### Backend
http://localhost:3001/