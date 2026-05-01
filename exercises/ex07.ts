// 7.Exercise: Implementing Discriminated Unions

// Create interfaces Bird and Horse with respective properties and a discriminated property breed.

// Implement a function moveAnimal that print how animal moves based on animal (Bird or Horse) parameter received.
// Eg: bird fly, horse gallop.

interface Bird {
	breed: "bird";
	flyingSpeed: number;
}

interface Horse {
	breed: "horse";
	runningSpeed: number;
}

type AnimalUnion = Bird | Horse;

const moveAnimal = (animal: AnimalUnion) => {
	switch (animal.breed) {
		case "bird":
			console.log("bird fly");
			break;
		case "horse":
			console.log("horse gallop");
			break;
	}
};

const myAnimal: Bird = {
	breed: "bird",
	flyingSpeed: 20,
};

moveAnimal(myAnimal);
