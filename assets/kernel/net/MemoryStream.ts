export default class MemoryStream {
	public buffer:ArrayBuffer = null;
	protected data_view:DataView = null;
	protected little_endian:boolean = false;

	public constructor(size:number) 
	{
		if(size > 0) {
			this.buffer = new ArrayBuffer(size);
			this.data_view = new DataView(this.buffer);
		}
	}

	public setBuffer(buff:ArrayBuffer) 
	{
		this.buffer = buff;
		this.data_view = new DataView(this.buffer);
	}
	
	public expand(offset:number, src:Uint8Array)
	{
		if(!this.buffer || this.buffer.byteLength-offset < src.length){
			this.buffer = new ArrayBuffer(length);
			this.data_view = new DataView(this.buffer);
		}
		var buf = new Uint8Array(this.buffer);
		buf.set(src, offset);
	}

	

	public read_int8(offset:number): number 
	{
		return this.data_view.getUint8(offset);
	}

	public write_int8(offset:number, value:number) 
    {
        this.data_view.setInt8(offset, value);
	}

	public read_int16(offset:number):number 
    {
        return this.data_view.getInt16(offset, this.little_endian);
    }

    public write_int16(offset:number, value:number) 
    {
        this.data_view.setInt16(offset, value, this.little_endian);
	}
	
	public read_int32(offset:number): number 
    {
        return this.data_view.getInt32(offset, this.little_endian);
    }

    public write_int32(offset:number, value:number) 
    {
        this.data_view.setInt32(offset, value, this.little_endian);
	}
	
	public read_uint32(offset:number): number 
    {
        return this.data_view.getUint32(offset, this.little_endian);
    }

    public write_uint32(offset:number, value:number) 
    {
        this.data_view.setUint32(offset, value, this.little_endian);
	}
	
	public read_float32(offset:number): number 
    {
        return this.data_view.getFloat32(offset, this.little_endian);
    }

    public write_float32(offset:number, value:number) 
    {
        this.data_view.setFloat32(offset, value, this.little_endian);
	}

	public read_buffer(offset:number, size:number) : Uint8Array
	{
		var buf = new Uint8Array(this.buffer, offset, size);
		return buf;
	}

	public write_buffer(offset:number, buff:Uint8Array)
	{
		let dvPtr = new Uint8Array(this.data_view.buffer, offset);
		dvPtr.set(buff);
	}

	public safe_write_buffer(offset:number, buff:Uint8Array)
	{
		let dvPtr = new Uint8Array(this.data_view.buffer, offset);
		var len = dvPtr.length;
		for(var i=0; i<len; i++) {
			dvPtr[i] = buff[i];
		}
	}
	
	public read_string(offset:number) : string
	{
		var rpos = offset;
		var buf = new Uint8Array(this.buffer, rpos);
		var i = 0;
		var s = "";
		
		while(true)
		{
			if(buf[i] != 0)
			{
				s += String.fromCharCode(buf[i]);
			}
			else
			{
				i++;
				break;
			}
			
			i++;
			
			if(rpos + i >= this.buffer.byteLength) {
				throw(new Error("MemoryStream::readString: rpos(" + (rpos + i) + ")>=" + this.buffer.byteLength + " overflow!"));
			}
		}
		
		rpos += i;
		return s;
	}

	public write_string(offset:number, value:string)
	{
		if(value.length > this.buffer.byteLength-offset-1)
		{
			cc.log("memorystream::writeString: no free!");
			return;
		}
		
		var buf = new Uint8Array(this.buffer, offset);
		var i = 0;
		for(var idx=0; idx<value.length; idx++)
		{
			buf[i++] = value.charCodeAt(idx);
		}
		
		buf[i++] = 0;
	}

}