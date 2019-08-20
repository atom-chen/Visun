/**
* name 对象池元素接口
*/

export interface JTIPoolObject
{
	/**
	* 回收对象
	* 在使用JTPool.put()方法时会自动调用此方法
	*/
	recycle():void
}
