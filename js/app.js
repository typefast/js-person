
//clear
var clearButton = document.getElementById('clear');
//body
var personBody = document.getElementById('personBody');
//arm buttons
var addLeftArmButton = document.getElementById('addLeftArm');
var addRightArmButton = document.getElementById('addRightArm');
//leg buttons
var addLeftLegButton = document.getElementById('addLeftLeg');
var addRightLegButton = document.getElementById('addRightLeg');
//Face
var addFaceButton = document.getElementById('addFace');
//heart
var addHeartButton = document.getElementById('addHeart');


function addLeftArm() {
	var leftArm = document.createElement("div");
	leftArm.className = "leftArm";
	personBody.appendChild(leftArm);
}

function addRightArm() {
	var rightArm = document.createElement("div");
	rightArm.className = "rightArm";
	personBody.appendChild(rightArm);
}

function addLeftLeg() {
	var leftLeg = document.createElement('div');
	leftLeg.className = "leftLeg";
	personBody.appendChild(leftLeg);
}

function addRightLeg() {
	var rightLeg = document.createElement('div');
	rightLeg.className = "rightLeg";
	personBody.appendChild(rightLeg);
}

function addFace() {
	var face = document.createElement('div');
	face.className = "face";
	personBody.appendChild(face);
}

function addHeart() {
	var heart = document.createElement('div');
	var heartPart = document.createElement('div');
	heart.className = "heart";
	heartPart.className = "heartPart";

	heart.className += " heart";
	heartPart.className += " heart";

	personBody.appendChild(heart);
	personBody.appendChild(heartPart);
}

function clearAll() {
	while (personBody.firstChild) {
		personBody.removeChild(personBody.firstChild);
	}
}


addLeftArmButton.addEventListener('click', addLeftArm);
addRightArmButton.addEventListener('click', addRightArm);
addLeftLegButton.addEventListener('click', addLeftLeg);
addRightLegButton.addEventListener('click', addRightLeg);
addFaceButton.addEventListener('click', addFace);
addHeartButton.addEventListener('click', addHeart);
clearButton.addEventListener('click', clearAll);