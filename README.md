# Frontend Mentor - FAQ Accordion Card

![Design preview for the FAQ Accordion Card coding challenge](./design/desktop-preview.jpg)

## Welcome 

I started to solve real-world HTML, CSS and JavaScript challenges on [Frontend Mentor](https://www.frontendmentor.io) to improve my front-end skills by building real projects.

## The challenge

Your challenge is to build out this FAQ accordion card and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

Here is my [solutions](https://faq-accordion-card-mian.vercel.app/). Please let me know if you have any suggestions.

## What I learned

- I use [reset.css](http://meyerweb.com/eric/tools/css/reset/) to reset all the css to default. The only codes I added is 'box-sizing: border-box;'.
- How to horizontal and vertical align a 'absolute' div in body? Set top and left to 50% then set margin top and left to minus half of the height and width separately.
- In style.css '/' needed to add to the start of the url to direct to the root directory.
- To show the accordion fold and unfold effect 'max-height' needs to be used. When it's fold set 'max-height' to 0. When it's unfold set 'max-height' to 'scrollHeight'.
- Use '@media screen and (max-width: ??px)' to show the upper boundary of the screen size.
- Another way to horizontal align a 'absolute' div: 'left: 0; right: 0; margin-left: auto; margin-right: auto; width: ??px'.