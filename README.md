

python3 -m http.server

python3 manage.py runserver

python3 manage.py startapp 

pip3 freeze > requirements.txt


cp -r ..//.pip-modules/lib/python3.8/site-packages/allauth/templates/* ./templates/allauth/ 

python3 manage.py loaddata categories
python3 manage.py loaddata products

python3 manage.py makemigrations --dry-run
python3 manage.py makemigrations

python3 manage.py migrate --plan
python3 manage.py migrate

## Milestone Project 4
**THIS PROJECT IS FOR EDUCATIONAL USE ONLY**

**FANCY DAY DESIGN**

For my final project I chose to create a website for my sister-in-law. About 2 years ago she started making balloon decorations. From tiny balloon arches to elaborate themes for birthdays, weddings and other celebrations.<br />

The website focuses on the work of Fancy Day Design but also the simple products that are sold there. The website also features a blog where ideas and comments can be submitted.

This website is for educational purposes only, so
do not attempt to enter real credit card information when using the stripe functionality. For testing purposes you can use the data below:

-   Stripe card number: 4242 4242 4242 4242
-   Any card end date (in the future) you wish
-   Anyy CVV number you wish

Mockup!!
<img src="readme-documents/mockup.jpg">

live site [Fancy Day Design](https://fancydaydesign.herokuapp.com/)

# Table of contents

1. [UX](#ux)

    * [strategy](#strategy)
        * [user stories](#user-stories)
        * [site goals](#site-goals)
    
    * [scope](#scope)
        * [features](#features)
        * [Features Left to Implement](#features-left-to-implement)
        
    * [structure](#structure)

    * [skeleton](#skeleton)
        * [wireframes](#wireframes)
    
    * [surface](#surface)

2. [Technologies Used](#technologies-used)

3. [Testing](#testing)

4. [Deployment](#deployment)

5. [Credits](#credits)

# UX <a name="ux"></a>

## Strategy <a name="strategy"></a>

As a final assignment I always said that I would make a website for my sister-in-law. Her decoration business has quickly grown into something big in a short time.
She has indicated what she finds important, what her website should have. I set to work with her wishes and incorporated them into the website. She chose the colors for the website herself. and I was free to choose the different images.

I set up a blog page for the site so that selected admin users can contribute articles to the site that are SEO friendly and lead to more organic traffic to the site and lead to increased revenue.
Admin users get the power to create update and delete everything on the site while users of the site get the power to add edit and delete the reviews they have left for various products and to delete their own comments on blog posts.

### User Stories <a name="user-stories"></a>

** First time user **
- As a user I want to be able to view a list of all products, so I can select the products I want to buy.
- As a user I want to be able to view a category of all products, so I can find products i'm interested in without having to search through all the products.
- As a user I want to be able to view the product individually, so I can identify product image, price, description and product rating.
- As a user I want to be able to view my shopping bag anytime to see my total, so I can see what my total costs are at any time
- As a user I want to be able to see a list of available products, so I can see the best priced and sorted products.
- As a user I want to be able to search for a product by keyword, name or descriptions, so I can find a specific product I want to buy.
- As a user I want to be able to see what I've been looking for and if the product I want is available, so I can decide whether the product I want is available
- As a user I want to be able to select the quantity of a product when purchasing, so I can can make sure I don't accidentally buy the wrong product or quantity
- As a user I want to be able to view items in my shopping bag, so I can see the total cost of my purchase and all the items I will receive
- As a user I want to be able to adjust the amount of individual items in my bag, so I can change my purchase before I check out
- As a user I want to be able to simply enter my payment details, so I can can pay quickly and easily
- As a user I want to be able to view an order confirmation after checkout, so I can check that I haven't made any mistakes
- As a user I want to be able to receive an email confirmation after checking out, so I can keep the order confirmation of what I bought for my own administration

** Returning Users **
- As a returning user I want to be able to easily register for an account, so i can view my profile and have a personal account
- As a returning user I want to be able to login or logout, so I can access my personal account.
- As a returning user I want to be able to recover my password in case I forget it, so I can restore access to my account
- As a returning user I want to be able to receive an email confirmation after registering, so I can verify that my account registration was successful
- As a returning user I want to be able to have a user profile, so I can view my personal order history and order confirmations.
- As a returning user I want to be able to leave a comment on the website, so I can comment and read from other site users

### Site Goals <a name="site-goals"></a>

- As a site owner i want to be able to add a product, so I can add new items to my shop
- As a site owner i want to be able to edit/update a product, so I can
- As a site owner i want to be able to delete a product, so I can remove items that are no longer available.

## Scope <a name="scope"></a>

### Features <a name="features"></a>

##### Navbar

![navbar]()

Navigation bar is visible on all pages. On a smaller page, it turns into a bar. The navbar contains a logo and links for each section and subsection of the website.

The footer contains three sections, the first section links to different sections of the website, the middle section contains the location of the stores and the third section refers to the social media links.
There is a search bar on every page, where you can easily search for products by name and/or keyword

* The navbar contains the main links and navigation throughout the site. it remains consistent at the top of each page.

* The navbar is fully mobile responsive and reacts to changes in screen size. It also allows for collapsible menu on mobile screens.

* The navbar also contains all the categories of products on the site through the various drop downs.

* The search bar disappears on mobile view but still works when the search icon is clicked, my account and bag also work on mobile view.

![navbar mobile]()

##### Delivery Information Banner

![delivery]()

* The delivery information banner appears just below the navbar on each page, it is fully mobile responsive and reacts to the changes in screen size.

* The delivery banner provides a clear and concise message to the user about needing to spend 60 euro to get free delivery.

##### Footer

![footer]()

* The footer contains links to the social media channels of the company aswell the copyright. These links all open in a new tab on the relevant social media platform.

* The social media icons will have a hover transition in place. This transition changes the social media icon to the main color of that social media platforms site.

* The Footer is mobile responsive and reacts to changes in screen size.

##### Home page

![homepage]()

On the home page there is a button that takes you directly to the products page. Under the title be inspired you can see 3 images. Also on this page you will find the testimonials.

* Display text makes it clear to the user where they are and what is it I want them to do on the site.

* CTA displaying Shop Now in capital letters provides a clear action for the users of the site to follow.

* Background image used shows a man exercising which is the purpose of the site so again makes it easier for a user to figure out the purpose of the site.

* Navigation bar at the top of the page provides for easy and intuitive navigation throughout the site. 

* Search bar at the top ot the page provides for a way for a user to search ther site for a specific item that they are looking for.

##### Blog page

![blog page]()

* The blog page stores a short summarised version of all of the blog posts on the site.

* The Blog page shows the blog posts in paginated format with 5 blog posts per page. The post title and post intro are shown as cards with a shadow background to make them stand out on the page.

* For admin users, An Add blog post button is displayed at the top of the page for an easy way for admin users to add a blog post to the site. The button does not display for regular users

* There is a read more link displayed on each blog post so that a user can click on it and read the entire blog post on its own page.

##### BlogPost page

![blogpost page]()

* Blog post page is a single page showing all of the details from a relevant blog post. It includes the body text and any images that may or may not be attached with the blog post.

![comments](https://github.com/Brianconn71/fit-as-a-fiddle/blob/master/Readme%20Images/comments.JPG)

* The blog post also shows any comments that have been made on the post. any user can read comments but only authenticated users can leave a comment

![add-a-comment]()

* Users who are logged in will see a text area which will allow them to leave a comment on a blog  post. if a user is not logged in then a message will be displayed unter the add a comment heading asking the user to register or login to leave a comment.

![login-comment]()

##### Add BlogPost page

![addblogpost]()

* Only admin/superusers will be able to access this page.

* This page can be accessed by clicking on add blog post button at the top of the blog page for admin users only can see this button.

* they will be brought to a page displaying a form to add a new blog post, A title, intro and body are mandatory requirements but an image is optional. This form is displayed as a crispy form.

##### Edit BlogPost page

![edit-blogpost]()

* Only admin users will be able to edit previously created blog posts

* There will be edit and delete buttons displaying on the blog page and in the full blog posts page which will only show to admin users, these buttons will allow admin users to edit the blog post or delete the blog post.

* If the user chooses to delete the blog post a modal will displaying asking them to confirm the deleteion. 

![delete blog modal]()

* If the user chooses the edit button then they will be taken to the edit blog post page which will display a form instantiated with the information of the blog post they have chosen to edit.

* When the changes are made and the edit blog post button is selected then the user will be brought to the blog post page of the newly edited blog post.

##### Products app

###### All Products

![all products]()

* In the all products view, each item available for sale on the site is displayed. The results are in paginated format displaying 10 items per page. the number of pages is displayed at the bottom of the page.

* edit and delete buttons will appear to admin users to allow them to edit a product or delete a product, a delete confirmation modal will pop up before item is successfully deleted

![delete product modal]()

* The navigation bar at the top of the page displasys all the categories of products on the site for ease of use for the user.

* A user can sort the products throughout the site based on name and price by choosing from the select dropdown at the top of the page.

![select dropdown]()

* When a user searches from the search bar at the top of the page the results are shown on this products page again in paginated format.

![search results]()

###### Product details page

![product details page]()

* The product details page contains all information relating to the product and quantity selectors and add to bag buttons.

* edit and delete buttons will appear to admin users to allow them to edit a product or delete a product, a delete confirmation modal will pop up before item is successfully deleted

![delete product modal]()

* there is a keep shopping button which allows a user to return to view all the products page and continue to shop on the site.

* Underneath the product informtaion, there is a reviews section

![reviews section]()

* In this section, only logged in and authenticated users can leave reviews of products. When a non logged in user clicks on the "add a review" heading a message appears asking them to login or register to leave a review, if they are logged in then a form appears to allow the user to submit there review of the product.

![not logged in user]()

![leave a review]()

* Anynone can view the reviews of the products. When a user clicks on reviews, all the reviews for that product becomes available on the page underneath the reviews heading.

![no reviews]()

![reviews]()

* The reviews are then paginated to show 5 reviews per page.

* On the product details page, there is a rating system in place that aggregates and averages the user ratings from the reviews below and shows the rating underneath the product name and beside the product image

![user rating]()

###### add products page

* This page is only available to superusers and can be found by clicking on my account at the top of the page and then selecting product management.

![product management]()

![add a product]()

* This page contains a form which a superuser can use to add products to the database and have the products appear on the site when done and form submitted the user gets taken to the products page of the product thehave added and a message appears showing them they have successfully addedthe product to the database.

![product added]()

###### edit products page

![edit product]()

* This page is only available to superusers and can be found by clicking on my edit link on either the products page or the product details page.

* The edit product page will be a form which is instantiated with the details of the product that a user is editing.

* Any product information vcan be edited and when done a user clicks on the update product. They will be brought to the product details page oof that particular product and a message will inform them they have updated the product.

![successfully updated product]()

###### Reviews

![reviews section]()

* Reviews appear on the product details page underneath all of the relevant product information.

* The reviews section is contolled using custom javascript and when the reviews heading is clicked all of the reviews for that product appear in a div under the heading. Reviews can be seen by anyone who comes to the site.

![reviews]()

* If a product has no review then the following is shown to the user 

![no reviews]()

* Only logged in and authenticated users can leave a review of a produtc. If a user is not logged in then when they click on the leave a review heading they are greeted with this message.

![not logged in user]()

* If a user is logged in and authenticated they may leave a review of a product which is shown below.

![leave a review]()

* When the user submits the form the review is then added to the product and is available under the reviews heading.

![reviews]()

###### Bag

![bag in nav]()

* In the navbar at the thop of the bad on all screen sizes a bag icon will appear, this bag will be turquise and display €0.00 by default. Once a user adds an item to the bag the bag icon will change to a gold color to signify an item in the bag. When a user clicks on the bag icon the will be taken to the bag page.

* When a user clicks on the bag icon when they have no items in the bag the below will be displayed indictaing they have no items in their bag and a keep shopping button to encourage them to add items to their bag.

![no item in bag]()

* When a user clicks on the bag icon when they have items in the bag the below will be displayed the items in their bag and a secure checkout button to encourage customers to move forward to the checkout process and a keep shopping button which encourages them to add more items to their bag.

![item in bag]()

###### checkout

![checkout page]()

* When the user has items in their bag, a secure checkout button will appear, when they click on this secure checkout button on the bag page, they will get taken to the checkout page where they can complete their order and pay for their order via stripe.

![pay with stripe]()

* The users order that bthey are purchasing will appear in the right hand column to ensue correct order is being purchased.

![order on right]()

* When the user completes their order, a loading overlay will appear until order gets confirmed. when the order is confirmed a checkout success page will appear which will show the details of the order to the user as seen below.

![checkout success page]()

## Structure <a name="structure"></a>

* The overall structure of the site will remain consistent throughout the project. A backgroung image with CTA will appear on the homepage which will provide the user with a clear intent on what it is That I want them to do on the site. This background image will then be covered with an overlay for the remainder of the site and content and data will be displayed on the overlay.

* Forms will be displayed using bootstrap styling in a similar manner throughout the site, Reviews form will be designed manually instead of using crispy forms which uses bootstrap styling. Only logged in users will be allowed to leave a review of a product of a comment on a blog post. Logged in admin will have full CRUD functionality over all aspects of the site.

* Navigation, navbars on mobile and desktop views will remain consistent throughout the site.

* Links and buttons will be used throughout the site to allow for easier navigation between pages and the functionality of the site.

### Features Left to Implement <a name="features-left-to-implement"></a>

## Skeleton <a name="skeleton"></a>

#### Wireframes <a name="wireframes"></a>

[Click here]() to see the Wireframes I used for this project.
 
![wireframes]()




##### Models

* Home
    * Contact
        * This model contains information relating to messages sent by users to the store.

* blog
    * Post
        * This model contains information relating to the blog posts on the site.
    
    * Comment
        * This model contains information about comments on any of the blog posts on the site.

* Checkout
    * Order
        * This model contains information relating customers orders, their order details and any items they have ordered.
    
    * OrderLineItem
        * This model contains information the products in the customers order, quantity and total with or without a deliery charge

* Products
    * Product
        * This model contains information relating to all the products for sale on the site.
    
    * Categories
        * This model contains information about the various different categories of products on the site.

* Profiles
    * UserProfile
        * This model contains the default order details saved from customers previous orders which they can use for future orders.

* Reviews
    * Review
        * This model contains information relating to reviews that users have left for certain products.


## Surface <a name="surface"></a>

* Ultimately, There are differences in my wireframes look to the overall project. I created the homepage wireframes and I just lacked inspiration to create the other wireframes. I wanted the site to look similar to the Boutique Ado walkthrough project and I just lacked inspiratioon to create the Wireframes for the other pages. Initially, I had planned a different background image and a different style of button on the homepage header but once it was set up I didn't like it so I changed it to the way that it is currently set up.

* Once I had the homepage set up in the wireframes I wanted it to be consistent coloring, fonts etc throughout the project so I started to make the project based on the homepage wireframes.

#### Color Scheme

The colors used for this website have been selected by Shakira Lacroes (owner).

(Black) 		#231f20
(off-white) 	#fff9f9
(Sand)			#e3d8d2
(Dark Sand)		#c19c77

Logo font - #8d6e63

* There are two main colors used throughout the project and they are listed below.
    * #61988E - this is the turquise color used on buttons, text in the header setc
    * #493843 - this is the dark purple/brown color used in the header and footer as well as border colors fonts etc.
    * #f5f5f5 - this is the off-white color used in the modal, forms, all auth etc. I wanted to have a nice easy to read white color and this was my preferred choice.
    * The below are the arrow colors, taken from the walkthrough project as I liked them.
        * #007bff
        * #6c757d
        * #28a745
        * #dc3545
        * #ffc107
        * #17a2b8
        * #f8f9fa
        * #343a40
    * The colors used for the hover over the social media links in my footer are below.
        * instagram - #C13584
        * twitter - #1DA1F2
        * facebook - #4267B2
    * #f9a602 - this is the gold color of the stars in the reviews section.

#### Icons

-   [FontAwesome](https://fontawesome.com/) was used for my forms and buttons, to make it more appealing.

-   The Fancy Day design logo is used for the favicon. There has been made use of [Favicon](https://favicon.io/) to create this favicon.
* Images are credited below in the media section.

#### Typography/ Fonts

[Google Fonts](https://fonts.google.com/) was used for the font style of this project. The font used for this website are Archivo Narrow, Cookie and Open Sans with a backup font of Sans-serif. The fonts are simple, playful and easy to read.

# Technologies Used <a name="technologies-used"></a>
The following technologies were used for this website:

## Programming
* [HTML5](https://html.com/) - was used to create the layout and gave the page structure and presenting static data. 

* [CSS](https://en.wikipedia.org/wiki/CSS) - was used to then style the page and make it responsive through media queries, and interactive through using CSS transitions.

* [JavaScript](https://www.javascript.com/) - was used throughout the website to make the site interactive.

* [Python](https://www.python.org/) - was used to build the backend functionality of the web app.

## Libraries
* [Font Awesome](https://fontawesome.com/) - Font Awesome was used to source and find the icons used on the site.

* [jQuery](https://jquery.com/) - was used throughout the website to aid with thefunctionality of certain poages and the features avaliable to end users, Blog, Reviews etc..

## Frameworks
* [Bootstrap](https://getbootstrap.com/) was used to add html/css components to the site and to make the site more visually appealing to the user.
* [Django](https://www.djangoproject.com/) - was used to create my project.
* [EmailJS](https://www.emailjs.com/)
* [Stripe](https://stripe.com/ie) - was useed as the payment section of the site.

* [Django AllAuth](https://django-allauth.readthedocs.io/en/latest/) - was used to create the sign-in and register account functionality of the project.

* [Django Countries](https://pypi.org/project/django-countries/) - was used to select countries in the order form.

* [Django Crispy Forms](https://django-crispy-forms.readthedocs.io/en/latest/) - was used to style form elements.

* [Stripe](https://stripe.com/ie) - was useed as the payment section of the site.

* [Gunicorn](https://gunicorn.org/) - was used to deploy the site to Heroku

## Others
* [Github](https://github.com/) - was used to host and store the source code of the project.

* [Gitpod](https://gitpod.io/) - was the IDE that was used to create this project.

* [Heroku](https://signup.heroku.com/) - was used to deploy the site and host it.

* [AWS](https://aws.amazon.com/) - was used to store the images on the site and the static files.

## Tools used

* [Favicon](https://favicon.io/)

    * Favicon was used to create and add a favicon to the site.

* [Autoprefixer](https://autoprefixer.github.io)

    * Autoprefixer was used to parse my css file and add the vendor prefixes.

* [Balsamiq](https://balsamiq.com/) - was used to set up my wireframe. <br>

* [Google Fonts](https://fonts.google.com/) - was used to select the font for my website.

* [Pexels](https://pexels.com/) & [Adobe Stock](https://stock.adobe.com/nl/free.com/) - The images for this website mostly come from Fancy Design herself. To fill the product page, some other images were used from pexels.com and adobe.stock.com. The names of the photographers are listed in the media section below this page.

* [Resize It](https://apps.apple.com/us/app/resize-it-image-resize/id844716779) - was used to easily crop the photos to the correct size. I used my Iphone for this.

* [Materialize](https://materializecss.com/color.html) - For the color selection Materialize was used. But then the owner came with here own colors. So i used her colours.

* [W3School](https://www.w3schools.com/)

* [Css Beautifier](https://www.freeformatter.com/css-beautifier.html) - was used for formatting my CSS code.

* [Am I Responsive Design](http://ami.responsivedesign.is) - For the mockup in the beginning of my readme file Am I Responsive Design was used 

* [W3C HTML Validator](https://validator.w3.org/) - To validate my HTML code this tool was used.

* [W3C CSS Validator](http://jigsaw.w3.org/css-validator/) - To validate my CSS code this tool was used.

* [Wave Webaim](https://wave.webaim.org/) - was used to check the contrast of my website.

* [Dillinger](https://dillinger.io/) - To make my README file more organized Dillenger was used.


# Testing <a name="testing"></a>

* The testing section can be found [here])

# Deployment <a name="deployment"></a>

* This project was setup on GitHub using the Code Institute Gitpod Template.

* I sourced the code institute github page and then clicked on the green use this as templsate button in the repository.

* Then, i named my repository and created it. upon, creattion, I then clicked on the green gitpod button at the top of the repository to open the template in Gitpod.

* I then used the terminal window in gitpod to create files and folders and to add changes to the version contreol in Github.

* to commit I added the files to the staging area using the following commands:
    * `git add .`
    * `git commit -m "commit message"`
    * `git push`

#### Deployment to Heroku

Once app was setup and ready to go I deployed to Heroku by following the steps below:

* I created an app on the heroku website which i called fancydaydesign

    * I clicked on the new button.
    * I then clicked on the create a new app link.
    * I then gave my app the name of fancydaydesign and chose europe as my closest region.
    * Finally, I selected to create my app.

* Next, I set up the postgres database.

    * in Heroku,
        * Go to app resources section, search for postgres
        * then I chose to add to project and chose the free plan for my project.
        * In order to use Postgres, I had to install two dependecies in gitpod, dj_database_url and psycopg2
    
    * in Gitpod
        * I installed both dj_database_url and psycopg2 using the command:
            * `pip install`
        * then, using the command: pip3 freeze > requirements.txt, I added the dependencies to the requirements file which is needed by Heroku.
        * Then in settings.py I imported dj_database_url:
            * `import dj_database_url`
        * then, I commented out the current database settings and replaced it with the settings of the postgres database:
        ```
        DATABASES = {
            'default': dj_database_url.parse('DATABASE_URL')
        }
        ```
        * DATABASE_URL above is an environmental variable and as such should not be shown  in version control. The database url can be found from your app config settings in heroku.
        * Once the above method is set up, models need to be migrated to the new database using the command below:
            * `python3 manage.py migrate`
        * I then created a new superuser for my site on heroku using the command below:
            * `python3 manage.py createsuperuser`
        * When that was done I then commited my changes and made sure not to include environmnet variables in the version control.
        * Then, I created an if-else statement in the settings.py to use Postgres if the DATABASE_URL variable is available and otherwise use the default database in gitpod.
        ```
        if "DATABASE_URL" in os.environ:
                DATABASES = {
                    "default": dj_database_url.parse(os.environ.get('DATABASE_URL'))
                }
          else:
                DATABASES = {
                    'default': {
                        'ENGINE': 'django.db.backends.sqlite3',
                        'NAME': BASE_DIR / 'db.sqlite3',
                    }
                }
        ```
        * The postgres database should now be ready for use.

    * Gunicorn
        * For the app to work on heroku we need a way for heroku to tell that the app is a web application, which is where Gunicorn comes in.
        * Installing Gunicorn
            * `pip3 install Gunicorn`
        * A Procfile then needs to be created to tell heroku how to run our app. this is acheieved below:
            * `touch Procfile`
        * In the Procfile we need to tell it to use a webserver, this is achieved by placing the below code in the procfile:
            * `web: gunicorn <appname>.wsgi:application`
    
    * We now need to connect to Heroku in the terminal on gitpod
        * use the following command
            * `heroku login -i`
        * Login using your email and password that you used to create an account with on heroku website.
        * then, I disabled the collection of static files temporarily until AWS has been set up.
            * `heroku config:set DISABLE_COLLECTSTATIC=1 --app <appname>`
            * the --app command is used when you have more than one app in your heroku account
        * Now, in settings I added heroku into my list of allowed hosts, and localhost so the project can still b run locally using the following settings.
            * `ALLOWED_HOSTS = ["<heroku appname>.herokuapp.com", "localhost"]`
        * changes were then pushed to Github
        * Then I needed to set up pushing to heroku achieved below
            * `heroku git:remote -a <heroku appname>`
        * then the project gets pushed to github using:
            * `git push heroku master`
        * Heroku now builds the app.
    
    * On the Heroku Website
        * Go to the deploy section of the app.
        * I searched for the app being used in github
        * When it was found I connected and then clicked on enable Automatic deploys
        * Now any changes pushed to Github will automatically be pushed to Heroku too.
    
    * Amazon AWS
        * Amazon AWS was used to store both static and media files of my project
        * I created an AWS account and worked through the process of signing-in. Once my account was setup I was able to set my project up on aws.
        * first, I needed to create a bucket.
            * search for aws s3 service.
            * click on the Create Bucket button.
            * Give the bucket a unique name and then select the region.
            * uncheck the block public access and acknowledge that the bucket will now be public.
            * click create bucket.
        * Bucket settings
            * Properties
                * Go to the bucket Properties section
                * Turn on static website hosting
                * in the index and error text inputs, add index.html and error.html.
                * then, click save.
        * Permissions
            * Go to the bucket Permissions section.
            * In the cors config paste in the below code:
                * ```
                    [
                        {
                            "AllowedHeaders": [
                                "Authorization"
                            ],
                            "AllowedMethods": [
                                "GET"
                            ],
                            "AllowedOrigins": [
                                "*"
                            ],
                            "ExposedHeaders": [

                            ]
                        }
                    ]
                  ```
            * In the bucket policy, click on the generate policy
        * Policy
            * Select S3 bucket policy
            * Add * to the principal field to select all principals
            * select action to get object
            * Paste in your ARN which can be found on the bucket policy page.
            * click add statement
            * then, click on the generate policy button
            * then, copy and paste the new policy into your bucket policy
            * also, add /* onto the end of the resources key
            * and, click save.
        * Access Control List
            * Go to the Access Control List section.
            * set list objects permission to everyone.
    
    * Create a new user

        * On the admin page for aws search for IAM to add a new user
        * Create a group
            * We need to create a group to put our user in
            * Click create a new group and name it.
            * click through to the end and save the group.
            * create a group policy
                * click policy and the click create policy
                * select the JSON tab and then import managed policies.
                * search s3 and select on Amazons3fullaccess and import.
                * in the resources section, paste in the ARN that was used above.
                * click through to review policy.
                * fill in the name and description and then click generate policy.
            * back into the group, click on permission and attach the policy.
            * find the policy you have just created and attach it.

        * Create the user
            * select users from the sidebar and then click on add user
            * create a username and then select programmatic access then click on next.
            * select the group to add your user too
            * click through to the end and then click create user.
            * Download the CSV file containing the user keys needed to access the app
    
    * Connect bucket to Django
        * first install two packages in the IDE, boto 3 and django storages, seen below:
            * ```
                pip3 install boto3
                pip3 install django-storages
              ```
        * Now we need to add this to our requirements.
            * `pip3 freeze > requirements.txt`
        * storages then needs to be added to installed apps in settings.py
        * an environment variable called USE_AWS needs to be set up to run the code on heroku.
        * The settings needed for the project in the settings.py file are below:
            * ```
                if "USE_AWS" in os.environ:
                    # Bucket configurations
                    AWS_STORAGE_BUCKET_NAME = "<bucket name>"
                    AWS_S3_REGION_NAME = "<bucket region>"
                    AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID") # taken from downloaded csv file
                    AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY") # taken from downloaded csv file
                    AWS_S3_CUSTOM_DOMAIN = f'{AWS_STORAGE_BUCKET_NAME}.s3.amazonaws.com'

                    # static and media files
                    STATICFILES_STORAGE = "custom_storages.StaticStorage"
                    STATICFILES_LOCATION = "static"
                    DEFAULT_FILE_STORAGE = "custom_storages.MediaStorage"
                    MEDIAFILES_LOCATION = "media"

                    # now need to override static and media Urls for production
                    STATIC_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{STATICFILES_LOCATION}/'
                    MEDIA_URL = f'https://{AWS_S3_CUSTOM_DOMAIN}/{MEDIAFILES_LOCATION}/'
              ```
        * Back in heroku click on settings tab and then click reveal config vars.
        * Then set up the environmental variables as required.
        * Back in the IDE, we need to create a custom storages.py to tell django that in production we want to use Amazon S3 to store our static and media files
        * import S3Boto3Storage at the top of the custom_storages.py file.
        * Set up classes to tell django where to store the files as shown below:
            * ```
                class StaticStorage(S3Boto3Storage):
                    location = settings.STATICFILES_LOCATION
                
                class MediaStorage(S3Boto3Storage):
                    location = settings.MEDIAFILES_LOCATION
              ```
        * push all the changes to Github from the IDE
    
    * Add Media files to AWS
        * in your AWS bucket, create a new folder called media
        * select upload and then upload all your image files
        * select to grant public access
        * finally, click to upload your files.
    
    * Setting the project up locally

        * Find your github repo, on the code dropdown click on Download Zip as seen below.
            * ![download Zip](https://github.com/Brianconn71/fit-as-a-fiddle/blob/master/Readme%20Images/download_zip.JPG)
        * then choose to extract files to your respository.
        * open the IDE of your choice and open the folder contaoining the code using your IDE.
        * Once this is done, you can now download the requirements needed to run the project using the below command in your IDE terminal:
            * ` pip3 install -r requirements.txt `
        * You can also choose to clone your files from github to your repository in the IDE by again, choosing the code dropdown in tour github repo and copying the HTTPS url that is provided in the dropdown as seen below:
            * ![https code](https://github.com/Brianconn71/fit-as-a-fiddle/blob/master/Readme%20Images/download_zip.JPG)
        * then when the url has been copied return to your terminal and use the code below:
            * ` git clone https://github.com/Brianconn71/fit-as-a-fiddle.git`
        * once this is done, you then need to set up the below environment variables to use full functionality of the site:
            * DJANGO_SECRET_KEY = your secret key
            * STRIPE_PUBLIC_KEY = your stripe public key
            * STRIPE_SECRET_KEY = your stripe secret key
            * STRIPE_WH_SECRET = your stripe webhook secret
            * IN_DEVELOPMENT = True
            * Your stripe variables which can be found on your stripe dashboard
            * You need a Django secret key which can be found [here](https://miniwebtool.com/django-secret-key-generator/)
        * Then you need to migrate the database models to set up your own database.
            * first check for migrations:
                `python3 manage.py makemigrations --dry-run`
            * then make migrations:
                * `python3 manage.py makemigrations`
            * check to see how migrations will work out:
                * `python3 manage.py migrate --plan `
            * lastly, if all looks good, migrate:
                * `python3 manage.py migrate`
        * Now, a superuser account needs to be created to access the admin section, so follow the step below to create a superuser
            * ` python3 manage.py createsuperuser `
        * enter your own username and password
        * finally, we need to run the project to ensure working order and we are good to go.
            * ` python3 manage.py runserver`


# Credits <a name="credits"></a>

### Content and Media

Carousel - testimonials
-https://www.w3schools.com/howto/howto_js_slideshow.asp

THIS PROJECT IS FOR EDUCATION USE ONLY

For the main foundation of this website I used videos from Code Institute - Project - Boutique Ado. Then I modified it to this website.


The content of the about.html page is written by Shakira Lacroes the owner (and my sister in law) of Fancy Day Design.

**Code I have used**
Used websites and images:

Review Forms and Add to Database using forms | Build Movie Review Website Using Django 2020.
[video](https://www.youtube.com/watch?v=lSX8nzu9ozg

[Building A Blog Application With Django](https://djangocentral.com/building-a-blog-application-with-django/)

Wat is een blog? [Dutch Page](https://www.blogkracht.nl/wat-is-een-blog/) 

Create A Simple Django Blog from [Codemy.com](https://www.youtube.com/results?search_query=make+a+blog+with+django)


* [bootstrap 5](https://getbootstrap.com/) was used to style the site and to make it more visually appealing for the reader and user.

* Some of the backend code was taken from the walkthrough project of Boutique Ado and some frontend bootstrap classes are similar to what was used in the walthrough project as I wanted a similar feel for my site.


### Media

Most of the images used for the website were made by Shakira Lacroes (owner). To fill up the product page I used some other pictures from pexels.com and adobe stock.
Obtained from Pexels.com: 

-	Ring Balloon & Happy Birthday Balloon - Polina Tankilevitch

-	Love Balloon - Cottonbro

Obtained from stock.adobe.com/nl/free: 

-	All-numbers balloon. From this image I took all the individual photos of the numbers and used them for the products.

-	All-Alphabet letters balloon. From this image I took all the individual photos of the letters and used them for the products.

-	Gender reveal balloon.


### Acknowledgements

*   Student Care

*   I want to thank my friends and family who have viewed my website multiple times, have given me good criticism on my website and for putting up with my moodiness these past few weeks.

*   I would also want to thank my mentor who believed in me that I can do this project in 3 weeks and my fellow student Daphne for always staying positive!

*   The Slack community!

**THIS PROJECT IS FOR EDUCATIONAL USE ONLY**
