const model = document.getElementById("app");
let rx = 0;
let ry = 0;
let rz = 0;

function animation() {
  model.style.transform =
    "rotateX(" +
    rx +
    "deg)" +
    "rotateY(" +
    ry +
    "deg)" +
    "rotateZ(" +
    rz +
    "deg)";
  rx += 0.2;
  ry += 1;
  rz += 0;
  setTimeout(animation, 10);
}
animation();
