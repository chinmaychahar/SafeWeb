const SECONDS_EXPECTED = 40;
const ONE_SECOND = 1000;
const counterTag = document.getElementById("count");

function countDown() {
  let counter = SECONDS_EXPECTED;

  const interval = setInterval(() => {
    counterTag.innerHTML = `${counter} seconds`;
    counter--;

    if (counter < 0) {
      counterTag.innerHTML = "Break Time Done!";
      clearInterval(interval);
    }
  }, ONE_SECOND);
}

window.onload = countDown();
