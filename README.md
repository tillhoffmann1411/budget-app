# budget-app

## Setup

1. Create a .env file in the root folder with following parameters (you should change at least the SECRET_KEY)
```
DEBUG=True
SECRET_KEY=kflaDGA23G4fga75420HhfdDFG6552234sGDGW
DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 0.0.0.0 [::1]

DB_NAME=postgres
DB_USER=user
DB_PASSWORD=userpw
DB_HOST=db
DB_PORT=5432
```
2. Run `docker-compose up`to build and run the project
3. Visit http://localhost:4200 for the frontend and http://localhost:8000 for the backend