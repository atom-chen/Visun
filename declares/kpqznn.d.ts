import * as $protobuf from "protobufjs";
/** Namespace kpqznn. */
export namespace kpqznn {

    /** Properties of an OutCard. */
    interface IOutCard {

        /** OutCard cardThree */
        cardThree?: (number[]|null);

        /** OutCard cardTwo */
        cardTwo?: (number[]|null);

        /** OutCard type */
        type?: (number|null);
    }

    /** Represents an OutCard. */
    class OutCard implements IOutCard {

        /**
         * Constructs a new OutCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IOutCard);

        /** OutCard cardThree. */
        public cardThree: number[];

        /** OutCard cardTwo. */
        public cardTwo: number[];

        /** OutCard type. */
        public type: number;

        /**
         * Creates a new OutCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutCard instance
         */
        public static create(properties?: kpqznn.IOutCard): kpqznn.OutCard;

        /**
         * Encodes the specified OutCard message. Does not implicitly {@link kpqznn.OutCard.verify|verify} messages.
         * @param message OutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IOutCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutCard message, length delimited. Does not implicitly {@link kpqznn.OutCard.verify|verify} messages.
         * @param message OutCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IOutCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.OutCard;

        /**
         * Decodes an OutCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.OutCard;

        /**
         * Verifies an OutCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutCard
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.OutCard;

        /**
         * Creates a plain object from an OutCard message. Also converts values to other types if specified.
         * @param message OutCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.OutCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserCards. */
    interface IUserCards {

        /** UserCards remainCards */
        remainCards?: (number[]|null);
    }

    /** Represents a UserCards. */
    class UserCards implements IUserCards {

        /**
         * Constructs a new UserCards.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserCards);

        /** UserCards remainCards. */
        public remainCards: number[];

        /**
         * Creates a new UserCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserCards instance
         */
        public static create(properties?: kpqznn.IUserCards): kpqznn.UserCards;

        /**
         * Encodes the specified UserCards message. Does not implicitly {@link kpqznn.UserCards.verify|verify} messages.
         * @param message UserCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserCards message, length delimited. Does not implicitly {@link kpqznn.UserCards.verify|verify} messages.
         * @param message UserCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserCards;

        /**
         * Decodes a UserCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserCards;

        /**
         * Verifies a UserCards message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserCards message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserCards
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserCards;

        /**
         * Creates a plain object from a UserCards message. Also converts values to other types if specified.
         * @param message UserCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserCards to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User userId */
        userId?: (number|null);

        /** User state */
        state?: (number|null);

        /** User nickname */
        nickname?: (string|null);

        /** User headImg */
        headImg?: (string|null);

        /** User sex */
        sex?: (number|null);

        /** User ip */
        ip?: (string|null);

        /** User position */
        position?: (number|null);

        /** User agree */
        agree?: (number|null);

        /** User onLine */
        onLine?: (number|null);

        /** User coin */
        coin?: (number|Long|null);

        /** User betCoin */
        betCoin?: (number|null);

        /** User qiang */
        qiang?: (number|null);

        /** User remainCards */
        remainCards?: (number[]|null);

        /** User bestOutCardDto */
        bestOutCardDto?: (kpqznn.IOutCard|null);

        /** User allowQiang */
        allowQiang?: (number[]|null);

        /** User allowBet */
        allowBet?: (number[]|null);

        /** User tongsha */
        tongsha?: (boolean|null);

        /** User tongpei */
        tongpei?: (boolean|null);

        /** User startScore */
        startScore?: (number|null);

        /** User endScore */
        endScore?: (number|null);

        /** User currentScore */
        currentScore?: (number|null);

        /** User score */
        score?: (number|null);

        /** User revenue */
        revenue?: (number|null);

        /** User noCoin */
        noCoin?: (boolean|null);

        /** User totalScore */
        totalScore?: (number|null);

        /** User hasShowCard */
        hasShowCard?: (boolean|null);

        /** User outCardDto */
        outCardDto?: (kpqznn.IOutCard|null);

        /** User cards */
        cards?: (kpqznn.IUserCards|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUser);

        /** User userId. */
        public userId: number;

        /** User state. */
        public state: number;

        /** User nickname. */
        public nickname: string;

        /** User headImg. */
        public headImg: string;

        /** User sex. */
        public sex: number;

        /** User ip. */
        public ip: string;

        /** User position. */
        public position: number;

        /** User agree. */
        public agree: number;

        /** User onLine. */
        public onLine: number;

        /** User coin. */
        public coin: (number|Long);

        /** User betCoin. */
        public betCoin: number;

        /** User qiang. */
        public qiang: number;

        /** User remainCards. */
        public remainCards: number[];

        /** User bestOutCardDto. */
        public bestOutCardDto?: (kpqznn.IOutCard|null);

        /** User allowQiang. */
        public allowQiang: number[];

        /** User allowBet. */
        public allowBet: number[];

        /** User tongsha. */
        public tongsha: boolean;

        /** User tongpei. */
        public tongpei: boolean;

        /** User startScore. */
        public startScore: number;

        /** User endScore. */
        public endScore: number;

        /** User currentScore. */
        public currentScore: number;

        /** User score. */
        public score: number;

        /** User revenue. */
        public revenue: number;

        /** User noCoin. */
        public noCoin: boolean;

        /** User totalScore. */
        public totalScore: number;

        /** User hasShowCard. */
        public hasShowCard: boolean;

        /** User outCardDto. */
        public outCardDto?: (kpqznn.IOutCard|null);

        /** User cards. */
        public cards?: (kpqznn.IUserCards|null);

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: kpqznn.IUser): kpqznn.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link kpqznn.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link kpqznn.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReadyRequest. */
    interface IUserReadyRequest {
    }

    /** Represents a UserReadyRequest. */
    class UserReadyRequest implements IUserReadyRequest {

        /**
         * Constructs a new UserReadyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserReadyRequest);

        /**
         * Creates a new UserReadyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReadyRequest instance
         */
        public static create(properties?: kpqznn.IUserReadyRequest): kpqznn.UserReadyRequest;

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link kpqznn.UserReadyRequest.verify|verify} messages.
         * @param message UserReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link kpqznn.UserReadyRequest.verify|verify} messages.
         * @param message UserReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserReadyRequest;

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserReadyRequest;

        /**
         * Verifies a UserReadyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReadyRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserReadyRequest;

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @param message UserReadyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReadyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRequest. */
    interface IBetRequest {

        /** BetRequest betCoin */
        betCoin?: (number|null);
    }

    /** Represents a BetRequest. */
    class BetRequest implements IBetRequest {

        /**
         * Constructs a new BetRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IBetRequest);

        /** BetRequest betCoin. */
        public betCoin: number;

        /**
         * Creates a new BetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRequest instance
         */
        public static create(properties?: kpqznn.IBetRequest): kpqznn.BetRequest;

        /**
         * Encodes the specified BetRequest message. Does not implicitly {@link kpqznn.BetRequest.verify|verify} messages.
         * @param message BetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRequest message, length delimited. Does not implicitly {@link kpqznn.BetRequest.verify|verify} messages.
         * @param message BetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.BetRequest;

        /**
         * Decodes a BetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.BetRequest;

        /**
         * Verifies a BetRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.BetRequest;

        /**
         * Creates a plain object from a BetRequest message. Also converts values to other types if specified.
         * @param message BetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.BetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShowCardRequest. */
    interface IShowCardRequest {
    }

    /** Represents a ShowCardRequest. */
    class ShowCardRequest implements IShowCardRequest {

        /**
         * Constructs a new ShowCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IShowCardRequest);

        /**
         * Creates a new ShowCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShowCardRequest instance
         */
        public static create(properties?: kpqznn.IShowCardRequest): kpqznn.ShowCardRequest;

        /**
         * Encodes the specified ShowCardRequest message. Does not implicitly {@link kpqznn.ShowCardRequest.verify|verify} messages.
         * @param message ShowCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IShowCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShowCardRequest message, length delimited. Does not implicitly {@link kpqznn.ShowCardRequest.verify|verify} messages.
         * @param message ShowCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IShowCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.ShowCardRequest;

        /**
         * Decodes a ShowCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShowCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.ShowCardRequest;

        /**
         * Verifies a ShowCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShowCardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShowCardRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.ShowCardRequest;

        /**
         * Creates a plain object from a ShowCardRequest message. Also converts values to other types if specified.
         * @param message ShowCardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.ShowCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShowCardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserQuitRequest. */
    interface IUserQuitRequest {
    }

    /** Represents a UserQuitRequest. */
    class UserQuitRequest implements IUserQuitRequest {

        /**
         * Constructs a new UserQuitRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserQuitRequest);

        /**
         * Creates a new UserQuitRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitRequest instance
         */
        public static create(properties?: kpqznn.IUserQuitRequest): kpqznn.UserQuitRequest;

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link kpqznn.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link kpqznn.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserQuitRequest;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserQuitRequest;

        /**
         * Verifies a UserQuitRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserQuitRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserQuitRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserQuitRequest;

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @param message UserQuitRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserQuitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserOnBackRequest. */
    interface IUserOnBackRequest {

        /** UserOnBackRequest leaveState */
        leaveState?: (number|null);

        /** UserOnBackRequest userId */
        userId?: (number|null);
    }

    /** Represents a UserOnBackRequest. */
    class UserOnBackRequest implements IUserOnBackRequest {

        /**
         * Constructs a new UserOnBackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserOnBackRequest);

        /** UserOnBackRequest leaveState. */
        public leaveState: number;

        /** UserOnBackRequest userId. */
        public userId: number;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserOnBackRequest instance
         */
        public static create(properties?: kpqznn.IUserOnBackRequest): kpqznn.UserOnBackRequest;

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link kpqznn.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link kpqznn.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserOnBackRequest;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserOnBackRequest;

        /**
         * Verifies a UserOnBackRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserOnBackRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserOnBackRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserOnBackRequest;

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @param message UserOnBackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserOnBackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserOnBackRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DelayCheckRequest. */
    interface IDelayCheckRequest {

        /** DelayCheckRequest content */
        content?: (string|null);
    }

    /** Represents a DelayCheckRequest. */
    class DelayCheckRequest implements IDelayCheckRequest {

        /**
         * Constructs a new DelayCheckRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IDelayCheckRequest);

        /** DelayCheckRequest content. */
        public content: string;

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckRequest instance
         */
        public static create(properties?: kpqznn.IDelayCheckRequest): kpqznn.DelayCheckRequest;

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link kpqznn.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link kpqznn.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.DelayCheckRequest;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.DelayCheckRequest;

        /**
         * Verifies a DelayCheckRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelayCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelayCheckRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.DelayCheckRequest;

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @param message DelayCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.DelayCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReconnectRequest. */
    interface IUserReconnectRequest {

        /** UserReconnectRequest userId */
        userId?: (number|null);
    }

    /** Represents a UserReconnectRequest. */
    class UserReconnectRequest implements IUserReconnectRequest {

        /**
         * Constructs a new UserReconnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserReconnectRequest);

        /** UserReconnectRequest userId. */
        public userId: number;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectRequest instance
         */
        public static create(properties?: kpqznn.IUserReconnectRequest): kpqznn.UserReconnectRequest;

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link kpqznn.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link kpqznn.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserReconnectRequest;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserReconnectRequest;

        /**
         * Verifies a UserReconnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReconnectRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserReconnectRequest;

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @param message UserReconnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserReconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QiangZhuangRequest. */
    interface IQiangZhuangRequest {

        /** QiangZhuangRequest qiang */
        qiang?: (number|null);
    }

    /** Represents a QiangZhuangRequest. */
    class QiangZhuangRequest implements IQiangZhuangRequest {

        /**
         * Constructs a new QiangZhuangRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IQiangZhuangRequest);

        /** QiangZhuangRequest qiang. */
        public qiang: number;

        /**
         * Creates a new QiangZhuangRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QiangZhuangRequest instance
         */
        public static create(properties?: kpqznn.IQiangZhuangRequest): kpqznn.QiangZhuangRequest;

        /**
         * Encodes the specified QiangZhuangRequest message. Does not implicitly {@link kpqznn.QiangZhuangRequest.verify|verify} messages.
         * @param message QiangZhuangRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IQiangZhuangRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QiangZhuangRequest message, length delimited. Does not implicitly {@link kpqznn.QiangZhuangRequest.verify|verify} messages.
         * @param message QiangZhuangRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IQiangZhuangRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.QiangZhuangRequest;

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.QiangZhuangRequest;

        /**
         * Verifies a QiangZhuangRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QiangZhuangRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QiangZhuangRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.QiangZhuangRequest;

        /**
         * Creates a plain object from a QiangZhuangRequest message. Also converts values to other types if specified.
         * @param message QiangZhuangRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.QiangZhuangRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QiangZhuangRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeTableRequest. */
    interface IChangeTableRequest {
    }

    /** Represents a ChangeTableRequest. */
    class ChangeTableRequest implements IChangeTableRequest {

        /**
         * Constructs a new ChangeTableRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IChangeTableRequest);

        /**
         * Creates a new ChangeTableRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeTableRequest instance
         */
        public static create(properties?: kpqznn.IChangeTableRequest): kpqznn.ChangeTableRequest;

        /**
         * Encodes the specified ChangeTableRequest message. Does not implicitly {@link kpqznn.ChangeTableRequest.verify|verify} messages.
         * @param message ChangeTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IChangeTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeTableRequest message, length delimited. Does not implicitly {@link kpqznn.ChangeTableRequest.verify|verify} messages.
         * @param message ChangeTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IChangeTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.ChangeTableRequest;

        /**
         * Decodes a ChangeTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.ChangeTableRequest;

        /**
         * Verifies a ChangeTableRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeTableRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeTableRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.ChangeTableRequest;

        /**
         * Creates a plain object from a ChangeTableRequest message. Also converts values to other types if specified.
         * @param message ChangeTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.ChangeTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeTableRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableRequest. */
    interface IJoinTableRequest {

        /** JoinTableRequest sid */
        sid?: (string|null);

        /** JoinTableRequest tableType */
        tableType?: (number|null);
    }

    /** Represents a JoinTableRequest. */
    class JoinTableRequest implements IJoinTableRequest {

        /**
         * Constructs a new JoinTableRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IJoinTableRequest);

        /** JoinTableRequest sid. */
        public sid: string;

        /** JoinTableRequest tableType. */
        public tableType: number;

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableRequest instance
         */
        public static create(properties?: kpqznn.IJoinTableRequest): kpqznn.JoinTableRequest;

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link kpqznn.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link kpqznn.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.JoinTableRequest;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.JoinTableRequest;

        /**
         * Verifies a JoinTableRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinTableRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.JoinTableRequest;

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @param message JoinTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.JoinTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageRequest. */
    interface IMessageRequest {

        /** MessageRequest content */
        content?: (string|null);

        /** MessageRequest toUserId */
        toUserId?: (number|null);
    }

    /** Represents a MessageRequest. */
    class MessageRequest implements IMessageRequest {

        /**
         * Constructs a new MessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IMessageRequest);

        /** MessageRequest content. */
        public content: string;

        /** MessageRequest toUserId. */
        public toUserId: number;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageRequest instance
         */
        public static create(properties?: kpqznn.IMessageRequest): kpqznn.MessageRequest;

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link kpqznn.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link kpqznn.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.MessageRequest;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.MessageRequest;

        /**
         * Verifies a MessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.MessageRequest;

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @param message MessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.MessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForcedOfflineRequest. */
    interface IForcedOfflineRequest {

        /** ForcedOfflineRequest userId */
        userId?: (number|null);
    }

    /** Represents a ForcedOfflineRequest. */
    class ForcedOfflineRequest implements IForcedOfflineRequest {

        /**
         * Constructs a new ForcedOfflineRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IForcedOfflineRequest);

        /** ForcedOfflineRequest userId. */
        public userId: number;

        /**
         * Creates a new ForcedOfflineRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForcedOfflineRequest instance
         */
        public static create(properties?: kpqznn.IForcedOfflineRequest): kpqznn.ForcedOfflineRequest;

        /**
         * Encodes the specified ForcedOfflineRequest message. Does not implicitly {@link kpqznn.ForcedOfflineRequest.verify|verify} messages.
         * @param message ForcedOfflineRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IForcedOfflineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForcedOfflineRequest message, length delimited. Does not implicitly {@link kpqznn.ForcedOfflineRequest.verify|verify} messages.
         * @param message ForcedOfflineRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IForcedOfflineRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForcedOfflineRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForcedOfflineRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.ForcedOfflineRequest;

        /**
         * Decodes a ForcedOfflineRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForcedOfflineRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.ForcedOfflineRequest;

        /**
         * Verifies a ForcedOfflineRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForcedOfflineRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForcedOfflineRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.ForcedOfflineRequest;

        /**
         * Creates a plain object from a ForcedOfflineRequest message. Also converts values to other types if specified.
         * @param message ForcedOfflineRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.ForcedOfflineRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForcedOfflineRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickedOutRequest. */
    interface IKickedOutRequest {

        /** KickedOutRequest userId */
        userId?: (number|null);
    }

    /** Represents a KickedOutRequest. */
    class KickedOutRequest implements IKickedOutRequest {

        /**
         * Constructs a new KickedOutRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IKickedOutRequest);

        /** KickedOutRequest userId. */
        public userId: number;

        /**
         * Creates a new KickedOutRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickedOutRequest instance
         */
        public static create(properties?: kpqznn.IKickedOutRequest): kpqznn.KickedOutRequest;

        /**
         * Encodes the specified KickedOutRequest message. Does not implicitly {@link kpqznn.KickedOutRequest.verify|verify} messages.
         * @param message KickedOutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IKickedOutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickedOutRequest message, length delimited. Does not implicitly {@link kpqznn.KickedOutRequest.verify|verify} messages.
         * @param message KickedOutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IKickedOutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.KickedOutRequest;

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.KickedOutRequest;

        /**
         * Verifies a KickedOutRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickedOutRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickedOutRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.KickedOutRequest;

        /**
         * Creates a plain object from a KickedOutRequest message. Also converts values to other types if specified.
         * @param message KickedOutRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.KickedOutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickedOutRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KickedOutResponse. */
    interface IKickedOutResponse {

        /** KickedOutResponse desc */
        desc?: (string|null);
    }

    /** Represents a KickedOutResponse. */
    class KickedOutResponse implements IKickedOutResponse {

        /**
         * Constructs a new KickedOutResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IKickedOutResponse);

        /** KickedOutResponse desc. */
        public desc: string;

        /**
         * Creates a new KickedOutResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickedOutResponse instance
         */
        public static create(properties?: kpqznn.IKickedOutResponse): kpqznn.KickedOutResponse;

        /**
         * Encodes the specified KickedOutResponse message. Does not implicitly {@link kpqznn.KickedOutResponse.verify|verify} messages.
         * @param message KickedOutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IKickedOutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickedOutResponse message, length delimited. Does not implicitly {@link kpqznn.KickedOutResponse.verify|verify} messages.
         * @param message KickedOutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IKickedOutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.KickedOutResponse;

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.KickedOutResponse;

        /**
         * Verifies a KickedOutResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KickedOutResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KickedOutResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.KickedOutResponse;

        /**
         * Creates a plain object from a KickedOutResponse message. Also converts values to other types if specified.
         * @param message KickedOutResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.KickedOutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickedOutResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HallRefreshCoinRequest. */
    interface IHallRefreshCoinRequest {

        /** HallRefreshCoinRequest userId */
        userId?: (number|null);

        /** HallRefreshCoinRequest type */
        type?: (number|null);
    }

    /** Represents a HallRefreshCoinRequest. */
    class HallRefreshCoinRequest implements IHallRefreshCoinRequest {

        /**
         * Constructs a new HallRefreshCoinRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IHallRefreshCoinRequest);

        /** HallRefreshCoinRequest userId. */
        public userId: number;

        /** HallRefreshCoinRequest type. */
        public type: number;

        /**
         * Creates a new HallRefreshCoinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HallRefreshCoinRequest instance
         */
        public static create(properties?: kpqznn.IHallRefreshCoinRequest): kpqznn.HallRefreshCoinRequest;

        /**
         * Encodes the specified HallRefreshCoinRequest message. Does not implicitly {@link kpqznn.HallRefreshCoinRequest.verify|verify} messages.
         * @param message HallRefreshCoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IHallRefreshCoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HallRefreshCoinRequest message, length delimited. Does not implicitly {@link kpqznn.HallRefreshCoinRequest.verify|verify} messages.
         * @param message HallRefreshCoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IHallRefreshCoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.HallRefreshCoinRequest;

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.HallRefreshCoinRequest;

        /**
         * Verifies a HallRefreshCoinRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HallRefreshCoinRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HallRefreshCoinRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.HallRefreshCoinRequest;

        /**
         * Creates a plain object from a HallRefreshCoinRequest message. Also converts values to other types if specified.
         * @param message HallRefreshCoinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.HallRefreshCoinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HallRefreshCoinRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HallRefreshCoinResponse. */
    interface IHallRefreshCoinResponse {

        /** HallRefreshCoinResponse userId */
        userId?: (number|null);

        /** HallRefreshCoinResponse coin */
        coin?: (number|null);

        /** HallRefreshCoinResponse isInTable */
        isInTable?: (boolean|null);
    }

    /** Represents a HallRefreshCoinResponse. */
    class HallRefreshCoinResponse implements IHallRefreshCoinResponse {

        /**
         * Constructs a new HallRefreshCoinResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IHallRefreshCoinResponse);

        /** HallRefreshCoinResponse userId. */
        public userId: number;

        /** HallRefreshCoinResponse coin. */
        public coin: number;

        /** HallRefreshCoinResponse isInTable. */
        public isInTable: boolean;

        /**
         * Creates a new HallRefreshCoinResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HallRefreshCoinResponse instance
         */
        public static create(properties?: kpqznn.IHallRefreshCoinResponse): kpqznn.HallRefreshCoinResponse;

        /**
         * Encodes the specified HallRefreshCoinResponse message. Does not implicitly {@link kpqznn.HallRefreshCoinResponse.verify|verify} messages.
         * @param message HallRefreshCoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IHallRefreshCoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HallRefreshCoinResponse message, length delimited. Does not implicitly {@link kpqznn.HallRefreshCoinResponse.verify|verify} messages.
         * @param message HallRefreshCoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IHallRefreshCoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.HallRefreshCoinResponse;

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.HallRefreshCoinResponse;

        /**
         * Verifies a HallRefreshCoinResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HallRefreshCoinResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HallRefreshCoinResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.HallRefreshCoinResponse;

        /**
         * Creates a plain object from a HallRefreshCoinResponse message. Also converts values to other types if specified.
         * @param message HallRefreshCoinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.HallRefreshCoinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HallRefreshCoinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCoinRefreshResponse. */
    interface ISendCoinRefreshResponse {

        /** SendCoinRefreshResponse userId */
        userId?: (number|null);

        /** SendCoinRefreshResponse coin */
        coin?: (number|null);

        /** SendCoinRefreshResponse isInTable */
        isInTable?: (boolean|null);

        /** SendCoinRefreshResponse type */
        type?: (boolean|null);

        /** SendCoinRefreshResponse addCoin */
        addCoin?: (number|null);
    }

    /** Represents a SendCoinRefreshResponse. */
    class SendCoinRefreshResponse implements ISendCoinRefreshResponse {

        /**
         * Constructs a new SendCoinRefreshResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendCoinRefreshResponse);

        /** SendCoinRefreshResponse userId. */
        public userId: number;

        /** SendCoinRefreshResponse coin. */
        public coin: number;

        /** SendCoinRefreshResponse isInTable. */
        public isInTable: boolean;

        /** SendCoinRefreshResponse type. */
        public type: boolean;

        /** SendCoinRefreshResponse addCoin. */
        public addCoin: number;

        /**
         * Creates a new SendCoinRefreshResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCoinRefreshResponse instance
         */
        public static create(properties?: kpqznn.ISendCoinRefreshResponse): kpqznn.SendCoinRefreshResponse;

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link kpqznn.SendCoinRefreshResponse.verify|verify} messages.
         * @param message SendCoinRefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendCoinRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link kpqznn.SendCoinRefreshResponse.verify|verify} messages.
         * @param message SendCoinRefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendCoinRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendCoinRefreshResponse;

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendCoinRefreshResponse;

        /**
         * Verifies a SendCoinRefreshResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCoinRefreshResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCoinRefreshResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendCoinRefreshResponse;

        /**
         * Creates a plain object from a SendCoinRefreshResponse message. Also converts values to other types if specified.
         * @param message SendCoinRefreshResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendCoinRefreshResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCoinRefreshResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListRequest. */
    interface IRoomListRequest {
    }

    /** Represents a RoomListRequest. */
    class RoomListRequest implements IRoomListRequest {

        /**
         * Constructs a new RoomListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IRoomListRequest);

        /**
         * Creates a new RoomListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListRequest instance
         */
        public static create(properties?: kpqznn.IRoomListRequest): kpqznn.RoomListRequest;

        /**
         * Encodes the specified RoomListRequest message. Does not implicitly {@link kpqznn.RoomListRequest.verify|verify} messages.
         * @param message RoomListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IRoomListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListRequest message, length delimited. Does not implicitly {@link kpqznn.RoomListRequest.verify|verify} messages.
         * @param message RoomListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IRoomListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.RoomListRequest;

        /**
         * Decodes a RoomListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.RoomListRequest;

        /**
         * Verifies a RoomListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListRequest
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.RoomListRequest;

        /**
         * Creates a plain object from a RoomListRequest message. Also converts values to other types if specified.
         * @param message RoomListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.RoomListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomList. */
    interface IRoomList {

        /** RoomList gameNo */
        gameNo?: (number|null);

        /** RoomList name */
        name?: (string|null);

        /** RoomList baseScore */
        baseScore?: (number|null);

        /** RoomList limit */
        limit?: (number|null);
    }

    /** Represents a RoomList. */
    class RoomList implements IRoomList {

        /**
         * Constructs a new RoomList.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IRoomList);

        /** RoomList gameNo. */
        public gameNo: number;

        /** RoomList name. */
        public name: string;

        /** RoomList baseScore. */
        public baseScore: number;

        /** RoomList limit. */
        public limit: number;

        /**
         * Creates a new RoomList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomList instance
         */
        public static create(properties?: kpqznn.IRoomList): kpqznn.RoomList;

        /**
         * Encodes the specified RoomList message. Does not implicitly {@link kpqznn.RoomList.verify|verify} messages.
         * @param message RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomList message, length delimited. Does not implicitly {@link kpqznn.RoomList.verify|verify} messages.
         * @param message RoomList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IRoomList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.RoomList;

        /**
         * Decodes a RoomList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.RoomList;

        /**
         * Verifies a RoomList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomList
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.RoomList;

        /**
         * Creates a plain object from a RoomList message. Also converts values to other types if specified.
         * @param message RoomList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.RoomList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomListResponse. */
    interface IRoomListResponse {

        /** RoomListResponse roomList */
        roomList?: (kpqznn.IRoomList[]|null);
    }

    /** Represents a RoomListResponse. */
    class RoomListResponse implements IRoomListResponse {

        /**
         * Constructs a new RoomListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IRoomListResponse);

        /** RoomListResponse roomList. */
        public roomList: kpqznn.IRoomList[];

        /**
         * Creates a new RoomListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomListResponse instance
         */
        public static create(properties?: kpqznn.IRoomListResponse): kpqznn.RoomListResponse;

        /**
         * Encodes the specified RoomListResponse message. Does not implicitly {@link kpqznn.RoomListResponse.verify|verify} messages.
         * @param message RoomListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IRoomListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomListResponse message, length delimited. Does not implicitly {@link kpqznn.RoomListResponse.verify|verify} messages.
         * @param message RoomListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IRoomListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.RoomListResponse;

        /**
         * Decodes a RoomListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.RoomListResponse;

        /**
         * Verifies a RoomListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomListResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.RoomListResponse;

        /**
         * Creates a plain object from a RoomListResponse message. Also converts values to other types if specified.
         * @param message RoomListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.RoomListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (kpqznn.Request.CMD|null);

        /** Request userReadyRequest */
        userReadyRequest?: (kpqznn.IUserReadyRequest|null);

        /** Request userQuitRequest */
        userQuitRequest?: (kpqznn.IUserQuitRequest|null);

        /** Request messageRequest */
        messageRequest?: (kpqznn.IMessageRequest|null);

        /** Request delayCheckRequest */
        delayCheckRequest?: (kpqznn.IDelayCheckRequest|null);

        /** Request userReconnectRequest */
        userReconnectRequest?: (kpqznn.IUserReconnectRequest|null);

        /** Request betRequest */
        betRequest?: (kpqznn.IBetRequest|null);

        /** Request showCardRequest */
        showCardRequest?: (kpqznn.IShowCardRequest|null);

        /** Request qiangZhuangRequest */
        qiangZhuangRequest?: (kpqznn.IQiangZhuangRequest|null);

        /** Request changeTableRequest */
        changeTableRequest?: (kpqznn.IChangeTableRequest|null);

        /** Request kickedOutRequest */
        kickedOutRequest?: (kpqznn.IKickedOutRequest|null);

        /** Request coinJoinTableRequest */
        coinJoinTableRequest?: (kpqznn.IJoinTableRequest|null);

        /** Request userOnBackRequest */
        userOnBackRequest?: (kpqznn.IUserOnBackRequest|null);

        /** Request roomListRequest */
        roomListRequest?: (kpqznn.IRoomListRequest|null);

        /** Request hallRefreshCoinRequest */
        hallRefreshCoinRequest?: (kpqznn.IHallRefreshCoinRequest|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IRequest);

        /** Request cmd. */
        public cmd: kpqznn.Request.CMD;

        /** Request userReadyRequest. */
        public userReadyRequest?: (kpqznn.IUserReadyRequest|null);

        /** Request userQuitRequest. */
        public userQuitRequest?: (kpqznn.IUserQuitRequest|null);

        /** Request messageRequest. */
        public messageRequest?: (kpqznn.IMessageRequest|null);

        /** Request delayCheckRequest. */
        public delayCheckRequest?: (kpqznn.IDelayCheckRequest|null);

        /** Request userReconnectRequest. */
        public userReconnectRequest?: (kpqznn.IUserReconnectRequest|null);

        /** Request betRequest. */
        public betRequest?: (kpqznn.IBetRequest|null);

        /** Request showCardRequest. */
        public showCardRequest?: (kpqznn.IShowCardRequest|null);

        /** Request qiangZhuangRequest. */
        public qiangZhuangRequest?: (kpqznn.IQiangZhuangRequest|null);

        /** Request changeTableRequest. */
        public changeTableRequest?: (kpqznn.IChangeTableRequest|null);

        /** Request kickedOutRequest. */
        public kickedOutRequest?: (kpqznn.IKickedOutRequest|null);

        /** Request coinJoinTableRequest. */
        public coinJoinTableRequest?: (kpqznn.IJoinTableRequest|null);

        /** Request userOnBackRequest. */
        public userOnBackRequest?: (kpqznn.IUserOnBackRequest|null);

        /** Request roomListRequest. */
        public roomListRequest?: (kpqznn.IRoomListRequest|null);

        /** Request hallRefreshCoinRequest. */
        public hallRefreshCoinRequest?: (kpqznn.IHallRefreshCoinRequest|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: kpqznn.IRequest): kpqznn.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link kpqznn.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link kpqznn.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.Request;

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
        public static fromObject(object: { [k: string]: any }): kpqznn.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            HALL_REFRESH_COIN = 100,
            JOIN_TABLE = 2002,
            SEND_USER_INFO = 2009,
            SHOW_CARD = 2010,
            BET = 2012,
            SEND_ROUND_RESULT = 2015,
            QIANG_ZHUANG = 2024,
            SEND_ZHUANG = 2023,
            SEND_USER_CARD = 2027,
            SEND_USER_BEST_CARD = 2059,
            USER_RECONNECT = 2030,
            SEND_USER_RECONNECT = 2031,
            SEND_RECONNECT_QUIT = 2035,
            SEND_MESSAGE = 2061,
            MESSAGE = 2060,
            SEND_COIN_REFRESH = 2062,
            USER_QUIT = 2044,
            USER_ONBACK = 2080,
            SEND_USER_ONBACK = 2081,
            USER_READY = 2106,
            SEND_GAME_NOTICE = 2401,
            FORCE_OFFLINE = 3000,
            DELAYQUIT_OFFLINE_RESP = 3003,
            KICKEDOUT = 4001,
            SEND_HEART_BEAT = 10000,
            SEND_REMAIN_TIME = 20015,
            CHANGE_TABLE = 20004,
            ROOMLIST = 20005,
            DELAY_CHECK = 20010,
            SEND_LEAVE_TABLE = 20019,
            SEND_COIN_TABLE_INFO = 20017
        }
    }

    /** Properties of a UserReadyResponse. */
    interface IUserReadyResponse {

        /** UserReadyResponse userId */
        userId?: (number|null);

        /** UserReadyResponse tableId */
        tableId?: (string|null);

        /** UserReadyResponse owner */
        owner?: (number|null);

        /** UserReadyResponse state */
        state?: (number|null);

        /** UserReadyResponse gameInfo */
        gameInfo?: (string|null);

        /** UserReadyResponse gameId */
        gameId?: (number|null);

        /** UserReadyResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a UserReadyResponse. */
    class UserReadyResponse implements IUserReadyResponse {

        /**
         * Constructs a new UserReadyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserReadyResponse);

        /** UserReadyResponse userId. */
        public userId: number;

        /** UserReadyResponse tableId. */
        public tableId: string;

        /** UserReadyResponse owner. */
        public owner: number;

        /** UserReadyResponse state. */
        public state: number;

        /** UserReadyResponse gameInfo. */
        public gameInfo: string;

        /** UserReadyResponse gameId. */
        public gameId: number;

        /** UserReadyResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new UserReadyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReadyResponse instance
         */
        public static create(properties?: kpqznn.IUserReadyResponse): kpqznn.UserReadyResponse;

        /**
         * Encodes the specified UserReadyResponse message. Does not implicitly {@link kpqznn.UserReadyResponse.verify|verify} messages.
         * @param message UserReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReadyResponse message, length delimited. Does not implicitly {@link kpqznn.UserReadyResponse.verify|verify} messages.
         * @param message UserReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReadyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserReadyResponse;

        /**
         * Decodes a UserReadyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserReadyResponse;

        /**
         * Verifies a UserReadyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReadyResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserReadyResponse;

        /**
         * Creates a plain object from a UserReadyResponse message. Also converts values to other types if specified.
         * @param message UserReadyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReadyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResponse. */
    interface IBetResponse {

        /** BetResponse userId */
        userId?: (number|null);

        /** BetResponse state */
        state?: (number|null);

        /** BetResponse postion */
        postion?: (number|null);

        /** BetResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a BetResponse. */
    class BetResponse implements IBetResponse {

        /**
         * Constructs a new BetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IBetResponse);

        /** BetResponse userId. */
        public userId: number;

        /** BetResponse state. */
        public state: number;

        /** BetResponse postion. */
        public postion: number;

        /** BetResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new BetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResponse instance
         */
        public static create(properties?: kpqznn.IBetResponse): kpqznn.BetResponse;

        /**
         * Encodes the specified BetResponse message. Does not implicitly {@link kpqznn.BetResponse.verify|verify} messages.
         * @param message BetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResponse message, length delimited. Does not implicitly {@link kpqznn.BetResponse.verify|verify} messages.
         * @param message BetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.BetResponse;

        /**
         * Decodes a BetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.BetResponse;

        /**
         * Verifies a BetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.BetResponse;

        /**
         * Creates a plain object from a BetResponse message. Also converts values to other types if specified.
         * @param message BetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.BetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShowCardResponse. */
    interface IShowCardResponse {

        /** ShowCardResponse userId */
        userId?: (number|null);

        /** ShowCardResponse state */
        state?: (number|null);

        /** ShowCardResponse outCardDto */
        outCardDto?: (kpqznn.IOutCard|null);
    }

    /** Represents a ShowCardResponse. */
    class ShowCardResponse implements IShowCardResponse {

        /**
         * Constructs a new ShowCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IShowCardResponse);

        /** ShowCardResponse userId. */
        public userId: number;

        /** ShowCardResponse state. */
        public state: number;

        /** ShowCardResponse outCardDto. */
        public outCardDto?: (kpqznn.IOutCard|null);

        /**
         * Creates a new ShowCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShowCardResponse instance
         */
        public static create(properties?: kpqznn.IShowCardResponse): kpqznn.ShowCardResponse;

        /**
         * Encodes the specified ShowCardResponse message. Does not implicitly {@link kpqznn.ShowCardResponse.verify|verify} messages.
         * @param message ShowCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IShowCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShowCardResponse message, length delimited. Does not implicitly {@link kpqznn.ShowCardResponse.verify|verify} messages.
         * @param message ShowCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IShowCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.ShowCardResponse;

        /**
         * Decodes a ShowCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShowCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.ShowCardResponse;

        /**
         * Verifies a ShowCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShowCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShowCardResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.ShowCardResponse;

        /**
         * Creates a plain object from a ShowCardResponse message. Also converts values to other types if specified.
         * @param message ShowCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.ShowCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShowCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QiangZhuangResponse. */
    interface IQiangZhuangResponse {

        /** QiangZhuangResponse userId */
        userId?: (number|null);

        /** QiangZhuangResponse state */
        state?: (number|null);

        /** QiangZhuangResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a QiangZhuangResponse. */
    class QiangZhuangResponse implements IQiangZhuangResponse {

        /**
         * Constructs a new QiangZhuangResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IQiangZhuangResponse);

        /** QiangZhuangResponse userId. */
        public userId: number;

        /** QiangZhuangResponse state. */
        public state: number;

        /** QiangZhuangResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new QiangZhuangResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QiangZhuangResponse instance
         */
        public static create(properties?: kpqznn.IQiangZhuangResponse): kpqznn.QiangZhuangResponse;

        /**
         * Encodes the specified QiangZhuangResponse message. Does not implicitly {@link kpqznn.QiangZhuangResponse.verify|verify} messages.
         * @param message QiangZhuangResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IQiangZhuangResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QiangZhuangResponse message, length delimited. Does not implicitly {@link kpqznn.QiangZhuangResponse.verify|verify} messages.
         * @param message QiangZhuangResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IQiangZhuangResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.QiangZhuangResponse;

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.QiangZhuangResponse;

        /**
         * Verifies a QiangZhuangResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QiangZhuangResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QiangZhuangResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.QiangZhuangResponse;

        /**
         * Creates a plain object from a QiangZhuangResponse message. Also converts values to other types if specified.
         * @param message QiangZhuangResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.QiangZhuangResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QiangZhuangResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserQuitResponse. */
    interface IUserQuitResponse {

        /** UserQuitResponse userId */
        userId?: (number|null);

        /** UserQuitResponse nickname */
        nickname?: (string|null);

        /** UserQuitResponse position */
        position?: (number|null);

        /** UserQuitResponse message */
        message?: (string|null);

        /** UserQuitResponse tableId */
        tableId?: (string|null);
    }

    /** Represents a UserQuitResponse. */
    class UserQuitResponse implements IUserQuitResponse {

        /**
         * Constructs a new UserQuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserQuitResponse);

        /** UserQuitResponse userId. */
        public userId: number;

        /** UserQuitResponse nickname. */
        public nickname: string;

        /** UserQuitResponse position. */
        public position: number;

        /** UserQuitResponse message. */
        public message: string;

        /** UserQuitResponse tableId. */
        public tableId: string;

        /**
         * Creates a new UserQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitResponse instance
         */
        public static create(properties?: kpqznn.IUserQuitResponse): kpqznn.UserQuitResponse;

        /**
         * Encodes the specified UserQuitResponse message. Does not implicitly {@link kpqznn.UserQuitResponse.verify|verify} messages.
         * @param message UserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitResponse message, length delimited. Does not implicitly {@link kpqznn.UserQuitResponse.verify|verify} messages.
         * @param message UserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserQuitResponse;

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserQuitResponse;

        /**
         * Verifies a UserQuitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserQuitResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserQuitResponse;

        /**
         * Creates a plain object from a UserQuitResponse message. Also converts values to other types if specified.
         * @param message UserQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserReconnectResponse. */
    interface ISendUserReconnectResponse {

        /** SendUserReconnectResponse userId */
        userId?: (number|null);

        /** SendUserReconnectResponse onLine */
        onLine?: (number|null);
    }

    /** Represents a SendUserReconnectResponse. */
    class SendUserReconnectResponse implements ISendUserReconnectResponse {

        /**
         * Constructs a new SendUserReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendUserReconnectResponse);

        /** SendUserReconnectResponse userId. */
        public userId: number;

        /** SendUserReconnectResponse onLine. */
        public onLine: number;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserReconnectResponse instance
         */
        public static create(properties?: kpqznn.ISendUserReconnectResponse): kpqznn.SendUserReconnectResponse;

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link kpqznn.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link kpqznn.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendUserReconnectResponse;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendUserReconnectResponse;

        /**
         * Verifies a SendUserReconnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserReconnectResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendUserReconnectResponse;

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @param message SendUserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendUserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserReconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReconnectResponse. */
    interface IUserReconnectResponse {

        /** UserReconnectResponse tableId */
        tableId?: (string|null);

        /** UserReconnectResponse seq */
        seq?: (string|null);

        /** UserReconnectResponse gameId */
        gameId?: (number|null);

        /** UserReconnectResponse zhuangPos */
        zhuangPos?: (number|null);

        /** UserReconnectResponse state */
        state?: (number|null);

        /** UserReconnectResponse gameInfo */
        gameInfo?: (string|null);

        /** UserReconnectResponse applicant */
        applicant?: (number|null);

        /** UserReconnectResponse applyTime */
        applyTime?: (number|null);

        /** UserReconnectResponse startApplyTime */
        startApplyTime?: (number|Long|null);

        /** UserReconnectResponse remainCardsNum */
        remainCardsNum?: (number|null);

        /** UserReconnectResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a UserReconnectResponse. */
    class UserReconnectResponse implements IUserReconnectResponse {

        /**
         * Constructs a new UserReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IUserReconnectResponse);

        /** UserReconnectResponse tableId. */
        public tableId: string;

        /** UserReconnectResponse seq. */
        public seq: string;

        /** UserReconnectResponse gameId. */
        public gameId: number;

        /** UserReconnectResponse zhuangPos. */
        public zhuangPos: number;

        /** UserReconnectResponse state. */
        public state: number;

        /** UserReconnectResponse gameInfo. */
        public gameInfo: string;

        /** UserReconnectResponse applicant. */
        public applicant: number;

        /** UserReconnectResponse applyTime. */
        public applyTime: number;

        /** UserReconnectResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /** UserReconnectResponse remainCardsNum. */
        public remainCardsNum: number;

        /** UserReconnectResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectResponse instance
         */
        public static create(properties?: kpqznn.IUserReconnectResponse): kpqznn.UserReconnectResponse;

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link kpqznn.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link kpqznn.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.UserReconnectResponse;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.UserReconnectResponse;

        /**
         * Verifies a UserReconnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReconnectResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.UserReconnectResponse;

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @param message UserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.UserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectResponse to JSON.
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

        /** TableInfo zhuangPos */
        zhuangPos?: (number|null);

        /** TableInfo state */
        state?: (number|null);

        /** TableInfo owner */
        owner?: (number|null);

        /** TableInfo gameInfo */
        gameInfo?: (string|null);

        /** TableInfo users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a TableInfo. */
    class TableInfo implements ITableInfo {

        /**
         * Constructs a new TableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ITableInfo);

        /** TableInfo tableId. */
        public tableId: string;

        /** TableInfo seq. */
        public seq: string;

        /** TableInfo gameId. */
        public gameId: number;

        /** TableInfo zhuangPos. */
        public zhuangPos: number;

        /** TableInfo state. */
        public state: number;

        /** TableInfo owner. */
        public owner: number;

        /** TableInfo gameInfo. */
        public gameInfo: string;

        /** TableInfo users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfo instance
         */
        public static create(properties?: kpqznn.ITableInfo): kpqznn.TableInfo;

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link kpqznn.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link kpqznn.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.TableInfo;

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.TableInfo;

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
        public static fromObject(object: { [k: string]: any }): kpqznn.TableInfo;

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @param message TableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.TableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableInfoResponse. */
    interface ITableInfoResponse {

        /** TableInfoResponse tableInfo */
        tableInfo?: (kpqznn.ITableInfo|null);
    }

    /** Represents a TableInfoResponse. */
    class TableInfoResponse implements ITableInfoResponse {

        /**
         * Constructs a new TableInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ITableInfoResponse);

        /** TableInfoResponse tableInfo. */
        public tableInfo?: (kpqznn.ITableInfo|null);

        /**
         * Creates a new TableInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfoResponse instance
         */
        public static create(properties?: kpqznn.ITableInfoResponse): kpqznn.TableInfoResponse;

        /**
         * Encodes the specified TableInfoResponse message. Does not implicitly {@link kpqznn.TableInfoResponse.verify|verify} messages.
         * @param message TableInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ITableInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfoResponse message, length delimited. Does not implicitly {@link kpqznn.TableInfoResponse.verify|verify} messages.
         * @param message TableInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ITableInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.TableInfoResponse;

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.TableInfoResponse;

        /**
         * Verifies a TableInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.TableInfoResponse;

        /**
         * Creates a plain object from a TableInfoResponse message. Also converts values to other types if specified.
         * @param message TableInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.TableInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendReconnectQuitResponse. */
    interface ISendReconnectQuitResponse {

        /** SendReconnectQuitResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendReconnectQuitResponse. */
    class SendReconnectQuitResponse implements ISendReconnectQuitResponse {

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendReconnectQuitResponse);

        /** SendReconnectQuitResponse userId. */
        public userId: number;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReconnectQuitResponse instance
         */
        public static create(properties?: kpqznn.ISendReconnectQuitResponse): kpqznn.SendReconnectQuitResponse;

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link kpqznn.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link kpqznn.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendReconnectQuitResponse;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendReconnectQuitResponse;

        /**
         * Verifies a SendReconnectQuitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendReconnectQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendReconnectQuitResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendReconnectQuitResponse;

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @param message SendReconnectQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendReconnectQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReconnectQuitResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserOnBackResponse. */
    interface ISendUserOnBackResponse {

        /** SendUserOnBackResponse userId */
        userId?: (number|null);

        /** SendUserOnBackResponse leaveState */
        leaveState?: (number|null);
    }

    /** Represents a SendUserOnBackResponse. */
    class SendUserOnBackResponse implements ISendUserOnBackResponse {

        /**
         * Constructs a new SendUserOnBackResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendUserOnBackResponse);

        /** SendUserOnBackResponse userId. */
        public userId: number;

        /** SendUserOnBackResponse leaveState. */
        public leaveState: number;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserOnBackResponse instance
         */
        public static create(properties?: kpqznn.ISendUserOnBackResponse): kpqznn.SendUserOnBackResponse;

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link kpqznn.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link kpqznn.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendUserOnBackResponse;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendUserOnBackResponse;

        /**
         * Verifies a SendUserOnBackResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserOnBackResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserOnBackResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendUserOnBackResponse;

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @param message SendUserOnBackResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendUserOnBackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserOnBackResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DelayCheckResponse. */
    interface IDelayCheckResponse {

        /** DelayCheckResponse content */
        content?: (string|null);
    }

    /** Represents a DelayCheckResponse. */
    class DelayCheckResponse implements IDelayCheckResponse {

        /**
         * Constructs a new DelayCheckResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IDelayCheckResponse);

        /** DelayCheckResponse content. */
        public content: string;

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckResponse instance
         */
        public static create(properties?: kpqznn.IDelayCheckResponse): kpqznn.DelayCheckResponse;

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link kpqznn.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link kpqznn.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.DelayCheckResponse;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.DelayCheckResponse;

        /**
         * Verifies a DelayCheckResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelayCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelayCheckResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.DelayCheckResponse;

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @param message DelayCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.DelayCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendHeartBeatResponse. */
    interface ISendHeartBeatResponse {

        /** SendHeartBeatResponse currentTime */
        currentTime?: (number|Long|null);
    }

    /** Represents a SendHeartBeatResponse. */
    class SendHeartBeatResponse implements ISendHeartBeatResponse {

        /**
         * Constructs a new SendHeartBeatResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendHeartBeatResponse);

        /** SendHeartBeatResponse currentTime. */
        public currentTime: (number|Long);

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendHeartBeatResponse instance
         */
        public static create(properties?: kpqznn.ISendHeartBeatResponse): kpqznn.SendHeartBeatResponse;

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link kpqznn.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link kpqznn.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendHeartBeatResponse;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendHeartBeatResponse;

        /**
         * Verifies a SendHeartBeatResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendHeartBeatResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendHeartBeatResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendHeartBeatResponse;

        /**
         * Creates a plain object from a SendHeartBeatResponse message. Also converts values to other types if specified.
         * @param message SendHeartBeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendHeartBeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendHeartBeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCoinTableInfoResponse. */
    interface ISendCoinTableInfoResponse {

        /** SendCoinTableInfoResponse tableId */
        tableId?: (string|null);

        /** SendCoinTableInfoResponse gameId */
        gameId?: (number|null);

        /** SendCoinTableInfoResponse state */
        state?: (number|null);

        /** SendCoinTableInfoResponse owner */
        owner?: (number|null);

        /** SendCoinTableInfoResponse gameInfo */
        gameInfo?: (string|null);

        /** SendCoinTableInfoResponse applicant */
        applicant?: (number|null);

        /** SendCoinTableInfoResponse applyTime */
        applyTime?: (number|null);

        /** SendCoinTableInfoResponse startApplyTime */
        startApplyTime?: (number|Long|null);

        /** SendCoinTableInfoResponse zhuangPos */
        zhuangPos?: (number|null);

        /** SendCoinTableInfoResponse remainCardsNum */
        remainCardsNum?: (number|null);

        /** SendCoinTableInfoResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a SendCoinTableInfoResponse. */
    class SendCoinTableInfoResponse implements ISendCoinTableInfoResponse {

        /**
         * Constructs a new SendCoinTableInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendCoinTableInfoResponse);

        /** SendCoinTableInfoResponse tableId. */
        public tableId: string;

        /** SendCoinTableInfoResponse gameId. */
        public gameId: number;

        /** SendCoinTableInfoResponse state. */
        public state: number;

        /** SendCoinTableInfoResponse owner. */
        public owner: number;

        /** SendCoinTableInfoResponse gameInfo. */
        public gameInfo: string;

        /** SendCoinTableInfoResponse applicant. */
        public applicant: number;

        /** SendCoinTableInfoResponse applyTime. */
        public applyTime: number;

        /** SendCoinTableInfoResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /** SendCoinTableInfoResponse zhuangPos. */
        public zhuangPos: number;

        /** SendCoinTableInfoResponse remainCardsNum. */
        public remainCardsNum: number;

        /** SendCoinTableInfoResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new SendCoinTableInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCoinTableInfoResponse instance
         */
        public static create(properties?: kpqznn.ISendCoinTableInfoResponse): kpqznn.SendCoinTableInfoResponse;

        /**
         * Encodes the specified SendCoinTableInfoResponse message. Does not implicitly {@link kpqznn.SendCoinTableInfoResponse.verify|verify} messages.
         * @param message SendCoinTableInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendCoinTableInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCoinTableInfoResponse message, length delimited. Does not implicitly {@link kpqznn.SendCoinTableInfoResponse.verify|verify} messages.
         * @param message SendCoinTableInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendCoinTableInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCoinTableInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCoinTableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendCoinTableInfoResponse;

        /**
         * Decodes a SendCoinTableInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCoinTableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendCoinTableInfoResponse;

        /**
         * Verifies a SendCoinTableInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCoinTableInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCoinTableInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendCoinTableInfoResponse;

        /**
         * Creates a plain object from a SendCoinTableInfoResponse message. Also converts values to other types if specified.
         * @param message SendCoinTableInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendCoinTableInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCoinTableInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableResponse. */
    interface IJoinTableResponse {

        /** JoinTableResponse tableId */
        tableId?: (string|null);

        /** JoinTableResponse seq */
        seq?: (string|null);

        /** JoinTableResponse gameId */
        gameId?: (number|null);

        /** JoinTableResponse state */
        state?: (number|null);

        /** JoinTableResponse channelId */
        channelId?: (number|null);

        /** JoinTableResponse gameInfo */
        gameInfo?: (string|null);

        /** JoinTableResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a JoinTableResponse. */
    class JoinTableResponse implements IJoinTableResponse {

        /**
         * Constructs a new JoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IJoinTableResponse);

        /** JoinTableResponse tableId. */
        public tableId: string;

        /** JoinTableResponse seq. */
        public seq: string;

        /** JoinTableResponse gameId. */
        public gameId: number;

        /** JoinTableResponse state. */
        public state: number;

        /** JoinTableResponse channelId. */
        public channelId: number;

        /** JoinTableResponse gameInfo. */
        public gameInfo: string;

        /** JoinTableResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableResponse instance
         */
        public static create(properties?: kpqznn.IJoinTableResponse): kpqznn.JoinTableResponse;

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link kpqznn.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link kpqznn.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.JoinTableResponse;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.JoinTableResponse;

        /**
         * Verifies a JoinTableResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinTableResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.JoinTableResponse;

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @param message JoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.JoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendMessageResponse. */
    interface ISendMessageResponse {

        /** SendMessageResponse userId */
        userId?: (number|null);

        /** SendMessageResponse content */
        content?: (string|null);

        /** SendMessageResponse toUserId */
        toUserId?: (number|null);
    }

    /** Represents a SendMessageResponse. */
    class SendMessageResponse implements ISendMessageResponse {

        /**
         * Constructs a new SendMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendMessageResponse);

        /** SendMessageResponse userId. */
        public userId: number;

        /** SendMessageResponse content. */
        public content: string;

        /** SendMessageResponse toUserId. */
        public toUserId: number;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendMessageResponse instance
         */
        public static create(properties?: kpqznn.ISendMessageResponse): kpqznn.SendMessageResponse;

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link kpqznn.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link kpqznn.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendMessageResponse;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendMessageResponse;

        /**
         * Verifies a SendMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendMessageResponse;

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @param message SendMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRoundResultResponse. */
    interface ISendRoundResultResponse {

        /** SendRoundResultResponse tableId */
        tableId?: (string|null);

        /** SendRoundResultResponse state */
        state?: (number|null);

        /** SendRoundResultResponse gameInfo */
        gameInfo?: (string|null);

        /** SendRoundResultResponse zhuangPos */
        zhuangPos?: (number|null);

        /** SendRoundResultResponse time */
        time?: (string|null);

        /** SendRoundResultResponse users */
        users?: (kpqznn.IUser[]|null);
    }

    /** Represents a SendRoundResultResponse. */
    class SendRoundResultResponse implements ISendRoundResultResponse {

        /**
         * Constructs a new SendRoundResultResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendRoundResultResponse);

        /** SendRoundResultResponse tableId. */
        public tableId: string;

        /** SendRoundResultResponse state. */
        public state: number;

        /** SendRoundResultResponse gameInfo. */
        public gameInfo: string;

        /** SendRoundResultResponse zhuangPos. */
        public zhuangPos: number;

        /** SendRoundResultResponse time. */
        public time: string;

        /** SendRoundResultResponse users. */
        public users: kpqznn.IUser[];

        /**
         * Creates a new SendRoundResultResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRoundResultResponse instance
         */
        public static create(properties?: kpqznn.ISendRoundResultResponse): kpqznn.SendRoundResultResponse;

        /**
         * Encodes the specified SendRoundResultResponse message. Does not implicitly {@link kpqznn.SendRoundResultResponse.verify|verify} messages.
         * @param message SendRoundResultResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendRoundResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRoundResultResponse message, length delimited. Does not implicitly {@link kpqznn.SendRoundResultResponse.verify|verify} messages.
         * @param message SendRoundResultResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendRoundResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendRoundResultResponse;

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendRoundResultResponse;

        /**
         * Verifies a SendRoundResultResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendRoundResultResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendRoundResultResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendRoundResultResponse;

        /**
         * Creates a plain object from a SendRoundResultResponse message. Also converts values to other types if specified.
         * @param message SendRoundResultResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendRoundResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRoundResultResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRemainTimeResponse. */
    interface ISendRemainTimeResponse {

        /** SendRemainTimeResponse time */
        time?: (number|null);

        /** SendRemainTimeResponse type */
        type?: (number|null);
    }

    /** Represents a SendRemainTimeResponse. */
    class SendRemainTimeResponse implements ISendRemainTimeResponse {

        /**
         * Constructs a new SendRemainTimeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendRemainTimeResponse);

        /** SendRemainTimeResponse time. */
        public time: number;

        /** SendRemainTimeResponse type. */
        public type: number;

        /**
         * Creates a new SendRemainTimeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRemainTimeResponse instance
         */
        public static create(properties?: kpqznn.ISendRemainTimeResponse): kpqznn.SendRemainTimeResponse;

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link kpqznn.SendRemainTimeResponse.verify|verify} messages.
         * @param message SendRemainTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendRemainTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link kpqznn.SendRemainTimeResponse.verify|verify} messages.
         * @param message SendRemainTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendRemainTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendRemainTimeResponse;

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendRemainTimeResponse;

        /**
         * Verifies a SendRemainTimeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendRemainTimeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendRemainTimeResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendRemainTimeResponse;

        /**
         * Creates a plain object from a SendRemainTimeResponse message. Also converts values to other types if specified.
         * @param message SendRemainTimeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendRemainTimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRemainTimeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendGameNoticeResponse. */
    interface ISendGameNoticeResponse {

        /** SendGameNoticeResponse notice */
        notice?: (string|null);
    }

    /** Represents a SendGameNoticeResponse. */
    class SendGameNoticeResponse implements ISendGameNoticeResponse {

        /**
         * Constructs a new SendGameNoticeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendGameNoticeResponse);

        /** SendGameNoticeResponse notice. */
        public notice: string;

        /**
         * Creates a new SendGameNoticeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendGameNoticeResponse instance
         */
        public static create(properties?: kpqznn.ISendGameNoticeResponse): kpqznn.SendGameNoticeResponse;

        /**
         * Encodes the specified SendGameNoticeResponse message. Does not implicitly {@link kpqznn.SendGameNoticeResponse.verify|verify} messages.
         * @param message SendGameNoticeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendGameNoticeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendGameNoticeResponse message, length delimited. Does not implicitly {@link kpqznn.SendGameNoticeResponse.verify|verify} messages.
         * @param message SendGameNoticeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendGameNoticeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendGameNoticeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendGameNoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendGameNoticeResponse;

        /**
         * Decodes a SendGameNoticeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendGameNoticeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendGameNoticeResponse;

        /**
         * Verifies a SendGameNoticeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendGameNoticeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendGameNoticeResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendGameNoticeResponse;

        /**
         * Creates a plain object from a SendGameNoticeResponse message. Also converts values to other types if specified.
         * @param message SendGameNoticeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendGameNoticeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendGameNoticeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendLeaveTableResponse. */
    interface ISendLeaveTableResponse {

        /** SendLeaveTableResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendLeaveTableResponse. */
    class SendLeaveTableResponse implements ISendLeaveTableResponse {

        /**
         * Constructs a new SendLeaveTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.ISendLeaveTableResponse);

        /** SendLeaveTableResponse userId. */
        public userId: number;

        /**
         * Creates a new SendLeaveTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendLeaveTableResponse instance
         */
        public static create(properties?: kpqznn.ISendLeaveTableResponse): kpqznn.SendLeaveTableResponse;

        /**
         * Encodes the specified SendLeaveTableResponse message. Does not implicitly {@link kpqznn.SendLeaveTableResponse.verify|verify} messages.
         * @param message SendLeaveTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.ISendLeaveTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendLeaveTableResponse message, length delimited. Does not implicitly {@link kpqznn.SendLeaveTableResponse.verify|verify} messages.
         * @param message SendLeaveTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.ISendLeaveTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendLeaveTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendLeaveTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.SendLeaveTableResponse;

        /**
         * Decodes a SendLeaveTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendLeaveTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.SendLeaveTableResponse;

        /**
         * Verifies a SendLeaveTableResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendLeaveTableResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendLeaveTableResponse
         */
        public static fromObject(object: { [k: string]: any }): kpqznn.SendLeaveTableResponse;

        /**
         * Creates a plain object from a SendLeaveTableResponse message. Also converts values to other types if specified.
         * @param message SendLeaveTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.SendLeaveTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendLeaveTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (kpqznn.Response.ErrorCode|null);

        /** Response serverTime */
        serverTime?: (number|Long|null);

        /** Response cmd */
        cmd?: (kpqznn.Request.CMD|null);

        /** Response userReadyResponse */
        userReadyResponse?: (kpqznn.IUserReadyResponse|null);

        /** Response userQuitResponse */
        userQuitResponse?: (kpqznn.IUserQuitResponse|null);

        /** Response sendUserReconnectResponse */
        sendUserReconnectResponse?: (kpqznn.ISendUserReconnectResponse|null);

        /** Response sendReconnectQuitResponse */
        sendReconnectQuitResponse?: (kpqznn.ISendReconnectQuitResponse|null);

        /** Response sendUserOnBackResponse */
        sendUserOnBackResponse?: (kpqznn.ISendUserOnBackResponse|null);

        /** Response delayCheckResponse */
        delayCheckResponse?: (kpqznn.IDelayCheckResponse|null);

        /** Response userReconnectResponse */
        userReconnectResponse?: (kpqznn.IUserReconnectResponse|null);

        /** Response sendHeartBeatResponse */
        sendHeartBeatResponse?: (kpqznn.ISendHeartBeatResponse|null);

        /** Response betResponse */
        betResponse?: (kpqznn.IBetResponse|null);

        /** Response showCardResponse */
        showCardResponse?: (kpqznn.IShowCardResponse|null);

        /** Response qiangZhuangResponse */
        qiangZhuangResponse?: (kpqznn.IQiangZhuangResponse|null);

        /** Response sendCoinTableInfoResponse */
        sendCoinTableInfoResponse?: (kpqznn.ISendCoinTableInfoResponse|null);

        /** Response joinTableResponse */
        joinTableResponse?: (kpqznn.IJoinTableResponse|null);

        /** Response sendMessageResponse */
        sendMessageResponse?: (kpqznn.ISendMessageResponse|null);

        /** Response kickedOutResponse */
        kickedOutResponse?: (kpqznn.IKickedOutResponse|null);

        /** Response tableInfoResponse */
        tableInfoResponse?: (kpqznn.ITableInfoResponse|null);

        /** Response sendRoundResultResponse */
        sendRoundResultResponse?: (kpqznn.ISendRoundResultResponse|null);

        /** Response sendRemainTimeResponse */
        sendRemainTimeResponse?: (kpqznn.ISendRemainTimeResponse|null);

        /** Response sendGameNoticeResponse */
        sendGameNoticeResponse?: (kpqznn.ISendGameNoticeResponse|null);

        /** Response sendLeaveTableResponse */
        sendLeaveTableResponse?: (kpqznn.ISendLeaveTableResponse|null);

        /** Response roomListResponse */
        roomListResponse?: (kpqznn.IRoomListResponse|null);

        /** Response sendCoinRefreshResponse */
        sendCoinRefreshResponse?: (kpqznn.ISendCoinRefreshResponse|null);

        /** Response hallRefreshCoinResponse */
        hallRefreshCoinResponse?: (kpqznn.IHallRefreshCoinResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: kpqznn.IResponse);

        /** Response error. */
        public error: kpqznn.Response.ErrorCode;

        /** Response serverTime. */
        public serverTime: (number|Long);

        /** Response cmd. */
        public cmd: kpqznn.Request.CMD;

        /** Response userReadyResponse. */
        public userReadyResponse?: (kpqznn.IUserReadyResponse|null);

        /** Response userQuitResponse. */
        public userQuitResponse?: (kpqznn.IUserQuitResponse|null);

        /** Response sendUserReconnectResponse. */
        public sendUserReconnectResponse?: (kpqznn.ISendUserReconnectResponse|null);

        /** Response sendReconnectQuitResponse. */
        public sendReconnectQuitResponse?: (kpqznn.ISendReconnectQuitResponse|null);

        /** Response sendUserOnBackResponse. */
        public sendUserOnBackResponse?: (kpqznn.ISendUserOnBackResponse|null);

        /** Response delayCheckResponse. */
        public delayCheckResponse?: (kpqznn.IDelayCheckResponse|null);

        /** Response userReconnectResponse. */
        public userReconnectResponse?: (kpqznn.IUserReconnectResponse|null);

        /** Response sendHeartBeatResponse. */
        public sendHeartBeatResponse?: (kpqznn.ISendHeartBeatResponse|null);

        /** Response betResponse. */
        public betResponse?: (kpqznn.IBetResponse|null);

        /** Response showCardResponse. */
        public showCardResponse?: (kpqznn.IShowCardResponse|null);

        /** Response qiangZhuangResponse. */
        public qiangZhuangResponse?: (kpqznn.IQiangZhuangResponse|null);

        /** Response sendCoinTableInfoResponse. */
        public sendCoinTableInfoResponse?: (kpqznn.ISendCoinTableInfoResponse|null);

        /** Response joinTableResponse. */
        public joinTableResponse?: (kpqznn.IJoinTableResponse|null);

        /** Response sendMessageResponse. */
        public sendMessageResponse?: (kpqznn.ISendMessageResponse|null);

        /** Response kickedOutResponse. */
        public kickedOutResponse?: (kpqznn.IKickedOutResponse|null);

        /** Response tableInfoResponse. */
        public tableInfoResponse?: (kpqznn.ITableInfoResponse|null);

        /** Response sendRoundResultResponse. */
        public sendRoundResultResponse?: (kpqznn.ISendRoundResultResponse|null);

        /** Response sendRemainTimeResponse. */
        public sendRemainTimeResponse?: (kpqznn.ISendRemainTimeResponse|null);

        /** Response sendGameNoticeResponse. */
        public sendGameNoticeResponse?: (kpqznn.ISendGameNoticeResponse|null);

        /** Response sendLeaveTableResponse. */
        public sendLeaveTableResponse?: (kpqznn.ISendLeaveTableResponse|null);

        /** Response roomListResponse. */
        public roomListResponse?: (kpqznn.IRoomListResponse|null);

        /** Response sendCoinRefreshResponse. */
        public sendCoinRefreshResponse?: (kpqznn.ISendCoinRefreshResponse|null);

        /** Response hallRefreshCoinResponse. */
        public hallRefreshCoinResponse?: (kpqznn.IHallRefreshCoinResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: kpqznn.IResponse): kpqznn.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link kpqznn.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: kpqznn.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link kpqznn.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: kpqznn.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): kpqznn.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): kpqznn.Response;

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
        public static fromObject(object: { [k: string]: any }): kpqznn.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: kpqznn.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            ERROR = 400,
            USER_READY_ERROR = 3010,
            ACCOUNT_NOT_ENOUGH = 3006,
            TABLE_NOT_FIND_ERROR = 3008,
            NOT_IN_TABLE = 3011,
            JOIN_TABLE_ERROR = 3007,
            TABLE_NO_POSITION = 3009,
            USER_QUIT_ERROR = 3013,
            NOT_ALLOW_QUIT = 3014,
            WAITING_RESPONSE = 3043,
            USER_MP_ERROR = 3200,
            TABLE_HASSTART_POSITION = 3071,
            RECONNET_ERROR = 3025,
            SEND_MESSAGE_ERROR = 3040,
            USER_ONBACK_ERROR = 3056,
            DELAY_CHECK_ERROR = 3201,
            RE_JOIN_TABLE_ERROR = 3026,
            USER_BET_ERROR = 3077,
            USER_SHOWCARD_ERROR = 3076,
            QIANG_ZHUANG_ERROR = 3075,
            USER_CHANGE_TABLE_ERROR = 3069,
            USER_CHANGE_TABLE_STATE_ERROR = 3070,
            ROOM_LIST_ERROR = 3091,
            CHANNELID_GAMENO_ERROR = 3092,
            USER_BAN = 30002,
            USER_NOT_FOUND_ERROR = 3005,
            FORCED_OFFLINE = 30001
        }
    }
}
