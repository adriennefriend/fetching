// DOM Elements used
var userForm = document.querySelector("#url-form");
var userInput = document.querySelector("#url-input");
var linkList = document.querySelector("#link-list");

// The big function :-(
function fetchURLs(event) {
    event.preventDefault();  // Don't submit the form, which triggers a page refresh

    // Construct the URL with the proxy + the user-submitted value
    var url = "http://localhost:8888/proxy/" + userInput.value;
    userForm.reset();   // Send input box back to default state

    // Cleanup the linkList before fetching new links (like, for another URL)
    linkList.innerHTML = "";

    // var url = `http://localhost:8888/proxy${input.value}` (new JS dialect)
    // using a template literal ^^ it is the same as line 30

    // Fetch boilerplate
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            // Parse data from fetch
            // console.log(data);  // debugging aid shows everything (not necessary tho)
            var temp = document.createElement("div");
            temp.innerHTML = data;

            // Get all links from temp
            var links = temp.querySelectorAll("a");

            // Append each link to the link list
            for (var link of links) {
                // <li></li>
                var li = document.createElement("li");
                // <li><a></a></li>
                // Extract textContent to drop any child nodes in the <a></a>
                // li.innerHTML = `${link.textContent}: ${link.href}`   // issue is here. We are appending the link to the li element
                // li.innerHTML = "<a href='" + link.href + "'>" link.textContent + "</a>"; -- this line is cleaned up in 61
                li.innerHTML = `<a href="${link.href}">${link.textContent}</a>`;
                // <ul><li><a>
                linkList.appendChild(li);
            }
        })
        .catch(function (error) {
            // Log the error
            console.log(error.message);
        });

    console.log(userInput.value);
}
// Makes things happen
userForm.addEventListener("submit", fetchURLs, false);
