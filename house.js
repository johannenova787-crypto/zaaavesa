let lingerTimer;

// запускаем отсчёт
function startLingerTimer() {
  lingerTimer = setTimeout(() => {
    document.body.classList.add('linger');
  }, 8000); // 8 секунд тишины
}

// сбрасываем, если человек действует
function resetLinger() {
  clearTimeout(lingerTimer);
  document.body.classList.remove('linger');
  startLingerTimer();
}

startLingerTimer();

document.addEventListener('click', resetLinger);
document.addEventListener('mousemove', resetLinger);
