import * as $protobuf from "protobufjs";
/** Namespace luck. */
export namespace luck {

    /** Properties of a SendReward. */
    interface ISendReward {

        /** SendReward Type */
        Type?: (number|null);

        /** SendReward Count */
        Count?: (number|Long|null);

        /** SendReward Money */
        Money?: (number|Long|null);
    }

    /** Represents a SendReward. */
    class SendReward implements ISendReward {

        /**
         * Constructs a new SendReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: luck.ISendReward);

        /** SendReward Type. */
        public Type: number;

        /** SendReward Count. */
        public Count: (number|Long);

        /** SendReward Money. */
        public Money: (number|Long);

        /**
         * Creates a new SendReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReward instance
         */
        public static create(properties?: luck.ISendReward): luck.SendReward;

        /**
         * Encodes the specified SendReward message. Does not implicitly {@link luck.SendReward.verify|verify} messages.
         * @param message SendReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: luck.ISendReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReward message, length delimited. Does not implicitly {@link luck.SendReward.verify|verify} messages.
         * @param message SendReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: luck.ISendReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): luck.SendReward;

        /**
         * Decodes a SendReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): luck.SendReward;

        /**
         * Verifies a SendReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendReward
         */
        public static fromObject(object: { [k: string]: any }): luck.SendReward;

        /**
         * Creates a plain object from a SendReward message. Also converts values to other types if specified.
         * @param message SendReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: luck.SendReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRewardResp. */
    interface ISendRewardResp {

        /** SendRewardResp ID */
        ID?: (number|Long|null);

        /** SendRewardResp Type */
        Type?: (number|null);

        /** SendRewardResp Count */
        Count?: (number|Long|null);

        /** SendRewardResp Money */
        Money?: (number|Long|null);

        /** SendRewardResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** SendRewardResp SenderID */
        SenderID?: (number|Long|null);

        /** SendRewardResp StartTimeStamp */
        StartTimeStamp?: (number|Long|null);

        /** SendRewardResp WaitTime */
        WaitTime?: (number|Long|null);
    }

    /** Represents a SendRewardResp. */
    class SendRewardResp implements ISendRewardResp {

        /**
         * Constructs a new SendRewardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: luck.ISendRewardResp);

        /** SendRewardResp ID. */
        public ID: (number|Long);

        /** SendRewardResp Type. */
        public Type: number;

        /** SendRewardResp Count. */
        public Count: (number|Long);

        /** SendRewardResp Money. */
        public Money: (number|Long);

        /** SendRewardResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** SendRewardResp SenderID. */
        public SenderID: (number|Long);

        /** SendRewardResp StartTimeStamp. */
        public StartTimeStamp: (number|Long);

        /** SendRewardResp WaitTime. */
        public WaitTime: (number|Long);

        /**
         * Creates a new SendRewardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRewardResp instance
         */
        public static create(properties?: luck.ISendRewardResp): luck.SendRewardResp;

        /**
         * Encodes the specified SendRewardResp message. Does not implicitly {@link luck.SendRewardResp.verify|verify} messages.
         * @param message SendRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: luck.ISendRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRewardResp message, length delimited. Does not implicitly {@link luck.SendRewardResp.verify|verify} messages.
         * @param message SendRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: luck.ISendRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRewardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): luck.SendRewardResp;

        /**
         * Decodes a SendRewardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): luck.SendRewardResp;

        /**
         * Verifies a SendRewardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendRewardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendRewardResp
         */
        public static fromObject(object: { [k: string]: any }): luck.SendRewardResp;

        /**
         * Creates a plain object from a SendRewardResp message. Also converts values to other types if specified.
         * @param message SendRewardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: luck.SendRewardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRewardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetReward. */
    interface IGetReward {

        /** GetReward ID */
        ID?: (number|Long|null);
    }

    /** Represents a GetReward. */
    class GetReward implements IGetReward {

        /**
         * Constructs a new GetReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: luck.IGetReward);

        /** GetReward ID. */
        public ID: (number|Long);

        /**
         * Creates a new GetReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetReward instance
         */
        public static create(properties?: luck.IGetReward): luck.GetReward;

        /**
         * Encodes the specified GetReward message. Does not implicitly {@link luck.GetReward.verify|verify} messages.
         * @param message GetReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: luck.IGetReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetReward message, length delimited. Does not implicitly {@link luck.GetReward.verify|verify} messages.
         * @param message GetReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: luck.IGetReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): luck.GetReward;

        /**
         * Decodes a GetReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): luck.GetReward;

        /**
         * Verifies a GetReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetReward
         */
        public static fromObject(object: { [k: string]: any }): luck.GetReward;

        /**
         * Creates a plain object from a GetReward message. Also converts values to other types if specified.
         * @param message GetReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: luck.GetReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetRewardResp. */
    interface IGetRewardResp {

        /** GetRewardResp ID */
        ID?: (number|Long|null);

        /** GetRewardResp SenderID */
        SenderID?: (number|Long|null);

        /** GetRewardResp StartTimeStamp */
        StartTimeStamp?: (number|Long|null);

        /** GetRewardResp WaitTime */
        WaitTime?: (number|Long|null);

        /** GetRewardResp Type */
        Type?: (number|null);

        /** GetRewardResp Count */
        Count?: (number|Long|null);

        /** GetRewardResp Money */
        Money?: (number|Long|null);

        /** GetRewardResp RemainCount */
        RemainCount?: (number|Long|null);

        /** GetRewardResp RemainMoney */
        RemainMoney?: (number|Long|null);

        /** GetRewardResp BestMoney */
        BestMoney?: (number|Long|null);

        /** GetRewardResp BestMoneyIndex */
        BestMoneyIndex?: (number|Long|null);

        /** GetRewardResp MoneyList */
        MoneyList?: ((number|Long)[]|null);
    }

    /** Represents a GetRewardResp. */
    class GetRewardResp implements IGetRewardResp {

        /**
         * Constructs a new GetRewardResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: luck.IGetRewardResp);

        /** GetRewardResp ID. */
        public ID: (number|Long);

        /** GetRewardResp SenderID. */
        public SenderID: (number|Long);

        /** GetRewardResp StartTimeStamp. */
        public StartTimeStamp: (number|Long);

        /** GetRewardResp WaitTime. */
        public WaitTime: (number|Long);

        /** GetRewardResp Type. */
        public Type: number;

        /** GetRewardResp Count. */
        public Count: (number|Long);

        /** GetRewardResp Money. */
        public Money: (number|Long);

        /** GetRewardResp RemainCount. */
        public RemainCount: (number|Long);

        /** GetRewardResp RemainMoney. */
        public RemainMoney: (number|Long);

        /** GetRewardResp BestMoney. */
        public BestMoney: (number|Long);

        /** GetRewardResp BestMoneyIndex. */
        public BestMoneyIndex: (number|Long);

        /** GetRewardResp MoneyList. */
        public MoneyList: (number|Long)[];

        /**
         * Creates a new GetRewardResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetRewardResp instance
         */
        public static create(properties?: luck.IGetRewardResp): luck.GetRewardResp;

        /**
         * Encodes the specified GetRewardResp message. Does not implicitly {@link luck.GetRewardResp.verify|verify} messages.
         * @param message GetRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: luck.IGetRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetRewardResp message, length delimited. Does not implicitly {@link luck.GetRewardResp.verify|verify} messages.
         * @param message GetRewardResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: luck.IGetRewardResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetRewardResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): luck.GetRewardResp;

        /**
         * Decodes a GetRewardResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetRewardResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): luck.GetRewardResp;

        /**
         * Verifies a GetRewardResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetRewardResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetRewardResp
         */
        public static fromObject(object: { [k: string]: any }): luck.GetRewardResp;

        /**
         * Creates a plain object from a GetRewardResp message. Also converts values to other types if specified.
         * @param message GetRewardResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: luck.GetRewardResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetRewardResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RollDice. */
    interface IRollDice {

        /** RollDice Count */
        Count?: (number|Long|null);
    }

    /** Represents a RollDice. */
    class RollDice implements IRollDice {

        /**
         * Constructs a new RollDice.
         * @param [properties] Properties to set
         */
        constructor(properties?: luck.IRollDice);

        /** RollDice Count. */
        public Count: (number|Long);

        /**
         * Creates a new RollDice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RollDice instance
         */
        public static create(properties?: luck.IRollDice): luck.RollDice;

        /**
         * Encodes the specified RollDice message. Does not implicitly {@link luck.RollDice.verify|verify} messages.
         * @param message RollDice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: luck.IRollDice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RollDice message, length delimited. Does not implicitly {@link luck.RollDice.verify|verify} messages.
         * @param message RollDice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: luck.IRollDice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RollDice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RollDice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): luck.RollDice;

        /**
         * Decodes a RollDice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RollDice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): luck.RollDice;

        /**
         * Verifies a RollDice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RollDice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RollDice
         */
        public static fromObject(object: { [k: string]: any }): luck.RollDice;

        /**
         * Creates a plain object from a RollDice message. Also converts values to other types if specified.
         * @param message RollDice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: luck.RollDice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RollDice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RollDiceResp. */
    interface IRollDiceResp {

        /** RollDiceResp Count */
        Count?: (number|Long|null);

        /** RollDiceResp Numbers */
        Numbers?: (Uint8Array|null);
    }

    /** Represents a RollDiceResp. */
    class RollDiceResp implements IRollDiceResp {

        /**
         * Constructs a new RollDiceResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: luck.IRollDiceResp);

        /** RollDiceResp Count. */
        public Count: (number|Long);

        /** RollDiceResp Numbers. */
        public Numbers: Uint8Array;

        /**
         * Creates a new RollDiceResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RollDiceResp instance
         */
        public static create(properties?: luck.IRollDiceResp): luck.RollDiceResp;

        /**
         * Encodes the specified RollDiceResp message. Does not implicitly {@link luck.RollDiceResp.verify|verify} messages.
         * @param message RollDiceResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: luck.IRollDiceResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RollDiceResp message, length delimited. Does not implicitly {@link luck.RollDiceResp.verify|verify} messages.
         * @param message RollDiceResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: luck.IRollDiceResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RollDiceResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RollDiceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): luck.RollDiceResp;

        /**
         * Decodes a RollDiceResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RollDiceResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): luck.RollDiceResp;

        /**
         * Verifies a RollDiceResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RollDiceResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RollDiceResp
         */
        public static fromObject(object: { [k: string]: any }): luck.RollDiceResp;

        /**
         * Creates a plain object from a RollDiceResp message. Also converts values to other types if specified.
         * @param message RollDiceResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: luck.RollDiceResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RollDiceResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
