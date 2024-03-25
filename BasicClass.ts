/**
*
* This class creates a list of strings
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

export class BasicClass {
  // Array that contains all of the string
  private array: string[]

  // Creates the array
  public constructor() {
    this.array = []
  }

  // Returns a bool that says whether the array is empty or not
  public get isEmpty() {
    let empty = false

    if (this.array.length == 0) {
      empty = true
    }

    return empty
  }

  // Returns the last element of the array
  public get peekItem() {
    return this.array[this.array.length - 1]
  }

  // Returns a formatted version of the array
  public get showStack() {
    let stackValues = "The array is empty."

    if (this.array.length > 0) {
      stackValues = this.array[0]
      for (let counter = 1; counter < this.array.length; counter++) {
        stackValues = stackValues + ", " + this.array[counter]
      }
    }

    return stackValues
  }

  // Returns the size of the array
  public get size() {
    return this.array.length
  }

  // Clears the entire array
  public clearStack() {
    this.array = []
    console.log('\nThe array has been cleared!')
  }

  // Pushes the strings to the arary
  public push(string: string) {
    this.array.push(string)
  }

  // Removes the top string from the array
  // this.array.pop()
  public pop() {
    let removedValue = "nothing"

    if (this.array.length > 0) {
      removedValue = '"' + this.array[this.array.length - 1] + '"'
      let newArray = []

      for (let counter = 0; counter < this.array.length - 1; counter++) {
        newArray[counter] = this.array[counter]
      }
      this.array = newArray
    }

    return removedValue
  }

}

