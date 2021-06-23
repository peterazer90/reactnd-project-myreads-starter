
* install all project dependencies with `npm install`
* start the development server with `npm start`

## App Structure
    Components # Contains card book and take (book object, onSelect Event) props.
    App.css # Styles for your app. Feel free to customize this as you desire.
    App.js # This is the root of app. Contains browserRouter and Routs.
    Search.js # This is the Search page. Contains search input and on Search event and take (histoy) props.
    Home.js # This is the Home page. Contains all books with shelf status and take (histoy) props.
    NoMatch.js # This is the 404 page. for no match route.
    App.test.js # Used for testing.
    BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods.
    icons # Helpful images for your app.
    index.css # Global styles.
    index.js # It is used for DOM rendering only.

## Methods
    OnSelect: its used for select dropdown shelf and call an update endpoint.
    state object: its used to store the books comming from getAll endpoint.
    
