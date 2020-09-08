import * as $protobuf from "protobufjs";
/** Namespace tuitongzi. */
export namespace tuitongzi {

    /** Properties of a TuitongziSceneResp. */
    interface ITuitongziSceneResp {

        /** TuitongziSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TuitongziSceneResp Inning */
        Inning?: (string|null);

        /** TuitongziSceneResp Chips */
        Chips?: (number[]|null);

        /** TuitongziSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** TuitongziSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** TuitongziSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** TuitongziSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** TuitongziSceneResp RemainCount */
        RemainCount?: (number|null);
    }

    /** Represents a TuitongziSceneResp. */
    class TuitongziSceneResp implements ITuitongziSceneResp {

        /**
         * Constructs a new TuitongziSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziSceneResp);

        /** TuitongziSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** TuitongziSceneResp Inning. */
        public Inning: string;

        /** TuitongziSceneResp Chips. */
        public Chips: number[];

        /** TuitongziSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** TuitongziSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** TuitongziSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** TuitongziSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** TuitongziSceneResp RemainCount. */
        public RemainCount: number;

        /**
         * Creates a new TuitongziSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziSceneResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziSceneResp): tuitongzi.TuitongziSceneResp;

        /**
         * Encodes the specified TuitongziSceneResp message. Does not implicitly {@link tuitongzi.TuitongziSceneResp.verify|verify} messages.
         * @param message TuitongziSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziSceneResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziSceneResp.verify|verify} messages.
         * @param message TuitongziSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziSceneResp;

        /**
         * Decodes a TuitongziSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziSceneResp;

        /**
         * Verifies a TuitongziSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziSceneResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziSceneResp;

        /**
         * Creates a plain object from a TuitongziSceneResp message. Also converts values to other types if specified.
         * @param message TuitongziSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziStateStartResp. */
    interface ITuitongziStateStartResp {

        /** TuitongziStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TuitongziStateStartResp. */
    class TuitongziStateStartResp implements ITuitongziStateStartResp {

        /**
         * Constructs a new TuitongziStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziStateStartResp);

        /** TuitongziStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TuitongziStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziStateStartResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziStateStartResp): tuitongzi.TuitongziStateStartResp;

        /**
         * Encodes the specified TuitongziStateStartResp message. Does not implicitly {@link tuitongzi.TuitongziStateStartResp.verify|verify} messages.
         * @param message TuitongziStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziStateStartResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziStateStartResp.verify|verify} messages.
         * @param message TuitongziStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziStateStartResp;

        /**
         * Decodes a TuitongziStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziStateStartResp;

        /**
         * Verifies a TuitongziStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziStateStartResp;

        /**
         * Creates a plain object from a TuitongziStateStartResp message. Also converts values to other types if specified.
         * @param message TuitongziStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziStatePlayingResp. */
    interface ITuitongziStatePlayingResp {

        /** TuitongziStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TuitongziStatePlayingResp. */
    class TuitongziStatePlayingResp implements ITuitongziStatePlayingResp {

        /**
         * Constructs a new TuitongziStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziStatePlayingResp);

        /** TuitongziStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TuitongziStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziStatePlayingResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziStatePlayingResp): tuitongzi.TuitongziStatePlayingResp;

        /**
         * Encodes the specified TuitongziStatePlayingResp message. Does not implicitly {@link tuitongzi.TuitongziStatePlayingResp.verify|verify} messages.
         * @param message TuitongziStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziStatePlayingResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziStatePlayingResp.verify|verify} messages.
         * @param message TuitongziStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziStatePlayingResp;

        /**
         * Decodes a TuitongziStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziStatePlayingResp;

        /**
         * Verifies a TuitongziStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziStatePlayingResp;

        /**
         * Creates a plain object from a TuitongziStatePlayingResp message. Also converts values to other types if specified.
         * @param message TuitongziStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziStateOpenResp. */
    interface ITuitongziStateOpenResp {

        /** TuitongziStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** TuitongziStateOpenResp OpenInfo */
        OpenInfo?: (tuitongzi.ITuitongziOpenResp|null);
    }

    /** Represents a TuitongziStateOpenResp. */
    class TuitongziStateOpenResp implements ITuitongziStateOpenResp {

        /**
         * Constructs a new TuitongziStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziStateOpenResp);

        /** TuitongziStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** TuitongziStateOpenResp OpenInfo. */
        public OpenInfo?: (tuitongzi.ITuitongziOpenResp|null);

        /**
         * Creates a new TuitongziStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziStateOpenResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziStateOpenResp): tuitongzi.TuitongziStateOpenResp;

        /**
         * Encodes the specified TuitongziStateOpenResp message. Does not implicitly {@link tuitongzi.TuitongziStateOpenResp.verify|verify} messages.
         * @param message TuitongziStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziStateOpenResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziStateOpenResp.verify|verify} messages.
         * @param message TuitongziStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziStateOpenResp;

        /**
         * Decodes a TuitongziStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziStateOpenResp;

        /**
         * Verifies a TuitongziStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziStateOpenResp;

        /**
         * Creates a plain object from a TuitongziStateOpenResp message. Also converts values to other types if specified.
         * @param message TuitongziStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziStateOverResp. */
    interface ITuitongziStateOverResp {

        /** TuitongziStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TuitongziStateOverResp. */
    class TuitongziStateOverResp implements ITuitongziStateOverResp {

        /**
         * Constructs a new TuitongziStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziStateOverResp);

        /** TuitongziStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TuitongziStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziStateOverResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziStateOverResp): tuitongzi.TuitongziStateOverResp;

        /**
         * Encodes the specified TuitongziStateOverResp message. Does not implicitly {@link tuitongzi.TuitongziStateOverResp.verify|verify} messages.
         * @param message TuitongziStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziStateOverResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziStateOverResp.verify|verify} messages.
         * @param message TuitongziStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziStateOverResp;

        /**
         * Decodes a TuitongziStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziStateOverResp;

        /**
         * Verifies a TuitongziStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziStateOverResp;

        /**
         * Creates a plain object from a TuitongziStateOverResp message. Also converts values to other types if specified.
         * @param message TuitongziStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziBetReq. */
    interface ITuitongziBetReq {

        /** TuitongziBetReq BetArea */
        BetArea?: (number|null);

        /** TuitongziBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a TuitongziBetReq. */
    class TuitongziBetReq implements ITuitongziBetReq {

        /**
         * Constructs a new TuitongziBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziBetReq);

        /** TuitongziBetReq BetArea. */
        public BetArea: number;

        /** TuitongziBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new TuitongziBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziBetReq instance
         */
        public static create(properties?: tuitongzi.ITuitongziBetReq): tuitongzi.TuitongziBetReq;

        /**
         * Encodes the specified TuitongziBetReq message. Does not implicitly {@link tuitongzi.TuitongziBetReq.verify|verify} messages.
         * @param message TuitongziBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziBetReq message, length delimited. Does not implicitly {@link tuitongzi.TuitongziBetReq.verify|verify} messages.
         * @param message TuitongziBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziBetReq;

        /**
         * Decodes a TuitongziBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziBetReq;

        /**
         * Verifies a TuitongziBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziBetReq
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziBetReq;

        /**
         * Creates a plain object from a TuitongziBetReq message. Also converts values to other types if specified.
         * @param message TuitongziBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziBetResp. */
    interface ITuitongziBetResp {

        /** TuitongziBetResp UserID */
        UserID?: (number|Long|null);

        /** TuitongziBetResp BetArea */
        BetArea?: (number|null);

        /** TuitongziBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a TuitongziBetResp. */
    class TuitongziBetResp implements ITuitongziBetResp {

        /**
         * Constructs a new TuitongziBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziBetResp);

        /** TuitongziBetResp UserID. */
        public UserID: (number|Long);

        /** TuitongziBetResp BetArea. */
        public BetArea: number;

        /** TuitongziBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new TuitongziBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziBetResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziBetResp): tuitongzi.TuitongziBetResp;

        /**
         * Encodes the specified TuitongziBetResp message. Does not implicitly {@link tuitongzi.TuitongziBetResp.verify|verify} messages.
         * @param message TuitongziBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziBetResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziBetResp.verify|verify} messages.
         * @param message TuitongziBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziBetResp;

        /**
         * Decodes a TuitongziBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziBetResp;

        /**
         * Verifies a TuitongziBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziBetResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziBetResp;

        /**
         * Creates a plain object from a TuitongziBetResp message. Also converts values to other types if specified.
         * @param message TuitongziBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziOpenResp. */
    interface ITuitongziOpenResp {

        /** TuitongziOpenResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** TuitongziOpenResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);

        /** TuitongziOpenResp ShunCard */
        ShunCard?: (gamecomm.ICardInfo|null);

        /** TuitongziOpenResp TianCard */
        TianCard?: (gamecomm.ICardInfo|null);

        /** TuitongziOpenResp DiCard */
        DiCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a TuitongziOpenResp. */
    class TuitongziOpenResp implements ITuitongziOpenResp {

        /**
         * Constructs a new TuitongziOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziOpenResp);

        /** TuitongziOpenResp AwardArea. */
        public AwardArea: Uint8Array;

        /** TuitongziOpenResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /** TuitongziOpenResp ShunCard. */
        public ShunCard?: (gamecomm.ICardInfo|null);

        /** TuitongziOpenResp TianCard. */
        public TianCard?: (gamecomm.ICardInfo|null);

        /** TuitongziOpenResp DiCard. */
        public DiCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new TuitongziOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziOpenResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziOpenResp): tuitongzi.TuitongziOpenResp;

        /**
         * Encodes the specified TuitongziOpenResp message. Does not implicitly {@link tuitongzi.TuitongziOpenResp.verify|verify} messages.
         * @param message TuitongziOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziOpenResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziOpenResp.verify|verify} messages.
         * @param message TuitongziOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziOpenResp;

        /**
         * Decodes a TuitongziOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziOpenResp;

        /**
         * Verifies a TuitongziOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziOpenResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziOpenResp;

        /**
         * Creates a plain object from a TuitongziOpenResp message. Also converts values to other types if specified.
         * @param message TuitongziOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziCheckoutResp. */
    interface ITuitongziCheckoutResp {

        /** TuitongziCheckoutResp MyAcquire */
        MyAcquire?: (number|Long|null);

        /** TuitongziCheckoutResp Acquires */
        Acquires?: ((number|Long)[]|null);
    }

    /** Represents a TuitongziCheckoutResp. */
    class TuitongziCheckoutResp implements ITuitongziCheckoutResp {

        /**
         * Constructs a new TuitongziCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziCheckoutResp);

        /** TuitongziCheckoutResp MyAcquire. */
        public MyAcquire: (number|Long);

        /** TuitongziCheckoutResp Acquires. */
        public Acquires: (number|Long)[];

        /**
         * Creates a new TuitongziCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziCheckoutResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziCheckoutResp): tuitongzi.TuitongziCheckoutResp;

        /**
         * Encodes the specified TuitongziCheckoutResp message. Does not implicitly {@link tuitongzi.TuitongziCheckoutResp.verify|verify} messages.
         * @param message TuitongziCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziCheckoutResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziCheckoutResp.verify|verify} messages.
         * @param message TuitongziCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziCheckoutResp;

        /**
         * Decodes a TuitongziCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziCheckoutResp;

        /**
         * Verifies a TuitongziCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziCheckoutResp;

        /**
         * Creates a plain object from a TuitongziCheckoutResp message. Also converts values to other types if specified.
         * @param message TuitongziCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziHostReq. */
    interface ITuitongziHostReq {

        /** TuitongziHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TuitongziHostReq. */
    class TuitongziHostReq implements ITuitongziHostReq {

        /**
         * Constructs a new TuitongziHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziHostReq);

        /** TuitongziHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TuitongziHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziHostReq instance
         */
        public static create(properties?: tuitongzi.ITuitongziHostReq): tuitongzi.TuitongziHostReq;

        /**
         * Encodes the specified TuitongziHostReq message. Does not implicitly {@link tuitongzi.TuitongziHostReq.verify|verify} messages.
         * @param message TuitongziHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziHostReq message, length delimited. Does not implicitly {@link tuitongzi.TuitongziHostReq.verify|verify} messages.
         * @param message TuitongziHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziHostReq;

        /**
         * Decodes a TuitongziHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziHostReq;

        /**
         * Verifies a TuitongziHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziHostReq
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziHostReq;

        /**
         * Creates a plain object from a TuitongziHostReq message. Also converts values to other types if specified.
         * @param message TuitongziHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziHostResp. */
    interface ITuitongziHostResp {

        /** TuitongziHostResp UserID */
        UserID?: (number|Long|null);

        /** TuitongziHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TuitongziHostResp. */
    class TuitongziHostResp implements ITuitongziHostResp {

        /**
         * Constructs a new TuitongziHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziHostResp);

        /** TuitongziHostResp UserID. */
        public UserID: (number|Long);

        /** TuitongziHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TuitongziHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziHostResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziHostResp): tuitongzi.TuitongziHostResp;

        /**
         * Encodes the specified TuitongziHostResp message. Does not implicitly {@link tuitongzi.TuitongziHostResp.verify|verify} messages.
         * @param message TuitongziHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziHostResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziHostResp.verify|verify} messages.
         * @param message TuitongziHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziHostResp;

        /**
         * Decodes a TuitongziHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziHostResp;

        /**
         * Verifies a TuitongziHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziHostResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziHostResp;

        /**
         * Creates a plain object from a TuitongziHostResp message. Also converts values to other types if specified.
         * @param message TuitongziHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziSuperHostReq. */
    interface ITuitongziSuperHostReq {

        /** TuitongziSuperHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TuitongziSuperHostReq. */
    class TuitongziSuperHostReq implements ITuitongziSuperHostReq {

        /**
         * Constructs a new TuitongziSuperHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziSuperHostReq);

        /** TuitongziSuperHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TuitongziSuperHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziSuperHostReq instance
         */
        public static create(properties?: tuitongzi.ITuitongziSuperHostReq): tuitongzi.TuitongziSuperHostReq;

        /**
         * Encodes the specified TuitongziSuperHostReq message. Does not implicitly {@link tuitongzi.TuitongziSuperHostReq.verify|verify} messages.
         * @param message TuitongziSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziSuperHostReq message, length delimited. Does not implicitly {@link tuitongzi.TuitongziSuperHostReq.verify|verify} messages.
         * @param message TuitongziSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziSuperHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziSuperHostReq;

        /**
         * Decodes a TuitongziSuperHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziSuperHostReq;

        /**
         * Verifies a TuitongziSuperHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziSuperHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziSuperHostReq
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziSuperHostReq;

        /**
         * Creates a plain object from a TuitongziSuperHostReq message. Also converts values to other types if specified.
         * @param message TuitongziSuperHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziSuperHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziSuperHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TuitongziSuperHostResp. */
    interface ITuitongziSuperHostResp {

        /** TuitongziSuperHostResp UserID */
        UserID?: (number|Long|null);

        /** TuitongziSuperHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TuitongziSuperHostResp. */
    class TuitongziSuperHostResp implements ITuitongziSuperHostResp {

        /**
         * Constructs a new TuitongziSuperHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tuitongzi.ITuitongziSuperHostResp);

        /** TuitongziSuperHostResp UserID. */
        public UserID: (number|Long);

        /** TuitongziSuperHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TuitongziSuperHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TuitongziSuperHostResp instance
         */
        public static create(properties?: tuitongzi.ITuitongziSuperHostResp): tuitongzi.TuitongziSuperHostResp;

        /**
         * Encodes the specified TuitongziSuperHostResp message. Does not implicitly {@link tuitongzi.TuitongziSuperHostResp.verify|verify} messages.
         * @param message TuitongziSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tuitongzi.ITuitongziSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TuitongziSuperHostResp message, length delimited. Does not implicitly {@link tuitongzi.TuitongziSuperHostResp.verify|verify} messages.
         * @param message TuitongziSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tuitongzi.ITuitongziSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TuitongziSuperHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TuitongziSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tuitongzi.TuitongziSuperHostResp;

        /**
         * Decodes a TuitongziSuperHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TuitongziSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tuitongzi.TuitongziSuperHostResp;

        /**
         * Verifies a TuitongziSuperHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TuitongziSuperHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TuitongziSuperHostResp
         */
        public static fromObject(object: { [k: string]: any }): tuitongzi.TuitongziSuperHostResp;

        /**
         * Creates a plain object from a TuitongziSuperHostResp message. Also converts values to other types if specified.
         * @param message TuitongziSuperHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tuitongzi.TuitongziSuperHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TuitongziSuperHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
