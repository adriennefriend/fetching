## Fetching

### What are we doing here?

Accepts a user-input URL and returns a list of links from the page.

Requests are done with the fetch API, rather than XMLHttpRequest. 

The repo makes use of Corsa, a Python proxy server, to circumvent CORS 
(cross-origin resource sharing) limitations by proxying specific URLs. 
Without corsa, a non-local URL requested through the form is blocked by 
the browser, and an error appears in the console. Corsa allows us to 
make HTTP requests to non-local URLs by appearing as though the request 
is local.

### Getting started

This project was built and tested with Chrome. 

1. Clone this repo
2. cd into the directory
3. Because the repo uses Corsa, you'll need to get it running. 
a) Start a virtual environment with `virtualenv corsa`
b) Activate with . corsa/bin/activate
c) `pip install corsa`
d) Run `corsa --allow-proxy ALL --allow-origin ALL` to start the Corsa 
proxy at `http://localhost:8888/proxy/`
4. Open Chrome and go to http://localhost:8000/

### Running tests

I do not know how to test in JS (...yet.)
