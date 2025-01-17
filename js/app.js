console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const section = document.createElement('section')
	section.id = 'middle-earth'
	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++) {

		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement('article') //created id 
		//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i] //gave article an id
		//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.textContent = lands[i]
		landArticle.appendChild(landName) //land name is our h1, and we were to include the h1-this adds h1 to land article
		//   2d. appends each land to the middle-earth section
		section.appendChild(landArticle)//append section to our document
	}

	// 3. append the section to the body of the DOM.
	document.body.appendChild(section)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	const theShire = document.getElementById('The-Shire')
	console.log('this is the shire', theShire)
	// display an `unordered list` of hobbits in the shire
	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbits'
	// give each hobbit a class of `hobbit`
	for (let i = 0; i < hobbits.length; i++) {
		//create an li for each hobbit
		const liHobbit = document.createElement('li')
		//give each hobbit a class
		liHobbit.className = 'hobbit'
		//give each hobbit some text
		liHobbit.textContent = hobbits[i]
		//append each hobbit to the ul
		ulHobbits.appendChild(liHobbit)

	}
	// hint: create a 'ul' outside the loop into which to append the 'li's
	theShire.appendChild(ulHobbits) //appends ul to shire
	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div') //creates a div
	oneRingDiv.id = 'the-ring' //names the div id
	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry' //gives div a class name
	// add the ring as a child of `Frodo`
	// we want to target frodo specifically 
	//so we'll start with the ul, by it's id
	const ulHobbits = document.querySelector('#hobbits')
	// then we'll need to look at how we can target the individual li's from there
	const hobbitsArray = ulHobbits.children
	const frodoLi = hobbitsArray[0]

	frodoLi.appendChild(oneRingDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	const mordor = document.getElementById('Mordor')
	// display an unordered list of baddies in Mordor
	const ulBaddy = document.createElement('ul')
	ulBaddy.id = 'baddies'
	// give each of the baddies a class of "baddy"
	for(let i =0; i < baddies.length; i++) {
		const liBaddy = document.createElement('li')
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddies[i]
		ulBaddy.appendChild(liBaddy)
	}
	mordor.append(ulBaddy)
	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
	const aside = document.createElement('aside')
	aside.id = 'asideId'
	console.log('this is aside', aside)
	// create an `aside` tag

	const ulBuddies = document.createElement('ul')
	ulBuddies.id = 'buddies'

	for(let i = 0; i < buddies.length; i++) {
		const liBuddies = document.createElement('li')
		liBuddies.className = 'buddy'
		liBuddies.textContent = buddies[i]
		ulBuddies.appendChild(liBuddies)
	}
	aside.appendChild(ulBuddies)
	// put an `unordered list` of the `'buddies'` in the aside
	
	// insert your aside as a child element of `rivendell`
	
	const asideBuddies = document.getElementById('Rivendell')
	asideBuddies.append(aside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const moveHobbits = document.getElementById('hobbits')
	console.log('goodbye hobbits!', moveHobbits)
	const removeFromShire = document.getElementById('The-Shire')
	// assemble the `hobbits` and move them to `rivendell`

	for (let i = 0; i < hobbits.length; i++) {
		const liHobbit = document.createElement('li')
		liHobbit.className = 'hobbit'
		liHobbit.textContent = hobbits[i]
		console.log(liHobbit)
		document.getElementById('buddies').appendChild(liHobbit)
	}
	removeFromShire.removeChild(moveHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementsByClassName('buddy')[3].innerHTML= "Aragorn"
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	const theFellowship = document.createElement('div')
	const rivendell = document.getElementById('Rivendell')
	theFellowship.id = 'the-fellowship'
	rivendell.appendChild(theFellowship)
	// create a new div called `'the-fellowship'` within `rivendell`
	let fellowBuddies = document.querySelectorAll('.buddy') 
	let fellowHobbits = document.querySelectorAll('.hobbit') 

	for(i = 0; i < fellowBuddies.length; i++) {	
		theFellowship.appendChild(fellowBuddies[i])
		alert(fellowBuddies[i].innerText + ' joined your party')
	}
	for(i = 0; i < fellowHobbits.length; i++) {	
		theFellowship.appendChild(fellowHobbits[i])
		alert(fellowHobbits[i].innerText + ' joined your party')
	}
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	document.getElementsByClassName('buddy')[0].innerHTML= "Gandalf the White"
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalfWhite = document.getElementsByClassName('buddy')[0]
	gandalfWhite.style.background = 'white'
	gandalfWhite.style.border = '2px solid grey'
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	alert('THE HORN OF GONDOR HAS BEEN BLOWN!')
	// pop up an alert that the horn of gondor has been blown
	alert('Boromirs been killed by the Uruk-hai!')
	// Boromir's been killed by the Uruk-hai!
	const killBormir = document.getElementsByClassName('buddy')[4]
	killBormir.parentNode.removeChild(killBormir)
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	const moveFrodo = document.getElementsByClassName('hobbit')[0]
	const moveSam = document.getElementsByClassName('hobbit')[1]
	const mordor = document.getElementById('Mordor')
	const intoMordor = document.getElementById('baddies')

	moveFrodo.parentNode.removeChild(moveFrodo)
	moveSam.parentNode.removeChild(moveSam)
	
	intoMordor.appendChild(moveFrodo)
	intoMordor.appendChild(moveSam)
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`

	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	mordor.appendChild(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	const gollum = document.createElement('div')
	gollum.id = 'gollum'

	const mordor = document.getElementById('Mordor')
	mordor.appendChild(gollum)
	// Create a div with an id of `'gollum'` and add it to Mordor

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(gollum)
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	const removeGollum = document.getElementById('gollum')
	removeGollum.parentNode.removeChild(removeGollum)
	// remove `Gollum` and `the Ring` from the document
	const hobbitUl = document.createElement('ul')
	hobbitUl.id = hobbitUl
	const removeHobbits = document.querySelectorAll('.hobbit')
	for(i = 0; i < removeHobbits.length; i++) {
		hobbitUl.appendChild(removeHobbits[i])
	}
	const theShire = document.getElementById('The-Shire')
	theShire.appendChild(hobbitUl)

	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
