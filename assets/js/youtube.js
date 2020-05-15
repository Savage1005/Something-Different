
//Define Vars
const API = "AIzaSyCasb87uUTj0u-tiEE4S4BG6P8NKStGnYc";
var query = "cats";
var youLink = "http://youtube.com/watch?v=";

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client
    .init({
      apiKey: API,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"],
    })
    .then(function () {
      // 3. Initialize and make the API request.
      return gapi.client.youtube.search.list({
        part: "snippet",
        maxResults: 10,
        q: query,
      });
    })
    .then(
      function (response) {
        var items = response.result.items;
        for (var i = 0; i < items.length; i++) {
          var id = items[i].id.videoId;
          if (id) {
            console.log(youLink + id)
          }
        }
      },
      function (reason) {
        console.log("Error: " + reason.result.error.message);
      }
    );
}
// 1. Load the JavaScript client library.
gapi.load("client", start);