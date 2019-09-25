import * as $protobuf from "protobufjs";
/** Namespace hallgw. */
export namespace hallgw {

    /** HallMsgId enum. */
    enum HallMsgId {
        Msg_Unknown = 0,
        Msg_HeartReq = 5000,
        Msg_HeartResp = 5001,
        Msg_UserInfoReq = 20000,
        Msg_UserInfoResp = 20001,
        Msg_GameListReq = 20002,
        Msg_GameListResp = 20003,
        Msg_NoticeNotify = 20004
    }

    /** Properties of a HeartReq. */
    interface IHeartReq {
    }

    /** Represents a HeartReq. */
    class HeartReq implements IHeartReq {

        /**
         * Constructs a new HeartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IHeartReq);

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartReq instance
         */
        public static create(properties?: hallgw.IHeartReq): hallgw.HeartReq;

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link hallgw.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link hallgw.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.HeartReq;

        /**
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.HeartReq;

        /**
         * Verifies a HeartReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.HeartReq;

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @param message HeartReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.HeartReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartResp. */
    interface IHeartResp {

        /** HeartResp serverTime */
        serverTime?: (number|Long|null);
    }

    /** Represents a HeartResp. */
    class HeartResp implements IHeartResp {

        /**
         * Constructs a new HeartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IHeartResp);

        /** HeartResp serverTime. */
        public serverTime: (number|Long);

        /**
         * Creates a new HeartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartResp instance
         */
        public static create(properties?: hallgw.IHeartResp): hallgw.HeartResp;

        /**
         * Encodes the specified HeartResp message. Does not implicitly {@link hallgw.HeartResp.verify|verify} messages.
         * @param message HeartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IHeartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartResp message, length delimited. Does not implicitly {@link hallgw.HeartResp.verify|verify} messages.
         * @param message HeartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IHeartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.HeartResp;

        /**
         * Decodes a HeartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.HeartResp;

        /**
         * Verifies a HeartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.HeartResp;

        /**
         * Creates a plain object from a HeartResp message. Also converts values to other types if specified.
         * @param message HeartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.HeartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RespErr enum. */
    enum RespErr {
        RespErr_Unknown = 0,
        ReqFormatErr = 1,
        UserInfoRespRedisOperErr = 2,
        GameListRespDBOperErr = 3
    }

    /** Properties of a UserInfoReq. */
    interface IUserInfoReq {

        /** UserInfoReq Id */
        Id?: (number|null);
    }

    /** Represents a UserInfoReq. */
    class UserInfoReq implements IUserInfoReq {

        /**
         * Constructs a new UserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IUserInfoReq);

        /** UserInfoReq Id. */
        public Id: number;

        /**
         * Creates a new UserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoReq instance
         */
        public static create(properties?: hallgw.IUserInfoReq): hallgw.UserInfoReq;

        /**
         * Encodes the specified UserInfoReq message. Does not implicitly {@link hallgw.UserInfoReq.verify|verify} messages.
         * @param message UserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoReq message, length delimited. Does not implicitly {@link hallgw.UserInfoReq.verify|verify} messages.
         * @param message UserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.UserInfoReq;

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.UserInfoReq;

        /**
         * Verifies a UserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.UserInfoReq;

        /**
         * Creates a plain object from a UserInfoReq message. Also converts values to other types if specified.
         * @param message UserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.UserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfoResp. */
    interface IUserInfoResp {

        /** UserInfoResp Id */
        Id?: (number|null);

        /** UserInfoResp Account */
        Account?: (string|null);

        /** UserInfoResp Name */
        Name?: (string|null);

        /** UserInfoResp Coin */
        Coin?: (number|Long|null);

        /** UserInfoResp Head */
        Head?: (string|null);
    }

    /** Represents a UserInfoResp. */
    class UserInfoResp implements IUserInfoResp {

        /**
         * Constructs a new UserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IUserInfoResp);

        /** UserInfoResp Id. */
        public Id: number;

        /** UserInfoResp Account. */
        public Account: string;

        /** UserInfoResp Name. */
        public Name: string;

        /** UserInfoResp Coin. */
        public Coin: (number|Long);

        /** UserInfoResp Head. */
        public Head: string;

        /**
         * Creates a new UserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfoResp instance
         */
        public static create(properties?: hallgw.IUserInfoResp): hallgw.UserInfoResp;

        /**
         * Encodes the specified UserInfoResp message. Does not implicitly {@link hallgw.UserInfoResp.verify|verify} messages.
         * @param message UserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfoResp message, length delimited. Does not implicitly {@link hallgw.UserInfoResp.verify|verify} messages.
         * @param message UserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.UserInfoResp;

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.UserInfoResp;

        /**
         * Verifies a UserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.UserInfoResp;

        /**
         * Creates a plain object from a UserInfoResp message. Also converts values to other types if specified.
         * @param message UserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.UserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo Id */
        Id?: (number|null);

        /** GameInfo Name */
        Name?: (string|null);

        /** GameInfo Type */
        Type?: (number|null);

        /** GameInfo State */
        State?: (number|null);

        /** GameInfo Tag */
        Tag?: (number|null);

        /** GameInfo HaveRoomList */
        HaveRoomList?: (number|null);

        /** GameInfo RoomList */
        RoomList?: (string|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IGameInfo);

        /** GameInfo Id. */
        public Id: number;

        /** GameInfo Name. */
        public Name: string;

        /** GameInfo Type. */
        public Type: number;

        /** GameInfo State. */
        public State: number;

        /** GameInfo Tag. */
        public Tag: number;

        /** GameInfo HaveRoomList. */
        public HaveRoomList: number;

        /** GameInfo RoomList. */
        public RoomList: string;

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: hallgw.IGameInfo): hallgw.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link hallgw.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link hallgw.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.GameInfo;

        /**
         * Verifies a GameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): hallgw.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameListReq. */
    interface IGameListReq {
    }

    /** Represents a GameListReq. */
    class GameListReq implements IGameListReq {

        /**
         * Constructs a new GameListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IGameListReq);

        /**
         * Creates a new GameListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameListReq instance
         */
        public static create(properties?: hallgw.IGameListReq): hallgw.GameListReq;

        /**
         * Encodes the specified GameListReq message. Does not implicitly {@link hallgw.GameListReq.verify|verify} messages.
         * @param message GameListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IGameListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameListReq message, length delimited. Does not implicitly {@link hallgw.GameListReq.verify|verify} messages.
         * @param message GameListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IGameListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.GameListReq;

        /**
         * Decodes a GameListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.GameListReq;

        /**
         * Verifies a GameListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameListReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.GameListReq;

        /**
         * Creates a plain object from a GameListReq message. Also converts values to other types if specified.
         * @param message GameListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.GameListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameListResp. */
    interface IGameListResp {

        /** GameListResp List */
        List?: (hallgw.IGameInfo[]|null);
    }

    /** Represents a GameListResp. */
    class GameListResp implements IGameListResp {

        /**
         * Constructs a new GameListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IGameListResp);

        /** GameListResp List. */
        public List: hallgw.IGameInfo[];

        /**
         * Creates a new GameListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameListResp instance
         */
        public static create(properties?: hallgw.IGameListResp): hallgw.GameListResp;

        /**
         * Encodes the specified GameListResp message. Does not implicitly {@link hallgw.GameListResp.verify|verify} messages.
         * @param message GameListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IGameListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameListResp message, length delimited. Does not implicitly {@link hallgw.GameListResp.verify|verify} messages.
         * @param message GameListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IGameListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.GameListResp;

        /**
         * Decodes a GameListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.GameListResp;

        /**
         * Verifies a GameListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameListResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.GameListResp;

        /**
         * Creates a plain object from a GameListResp message. Also converts values to other types if specified.
         * @param message GameListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.GameListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoticeNotify. */
    interface INoticeNotify {

        /** NoticeNotify Content */
        Content?: (string|null);
    }

    /** Represents a NoticeNotify. */
    class NoticeNotify implements INoticeNotify {

        /**
         * Constructs a new NoticeNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.INoticeNotify);

        /** NoticeNotify Content. */
        public Content: string;

        /**
         * Creates a new NoticeNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticeNotify instance
         */
        public static create(properties?: hallgw.INoticeNotify): hallgw.NoticeNotify;

        /**
         * Encodes the specified NoticeNotify message. Does not implicitly {@link hallgw.NoticeNotify.verify|verify} messages.
         * @param message NoticeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.INoticeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoticeNotify message, length delimited. Does not implicitly {@link hallgw.NoticeNotify.verify|verify} messages.
         * @param message NoticeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.INoticeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoticeNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.NoticeNotify;

        /**
         * Decodes a NoticeNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.NoticeNotify;

        /**
         * Verifies a NoticeNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoticeNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoticeNotify
         */
        public static fromObject(object: { [k: string]: any }): hallgw.NoticeNotify;

        /**
         * Creates a plain object from a NoticeNotify message. Also converts values to other types if specified.
         * @param message NoticeNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.NoticeNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoticeNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
