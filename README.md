# SnackIT 0.1

A App created to purchase snacks in the office quick and easy!

It was created for the  **javascriptforwp.com Hackathon 2019**


## :sparkles: Structure of the the SnackIT App :sparkles:

  1. We use https://snackit.ritapbest.io/ as our **headless wordpress installation**

  2. We have a **plugin** created and installed called 'snack-it' – [snackIT-plugin GIT-REPO](https://github.com/anjadeubzer/snackIT-plugin)

    the plugin creates:
    a) a custom post type 'snack' to store all type of snacks
    b) a custom taxonomy 'snack groups' to categorise them
    c) tags registered to the 'snack'
    d) meta fields for the 'snack'
    e) a gutenberg block to fill out the 'snack' meta fields
    f) meta field 'balance' for the 'user'
    g) additional admin columns to easily administrate both the 'users balances' and the 'snack' items

  3. We have a **stripped down theme** for the headless installation (from https://github.com/postlight/headless-wp-starter)
    
    note: support for featuredimage was added here
    
  4. We use [https://snack-it-headless.netlify.com](https://snack-it-headless.netlify.com) as **the rest driven app** populated with the data from the headless wordpress installation


## :sparkles: Development of the the SnackIT App :sparkles:

**1. Wordpress Setup:**
  * install a local wordpress inside 'public' folder
  * download & activate plugin 'snack-it' and add snacks
  * optional add the headless-wp-starter

**2. 'snack-it' Block Development Setup:**
  * Open terminal, navigate to plugin 'snack-it' and type `npm install`
  * For changing plugin code run `npm run dev`

**3. Headless App Development Setup:**
  * cd to 'snack-it-react'
  * `npm install` and `npm start`
  * ìf there are snack post types inside wp they will be displayed! :) 
   

## :sparkles: Outlining the SnackIT States :sparkles:

**1. We want to browse the available snacks / drinks**
  * Add / remove snacks in admin backend
  * List the snacks in the frontend
  * Filter the list of Snack by typing a name (desktop friendly)
  * Filter the list by Category / Tag by clicking on the 'chips' (mobile friendly)
  * Show my favorites / latest purchases (for quickly purchasing the same snack)

**2. We want to buy them (UNFINISHED !!)**
  * A item can then be clicked to buy it (one-click-purchase)
  * a snackbar pops up where you can undo accidental purchases
  * After a minute the checkout is sent to the server and cannot be undone

**3. I want to purchase the snack on my own account (UNFINISHED !!)**
  * User registration ( can be neglected in step 1 - the office adds and removes the users through wp-admin )
  * User Login ( frontend authentication )
  * User settings page will show the current balance
  * Step 2: User settings page will show a history of past purchases since the last cleared balance action

**4. Administrate items and user balances (UNFINISHED !!)**
  * Admin Backend - All users are listed including their balance in the overview
    * which can ideally be cleared in the overview view (step 2) via quick edit?!
    * the balance can be cleared by clicking a button
  * Add / remove snacks in admin backend

**5. Possible nice future Features & Ideas:**
  * Everybody can register as a snack provider and offer Snacks
  * balances maybe can be cleared via Apple Pay or similar payment systems
  * buy a 'snack' via Apple Watch
  * set availability of a fridge 'snack' to empty (info for quicker refill)
  * wishlist of 'snacks' 
