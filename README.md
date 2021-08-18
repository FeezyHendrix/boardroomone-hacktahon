# Profile Image upload microservice using Node.js
This api service uses cloudinary and remove.bg api to properly get a good avatar image for a user

## Requirements
* node.js
* npm

## API Documentation
```
https://documenter.getpostman.com/view/2263121/TzzAMwgx
```

## Installation
Clone the repo:
  ```
  git clone <repo-name>
  ```
Install dependecies
```
npm install
```
set environment variables
```
cp .env.example .env
```

## Commands
Running Locally
```
npm run dev
```

Running in Production
```
npm run start
```

## Environment Variables
The environment variables can be found and modified in the .env file. They come with these default values:
```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
HEIGHT=200
WIDTH=200
REMOVE_BG_API_KEY=
REMOVE_BG_BASE_URL=https://api.remove.bg/v1.0/removebg
BG_COLOR=#000000
```