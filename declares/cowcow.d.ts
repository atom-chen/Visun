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

    /** Properties of a GameCowcowPlaying. */
    interface IGameCowcowPlaying {

        /** GameCowcowPlaying BetArea */
        BetArea?: (number|null);

        /** GameCowcowPlaying BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a GameCowcowPlaying. */
    class GameCowcowPlaying implements IGameCowcowPlaying {

        /**
         * Constructs a new GameCowcowPlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowPlaying);

        /** GameCowcowPlaying BetArea. */
        public BetArea: number;

        /** GameCowcowPlaying BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new GameCowcowPlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowPlaying instance
         */
        public static create(properties?: cowcow.IGameCowcowPlaying): cowcow.GameCowcowPlaying;

        /**
         * Encodes the specified GameCowcowPlaying message. Does not implicitly {@link cowcow.GameCowcowPlaying.verify|verify} messages.
         * @param message GameCowcowPlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowPlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowPlaying message, length delimited. Does not implicitly {@link cowcow.GameCowcowPlaying.verify|verify} messages.
         * @param message GameCowcowPlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowPlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowPlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowPlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowPlaying;

        /**
         * Decodes a GameCowcowPlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowPlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowPlaying;

        /**
         * Verifies a GameCowcowPlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowPlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowPlaying
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowPlaying;

        /**
         * Creates a plain object from a GameCowcowPlaying message. Also converts values to other types if specified.
         * @param message GameCowcowPlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowPlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowPlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowBetResult. */
    interface IGameCowcowBetResult {

        /** GameCowcowBetResult State */
        State?: (number|null);

        /** GameCowcowBetResult Hints */
        Hints?: (string|null);
    }

    /** Represents a GameCowcowBetResult. */
    class GameCowcowBetResult implements IGameCowcowBetResult {

        /**
         * Constructs a new GameCowcowBetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: cowcow.IGameCowcowBetResult);

        /** GameCowcowBetResult State. */
        public State: number;

        /** GameCowcowBetResult Hints. */
        public Hints: string;

        /**
         * Creates a new GameCowcowBetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCowcowBetResult instance
         */
        public static create(properties?: cowcow.IGameCowcowBetResult): cowcow.GameCowcowBetResult;

        /**
         * Encodes the specified GameCowcowBetResult message. Does not implicitly {@link cowcow.GameCowcowBetResult.verify|verify} messages.
         * @param message GameCowcowBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: cowcow.IGameCowcowBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCowcowBetResult message, length delimited. Does not implicitly {@link cowcow.GameCowcowBetResult.verify|verify} messages.
         * @param message GameCowcowBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: cowcow.IGameCowcowBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCowcowBetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCowcowBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cowcow.GameCowcowBetResult;

        /**
         * Decodes a GameCowcowBetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCowcowBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cowcow.GameCowcowBetResult;

        /**
         * Verifies a GameCowcowBetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCowcowBetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCowcowBetResult
         */
        public static fromObject(object: { [k: string]: any }): cowcow.GameCowcowBetResult;

        /**
         * Creates a plain object from a GameCowcowBetResult message. Also converts values to other types if specified.
         * @param message GameCowcowBetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: cowcow.GameCowcowBetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCowcowBetResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCowcowOver. */
    interface IGameCowcowOver {

        /** GameCowcowOver AwardArea */
        AwardArea?: (Uint8Array|null);

        /** GameCowcowOver BankerCard */
        BankerCard?: (Uint8Array|null);

        /** GameCowcowOver TianCard */
        TianCard?: (Uint8Array|null);

        /** GameCowcowOver XuanCard */
        XuanCard?: (Uint8Array|null);

        /** GameCowcowOver DiCard */
        DiCard?: (Uint8Array|null);

        /** GameCowcowOver HuangCard */
        HuangCard?: (Uint8Array|null);

        /** GameCowcowOver CardValue */
        CardValue?: (Uint8Array|null);
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
        public BankerCard: Uint8Array;

        /** GameCowcowOver TianCard. */
        public TianCard: Uint8Array;

        /** GameCowcowOver XuanCard. */
        public XuanCard: Uint8Array;

        /** GameCowcowOver DiCard. */
        public DiCard: Uint8Array;

        /** GameCowcowOver HuangCard. */
        public HuangCard: Uint8Array;

        /** GameCowcowOver CardValue. */
        public CardValue: Uint8Array;

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

    /** Properties of a GameReady. */
    interface IGameReady {

        /** GameReady UserID */
        UserID?: (number|Long|null);

        /** GameReady IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a GameReady. */
    class GameReady implements IGameReady {

        /**
         * Constructs a new GameReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameReady);

        /** GameReady UserID. */
        public UserID: (number|Long);

        /** GameReady IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new GameReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameReady instance
         */
        public static create(properties?: gamecomm.IGameReady): gamecomm.GameReady;

        /**
         * Encodes the specified GameReady message. Does not implicitly {@link gamecomm.GameReady.verify|verify} messages.
         * @param message GameReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameReady message, length delimited. Does not implicitly {@link gamecomm.GameReady.verify|verify} messages.
         * @param message GameReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameReady;

        /**
         * Decodes a GameReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameReady;

        /**
         * Verifies a GameReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameReady
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameReady;

        /**
         * Creates a plain object from a GameReady message. Also converts values to other types if specified.
         * @param message GameReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBet. */
    interface IGameBet {

        /** GameBet BetArea */
        BetArea?: (number|null);

        /** GameBet BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a GameBet. */
    class GameBet implements IGameBet {

        /**
         * Constructs a new GameBet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameBet);

        /** GameBet BetArea. */
        public BetArea: number;

        /** GameBet BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new GameBet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBet instance
         */
        public static create(properties?: gamecomm.IGameBet): gamecomm.GameBet;

        /**
         * Encodes the specified GameBet message. Does not implicitly {@link gamecomm.GameBet.verify|verify} messages.
         * @param message GameBet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBet message, length delimited. Does not implicitly {@link gamecomm.GameBet.verify|verify} messages.
         * @param message GameBet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameBet;

        /**
         * Decodes a GameBet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameBet;

        /**
         * Verifies a GameBet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBet
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameBet;

        /**
         * Creates a plain object from a GameBet message. Also converts values to other types if specified.
         * @param message GameBet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameBet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBetResult. */
    interface IGameBetResult {

        /** GameBetResult UserID */
        UserID?: (number|Long|null);

        /** GameBetResult BetArea */
        BetArea?: (number|null);

        /** GameBetResult BetScore */
        BetScore?: (number|Long|null);

        /** GameBetResult State */
        State?: (number|null);

        /** GameBetResult Hints */
        Hints?: (string|null);
    }

    /** Represents a GameBetResult. */
    class GameBetResult implements IGameBetResult {

        /**
         * Constructs a new GameBetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameBetResult);

        /** GameBetResult UserID. */
        public UserID: (number|Long);

        /** GameBetResult BetArea. */
        public BetArea: number;

        /** GameBetResult BetScore. */
        public BetScore: (number|Long);

        /** GameBetResult State. */
        public State: number;

        /** GameBetResult Hints. */
        public Hints: string;

        /**
         * Creates a new GameBetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBetResult instance
         */
        public static create(properties?: gamecomm.IGameBetResult): gamecomm.GameBetResult;

        /**
         * Encodes the specified GameBetResult message. Does not implicitly {@link gamecomm.GameBetResult.verify|verify} messages.
         * @param message GameBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBetResult message, length delimited. Does not implicitly {@link gamecomm.GameBetResult.verify|verify} messages.
         * @param message GameBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameBetResult;

        /**
         * Decodes a GameBetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameBetResult;

        /**
         * Verifies a GameBetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBetResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameBetResult;

        /**
         * Creates a plain object from a GameBetResult message. Also converts values to other types if specified.
         * @param message GameBetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameBetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBetResult to JSON.
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

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult Flag */
        Flag?: (number|null);

        /** GameResult Reason */
        Reason?: (Uint8Array|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameResult);

        /** GameResult Flag. */
        public Flag: number;

        /** GameResult Reason. */
        public Reason: Uint8Array;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: gamecomm.IGameResult): gamecomm.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link gamecomm.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link gamecomm.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
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

    /** Properties of a GameStateFree. */
    interface IGameStateFree {

        /** GameStateFree TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateFree WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStateFree. */
    class GameStateFree implements IGameStateFree {

        /**
         * Constructs a new GameStateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateFree);

        /** GameStateFree TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateFree WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateFree instance
         */
        public static create(properties?: gamecomm.IGameStateFree): gamecomm.GameStateFree;

        /**
         * Encodes the specified GameStateFree message. Does not implicitly {@link gamecomm.GameStateFree.verify|verify} messages.
         * @param message GameStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateFree message, length delimited. Does not implicitly {@link gamecomm.GameStateFree.verify|verify} messages.
         * @param message GameStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateFree;

        /**
         * Decodes a GameStateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateFree;

        /**
         * Verifies a GameStateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateFree
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateFree;

        /**
         * Creates a plain object from a GameStateFree message. Also converts values to other types if specified.
         * @param message GameStateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateStart. */
    interface IGameStateStart {

        /** GameStateStart TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateStart WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStateStart. */
    class GameStateStart implements IGameStateStart {

        /**
         * Constructs a new GameStateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateStart);

        /** GameStateStart TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateStart WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateStart instance
         */
        public static create(properties?: gamecomm.IGameStateStart): gamecomm.GameStateStart;

        /**
         * Encodes the specified GameStateStart message. Does not implicitly {@link gamecomm.GameStateStart.verify|verify} messages.
         * @param message GameStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateStart message, length delimited. Does not implicitly {@link gamecomm.GameStateStart.verify|verify} messages.
         * @param message GameStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateStart;

        /**
         * Decodes a GameStateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateStart;

        /**
         * Verifies a GameStateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateStart
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateStart;

        /**
         * Creates a plain object from a GameStateStart message. Also converts values to other types if specified.
         * @param message GameStateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStatePlaying. */
    interface IGameStatePlaying {

        /** GameStatePlaying TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStatePlaying WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStatePlaying. */
    class GameStatePlaying implements IGameStatePlaying {

        /**
         * Constructs a new GameStatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStatePlaying);

        /** GameStatePlaying TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStatePlaying WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatePlaying instance
         */
        public static create(properties?: gamecomm.IGameStatePlaying): gamecomm.GameStatePlaying;

        /**
         * Encodes the specified GameStatePlaying message. Does not implicitly {@link gamecomm.GameStatePlaying.verify|verify} messages.
         * @param message GameStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatePlaying message, length delimited. Does not implicitly {@link gamecomm.GameStatePlaying.verify|verify} messages.
         * @param message GameStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStatePlaying;

        /**
         * Decodes a GameStatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStatePlaying;

        /**
         * Verifies a GameStatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatePlaying
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStatePlaying;

        /**
         * Creates a plain object from a GameStatePlaying message. Also converts values to other types if specified.
         * @param message GameStatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateOver. */
    interface IGameStateOver {

        /** GameStateOver TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateOver WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStateOver. */
    class GameStateOver implements IGameStateOver {

        /**
         * Constructs a new GameStateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateOver);

        /** GameStateOver TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateOver WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateOver instance
         */
        public static create(properties?: gamecomm.IGameStateOver): gamecomm.GameStateOver;

        /**
         * Encodes the specified GameStateOver message. Does not implicitly {@link gamecomm.GameStateOver.verify|verify} messages.
         * @param message GameStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateOver message, length delimited. Does not implicitly {@link gamecomm.GameStateOver.verify|verify} messages.
         * @param message GameStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateOver;

        /**
         * Decodes a GameStateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateOver;

        /**
         * Verifies a GameStateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateOver
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateOver;

        /**
         * Creates a plain object from a GameStateOver message. Also converts values to other types if specified.
         * @param message GameStateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateCall. */
    interface IGameStateCall {

        /** GameStateCall TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateCall WaitTime */
        WaitTime?: (number|null);

        /** GameStateCall UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a GameStateCall. */
    class GameStateCall implements IGameStateCall {

        /**
         * Constructs a new GameStateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateCall);

        /** GameStateCall TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateCall WaitTime. */
        public WaitTime: number;

        /** GameStateCall UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new GameStateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateCall instance
         */
        public static create(properties?: gamecomm.IGameStateCall): gamecomm.GameStateCall;

        /**
         * Encodes the specified GameStateCall message. Does not implicitly {@link gamecomm.GameStateCall.verify|verify} messages.
         * @param message GameStateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateCall message, length delimited. Does not implicitly {@link gamecomm.GameStateCall.verify|verify} messages.
         * @param message GameStateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateCall;

        /**
         * Decodes a GameStateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateCall;

        /**
         * Verifies a GameStateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateCall;

        /**
         * Creates a plain object from a GameStateCall message. Also converts values to other types if specified.
         * @param message GameStateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBeOut. */
    interface IGameBeOut {

        /** GameBeOut UserID */
        UserID?: (number|Long|null);

        /** GameBeOut Code */
        Code?: (number|null);

        /** GameBeOut Hints */
        Hints?: (Uint8Array|null);
    }

    /** Represents a GameBeOut. */
    class GameBeOut implements IGameBeOut {

        /**
         * Constructs a new GameBeOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameBeOut);

        /** GameBeOut UserID. */
        public UserID: (number|Long);

        /** GameBeOut Code. */
        public Code: number;

        /** GameBeOut Hints. */
        public Hints: Uint8Array;

        /**
         * Creates a new GameBeOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBeOut instance
         */
        public static create(properties?: gamecomm.IGameBeOut): gamecomm.GameBeOut;

        /**
         * Encodes the specified GameBeOut message. Does not implicitly {@link gamecomm.GameBeOut.verify|verify} messages.
         * @param message GameBeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBeOut message, length delimited. Does not implicitly {@link gamecomm.GameBeOut.verify|verify} messages.
         * @param message GameBeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBeOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameBeOut;

        /**
         * Decodes a GameBeOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameBeOut;

        /**
         * Verifies a GameBeOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBeOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBeOut
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameBeOut;

        /**
         * Creates a plain object from a GameBeOut message. Also converts values to other types if specified.
         * @param message GameBeOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameBeOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBeOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameHost. */
    interface IGameHost {

        /** GameHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameHost. */
    class GameHost implements IGameHost {

        /**
         * Constructs a new GameHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameHost);

        /** GameHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameHost instance
         */
        public static create(properties?: gamecomm.IGameHost): gamecomm.GameHost;

        /**
         * Encodes the specified GameHost message. Does not implicitly {@link gamecomm.GameHost.verify|verify} messages.
         * @param message GameHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameHost message, length delimited. Does not implicitly {@link gamecomm.GameHost.verify|verify} messages.
         * @param message GameHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameHost;

        /**
         * Decodes a GameHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameHost;

        /**
         * Verifies a GameHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameHost
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameHost;

        /**
         * Creates a plain object from a GameHost message. Also converts values to other types if specified.
         * @param message GameHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameSuperHost. */
    interface IGameSuperHost {

        /** GameSuperHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameSuperHost. */
    class GameSuperHost implements IGameSuperHost {

        /**
         * Constructs a new GameSuperHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameSuperHost);

        /** GameSuperHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameSuperHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSuperHost instance
         */
        public static create(properties?: gamecomm.IGameSuperHost): gamecomm.GameSuperHost;

        /**
         * Encodes the specified GameSuperHost message. Does not implicitly {@link gamecomm.GameSuperHost.verify|verify} messages.
         * @param message GameSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSuperHost message, length delimited. Does not implicitly {@link gamecomm.GameSuperHost.verify|verify} messages.
         * @param message GameSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSuperHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameSuperHost;

        /**
         * Decodes a GameSuperHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameSuperHost;

        /**
         * Verifies a GameSuperHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameSuperHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameSuperHost
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameSuperHost;

        /**
         * Creates a plain object from a GameSuperHost message. Also converts values to other types if specified.
         * @param message GameSuperHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameSuperHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameSuperHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCall. */
    interface IGameCall {

        /** GameCall UserID */
        UserID?: (number|Long|null);

        /** GameCall Score */
        Score?: (number|null);
    }

    /** Represents a GameCall. */
    class GameCall implements IGameCall {

        /**
         * Constructs a new GameCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameCall);

        /** GameCall UserID. */
        public UserID: (number|Long);

        /** GameCall Score. */
        public Score: number;

        /**
         * Creates a new GameCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCall instance
         */
        public static create(properties?: gamecomm.IGameCall): gamecomm.GameCall;

        /**
         * Encodes the specified GameCall message. Does not implicitly {@link gamecomm.GameCall.verify|verify} messages.
         * @param message GameCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCall message, length delimited. Does not implicitly {@link gamecomm.GameCall.verify|verify} messages.
         * @param message GameCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameCall;

        /**
         * Decodes a GameCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameCall;

        /**
         * Verifies a GameCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameCall;

        /**
         * Creates a plain object from a GameCall message. Also converts values to other types if specified.
         * @param message GameCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
