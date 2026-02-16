let totalRuns = 0;
let totalWickets = 0;
let ballsCount = 0;
let over = 1;

const scoreline = document.getElementById("scoreline");
const scoreboard = document.getElementById("scorehead");

scoreline.innerHTML = "Over " + over + ":";

const checkOver = () => {
  ballsCount++;

  if (ballsCount % 6 === 0) {
    over++;
    scoreline.innerHTML +=
      " | Total : " + totalRuns + "<br> Over " + over + ":";
  }
};
const isGameOver = () => {
  if (totalWickets >= 10) {
    alert("All out!");
    return true;
  }
  return false;
};
const updateBoard = () =>
  (scoreboard.innerHTML = +totalRuns + "/" + totalWickets);

updateBoard();

const dot = () => {
  if (isGameOver()) return;
  scoreline.innerHTML += " . ";
  checkOver();
};

const sg = () => {
  if (isGameOver()) return;
  totalRuns += 1;
  scoreline.innerHTML += " 1 ";
  updateBoard();
  checkOver();
};

const db = () => {
  if (isGameOver()) return;
  totalRuns += 2;
  scoreline.innerHTML += " 2 ";
  updateBoard();
  checkOver();
};

const tri = () => {
  if (isGameOver()) return;
  totalRuns += 3;
  scoreline.innerHTML += " 3 ";
  updateBoard();
  checkOver();
};

const bound = () => {
  if (isGameOver()) return;
  totalRuns += 4;
  scoreline.innerHTML += " 4 ";
  updateBoard();
  checkOver();
};

const five = () => {
  if (isGameOver()) return;
  totalRuns += 5;
  scoreline.innerHTML += " 5 ";
  updateBoard();
  checkOver();
};

const air = () => {
  if (isGameOver()) return;
  totalRuns += 6;
  scoreline.innerHTML += " 6 ";
  updateBoard();
  checkOver();
};

const wicket = () => {
  if (isGameOver()) return;
  totalWickets++;
  scoreline.innerHTML += " wkt ";
  updateBoard();
  checkOver();
};

const wide = () => {
  if (isGameOver()) return;
  totalRuns++;
  scoreline.innerHTML += " 1wd";
  updateBoard();
};

const nb = () => {
  if (isGameOver()) return;
  totalRuns++;
  scoreline.innerHTML += " 1nb";
  updateBoard();
};
