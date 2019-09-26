import * as $protobuf from "protobufjs";
/** Namespace hallgw. */
export namespace hallgw {

    /** HallMsgId enum. */
    enum HallMsgId {
        Msg_Unknown = 0,
        Msg_GetUserInfoReq = 20000,
        Msg_GetUserInfoResp = 20001,
        Msg_GetGameListReq = 20002,
        Msg_GetGameListResp = 20003,
        Msg_GetGameConfigReq = 20004,
        Msg_GetGameConfigResp = 20005,
        Msg_ChangeHeadReq = 20006,
        Msg_ChangeHeadResp = 20007,
        Msg_BroadcastNotice = 80000
    }

    /** RespErr enum. */
    enum RespErr {
        RespErr_Unknown = 0,
        ReqFormatErr = 1,
        MsgGetUserInfoRespRedisOperErr = 2,
        MsgGetGameListRespDBOperErr = 3,
        MsgGetGameConfigRespRpcBackErr = 4,
        MsgGetGameConfigRespFormatErr = 5
    }

    /** Properties of a MsgGetUserInfoReq. */
    interface IMsgGetUserInfoReq {

        /** MsgGetUserInfoReq Id */
        Id?: (number|null);
    }

    /** Represents a MsgGetUserInfoReq. */
    class MsgGetUserInfoReq implements IMsgGetUserInfoReq {

        /**
         * Constructs a new MsgGetUserInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgGetUserInfoReq);

        /** MsgGetUserInfoReq Id. */
        public Id: number;

        /**
         * Creates a new MsgGetUserInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGetUserInfoReq instance
         */
        public static create(properties?: hallgw.IMsgGetUserInfoReq): hallgw.MsgGetUserInfoReq;

        /**
         * Encodes the specified MsgGetUserInfoReq message. Does not implicitly {@link hallgw.MsgGetUserInfoReq.verify|verify} messages.
         * @param message MsgGetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgGetUserInfoReq message, length delimited. Does not implicitly {@link hallgw.MsgGetUserInfoReq.verify|verify} messages.
         * @param message MsgGetUserInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgGetUserInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgGetUserInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgGetUserInfoReq;

        /**
         * Decodes a MsgGetUserInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgGetUserInfoReq;

        /**
         * Verifies a MsgGetUserInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGetUserInfoReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgGetUserInfoReq;

        /**
         * Creates a plain object from a MsgGetUserInfoReq message. Also converts values to other types if specified.
         * @param message MsgGetUserInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgGetUserInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGetUserInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgGetUserInfoResp. */
    interface IMsgGetUserInfoResp {

        /** MsgGetUserInfoResp Id */
        Id?: (number|null);

        /** MsgGetUserInfoResp Account */
        Account?: (string|null);

        /** MsgGetUserInfoResp Name */
        Name?: (string|null);

        /** MsgGetUserInfoResp Coin */
        Coin?: (number|Long|null);

        /** MsgGetUserInfoResp Head */
        Head?: (string|null);
    }

    /** Represents a MsgGetUserInfoResp. */
    class MsgGetUserInfoResp implements IMsgGetUserInfoResp {

        /**
         * Constructs a new MsgGetUserInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgGetUserInfoResp);

        /** MsgGetUserInfoResp Id. */
        public Id: number;

        /** MsgGetUserInfoResp Account. */
        public Account: string;

        /** MsgGetUserInfoResp Name. */
        public Name: string;

        /** MsgGetUserInfoResp Coin. */
        public Coin: (number|Long);

        /** MsgGetUserInfoResp Head. */
        public Head: string;

        /**
         * Creates a new MsgGetUserInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGetUserInfoResp instance
         */
        public static create(properties?: hallgw.IMsgGetUserInfoResp): hallgw.MsgGetUserInfoResp;

        /**
         * Encodes the specified MsgGetUserInfoResp message. Does not implicitly {@link hallgw.MsgGetUserInfoResp.verify|verify} messages.
         * @param message MsgGetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgGetUserInfoResp message, length delimited. Does not implicitly {@link hallgw.MsgGetUserInfoResp.verify|verify} messages.
         * @param message MsgGetUserInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgGetUserInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgGetUserInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgGetUserInfoResp;

        /**
         * Decodes a MsgGetUserInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgGetUserInfoResp;

        /**
         * Verifies a MsgGetUserInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGetUserInfoResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgGetUserInfoResp;

        /**
         * Creates a plain object from a MsgGetUserInfoResp message. Also converts values to other types if specified.
         * @param message MsgGetUserInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgGetUserInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGetUserInfoResp to JSON.
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

        /** GameInfo State */
        State?: (number|null);

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

        /** GameInfo State. */
        public State: number;

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

    /** Properties of a MsgGetGameListReq. */
    interface IMsgGetGameListReq {
    }

    /** Represents a MsgGetGameListReq. */
    class MsgGetGameListReq implements IMsgGetGameListReq {

        /**
         * Constructs a new MsgGetGameListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgGetGameListReq);

        /**
         * Creates a new MsgGetGameListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGetGameListReq instance
         */
        public static create(properties?: hallgw.IMsgGetGameListReq): hallgw.MsgGetGameListReq;

        /**
         * Encodes the specified MsgGetGameListReq message. Does not implicitly {@link hallgw.MsgGetGameListReq.verify|verify} messages.
         * @param message MsgGetGameListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgGetGameListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgGetGameListReq message, length delimited. Does not implicitly {@link hallgw.MsgGetGameListReq.verify|verify} messages.
         * @param message MsgGetGameListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgGetGameListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgGetGameListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGetGameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgGetGameListReq;

        /**
         * Decodes a MsgGetGameListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGetGameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgGetGameListReq;

        /**
         * Verifies a MsgGetGameListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGetGameListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGetGameListReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgGetGameListReq;

        /**
         * Creates a plain object from a MsgGetGameListReq message. Also converts values to other types if specified.
         * @param message MsgGetGameListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgGetGameListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGetGameListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgGetGameListResp. */
    interface IMsgGetGameListResp {

        /** MsgGetGameListResp List */
        List?: (hallgw.IGameInfo[]|null);
    }

    /** Represents a MsgGetGameListResp. */
    class MsgGetGameListResp implements IMsgGetGameListResp {

        /**
         * Constructs a new MsgGetGameListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgGetGameListResp);

        /** MsgGetGameListResp List. */
        public List: hallgw.IGameInfo[];

        /**
         * Creates a new MsgGetGameListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGetGameListResp instance
         */
        public static create(properties?: hallgw.IMsgGetGameListResp): hallgw.MsgGetGameListResp;

        /**
         * Encodes the specified MsgGetGameListResp message. Does not implicitly {@link hallgw.MsgGetGameListResp.verify|verify} messages.
         * @param message MsgGetGameListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgGetGameListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgGetGameListResp message, length delimited. Does not implicitly {@link hallgw.MsgGetGameListResp.verify|verify} messages.
         * @param message MsgGetGameListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgGetGameListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgGetGameListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGetGameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgGetGameListResp;

        /**
         * Decodes a MsgGetGameListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGetGameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgGetGameListResp;

        /**
         * Verifies a MsgGetGameListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGetGameListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGetGameListResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgGetGameListResp;

        /**
         * Creates a plain object from a MsgGetGameListResp message. Also converts values to other types if specified.
         * @param message MsgGetGameListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgGetGameListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGetGameListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgChangeHeadReq. */
    interface IMsgChangeHeadReq {

        /** MsgChangeHeadReq UserId */
        UserId?: (number|Long|null);

        /** MsgChangeHeadReq Head */
        Head?: (string|null);
    }

    /** Represents a MsgChangeHeadReq. */
    class MsgChangeHeadReq implements IMsgChangeHeadReq {

        /**
         * Constructs a new MsgChangeHeadReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgChangeHeadReq);

        /** MsgChangeHeadReq UserId. */
        public UserId: (number|Long);

        /** MsgChangeHeadReq Head. */
        public Head: string;

        /**
         * Creates a new MsgChangeHeadReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgChangeHeadReq instance
         */
        public static create(properties?: hallgw.IMsgChangeHeadReq): hallgw.MsgChangeHeadReq;

        /**
         * Encodes the specified MsgChangeHeadReq message. Does not implicitly {@link hallgw.MsgChangeHeadReq.verify|verify} messages.
         * @param message MsgChangeHeadReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgChangeHeadReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgChangeHeadReq message, length delimited. Does not implicitly {@link hallgw.MsgChangeHeadReq.verify|verify} messages.
         * @param message MsgChangeHeadReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgChangeHeadReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgChangeHeadReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgChangeHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgChangeHeadReq;

        /**
         * Decodes a MsgChangeHeadReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgChangeHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgChangeHeadReq;

        /**
         * Verifies a MsgChangeHeadReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgChangeHeadReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgChangeHeadReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgChangeHeadReq;

        /**
         * Creates a plain object from a MsgChangeHeadReq message. Also converts values to other types if specified.
         * @param message MsgChangeHeadReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgChangeHeadReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgChangeHeadReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgChangeHeadResp. */
    interface IMsgChangeHeadResp {
    }

    /** Represents a MsgChangeHeadResp. */
    class MsgChangeHeadResp implements IMsgChangeHeadResp {

        /**
         * Constructs a new MsgChangeHeadResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgChangeHeadResp);

        /**
         * Creates a new MsgChangeHeadResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgChangeHeadResp instance
         */
        public static create(properties?: hallgw.IMsgChangeHeadResp): hallgw.MsgChangeHeadResp;

        /**
         * Encodes the specified MsgChangeHeadResp message. Does not implicitly {@link hallgw.MsgChangeHeadResp.verify|verify} messages.
         * @param message MsgChangeHeadResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgChangeHeadResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgChangeHeadResp message, length delimited. Does not implicitly {@link hallgw.MsgChangeHeadResp.verify|verify} messages.
         * @param message MsgChangeHeadResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgChangeHeadResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgChangeHeadResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgChangeHeadResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgChangeHeadResp;

        /**
         * Decodes a MsgChangeHeadResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgChangeHeadResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgChangeHeadResp;

        /**
         * Verifies a MsgChangeHeadResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgChangeHeadResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgChangeHeadResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgChangeHeadResp;

        /**
         * Creates a plain object from a MsgChangeHeadResp message. Also converts values to other types if specified.
         * @param message MsgChangeHeadResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgChangeHeadResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgChangeHeadResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgNoticeNotify. */
    interface IMsgNoticeNotify {

        /** MsgNoticeNotify Platform */
        Platform?: (number|null);

        /** MsgNoticeNotify Content */
        Content?: (string|null);

        /** MsgNoticeNotify RollCount */
        RollCount?: (number|null);

        /** MsgNoticeNotify DisplayDuration */
        DisplayDuration?: (number|null);
    }

    /** Represents a MsgNoticeNotify. */
    class MsgNoticeNotify implements IMsgNoticeNotify {

        /**
         * Constructs a new MsgNoticeNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgNoticeNotify);

        /** MsgNoticeNotify Platform. */
        public Platform: number;

        /** MsgNoticeNotify Content. */
        public Content: string;

        /** MsgNoticeNotify RollCount. */
        public RollCount: number;

        /** MsgNoticeNotify DisplayDuration. */
        public DisplayDuration: number;

        /**
         * Creates a new MsgNoticeNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgNoticeNotify instance
         */
        public static create(properties?: hallgw.IMsgNoticeNotify): hallgw.MsgNoticeNotify;

        /**
         * Encodes the specified MsgNoticeNotify message. Does not implicitly {@link hallgw.MsgNoticeNotify.verify|verify} messages.
         * @param message MsgNoticeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgNoticeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgNoticeNotify message, length delimited. Does not implicitly {@link hallgw.MsgNoticeNotify.verify|verify} messages.
         * @param message MsgNoticeNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgNoticeNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgNoticeNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgNoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgNoticeNotify;

        /**
         * Decodes a MsgNoticeNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgNoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgNoticeNotify;

        /**
         * Verifies a MsgNoticeNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgNoticeNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgNoticeNotify
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgNoticeNotify;

        /**
         * Creates a plain object from a MsgNoticeNotify message. Also converts values to other types if specified.
         * @param message MsgNoticeNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgNoticeNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgNoticeNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo RoomId */
        RoomId?: (number|null);

        /** RoomInfo RoomName */
        RoomName?: (string|null);

        /** RoomInfo MinCost */
        MinCost?: (number|Long|null);

        /** RoomInfo MaxCost */
        MaxCost?: (number|Long|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IRoomInfo);

        /** RoomInfo RoomId. */
        public RoomId: number;

        /** RoomInfo RoomName. */
        public RoomName: string;

        /** RoomInfo MinCost. */
        public MinCost: (number|Long);

        /** RoomInfo MaxCost. */
        public MaxCost: (number|Long);

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: hallgw.IRoomInfo): hallgw.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link hallgw.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link hallgw.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): hallgw.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameType. */
    interface IGameType {

        /** GameType Id */
        Id?: (number|null);

        /** GameType Name */
        Name?: (string|null);

        /** GameType Order */
        Order?: (number|null);
    }

    /** Represents a GameType. */
    class GameType implements IGameType {

        /**
         * Constructs a new GameType.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IGameType);

        /** GameType Id. */
        public Id: number;

        /** GameType Name. */
        public Name: string;

        /** GameType Order. */
        public Order: number;

        /**
         * Creates a new GameType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameType instance
         */
        public static create(properties?: hallgw.IGameType): hallgw.GameType;

        /**
         * Encodes the specified GameType message. Does not implicitly {@link hallgw.GameType.verify|verify} messages.
         * @param message GameType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IGameType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameType message, length delimited. Does not implicitly {@link hallgw.GameType.verify|verify} messages.
         * @param message GameType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IGameType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.GameType;

        /**
         * Decodes a GameType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.GameType;

        /**
         * Verifies a GameType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameType
         */
        public static fromObject(object: { [k: string]: any }): hallgw.GameType;

        /**
         * Creates a plain object from a GameType message. Also converts values to other types if specified.
         * @param message GameType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.GameType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRelation. */
    interface IGameRelation {

        /** GameRelation GameId */
        GameId?: (number|null);

        /** GameRelation GameName */
        GameName?: (string|null);

        /** GameRelation GameTypeId */
        GameTypeId?: (number|null);

        /** GameRelation GameLabelId */
        GameLabelId?: (number|null);

        /** GameRelation GameLabelName */
        GameLabelName?: (string|null);

        /** GameRelation GameOrder */
        GameOrder?: (number|null);

        /** GameRelation RoomList */
        RoomList?: (hallgw.IRoomInfo[]|null);
    }

    /** Represents a GameRelation. */
    class GameRelation implements IGameRelation {

        /**
         * Constructs a new GameRelation.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IGameRelation);

        /** GameRelation GameId. */
        public GameId: number;

        /** GameRelation GameName. */
        public GameName: string;

        /** GameRelation GameTypeId. */
        public GameTypeId: number;

        /** GameRelation GameLabelId. */
        public GameLabelId: number;

        /** GameRelation GameLabelName. */
        public GameLabelName: string;

        /** GameRelation GameOrder. */
        public GameOrder: number;

        /** GameRelation RoomList. */
        public RoomList: hallgw.IRoomInfo[];

        /**
         * Creates a new GameRelation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRelation instance
         */
        public static create(properties?: hallgw.IGameRelation): hallgw.GameRelation;

        /**
         * Encodes the specified GameRelation message. Does not implicitly {@link hallgw.GameRelation.verify|verify} messages.
         * @param message GameRelation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IGameRelation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRelation message, length delimited. Does not implicitly {@link hallgw.GameRelation.verify|verify} messages.
         * @param message GameRelation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IGameRelation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRelation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.GameRelation;

        /**
         * Decodes a GameRelation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.GameRelation;

        /**
         * Verifies a GameRelation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRelation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRelation
         */
        public static fromObject(object: { [k: string]: any }): hallgw.GameRelation;

        /**
         * Creates a plain object from a GameRelation message. Also converts values to other types if specified.
         * @param message GameRelation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.GameRelation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRelation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameConfig. */
    interface IGameConfig {

        /** GameConfig PlatformId */
        PlatformId?: (number|null);

        /** GameConfig Type */
        Type?: (hallgw.IGameType[]|null);

        /** GameConfig Relation */
        Relation?: (hallgw.IGameRelation[]|null);
    }

    /** Represents a GameConfig. */
    class GameConfig implements IGameConfig {

        /**
         * Constructs a new GameConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IGameConfig);

        /** GameConfig PlatformId. */
        public PlatformId: number;

        /** GameConfig Type. */
        public Type: hallgw.IGameType[];

        /** GameConfig Relation. */
        public Relation: hallgw.IGameRelation[];

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameConfig instance
         */
        public static create(properties?: hallgw.IGameConfig): hallgw.GameConfig;

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link hallgw.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link hallgw.GameConfig.verify|verify} messages.
         * @param message GameConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IGameConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.GameConfig;

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.GameConfig;

        /**
         * Verifies a GameConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameConfig
         */
        public static fromObject(object: { [k: string]: any }): hallgw.GameConfig;

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @param message GameConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.GameConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgGetGameConfigReq. */
    interface IMsgGetGameConfigReq {
    }

    /** Represents a MsgGetGameConfigReq. */
    class MsgGetGameConfigReq implements IMsgGetGameConfigReq {

        /**
         * Constructs a new MsgGetGameConfigReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgGetGameConfigReq);

        /**
         * Creates a new MsgGetGameConfigReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGetGameConfigReq instance
         */
        public static create(properties?: hallgw.IMsgGetGameConfigReq): hallgw.MsgGetGameConfigReq;

        /**
         * Encodes the specified MsgGetGameConfigReq message. Does not implicitly {@link hallgw.MsgGetGameConfigReq.verify|verify} messages.
         * @param message MsgGetGameConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgGetGameConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgGetGameConfigReq message, length delimited. Does not implicitly {@link hallgw.MsgGetGameConfigReq.verify|verify} messages.
         * @param message MsgGetGameConfigReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgGetGameConfigReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgGetGameConfigReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGetGameConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgGetGameConfigReq;

        /**
         * Decodes a MsgGetGameConfigReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGetGameConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgGetGameConfigReq;

        /**
         * Verifies a MsgGetGameConfigReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGetGameConfigReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGetGameConfigReq
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgGetGameConfigReq;

        /**
         * Creates a plain object from a MsgGetGameConfigReq message. Also converts values to other types if specified.
         * @param message MsgGetGameConfigReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgGetGameConfigReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGetGameConfigReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgGetGameConfigResp. */
    interface IMsgGetGameConfigResp {

        /** MsgGetGameConfigResp GameConfig */
        GameConfig?: (hallgw.IGameConfig[]|null);
    }

    /** Represents a MsgGetGameConfigResp. */
    class MsgGetGameConfigResp implements IMsgGetGameConfigResp {

        /**
         * Constructs a new MsgGetGameConfigResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgGetGameConfigResp);

        /** MsgGetGameConfigResp GameConfig. */
        public GameConfig: hallgw.IGameConfig[];

        /**
         * Creates a new MsgGetGameConfigResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgGetGameConfigResp instance
         */
        public static create(properties?: hallgw.IMsgGetGameConfigResp): hallgw.MsgGetGameConfigResp;

        /**
         * Encodes the specified MsgGetGameConfigResp message. Does not implicitly {@link hallgw.MsgGetGameConfigResp.verify|verify} messages.
         * @param message MsgGetGameConfigResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgGetGameConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgGetGameConfigResp message, length delimited. Does not implicitly {@link hallgw.MsgGetGameConfigResp.verify|verify} messages.
         * @param message MsgGetGameConfigResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgGetGameConfigResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgGetGameConfigResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgGetGameConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgGetGameConfigResp;

        /**
         * Decodes a MsgGetGameConfigResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgGetGameConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgGetGameConfigResp;

        /**
         * Verifies a MsgGetGameConfigResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgGetGameConfigResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgGetGameConfigResp
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgGetGameConfigResp;

        /**
         * Creates a plain object from a MsgGetGameConfigResp message. Also converts values to other types if specified.
         * @param message MsgGetGameConfigResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgGetGameConfigResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgGetGameConfigResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgModifyGameConfigNotify. */
    interface IMsgModifyGameConfigNotify {

        /** MsgModifyGameConfigNotify GameConfig */
        GameConfig?: (hallgw.IGameConfig|null);
    }

    /** Represents a MsgModifyGameConfigNotify. */
    class MsgModifyGameConfigNotify implements IMsgModifyGameConfigNotify {

        /**
         * Constructs a new MsgModifyGameConfigNotify.
         * @param [properties] Properties to set
         */
        constructor(properties?: hallgw.IMsgModifyGameConfigNotify);

        /** MsgModifyGameConfigNotify GameConfig. */
        public GameConfig?: (hallgw.IGameConfig|null);

        /**
         * Creates a new MsgModifyGameConfigNotify instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgModifyGameConfigNotify instance
         */
        public static create(properties?: hallgw.IMsgModifyGameConfigNotify): hallgw.MsgModifyGameConfigNotify;

        /**
         * Encodes the specified MsgModifyGameConfigNotify message. Does not implicitly {@link hallgw.MsgModifyGameConfigNotify.verify|verify} messages.
         * @param message MsgModifyGameConfigNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hallgw.IMsgModifyGameConfigNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgModifyGameConfigNotify message, length delimited. Does not implicitly {@link hallgw.MsgModifyGameConfigNotify.verify|verify} messages.
         * @param message MsgModifyGameConfigNotify message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hallgw.IMsgModifyGameConfigNotify, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgModifyGameConfigNotify message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgModifyGameConfigNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hallgw.MsgModifyGameConfigNotify;

        /**
         * Decodes a MsgModifyGameConfigNotify message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgModifyGameConfigNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hallgw.MsgModifyGameConfigNotify;

        /**
         * Verifies a MsgModifyGameConfigNotify message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgModifyGameConfigNotify message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgModifyGameConfigNotify
         */
        public static fromObject(object: { [k: string]: any }): hallgw.MsgModifyGameConfigNotify;

        /**
         * Creates a plain object from a MsgModifyGameConfigNotify message. Also converts values to other types if specified.
         * @param message MsgModifyGameConfigNotify
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hallgw.MsgModifyGameConfigNotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgModifyGameConfigNotify to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
