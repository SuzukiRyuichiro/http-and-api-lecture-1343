// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = "https://www.boredapi.com/api/activity/";
// TODO: When clicked on a button, suggest an activity by changing the button content
// Also: make it disabled

// Get the button
const button = document.querySelector(".btn-warning");
const paragraph = document.querySelector("#activity");

// button.addEventListener("click", (event) => {
//   const activities = ["run", "walk", "laundry"];
//   // Select a random activity
//   const activity = activities[Math.floor(Math.random() * activities.length)];
//   // Change the innerText of the button
//   event.currentTarget.innerText = activity;
//   // Disable the button
//   event.currentTarget.disabled = true;
// });

button.addEventListener("click", () => {
  // make the API call
  fetch(url)
    // Get the response
    .then((response) => response.json())
    .then((data) => {
      // do something with the info (insert it into paragraph)
      insertActivity(data);
    });
});

const insertActivity = (data) => {
  paragraph.innerText = data.activity;
};
