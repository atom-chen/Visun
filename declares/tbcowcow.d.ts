import * as $protobuf from "protobufjs";
/** Namespace tbcowcow. */
export namespace tbcowcow {

    /** Properties of a TbcowcowSceneResp. */
    interface ITbcowcowSceneResp {

        /** TbcowcowSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TbcowcowSceneResp Chips */
        Chips?: (number[]|null);

        /** TbcowcowSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** TbcowcowSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** TbcowcowSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** TbcowcowSceneResp Inning */
        Inning?: (string|null);

        /** TbcowcowSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** TbcowcowSceneResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a TbcowcowSceneResp. */
    class TbcowcowSceneResp implements ITbcowcowSceneResp {

        /**
         * Constructs a new TbcowcowSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowSceneResp);

        /** TbcowcowSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** TbcowcowSceneResp Chips. */
        public Chips: number[];

        /** TbcowcowSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** TbcowcowSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** TbcowcowSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** TbcowcowSceneResp Inning. */
        public Inning: string;

        /** TbcowcowSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** TbcowcowSceneResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new TbcowcowSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowSceneResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowSceneResp): tbcowcow.TbcowcowSceneResp;

        /**
         * Encodes the specified TbcowcowSceneResp message. Does not implicitly {@link tbcowcow.TbcowcowSceneResp.verify|verify} messages.
         * @param message TbcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowSceneResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowSceneResp.verify|verify} messages.
         * @param message TbcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * var $protobuf = protobuf;
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowSceneResp;

        /**
         * Decodes a TbcowcowSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * var $protobuf = protobuf;
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowSceneResp;

        /**
         * Verifies a TbcowcowSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowSceneResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowSceneResp;

        /**
         * Creates a plain object from a TbcowcowSceneResp message. Also converts values to other types if specified.
         * @param message TbcowcowSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowStateFreeResp. */
    interface ITbcowcowStateFreeResp {

        /** TbcowcowStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TbcowcowStateFreeResp. */
    class TbcowcowStateFreeResp implements ITbcowcowStateFreeResp {

        /**
         * Constructs a new TbcowcowStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowStateFreeResp);

        /** TbcowcowStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TbcowcowStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowStateFreeResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowStateFreeResp): tbcowcow.TbcowcowStateFreeResp;

        /**
         * Encodes the specified TbcowcowStateFreeResp message. Does not implicitly {@link tbcowcow.TbcowcowStateFreeResp.verify|verify} messages.
         * @param message TbcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowStateFreeResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowStateFreeResp.verify|verify} messages.
         * @param message TbcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * var $protobuf = protobuf;
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStateFreeResp;

        /**
         * Decodes a TbcowcowStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * var $protobuf = protobuf;
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowStateFreeResp;

        /**
         * Verifies a TbcowcowStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowStateFreeResp;

        /**
         * Creates a plain object from a TbcowcowStateFreeResp message. Also converts values to other types if specified.
         * @param message TbcowcowStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowStateStartResp. */
    interface ITbcowcowStateStartResp {

        /** TbcowcowStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** TbcowcowStateStartResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a TbcowcowStateStartResp. */
    class TbcowcowStateStartResp implements ITbcowcowStateStartResp {

        /**
         * Constructs a new TbcowcowStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowStateStartResp);

        /** TbcowcowStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** TbcowcowStateStartResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new TbcowcowStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowStateStartResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowStateStartResp): tbcowcow.TbcowcowStateStartResp;

        /**
         * Encodes the specified TbcowcowStateStartResp message. Does not implicitly {@link tbcowcow.TbcowcowStateStartResp.verify|verify} messages.
         * @param message TbcowcowStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowStateStartResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowStateStartResp.verify|verify} messages.
         * @param message TbcowcowStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStateStartResp;

        /**
         * Decodes a TbcowcowStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowStateStartResp;

        /**
         * Verifies a TbcowcowStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowStateStartResp;

        /**
         * Creates a plain object from a TbcowcowStateStartResp message. Also converts values to other types if specified.
         * @param message TbcowcowStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowStatePlayingResp. */
    interface ITbcowcowStatePlayingResp {

        /** TbcowcowStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TbcowcowStatePlayingResp. */
    class TbcowcowStatePlayingResp implements ITbcowcowStatePlayingResp {

        /**
         * Constructs a new TbcowcowStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowStatePlayingResp);

        /** TbcowcowStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TbcowcowStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowStatePlayingResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowStatePlayingResp): tbcowcow.TbcowcowStatePlayingResp;

        /**
         * Encodes the specified TbcowcowStatePlayingResp message. Does not implicitly {@link tbcowcow.TbcowcowStatePlayingResp.verify|verify} messages.
         * @param message TbcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowStatePlayingResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowStatePlayingResp.verify|verify} messages.
         * @param message TbcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStatePlayingResp;

        /**
         * Decodes a TbcowcowStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowStatePlayingResp;

        /**
         * Verifies a TbcowcowStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowStatePlayingResp;

        /**
         * Creates a plain object from a TbcowcowStatePlayingResp message. Also converts values to other types if specified.
         * @param message TbcowcowStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowStateOpenResp. */
    interface ITbcowcowStateOpenResp {

        /** TbcowcowStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** TbcowcowStateOpenResp OpenInfo */
        OpenInfo?: (tbcowcow.ITbcowcowOpenResp|null);
    }

    /** Represents a TbcowcowStateOpenResp. */
    class TbcowcowStateOpenResp implements ITbcowcowStateOpenResp {

        /**
         * Constructs a new TbcowcowStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowStateOpenResp);

        /** TbcowcowStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** TbcowcowStateOpenResp OpenInfo. */
        public OpenInfo?: (tbcowcow.ITbcowcowOpenResp|null);

        /**
         * Creates a new TbcowcowStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowStateOpenResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowStateOpenResp): tbcowcow.TbcowcowStateOpenResp;

        /**
         * Encodes the specified TbcowcowStateOpenResp message. Does not implicitly {@link tbcowcow.TbcowcowStateOpenResp.verify|verify} messages.
         * @param message TbcowcowStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowStateOpenResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowStateOpenResp.verify|verify} messages.
         * @param message TbcowcowStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStateOpenResp;

        /**
         * Decodes a TbcowcowStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowStateOpenResp;

        /**
         * Verifies a TbcowcowStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowStateOpenResp;

        /**
         * Creates a plain object from a TbcowcowStateOpenResp message. Also converts values to other types if specified.
         * @param message TbcowcowStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowStateOverResp. */
    interface ITbcowcowStateOverResp {

        /** TbcowcowStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TbcowcowStateOverResp. */
    class TbcowcowStateOverResp implements ITbcowcowStateOverResp {

        /**
         * Constructs a new TbcowcowStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowStateOverResp);

        /** TbcowcowStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TbcowcowStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowStateOverResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowStateOverResp): tbcowcow.TbcowcowStateOverResp;

        /**
         * Encodes the specified TbcowcowStateOverResp message. Does not implicitly {@link tbcowcow.TbcowcowStateOverResp.verify|verify} messages.
         * @param message TbcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowStateOverResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowStateOverResp.verify|verify} messages.
         * @param message TbcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStateOverResp;

        /**
         * Decodes a TbcowcowStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowStateOverResp;

        /**
         * Verifies a TbcowcowStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowStateOverResp;

        /**
         * Creates a plain object from a TbcowcowStateOverResp message. Also converts values to other types if specified.
         * @param message TbcowcowStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowBetReq. */
    interface ITbcowcowBetReq {

        /** TbcowcowBetReq BetArea */
        BetArea?: (number|null);

        /** TbcowcowBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a TbcowcowBetReq. */
    class TbcowcowBetReq implements ITbcowcowBetReq {

        /**
         * Constructs a new TbcowcowBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowBetReq);

        /** TbcowcowBetReq BetArea. */
        public BetArea: number;

        /** TbcowcowBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new TbcowcowBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowBetReq instance
         */
        public static create(properties?: tbcowcow.ITbcowcowBetReq): tbcowcow.TbcowcowBetReq;

        /**
         * Encodes the specified TbcowcowBetReq message. Does not implicitly {@link tbcowcow.TbcowcowBetReq.verify|verify} messages.
         * @param message TbcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowBetReq message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowBetReq.verify|verify} messages.
         * @param message TbcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowBetReq;

        /**
         * Decodes a TbcowcowBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowBetReq;

        /**
         * Verifies a TbcowcowBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowBetReq
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowBetReq;

        /**
         * Creates a plain object from a TbcowcowBetReq message. Also converts values to other types if specified.
         * @param message TbcowcowBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowBetResp. */
    interface ITbcowcowBetResp {

        /** TbcowcowBetResp UserId */
        UserId?: (number|Long|null);

        /** TbcowcowBetResp BetArea */
        BetArea?: (number|null);

        /** TbcowcowBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a TbcowcowBetResp. */
    class TbcowcowBetResp implements ITbcowcowBetResp {

        /**
         * Constructs a new TbcowcowBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowBetResp);

        /** TbcowcowBetResp UserId. */
        public UserId: (number|Long);

        /** TbcowcowBetResp BetArea. */
        public BetArea: number;

        /** TbcowcowBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new TbcowcowBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowBetResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowBetResp): tbcowcow.TbcowcowBetResp;

        /**
         * Encodes the specified TbcowcowBetResp message. Does not implicitly {@link tbcowcow.TbcowcowBetResp.verify|verify} messages.
         * @param message TbcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowBetResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowBetResp.verify|verify} messages.
         * @param message TbcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowBetResp;

        /**
         * Decodes a TbcowcowBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowBetResp;

        /**
         * Verifies a TbcowcowBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowBetResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowBetResp;

        /**
         * Creates a plain object from a TbcowcowBetResp message. Also converts values to other types if specified.
         * @param message TbcowcowBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowOpenResp. */
    interface ITbcowcowOpenResp {

        /** TbcowcowOpenResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** TbcowcowOpenResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp TianCard */
        TianCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp XuanCard */
        XuanCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp DiCard */
        DiCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp HuangCard */
        HuangCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a TbcowcowOpenResp. */
    class TbcowcowOpenResp implements ITbcowcowOpenResp {

        /**
         * Constructs a new TbcowcowOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowOpenResp);

        /** TbcowcowOpenResp AwardArea. */
        public AwardArea: Uint8Array;

        /** TbcowcowOpenResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp TianCard. */
        public TianCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp XuanCard. */
        public XuanCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp DiCard. */
        public DiCard?: (gamecomm.ICardInfo|null);

        /** TbcowcowOpenResp HuangCard. */
        public HuangCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new TbcowcowOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowOpenResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowOpenResp): tbcowcow.TbcowcowOpenResp;

        /**
         * Encodes the specified TbcowcowOpenResp message. Does not implicitly {@link tbcowcow.TbcowcowOpenResp.verify|verify} messages.
         * @param message TbcowcowOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowOpenResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowOpenResp.verify|verify} messages.
         * @param message TbcowcowOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowOpenResp;

        /**
         * Decodes a TbcowcowOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowOpenResp;

        /**
         * Verifies a TbcowcowOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowOpenResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowOpenResp;

        /**
         * Creates a plain object from a TbcowcowOpenResp message. Also converts values to other types if specified.
         * @param message TbcowcowOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowOverResp. */
    interface ITbcowcowOverResp {

        /** TbcowcowOverResp MySettlement */
        MySettlement?: (number|Long|null);

        /** TbcowcowOverResp TotalSettlement */
        TotalSettlement?: ((number|Long)[]|null);
    }

    /** Represents a TbcowcowOverResp. */
    class TbcowcowOverResp implements ITbcowcowOverResp {

        /**
         * Constructs a new TbcowcowOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowOverResp);

        /** TbcowcowOverResp MySettlement. */
        public MySettlement: (number|Long);

        /** TbcowcowOverResp TotalSettlement. */
        public TotalSettlement: (number|Long)[];

        /**
         * Creates a new TbcowcowOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowOverResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowOverResp): tbcowcow.TbcowcowOverResp;

        /**
         * Encodes the specified TbcowcowOverResp message. Does not implicitly {@link tbcowcow.TbcowcowOverResp.verify|verify} messages.
         * @param message TbcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowOverResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowOverResp.verify|verify} messages.
         * @param message TbcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowOverResp;

        /**
         * Decodes a TbcowcowOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowOverResp;

        /**
         * Verifies a TbcowcowOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowOverResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowOverResp;

        /**
         * Creates a plain object from a TbcowcowOverResp message. Also converts values to other types if specified.
         * @param message TbcowcowOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowHostReq. */
    interface ITbcowcowHostReq {

        /** TbcowcowHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TbcowcowHostReq. */
    class TbcowcowHostReq implements ITbcowcowHostReq {

        /**
         * Constructs a new TbcowcowHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowHostReq);

        /** TbcowcowHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TbcowcowHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowHostReq instance
         */
        public static create(properties?: tbcowcow.ITbcowcowHostReq): tbcowcow.TbcowcowHostReq;

        /**
         * Encodes the specified TbcowcowHostReq message. Does not implicitly {@link tbcowcow.TbcowcowHostReq.verify|verify} messages.
         * @param message TbcowcowHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowHostReq message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowHostReq.verify|verify} messages.
         * @param message TbcowcowHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowHostReq;

        /**
         * Decodes a TbcowcowHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowHostReq;

        /**
         * Verifies a TbcowcowHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowHostReq
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowHostReq;

        /**
         * Creates a plain object from a TbcowcowHostReq message. Also converts values to other types if specified.
         * @param message TbcowcowHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowHostResp. */
    interface ITbcowcowHostResp {

        /** TbcowcowHostResp UserID */
        UserID?: (number|Long|null);

        /** TbcowcowHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TbcowcowHostResp. */
    class TbcowcowHostResp implements ITbcowcowHostResp {

        /**
         * Constructs a new TbcowcowHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowHostResp);

        /** TbcowcowHostResp UserID. */
        public UserID: (number|Long);

        /** TbcowcowHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TbcowcowHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowHostResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowHostResp): tbcowcow.TbcowcowHostResp;

        /**
         * Encodes the specified TbcowcowHostResp message. Does not implicitly {@link tbcowcow.TbcowcowHostResp.verify|verify} messages.
         * @param message TbcowcowHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowHostResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowHostResp.verify|verify} messages.
         * @param message TbcowcowHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowHostResp;

        /**
         * Decodes a TbcowcowHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowHostResp;

        /**
         * Verifies a TbcowcowHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowHostResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowHostResp;

        /**
         * Creates a plain object from a TbcowcowHostResp message. Also converts values to other types if specified.
         * @param message TbcowcowHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowHostListReq. */
    interface ITbcowcowHostListReq {
    }

    /** Represents a TbcowcowHostListReq. */
    class TbcowcowHostListReq implements ITbcowcowHostListReq {

        /**
         * Constructs a new TbcowcowHostListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowHostListReq);

        /**
         * Creates a new TbcowcowHostListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowHostListReq instance
         */
        public static create(properties?: tbcowcow.ITbcowcowHostListReq): tbcowcow.TbcowcowHostListReq;

        /**
         * Encodes the specified TbcowcowHostListReq message. Does not implicitly {@link tbcowcow.TbcowcowHostListReq.verify|verify} messages.
         * @param message TbcowcowHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowHostListReq message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowHostListReq.verify|verify} messages.
         * @param message TbcowcowHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowHostListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowHostListReq;

        /**
         * Decodes a TbcowcowHostListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowHostListReq;

        /**
         * Verifies a TbcowcowHostListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowHostListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowHostListReq
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowHostListReq;

        /**
         * Creates a plain object from a TbcowcowHostListReq message. Also converts values to other types if specified.
         * @param message TbcowcowHostListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowHostListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowHostListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowHostListResp. */
    interface ITbcowcowHostListResp {

        /** TbcowcowHostListResp CurHost */
        CurHost?: (gamecomm.IPlayerInfo|null);

        /** TbcowcowHostListResp Waitlist */
        Waitlist?: ((number|Long)[]|null);
    }

    /** Represents a TbcowcowHostListResp. */
    class TbcowcowHostListResp implements ITbcowcowHostListResp {

        /**
         * Constructs a new TbcowcowHostListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowHostListResp);

        /** TbcowcowHostListResp CurHost. */
        public CurHost?: (gamecomm.IPlayerInfo|null);

        /** TbcowcowHostListResp Waitlist. */
        public Waitlist: (number|Long)[];

        /**
         * Creates a new TbcowcowHostListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowHostListResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowHostListResp): tbcowcow.TbcowcowHostListResp;

        /**
         * Encodes the specified TbcowcowHostListResp message. Does not implicitly {@link tbcowcow.TbcowcowHostListResp.verify|verify} messages.
         * @param message TbcowcowHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowHostListResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowHostListResp.verify|verify} messages.
         * @param message TbcowcowHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowHostListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowHostListResp;

        /**
         * Decodes a TbcowcowHostListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowHostListResp;

        /**
         * Verifies a TbcowcowHostListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowHostListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowHostListResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowHostListResp;

        /**
         * Creates a plain object from a TbcowcowHostListResp message. Also converts values to other types if specified.
         * @param message TbcowcowHostListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowHostListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowHostListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
