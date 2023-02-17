const SECONDS_EXPECTED = 20;
const ONE_SECOND = 1000;

function countDown() {
  let counter = SECONDS_EXPECTED;
  const interval = setInterval(() => {
    document.getElementById("count").innerHTML = `${counter} seconds`;
    counter--;
    if (counter < 0) clearInterval(interval);
  }, ONE_SECOND);
}

window.onload = countDown();
