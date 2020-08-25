import * as $protobuf from "protobufjs";
/** Namespace baccarat. */
export namespace baccarat {

    /** Properties of a GameBaccaratEnter. */
    interface IGameBaccaratEnter {

        /** GameBaccaratEnter TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameBaccaratEnter Chips */
        Chips?: (number[]|null);

        /** GameBaccaratEnter AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** GameBaccaratEnter FreeTime */
        FreeTime?: (number|null);

        /** GameBaccaratEnter BetTime */
        BetTime?: (number|null);

        /** GameBaccaratEnter OpenTime */
        OpenTime?: (number|null);

        /** GameBaccaratEnter Free */
        Free?: (gamecomm.IGameStateFree|null);

        /** GameBaccaratEnter Start */
        Start?: (gamecomm.IGameStateStart|null);

        /** GameBaccaratEnter Playing */
        Playing?: (gamecomm.IGameStatePlaying|null);

        /** GameBaccaratEnter Over */
        Over?: (gamecomm.IGameStateOver|null);
    }

    /** Represents a GameBaccaratEnter. */
    class GameBaccaratEnter implements IGameBaccaratEnter {

        /**
         * Constructs a new GameBaccaratEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratEnter);

        /** GameBaccaratEnter TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameBaccaratEnter Chips. */
        public Chips: number[];

        /** GameBaccaratEnter AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** GameBaccaratEnter FreeTime. */
        public FreeTime: number;

        /** GameBaccaratEnter BetTime. */
        public BetTime: number;

        /** GameBaccaratEnter OpenTime. */
        public OpenTime: number;

        /** GameBaccaratEnter Free. */
        public Free?: (gamecomm.IGameStateFree|null);

        /** GameBaccaratEnter Start. */
        public Start?: (gamecomm.IGameStateStart|null);

        /** GameBaccaratEnter Playing. */
        public Playing?: (gamecomm.IGameStatePlaying|null);

        /** GameBaccaratEnter Over. */
        public Over?: (gamecomm.IGameStateOver|null);

        /**
         * Creates a new GameBaccaratEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratEnter instance
         */
        public static create(properties?: baccarat.IGameBaccaratEnter): baccarat.GameBaccaratEnter;

        /**
         * Encodes the specified GameBaccaratEnter message. Does not implicitly {@link baccarat.GameBaccaratEnter.verify|verify} messages.
         * @param message GameBaccaratEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratEnter message, length delimited. Does not implicitly {@link baccarat.GameBaccaratEnter.verify|verify} messages.
         * @param message GameBaccaratEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratEnter;

        /**
         * Decodes a GameBaccaratEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratEnter;

        /**
         * Verifies a GameBaccaratEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratEnter
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratEnter;

        /**
         * Creates a plain object from a GameBaccaratEnter message. Also converts values to other types if specified.
         * @param message GameBaccaratEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBaccaratHost. */
    interface IGameBaccaratHost {

        /** GameBaccaratHost UserID */
        UserID?: (number|Long|null);

        /** GameBaccaratHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameBaccaratHost. */
    class GameBaccaratHost implements IGameBaccaratHost {

        /**
         * Constructs a new GameBaccaratHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratHost);

        /** GameBaccaratHost UserID. */
        public UserID: (number|Long);

        /** GameBaccaratHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameBaccaratHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratHost instance
         */
        public static create(properties?: baccarat.IGameBaccaratHost): baccarat.GameBaccaratHost;

        /**
         * Encodes the specified GameBaccaratHost message. Does not implicitly {@link baccarat.GameBaccaratHost.verify|verify} messages.
         * @param message GameBaccaratHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratHost message, length delimited. Does not implicitly {@link baccarat.GameBaccaratHost.verify|verify} messages.
         * @param message GameBaccaratHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratHost;

        /**
         * Decodes a GameBaccaratHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratHost;

        /**
         * Verifies a GameBaccaratHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratHost
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratHost;

        /**
         * Creates a plain object from a GameBaccaratHost message. Also converts values to other types if specified.
         * @param message GameBaccaratHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBaccaratSuperHost. */
    interface IGameBaccaratSuperHost {

        /** GameBaccaratSuperHost UserID */
        UserID?: (number|Long|null);

        /** GameBaccaratSuperHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameBaccaratSuperHost. */
    class GameBaccaratSuperHost implements IGameBaccaratSuperHost {

        /**
         * Constructs a new GameBaccaratSuperHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratSuperHost);

        /** GameBaccaratSuperHost UserID. */
        public UserID: (number|Long);

        /** GameBaccaratSuperHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameBaccaratSuperHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratSuperHost instance
         */
        public static create(properties?: baccarat.IGameBaccaratSuperHost): baccarat.GameBaccaratSuperHost;

        /**
         * Encodes the specified GameBaccaratSuperHost message. Does not implicitly {@link baccarat.GameBaccaratSuperHost.verify|verify} messages.
         * @param message GameBaccaratSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratSuperHost message, length delimited. Does not implicitly {@link baccarat.GameBaccaratSuperHost.verify|verify} messages.
         * @param message GameBaccaratSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratSuperHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratSuperHost;

        /**
         * Decodes a GameBaccaratSuperHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratSuperHost;

        /**
         * Verifies a GameBaccaratSuperHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratSuperHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratSuperHost
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratSuperHost;

        /**
         * Creates a plain object from a GameBaccaratSuperHost message. Also converts values to other types if specified.
         * @param message GameBaccaratSuperHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratSuperHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratSuperHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBaccaratBet. */
    interface IGameBaccaratBet {

        /** GameBaccaratBet BetArea */
        BetArea?: (number|null);

        /** GameBaccaratBet BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a GameBaccaratBet. */
    class GameBaccaratBet implements IGameBaccaratBet {

        /**
         * Constructs a new GameBaccaratBet.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratBet);

        /** GameBaccaratBet BetArea. */
        public BetArea: number;

        /** GameBaccaratBet BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new GameBaccaratBet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratBet instance
         */
        public static create(properties?: baccarat.IGameBaccaratBet): baccarat.GameBaccaratBet;

        /**
         * Encodes the specified GameBaccaratBet message. Does not implicitly {@link baccarat.GameBaccaratBet.verify|verify} messages.
         * @param message GameBaccaratBet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratBet message, length delimited. Does not implicitly {@link baccarat.GameBaccaratBet.verify|verify} messages.
         * @param message GameBaccaratBet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratBet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratBet;

        /**
         * Decodes a GameBaccaratBet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratBet;

        /**
         * Verifies a GameBaccaratBet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratBet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratBet
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratBet;

        /**
         * Creates a plain object from a GameBaccaratBet message. Also converts values to other types if specified.
         * @param message GameBaccaratBet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratBet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratBet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBaccaratBetResult. */
    interface IGameBaccaratBetResult {

        /** GameBaccaratBetResult UserID */
        UserID?: (number|Long|null);

        /** GameBaccaratBetResult BetArea */
        BetArea?: (number|null);

        /** GameBaccaratBetResult BetScore */
        BetScore?: (number|Long|null);

        /** GameBaccaratBetResult State */
        State?: (number|null);

        /** GameBaccaratBetResult Hints */
        Hints?: (string|null);
    }

    /** Represents a GameBaccaratBetResult. */
    class GameBaccaratBetResult implements IGameBaccaratBetResult {

        /**
         * Constructs a new GameBaccaratBetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratBetResult);

        /** GameBaccaratBetResult UserID. */
        public UserID: (number|Long);

        /** GameBaccaratBetResult BetArea. */
        public BetArea: number;

        /** GameBaccaratBetResult BetScore. */
        public BetScore: (number|Long);

        /** GameBaccaratBetResult State. */
        public State: number;

        /** GameBaccaratBetResult Hints. */
        public Hints: string;

        /**
         * Creates a new GameBaccaratBetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratBetResult instance
         */
        public static create(properties?: baccarat.IGameBaccaratBetResult): baccarat.GameBaccaratBetResult;

        /**
         * Encodes the specified GameBaccaratBetResult message. Does not implicitly {@link baccarat.GameBaccaratBetResult.verify|verify} messages.
         * @param message GameBaccaratBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratBetResult message, length delimited. Does not implicitly {@link baccarat.GameBaccaratBetResult.verify|verify} messages.
         * @param message GameBaccaratBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratBetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratBetResult;

        /**
         * Decodes a GameBaccaratBetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratBetResult;

        /**
         * Verifies a GameBaccaratBetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratBetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratBetResult
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratBetResult;

        /**
         * Creates a plain object from a GameBaccaratBetResult message. Also converts values to other types if specified.
         * @param message GameBaccaratBetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratBetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratBetResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBaccaratOver. */
    interface IGameBaccaratOver {

        /** GameBaccaratOver AwardArea */
        AwardArea?: (Uint8Array|null);

        /** GameBaccaratOver PlayerCard */
        PlayerCard?: (Uint8Array|null);

        /** GameBaccaratOver BankerCard */
        BankerCard?: (Uint8Array|null);
    }

    /** Represents a GameBaccaratOver. */
    class GameBaccaratOver implements IGameBaccaratOver {

        /**
         * Constructs a new GameBaccaratOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratOver);

        /** GameBaccaratOver AwardArea. */
        public AwardArea: Uint8Array;

        /** GameBaccaratOver PlayerCard. */
        public PlayerCard: Uint8Array;

        /** GameBaccaratOver BankerCard. */
        public BankerCard: Uint8Array;

        /**
         * Creates a new GameBaccaratOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratOver instance
         */
        public static create(properties?: baccarat.IGameBaccaratOver): baccarat.GameBaccaratOver;

        /**
         * Encodes the specified GameBaccaratOver message. Does not implicitly {@link baccarat.GameBaccaratOver.verify|verify} messages.
         * @param message GameBaccaratOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratOver message, length delimited. Does not implicitly {@link baccarat.GameBaccaratOver.verify|verify} messages.
         * @param message GameBaccaratOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratOver;

        /**
         * Decodes a GameBaccaratOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratOver;

        /**
         * Verifies a GameBaccaratOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratOver
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratOver;

        /**
         * Creates a plain object from a GameBaccaratOver message. Also converts values to other types if specified.
         * @param message GameBaccaratOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBaccaratCheckout. */
    interface IGameBaccaratCheckout {

        /** GameBaccaratCheckout Acquire */
        Acquire?: (number|Long|null);
    }

    /** Represents a GameBaccaratCheckout. */
    class GameBaccaratCheckout implements IGameBaccaratCheckout {

        /**
         * Constructs a new GameBaccaratCheckout.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IGameBaccaratCheckout);

        /** GameBaccaratCheckout Acquire. */
        public Acquire: (number|Long);

        /**
         * Creates a new GameBaccaratCheckout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBaccaratCheckout instance
         */
        public static create(properties?: baccarat.IGameBaccaratCheckout): baccarat.GameBaccaratCheckout;

        /**
         * Encodes the specified GameBaccaratCheckout message. Does not implicitly {@link baccarat.GameBaccaratCheckout.verify|verify} messages.
         * @param message GameBaccaratCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IGameBaccaratCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBaccaratCheckout message, length delimited. Does not implicitly {@link baccarat.GameBaccaratCheckout.verify|verify} messages.
         * @param message GameBaccaratCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IGameBaccaratCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBaccaratCheckout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBaccaratCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.GameBaccaratCheckout;

        /**
         * Decodes a GameBaccaratCheckout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBaccaratCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.GameBaccaratCheckout;

        /**
         * Verifies a GameBaccaratCheckout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBaccaratCheckout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBaccaratCheckout
         */
        public static fromObject(object: { [k: string]: any }): baccarat.GameBaccaratCheckout;

        /**
         * Creates a plain object from a GameBaccaratCheckout message. Also converts values to other types if specified.
         * @param message GameBaccaratCheckout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.GameBaccaratCheckout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBaccaratCheckout to JSON.
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
