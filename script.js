'use strict'

gsap.registerPlugin(EasePack)

function imageAssembly() {
	const innerElement = document.getElementById('innerContainer')
	for (let i = 0; i < 46; i++) {
		const image = new Image()
		image.src = `img/${i}.jpg`
		innerElement.appendChild(image)
	}
}

imageAssembly()

gsap.set('img', {
	yPercent: -50,
	xPercent: -50,
	top: '50%',
	left: '50%',
	position: 'absolute',
	visibility: 'hidden',
})

function zoom(config) {
	let elements = gsap.utils.toArray(config.elements),
		timeLine = gsap.timeline({ repeat: config.repeat })

	for (let i = 0; i < elements.length; i++) {
		if (i) {
			timeLine
				.to(elements[i - 1], {
					duration: 1,
					scale: 4,
					ease: 'expoScale(2, 4)',
				})
				.set(elements[i - 1], { visibility: 'hidden' })
		}
		timeLine.to(
			elements[i],
			{
				duration: 1,
				autoAlpha: 1,
				scale: 2,
				ease: 'expoScale(1, 2)',
			},
			'-=' + 1
		)
	}
	timeLine.duration(config.duration)
}

zoom({ elements: 'img', repeat: 0, duration: 50 })
