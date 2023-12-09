# "Do zrobienia"

### Development:
1. Clone the repository
2. Run `npm install`
3. Define `db.json` file with sample data
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "Nauczyć się parcel.js"
    }
  ]
}
```
4. Run `npm run start:api`
5. Run `npm start` in other terminal tab


### Docker
1. Run `docker run -p 3003:80 -v /your/local/path/to/db.json:/data/db.json clue/json-server`
    Remember to replace `/your/local/path/to/db.json` with path to your `db.json`
2. If you want to start the app in development mode:
   build:
   ```
    docker build . -t react-todo-app -f ./dev.Dockerfile 
   ```
   run: ( remember about proper port mappings )
   ```
    docker run -p 3000:3000 react-todo-app 
   ```
3. If you want to start the app in production mode:
   build:
   ```
    docker build . -t react-todo-app-prod -f ./prod.Dockerfile 
   ```
   run: ( remember about proper port mappings )
   ```
    docker run -p 3000:80 react-todo-app-prod 
   ```
