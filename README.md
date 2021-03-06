# e-commerce

User Router:

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/register` | POST | **Body**<br>name: `String`<br>email: `String`<br>password: `String` | `201` Created | Create a user
`/login` | POST | **Body**<br>email: `String`<br>password: `String` | `200` OK | Sign a user in
`/users` | GET | `none` | `200` OK | Get all users
`/users/:id` | GET | **Headers**<br>id: `String` | `200` OK | Get one user
`/users/:id` | PUT | **Headers**<br>id: `String`<br>**Body**<br>name: `String`<br>email: `String`<br>password: `String` | `200` OK | Update one user
`/users/:id` | DELETE | **Headers**<br>id: `String` | `200` OK | Delete a user


Item Router:

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/items` | POST | **Body**<br>name: `String`<br> | `201` Created | Create an item
`/items` | GET | `none` | `200` OK | Get all items
`/items/:id` | GET | **Headers**<br>id: `String` | `200` OK | Get one item
`/items/:id` | PUT | **Headers**<br>id: `String`<br>**Body**<br>name: `String`<br> | `200` OK | Update one item
`/items/:id` | DELETE | **Headers**<br>id: `String` | `200` OK | Delete a item
`/upload` | POST | **File**<br>image: `File` | `200` OK | Upload an image file


Cart Router:

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/addToCart` | PUT | **Headers**<br>id_token: `String`<br>**Body**<br>itemId: `String` | `200` OK | Add an item to user's cart
`/removeFromCart` | PUT | **Headers**<br>id_token: `String`<br>**Body**<br>itemId: `String` | `200` OK | Remove an item from user's cart
`/removeAll` | PUT | **Headers**<br>id_token: `String`<br>**Body**<br>itemId: `String` | `200` OK | Delete all item of one kind from user's cart