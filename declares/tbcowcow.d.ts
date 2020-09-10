import * as $protobuf from "protobufjs";
/** Namespace tbcowcow. */
export namespace tbcowcow {

    /** Properties of a TbcowcowPlayer. */
    interface ITbcowcowPlayer {

        /** TbcowcowPlayer MyInfo */
        MyInfo?: (gamecomm.IPlayerInfo|null);

        /** TbcowcowPlayer Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a TbcowcowPlayer. */
    class TbcowcowPlayer implements ITbcowcowPlayer {

        /**
         * Constructs a new TbcowcowPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowPlayer);

        /** TbcowcowPlayer MyInfo. */
        public MyInfo?: (gamecomm.IPlayerInfo|null);

        /** TbcowcowPlayer Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new TbcowcowPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowPlayer instance
         */
        public static create(properties?: tbcowcow.ITbcowcowPlayer): tbcowcow.TbcowcowPlayer;

        /**
         * Encodes the specified TbcowcowPlayer message. Does not implicitly {@link tbcowcow.TbcowcowPlayer.verify|verify} messages.
         * @param message TbcowcowPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowPlayer message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowPlayer.verify|verify} messages.
         * @param message TbcowcowPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowPlayer;

        /**
         * Decodes a TbcowcowPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowPlayer;

        /**
         * Verifies a TbcowcowPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowPlayer
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowPlayer;

        /**
         * Creates a plain object from a TbcowcowPlayer message. Also converts values to other types if specified.
         * @param message TbcowcowPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowSceneResp. */
    interface ITbcowcowSceneResp {

        /** TbcowcowSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TbcowcowSceneResp Chips */
        Chips?: (number[]|null);

        /** TbcowcowSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** TbcowcowSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** TbcowcowSceneResp Inning */
        Inning?: (string|null);

        /** TbcowcowSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);
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

        /** TbcowcowSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** TbcowcowSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** TbcowcowSceneResp Inning. */
        public Inning: string;

        /** TbcowcowSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

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
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowSceneResp;

        /**
         * Decodes a TbcowcowSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
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
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStateFreeResp;

        /**
         * Decodes a TbcowcowStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
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

    /** Properties of a TbcowcowStateDealResp. */
    interface ITbcowcowStateDealResp {

        /** TbcowcowStateDealResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** TbcowcowStateDealResp Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a TbcowcowStateDealResp. */
    class TbcowcowStateDealResp implements ITbcowcowStateDealResp {

        /**
         * Constructs a new TbcowcowStateDealResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowStateDealResp);

        /** TbcowcowStateDealResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** TbcowcowStateDealResp Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new TbcowcowStateDealResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowStateDealResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowStateDealResp): tbcowcow.TbcowcowStateDealResp;

        /**
         * Encodes the specified TbcowcowStateDealResp message. Does not implicitly {@link tbcowcow.TbcowcowStateDealResp.verify|verify} messages.
         * @param message TbcowcowStateDealResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowStateDealResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowStateDealResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowStateDealResp.verify|verify} messages.
         * @param message TbcowcowStateDealResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowStateDealResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowStateDealResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowStateDealResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowStateDealResp;

        /**
         * Decodes a TbcowcowStateDealResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowStateDealResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowStateDealResp;

        /**
         * Verifies a TbcowcowStateDealResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowStateDealResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowStateDealResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowStateDealResp;

        /**
         * Creates a plain object from a TbcowcowStateDealResp message. Also converts values to other types if specified.
         * @param message TbcowcowStateDealResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowStateDealResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowStateDealResp to JSON.
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

    /** Properties of a TbcowcowReadyReq. */
    interface ITbcowcowReadyReq {

        /** TbcowcowReadyReq IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a TbcowcowReadyReq. */
    class TbcowcowReadyReq implements ITbcowcowReadyReq {

        /**
         * Constructs a new TbcowcowReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowReadyReq);

        /** TbcowcowReadyReq IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new TbcowcowReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowReadyReq instance
         */
        public static create(properties?: tbcowcow.ITbcowcowReadyReq): tbcowcow.TbcowcowReadyReq;

        /**
         * Encodes the specified TbcowcowReadyReq message. Does not implicitly {@link tbcowcow.TbcowcowReadyReq.verify|verify} messages.
         * @param message TbcowcowReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowReadyReq message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowReadyReq.verify|verify} messages.
         * @param message TbcowcowReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowReadyReq;

        /**
         * Decodes a TbcowcowReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowReadyReq;

        /**
         * Verifies a TbcowcowReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowReadyReq
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowReadyReq;

        /**
         * Creates a plain object from a TbcowcowReadyReq message. Also converts values to other types if specified.
         * @param message TbcowcowReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TbcowcowReadyResp. */
    interface ITbcowcowReadyResp {

        /** TbcowcowReadyResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a TbcowcowReadyResp. */
    class TbcowcowReadyResp implements ITbcowcowReadyResp {

        /**
         * Constructs a new TbcowcowReadyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowReadyResp);

        /** TbcowcowReadyResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new TbcowcowReadyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TbcowcowReadyResp instance
         */
        public static create(properties?: tbcowcow.ITbcowcowReadyResp): tbcowcow.TbcowcowReadyResp;

        /**
         * Encodes the specified TbcowcowReadyResp message. Does not implicitly {@link tbcowcow.TbcowcowReadyResp.verify|verify} messages.
         * @param message TbcowcowReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tbcowcow.ITbcowcowReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TbcowcowReadyResp message, length delimited. Does not implicitly {@link tbcowcow.TbcowcowReadyResp.verify|verify} messages.
         * @param message TbcowcowReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tbcowcow.ITbcowcowReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TbcowcowReadyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TbcowcowReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tbcowcow.TbcowcowReadyResp;

        /**
         * Decodes a TbcowcowReadyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TbcowcowReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tbcowcow.TbcowcowReadyResp;

        /**
         * Verifies a TbcowcowReadyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TbcowcowReadyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TbcowcowReadyResp
         */
        public static fromObject(object: { [k: string]: any }): tbcowcow.TbcowcowReadyResp;

        /**
         * Creates a plain object from a TbcowcowReadyResp message. Also converts values to other types if specified.
         * @param message TbcowcowReadyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tbcowcow.TbcowcowReadyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TbcowcowReadyResp to JSON.
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

        /** TbcowcowOpenResp WinnerId */
        WinnerId?: (number|Long|null);

        /** TbcowcowOpenResp Infos */
        Infos?: (tbcowcow.ITbcowcowPlayer[]|null);
    }

    /** Represents a TbcowcowOpenResp. */
    class TbcowcowOpenResp implements ITbcowcowOpenResp {

        /**
         * Constructs a new TbcowcowOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tbcowcow.ITbcowcowOpenResp);

        /** TbcowcowOpenResp WinnerId. */
        public WinnerId: (number|Long);

        /** TbcowcowOpenResp Infos. */
        public Infos: tbcowcow.ITbcowcowPlayer[];

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
}
