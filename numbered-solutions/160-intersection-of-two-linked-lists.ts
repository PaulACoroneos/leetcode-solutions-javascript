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

// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//     if(!headA || !headB) return null;
    
//     const ASet = new Set();
    
//     let ptra = headA, ptrb = headB;
    
//     //fill hash table with first val/nodes. Only take first node of a val since LL is not unique
//     while (ptra.next !== null) {
//         ASet.add(ptra);
//         ptra = ptra.next;
//     }
    
//     while(ptrb.next !== null) {
//         if(ASet.has(ptrb)) {
//             return ptrb;
//         }
//         ptrb = ptrb.next;
//     }
    
//     return null;
// };

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if(!headA || !headB) return null;
  
  let ptra = headA, ptrb = headB;
  
  while(ptra !== ptrb) {
      if(!ptra) {
          ptra = headB;
      }
      else {
          ptra = ptra.next;
      }
      if (!ptrb) {
          ptrb = headA;
      }
      else {
          ptrb = ptrb.next;
      }
  }
  
  return ptra;
  
};