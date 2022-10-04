function createMenu() {
	const menu = document.createElement("div");
	menu.classList.add("menu");

	menu.appendChild(
		createMenuItem(
			"Classic",
			"Homemade bun, Factory sauce, Tomato, Cheddar, Angus Beef, Pickles, Iceberg salad."
		)
	);
	menu.appendChild(
		createMenuItem(
			"Spicy",
			"Homemade bun, Factory sauce, Tomato, Cheddar, Angus Beef, Pickles, Iceberg salad, Devil sauce."
		)
	);
	menu.appendChild(
		createMenuItem(
			"Double",
			"Homemade bun, Factory sauce, Tomato, Cheddar, Double Angus Beef, Pickles, Iceberg salad."
		)
	);
	menu.appendChild(
		createMenuItem(
			"Bacon",
			"Homemade bun, Bacon, Factory sauce, Tomato, Cheddar, Angus Beef, Pickles, Iceberg salad."
		)
	);

	return menu;
}

function createMenuItem(name, description) {
	const menuItem = document.createElement("div");
	menuItem.classList.add("menu-item");

	const foodName = document.createElement("h2");
	foodName.textContent = name;

	const foodDescription = document.createElement("p");
	foodDescription.textContent = description;

	const foodImage = document.createElement("img");
	foodImage.src = `./images/burgers/${name.toLowerCase()}.jpeg`;
	foodImage.alt = `${name}`;

	menuItem.appendChild(foodImage);
	menuItem.appendChild(foodName);
	menuItem.appendChild(foodDescription);

	return menuItem;
}

function loadMenu() {
	const main = document.getElementById("main");
	main.textContent = "";
	main.appendChild(createMenu());
}

export default loadMenu;
