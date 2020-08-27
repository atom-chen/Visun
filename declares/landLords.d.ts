import * as $protobuf from "protobufjs";
/** Namespace landLords. */
export namespace landLords {

    /** Properties of a GameLandLordsEnter. */
    interface IGameLandLordsEnter {

        /** GameLandLordsEnter TimeStamp */
        TimeStamp?: (number|Long|null);

        /** GameLandLordsEnter FreeTime */
        FreeTime?: (number|null);

        /** GameLandLordsEnter OutTime */
        OutTime?: (number|null);

        /** GameLandLordsEnter CallTime */
        CallTime?: (number|null);

        /** GameLandLordsEnter Free */
        Free?: (gamecomm.IStateFree|null);

        /** GameLandLordsEnter Start */
        Start?: (gamecomm.IStateStart|null);

        /** GameLandLordsEnter Call */
        Call?: (gamecomm.IStateCall|null);

        /** GameLandLordsEnter Playing */
        Playing?: (gamecomm.IStatePlaying|null);

        /** GameLandLordsEnter Over */
        Over?: (gamecomm.IStateOver|null);

        /** GameLandLordsEnter BeforeChairID */
        BeforeChairID?: (number|null);

        /** GameLandLordsEnter BeforeCards */
        BeforeCards?: (Uint8Array|null);

        /** GameLandLordsEnter Players */
        Players?: (landLords.IGameLandLordsPlayer[]|null);
    }

    /** Represents a GameLandLordsEnter. */
    class GameLandLordsEnter implements IGameLandLordsEnter {

        /**
         * Constructs a new GameLandLordsEnter.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsEnter);

        /** GameLandLordsEnter TimeStamp. */
        public TimeStamp: (number|Long);

        /** GameLandLordsEnter FreeTime. */
        public FreeTime: number;

        /** GameLandLordsEnter OutTime. */
        public OutTime: number;

        /** GameLandLordsEnter CallTime. */
        public CallTime: number;

        /** GameLandLordsEnter Free. */
        public Free?: (gamecomm.IStateFree|null);

        /** GameLandLordsEnter Start. */
        public Start?: (gamecomm.IStateStart|null);

        /** GameLandLordsEnter Call. */
        public Call?: (gamecomm.IStateCall|null);

        /** GameLandLordsEnter Playing. */
        public Playing?: (gamecomm.IStatePlaying|null);

        /** GameLandLordsEnter Over. */
        public Over?: (gamecomm.IStateOver|null);

        /** GameLandLordsEnter BeforeChairID. */
        public BeforeChairID: number;

        /** GameLandLordsEnter BeforeCards. */
        public BeforeCards: Uint8Array;

        /** GameLandLordsEnter Players. */
        public Players: landLords.IGameLandLordsPlayer[];

        /**
         * Creates a new GameLandLordsEnter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsEnter instance
         */
        public static create(properties?: landLords.IGameLandLordsEnter): landLords.GameLandLordsEnter;

        /**
         * Encodes the specified GameLandLordsEnter message. Does not implicitly {@link landLords.GameLandLordsEnter.verify|verify} messages.
         * @param message GameLandLordsEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsEnter message, length delimited. Does not implicitly {@link landLords.GameLandLordsEnter.verify|verify} messages.
         * @param message GameLandLordsEnter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsEnter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsEnter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsEnter;

        /**
         * Decodes a GameLandLordsEnter message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsEnter;

        /**
         * Verifies a GameLandLordsEnter message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsEnter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsEnter
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsEnter;

        /**
         * Creates a plain object from a GameLandLordsEnter message. Also converts values to other types if specified.
         * @param message GameLandLordsEnter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsEnter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsEnter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsPlayer. */
    interface IGameLandLordsPlayer {

        /** GameLandLordsPlayer UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsPlayer ChairID */
        ChairID?: (number|null);

        /** GameLandLordsPlayer CardsLen */
        CardsLen?: (number|null);

        /** GameLandLordsPlayer Cards */
        Cards?: (Uint8Array|null);

        /** GameLandLordsPlayer IsBanker */
        IsBanker?: (boolean|null);

        /** GameLandLordsPlayer IsTrustee */
        IsTrustee?: (boolean|null);
    }

    /** Represents a GameLandLordsPlayer. */
    class GameLandLordsPlayer implements IGameLandLordsPlayer {

        /**
         * Constructs a new GameLandLordsPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsPlayer);

        /** GameLandLordsPlayer UserID. */
        public UserID: (number|Long);

        /** GameLandLordsPlayer ChairID. */
        public ChairID: number;

        /** GameLandLordsPlayer CardsLen. */
        public CardsLen: number;

        /** GameLandLordsPlayer Cards. */
        public Cards: Uint8Array;

        /** GameLandLordsPlayer IsBanker. */
        public IsBanker: boolean;

        /** GameLandLordsPlayer IsTrustee. */
        public IsTrustee: boolean;

        /**
         * Creates a new GameLandLordsPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsPlayer instance
         */
        public static create(properties?: landLords.IGameLandLordsPlayer): landLords.GameLandLordsPlayer;

        /**
         * Encodes the specified GameLandLordsPlayer message. Does not implicitly {@link landLords.GameLandLordsPlayer.verify|verify} messages.
         * @param message GameLandLordsPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsPlayer message, length delimited. Does not implicitly {@link landLords.GameLandLordsPlayer.verify|verify} messages.
         * @param message GameLandLordsPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsPlayer;

        /**
         * Decodes a GameLandLordsPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsPlayer;

        /**
         * Verifies a GameLandLordsPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsPlayer
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsPlayer;

        /**
         * Creates a plain object from a GameLandLordsPlayer message. Also converts values to other types if specified.
         * @param message GameLandLordsPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsDeal. */
    interface IGameLandLordsDeal {

        /** GameLandLordsDeal UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsDeal CardsHand */
        CardsHand?: (Uint8Array|null);
    }

    /** Represents a GameLandLordsDeal. */
    class GameLandLordsDeal implements IGameLandLordsDeal {

        /**
         * Constructs a new GameLandLordsDeal.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsDeal);

        /** GameLandLordsDeal UserID. */
        public UserID: (number|Long);

        /** GameLandLordsDeal CardsHand. */
        public CardsHand: Uint8Array;

        /**
         * Creates a new GameLandLordsDeal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsDeal instance
         */
        public static create(properties?: landLords.IGameLandLordsDeal): landLords.GameLandLordsDeal;

        /**
         * Encodes the specified GameLandLordsDeal message. Does not implicitly {@link landLords.GameLandLordsDeal.verify|verify} messages.
         * @param message GameLandLordsDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsDeal message, length delimited. Does not implicitly {@link landLords.GameLandLordsDeal.verify|verify} messages.
         * @param message GameLandLordsDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsDeal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsDeal;

        /**
         * Decodes a GameLandLordsDeal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsDeal;

        /**
         * Verifies a GameLandLordsDeal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsDeal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsDeal
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsDeal;

        /**
         * Creates a plain object from a GameLandLordsDeal message. Also converts values to other types if specified.
         * @param message GameLandLordsDeal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsDeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsDeal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsCall. */
    interface IGameLandLordsCall {

        /** GameLandLordsCall UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsCall Score */
        Score?: (number|null);
    }

    /** Represents a GameLandLordsCall. */
    class GameLandLordsCall implements IGameLandLordsCall {

        /**
         * Constructs a new GameLandLordsCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsCall);

        /** GameLandLordsCall UserID. */
        public UserID: (number|Long);

        /** GameLandLordsCall Score. */
        public Score: number;

        /**
         * Creates a new GameLandLordsCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsCall instance
         */
        public static create(properties?: landLords.IGameLandLordsCall): landLords.GameLandLordsCall;

        /**
         * Encodes the specified GameLandLordsCall message. Does not implicitly {@link landLords.GameLandLordsCall.verify|verify} messages.
         * @param message GameLandLordsCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsCall message, length delimited. Does not implicitly {@link landLords.GameLandLordsCall.verify|verify} messages.
         * @param message GameLandLordsCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsCall;

        /**
         * Decodes a GameLandLordsCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsCall;

        /**
         * Verifies a GameLandLordsCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsCall
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsCall;

        /**
         * Creates a plain object from a GameLandLordsCall message. Also converts values to other types if specified.
         * @param message GameLandLordsCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsDouble. */
    interface IGameLandLordsDouble {

        /** GameLandLordsDouble UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsDouble Number */
        Number?: (number|null);
    }

    /** Represents a GameLandLordsDouble. */
    class GameLandLordsDouble implements IGameLandLordsDouble {

        /**
         * Constructs a new GameLandLordsDouble.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsDouble);

        /** GameLandLordsDouble UserID. */
        public UserID: (number|Long);

        /** GameLandLordsDouble Number. */
        public Number: number;

        /**
         * Creates a new GameLandLordsDouble instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsDouble instance
         */
        public static create(properties?: landLords.IGameLandLordsDouble): landLords.GameLandLordsDouble;

        /**
         * Encodes the specified GameLandLordsDouble message. Does not implicitly {@link landLords.GameLandLordsDouble.verify|verify} messages.
         * @param message GameLandLordsDouble message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsDouble, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsDouble message, length delimited. Does not implicitly {@link landLords.GameLandLordsDouble.verify|verify} messages.
         * @param message GameLandLordsDouble message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsDouble, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsDouble message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsDouble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsDouble;

        /**
         * Decodes a GameLandLordsDouble message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsDouble
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsDouble;

        /**
         * Verifies a GameLandLordsDouble message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsDouble message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsDouble
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsDouble;

        /**
         * Creates a plain object from a GameLandLordsDouble message. Also converts values to other types if specified.
         * @param message GameLandLordsDouble
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsDouble, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsDouble to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsTrustee. */
    interface IGameLandLordsTrustee {

        /** GameLandLordsTrustee UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsTrustee IsTrustee */
        IsTrustee?: (boolean|null);
    }

    /** Represents a GameLandLordsTrustee. */
    class GameLandLordsTrustee implements IGameLandLordsTrustee {

        /**
         * Constructs a new GameLandLordsTrustee.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsTrustee);

        /** GameLandLordsTrustee UserID. */
        public UserID: (number|Long);

        /** GameLandLordsTrustee IsTrustee. */
        public IsTrustee: boolean;

        /**
         * Creates a new GameLandLordsTrustee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsTrustee instance
         */
        public static create(properties?: landLords.IGameLandLordsTrustee): landLords.GameLandLordsTrustee;

        /**
         * Encodes the specified GameLandLordsTrustee message. Does not implicitly {@link landLords.GameLandLordsTrustee.verify|verify} messages.
         * @param message GameLandLordsTrustee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsTrustee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsTrustee message, length delimited. Does not implicitly {@link landLords.GameLandLordsTrustee.verify|verify} messages.
         * @param message GameLandLordsTrustee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsTrustee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsTrustee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsTrustee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsTrustee;

        /**
         * Decodes a GameLandLordsTrustee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsTrustee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsTrustee;

        /**
         * Verifies a GameLandLordsTrustee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsTrustee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsTrustee
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsTrustee;

        /**
         * Creates a plain object from a GameLandLordsTrustee message. Also converts values to other types if specified.
         * @param message GameLandLordsTrustee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsTrustee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsTrustee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsBottomCard. */
    interface IGameLandLordsBottomCard {

        /** GameLandLordsBottomCard UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsBottomCard CardsBottom */
        CardsBottom?: (Uint8Array|null);
    }

    /** Represents a GameLandLordsBottomCard. */
    class GameLandLordsBottomCard implements IGameLandLordsBottomCard {

        /**
         * Constructs a new GameLandLordsBottomCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsBottomCard);

        /** GameLandLordsBottomCard UserID. */
        public UserID: (number|Long);

        /** GameLandLordsBottomCard CardsBottom. */
        public CardsBottom: Uint8Array;

        /**
         * Creates a new GameLandLordsBottomCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsBottomCard instance
         */
        public static create(properties?: landLords.IGameLandLordsBottomCard): landLords.GameLandLordsBottomCard;

        /**
         * Encodes the specified GameLandLordsBottomCard message. Does not implicitly {@link landLords.GameLandLordsBottomCard.verify|verify} messages.
         * @param message GameLandLordsBottomCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsBottomCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsBottomCard message, length delimited. Does not implicitly {@link landLords.GameLandLordsBottomCard.verify|verify} messages.
         * @param message GameLandLordsBottomCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsBottomCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsBottomCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsBottomCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsBottomCard;

        /**
         * Decodes a GameLandLordsBottomCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsBottomCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsBottomCard;

        /**
         * Verifies a GameLandLordsBottomCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsBottomCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsBottomCard
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsBottomCard;

        /**
         * Creates a plain object from a GameLandLordsBottomCard message. Also converts values to other types if specified.
         * @param message GameLandLordsBottomCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsBottomCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsBottomCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsOutCard. */
    interface IGameLandLordsOutCard {

        /** GameLandLordsOutCard UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsOutCard Cards */
        Cards?: (Uint8Array|null);

        /** GameLandLordsOutCard Hints */
        Hints?: (string|null);
    }

    /** Represents a GameLandLordsOutCard. */
    class GameLandLordsOutCard implements IGameLandLordsOutCard {

        /**
         * Constructs a new GameLandLordsOutCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsOutCard);

        /** GameLandLordsOutCard UserID. */
        public UserID: (number|Long);

        /** GameLandLordsOutCard Cards. */
        public Cards: Uint8Array;

        /** GameLandLordsOutCard Hints. */
        public Hints: string;

        /**
         * Creates a new GameLandLordsOutCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsOutCard instance
         */
        public static create(properties?: landLords.IGameLandLordsOutCard): landLords.GameLandLordsOutCard;

        /**
         * Encodes the specified GameLandLordsOutCard message. Does not implicitly {@link landLords.GameLandLordsOutCard.verify|verify} messages.
         * @param message GameLandLordsOutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsOutCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsOutCard message, length delimited. Does not implicitly {@link landLords.GameLandLordsOutCard.verify|verify} messages.
         * @param message GameLandLordsOutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsOutCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsOutCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsOutCard;

        /**
         * Decodes a GameLandLordsOutCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsOutCard;

        /**
         * Verifies a GameLandLordsOutCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsOutCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsOutCard
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsOutCard;

        /**
         * Creates a plain object from a GameLandLordsOutCard message. Also converts values to other types if specified.
         * @param message GameLandLordsOutCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsOutCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsOutCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsAward. */
    interface IGameLandLordsAward {

        /** GameLandLordsAward UserID */
        UserID?: (number|Long|null);

        /** GameLandLordsAward Codes */
        Codes?: (Uint8Array|null);

        /** GameLandLordsAward GetGold */
        GetGold?: (number|Long|null);
    }

    /** Represents a GameLandLordsAward. */
    class GameLandLordsAward implements IGameLandLordsAward {

        /**
         * Constructs a new GameLandLordsAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsAward);

        /** GameLandLordsAward UserID. */
        public UserID: (number|Long);

        /** GameLandLordsAward Codes. */
        public Codes: Uint8Array;

        /** GameLandLordsAward GetGold. */
        public GetGold: (number|Long);

        /**
         * Creates a new GameLandLordsAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsAward instance
         */
        public static create(properties?: landLords.IGameLandLordsAward): landLords.GameLandLordsAward;

        /**
         * Encodes the specified GameLandLordsAward message. Does not implicitly {@link landLords.GameLandLordsAward.verify|verify} messages.
         * @param message GameLandLordsAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsAward message, length delimited. Does not implicitly {@link landLords.GameLandLordsAward.verify|verify} messages.
         * @param message GameLandLordsAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsAward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsAward;

        /**
         * Decodes a GameLandLordsAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsAward;

        /**
         * Verifies a GameLandLordsAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsAward
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsAward;

        /**
         * Creates a plain object from a GameLandLordsAward message. Also converts values to other types if specified.
         * @param message GameLandLordsAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsAward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLandLordsCheckout. */
    interface IGameLandLordsCheckout {

        /** GameLandLordsCheckout players */
        players?: (landLords.IGameLandLordsAward[]|null);
    }

    /** Represents a GameLandLordsCheckout. */
    class GameLandLordsCheckout implements IGameLandLordsCheckout {

        /**
         * Constructs a new GameLandLordsCheckout.
         * @param [properties] Properties to set
         */
        constructor(properties?: landLords.IGameLandLordsCheckout);

        /** GameLandLordsCheckout players. */
        public players: landLords.IGameLandLordsAward[];

        /**
         * Creates a new GameLandLordsCheckout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLandLordsCheckout instance
         */
        public static create(properties?: landLords.IGameLandLordsCheckout): landLords.GameLandLordsCheckout;

        /**
         * Encodes the specified GameLandLordsCheckout message. Does not implicitly {@link landLords.GameLandLordsCheckout.verify|verify} messages.
         * @param message GameLandLordsCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: landLords.IGameLandLordsCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLandLordsCheckout message, length delimited. Does not implicitly {@link landLords.GameLandLordsCheckout.verify|verify} messages.
         * @param message GameLandLordsCheckout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: landLords.IGameLandLordsCheckout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLandLordsCheckout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLandLordsCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): landLords.GameLandLordsCheckout;

        /**
         * Decodes a GameLandLordsCheckout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLandLordsCheckout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): landLords.GameLandLordsCheckout;

        /**
         * Verifies a GameLandLordsCheckout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLandLordsCheckout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLandLordsCheckout
         */
        public static fromObject(object: { [k: string]: any }): landLords.GameLandLordsCheckout;

        /**
         * Creates a plain object from a GameLandLordsCheckout message. Also converts values to other types if specified.
         * @param message GameLandLordsCheckout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: landLords.GameLandLordsCheckout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLandLordsCheckout to JSON.
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

    /** Properties of a MoneyCalculateInfo. */
    interface IMoneyCalculateInfo {

        /** MoneyCalculateInfo UserID */
        UserID?: (number|Long|null);

        /** MoneyCalculateInfo Money */
        Money?: (number|Long|null);

        /** MoneyCalculateInfo ChangeValue */
        ChangeValue?: (number|Long|null);

        /** MoneyCalculateInfo Reason */
        Reason?: (string|null);
    }

    /** Represents a MoneyCalculateInfo. */
    class MoneyCalculateInfo implements IMoneyCalculateInfo {

        /**
         * Constructs a new MoneyCalculateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IMoneyCalculateInfo);

        /** MoneyCalculateInfo UserID. */
        public UserID: (number|Long);

        /** MoneyCalculateInfo Money. */
        public Money: (number|Long);

        /** MoneyCalculateInfo ChangeValue. */
        public ChangeValue: (number|Long);

        /** MoneyCalculateInfo Reason. */
        public Reason: string;

        /**
         * Creates a new MoneyCalculateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoneyCalculateInfo instance
         */
        public static create(properties?: gamecomm.IMoneyCalculateInfo): gamecomm.MoneyCalculateInfo;

        /**
         * Encodes the specified MoneyCalculateInfo message. Does not implicitly {@link gamecomm.MoneyCalculateInfo.verify|verify} messages.
         * @param message MoneyCalculateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IMoneyCalculateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyCalculateInfo message, length delimited. Does not implicitly {@link gamecomm.MoneyCalculateInfo.verify|verify} messages.
         * @param message MoneyCalculateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IMoneyCalculateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyCalculateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyCalculateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.MoneyCalculateInfo;

        /**
         * Decodes a MoneyCalculateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyCalculateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.MoneyCalculateInfo;

        /**
         * Verifies a MoneyCalculateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoneyCalculateInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoneyCalculateInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.MoneyCalculateInfo;

        /**
         * Creates a plain object from a MoneyCalculateInfo message. Also converts values to other types if specified.
         * @param message MoneyCalculateInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.MoneyCalculateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoneyCalculateInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateReady. */
    interface IStateReady {

        /** StateReady Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateReady. */
    class StateReady implements IStateReady {

        /**
         * Constructs a new StateReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateReady);

        /** StateReady Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateReady instance
         */
        public static create(properties?: gamecomm.IStateReady): gamecomm.StateReady;

        /**
         * Encodes the specified StateReady message. Does not implicitly {@link gamecomm.StateReady.verify|verify} messages.
         * @param message StateReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateReady message, length delimited. Does not implicitly {@link gamecomm.StateReady.verify|verify} messages.
         * @param message StateReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateReady;

        /**
         * Decodes a StateReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateReady;

        /**
         * Verifies a StateReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateReady
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateReady;

        /**
         * Creates a plain object from a StateReady message. Also converts values to other types if specified.
         * @param message StateReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateFree. */
    interface IStateFree {

        /** StateFree Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateFree. */
    class StateFree implements IStateFree {

        /**
         * Constructs a new StateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateFree);

        /** StateFree Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateFree instance
         */
        public static create(properties?: gamecomm.IStateFree): gamecomm.StateFree;

        /**
         * Encodes the specified StateFree message. Does not implicitly {@link gamecomm.StateFree.verify|verify} messages.
         * @param message StateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateFree message, length delimited. Does not implicitly {@link gamecomm.StateFree.verify|verify} messages.
         * @param message StateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateFree;

        /**
         * Decodes a StateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateFree;

        /**
         * Verifies a StateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateFree
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateFree;

        /**
         * Creates a plain object from a StateFree message. Also converts values to other types if specified.
         * @param message StateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateStart. */
    interface IStateStart {

        /** StateStart Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateStart. */
    class StateStart implements IStateStart {

        /**
         * Constructs a new StateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateStart);

        /** StateStart Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateStart instance
         */
        public static create(properties?: gamecomm.IStateStart): gamecomm.StateStart;

        /**
         * Encodes the specified StateStart message. Does not implicitly {@link gamecomm.StateStart.verify|verify} messages.
         * @param message StateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateStart message, length delimited. Does not implicitly {@link gamecomm.StateStart.verify|verify} messages.
         * @param message StateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateStart;

        /**
         * Decodes a StateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateStart;

        /**
         * Verifies a StateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateStart
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateStart;

        /**
         * Creates a plain object from a StateStart message. Also converts values to other types if specified.
         * @param message StateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StatePlaying. */
    interface IStatePlaying {

        /** StatePlaying Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StatePlaying. */
    class StatePlaying implements IStatePlaying {

        /**
         * Constructs a new StatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStatePlaying);

        /** StatePlaying Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatePlaying instance
         */
        public static create(properties?: gamecomm.IStatePlaying): gamecomm.StatePlaying;

        /**
         * Encodes the specified StatePlaying message. Does not implicitly {@link gamecomm.StatePlaying.verify|verify} messages.
         * @param message StatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatePlaying message, length delimited. Does not implicitly {@link gamecomm.StatePlaying.verify|verify} messages.
         * @param message StatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StatePlaying;

        /**
         * Decodes a StatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StatePlaying;

        /**
         * Verifies a StatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatePlaying
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StatePlaying;

        /**
         * Creates a plain object from a StatePlaying message. Also converts values to other types if specified.
         * @param message StatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateOver. */
    interface IStateOver {

        /** StateOver Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateOver. */
    class StateOver implements IStateOver {

        /**
         * Constructs a new StateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateOver);

        /** StateOver Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateOver instance
         */
        public static create(properties?: gamecomm.IStateOver): gamecomm.StateOver;

        /**
         * Encodes the specified StateOver message. Does not implicitly {@link gamecomm.StateOver.verify|verify} messages.
         * @param message StateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateOver message, length delimited. Does not implicitly {@link gamecomm.StateOver.verify|verify} messages.
         * @param message StateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateOver;

        /**
         * Decodes a StateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateOver;

        /**
         * Verifies a StateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateOver
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateOver;

        /**
         * Creates a plain object from a StateOver message. Also converts values to other types if specified.
         * @param message StateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateCall. */
    interface IStateCall {

        /** StateCall Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** StateCall UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a StateCall. */
    class StateCall implements IStateCall {

        /**
         * Constructs a new StateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateCall);

        /** StateCall Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** StateCall UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new StateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateCall instance
         */
        public static create(properties?: gamecomm.IStateCall): gamecomm.StateCall;

        /**
         * Encodes the specified StateCall message. Does not implicitly {@link gamecomm.StateCall.verify|verify} messages.
         * @param message StateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateCall message, length delimited. Does not implicitly {@link gamecomm.StateCall.verify|verify} messages.
         * @param message StateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateCall;

        /**
         * Decodes a StateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateCall;

        /**
         * Verifies a StateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateCall;

        /**
         * Creates a plain object from a StateCall message. Also converts values to other types if specified.
         * @param message StateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Host. */
    interface IHost {

        /** Host IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a Host. */
    class Host implements IHost {

        /**
         * Constructs a new Host.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IHost);

        /** Host IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new Host instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Host instance
         */
        public static create(properties?: gamecomm.IHost): gamecomm.Host;

        /**
         * Encodes the specified Host message. Does not implicitly {@link gamecomm.Host.verify|verify} messages.
         * @param message Host message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Host message, length delimited. Does not implicitly {@link gamecomm.Host.verify|verify} messages.
         * @param message Host message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Host message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Host
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Host;

        /**
         * Decodes a Host message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Host
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Host;

        /**
         * Verifies a Host message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Host message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Host
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Host;

        /**
         * Creates a plain object from a Host message. Also converts values to other types if specified.
         * @param message Host
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Host, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Host to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HostEx. */
    interface IHostEx {

        /** HostEx IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a HostEx. */
    class HostEx implements IHostEx {

        /**
         * Constructs a new HostEx.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IHostEx);

        /** HostEx IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new HostEx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HostEx instance
         */
        public static create(properties?: gamecomm.IHostEx): gamecomm.HostEx;

        /**
         * Encodes the specified HostEx message. Does not implicitly {@link gamecomm.HostEx.verify|verify} messages.
         * @param message HostEx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IHostEx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HostEx message, length delimited. Does not implicitly {@link gamecomm.HostEx.verify|verify} messages.
         * @param message HostEx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IHostEx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HostEx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HostEx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.HostEx;

        /**
         * Decodes a HostEx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HostEx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.HostEx;

        /**
         * Verifies a HostEx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HostEx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HostEx
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.HostEx;

        /**
         * Creates a plain object from a HostEx message. Also converts values to other types if specified.
         * @param message HostEx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.HostEx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HostEx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Call. */
    interface ICall {

        /** Call UserID */
        UserID?: (number|Long|null);

        /** Call Score */
        Score?: (number|null);
    }

    /** Represents a Call. */
    class Call implements ICall {

        /**
         * Constructs a new Call.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICall);

        /** Call UserID. */
        public UserID: (number|Long);

        /** Call Score. */
        public Score: number;

        /**
         * Creates a new Call instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Call instance
         */
        public static create(properties?: gamecomm.ICall): gamecomm.Call;

        /**
         * Encodes the specified Call message. Does not implicitly {@link gamecomm.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link gamecomm.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Call;

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Call;

        /**
         * Verifies a Call message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Call message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Call
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Call;

        /**
         * Creates a plain object from a Call message. Also converts values to other types if specified.
         * @param message Call
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Call to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeOut. */
    interface IBeOut {

        /** BeOut UserID */
        UserID?: (number|Long|null);

        /** BeOut Code */
        Code?: (number|null);

        /** BeOut Hints */
        Hints?: (Uint8Array|null);
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

        /** BeOut Code. */
        public Code: number;

        /** BeOut Hints. */
        public Hints: Uint8Array;

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

    /** Properties of a Bet. */
    interface IBet {

        /** Bet AreaId */
        AreaId?: (number|null);

        /** Bet Money */
        Money?: (number|Long|null);
    }

    /** Represents a Bet. */
    class Bet implements IBet {

        /**
         * Constructs a new Bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBet);

        /** Bet AreaId. */
        public AreaId: number;

        /** Bet Money. */
        public Money: (number|Long);

        /**
         * Creates a new Bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bet instance
         */
        public static create(properties?: gamecomm.IBet): gamecomm.Bet;

        /**
         * Encodes the specified Bet message. Does not implicitly {@link gamecomm.Bet.verify|verify} messages.
         * @param message Bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bet message, length delimited. Does not implicitly {@link gamecomm.Bet.verify|verify} messages.
         * @param message Bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Bet;

        /**
         * Decodes a Bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Bet;

        /**
         * Verifies a Bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bet
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Bet;

        /**
         * Creates a plain object from a Bet message. Also converts values to other types if specified.
         * @param message Bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResult. */
    interface IBetResult {

        /** BetResult UserId */
        UserId?: (number|Long|null);

        /** BetResult AreaId */
        AreaId?: (number|null);

        /** BetResult Money */
        Money?: (number|Long|null);
    }

    /** Represents a BetResult. */
    class BetResult implements IBetResult {

        /**
         * Constructs a new BetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBetResult);

        /** BetResult UserId. */
        public UserId: (number|Long);

        /** BetResult AreaId. */
        public AreaId: number;

        /** BetResult Money. */
        public Money: (number|Long);

        /**
         * Creates a new BetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResult instance
         */
        public static create(properties?: gamecomm.IBetResult): gamecomm.BetResult;

        /**
         * Encodes the specified BetResult message. Does not implicitly {@link gamecomm.BetResult.verify|verify} messages.
         * @param message BetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResult message, length delimited. Does not implicitly {@link gamecomm.BetResult.verify|verify} messages.
         * @param message BetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BetResult;

        /**
         * Decodes a BetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BetResult;

        /**
         * Verifies a BetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BetResult;

        /**
         * Creates a plain object from a BetResult message. Also converts values to other types if specified.
         * @param message BetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResult to JSON.
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
}
