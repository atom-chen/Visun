class INode {
    data:any = null;
    _next:INode = null;

    constructor(data:any) {
        this.data = data;
    }
}

export default class List {
    count:number = 0;
    head:INode = null;
    tail:INode = null;

    public push(data:any) {
        var cur = new INode(data);
        if(!this.head) {
            this.head = cur;
            this.tail = this.head;
        }
        else {
            this.tail._next = cur;
            this.tail = cur;
        }
        this.count++;
    }

    public popHead() {
        if(this.tail===this.head) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head._next;
        }
        this.count--;
    }

    public popTail() {

    }

    public remove(idx:number) {
        
    }

    public insert(idx:number, data:any) {
        
    }

    public getByIndex(idx:number) : INode {
        if(idx<0 || idx>this.count) {
            return null;
        }
        var cur = this.head;
        while(idx>1) {
            idx--;
            cur = cur._next;
        }
        return cur;
    }
}
