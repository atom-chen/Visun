import * as $protobuf from "protobufjs";
/** Namespace brcowcow. */
export namespace brcowcow {

    /** Properties of a BrcowcowScene. */
    interface IBrcowcowScene {

        /** BrcowcowScene TimeStamp */
        TimeStamp?: (number|Long|null);

        /** BrcowcowScene Chips */
        Chips?: (number[]|null);

        /** BrcowcowScene AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** BrcowcowScene AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** BrcowcowScene MyBets */
        MyBets?: ((number|Long)[]|null);
    }

    /** Represents a BrcowcowScene. */
    class BrcowcowScene implements IBrcowcowScene {

        /**
         * Constructs a new BrcowcowScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowScene);

        /** BrcowcowScene TimeStamp. */
        public TimeStamp: (number|Long);

        /** BrcowcowScene Chips. */
        public Chips: number[];

        /** BrcowcowScene AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** BrcowcowScene AreaBets. */
        public AreaBets: (number|Long)[];

        /** BrcowcowScene MyBets. */
        public MyBets: (number|Long)[];

        /**
         * Creates a new BrcowcowScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowScene instance
         */
        public static create(properties?: brcowcow.IBrcowcowScene): brcowcow.BrcowcowScene;

        /**
         * Encodes the specified BrcowcowScene message. Does not implicitly {@link brcowcow.BrcowcowScene.verify|verify} messages.
         * @param message BrcowcowScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowScene message, length delimited. Does not implicitly {@link brcowcow.BrcowcowScene.verify|verify} messages.
         * @param message BrcowcowScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowScene;

        /**
         * Decodes a BrcowcowScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowScene;

        /**
         * Verifies a BrcowcowScene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowScene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowScene
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowScene;

        /**
         * Creates a plain object from a BrcowcowScene message. Also converts values to other types if specified.
         * @param message BrcowcowScene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowScene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowScene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStateFree. */
    interface IBrcowcowStateFree {

        /** BrcowcowStateFree Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStateFree. */
    class BrcowcowStateFree implements IBrcowcowStateFree {

        /**
         * Constructs a new BrcowcowStateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStateFree);

        /** BrcowcowStateFree Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStateFree instance
         */
        public static create(properties?: brcowcow.IBrcowcowStateFree): brcowcow.BrcowcowStateFree;

        /**
         * Encodes the specified BrcowcowStateFree message. Does not implicitly {@link brcowcow.BrcowcowStateFree.verify|verify} messages.
         * @param message BrcowcowStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStateFree message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStateFree.verify|verify} messages.
         * @param message BrcowcowStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStateFree;

        /**
         * Decodes a BrcowcowStateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStateFree;

        /**
         * Verifies a BrcowcowStateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStateFree
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStateFree;

        /**
         * Creates a plain object from a BrcowcowStateFree message. Also converts values to other types if specified.
         * @param message BrcowcowStateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStateStart. */
    interface IBrcowcowStateStart {

        /** BrcowcowStateStart Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStateStart. */
    class BrcowcowStateStart implements IBrcowcowStateStart {

        /**
         * Constructs a new BrcowcowStateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStateStart);

        /** BrcowcowStateStart Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStateStart instance
         */
        public static create(properties?: brcowcow.IBrcowcowStateStart): brcowcow.BrcowcowStateStart;

        /**
         * Encodes the specified BrcowcowStateStart message. Does not implicitly {@link brcowcow.BrcowcowStateStart.verify|verify} messages.
         * @param message BrcowcowStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStateStart message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStateStart.verify|verify} messages.
         * @param message BrcowcowStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStateStart;

        /**
         * Decodes a BrcowcowStateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStateStart;

        /**
         * Verifies a BrcowcowStateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStateStart
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStateStart;

        /**
         * Creates a plain object from a BrcowcowStateStart message. Also converts values to other types if specified.
         * @param message BrcowcowStateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStatePlaying. */
    interface IBrcowcowStatePlaying {

        /** BrcowcowStatePlaying Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStatePlaying. */
    class BrcowcowStatePlaying implements IBrcowcowStatePlaying {

        /**
         * Constructs a new BrcowcowStatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStatePlaying);

        /** BrcowcowStatePlaying Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStatePlaying instance
         */
        public static create(properties?: brcowcow.IBrcowcowStatePlaying): brcowcow.BrcowcowStatePlaying;

        /**
         * Encodes the specified BrcowcowStatePlaying message. Does not implicitly {@link brcowcow.BrcowcowStatePlaying.verify|verify} messages.
         * @param message BrcowcowStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStatePlaying message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStatePlaying.verify|verify} messages.
         * @param message BrcowcowStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStatePlaying;

        /**
         * Decodes a BrcowcowStatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStatePlaying;

        /**
         * Verifies a BrcowcowStatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStatePlaying
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStatePlaying;

        /**
         * Creates a plain object from a BrcowcowStatePlaying message. Also converts values to other types if specified.
         * @param message BrcowcowStatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BrcowcowStateOver. */
    interface IBrcowcowStateOver {

        /** BrcowcowStateOver Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BrcowcowStateOver. */
    class BrcowcowStateOver implements IBrcowcowStateOver {

        /**
         * Constructs a new BrcowcowStateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowStateOver);

        /** BrcowcowStateOver Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BrcowcowStateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowStateOver instance
         */
        public static create(properties?: brcowcow.IBrcowcowStateOver): brcowcow.BrcowcowStateOver;

        /**
         * Encodes the specified BrcowcowStateOver message. Does not implicitly {@link brcowcow.BrcowcowStateOver.verify|verify} messages.
         * @param message BrcowcowStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowStateOver message, length delimited. Does not implicitly {@link brcowcow.BrcowcowStateOver.verify|verify} messages.
         * @param message BrcowcowStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowStateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowStateOver;

        /**
         * Decodes a BrcowcowStateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowStateOver;

        /**
         * Verifies a BrcowcowStateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowStateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowStateOver
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowStateOver;

        /**
         * Creates a plain object from a BrcowcowStateOver message. Also converts values to other types if specified.
         * @param message BrcowcowStateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowStateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowStateOver to JSON.
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

    /** Properties of a BrcowcowHost. */
    interface IBrcowcowHost {

        /** BrcowcowHost UserID */
        UserID?: (number|Long|null);

        /** BrcowcowHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BrcowcowHost. */
    class BrcowcowHost implements IBrcowcowHost {

        /**
         * Constructs a new BrcowcowHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: brcowcow.IBrcowcowHost);

        /** BrcowcowHost UserID. */
        public UserID: (number|Long);

        /** BrcowcowHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BrcowcowHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BrcowcowHost instance
         */
        public static create(properties?: brcowcow.IBrcowcowHost): brcowcow.BrcowcowHost;

        /**
         * Encodes the specified BrcowcowHost message. Does not implicitly {@link brcowcow.BrcowcowHost.verify|verify} messages.
         * @param message BrcowcowHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: brcowcow.IBrcowcowHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BrcowcowHost message, length delimited. Does not implicitly {@link brcowcow.BrcowcowHost.verify|verify} messages.
         * @param message BrcowcowHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: brcowcow.IBrcowcowHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BrcowcowHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BrcowcowHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): brcowcow.BrcowcowHost;

        /**
         * Decodes a BrcowcowHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BrcowcowHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): brcowcow.BrcowcowHost;

        /**
         * Verifies a BrcowcowHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BrcowcowHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BrcowcowHost
         */
        public static fromObject(object: { [k: string]: any }): brcowcow.BrcowcowHost;

        /**
         * Creates a plain object from a BrcowcowHost message. Also converts values to other types if specified.
         * @param message BrcowcowHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: brcowcow.BrcowcowHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BrcowcowHost to JSON.
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
