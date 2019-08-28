import * as $protobuf from "protobufjs";
/** Namespace qhb. */
export namespace qhb {

    /** Properties of a Reply. */
    interface IReply {

        /** Reply code */
        code?: (number|null);

        /** Reply msg */
        msg?: (string|null);
    }

    /** Represents a Reply. */
    class Reply implements IReply {

        /**
         * Constructs a new Reply.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.IReply);

        /** Reply code. */
        public code: number;

        /** Reply msg. */
        public msg: string;

        /**
         * Creates a new Reply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reply instance
         */
        public static create(properties?: qhb.IReply): qhb.Reply;

        /**
         * Encodes the specified Reply message. Does not implicitly {@link qhb.Reply.verify|verify} messages.
         * @param message Reply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reply message, length delimited. Does not implicitly {@link qhb.Reply.verify|verify} messages.
         * @param message Reply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.Reply;

        /**
         * Decodes a Reply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.Reply;

        /**
         * Verifies a Reply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Reply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reply
         */
        public static fromObject(object: { [k: string]: any }): qhb.Reply;

        /**
         * Creates a plain object from a Reply message. Also converts values to other types if specified.
         * @param message Reply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IntArr. */
    interface IIntArr {

        /** IntArr arr */
        arr?: (number[]|null);
    }

    /** Represents an IntArr. */
    class IntArr implements IIntArr {

        /**
         * Constructs a new IntArr.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.IIntArr);

        /** IntArr arr. */
        public arr: number[];

        /**
         * Creates a new IntArr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntArr instance
         */
        public static create(properties?: qhb.IIntArr): qhb.IntArr;

        /**
         * Encodes the specified IntArr message. Does not implicitly {@link qhb.IntArr.verify|verify} messages.
         * @param message IntArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.IIntArr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntArr message, length delimited. Does not implicitly {@link qhb.IntArr.verify|verify} messages.
         * @param message IntArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.IIntArr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.IntArr;

        /**
         * Decodes an IntArr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.IntArr;

        /**
         * Verifies an IntArr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IntArr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IntArr
         */
        public static fromObject(object: { [k: string]: any }): qhb.IntArr;

        /**
         * Creates a plain object from an IntArr message. Also converts values to other types if specified.
         * @param message IntArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.IntArr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IntArr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Player. */
    interface IPlayer {

        /** Player userId */
        userId?: (number|null);

        /** Player nickName */
        nickName?: (string|null);

        /** Player headImg */
        headImg?: (string|null);

        /** Player sex */
        sex?: (number|null);

        /** Player ip */
        ip?: (string|null);

        /** Player isApply */
        isApply?: (number|null);

        /** Player coin */
        coin?: (number|null);

        /** Player state */
        state?: (number|null);

        /** Player canDeal */
        canDeal?: (boolean|null);

        /** Player currentScore */
        currentScore?: (number|null);

        /** Player revenue */
        revenue?: (number|null);

        /** Player totalScore */
        totalScore?: (number|null);

        /** Player bagBoom */
        bagBoom?: (number|null);

        /** Player bagMoney */
        bagMoney?: (number|null);

        /** Player money */
        money?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.IPlayer);

        /** Player userId. */
        public userId: number;

        /** Player nickName. */
        public nickName: string;

        /** Player headImg. */
        public headImg: string;

        /** Player sex. */
        public sex: number;

        /** Player ip. */
        public ip: string;

        /** Player isApply. */
        public isApply: number;

        /** Player coin. */
        public coin: number;

        /** Player state. */
        public state: number;

        /** Player canDeal. */
        public canDeal: boolean;

        /** Player currentScore. */
        public currentScore: number;

        /** Player revenue. */
        public revenue: number;

        /** Player totalScore. */
        public totalScore: number;

        /** Player bagBoom. */
        public bagBoom: number;

        /** Player bagMoney. */
        public bagMoney: number;

        /** Player money. */
        public money: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: qhb.IPlayer): qhb.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link qhb.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link qhb.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.Player;

        /**
         * Verifies a Player message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Player
         */
        public static fromObject(object: { [k: string]: any }): qhb.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Player to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableInfo. */
    interface ITableInfo {

        /** TableInfo tableId */
        tableId?: (string|null);

        /** TableInfo seq */
        seq?: (string|null);

        /** TableInfo gameId */
        gameId?: (number|null);

        /** TableInfo gameNo */
        gameNo?: (number|null);

        /** TableInfo minLimit */
        minLimit?: (number|null);

        /** TableInfo maxLimit */
        maxLimit?: (number|null);

        /** TableInfo bagMoneys */
        bagMoneys?: (number[]|null);

        /** TableInfo mult */
        mult?: (number|null);

        /** TableInfo state */
        state?: (number|null);

        /** TableInfo bagNum */
        bagNum?: (number|null);

        /** TableInfo bingoUsers */
        bingoUsers?: (qhb.IPlayer[]|null);

        /** TableInfo currentMoney */
        currentMoney?: (number|null);

        /** TableInfo currentBoom */
        currentBoom?: (number|null);

        /** TableInfo bankerName */
        bankerName?: (string|null);

        /** TableInfo bankerHeadImg */
        bankerHeadImg?: (string|null);

        /** TableInfo bankerCoin */
        bankerCoin?: (number|null);

        /** TableInfo selfIndexInApplyList */
        selfIndexInApplyList?: (number|null);

        /** TableInfo selfInfo */
        selfInfo?: (qhb.IPlayer|null);
    }

    /** Represents a TableInfo. */
    class TableInfo implements ITableInfo {

        /**
         * Constructs a new TableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.ITableInfo);

        /** TableInfo tableId. */
        public tableId: string;

        /** TableInfo seq. */
        public seq: string;

        /** TableInfo gameId. */
        public gameId: number;

        /** TableInfo gameNo. */
        public gameNo: number;

        /** TableInfo minLimit. */
        public minLimit: number;

        /** TableInfo maxLimit. */
        public maxLimit: number;

        /** TableInfo bagMoneys. */
        public bagMoneys: number[];

        /** TableInfo mult. */
        public mult: number;

        /** TableInfo state. */
        public state: number;

        /** TableInfo bagNum. */
        public bagNum: number;

        /** TableInfo bingoUsers. */
        public bingoUsers: qhb.IPlayer[];

        /** TableInfo currentMoney. */
        public currentMoney: number;

        /** TableInfo currentBoom. */
        public currentBoom: number;

        /** TableInfo bankerName. */
        public bankerName: string;

        /** TableInfo bankerHeadImg. */
        public bankerHeadImg: string;

        /** TableInfo bankerCoin. */
        public bankerCoin: number;

        /** TableInfo selfIndexInApplyList. */
        public selfIndexInApplyList: number;

        /** TableInfo selfInfo. */
        public selfInfo?: (qhb.IPlayer|null);

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfo instance
         */
        public static create(properties?: qhb.ITableInfo): qhb.TableInfo;

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link qhb.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link qhb.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.TableInfo;

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.TableInfo;

        /**
         * Verifies a TableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableInfo
         */
        public static fromObject(object: { [k: string]: any }): qhb.TableInfo;

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @param message TableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.TableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableOutCard. */
    interface ITableOutCard {

        /** TableOutCard type */
        type?: (number|null);

        /** TableOutCard handCards */
        handCards?: (number[]|null);

        /** TableOutCard cardsNum */
        cardsNum?: (number[]|null);

        /** TableOutCard pos */
        pos?: (number|null);

        /** TableOutCard userPos */
        userPos?: (number|null);

        /** TableOutCard index */
        index?: (number|null);

        /** TableOutCard hasStopped */
        hasStopped?: (boolean|null);

        /** TableOutCard betCoin */
        betCoin?: (number|null);
    }

    /** Represents a TableOutCard. */
    class TableOutCard implements ITableOutCard {

        /**
         * Constructs a new TableOutCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.ITableOutCard);

        /** TableOutCard type. */
        public type: number;

        /** TableOutCard handCards. */
        public handCards: number[];

        /** TableOutCard cardsNum. */
        public cardsNum: number[];

        /** TableOutCard pos. */
        public pos: number;

        /** TableOutCard userPos. */
        public userPos: number;

        /** TableOutCard index. */
        public index: number;

        /** TableOutCard hasStopped. */
        public hasStopped: boolean;

        /** TableOutCard betCoin. */
        public betCoin: number;

        /**
         * Creates a new TableOutCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableOutCard instance
         */
        public static create(properties?: qhb.ITableOutCard): qhb.TableOutCard;

        /**
         * Encodes the specified TableOutCard message. Does not implicitly {@link qhb.TableOutCard.verify|verify} messages.
         * @param message TableOutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.ITableOutCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableOutCard message, length delimited. Does not implicitly {@link qhb.TableOutCard.verify|verify} messages.
         * @param message TableOutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.ITableOutCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableOutCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.TableOutCard;

        /**
         * Decodes a TableOutCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.TableOutCard;

        /**
         * Verifies a TableOutCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableOutCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableOutCard
         */
        public static fromObject(object: { [k: string]: any }): qhb.TableOutCard;

        /**
         * Creates a plain object from a TableOutCard message. Also converts values to other types if specified.
         * @param message TableOutCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.TableOutCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableOutCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Prize. */
    interface IPrize {

        /** Prize one */
        one?: (string|null);

        /** Prize two */
        two?: (string|null);
    }

    /** Represents a Prize. */
    class Prize implements IPrize {

        /**
         * Constructs a new Prize.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.IPrize);

        /** Prize one. */
        public one: string;

        /** Prize two. */
        public two: string;

        /**
         * Creates a new Prize instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Prize instance
         */
        public static create(properties?: qhb.IPrize): qhb.Prize;

        /**
         * Encodes the specified Prize message. Does not implicitly {@link qhb.Prize.verify|verify} messages.
         * @param message Prize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.IPrize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Prize message, length delimited. Does not implicitly {@link qhb.Prize.verify|verify} messages.
         * @param message Prize message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.IPrize, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Prize message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Prize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.Prize;

        /**
         * Decodes a Prize message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Prize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.Prize;

        /**
         * Verifies a Prize message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Prize message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Prize
         */
        public static fromObject(object: { [k: string]: any }): qhb.Prize;

        /**
         * Creates a plain object from a Prize message. Also converts values to other types if specified.
         * @param message Prize
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.Prize, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Prize to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_delayCheck. */
    interface Ic2s_delayCheck {
    }

    /** Represents a c2s_delayCheck. */
    class c2s_delayCheck implements Ic2s_delayCheck {

        /**
         * Constructs a new c2s_delayCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_delayCheck);

        /**
         * Creates a new c2s_delayCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_delayCheck instance
         */
        public static create(properties?: qhb.Ic2s_delayCheck): qhb.c2s_delayCheck;

        /**
         * Encodes the specified c2s_delayCheck message. Does not implicitly {@link qhb.c2s_delayCheck.verify|verify} messages.
         * @param message c2s_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_delayCheck message, length delimited. Does not implicitly {@link qhb.c2s_delayCheck.verify|verify} messages.
         * @param message c2s_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_delayCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_delayCheck;

        /**
         * Decodes a c2s_delayCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_delayCheck;

        /**
         * Verifies a c2s_delayCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_delayCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_delayCheck
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_delayCheck;

        /**
         * Creates a plain object from a c2s_delayCheck message. Also converts values to other types if specified.
         * @param message c2s_delayCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_delayCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_delayCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_delayCheck. */
    interface Is2c_delayCheck {

        /** s2c_delayCheck ret */
        ret?: (qhb.IReply|null);
    }

    /** Represents a s2c_delayCheck. */
    class s2c_delayCheck implements Is2c_delayCheck {

        /**
         * Constructs a new s2c_delayCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_delayCheck);

        /** s2c_delayCheck ret. */
        public ret?: (qhb.IReply|null);

        /**
         * Creates a new s2c_delayCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_delayCheck instance
         */
        public static create(properties?: qhb.Is2c_delayCheck): qhb.s2c_delayCheck;

        /**
         * Encodes the specified s2c_delayCheck message. Does not implicitly {@link qhb.s2c_delayCheck.verify|verify} messages.
         * @param message s2c_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_delayCheck message, length delimited. Does not implicitly {@link qhb.s2c_delayCheck.verify|verify} messages.
         * @param message s2c_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_delayCheck;

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_delayCheck;

        /**
         * Verifies a s2c_delayCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_delayCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_delayCheck
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_delayCheck;

        /**
         * Creates a plain object from a s2c_delayCheck message. Also converts values to other types if specified.
         * @param message s2c_delayCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_delayCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_delayCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_foucedOffline. */
    interface Ic2s_foucedOffline {

        /** c2s_foucedOffline userId */
        userId?: (number|null);
    }

    /** Represents a c2s_foucedOffline. */
    class c2s_foucedOffline implements Ic2s_foucedOffline {

        /**
         * Constructs a new c2s_foucedOffline.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_foucedOffline);

        /** c2s_foucedOffline userId. */
        public userId: number;

        /**
         * Creates a new c2s_foucedOffline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_foucedOffline instance
         */
        public static create(properties?: qhb.Ic2s_foucedOffline): qhb.c2s_foucedOffline;

        /**
         * Encodes the specified c2s_foucedOffline message. Does not implicitly {@link qhb.c2s_foucedOffline.verify|verify} messages.
         * @param message c2s_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_foucedOffline message, length delimited. Does not implicitly {@link qhb.c2s_foucedOffline.verify|verify} messages.
         * @param message c2s_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_foucedOffline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_foucedOffline;

        /**
         * Decodes a c2s_foucedOffline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_foucedOffline;

        /**
         * Verifies a c2s_foucedOffline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_foucedOffline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_foucedOffline
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_foucedOffline;

        /**
         * Creates a plain object from a c2s_foucedOffline message. Also converts values to other types if specified.
         * @param message c2s_foucedOffline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_foucedOffline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_foucedOffline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_foucedOffline. */
    interface Is2c_foucedOffline {

        /** s2c_foucedOffline ret */
        ret?: (qhb.IReply|null);
    }

    /** Represents a s2c_foucedOffline. */
    class s2c_foucedOffline implements Is2c_foucedOffline {

        /**
         * Constructs a new s2c_foucedOffline.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_foucedOffline);

        /** s2c_foucedOffline ret. */
        public ret?: (qhb.IReply|null);

        /**
         * Creates a new s2c_foucedOffline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_foucedOffline instance
         */
        public static create(properties?: qhb.Is2c_foucedOffline): qhb.s2c_foucedOffline;

        /**
         * Encodes the specified s2c_foucedOffline message. Does not implicitly {@link qhb.s2c_foucedOffline.verify|verify} messages.
         * @param message s2c_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_foucedOffline message, length delimited. Does not implicitly {@link qhb.s2c_foucedOffline.verify|verify} messages.
         * @param message s2c_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_foucedOffline;

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_foucedOffline;

        /**
         * Verifies a s2c_foucedOffline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_foucedOffline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_foucedOffline
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_foucedOffline;

        /**
         * Creates a plain object from a s2c_foucedOffline message. Also converts values to other types if specified.
         * @param message s2c_foucedOffline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_foucedOffline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_foucedOffline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_adminKickedOut. */
    interface Ic2s_adminKickedOut {

        /** c2s_adminKickedOut userId */
        userId?: (number|null);
    }

    /** Represents a c2s_adminKickedOut. */
    class c2s_adminKickedOut implements Ic2s_adminKickedOut {

        /**
         * Constructs a new c2s_adminKickedOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_adminKickedOut);

        /** c2s_adminKickedOut userId. */
        public userId: number;

        /**
         * Creates a new c2s_adminKickedOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_adminKickedOut instance
         */
        public static create(properties?: qhb.Ic2s_adminKickedOut): qhb.c2s_adminKickedOut;

        /**
         * Encodes the specified c2s_adminKickedOut message. Does not implicitly {@link qhb.c2s_adminKickedOut.verify|verify} messages.
         * @param message c2s_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_adminKickedOut message, length delimited. Does not implicitly {@link qhb.c2s_adminKickedOut.verify|verify} messages.
         * @param message c2s_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_adminKickedOut;

        /**
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_adminKickedOut;

        /**
         * Verifies a c2s_adminKickedOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_adminKickedOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_adminKickedOut
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_adminKickedOut;

        /**
         * Creates a plain object from a c2s_adminKickedOut message. Also converts values to other types if specified.
         * @param message c2s_adminKickedOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_adminKickedOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_adminKickedOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_adminKickedOut. */
    interface Is2c_adminKickedOut {

        /** s2c_adminKickedOut ret */
        ret?: (qhb.IReply|null);
    }

    /** Represents a s2c_adminKickedOut. */
    class s2c_adminKickedOut implements Is2c_adminKickedOut {

        /**
         * Constructs a new s2c_adminKickedOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_adminKickedOut);

        /** s2c_adminKickedOut ret. */
        public ret?: (qhb.IReply|null);

        /**
         * Creates a new s2c_adminKickedOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_adminKickedOut instance
         */
        public static create(properties?: qhb.Is2c_adminKickedOut): qhb.s2c_adminKickedOut;

        /**
         * Encodes the specified s2c_adminKickedOut message. Does not implicitly {@link qhb.s2c_adminKickedOut.verify|verify} messages.
         * @param message s2c_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_adminKickedOut message, length delimited. Does not implicitly {@link qhb.s2c_adminKickedOut.verify|verify} messages.
         * @param message s2c_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_adminKickedOut;

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_adminKickedOut;

        /**
         * Verifies a s2c_adminKickedOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_adminKickedOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_adminKickedOut
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_adminKickedOut;

        /**
         * Creates a plain object from a s2c_adminKickedOut message. Also converts values to other types if specified.
         * @param message s2c_adminKickedOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_adminKickedOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_adminKickedOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_refreshCoin. */
    interface Ic2s_refreshCoin {

        /** c2s_refreshCoin userId */
        userId?: (number|null);

        /** c2s_refreshCoin type */
        type?: (number|null);

        /** c2s_refreshCoin coin */
        coin?: (number|null);
    }

    /** Represents a c2s_refreshCoin. */
    class c2s_refreshCoin implements Ic2s_refreshCoin {

        /**
         * Constructs a new c2s_refreshCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_refreshCoin);

        /** c2s_refreshCoin userId. */
        public userId: number;

        /** c2s_refreshCoin type. */
        public type: number;

        /** c2s_refreshCoin coin. */
        public coin: number;

        /**
         * Creates a new c2s_refreshCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_refreshCoin instance
         */
        public static create(properties?: qhb.Ic2s_refreshCoin): qhb.c2s_refreshCoin;

        /**
         * Encodes the specified c2s_refreshCoin message. Does not implicitly {@link qhb.c2s_refreshCoin.verify|verify} messages.
         * @param message c2s_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_refreshCoin message, length delimited. Does not implicitly {@link qhb.c2s_refreshCoin.verify|verify} messages.
         * @param message c2s_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_refreshCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_refreshCoin;

        /**
         * Decodes a c2s_refreshCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_refreshCoin;

        /**
         * Verifies a c2s_refreshCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_refreshCoin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_refreshCoin
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_refreshCoin;

        /**
         * Creates a plain object from a c2s_refreshCoin message. Also converts values to other types if specified.
         * @param message c2s_refreshCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_refreshCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_refreshCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_refreshCoin. */
    interface Is2c_refreshCoin {

        /** s2c_refreshCoin userId */
        userId?: (number|null);

        /** s2c_refreshCoin coin */
        coin?: (number|null);

        /** s2c_refreshCoin isInTable */
        isInTable?: (boolean|null);

        /** s2c_refreshCoin type */
        type?: (number|null);

        /** s2c_refreshCoin addCoin */
        addCoin?: (number|null);
    }

    /** Represents a s2c_refreshCoin. */
    class s2c_refreshCoin implements Is2c_refreshCoin {

        /**
         * Constructs a new s2c_refreshCoin.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_refreshCoin);

        /** s2c_refreshCoin userId. */
        public userId: number;

        /** s2c_refreshCoin coin. */
        public coin: number;

        /** s2c_refreshCoin isInTable. */
        public isInTable: boolean;

        /** s2c_refreshCoin type. */
        public type: number;

        /** s2c_refreshCoin addCoin. */
        public addCoin: number;

        /**
         * Creates a new s2c_refreshCoin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_refreshCoin instance
         */
        public static create(properties?: qhb.Is2c_refreshCoin): qhb.s2c_refreshCoin;

        /**
         * Encodes the specified s2c_refreshCoin message. Does not implicitly {@link qhb.s2c_refreshCoin.verify|verify} messages.
         * @param message s2c_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_refreshCoin message, length delimited. Does not implicitly {@link qhb.s2c_refreshCoin.verify|verify} messages.
         * @param message s2c_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_refreshCoin;

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_refreshCoin;

        /**
         * Verifies a s2c_refreshCoin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_refreshCoin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_refreshCoin
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_refreshCoin;

        /**
         * Creates a plain object from a s2c_refreshCoin message. Also converts values to other types if specified.
         * @param message s2c_refreshCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_refreshCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_refreshCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_apply. */
    interface Ic2s_apply {

        /** c2s_apply boom */
        boom?: (number|null);

        /** c2s_apply money */
        money?: (number|null);

        /** c2s_apply totalCount */
        totalCount?: (number|null);
    }

    /** Represents a c2s_apply. */
    class c2s_apply implements Ic2s_apply {

        /**
         * Constructs a new c2s_apply.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_apply);

        /** c2s_apply boom. */
        public boom: number;

        /** c2s_apply money. */
        public money: number;

        /** c2s_apply totalCount. */
        public totalCount: number;

        /**
         * Creates a new c2s_apply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_apply instance
         */
        public static create(properties?: qhb.Ic2s_apply): qhb.c2s_apply;

        /**
         * Encodes the specified c2s_apply message. Does not implicitly {@link qhb.c2s_apply.verify|verify} messages.
         * @param message c2s_apply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_apply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_apply message, length delimited. Does not implicitly {@link qhb.c2s_apply.verify|verify} messages.
         * @param message c2s_apply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_apply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_apply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_apply;

        /**
         * Decodes a c2s_apply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_apply;

        /**
         * Verifies a c2s_apply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_apply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_apply
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_apply;

        /**
         * Creates a plain object from a c2s_apply message. Also converts values to other types if specified.
         * @param message c2s_apply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_apply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_apply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_apply. */
    interface Is2c_apply {

        /** s2c_apply boom */
        boom?: (number|null);

        /** s2c_apply money */
        money?: (number|null);

        /** s2c_apply totalCount */
        totalCount?: (number|null);

        /** s2c_apply userId */
        userId?: (number|null);

        /** s2c_apply nickName */
        nickName?: (string|null);

        /** s2c_apply headImg */
        headImg?: (string|null);

        /** s2c_apply coin */
        coin?: (number|null);
    }

    /** Represents a s2c_apply. */
    class s2c_apply implements Is2c_apply {

        /**
         * Constructs a new s2c_apply.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_apply);

        /** s2c_apply boom. */
        public boom: number;

        /** s2c_apply money. */
        public money: number;

        /** s2c_apply totalCount. */
        public totalCount: number;

        /** s2c_apply userId. */
        public userId: number;

        /** s2c_apply nickName. */
        public nickName: string;

        /** s2c_apply headImg. */
        public headImg: string;

        /** s2c_apply coin. */
        public coin: number;

        /**
         * Creates a new s2c_apply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_apply instance
         */
        public static create(properties?: qhb.Is2c_apply): qhb.s2c_apply;

        /**
         * Encodes the specified s2c_apply message. Does not implicitly {@link qhb.s2c_apply.verify|verify} messages.
         * @param message s2c_apply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_apply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_apply message, length delimited. Does not implicitly {@link qhb.s2c_apply.verify|verify} messages.
         * @param message s2c_apply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_apply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_apply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_apply;

        /**
         * Decodes a s2c_apply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_apply;

        /**
         * Verifies a s2c_apply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_apply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_apply
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_apply;

        /**
         * Creates a plain object from a s2c_apply message. Also converts values to other types if specified.
         * @param message s2c_apply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_apply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_apply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_disApply. */
    interface Ic2s_disApply {
    }

    /** Represents a c2s_disApply. */
    class c2s_disApply implements Ic2s_disApply {

        /**
         * Constructs a new c2s_disApply.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_disApply);

        /**
         * Creates a new c2s_disApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_disApply instance
         */
        public static create(properties?: qhb.Ic2s_disApply): qhb.c2s_disApply;

        /**
         * Encodes the specified c2s_disApply message. Does not implicitly {@link qhb.c2s_disApply.verify|verify} messages.
         * @param message c2s_disApply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_disApply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_disApply message, length delimited. Does not implicitly {@link qhb.c2s_disApply.verify|verify} messages.
         * @param message c2s_disApply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_disApply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_disApply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_disApply;

        /**
         * Decodes a c2s_disApply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_disApply;

        /**
         * Verifies a c2s_disApply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_disApply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_disApply
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_disApply;

        /**
         * Creates a plain object from a c2s_disApply message. Also converts values to other types if specified.
         * @param message c2s_disApply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_disApply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_disApply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_disApply. */
    interface Is2c_disApply {

        /** s2c_disApply coin */
        coin?: (number|null);
    }

    /** Represents a s2c_disApply. */
    class s2c_disApply implements Is2c_disApply {

        /**
         * Constructs a new s2c_disApply.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_disApply);

        /** s2c_disApply coin. */
        public coin: number;

        /**
         * Creates a new s2c_disApply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_disApply instance
         */
        public static create(properties?: qhb.Is2c_disApply): qhb.s2c_disApply;

        /**
         * Encodes the specified s2c_disApply message. Does not implicitly {@link qhb.s2c_disApply.verify|verify} messages.
         * @param message s2c_disApply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_disApply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_disApply message, length delimited. Does not implicitly {@link qhb.s2c_disApply.verify|verify} messages.
         * @param message s2c_disApply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_disApply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_disApply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_disApply;

        /**
         * Decodes a s2c_disApply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_disApply;

        /**
         * Verifies a s2c_disApply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_disApply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_disApply
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_disApply;

        /**
         * Creates a plain object from a s2c_disApply message. Also converts values to other types if specified.
         * @param message s2c_disApply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_disApply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_disApply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_joinTable. */
    interface Ic2s_joinTable {

        /** c2s_joinTable sid */
        sid?: (string|null);

        /** c2s_joinTable tableType */
        tableType?: (number|null);
    }

    /** Represents a c2s_joinTable. */
    class c2s_joinTable implements Ic2s_joinTable {

        /**
         * Constructs a new c2s_joinTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_joinTable);

        /** c2s_joinTable sid. */
        public sid: string;

        /** c2s_joinTable tableType. */
        public tableType: number;

        /**
         * Creates a new c2s_joinTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_joinTable instance
         */
        public static create(properties?: qhb.Ic2s_joinTable): qhb.c2s_joinTable;

        /**
         * Encodes the specified c2s_joinTable message. Does not implicitly {@link qhb.c2s_joinTable.verify|verify} messages.
         * @param message c2s_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_joinTable message, length delimited. Does not implicitly {@link qhb.c2s_joinTable.verify|verify} messages.
         * @param message c2s_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_joinTable;

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_joinTable;

        /**
         * Verifies a c2s_joinTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_joinTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_joinTable
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_joinTable;

        /**
         * Creates a plain object from a c2s_joinTable message. Also converts values to other types if specified.
         * @param message c2s_joinTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_joinTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_joinTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_joinTable. */
    interface Is2c_joinTable {

        /** s2c_joinTable tableInfo */
        tableInfo?: (qhb.ITableInfo|null);
    }

    /** Represents a s2c_joinTable. */
    class s2c_joinTable implements Is2c_joinTable {

        /**
         * Constructs a new s2c_joinTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_joinTable);

        /** s2c_joinTable tableInfo. */
        public tableInfo?: (qhb.ITableInfo|null);

        /**
         * Creates a new s2c_joinTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_joinTable instance
         */
        public static create(properties?: qhb.Is2c_joinTable): qhb.s2c_joinTable;

        /**
         * Encodes the specified s2c_joinTable message. Does not implicitly {@link qhb.s2c_joinTable.verify|verify} messages.
         * @param message s2c_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_joinTable message, length delimited. Does not implicitly {@link qhb.s2c_joinTable.verify|verify} messages.
         * @param message s2c_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_joinTable;

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_joinTable;

        /**
         * Verifies a s2c_joinTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_joinTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_joinTable
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_joinTable;

        /**
         * Creates a plain object from a s2c_joinTable message. Also converts values to other types if specified.
         * @param message s2c_joinTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_joinTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_joinTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_getUserList. */
    interface Ic2s_getUserList {

        /** c2s_getUserList type */
        type?: (number|null);
    }

    /** Represents a c2s_getUserList. */
    class c2s_getUserList implements Ic2s_getUserList {

        /**
         * Constructs a new c2s_getUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_getUserList);

        /** c2s_getUserList type. */
        public type: number;

        /**
         * Creates a new c2s_getUserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_getUserList instance
         */
        public static create(properties?: qhb.Ic2s_getUserList): qhb.c2s_getUserList;

        /**
         * Encodes the specified c2s_getUserList message. Does not implicitly {@link qhb.c2s_getUserList.verify|verify} messages.
         * @param message c2s_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_getUserList message, length delimited. Does not implicitly {@link qhb.c2s_getUserList.verify|verify} messages.
         * @param message c2s_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_getUserList;

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_getUserList;

        /**
         * Verifies a c2s_getUserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_getUserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_getUserList
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_getUserList;

        /**
         * Creates a plain object from a c2s_getUserList message. Also converts values to other types if specified.
         * @param message c2s_getUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_getUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_getUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_getUserList. */
    interface Is2c_getUserList {

        /** s2c_getUserList users */
        users?: (qhb.IPlayer[]|null);

        /** s2c_getUserList selfInfo */
        selfInfo?: (qhb.IPlayer|null);
    }

    /** Represents a s2c_getUserList. */
    class s2c_getUserList implements Is2c_getUserList {

        /**
         * Constructs a new s2c_getUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_getUserList);

        /** s2c_getUserList users. */
        public users: qhb.IPlayer[];

        /** s2c_getUserList selfInfo. */
        public selfInfo?: (qhb.IPlayer|null);

        /**
         * Creates a new s2c_getUserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_getUserList instance
         */
        public static create(properties?: qhb.Is2c_getUserList): qhb.s2c_getUserList;

        /**
         * Encodes the specified s2c_getUserList message. Does not implicitly {@link qhb.s2c_getUserList.verify|verify} messages.
         * @param message s2c_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_getUserList message, length delimited. Does not implicitly {@link qhb.s2c_getUserList.verify|verify} messages.
         * @param message s2c_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_getUserList;

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_getUserList;

        /**
         * Verifies a s2c_getUserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_getUserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_getUserList
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_getUserList;

        /**
         * Creates a plain object from a s2c_getUserList message. Also converts values to other types if specified.
         * @param message s2c_getUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_getUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_getUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_qiang. */
    interface Ic2s_qiang {
    }

    /** Represents a c2s_qiang. */
    class c2s_qiang implements Ic2s_qiang {

        /**
         * Constructs a new c2s_qiang.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_qiang);

        /**
         * Creates a new c2s_qiang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_qiang instance
         */
        public static create(properties?: qhb.Ic2s_qiang): qhb.c2s_qiang;

        /**
         * Encodes the specified c2s_qiang message. Does not implicitly {@link qhb.c2s_qiang.verify|verify} messages.
         * @param message c2s_qiang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_qiang, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_qiang message, length delimited. Does not implicitly {@link qhb.c2s_qiang.verify|verify} messages.
         * @param message c2s_qiang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_qiang, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_qiang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_qiang;

        /**
         * Decodes a c2s_qiang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_qiang;

        /**
         * Verifies a c2s_qiang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_qiang message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_qiang
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_qiang;

        /**
         * Creates a plain object from a c2s_qiang message. Also converts values to other types if specified.
         * @param message c2s_qiang
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_qiang, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_qiang to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_qiang. */
    interface Is2c_qiang {

        /** s2c_qiang money */
        money?: (number|null);

        /** s2c_qiang coin */
        coin?: (number|null);
    }

    /** Represents a s2c_qiang. */
    class s2c_qiang implements Is2c_qiang {

        /**
         * Constructs a new s2c_qiang.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_qiang);

        /** s2c_qiang money. */
        public money: number;

        /** s2c_qiang coin. */
        public coin: number;

        /**
         * Creates a new s2c_qiang instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_qiang instance
         */
        public static create(properties?: qhb.Is2c_qiang): qhb.s2c_qiang;

        /**
         * Encodes the specified s2c_qiang message. Does not implicitly {@link qhb.s2c_qiang.verify|verify} messages.
         * @param message s2c_qiang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_qiang, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_qiang message, length delimited. Does not implicitly {@link qhb.s2c_qiang.verify|verify} messages.
         * @param message s2c_qiang message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_qiang, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_qiang message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_qiang;

        /**
         * Decodes a s2c_qiang message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_qiang;

        /**
         * Verifies a s2c_qiang message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_qiang message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_qiang
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_qiang;

        /**
         * Creates a plain object from a s2c_qiang message. Also converts values to other types if specified.
         * @param message s2c_qiang
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_qiang, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_qiang to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_qiangPush. */
    interface Is2c_qiangPush {

        /** s2c_qiangPush money */
        money?: (number|null);

        /** s2c_qiangPush userId */
        userId?: (number|null);

        /** s2c_qiangPush headImg */
        headImg?: (string|null);

        /** s2c_qiangPush nickName */
        nickName?: (string|null);
    }

    /** Represents a s2c_qiangPush. */
    class s2c_qiangPush implements Is2c_qiangPush {

        /**
         * Constructs a new s2c_qiangPush.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_qiangPush);

        /** s2c_qiangPush money. */
        public money: number;

        /** s2c_qiangPush userId. */
        public userId: number;

        /** s2c_qiangPush headImg. */
        public headImg: string;

        /** s2c_qiangPush nickName. */
        public nickName: string;

        /**
         * Creates a new s2c_qiangPush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_qiangPush instance
         */
        public static create(properties?: qhb.Is2c_qiangPush): qhb.s2c_qiangPush;

        /**
         * Encodes the specified s2c_qiangPush message. Does not implicitly {@link qhb.s2c_qiangPush.verify|verify} messages.
         * @param message s2c_qiangPush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_qiangPush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_qiangPush message, length delimited. Does not implicitly {@link qhb.s2c_qiangPush.verify|verify} messages.
         * @param message s2c_qiangPush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_qiangPush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_qiangPush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_qiangPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_qiangPush;

        /**
         * Decodes a s2c_qiangPush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_qiangPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_qiangPush;

        /**
         * Verifies a s2c_qiangPush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_qiangPush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_qiangPush
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_qiangPush;

        /**
         * Creates a plain object from a s2c_qiangPush message. Also converts values to other types if specified.
         * @param message s2c_qiangPush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_qiangPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_qiangPush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_reconnect. */
    interface Ic2s_reconnect {

        /** c2s_reconnect userId */
        userId?: (number|null);
    }

    /** Represents a c2s_reconnect. */
    class c2s_reconnect implements Ic2s_reconnect {

        /**
         * Constructs a new c2s_reconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_reconnect);

        /** c2s_reconnect userId. */
        public userId: number;

        /**
         * Creates a new c2s_reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_reconnect instance
         */
        public static create(properties?: qhb.Ic2s_reconnect): qhb.c2s_reconnect;

        /**
         * Encodes the specified c2s_reconnect message. Does not implicitly {@link qhb.c2s_reconnect.verify|verify} messages.
         * @param message c2s_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_reconnect message, length delimited. Does not implicitly {@link qhb.c2s_reconnect.verify|verify} messages.
         * @param message c2s_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_reconnect;

        /**
         * Decodes a c2s_reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_reconnect;

        /**
         * Verifies a c2s_reconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_reconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_reconnect
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_reconnect;

        /**
         * Creates a plain object from a c2s_reconnect message. Also converts values to other types if specified.
         * @param message c2s_reconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_reconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_reconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_reconnect. */
    interface Is2c_reconnect {

        /** s2c_reconnect tableInfo */
        tableInfo?: (qhb.ITableInfo|null);
    }

    /** Represents a s2c_reconnect. */
    class s2c_reconnect implements Is2c_reconnect {

        /**
         * Constructs a new s2c_reconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_reconnect);

        /** s2c_reconnect tableInfo. */
        public tableInfo?: (qhb.ITableInfo|null);

        /**
         * Creates a new s2c_reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_reconnect instance
         */
        public static create(properties?: qhb.Is2c_reconnect): qhb.s2c_reconnect;

        /**
         * Encodes the specified s2c_reconnect message. Does not implicitly {@link qhb.s2c_reconnect.verify|verify} messages.
         * @param message s2c_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_reconnect message, length delimited. Does not implicitly {@link qhb.s2c_reconnect.verify|verify} messages.
         * @param message s2c_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_reconnect;

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_reconnect;

        /**
         * Verifies a s2c_reconnect message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_reconnect message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_reconnect
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_reconnect;

        /**
         * Creates a plain object from a s2c_reconnect message. Also converts values to other types if specified.
         * @param message s2c_reconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_reconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_reconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_userOnBack. */
    interface Ic2s_userOnBack {

        /** c2s_userOnBack onBack */
        onBack?: (number|null);
    }

    /** Represents a c2s_userOnBack. */
    class c2s_userOnBack implements Ic2s_userOnBack {

        /**
         * Constructs a new c2s_userOnBack.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_userOnBack);

        /** c2s_userOnBack onBack. */
        public onBack: number;

        /**
         * Creates a new c2s_userOnBack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_userOnBack instance
         */
        public static create(properties?: qhb.Ic2s_userOnBack): qhb.c2s_userOnBack;

        /**
         * Encodes the specified c2s_userOnBack message. Does not implicitly {@link qhb.c2s_userOnBack.verify|verify} messages.
         * @param message c2s_userOnBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_userOnBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_userOnBack message, length delimited. Does not implicitly {@link qhb.c2s_userOnBack.verify|verify} messages.
         * @param message c2s_userOnBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_userOnBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_userOnBack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_userOnBack;

        /**
         * Decodes a c2s_userOnBack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_userOnBack;

        /**
         * Verifies a c2s_userOnBack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_userOnBack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_userOnBack
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_userOnBack;

        /**
         * Creates a plain object from a c2s_userOnBack message. Also converts values to other types if specified.
         * @param message c2s_userOnBack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_userOnBack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_userOnBack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_userOnBack. */
    interface Is2c_userOnBack {

        /** s2c_userOnBack userId */
        userId?: (number|null);
    }

    /** Represents a s2c_userOnBack. */
    class s2c_userOnBack implements Is2c_userOnBack {

        /**
         * Constructs a new s2c_userOnBack.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_userOnBack);

        /** s2c_userOnBack userId. */
        public userId: number;

        /**
         * Creates a new s2c_userOnBack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_userOnBack instance
         */
        public static create(properties?: qhb.Is2c_userOnBack): qhb.s2c_userOnBack;

        /**
         * Encodes the specified s2c_userOnBack message. Does not implicitly {@link qhb.s2c_userOnBack.verify|verify} messages.
         * @param message s2c_userOnBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_userOnBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_userOnBack message, length delimited. Does not implicitly {@link qhb.s2c_userOnBack.verify|verify} messages.
         * @param message s2c_userOnBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_userOnBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_userOnBack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_userOnBack;

        /**
         * Decodes a s2c_userOnBack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_userOnBack;

        /**
         * Verifies a s2c_userOnBack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_userOnBack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_userOnBack
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_userOnBack;

        /**
         * Creates a plain object from a s2c_userOnBack message. Also converts values to other types if specified.
         * @param message s2c_userOnBack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_userOnBack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_userOnBack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_userQuit. */
    interface Ic2s_userQuit {
    }

    /** Represents a c2s_userQuit. */
    class c2s_userQuit implements Ic2s_userQuit {

        /**
         * Constructs a new c2s_userQuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Ic2s_userQuit);

        /**
         * Creates a new c2s_userQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_userQuit instance
         */
        public static create(properties?: qhb.Ic2s_userQuit): qhb.c2s_userQuit;

        /**
         * Encodes the specified c2s_userQuit message. Does not implicitly {@link qhb.c2s_userQuit.verify|verify} messages.
         * @param message c2s_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Ic2s_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_userQuit message, length delimited. Does not implicitly {@link qhb.c2s_userQuit.verify|verify} messages.
         * @param message c2s_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Ic2s_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_userQuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.c2s_userQuit;

        /**
         * Decodes a c2s_userQuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.c2s_userQuit;

        /**
         * Verifies a c2s_userQuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_userQuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_userQuit
         */
        public static fromObject(object: { [k: string]: any }): qhb.c2s_userQuit;

        /**
         * Creates a plain object from a c2s_userQuit message. Also converts values to other types if specified.
         * @param message c2s_userQuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.c2s_userQuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_userQuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_userQuit. */
    interface Is2c_userQuit {

        /** s2c_userQuit userId */
        userId?: (number|null);
    }

    /** Represents a s2c_userQuit. */
    class s2c_userQuit implements Is2c_userQuit {

        /**
         * Constructs a new s2c_userQuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.Is2c_userQuit);

        /** s2c_userQuit userId. */
        public userId: number;

        /**
         * Creates a new s2c_userQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_userQuit instance
         */
        public static create(properties?: qhb.Is2c_userQuit): qhb.s2c_userQuit;

        /**
         * Encodes the specified s2c_userQuit message. Does not implicitly {@link qhb.s2c_userQuit.verify|verify} messages.
         * @param message s2c_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.Is2c_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_userQuit message, length delimited. Does not implicitly {@link qhb.s2c_userQuit.verify|verify} messages.
         * @param message s2c_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.Is2c_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_userQuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.s2c_userQuit;

        /**
         * Decodes a s2c_userQuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.s2c_userQuit;

        /**
         * Verifies a s2c_userQuit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_userQuit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_userQuit
         */
        public static fromObject(object: { [k: string]: any }): qhb.s2c_userQuit;

        /**
         * Creates a plain object from a s2c_userQuit message. Also converts values to other types if specified.
         * @param message s2c_userQuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.s2c_userQuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_userQuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (qhb.Request.CMD|null);

        /** Request apply */
        apply?: (qhb.Ic2s_apply|null);

        /** Request disApply */
        disApply?: (qhb.Ic2s_disApply|null);

        /** Request joinTable */
        joinTable?: (qhb.Ic2s_joinTable|null);

        /** Request getUserList */
        getUserList?: (qhb.Ic2s_getUserList|null);

        /** Request qiang */
        qiang?: (qhb.Ic2s_qiang|null);

        /** Request reconnect */
        reconnect?: (qhb.Ic2s_reconnect|null);

        /** Request userOnBack */
        userOnBack?: (qhb.Ic2s_userOnBack|null);

        /** Request userQuit */
        userQuit?: (qhb.Ic2s_userQuit|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.IRequest);

        /** Request cmd. */
        public cmd: qhb.Request.CMD;

        /** Request apply. */
        public apply?: (qhb.Ic2s_apply|null);

        /** Request disApply. */
        public disApply?: (qhb.Ic2s_disApply|null);

        /** Request joinTable. */
        public joinTable?: (qhb.Ic2s_joinTable|null);

        /** Request getUserList. */
        public getUserList?: (qhb.Ic2s_getUserList|null);

        /** Request qiang. */
        public qiang?: (qhb.Ic2s_qiang|null);

        /** Request reconnect. */
        public reconnect?: (qhb.Ic2s_reconnect|null);

        /** Request userOnBack. */
        public userOnBack?: (qhb.Ic2s_userOnBack|null);

        /** Request userQuit. */
        public userQuit?: (qhb.Ic2s_userQuit|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: qhb.IRequest): qhb.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link qhb.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link qhb.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): qhb.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Request {

        /** CMD enum. */
        enum CMD {
            UNKNOWN = 0,
            APPLY_REQ = 2004,
            APPLY_RESP = 2005,
            DISAPPLY_REQ = 2006,
            DISAPPLY_RESP = 2007,
            JOIN_COIN_TABLE_REQ = 20006,
            JOIN_COIN_TABLE_RESP = 20007,
            GET_USERLIST_REQ = 2020,
            GET_USERLIST_RESP = 2021,
            QIANG_REQ = 2000,
            QIANG_RESP = 2001,
            PUSHBET_RESP = 2003,
            PUSH_USER_RECONNECT_REQ = 2030,
            PUSH_USER_RECONNECT_RESP = 2031,
            USER_ONBACK_REQ = 2080,
            USER_ONBACK_RESP = 2081,
            USER_QUIT_REQ = 2044,
            USER_QUIT_RESP = 2045
        }
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (qhb.Response.ErrorCode|null);

        /** Response serverTime */
        serverTime?: (number|Long|null);

        /** Response cmd */
        cmd?: (qhb.Request.CMD|null);

        /** Response ret */
        ret?: (qhb.IReply|null);

        /** Response sendApply */
        sendApply?: (qhb.Is2c_apply|null);

        /** Response sendDisApply */
        sendDisApply?: (qhb.Is2c_disApply|null);

        /** Response sendJoinTable */
        sendJoinTable?: (qhb.Is2c_joinTable|null);

        /** Response sendGetUserList */
        sendGetUserList?: (qhb.Is2c_getUserList|null);

        /** Response sendQiang */
        sendQiang?: (qhb.Is2c_qiang|null);

        /** Response sendQiangPush */
        sendQiangPush?: (qhb.Is2c_qiangPush|null);

        /** Response sendReconnect */
        sendReconnect?: (qhb.Is2c_reconnect|null);

        /** Response sendUserOnBack */
        sendUserOnBack?: (qhb.Is2c_userOnBack|null);

        /** Response sendUserQuit */
        sendUserQuit?: (qhb.Is2c_userQuit|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: qhb.IResponse);

        /** Response error. */
        public error: qhb.Response.ErrorCode;

        /** Response serverTime. */
        public serverTime: (number|Long);

        /** Response cmd. */
        public cmd: qhb.Request.CMD;

        /** Response ret. */
        public ret?: (qhb.IReply|null);

        /** Response sendApply. */
        public sendApply?: (qhb.Is2c_apply|null);

        /** Response sendDisApply. */
        public sendDisApply?: (qhb.Is2c_disApply|null);

        /** Response sendJoinTable. */
        public sendJoinTable?: (qhb.Is2c_joinTable|null);

        /** Response sendGetUserList. */
        public sendGetUserList?: (qhb.Is2c_getUserList|null);

        /** Response sendQiang. */
        public sendQiang?: (qhb.Is2c_qiang|null);

        /** Response sendQiangPush. */
        public sendQiangPush?: (qhb.Is2c_qiangPush|null);

        /** Response sendReconnect. */
        public sendReconnect?: (qhb.Is2c_reconnect|null);

        /** Response sendUserOnBack. */
        public sendUserOnBack?: (qhb.Is2c_userOnBack|null);

        /** Response sendUserQuit. */
        public sendUserQuit?: (qhb.Is2c_userQuit|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: qhb.IResponse): qhb.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link qhb.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qhb.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link qhb.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qhb.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qhb.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qhb.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): qhb.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qhb.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Response {

        /** ErrorCode enum. */
        enum ErrorCode {
            NO_ERROR = 0,
            APPLY_ERROR = 3084,
            TABLE_NOT_FOIND_ERROR = 3008,
            NO_CHARGE_ERROR = 3091,
            USERBAN = 30002,
            NOT_IN_TABLE = 3011,
            ACCOUNT_NOT_ENOUGH_ERROR = 3004,
            APPLY_HAS_ERROR = 3085,
            QIANG_ERROR = 3082,
            JOIN_TABLE_ERROR = 3007,
            USER_LOGIN_ERROR = 3001,
            CHANNELID_GAMENO_ERROR = 3003,
            JOIN_MAX_ERROR = 3083,
            DISAPPLY_ERROR = 3087,
            GETUSERLIST_ERROR = 3081,
            QIANG_STATE_ERROR = 3089,
            QIANG_SELF_ERROR = 3088,
            RECONNET_ERROR = 3025,
            FOUCEDOFFLINE = 30001,
            USER_ONBACK_ERROR = 3056,
            TABLE_QUIT_ERROR = 3013
        }
    }
}
