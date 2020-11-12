function setDate() {
  const pointerHours = document.querySelector(".pointer-hours");
  const pointerMins = document.querySelector(".pointer-mins");
  const pointerSeconds = document.querySelector(".pointer-seconds");

  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  pointerSeconds.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 12) * 360 + 90;
  pointerMins.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getMinutes();
  const hourDegrees = (mins / 12) * 360 + 90;
  pointerHours.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
