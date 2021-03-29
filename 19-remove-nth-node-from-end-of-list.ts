/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let startPtr = dummy;
  let endPtr = dummy;
  
  //offset endPtr by n+1 from startPtr initially
  while( n > -1) {
      endPtr = endPtr?.next || null;
      n--;
  }

  //now move pointers until end falls off end of list (null)
  while(endPtr != null) {
      endPtr = endPtr.next;
      startPtr = startPtr.next;
  }
      
  //start ptr now points to node before node to remove. Point this node to next next node or null if we are at end of list
  startPtr.next = startPtr?.next?.next;

  return dummy.next;
};