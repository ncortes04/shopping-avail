# shopping-avail

## Description
A full stack E-commerce application with user authentication and authorization. This is a rather simplistic prokect that focused more on my ability to not only authenticate users but authorize them. This projects uses middleware and conditional statements to ensure the user has access to admin role page. The admin role allows the user to create posts, and categories.
## Plain View
![Alt text](./md-img/plainveiw.png?raw=true)
## UserAuth
![Alt text](./md-img/userauth.png?raw=true)
## Create post
![Alt text](./md-img/create-post.png?raw=true)
## Populated view
![Alt text](./md-img/populated.png?raw=true)
## Technologies

* bcrypt
* express
* react
* JWT
* mongoose

## How it works
When the user registers the server recieves this input via express. This username is checked if it doesnt already exists in the database. The password is encrypted using bcrypt and stored in the database. When a user signs in the sam process occurs but bcrypt.compare is used to check the password in constant time. When succesfully logged in a JWT is returned and stored in the local storage (Yes this is not a good idea for a few reasons.). Between every request the user makes the server checks if their JWT is still valid and if they are who they say they are. The admin role is checked by a custom middleware that will only return the role of the user. If the role mathes the request role requirements then the user is authorized.
