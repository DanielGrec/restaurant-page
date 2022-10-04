function createHome() {
	const home = document.createElement("div");
	home.classList.add("home");

	const homeHeading = document.createElement("h1");
	homeHeading.classList.add("home-heading");
	homeHeading.textContent = "Welcome";
	const homeLogo = document.createElement("img");
	homeLogo.src = "./images/burger.png";
	homeLogo.alt = "Burger Logo";

	const homeTitle = document.createElement("h2");
	homeTitle.classList.add("home-title");
	homeTitle.textContent = "The best burger in town";
	const homePara = document.createElement("p");
	homePara.classList.add("home-para");
	homePara.textContent =
		"We're a small burger factory focusing on making the best burgers for our happy customers.";
	const homeContact = document.createElement("p");
	homeContact.classList.add("home-contact");
	homeContact.textContent =
		"Head over to our contact page to place your order!";

	home.append(homeHeading, homeLogo, homeTitle, homePara, homeContact);
	return home;
}

function loadHome() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.append(createHome());
}

export default loadHome;
