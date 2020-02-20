// box_1
let box_1animation = anime({
  targets: '.box_1',
  width: '100%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
})
let b1 = document.getElementById('b1')
b1.onclick = box_1animation.play

// box_4
let box_4animation = anime({
  targets: '.box_4',
  width: '70%', // -> from '28px' to '70%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
})
let b4 = document.getElementById('b4')
b4.onclick = box_4animation.play

// box_5
let box_5animation = anime({
  targets: '.box_5',
  height: '100%', // -> from '28px' to '100%',
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true,
  autoplay: false
})
let b5 = document.getElementById('b5')
b5.onclick = box_5animation.play

// box_6
let box_6animation = anime({
  targets: '.box_6',
  left: '240px',
  backgroundColor: '#051C31',
  borderRadius: ['0%', '50%'],
  easing: 'easeInOutQuad',
  loop: true,
  autoplay: false
})
let b6 = document.getElementById('b6')
b6.onclick = box_6animation.play
