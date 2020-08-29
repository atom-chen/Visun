import * as $protobuf from "protobufjs";
/** Namespace brcowcow. */
export namespace brcowcow {

    /** Properties of a BrcowcowSceneResp. */
    interface IBrcowcowSceneResp {

        /** BrcowcowSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** BrcowcowSceneResp Chips */
        Chips?: (number[]|null);

        /** BrcowcowSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** BrcowcowSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** BrcowcowSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);
    }

    /** Represents a BrcowcowSceneResp. */
    class BrcowcowSceneResp implements IBrcowcowSceneResp {

        /**
         * Constructs a new BrcowcowSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowSceneResp);

        /** BrcowcowSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** BrcowcowSceneResp Chips. */
        public Chips: number[];

        /** BrcowcowSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** BrcowcowSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** BrcowcowSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /**
         * Creates a new BrcowcowSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowSceneResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowSceneResp): brcowcow.BrcowcowSceneResp;

        /**
         * Encodes the specified BrcowcowSceneResp message. Does not implicitly {@link brcowcow.BrcowcowSceneResp.verify|verify} messages.
         * @param message BrcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowSceneResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowSceneResp.verify|verify} messages.
         * @param message BrcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowSceneResp;

        /**
         * Decodes a BrcowcowSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowSceneResp;

        /**
         * Verifies a BrcowcowSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowSceneResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowSceneResp;

        /**
         * Creates a plain object from a BrcowcowSceneResp message. Also converts values to other types if specified.
         * @param message BrcowcowSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStateFreeResp. */
    interface IBrcowcowStateFreeResp {

        /** BrcowcowStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStateFreeResp. */
    class BrcowcowStateFreeResp implements IBrcowcowStateFreeResp {

        /**
         * Constructs a new BrcowcowStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStateFreeResp);

        /** BrcowcowStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStateFreeResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowStateFreeResp): brcowcow.BrcowcowStateFreeResp;

        /**
         * Encodes the specified BrcowcowStateFreeResp message. Does not implicitly {@link brcowcow.BrcowcowStateFreeResp.verify|verify} messages.
         * @param message BrcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStateFreeResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStateFreeResp.verify|verify} messages.
         * @param message BrcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStateFreeResp;

        /**
         * Decodes a BrcowcowStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStateFreeResp;

        /**
         * Verifies a BrcowcowStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStateFreeResp;

        /**
         * Creates a plain object from a BrcowcowStateFreeResp message. Also converts values to other types if specified.
         * @param message BrcowcowStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStateStartResp. */
    interface IBrcowcowStateStartResp {

        /** BrcowcowStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStateStartResp. */
    class BrcowcowStateStartResp implements IBrcowcowStateStartResp {

        /**
         * Constructs a new BrcowcowStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStateStartResp);

        /** BrcowcowStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStateStartResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowStateStartResp): brcowcow.BrcowcowStateStartResp;

        /**
         * Encodes the specified BrcowcowStateStartResp message. Does not implicitly {@link brcowcow.BrcowcowStateStartResp.verify|verify} messages.
         * @param message BrcowcowStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStateStartResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStateStartResp.verify|verify} messages.
         * @param message BrcowcowStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStateStartResp;

        /**
         * Decodes a BrcowcowStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStateStartResp;

        /**
         * Verifies a BrcowcowStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStateStartResp;

        /**
         * Creates a plain object from a BrcowcowStateStartResp message. Also converts values to other types if specified.
         * @param message BrcowcowStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStatePlayingResp. */
    interface IBrcowcowStatePlayingResp {

        /** BrcowcowStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStatePlayingResp. */
    class BrcowcowStatePlayingResp implements IBrcowcowStatePlayingResp {

        /**
         * Constructs a new BrcowcowStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStatePlayingResp);

        /** BrcowcowStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStatePlayingResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowStatePlayingResp): brcowcow.BrcowcowStatePlayingResp;

        /**
         * Encodes the specified BrcowcowStatePlayingResp message. Does not implicitly {@link brcowcow.BrcowcowStatePlayingResp.verify|verify} messages.
         * @param message BrcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStatePlayingResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStatePlayingResp.verify|verify} messages.
         * @param message BrcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStatePlayingResp;

        /**
         * Decodes a BrcowcowStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStatePlayingResp;

        /**
         * Verifies a BrcowcowStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStatePlayingResp;

        /**
         * Creates a plain object from a BrcowcowStatePlayingResp message. Also converts values to other types if specified.
         * @param message BrcowcowStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStateOverResp. */
    interface IBrcowcowStateOverResp {

        /** BrcowcowStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStateOverResp. */
    class BrcowcowStateOverResp implements IBrcowcowStateOverResp {

        /**
         * Constructs a new BrcowcowStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStateOverResp);

        /** BrcowcowStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStateOverResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowStateOverResp): brcowcow.BrcowcowStateOverResp;

        /**
         * Encodes the specified BrcowcowStateOverResp message. Does not implicitly {@link brcowcow.BrcowcowStateOverResp.verify|verify} messages.
         * @param message BrcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStateOverResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStateOverResp.verify|verify} messages.
         * @param message BrcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStateOverResp;

        /**
         * Decodes a BrcowcowStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStateOverResp;

        /**
         * Verifies a BrcowcowStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStateOverResp;

        /**
         * Creates a plain object from a BrcowcowStateOverResp message. Also converts values to other types if specified.
         * @param message BrcowcowStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowBetReq. */
    interface IBrcowcowBetReq {

        /** BrcowcowBetReq Area */
        Area?: (number|null);

        /** BrcowcowBetReq Money */
        Money?: (number|Long|null);
    }

    /** Represents a BrcowcowBetReq. */
    class BrcowcowBetReq implements IBrcowcowBetReq {

        /**
         * Constructs a new BrcowcowBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowBetReq);

        /** BrcowcowBetReq Area. */
        public Area: number;

        /** BrcowcowBetReq Money. */
        public Money: (number|Long);

        /**
         * Creates a new BrcowcowBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowBetReq instance
         */
        public static create(properties?: brcowcow.IBrcowcowBetReq): brcowcow.BrcowcowBetReq;

        /**
         * Encodes the specified BrcowcowBetReq message. Does not implicitly {@link brcowcow.BrcowcowBetReq.verify|verify} messages.
         * @param message BrcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowBetReq message, length delimited. Does not implicitly {@link brcowcow.BrcowcowBetReq.verify|verify} messages.
         * @param message BrcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowBetReq;

        /**
         * Decodes a BrcowcowBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowBetReq;

        /**
         * Verifies a BrcowcowBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowBetReq
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowBetReq;

        /**
         * Creates a plain object from a BrcowcowBetReq message. Also converts values to other types if specified.
         * @param message BrcowcowBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowBetResp. */
    interface IBrcowcowBetResp {

        /** BrcowcowBetResp UserId */
        UserId?: (number|Long|null);

        /** BrcowcowBetResp Area */
        Area?: (number|null);

        /** BrcowcowBetResp Money */
        Money?: (number|Long|null);
    }

    /** Represents a BrcowcowBetResp. */
    class BrcowcowBetResp implements IBrcowcowBetResp {

        /**
         * Constructs a new BrcowcowBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowBetResp);

        /** BrcowcowBetResp UserId. */
        public UserId: (number|Long);

        /** BrcowcowBetResp Area. */
        public Area: number;

        /** BrcowcowBetResp Money. */
        public Money: (number|Long);

        /**
         * Creates a new BrcowcowBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowBetResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowBetResp): brcowcow.BrcowcowBetResp;

        /**
         * Encodes the specified BrcowcowBetResp message. Does not implicitly {@link brcowcow.BrcowcowBetResp.verify|verify} messages.
         * @param message BrcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowBetResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowBetResp.verify|verify} messages.
         * @param message BrcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowBetResp;

        /**
         * Decodes a BrcowcowBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowBetResp;

        /**
         * Verifies a BrcowcowBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowBetResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowBetResp;

        /**
         * Creates a plain object from a BrcowcowBetResp message. Also converts values to other types if specified.
         * @param message BrcowcowBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowOverResp. */
    interface IBrcowcowOverResp {

        /** BrcowcowOverResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** BrcowcowOverResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp TianCard */
        TianCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp XuanCard */
        XuanCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp DiCard */
        DiCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp HuangCard */
        HuangCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a BrcowcowOverResp. */
    class BrcowcowOverResp implements IBrcowcowOverResp {

        /**
         * Constructs a new BrcowcowOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowOverResp);

        /** BrcowcowOverResp AwardArea. */
        public AwardArea: Uint8Array;

        /** BrcowcowOverResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp TianCard. */
        public TianCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp XuanCard. */
        public XuanCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp DiCard. */
        public DiCard?: (gamecomm.ICardInfo|null);

        /** BrcowcowOverResp HuangCard. */
        public HuangCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new BrcowcowOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowOverResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowOverResp): brcowcow.BrcowcowOverResp;

        /**
         * Encodes the specified BrcowcowOverResp message. Does not implicitly {@link brcowcow.BrcowcowOverResp.verify|verify} messages.
         * @param message BrcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowOverResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowOverResp.verify|verify} messages.
         * @param message BrcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowOverResp;

        /**
         * Decodes a BrcowcowOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowOverResp;

        /**
         * Verifies a BrcowcowOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowOverResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowOverResp;

        /**
         * Creates a plain object from a BrcowcowOverResp message. Also converts values to other types if specified.
         * @param message BrcowcowOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowCheckoutResp. */
    interface IBrcowcowCheckoutResp {

        /** BrcowcowCheckoutResp MySettlement */
        MySettlement?: (number|Long|null);

        /** BrcowcowCheckoutResp TotalSettlement */
        TotalSettlement?: ((number|Long)[]|null);
    }

    /** Represents a BrcowcowCheckoutResp. */
    class BrcowcowCheckoutResp implements IBrcowcowCheckoutResp {

        /**
         * Constructs a new BrcowcowCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowCheckoutResp);

        /** BrcowcowCheckoutResp MySettlement. */
        public MySettlement: (number|Long);

        /** BrcowcowCheckoutResp TotalSettlement. */
        public TotalSettlement: (number|Long)[];

        /**
         * Creates a new BrcowcowCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowCheckoutResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowCheckoutResp): brcowcow.BrcowcowCheckoutResp;

        /**
         * Encodes the specified BrcowcowCheckoutResp message. Does not implicitly {@link brcowcow.BrcowcowCheckoutResp.verify|verify} messages.
         * @param message BrcowcowCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowCheckoutResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowCheckoutResp.verify|verify} messages.
         * @param message BrcowcowCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowCheckoutResp;

        /**
         * Decodes a BrcowcowCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowCheckoutResp;

        /**
         * Verifies a BrcowcowCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowCheckoutResp;

        /**
         * Creates a plain object from a BrcowcowCheckoutResp message. Also converts values to other types if specified.
         * @param message BrcowcowCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowHostReq. */
    interface IBrcowcowHostReq {

        /** BrcowcowHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrcowcowHostReq. */
    class BrcowcowHostReq implements IBrcowcowHostReq {

        /**
         * Constructs a new BrcowcowHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowHostReq);

        /** BrcowcowHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrcowcowHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowHostReq instance
         */
        public static create(properties?: brcowcow.IBrcowcowHostReq): brcowcow.BrcowcowHostReq;

        /**
         * Encodes the specified BrcowcowHostReq message. Does not implicitly {@link brcowcow.BrcowcowHostReq.verify|verify} messages.
         * @param message BrcowcowHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowHostReq message, length delimited. Does not implicitly {@link brcowcow.BrcowcowHostReq.verify|verify} messages.
         * @param message BrcowcowHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowHostReq;

        /**
         * Decodes a BrcowcowHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowHostReq;

        /**
         * Verifies a BrcowcowHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowHostReq
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowHostReq;

        /**
         * Creates a plain object from a BrcowcowHostReq message. Also converts values to other types if specified.
         * @param message BrcowcowHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowHostResp. */
    interface IBrcowcowHostResp {

        /** BrcowcowHostResp UserID */
        UserID?: (number|Long|null);

        /** BrcowcowHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrcowcowHostResp. */
    class BrcowcowHostResp implements IBrcowcowHostResp {

        /**
         * Constructs a new BrcowcowHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowHostResp);

        /** BrcowcowHostResp UserID. */
        public UserID: (number|Long);

        /** BrcowcowHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrcowcowHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowHostResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowHostResp): brcowcow.BrcowcowHostResp;

        /**
         * Encodes the specified BrcowcowHostResp message. Does not implicitly {@link brcowcow.BrcowcowHostResp.verify|verify} messages.
         * @param message BrcowcowHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowHostResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowHostResp.verify|verify} messages.
         * @param message BrcowcowHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowHostResp;

        /**
         * Decodes a BrcowcowHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowHostResp;

        /**
         * Verifies a BrcowcowHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowHostResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowHostResp;

        /**
         * Creates a plain object from a BrcowcowHostResp message. Also converts values to other types if specified.
         * @param message BrcowcowHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowHostListReq. */
    interface IBrcowcowHostListReq {
    }

    /** Represents a BrcowcowHostListReq. */
    class BrcowcowHostListReq implements IBrcowcowHostListReq {

        /**
         * Constructs a new BrcowcowHostListReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowHostListReq);

        /**
         * Creates a new BrcowcowHostListReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowHostListReq instance
         */
        public static create(properties?: brcowcow.IBrcowcowHostListReq): brcowcow.BrcowcowHostListReq;

        /**
         * Encodes the specified BrcowcowHostListReq message. Does not implicitly {@link brcowcow.BrcowcowHostListReq.verify|verify} messages.
         * @param message BrcowcowHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowHostListReq message, length delimited. Does not implicitly {@link brcowcow.BrcowcowHostListReq.verify|verify} messages.
         * @param message BrcowcowHostListReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowHostListReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowHostListReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowHostListReq;

        /**
         * Decodes a BrcowcowHostListReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowHostListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowHostListReq;

        /**
         * Verifies a BrcowcowHostListReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowHostListReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowHostListReq
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowHostListReq;

        /**
         * Creates a plain object from a BrcowcowHostListReq message. Also converts values to other types if specified.
         * @param message BrcowcowHostListReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowHostListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowHostListReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowHostListResp. */
    interface IBrcowcowHostListResp {

        /** BrcowcowHostListResp CurHost */
        CurHost?: (gamecomm.IPlayerInfo|null);

        /** BrcowcowHostListResp Waitlist */
        Waitlist?: ((number|Long)[]|null);
    }

    /** Represents a BrcowcowHostListResp. */
    class BrcowcowHostListResp implements IBrcowcowHostListResp {

        /**
         * Constructs a new BrcowcowHostListResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowHostListResp);

        /** BrcowcowHostListResp CurHost. */
        public CurHost?: (gamecomm.IPlayerInfo|null);

        /** BrcowcowHostListResp Waitlist. */
        public Waitlist: (number|Long)[];

        /**
         * Creates a new BrcowcowHostListResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowHostListResp instance
         */
        public static create(properties?: brcowcow.IBrcowcowHostListResp): brcowcow.BrcowcowHostListResp;

        /**
         * Encodes the specified BrcowcowHostListResp message. Does not implicitly {@link brcowcow.BrcowcowHostListResp.verify|verify} messages.
         * @param message BrcowcowHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowHostListResp message, length delimited. Does not implicitly {@link brcowcow.BrcowcowHostListResp.verify|verify} messages.
         * @param message BrcowcowHostListResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowHostListResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowHostListResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowHostListResp;

        /**
         * Decodes a BrcowcowHostListResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowHostListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowHostListResp;

        /**
         * Verifies a BrcowcowHostListResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowHostListResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowHostListResp
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowHostListResp;

        /**
         * Creates a plain object from a BrcowcowHostListResp message. Also converts values to other types if specified.
         * @param message BrcowcowHostListResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowHostListResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowHostListResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
