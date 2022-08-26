# Rutas

- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me

- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery
- /api/v1/auth/verify-account

- /api/v1/users
- - GET 

- /api/v1/users/:id
- - GET  
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me
- - GET
- - PUT
- - PATCH
- - DELETE

- /api/v1/auth/login
- - POST

- /api/v1/auth/register
- - POST

- /api/v1/auth/password-recovery
- - POST 
- - PATCH

1. /api/v1/posts
    POST() C H
    GET() C H

2. /api/v1/posts/:id 
    GET(id) C H

3. /api/v1/users/me/posts
    GET (user_id) C H

4. /api/v1/users/me/posts/:id 
    GET(user_id) C H
    EDIT() C H
    DELETE() C H