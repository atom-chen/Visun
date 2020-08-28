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

    /** Properties of a LandLordsScene. */
    interface ILandLordsScene {

        /** LandLordsScene TimeStamp */
        TimeStamp?: (number|Long|null);

        /** LandLordsScene Players */
        Players?: (landLords.ILandLordsPlayer[]|null);
    }

    /** Represents a LandLordsScene. */
    class LandLordsScene implements ILandLordsScene {

        /**
         * Constructs a new LandLordsScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsScene);

        /** LandLordsScene TimeStamp. */
        public TimeStamp: (number|Long);

        /** LandLordsScene Players. */
        public Players: landLords.ILandLordsPlayer[];

        /**
         * Creates a new LandLordsScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsScene instance
         */
        public static create(properties?: landLords.ILandLordsScene): landLords.LandLordsScene;

        /**
         * Encodes the specified LandLordsScene message. Does not implicitly {@link landLords.LandLordsScene.verify|verify} messages.
         * @param message LandLordsScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsScene message, length delimited. Does not implicitly {@link landLords.LandLordsScene.verify|verify} messages.
         * @param message LandLordsScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsScene;

        /**
         * Decodes a LandLordsScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsScene;

        /**
         * Verifies a LandLordsScene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsScene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsScene
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsScene;

        /**
         * Creates a plain object from a LandLordsScene message. Also converts values to other types if specified.
         * @param message LandLordsScene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsScene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsScene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateFree. */
    interface ILandLordsStateFree {

        /** LandLordsStateFree Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a LandLordsStateFree. */
    class LandLordsStateFree implements ILandLordsStateFree {

        /**
         * Constructs a new LandLordsStateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateFree);

        /** LandLordsStateFree Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new LandLordsStateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateFree instance
         */
        public static create(properties?: landLords.ILandLordsStateFree): landLords.LandLordsStateFree;

        /**
         * Encodes the specified LandLordsStateFree message. Does not implicitly {@link landLords.LandLordsStateFree.verify|verify} messages.
         * @param message LandLordsStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateFree message, length delimited. Does not implicitly {@link landLords.LandLordsStateFree.verify|verify} messages.
         * @param message LandLordsStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateFree;

        /**
         * Decodes a LandLordsStateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateFree;

        /**
         * Verifies a LandLordsStateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateFree
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateFree;

        /**
         * Creates a plain object from a LandLordsStateFree message. Also converts values to other types if specified.
         * @param message LandLordsStateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateStart. */
    interface ILandLordsStateStart {

        /** LandLordsStateStart Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a LandLordsStateStart. */
    class LandLordsStateStart implements ILandLordsStateStart {

        /**
         * Constructs a new LandLordsStateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateStart);

        /** LandLordsStateStart Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new LandLordsStateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateStart instance
         */
        public static create(properties?: landLords.ILandLordsStateStart): landLords.LandLordsStateStart;

        /**
         * Encodes the specified LandLordsStateStart message. Does not implicitly {@link landLords.LandLordsStateStart.verify|verify} messages.
         * @param message LandLordsStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateStart message, length delimited. Does not implicitly {@link landLords.LandLordsStateStart.verify|verify} messages.
         * @param message LandLordsStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateStart;

        /**
         * Decodes a LandLordsStateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateStart;

        /**
         * Verifies a LandLordsStateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateStart
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateStart;

        /**
         * Creates a plain object from a LandLordsStateStart message. Also converts values to other types if specified.
         * @param message LandLordsStateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateCall. */
    interface ILandLordsStateCall {

        /** LandLordsStateCall Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStateCall UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a LandLordsStateCall. */
    class LandLordsStateCall implements ILandLordsStateCall {

        /**
         * Constructs a new LandLordsStateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateCall);

        /** LandLordsStateCall Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStateCall UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new LandLordsStateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateCall instance
         */
        public static create(properties?: landLords.ILandLordsStateCall): landLords.LandLordsStateCall;

        /**
         * Encodes the specified LandLordsStateCall message. Does not implicitly {@link landLords.LandLordsStateCall.verify|verify} messages.
         * @param message LandLordsStateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateCall message, length delimited. Does not implicitly {@link landLords.LandLordsStateCall.verify|verify} messages.
         * @param message LandLordsStateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateCall;

        /**
         * Decodes a LandLordsStateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateCall;

        /**
         * Verifies a LandLordsStateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateCall
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateCall;

        /**
         * Creates a plain object from a LandLordsStateCall message. Also converts values to other types if specified.
         * @param message LandLordsStateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStatePlaying. */
    interface ILandLordsStatePlaying {

        /** LandLordsStatePlaying Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStatePlaying LastChairID */
        LastChairID?: (number|null);

        /** LandLordsStatePlaying LastCards */
        LastCards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a LandLordsStatePlaying. */
    class LandLordsStatePlaying implements ILandLordsStatePlaying {

        /**
         * Constructs a new LandLordsStatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStatePlaying);

        /** LandLordsStatePlaying Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** LandLordsStatePlaying LastChairID. */
        public LastChairID: number;

        /** LandLordsStatePlaying LastCards. */
        public LastCards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new LandLordsStatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStatePlaying instance
         */
        public static create(properties?: landLords.ILandLordsStatePlaying): landLords.LandLordsStatePlaying;

        /**
         * Encodes the specified LandLordsStatePlaying message. Does not implicitly {@link landLords.LandLordsStatePlaying.verify|verify} messages.
         * @param message LandLordsStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStatePlaying message, length delimited. Does not implicitly {@link landLords.LandLordsStatePlaying.verify|verify} messages.
         * @param message LandLordsStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStatePlaying;

        /**
         * Decodes a LandLordsStatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStatePlaying;

        /**
         * Verifies a LandLordsStatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStatePlaying
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStatePlaying;

        /**
         * Creates a plain object from a LandLordsStatePlaying message. Also converts values to other types if specified.
         * @param message LandLordsStatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandLordsStateOver. */
    interface ILandLordsStateOver {

        /** LandLordsStateOver Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a LandLordsStateOver. */
    class LandLordsStateOver implements ILandLordsStateOver {

        /**
         * Constructs a new LandLordsStateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.ILandLordsStateOver);

        /** LandLordsStateOver Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new LandLordsStateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandLordsStateOver instance
         */
        public static create(properties?: landLords.ILandLordsStateOver): landLords.LandLordsStateOver;

        /**
         * Encodes the specified LandLordsStateOver message. Does not implicitly {@link landLords.LandLordsStateOver.verify|verify} messages.
         * @param message LandLordsStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.ILandLordsStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandLordsStateOver message, length delimited. Does not implicitly {@link landLords.LandLordsStateOver.verify|verify} messages.
         * @param message LandLordsStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.ILandLordsStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandLordsStateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandLordsStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.LandLordsStateOver;

        /**
         * Decodes a LandLordsStateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandLordsStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.LandLordsStateOver;

        /**
         * Verifies a LandLordsStateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandLordsStateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandLordsStateOver
         */
        public static fromObject(object: { [k: string]: any }): landLords.LandLordsStateOver;

        /**
         * Creates a plain object from a LandLordsStateOver message. Also converts values to other types if specified.
         * @param message LandLordsStateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.LandLordsStateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandLordsStateOver to JSON.
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

/** Namespace gamecomm. */
export namespace gamecomm {

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

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo Cards */
        Cards?: (Uint8Array|null);

        /** CardInfo CardType */
        CardType?: (number|null);

        /** CardInfo CardValue */
        CardValue?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICardInfo);

        /** CardInfo Cards. */
        public Cards: Uint8Array;

        /** CardInfo CardType. */
        public CardType: number;

        /** CardInfo CardValue. */
        public CardValue: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: gamecomm.ICardInfo): gamecomm.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.CardInfo;

        /**
         * Creates a plain object from a CardInfo message. Also converts values to other types if specified.
         * @param message CardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.CardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeInfo. */
    interface ITimeInfo {

        /** TimeInfo TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TimeInfo WaitTime */
        WaitTime?: (number|null);

        /** TimeInfo OutTime */
        OutTime?: (number|null);

        /** TimeInfo TotalTime */
        TotalTime?: (number|null);
    }

    /** Represents a TimeInfo. */
    class TimeInfo implements ITimeInfo {

        /**
         * Constructs a new TimeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ITimeInfo);

        /** TimeInfo TimeStamp. */
        public TimeStamp: (number|Long);

        /** TimeInfo WaitTime. */
        public WaitTime: number;

        /** TimeInfo OutTime. */
        public OutTime: number;

        /** TimeInfo TotalTime. */
        public TotalTime: number;

        /**
         * Creates a new TimeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeInfo instance
         */
        public static create(properties?: gamecomm.ITimeInfo): gamecomm.TimeInfo;

        /**
         * Encodes the specified TimeInfo message. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeInfo message, length delimited. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.TimeInfo;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.TimeInfo;

        /**
         * Verifies a TimeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.TimeInfo;

        /**
         * Creates a plain object from a TimeInfo message. Also converts values to other types if specified.
         * @param message TimeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.TimeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AreaInfo. */
    interface IAreaInfo {

        /** AreaInfo ID */
        ID?: (number|null);

        /** AreaInfo MyGold */
        MyGold?: (number|Long|null);

        /** AreaInfo TotalGold */
        TotalGold?: (number|Long|null);

        /** AreaInfo AcquireGold */
        AcquireGold?: (number|Long|null);
    }

    /** Represents an AreaInfo. */
    class AreaInfo implements IAreaInfo {

        /**
         * Constructs a new AreaInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IAreaInfo);

        /** AreaInfo ID. */
        public ID: number;

        /** AreaInfo MyGold. */
        public MyGold: (number|Long);

        /** AreaInfo TotalGold. */
        public TotalGold: (number|Long);

        /** AreaInfo AcquireGold. */
        public AcquireGold: (number|Long);

        /**
         * Creates a new AreaInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AreaInfo instance
         */
        public static create(properties?: gamecomm.IAreaInfo): gamecomm.AreaInfo;

        /**
         * Encodes the specified AreaInfo message. Does not implicitly {@link gamecomm.AreaInfo.verify|verify} messages.
         * @param message AreaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AreaInfo message, length delimited. Does not implicitly {@link gamecomm.AreaInfo.verify|verify} messages.
         * @param message AreaInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AreaInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AreaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.AreaInfo;

        /**
         * Decodes an AreaInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AreaInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.AreaInfo;

        /**
         * Verifies an AreaInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AreaInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AreaInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.AreaInfo;

        /**
         * Creates a plain object from an AreaInfo message. Also converts values to other types if specified.
         * @param message AreaInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.AreaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AreaInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserListInfo. */
    interface IUserListInfo {

        /** UserListInfo AllInfos */
        AllInfos?: (gamecomm.IPlayerInfo[]|null);
    }

    /** Represents a UserListInfo. */
    class UserListInfo implements IUserListInfo {

        /**
         * Constructs a new UserListInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IUserListInfo);

        /** UserListInfo AllInfos. */
        public AllInfos: gamecomm.IPlayerInfo[];

        /**
         * Creates a new UserListInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserListInfo instance
         */
        public static create(properties?: gamecomm.IUserListInfo): gamecomm.UserListInfo;

        /**
         * Encodes the specified UserListInfo message. Does not implicitly {@link gamecomm.UserListInfo.verify|verify} messages.
         * @param message UserListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IUserListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserListInfo message, length delimited. Does not implicitly {@link gamecomm.UserListInfo.verify|verify} messages.
         * @param message UserListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IUserListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserListInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.UserListInfo;

        /**
         * Decodes a UserListInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.UserListInfo;

        /**
         * Verifies a UserListInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserListInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserListInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.UserListInfo;

        /**
         * Creates a plain object from a UserListInfo message. Also converts values to other types if specified.
         * @param message UserListInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.UserListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserListInfo to JSON.
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
        Bankroll?: (number|Long|null);

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
        public Bankroll: (number|Long);

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

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord card */
        card?: (gamecomm.ICardInfo|null);

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

        /** GameRecord card. */
        public card?: (gamecomm.ICardInfo|null);

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

    /** Properties of a BeOut. */
    interface IBeOut {

        /** BeOut UserID */
        UserID?: (number|Long|null);

        /** BeOut GameID */
        GameID?: (number|null);

        /** BeOut Code */
        Code?: (number|null);

        /** BeOut Hints */
        Hints?: (string|null);
    }

    /** Represents a BeOut. */
    class BeOut implements IBeOut {

        /**
         * Constructs a new BeOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBeOut);

        /** BeOut UserID. */
        public UserID: (number|Long);

        /** BeOut GameID. */
        public GameID: number;

        /** BeOut Code. */
        public Code: number;

        /** BeOut Hints. */
        public Hints: string;

        /**
         * Creates a new BeOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeOut instance
         */
        public static create(properties?: gamecomm.IBeOut): gamecomm.BeOut;

        /**
         * Encodes the specified BeOut message. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeOut message, length delimited. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BeOut;

        /**
         * Decodes a BeOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BeOut;

        /**
         * Verifies a BeOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeOut
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BeOut;

        /**
         * Creates a plain object from a BeOut message. Also converts values to other types if specified.
         * @param message BeOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BeOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeOut to JSON.
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

        /** NotifyChangeGold AlterGold */
        AlterGold?: (number|Long|null);

        /** NotifyChangeGold Code */
        Code?: (number|null);

        /** NotifyChangeGold Reason */
        Reason?: (string|null);
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

        /** NotifyChangeGold AlterGold. */
        public AlterGold: (number|Long);

        /** NotifyChangeGold Code. */
        public Code: number;

        /** NotifyChangeGold Reason. */
        public Reason: string;

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
}
