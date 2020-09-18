import * as $protobuf from "protobufjs";
/** Namespace brtoubao. */
export namespace brtoubao {

    /** Properties of a BrtoubaoSceneResp. */
    interface IBrtoubaoSceneResp {

        /** BrtoubaoSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** BrtoubaoSceneResp Inning */
        Inning?: (string|null);

        /** BrtoubaoSceneResp Chips */
        Chips?: (number[]|null);

        /** BrtoubaoSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** BrtoubaoSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** BrtoubaoSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** BrtoubaoSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);
    }

    /** Represents a BrtoubaoSceneResp. */
    class BrtoubaoSceneResp implements IBrtoubaoSceneResp {

        /**
         * Constructs a new BrtoubaoSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoSceneResp);

        /** BrtoubaoSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** BrtoubaoSceneResp Inning. */
        public Inning: string;

        /** BrtoubaoSceneResp Chips. */
        public Chips: number[];

        /** BrtoubaoSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** BrtoubaoSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** BrtoubaoSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** BrtoubaoSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /**
         * Creates a new BrtoubaoSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoSceneResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoSceneResp): brtoubao.BrtoubaoSceneResp;

        /**
         * Encodes the specified BrtoubaoSceneResp message. Does not implicitly {@link brtoubao.BrtoubaoSceneResp.verify|verify} messages.
         * @param message BrtoubaoSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoSceneResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoSceneResp.verify|verify} messages.
         * @param message BrtoubaoSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoSceneResp;

        /**
         * Decodes a BrtoubaoSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoSceneResp;

        /**
         * Verifies a BrtoubaoSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoSceneResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoSceneResp;

        /**
         * Creates a plain object from a BrtoubaoSceneResp message. Also converts values to other types if specified.
         * @param message BrtoubaoSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoStateStartResp. */
    interface IBrtoubaoStateStartResp {

        /** BrtoubaoStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** BrtoubaoStateStartResp Inning */
        Inning?: (string|null);
    }

    /** Represents a BrtoubaoStateStartResp. */
    class BrtoubaoStateStartResp implements IBrtoubaoStateStartResp {

        /**
         * Constructs a new BrtoubaoStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoStateStartResp);

        /** BrtoubaoStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** BrtoubaoStateStartResp Inning. */
        public Inning: string;

        /**
         * Creates a new BrtoubaoStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoStateStartResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoStateStartResp): brtoubao.BrtoubaoStateStartResp;

        /**
         * Encodes the specified BrtoubaoStateStartResp message. Does not implicitly {@link brtoubao.BrtoubaoStateStartResp.verify|verify} messages.
         * @param message BrtoubaoStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoStateStartResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoStateStartResp.verify|verify} messages.
         * @param message BrtoubaoStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoStateStartResp;

        /**
         * Decodes a BrtoubaoStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoStateStartResp;

        /**
         * Verifies a BrtoubaoStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoStateStartResp;

        /**
         * Creates a plain object from a BrtoubaoStateStartResp message. Also converts values to other types if specified.
         * @param message BrtoubaoStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoStatePlayingResp. */
    interface IBrtoubaoStatePlayingResp {

        /** BrtoubaoStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrtoubaoStatePlayingResp. */
    class BrtoubaoStatePlayingResp implements IBrtoubaoStatePlayingResp {

        /**
         * Constructs a new BrtoubaoStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoStatePlayingResp);

        /** BrtoubaoStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrtoubaoStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoStatePlayingResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoStatePlayingResp): brtoubao.BrtoubaoStatePlayingResp;

        /**
         * Encodes the specified BrtoubaoStatePlayingResp message. Does not implicitly {@link brtoubao.BrtoubaoStatePlayingResp.verify|verify} messages.
         * @param message BrtoubaoStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoStatePlayingResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoStatePlayingResp.verify|verify} messages.
         * @param message BrtoubaoStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoStatePlayingResp;

        /**
         * Decodes a BrtoubaoStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoStatePlayingResp;

        /**
         * Verifies a BrtoubaoStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoStatePlayingResp;

        /**
         * Creates a plain object from a BrtoubaoStatePlayingResp message. Also converts values to other types if specified.
         * @param message BrtoubaoStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoStateOpenResp. */
    interface IBrtoubaoStateOpenResp {

        /** BrtoubaoStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** BrtoubaoStateOpenResp OpenInfo */
        OpenInfo?: (brtoubao.IBrtoubaoOpenResp|null);
    }

    /** Represents a BrtoubaoStateOpenResp. */
    class BrtoubaoStateOpenResp implements IBrtoubaoStateOpenResp {

        /**
         * Constructs a new BrtoubaoStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoStateOpenResp);

        /** BrtoubaoStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** BrtoubaoStateOpenResp OpenInfo. */
        public OpenInfo?: (brtoubao.IBrtoubaoOpenResp|null);

        /**
         * Creates a new BrtoubaoStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoStateOpenResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoStateOpenResp): brtoubao.BrtoubaoStateOpenResp;

        /**
         * Encodes the specified BrtoubaoStateOpenResp message. Does not implicitly {@link brtoubao.BrtoubaoStateOpenResp.verify|verify} messages.
         * @param message BrtoubaoStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoStateOpenResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoStateOpenResp.verify|verify} messages.
         * @param message BrtoubaoStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoStateOpenResp;

        /**
         * Decodes a BrtoubaoStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoStateOpenResp;

        /**
         * Verifies a BrtoubaoStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoStateOpenResp;

        /**
         * Creates a plain object from a BrtoubaoStateOpenResp message. Also converts values to other types if specified.
         * @param message BrtoubaoStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoStateOverResp. */
    interface IBrtoubaoStateOverResp {

        /** BrtoubaoStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrtoubaoStateOverResp. */
    class BrtoubaoStateOverResp implements IBrtoubaoStateOverResp {

        /**
         * Constructs a new BrtoubaoStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoStateOverResp);

        /** BrtoubaoStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrtoubaoStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoStateOverResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoStateOverResp): brtoubao.BrtoubaoStateOverResp;

        /**
         * Encodes the specified BrtoubaoStateOverResp message. Does not implicitly {@link brtoubao.BrtoubaoStateOverResp.verify|verify} messages.
         * @param message BrtoubaoStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoStateOverResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoStateOverResp.verify|verify} messages.
         * @param message BrtoubaoStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoStateOverResp;

        /**
         * Decodes a BrtoubaoStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoStateOverResp;

        /**
         * Verifies a BrtoubaoStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoStateOverResp;

        /**
         * Creates a plain object from a BrtoubaoStateOverResp message. Also converts values to other types if specified.
         * @param message BrtoubaoStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoBetReq. */
    interface IBrtoubaoBetReq {

        /** BrtoubaoBetReq BetArea */
        BetArea?: (number|null);

        /** BrtoubaoBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a BrtoubaoBetReq. */
    class BrtoubaoBetReq implements IBrtoubaoBetReq {

        /**
         * Constructs a new BrtoubaoBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoBetReq);

        /** BrtoubaoBetReq BetArea. */
        public BetArea: number;

        /** BrtoubaoBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new BrtoubaoBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoBetReq instance
         */
        public static create(properties?: brtoubao.IBrtoubaoBetReq): brtoubao.BrtoubaoBetReq;

        /**
         * Encodes the specified BrtoubaoBetReq message. Does not implicitly {@link brtoubao.BrtoubaoBetReq.verify|verify} messages.
         * @param message BrtoubaoBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoBetReq message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoBetReq.verify|verify} messages.
         * @param message BrtoubaoBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoBetReq;

        /**
         * Decodes a BrtoubaoBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoBetReq;

        /**
         * Verifies a BrtoubaoBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoBetReq
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoBetReq;

        /**
         * Creates a plain object from a BrtoubaoBetReq message. Also converts values to other types if specified.
         * @param message BrtoubaoBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoBetResp. */
    interface IBrtoubaoBetResp {

        /** BrtoubaoBetResp UserID */
        UserID?: (number|Long|null);

        /** BrtoubaoBetResp BetArea */
        BetArea?: (number|null);

        /** BrtoubaoBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a BrtoubaoBetResp. */
    class BrtoubaoBetResp implements IBrtoubaoBetResp {

        /**
         * Constructs a new BrtoubaoBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoBetResp);

        /** BrtoubaoBetResp UserID. */
        public UserID: (number|Long);

        /** BrtoubaoBetResp BetArea. */
        public BetArea: number;

        /** BrtoubaoBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new BrtoubaoBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoBetResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoBetResp): brtoubao.BrtoubaoBetResp;

        /**
         * Encodes the specified BrtoubaoBetResp message. Does not implicitly {@link brtoubao.BrtoubaoBetResp.verify|verify} messages.
         * @param message BrtoubaoBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoBetResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoBetResp.verify|verify} messages.
         * @param message BrtoubaoBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoBetResp;

        /**
         * Decodes a BrtoubaoBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoBetResp;

        /**
         * Verifies a BrtoubaoBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoBetResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoBetResp;

        /**
         * Creates a plain object from a BrtoubaoBetResp message. Also converts values to other types if specified.
         * @param message BrtoubaoBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoOpenResp. */
    interface IBrtoubaoOpenResp {

        /** BrtoubaoOpenResp Dice */
        Dice?: (Uint8Array|null);

        /** BrtoubaoOpenResp AwardArea */
        AwardArea?: (Uint8Array|null);
    }

    /** Represents a BrtoubaoOpenResp. */
    class BrtoubaoOpenResp implements IBrtoubaoOpenResp {

        /**
         * Constructs a new BrtoubaoOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoOpenResp);

        /** BrtoubaoOpenResp Dice. */
        public Dice: Uint8Array;

        /** BrtoubaoOpenResp AwardArea. */
        public AwardArea: Uint8Array;

        /**
         * Creates a new BrtoubaoOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoOpenResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoOpenResp): brtoubao.BrtoubaoOpenResp;

        /**
         * Encodes the specified BrtoubaoOpenResp message. Does not implicitly {@link brtoubao.BrtoubaoOpenResp.verify|verify} messages.
         * @param message BrtoubaoOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoOpenResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoOpenResp.verify|verify} messages.
         * @param message BrtoubaoOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoOpenResp;

        /**
         * Decodes a BrtoubaoOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoOpenResp;

        /**
         * Verifies a BrtoubaoOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoOpenResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoOpenResp;

        /**
         * Creates a plain object from a BrtoubaoOpenResp message. Also converts values to other types if specified.
         * @param message BrtoubaoOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoCheckoutResp. */
    interface IBrtoubaoCheckoutResp {

        /** BrtoubaoCheckoutResp MyAcquire */
        MyAcquire?: (number|Long|null);

        /** BrtoubaoCheckoutResp Acquires */
        Acquires?: ((number|Long)[]|null);
    }

    /** Represents a BrtoubaoCheckoutResp. */
    class BrtoubaoCheckoutResp implements IBrtoubaoCheckoutResp {

        /**
         * Constructs a new BrtoubaoCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoCheckoutResp);

        /** BrtoubaoCheckoutResp MyAcquire. */
        public MyAcquire: (number|Long);

        /** BrtoubaoCheckoutResp Acquires. */
        public Acquires: (number|Long)[];

        /**
         * Creates a new BrtoubaoCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoCheckoutResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoCheckoutResp): brtoubao.BrtoubaoCheckoutResp;

        /**
         * Encodes the specified BrtoubaoCheckoutResp message. Does not implicitly {@link brtoubao.BrtoubaoCheckoutResp.verify|verify} messages.
         * @param message BrtoubaoCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoCheckoutResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoCheckoutResp.verify|verify} messages.
         * @param message BrtoubaoCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoCheckoutResp;

        /**
         * Decodes a BrtoubaoCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoCheckoutResp;

        /**
         * Verifies a BrtoubaoCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoCheckoutResp;

        /**
         * Creates a plain object from a BrtoubaoCheckoutResp message. Also converts values to other types if specified.
         * @param message BrtoubaoCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoHostReq. */
    interface IBrtoubaoHostReq {

        /** BrtoubaoHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrtoubaoHostReq. */
    class BrtoubaoHostReq implements IBrtoubaoHostReq {

        /**
         * Constructs a new BrtoubaoHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoHostReq);

        /** BrtoubaoHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrtoubaoHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoHostReq instance
         */
        public static create(properties?: brtoubao.IBrtoubaoHostReq): brtoubao.BrtoubaoHostReq;

        /**
         * Encodes the specified BrtoubaoHostReq message. Does not implicitly {@link brtoubao.BrtoubaoHostReq.verify|verify} messages.
         * @param message BrtoubaoHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoHostReq message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoHostReq.verify|verify} messages.
         * @param message BrtoubaoHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoHostReq;

        /**
         * Decodes a BrtoubaoHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoHostReq;

        /**
         * Verifies a BrtoubaoHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoHostReq
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoHostReq;

        /**
         * Creates a plain object from a BrtoubaoHostReq message. Also converts values to other types if specified.
         * @param message BrtoubaoHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoHostResp. */
    interface IBrtoubaoHostResp {

        /** BrtoubaoHostResp UserID */
        UserID?: (number|Long|null);

        /** BrtoubaoHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrtoubaoHostResp. */
    class BrtoubaoHostResp implements IBrtoubaoHostResp {

        /**
         * Constructs a new BrtoubaoHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoHostResp);

        /** BrtoubaoHostResp UserID. */
        public UserID: (number|Long);

        /** BrtoubaoHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrtoubaoHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoHostResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoHostResp): brtoubao.BrtoubaoHostResp;

        /**
         * Encodes the specified BrtoubaoHostResp message. Does not implicitly {@link brtoubao.BrtoubaoHostResp.verify|verify} messages.
         * @param message BrtoubaoHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoHostResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoHostResp.verify|verify} messages.
         * @param message BrtoubaoHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoHostResp;

        /**
         * Decodes a BrtoubaoHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoHostResp;

        /**
         * Verifies a BrtoubaoHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoHostResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoHostResp;

        /**
         * Creates a plain object from a BrtoubaoHostResp message. Also converts values to other types if specified.
         * @param message BrtoubaoHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoSuperHostReq. */
    interface IBrtoubaoSuperHostReq {

        /** BrtoubaoSuperHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrtoubaoSuperHostReq. */
    class BrtoubaoSuperHostReq implements IBrtoubaoSuperHostReq {

        /**
         * Constructs a new BrtoubaoSuperHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoSuperHostReq);

        /** BrtoubaoSuperHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrtoubaoSuperHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoSuperHostReq instance
         */
        public static create(properties?: brtoubao.IBrtoubaoSuperHostReq): brtoubao.BrtoubaoSuperHostReq;

        /**
         * Encodes the specified BrtoubaoSuperHostReq message. Does not implicitly {@link brtoubao.BrtoubaoSuperHostReq.verify|verify} messages.
         * @param message BrtoubaoSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoSuperHostReq message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoSuperHostReq.verify|verify} messages.
         * @param message BrtoubaoSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoSuperHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoSuperHostReq;

        /**
         * Decodes a BrtoubaoSuperHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoSuperHostReq;

        /**
         * Verifies a BrtoubaoSuperHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoSuperHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoSuperHostReq
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoSuperHostReq;

        /**
         * Creates a plain object from a BrtoubaoSuperHostReq message. Also converts values to other types if specified.
         * @param message BrtoubaoSuperHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoSuperHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoSuperHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrtoubaoSuperHostResp. */
    interface IBrtoubaoSuperHostResp {

        /** BrtoubaoSuperHostResp UserID */
        UserID?: (number|Long|null);

        /** BrtoubaoSuperHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrtoubaoSuperHostResp. */
    class BrtoubaoSuperHostResp implements IBrtoubaoSuperHostResp {

        /**
         * Constructs a new BrtoubaoSuperHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brtoubao.IBrtoubaoSuperHostResp);

        /** BrtoubaoSuperHostResp UserID. */
        public UserID: (number|Long);

        /** BrtoubaoSuperHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrtoubaoSuperHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrtoubaoSuperHostResp instance
         */
        public static create(properties?: brtoubao.IBrtoubaoSuperHostResp): brtoubao.BrtoubaoSuperHostResp;

        /**
         * Encodes the specified BrtoubaoSuperHostResp message. Does not implicitly {@link brtoubao.BrtoubaoSuperHostResp.verify|verify} messages.
         * @param message BrtoubaoSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brtoubao.IBrtoubaoSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrtoubaoSuperHostResp message, length delimited. Does not implicitly {@link brtoubao.BrtoubaoSuperHostResp.verify|verify} messages.
         * @param message BrtoubaoSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brtoubao.IBrtoubaoSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrtoubaoSuperHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrtoubaoSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brtoubao.BrtoubaoSuperHostResp;

        /**
         * Decodes a BrtoubaoSuperHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrtoubaoSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brtoubao.BrtoubaoSuperHostResp;

        /**
         * Verifies a BrtoubaoSuperHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrtoubaoSuperHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrtoubaoSuperHostResp
         */
        public static fromObject(object: { [k: string]: any }): brtoubao.BrtoubaoSuperHostResp;

        /**
         * Creates a plain object from a BrtoubaoSuperHostResp message. Also converts values to other types if specified.
         * @param message BrtoubaoSuperHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brtoubao.BrtoubaoSuperHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrtoubaoSuperHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
