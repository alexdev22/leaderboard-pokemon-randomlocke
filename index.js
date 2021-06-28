const healthbar = document.querySelectorAll(".hearths");

healthbar.forEach((hearth) => {
  hearth.textContent = "❤".repeat(hearth.textContent);
});

const daysDiv = document.querySelector("#days");
const hoursDiv = document.querySelector("#hours");
const minutesDiv = document.querySelector("#min");
const secondsDiv = document.querySelector("#seconds");

const countDown = () => {
  // Set Desired Date
  const goalDate = "15 Jul 2021";

  const desiredGoalDate = new Date(goalDate);
  const currentDate = new Date();

  const totalSeconds = (desiredGoalDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 24;
  const seconds = Math.floor(totalSeconds % 24);

  daysDiv.textContent = days + "D :";
  hoursDiv.textContent = hours + "H :";
  minutesDiv.textContent = minutes + "M :";
  secondsDiv.textContent = seconds + "S";
};

// Initial Call
countDown();

setInterval(countDown, 1000);
