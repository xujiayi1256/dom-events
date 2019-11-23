// TODO: write your code here
let cell1 = document.getElementById("player1_race");
let cell2 = document.getElementById("player2_race");
let table = document.querySelectorAll(".racer_table tr");

document.addEventListener("keyup", (event) => {
  if (event.key==='q') {
    cell1.insertCell(0);
  } else if (event.key==='p') {
    cell2.insertCell(0);
  }
  table.forEach((item) => {
    if (item.childElementCount>=10) {
      alert("Someone won!")
    }
  });
});


