/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

//constant space means the data used by the algorithm does not grow with the input size

class llnode{
  constructor(value,next=null) {
    this.value = value;
    this.next = next;
  }

  addNext(anotherNode) {
    this.next = anotherNode;
    return anotherNode;
  }
}

const getlast = (startNode,k) => {
  let total = 0;
  let prev = null;
  let now = startNode;
  let kthLast = startNode;
  let prekth = null;
  while (now.next != null) {
    if (total >= k) {prekth = kthLast; kthLast = kthLast.next}
    prev = now;
    now = now.next;
    total++;
  }
  return kthLast;
}

let root = new llnode(0)
let node1 = new llnode(1)
let node2 = new llnode(2)
let node3 = new llnode(3)
let node4 = new llnode(4)
let node5 = new llnode(5)
let node6 = new llnode(6)
root.addNext(node1)
node1.addNext(node2)
node2.addNext(node3)
node3.addNext(node4)
node4.addNext(node5)
node5.addNext(node6)


$(document).ready(function() {
    $('#output-section-1').text(1);
});
