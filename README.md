Application Name : Shopping-cart

Deliverables :
Github repo link: https://github.com/captainp99/shopping-cart
Netlify deployed code link: https://laughing-mirzakhani-0c670b.netlify.app/

Login Credentials to login in shopping-cart:
username : guest
password : guest

Bonus Points:(Attempted both bonus points)
Tranlations: The application supports two languages that are english and french. which user can change from header dropdown.
Category Tree: The application by default shows all the products when user select the category from dropdown in header it filter out the selected category product from list. We are supporting mainly 4 categories now that are Electronic, Clothing, Accesories and All.

Structure : 
a. The app consist of total 5 modules:
1. App Module: Main module
2. Shared Module: Consist Shared code like header and footer component.
3. Auth Module: Consist of login page component and its functionality. user with correct username and   password can only login into appliction.
4. Cart Module: Consist of cart, checkout, and thankyou component and its  functionality.
5. Home Module: Consist of main-page, product-detail, and product-list component and its functionality.

b. The Core folder consist services and models used in project.
Models: 
1. Cart Model
2. Product Model
Services:
1. Product Service: consist of method to get product list from defined json.
2. Cart Service: Consist functionality of add product in cart, remove product from cart and clear Cart.

c. Resolver:
Product Resolver: The resolver is used to get product from json file while loading product detail and product list component.

d. Auth Guard:
Only the loggedin user can access cart, checkout and thankyou screen in the application.


Functionality
1.	Login Screen :
a. Reactive Form for login with validations. 
b. user with username: 'guest'  and password: 'guest' can login in application.

2. Seaching Functionality: 
The search work on the name of the product and show the filtered product.

3. Grid Product : 
It consist of products according to search and category products and with title, price and detail button.

4. Product Detail Page:
a. It consist of product details: name, type, price, description, color, rating, image, etc.
b. also contain a button to add product in cart.

5. Cart Screen:
a. only logged in user can access this screen.
b. consist of cart detail and can increase and deacrease quantity of product.
c. user can delete product from cart.
d. total price is also displayed along with checkout button according to cart.
e. if cart is empty then show alert

6.	Checkout Screen : 
a. contain cart detail.
b. contain reactive form with validation for checkout form.
c. place order button.
d. only logged in user can access this screen.

7. ThankYou screen:
a. only logged in user can access this screen.
b. show thankyou message and make cart empty.

Asset Folder:
It consist of used image, tranlation json for english and french and mockData.

Testing: 
Running all test cases successfully.
Component: Testing of Header Component functionality in header.component.spec.ts.
Services: Testing of Cart Service functionality in cart.service.spec.ts.

Linting: 
Application contain no linting error. on running ng lint appliction displays "All files pass linting.".
