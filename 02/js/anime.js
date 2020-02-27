let controller = new ScrollMagic.Controller()


// пытаюсь заанимировать розовый треугольник

let triangle_2 = document.querySelector('#t-2')
let triangle2Animation = anime({
  targets: triangle_2,
  translateX: 376,
  translateY: 1226,
  rotate: [0, 360],
  duration: 1500,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: triangle_2
})
.addTo(controller)
.on('enter', () => triangle2Animation.play())
// не дергаются по скроллу

//  c-0

let circle_0 = document.querySelector('#c-0')
let circle0animation = anime({
  targets: circle_0,
  translateY: 1040,
  duration: 1500,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: circle_0
})
.addTo(controller)
.on('enter', () => circle0animation.play())
// не двигаются с места

// l-0

let line_0 = document.querySelector('#l-0')
let line0animation = anime({
  targets: line_0,
  translateY: 1500,
  duration: 1200,
  // не на том месте и пропали стили
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line_0
})
.addTo(controller)
.on('enter', () => line0animation.play())

// l-2

let line_2 = document.querySelector('#l-2')
let line2animation = anime({
  targets: line_2,
  rotate: (0, 360),
  duration: 1000,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: line_2
})
.addTo(controller)
.on('enter', () => line2animation.play())

//  b-2

let box_2 = document.querySelector('#b-2')
let box2animation = anime({
  targets: box_2,
  rotate: (0, 240),
  duration: 1200,
  autoplay: false
})
new ScrollMagic.Scene({
  triggerElement: box_2
})
.addTo(controller)
.on('enter', () => box2animation.play())

// остальные элементы будут падать как моя скидка - стремительно и красиво
