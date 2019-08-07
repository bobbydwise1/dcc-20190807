/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.
*/

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

let root = new llnode(0)
let node1 = new llnode(1)
let node2 = new llnode(2)
root.addNext(node1)
node1.addNext(node2)

$(document).ready(function() {
    $('#output-section-1').text(1);
});
