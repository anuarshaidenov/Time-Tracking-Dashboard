# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

(./images/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: (https://anuarshaidenov.github.io/Time-Tracking-Dashboard/)

## My process

- HTML mockup
- CSS mobile first approach
- JavaScript to handle the json file

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- lodash

### What I learned

In this project I was working with sass. It was my first time working with separate sass files. I now uderstand how helpfull and flexible it actually is to group files.

I came up with nice logic for the JS part of this project. I made use of async functions to read the json file.

I used lodash library for ES6 modules to make the class names for each window element with the kebabCase function.

```js
import kebabCase from "./node_modules/lodash-es/kebabCase.js";

const markup = `
      <div class="window -not-user window--${kebabCase(el.title)}">;
```

I also learnt some new techniques with media queries and how to maintain stable layout on both mobile and desktop views.

```css
@media (max-width: 950px) {
  .-big {
    display: none;
  }

  .-small {
    display: block;
  }
}

@media screen and (min-width: 950px) {
  .-big {
    display: block;
  }

  .-small {
    display: none;
  }
}
```

### Continued development

I want to continue working on the frontendmentor.io website to master my skills. This project I had a lot of spaghetti code but I'm getting a hang of it.

### Useful resources

- (stackoverflow.com) helped me with necessary information about some CSS and JS tricks.

## Author

- instagram - [@044anuar](https://www.instagram.com/044anuar/)
- Twitter - [@anuarnyi](https://www.twitter.com/anuarnyi)
