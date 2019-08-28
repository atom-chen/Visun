import * as $protobuf from "protobufjs";
/** Namespace bjl. */
export namespace bjl {

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
        constructor(properties?: bjl.IReply);

        /** Reply code. */
        public code: number;

        /** Reply msg. */
        public msg: string;

        /**
         * Creates a new Reply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reply instance
         */
        public static create(properties?: bjl.IReply): bjl.Reply;

        /**
         * Encodes the specified Reply message. Does not implicitly {@link bjl.Reply.verify|verify} messages.
         * @param message Reply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reply message, length delimited. Does not implicitly {@link bjl.Reply.verify|verify} messages.
         * @param message Reply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.Reply;

        /**
         * Decodes a Reply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.Reply;

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
        public static fromObject(object: { [k: string]: any }): bjl.Reply;

        /**
         * Creates a plain object from a Reply message. Also converts values to other types if specified.
         * @param message Reply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: bjl.IIntArr);

        /** IntArr arr. */
        public arr: number[];

        /**
         * Creates a new IntArr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IntArr instance
         */
        public static create(properties?: bjl.IIntArr): bjl.IntArr;

        /**
         * Encodes the specified IntArr message. Does not implicitly {@link bjl.IntArr.verify|verify} messages.
         * @param message IntArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.IIntArr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IntArr message, length delimited. Does not implicitly {@link bjl.IntArr.verify|verify} messages.
         * @param message IntArr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.IIntArr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IntArr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.IntArr;

        /**
         * Decodes an IntArr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.IntArr;

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
        public static fromObject(object: { [k: string]: any }): bjl.IntArr;

        /**
         * Creates a plain object from an IntArr message. Also converts values to other types if specified.
         * @param message IntArr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.IntArr, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** Player betCoin */
        betCoin?: (number[]|null);

        /** Player currentScore */
        currentScore?: (number|null);

        /** Player totalScore */
        totalScore?: (number|null);

        /** Player revenue */
        revenue?: (number|null);

        /** Player coin */
        coin?: (number|null);
    }

    /** Represents a Player. */
    class Player implements IPlayer {

        /**
         * Constructs a new Player.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.IPlayer);

        /** Player userId. */
        public userId: number;

        /** Player nickName. */
        public nickName: string;

        /** Player headImg. */
        public headImg: string;

        /** Player sex. */
        public sex: number;

        /** Player betCoin. */
        public betCoin: number[];

        /** Player currentScore. */
        public currentScore: number;

        /** Player totalScore. */
        public totalScore: number;

        /** Player revenue. */
        public revenue: number;

        /** Player coin. */
        public coin: number;

        /**
         * Creates a new Player instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Player instance
         */
        public static create(properties?: bjl.IPlayer): bjl.Player;

        /**
         * Encodes the specified Player message. Does not implicitly {@link bjl.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link bjl.Player.verify|verify} messages.
         * @param message Player message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.IPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.Player;

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.Player;

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
        public static fromObject(object: { [k: string]: any }): bjl.Player;

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @param message Player
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.Player, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** TableInfo currentRound */
        currentRound?: (number|null);

        /** TableInfo gameId */
        gameId?: (number|null);

        /** TableInfo gameNo */
        gameNo?: (number|null);

        /** TableInfo minLimit */
        minLimit?: (number|null);

        /** TableInfo maxLimit */
        maxLimit?: (number|null);

        /** TableInfo allowBet */
        allowBet?: (number[]|null);

        /** TableInfo cardA */
        cardA?: (number[]|null);

        /** TableInfo cardB */
        cardB?: (number[]|null);

        /** TableInfo numA */
        numA?: (number|null);

        /** TableInfo numB */
        numB?: (number|null);

        /** TableInfo mult */
        mult?: (number[]|null);

        /** TableInfo state */
        state?: (number|null);

        /** TableInfo totalBet */
        totalBet?: (number[]|null);

        /** TableInfo winPoss */
        winPoss?: (number[]|null);

        /** TableInfo winPosRecord */
        winPosRecord?: (bjl.IIntArr[]|null);

        /** TableInfo remainCardsNum */
        remainCardsNum?: (number|null);

        /** TableInfo player */
        player?: (bjl.IPlayer|null);

        /** TableInfo richManList */
        richManList?: (bjl.IPlayer[]|null);
    }

    /** Represents a TableInfo. */
    class TableInfo implements ITableInfo {

        /**
         * Constructs a new TableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.ITableInfo);

        /** TableInfo tableId. */
        public tableId: string;

        /** TableInfo seq. */
        public seq: string;

        /** TableInfo currentRound. */
        public currentRound: number;

        /** TableInfo gameId. */
        public gameId: number;

        /** TableInfo gameNo. */
        public gameNo: number;

        /** TableInfo minLimit. */
        public minLimit: number;

        /** TableInfo maxLimit. */
        public maxLimit: number;

        /** TableInfo allowBet. */
        public allowBet: number[];

        /** TableInfo cardA. */
        public cardA: number[];

        /** TableInfo cardB. */
        public cardB: number[];

        /** TableInfo numA. */
        public numA: number;

        /** TableInfo numB. */
        public numB: number;

        /** TableInfo mult. */
        public mult: number[];

        /** TableInfo state. */
        public state: number;

        /** TableInfo totalBet. */
        public totalBet: number[];

        /** TableInfo winPoss. */
        public winPoss: number[];

        /** TableInfo winPosRecord. */
        public winPosRecord: bjl.IIntArr[];

        /** TableInfo remainCardsNum. */
        public remainCardsNum: number;

        /** TableInfo player. */
        public player?: (bjl.IPlayer|null);

        /** TableInfo richManList. */
        public richManList: bjl.IPlayer[];

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfo instance
         */
        public static create(properties?: bjl.ITableInfo): bjl.TableInfo;

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link bjl.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link bjl.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.TableInfo;

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.TableInfo;

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
        public static fromObject(object: { [k: string]: any }): bjl.TableInfo;

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @param message TableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.TableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfo to JSON.
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
        constructor(properties?: bjl.Ic2s_delayCheck);

        /**
         * Creates a new c2s_delayCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_delayCheck instance
         */
        public static create(properties?: bjl.Ic2s_delayCheck): bjl.c2s_delayCheck;

        /**
         * Encodes the specified c2s_delayCheck message. Does not implicitly {@link bjl.c2s_delayCheck.verify|verify} messages.
         * @param message c2s_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_delayCheck message, length delimited. Does not implicitly {@link bjl.c2s_delayCheck.verify|verify} messages.
         * @param message c2s_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_delayCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_delayCheck;

        /**
         * Decodes a c2s_delayCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_delayCheck;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_delayCheck;

        /**
         * Creates a plain object from a c2s_delayCheck message. Also converts values to other types if specified.
         * @param message c2s_delayCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_delayCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_delayCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_delayCheck. */
    interface Is2c_delayCheck {

        /** s2c_delayCheck ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_delayCheck. */
    class s2c_delayCheck implements Is2c_delayCheck {

        /**
         * Constructs a new s2c_delayCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_delayCheck);

        /** s2c_delayCheck ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_delayCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_delayCheck instance
         */
        public static create(properties?: bjl.Is2c_delayCheck): bjl.s2c_delayCheck;

        /**
         * Encodes the specified s2c_delayCheck message. Does not implicitly {@link bjl.s2c_delayCheck.verify|verify} messages.
         * @param message s2c_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_delayCheck message, length delimited. Does not implicitly {@link bjl.s2c_delayCheck.verify|verify} messages.
         * @param message s2c_delayCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_delayCheck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_delayCheck;

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_delayCheck;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_delayCheck;

        /**
         * Creates a plain object from a s2c_delayCheck message. Also converts values to other types if specified.
         * @param message s2c_delayCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_delayCheck, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: bjl.Ic2s_foucedOffline);

        /** c2s_foucedOffline userId. */
        public userId: number;

        /**
         * Creates a new c2s_foucedOffline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_foucedOffline instance
         */
        public static create(properties?: bjl.Ic2s_foucedOffline): bjl.c2s_foucedOffline;

        /**
         * Encodes the specified c2s_foucedOffline message. Does not implicitly {@link bjl.c2s_foucedOffline.verify|verify} messages.
         * @param message c2s_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_foucedOffline message, length delimited. Does not implicitly {@link bjl.c2s_foucedOffline.verify|verify} messages.
         * @param message c2s_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_foucedOffline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_foucedOffline;

        /**
         * Decodes a c2s_foucedOffline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_foucedOffline;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_foucedOffline;

        /**
         * Creates a plain object from a c2s_foucedOffline message. Also converts values to other types if specified.
         * @param message c2s_foucedOffline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_foucedOffline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_foucedOffline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_foucedOffline. */
    interface Is2c_foucedOffline {

        /** s2c_foucedOffline ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_foucedOffline. */
    class s2c_foucedOffline implements Is2c_foucedOffline {

        /**
         * Constructs a new s2c_foucedOffline.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_foucedOffline);

        /** s2c_foucedOffline ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_foucedOffline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_foucedOffline instance
         */
        public static create(properties?: bjl.Is2c_foucedOffline): bjl.s2c_foucedOffline;

        /**
         * Encodes the specified s2c_foucedOffline message. Does not implicitly {@link bjl.s2c_foucedOffline.verify|verify} messages.
         * @param message s2c_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_foucedOffline message, length delimited. Does not implicitly {@link bjl.s2c_foucedOffline.verify|verify} messages.
         * @param message s2c_foucedOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_foucedOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_foucedOffline;

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_foucedOffline;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_foucedOffline;

        /**
         * Creates a plain object from a s2c_foucedOffline message. Also converts values to other types if specified.
         * @param message s2c_foucedOffline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_foucedOffline, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: bjl.Ic2s_adminKickedOut);

        /** c2s_adminKickedOut userId. */
        public userId: number;

        /**
         * Creates a new c2s_adminKickedOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_adminKickedOut instance
         */
        public static create(properties?: bjl.Ic2s_adminKickedOut): bjl.c2s_adminKickedOut;

        /**
         * Encodes the specified c2s_adminKickedOut message. Does not implicitly {@link bjl.c2s_adminKickedOut.verify|verify} messages.
         * @param message c2s_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_adminKickedOut message, length delimited. Does not implicitly {@link bjl.c2s_adminKickedOut.verify|verify} messages.
         * @param message c2s_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_adminKickedOut;

        /**
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_adminKickedOut;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_adminKickedOut;

        /**
         * Creates a plain object from a c2s_adminKickedOut message. Also converts values to other types if specified.
         * @param message c2s_adminKickedOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_adminKickedOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_adminKickedOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_adminKickedOut. */
    interface Is2c_adminKickedOut {

        /** s2c_adminKickedOut ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_adminKickedOut. */
    class s2c_adminKickedOut implements Is2c_adminKickedOut {

        /**
         * Constructs a new s2c_adminKickedOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_adminKickedOut);

        /** s2c_adminKickedOut ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_adminKickedOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_adminKickedOut instance
         */
        public static create(properties?: bjl.Is2c_adminKickedOut): bjl.s2c_adminKickedOut;

        /**
         * Encodes the specified s2c_adminKickedOut message. Does not implicitly {@link bjl.s2c_adminKickedOut.verify|verify} messages.
         * @param message s2c_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_adminKickedOut message, length delimited. Does not implicitly {@link bjl.s2c_adminKickedOut.verify|verify} messages.
         * @param message s2c_adminKickedOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_adminKickedOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_adminKickedOut;

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_adminKickedOut;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_adminKickedOut;

        /**
         * Creates a plain object from a s2c_adminKickedOut message. Also converts values to other types if specified.
         * @param message s2c_adminKickedOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_adminKickedOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: bjl.Ic2s_refreshCoin);

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
        public static create(properties?: bjl.Ic2s_refreshCoin): bjl.c2s_refreshCoin;

        /**
         * Encodes the specified c2s_refreshCoin message. Does not implicitly {@link bjl.c2s_refreshCoin.verify|verify} messages.
         * @param message c2s_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_refreshCoin message, length delimited. Does not implicitly {@link bjl.c2s_refreshCoin.verify|verify} messages.
         * @param message c2s_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_refreshCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_refreshCoin;

        /**
         * Decodes a c2s_refreshCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_refreshCoin;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_refreshCoin;

        /**
         * Creates a plain object from a c2s_refreshCoin message. Also converts values to other types if specified.
         * @param message c2s_refreshCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_refreshCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: bjl.Is2c_refreshCoin);

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
        public static create(properties?: bjl.Is2c_refreshCoin): bjl.s2c_refreshCoin;

        /**
         * Encodes the specified s2c_refreshCoin message. Does not implicitly {@link bjl.s2c_refreshCoin.verify|verify} messages.
         * @param message s2c_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_refreshCoin message, length delimited. Does not implicitly {@link bjl.s2c_refreshCoin.verify|verify} messages.
         * @param message s2c_refreshCoin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_refreshCoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_refreshCoin;

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_refreshCoin;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_refreshCoin;

        /**
         * Creates a plain object from a s2c_refreshCoin message. Also converts values to other types if specified.
         * @param message s2c_refreshCoin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_refreshCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_refreshCoin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_bet. */
    interface Ic2s_bet {

        /** c2s_bet pos */
        pos?: (number|null);

        /** c2s_bet value */
        value?: (number|null);
    }

    /** Represents a c2s_bet. */
    class c2s_bet implements Ic2s_bet {

        /**
         * Constructs a new c2s_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Ic2s_bet);

        /** c2s_bet pos. */
        public pos: number;

        /** c2s_bet value. */
        public value: number;

        /**
         * Creates a new c2s_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_bet instance
         */
        public static create(properties?: bjl.Ic2s_bet): bjl.c2s_bet;

        /**
         * Encodes the specified c2s_bet message. Does not implicitly {@link bjl.c2s_bet.verify|verify} messages.
         * @param message c2s_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_bet message, length delimited. Does not implicitly {@link bjl.c2s_bet.verify|verify} messages.
         * @param message c2s_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_bet;

        /**
         * Decodes a c2s_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_bet;

        /**
         * Verifies a c2s_bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_bet
         */
        public static fromObject(object: { [k: string]: any }): bjl.c2s_bet;

        /**
         * Creates a plain object from a c2s_bet message. Also converts values to other types if specified.
         * @param message c2s_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_bet. */
    interface Is2c_bet {

        /** s2c_bet player */
        player?: (bjl.IPlayer|null);

        /** s2c_bet pos */
        pos?: (number|null);

        /** s2c_bet value */
        value?: (number|null);

        /** s2c_bet ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_bet. */
    class s2c_bet implements Is2c_bet {

        /**
         * Constructs a new s2c_bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_bet);

        /** s2c_bet player. */
        public player?: (bjl.IPlayer|null);

        /** s2c_bet pos. */
        public pos: number;

        /** s2c_bet value. */
        public value: number;

        /** s2c_bet ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_bet instance
         */
        public static create(properties?: bjl.Is2c_bet): bjl.s2c_bet;

        /**
         * Encodes the specified s2c_bet message. Does not implicitly {@link bjl.s2c_bet.verify|verify} messages.
         * @param message s2c_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_bet message, length delimited. Does not implicitly {@link bjl.s2c_bet.verify|verify} messages.
         * @param message s2c_bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_bet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_bet;

        /**
         * Decodes a s2c_bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_bet;

        /**
         * Verifies a s2c_bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_bet
         */
        public static fromObject(object: { [k: string]: any }): bjl.s2c_bet;

        /**
         * Creates a plain object from a s2c_bet message. Also converts values to other types if specified.
         * @param message s2c_bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_bet to JSON.
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
        constructor(properties?: bjl.Ic2s_joinTable);

        /** c2s_joinTable sid. */
        public sid: string;

        /** c2s_joinTable tableType. */
        public tableType: number;

        /**
         * Creates a new c2s_joinTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_joinTable instance
         */
        public static create(properties?: bjl.Ic2s_joinTable): bjl.c2s_joinTable;

        /**
         * Encodes the specified c2s_joinTable message. Does not implicitly {@link bjl.c2s_joinTable.verify|verify} messages.
         * @param message c2s_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_joinTable message, length delimited. Does not implicitly {@link bjl.c2s_joinTable.verify|verify} messages.
         * @param message c2s_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_joinTable;

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_joinTable;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_joinTable;

        /**
         * Creates a plain object from a c2s_joinTable message. Also converts values to other types if specified.
         * @param message c2s_joinTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_joinTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_joinTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_joinTable. */
    interface Is2c_joinTable {

        /** s2c_joinTable tableInfo */
        tableInfo?: (bjl.ITableInfo|null);

        /** s2c_joinTable ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_joinTable. */
    class s2c_joinTable implements Is2c_joinTable {

        /**
         * Constructs a new s2c_joinTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_joinTable);

        /** s2c_joinTable tableInfo. */
        public tableInfo?: (bjl.ITableInfo|null);

        /** s2c_joinTable ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_joinTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_joinTable instance
         */
        public static create(properties?: bjl.Is2c_joinTable): bjl.s2c_joinTable;

        /**
         * Encodes the specified s2c_joinTable message. Does not implicitly {@link bjl.s2c_joinTable.verify|verify} messages.
         * @param message s2c_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_joinTable message, length delimited. Does not implicitly {@link bjl.s2c_joinTable.verify|verify} messages.
         * @param message s2c_joinTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_joinTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_joinTable;

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_joinTable;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_joinTable;

        /**
         * Creates a plain object from a s2c_joinTable message. Also converts values to other types if specified.
         * @param message s2c_joinTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_joinTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_joinTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_getUserList. */
    interface Ic2s_getUserList {
    }

    /** Represents a c2s_getUserList. */
    class c2s_getUserList implements Ic2s_getUserList {

        /**
         * Constructs a new c2s_getUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Ic2s_getUserList);

        /**
         * Creates a new c2s_getUserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_getUserList instance
         */
        public static create(properties?: bjl.Ic2s_getUserList): bjl.c2s_getUserList;

        /**
         * Encodes the specified c2s_getUserList message. Does not implicitly {@link bjl.c2s_getUserList.verify|verify} messages.
         * @param message c2s_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_getUserList message, length delimited. Does not implicitly {@link bjl.c2s_getUserList.verify|verify} messages.
         * @param message c2s_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_getUserList;

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_getUserList;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_getUserList;

        /**
         * Creates a plain object from a c2s_getUserList message. Also converts values to other types if specified.
         * @param message c2s_getUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_getUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_getUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_getUserList. */
    interface Is2c_getUserList {

        /** s2c_getUserList ret */
        ret?: (bjl.IReply|null);

        /** s2c_getUserList richManList */
        richManList?: (bjl.IPlayer[]|null);
    }

    /** Represents a s2c_getUserList. */
    class s2c_getUserList implements Is2c_getUserList {

        /**
         * Constructs a new s2c_getUserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_getUserList);

        /** s2c_getUserList ret. */
        public ret?: (bjl.IReply|null);

        /** s2c_getUserList richManList. */
        public richManList: bjl.IPlayer[];

        /**
         * Creates a new s2c_getUserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_getUserList instance
         */
        public static create(properties?: bjl.Is2c_getUserList): bjl.s2c_getUserList;

        /**
         * Encodes the specified s2c_getUserList message. Does not implicitly {@link bjl.s2c_getUserList.verify|verify} messages.
         * @param message s2c_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_getUserList message, length delimited. Does not implicitly {@link bjl.s2c_getUserList.verify|verify} messages.
         * @param message s2c_getUserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_getUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_getUserList;

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_getUserList;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_getUserList;

        /**
         * Creates a plain object from a s2c_getUserList message. Also converts values to other types if specified.
         * @param message s2c_getUserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_getUserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_getUserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_noticePush. */
    interface Ic2s_noticePush {
    }

    /** Represents a c2s_noticePush. */
    class c2s_noticePush implements Ic2s_noticePush {

        /**
         * Constructs a new c2s_noticePush.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Ic2s_noticePush);

        /**
         * Creates a new c2s_noticePush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_noticePush instance
         */
        public static create(properties?: bjl.Ic2s_noticePush): bjl.c2s_noticePush;

        /**
         * Encodes the specified c2s_noticePush message. Does not implicitly {@link bjl.c2s_noticePush.verify|verify} messages.
         * @param message c2s_noticePush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_noticePush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_noticePush message, length delimited. Does not implicitly {@link bjl.c2s_noticePush.verify|verify} messages.
         * @param message c2s_noticePush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_noticePush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_noticePush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_noticePush;

        /**
         * Decodes a c2s_noticePush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_noticePush;

        /**
         * Verifies a c2s_noticePush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_noticePush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_noticePush
         */
        public static fromObject(object: { [k: string]: any }): bjl.c2s_noticePush;

        /**
         * Creates a plain object from a c2s_noticePush message. Also converts values to other types if specified.
         * @param message c2s_noticePush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_noticePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_noticePush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_noticePush. */
    interface Is2c_noticePush {

        /** s2c_noticePush ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_noticePush. */
    class s2c_noticePush implements Is2c_noticePush {

        /**
         * Constructs a new s2c_noticePush.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_noticePush);

        /** s2c_noticePush ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_noticePush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_noticePush instance
         */
        public static create(properties?: bjl.Is2c_noticePush): bjl.s2c_noticePush;

        /**
         * Encodes the specified s2c_noticePush message. Does not implicitly {@link bjl.s2c_noticePush.verify|verify} messages.
         * @param message s2c_noticePush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_noticePush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_noticePush message, length delimited. Does not implicitly {@link bjl.s2c_noticePush.verify|verify} messages.
         * @param message s2c_noticePush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_noticePush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_noticePush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_noticePush;

        /**
         * Decodes a s2c_noticePush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_noticePush;

        /**
         * Verifies a s2c_noticePush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_noticePush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_noticePush
         */
        public static fromObject(object: { [k: string]: any }): bjl.s2c_noticePush;

        /**
         * Creates a plain object from a s2c_noticePush message. Also converts values to other types if specified.
         * @param message s2c_noticePush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_noticePush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_noticePush to JSON.
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
        constructor(properties?: bjl.Ic2s_reconnect);

        /** c2s_reconnect userId. */
        public userId: number;

        /**
         * Creates a new c2s_reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_reconnect instance
         */
        public static create(properties?: bjl.Ic2s_reconnect): bjl.c2s_reconnect;

        /**
         * Encodes the specified c2s_reconnect message. Does not implicitly {@link bjl.c2s_reconnect.verify|verify} messages.
         * @param message c2s_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_reconnect message, length delimited. Does not implicitly {@link bjl.c2s_reconnect.verify|verify} messages.
         * @param message c2s_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_reconnect;

        /**
         * Decodes a c2s_reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_reconnect;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_reconnect;

        /**
         * Creates a plain object from a c2s_reconnect message. Also converts values to other types if specified.
         * @param message c2s_reconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_reconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_reconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_reconnect. */
    interface Is2c_reconnect {

        /** s2c_reconnect userId */
        userId?: (number|null);

        /** s2c_reconnect tableInfo */
        tableInfo?: (bjl.ITableInfo|null);

        /** s2c_reconnect token */
        token?: (string|null);

        /** s2c_reconnect ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_reconnect. */
    class s2c_reconnect implements Is2c_reconnect {

        /**
         * Constructs a new s2c_reconnect.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_reconnect);

        /** s2c_reconnect userId. */
        public userId: number;

        /** s2c_reconnect tableInfo. */
        public tableInfo?: (bjl.ITableInfo|null);

        /** s2c_reconnect token. */
        public token: string;

        /** s2c_reconnect ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_reconnect instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_reconnect instance
         */
        public static create(properties?: bjl.Is2c_reconnect): bjl.s2c_reconnect;

        /**
         * Encodes the specified s2c_reconnect message. Does not implicitly {@link bjl.s2c_reconnect.verify|verify} messages.
         * @param message s2c_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_reconnect message, length delimited. Does not implicitly {@link bjl.s2c_reconnect.verify|verify} messages.
         * @param message s2c_reconnect message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_reconnect, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_reconnect;

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_reconnect;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_reconnect;

        /**
         * Creates a plain object from a s2c_reconnect message. Also converts values to other types if specified.
         * @param message s2c_reconnect
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_reconnect, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_reconnect to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a c2s_userOnback. */
    interface Ic2s_userOnback {

        /** c2s_userOnback ret */
        ret?: (bjl.IReply|null);

        /** c2s_userOnback onback */
        onback?: (number|null);
    }

    /** Represents a c2s_userOnback. */
    class c2s_userOnback implements Ic2s_userOnback {

        /**
         * Constructs a new c2s_userOnback.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Ic2s_userOnback);

        /** c2s_userOnback ret. */
        public ret?: (bjl.IReply|null);

        /** c2s_userOnback onback. */
        public onback: number;

        /**
         * Creates a new c2s_userOnback instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_userOnback instance
         */
        public static create(properties?: bjl.Ic2s_userOnback): bjl.c2s_userOnback;

        /**
         * Encodes the specified c2s_userOnback message. Does not implicitly {@link bjl.c2s_userOnback.verify|verify} messages.
         * @param message c2s_userOnback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_userOnback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_userOnback message, length delimited. Does not implicitly {@link bjl.c2s_userOnback.verify|verify} messages.
         * @param message c2s_userOnback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_userOnback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_userOnback message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_userOnback;

        /**
         * Decodes a c2s_userOnback message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_userOnback;

        /**
         * Verifies a c2s_userOnback message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a c2s_userOnback message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns c2s_userOnback
         */
        public static fromObject(object: { [k: string]: any }): bjl.c2s_userOnback;

        /**
         * Creates a plain object from a c2s_userOnback message. Also converts values to other types if specified.
         * @param message c2s_userOnback
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_userOnback, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this c2s_userOnback to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a s2c_userOnback. */
    interface Is2c_userOnback {

        /** s2c_userOnback userId */
        userId?: (number|null);

        /** s2c_userOnback ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_userOnback. */
    class s2c_userOnback implements Is2c_userOnback {

        /**
         * Constructs a new s2c_userOnback.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_userOnback);

        /** s2c_userOnback userId. */
        public userId: number;

        /** s2c_userOnback ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_userOnback instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_userOnback instance
         */
        public static create(properties?: bjl.Is2c_userOnback): bjl.s2c_userOnback;

        /**
         * Encodes the specified s2c_userOnback message. Does not implicitly {@link bjl.s2c_userOnback.verify|verify} messages.
         * @param message s2c_userOnback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_userOnback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_userOnback message, length delimited. Does not implicitly {@link bjl.s2c_userOnback.verify|verify} messages.
         * @param message s2c_userOnback message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_userOnback, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_userOnback message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_userOnback;

        /**
         * Decodes a s2c_userOnback message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_userOnback;

        /**
         * Verifies a s2c_userOnback message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a s2c_userOnback message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns s2c_userOnback
         */
        public static fromObject(object: { [k: string]: any }): bjl.s2c_userOnback;

        /**
         * Creates a plain object from a s2c_userOnback message. Also converts values to other types if specified.
         * @param message s2c_userOnback
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_userOnback, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_userOnback to JSON.
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
        constructor(properties?: bjl.Ic2s_userQuit);

        /**
         * Creates a new c2s_userQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns c2s_userQuit instance
         */
        public static create(properties?: bjl.Ic2s_userQuit): bjl.c2s_userQuit;

        /**
         * Encodes the specified c2s_userQuit message. Does not implicitly {@link bjl.c2s_userQuit.verify|verify} messages.
         * @param message c2s_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Ic2s_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified c2s_userQuit message, length delimited. Does not implicitly {@link bjl.c2s_userQuit.verify|verify} messages.
         * @param message c2s_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Ic2s_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a c2s_userQuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.c2s_userQuit;

        /**
         * Decodes a c2s_userQuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.c2s_userQuit;

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
        public static fromObject(object: { [k: string]: any }): bjl.c2s_userQuit;

        /**
         * Creates a plain object from a c2s_userQuit message. Also converts values to other types if specified.
         * @param message c2s_userQuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.c2s_userQuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** s2c_userQuit ret */
        ret?: (bjl.IReply|null);
    }

    /** Represents a s2c_userQuit. */
    class s2c_userQuit implements Is2c_userQuit {

        /**
         * Constructs a new s2c_userQuit.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.Is2c_userQuit);

        /** s2c_userQuit userId. */
        public userId: number;

        /** s2c_userQuit ret. */
        public ret?: (bjl.IReply|null);

        /**
         * Creates a new s2c_userQuit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns s2c_userQuit instance
         */
        public static create(properties?: bjl.Is2c_userQuit): bjl.s2c_userQuit;

        /**
         * Encodes the specified s2c_userQuit message. Does not implicitly {@link bjl.s2c_userQuit.verify|verify} messages.
         * @param message s2c_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.Is2c_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified s2c_userQuit message, length delimited. Does not implicitly {@link bjl.s2c_userQuit.verify|verify} messages.
         * @param message s2c_userQuit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.Is2c_userQuit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a s2c_userQuit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.s2c_userQuit;

        /**
         * Decodes a s2c_userQuit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.s2c_userQuit;

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
        public static fromObject(object: { [k: string]: any }): bjl.s2c_userQuit;

        /**
         * Creates a plain object from a s2c_userQuit message. Also converts values to other types if specified.
         * @param message s2c_userQuit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.s2c_userQuit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this s2c_userQuit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (bjl.Request.CMD|null);

        /** Request bet */
        bet?: (bjl.Ic2s_bet|null);

        /** Request joinTable */
        joinTable?: (bjl.Ic2s_joinTable|null);

        /** Request getUserList */
        getUserList?: (bjl.Ic2s_getUserList|null);

        /** Request noticePush */
        noticePush?: (bjl.Ic2s_noticePush|null);

        /** Request reconnect */
        reconnect?: (bjl.Ic2s_reconnect|null);

        /** Request userOnback */
        userOnback?: (bjl.Ic2s_userOnback|null);

        /** Request userQuit */
        userQuit?: (bjl.Ic2s_userQuit|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.IRequest);

        /** Request cmd. */
        public cmd: bjl.Request.CMD;

        /** Request bet. */
        public bet?: (bjl.Ic2s_bet|null);

        /** Request joinTable. */
        public joinTable?: (bjl.Ic2s_joinTable|null);

        /** Request getUserList. */
        public getUserList?: (bjl.Ic2s_getUserList|null);

        /** Request noticePush. */
        public noticePush?: (bjl.Ic2s_noticePush|null);

        /** Request reconnect. */
        public reconnect?: (bjl.Ic2s_reconnect|null);

        /** Request userOnback. */
        public userOnback?: (bjl.Ic2s_userOnback|null);

        /** Request userQuit. */
        public userQuit?: (bjl.Ic2s_userQuit|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: bjl.IRequest): bjl.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link bjl.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link bjl.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.Request;

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
        public static fromObject(object: { [k: string]: any }): bjl.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            BET_REQ = 2010,
            JOIN_COIN_TABLE_REQ = 20006,
            GETUSERLIST_REQ = 2020,
            NOTICE_PUSH_REQ = 30002,
            PUSH_USER_RECONNECT_REQ = 2030,
            USER_ONBACK_REQ = 2080,
            USER_QUIT_REQ = 2044,
            FOUCED_OFFLINE_REQ = 3000,
            SEND_BET_RESP = 2011,
            SEND_JOIN_COIN_TABLE_RESP = 20007,
            SEND_GETUSERLIST_RESP = 2021,
            SEND_NOTICE_PUSH_RESP = 30003,
            SEND_PUSH_USER_RECONNECT_RESP = 2031,
            SEND_PUSH_RECONNECT_QUIT_RESP = 2035,
            SEND_PUSH_RECONNECT_DATA_RESP = 2033,
            SEND_USER_ONBACK_RESP = 2081,
            SEND_USER_QUIT_RESP = 2045,
            FOUCED_OFFLINE_RESP = 3001
        }
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (bjl.Response.ErrorCode|null);

        /** Response serverTime */
        serverTime?: (number|Long|null);

        /** Response cmd */
        cmd?: (bjl.Request.CMD|null);

        /** Response ret */
        ret?: (bjl.IReply|null);

        /** Response sendBet */
        sendBet?: (bjl.Is2c_bet|null);

        /** Response sendJoinTable */
        sendJoinTable?: (bjl.Is2c_joinTable|null);

        /** Response sendGetUserList */
        sendGetUserList?: (bjl.Is2c_getUserList|null);

        /** Response sendNoticePush */
        sendNoticePush?: (bjl.Is2c_noticePush|null);

        /** Response sendReconnect */
        sendReconnect?: (bjl.Is2c_reconnect|null);

        /** Response sendUserOnback */
        sendUserOnback?: (bjl.Is2c_userOnback|null);

        /** Response sendUserQuit */
        sendUserQuit?: (bjl.Is2c_userQuit|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: bjl.IResponse);

        /** Response error. */
        public error: bjl.Response.ErrorCode;

        /** Response serverTime. */
        public serverTime: (number|Long);

        /** Response cmd. */
        public cmd: bjl.Request.CMD;

        /** Response ret. */
        public ret?: (bjl.IReply|null);

        /** Response sendBet. */
        public sendBet?: (bjl.Is2c_bet|null);

        /** Response sendJoinTable. */
        public sendJoinTable?: (bjl.Is2c_joinTable|null);

        /** Response sendGetUserList. */
        public sendGetUserList?: (bjl.Is2c_getUserList|null);

        /** Response sendNoticePush. */
        public sendNoticePush?: (bjl.Is2c_noticePush|null);

        /** Response sendReconnect. */
        public sendReconnect?: (bjl.Is2c_reconnect|null);

        /** Response sendUserOnback. */
        public sendUserOnback?: (bjl.Is2c_userOnback|null);

        /** Response sendUserQuit. */
        public sendUserQuit?: (bjl.Is2c_userQuit|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: bjl.IResponse): bjl.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link bjl.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bjl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link bjl.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bjl.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bjl.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bjl.Response;

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
        public static fromObject(object: { [k: string]: any }): bjl.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bjl.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            USER_LOGIN_ERROR = 3001,
            CHANNELID_GAMENO_ERROR = 3003,
            HAS_INTABLE = 3006,
            TABLE_NOT_FIND_ERROR = 3008,
            BETCOIN_LIMIT = 3076,
            USER_BET_ERROR = 3077,
            USER_BETCOIN_ERROR = 3078,
            USER_BETPOS_ERROR = 3079,
            GAME_START_ERROR = 3061,
            USER_IP_SAME = 3075,
            TABLE_NO_POSITION = 3009,
            NOT_IN_TABLE = 3011,
            USER_READYNUM_ERROR = 3010,
            USER_READY_ERROR = 3012,
            DINGQUE_TABLESTATE_ERROR = 3058,
            DINGQUE_USERSTATE_ERROR = 3059,
            USER_NOT_HAVE_CARD = 3019,
            DISCARD_ERROR = 3018,
            USER_DISCARD_NO_PASS_ERROR = 3052,
            NOT_ALLOW_QUIT = 3014,
            WAITING_RESPONSE = 3043,
            USER_NOTAUTO_ERROR = 3073,
            USER_MP_ERROR = 3200,
            RE_JOIN_TABLE_ERROR = 3026,
            JOIN_TABLE_ERROR = 3007,
            USER_AUTO_ERROR = 3306,
            COIN_ENOUGH = 3063,
            TABLE_QUIT_ERROR = 3013,
            RECONNET_ERROR = 3025,
            SEND_MESSAGE_ERROR = 3040,
            USER_ONBACK_ERROR = 3056,
            DELAY_CHECK_ERROR = 3201,
            USER_NOT_FOUND_ERROR = 3005,
            FOUCEDOFFLINE = 30001,
            USERBAN = 30002,
            NO_RECHARGE_ERROR = 30923
        }
    }
}
