"use strict";

(function () {
  const Stack = function () {
    let arr = [];
    function push(val) {
      arr.push(val);
    }
    function pop() {
      return arr.pop();
    }
    function size() {
      return arr.length - 1;
    }
    function isEmpty() {
      return !arr.length;
    }
    function peek() {
      return arr[arr.length - 1];
    }
    function print() {
      return arr.join(" ");
    }

    return {
      push,
      pop,
      size,
      peek,
      isEmpty,
      print,
    };
  };

  const decimalToBinary = function (number) {
    const binaryStack = Stack();
    let tempNum = number;
    do {
      const remainder = tempNum % 2;
      tempNum = Math.floor(tempNum / 2);
      binaryStack.push(remainder);
    } while (tempNum !== 0);

    return binaryStack.print();
  };

  const empList = Stack();
  empList.push(1);
  empList.push(2);
  empList.push(3);
  empList.push(4);
  empList.push(5);
  console.log("empl : ", empList.print());
  console.log("size : ", empList.size());
  console.log("peek : ", empList.peek());

  console.log("15 in binary is : ", decimalToBinary(15));
})();
