# shopping-avail

## Description
A full stack E-commerce application with user authentication and authorization. 
This website pulls its information from the database. Categories and items can be added if the user is an admin. The user greated with a landing page followed by featured projects that have a nice antimation. The user can browse the current catalog and add items to their cart. There is also an about us page in which the user can read about the company and their agenda. Once the user is finished they can checkout in the checkout page with their items.
## Installation
This site is not currently accessable but i plan on deploying it soon. For now the source code is available on my github.
## Usage
This is a simple e-commarece website that could possibly present intrest for a local buisness. If a small buisness would like a small website to display a few items this would do the job. Currently there are only a few categroies and a few items. This website is dynamically generated from the back end to any additions are very easy.
## Futer Developments
- A functional checkout like stripe
- Store images in DataBase
- Add quantity to items
- Add order history

## Arrvials
![Arrivals](./md-img/landing.png?raw=true)
## Login
![Login](./md-img/login.png?raw=true)
## Create post
![Create-Post](./md-img/createpost.png?raw=true)
## Cart
![Create-Post](./md-img/cart.png?raw=true)
## Main view
![Main-View](./md-img/Main.png?raw=true)
## About Us
![About Us](./md-img/aboutus.png?raw=true)
## Technologies

* Bcrypt
* Rxpress
* React
* JWT
* Mongoose

## How it works
When the user registers the server recieves this input via express. This username is checked if it doesnt already exists in the database. The password is encrypted using bcrypt and stored in the database. When a user signs in the sam process occurs but bcrypt.compare is used to check the password in constant time. When succesfully logged in a JWT is returned and stored in the local storage (Yes this is not a good idea for a few reasons.). Between every request the user makes the server checks if their JWT is still valid and if they are who they say they are. The admin role is checked by a custom middleware that will only return the role of the user. If the role mathes the request role requirements then the user is authorized.
