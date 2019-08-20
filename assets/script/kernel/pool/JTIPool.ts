/**
* name 
*/

export interface JTIPool
{
        cls:any;

        items:any[];

        get():any

        getObject(createClassName:string):any

        put(obj:any):void

        length():number;

        remove(item:any):any

        dispose():void

        isAvailable():boolean

        totalCount:number;
}
