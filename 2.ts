function greeter(person: string) {
  return 'Hello, ' + person
}

let user = 'Jane User'

// Throws error because it's not a string
// let user = [0, 1, 2]

console.log(greeter(user))
