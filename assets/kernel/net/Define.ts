export enum ConnState {
	unconnect = 0,
	connecting,
	connected
}

export enum ProcessorType {
	Json,
	Protobuff,
	Stream
}

export enum ChannelType {
	Ws,
	Tcp,
	Udp,
	Http,
}

export enum NetResult {
	Succ = 0,
	Timeout,
	Aborted,
	Error
}
