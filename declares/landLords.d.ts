import * as $protobuf from "protobufjs";
/** Namespace landLords. */
export namespace landLords {

    /** Properties of a LandLordsPlayer. */
    interface ILandLordsPlayer {

        /** LandLordsPlayer UserID */
        UserID?: (number|Long|null);

        /** LandLordsPlayer ChairID */
        ChairID?: (number|null);

        /** LandLordsPlayer CardsLen */
        CardsLen?: (number|null);

        /** LandLordsPlayer Cards */
        Cards?: (Uint8Array|null);

        /** LandLordsPlayer IsBanker */
        IsBanker?: (boolean|null);

        /** LandLordsPlayer IsTrustee */
        IsTrustee?: (boolean|null);

        /** LandLordsPlayer Name */
        Name?: (string|null);

        /** LandLordsPlayer Gold */
        Gold?: (number|Long|null);
    }

    /** Represents a LandLordsPlayer. */
    class LandLordsPlayer implements ILandLordsPlayer {

        /**
         * Constructs a new LandLordsPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsPlayer);

        /** LandLordsPlayer UserID. */
        public UserID: (number|Long);

        /** LandLordsPlayer ChairID. */
        public ChairID: number;

        /** LandLordsPlayer CardsLen. */
        public CardsLen: number;

        /** LandLordsPlayer Cards. */
        public Cards: Uint8Array;

        /** LandLordsPlayer IsBanker. */
        public IsBanker: boolean;

        /** LandLordsPlayer IsTrustee. */
        public IsTrustee: boolean;

        /** LandLordsPlayer Name. */
        public Name: string;

        /** LandLordsPlayer Gold. */
        public Gold: (number|Long);

        /**
         * Creates a new LandLordsPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsPlayer instance
         */
        public static create(properties?: landLords.ILandLordsPlayer): landLords.LandLordsPlayer;

        /**
         * Encodes the specified LandLordsPlayer message. Does not implicitly {@link landLords.LandLordsPlayer.verify|verify} messages.
         * @param message LandLordsPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsPlayer message, length delimited. Does not implicitly {@link landLords.LandLordsPlayer.verify|verify} messages.
         * @param message LandLordsPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsPlayer;

        /**
         * Decodes a LandLordsPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsPlayer;

        /**
         * Verifies a LandLordsPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsPlayer
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsPlayer;

        /**
         * Creates a plain object from a LandLordsPlayer message. Also converts values to other types if specified.
         * @param message LandLordsPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsSceneResp. */
    interface ILandLordsSceneResp {

        /** LandLordsSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** LandLordsSceneResp Players */
        Players?: (landLords.ILandLordsPlayer[]|null);

        /** LandLordsSceneResp Inning */
        Inning?: (string|null);
    }

    /** Represents a LandLordsSceneResp. */
    class LandLordsSceneResp implements ILandLordsSceneResp {

        /**
         * Constructs a new LandLordsSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsSceneResp);

        /** LandLordsSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** LandLordsSceneResp Players. */
        public Players: landLords.ILandLordsPlayer[];

        /** LandLordsSceneResp Inning. */
        public Inning: string;

        /**
         * Creates a new LandLordsSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsSceneResp instance
         */
        public static create(properties?: landLords.ILandLordsSceneResp): landLords.LandLordsSceneResp;

        /**
         * Encodes the specified LandLordsSceneResp message. Does not implicitly {@link landLords.LandLordsSceneResp.verify|verify} messages.
         * @param message LandLordsSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsSceneResp message, length delimited. Does not implicitly {@link landLords.LandLordsSceneResp.verify|verify} messages.
         * @param message LandLordsSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsSceneResp;

        /**
         * Decodes a LandLordsSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsSceneResp;

        /**
         * Verifies a LandLordsSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsSceneResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsSceneResp;

        /**
         * Creates a plain object from a LandLordsSceneResp message. Also converts values to other types if specified.
         * @param message LandLordsSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateFreeResp. */
    interface ILandLordsStateFreeResp {

        /** LandLordsStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a LandLordsStateFreeResp. */
    class LandLordsStateFreeResp implements ILandLordsStateFreeResp {

        /**
         * Constructs a new LandLordsStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateFreeResp);

        /** LandLordsStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new LandLordsStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateFreeResp instance
         */
        public static create(properties?: landLords.ILandLordsStateFreeResp): landLords.LandLordsStateFreeResp;

        /**
         * Encodes the specified LandLordsStateFreeResp message. Does not implicitly {@link landLords.LandLordsStateFreeResp.verify|verify} messages.
         * @param message LandLordsStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateFreeResp message, length delimited. Does not implicitly {@link landLords.LandLordsStateFreeResp.verify|verify} messages.
         * @param message LandLordsStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateFreeResp;

        /**
         * Decodes a LandLordsStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateFreeResp;

        /**
         * Verifies a LandLordsStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateFreeResp;

        /**
         * Creates a plain object from a LandLordsStateFreeResp message. Also converts values to other types if specified.
         * @param message LandLordsStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateStartResp. */
    interface ILandLordsStateStartResp {

        /** LandLordsStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStateStartResp Inning */
        Inning?: (string|null);
    }

    /** Represents a LandLordsStateStartResp. */
    class LandLordsStateStartResp implements ILandLordsStateStartResp {

        /**
         * Constructs a new LandLordsStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateStartResp);

        /** LandLordsStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStateStartResp Inning. */
        public Inning: string;

        /**
         * Creates a new LandLordsStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateStartResp instance
         */
        public static create(properties?: landLords.ILandLordsStateStartResp): landLords.LandLordsStateStartResp;

        /**
         * Encodes the specified LandLordsStateStartResp message. Does not implicitly {@link landLords.LandLordsStateStartResp.verify|verify} messages.
         * @param message LandLordsStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateStartResp message, length delimited. Does not implicitly {@link landLords.LandLordsStateStartResp.verify|verify} messages.
         * @param message LandLordsStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateStartResp;

        /**
         * Decodes a LandLordsStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateStartResp;

        /**
         * Verifies a LandLordsStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateStartResp;

        /**
         * Creates a plain object from a LandLordsStateStartResp message. Also converts values to other types if specified.
         * @param message LandLordsStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateCallResp. */
    interface ILandLordsStateCallResp {

        /** LandLordsStateCallResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStateCallResp UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a LandLordsStateCallResp. */
    class LandLordsStateCallResp implements ILandLordsStateCallResp {

        /**
         * Constructs a new LandLordsStateCallResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateCallResp);

        /** LandLordsStateCallResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStateCallResp UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new LandLordsStateCallResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateCallResp instance
         */
        public static create(properties?: landLords.ILandLordsStateCallResp): landLords.LandLordsStateCallResp;

        /**
         * Encodes the specified LandLordsStateCallResp message. Does not implicitly {@link landLords.LandLordsStateCallResp.verify|verify} messages.
         * @param message LandLordsStateCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateCallResp message, length delimited. Does not implicitly {@link landLords.LandLordsStateCallResp.verify|verify} messages.
         * @param message LandLordsStateCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateCallResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateCallResp;

        /**
         * Decodes a LandLordsStateCallResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateCallResp;

        /**
         * Verifies a LandLordsStateCallResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateCallResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateCallResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateCallResp;

        /**
         * Creates a plain object from a LandLordsStateCallResp message. Also converts values to other types if specified.
         * @param message LandLordsStateCallResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateCallResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateCallResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStatePlayingResp. */
    interface ILandLordsStatePlayingResp {

        /** LandLordsStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStatePlayingResp LastChairID */
        LastChairID?: (number|null);

        /** LandLordsStatePlayingResp LastCards */
        LastCards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a LandLordsStatePlayingResp. */
    class LandLordsStatePlayingResp implements ILandLordsStatePlayingResp {

        /**
         * Constructs a new LandLordsStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStatePlayingResp);

        /** LandLordsStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStatePlayingResp LastChairID. */
        public LastChairID: number;

        /** LandLordsStatePlayingResp LastCards. */
        public LastCards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new LandLordsStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStatePlayingResp instance
         */
        public static create(properties?: landLords.ILandLordsStatePlayingResp): landLords.LandLordsStatePlayingResp;

        /**
         * Encodes the specified LandLordsStatePlayingResp message. Does not implicitly {@link landLords.LandLordsStatePlayingResp.verify|verify} messages.
         * @param message LandLordsStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStatePlayingResp message, length delimited. Does not implicitly {@link landLords.LandLordsStatePlayingResp.verify|verify} messages.
         * @param message LandLordsStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStatePlayingResp;

        /**
         * Decodes a LandLordsStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStatePlayingResp;

        /**
         * Verifies a LandLordsStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStatePlayingResp;

        /**
         * Creates a plain object from a LandLordsStatePlayingResp message. Also converts values to other types if specified.
         * @param message LandLordsStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateOverResp. */
    interface ILandLordsStateOverResp {

        /** LandLordsStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a LandLordsStateOverResp. */
    class LandLordsStateOverResp implements ILandLordsStateOverResp {

        /**
         * Constructs a new LandLordsStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateOverResp);

        /** LandLordsStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new LandLordsStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateOverResp instance
         */
        public static create(properties?: landLords.ILandLordsStateOverResp): landLords.LandLordsStateOverResp;

        /**
         * Encodes the specified LandLordsStateOverResp message. Does not implicitly {@link landLords.LandLordsStateOverResp.verify|verify} messages.
         * @param message LandLordsStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateOverResp message, length delimited. Does not implicitly {@link landLords.LandLordsStateOverResp.verify|verify} messages.
         * @param message LandLordsStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateOverResp;

        /**
         * Decodes a LandLordsStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateOverResp;

        /**
         * Verifies a LandLordsStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateOverResp;

        /**
         * Creates a plain object from a LandLordsStateOverResp message. Also converts values to other types if specified.
         * @param message LandLordsStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsReadyReq. */
    interface ILandLordsReadyReq {

        /** LandLordsReadyReq IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a LandLordsReadyReq. */
    class LandLordsReadyReq implements ILandLordsReadyReq {

        /**
         * Constructs a new LandLordsReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsReadyReq);

        /** LandLordsReadyReq IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new LandLordsReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsReadyReq instance
         */
        public static create(properties?: landLords.ILandLordsReadyReq): landLords.LandLordsReadyReq;

        /**
         * Encodes the specified LandLordsReadyReq message. Does not implicitly {@link landLords.LandLordsReadyReq.verify|verify} messages.
         * @param message LandLordsReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsReadyReq message, length delimited. Does not implicitly {@link landLords.LandLordsReadyReq.verify|verify} messages.
         * @param message LandLordsReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsReadyReq;

        /**
         * Decodes a LandLordsReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsReadyReq;

        /**
         * Verifies a LandLordsReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsReadyReq
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsReadyReq;

        /**
         * Creates a plain object from a LandLordsReadyReq message. Also converts values to other types if specified.
         * @param message LandLordsReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsReadyResp. */
    interface ILandLordsReadyResp {

        /** LandLordsReadyResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a LandLordsReadyResp. */
    class LandLordsReadyResp implements ILandLordsReadyResp {

        /**
         * Constructs a new LandLordsReadyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsReadyResp);

        /** LandLordsReadyResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new LandLordsReadyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsReadyResp instance
         */
        public static create(properties?: landLords.ILandLordsReadyResp): landLords.LandLordsReadyResp;

        /**
         * Encodes the specified LandLordsReadyResp message. Does not implicitly {@link landLords.LandLordsReadyResp.verify|verify} messages.
         * @param message LandLordsReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsReadyResp message, length delimited. Does not implicitly {@link landLords.LandLordsReadyResp.verify|verify} messages.
         * @param message LandLordsReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsReadyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsReadyResp;

        /**
         * Decodes a LandLordsReadyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsReadyResp;

        /**
         * Verifies a LandLordsReadyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsReadyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsReadyResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsReadyResp;

        /**
         * Creates a plain object from a LandLordsReadyResp message. Also converts values to other types if specified.
         * @param message LandLordsReadyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsReadyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsReadyResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsDealResp. */
    interface ILandLordsDealResp {

        /** LandLordsDealResp UserID */
        UserID?: (number|Long|null);

        /** LandLordsDealResp CardsHand */
        CardsHand?: (Uint8Array|null);
    }

    /** Represents a LandLordsDealResp. */
    class LandLordsDealResp implements ILandLordsDealResp {

        /**
         * Constructs a new LandLordsDealResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsDealResp);

        /** LandLordsDealResp UserID. */
        public UserID: (number|Long);

        /** LandLordsDealResp CardsHand. */
        public CardsHand: Uint8Array;

        /**
         * Creates a new LandLordsDealResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsDealResp instance
         */
        public static create(properties?: landLords.ILandLordsDealResp): landLords.LandLordsDealResp;

        /**
         * Encodes the specified LandLordsDealResp message. Does not implicitly {@link landLords.LandLordsDealResp.verify|verify} messages.
         * @param message LandLordsDealResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsDealResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsDealResp message, length delimited. Does not implicitly {@link landLords.LandLordsDealResp.verify|verify} messages.
         * @param message LandLordsDealResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsDealResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsDealResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsDealResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsDealResp;

        /**
         * Decodes a LandLordsDealResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsDealResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsDealResp;

        /**
         * Verifies a LandLordsDealResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsDealResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsDealResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsDealResp;

        /**
         * Creates a plain object from a LandLordsDealResp message. Also converts values to other types if specified.
         * @param message LandLordsDealResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsDealResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsDealResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsCallReq. */
    interface ILandLordsCallReq {

        /** LandLordsCallReq Score */
        Score?: (number|null);
    }

    /** Represents a LandLordsCallReq. */
    class LandLordsCallReq implements ILandLordsCallReq {

        /**
         * Constructs a new LandLordsCallReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsCallReq);

        /** LandLordsCallReq Score. */
        public Score: number;

        /**
         * Creates a new LandLordsCallReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsCallReq instance
         */
        public static create(properties?: landLords.ILandLordsCallReq): landLords.LandLordsCallReq;

        /**
         * Encodes the specified LandLordsCallReq message. Does not implicitly {@link landLords.LandLordsCallReq.verify|verify} messages.
         * @param message LandLordsCallReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsCallReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsCallReq message, length delimited. Does not implicitly {@link landLords.LandLordsCallReq.verify|verify} messages.
         * @param message LandLordsCallReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsCallReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsCallReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsCallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsCallReq;

        /**
         * Decodes a LandLordsCallReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsCallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsCallReq;

        /**
         * Verifies a LandLordsCallReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsCallReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsCallReq
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsCallReq;

        /**
         * Creates a plain object from a LandLordsCallReq message. Also converts values to other types if specified.
         * @param message LandLordsCallReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsCallReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsCallReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsCallResp. */
    interface ILandLordsCallResp {

        /** LandLordsCallResp UserID */
        UserID?: (number|Long|null);

        /** LandLordsCallResp Score */
        Score?: (number|null);
    }

    /** Represents a LandLordsCallResp. */
    class LandLordsCallResp implements ILandLordsCallResp {

        /**
         * Constructs a new LandLordsCallResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsCallResp);

        /** LandLordsCallResp UserID. */
        public UserID: (number|Long);

        /** LandLordsCallResp Score. */
        public Score: number;

        /**
         * Creates a new LandLordsCallResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsCallResp instance
         */
        public static create(properties?: landLords.ILandLordsCallResp): landLords.LandLordsCallResp;

        /**
         * Encodes the specified LandLordsCallResp message. Does not implicitly {@link landLords.LandLordsCallResp.verify|verify} messages.
         * @param message LandLordsCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsCallResp message, length delimited. Does not implicitly {@link landLords.LandLordsCallResp.verify|verify} messages.
         * @param message LandLordsCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsCallResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsCallResp;

        /**
         * Decodes a LandLordsCallResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsCallResp;

        /**
         * Verifies a LandLordsCallResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsCallResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsCallResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsCallResp;

        /**
         * Creates a plain object from a LandLordsCallResp message. Also converts values to other types if specified.
         * @param message LandLordsCallResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsCallResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsCallResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsDoubleReq. */
    interface ILandLordsDoubleReq {

        /** LandLordsDoubleReq Number */
        Number?: (number|null);
    }

    /** Represents a LandLordsDoubleReq. */
    class LandLordsDoubleReq implements ILandLordsDoubleReq {

        /**
         * Constructs a new LandLordsDoubleReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsDoubleReq);

        /** LandLordsDoubleReq Number. */
        public Number: number;

        /**
         * Creates a new LandLordsDoubleReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsDoubleReq instance
         */
        public static create(properties?: landLords.ILandLordsDoubleReq): landLords.LandLordsDoubleReq;

        /**
         * Encodes the specified LandLordsDoubleReq message. Does not implicitly {@link landLords.LandLordsDoubleReq.verify|verify} messages.
         * @param message LandLordsDoubleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsDoubleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsDoubleReq message, length delimited. Does not implicitly {@link landLords.LandLordsDoubleReq.verify|verify} messages.
         * @param message LandLordsDoubleReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsDoubleReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsDoubleReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsDoubleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsDoubleReq;

        /**
         * Decodes a LandLordsDoubleReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsDoubleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsDoubleReq;

        /**
         * Verifies a LandLordsDoubleReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsDoubleReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsDoubleReq
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsDoubleReq;

        /**
         * Creates a plain object from a LandLordsDoubleReq message. Also converts values to other types if specified.
         * @param message LandLordsDoubleReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsDoubleReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsDoubleReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsDoubleResp. */
    interface ILandLordsDoubleResp {

        /** LandLordsDoubleResp UserID */
        UserID?: (number|Long|null);

        /** LandLordsDoubleResp Number */
        Number?: (number|null);
    }

    /** Represents a LandLordsDoubleResp. */
    class LandLordsDoubleResp implements ILandLordsDoubleResp {

        /**
         * Constructs a new LandLordsDoubleResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsDoubleResp);

        /** LandLordsDoubleResp UserID. */
        public UserID: (number|Long);

        /** LandLordsDoubleResp Number. */
        public Number: number;

        /**
         * Creates a new LandLordsDoubleResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsDoubleResp instance
         */
        public static create(properties?: landLords.ILandLordsDoubleResp): landLords.LandLordsDoubleResp;

        /**
         * Encodes the specified LandLordsDoubleResp message. Does not implicitly {@link landLords.LandLordsDoubleResp.verify|verify} messages.
         * @param message LandLordsDoubleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsDoubleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsDoubleResp message, length delimited. Does not implicitly {@link landLords.LandLordsDoubleResp.verify|verify} messages.
         * @param message LandLordsDoubleResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsDoubleResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsDoubleResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsDoubleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsDoubleResp;

        /**
         * Decodes a LandLordsDoubleResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsDoubleResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsDoubleResp;

        /**
         * Verifies a LandLordsDoubleResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsDoubleResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsDoubleResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsDoubleResp;

        /**
         * Creates a plain object from a LandLordsDoubleResp message. Also converts values to other types if specified.
         * @param message LandLordsDoubleResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsDoubleResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsDoubleResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsTrusteeReq. */
    interface ILandLordsTrusteeReq {

        /** LandLordsTrusteeReq IsTrustee */
        IsTrustee?: (boolean|null);
    }

    /** Represents a LandLordsTrusteeReq. */
    class LandLordsTrusteeReq implements ILandLordsTrusteeReq {

        /**
         * Constructs a new LandLordsTrusteeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsTrusteeReq);

        /** LandLordsTrusteeReq IsTrustee. */
        public IsTrustee: boolean;

        /**
         * Creates a new LandLordsTrusteeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsTrusteeReq instance
         */
        public static create(properties?: landLords.ILandLordsTrusteeReq): landLords.LandLordsTrusteeReq;

        /**
         * Encodes the specified LandLordsTrusteeReq message. Does not implicitly {@link landLords.LandLordsTrusteeReq.verify|verify} messages.
         * @param message LandLordsTrusteeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsTrusteeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsTrusteeReq message, length delimited. Does not implicitly {@link landLords.LandLordsTrusteeReq.verify|verify} messages.
         * @param message LandLordsTrusteeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsTrusteeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsTrusteeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsTrusteeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsTrusteeReq;

        /**
         * Decodes a LandLordsTrusteeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsTrusteeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsTrusteeReq;

        /**
         * Verifies a LandLordsTrusteeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsTrusteeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsTrusteeReq
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsTrusteeReq;

        /**
         * Creates a plain object from a LandLordsTrusteeReq message. Also converts values to other types if specified.
         * @param message LandLordsTrusteeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsTrusteeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsTrusteeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsTrusteeResp. */
    interface ILandLordsTrusteeResp {

        /** LandLordsTrusteeResp UserID */
        UserID?: (number|Long|null);

        /** LandLordsTrusteeResp IsTrustee */
        IsTrustee?: (boolean|null);
    }

    /** Represents a LandLordsTrusteeResp. */
    class LandLordsTrusteeResp implements ILandLordsTrusteeResp {

        /**
         * Constructs a new LandLordsTrusteeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsTrusteeResp);

        /** LandLordsTrusteeResp UserID. */
        public UserID: (number|Long);

        /** LandLordsTrusteeResp IsTrustee. */
        public IsTrustee: boolean;

        /**
         * Creates a new LandLordsTrusteeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsTrusteeResp instance
         */
        public static create(properties?: landLords.ILandLordsTrusteeResp): landLords.LandLordsTrusteeResp;

        /**
         * Encodes the specified LandLordsTrusteeResp message. Does not implicitly {@link landLords.LandLordsTrusteeResp.verify|verify} messages.
         * @param message LandLordsTrusteeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsTrusteeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsTrusteeResp message, length delimited. Does not implicitly {@link landLords.LandLordsTrusteeResp.verify|verify} messages.
         * @param message LandLordsTrusteeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsTrusteeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsTrusteeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsTrusteeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsTrusteeResp;

        /**
         * Decodes a LandLordsTrusteeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsTrusteeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsTrusteeResp;

        /**
         * Verifies a LandLordsTrusteeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsTrusteeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsTrusteeResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsTrusteeResp;

        /**
         * Creates a plain object from a LandLordsTrusteeResp message. Also converts values to other types if specified.
         * @param message LandLordsTrusteeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsTrusteeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsTrusteeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsBottomCardResp. */
    interface ILandLordsBottomCardResp {

        /** LandLordsBottomCardResp UserID */
        UserID?: (number|Long|null);

        /** LandLordsBottomCardResp CardsBottom */
        CardsBottom?: (Uint8Array|null);
    }

    /** Represents a LandLordsBottomCardResp. */
    class LandLordsBottomCardResp implements ILandLordsBottomCardResp {

        /**
         * Constructs a new LandLordsBottomCardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsBottomCardResp);

        /** LandLordsBottomCardResp UserID. */
        public UserID: (number|Long);

        /** LandLordsBottomCardResp CardsBottom. */
        public CardsBottom: Uint8Array;

        /**
         * Creates a new LandLordsBottomCardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsBottomCardResp instance
         */
        public static create(properties?: landLords.ILandLordsBottomCardResp): landLords.LandLordsBottomCardResp;

        /**
         * Encodes the specified LandLordsBottomCardResp message. Does not implicitly {@link landLords.LandLordsBottomCardResp.verify|verify} messages.
         * @param message LandLordsBottomCardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsBottomCardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsBottomCardResp message, length delimited. Does not implicitly {@link landLords.LandLordsBottomCardResp.verify|verify} messages.
         * @param message LandLordsBottomCardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsBottomCardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsBottomCardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsBottomCardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsBottomCardResp;

        /**
         * Decodes a LandLordsBottomCardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsBottomCardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsBottomCardResp;

        /**
         * Verifies a LandLordsBottomCardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsBottomCardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsBottomCardResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsBottomCardResp;

        /**
         * Creates a plain object from a LandLordsBottomCardResp message. Also converts values to other types if specified.
         * @param message LandLordsBottomCardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsBottomCardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsBottomCardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsOutCardReq. */
    interface ILandLordsOutCardReq {

        /** LandLordsOutCardReq Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a LandLordsOutCardReq. */
    class LandLordsOutCardReq implements ILandLordsOutCardReq {

        /**
         * Constructs a new LandLordsOutCardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsOutCardReq);

        /** LandLordsOutCardReq Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new LandLordsOutCardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsOutCardReq instance
         */
        public static create(properties?: landLords.ILandLordsOutCardReq): landLords.LandLordsOutCardReq;

        /**
         * Encodes the specified LandLordsOutCardReq message. Does not implicitly {@link landLords.LandLordsOutCardReq.verify|verify} messages.
         * @param message LandLordsOutCardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsOutCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsOutCardReq message, length delimited. Does not implicitly {@link landLords.LandLordsOutCardReq.verify|verify} messages.
         * @param message LandLordsOutCardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsOutCardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsOutCardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsOutCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsOutCardReq;

        /**
         * Decodes a LandLordsOutCardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsOutCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsOutCardReq;

        /**
         * Verifies a LandLordsOutCardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsOutCardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsOutCardReq
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsOutCardReq;

        /**
         * Creates a plain object from a LandLordsOutCardReq message. Also converts values to other types if specified.
         * @param message LandLordsOutCardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsOutCardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsOutCardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsOutCardResp. */
    interface ILandLordsOutCardResp {

        /** LandLordsOutCardResp UserID */
        UserID?: (number|Long|null);

        /** LandLordsOutCardResp Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a LandLordsOutCardResp. */
    class LandLordsOutCardResp implements ILandLordsOutCardResp {

        /**
         * Constructs a new LandLordsOutCardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsOutCardResp);

        /** LandLordsOutCardResp UserID. */
        public UserID: (number|Long);

        /** LandLordsOutCardResp Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new LandLordsOutCardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsOutCardResp instance
         */
        public static create(properties?: landLords.ILandLordsOutCardResp): landLords.LandLordsOutCardResp;

        /**
         * Encodes the specified LandLordsOutCardResp message. Does not implicitly {@link landLords.LandLordsOutCardResp.verify|verify} messages.
         * @param message LandLordsOutCardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsOutCardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsOutCardResp message, length delimited. Does not implicitly {@link landLords.LandLordsOutCardResp.verify|verify} messages.
         * @param message LandLordsOutCardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsOutCardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsOutCardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsOutCardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsOutCardResp;

        /**
         * Decodes a LandLordsOutCardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsOutCardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsOutCardResp;

        /**
         * Verifies a LandLordsOutCardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsOutCardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsOutCardResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsOutCardResp;

        /**
         * Creates a plain object from a LandLordsOutCardResp message. Also converts values to other types if specified.
         * @param message LandLordsOutCardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsOutCardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsOutCardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsAward. */
    interface ILandLordsAward {

        /** LandLordsAward UserID */
        UserID?: (number|Long|null);

        /** LandLordsAward RemainCards */
        RemainCards?: (Uint8Array|null);

        /** LandLordsAward GetGold */
        GetGold?: (number|Long|null);
    }

    /** Represents a LandLordsAward. */
    class LandLordsAward implements ILandLordsAward {

        /**
         * Constructs a new LandLordsAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsAward);

        /** LandLordsAward UserID. */
        public UserID: (number|Long);

        /** LandLordsAward RemainCards. */
        public RemainCards: Uint8Array;

        /** LandLordsAward GetGold. */
        public GetGold: (number|Long);

        /**
         * Creates a new LandLordsAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsAward instance
         */
        public static create(properties?: landLords.ILandLordsAward): landLords.LandLordsAward;

        /**
         * Encodes the specified LandLordsAward message. Does not implicitly {@link landLords.LandLordsAward.verify|verify} messages.
         * @param message LandLordsAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsAward message, length delimited. Does not implicitly {@link landLords.LandLordsAward.verify|verify} messages.
         * @param message LandLordsAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsAward;

        /**
         * Decodes a LandLordsAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsAward;

        /**
         * Verifies a LandLordsAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsAward
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsAward;

        /**
         * Creates a plain object from a LandLordsAward message. Also converts values to other types if specified.
         * @param message LandLordsAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsAward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsCheckoutResp. */
    interface ILandLordsCheckoutResp {

        /** LandLordsCheckoutResp players */
        players?: (landLords.ILandLordsAward[]|null);
    }

    /** Represents a LandLordsCheckoutResp. */
    class LandLordsCheckoutResp implements ILandLordsCheckoutResp {

        /**
         * Constructs a new LandLordsCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsCheckoutResp);

        /** LandLordsCheckoutResp players. */
        public players: landLords.ILandLordsAward[];

        /**
         * Creates a new LandLordsCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsCheckoutResp instance
         */
        public static create(properties?: landLords.ILandLordsCheckoutResp): landLords.LandLordsCheckoutResp;

        /**
         * Encodes the specified LandLordsCheckoutResp message. Does not implicitly {@link landLords.LandLordsCheckoutResp.verify|verify} messages.
         * @param message LandLordsCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsCheckoutResp message, length delimited. Does not implicitly {@link landLords.LandLordsCheckoutResp.verify|verify} messages.
         * @param message LandLordsCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsCheckoutResp;

        /**
         * Decodes a LandLordsCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsCheckoutResp;

        /**
         * Verifies a LandLordsCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsCheckoutResp;

        /**
         * Creates a plain object from a LandLordsCheckoutResp message. Also converts values to other types if specified.
         * @param message LandLordsCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
