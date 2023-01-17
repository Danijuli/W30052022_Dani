let result = (x) => x + 2;

console.log(result(3));
/*
function setup() {
  createCanvas(600, 400);
  background(0);

   let myFirstButton = createButton(`press`);
  myFirstButton.mousePressed(changeBackground);

  function changeBackground() {
    background(random(255));
  }
}
*/

function setup() {
  createCanvas(600, 400);
  background(0);

  let myFirstButton = createButton(`press`);
  myFirstButton.position(250, 200);
}
