// box
console.log(1);
let box_1animation = anime({
  targets: '.box_1',
  width: '50%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
})
let j1 = document.getElementById('j1')
j1.onclick = box_1animation.play
