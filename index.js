let homeScore = 0;
let awayScore = 0;
homeEl = document.getElementById("hm-el");
awayEl = document.getElementById("aw-el");
refresh();


function newGame() {
    homeScore = 0;
    awayScore = 0;
    homeEl.innerText = homeScore;
    awayEl.innerText = awayScore;
}

function incrementHome(score) {
    homeScore += score;
    refresh();
}

function incrementAway(score) {
    awayScore += score;
    refresh();
}

function refresh() {
    homeEl.innerText = homeScore;
    awayEl.innerText = awayScore; 
}