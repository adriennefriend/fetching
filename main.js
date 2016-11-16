/* The first three lines are the DOM elements used throughout the script.
var creates a variable. In this case, I care about three variables:
userForm, userInput, and linkList. I use document's querySelector method
to get url-form, url-input, and link-list. Refer to index.html.
*/

var userForm = document.querySelector("#url-form");
var userInput = document.querySelector("#url-input");
var linkList = document.querySelector("#link-list");

// The big function :-(
function fetchURLs(event) {
    event.preventDefault();
    /* This is added to prevent the form from automatically being submitted, which would
    trigger a page refresh. That is not desired!
    */

    // This constructs the URL with the proxy and the user-submitted value
    var url = "http://localhost:8888/proxy/" + userInput.value;
    userForm.reset();   // A clean-up step. Set the input box back to default state

    // Another clean-up step! Clean the browser-displayed linkList before fetching new links for another URL
    linkList.innerHTML = "";

    // var url = `http://localhost:8888/proxy${input.value}` (new JS dialect)
    // using a template literal ^^ it is the same as line 19

    /* Refer to MDN documentation for more about fetch.
    Fetch provides a browser-native function for modern browsers. However, there are many
    browsers that do not support it. Those will need a polyfill. You will note, no polyfill here!
     */
    // Fetch takes a url and returns a promise.
    fetch(url)
    // Reads the response and passes it to the second .then
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            /* The "worker" part of fetch. Parse the data from fetch. Fetch gets the response
            as a string. The string must be parsed into HTML nodes, the assigned to variable temp.
            */
            // console.log(data);  // a debugging aid.
            var temp = document.createElement("div");
            temp.innerHTML = data;

            // Gets all of the anchor tags. querySelectorAll is run on temp, which was just created
            // and is valid HTML, to get all "a". Store this list in the links variable.
            var links = temp.querySelectorAll("a");

            // In lines 50 - 60, loop over each link, creating a new empty <li> element, and append at the end.
            for (var link of links) {
                // <li></li>
                var li = document.createElement("li");
                /* <li><a></a></li>
                li.innerHTML = `${link.textContent}: ${link.href}`   //  Append link to the li element
                li.innerHTML = "<a href='" + link.href + "'>" link.textContent + "</a>";
                */
                li.innerHTML = `<a href="${link.href}">${link.textContent}</a>`;
                // <ul><li><a>
                linkList.appendChild(li);
                // Append new
            }
        })
        .catch(function (error) {
            // Error handling
            console.log(error.message);
        });

    console.log(userInput.value);
}
// Makes things happen!
userForm.addEventListener("submit", fetchURLs, false);
