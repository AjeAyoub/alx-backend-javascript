// 0-constants.js

// Function taskFirst using const
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  // Function getLast as provided
  export function getLast() {
    return ' is okay';
  }
  
  // Function taskNext using let
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  