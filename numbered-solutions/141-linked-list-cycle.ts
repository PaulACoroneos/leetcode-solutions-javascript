class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  //base cases
  if (!head || head.next === null) return false;

  //set 2 pointers 2 apart
  let ptra = head, ptrb = head;

  while (ptra.next !== null) {
    ptra = ptra.next;
    ptrb = ptrb?.next?.next;
    if (ptra === ptrb)
      return true;
  }
  return false;
};