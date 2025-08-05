class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    // Re-indexing
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last element that is now 'undefined'
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const deletedItem = this.data[index];

    // Re-indexing
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last item thst is now 'undefined'
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }

  get(index) {
    return this.data[index];
  }

  getFullArray() {
    return this.data;
  }
}

const myNewArray = new MyArray();
myNewArray.push("one");
myNewArray.push("two");
myNewArray.push("three");
myNewArray.push("four");
myNewArray.push("five");

// console.log(myNewArray.deleteByIndex(2));
// console.log(myNewArray.getFullArray());

/**
 * Reverse String
 *
 * convert string to array
 * reverse the array
 * convert array back to string
 */
const reverseString = (str) => str.split("").reverse().join("");
// console.log(reverseString("Mohosin"));

/**
 * Palindrome
 */
const palindrome = (word) => word.split("").reverse().join("") === word;
// console.log(palindrome("eye"));

/**
 * Int Reversal
 */
const intReverse = (int) => {
  const reversed = int.toString().split("").reverse().join("");
  return parseInt(reversed);
};
// console.log(intReverse(203));

/**
 * Capitalize First Letter
 */
