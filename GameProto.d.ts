import * as $protobuf from "protobufjs";
/** Namespace GameProto. */
export namespace GameProto {

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: (number|null);

        /** User state */
        state?: (number|null);

        /** User tableId */
        tableId?: (string|null);

        /** User nickname */
        nickname?: (string|null);

        /** User headImg */
        headImg?: (string|null);

        /** User sex */
        sex?: (number|null);

        /** User ip */
        ip?: (string|null);

        /** User onLine */
        onLine?: (number|null);

        /** User coin */
        coin?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IUser);

        /** User userId. */
        public userId: number;

        /** User state. */
        public state: number;

        /** User tableId. */
        public tableId: string;

        /** User nickname. */
        public nickname: string;

        /** User headImg. */
        public headImg: string;

        /** User sex. */
        public sex: number;

        /** User ip. */
        public ip: string;

        /** User onLine. */
        public onLine: number;

        /** User coin. */
        public coin: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: GameProto.IUser): GameProto.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link GameProto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link GameProto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.User;

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
        public static fromObject(object: { [k: string]: any }): GameProto.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableRequest. */
    interface IJoinTableRequest {

        /** JoinTableRequest sid */
        sid?: (string|null);
    }

    /** Represents a JoinTableRequest. */
    class JoinTableRequest implements IJoinTableRequest {

        /**
         * Constructs a new JoinTableRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IJoinTableRequest);

        /** JoinTableRequest sid. */
        public sid: string;

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableRequest instance
         */
        public static create(properties?: GameProto.IJoinTableRequest): GameProto.JoinTableRequest;

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link GameProto.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link GameProto.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.JoinTableRequest;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.JoinTableRequest;

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
        public static fromObject(object: { [k: string]: any }): GameProto.JoinTableRequest;

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @param message JoinTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.JoinTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HitRequest. */
    interface IHitRequest {

        /** HitRequest type */
        type?: (number|null);
    }

    /** Represents a HitRequest. */
    class HitRequest implements IHitRequest {

        /**
         * Constructs a new HitRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IHitRequest);

        /** HitRequest type. */
        public type: number;

        /**
         * Creates a new HitRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HitRequest instance
         */
        public static create(properties?: GameProto.IHitRequest): GameProto.HitRequest;

        /**
         * Encodes the specified HitRequest message. Does not implicitly {@link GameProto.HitRequest.verify|verify} messages.
         * @param message HitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IHitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HitRequest message, length delimited. Does not implicitly {@link GameProto.HitRequest.verify|verify} messages.
         * @param message HitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IHitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.HitRequest;

        /**
         * Decodes a HitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.HitRequest;

        /**
         * Verifies a HitRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HitRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HitRequest
         */
        public static fromObject(object: { [k: string]: any }): GameProto.HitRequest;

        /**
         * Creates a plain object from a HitRequest message. Also converts values to other types if specified.
         * @param message HitRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.HitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HitRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserQuitRequest. */
    interface IUserQuitRequest {
    }

    /** Represents a UserQuitRequest. */
    class UserQuitRequest implements IUserQuitRequest {

        /**
         * Constructs a new UserQuitRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IUserQuitRequest);

        /**
         * Creates a new UserQuitRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitRequest instance
         */
        public static create(properties?: GameProto.IUserQuitRequest): GameProto.UserQuitRequest;

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link GameProto.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link GameProto.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.UserQuitRequest;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.UserQuitRequest;

        /**
         * Verifies a UserQuitRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserQuitRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserQuitRequest
         */
        public static fromObject(object: { [k: string]: any }): GameProto.UserQuitRequest;

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @param message UserQuitRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.UserQuitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserOnBackRequest. */
    interface IUserOnBackRequest {
    }

    /** Represents a UserOnBackRequest. */
    class UserOnBackRequest implements IUserOnBackRequest {

        /**
         * Constructs a new UserOnBackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IUserOnBackRequest);

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserOnBackRequest instance
         */
        public static create(properties?: GameProto.IUserOnBackRequest): GameProto.UserOnBackRequest;

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link GameProto.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link GameProto.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.UserOnBackRequest;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.UserOnBackRequest;

        /**
         * Verifies a UserOnBackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserOnBackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserOnBackRequest
         */
        public static fromObject(object: { [k: string]: any }): GameProto.UserOnBackRequest;

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @param message UserOnBackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.UserOnBackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserOnBackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DelayCheckRequest. */
    interface IDelayCheckRequest {

        /** DelayCheckRequest content */
        content?: (string|null);
    }

    /** Represents a DelayCheckRequest. */
    class DelayCheckRequest implements IDelayCheckRequest {

        /**
         * Constructs a new DelayCheckRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IDelayCheckRequest);

        /** DelayCheckRequest content. */
        public content: string;

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckRequest instance
         */
        public static create(properties?: GameProto.IDelayCheckRequest): GameProto.DelayCheckRequest;

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link GameProto.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link GameProto.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.DelayCheckRequest;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.DelayCheckRequest;

        /**
         * Verifies a DelayCheckRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelayCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelayCheckRequest
         */
        public static fromObject(object: { [k: string]: any }): GameProto.DelayCheckRequest;

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @param message DelayCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.DelayCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReconnectRequest. */
    interface IUserReconnectRequest {

        /** UserReconnectRequest userId */
        userId?: (number|null);
    }

    /** Represents a UserReconnectRequest. */
    class UserReconnectRequest implements IUserReconnectRequest {

        /**
         * Constructs a new UserReconnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IUserReconnectRequest);

        /** UserReconnectRequest userId. */
        public userId: number;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectRequest instance
         */
        public static create(properties?: GameProto.IUserReconnectRequest): GameProto.UserReconnectRequest;

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link GameProto.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link GameProto.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.UserReconnectRequest;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.UserReconnectRequest;

        /**
         * Verifies a UserReconnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReconnectRequest
         */
        public static fromObject(object: { [k: string]: any }): GameProto.UserReconnectRequest;

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @param message UserReconnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.UserReconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (GameProto.Request.CMD|null);

        /** Request joinTableRequest */
        joinTableRequest?: (GameProto.IJoinTableRequest|null);

        /** Request hitRequest */
        hitRequest?: (GameProto.IHitRequest|null);

        /** Request userQuitRequest */
        userQuitRequest?: (GameProto.IUserQuitRequest|null);

        /** Request delayCheckRequest */
        delayCheckRequest?: (GameProto.IDelayCheckRequest|null);

        /** Request userOnBackRequest */
        userOnBackRequest?: (GameProto.IUserOnBackRequest|null);

        /** Request userReconnectRequest */
        userReconnectRequest?: (GameProto.IUserReconnectRequest|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IRequest);

        /** Request cmd. */
        public cmd: GameProto.Request.CMD;

        /** Request joinTableRequest. */
        public joinTableRequest?: (GameProto.IJoinTableRequest|null);

        /** Request hitRequest. */
        public hitRequest?: (GameProto.IHitRequest|null);

        /** Request userQuitRequest. */
        public userQuitRequest?: (GameProto.IUserQuitRequest|null);

        /** Request delayCheckRequest. */
        public delayCheckRequest?: (GameProto.IDelayCheckRequest|null);

        /** Request userOnBackRequest. */
        public userOnBackRequest?: (GameProto.IUserOnBackRequest|null);

        /** Request userReconnectRequest. */
        public userReconnectRequest?: (GameProto.IUserReconnectRequest|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: GameProto.IRequest): GameProto.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link GameProto.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link GameProto.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.Request;

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
        public static fromObject(object: { [k: string]: any }): GameProto.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Request {

        /** CMD enum. */
        enum CMD {
            UNKNOWN = 0,
            JOIN_TABLE = 2002,
            HIT = 2006,
            USER_QUIT = 2044,
            USER_ONBACK = 2080,
            DELAY_CHECK = 20010,
            USER_RECONNECT = 2030,
            SEND_JOIN_TABLE = 2005,
            SEND_HIT = 2007,
            SEND_USER_QUIT = 2045,
            SEND_MESSAGE = 2061,
            SEND_DIAMOND_CHANGE = 2071,
            SEND_USER_ONBACK = 2081,
            SEND_USER_RECONNECT = 2031,
            SEND_RECONNECT_QUIT = 2035,
            SEND_HEART_BEAT = 10000
        }
    }

    /** Properties of a JoinTableResponse. */
    interface IJoinTableResponse {

        /** JoinTableResponse users */
        users?: (GameProto.IUser[]|null);
    }

    /** Represents a JoinTableResponse. */
    class JoinTableResponse implements IJoinTableResponse {

        /**
         * Constructs a new JoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IJoinTableResponse);

        /** JoinTableResponse users. */
        public users: GameProto.IUser[];

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableResponse instance
         */
        public static create(properties?: GameProto.IJoinTableResponse): GameProto.JoinTableResponse;

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link GameProto.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link GameProto.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.JoinTableResponse;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.JoinTableResponse;

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
        public static fromObject(object: { [k: string]: any }): GameProto.JoinTableResponse;

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @param message JoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.JoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendJoinTableResponse. */
    interface ISendJoinTableResponse {

        /** SendJoinTableResponse user */
        user?: (GameProto.IUser|null);
    }

    /** Represents a SendJoinTableResponse. */
    class SendJoinTableResponse implements ISendJoinTableResponse {

        /**
         * Constructs a new SendJoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendJoinTableResponse);

        /** SendJoinTableResponse user. */
        public user?: (GameProto.IUser|null);

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendJoinTableResponse instance
         */
        public static create(properties?: GameProto.ISendJoinTableResponse): GameProto.SendJoinTableResponse;

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link GameProto.SendJoinTableResponse.verify|verify} messages.
         * @param message SendJoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link GameProto.SendJoinTableResponse.verify|verify} messages.
         * @param message SendJoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendJoinTableResponse;

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendJoinTableResponse;

        /**
         * Verifies a SendJoinTableResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendJoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendJoinTableResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendJoinTableResponse;

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @param message SendJoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendJoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendJoinTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HitResponse. */
    interface IHitResponse {

        /** HitResponse success */
        success?: (boolean|null);

        /** HitResponse coin */
        coin?: (number|null);

        /** HitResponse awardCoin */
        awardCoin?: (number|null);

        /** HitResponse crit */
        crit?: (boolean|null);
    }

    /** Represents a HitResponse. */
    class HitResponse implements IHitResponse {

        /**
         * Constructs a new HitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IHitResponse);

        /** HitResponse success. */
        public success: boolean;

        /** HitResponse coin. */
        public coin: number;

        /** HitResponse awardCoin. */
        public awardCoin: number;

        /** HitResponse crit. */
        public crit: boolean;

        /**
         * Creates a new HitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HitResponse instance
         */
        public static create(properties?: GameProto.IHitResponse): GameProto.HitResponse;

        /**
         * Encodes the specified HitResponse message. Does not implicitly {@link GameProto.HitResponse.verify|verify} messages.
         * @param message HitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IHitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HitResponse message, length delimited. Does not implicitly {@link GameProto.HitResponse.verify|verify} messages.
         * @param message HitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IHitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.HitResponse;

        /**
         * Decodes a HitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.HitResponse;

        /**
         * Verifies a HitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HitResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.HitResponse;

        /**
         * Creates a plain object from a HitResponse message. Also converts values to other types if specified.
         * @param message HitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.HitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendHitResponse. */
    interface ISendHitResponse {

        /** SendHitResponse userId */
        userId?: (number|null);

        /** SendHitResponse coin */
        coin?: (number|null);

        /** SendHitResponse awardCoin */
        awardCoin?: (number|null);
    }

    /** Represents a SendHitResponse. */
    class SendHitResponse implements ISendHitResponse {

        /**
         * Constructs a new SendHitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendHitResponse);

        /** SendHitResponse userId. */
        public userId: number;

        /** SendHitResponse coin. */
        public coin: number;

        /** SendHitResponse awardCoin. */
        public awardCoin: number;

        /**
         * Creates a new SendHitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendHitResponse instance
         */
        public static create(properties?: GameProto.ISendHitResponse): GameProto.SendHitResponse;

        /**
         * Encodes the specified SendHitResponse message. Does not implicitly {@link GameProto.SendHitResponse.verify|verify} messages.
         * @param message SendHitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendHitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendHitResponse message, length delimited. Does not implicitly {@link GameProto.SendHitResponse.verify|verify} messages.
         * @param message SendHitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendHitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendHitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendHitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendHitResponse;

        /**
         * Decodes a SendHitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendHitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendHitResponse;

        /**
         * Verifies a SendHitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendHitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendHitResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendHitResponse;

        /**
         * Creates a plain object from a SendHitResponse message. Also converts values to other types if specified.
         * @param message SendHitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendHitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendHitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserQuitResponse. */
    interface ISendUserQuitResponse {

        /** SendUserQuitResponse userId */
        userId?: (number|null);

        /** SendUserQuitResponse nickname */
        nickname?: (string|null);

        /** SendUserQuitResponse message */
        message?: (string|null);
    }

    /** Represents a SendUserQuitResponse. */
    class SendUserQuitResponse implements ISendUserQuitResponse {

        /**
         * Constructs a new SendUserQuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendUserQuitResponse);

        /** SendUserQuitResponse userId. */
        public userId: number;

        /** SendUserQuitResponse nickname. */
        public nickname: string;

        /** SendUserQuitResponse message. */
        public message: string;

        /**
         * Creates a new SendUserQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserQuitResponse instance
         */
        public static create(properties?: GameProto.ISendUserQuitResponse): GameProto.SendUserQuitResponse;

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link GameProto.SendUserQuitResponse.verify|verify} messages.
         * @param message SendUserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link GameProto.SendUserQuitResponse.verify|verify} messages.
         * @param message SendUserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendUserQuitResponse;

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendUserQuitResponse;

        /**
         * Verifies a SendUserQuitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserQuitResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendUserQuitResponse;

        /**
         * Creates a plain object from a SendUserQuitResponse message. Also converts values to other types if specified.
         * @param message SendUserQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendUserQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserQuitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendDiamondChangeResponse. */
    interface ISendDiamondChangeResponse {

        /** SendDiamondChangeResponse userId */
        userId?: (number|null);

        /** SendDiamondChangeResponse diamond */
        diamond?: (number|null);
    }

    /** Represents a SendDiamondChangeResponse. */
    class SendDiamondChangeResponse implements ISendDiamondChangeResponse {

        /**
         * Constructs a new SendDiamondChangeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendDiamondChangeResponse);

        /** SendDiamondChangeResponse userId. */
        public userId: number;

        /** SendDiamondChangeResponse diamond. */
        public diamond: number;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDiamondChangeResponse instance
         */
        public static create(properties?: GameProto.ISendDiamondChangeResponse): GameProto.SendDiamondChangeResponse;

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link GameProto.SendDiamondChangeResponse.verify|verify} messages.
         * @param message SendDiamondChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendDiamondChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link GameProto.SendDiamondChangeResponse.verify|verify} messages.
         * @param message SendDiamondChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendDiamondChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendDiamondChangeResponse;

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendDiamondChangeResponse;

        /**
         * Verifies a SendDiamondChangeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendDiamondChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendDiamondChangeResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendDiamondChangeResponse;

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @param message SendDiamondChangeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendDiamondChangeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDiamondChangeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserOnBackResponse. */
    interface ISendUserOnBackResponse {

        /** SendUserOnBackResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendUserOnBackResponse. */
    class SendUserOnBackResponse implements ISendUserOnBackResponse {

        /**
         * Constructs a new SendUserOnBackResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendUserOnBackResponse);

        /** SendUserOnBackResponse userId. */
        public userId: number;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserOnBackResponse instance
         */
        public static create(properties?: GameProto.ISendUserOnBackResponse): GameProto.SendUserOnBackResponse;

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link GameProto.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link GameProto.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendUserOnBackResponse;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendUserOnBackResponse;

        /**
         * Verifies a SendUserOnBackResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserOnBackResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserOnBackResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendUserOnBackResponse;

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @param message SendUserOnBackResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendUserOnBackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserOnBackResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DelayCheckResponse. */
    interface IDelayCheckResponse {

        /** DelayCheckResponse content */
        content?: (string|null);
    }

    /** Represents a DelayCheckResponse. */
    class DelayCheckResponse implements IDelayCheckResponse {

        /**
         * Constructs a new DelayCheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IDelayCheckResponse);

        /** DelayCheckResponse content. */
        public content: string;

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckResponse instance
         */
        public static create(properties?: GameProto.IDelayCheckResponse): GameProto.DelayCheckResponse;

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link GameProto.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link GameProto.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.DelayCheckResponse;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.DelayCheckResponse;

        /**
         * Verifies a DelayCheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelayCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelayCheckResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.DelayCheckResponse;

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @param message DelayCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.DelayCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendMessageResponse. */
    interface ISendMessageResponse {

        /** SendMessageResponse content */
        content?: (string|null);
    }

    /** Represents a SendMessageResponse. */
    class SendMessageResponse implements ISendMessageResponse {

        /**
         * Constructs a new SendMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendMessageResponse);

        /** SendMessageResponse content. */
        public content: string;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMessageResponse instance
         */
        public static create(properties?: GameProto.ISendMessageResponse): GameProto.SendMessageResponse;

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link GameProto.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link GameProto.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendMessageResponse;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendMessageResponse;

        /**
         * Verifies a SendMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendMessageResponse;

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @param message SendMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserReconnectResponse. */
    interface ISendUserReconnectResponse {

        /** SendUserReconnectResponse userId */
        userId?: (number|null);

        /** SendUserReconnectResponse onLine */
        onLine?: (number|null);
    }

    /** Represents a SendUserReconnectResponse. */
    class SendUserReconnectResponse implements ISendUserReconnectResponse {

        /**
         * Constructs a new SendUserReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendUserReconnectResponse);

        /** SendUserReconnectResponse userId. */
        public userId: number;

        /** SendUserReconnectResponse onLine. */
        public onLine: number;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserReconnectResponse instance
         */
        public static create(properties?: GameProto.ISendUserReconnectResponse): GameProto.SendUserReconnectResponse;

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link GameProto.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link GameProto.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendUserReconnectResponse;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendUserReconnectResponse;

        /**
         * Verifies a SendUserReconnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserReconnectResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendUserReconnectResponse;

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @param message SendUserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendUserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserReconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendReconnectQuitResponse. */
    interface ISendReconnectQuitResponse {

        /** SendReconnectQuitResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendReconnectQuitResponse. */
    class SendReconnectQuitResponse implements ISendReconnectQuitResponse {

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendReconnectQuitResponse);

        /** SendReconnectQuitResponse userId. */
        public userId: number;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReconnectQuitResponse instance
         */
        public static create(properties?: GameProto.ISendReconnectQuitResponse): GameProto.SendReconnectQuitResponse;

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link GameProto.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link GameProto.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendReconnectQuitResponse;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendReconnectQuitResponse;

        /**
         * Verifies a SendReconnectQuitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendReconnectQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendReconnectQuitResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendReconnectQuitResponse;

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @param message SendReconnectQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendReconnectQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReconnectQuitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReconnectResponse. */
    interface IUserReconnectResponse {

        /** UserReconnectResponse users */
        users?: (GameProto.IUser[]|null);
    }

    /** Represents a UserReconnectResponse. */
    class UserReconnectResponse implements IUserReconnectResponse {

        /**
         * Constructs a new UserReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IUserReconnectResponse);

        /** UserReconnectResponse users. */
        public users: GameProto.IUser[];

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectResponse instance
         */
        public static create(properties?: GameProto.IUserReconnectResponse): GameProto.UserReconnectResponse;

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link GameProto.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link GameProto.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.UserReconnectResponse;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.UserReconnectResponse;

        /**
         * Verifies a UserReconnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReconnectResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.UserReconnectResponse;

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @param message UserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.UserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendHeartBeatResponse. */
    interface ISendHeartBeatResponse {

        /** SendHeartBeatResponse currentTime */
        currentTime?: (number|Long|null);
    }

    /** Represents a SendHeartBeatResponse. */
    class SendHeartBeatResponse implements ISendHeartBeatResponse {

        /**
         * Constructs a new SendHeartBeatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.ISendHeartBeatResponse);

        /** SendHeartBeatResponse currentTime. */
        public currentTime: (number|Long);

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendHeartBeatResponse instance
         */
        public static create(properties?: GameProto.ISendHeartBeatResponse): GameProto.SendHeartBeatResponse;

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link GameProto.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link GameProto.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.SendHeartBeatResponse;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.SendHeartBeatResponse;

        /**
         * Verifies a SendHeartBeatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendHeartBeatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendHeartBeatResponse
         */
        public static fromObject(object: { [k: string]: any }): GameProto.SendHeartBeatResponse;

        /**
         * Creates a plain object from a SendHeartBeatResponse message. Also converts values to other types if specified.
         * @param message SendHeartBeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.SendHeartBeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendHeartBeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (GameProto.Response.ErrorCode|null);

        /** Response serverTime */
        serverTime?: (number|Long|null);

        /** Response cmd */
        cmd?: (GameProto.Request.CMD|null);

        /** Response joinTableResponse */
        joinTableResponse?: (GameProto.IJoinTableResponse|null);

        /** Response sendJoinTableResponse */
        sendJoinTableResponse?: (GameProto.ISendJoinTableResponse|null);

        /** Response hitResponse */
        hitResponse?: (GameProto.IHitResponse|null);

        /** Response sendHitResponse */
        sendHitResponse?: (GameProto.ISendHitResponse|null);

        /** Response sendMessageResponse */
        sendMessageResponse?: (GameProto.ISendMessageResponse|null);

        /** Response sendUserQuitResponse */
        sendUserQuitResponse?: (GameProto.ISendUserQuitResponse|null);

        /** Response sendDiamondChangeResponse */
        sendDiamondChangeResponse?: (GameProto.ISendDiamondChangeResponse|null);

        /** Response sendUserOnBackResponse */
        sendUserOnBackResponse?: (GameProto.ISendUserOnBackResponse|null);

        /** Response delayCheckResponse */
        delayCheckResponse?: (GameProto.IDelayCheckResponse|null);

        /** Response sendUserReconnectResponse */
        sendUserReconnectResponse?: (GameProto.ISendUserReconnectResponse|null);

        /** Response userReconnectResponse */
        userReconnectResponse?: (GameProto.IUserReconnectResponse|null);

        /** Response sendReconnectQuitResponse */
        sendReconnectQuitResponse?: (GameProto.ISendReconnectQuitResponse|null);

        /** Response sendHeartBeatResponse */
        sendHeartBeatResponse?: (GameProto.ISendHeartBeatResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: GameProto.IResponse);

        /** Response error. */
        public error: GameProto.Response.ErrorCode;

        /** Response serverTime. */
        public serverTime: (number|Long);

        /** Response cmd. */
        public cmd: GameProto.Request.CMD;

        /** Response joinTableResponse. */
        public joinTableResponse?: (GameProto.IJoinTableResponse|null);

        /** Response sendJoinTableResponse. */
        public sendJoinTableResponse?: (GameProto.ISendJoinTableResponse|null);

        /** Response hitResponse. */
        public hitResponse?: (GameProto.IHitResponse|null);

        /** Response sendHitResponse. */
        public sendHitResponse?: (GameProto.ISendHitResponse|null);

        /** Response sendMessageResponse. */
        public sendMessageResponse?: (GameProto.ISendMessageResponse|null);

        /** Response sendUserQuitResponse. */
        public sendUserQuitResponse?: (GameProto.ISendUserQuitResponse|null);

        /** Response sendDiamondChangeResponse. */
        public sendDiamondChangeResponse?: (GameProto.ISendDiamondChangeResponse|null);

        /** Response sendUserOnBackResponse. */
        public sendUserOnBackResponse?: (GameProto.ISendUserOnBackResponse|null);

        /** Response delayCheckResponse. */
        public delayCheckResponse?: (GameProto.IDelayCheckResponse|null);

        /** Response sendUserReconnectResponse. */
        public sendUserReconnectResponse?: (GameProto.ISendUserReconnectResponse|null);

        /** Response userReconnectResponse. */
        public userReconnectResponse?: (GameProto.IUserReconnectResponse|null);

        /** Response sendReconnectQuitResponse. */
        public sendReconnectQuitResponse?: (GameProto.ISendReconnectQuitResponse|null);

        /** Response sendHeartBeatResponse. */
        public sendHeartBeatResponse?: (GameProto.ISendHeartBeatResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: GameProto.IResponse): GameProto.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link GameProto.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: GameProto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link GameProto.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: GameProto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameProto.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameProto.Response;

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
        public static fromObject(object: { [k: string]: any }): GameProto.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: GameProto.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Response {

        /** ErrorCode enum. */
        enum ErrorCode {
            NO_ERROR = 0,
            COIN_NOT_ENOUGH = 10,
            JOIN_TABLE_ERROR = 3007,
            HIT_ERROR = 3008,
            NOCHARGE_ERROR = 3009,
            USER_QUIT_ERROR = 3013,
            RECONNET_ERROR = 3025,
            SEND_MESSAGE_ERROR = 3040,
            USER_ONBACK_ERROR = 3056,
            DELAY_CHECK_ERROR = 3201
        }
    }
}
