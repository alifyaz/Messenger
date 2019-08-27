This project was created using React.<br>
**Caution: before using, please be sure to read [this part](https://github.com/alifyaz/Messenger#be-sure-to-read-me)**

# Messenger

## Intro

In this repo, you can see a web messenger app.<br>
The project `isn't completed` yet, therefore you can't use the whole thing!<br>
So far, design of every pages is available.

**Note: for more details about what happened during the developing, you can check commits. Hope they help you come over it :)**

## How to use

First of all, let's say I am sure you **are** able to run React projects<br>
But if not, follow the instructions described [here](https://github.com/alifyaz/Messenger/tree/master/messenger#available-scripts).

## Be sure to read me!

Messenger contains three parts:<br>
* Sign Up
* Login
* Messenger

In the project, after you run `npm start`, you'll see the `Messenger` part first.<br>
To be able to see other 2 pages, do the following:<br>
* go to `App.js` inside `src` folder
* find `currentPageTitle` inside `constructor()` method
* change the value of `currentPageTitle` from `'Messenger'` to `'SignUp'` to see the `Sign Up page`
* **OR:** change the value of `currentPageTitle` from `'Messenger'` to `'Login'` to see the `Login page`

## Current Plan

I'm some how done with designs and .scss works..<br>
Project is redux-less! So I'm adding `Redux` to it.