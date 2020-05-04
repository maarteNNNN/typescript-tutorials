class Student {
  fullName: string
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string,
  ) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`
  }

  displayName() {
    return this.fullName
  }
}

interface Person {
  firstName: string
  lastName: string
}

let user4 = new Student('Maarten', 'R. N.', 'Coppens')

console.log(user4.displayName())
