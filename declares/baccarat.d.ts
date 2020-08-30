import * as $protobuf from "protobufjs";
/** Namespace baccarat. */
export namespace baccarat {

    /** Properties of a BaccaratSceneResp. */
    interface IBaccaratSceneResp {

        /** BaccaratSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** BaccaratSceneResp Chips */
        Chips?: (number[]|null);

        /** BaccaratSceneResp AwardAreas */
        AwardAreas?: (Uint8Array[]|null);

        /** BaccaratSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** BaccaratSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);
    }

    /** Represents a BaccaratSceneResp. */
    class BaccaratSceneResp implements IBaccaratSceneResp {

        /**
         * Constructs a new BaccaratSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratSceneResp);

        /** BaccaratSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** BaccaratSceneResp Chips. */
        public Chips: number[];

        /** BaccaratSceneResp AwardAreas. */
        public AwardAreas: Uint8Array[];

        /** BaccaratSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** BaccaratSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /**
         * Creates a new BaccaratSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratSceneResp instance
         */
        public static create(properties?: baccarat.IBaccaratSceneResp): baccarat.BaccaratSceneResp;

        /**
         * Encodes the specified BaccaratSceneResp message. Does not implicitly {@link baccarat.BaccaratSceneResp.verify|verify} messages.
         * @param message BaccaratSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratSceneResp message, length delimited. Does not implicitly {@link baccarat.BaccaratSceneResp.verify|verify} messages.
         * @param message BaccaratSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratSceneResp;

        /**
         * Decodes a BaccaratSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratSceneResp;

        /**
         * Verifies a BaccaratSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratSceneResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratSceneResp;

        /**
         * Creates a plain object from a BaccaratSceneResp message. Also converts values to other types if specified.
         * @param message BaccaratSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStateStartResp. */
    interface IBaccaratStateStartResp {

        /** BaccaratStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStateStartResp. */
    class BaccaratStateStartResp implements IBaccaratStateStartResp {

        /**
         * Constructs a new BaccaratStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStateStartResp);

        /** BaccaratStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStateStartResp instance
         */
        public static create(properties?: baccarat.IBaccaratStateStartResp): baccarat.BaccaratStateStartResp;

        /**
         * Encodes the specified BaccaratStateStartResp message. Does not implicitly {@link baccarat.BaccaratStateStartResp.verify|verify} messages.
         * @param message BaccaratStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStateStartResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStateStartResp.verify|verify} messages.
         * @param message BaccaratStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStateStartResp;

        /**
         * Decodes a BaccaratStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStateStartResp;

        /**
         * Verifies a BaccaratStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStateStartResp;

        /**
         * Creates a plain object from a BaccaratStateStartResp message. Also converts values to other types if specified.
         * @param message BaccaratStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStatePlayingResp. */
    interface IBaccaratStatePlayingResp {

        /** BaccaratStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStatePlayingResp. */
    class BaccaratStatePlayingResp implements IBaccaratStatePlayingResp {

        /**
         * Constructs a new BaccaratStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStatePlayingResp);

        /** BaccaratStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStatePlayingResp instance
         */
        public static create(properties?: baccarat.IBaccaratStatePlayingResp): baccarat.BaccaratStatePlayingResp;

        /**
         * Encodes the specified BaccaratStatePlayingResp message. Does not implicitly {@link baccarat.BaccaratStatePlayingResp.verify|verify} messages.
         * @param message BaccaratStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStatePlayingResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStatePlayingResp.verify|verify} messages.
         * @param message BaccaratStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStatePlayingResp;

        /**
         * Decodes a BaccaratStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStatePlayingResp;

        /**
         * Verifies a BaccaratStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStatePlayingResp;

        /**
         * Creates a plain object from a BaccaratStatePlayingResp message. Also converts values to other types if specified.
         * @param message BaccaratStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStateOpenResp. */
    interface IBaccaratStateOpenResp {

        /** BaccaratStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStateOpenResp. */
    class BaccaratStateOpenResp implements IBaccaratStateOpenResp {

        /**
         * Constructs a new BaccaratStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStateOpenResp);

        /** BaccaratStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStateOpenResp instance
         */
        public static create(properties?: baccarat.IBaccaratStateOpenResp): baccarat.BaccaratStateOpenResp;

        /**
         * Encodes the specified BaccaratStateOpenResp message. Does not implicitly {@link baccarat.BaccaratStateOpenResp.verify|verify} messages.
         * @param message BaccaratStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStateOpenResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStateOpenResp.verify|verify} messages.
         * @param message BaccaratStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStateOpenResp;

        /**
         * Decodes a BaccaratStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStateOpenResp;

        /**
         * Verifies a BaccaratStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStateOpenResp;

        /**
         * Creates a plain object from a BaccaratStateOpenResp message. Also converts values to other types if specified.
         * @param message BaccaratStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratStateOverResp. */
    interface IBaccaratStateOverResp {

        /** BaccaratStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a BaccaratStateOverResp. */
    class BaccaratStateOverResp implements IBaccaratStateOverResp {

        /**
         * Constructs a new BaccaratStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratStateOverResp);

        /** BaccaratStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new BaccaratStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratStateOverResp instance
         */
        public static create(properties?: baccarat.IBaccaratStateOverResp): baccarat.BaccaratStateOverResp;

        /**
         * Encodes the specified BaccaratStateOverResp message. Does not implicitly {@link baccarat.BaccaratStateOverResp.verify|verify} messages.
         * @param message BaccaratStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratStateOverResp message, length delimited. Does not implicitly {@link baccarat.BaccaratStateOverResp.verify|verify} messages.
         * @param message BaccaratStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratStateOverResp;

        /**
         * Decodes a BaccaratStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratStateOverResp;

        /**
         * Verifies a BaccaratStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratStateOverResp;

        /**
         * Creates a plain object from a BaccaratStateOverResp message. Also converts values to other types if specified.
         * @param message BaccaratStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratHostReq. */
    interface IBaccaratHostReq {

        /** BaccaratHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratHostReq. */
    class BaccaratHostReq implements IBaccaratHostReq {

        /**
         * Constructs a new BaccaratHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratHostReq);

        /** BaccaratHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratHostReq instance
         */
        public static create(properties?: baccarat.IBaccaratHostReq): baccarat.BaccaratHostReq;

        /**
         * Encodes the specified BaccaratHostReq message. Does not implicitly {@link baccarat.BaccaratHostReq.verify|verify} messages.
         * @param message BaccaratHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratHostReq message, length delimited. Does not implicitly {@link baccarat.BaccaratHostReq.verify|verify} messages.
         * @param message BaccaratHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratHostReq;

        /**
         * Decodes a BaccaratHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratHostReq;

        /**
         * Verifies a BaccaratHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratHostReq
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratHostReq;

        /**
         * Creates a plain object from a BaccaratHostReq message. Also converts values to other types if specified.
         * @param message BaccaratHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratHostResp. */
    interface IBaccaratHostResp {

        /** BaccaratHostResp UserID */
        UserID?: (number|Long|null);

        /** BaccaratHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratHostResp. */
    class BaccaratHostResp implements IBaccaratHostResp {

        /**
         * Constructs a new BaccaratHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratHostResp);

        /** BaccaratHostResp UserID. */
        public UserID: (number|Long);

        /** BaccaratHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratHostResp instance
         */
        public static create(properties?: baccarat.IBaccaratHostResp): baccarat.BaccaratHostResp;

        /**
         * Encodes the specified BaccaratHostResp message. Does not implicitly {@link baccarat.BaccaratHostResp.verify|verify} messages.
         * @param message BaccaratHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratHostResp message, length delimited. Does not implicitly {@link baccarat.BaccaratHostResp.verify|verify} messages.
         * @param message BaccaratHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratHostResp;

        /**
         * Decodes a BaccaratHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratHostResp;

        /**
         * Verifies a BaccaratHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratHostResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratHostResp;

        /**
         * Creates a plain object from a BaccaratHostResp message. Also converts values to other types if specified.
         * @param message BaccaratHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratSuperHostReq. */
    interface IBaccaratSuperHostReq {

        /** BaccaratSuperHostReq IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratSuperHostReq. */
    class BaccaratSuperHostReq implements IBaccaratSuperHostReq {

        /**
         * Constructs a new BaccaratSuperHostReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratSuperHostReq);

        /** BaccaratSuperHostReq IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratSuperHostReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratSuperHostReq instance
         */
        public static create(properties?: baccarat.IBaccaratSuperHostReq): baccarat.BaccaratSuperHostReq;

        /**
         * Encodes the specified BaccaratSuperHostReq message. Does not implicitly {@link baccarat.BaccaratSuperHostReq.verify|verify} messages.
         * @param message BaccaratSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratSuperHostReq message, length delimited. Does not implicitly {@link baccarat.BaccaratSuperHostReq.verify|verify} messages.
         * @param message BaccaratSuperHostReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratSuperHostReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratSuperHostReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratSuperHostReq;

        /**
         * Decodes a BaccaratSuperHostReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratSuperHostReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratSuperHostReq;

        /**
         * Verifies a BaccaratSuperHostReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratSuperHostReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratSuperHostReq
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratSuperHostReq;

        /**
         * Creates a plain object from a BaccaratSuperHostReq message. Also converts values to other types if specified.
         * @param message BaccaratSuperHostReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratSuperHostReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratSuperHostReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratSuperHostResp. */
    interface IBaccaratSuperHostResp {

        /** BaccaratSuperHostResp UserID */
        UserID?: (number|Long|null);

        /** BaccaratSuperHostResp IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a BaccaratSuperHostResp. */
    class BaccaratSuperHostResp implements IBaccaratSuperHostResp {

        /**
         * Constructs a new BaccaratSuperHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratSuperHostResp);

        /** BaccaratSuperHostResp UserID. */
        public UserID: (number|Long);

        /** BaccaratSuperHostResp IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new BaccaratSuperHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratSuperHostResp instance
         */
        public static create(properties?: baccarat.IBaccaratSuperHostResp): baccarat.BaccaratSuperHostResp;

        /**
         * Encodes the specified BaccaratSuperHostResp message. Does not implicitly {@link baccarat.BaccaratSuperHostResp.verify|verify} messages.
         * @param message BaccaratSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratSuperHostResp message, length delimited. Does not implicitly {@link baccarat.BaccaratSuperHostResp.verify|verify} messages.
         * @param message BaccaratSuperHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratSuperHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratSuperHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratSuperHostResp;

        /**
         * Decodes a BaccaratSuperHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratSuperHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratSuperHostResp;

        /**
         * Verifies a BaccaratSuperHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratSuperHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratSuperHostResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratSuperHostResp;

        /**
         * Creates a plain object from a BaccaratSuperHostResp message. Also converts values to other types if specified.
         * @param message BaccaratSuperHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratSuperHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratSuperHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratBetReq. */
    interface IBaccaratBetReq {

        /** BaccaratBetReq BetArea */
        BetArea?: (number|null);

        /** BaccaratBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a BaccaratBetReq. */
    class BaccaratBetReq implements IBaccaratBetReq {

        /**
         * Constructs a new BaccaratBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratBetReq);

        /** BaccaratBetReq BetArea. */
        public BetArea: number;

        /** BaccaratBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new BaccaratBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratBetReq instance
         */
        public static create(properties?: baccarat.IBaccaratBetReq): baccarat.BaccaratBetReq;

        /**
         * Encodes the specified BaccaratBetReq message. Does not implicitly {@link baccarat.BaccaratBetReq.verify|verify} messages.
         * @param message BaccaratBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratBetReq message, length delimited. Does not implicitly {@link baccarat.BaccaratBetReq.verify|verify} messages.
         * @param message BaccaratBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratBetReq;

        /**
         * Decodes a BaccaratBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratBetReq;

        /**
         * Verifies a BaccaratBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratBetReq
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratBetReq;

        /**
         * Creates a plain object from a BaccaratBetReq message. Also converts values to other types if specified.
         * @param message BaccaratBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratBetResp. */
    interface IBaccaratBetResp {

        /** BaccaratBetResp UserID */
        UserID?: (number|Long|null);

        /** BaccaratBetResp BetArea */
        BetArea?: (number|null);

        /** BaccaratBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a BaccaratBetResp. */
    class BaccaratBetResp implements IBaccaratBetResp {

        /**
         * Constructs a new BaccaratBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratBetResp);

        /** BaccaratBetResp UserID. */
        public UserID: (number|Long);

        /** BaccaratBetResp BetArea. */
        public BetArea: number;

        /** BaccaratBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new BaccaratBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratBetResp instance
         */
        public static create(properties?: baccarat.IBaccaratBetResp): baccarat.BaccaratBetResp;

        /**
         * Encodes the specified BaccaratBetResp message. Does not implicitly {@link baccarat.BaccaratBetResp.verify|verify} messages.
         * @param message BaccaratBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratBetResp message, length delimited. Does not implicitly {@link baccarat.BaccaratBetResp.verify|verify} messages.
         * @param message BaccaratBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratBetResp;

        /**
         * Decodes a BaccaratBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratBetResp;

        /**
         * Verifies a BaccaratBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratBetResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratBetResp;

        /**
         * Creates a plain object from a BaccaratBetResp message. Also converts values to other types if specified.
         * @param message BaccaratBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratOverResp. */
    interface IBaccaratOverResp {

        /** BaccaratOverResp AwardArea */
        AwardArea?: (Uint8Array|null);

        /** BaccaratOverResp PlayerCard */
        PlayerCard?: (gamecomm.ICardInfo|null);

        /** BaccaratOverResp BankerCard */
        BankerCard?: (gamecomm.ICardInfo|null);
    }

    /** Represents a BaccaratOverResp. */
    class BaccaratOverResp implements IBaccaratOverResp {

        /**
         * Constructs a new BaccaratOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratOverResp);

        /** BaccaratOverResp AwardArea. */
        public AwardArea: Uint8Array;

        /** BaccaratOverResp PlayerCard. */
        public PlayerCard?: (gamecomm.ICardInfo|null);

        /** BaccaratOverResp BankerCard. */
        public BankerCard?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new BaccaratOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratOverResp instance
         */
        public static create(properties?: baccarat.IBaccaratOverResp): baccarat.BaccaratOverResp;

        /**
         * Encodes the specified BaccaratOverResp message. Does not implicitly {@link baccarat.BaccaratOverResp.verify|verify} messages.
         * @param message BaccaratOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratOverResp message, length delimited. Does not implicitly {@link baccarat.BaccaratOverResp.verify|verify} messages.
         * @param message BaccaratOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratOverResp;

        /**
         * Decodes a BaccaratOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratOverResp;

        /**
         * Verifies a BaccaratOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratOverResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratOverResp;

        /**
         * Creates a plain object from a BaccaratOverResp message. Also converts values to other types if specified.
         * @param message BaccaratOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BaccaratCheckoutResp. */
    interface IBaccaratCheckoutResp {

        /** BaccaratCheckoutResp MyAcquire */
        MyAcquire?: (number|Long|null);

        /** BaccaratCheckoutResp BankerAcquire */
        BankerAcquire?: (number|Long|null);

        /** BaccaratCheckoutResp PlayerAcquire */
        PlayerAcquire?: (number|Long|null);

        /** BaccaratCheckoutResp DrawAcquire */
        DrawAcquire?: (number|Long|null);
    }

    /** Represents a BaccaratCheckoutResp. */
    class BaccaratCheckoutResp implements IBaccaratCheckoutResp {

        /**
         * Constructs a new BaccaratCheckoutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: baccarat.IBaccaratCheckoutResp);

        /** BaccaratCheckoutResp MyAcquire. */
        public MyAcquire: (number|Long);

        /** BaccaratCheckoutResp BankerAcquire. */
        public BankerAcquire: (number|Long);

        /** BaccaratCheckoutResp PlayerAcquire. */
        public PlayerAcquire: (number|Long);

        /** BaccaratCheckoutResp DrawAcquire. */
        public DrawAcquire: (number|Long);

        /**
         * Creates a new BaccaratCheckoutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaccaratCheckoutResp instance
         */
        public static create(properties?: baccarat.IBaccaratCheckoutResp): baccarat.BaccaratCheckoutResp;

        /**
         * Encodes the specified BaccaratCheckoutResp message. Does not implicitly {@link baccarat.BaccaratCheckoutResp.verify|verify} messages.
         * @param message BaccaratCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: baccarat.IBaccaratCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaccaratCheckoutResp message, length delimited. Does not implicitly {@link baccarat.BaccaratCheckoutResp.verify|verify} messages.
         * @param message BaccaratCheckoutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: baccarat.IBaccaratCheckoutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaccaratCheckoutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaccaratCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): baccarat.BaccaratCheckoutResp;

        /**
         * Decodes a BaccaratCheckoutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaccaratCheckoutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): baccarat.BaccaratCheckoutResp;

        /**
         * Verifies a BaccaratCheckoutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaccaratCheckoutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaccaratCheckoutResp
         */
        public static fromObject(object: { [k: string]: any }): baccarat.BaccaratCheckoutResp;

        /**
         * Creates a plain object from a BaccaratCheckoutResp message. Also converts values to other types if specified.
         * @param message BaccaratCheckoutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: baccarat.BaccaratCheckoutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaccaratCheckoutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
