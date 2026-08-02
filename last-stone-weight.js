//In the name of Cross
/**
 * @param {number[]} stones
 * @return {number}
 */

const priorityMaxQueue = {
  list: [],
  addItems: function addItems(items) {
    items.forEach((element) => {
      this.list.push(element);

      this.sortArrayDownUp();
    });
    return this;
  },
  addItem: function addItem(item) {
    this.list.push(item);
    this.sortArrayDownUp();
    return this;
  },
  sortArrayDownUp: function sortArrayDownUp() {
    let newItemIndex = this.list.length - 1;
    while (newItemIndex != -1) {
      let parentIndex = Math.ceil(newItemIndex / 2) - 1;
      if (this.list[parentIndex] < this.list[newItemIndex]) {
        let temp = this.list[newItemIndex];

        this.list[newItemIndex] = this.list[parentIndex];

        this.list[parentIndex] = temp;
        newItemIndex = parentIndex;
      } else break;
    }
    return this;
  },
  getMaxNumber: function getMinNumber() {
    const lastElementIndex = this.list.length - 1;
    const temp = this.list[0];
    this.list[0] = this.list[lastElementIndex];
    this.list[lastElementIndex] = temp;
    const maxNumber = this.list.pop();
    this.sortArrayUpDown();
    return maxNumber;
  },
  sortArrayUpDown: function sortArrayUpDown() {
    let parentIndex = 0;
    while (parentIndex < this.list.length) {
      const rightChildIndex = parentIndex * 2 + 1;
      const leftChildIndex = parentIndex * 2 + 2;
      const rightChild = this.list[rightChildIndex];
      const leftChild = this.list[leftChildIndex];
      let maxIndex =
        leftChild > rightChild
          ? leftChildIndex
          : rightChild != undefined
            ? rightChildIndex
            : leftChildIndex;
      if (this.list[maxIndex] > this.list[parentIndex]) {
        const temp = this.list[maxIndex];
        this.list[maxIndex] = this.list[parentIndex];
        this.list[parentIndex] = temp;
        parentIndex = maxIndex;
      } else break;
    }
  },
};
var lastStoneWeight = function (stones) {
  const maxHeapSort = priorityMaxQueue;
  const sortedStones = maxHeapSort.addItems(stones);
  console.log(`Stones after sorting: ${sortedStones.list}`);
  while (sortedStones.list.length > 1) {
    const x = sortedStones.getMaxNumber();
    // console.log(`Stones after getting x: ${sortedStones.list}`);

    const y = sortedStones.getMaxNumber();
    // console.log(`Stones after getting y: ${sortedStones.list}`);
    // console.log(`and x, y is: ${x}, ${y}`);
    const resultOfSmashing = Math.abs(x - y);
    sortedStones.addItem(resultOfSmashing);
  }
  return sortedStones.getMaxNumber();
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(
  lastStoneWeight([
    191, 193, 552, 881, 68, 337, 209, 749, 58, 923, 300, 43, 121, 185, 977, 454,
    151, 83, 97, 282, 561, 58, 692, 550, 949, 931, 465, 29, 295, 412,
  ]),
);
