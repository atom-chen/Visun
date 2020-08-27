import * as $protobuf from "protobufjs";
/** Namespace cowcow. */
export namespace cowcow {

    /** Properties of a GameCowcowEnter. */
    interface IGameCowcowEnter {

        /** GameCowcowEnter UserInfo */
        UserInfo?: (gamecomm.IPlayerInfo|null);

        /** GameCowcowEnter TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameCowcowEnter Chips */
        Chips?: (number[]|null);

        /** GameCowcowEnter AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** GameCowcowEnter FreeTime */
        FreeTime?: (number|null);

        /** GameCowcowEnter BetTime */
        BetTime?: (number|null);

        /** GameCowcowEnter OpenTime */
        OpenTime?: (number|null);
    }

    /** Represents a GameCowcowEnter. */
    class GameCowcowEnter implements IGameCowcowEnter {

        /**
         * Constructs a new GameCowcowEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowEnter);

        /** GameCowcowEnter UserInfo. */
        public UserInfo?: (gamecomm.IPlayerInfo|null);

        /** GameCowcowEnter TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameCowcowEnter Chips. */
        public Chips: number[];

        /** GameCowcowEnter AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** GameCowcowEnter FreeTime. */
        public FreeTime: number;

        /** GameCowcowEnter BetTime. */
        public BetTime: number;

        /** GameCowcowEnter OpenTime. */
        public OpenTime: number;

        /**
         * Creates a new GameCowcowEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowEnter instance
         */
        public static create(properties?: cowcow.IGameCowcowEnter): cowcow.GameCowcowEnter;

        /**
         * Encodes the specified GameCowcowEnter message. Does not implicitly {@link cowcow.GameCowcowEnter.verify|verify} messages.
         * @param message GameCowcowEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowEnter message, length delimited. Does not implicitly {@link cowcow.GameCowcowEnter.verify|verify} messages.
         * @param message GameCowcowEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowEnter;

        /**
         * Decodes a GameCowcowEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowEnter;

        /**
         * Verifies a GameCowcowEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowEnter
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowEnter;

        /**
         * Creates a plain object from a GameCowcowEnter message. Also converts values to other types if specified.
         * @param message GameCowcowEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowHost. */
    interface IGameCowcowHost {

        /** GameCowcowHost UserID */
        UserID?: (number|Long|null);

        /** GameCowcowHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameCowcowHost. */
    class GameCowcowHost implements IGameCowcowHost {

        /**
         * Constructs a new GameCowcowHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowHost);

        /** GameCowcowHost UserID. */
        public UserID: (number|Long);

        /** GameCowcowHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameCowcowHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowHost instance
         */
        public static create(properties?: cowcow.IGameCowcowHost): cowcow.GameCowcowHost;

        /**
         * Encodes the specified GameCowcowHost message. Does not implicitly {@link cowcow.GameCowcowHost.verify|verify} messages.
         * @param message GameCowcowHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowHost message, length delimited. Does not implicitly {@link cowcow.GameCowcowHost.verify|verify} messages.
         * @param message GameCowcowHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowHost;

        /**
         * Decodes a GameCowcowHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowHost;

        /**
         * Verifies a GameCowcowHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowHost
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowHost;

        /**
         * Creates a plain object from a GameCowcowHost message. Also converts values to other types if specified.
         * @param message GameCowcowHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowSuperHost. */
    interface IGameCowcowSuperHost {

        /** GameCowcowSuperHost UserID */
        UserID?: (number|Long|null);

        /** GameCowcowSuperHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameCowcowSuperHost. */
    class GameCowcowSuperHost implements IGameCowcowSuperHost {

        /**
         * Constructs a new GameCowcowSuperHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowSuperHost);

        /** GameCowcowSuperHost UserID. */
        public UserID: (number|Long);

        /** GameCowcowSuperHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameCowcowSuperHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowSuperHost instance
         */
        public static create(properties?: cowcow.IGameCowcowSuperHost): cowcow.GameCowcowSuperHost;

        /**
         * Encodes the specified GameCowcowSuperHost message. Does not implicitly {@link cowcow.GameCowcowSuperHost.verify|verify} messages.
         * @param message GameCowcowSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowSuperHost message, length delimited. Does not implicitly {@link cowcow.GameCowcowSuperHost.verify|verify} messages.
         * @param message GameCowcowSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowSuperHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowSuperHost;

        /**
         * Decodes a GameCowcowSuperHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowSuperHost;

        /**
         * Verifies a GameCowcowSuperHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowSuperHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowSuperHost
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowSuperHost;

        /**
         * Creates a plain object from a GameCowcowSuperHost message. Also converts values to other types if specified.
         * @param message GameCowcowSuperHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowSuperHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowSuperHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowReq. */
    interface IGameCowcowReq {

        /** GameCowcowReq BetArea */
        BetArea?: (number|null);

        /** GameCowcowReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a GameCowcowReq. */
    class GameCowcowReq implements IGameCowcowReq {

        /**
         * Constructs a new GameCowcowReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowReq);

        /** GameCowcowReq BetArea. */
        public BetArea: number;

        /** GameCowcowReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new GameCowcowReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowReq instance
         */
        public static create(properties?: cowcow.IGameCowcowReq): cowcow.GameCowcowReq;

        /**
         * Encodes the specified GameCowcowReq message. Does not implicitly {@link cowcow.GameCowcowReq.verify|verify} messages.
         * @param message GameCowcowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowReq message, length delimited. Does not implicitly {@link cowcow.GameCowcowReq.verify|verify} messages.
         * @param message GameCowcowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowReq;

        /**
         * Decodes a GameCowcowReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowReq;

        /**
         * Verifies a GameCowcowReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowReq
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowReq;

        /**
         * Creates a plain object from a GameCowcowReq message. Also converts values to other types if specified.
         * @param message GameCowcowReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowBetResp. */
    interface IGameCowcowBetResp {

        /** GameCowcowBetResp State */
        State?: (number|null);

        /** GameCowcowBetResp Hints */
        Hints?: (string|null);
    }

    /** Represents a GameCowcowBetResp. */
    class GameCowcowBetResp implements IGameCowcowBetResp {

        /**
         * Constructs a new GameCowcowBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowBetResp);

        /** GameCowcowBetResp State. */
        public State: number;

        /** GameCowcowBetResp Hints. */
        public Hints: string;

        /**
         * Creates a new GameCowcowBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowBetResp instance
         */
        public static create(properties?: cowcow.IGameCowcowBetResp): cowcow.GameCowcowBetResp;

        /**
         * Encodes the specified GameCowcowBetResp message. Does not implicitly {@link cowcow.GameCowcowBetResp.verify|verify} messages.
         * @param message GameCowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowBetResp message, length delimited. Does not implicitly {@link cowcow.GameCowcowBetResp.verify|verify} messages.
         * @param message GameCowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowBetResp;

        /**
         * Decodes a GameCowcowBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowBetResp;

        /**
         * Verifies a GameCowcowBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowBetResp
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowBetResp;

        /**
         * Creates a plain object from a GameCowcowBetResp message. Also converts values to other types if specified.
         * @param message GameCowcowBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowOver. */
    interface IGameCowcowOver {

        /** GameCowcowOver AwardArea */
        AwardArea?: (Uint8Array|null);

        /** GameCowcowOver BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver TianCard */
        TianCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver XuanCard */
        XuanCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver DiCard */
        DiCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver HuangCard */
        HuangCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a GameCowcowOver. */
    class GameCowcowOver implements IGameCowcowOver {

        /**
         * Constructs a new GameCowcowOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowOver);

        /** GameCowcowOver AwardArea. */
        public AwardArea: Uint8Array;

        /** GameCowcowOver BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver TianCard. */
        public TianCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver XuanCard. */
        public XuanCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver DiCard. */
        public DiCard?: (gamecomm.ICardInfo|null);

        /** GameCowcowOver HuangCard. */
        public HuangCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new GameCowcowOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowOver instance
         */
        public static create(properties?: cowcow.IGameCowcowOver): cowcow.GameCowcowOver;

        /**
         * Encodes the specified GameCowcowOver message. Does not implicitly {@link cowcow.GameCowcowOver.verify|verify} messages.
         * @param message GameCowcowOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowOver message, length delimited. Does not implicitly {@link cowcow.GameCowcowOver.verify|verify} messages.
         * @param message GameCowcowOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowOver;

        /**
         * Decodes a GameCowcowOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowOver;

        /**
         * Verifies a GameCowcowOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowOver
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowOver;

        /**
         * Creates a plain object from a GameCowcowOver message. Also converts values to other types if specified.
         * @param message GameCowcowOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowCheckout. */
    interface IGameCowcowCheckout {

        /** GameCowcowCheckout Acquire */
        Acquire?: (number|Long|null);
    }

    /** Represents a GameCowcowCheckout. */
    class GameCowcowCheckout implements IGameCowcowCheckout {

        /**
         * Constructs a new GameCowcowCheckout.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowCheckout);

        /** GameCowcowCheckout Acquire. */
        public Acquire: (number|Long);

        /**
         * Creates a new GameCowcowCheckout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowCheckout instance
         */
        public static create(properties?: cowcow.IGameCowcowCheckout): cowcow.GameCowcowCheckout;

        /**
         * Encodes the specified GameCowcowCheckout message. Does not implicitly {@link cowcow.GameCowcowCheckout.verify|verify} messages.
         * @param message GameCowcowCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowCheckout message, length delimited. Does not implicitly {@link cowcow.GameCowcowCheckout.verify|verify} messages.
         * @param message GameCowcowCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowCheckout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowCheckout;

        /**
         * Decodes a GameCowcowCheckout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowCheckout;

        /**
         * Verifies a GameCowcowCheckout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowCheckout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowCheckout
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowCheckout;

        /**
         * Creates a plain object from a GameCowcowCheckout message. Also converts values to other types if specified.
         * @param message GameCowcowCheckout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowCheckout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowCheckout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace gamecomm. */
export namespace gamecomm {

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserID */
        UserID?: (number|Long|null);

        /** PlayerInfo Name */
        Name?: (string|null);

        /** PlayerInfo Age */
        Age?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo Gold */
        Gold?: (number|Long|null);

        /** PlayerInfo VipLevel */
        VipLevel?: (number|null);

        /** PlayerInfo Account */
        Account?: (string|null);

        /** PlayerInfo Sate */
        Sate?: (number|null);

        /** PlayerInfo ChairID */
        ChairID?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerInfo);

        /** PlayerInfo UserID. */
        public UserID: (number|Long);

        /** PlayerInfo Name. */
        public Name: string;

        /** PlayerInfo Age. */
        public Age: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo Gold. */
        public Gold: (number|Long);

        /** PlayerInfo VipLevel. */
        public VipLevel: number;

        /** PlayerInfo Account. */
        public Account: string;

        /** PlayerInfo Sate. */
        public Sate: number;

        /** PlayerInfo ChairID. */
        public ChairID: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: gamecomm.IPlayerInfo): gamecomm.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link gamecomm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link gamecomm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo Cards */
        Cards?: (Uint8Array|null);

        /** CardInfo CardType */
        CardType?: (number|null);

        /** CardInfo CardValue */
        CardValue?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICardInfo);

        /** CardInfo Cards. */
        public Cards: Uint8Array;

        /** CardInfo CardType. */
        public CardType: number;

        /** CardInfo CardValue. */
        public CardValue: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: gamecomm.ICardInfo): gamecomm.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.CardInfo;

        /**
         * Creates a plain object from a CardInfo message. Also converts values to other types if specified.
         * @param message CardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.CardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeInfo. */
    interface ITimeInfo {

        /** TimeInfo TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TimeInfo WaitTime */
        WaitTime?: (number|null);

        /** TimeInfo OutTime */
        OutTime?: (number|null);

        /** TimeInfo TotalTime */
        TotalTime?: (number|null);
    }

    /** Represents a TimeInfo. */
    class TimeInfo implements ITimeInfo {

        /**
         * Constructs a new TimeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ITimeInfo);

        /** TimeInfo TimeStamp. */
        public TimeStamp: (number|Long);

        /** TimeInfo WaitTime. */
        public WaitTime: number;

        /** TimeInfo OutTime. */
        public OutTime: number;

        /** TimeInfo TotalTime. */
        public TotalTime: number;

        /**
         * Creates a new TimeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeInfo instance
         */
        public static create(properties?: gamecomm.ITimeInfo): gamecomm.TimeInfo;

        /**
         * Encodes the specified TimeInfo message. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeInfo message, length delimited. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.TimeInfo;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.TimeInfo;

        /**
         * Verifies a TimeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.TimeInfo;

        /**
         * Creates a plain object from a TimeInfo message. Also converts values to other types if specified.
         * @param message TimeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.TimeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserList. */
    interface IUserList {

        /** UserList AllInfos */
        AllInfos?: (gamecomm.IPlayerInfo[]|null);
    }

    /** Represents a UserList. */
    class UserList implements IUserList {

        /**
         * Constructs a new UserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IUserList);

        /** UserList AllInfos. */
        public AllInfos: gamecomm.IPlayerInfo[];

        /**
         * Creates a new UserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserList instance
         */
        public static create(properties?: gamecomm.IUserList): gamecomm.UserList;

        /**
         * Encodes the specified UserList message. Does not implicitly {@link gamecomm.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserList message, length delimited. Does not implicitly {@link gamecomm.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.UserList;

        /**
         * Decodes a UserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.UserList;

        /**
         * Verifies a UserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserList
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.UserList;

        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @param message UserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqEnterGame. */
    interface IReqEnterGame {

        /** ReqEnterGame GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqEnterGame. */
    class ReqEnterGame implements IReqEnterGame {

        /**
         * Constructs a new ReqEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqEnterGame);

        /** ReqEnterGame GameID. */
        public GameID: number;

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGame instance
         */
        public static create(properties?: gamecomm.IReqEnterGame): gamecomm.ReqEnterGame;

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link gamecomm.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link gamecomm.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqEnterGame;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqEnterGame;

        /**
         * Verifies a ReqEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEnterGame
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqEnterGame;

        /**
         * Creates a plain object from a ReqEnterGame message. Also converts values to other types if specified.
         * @param message ReqEnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqEnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqExitGame. */
    interface IReqExitGame {

        /** ReqExitGame GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqExitGame. */
    class ReqExitGame implements IReqExitGame {

        /**
         * Constructs a new ReqExitGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqExitGame);

        /** ReqExitGame GameID. */
        public GameID: number;

        /**
         * Creates a new ReqExitGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqExitGame instance
         */
        public static create(properties?: gamecomm.IReqExitGame): gamecomm.ReqExitGame;

        /**
         * Encodes the specified ReqExitGame message. Does not implicitly {@link gamecomm.ReqExitGame.verify|verify} messages.
         * @param message ReqExitGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqExitGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqExitGame message, length delimited. Does not implicitly {@link gamecomm.ReqExitGame.verify|verify} messages.
         * @param message ReqExitGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqExitGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqExitGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqExitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqExitGame;

        /**
         * Decodes a ReqExitGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqExitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqExitGame;

        /**
         * Verifies a ReqExitGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqExitGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqExitGame
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqExitGame;

        /**
         * Creates a plain object from a ReqExitGame message. Also converts values to other types if specified.
         * @param message ReqExitGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqExitGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqExitGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqChangeTable. */
    interface IReqChangeTable {

        /** ReqChangeTable GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqChangeTable. */
    class ReqChangeTable implements IReqChangeTable {

        /**
         * Constructs a new ReqChangeTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqChangeTable);

        /** ReqChangeTable GameID. */
        public GameID: number;

        /**
         * Creates a new ReqChangeTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqChangeTable instance
         */
        public static create(properties?: gamecomm.IReqChangeTable): gamecomm.ReqChangeTable;

        /**
         * Encodes the specified ReqChangeTable message. Does not implicitly {@link gamecomm.ReqChangeTable.verify|verify} messages.
         * @param message ReqChangeTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqChangeTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqChangeTable message, length delimited. Does not implicitly {@link gamecomm.ReqChangeTable.verify|verify} messages.
         * @param message ReqChangeTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqChangeTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqChangeTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqChangeTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqChangeTable;

        /**
         * Decodes a ReqChangeTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqChangeTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqChangeTable;

        /**
         * Verifies a ReqChangeTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqChangeTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqChangeTable
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqChangeTable;

        /**
         * Creates a plain object from a ReqChangeTable message. Also converts values to other types if specified.
         * @param message ReqChangeTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqChangeTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqChangeTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotifyChangeGold. */
    interface INotifyChangeGold {

        /** NotifyChangeGold UserID */
        UserID?: (number|Long|null);

        /** NotifyChangeGold Gold */
        Gold?: (number|Long|null);

        /** NotifyChangeGold Code */
        Code?: (number|null);
    }

    /** Represents a NotifyChangeGold. */
    class NotifyChangeGold implements INotifyChangeGold {

        /**
         * Constructs a new NotifyChangeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.INotifyChangeGold);

        /** NotifyChangeGold UserID. */
        public UserID: (number|Long);

        /** NotifyChangeGold Gold. */
        public Gold: (number|Long);

        /** NotifyChangeGold Code. */
        public Code: number;

        /**
         * Creates a new NotifyChangeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyChangeGold instance
         */
        public static create(properties?: gamecomm.INotifyChangeGold): gamecomm.NotifyChangeGold;

        /**
         * Encodes the specified NotifyChangeGold message. Does not implicitly {@link gamecomm.NotifyChangeGold.verify|verify} messages.
         * @param message NotifyChangeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.INotifyChangeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyChangeGold message, length delimited. Does not implicitly {@link gamecomm.NotifyChangeGold.verify|verify} messages.
         * @param message NotifyChangeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.INotifyChangeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyChangeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyChangeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.NotifyChangeGold;

        /**
         * Decodes a NotifyChangeGold message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyChangeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.NotifyChangeGold;

        /**
         * Verifies a NotifyChangeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyChangeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyChangeGold
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.NotifyChangeGold;

        /**
         * Creates a plain object from a NotifyChangeGold message. Also converts values to other types if specified.
         * @param message NotifyChangeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.NotifyChangeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyChangeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MoneyCalculateInfo. */
    interface IMoneyCalculateInfo {

        /** MoneyCalculateInfo UserID */
        UserID?: (number|Long|null);

        /** MoneyCalculateInfo Money */
        Money?: (number|Long|null);

        /** MoneyCalculateInfo ChangeValue */
        ChangeValue?: (number|Long|null);

        /** MoneyCalculateInfo Reason */
        Reason?: (string|null);
    }

    /** Represents a MoneyCalculateInfo. */
    class MoneyCalculateInfo implements IMoneyCalculateInfo {

        /**
         * Constructs a new MoneyCalculateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IMoneyCalculateInfo);

        /** MoneyCalculateInfo UserID. */
        public UserID: (number|Long);

        /** MoneyCalculateInfo Money. */
        public Money: (number|Long);

        /** MoneyCalculateInfo ChangeValue. */
        public ChangeValue: (number|Long);

        /** MoneyCalculateInfo Reason. */
        public Reason: string;

        /**
         * Creates a new MoneyCalculateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoneyCalculateInfo instance
         */
        public static create(properties?: gamecomm.IMoneyCalculateInfo): gamecomm.MoneyCalculateInfo;

        /**
         * Encodes the specified MoneyCalculateInfo message. Does not implicitly {@link gamecomm.MoneyCalculateInfo.verify|verify} messages.
         * @param message MoneyCalculateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IMoneyCalculateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyCalculateInfo message, length delimited. Does not implicitly {@link gamecomm.MoneyCalculateInfo.verify|verify} messages.
         * @param message MoneyCalculateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IMoneyCalculateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyCalculateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyCalculateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.MoneyCalculateInfo;

        /**
         * Decodes a MoneyCalculateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyCalculateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.MoneyCalculateInfo;

        /**
         * Verifies a MoneyCalculateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoneyCalculateInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoneyCalculateInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.MoneyCalculateInfo;

        /**
         * Creates a plain object from a MoneyCalculateInfo message. Also converts values to other types if specified.
         * @param message MoneyCalculateInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.MoneyCalculateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoneyCalculateInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateReady. */
    interface IStateReady {

        /** StateReady Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateReady. */
    class StateReady implements IStateReady {

        /**
         * Constructs a new StateReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateReady);

        /** StateReady Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateReady instance
         */
        public static create(properties?: gamecomm.IStateReady): gamecomm.StateReady;

        /**
         * Encodes the specified StateReady message. Does not implicitly {@link gamecomm.StateReady.verify|verify} messages.
         * @param message StateReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateReady message, length delimited. Does not implicitly {@link gamecomm.StateReady.verify|verify} messages.
         * @param message StateReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateReady;

        /**
         * Decodes a StateReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateReady;

        /**
         * Verifies a StateReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateReady
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateReady;

        /**
         * Creates a plain object from a StateReady message. Also converts values to other types if specified.
         * @param message StateReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateFree. */
    interface IStateFree {

        /** StateFree Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateFree. */
    class StateFree implements IStateFree {

        /**
         * Constructs a new StateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateFree);

        /** StateFree Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateFree instance
         */
        public static create(properties?: gamecomm.IStateFree): gamecomm.StateFree;

        /**
         * Encodes the specified StateFree message. Does not implicitly {@link gamecomm.StateFree.verify|verify} messages.
         * @param message StateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateFree message, length delimited. Does not implicitly {@link gamecomm.StateFree.verify|verify} messages.
         * @param message StateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateFree;

        /**
         * Decodes a StateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateFree;

        /**
         * Verifies a StateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateFree
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateFree;

        /**
         * Creates a plain object from a StateFree message. Also converts values to other types if specified.
         * @param message StateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateStart. */
    interface IStateStart {

        /** StateStart Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateStart. */
    class StateStart implements IStateStart {

        /**
         * Constructs a new StateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateStart);

        /** StateStart Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateStart instance
         */
        public static create(properties?: gamecomm.IStateStart): gamecomm.StateStart;

        /**
         * Encodes the specified StateStart message. Does not implicitly {@link gamecomm.StateStart.verify|verify} messages.
         * @param message StateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateStart message, length delimited. Does not implicitly {@link gamecomm.StateStart.verify|verify} messages.
         * @param message StateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateStart;

        /**
         * Decodes a StateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateStart;

        /**
         * Verifies a StateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateStart
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateStart;

        /**
         * Creates a plain object from a StateStart message. Also converts values to other types if specified.
         * @param message StateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StatePlaying. */
    interface IStatePlaying {

        /** StatePlaying Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StatePlaying. */
    class StatePlaying implements IStatePlaying {

        /**
         * Constructs a new StatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStatePlaying);

        /** StatePlaying Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatePlaying instance
         */
        public static create(properties?: gamecomm.IStatePlaying): gamecomm.StatePlaying;

        /**
         * Encodes the specified StatePlaying message. Does not implicitly {@link gamecomm.StatePlaying.verify|verify} messages.
         * @param message StatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatePlaying message, length delimited. Does not implicitly {@link gamecomm.StatePlaying.verify|verify} messages.
         * @param message StatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StatePlaying;

        /**
         * Decodes a StatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StatePlaying;

        /**
         * Verifies a StatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatePlaying
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StatePlaying;

        /**
         * Creates a plain object from a StatePlaying message. Also converts values to other types if specified.
         * @param message StatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateOver. */
    interface IStateOver {

        /** StateOver Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateOver. */
    class StateOver implements IStateOver {

        /**
         * Constructs a new StateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateOver);

        /** StateOver Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateOver instance
         */
        public static create(properties?: gamecomm.IStateOver): gamecomm.StateOver;

        /**
         * Encodes the specified StateOver message. Does not implicitly {@link gamecomm.StateOver.verify|verify} messages.
         * @param message StateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateOver message, length delimited. Does not implicitly {@link gamecomm.StateOver.verify|verify} messages.
         * @param message StateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateOver;

        /**
         * Decodes a StateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateOver;

        /**
         * Verifies a StateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateOver
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateOver;

        /**
         * Creates a plain object from a StateOver message. Also converts values to other types if specified.
         * @param message StateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateCall. */
    interface IStateCall {

        /** StateCall Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** StateCall UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a StateCall. */
    class StateCall implements IStateCall {

        /**
         * Constructs a new StateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateCall);

        /** StateCall Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** StateCall UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new StateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateCall instance
         */
        public static create(properties?: gamecomm.IStateCall): gamecomm.StateCall;

        /**
         * Encodes the specified StateCall message. Does not implicitly {@link gamecomm.StateCall.verify|verify} messages.
         * @param message StateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateCall message, length delimited. Does not implicitly {@link gamecomm.StateCall.verify|verify} messages.
         * @param message StateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateCall;

        /**
         * Decodes a StateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateCall;

        /**
         * Verifies a StateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateCall;

        /**
         * Creates a plain object from a StateCall message. Also converts values to other types if specified.
         * @param message StateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Host. */
    interface IHost {

        /** Host IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a Host. */
    class Host implements IHost {

        /**
         * Constructs a new Host.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IHost);

        /** Host IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new Host instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Host instance
         */
        public static create(properties?: gamecomm.IHost): gamecomm.Host;

        /**
         * Encodes the specified Host message. Does not implicitly {@link gamecomm.Host.verify|verify} messages.
         * @param message Host message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Host message, length delimited. Does not implicitly {@link gamecomm.Host.verify|verify} messages.
         * @param message Host message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Host message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Host
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Host;

        /**
         * Decodes a Host message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Host
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Host;

        /**
         * Verifies a Host message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Host message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Host
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Host;

        /**
         * Creates a plain object from a Host message. Also converts values to other types if specified.
         * @param message Host
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Host, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Host to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HostEx. */
    interface IHostEx {

        /** HostEx IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a HostEx. */
    class HostEx implements IHostEx {

        /**
         * Constructs a new HostEx.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IHostEx);

        /** HostEx IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new HostEx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HostEx instance
         */
        public static create(properties?: gamecomm.IHostEx): gamecomm.HostEx;

        /**
         * Encodes the specified HostEx message. Does not implicitly {@link gamecomm.HostEx.verify|verify} messages.
         * @param message HostEx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IHostEx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HostEx message, length delimited. Does not implicitly {@link gamecomm.HostEx.verify|verify} messages.
         * @param message HostEx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IHostEx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HostEx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HostEx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.HostEx;

        /**
         * Decodes a HostEx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HostEx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.HostEx;

        /**
         * Verifies a HostEx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HostEx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HostEx
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.HostEx;

        /**
         * Creates a plain object from a HostEx message. Also converts values to other types if specified.
         * @param message HostEx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.HostEx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HostEx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Call. */
    interface ICall {

        /** Call UserID */
        UserID?: (number|Long|null);

        /** Call Score */
        Score?: (number|null);
    }

    /** Represents a Call. */
    class Call implements ICall {

        /**
         * Constructs a new Call.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICall);

        /** Call UserID. */
        public UserID: (number|Long);

        /** Call Score. */
        public Score: number;

        /**
         * Creates a new Call instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Call instance
         */
        public static create(properties?: gamecomm.ICall): gamecomm.Call;

        /**
         * Encodes the specified Call message. Does not implicitly {@link gamecomm.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link gamecomm.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Call;

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Call;

        /**
         * Verifies a Call message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Call message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Call
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Call;

        /**
         * Creates a plain object from a Call message. Also converts values to other types if specified.
         * @param message Call
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Call to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeOut. */
    interface IBeOut {

        /** BeOut UserID */
        UserID?: (number|Long|null);

        /** BeOut Code */
        Code?: (number|null);

        /** BeOut Hints */
        Hints?: (Uint8Array|null);
    }

    /** Represents a BeOut. */
    class BeOut implements IBeOut {

        /**
         * Constructs a new BeOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBeOut);

        /** BeOut UserID. */
        public UserID: (number|Long);

        /** BeOut Code. */
        public Code: number;

        /** BeOut Hints. */
        public Hints: Uint8Array;

        /**
         * Creates a new BeOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeOut instance
         */
        public static create(properties?: gamecomm.IBeOut): gamecomm.BeOut;

        /**
         * Encodes the specified BeOut message. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeOut message, length delimited. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BeOut;

        /**
         * Decodes a BeOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BeOut;

        /**
         * Verifies a BeOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeOut
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BeOut;

        /**
         * Creates a plain object from a BeOut message. Also converts values to other types if specified.
         * @param message BeOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BeOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Bet. */
    interface IBet {

        /** Bet AreaId */
        AreaId?: (number|null);

        /** Bet Money */
        Money?: (number|Long|null);
    }

    /** Represents a Bet. */
    class Bet implements IBet {

        /**
         * Constructs a new Bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBet);

        /** Bet AreaId. */
        public AreaId: number;

        /** Bet Money. */
        public Money: (number|Long);

        /**
         * Creates a new Bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bet instance
         */
        public static create(properties?: gamecomm.IBet): gamecomm.Bet;

        /**
         * Encodes the specified Bet message. Does not implicitly {@link gamecomm.Bet.verify|verify} messages.
         * @param message Bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bet message, length delimited. Does not implicitly {@link gamecomm.Bet.verify|verify} messages.
         * @param message Bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Bet;

        /**
         * Decodes a Bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Bet;

        /**
         * Verifies a Bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bet
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Bet;

        /**
         * Creates a plain object from a Bet message. Also converts values to other types if specified.
         * @param message Bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResult. */
    interface IBetResult {

        /** BetResult UserId */
        UserId?: (number|Long|null);

        /** BetResult AreaId */
        AreaId?: (number|null);

        /** BetResult Money */
        Money?: (number|Long|null);
    }

    /** Represents a BetResult. */
    class BetResult implements IBetResult {

        /**
         * Constructs a new BetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBetResult);

        /** BetResult UserId. */
        public UserId: (number|Long);

        /** BetResult AreaId. */
        public AreaId: number;

        /** BetResult Money. */
        public Money: (number|Long);

        /**
         * Creates a new BetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResult instance
         */
        public static create(properties?: gamecomm.IBetResult): gamecomm.BetResult;

        /**
         * Encodes the specified BetResult message. Does not implicitly {@link gamecomm.BetResult.verify|verify} messages.
         * @param message BetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResult message, length delimited. Does not implicitly {@link gamecomm.BetResult.verify|verify} messages.
         * @param message BetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BetResult;

        /**
         * Decodes a BetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BetResult;

        /**
         * Verifies a BetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BetResult;

        /**
         * Creates a plain object from a BetResult message. Also converts values to other types if specified.
         * @param message BetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerRecord. */
    interface IPlayerRecord {

        /** PlayerRecord User */
        User?: (gamecomm.IPlayerInfo|null);

        /** PlayerRecord Twice */
        Twice?: (number|null);

        /** PlayerRecord Ranking */
        Ranking?: (number|null);

        /** PlayerRecord Bankroll */
        Bankroll?: (number|null);

        /** PlayerRecord WinLos */
        WinLos?: (number|Long|null);
    }

    /** Represents a PlayerRecord. */
    class PlayerRecord implements IPlayerRecord {

        /**
         * Constructs a new PlayerRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerRecord);

        /** PlayerRecord User. */
        public User?: (gamecomm.IPlayerInfo|null);

        /** PlayerRecord Twice. */
        public Twice: number;

        /** PlayerRecord Ranking. */
        public Ranking: number;

        /** PlayerRecord Bankroll. */
        public Bankroll: number;

        /** PlayerRecord WinLos. */
        public WinLos: (number|Long);

        /**
         * Creates a new PlayerRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerRecord instance
         */
        public static create(properties?: gamecomm.IPlayerRecord): gamecomm.PlayerRecord;

        /**
         * Encodes the specified PlayerRecord message. Does not implicitly {@link gamecomm.PlayerRecord.verify|verify} messages.
         * @param message PlayerRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerRecord message, length delimited. Does not implicitly {@link gamecomm.PlayerRecord.verify|verify} messages.
         * @param message PlayerRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerRecord;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerRecord;

        /**
         * Verifies a PlayerRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerRecord
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerRecord;

        /**
         * Creates a plain object from a PlayerRecord message. Also converts values to other types if specified.
         * @param message PlayerRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord Pork */
        Pork?: (Uint8Array|null);

        /** GameRecord Type */
        Type?: (number|null);

        /** GameRecord isWon */
        isWon?: (boolean|null);
    }

    /** Represents a GameRecord. */
    class GameRecord implements IGameRecord {

        /**
         * Constructs a new GameRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecord);

        /** GameRecord Pork. */
        public Pork: Uint8Array;

        /** GameRecord Type. */
        public Type: number;

        /** GameRecord isWon. */
        public isWon: boolean;

        /**
         * Creates a new GameRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecord instance
         */
        public static create(properties?: gamecomm.IGameRecord): gamecomm.GameRecord;

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link gamecomm.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecord message, length delimited. Does not implicitly {@link gamecomm.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameRecord;

        /**
         * Decodes a GameRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameRecord;

        /**
         * Verifies a GameRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecord
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameRecord;

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @param message GameRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecordList. */
    interface IGameRecordList {

        /** GameRecordList list */
        list?: (gamecomm.IGameRecord[]|null);
    }

    /** Represents a GameRecordList. */
    class GameRecordList implements IGameRecordList {

        /**
         * Constructs a new GameRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecordList);

        /** GameRecordList list. */
        public list: gamecomm.IGameRecord[];

        /**
         * Creates a new GameRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecordList instance
         */
        public static create(properties?: gamecomm.IGameRecordList): gamecomm.GameRecordList;

        /**
         * Encodes the specified GameRecordList message. Does not implicitly {@link gamecomm.GameRecordList.verify|verify} messages.
         * @param message GameRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecordList message, length delimited. Does not implicitly {@link gamecomm.GameRecordList.verify|verify} messages.
         * @param message GameRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameRecordList;

        /**
         * Decodes a GameRecordList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameRecordList;

        /**
         * Verifies a GameRecordList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecordList
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameRecordList;

        /**
         * Creates a plain object from a GameRecordList message. Also converts values to other types if specified.
         * @param message GameRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameRecordList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
