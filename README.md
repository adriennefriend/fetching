## Fetching

### What are we doing here?

Accepts a user-input URL and returns a list of links from the page.

### About this project

Requests are done with the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), rather than XMLHttpRequest. 

The repo makes use of [Corsa](https://pypi.python.org/pypi/corsa), a Python proxy server, to circumvent CORS (cross-origin resource sharing) limitations by proxying specific URLs. Without corsa, a non-local URL requested through the form is blocked by the browser, and an error appears in the console. Corsa allows us to make HTTP requests to non-local URLs by appearing as though the request is local.

### Getting started

This project was built and tested with [Chrome 54](https://developers.google.com/web/updates/2016/10/nic54). 

1. Clone this repo
2. Because the repo uses Corsa, you will also need to use Corsa.
3. A requirement of using Corsa is having SimpleHTTPServer running. 
Python's SimpleHTTPServer provides a module that will allow you to serve
any folder in your computer like it is on an HTTP server, and allows
you to access it through HTTP.
4. Since you need to have both SimpleHTTPServer and Corsa going, I 
recommend opening two tabs in your terminal, one for SimpleHTTPServer 
and one for corsa.
4. Get started with SimpleHTTPServer.
  * In a fresh terminal tab, cd into the project folder. 
  * python -m SimpleHTTPServer
4. Get started with corsa.
  * In a separate terminal tab, cd into the project folder. 
  * Start a virtual environment with `virtualenv corsa`
  * Activate with . corsa/bin/activate
  * `pip install corsa`
  * Run `corsa --allow-proxy ALL --allow-origin ALL` to start the Corsa 
proxy at `http://localhost:8888/proxy/`
4. Open Chrome and go to http://localhost:8000/

### Running tests

I do not know how to test in JS (...yet.)

### Further documentation

There are a lot of comments in the file. This is because I was learning. 
When you're learning, you often have to Google around, ask friends, play
with things, try things... and sometimes you even get interrupted. I use
comments as breadcrumbs for myself. I know they're not something I should
leave in a production app, but for learning, I'm fine with them being
there. 

### Future hopes for this project

1. Break the large function into smaller functions.
a) Anything that touches the DOM should be pulled out. The final DOM
function should only be concerned with displaying on the page.
b) Fetch should only be concerned with the network request and response.
2. Write tests for these new, smaller functions.
3. Make the project into a React app.
4. Write tests for the React app.
5. Stretch goal: Use ES6 syntax. 

