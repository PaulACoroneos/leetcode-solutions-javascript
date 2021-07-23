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

 function removeElements(head: ListNode | null, val: number): ListNode | null {
  if(!head) return head;
  
  const sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel,curr = head;
  
  while(curr !== null) {
      if(curr.val === val) { 
          prev.next = curr.next;         
      }
      else {
          prev=curr;
      }
      curr = curr.next;
  }
  
  return sentinel.next;
  
};