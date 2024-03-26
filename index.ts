/**
*
* This program uses a basic class to make an array of strings
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-07
*/

import { BasicClass } from './BasicClass'
import { createPrompt } from 'bun-promptx'

const basicStack = new BasicClass()

const addArray = createPrompt('Input items into the array? (y/n): ')
const addArrayValue = addArray.value
if (addArrayValue == 'y') {
  for (let counter = 0; counter < 3; counter++) {
  // String value
    const string = createPrompt('Enter a string: ')

    const stringValue = string.value
    basicStack.push(stringValue)
  }
}

// Look at the top element of the array
console.log(`The top value is ${basicStack.peekItem}`)

// Remove the top element
const removedValue = basicStack.pop()
console.log(`Removed ${removedValue}`)

// Show the array's length
console.log(`The array has a length of ${basicStack.size}`)

// Clear the array
basicStack.clearStack()

// Show the stack's value
console.log(basicStack.showStack)

// Show the status of the array's emptiness
console.log(`Empitness: ${basicStack.isEmpty}`)

// Show the program as done
console.log('\nDone.')
