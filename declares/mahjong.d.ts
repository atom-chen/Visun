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
