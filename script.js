//Get aall neededf dom elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamInput = document.getElementById("teamSelect");
const greet = document.getElementById("greeting");
const progressBar = document.getElementById("progressBar");
const attendanceCount = document.getElementById("attendeeCount");

//Track attendance
let count = 0;
const maxCount = 50;
//Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value;
  const team = teamInput.value;
  const teamName = teamInput.selectedOptions[0].text;

  console.log(name, team, teamName);

  //Increment count
  count++;
  attendanceCount.textContent = count;
  console.log(count);

  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(percentage);

  const teamCounter = document.getElementById(team + "Count");
  console.log(teamCounter);
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const message = `🎉 Welcome, ${name} from ${teamName}!`;

  greet.textContent = message;

  greet.style.display = "block";

  const teamCard = document.querySelector(".team-card." + team);

  greet.style.backgroundColor =
    window.getComputedStyle(teamCard).backgroundColor;

  progressBar.style.width = percentage;

  form.reset();
});
