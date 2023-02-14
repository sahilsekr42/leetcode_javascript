/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    return reverse(head);
    function reverse(link){
        if(link==null||link.next==null){return link;}
        let reversed = reverse(link.next);
        link.next.next = link;
        link.next = null;
        return reversed;
    }
};