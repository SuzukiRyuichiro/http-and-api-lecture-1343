// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = "https://www.boredapi.com/api/activity/";

// select the button
const button = document.querySelector(".btn-warning.btn");
// add an event listener
// callback function as the 2nd argument
// button.addEventListener("click", (event) => {
//   // i disable the button
//   // button.disabled = true;
//   event.currentTarget.disabled = true;
//   // randomly choose an activity
//   const activities = ["Nap", "Go shopping", "Yoga 🧘"];
//   const activity = activities[Math.floor(Math.random() * activities.length)];
//   // and set the inside text of button to it
//   button.innerText = activity;
// });

button.addEventListener("click", () => {
  // make a request to the API
  fetch(url)
    // when received the response, parse the JSON
    .then((response) => response.json())
    .then((data) => {
      insertActivity(data);
    });
});

const insertActivity = (data) => {
  const header = document.querySelector("#activity");
  // extract activity from JSON
  // insert the text into the h2 element
  header.innerText = data.activity;
};
