const textTitle = document.querySelector("#headTitle");
const textLine = "When I Saw You \n I Saw That Love Of My Life";
let idx = 1;
setTimeout(function () {
  setInterval(writeText, 200);
}, 8000);

function writeText() {
  textTitle.innerText = textLine.slice(0, idx);
  idx++;
}
