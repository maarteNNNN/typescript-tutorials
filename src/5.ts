class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    // Refer to variable (name) in the class Animal
    // typscriptlang.org Docs
    // One difference from the prior example is that each derived class that contains a constructor function must call super() which will execute the constructor of the base class. What’s more, before we ever access a property on this in a constructor body, we have to call super(). This is an important rule that TypeScript will enforce.
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    // Refer to move funtion in the class Animal
    super.move(distanceInMeters)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let toronado: Animal = new Horse("Zorro's Toronado")

sam.move()
toronado.move(34)
