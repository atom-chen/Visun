import * as $protobuf from "protobufjs";
/** Namespace zhajinhua. */
export namespace zhajinhua {

    /** Properties of a ZhajinhuaPlayer. */
    interface IZhajinhuaPlayer {

        /** ZhajinhuaPlayer UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaPlayer Name */
        Name?: (string|null);

        /** ZhajinhuaPlayer Gold */
        Gold?: (number|Long|null);

        /** ZhajinhuaPlayer SeatId */
        SeatId?: (number|null);

        /** ZhajinhuaPlayer SeatState */
        SeatState?: (number|null);

        /** ZhajinhuaPlayer IsSee */
        IsSee?: (boolean|null);

        /** ZhajinhuaPlayer RecentScore */
        RecentScore?: (number|Long|null);

        /** ZhajinhuaPlayer TotalScore */
        TotalScore?: (number|Long|null);

        /** ZhajinhuaPlayer Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a ZhajinhuaPlayer. */
    class ZhajinhuaPlayer implements IZhajinhuaPlayer {

        /**
         * Constructs a new ZhajinhuaPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaPlayer);

        /** ZhajinhuaPlayer UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaPlayer Name. */
        public Name: string;

        /** ZhajinhuaPlayer Gold. */
        public Gold: (number|Long);

        /** ZhajinhuaPlayer SeatId. */
        public SeatId: number;

        /** ZhajinhuaPlayer SeatState. */
        public SeatState: number;

        /** ZhajinhuaPlayer IsSee. */
        public IsSee: boolean;

        /** ZhajinhuaPlayer RecentScore. */
        public RecentScore: (number|Long);

        /** ZhajinhuaPlayer TotalScore. */
        public TotalScore: (number|Long);

        /** ZhajinhuaPlayer Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new ZhajinhuaPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaPlayer instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaPlayer): zhajinhua.ZhajinhuaPlayer;

        /**
         * Encodes the specified ZhajinhuaPlayer message. Does not implicitly {@link zhajinhua.ZhajinhuaPlayer.verify|verify} messages.
         * @param message ZhajinhuaPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaPlayer message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaPlayer.verify|verify} messages.
         * @param message ZhajinhuaPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaPlayer;

        /**
         * Decodes a ZhajinhuaPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaPlayer;

        /**
         * Verifies a ZhajinhuaPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaPlayer
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaPlayer;

        /**
         * Creates a plain object from a ZhajinhuaPlayer message. Also converts values to other types if specified.
         * @param message ZhajinhuaPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaAddPlayerResp. */
    interface IZhajinhuaAddPlayerResp {

        /** ZhajinhuaAddPlayerResp Player */
        Player?: (zhajinhua.IZhajinhuaPlayer|null);
    }

    /** Represents a ZhajinhuaAddPlayerResp. */
    class ZhajinhuaAddPlayerResp implements IZhajinhuaAddPlayerResp {

        /**
         * Constructs a new ZhajinhuaAddPlayerResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaAddPlayerResp);

        /** ZhajinhuaAddPlayerResp Player. */
        public Player?: (zhajinhua.IZhajinhuaPlayer|null);

        /**
         * Creates a new ZhajinhuaAddPlayerResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaAddPlayerResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaAddPlayerResp): zhajinhua.ZhajinhuaAddPlayerResp;

        /**
         * Encodes the specified ZhajinhuaAddPlayerResp message. Does not implicitly {@link zhajinhua.ZhajinhuaAddPlayerResp.verify|verify} messages.
         * @param message ZhajinhuaAddPlayerResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaAddPlayerResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaAddPlayerResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaAddPlayerResp.verify|verify} messages.
         * @param message ZhajinhuaAddPlayerResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaAddPlayerResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaAddPlayerResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaAddPlayerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaAddPlayerResp;

        /**
         * Decodes a ZhajinhuaAddPlayerResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaAddPlayerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaAddPlayerResp;

        /**
         * Verifies a ZhajinhuaAddPlayerResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaAddPlayerResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaAddPlayerResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaAddPlayerResp;

        /**
         * Creates a plain object from a ZhajinhuaAddPlayerResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaAddPlayerResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaAddPlayerResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaAddPlayerResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaDelPlayerResp. */
    interface IZhajinhuaDelPlayerResp {

        /** ZhajinhuaDelPlayerResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaDelPlayerResp. */
    class ZhajinhuaDelPlayerResp implements IZhajinhuaDelPlayerResp {

        /**
         * Constructs a new ZhajinhuaDelPlayerResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaDelPlayerResp);

        /** ZhajinhuaDelPlayerResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new ZhajinhuaDelPlayerResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaDelPlayerResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaDelPlayerResp): zhajinhua.ZhajinhuaDelPlayerResp;

        /**
         * Encodes the specified ZhajinhuaDelPlayerResp message. Does not implicitly {@link zhajinhua.ZhajinhuaDelPlayerResp.verify|verify} messages.
         * @param message ZhajinhuaDelPlayerResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaDelPlayerResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaDelPlayerResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaDelPlayerResp.verify|verify} messages.
         * @param message ZhajinhuaDelPlayerResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaDelPlayerResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaDelPlayerResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaDelPlayerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaDelPlayerResp;

        /**
         * Decodes a ZhajinhuaDelPlayerResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaDelPlayerResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaDelPlayerResp;

        /**
         * Verifies a ZhajinhuaDelPlayerResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaDelPlayerResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaDelPlayerResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaDelPlayerResp;

        /**
         * Creates a plain object from a ZhajinhuaDelPlayerResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaDelPlayerResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaDelPlayerResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaDelPlayerResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaSceneResp. */
    interface IZhajinhuaSceneResp {

        /** ZhajinhuaSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** ZhajinhuaSceneResp TotalScore */
        TotalScore?: (number|Long|null);

        /** ZhajinhuaSceneResp MinScore */
        MinScore?: (number|Long|null);

        /** ZhajinhuaSceneResp Banker */
        Banker?: (number|Long|null);

        /** ZhajinhuaSceneResp Fighters */
        Fighters?: (zhajinhua.IZhajinhuaPlayer[]|null);
    }

    /** Represents a ZhajinhuaSceneResp. */
    class ZhajinhuaSceneResp implements IZhajinhuaSceneResp {

        /**
         * Constructs a new ZhajinhuaSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaSceneResp);

        /** ZhajinhuaSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** ZhajinhuaSceneResp TotalScore. */
        public TotalScore: (number|Long);

        /** ZhajinhuaSceneResp MinScore. */
        public MinScore: (number|Long);

        /** ZhajinhuaSceneResp Banker. */
        public Banker: (number|Long);

        /** ZhajinhuaSceneResp Fighters. */
        public Fighters: zhajinhua.IZhajinhuaPlayer[];

        /**
         * Creates a new ZhajinhuaSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaSceneResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaSceneResp): zhajinhua.ZhajinhuaSceneResp;

        /**
         * Encodes the specified ZhajinhuaSceneResp message. Does not implicitly {@link zhajinhua.ZhajinhuaSceneResp.verify|verify} messages.
         * @param message ZhajinhuaSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaSceneResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaSceneResp.verify|verify} messages.
         * @param message ZhajinhuaSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaSceneResp;

        /**
         * Decodes a ZhajinhuaSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaSceneResp;

        /**
         * Verifies a ZhajinhuaSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaSceneResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaSceneResp;

        /**
         * Creates a plain object from a ZhajinhuaSceneResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateFreeResp. */
    interface IZhajinhuaStateFreeResp {

        /** ZhajinhuaStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a ZhajinhuaStateFreeResp. */
    class ZhajinhuaStateFreeResp implements IZhajinhuaStateFreeResp {

        /**
         * Constructs a new ZhajinhuaStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateFreeResp);

        /** ZhajinhuaStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new ZhajinhuaStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateFreeResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateFreeResp): zhajinhua.ZhajinhuaStateFreeResp;

        /**
         * Encodes the specified ZhajinhuaStateFreeResp message. Does not implicitly {@link zhajinhua.ZhajinhuaStateFreeResp.verify|verify} messages.
         * @param message ZhajinhuaStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateFreeResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateFreeResp.verify|verify} messages.
         * @param message ZhajinhuaStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateFreeResp;

        /**
         * Decodes a ZhajinhuaStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateFreeResp;

        /**
         * Verifies a ZhajinhuaStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateFreeResp;

        /**
         * Creates a plain object from a ZhajinhuaStateFreeResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateStartResp. */
    interface IZhajinhuaStateStartResp {

        /** ZhajinhuaStateStartResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a ZhajinhuaStateStartResp. */
    class ZhajinhuaStateStartResp implements IZhajinhuaStateStartResp {

        /**
         * Constructs a new ZhajinhuaStateStartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateStartResp);

        /** ZhajinhuaStateStartResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new ZhajinhuaStateStartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateStartResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateStartResp): zhajinhua.ZhajinhuaStateStartResp;

        /**
         * Encodes the specified ZhajinhuaStateStartResp message. Does not implicitly {@link zhajinhua.ZhajinhuaStateStartResp.verify|verify} messages.
         * @param message ZhajinhuaStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateStartResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateStartResp.verify|verify} messages.
         * @param message ZhajinhuaStateStartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateStartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateStartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateStartResp;

        /**
         * Decodes a ZhajinhuaStateStartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateStartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateStartResp;

        /**
         * Verifies a ZhajinhuaStateStartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateStartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateStartResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateStartResp;

        /**
         * Creates a plain object from a ZhajinhuaStateStartResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateStartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateStartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateStartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStatePlayingResp. */
    interface IZhajinhuaStatePlayingResp {

        /** ZhajinhuaStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStatePlayingResp UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a ZhajinhuaStatePlayingResp. */
    class ZhajinhuaStatePlayingResp implements IZhajinhuaStatePlayingResp {

        /**
         * Constructs a new ZhajinhuaStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStatePlayingResp);

        /** ZhajinhuaStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStatePlayingResp UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new ZhajinhuaStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStatePlayingResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStatePlayingResp): zhajinhua.ZhajinhuaStatePlayingResp;

        /**
         * Encodes the specified ZhajinhuaStatePlayingResp message. Does not implicitly {@link zhajinhua.ZhajinhuaStatePlayingResp.verify|verify} messages.
         * @param message ZhajinhuaStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStatePlayingResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStatePlayingResp.verify|verify} messages.
         * @param message ZhajinhuaStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStatePlayingResp;

        /**
         * Decodes a ZhajinhuaStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStatePlayingResp;

        /**
         * Verifies a ZhajinhuaStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStatePlayingResp;

        /**
         * Creates a plain object from a ZhajinhuaStatePlayingResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateCompareResp. */
    interface IZhajinhuaStateCompareResp {

        /** ZhajinhuaStateCompareResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStateCompareResp Info */
        Info?: (zhajinhua.IZhajinhuaCompareResp|null);
    }

    /** Represents a ZhajinhuaStateCompareResp. */
    class ZhajinhuaStateCompareResp implements IZhajinhuaStateCompareResp {

        /**
         * Constructs a new ZhajinhuaStateCompareResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateCompareResp);

        /** ZhajinhuaStateCompareResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStateCompareResp Info. */
        public Info?: (zhajinhua.IZhajinhuaCompareResp|null);

        /**
         * Creates a new ZhajinhuaStateCompareResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateCompareResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateCompareResp): zhajinhua.ZhajinhuaStateCompareResp;

        /**
         * Encodes the specified ZhajinhuaStateCompareResp message. Does not implicitly {@link zhajinhua.ZhajinhuaStateCompareResp.verify|verify} messages.
         * @param message ZhajinhuaStateCompareResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateCompareResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateCompareResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateCompareResp.verify|verify} messages.
         * @param message ZhajinhuaStateCompareResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateCompareResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateCompareResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateCompareResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateCompareResp;

        /**
         * Decodes a ZhajinhuaStateCompareResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateCompareResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateCompareResp;

        /**
         * Verifies a ZhajinhuaStateCompareResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateCompareResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateCompareResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateCompareResp;

        /**
         * Creates a plain object from a ZhajinhuaStateCompareResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateCompareResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateCompareResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateCompareResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateOverResp. */
    interface IZhajinhuaStateOverResp {

        /** ZhajinhuaStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStateOverResp WinnerId */
        WinnerId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaStateOverResp. */
    class ZhajinhuaStateOverResp implements IZhajinhuaStateOverResp {

        /**
         * Constructs a new ZhajinhuaStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateOverResp);

        /** ZhajinhuaStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStateOverResp WinnerId. */
        public WinnerId: (number|Long);

        /**
         * Creates a new ZhajinhuaStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateOverResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateOverResp): zhajinhua.ZhajinhuaStateOverResp;

        /**
         * Encodes the specified ZhajinhuaStateOverResp message. Does not implicitly {@link zhajinhua.ZhajinhuaStateOverResp.verify|verify} messages.
         * @param message ZhajinhuaStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateOverResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateOverResp.verify|verify} messages.
         * @param message ZhajinhuaStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateOverResp;

        /**
         * Decodes a ZhajinhuaStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateOverResp;

        /**
         * Verifies a ZhajinhuaStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateOverResp;

        /**
         * Creates a plain object from a ZhajinhuaStateOverResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaHostResp. */
    interface IZhajinhuaHostResp {

        /** ZhajinhuaHostResp CurHost */
        CurHost?: (number|Long|null);
    }

    /** Represents a ZhajinhuaHostResp. */
    class ZhajinhuaHostResp implements IZhajinhuaHostResp {

        /**
         * Constructs a new ZhajinhuaHostResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaHostResp);

        /** ZhajinhuaHostResp CurHost. */
        public CurHost: (number|Long);

        /**
         * Creates a new ZhajinhuaHostResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaHostResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaHostResp): zhajinhua.ZhajinhuaHostResp;

        /**
         * Encodes the specified ZhajinhuaHostResp message. Does not implicitly {@link zhajinhua.ZhajinhuaHostResp.verify|verify} messages.
         * @param message ZhajinhuaHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaHostResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaHostResp.verify|verify} messages.
         * @param message ZhajinhuaHostResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaHostResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaHostResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaHostResp;

        /**
         * Decodes a ZhajinhuaHostResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaHostResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaHostResp;

        /**
         * Verifies a ZhajinhuaHostResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaHostResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaHostResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaHostResp;

        /**
         * Creates a plain object from a ZhajinhuaHostResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaHostResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaHostResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaHostResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaReadyReq. */
    interface IZhajinhuaReadyReq {

        /** ZhajinhuaReadyReq IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a ZhajinhuaReadyReq. */
    class ZhajinhuaReadyReq implements IZhajinhuaReadyReq {

        /**
         * Constructs a new ZhajinhuaReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaReadyReq);

        /** ZhajinhuaReadyReq IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new ZhajinhuaReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaReadyReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaReadyReq): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Encodes the specified ZhajinhuaReadyReq message. Does not implicitly {@link zhajinhua.ZhajinhuaReadyReq.verify|verify} messages.
         * @param message ZhajinhuaReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaReadyReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaReadyReq.verify|verify} messages.
         * @param message ZhajinhuaReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Decodes a ZhajinhuaReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Verifies a ZhajinhuaReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaReadyReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Creates a plain object from a ZhajinhuaReadyReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaReadyResp. */
    interface IZhajinhuaReadyResp {

        /** ZhajinhuaReadyResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaReadyResp. */
    class ZhajinhuaReadyResp implements IZhajinhuaReadyResp {

        /**
         * Constructs a new ZhajinhuaReadyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaReadyResp);

        /** ZhajinhuaReadyResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new ZhajinhuaReadyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaReadyResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaReadyResp): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Encodes the specified ZhajinhuaReadyResp message. Does not implicitly {@link zhajinhua.ZhajinhuaReadyResp.verify|verify} messages.
         * @param message ZhajinhuaReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaReadyResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaReadyResp.verify|verify} messages.
         * @param message ZhajinhuaReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaReadyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Decodes a ZhajinhuaReadyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Verifies a ZhajinhuaReadyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaReadyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaReadyResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Creates a plain object from a ZhajinhuaReadyResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaReadyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaReadyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaReadyResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaFollowReq. */
    interface IZhajinhuaFollowReq {
    }

    /** Represents a ZhajinhuaFollowReq. */
    class ZhajinhuaFollowReq implements IZhajinhuaFollowReq {

        /**
         * Constructs a new ZhajinhuaFollowReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaFollowReq);

        /**
         * Creates a new ZhajinhuaFollowReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaFollowReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaFollowReq): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Encodes the specified ZhajinhuaFollowReq message. Does not implicitly {@link zhajinhua.ZhajinhuaFollowReq.verify|verify} messages.
         * @param message ZhajinhuaFollowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaFollowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaFollowReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaFollowReq.verify|verify} messages.
         * @param message ZhajinhuaFollowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaFollowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaFollowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaFollowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Decodes a ZhajinhuaFollowReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaFollowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Verifies a ZhajinhuaFollowReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaFollowReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaFollowReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Creates a plain object from a ZhajinhuaFollowReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaFollowReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaFollowReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaFollowReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaFollowResp. */
    interface IZhajinhuaFollowResp {

        /** ZhajinhuaFollowResp UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaFollowResp Score */
        Score?: (number|Long|null);
    }

    /** Represents a ZhajinhuaFollowResp. */
    class ZhajinhuaFollowResp implements IZhajinhuaFollowResp {

        /**
         * Constructs a new ZhajinhuaFollowResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaFollowResp);

        /** ZhajinhuaFollowResp UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaFollowResp Score. */
        public Score: (number|Long);

        /**
         * Creates a new ZhajinhuaFollowResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaFollowResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaFollowResp): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Encodes the specified ZhajinhuaFollowResp message. Does not implicitly {@link zhajinhua.ZhajinhuaFollowResp.verify|verify} messages.
         * @param message ZhajinhuaFollowResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaFollowResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaFollowResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaFollowResp.verify|verify} messages.
         * @param message ZhajinhuaFollowResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaFollowResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaFollowResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaFollowResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Decodes a ZhajinhuaFollowResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaFollowResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Verifies a ZhajinhuaFollowResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaFollowResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaFollowResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Creates a plain object from a ZhajinhuaFollowResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaFollowResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaFollowResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaFollowResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaRaiseReq. */
    interface IZhajinhuaRaiseReq {

        /** ZhajinhuaRaiseReq Score */
        Score?: (number|Long|null);
    }

    /** Represents a ZhajinhuaRaiseReq. */
    class ZhajinhuaRaiseReq implements IZhajinhuaRaiseReq {

        /**
         * Constructs a new ZhajinhuaRaiseReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaRaiseReq);

        /** ZhajinhuaRaiseReq Score. */
        public Score: (number|Long);

        /**
         * Creates a new ZhajinhuaRaiseReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaRaiseReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaRaiseReq): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Encodes the specified ZhajinhuaRaiseReq message. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseReq.verify|verify} messages.
         * @param message ZhajinhuaRaiseReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaRaiseReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaRaiseReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseReq.verify|verify} messages.
         * @param message ZhajinhuaRaiseReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaRaiseReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaRaiseReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaRaiseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Decodes a ZhajinhuaRaiseReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaRaiseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Verifies a ZhajinhuaRaiseReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaRaiseReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaRaiseReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Creates a plain object from a ZhajinhuaRaiseReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaRaiseReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaRaiseReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaRaiseReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaRaiseResp. */
    interface IZhajinhuaRaiseResp {

        /** ZhajinhuaRaiseResp UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaRaiseResp Score */
        Score?: (number|Long|null);
    }

    /** Represents a ZhajinhuaRaiseResp. */
    class ZhajinhuaRaiseResp implements IZhajinhuaRaiseResp {

        /**
         * Constructs a new ZhajinhuaRaiseResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaRaiseResp);

        /** ZhajinhuaRaiseResp UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaRaiseResp Score. */
        public Score: (number|Long);

        /**
         * Creates a new ZhajinhuaRaiseResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaRaiseResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaRaiseResp): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Encodes the specified ZhajinhuaRaiseResp message. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseResp.verify|verify} messages.
         * @param message ZhajinhuaRaiseResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaRaiseResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaRaiseResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseResp.verify|verify} messages.
         * @param message ZhajinhuaRaiseResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaRaiseResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaRaiseResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaRaiseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Decodes a ZhajinhuaRaiseResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaRaiseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Verifies a ZhajinhuaRaiseResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaRaiseResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaRaiseResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Creates a plain object from a ZhajinhuaRaiseResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaRaiseResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaRaiseResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaRaiseResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaLookReq. */
    interface IZhajinhuaLookReq {
    }

    /** Represents a ZhajinhuaLookReq. */
    class ZhajinhuaLookReq implements IZhajinhuaLookReq {

        /**
         * Constructs a new ZhajinhuaLookReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaLookReq);

        /**
         * Creates a new ZhajinhuaLookReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaLookReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaLookReq): zhajinhua.ZhajinhuaLookReq;

        /**
         * Encodes the specified ZhajinhuaLookReq message. Does not implicitly {@link zhajinhua.ZhajinhuaLookReq.verify|verify} messages.
         * @param message ZhajinhuaLookReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaLookReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaLookReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaLookReq.verify|verify} messages.
         * @param message ZhajinhuaLookReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaLookReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaLookReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaLookReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaLookReq;

        /**
         * Decodes a ZhajinhuaLookReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaLookReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaLookReq;

        /**
         * Verifies a ZhajinhuaLookReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaLookReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaLookReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaLookReq;

        /**
         * Creates a plain object from a ZhajinhuaLookReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaLookReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaLookReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaLookReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaLookResp. */
    interface IZhajinhuaLookResp {

        /** ZhajinhuaLookResp UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaLookResp Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a ZhajinhuaLookResp. */
    class ZhajinhuaLookResp implements IZhajinhuaLookResp {

        /**
         * Constructs a new ZhajinhuaLookResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaLookResp);

        /** ZhajinhuaLookResp UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaLookResp Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new ZhajinhuaLookResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaLookResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaLookResp): zhajinhua.ZhajinhuaLookResp;

        /**
         * Encodes the specified ZhajinhuaLookResp message. Does not implicitly {@link zhajinhua.ZhajinhuaLookResp.verify|verify} messages.
         * @param message ZhajinhuaLookResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaLookResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaLookResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaLookResp.verify|verify} messages.
         * @param message ZhajinhuaLookResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaLookResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaLookResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaLookResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaLookResp;

        /**
         * Decodes a ZhajinhuaLookResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaLookResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaLookResp;

        /**
         * Verifies a ZhajinhuaLookResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaLookResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaLookResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaLookResp;

        /**
         * Creates a plain object from a ZhajinhuaLookResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaLookResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaLookResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaLookResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaCompareReq. */
    interface IZhajinhuaCompareReq {

        /** ZhajinhuaCompareReq HitId */
        HitId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaCompareReq. */
    class ZhajinhuaCompareReq implements IZhajinhuaCompareReq {

        /**
         * Constructs a new ZhajinhuaCompareReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaCompareReq);

        /** ZhajinhuaCompareReq HitId. */
        public HitId: (number|Long);

        /**
         * Creates a new ZhajinhuaCompareReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaCompareReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaCompareReq): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Encodes the specified ZhajinhuaCompareReq message. Does not implicitly {@link zhajinhua.ZhajinhuaCompareReq.verify|verify} messages.
         * @param message ZhajinhuaCompareReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaCompareReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaCompareReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaCompareReq.verify|verify} messages.
         * @param message ZhajinhuaCompareReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaCompareReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaCompareReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaCompareReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Decodes a ZhajinhuaCompareReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaCompareReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Verifies a ZhajinhuaCompareReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaCompareReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaCompareReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Creates a plain object from a ZhajinhuaCompareReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaCompareReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaCompareReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaCompareReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaCompareResp. */
    interface IZhajinhuaCompareResp {

        /** ZhajinhuaCompareResp AttackerId */
        AttackerId?: (number|Long|null);

        /** ZhajinhuaCompareResp HitId */
        HitId?: (number|Long|null);

        /** ZhajinhuaCompareResp WinnerId */
        WinnerId?: (number|Long|null);

        /** ZhajinhuaCompareResp AttackerCards */
        AttackerCards?: (gamecomm.ICardInfo|null);

        /** ZhajinhuaCompareResp HitCards */
        HitCards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a ZhajinhuaCompareResp. */
    class ZhajinhuaCompareResp implements IZhajinhuaCompareResp {

        /**
         * Constructs a new ZhajinhuaCompareResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaCompareResp);

        /** ZhajinhuaCompareResp AttackerId. */
        public AttackerId: (number|Long);

        /** ZhajinhuaCompareResp HitId. */
        public HitId: (number|Long);

        /** ZhajinhuaCompareResp WinnerId. */
        public WinnerId: (number|Long);

        /** ZhajinhuaCompareResp AttackerCards. */
        public AttackerCards?: (gamecomm.ICardInfo|null);

        /** ZhajinhuaCompareResp HitCards. */
        public HitCards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new ZhajinhuaCompareResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaCompareResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaCompareResp): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Encodes the specified ZhajinhuaCompareResp message. Does not implicitly {@link zhajinhua.ZhajinhuaCompareResp.verify|verify} messages.
         * @param message ZhajinhuaCompareResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaCompareResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaCompareResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaCompareResp.verify|verify} messages.
         * @param message ZhajinhuaCompareResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaCompareResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaCompareResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaCompareResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Decodes a ZhajinhuaCompareResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaCompareResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Verifies a ZhajinhuaCompareResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaCompareResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaCompareResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Creates a plain object from a ZhajinhuaCompareResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaCompareResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaCompareResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaCompareResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaGiveupReq. */
    interface IZhajinhuaGiveupReq {
    }

    /** Represents a ZhajinhuaGiveupReq. */
    class ZhajinhuaGiveupReq implements IZhajinhuaGiveupReq {

        /**
         * Constructs a new ZhajinhuaGiveupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaGiveupReq);

        /**
         * Creates a new ZhajinhuaGiveupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaGiveupReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaGiveupReq): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Encodes the specified ZhajinhuaGiveupReq message. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupReq.verify|verify} messages.
         * @param message ZhajinhuaGiveupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaGiveupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaGiveupReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupReq.verify|verify} messages.
         * @param message ZhajinhuaGiveupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaGiveupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaGiveupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaGiveupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Decodes a ZhajinhuaGiveupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaGiveupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Verifies a ZhajinhuaGiveupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaGiveupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaGiveupReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Creates a plain object from a ZhajinhuaGiveupReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaGiveupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaGiveupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaGiveupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaGiveupResp. */
    interface IZhajinhuaGiveupResp {

        /** ZhajinhuaGiveupResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaGiveupResp. */
    class ZhajinhuaGiveupResp implements IZhajinhuaGiveupResp {

        /**
         * Constructs a new ZhajinhuaGiveupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaGiveupResp);

        /** ZhajinhuaGiveupResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new ZhajinhuaGiveupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaGiveupResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaGiveupResp): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Encodes the specified ZhajinhuaGiveupResp message. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupResp.verify|verify} messages.
         * @param message ZhajinhuaGiveupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaGiveupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaGiveupResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupResp.verify|verify} messages.
         * @param message ZhajinhuaGiveupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaGiveupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaGiveupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaGiveupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Decodes a ZhajinhuaGiveupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaGiveupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Verifies a ZhajinhuaGiveupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaGiveupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaGiveupResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Creates a plain object from a ZhajinhuaGiveupResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaGiveupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaGiveupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaGiveupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaOverResp. */
    interface IZhajinhuaOverResp {

        /** ZhajinhuaOverResp WinnerId */
        WinnerId?: (number|Long|null);

        /** ZhajinhuaOverResp Infos */
        Infos?: (gamecomm.IGoldChangeInfo[]|null);
    }

    /** Represents a ZhajinhuaOverResp. */
    class ZhajinhuaOverResp implements IZhajinhuaOverResp {

        /**
         * Constructs a new ZhajinhuaOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaOverResp);

        /** ZhajinhuaOverResp WinnerId. */
        public WinnerId: (number|Long);

        /** ZhajinhuaOverResp Infos. */
        public Infos: gamecomm.IGoldChangeInfo[];

        /**
         * Creates a new ZhajinhuaOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaOverResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaOverResp): zhajinhua.ZhajinhuaOverResp;

        /**
         * Encodes the specified ZhajinhuaOverResp message. Does not implicitly {@link zhajinhua.ZhajinhuaOverResp.verify|verify} messages.
         * @param message ZhajinhuaOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaOverResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaOverResp.verify|verify} messages.
         * @param message ZhajinhuaOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaOverResp;

        /**
         * Decodes a ZhajinhuaOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaOverResp;

        /**
         * Verifies a ZhajinhuaOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaOverResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaOverResp;

        /**
         * Creates a plain object from a ZhajinhuaOverResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
