// This module will emulate a scrollspy feature, by attaching itself to trigger dom nodes and animating the scroll of the page appropriately

//TODO: Add Speed feature
//TODO: Add registration feature that appends the trigger's target node's height to a data element on the node to allow for less compute time

const init = () => {
	document.querySelectorAll('.scroll-spy-trigger').forEach((ele) => {
		let worked = appendScrollEffect(ele)
		if(!worked) console.error('Element was not an anchor')
	});
}

const appendScrollEffect = element => {
	const isAnchor = element.hasAttribute('data-target')
	if(!isAnchor) return false
	// Abstract this out in registration feature
	element.onclick = () => {
		let currentTop = window.scrollY
		let targetPos = document.querySelector(`${element.dataset.target}`).getBoundingClientRect().top + currentTop

		animateScroll(targetPos - currentTop, targetPos)
	}
	return true
}

const animateScroll = (difference, end) => {
	// Set velocity which determines direction
	let velocity = 2

	if(difference < 0) velocity *= -1
	if(end < 0) end *= -1

	let scrolling = window.setInterval(() => {
		window.scroll(0, window.scrollY + velocity)
		const curpos = window.scrollY
		if((curpos >= end - 2 && curpos <= end + 2) || curpos >= document.body.clientHeight - window.innerHeight) return window.clearInterval(scrolling)
	}, .001)
}

export default init