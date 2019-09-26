import * as $protobuf from "protobufjs";
/** Namespace room. */
export namespace room {

    /** CMD enum. */
    enum CMD {
        UNKNOWN = 0,
        JOIN_ROOM_REQ = 30000,
        JOIN_ROOM_RES = 30001,
        GET_FROM_GATE = 30002,
        SEND_TO_GATE = 30003
    }

    /** Properties of a User. */
    interface IUser {

        /** User userid */
        userid?: (number|null);

        /** User tableType */
        tableType?: (number|null);

        /** User tableId */
        tableId?: (string|null);

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

        /** User userid. */
        public userid: number;

        /** User tableType. */
        public tableType: number;

        /** User tableId. */
        public tableId: string;

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

    /** AssignMode enum. */
    enum AssignMode {
        IMMEDIATELY = 0,
        ROOM = 1,
        QUEUE = 2
    }

    /** Properties of a JoinTableRequest. */
    interface IJoinTableRequest {

        /** JoinTableRequest user */
        user?: (room.IUser|null);
    }

    /** Represents a JoinTableRequest. */
    class JoinTableRequest implements IJoinTableRequest {

        /**
         * Constructs a new JoinTableRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IJoinTableRequest);

        /** JoinTableRequest user. */
        public user?: (room.IUser|null);

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableRequest instance
         */
        public static create(properties?: room.IJoinTableRequest): room.JoinTableRequest;

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link room.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link room.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.JoinTableRequest;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.JoinTableRequest;

        /**
         * Verifies a JoinTableRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinTableRequest
         */
        public static fromObject(object: { [k: string]: any }): room.JoinTableRequest;

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @param message JoinTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.JoinTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableResponse. */
    interface IJoinTableResponse {

        /** JoinTableResponse user */
        user?: (room.IUser|null);

        /** JoinTableResponse assignMode */
        assignMode?: (room.AssignMode|null);
    }

    /** Represents a JoinTableResponse. */
    class JoinTableResponse implements IJoinTableResponse {

        /**
         * Constructs a new JoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: room.IJoinTableResponse);

        /** JoinTableResponse user. */
        public user?: (room.IUser|null);

        /** JoinTableResponse assignMode. */
        public assignMode: room.AssignMode;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableResponse instance
         */
        public static create(properties?: room.IJoinTableResponse): room.JoinTableResponse;

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link room.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: room.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link room.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: room.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): room.JoinTableResponse;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): room.JoinTableResponse;

        /**
         * Verifies a JoinTableResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinTableResponse
         */
        public static fromObject(object: { [k: string]: any }): room.JoinTableResponse;

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @param message JoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: room.JoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
