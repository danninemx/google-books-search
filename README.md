# <a href="https://bookgle.herokuapp.com">Google Books Search</a> <img src="https://github.com/danninemx/google-books-search/blob/master/client/src/components/Nav/bookgle-logo.png/" alt="Bookgle logo" align="right" height="100"> <a name="top"></a>

## Table of Contents <a name="toc"></a>

- [Overview](#overview)
- [Instructions](#instructions)
- [Technologies](#technologies)
- [Future Development](#future)
- [Developer](#team)

---

## Overview <a name="overview"></a>

<p align='right'><a href='#top'><sup>[Back to Top]</sup></a></p>

Welcome to Bookgle!

Bookgle is a full-stack Single Page Application that allows users to search, save and preview books online.

Simply use the search bar to find a list of books, and away we go.

---

<!-- ![bookgle-recording](./client/public/bookgle-recording.gif)  -->
<p align="center"><img src="https://github.com/danninemx/google-books-search/blob/master/client/public/bookgle-recording.gif" alt="Bookgle recording" height="640"> </p>

---

## Instructions <a name="instructions"></a>

<p align='right'><a href='#top'><sup>[Back to Top]</sup></a></p>

### 1. Visit the deployed site. (https://bookgle.herokuapp.com)

Alternatively, user can install the app locally on via GitHub, Node and NPM/Yarn:

```
git clone https://github.com/danninemx/google-books-search.git
npm i     # or yarn
npm start # or yarn run start
```

This will run a local instance of the app at port 3001 by default and automatically open it for you. If it does not, please visit `localhost:3001` on your web browser.

### 2. Search for a book.

Entering a keyword and pressing "Search" will query Google Books for matching books, then display the following for each book:

- `Title` - Title of the book from the Google Books API

- `Authors` - The books's author(s) as returned from the Google Books API

- `Description` - The book's description as returned from the Google Books API

- `Image` - The Book's thumbnail image as returned from the Google Books API

- `Link` - The Book's information link as returned from the Google Books API

These properties are also saved in the database.

### 3. Take additional actions.

Once a search has returned some results, user can:

- View the details on the Google Books website
- Save a book to the "Saved" page or remove it

Additionally - when a visitor saves a book to the shared list, everyone who is viewing the site at the time<sup>\*</sup> will see an alert on the browser.
<sub>(\* May not work for visitors in privacy/incognito mode)</sub>

#### Desktop Alert

<p align="center"><img src="https://github.com/danninemx/google-books-search/blob/master/client/public/bookgle-alert.png" alt="Bookgle desktop alert" height="268"> </p>

#### Mobile Alert

<p align="center"><img src="https://github.com/danninemx/google-books-search/blob/master/client/public/bookgle-alert-mobile.png" alt="Bookgle mobile alert" height="400"> </p>

---

## Technologies <a name="technologies"></a>

<p align='right'><a href='#top'><sup>[Back to Top]</sup></a></p>

- [Heroku](https://heroku.com)
- [Heroku Add-on: mLab MongoDB](https://elements.heroku.com/addons/mongolab)
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

---

## Future Development <a name="future"></a>

<p align='right'><a href='#top'><sup>[Back to Top]</sup></a></p>

- Additional data sources and media types
- Profile personalization
- Share function
- ~~User notification~~ (Nov 9, 2019: Site now alerts visitor when another visitor saves a book to the shared list)

---

## Developer <a name="team"></a>

<p align='right'><a href='#top'><sup>[Back to Top]</sup></a></p>

- [Danny Kim](https://github.com/danninemx)
