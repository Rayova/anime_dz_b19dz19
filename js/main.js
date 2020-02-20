let box1animation = anime({
  targets: '.delay-demo .el',
  translateX: 250,
  delay: 1000
});
let box1 = document.getElementByclass('box_1')
box_1.onclick = box1animation.play
