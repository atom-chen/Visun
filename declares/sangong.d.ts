import * as $protobuf from "protobufjs";
/** Namespace sangong. */
export namespace sangong {

    /** Properties of a SangongSceneResp. */
    interface ISangongSceneResp {

        /** SangongSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** SangongSceneResp Chips */
        Chips?: (number[]|null);

        /** SangongSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** SangongSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** SangongSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** SangongSceneResp Inning */
        Inning?: (string|null);

        /** SangongSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** SangongSceneResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a SangongSceneResp. */
    class SangongSceneResp implements ISangongSceneResp {

        /**
         * Constructs a new SangongSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongSceneResp);

        /** SangongSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** SangongSceneResp Chips. */
        public Chips: number[];

        /** SangongSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** SangongSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** SangongSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** SangongSceneResp Inning. */
        public Inning: string;

        /** SangongSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** SangongSceneResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new SangongSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongSceneResp instance
         */
        public static create(properties?: sangong.ISangongSceneResp): sangong.SangongSceneResp;

        /**
         * Encodes the specified SangongSceneResp message. Does not implicitly {@link sangong.SangongSceneResp.verify|verify} messages.
         * @param message SangongSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongSceneResp message, length delimited. Does not implicitly {@link sangong.SangongSceneResp.verify|verify} messages.
         * @param message SangongSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongSceneResp;

        /**
         * Decodes a SangongSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongSceneResp;

        /**
         * Verifies a SangongSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongSceneResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongSceneResp;

        /**
         * Creates a plain object from a SangongSceneResp message. Also converts values to other types if specified.
         * @param message SangongSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongStateFreeResp. */
    interface ISangongStateFreeResp {

        /** SangongStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a SangongStateFreeResp. */
    class SangongStateFreeResp implements ISangongStateFreeResp {

        /**
         * Constructs a new SangongStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongStateFreeResp);

        /** SangongStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new SangongStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongStateFreeResp instance
         */
        public static create(properties?: sangong.ISangongStateFreeResp): sangong.SangongStateFreeResp;

        /**
         * Encodes the specified SangongStateFreeResp message. Does not implicitly {@link sangong.SangongStateFreeResp.verify|verify} messages.
         * @param message SangongStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongStateFreeResp message, length delimited. Does not implicitly {@link sangong.SangongStateFreeResp.verify|verify} messages.
         * @param message SangongStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongStateFreeResp;

        /**
         * Decodes a SangongStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongStateFreeResp;

        /**
         * Verifies a SangongStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongStateFreeResp;

        /**
         * Creates a plain object from a SangongStateFreeResp message. Also converts values to other types if specified.
         * @param message SangongStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongStateStartResp. */
    interface ISangongStateStartResp {

        /** SangongStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** SangongStateStartResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a SangongStateStartResp. */
    class SangongStateStartResp implements ISangongStateStartResp {

        /**
         * Constructs a new SangongStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongStateStartResp);

        /** SangongStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** SangongStateStartResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new SangongStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongStateStartResp instance
         */
        public static create(properties?: sangong.ISangongStateStartResp): sangong.SangongStateStartResp;

        /**
         * Encodes the specified SangongStateStartResp message. Does not implicitly {@link sangong.SangongStateStartResp.verify|verify} messages.
         * @param message SangongStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongStateStartResp message, length delimited. Does not implicitly {@link sangong.SangongStateStartResp.verify|verify} messages.
         * @param message SangongStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongStateStartResp;

        /**
         * Decodes a SangongStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongStateStartResp;

        /**
         * Verifies a SangongStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongStateStartResp;

        /**
         * Creates a plain object from a SangongStateStartResp message. Also converts values to other types if specified.
         * @param message SangongStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongStatePlayingResp. */
    interface ISangongStatePlayingResp {

        /** SangongStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a SangongStatePlayingResp. */
    class SangongStatePlayingResp implements ISangongStatePlayingResp {

        /**
         * Constructs a new SangongStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongStatePlayingResp);

        /** SangongStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new SangongStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongStatePlayingResp instance
         */
        public static create(properties?: sangong.ISangongStatePlayingResp): sangong.SangongStatePlayingResp;

        /**
         * Encodes the specified SangongStatePlayingResp message. Does not implicitly {@link sangong.SangongStatePlayingResp.verify|verify} messages.
         * @param message SangongStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongStatePlayingResp message, length delimited. Does not implicitly {@link sangong.SangongStatePlayingResp.verify|verify} messages.
         * @param message SangongStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongStatePlayingResp;

        /**
         * Decodes a SangongStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongStatePlayingResp;

        /**
         * Verifies a SangongStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongStatePlayingResp;

        /**
         * Creates a plain object from a SangongStatePlayingResp message. Also converts values to other types if specified.
         * @param message SangongStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongStateOpenResp. */
    interface ISangongStateOpenResp {

        /** SangongStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** SangongStateOpenResp OpenInfo */
        OpenInfo?: (sangong.ISangongOpenResp|null);
    }

    /** Represents a SangongStateOpenResp. */
    class SangongStateOpenResp implements ISangongStateOpenResp {

        /**
         * Constructs a new SangongStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongStateOpenResp);

        /** SangongStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** SangongStateOpenResp OpenInfo. */
        public OpenInfo?: (sangong.ISangongOpenResp|null);

        /**
         * Creates a new SangongStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongStateOpenResp instance
         */
        public static create(properties?: sangong.ISangongStateOpenResp): sangong.SangongStateOpenResp;

        /**
         * Encodes the specified SangongStateOpenResp message. Does not implicitly {@link sangong.SangongStateOpenResp.verify|verify} messages.
         * @param message SangongStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongStateOpenResp message, length delimited. Does not implicitly {@link sangong.SangongStateOpenResp.verify|verify} messages.
         * @param message SangongStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongStateOpenResp;

        /**
         * Decodes a SangongStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongStateOpenResp;

        /**
         * Verifies a SangongStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongStateOpenResp;

        /**
         * Creates a plain object from a SangongStateOpenResp message. Also converts values to other types if specified.
         * @param message SangongStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongStateOverResp. */
    interface ISangongStateOverResp {

        /** SangongStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a SangongStateOverResp. */
    class SangongStateOverResp implements ISangongStateOverResp {

        /**
         * Constructs a new SangongStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongStateOverResp);

        /** SangongStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new SangongStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongStateOverResp instance
         */
        public static create(properties?: sangong.ISangongStateOverResp): sangong.SangongStateOverResp;

        /**
         * Encodes the specified SangongStateOverResp message. Does not implicitly {@link sangong.SangongStateOverResp.verify|verify} messages.
         * @param message SangongStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongStateOverResp message, length delimited. Does not implicitly {@link sangong.SangongStateOverResp.verify|verify} messages.
         * @param message SangongStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongStateOverResp;

        /**
         * Decodes a SangongStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongStateOverResp;

        /**
         * Verifies a SangongStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongStateOverResp;

        /**
         * Creates a plain object from a SangongStateOverResp message. Also converts values to other types if specified.
         * @param message SangongStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongBetReq. */
    interface ISangongBetReq {

        /** SangongBetReq BetArea */
        BetArea?: (number|null);

        /** SangongBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a SangongBetReq. */
    class SangongBetReq implements ISangongBetReq {

        /**
         * Constructs a new SangongBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongBetReq);

        /** SangongBetReq BetArea. */
        public BetArea: number;

        /** SangongBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new SangongBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongBetReq instance
         */
        public static create(properties?: sangong.ISangongBetReq): sangong.SangongBetReq;

        /**
         * Encodes the specified SangongBetReq message. Does not implicitly {@link sangong.SangongBetReq.verify|verify} messages.
         * @param message SangongBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongBetReq message, length delimited. Does not implicitly {@link sangong.SangongBetReq.verify|verify} messages.
         * @param message SangongBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongBetReq;

        /**
         * Decodes a SangongBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongBetReq;

        /**
         * Verifies a SangongBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongBetReq
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongBetReq;

        /**
         * Creates a plain object from a SangongBetReq message. Also converts values to other types if specified.
         * @param message SangongBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongBetResp. */
    interface ISangongBetResp {

        /** SangongBetResp UserId */
        UserId?: (number|Long|null);

        /** SangongBetResp BetArea */
        BetArea?: (number|null);

        /** SangongBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a SangongBetResp. */
    class SangongBetResp implements ISangongBetResp {

        /**
         * Constructs a new SangongBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongBetResp);

        /** SangongBetResp UserId. */
        public UserId: (number|Long);

        /** SangongBetResp BetArea. */
        public BetArea: number;

        /** SangongBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new SangongBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongBetResp instance
         */
        public static create(properties?: sangong.ISangongBetResp): sangong.SangongBetResp;

        /**
         * Encodes the specified SangongBetResp message. Does not implicitly {@link sangong.SangongBetResp.verify|verify} messages.
         * @param message SangongBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongBetResp message, length delimited. Does not implicitly {@link sangong.SangongBetResp.verify|verify} messages.
         * @param message SangongBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongBetResp;

        /**
         * Decodes a SangongBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongBetResp;

        /**
         * Verifies a SangongBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongBetResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongBetResp;

        /**
         * Creates a plain object from a SangongBetResp message. Also converts values to other types if specified.
         * @param message SangongBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongOpenResp. */
    interface ISangongOpenResp {

        /** SangongOpenResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** SangongOpenResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp TianCard */
        TianCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp XuanCard */
        XuanCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp DiCard */
        DiCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp HuangCard */
        HuangCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a SangongOpenResp. */
    class SangongOpenResp implements ISangongOpenResp {

        /**
         * Constructs a new SangongOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongOpenResp);

        /** SangongOpenResp AwardArea. */
        public AwardArea: Uint8Array;

        /** SangongOpenResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp TianCard. */
        public TianCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp XuanCard. */
        public XuanCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp DiCard. */
        public DiCard?: (gamecomm.ICardInfo|null);

        /** SangongOpenResp HuangCard. */
        public HuangCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new SangongOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongOpenResp instance
         */
        public static create(properties?: sangong.ISangongOpenResp): sangong.SangongOpenResp;

        /**
         * Encodes the specified SangongOpenResp message. Does not implicitly {@link sangong.SangongOpenResp.verify|verify} messages.
         * @param message SangongOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongOpenResp message, length delimited. Does not implicitly {@link sangong.SangongOpenResp.verify|verify} messages.
         * @param message SangongOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongOpenResp;

        /**
         * Decodes a SangongOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongOpenResp;

        /**
         * Verifies a SangongOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongOpenResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongOpenResp;

        /**
         * Creates a plain object from a SangongOpenResp message. Also converts values to other types if specified.
         * @param message SangongOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongOverResp. */
    interface ISangongOverResp {

        /** SangongOverResp MySettlement */
        MySettlement?: (number|Long|null);

        /** SangongOverResp TotalSettlement */
        TotalSettlement?: ((number|Long)[]|null);
    }

    /** Represents a SangongOverResp. */
    class SangongOverResp implements ISangongOverResp {

        /**
         * Constructs a new SangongOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongOverResp);

        /** SangongOverResp MySettlement. */
        public MySettlement: (number|Long);

        /** SangongOverResp TotalSettlement. */
        public TotalSettlement: (number|Long)[];

        /**
         * Creates a new SangongOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongOverResp instance
         */
        public static create(properties?: sangong.ISangongOverResp): sangong.SangongOverResp;

        /**
         * Encodes the specified SangongOverResp message. Does not implicitly {@link sangong.SangongOverResp.verify|verify} messages.
         * @param message SangongOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongOverResp message, length delimited. Does not implicitly {@link sangong.SangongOverResp.verify|verify} messages.
         * @param message SangongOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongOverResp;

        /**
         * Decodes a SangongOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongOverResp;

        /**
         * Verifies a SangongOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongOverResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongOverResp;

        /**
         * Creates a plain object from a SangongOverResp message. Also converts values to other types if specified.
         * @param message SangongOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongHostReq. */
    interface ISangongHostReq {

        /** SangongHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a SangongHostReq. */
    class SangongHostReq implements ISangongHostReq {

        /**
         * Constructs a new SangongHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongHostReq);

        /** SangongHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new SangongHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongHostReq instance
         */
        public static create(properties?: sangong.ISangongHostReq): sangong.SangongHostReq;

        /**
         * Encodes the specified SangongHostReq message. Does not implicitly {@link sangong.SangongHostReq.verify|verify} messages.
         * @param message SangongHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongHostReq message, length delimited. Does not implicitly {@link sangong.SangongHostReq.verify|verify} messages.
         * @param message SangongHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongHostReq;

        /**
         * Decodes a SangongHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongHostReq;

        /**
         * Verifies a SangongHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongHostReq
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongHostReq;

        /**
         * Creates a plain object from a SangongHostReq message. Also converts values to other types if specified.
         * @param message SangongHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongHostResp. */
    interface ISangongHostResp {

        /** SangongHostResp UserID */
        UserID?: (number|Long|null);

        /** SangongHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a SangongHostResp. */
    class SangongHostResp implements ISangongHostResp {

        /**
         * Constructs a new SangongHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongHostResp);

        /** SangongHostResp UserID. */
        public UserID: (number|Long);

        /** SangongHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new SangongHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongHostResp instance
         */
        public static create(properties?: sangong.ISangongHostResp): sangong.SangongHostResp;

        /**
         * Encodes the specified SangongHostResp message. Does not implicitly {@link sangong.SangongHostResp.verify|verify} messages.
         * @param message SangongHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongHostResp message, length delimited. Does not implicitly {@link sangong.SangongHostResp.verify|verify} messages.
         * @param message SangongHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongHostResp;

        /**
         * Decodes a SangongHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongHostResp;

        /**
         * Verifies a SangongHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongHostResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongHostResp;

        /**
         * Creates a plain object from a SangongHostResp message. Also converts values to other types if specified.
         * @param message SangongHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongHostListReq. */
    interface ISangongHostListReq {
    }

    /** Represents a SangongHostListReq. */
    class SangongHostListReq implements ISangongHostListReq {

        /**
         * Constructs a new SangongHostListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongHostListReq);

        /**
         * Creates a new SangongHostListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongHostListReq instance
         */
        public static create(properties?: sangong.ISangongHostListReq): sangong.SangongHostListReq;

        /**
         * Encodes the specified SangongHostListReq message. Does not implicitly {@link sangong.SangongHostListReq.verify|verify} messages.
         * @param message SangongHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongHostListReq message, length delimited. Does not implicitly {@link sangong.SangongHostListReq.verify|verify} messages.
         * @param message SangongHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongHostListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongHostListReq;

        /**
         * Decodes a SangongHostListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongHostListReq;

        /**
         * Verifies a SangongHostListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongHostListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongHostListReq
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongHostListReq;

        /**
         * Creates a plain object from a SangongHostListReq message. Also converts values to other types if specified.
         * @param message SangongHostListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongHostListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongHostListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SangongHostListResp. */
    interface ISangongHostListResp {

        /** SangongHostListResp CurHost */
        CurHost?: (gamecomm.IPlayerInfo|null);

        /** SangongHostListResp Waitlist */
        Waitlist?: ((number|Long)[]|null);
    }

    /** Represents a SangongHostListResp. */
    class SangongHostListResp implements ISangongHostListResp {

        /**
         * Constructs a new SangongHostListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: sangong.ISangongHostListResp);

        /** SangongHostListResp CurHost. */
        public CurHost?: (gamecomm.IPlayerInfo|null);

        /** SangongHostListResp Waitlist. */
        public Waitlist: (number|Long)[];

        /**
         * Creates a new SangongHostListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SangongHostListResp instance
         */
        public static create(properties?: sangong.ISangongHostListResp): sangong.SangongHostListResp;

        /**
         * Encodes the specified SangongHostListResp message. Does not implicitly {@link sangong.SangongHostListResp.verify|verify} messages.
         * @param message SangongHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: sangong.ISangongHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SangongHostListResp message, length delimited. Does not implicitly {@link sangong.SangongHostListResp.verify|verify} messages.
         * @param message SangongHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: sangong.ISangongHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SangongHostListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SangongHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): sangong.SangongHostListResp;

        /**
         * Decodes a SangongHostListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SangongHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): sangong.SangongHostListResp;

        /**
         * Verifies a SangongHostListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SangongHostListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SangongHostListResp
         */
        public static fromObject(object: { [k: string]: any }): sangong.SangongHostListResp;

        /**
         * Creates a plain object from a SangongHostListResp message. Also converts values to other types if specified.
         * @param message SangongHostListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: sangong.SangongHostListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SangongHostListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
