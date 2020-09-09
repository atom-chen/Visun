import * as $protobuf from "protobufjs";
/** Namespace qzcowcow. */
export namespace qzcowcow {

    /** Properties of a QzcowcowSceneResp. */
    interface IQzcowcowSceneResp {

        /** QzcowcowSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** QzcowcowSceneResp Chips */
        Chips?: (number[]|null);

        /** QzcowcowSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** QzcowcowSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** QzcowcowSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** QzcowcowSceneResp Inning */
        Inning?: (string|null);

        /** QzcowcowSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** QzcowcowSceneResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a QzcowcowSceneResp. */
    class QzcowcowSceneResp implements IQzcowcowSceneResp {

        /**
         * Constructs a new QzcowcowSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowSceneResp);

        /** QzcowcowSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** QzcowcowSceneResp Chips. */
        public Chips: number[];

        /** QzcowcowSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** QzcowcowSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** QzcowcowSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** QzcowcowSceneResp Inning. */
        public Inning: string;

        /** QzcowcowSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** QzcowcowSceneResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new QzcowcowSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowSceneResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowSceneResp): qzcowcow.QzcowcowSceneResp;

        /**
         * Encodes the specified QzcowcowSceneResp message. Does not implicitly {@link qzcowcow.QzcowcowSceneResp.verify|verify} messages.
         * @param message QzcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowSceneResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowSceneResp.verify|verify} messages.
         * @param message QzcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowSceneResp;

        /**
         * Decodes a QzcowcowSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowSceneResp;

        /**
         * Verifies a QzcowcowSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowSceneResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowSceneResp;

        /**
         * Creates a plain object from a QzcowcowSceneResp message. Also converts values to other types if specified.
         * @param message QzcowcowSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateFreeResp. */
    interface IQzcowcowStateFreeResp {

        /** QzcowcowStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a QzcowcowStateFreeResp. */
    class QzcowcowStateFreeResp implements IQzcowcowStateFreeResp {

        /**
         * Constructs a new QzcowcowStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateFreeResp);

        /** QzcowcowStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new QzcowcowStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateFreeResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateFreeResp): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Encodes the specified QzcowcowStateFreeResp message. Does not implicitly {@link qzcowcow.QzcowcowStateFreeResp.verify|verify} messages.
         * @param message QzcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateFreeResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateFreeResp.verify|verify} messages.
         * @param message QzcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Decodes a QzcowcowStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Verifies a QzcowcowStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Creates a plain object from a QzcowcowStateFreeResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateStartResp. */
    interface IQzcowcowStateStartResp {

        /** QzcowcowStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateStartResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a QzcowcowStateStartResp. */
    class QzcowcowStateStartResp implements IQzcowcowStateStartResp {

        /**
         * Constructs a new QzcowcowStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateStartResp);

        /** QzcowcowStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateStartResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new QzcowcowStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateStartResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateStartResp): qzcowcow.QzcowcowStateStartResp;

        /**
         * Encodes the specified QzcowcowStateStartResp message. Does not implicitly {@link qzcowcow.QzcowcowStateStartResp.verify|verify} messages.
         * @param message QzcowcowStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateStartResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateStartResp.verify|verify} messages.
         * @param message QzcowcowStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateStartResp;

        /**
         * Decodes a QzcowcowStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateStartResp;

        /**
         * Verifies a QzcowcowStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateStartResp;

        /**
         * Creates a plain object from a QzcowcowStateStartResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStatePlayingResp. */
    interface IQzcowcowStatePlayingResp {

        /** QzcowcowStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a QzcowcowStatePlayingResp. */
    class QzcowcowStatePlayingResp implements IQzcowcowStatePlayingResp {

        /**
         * Constructs a new QzcowcowStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStatePlayingResp);

        /** QzcowcowStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new QzcowcowStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStatePlayingResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStatePlayingResp): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Encodes the specified QzcowcowStatePlayingResp message. Does not implicitly {@link qzcowcow.QzcowcowStatePlayingResp.verify|verify} messages.
         * @param message QzcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStatePlayingResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStatePlayingResp.verify|verify} messages.
         * @param message QzcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Decodes a QzcowcowStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Verifies a QzcowcowStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Creates a plain object from a QzcowcowStatePlayingResp message. Also converts values to other types if specified.
         * @param message QzcowcowStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateOpenResp. */
    interface IQzcowcowStateOpenResp {

        /** QzcowcowStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateOpenResp OpenInfo */
        OpenInfo?: (qzcowcow.IQzcowcowOpenResp|null);
    }

    /** Represents a QzcowcowStateOpenResp. */
    class QzcowcowStateOpenResp implements IQzcowcowStateOpenResp {

        /**
         * Constructs a new QzcowcowStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateOpenResp);

        /** QzcowcowStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateOpenResp OpenInfo. */
        public OpenInfo?: (qzcowcow.IQzcowcowOpenResp|null);

        /**
         * Creates a new QzcowcowStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateOpenResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateOpenResp): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Encodes the specified QzcowcowStateOpenResp message. Does not implicitly {@link qzcowcow.QzcowcowStateOpenResp.verify|verify} messages.
         * @param message QzcowcowStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateOpenResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateOpenResp.verify|verify} messages.
         * @param message QzcowcowStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Decodes a QzcowcowStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Verifies a QzcowcowStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Creates a plain object from a QzcowcowStateOpenResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateOverResp. */
    interface IQzcowcowStateOverResp {

        /** QzcowcowStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a QzcowcowStateOverResp. */
    class QzcowcowStateOverResp implements IQzcowcowStateOverResp {

        /**
         * Constructs a new QzcowcowStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateOverResp);

        /** QzcowcowStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new QzcowcowStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateOverResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateOverResp): qzcowcow.QzcowcowStateOverResp;

        /**
         * Encodes the specified QzcowcowStateOverResp message. Does not implicitly {@link qzcowcow.QzcowcowStateOverResp.verify|verify} messages.
         * @param message QzcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateOverResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateOverResp.verify|verify} messages.
         * @param message QzcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateOverResp;

        /**
         * Decodes a QzcowcowStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateOverResp;

        /**
         * Verifies a QzcowcowStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateOverResp;

        /**
         * Creates a plain object from a QzcowcowStateOverResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowBetReq. */
    interface IQzcowcowBetReq {

        /** QzcowcowBetReq BetArea */
        BetArea?: (number|null);

        /** QzcowcowBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a QzcowcowBetReq. */
    class QzcowcowBetReq implements IQzcowcowBetReq {

        /**
         * Constructs a new QzcowcowBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowBetReq);

        /** QzcowcowBetReq BetArea. */
        public BetArea: number;

        /** QzcowcowBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new QzcowcowBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowBetReq instance
         */
        public static create(properties?: qzcowcow.IQzcowcowBetReq): qzcowcow.QzcowcowBetReq;

        /**
         * Encodes the specified QzcowcowBetReq message. Does not implicitly {@link qzcowcow.QzcowcowBetReq.verify|verify} messages.
         * @param message QzcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowBetReq message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowBetReq.verify|verify} messages.
         * @param message QzcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowBetReq;

        /**
         * Decodes a QzcowcowBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowBetReq;

        /**
         * Verifies a QzcowcowBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowBetReq
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowBetReq;

        /**
         * Creates a plain object from a QzcowcowBetReq message. Also converts values to other types if specified.
         * @param message QzcowcowBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowBetResp. */
    interface IQzcowcowBetResp {

        /** QzcowcowBetResp UserId */
        UserId?: (number|Long|null);

        /** QzcowcowBetResp BetArea */
        BetArea?: (number|null);

        /** QzcowcowBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a QzcowcowBetResp. */
    class QzcowcowBetResp implements IQzcowcowBetResp {

        /**
         * Constructs a new QzcowcowBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowBetResp);

        /** QzcowcowBetResp UserId. */
        public UserId: (number|Long);

        /** QzcowcowBetResp BetArea. */
        public BetArea: number;

        /** QzcowcowBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new QzcowcowBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowBetResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowBetResp): qzcowcow.QzcowcowBetResp;

        /**
         * Encodes the specified QzcowcowBetResp message. Does not implicitly {@link qzcowcow.QzcowcowBetResp.verify|verify} messages.
         * @param message QzcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowBetResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowBetResp.verify|verify} messages.
         * @param message QzcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowBetResp;

        /**
         * Decodes a QzcowcowBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowBetResp;

        /**
         * Verifies a QzcowcowBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowBetResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowBetResp;

        /**
         * Creates a plain object from a QzcowcowBetResp message. Also converts values to other types if specified.
         * @param message QzcowcowBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowOpenResp. */
    interface IQzcowcowOpenResp {

        /** QzcowcowOpenResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** QzcowcowOpenResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp TianCard */
        TianCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp XuanCard */
        XuanCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp DiCard */
        DiCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp HuangCard */
        HuangCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a QzcowcowOpenResp. */
    class QzcowcowOpenResp implements IQzcowcowOpenResp {

        /**
         * Constructs a new QzcowcowOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowOpenResp);

        /** QzcowcowOpenResp AwardArea. */
        public AwardArea: Uint8Array;

        /** QzcowcowOpenResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp TianCard. */
        public TianCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp XuanCard. */
        public XuanCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp DiCard. */
        public DiCard?: (gamecomm.ICardInfo|null);

        /** QzcowcowOpenResp HuangCard. */
        public HuangCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new QzcowcowOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowOpenResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowOpenResp): qzcowcow.QzcowcowOpenResp;

        /**
         * Encodes the specified QzcowcowOpenResp message. Does not implicitly {@link qzcowcow.QzcowcowOpenResp.verify|verify} messages.
         * @param message QzcowcowOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowOpenResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowOpenResp.verify|verify} messages.
         * @param message QzcowcowOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowOpenResp;

        /**
         * Decodes a QzcowcowOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowOpenResp;

        /**
         * Verifies a QzcowcowOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowOpenResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowOpenResp;

        /**
         * Creates a plain object from a QzcowcowOpenResp message. Also converts values to other types if specified.
         * @param message QzcowcowOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowOverResp. */
    interface IQzcowcowOverResp {

        /** QzcowcowOverResp MySettlement */
        MySettlement?: (number|Long|null);

        /** QzcowcowOverResp TotalSettlement */
        TotalSettlement?: ((number|Long)[]|null);
    }

    /** Represents a QzcowcowOverResp. */
    class QzcowcowOverResp implements IQzcowcowOverResp {

        /**
         * Constructs a new QzcowcowOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowOverResp);

        /** QzcowcowOverResp MySettlement. */
        public MySettlement: (number|Long);

        /** QzcowcowOverResp TotalSettlement. */
        public TotalSettlement: (number|Long)[];

        /**
         * Creates a new QzcowcowOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowOverResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowOverResp): qzcowcow.QzcowcowOverResp;

        /**
         * Encodes the specified QzcowcowOverResp message. Does not implicitly {@link qzcowcow.QzcowcowOverResp.verify|verify} messages.
         * @param message QzcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowOverResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowOverResp.verify|verify} messages.
         * @param message QzcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowOverResp;

        /**
         * Decodes a QzcowcowOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowOverResp;

        /**
         * Verifies a QzcowcowOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowOverResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowOverResp;

        /**
         * Creates a plain object from a QzcowcowOverResp message. Also converts values to other types if specified.
         * @param message QzcowcowOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowHostReq. */
    interface IQzcowcowHostReq {

        /** QzcowcowHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a QzcowcowHostReq. */
    class QzcowcowHostReq implements IQzcowcowHostReq {

        /**
         * Constructs a new QzcowcowHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowHostReq);

        /** QzcowcowHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new QzcowcowHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowHostReq instance
         */
        public static create(properties?: qzcowcow.IQzcowcowHostReq): qzcowcow.QzcowcowHostReq;

        /**
         * Encodes the specified QzcowcowHostReq message. Does not implicitly {@link qzcowcow.QzcowcowHostReq.verify|verify} messages.
         * @param message QzcowcowHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowHostReq message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowHostReq.verify|verify} messages.
         * @param message QzcowcowHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowHostReq;

        /**
         * Decodes a QzcowcowHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowHostReq;

        /**
         * Verifies a QzcowcowHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowHostReq
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowHostReq;

        /**
         * Creates a plain object from a QzcowcowHostReq message. Also converts values to other types if specified.
         * @param message QzcowcowHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowHostResp. */
    interface IQzcowcowHostResp {

        /** QzcowcowHostResp UserID */
        UserID?: (number|Long|null);

        /** QzcowcowHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a QzcowcowHostResp. */
    class QzcowcowHostResp implements IQzcowcowHostResp {

        /**
         * Constructs a new QzcowcowHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowHostResp);

        /** QzcowcowHostResp UserID. */
        public UserID: (number|Long);

        /** QzcowcowHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new QzcowcowHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowHostResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowHostResp): qzcowcow.QzcowcowHostResp;

        /**
         * Encodes the specified QzcowcowHostResp message. Does not implicitly {@link qzcowcow.QzcowcowHostResp.verify|verify} messages.
         * @param message QzcowcowHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowHostResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowHostResp.verify|verify} messages.
         * @param message QzcowcowHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowHostResp;

        /**
         * Decodes a QzcowcowHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowHostResp;

        /**
         * Verifies a QzcowcowHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowHostResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowHostResp;

        /**
         * Creates a plain object from a QzcowcowHostResp message. Also converts values to other types if specified.
         * @param message QzcowcowHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowHostListReq. */
    interface IQzcowcowHostListReq {
    }

    /** Represents a QzcowcowHostListReq. */
    class QzcowcowHostListReq implements IQzcowcowHostListReq {

        /**
         * Constructs a new QzcowcowHostListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowHostListReq);

        /**
         * Creates a new QzcowcowHostListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowHostListReq instance
         */
        public static create(properties?: qzcowcow.IQzcowcowHostListReq): qzcowcow.QzcowcowHostListReq;

        /**
         * Encodes the specified QzcowcowHostListReq message. Does not implicitly {@link qzcowcow.QzcowcowHostListReq.verify|verify} messages.
         * @param message QzcowcowHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowHostListReq message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowHostListReq.verify|verify} messages.
         * @param message QzcowcowHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowHostListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowHostListReq;

        /**
         * Decodes a QzcowcowHostListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowHostListReq;

        /**
         * Verifies a QzcowcowHostListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowHostListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowHostListReq
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowHostListReq;

        /**
         * Creates a plain object from a QzcowcowHostListReq message. Also converts values to other types if specified.
         * @param message QzcowcowHostListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowHostListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowHostListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowHostListResp. */
    interface IQzcowcowHostListResp {

        /** QzcowcowHostListResp CurHost */
        CurHost?: (gamecomm.IPlayerInfo|null);

        /** QzcowcowHostListResp Waitlist */
        Waitlist?: ((number|Long)[]|null);
    }

    /** Represents a QzcowcowHostListResp. */
    class QzcowcowHostListResp implements IQzcowcowHostListResp {

        /**
         * Constructs a new QzcowcowHostListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowHostListResp);

        /** QzcowcowHostListResp CurHost. */
        public CurHost?: (gamecomm.IPlayerInfo|null);

        /** QzcowcowHostListResp Waitlist. */
        public Waitlist: (number|Long)[];

        /**
         * Creates a new QzcowcowHostListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowHostListResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowHostListResp): qzcowcow.QzcowcowHostListResp;

        /**
         * Encodes the specified QzcowcowHostListResp message. Does not implicitly {@link qzcowcow.QzcowcowHostListResp.verify|verify} messages.
         * @param message QzcowcowHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowHostListResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowHostListResp.verify|verify} messages.
         * @param message QzcowcowHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowHostListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowHostListResp;

        /**
         * Decodes a QzcowcowHostListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowHostListResp;

        /**
         * Verifies a QzcowcowHostListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowHostListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowHostListResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowHostListResp;

        /**
         * Creates a plain object from a QzcowcowHostListResp message. Also converts values to other types if specified.
         * @param message QzcowcowHostListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowHostListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowHostListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
