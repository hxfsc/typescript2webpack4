function returnItem<T>(para: T): T {
  return para
}


function getArrayLength<T>(arg: Array<T>): number {
  return arg.length
}

console.log(getArrayLength([11, 33, 44, 55, 66, "111"]))


function getValue<T extends object, U extends keyof T>(object: T, key: U) {
  return object[key]
}

const a = {
  name: "hxfsc",
  password: "*****"
}

console.log(getValue(a, "name"))
console.log(getValue(a, "password"))


interface IPerson {
  name: string
  age: number
}

const person = {} as IPerson
person.name = "hxfsc"


class IPerson {
  name = "hxfsc"
  gender = "male"
  test1 = "test1"
}

class IAnimal {
  name = "hxfsc"
  age = 20
  test2 = "test2"
}

function getPersonAnimalClass(param: IPerson | IAnimal) {
  if (param instanceof IPerson) {
    console.log(param.gender)
  }

  if (param instanceof IAnimal) {
    console.log(param.test2)
  }
}


getPersonAnimalClass(new IPerson())
getPersonAnimalClass(new IAnimal())


