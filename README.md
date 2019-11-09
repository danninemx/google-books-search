# <a href="https://bookgle.herokuapp.com">Google Books Search</a><img src="https://github.com/danninemx/google-books-search/blob/master/client/src/components/Nav/bookgle-logo.png/" alt="Bookgle logo" align="right" height="70">

<!-- # <a href="https://bookgle.herokuapp.com">Google Books Search</a><img src="https://github.com/danninemx/google-books-search/blob/master/client/src/components/Nav/bookgle-logo.png/" alt="Bookgle logo" align="right" width="277" height="84"> -->

## Table of Contents <a name="toc"></a>

- [Overview](#overview)
- [Instructions](#instructions)
- [Technologies](#technologies)
- [Future Development](#future)
- [Developer](#team)

---

## Overview <a name="overview"></a>

testing

<p style="text-align:right">test left <a href='#' style="display:block; text-align:right">test right</a></p>
<p style="text-align:right">left <a href='#' style="float:right">right</a></p>
testing

<!-- ## <div style="display:flex; justify-content:space-between">Overview <a name="overview"></a> [Return to menu](#toc) </div>

<div style="display: flex; justify-content: space-between"> <a href="google.com">google</a> <div style="display:inline"> <a href='google.com'>test</a> </div></div>

<p style="text-align: right"> text right </p> -->

Welcome to Bookgle!

Bookgle is a full-stack SPA (Single Page Application) that allows users to search, save and preview books online.

The front-end was developed with React Router to maximize efficacy of component-driven design.

---

<!-- ![bookgle-recording](./client/public/bookgle-recording.gif)  -->
<!-- <img src="https://github.com/danninemx/google-books-search/blob/master/client/public/bookgle-recording.gif" alt="Bookgle recording" style="align:center;text-align:center" height="640"> -->
<img src="https://github.com/danninemx/google-books-search/blob/master/client/public/bookgle-recording.gif" alt="Bookgle recording" align="center" height="640">

---

## Instructions <a name="instructions"></a>

### 1. Visit the [deployed page](https://bookgle.herokuapp.com).

Alternatively, user can install the app locally via GitHub, Node and NPM/Yarn:

```js
git clone https://github.com/danninemx/google-books-search.git
npm i     # or yarn
npm start # or yarn run start
```

### 2. Search for a book.

Entering a keyword and pressing "Search" will query Google Books for matching books, then display the following for each:

- `Title` - Title of the book from the Google Books API

- `Authors` - The books's author(s) as returned from the Google Books API

- `Description` - The book's description as returned from the Google Books API

- `Image` - The Book's thumbnail image as returned from the Google Books API

- `Link` - The Book's information link as returned from the Google Books API

These properties are also saved in the database.

### 3. Additional actions

Once a search has returned some results, user can:

- View the details on Google Books website
- Save a book to the "Saved" page or remove it

Additionally, Socket.io implementation allow

---

## Technologies <a name="technologies"></a>

- [Node.js](https://nodejs.org/en/)
- [NPM: Axios](https://www.npmjs.com/package/axios)
- [NPM: Express](https://www.npmjs.com/package/express)
- [NPM: If-Env](https://www.npmjs.com/package/if-env)
- [NPM: Mongoose](https://www.npmjs.com/package/mongoose)
- [NPM: Set-Value](https://www.npmjs.com/package/set-value)
- [NPM: Socket.io](https://www.npmjs.com/package/socket.io)
- [NPM: Socket.io-client](https://www.npmjs.com/package/socket.io-client)
- [React](https://github.com/facebookincubator/create-react-app)
- [React Router](https://www.npmjs.com/package/react-router-dom)
- [Heroku](https://heroku.com)
- [Heroku Add-on: mLab MongoDB](https://elements.heroku.com/addons/mongolab)

---

## Future Development <a name="future"></a>

- Additional data sources and media types
- Profile personalization
- Share function
- User notification

---

## Developer <a name="team"></a>

- [Danny Kim](https://github.com/danninemx)
