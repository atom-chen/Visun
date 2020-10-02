import * as $protobuf from "protobufjs";
/** Namespace gamecomm. */
export namespace gamecomm {

    /** PlayerState enum. */
    enum PlayerState {
        PlayerLookOn = 0,
        PlayerSitDown = 1,
        PlayerAgree = 2,
        PlayerPlaying = 3,
        PlayerPickUp = 4,
        PlayerCall = 5,
        PlayerFollow = 6,
        PlayerRaise = 7,
        PlayerLook = 8,
        PlayerCompare = 9,
        PlayerCompareLose = 10,
        PlayerOutCard = 11,
        PlayerPass = 12,
        PlayerChi = 13,
        PlayerPong = 14,
        PlayerMingGang = 15,
        PlayerAnGang = 16,
        PlayerTing = 17,
        PlayerHu = 18,
        PlayerZiMo = 19,
        PlayerGiveUp = 98,
        PlayerStandUp = 99
    }

    /** GameModel enum. */
    enum GameModel {
        General = 0,
        Fight = 1,
        Multiplayer = 2,
        RoomCard = 3,
        Guess = 4,
        GamesCity = 5,
        DualMeet = 6,
        Sport = 7,
        Smart = 8,
        RPG = 9
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserID */
        UserID?: (number|Long|null);

        /** PlayerInfo Name */
        Name?: (string|null);

        /** PlayerInfo FaceID */
        FaceID?: (number|null);

        /** PlayerInfo Age */
        Age?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo Gold */
        Gold?: (number|Long|null);

        /** PlayerInfo Level */
        Level?: (number|null);

        /** PlayerInfo Account */
        Account?: (string|null);

        /** PlayerInfo Sate */
        Sate?: (gamecomm.PlayerState|null);

        /** PlayerInfo PlatformID */
        PlatformID?: (number|Long|null);

        /** PlayerInfo RoomNum */
        RoomNum?: (number|null);

        /** PlayerInfo GameID */
        GameID?: (number|Long|null);

        /** PlayerInfo TableID */
        TableID?: (number|null);

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

        /** PlayerInfo FaceID. */
        public FaceID: number;

        /** PlayerInfo Age. */
        public Age: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo Gold. */
        public Gold: (number|Long);

        /** PlayerInfo Level. */
        public Level: number;

        /** PlayerInfo Account. */
        public Account: string;

        /** PlayerInfo Sate. */
        public Sate: gamecomm.PlayerState;

        /** PlayerInfo PlatformID. */
        public PlatformID: (number|Long);

        /** PlayerInfo RoomNum. */
        public RoomNum: number;

        /** PlayerInfo GameID. */
        public GameID: (number|Long);

        /** PlayerInfo TableID. */
        public TableID: number;

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

    /** Properties of a ConfigInfo. */
    interface IConfigInfo {

        /** ConfigInfo Name */
        Name?: (string|null);

        /** ConfigInfo Password */
        Password?: (string|null);

        /** ConfigInfo EnterScore */
        EnterScore?: (number|null);

        /** ConfigInfo LessScore */
        LessScore?: (number|null);

        /** ConfigInfo PlayScore */
        PlayScore?: (number|null);

        /** ConfigInfo MaxChair */
        MaxChair?: (number|null);

        /** ConfigInfo Amount */
        Amount?: (number|null);

        /** ConfigInfo Commission */
        Commission?: (number|null);
    }

    /** Represents a ConfigInfo. */
    class ConfigInfo implements IConfigInfo {

        /**
         * Constructs a new ConfigInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IConfigInfo);

        /** ConfigInfo Name. */
        public Name: string;

        /** ConfigInfo Password. */
        public Password: string;

        /** ConfigInfo EnterScore. */
        public EnterScore: number;

        /** ConfigInfo LessScore. */
        public LessScore: number;

        /** ConfigInfo PlayScore. */
        public PlayScore: number;

        /** ConfigInfo MaxChair. */
        public MaxChair: number;

        /** ConfigInfo Amount. */
        public Amount: number;

        /** ConfigInfo Commission. */
        public Commission: number;

        /**
         * Creates a new ConfigInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfigInfo instance
         */
        public static create(properties?: gamecomm.IConfigInfo): gamecomm.ConfigInfo;

        /**
         * Encodes the specified ConfigInfo message. Does not implicitly {@link gamecomm.ConfigInfo.verify|verify} messages.
         * @param message ConfigInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IConfigInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfigInfo message, length delimited. Does not implicitly {@link gamecomm.ConfigInfo.verify|verify} messages.
         * @param message ConfigInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IConfigInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfigInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfigInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ConfigInfo;

        /**
         * Decodes a ConfigInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfigInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ConfigInfo;

        /**
         * Verifies a ConfigInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfigInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfigInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ConfigInfo;

        /**
         * Creates a plain object from a ConfigInfo message. Also converts values to other types if specified.
         * @param message ConfigInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ConfigInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfigInfo to JSON.
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

    /** Properties of an InningInfo. */
    interface IInningInfo {

        /** InningInfo Number */
        Number?: (string|null);

        /** InningInfo Name */
        Name?: (string|null);

        /** InningInfo Level */
        Level?: (number|null);

        /** InningInfo Payoff */
        Payoff?: (number|Long|null);

        /** InningInfo TimeStamp */
        TimeStamp?: (number|Long|null);
    }

    /** Represents an InningInfo. */
    class InningInfo implements IInningInfo {

        /**
         * Constructs a new InningInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IInningInfo);

        /** InningInfo Number. */
        public Number: string;

        /** InningInfo Name. */
        public Name: string;

        /** InningInfo Level. */
        public Level: number;

        /** InningInfo Payoff. */
        public Payoff: (number|Long);

        /** InningInfo TimeStamp. */
        public TimeStamp: (number|Long);

        /**
         * Creates a new InningInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InningInfo instance
         */
        public static create(properties?: gamecomm.IInningInfo): gamecomm.InningInfo;

        /**
         * Encodes the specified InningInfo message. Does not implicitly {@link gamecomm.InningInfo.verify|verify} messages.
         * @param message InningInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IInningInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InningInfo message, length delimited. Does not implicitly {@link gamecomm.InningInfo.verify|verify} messages.
         * @param message InningInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IInningInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InningInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InningInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.InningInfo;

        /**
         * Decodes an InningInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InningInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.InningInfo;

        /**
         * Verifies an InningInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InningInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InningInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.InningInfo;

        /**
         * Creates a plain object from an InningInfo message. Also converts values to other types if specified.
         * @param message InningInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.InningInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InningInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerListInfo. */
    interface IPlayerListInfo {

        /** PlayerListInfo AllInfos */
        AllInfos?: (gamecomm.IPlayerInfo[]|null);
    }

    /** Represents a PlayerListInfo. */
    class PlayerListInfo implements IPlayerListInfo {

        /**
         * Constructs a new PlayerListInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerListInfo);

        /** PlayerListInfo AllInfos. */
        public AllInfos: gamecomm.IPlayerInfo[];

        /**
         * Creates a new PlayerListInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerListInfo instance
         */
        public static create(properties?: gamecomm.IPlayerListInfo): gamecomm.PlayerListInfo;

        /**
         * Encodes the specified PlayerListInfo message. Does not implicitly {@link gamecomm.PlayerListInfo.verify|verify} messages.
         * @param message PlayerListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerListInfo message, length delimited. Does not implicitly {@link gamecomm.PlayerListInfo.verify|verify} messages.
         * @param message PlayerListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerListInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerListInfo;

        /**
         * Decodes a PlayerListInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerListInfo;

        /**
         * Verifies a PlayerListInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerListInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerListInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerListInfo;

        /**
         * Creates a plain object from a PlayerListInfo message. Also converts values to other types if specified.
         * @param message PlayerListInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerListInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GoldChangeInfo. */
    interface IGoldChangeInfo {

        /** GoldChangeInfo UserID */
        UserID?: (number|Long|null);

        /** GoldChangeInfo Gold */
        Gold?: (number|Long|null);

        /** GoldChangeInfo AlterGold */
        AlterGold?: (number|Long|null);

        /** GoldChangeInfo Code */
        Code?: (number|null);

        /** GoldChangeInfo Reason */
        Reason?: (string|null);
    }

    /** Represents a GoldChangeInfo. */
    class GoldChangeInfo implements IGoldChangeInfo {

        /**
         * Constructs a new GoldChangeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGoldChangeInfo);

        /** GoldChangeInfo UserID. */
        public UserID: (number|Long);

        /** GoldChangeInfo Gold. */
        public Gold: (number|Long);

        /** GoldChangeInfo AlterGold. */
        public AlterGold: (number|Long);

        /** GoldChangeInfo Code. */
        public Code: number;

        /** GoldChangeInfo Reason. */
        public Reason: string;

        /**
         * Creates a new GoldChangeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoldChangeInfo instance
         */
        public static create(properties?: gamecomm.IGoldChangeInfo): gamecomm.GoldChangeInfo;

        /**
         * Encodes the specified GoldChangeInfo message. Does not implicitly {@link gamecomm.GoldChangeInfo.verify|verify} messages.
         * @param message GoldChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGoldChangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoldChangeInfo message, length delimited. Does not implicitly {@link gamecomm.GoldChangeInfo.verify|verify} messages.
         * @param message GoldChangeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGoldChangeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoldChangeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoldChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GoldChangeInfo;

        /**
         * Decodes a GoldChangeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoldChangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GoldChangeInfo;

        /**
         * Verifies a GoldChangeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoldChangeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoldChangeInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GoldChangeInfo;

        /**
         * Creates a plain object from a GoldChangeInfo message. Also converts values to other types if specified.
         * @param message GoldChangeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GoldChangeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoldChangeInfo to JSON.
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

        /** GameRecord CardInfo */
        CardInfo?: (gamecomm.ICardInfo|null);

        /** GameRecord IsWon */
        IsWon?: (boolean|null);
    }

    /** Represents a GameRecord. */
    class GameRecord implements IGameRecord {

        /**
         * Constructs a new GameRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecord);

        /** GameRecord CardInfo. */
        public CardInfo?: (gamecomm.ICardInfo|null);

        /** GameRecord IsWon. */
        public IsWon: boolean;

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

    /** Properties of a SettingGameReq. */
    interface ISettingGameReq {

        /** SettingGameReq Model */
        Model?: (gamecomm.GameModel|null);

        /** SettingGameReq KindID */
        KindID?: (number|null);

        /** SettingGameReq Info */
        Info?: (gamecomm.IConfigInfo|null);
    }

    /** Represents a SettingGameReq. */
    class SettingGameReq implements ISettingGameReq {

        /**
         * Constructs a new SettingGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ISettingGameReq);

        /** SettingGameReq Model. */
        public Model: gamecomm.GameModel;

        /** SettingGameReq KindID. */
        public KindID: number;

        /** SettingGameReq Info. */
        public Info?: (gamecomm.IConfigInfo|null);

        /**
         * Creates a new SettingGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingGameReq instance
         */
        public static create(properties?: gamecomm.ISettingGameReq): gamecomm.SettingGameReq;

        /**
         * Encodes the specified SettingGameReq message. Does not implicitly {@link gamecomm.SettingGameReq.verify|verify} messages.
         * @param message SettingGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ISettingGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingGameReq message, length delimited. Does not implicitly {@link gamecomm.SettingGameReq.verify|verify} messages.
         * @param message SettingGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ISettingGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.SettingGameReq;

        /**
         * Decodes a SettingGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.SettingGameReq;

        /**
         * Verifies a SettingGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingGameReq
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.SettingGameReq;

        /**
         * Creates a plain object from a SettingGameReq message. Also converts values to other types if specified.
         * @param message SettingGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.SettingGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettingGameResp. */
    interface ISettingGameResp {

        /** SettingGameResp GameID */
        GameID?: (number|Long|null);

        /** SettingGameResp HostID */
        HostID?: (number|Long|null);

        /** SettingGameResp Info */
        Info?: (gamecomm.IConfigInfo|null);
    }

    /** Represents a SettingGameResp. */
    class SettingGameResp implements ISettingGameResp {

        /**
         * Constructs a new SettingGameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ISettingGameResp);

        /** SettingGameResp GameID. */
        public GameID: (number|Long);

        /** SettingGameResp HostID. */
        public HostID: (number|Long);

        /** SettingGameResp Info. */
        public Info?: (gamecomm.IConfigInfo|null);

        /**
         * Creates a new SettingGameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettingGameResp instance
         */
        public static create(properties?: gamecomm.ISettingGameResp): gamecomm.SettingGameResp;

        /**
         * Encodes the specified SettingGameResp message. Does not implicitly {@link gamecomm.SettingGameResp.verify|verify} messages.
         * @param message SettingGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ISettingGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettingGameResp message, length delimited. Does not implicitly {@link gamecomm.SettingGameResp.verify|verify} messages.
         * @param message SettingGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ISettingGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettingGameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettingGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.SettingGameResp;

        /**
         * Decodes a SettingGameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettingGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.SettingGameResp;

        /**
         * Verifies a SettingGameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettingGameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettingGameResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.SettingGameResp;

        /**
         * Creates a plain object from a SettingGameResp message. Also converts values to other types if specified.
         * @param message SettingGameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.SettingGameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettingGameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterGameReq. */
    interface IEnterGameReq {

        /** EnterGameReq GameID */
        GameID?: (number|Long|null);

        /** EnterGameReq GameKey */
        GameKey?: (string|null);
    }

    /** Represents an EnterGameReq. */
    class EnterGameReq implements IEnterGameReq {

        /**
         * Constructs a new EnterGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IEnterGameReq);

        /** EnterGameReq GameID. */
        public GameID: (number|Long);

        /** EnterGameReq GameKey. */
        public GameKey: string;

        /**
         * Creates a new EnterGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameReq instance
         */
        public static create(properties?: gamecomm.IEnterGameReq): gamecomm.EnterGameReq;

        /**
         * Encodes the specified EnterGameReq message. Does not implicitly {@link gamecomm.EnterGameReq.verify|verify} messages.
         * @param message EnterGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IEnterGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGameReq message, length delimited. Does not implicitly {@link gamecomm.EnterGameReq.verify|verify} messages.
         * @param message EnterGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IEnterGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.EnterGameReq;

        /**
         * Decodes an EnterGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.EnterGameReq;

        /**
         * Verifies an EnterGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGameReq
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.EnterGameReq;

        /**
         * Creates a plain object from an EnterGameReq message. Also converts values to other types if specified.
         * @param message EnterGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.EnterGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EnterGameResp. */
    interface IEnterGameResp {

        /** EnterGameResp GameID */
        GameID?: (number|Long|null);

        /** EnterGameResp UserInfo */
        UserInfo?: (gamecomm.IPlayerInfo|null);
    }

    /** Represents an EnterGameResp. */
    class EnterGameResp implements IEnterGameResp {

        /**
         * Constructs a new EnterGameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IEnterGameResp);

        /** EnterGameResp GameID. */
        public GameID: (number|Long);

        /** EnterGameResp UserInfo. */
        public UserInfo?: (gamecomm.IPlayerInfo|null);

        /**
         * Creates a new EnterGameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGameResp instance
         */
        public static create(properties?: gamecomm.IEnterGameResp): gamecomm.EnterGameResp;

        /**
         * Encodes the specified EnterGameResp message. Does not implicitly {@link gamecomm.EnterGameResp.verify|verify} messages.
         * @param message EnterGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IEnterGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EnterGameResp message, length delimited. Does not implicitly {@link gamecomm.EnterGameResp.verify|verify} messages.
         * @param message EnterGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IEnterGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnterGameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.EnterGameResp;

        /**
         * Decodes an EnterGameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.EnterGameResp;

        /**
         * Verifies an EnterGameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EnterGameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnterGameResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.EnterGameResp;

        /**
         * Creates a plain object from an EnterGameResp message. Also converts values to other types if specified.
         * @param message EnterGameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.EnterGameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnterGameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitGameReq. */
    interface IExitGameReq {

        /** ExitGameReq GameID */
        GameID?: (number|Long|null);
    }

    /** Represents an ExitGameReq. */
    class ExitGameReq implements IExitGameReq {

        /**
         * Constructs a new ExitGameReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IExitGameReq);

        /** ExitGameReq GameID. */
        public GameID: (number|Long);

        /**
         * Creates a new ExitGameReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitGameReq instance
         */
        public static create(properties?: gamecomm.IExitGameReq): gamecomm.ExitGameReq;

        /**
         * Encodes the specified ExitGameReq message. Does not implicitly {@link gamecomm.ExitGameReq.verify|verify} messages.
         * @param message ExitGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IExitGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitGameReq message, length delimited. Does not implicitly {@link gamecomm.ExitGameReq.verify|verify} messages.
         * @param message ExitGameReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IExitGameReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitGameReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ExitGameReq;

        /**
         * Decodes an ExitGameReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ExitGameReq;

        /**
         * Verifies an ExitGameReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitGameReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitGameReq
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ExitGameReq;

        /**
         * Creates a plain object from an ExitGameReq message. Also converts values to other types if specified.
         * @param message ExitGameReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ExitGameReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitGameReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ExitGameResp. */
    interface IExitGameResp {

        /** ExitGameResp GameID */
        GameID?: (number|Long|null);

        /** ExitGameResp UserID */
        UserID?: (number|Long|null);
    }

    /** Represents an ExitGameResp. */
    class ExitGameResp implements IExitGameResp {

        /**
         * Constructs a new ExitGameResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IExitGameResp);

        /** ExitGameResp GameID. */
        public GameID: (number|Long);

        /** ExitGameResp UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new ExitGameResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ExitGameResp instance
         */
        public static create(properties?: gamecomm.IExitGameResp): gamecomm.ExitGameResp;

        /**
         * Encodes the specified ExitGameResp message. Does not implicitly {@link gamecomm.ExitGameResp.verify|verify} messages.
         * @param message ExitGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IExitGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ExitGameResp message, length delimited. Does not implicitly {@link gamecomm.ExitGameResp.verify|verify} messages.
         * @param message ExitGameResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IExitGameResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExitGameResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ExitGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ExitGameResp;

        /**
         * Decodes an ExitGameResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ExitGameResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ExitGameResp;

        /**
         * Verifies an ExitGameResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ExitGameResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ExitGameResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ExitGameResp;

        /**
         * Creates a plain object from an ExitGameResp message. Also converts values to other types if specified.
         * @param message ExitGameResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ExitGameResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ExitGameResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeTableReq. */
    interface IChangeTableReq {

        /** ChangeTableReq GameID */
        GameID?: (number|Long|null);
    }

    /** Represents a ChangeTableReq. */
    class ChangeTableReq implements IChangeTableReq {

        /**
         * Constructs a new ChangeTableReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IChangeTableReq);

        /** ChangeTableReq GameID. */
        public GameID: (number|Long);

        /**
         * Creates a new ChangeTableReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeTableReq instance
         */
        public static create(properties?: gamecomm.IChangeTableReq): gamecomm.ChangeTableReq;

        /**
         * Encodes the specified ChangeTableReq message. Does not implicitly {@link gamecomm.ChangeTableReq.verify|verify} messages.
         * @param message ChangeTableReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IChangeTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeTableReq message, length delimited. Does not implicitly {@link gamecomm.ChangeTableReq.verify|verify} messages.
         * @param message ChangeTableReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IChangeTableReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeTableReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ChangeTableReq;

        /**
         * Decodes a ChangeTableReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeTableReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ChangeTableReq;

        /**
         * Verifies a ChangeTableReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeTableReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeTableReq
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ChangeTableReq;

        /**
         * Creates a plain object from a ChangeTableReq message. Also converts values to other types if specified.
         * @param message ChangeTableReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ChangeTableReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeTableReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeTableResp. */
    interface IChangeTableResp {

        /** ChangeTableResp GameID */
        GameID?: (number|Long|null);

        /** ChangeTableResp TableID */
        TableID?: (number|null);

        /** ChangeTableResp UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a ChangeTableResp. */
    class ChangeTableResp implements IChangeTableResp {

        /**
         * Constructs a new ChangeTableResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IChangeTableResp);

        /** ChangeTableResp GameID. */
        public GameID: (number|Long);

        /** ChangeTableResp TableID. */
        public TableID: number;

        /** ChangeTableResp UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new ChangeTableResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeTableResp instance
         */
        public static create(properties?: gamecomm.IChangeTableResp): gamecomm.ChangeTableResp;

        /**
         * Encodes the specified ChangeTableResp message. Does not implicitly {@link gamecomm.ChangeTableResp.verify|verify} messages.
         * @param message ChangeTableResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IChangeTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeTableResp message, length delimited. Does not implicitly {@link gamecomm.ChangeTableResp.verify|verify} messages.
         * @param message ChangeTableResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IChangeTableResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeTableResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ChangeTableResp;

        /**
         * Decodes a ChangeTableResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeTableResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ChangeTableResp;

        /**
         * Verifies a ChangeTableResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeTableResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeTableResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ChangeTableResp;

        /**
         * Creates a plain object from a ChangeTableResp message. Also converts values to other types if specified.
         * @param message ChangeTableResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ChangeTableResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeTableResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeOutResp. */
    interface IBeOutResp {

        /** BeOutResp UserID */
        UserID?: (number|Long|null);

        /** BeOutResp GameID */
        GameID?: (number|Long|null);

        /** BeOutResp Code */
        Code?: (number|null);

        /** BeOutResp Hints */
        Hints?: (string|null);
    }

    /** Represents a BeOutResp. */
    class BeOutResp implements IBeOutResp {

        /**
         * Constructs a new BeOutResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBeOutResp);

        /** BeOutResp UserID. */
        public UserID: (number|Long);

        /** BeOutResp GameID. */
        public GameID: (number|Long);

        /** BeOutResp Code. */
        public Code: number;

        /** BeOutResp Hints. */
        public Hints: string;

        /**
         * Creates a new BeOutResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeOutResp instance
         */
        public static create(properties?: gamecomm.IBeOutResp): gamecomm.BeOutResp;

        /**
         * Encodes the specified BeOutResp message. Does not implicitly {@link gamecomm.BeOutResp.verify|verify} messages.
         * @param message BeOutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBeOutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeOutResp message, length delimited. Does not implicitly {@link gamecomm.BeOutResp.verify|verify} messages.
         * @param message BeOutResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBeOutResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeOutResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeOutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BeOutResp;

        /**
         * Decodes a BeOutResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeOutResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BeOutResp;

        /**
         * Verifies a BeOutResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeOutResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeOutResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BeOutResp;

        /**
         * Creates a plain object from a BeOutResp message. Also converts values to other types if specified.
         * @param message BeOutResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BeOutResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeOutResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetInningsInfoReq. */
    interface IGetInningsInfoReq {

        /** GetInningsInfoReq GameID */
        GameID?: (number|Long|null);
    }

    /** Represents a GetInningsInfoReq. */
    class GetInningsInfoReq implements IGetInningsInfoReq {

        /**
         * Constructs a new GetInningsInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGetInningsInfoReq);

        /** GetInningsInfoReq GameID. */
        public GameID: (number|Long);

        /**
         * Creates a new GetInningsInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetInningsInfoReq instance
         */
        public static create(properties?: gamecomm.IGetInningsInfoReq): gamecomm.GetInningsInfoReq;

        /**
         * Encodes the specified GetInningsInfoReq message. Does not implicitly {@link gamecomm.GetInningsInfoReq.verify|verify} messages.
         * @param message GetInningsInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGetInningsInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetInningsInfoReq message, length delimited. Does not implicitly {@link gamecomm.GetInningsInfoReq.verify|verify} messages.
         * @param message GetInningsInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGetInningsInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetInningsInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetInningsInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GetInningsInfoReq;

        /**
         * Decodes a GetInningsInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetInningsInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GetInningsInfoReq;

        /**
         * Verifies a GetInningsInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetInningsInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetInningsInfoReq
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GetInningsInfoReq;

        /**
         * Creates a plain object from a GetInningsInfoReq message. Also converts values to other types if specified.
         * @param message GetInningsInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GetInningsInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetInningsInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetInningsInfoResp. */
    interface IGetInningsInfoResp {

        /** GetInningsInfoResp Innings */
        Innings?: (gamecomm.IInningInfo[]|null);

        /** GetInningsInfoResp PageNum */
        PageNum?: (number|null);
    }

    /** Represents a GetInningsInfoResp. */
    class GetInningsInfoResp implements IGetInningsInfoResp {

        /**
         * Constructs a new GetInningsInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGetInningsInfoResp);

        /** GetInningsInfoResp Innings. */
        public Innings: gamecomm.IInningInfo[];

        /** GetInningsInfoResp PageNum. */
        public PageNum: number;

        /**
         * Creates a new GetInningsInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetInningsInfoResp instance
         */
        public static create(properties?: gamecomm.IGetInningsInfoResp): gamecomm.GetInningsInfoResp;

        /**
         * Encodes the specified GetInningsInfoResp message. Does not implicitly {@link gamecomm.GetInningsInfoResp.verify|verify} messages.
         * @param message GetInningsInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGetInningsInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetInningsInfoResp message, length delimited. Does not implicitly {@link gamecomm.GetInningsInfoResp.verify|verify} messages.
         * @param message GetInningsInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGetInningsInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetInningsInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetInningsInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GetInningsInfoResp;

        /**
         * Decodes a GetInningsInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetInningsInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GetInningsInfoResp;

        /**
         * Verifies a GetInningsInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetInningsInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetInningsInfoResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GetInningsInfoResp;

        /**
         * Creates a plain object from a GetInningsInfoResp message. Also converts values to other types if specified.
         * @param message GetInningsInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GetInningsInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetInningsInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOverReq. */
    interface IGameOverReq {

        /** GameOverReq GameID */
        GameID?: (number|Long|null);
    }

    /** Represents a GameOverReq. */
    class GameOverReq implements IGameOverReq {

        /**
         * Constructs a new GameOverReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameOverReq);

        /** GameOverReq GameID. */
        public GameID: (number|Long);

        /**
         * Creates a new GameOverReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverReq instance
         */
        public static create(properties?: gamecomm.IGameOverReq): gamecomm.GameOverReq;

        /**
         * Encodes the specified GameOverReq message. Does not implicitly {@link gamecomm.GameOverReq.verify|verify} messages.
         * @param message GameOverReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameOverReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameOverReq message, length delimited. Does not implicitly {@link gamecomm.GameOverReq.verify|verify} messages.
         * @param message GameOverReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameOverReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOverReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameOverReq;

        /**
         * Decodes a GameOverReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameOverReq;

        /**
         * Verifies a GameOverReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOverReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOverReq
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameOverReq;

        /**
         * Creates a plain object from a GameOverReq message. Also converts values to other types if specified.
         * @param message GameOverReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameOverReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOverReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameOverResp. */
    interface IGameOverResp {

        /** GameOverResp Innings */
        Innings?: (gamecomm.IInningInfo[]|null);

        /** GameOverResp PageNum */
        PageNum?: (number|null);
    }

    /** Represents a GameOverResp. */
    class GameOverResp implements IGameOverResp {

        /**
         * Constructs a new GameOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameOverResp);

        /** GameOverResp Innings. */
        public Innings: gamecomm.IInningInfo[];

        /** GameOverResp PageNum. */
        public PageNum: number;

        /**
         * Creates a new GameOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameOverResp instance
         */
        public static create(properties?: gamecomm.IGameOverResp): gamecomm.GameOverResp;

        /**
         * Encodes the specified GameOverResp message. Does not implicitly {@link gamecomm.GameOverResp.verify|verify} messages.
         * @param message GameOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameOverResp message, length delimited. Does not implicitly {@link gamecomm.GameOverResp.verify|verify} messages.
         * @param message GameOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameOverResp;

        /**
         * Decodes a GameOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameOverResp;

        /**
         * Verifies a GameOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameOverResp
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameOverResp;

        /**
         * Creates a plain object from a GameOverResp message. Also converts values to other types if specified.
         * @param message GameOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
