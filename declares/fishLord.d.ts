import * as $protobuf from "protobufjs";
/** Namespace fishLord. */
export namespace fishLord {

    /** Properties of a GameFishLordEnter. */
    interface IGameFishLordEnter {

        /** GameFishLordEnter AwardAreas */
        AwardAreas?: (number[]|null);

        /** GameFishLordEnter players */
        players?: (string[]|null);

        /** GameFishLordEnter Countdown */
        Countdown?: (number|null);

        /** GameFishLordEnter Chips */
        Chips?: (number[]|null);

        /** GameFishLordEnter Odds */
        Odds?: (number[]|null);

        /** GameFishLordEnter BankerScore */
        BankerScore?: (number|Long|null);

        /** GameFishLordEnter PlayerScore */
        PlayerScore?: (number|Long|null);

        /** GameFishLordEnter Acquire */
        Acquire?: (number|Long|null);
    }

    /** Represents a GameFishLordEnter. */
    class GameFishLordEnter implements IGameFishLordEnter {

        /**
         * Constructs a new GameFishLordEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: fishLord.IGameFishLordEnter);

        /** GameFishLordEnter AwardAreas. */
        public AwardAreas: number[];

        /** GameFishLordEnter players. */
        public players: string[];

        /** GameFishLordEnter Countdown. */
        public Countdown: number;

        /** GameFishLordEnter Chips. */
        public Chips: number[];

        /** GameFishLordEnter Odds. */
        public Odds: number[];

        /** GameFishLordEnter BankerScore. */
        public BankerScore: (number|Long);

        /** GameFishLordEnter PlayerScore. */
        public PlayerScore: (number|Long);

        /** GameFishLordEnter Acquire. */
        public Acquire: (number|Long);

        /**
         * Creates a new GameFishLordEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameFishLordEnter instance
         */
        public static create(properties?: fishLord.IGameFishLordEnter): fishLord.GameFishLordEnter;

        /**
         * Encodes the specified GameFishLordEnter message. Does not implicitly {@link fishLord.GameFishLordEnter.verify|verify} messages.
         * @param message GameFishLordEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fishLord.IGameFishLordEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameFishLordEnter message, length delimited. Does not implicitly {@link fishLord.GameFishLordEnter.verify|verify} messages.
         * @param message GameFishLordEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fishLord.IGameFishLordEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameFishLordEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameFishLordEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fishLord.GameFishLordEnter;

        /**
         * Decodes a GameFishLordEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameFishLordEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fishLord.GameFishLordEnter;

        /**
         * Verifies a GameFishLordEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameFishLordEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameFishLordEnter
         */
        public static fromObject(object: { [k: string]: any }): fishLord.GameFishLordEnter;

        /**
         * Creates a plain object from a GameFishLordEnter message. Also converts values to other types if specified.
         * @param message GameFishLordEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fishLord.GameFishLordEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameFishLordEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameFishLordPlaying. */
    interface IGameFishLordPlaying {

        /** GameFishLordPlaying BetArea */
        BetArea?: (number|null);

        /** GameFishLordPlaying BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a GameFishLordPlaying. */
    class GameFishLordPlaying implements IGameFishLordPlaying {

        /**
         * Constructs a new GameFishLordPlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: fishLord.IGameFishLordPlaying);

        /** GameFishLordPlaying BetArea. */
        public BetArea: number;

        /** GameFishLordPlaying BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new GameFishLordPlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameFishLordPlaying instance
         */
        public static create(properties?: fishLord.IGameFishLordPlaying): fishLord.GameFishLordPlaying;

        /**
         * Encodes the specified GameFishLordPlaying message. Does not implicitly {@link fishLord.GameFishLordPlaying.verify|verify} messages.
         * @param message GameFishLordPlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fishLord.IGameFishLordPlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameFishLordPlaying message, length delimited. Does not implicitly {@link fishLord.GameFishLordPlaying.verify|verify} messages.
         * @param message GameFishLordPlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fishLord.IGameFishLordPlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameFishLordPlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameFishLordPlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fishLord.GameFishLordPlaying;

        /**
         * Decodes a GameFishLordPlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameFishLordPlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fishLord.GameFishLordPlaying;

        /**
         * Verifies a GameFishLordPlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameFishLordPlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameFishLordPlaying
         */
        public static fromObject(object: { [k: string]: any }): fishLord.GameFishLordPlaying;

        /**
         * Creates a plain object from a GameFishLordPlaying message. Also converts values to other types if specified.
         * @param message GameFishLordPlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fishLord.GameFishLordPlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameFishLordPlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameFishLordBetResult. */
    interface IGameFishLordBetResult {

        /** GameFishLordBetResult State */
        State?: (number|null);

        /** GameFishLordBetResult Hints */
        Hints?: (string|null);
    }

    /** Represents a GameFishLordBetResult. */
    class GameFishLordBetResult implements IGameFishLordBetResult {

        /**
         * Constructs a new GameFishLordBetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: fishLord.IGameFishLordBetResult);

        /** GameFishLordBetResult State. */
        public State: number;

        /** GameFishLordBetResult Hints. */
        public Hints: string;

        /**
         * Creates a new GameFishLordBetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameFishLordBetResult instance
         */
        public static create(properties?: fishLord.IGameFishLordBetResult): fishLord.GameFishLordBetResult;

        /**
         * Encodes the specified GameFishLordBetResult message. Does not implicitly {@link fishLord.GameFishLordBetResult.verify|verify} messages.
         * @param message GameFishLordBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fishLord.IGameFishLordBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameFishLordBetResult message, length delimited. Does not implicitly {@link fishLord.GameFishLordBetResult.verify|verify} messages.
         * @param message GameFishLordBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fishLord.IGameFishLordBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameFishLordBetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameFishLordBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fishLord.GameFishLordBetResult;

        /**
         * Decodes a GameFishLordBetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameFishLordBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fishLord.GameFishLordBetResult;

        /**
         * Verifies a GameFishLordBetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameFishLordBetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameFishLordBetResult
         */
        public static fromObject(object: { [k: string]: any }): fishLord.GameFishLordBetResult;

        /**
         * Creates a plain object from a GameFishLordBetResult message. Also converts values to other types if specified.
         * @param message GameFishLordBetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fishLord.GameFishLordBetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameFishLordBetResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameFishLordOver. */
    interface IGameFishLordOver {

        /** GameFishLordOver AwardArea */
        AwardArea?: (number[]|null);

        /** GameFishLordOver PlayerCard */
        PlayerCard?: (number[]|null);

        /** GameFishLordOver BankerCard */
        BankerCard?: (number[]|null);

        /** GameFishLordOver Acquire */
        Acquire?: (number|Long|null);
    }

    /** Represents a GameFishLordOver. */
    class GameFishLordOver implements IGameFishLordOver {

        /**
         * Constructs a new GameFishLordOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: fishLord.IGameFishLordOver);

        /** GameFishLordOver AwardArea. */
        public AwardArea: number[];

        /** GameFishLordOver PlayerCard. */
        public PlayerCard: number[];

        /** GameFishLordOver BankerCard. */
        public BankerCard: number[];

        /** GameFishLordOver Acquire. */
        public Acquire: (number|Long);

        /**
         * Creates a new GameFishLordOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameFishLordOver instance
         */
        public static create(properties?: fishLord.IGameFishLordOver): fishLord.GameFishLordOver;

        /**
         * Encodes the specified GameFishLordOver message. Does not implicitly {@link fishLord.GameFishLordOver.verify|verify} messages.
         * @param message GameFishLordOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: fishLord.IGameFishLordOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameFishLordOver message, length delimited. Does not implicitly {@link fishLord.GameFishLordOver.verify|verify} messages.
         * @param message GameFishLordOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: fishLord.IGameFishLordOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameFishLordOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameFishLordOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): fishLord.GameFishLordOver;

        /**
         * Decodes a GameFishLordOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameFishLordOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): fishLord.GameFishLordOver;

        /**
         * Verifies a GameFishLordOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameFishLordOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameFishLordOver
         */
        public static fromObject(object: { [k: string]: any }): fishLord.GameFishLordOver;

        /**
         * Creates a plain object from a GameFishLordOver message. Also converts values to other types if specified.
         * @param message GameFishLordOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: fishLord.GameFishLordOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameFishLordOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
