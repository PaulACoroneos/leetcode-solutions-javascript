//2 pointer approach

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

 function isPalindrome(head: ListNode | null): boolean {
  if(head === null || head.next === null) return true;
  
  const listArr = [];
  
  while(head !== null) {
      listArr.push(head.val);
      head = head.next;
  }
  
  //now traditional 2 pointer 
  let ptra = 0;
  let ptrb = listArr.length-1;
  
  while(ptra <= ptrb) {
      if(listArr[ptra] === listArr[ptrb]) {
          ptra++;
          ptrb--;
      }
      else {
          return false;
      }
  }
  
  return true;
};