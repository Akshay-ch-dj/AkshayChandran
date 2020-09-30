## Smooth scroll effect in websites
---

Smooth scroll effect in scrolling can be achieved in many ways,(credits: Brad Traversy From Traversy Media)

1. Using only CSS.

    With the [scroll behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) property.

    ```css
    scroll-behavior: smooth;
    ```
    Look in the [Can I use](https://caniuse.com/) website for compatibility with different browsers.
    It is not compatible with mainly before 2015yr technologies and devices.

    To do it disable the main scrolling for the `body`, and set the main containers properties (or set within the body itself) as below.
    ```css
    body{
        overflow: hidden;
    }

    .container{
        overflow-y: scroll;
        scroll-behavior: smooth;
    }
    ```
2. With jquery (all browser compatible)

   Add jquery minified CDN to the html(don't use slim, cz it is needed the animate classes)\
   ```javascript
    // Grab the links from the navbar
    $('.navbar a').on('click', function(e){
        //console.log(this.hash);  // Gives the clicked link id
        // Check it
        if (this.hash != ''){
            // To prevent the default behavior
            e.preventDefault();
            const hash = this.hash;

            // Target the body, call animate method(takes in an object)
            $('html, body').animate({
                scrollTop: $(hash).offset().top;
            },
            //Scroll Speed
            800
            );
        }
    });
   ```
3. Using the [smoothscroll](https://github.com/cferdinandi/smooth-scroll) plugin

   It is its final version the repository archived as because the all major modern browsers,
   support the css method, but to use it.

   Add the script

   <script src="https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js"></script>

   and set the links,
   ```javascript
   const scroll = new SmoothScroll(
       '.navbar a[href = "#"]'{
           speed: 800
       }
   );
   ```

## Another useful CSS scrolling effect: Snap Effect

On scroll, it helps simply to stick to main sections, to use it\
set the main `container`

   ```css
   /* y-axis only */
   scroll-snap-type: y mandatory;
   ```
   Then to `section`s
   ```css
   section{
       scroll-snap-align: center;
   }
   ```