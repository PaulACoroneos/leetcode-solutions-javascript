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

 function detectCycle(head: ListNode | null): ListNode | null {
  //base cases
  if (!head || head.next === null) return null;

  //set 2 pointers 2 apart
  let ptra = head, ptrb = head;

  while (ptra.next !== null) {
    ptra = ptra.next;
    ptrb = ptrb?.next?.next;
    if (ptra === ptrb) 
      return cycleChecker(head,ptrb);
  }
  return null;
};
    
function cycleChecker(head:ListNode,intersection:ListNode): ListNode {
    let ptra = head, ptrb = intersection;
    
    while (ptra !== ptrb) {
        ptra = ptra.next;
        ptrb = ptrb.next
    }
    return ptra;
}
    