function createContact() {
	const contact = document.createElement("div");
	contact.classList.add("contact");

	const locationDiv = document.createElement("div");
	locationDiv.classList.add("location");
	const locationIcon = document.createElement("i");
	locationIcon.classList.add("fa-solid");
	locationIcon.classList.add("fa-location-dot");
	const locationPara = document.createElement("p");
	locationPara.classList.add("location-para");
	locationPara.textContent = "Bucuresti, Romania";

	locationDiv.append(locationIcon, locationPara);

	const numberDiv = document.createElement("div");
	numberDiv.classList.add("number");
	const numberIcon = document.createElement("i");
	numberIcon.classList.add("fa-solid");
	numberIcon.classList.add("fa-phone");
	const numberPara = document.createElement("p");
	numberPara.classList.add("number-para");
	numberPara.textContent = "+123 456 7890";

	numberDiv.append(numberIcon, numberPara);

	const mapDiv = document.createElement("div");
	mapDiv.classList.add("map");
	const mapImg = document.createElement("img");
	mapImg.src = "./images/map.png";
	mapImg.alt = "Location Map";

	mapDiv.append(mapImg);

	contact.append(locationDiv, numberDiv, mapDiv);
	return contact;
}

function loadContact() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createContact());
}

export default loadContact;
