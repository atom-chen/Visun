import * as $protobuf from "protobufjs";
/** Namespace room. */
export namespace room {

    /** Properties of a User. */
    interface IUser {

        /** User sessionId */
        sessionId?: (number|Long|null);

        /** User createTime */
        createTime?: (number|Long|null);

        /** User updateTime */
        updateTime?: (number|Long|null);

        /** User userid */
        userid?: (number|null);

        /** User tableId */
        tableId?: (string|null);

        /** User channelId */
        channelId?: (number|null);

        /** User remoteAddr */
        remoteAddr?: (string|null);

        /** User onBack */
        onBack?: (number|null);

        /** User gameNo */
        gameNo?: (number|null);

        /** User gameNum */
        gameNum?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IUser);

        /** User sessionId. */
        public sessionId: (number|Long);

        /** User createTime. */
        public createTime: (number|Long);

        /** User updateTime. */
        public updateTime: (number|Long);

        /** User userid. */
        public userid: number;

        /** User tableId. */
        public tableId: string;

        /** User channelId. */
        public channelId: number;

        /** User remoteAddr. */
        public remoteAddr: string;

        /** User onBack. */
        public onBack: number;

        /** User gameNo. */
        public gameNo: number;

        /** User gameNum. */
        public gameNum: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: room.IUser): room.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link room.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link room.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): room.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssignResponse. */
    interface IAssignResponse {

        /** AssignResponse msgid */
        msgid?: (number|null);

        /** AssignResponse user */
        user?: (room.IUser|null);

        /** AssignResponse assignMode */
        assignMode?: (room.AssignMode|null);
    }

    /** Represents an AssignResponse. */
    class AssignResponse implements IAssignResponse {

        /**
         * Constructs a new AssignResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IAssignResponse);

        /** AssignResponse msgid. */
        public msgid: number;

        /** AssignResponse user. */
        public user?: (room.IUser|null);

        /** AssignResponse assignMode. */
        public assignMode: room.AssignMode;

        /**
         * Creates a new AssignResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssignResponse instance
         */
        public static create(properties?: room.IAssignResponse): room.AssignResponse;

        /**
         * Encodes the specified AssignResponse message. Does not implicitly {@link room.AssignResponse.verify|verify} messages.
         * @param message AssignResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IAssignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssignResponse message, length delimited. Does not implicitly {@link room.AssignResponse.verify|verify} messages.
         * @param message AssignResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IAssignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssignResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.AssignResponse;

        /**
         * Decodes an AssignResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.AssignResponse;

        /**
         * Verifies an AssignResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssignResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssignResponse
         */
        public static fromObject(object: { [k: string]: any }): room.AssignResponse;

        /**
         * Creates a plain object from an AssignResponse message. Also converts values to other types if specified.
         * @param message AssignResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.AssignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssignResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AssignMode enum. */
    enum AssignMode {
        IMMEDIATELY = 0,
        ROOM = 1,
        QUEUE = 2
    }

    /** Properties of a ServerInfo. */
    interface IServerInfo {

        /** ServerInfo roomId */
        roomId?: (number|null);

        /** ServerInfo tableId */
        tableId?: (number|null);

        /** ServerInfo User */
        User?: (number|null);
    }

    /** Represents a ServerInfo. */
    class ServerInfo implements IServerInfo {

        /**
         * Constructs a new ServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IServerInfo);

        /** ServerInfo roomId. */
        public roomId: number;

        /** ServerInfo tableId. */
        public tableId: number;

        /** ServerInfo User. */
        public User: number;

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerInfo instance
         */
        public static create(properties?: room.IServerInfo): room.ServerInfo;

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link room.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link room.ServerInfo.verify|verify} messages.
         * @param message ServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.ServerInfo;

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.ServerInfo;

        /**
         * Verifies a ServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerInfo
         */
        public static fromObject(object: { [k: string]: any }): room.ServerInfo;

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @param message ServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.ServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** CMD enum. */
    enum CMD {
        UNKNOWN = 0,
        JOIN_ROOM_REQ = 40000,
        JOIN_ROOM_RES = 40001,
        GET_FROM_GATE = 101,
        SEND_TO_GATE = 102
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        NO_ERROR = 0,
        OK = 1,
        NO_GET_DATE_ERROR = 2,
        NO_SEND_DATE_ERROR = 3,
        PLAYER_ENOUGH_ERROR = 4
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (room.CMD|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IRequest);

        /** Request cmd. */
        public cmd: room.CMD;

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: room.IRequest): room.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link room.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link room.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): room.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (room.ErrorCode|null);

        /** Response cmd */
        cmd?: (room.CMD|null);

        /** Response assignResponse */
        assignResponse?: (room.IAssignResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IResponse);

        /** Response error. */
        public error: room.ErrorCode;

        /** Response cmd. */
        public cmd: room.CMD;

        /** Response assignResponse. */
        public assignResponse?: (room.IAssignResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: room.IResponse): room.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link room.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link room.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): room.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
