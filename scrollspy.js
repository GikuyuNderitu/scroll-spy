// This module will emulate a scrollspy feature, by attaching itself to trigger dom nodes and animating the scroll of the page appropriately

//TODO: Select All Dom Nodes that will Trigger ScrollSpy

//TODO: Add Speed feature
//TODO: Add registration feature that appends the trigger's target node's height to a data element on the node to allow for less compute time

const selectTriggers = () => {
	document.querySelectorAll('.scroll-spy-trigger').forEach((ele) => {
		let worked = appendScrollEffect(ele)
		if(!worked) console.log('Element was not an anchor')
	});
}

const appendScrollEffect = element => {
	const isAnchor = element.hasAttribute('data-target')
	if(!isAnchor) return false
	element.onclick = () => {
		// Abstract this out in registration feature
		let currentTop = window.scrollY
		let targetPos = document.querySelector(`${element.dataset.target}`).getBoundingClientRect().top + currentTop

		animateScroll(targetPos - currentTop, targetPos)
		console.log(`Target Pos: ${targetPos}\nClient Pos: ${currentTop}`);
	}
	let targetPos = document.querySelector(`${element.dataset.target}`).getBoundingClientRect()
	console.log(targetPos);
	return true
}

const animateScroll = (difference, end) => {
	// Set velocity which determines direction
	let velocity = 2

	console.log(difference);

	if(difference < 0) velocity *= -1
	if(end < 0) end *= -1

	let scrolling = window.setInterval(() => {
		window.scroll(0, window.scrollY + velocity)
		const curpos = window.scrollY
		if((curpos >= end - 2 && curpos <= end + 2) || curpos >= document.body.clientHeight - window.innerHeight) return window.clearInterval(scrolling)
	}, .001)
}

selectTriggers()