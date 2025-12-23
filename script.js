function setTimeMode() {
  const hour = new Date().getHours();
  const body = document.body;

  body.classList.remove("day", "sunset", "night");

  if (hour >= 6 && hour < 18) {
    body.classList.add("day");
  } else if (hour >= 18 && hour < 21) {
    body.classList.add("sunset");
  } else {
    body.classList.add("night");
  }
}

setTimeMode();

/* обновлять каждые 10 минут */
setInterval(setTimeMode, 600000);
