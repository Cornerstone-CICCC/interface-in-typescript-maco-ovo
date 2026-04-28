/*
2.Exercise: Implementing Multiple Interfaces

- Create two interfaces:
1) Animal with a breed(string) and name (string) properties;
2) SoundMaker with a makeSound method.
- Create a class Pet that implements both Animal and SoundMaker.

- Instantiate a pet object and call the makeSound method to display the pet's sound.
*/

interface Animal {
  breed: string;
  name: string;
}


class Pet implements Animal {
  breed: string;
  name: string;

  constructor(breed: string, name: string) {
    this.breed = breed;
    this.name = name;
  }

  makeSound() : void{
    console.log(`${this.name} says: Woof!`);
  }
}

const myPet = new Pet("Labrador", "Buddy");
myPet.makeSound(); // Buddy says: Woof!