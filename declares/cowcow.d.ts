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
