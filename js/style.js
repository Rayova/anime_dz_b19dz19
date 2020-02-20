// line
let lineanimation = anime({
  targets: 'line',
  translateX: 250,
  direction: 'alternate',
  loop: true,
  easing: 'cubicBezier(.5, .05, .1, .3)',
  autoplay: false
})
let P = document.gelElementById('P')
P.onclick = lineanimation.play
