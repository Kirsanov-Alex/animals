class Animals{

  constructor(age,title,weight,limbAmout)
  {
    this.age = age;
    this.title = title;
    this.weight = weight;
    this.limbAmout = limbAmout
  }

  move(mv){
    console.log(`I can ${mv}`) ;
}
  say(text){
    console.log(`I say ${text}`);
  }
  eat(food){
    console.log(`I eat ${food}`);
  }
  static isAnimalClass(obj){
    return obj instanceof this;
  }
  static MaxAge = 120
  static MaxWeight = 10000
}


class Mamals extends Animals{ static MaxAge = 50;}

class Birds extends Animals{ }

class Fish extends Animals{ }

class Predators extends Mamals{}

class Whales extends Mamals{ }

class Primates extends Mamals{ move(){console.log('I can run everywhere');
}
}
class Human extends Primates{
  static isHumans(obj){
    return obj instanceof this;
  }
}  

class Dog extends Predators{ }

class Dolphin extends Whales{ }


const evgen = new Human(33,'Evgeniy', 75, 4);
const nikolay = new Human(55, 'Nikolay', 85, 4);
const dog = new Dog(8,'Albert', 40, 4);
const lion = new Predators(3, 'King', );
const shark = new Fish(15, 'Hunter', 580, 'tale');
const dolphin = new Dolphin(13, 'Grisha', 50, 'tale');
const parrot = new Birds(1,'Anatoliy', 1, 4);
const chiken = new Birds(3,'chiken', 5, 4);

console.log(evgen);
evgen.say('hi')
evgen.eat('vegan food')
evgen.move()

console.log(nikolay);
nikolay.say('hello my friends')
nikolay.eat('everything')

console.log(dog);
dog.eat('feed')
dog.move('move fast')

console.log(lion);
lion.eat('meat')

console.log(dolphin);
dolphin.move('swim')

console.log(shark);
shark.eat('fish')

console.log(parrot);
parrot.move('fly')
parrot.say('chirik')

console.log(Human.isHumans(evgen));
console.log(Human.isHumans(shark));
console.log(Animals.isAnimalClass(lion));

console.log(Animals.MaxWeight);
console.log(Animals.MaxAge);
console.log(Predators.MaxAge);