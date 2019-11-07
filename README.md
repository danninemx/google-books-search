# <a href="https://bookgle.herokuapp.com"><img src="https://github.com/danninemx/google-books-search/blob/master/client/src/components/Nav/bookgle-logo.png/" alt="Bookgle logo" align="right" width="277" height="84"></a>

## Table of Contents <a name="toc"></a>

- [Overview](#overview)
- [Instructions](#instructions)
- [Technologies](#technologies)
- [Future Development](#future)
- [Developer](#team)

---

<!--
## <div align=">Overview <a name="overview"></a> <a href="https://github.com/danninemx/google-books-search#table-of-contents" align="right">Return to menu</a></div> -->

## <div style="display:flex; justify-content:space-between">Overview <a name="overview"></a> [Return to menu](#toc) </div>

<div style="display: flex; justify-content: space-between"> <a href="google.com">google</a> <div style="display:inline"> <a href='google.com'>test</a> </div></div>

<div style="text-align: right"> text right </div>

Welcome to Bookgle!

Bookgle is a full-stack SPA (Single Page Application) that allows users to search, save and preview books online.

The front-end was developed with React Router to maximize efficacy of component-driven design.

---

![bookgle-recording](./client/public/bookgle-recording.gif)

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

---

## Technologies <a name="technologies"></a>

- [Node.js](https://nodejs.org/en/)
- [NPM: Axios](https://www.npmjs.com/package/axios)
- [NPM: Express](https://www.npmjs.com/package/express)
- [NPM: If-Env](https://www.npmjs.com/package/if-env)
- [NPM: Mongoose](https://www.npmjs.com/package/mongoose)
- [NPM: Set-Value](https://www.npmjs.com/package/set-value)
- [NPM: Socket.io](https://www.npmjs.com/package/socket.io)
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
