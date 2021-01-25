var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(-1);
  let head = dummy;

  while (l1 !== null && l1 !== null) {
    if (l1.val <= l1.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }
  return head.next;
};
mergeTwoLists([1, 2, 3], [1, 3, 4]);
