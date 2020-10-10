# Intersection Observers for state change

> The intersection observers are more efficient, than event listeners for scroll which listens to scroll
> all the time, but with intersection observers, only a particular condition is listened.

* Fast switch between one state to another.
* (Courtesy: Kevin powell youtuber.)

## Intersection Observer API

Its simply lets us observe when things intersect with the page,

Look at this [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) page to get the basic understanding.

The intersection observers are used for many other things such as to change nav bar or background when, same colors
comes in an back of a transparent nav bar, images slide in, popups at certain point, lazy loading of images.
### here it is used to change the navbar background when scrolling.

## It is a nice read too [Things to do with intersection observers](https://css-tricks.com/a-few-functional-uses-for-intersection-observer-to-know-when-an-element-is-in-view/)

* Using it with CSS variables for more clean code.

(Use the `background-blend-mode: multiply;` with `background: <color> <image>;`), to get a nice dimming effect with the image)