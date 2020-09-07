import * as $protobuf from "protobufjs";
/** Namespace tigerXdragon. */
export namespace tigerXdragon {

    /** Properties of a TigerXdragonSceneResp. */
    interface ITigerXdragonSceneResp {

        /** TigerXdragonSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TigerXdragonSceneResp Inning */
        Inning?: (string|null);

        /** TigerXdragonSceneResp Chips */
        Chips?: (number[]|null);

        /** TigerXdragonSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** TigerXdragonSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** TigerXdragonSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** TigerXdragonSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);
    }

    /** Represents a TigerXdragonSceneResp. */
    class TigerXdragonSceneResp implements ITigerXdragonSceneResp {

        /**
         * Constructs a new TigerXdragonSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonSceneResp);

        /** TigerXdragonSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** TigerXdragonSceneResp Inning. */
        public Inning: string;

        /** TigerXdragonSceneResp Chips. */
        public Chips: number[];

        /** TigerXdragonSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** TigerXdragonSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** TigerXdragonSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** TigerXdragonSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /**
         * Creates a new TigerXdragonSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonSceneResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonSceneResp): tigerXdragon.TigerXdragonSceneResp;

        /**
         * Encodes the specified TigerXdragonSceneResp message. Does not implicitly {@link tigerXdragon.TigerXdragonSceneResp.verify|verify} messages.
         * @param message TigerXdragonSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonSceneResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonSceneResp.verify|verify} messages.
         * @param message TigerXdragonSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonSceneResp;

        /**
         * Decodes a TigerXdragonSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonSceneResp;

        /**
         * Verifies a TigerXdragonSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonSceneResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonSceneResp;

        /**
         * Creates a plain object from a TigerXdragonSceneResp message. Also converts values to other types if specified.
         * @param message TigerXdragonSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonStateStartResp. */
    interface ITigerXdragonStateStartResp {

        /** TigerXdragonStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TigerXdragonStateStartResp. */
    class TigerXdragonStateStartResp implements ITigerXdragonStateStartResp {

        /**
         * Constructs a new TigerXdragonStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonStateStartResp);

        /** TigerXdragonStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TigerXdragonStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonStateStartResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonStateStartResp): tigerXdragon.TigerXdragonStateStartResp;

        /**
         * Encodes the specified TigerXdragonStateStartResp message. Does not implicitly {@link tigerXdragon.TigerXdragonStateStartResp.verify|verify} messages.
         * @param message TigerXdragonStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonStateStartResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonStateStartResp.verify|verify} messages.
         * @param message TigerXdragonStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonStateStartResp;

        /**
         * Decodes a TigerXdragonStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonStateStartResp;

        /**
         * Verifies a TigerXdragonStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonStateStartResp;

        /**
         * Creates a plain object from a TigerXdragonStateStartResp message. Also converts values to other types if specified.
         * @param message TigerXdragonStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonStatePlayingResp. */
    interface ITigerXdragonStatePlayingResp {

        /** TigerXdragonStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TigerXdragonStatePlayingResp. */
    class TigerXdragonStatePlayingResp implements ITigerXdragonStatePlayingResp {

        /**
         * Constructs a new TigerXdragonStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonStatePlayingResp);

        /** TigerXdragonStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TigerXdragonStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonStatePlayingResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonStatePlayingResp): tigerXdragon.TigerXdragonStatePlayingResp;

        /**
         * Encodes the specified TigerXdragonStatePlayingResp message. Does not implicitly {@link tigerXdragon.TigerXdragonStatePlayingResp.verify|verify} messages.
         * @param message TigerXdragonStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonStatePlayingResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonStatePlayingResp.verify|verify} messages.
         * @param message TigerXdragonStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonStatePlayingResp;

        /**
         * Decodes a TigerXdragonStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonStatePlayingResp;

        /**
         * Verifies a TigerXdragonStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonStatePlayingResp;

        /**
         * Creates a plain object from a TigerXdragonStatePlayingResp message. Also converts values to other types if specified.
         * @param message TigerXdragonStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonStateOpenResp. */
    interface ITigerXdragonStateOpenResp {

        /** TigerXdragonStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** TigerXdragonStateOpenResp OpenInfo */
        OpenInfo?: (tigerXdragon.ITigerXdragonOpenResp|null);
    }

    /** Represents a TigerXdragonStateOpenResp. */
    class TigerXdragonStateOpenResp implements ITigerXdragonStateOpenResp {

        /**
         * Constructs a new TigerXdragonStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonStateOpenResp);

        /** TigerXdragonStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** TigerXdragonStateOpenResp OpenInfo. */
        public OpenInfo?: (tigerXdragon.ITigerXdragonOpenResp|null);

        /**
         * Creates a new TigerXdragonStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonStateOpenResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonStateOpenResp): tigerXdragon.TigerXdragonStateOpenResp;

        /**
         * Encodes the specified TigerXdragonStateOpenResp message. Does not implicitly {@link tigerXdragon.TigerXdragonStateOpenResp.verify|verify} messages.
         * @param message TigerXdragonStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonStateOpenResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonStateOpenResp.verify|verify} messages.
         * @param message TigerXdragonStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonStateOpenResp;

        /**
         * Decodes a TigerXdragonStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonStateOpenResp;

        /**
         * Verifies a TigerXdragonStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonStateOpenResp;

        /**
         * Creates a plain object from a TigerXdragonStateOpenResp message. Also converts values to other types if specified.
         * @param message TigerXdragonStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonStateOverResp. */
    interface ITigerXdragonStateOverResp {

        /** TigerXdragonStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a TigerXdragonStateOverResp. */
    class TigerXdragonStateOverResp implements ITigerXdragonStateOverResp {

        /**
         * Constructs a new TigerXdragonStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonStateOverResp);

        /** TigerXdragonStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new TigerXdragonStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonStateOverResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonStateOverResp): tigerXdragon.TigerXdragonStateOverResp;

        /**
         * Encodes the specified TigerXdragonStateOverResp message. Does not implicitly {@link tigerXdragon.TigerXdragonStateOverResp.verify|verify} messages.
         * @param message TigerXdragonStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonStateOverResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonStateOverResp.verify|verify} messages.
         * @param message TigerXdragonStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonStateOverResp;

        /**
         * Decodes a TigerXdragonStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonStateOverResp;

        /**
         * Verifies a TigerXdragonStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonStateOverResp;

        /**
         * Creates a plain object from a TigerXdragonStateOverResp message. Also converts values to other types if specified.
         * @param message TigerXdragonStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonBetReq. */
    interface ITigerXdragonBetReq {

        /** TigerXdragonBetReq BetArea */
        BetArea?: (number|null);

        /** TigerXdragonBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a TigerXdragonBetReq. */
    class TigerXdragonBetReq implements ITigerXdragonBetReq {

        /**
         * Constructs a new TigerXdragonBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonBetReq);

        /** TigerXdragonBetReq BetArea. */
        public BetArea: number;

        /** TigerXdragonBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new TigerXdragonBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonBetReq instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonBetReq): tigerXdragon.TigerXdragonBetReq;

        /**
         * Encodes the specified TigerXdragonBetReq message. Does not implicitly {@link tigerXdragon.TigerXdragonBetReq.verify|verify} messages.
         * @param message TigerXdragonBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonBetReq message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonBetReq.verify|verify} messages.
         * @param message TigerXdragonBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonBetReq;

        /**
         * Decodes a TigerXdragonBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonBetReq;

        /**
         * Verifies a TigerXdragonBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonBetReq
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonBetReq;

        /**
         * Creates a plain object from a TigerXdragonBetReq message. Also converts values to other types if specified.
         * @param message TigerXdragonBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonBetResp. */
    interface ITigerXdragonBetResp {

        /** TigerXdragonBetResp UserID */
        UserID?: (number|Long|null);

        /** TigerXdragonBetResp BetArea */
        BetArea?: (number|null);

        /** TigerXdragonBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a TigerXdragonBetResp. */
    class TigerXdragonBetResp implements ITigerXdragonBetResp {

        /**
         * Constructs a new TigerXdragonBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonBetResp);

        /** TigerXdragonBetResp UserID. */
        public UserID: (number|Long);

        /** TigerXdragonBetResp BetArea. */
        public BetArea: number;

        /** TigerXdragonBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new TigerXdragonBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonBetResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonBetResp): tigerXdragon.TigerXdragonBetResp;

        /**
         * Encodes the specified TigerXdragonBetResp message. Does not implicitly {@link tigerXdragon.TigerXdragonBetResp.verify|verify} messages.
         * @param message TigerXdragonBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonBetResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonBetResp.verify|verify} messages.
         * @param message TigerXdragonBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonBetResp;

        /**
         * Decodes a TigerXdragonBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonBetResp;

        /**
         * Verifies a TigerXdragonBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonBetResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonBetResp;

        /**
         * Creates a plain object from a TigerXdragonBetResp message. Also converts values to other types if specified.
         * @param message TigerXdragonBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonOpenResp. */
    interface ITigerXdragonOpenResp {

        /** TigerXdragonOpenResp Cards */
        Cards?: (Uint8Array|null);

        /** TigerXdragonOpenResp AwardArea */
        AwardArea?: (Uint8Array|null);
    }

    /** Represents a TigerXdragonOpenResp. */
    class TigerXdragonOpenResp implements ITigerXdragonOpenResp {

        /**
         * Constructs a new TigerXdragonOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonOpenResp);

        /** TigerXdragonOpenResp Cards. */
        public Cards: Uint8Array;

        /** TigerXdragonOpenResp AwardArea. */
        public AwardArea: Uint8Array;

        /**
         * Creates a new TigerXdragonOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonOpenResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonOpenResp): tigerXdragon.TigerXdragonOpenResp;

        /**
         * Encodes the specified TigerXdragonOpenResp message. Does not implicitly {@link tigerXdragon.TigerXdragonOpenResp.verify|verify} messages.
         * @param message TigerXdragonOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonOpenResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonOpenResp.verify|verify} messages.
         * @param message TigerXdragonOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonOpenResp;

        /**
         * Decodes a TigerXdragonOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonOpenResp;

        /**
         * Verifies a TigerXdragonOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonOpenResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonOpenResp;

        /**
         * Creates a plain object from a TigerXdragonOpenResp message. Also converts values to other types if specified.
         * @param message TigerXdragonOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonCheckoutResp. */
    interface ITigerXdragonCheckoutResp {

        /** TigerXdragonCheckoutResp MyAcquire */
        MyAcquire?: (number|Long|null);

        /** TigerXdragonCheckoutResp Acquires */
        Acquires?: ((number|Long)[]|null);
    }

    /** Represents a TigerXdragonCheckoutResp. */
    class TigerXdragonCheckoutResp implements ITigerXdragonCheckoutResp {

        /**
         * Constructs a new TigerXdragonCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonCheckoutResp);

        /** TigerXdragonCheckoutResp MyAcquire. */
        public MyAcquire: (number|Long);

        /** TigerXdragonCheckoutResp Acquires. */
        public Acquires: (number|Long)[];

        /**
         * Creates a new TigerXdragonCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonCheckoutResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonCheckoutResp): tigerXdragon.TigerXdragonCheckoutResp;

        /**
         * Encodes the specified TigerXdragonCheckoutResp message. Does not implicitly {@link tigerXdragon.TigerXdragonCheckoutResp.verify|verify} messages.
         * @param message TigerXdragonCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonCheckoutResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonCheckoutResp.verify|verify} messages.
         * @param message TigerXdragonCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonCheckoutResp;

        /**
         * Decodes a TigerXdragonCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonCheckoutResp;

        /**
         * Verifies a TigerXdragonCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonCheckoutResp;

        /**
         * Creates a plain object from a TigerXdragonCheckoutResp message. Also converts values to other types if specified.
         * @param message TigerXdragonCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonHostReq. */
    interface ITigerXdragonHostReq {

        /** TigerXdragonHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TigerXdragonHostReq. */
    class TigerXdragonHostReq implements ITigerXdragonHostReq {

        /**
         * Constructs a new TigerXdragonHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonHostReq);

        /** TigerXdragonHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TigerXdragonHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonHostReq instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonHostReq): tigerXdragon.TigerXdragonHostReq;

        /**
         * Encodes the specified TigerXdragonHostReq message. Does not implicitly {@link tigerXdragon.TigerXdragonHostReq.verify|verify} messages.
         * @param message TigerXdragonHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonHostReq message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonHostReq.verify|verify} messages.
         * @param message TigerXdragonHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonHostReq;

        /**
         * Decodes a TigerXdragonHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonHostReq;

        /**
         * Verifies a TigerXdragonHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonHostReq
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonHostReq;

        /**
         * Creates a plain object from a TigerXdragonHostReq message. Also converts values to other types if specified.
         * @param message TigerXdragonHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonHostResp. */
    interface ITigerXdragonHostResp {

        /** TigerXdragonHostResp UserID */
        UserID?: (number|Long|null);

        /** TigerXdragonHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TigerXdragonHostResp. */
    class TigerXdragonHostResp implements ITigerXdragonHostResp {

        /**
         * Constructs a new TigerXdragonHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonHostResp);

        /** TigerXdragonHostResp UserID. */
        public UserID: (number|Long);

        /** TigerXdragonHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TigerXdragonHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonHostResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonHostResp): tigerXdragon.TigerXdragonHostResp;

        /**
         * Encodes the specified TigerXdragonHostResp message. Does not implicitly {@link tigerXdragon.TigerXdragonHostResp.verify|verify} messages.
         * @param message TigerXdragonHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonHostResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonHostResp.verify|verify} messages.
         * @param message TigerXdragonHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonHostResp;

        /**
         * Decodes a TigerXdragonHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonHostResp;

        /**
         * Verifies a TigerXdragonHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonHostResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonHostResp;

        /**
         * Creates a plain object from a TigerXdragonHostResp message. Also converts values to other types if specified.
         * @param message TigerXdragonHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonSuperHostReq. */
    interface ITigerXdragonSuperHostReq {

        /** TigerXdragonSuperHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TigerXdragonSuperHostReq. */
    class TigerXdragonSuperHostReq implements ITigerXdragonSuperHostReq {

        /**
         * Constructs a new TigerXdragonSuperHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonSuperHostReq);

        /** TigerXdragonSuperHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TigerXdragonSuperHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonSuperHostReq instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonSuperHostReq): tigerXdragon.TigerXdragonSuperHostReq;

        /**
         * Encodes the specified TigerXdragonSuperHostReq message. Does not implicitly {@link tigerXdragon.TigerXdragonSuperHostReq.verify|verify} messages.
         * @param message TigerXdragonSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonSuperHostReq message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonSuperHostReq.verify|verify} messages.
         * @param message TigerXdragonSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonSuperHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonSuperHostReq;

        /**
         * Decodes a TigerXdragonSuperHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonSuperHostReq;

        /**
         * Verifies a TigerXdragonSuperHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonSuperHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonSuperHostReq
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonSuperHostReq;

        /**
         * Creates a plain object from a TigerXdragonSuperHostReq message. Also converts values to other types if specified.
         * @param message TigerXdragonSuperHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonSuperHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonSuperHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TigerXdragonSuperHostResp. */
    interface ITigerXdragonSuperHostResp {

        /** TigerXdragonSuperHostResp UserID */
        UserID?: (number|Long|null);

        /** TigerXdragonSuperHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a TigerXdragonSuperHostResp. */
    class TigerXdragonSuperHostResp implements ITigerXdragonSuperHostResp {

        /**
         * Constructs a new TigerXdragonSuperHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: tigerXdragon.ITigerXdragonSuperHostResp);

        /** TigerXdragonSuperHostResp UserID. */
        public UserID: (number|Long);

        /** TigerXdragonSuperHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new TigerXdragonSuperHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TigerXdragonSuperHostResp instance
         */
        public static create(properties?: tigerXdragon.ITigerXdragonSuperHostResp): tigerXdragon.TigerXdragonSuperHostResp;

        /**
         * Encodes the specified TigerXdragonSuperHostResp message. Does not implicitly {@link tigerXdragon.TigerXdragonSuperHostResp.verify|verify} messages.
         * @param message TigerXdragonSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tigerXdragon.ITigerXdragonSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TigerXdragonSuperHostResp message, length delimited. Does not implicitly {@link tigerXdragon.TigerXdragonSuperHostResp.verify|verify} messages.
         * @param message TigerXdragonSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tigerXdragon.ITigerXdragonSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TigerXdragonSuperHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TigerXdragonSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tigerXdragon.TigerXdragonSuperHostResp;

        /**
         * Decodes a TigerXdragonSuperHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TigerXdragonSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tigerXdragon.TigerXdragonSuperHostResp;

        /**
         * Verifies a TigerXdragonSuperHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TigerXdragonSuperHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TigerXdragonSuperHostResp
         */
        public static fromObject(object: { [k: string]: any }): tigerXdragon.TigerXdragonSuperHostResp;

        /**
         * Creates a plain object from a TigerXdragonSuperHostResp message. Also converts values to other types if specified.
         * @param message TigerXdragonSuperHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tigerXdragon.TigerXdragonSuperHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TigerXdragonSuperHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
