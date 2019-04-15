# e-commerce

User Router:

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/register` | POST | **Body**<br>name: `String`<br>email: `String`<br>password: `String` | `201` Created | Create a user
`/users` | GET | `none` | `200` OK | Get all users
`/users/:id` | GET | **Headers**<br>id: `String` | `200` OK | Get one user
`/users/:id` | PUT | **Headers**<br>id: `String`<br>**Body**<br>name: `String`<br>email: `String`<br>password: `String` | `200` OK | Update one user
`/users/:id` | DELETE | **Headers**<br>id: `String` | `200` OK | Delete a user

User Router:

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/items` | POST | **Body**<br>name: `String`<br> | `201` Created | Create a item
`/items` | GET | `none` | `200` OK | Get all items
`/items/:id` | GET | **Headers**<br>id: `String` | `200` OK | Get one item
`/items/:id` | PUT | **Headers**<br>id: `String`<br>**Body**<br>name: `String`<br> | `200` OK | Update one item
`/items/:id` | DELETE | **Headers**<br>id: `String` | `200` OK | Delete a item