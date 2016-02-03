/**
 * Created by Jerome Birembaut @Seraf_NSS on 29/01/16.
 */

var List = function () {

    this.head = null;
    this.tail = null;

};
List.prototype.removeNode = function (node) {

    if (this.head == node) {
        this.head = this.head.next;
    } else if (this.tail == node) {
        this.tail = this.tail.prev;
    }
    if (node.prev)node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.next = node.prev = null;
    if (this.head == null) this.tail = null;

};
List.prototype.prepend = function (data) {
    var node = new ListNode(data);
    this.prependNode(node);
    return node;
};
List.prototype.append = function (data) {
    var node = new ListNode(data);
    this.appendNode(node);
    return node;
};
List.prototype.appendNode = function (node) {

    if (this.head == null) {
        this.head = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
    }
    this.tail = node;
    node.list = this;

};
List.prototype.addNode = function (node) {
    this.appendNode(node);
}
List.prototype.prependNode = function (node) {

    if (this.head != null) {
        var n = this.head;
        n.prev = node;
        node.next = n;
    }

    this.head = node;
    if (this.tail == null) {
        this.tail = node;
    }
    node.list = this;

};
List.prototype.insertAfter = function (node,data) {
    var nnode = new ListNode(data);
    this.insertNodeAfter(nnode,node)
    return nnode;
};
List.prototype.insertBefore = function (node,data) {
    var nnode = new ListNode(data);
    this.insertNodeBefore(nnode,node)
    return nnode;
};
List.prototype.insertNodeAfter = function (nodeInsert,node) {
    if(node==null){
        this.appendNode(nodeInsert);
        return;
    }
    var next = node.next;
    node.next = nodeInsert;
    if(next!=null)next.prev = nodeInsert;
    nodeInsert.prev = node;
    nodeInsert.next = next;

};
List.prototype.insertNodeBefore = function (nodeInsert,node) {
    if(node==null){
        this.appendNode(nodeInsert);
        return;
    }
    var prev = node.prev;
    node.prev = nodeInsert;
    if(prev!=null)prev.next = nodeInsert;
    nodeInsert.prev = prev;
    nodeInsert.next = node;

};
var ListNode = function (data) {

    this.next = null;
    this.prev = null;
    this.data = data;
    this.list = null;

};