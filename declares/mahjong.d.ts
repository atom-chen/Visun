import * as $protobuf from "protobufjs";
/** Namespace mahjong. */
export namespace mahjong {

    /** Properties of a GameMahjongEnter. */
    interface IGameMahjongEnter {

        /** GameMahjongEnter userInfo */
        userInfo?: (gamecomm.IPlayerInfo|null);

        /** GameMahjongEnter TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameMahjongEnter FreeTime */
        FreeTime?: (number|null);
    }

    /** Represents a GameMahjongEnter. */
    class GameMahjongEnter implements IGameMahjongEnter {

        /**
         * Constructs a new GameMahjongEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongEnter);

        /** GameMahjongEnter userInfo. */
        public userInfo?: (gamecomm.IPlayerInfo|null);

        /** GameMahjongEnter TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameMahjongEnter FreeTime. */
        public FreeTime: number;

        /**
         * Creates a new GameMahjongEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongEnter instance
         */
        public static create(properties?: mahjong.IGameMahjongEnter): mahjong.GameMahjongEnter;

        /**
         * Encodes the specified GameMahjongEnter message. Does not implicitly {@link mahjong.GameMahjongEnter.verify|verify} messages.
         * @param message GameMahjongEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongEnter message, length delimited. Does not implicitly {@link mahjong.GameMahjongEnter.verify|verify} messages.
         * @param message GameMahjongEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongEnter;

        /**
         * Decodes a GameMahjongEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongEnter;

        /**
         * Verifies a GameMahjongEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongEnter
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongEnter;

        /**
         * Creates a plain object from a GameMahjongEnter message. Also converts values to other types if specified.
         * @param message GameMahjongEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameMahjongPlayer. */
    interface IGameMahjongPlayer {

        /** GameMahjongPlayer UserID */
        UserID?: (number|Long|null);

        /** GameMahjongPlayer Site */
        Site?: (number|null);

        /** GameMahjongPlayer Cards */
        Cards?: (Uint8Array|null);

        /** GameMahjongPlayer IsBanker */
        IsBanker?: (boolean|null);
    }

    /** Represents a GameMahjongPlayer. */
    class GameMahjongPlayer implements IGameMahjongPlayer {

        /**
         * Constructs a new GameMahjongPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongPlayer);

        /** GameMahjongPlayer UserID. */
        public UserID: (number|Long);

        /** GameMahjongPlayer Site. */
        public Site: number;

        /** GameMahjongPlayer Cards. */
        public Cards: Uint8Array;

        /** GameMahjongPlayer IsBanker. */
        public IsBanker: boolean;

        /**
         * Creates a new GameMahjongPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongPlayer instance
         */
        public static create(properties?: mahjong.IGameMahjongPlayer): mahjong.GameMahjongPlayer;

        /**
         * Encodes the specified GameMahjongPlayer message. Does not implicitly {@link mahjong.GameMahjongPlayer.verify|verify} messages.
         * @param message GameMahjongPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongPlayer message, length delimited. Does not implicitly {@link mahjong.GameMahjongPlayer.verify|verify} messages.
         * @param message GameMahjongPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongPlayer;

        /**
         * Decodes a GameMahjongPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongPlayer;

        /**
         * Verifies a GameMahjongPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongPlayer
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongPlayer;

        /**
         * Creates a plain object from a GameMahjongPlayer message. Also converts values to other types if specified.
         * @param message GameMahjongPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameMahjongBegins. */
    interface IGameMahjongBegins {

        /** GameMahjongBegins Dice */
        Dice?: (Uint8Array|null);

        /** GameMahjongBegins PlayersInfo */
        PlayersInfo?: (mahjong.IGameMahjongPlayer[]|null);
    }

    /** Represents a GameMahjongBegins. */
    class GameMahjongBegins implements IGameMahjongBegins {

        /**
         * Constructs a new GameMahjongBegins.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongBegins);

        /** GameMahjongBegins Dice. */
        public Dice: Uint8Array;

        /** GameMahjongBegins PlayersInfo. */
        public PlayersInfo: mahjong.IGameMahjongPlayer[];

        /**
         * Creates a new GameMahjongBegins instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongBegins instance
         */
        public static create(properties?: mahjong.IGameMahjongBegins): mahjong.GameMahjongBegins;

        /**
         * Encodes the specified GameMahjongBegins message. Does not implicitly {@link mahjong.GameMahjongBegins.verify|verify} messages.
         * @param message GameMahjongBegins message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongBegins, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongBegins message, length delimited. Does not implicitly {@link mahjong.GameMahjongBegins.verify|verify} messages.
         * @param message GameMahjongBegins message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongBegins, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongBegins message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongBegins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongBegins;

        /**
         * Decodes a GameMahjongBegins message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongBegins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongBegins;

        /**
         * Verifies a GameMahjongBegins message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongBegins message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongBegins
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongBegins;

        /**
         * Creates a plain object from a GameMahjongBegins message. Also converts values to other types if specified.
         * @param message GameMahjongBegins
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongBegins, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongBegins to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameMahjongOutcard. */
    interface IGameMahjongOutcard {

        /** GameMahjongOutcard Site */
        Site?: (number|null);

        /** GameMahjongOutcard Cards */
        Cards?: (Uint8Array|null);

        /** GameMahjongOutcard Hints */
        Hints?: (string|null);
    }

    /** Represents a GameMahjongOutcard. */
    class GameMahjongOutcard implements IGameMahjongOutcard {

        /**
         * Constructs a new GameMahjongOutcard.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongOutcard);

        /** GameMahjongOutcard Site. */
        public Site: number;

        /** GameMahjongOutcard Cards. */
        public Cards: Uint8Array;

        /** GameMahjongOutcard Hints. */
        public Hints: string;

        /**
         * Creates a new GameMahjongOutcard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongOutcard instance
         */
        public static create(properties?: mahjong.IGameMahjongOutcard): mahjong.GameMahjongOutcard;

        /**
         * Encodes the specified GameMahjongOutcard message. Does not implicitly {@link mahjong.GameMahjongOutcard.verify|verify} messages.
         * @param message GameMahjongOutcard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongOutcard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongOutcard message, length delimited. Does not implicitly {@link mahjong.GameMahjongOutcard.verify|verify} messages.
         * @param message GameMahjongOutcard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongOutcard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongOutcard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongOutcard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongOutcard;

        /**
         * Decodes a GameMahjongOutcard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongOutcard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongOutcard;

        /**
         * Verifies a GameMahjongOutcard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongOutcard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongOutcard
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongOutcard;

        /**
         * Creates a plain object from a GameMahjongOutcard message. Also converts values to other types if specified.
         * @param message GameMahjongOutcard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongOutcard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongOutcard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameMahjongOperate. */
    interface IGameMahjongOperate {

        /** GameMahjongOperate Code */
        Code?: (number|null);

        /** GameMahjongOperate Cards */
        Cards?: (Uint8Array|null);

        /** GameMahjongOperate Hints */
        Hints?: (string|null);
    }

    /** Represents a GameMahjongOperate. */
    class GameMahjongOperate implements IGameMahjongOperate {

        /**
         * Constructs a new GameMahjongOperate.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongOperate);

        /** GameMahjongOperate Code. */
        public Code: number;

        /** GameMahjongOperate Cards. */
        public Cards: Uint8Array;

        /** GameMahjongOperate Hints. */
        public Hints: string;

        /**
         * Creates a new GameMahjongOperate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongOperate instance
         */
        public static create(properties?: mahjong.IGameMahjongOperate): mahjong.GameMahjongOperate;

        /**
         * Encodes the specified GameMahjongOperate message. Does not implicitly {@link mahjong.GameMahjongOperate.verify|verify} messages.
         * @param message GameMahjongOperate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongOperate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongOperate message, length delimited. Does not implicitly {@link mahjong.GameMahjongOperate.verify|verify} messages.
         * @param message GameMahjongOperate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongOperate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongOperate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongOperate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongOperate;

        /**
         * Decodes a GameMahjongOperate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongOperate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongOperate;

        /**
         * Verifies a GameMahjongOperate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongOperate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongOperate
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongOperate;

        /**
         * Creates a plain object from a GameMahjongOperate message. Also converts values to other types if specified.
         * @param message GameMahjongOperate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongOperate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongOperate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameMahjongAward. */
    interface IGameMahjongAward {

        /** GameMahjongAward Site */
        Site?: (number|null);

        /** GameMahjongAward Codes */
        Codes?: (Uint8Array|null);

        /** GameMahjongAward GetGold */
        GetGold?: (number|Long|null);
    }

    /** Represents a GameMahjongAward. */
    class GameMahjongAward implements IGameMahjongAward {

        /**
         * Constructs a new GameMahjongAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongAward);

        /** GameMahjongAward Site. */
        public Site: number;

        /** GameMahjongAward Codes. */
        public Codes: Uint8Array;

        /** GameMahjongAward GetGold. */
        public GetGold: (number|Long);

        /**
         * Creates a new GameMahjongAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongAward instance
         */
        public static create(properties?: mahjong.IGameMahjongAward): mahjong.GameMahjongAward;

        /**
         * Encodes the specified GameMahjongAward message. Does not implicitly {@link mahjong.GameMahjongAward.verify|verify} messages.
         * @param message GameMahjongAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongAward message, length delimited. Does not implicitly {@link mahjong.GameMahjongAward.verify|verify} messages.
         * @param message GameMahjongAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongAward;

        /**
         * Decodes a GameMahjongAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongAward;

        /**
         * Verifies a GameMahjongAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongAward
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongAward;

        /**
         * Creates a plain object from a GameMahjongAward message. Also converts values to other types if specified.
         * @param message GameMahjongAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongAward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameMahjongCheckout. */
    interface IGameMahjongCheckout {

        /** GameMahjongCheckout players */
        players?: (mahjong.IGameMahjongAward[]|null);
    }

    /** Represents a GameMahjongCheckout. */
    class GameMahjongCheckout implements IGameMahjongCheckout {

        /**
         * Constructs a new GameMahjongCheckout.
         * @param [properties] Properties to set
         */
        constructor(properties?: mahjong.IGameMahjongCheckout);

        /** GameMahjongCheckout players. */
        public players: mahjong.IGameMahjongAward[];

        /**
         * Creates a new GameMahjongCheckout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameMahjongCheckout instance
         */
        public static create(properties?: mahjong.IGameMahjongCheckout): mahjong.GameMahjongCheckout;

        /**
         * Encodes the specified GameMahjongCheckout message. Does not implicitly {@link mahjong.GameMahjongCheckout.verify|verify} messages.
         * @param message GameMahjongCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: mahjong.IGameMahjongCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameMahjongCheckout message, length delimited. Does not implicitly {@link mahjong.GameMahjongCheckout.verify|verify} messages.
         * @param message GameMahjongCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: mahjong.IGameMahjongCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameMahjongCheckout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameMahjongCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): mahjong.GameMahjongCheckout;

        /**
         * Decodes a GameMahjongCheckout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameMahjongCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): mahjong.GameMahjongCheckout;

        /**
         * Verifies a GameMahjongCheckout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameMahjongCheckout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameMahjongCheckout
         */
        public static fromObject(object: { [k: string]: any }): mahjong.GameMahjongCheckout;

        /**
         * Creates a plain object from a GameMahjongCheckout message. Also converts values to other types if specified.
         * @param message GameMahjongCheckout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: mahjong.GameMahjongCheckout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameMahjongCheckout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace gamecomm. */
export namespace gamecomm {

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

    /** Properties of a UserList. */
    interface IUserList {

        /** UserList AllInfos */
        AllInfos?: (gamecomm.IPlayerInfo[]|null);
    }

    /** Represents a UserList. */
    class UserList implements IUserList {

        /**
         * Constructs a new UserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IUserList);

        /** UserList AllInfos. */
        public AllInfos: gamecomm.IPlayerInfo[];

        /**
         * Creates a new UserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserList instance
         */
        public static create(properties?: gamecomm.IUserList): gamecomm.UserList;

        /**
         * Encodes the specified UserList message. Does not implicitly {@link gamecomm.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserList message, length delimited. Does not implicitly {@link gamecomm.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.UserList;

        /**
         * Decodes a UserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.UserList;

        /**
         * Verifies a UserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserList
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.UserList;

        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @param message UserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserList to JSON.
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
        Bankroll?: (number|null);

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
        public Bankroll: number;

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

    /** Properties of a GameReady. */
    interface IGameReady {

        /** GameReady UserID */
        UserID?: (number|Long|null);

        /** GameReady IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a GameReady. */
    class GameReady implements IGameReady {

        /**
         * Constructs a new GameReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameReady);

        /** GameReady UserID. */
        public UserID: (number|Long);

        /** GameReady IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new GameReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameReady instance
         */
        public static create(properties?: gamecomm.IGameReady): gamecomm.GameReady;

        /**
         * Encodes the specified GameReady message. Does not implicitly {@link gamecomm.GameReady.verify|verify} messages.
         * @param message GameReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameReady message, length delimited. Does not implicitly {@link gamecomm.GameReady.verify|verify} messages.
         * @param message GameReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameReady;

        /**
         * Decodes a GameReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameReady;

        /**
         * Verifies a GameReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameReady
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameReady;

        /**
         * Creates a plain object from a GameReady message. Also converts values to other types if specified.
         * @param message GameReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBet. */
    interface IGameBet {

        /** GameBet BetArea */
        BetArea?: (number|null);

        /** GameBet BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a GameBet. */
    class GameBet implements IGameBet {

        /**
         * Constructs a new GameBet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameBet);

        /** GameBet BetArea. */
        public BetArea: number;

        /** GameBet BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new GameBet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBet instance
         */
        public static create(properties?: gamecomm.IGameBet): gamecomm.GameBet;

        /**
         * Encodes the specified GameBet message. Does not implicitly {@link gamecomm.GameBet.verify|verify} messages.
         * @param message GameBet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBet message, length delimited. Does not implicitly {@link gamecomm.GameBet.verify|verify} messages.
         * @param message GameBet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameBet;

        /**
         * Decodes a GameBet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameBet;

        /**
         * Verifies a GameBet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBet
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameBet;

        /**
         * Creates a plain object from a GameBet message. Also converts values to other types if specified.
         * @param message GameBet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameBet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBetResult. */
    interface IGameBetResult {

        /** GameBetResult UserID */
        UserID?: (number|Long|null);

        /** GameBetResult BetArea */
        BetArea?: (number|null);

        /** GameBetResult BetScore */
        BetScore?: (number|Long|null);

        /** GameBetResult State */
        State?: (number|null);

        /** GameBetResult Hints */
        Hints?: (string|null);
    }

    /** Represents a GameBetResult. */
    class GameBetResult implements IGameBetResult {

        /**
         * Constructs a new GameBetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameBetResult);

        /** GameBetResult UserID. */
        public UserID: (number|Long);

        /** GameBetResult BetArea. */
        public BetArea: number;

        /** GameBetResult BetScore. */
        public BetScore: (number|Long);

        /** GameBetResult State. */
        public State: number;

        /** GameBetResult Hints. */
        public Hints: string;

        /**
         * Creates a new GameBetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBetResult instance
         */
        public static create(properties?: gamecomm.IGameBetResult): gamecomm.GameBetResult;

        /**
         * Encodes the specified GameBetResult message. Does not implicitly {@link gamecomm.GameBetResult.verify|verify} messages.
         * @param message GameBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBetResult message, length delimited. Does not implicitly {@link gamecomm.GameBetResult.verify|verify} messages.
         * @param message GameBetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameBetResult;

        /**
         * Decodes a GameBetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameBetResult;

        /**
         * Verifies a GameBetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBetResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameBetResult;

        /**
         * Creates a plain object from a GameBetResult message. Also converts values to other types if specified.
         * @param message GameBetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameBetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBetResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord Pork */
        Pork?: (Uint8Array|null);

        /** GameRecord Type */
        Type?: (number|null);

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

        /** GameRecord Pork. */
        public Pork: Uint8Array;

        /** GameRecord Type. */
        public Type: number;

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

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult Flag */
        Flag?: (number|null);

        /** GameResult Reason */
        Reason?: (Uint8Array|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameResult);

        /** GameResult Flag. */
        public Flag: number;

        /** GameResult Reason. */
        public Reason: Uint8Array;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: gamecomm.IGameResult): gamecomm.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link gamecomm.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link gamecomm.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
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

        /** NotifyChangeGold Code */
        Code?: (number|null);
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

        /** NotifyChangeGold Code. */
        public Code: number;

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

    /** Properties of a GameStateFree. */
    interface IGameStateFree {

        /** GameStateFree TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateFree WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStateFree. */
    class GameStateFree implements IGameStateFree {

        /**
         * Constructs a new GameStateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateFree);

        /** GameStateFree TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateFree WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateFree instance
         */
        public static create(properties?: gamecomm.IGameStateFree): gamecomm.GameStateFree;

        /**
         * Encodes the specified GameStateFree message. Does not implicitly {@link gamecomm.GameStateFree.verify|verify} messages.
         * @param message GameStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateFree message, length delimited. Does not implicitly {@link gamecomm.GameStateFree.verify|verify} messages.
         * @param message GameStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateFree;

        /**
         * Decodes a GameStateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateFree;

        /**
         * Verifies a GameStateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateFree
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateFree;

        /**
         * Creates a plain object from a GameStateFree message. Also converts values to other types if specified.
         * @param message GameStateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateStart. */
    interface IGameStateStart {

        /** GameStateStart TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateStart WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStateStart. */
    class GameStateStart implements IGameStateStart {

        /**
         * Constructs a new GameStateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateStart);

        /** GameStateStart TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateStart WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateStart instance
         */
        public static create(properties?: gamecomm.IGameStateStart): gamecomm.GameStateStart;

        /**
         * Encodes the specified GameStateStart message. Does not implicitly {@link gamecomm.GameStateStart.verify|verify} messages.
         * @param message GameStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateStart message, length delimited. Does not implicitly {@link gamecomm.GameStateStart.verify|verify} messages.
         * @param message GameStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateStart;

        /**
         * Decodes a GameStateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateStart;

        /**
         * Verifies a GameStateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateStart
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateStart;

        /**
         * Creates a plain object from a GameStateStart message. Also converts values to other types if specified.
         * @param message GameStateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStatePlaying. */
    interface IGameStatePlaying {

        /** GameStatePlaying TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStatePlaying WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStatePlaying. */
    class GameStatePlaying implements IGameStatePlaying {

        /**
         * Constructs a new GameStatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStatePlaying);

        /** GameStatePlaying TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStatePlaying WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatePlaying instance
         */
        public static create(properties?: gamecomm.IGameStatePlaying): gamecomm.GameStatePlaying;

        /**
         * Encodes the specified GameStatePlaying message. Does not implicitly {@link gamecomm.GameStatePlaying.verify|verify} messages.
         * @param message GameStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatePlaying message, length delimited. Does not implicitly {@link gamecomm.GameStatePlaying.verify|verify} messages.
         * @param message GameStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStatePlaying;

        /**
         * Decodes a GameStatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStatePlaying;

        /**
         * Verifies a GameStatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatePlaying
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStatePlaying;

        /**
         * Creates a plain object from a GameStatePlaying message. Also converts values to other types if specified.
         * @param message GameStatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateOver. */
    interface IGameStateOver {

        /** GameStateOver TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateOver WaitTime */
        WaitTime?: (number|null);
    }

    /** Represents a GameStateOver. */
    class GameStateOver implements IGameStateOver {

        /**
         * Constructs a new GameStateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateOver);

        /** GameStateOver TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateOver WaitTime. */
        public WaitTime: number;

        /**
         * Creates a new GameStateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateOver instance
         */
        public static create(properties?: gamecomm.IGameStateOver): gamecomm.GameStateOver;

        /**
         * Encodes the specified GameStateOver message. Does not implicitly {@link gamecomm.GameStateOver.verify|verify} messages.
         * @param message GameStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateOver message, length delimited. Does not implicitly {@link gamecomm.GameStateOver.verify|verify} messages.
         * @param message GameStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateOver;

        /**
         * Decodes a GameStateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateOver;

        /**
         * Verifies a GameStateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateOver
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateOver;

        /**
         * Creates a plain object from a GameStateOver message. Also converts values to other types if specified.
         * @param message GameStateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStateCall. */
    interface IGameStateCall {

        /** GameStateCall TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameStateCall WaitTime */
        WaitTime?: (number|null);

        /** GameStateCall UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a GameStateCall. */
    class GameStateCall implements IGameStateCall {

        /**
         * Constructs a new GameStateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameStateCall);

        /** GameStateCall TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameStateCall WaitTime. */
        public WaitTime: number;

        /** GameStateCall UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new GameStateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStateCall instance
         */
        public static create(properties?: gamecomm.IGameStateCall): gamecomm.GameStateCall;

        /**
         * Encodes the specified GameStateCall message. Does not implicitly {@link gamecomm.GameStateCall.verify|verify} messages.
         * @param message GameStateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStateCall message, length delimited. Does not implicitly {@link gamecomm.GameStateCall.verify|verify} messages.
         * @param message GameStateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameStateCall;

        /**
         * Decodes a GameStateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameStateCall;

        /**
         * Verifies a GameStateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStateCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameStateCall;

        /**
         * Creates a plain object from a GameStateCall message. Also converts values to other types if specified.
         * @param message GameStateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameStateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBeOut. */
    interface IGameBeOut {

        /** GameBeOut UserID */
        UserID?: (number|Long|null);

        /** GameBeOut Code */
        Code?: (number|null);

        /** GameBeOut Hints */
        Hints?: (Uint8Array|null);
    }

    /** Represents a GameBeOut. */
    class GameBeOut implements IGameBeOut {

        /**
         * Constructs a new GameBeOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameBeOut);

        /** GameBeOut UserID. */
        public UserID: (number|Long);

        /** GameBeOut Code. */
        public Code: number;

        /** GameBeOut Hints. */
        public Hints: Uint8Array;

        /**
         * Creates a new GameBeOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBeOut instance
         */
        public static create(properties?: gamecomm.IGameBeOut): gamecomm.GameBeOut;

        /**
         * Encodes the specified GameBeOut message. Does not implicitly {@link gamecomm.GameBeOut.verify|verify} messages.
         * @param message GameBeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBeOut message, length delimited. Does not implicitly {@link gamecomm.GameBeOut.verify|verify} messages.
         * @param message GameBeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBeOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameBeOut;

        /**
         * Decodes a GameBeOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameBeOut;

        /**
         * Verifies a GameBeOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBeOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBeOut
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameBeOut;

        /**
         * Creates a plain object from a GameBeOut message. Also converts values to other types if specified.
         * @param message GameBeOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameBeOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBeOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameHost. */
    interface IGameHost {

        /** GameHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameHost. */
    class GameHost implements IGameHost {

        /**
         * Constructs a new GameHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameHost);

        /** GameHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameHost instance
         */
        public static create(properties?: gamecomm.IGameHost): gamecomm.GameHost;

        /**
         * Encodes the specified GameHost message. Does not implicitly {@link gamecomm.GameHost.verify|verify} messages.
         * @param message GameHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameHost message, length delimited. Does not implicitly {@link gamecomm.GameHost.verify|verify} messages.
         * @param message GameHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameHost;

        /**
         * Decodes a GameHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameHost;

        /**
         * Verifies a GameHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameHost
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameHost;

        /**
         * Creates a plain object from a GameHost message. Also converts values to other types if specified.
         * @param message GameHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameSuperHost. */
    interface IGameSuperHost {

        /** GameSuperHost IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a GameSuperHost. */
    class GameSuperHost implements IGameSuperHost {

        /**
         * Constructs a new GameSuperHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameSuperHost);

        /** GameSuperHost IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new GameSuperHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSuperHost instance
         */
        public static create(properties?: gamecomm.IGameSuperHost): gamecomm.GameSuperHost;

        /**
         * Encodes the specified GameSuperHost message. Does not implicitly {@link gamecomm.GameSuperHost.verify|verify} messages.
         * @param message GameSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSuperHost message, length delimited. Does not implicitly {@link gamecomm.GameSuperHost.verify|verify} messages.
         * @param message GameSuperHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameSuperHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSuperHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameSuperHost;

        /**
         * Decodes a GameSuperHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSuperHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameSuperHost;

        /**
         * Verifies a GameSuperHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameSuperHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameSuperHost
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameSuperHost;

        /**
         * Creates a plain object from a GameSuperHost message. Also converts values to other types if specified.
         * @param message GameSuperHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameSuperHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameSuperHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCall. */
    interface IGameCall {

        /** GameCall UserID */
        UserID?: (number|Long|null);

        /** GameCall Score */
        Score?: (number|null);
    }

    /** Represents a GameCall. */
    class GameCall implements IGameCall {

        /**
         * Constructs a new GameCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameCall);

        /** GameCall UserID. */
        public UserID: (number|Long);

        /** GameCall Score. */
        public Score: number;

        /**
         * Creates a new GameCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCall instance
         */
        public static create(properties?: gamecomm.IGameCall): gamecomm.GameCall;

        /**
         * Encodes the specified GameCall message. Does not implicitly {@link gamecomm.GameCall.verify|verify} messages.
         * @param message GameCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCall message, length delimited. Does not implicitly {@link gamecomm.GameCall.verify|verify} messages.
         * @param message GameCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameCall;

        /**
         * Decodes a GameCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameCall;

        /**
         * Verifies a GameCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameCall;

        /**
         * Creates a plain object from a GameCall message. Also converts values to other types if specified.
         * @param message GameCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
