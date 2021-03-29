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

//  function reverseList(head: ListNode | null): ListNode | null {
//   if(!head || head.next === null) return head;
  
//   let prev = null, current=head;
  
//   while(current !== null) {
//       let next = current.next;
//       current.next = prev;
//       prev = current
//       current = next;
//   }
  
//   //prev is new head now!
//   return prev;
// };