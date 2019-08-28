import * as $protobuf from "protobufjs";
/** Namespace ttz. */
export namespace ttz {

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
        constructor(properties?: ttz.IUserCards);

        /** UserCards remainCards. */
        public remainCards: number[];

        /**
         * Creates a new UserCards instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserCards instance
         */
        public static create(properties?: ttz.IUserCards): ttz.UserCards;

        /**
         * Encodes the specified UserCards message. Does not implicitly {@link ttz.UserCards.verify|verify} messages.
         * @param message UserCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserCards message, length delimited. Does not implicitly {@link ttz.UserCards.verify|verify} messages.
         * @param message UserCards message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserCards, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserCards message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserCards;

        /**
         * Decodes a UserCards message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserCards;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserCards;

        /**
         * Creates a plain object from a UserCards message. Also converts values to other types if specified.
         * @param message UserCards
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserCards, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** User tongsha */
        tongsha?: (boolean|null);

        /** User tongpei */
        tongpei?: (boolean|null);

        /** User noCoin */
        noCoin?: (boolean|null);

        /** User betCoin */
        betCoin?: (number|null);

        /** User qiang */
        qiang?: (number|null);

        /** User remainCards */
        remainCards?: (number[]|null);

        /** User bestOutCardDto */
        bestOutCardDto?: (number[]|null);

        /** User allowQiang */
        allowQiang?: (number[]|null);

        /** User allowBet */
        allowBet?: (number[]|null);

        /** User currentScore */
        currentScore?: (number|null);

        /** User outCardDto */
        outCardDto?: (number[]|null);

        /** User cards */
        cards?: (ttz.IUserCards|null);

        /** User totalScore */
        totalScore?: (number|null);

        /** User revenue */
        revenue?: (number|null);

        /** User startScore */
        startScore?: (number|null);

        /** User endScore */
        endScore?: (number|null);

        /** User hasShowCard */
        hasShowCard?: (boolean|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IUser);

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

        /** User tongsha. */
        public tongsha: boolean;

        /** User tongpei. */
        public tongpei: boolean;

        /** User noCoin. */
        public noCoin: boolean;

        /** User betCoin. */
        public betCoin: number;

        /** User qiang. */
        public qiang: number;

        /** User remainCards. */
        public remainCards: number[];

        /** User bestOutCardDto. */
        public bestOutCardDto: number[];

        /** User allowQiang. */
        public allowQiang: number[];

        /** User allowBet. */
        public allowBet: number[];

        /** User currentScore. */
        public currentScore: number;

        /** User outCardDto. */
        public outCardDto: number[];

        /** User cards. */
        public cards?: (ttz.IUserCards|null);

        /** User totalScore. */
        public totalScore: number;

        /** User revenue. */
        public revenue: number;

        /** User startScore. */
        public startScore: number;

        /** User endScore. */
        public endScore: number;

        /** User hasShowCard. */
        public hasShowCard: boolean;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: ttz.IUser): ttz.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link ttz.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link ttz.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.User;

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
        public static fromObject(object: { [k: string]: any }): ttz.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserReady. */
    interface IUserReady {

        /** UserReady userId */
        userId?: (number|null);

        /** UserReady state */
        state?: (number|null);
    }

    /** Represents a UserReady. */
    class UserReady implements IUserReady {

        /**
         * Constructs a new UserReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IUserReady);

        /** UserReady userId. */
        public userId: number;

        /** UserReady state. */
        public state: number;

        /**
         * Creates a new UserReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReady instance
         */
        public static create(properties?: ttz.IUserReady): ttz.UserReady;

        /**
         * Encodes the specified UserReady message. Does not implicitly {@link ttz.UserReady.verify|verify} messages.
         * @param message UserReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReady message, length delimited. Does not implicitly {@link ttz.UserReady.verify|verify} messages.
         * @param message UserReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserReady;

        /**
         * Decodes a UserReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserReady;

        /**
         * Verifies a UserReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserReady
         */
        public static fromObject(object: { [k: string]: any }): ttz.UserReady;

        /**
         * Creates a plain object from a UserReady message. Also converts values to other types if specified.
         * @param message UserReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableRequest. */
    interface IJoinTableRequest {

        /** JoinTableRequest sid */
        sid?: (string|null);

        /** JoinTableRequest tableId */
        tableId?: (string|null);

        /** JoinTableRequest gps */
        gps?: (string|null);
    }

    /** Represents a JoinTableRequest. */
    class JoinTableRequest implements IJoinTableRequest {

        /**
         * Constructs a new JoinTableRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IJoinTableRequest);

        /** JoinTableRequest sid. */
        public sid: string;

        /** JoinTableRequest tableId. */
        public tableId: string;

        /** JoinTableRequest gps. */
        public gps: string;

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableRequest instance
         */
        public static create(properties?: ttz.IJoinTableRequest): ttz.JoinTableRequest;

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link ttz.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link ttz.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.JoinTableRequest;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.JoinTableRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.JoinTableRequest;

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @param message JoinTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.JoinTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableRequest to JSON.
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

        /** JoinTableResponse currentRound */
        currentRound?: (number|null);

        /** JoinTableResponse totalRound */
        totalRound?: (number|null);

        /** JoinTableResponse gameInfo */
        gameInfo?: (string|null);

        /** JoinTableResponse cardCount */
        cardCount?: (number[]|null);

        /** JoinTableResponse users */
        users?: (ttz.IUser[]|null);
    }

    /** Represents a JoinTableResponse. */
    class JoinTableResponse implements IJoinTableResponse {

        /**
         * Constructs a new JoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IJoinTableResponse);

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

        /** JoinTableResponse currentRound. */
        public currentRound: number;

        /** JoinTableResponse totalRound. */
        public totalRound: number;

        /** JoinTableResponse gameInfo. */
        public gameInfo: string;

        /** JoinTableResponse cardCount. */
        public cardCount: number[];

        /** JoinTableResponse users. */
        public users: ttz.IUser[];

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableResponse instance
         */
        public static create(properties?: ttz.IJoinTableResponse): ttz.JoinTableResponse;

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link ttz.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link ttz.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.JoinTableResponse;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.JoinTableResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.JoinTableResponse;

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @param message JoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.JoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableResponse to JSON.
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
        constructor(properties?: ttz.IUserReadyRequest);

        /**
         * Creates a new UserReadyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReadyRequest instance
         */
        public static create(properties?: ttz.IUserReadyRequest): ttz.UserReadyRequest;

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link ttz.UserReadyRequest.verify|verify} messages.
         * @param message UserReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link ttz.UserReadyRequest.verify|verify} messages.
         * @param message UserReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserReadyRequest;

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserReadyRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserReadyRequest;

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @param message UserReadyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReadyRequest to JSON.
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
        constructor(properties?: ttz.IKickedOutRequest);

        /** KickedOutRequest userId. */
        public userId: number;

        /**
         * Creates a new KickedOutRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickedOutRequest instance
         */
        public static create(properties?: ttz.IKickedOutRequest): ttz.KickedOutRequest;

        /**
         * Encodes the specified KickedOutRequest message. Does not implicitly {@link ttz.KickedOutRequest.verify|verify} messages.
         * @param message KickedOutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IKickedOutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickedOutRequest message, length delimited. Does not implicitly {@link ttz.KickedOutRequest.verify|verify} messages.
         * @param message KickedOutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IKickedOutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.KickedOutRequest;

        /**
         * Decodes a KickedOutRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickedOutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.KickedOutRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.KickedOutRequest;

        /**
         * Creates a plain object from a KickedOutRequest message. Also converts values to other types if specified.
         * @param message KickedOutRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.KickedOutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: ttz.IKickedOutResponse);

        /** KickedOutResponse desc. */
        public desc: string;

        /**
         * Creates a new KickedOutResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KickedOutResponse instance
         */
        public static create(properties?: ttz.IKickedOutResponse): ttz.KickedOutResponse;

        /**
         * Encodes the specified KickedOutResponse message. Does not implicitly {@link ttz.KickedOutResponse.verify|verify} messages.
         * @param message KickedOutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IKickedOutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KickedOutResponse message, length delimited. Does not implicitly {@link ttz.KickedOutResponse.verify|verify} messages.
         * @param message KickedOutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IKickedOutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.KickedOutResponse;

        /**
         * Decodes a KickedOutResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KickedOutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.KickedOutResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.KickedOutResponse;

        /**
         * Creates a plain object from a KickedOutResponse message. Also converts values to other types if specified.
         * @param message KickedOutResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.KickedOutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KickedOutResponse to JSON.
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
        constructor(properties?: ttz.IQiangZhuangRequest);

        /** QiangZhuangRequest qiang. */
        public qiang: number;

        /**
         * Creates a new QiangZhuangRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QiangZhuangRequest instance
         */
        public static create(properties?: ttz.IQiangZhuangRequest): ttz.QiangZhuangRequest;

        /**
         * Encodes the specified QiangZhuangRequest message. Does not implicitly {@link ttz.QiangZhuangRequest.verify|verify} messages.
         * @param message QiangZhuangRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IQiangZhuangRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QiangZhuangRequest message, length delimited. Does not implicitly {@link ttz.QiangZhuangRequest.verify|verify} messages.
         * @param message QiangZhuangRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IQiangZhuangRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.QiangZhuangRequest;

        /**
         * Decodes a QiangZhuangRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QiangZhuangRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.QiangZhuangRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.QiangZhuangRequest;

        /**
         * Creates a plain object from a QiangZhuangRequest message. Also converts values to other types if specified.
         * @param message QiangZhuangRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.QiangZhuangRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QiangZhuangRequest to JSON.
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
        constructor(properties?: ttz.IBetRequest);

        /** BetRequest betCoin. */
        public betCoin: number;

        /**
         * Creates a new BetRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRequest instance
         */
        public static create(properties?: ttz.IBetRequest): ttz.BetRequest;

        /**
         * Encodes the specified BetRequest message. Does not implicitly {@link ttz.BetRequest.verify|verify} messages.
         * @param message BetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRequest message, length delimited. Does not implicitly {@link ttz.BetRequest.verify|verify} messages.
         * @param message BetRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IBetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.BetRequest;

        /**
         * Decodes a BetRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.BetRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.BetRequest;

        /**
         * Creates a plain object from a BetRequest message. Also converts values to other types if specified.
         * @param message BetRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.BetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetUser. */
    interface IBetUser {

        /** BetUser userId */
        userId?: (number|null);

        /** BetUser state */
        state?: (number|null);

        /** BetUser betCoin */
        betCoin?: (number|null);
    }

    /** Represents a BetUser. */
    class BetUser implements IBetUser {

        /**
         * Constructs a new BetUser.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IBetUser);

        /** BetUser userId. */
        public userId: number;

        /** BetUser state. */
        public state: number;

        /** BetUser betCoin. */
        public betCoin: number;

        /**
         * Creates a new BetUser instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetUser instance
         */
        public static create(properties?: ttz.IBetUser): ttz.BetUser;

        /**
         * Encodes the specified BetUser message. Does not implicitly {@link ttz.BetUser.verify|verify} messages.
         * @param message BetUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IBetUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetUser message, length delimited. Does not implicitly {@link ttz.BetUser.verify|verify} messages.
         * @param message BetUser message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IBetUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetUser message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.BetUser;

        /**
         * Decodes a BetUser message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.BetUser;

        /**
         * Verifies a BetUser message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetUser message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetUser
         */
        public static fromObject(object: { [k: string]: any }): ttz.BetUser;

        /**
         * Creates a plain object from a BetUser message. Also converts values to other types if specified.
         * @param message BetUser
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.BetUser, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetUser to JSON.
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

        /** BetResponse users */
        users?: (ttz.IBetUser[]|null);
    }

    /** Represents a BetResponse. */
    class BetResponse implements IBetResponse {

        /**
         * Constructs a new BetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IBetResponse);

        /** BetResponse userId. */
        public userId: number;

        /** BetResponse state. */
        public state: number;

        /** BetResponse users. */
        public users: ttz.IBetUser[];

        /**
         * Creates a new BetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResponse instance
         */
        public static create(properties?: ttz.IBetResponse): ttz.BetResponse;

        /**
         * Encodes the specified BetResponse message. Does not implicitly {@link ttz.BetResponse.verify|verify} messages.
         * @param message BetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResponse message, length delimited. Does not implicitly {@link ttz.BetResponse.verify|verify} messages.
         * @param message BetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.BetResponse;

        /**
         * Decodes a BetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.BetResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.BetResponse;

        /**
         * Creates a plain object from a BetResponse message. Also converts values to other types if specified.
         * @param message BetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.BetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResponse to JSON.
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
        constructor(properties?: ttz.IUserReconnectRequest);

        /** UserReconnectRequest userId. */
        public userId: number;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectRequest instance
         */
        public static create(properties?: ttz.IUserReconnectRequest): ttz.UserReconnectRequest;

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link ttz.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link ttz.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserReconnectRequest;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserReconnectRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserReconnectRequest;

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @param message UserReconnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserReconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectRequest to JSON.
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
        constructor(properties?: ttz.IUserQuitRequest);

        /**
         * Creates a new UserQuitRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitRequest instance
         */
        public static create(properties?: ttz.IUserQuitRequest): ttz.UserQuitRequest;

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link ttz.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link ttz.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserQuitRequest;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserQuitRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserQuitRequest;

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @param message UserQuitRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserQuitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitRequest to JSON.
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

        /** UserQuitResponse tableId */
        tableId?: (string|null);
    }

    /** Represents a UserQuitResponse. */
    class UserQuitResponse implements IUserQuitResponse {

        /**
         * Constructs a new UserQuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IUserQuitResponse);

        /** UserQuitResponse userId. */
        public userId: number;

        /** UserQuitResponse nickname. */
        public nickname: string;

        /** UserQuitResponse position. */
        public position: number;

        /** UserQuitResponse tableId. */
        public tableId: string;

        /**
         * Creates a new UserQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitResponse instance
         */
        public static create(properties?: ttz.IUserQuitResponse): ttz.UserQuitResponse;

        /**
         * Encodes the specified UserQuitResponse message. Does not implicitly {@link ttz.UserQuitResponse.verify|verify} messages.
         * @param message UserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitResponse message, length delimited. Does not implicitly {@link ttz.UserQuitResponse.verify|verify} messages.
         * @param message UserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserQuitResponse;

        /**
         * Decodes a UserQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserQuitResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserQuitResponse;

        /**
         * Creates a plain object from a UserQuitResponse message. Also converts values to other types if specified.
         * @param message UserQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitResponse to JSON.
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
        constructor(properties?: ttz.IMessageRequest);

        /** MessageRequest content. */
        public content: string;

        /** MessageRequest toUserId. */
        public toUserId: number;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageRequest instance
         */
        public static create(properties?: ttz.IMessageRequest): ttz.MessageRequest;

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link ttz.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link ttz.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.MessageRequest;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.MessageRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.MessageRequest;

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @param message MessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.MessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserOnBackRequest. */
    interface IUserOnBackRequest {

        /** UserOnBackRequest leaveState */
        leaveState?: (number|null);
    }

    /** Represents a UserOnBackRequest. */
    class UserOnBackRequest implements IUserOnBackRequest {

        /**
         * Constructs a new UserOnBackRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IUserOnBackRequest);

        /** UserOnBackRequest leaveState. */
        public leaveState: number;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserOnBackRequest instance
         */
        public static create(properties?: ttz.IUserOnBackRequest): ttz.UserOnBackRequest;

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link ttz.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link ttz.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserOnBackRequest;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserOnBackRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserOnBackRequest;

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @param message UserOnBackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserOnBackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: ttz.IDelayCheckRequest);

        /** DelayCheckRequest content. */
        public content: string;

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckRequest instance
         */
        public static create(properties?: ttz.IDelayCheckRequest): ttz.DelayCheckRequest;

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link ttz.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link ttz.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.DelayCheckRequest;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.DelayCheckRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.DelayCheckRequest;

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @param message DelayCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.DelayCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoticePushFrCenterRequest. */
    interface INoticePushFrCenterRequest {
    }

    /** Represents a NoticePushFrCenterRequest. */
    class NoticePushFrCenterRequest implements INoticePushFrCenterRequest {

        /**
         * Constructs a new NoticePushFrCenterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.INoticePushFrCenterRequest);

        /**
         * Creates a new NoticePushFrCenterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticePushFrCenterRequest instance
         */
        public static create(properties?: ttz.INoticePushFrCenterRequest): ttz.NoticePushFrCenterRequest;

        /**
         * Encodes the specified NoticePushFrCenterRequest message. Does not implicitly {@link ttz.NoticePushFrCenterRequest.verify|verify} messages.
         * @param message NoticePushFrCenterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.INoticePushFrCenterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoticePushFrCenterRequest message, length delimited. Does not implicitly {@link ttz.NoticePushFrCenterRequest.verify|verify} messages.
         * @param message NoticePushFrCenterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.INoticePushFrCenterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoticePushFrCenterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticePushFrCenterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.NoticePushFrCenterRequest;

        /**
         * Decodes a NoticePushFrCenterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticePushFrCenterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.NoticePushFrCenterRequest;

        /**
         * Verifies a NoticePushFrCenterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoticePushFrCenterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoticePushFrCenterRequest
         */
        public static fromObject(object: { [k: string]: any }): ttz.NoticePushFrCenterRequest;

        /**
         * Creates a plain object from a NoticePushFrCenterRequest message. Also converts values to other types if specified.
         * @param message NoticePushFrCenterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.NoticePushFrCenterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoticePushFrCenterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NoticePushFrCenterResponse. */
    interface INoticePushFrCenterResponse {

        /** NoticePushFrCenterResponse content */
        content?: (string|null);
    }

    /** Represents a NoticePushFrCenterResponse. */
    class NoticePushFrCenterResponse implements INoticePushFrCenterResponse {

        /**
         * Constructs a new NoticePushFrCenterResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.INoticePushFrCenterResponse);

        /** NoticePushFrCenterResponse content. */
        public content: string;

        /**
         * Creates a new NoticePushFrCenterResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NoticePushFrCenterResponse instance
         */
        public static create(properties?: ttz.INoticePushFrCenterResponse): ttz.NoticePushFrCenterResponse;

        /**
         * Encodes the specified NoticePushFrCenterResponse message. Does not implicitly {@link ttz.NoticePushFrCenterResponse.verify|verify} messages.
         * @param message NoticePushFrCenterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.INoticePushFrCenterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NoticePushFrCenterResponse message, length delimited. Does not implicitly {@link ttz.NoticePushFrCenterResponse.verify|verify} messages.
         * @param message NoticePushFrCenterResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.INoticePushFrCenterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoticePushFrCenterResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NoticePushFrCenterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.NoticePushFrCenterResponse;

        /**
         * Decodes a NoticePushFrCenterResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NoticePushFrCenterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.NoticePushFrCenterResponse;

        /**
         * Verifies a NoticePushFrCenterResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NoticePushFrCenterResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NoticePushFrCenterResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.NoticePushFrCenterResponse;

        /**
         * Creates a plain object from a NoticePushFrCenterResponse message. Also converts values to other types if specified.
         * @param message NoticePushFrCenterResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.NoticePushFrCenterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NoticePushFrCenterResponse to JSON.
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
        constructor(properties?: ttz.IHallRefreshCoinRequest);

        /** HallRefreshCoinRequest userId. */
        public userId: number;

        /** HallRefreshCoinRequest type. */
        public type: number;

        /**
         * Creates a new HallRefreshCoinRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HallRefreshCoinRequest instance
         */
        public static create(properties?: ttz.IHallRefreshCoinRequest): ttz.HallRefreshCoinRequest;

        /**
         * Encodes the specified HallRefreshCoinRequest message. Does not implicitly {@link ttz.HallRefreshCoinRequest.verify|verify} messages.
         * @param message HallRefreshCoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IHallRefreshCoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HallRefreshCoinRequest message, length delimited. Does not implicitly {@link ttz.HallRefreshCoinRequest.verify|verify} messages.
         * @param message HallRefreshCoinRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IHallRefreshCoinRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.HallRefreshCoinRequest;

        /**
         * Decodes a HallRefreshCoinRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HallRefreshCoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.HallRefreshCoinRequest;

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
        public static fromObject(object: { [k: string]: any }): ttz.HallRefreshCoinRequest;

        /**
         * Creates a plain object from a HallRefreshCoinRequest message. Also converts values to other types if specified.
         * @param message HallRefreshCoinRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.HallRefreshCoinRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: ttz.IHallRefreshCoinResponse);

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
        public static create(properties?: ttz.IHallRefreshCoinResponse): ttz.HallRefreshCoinResponse;

        /**
         * Encodes the specified HallRefreshCoinResponse message. Does not implicitly {@link ttz.HallRefreshCoinResponse.verify|verify} messages.
         * @param message HallRefreshCoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IHallRefreshCoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HallRefreshCoinResponse message, length delimited. Does not implicitly {@link ttz.HallRefreshCoinResponse.verify|verify} messages.
         * @param message HallRefreshCoinResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IHallRefreshCoinResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.HallRefreshCoinResponse;

        /**
         * Decodes a HallRefreshCoinResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HallRefreshCoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.HallRefreshCoinResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.HallRefreshCoinResponse;

        /**
         * Creates a plain object from a HallRefreshCoinResponse message. Also converts values to other types if specified.
         * @param message HallRefreshCoinResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.HallRefreshCoinResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HallRefreshCoinResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableInfoResponse. */
    interface ITableInfoResponse {

        /** TableInfoResponse tableId */
        tableId?: (string|null);

        /** TableInfoResponse seq */
        seq?: (string|null);

        /** TableInfoResponse gameId */
        gameId?: (number|null);

        /** TableInfoResponse zhuangPos */
        zhuangPos?: (number|null);

        /** TableInfoResponse state */
        state?: (number|null);

        /** TableInfoResponse gameInfo */
        gameInfo?: (string|null);

        /** TableInfoResponse currentRound */
        currentRound?: (number|null);

        /** TableInfoResponse totalRound */
        totalRound?: (number|null);

        /** TableInfoResponse cardCount */
        cardCount?: (number[]|null);

        /** TableInfoResponse users */
        users?: (ttz.IUser[]|null);
    }

    /** Represents a TableInfoResponse. */
    class TableInfoResponse implements ITableInfoResponse {

        /**
         * Constructs a new TableInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ITableInfoResponse);

        /** TableInfoResponse tableId. */
        public tableId: string;

        /** TableInfoResponse seq. */
        public seq: string;

        /** TableInfoResponse gameId. */
        public gameId: number;

        /** TableInfoResponse zhuangPos. */
        public zhuangPos: number;

        /** TableInfoResponse state. */
        public state: number;

        /** TableInfoResponse gameInfo. */
        public gameInfo: string;

        /** TableInfoResponse currentRound. */
        public currentRound: number;

        /** TableInfoResponse totalRound. */
        public totalRound: number;

        /** TableInfoResponse cardCount. */
        public cardCount: number[];

        /** TableInfoResponse users. */
        public users: ttz.IUser[];

        /**
         * Creates a new TableInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfoResponse instance
         */
        public static create(properties?: ttz.ITableInfoResponse): ttz.TableInfoResponse;

        /**
         * Encodes the specified TableInfoResponse message. Does not implicitly {@link ttz.TableInfoResponse.verify|verify} messages.
         * @param message TableInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ITableInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfoResponse message, length delimited. Does not implicitly {@link ttz.TableInfoResponse.verify|verify} messages.
         * @param message TableInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ITableInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.TableInfoResponse;

        /**
         * Decodes a TableInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.TableInfoResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.TableInfoResponse;

        /**
         * Creates a plain object from a TableInfoResponse message. Also converts values to other types if specified.
         * @param message TableInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.TableInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendBetResponse. */
    interface ISendBetResponse {

        /** SendBetResponse userId */
        userId?: (number|null);

        /** SendBetResponse state */
        state?: (number|null);

        /** SendBetResponse users */
        users?: (ttz.IUser[]|null);
    }

    /** Represents a SendBetResponse. */
    class SendBetResponse implements ISendBetResponse {

        /**
         * Constructs a new SendBetResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendBetResponse);

        /** SendBetResponse userId. */
        public userId: number;

        /** SendBetResponse state. */
        public state: number;

        /** SendBetResponse users. */
        public users: ttz.IUser[];

        /**
         * Creates a new SendBetResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendBetResponse instance
         */
        public static create(properties?: ttz.ISendBetResponse): ttz.SendBetResponse;

        /**
         * Encodes the specified SendBetResponse message. Does not implicitly {@link ttz.SendBetResponse.verify|verify} messages.
         * @param message SendBetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendBetResponse message, length delimited. Does not implicitly {@link ttz.SendBetResponse.verify|verify} messages.
         * @param message SendBetResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendBetResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendBetResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendBetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendBetResponse;

        /**
         * Decodes a SendBetResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendBetResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendBetResponse;

        /**
         * Verifies a SendBetResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendBetResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendBetResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendBetResponse;

        /**
         * Creates a plain object from a SendBetResponse message. Also converts values to other types if specified.
         * @param message SendBetResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendBetResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendBetResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendJoinTableResponse. */
    interface ISendJoinTableResponse {

        /** SendJoinTableResponse user */
        user?: (ttz.IUser|null);
    }

    /** Represents a SendJoinTableResponse. */
    class SendJoinTableResponse implements ISendJoinTableResponse {

        /**
         * Constructs a new SendJoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendJoinTableResponse);

        /** SendJoinTableResponse user. */
        public user?: (ttz.IUser|null);

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendJoinTableResponse instance
         */
        public static create(properties?: ttz.ISendJoinTableResponse): ttz.SendJoinTableResponse;

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link ttz.SendJoinTableResponse.verify|verify} messages.
         * @param message SendJoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link ttz.SendJoinTableResponse.verify|verify} messages.
         * @param message SendJoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendJoinTableResponse;

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendJoinTableResponse;

        /**
         * Verifies a SendJoinTableResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendJoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendJoinTableResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendJoinTableResponse;

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @param message SendJoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendJoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendJoinTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserReadyResponse. */
    interface ISendUserReadyResponse {

        /** SendUserReadyResponse userId */
        userId?: (number|null);

        /** SendUserReadyResponse state */
        state?: (number|null);

        /** SendUserReadyResponse users */
        users?: (ttz.IUserReady[]|null);
    }

    /** Represents a SendUserReadyResponse. */
    class SendUserReadyResponse implements ISendUserReadyResponse {

        /**
         * Constructs a new SendUserReadyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendUserReadyResponse);

        /** SendUserReadyResponse userId. */
        public userId: number;

        /** SendUserReadyResponse state. */
        public state: number;

        /** SendUserReadyResponse users. */
        public users: ttz.IUserReady[];

        /**
         * Creates a new SendUserReadyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserReadyResponse instance
         */
        public static create(properties?: ttz.ISendUserReadyResponse): ttz.SendUserReadyResponse;

        /**
         * Encodes the specified SendUserReadyResponse message. Does not implicitly {@link ttz.SendUserReadyResponse.verify|verify} messages.
         * @param message SendUserReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendUserReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserReadyResponse message, length delimited. Does not implicitly {@link ttz.SendUserReadyResponse.verify|verify} messages.
         * @param message SendUserReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendUserReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendUserReadyResponse;

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendUserReadyResponse;

        /**
         * Verifies a SendUserReadyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserReadyResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendUserReadyResponse;

        /**
         * Creates a plain object from a SendUserReadyResponse message. Also converts values to other types if specified.
         * @param message SendUserReadyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendUserReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserReadyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRoundResultResponse. */
    interface ISendRoundResultResponse {

        /** SendRoundResultResponse tableId */
        tableId?: (string|null);

        /** SendRoundResultResponse zhuangPos */
        zhuangPos?: (number|null);

        /** SendRoundResultResponse state */
        state?: (number|null);

        /** SendRoundResultResponse gameInfo */
        gameInfo?: (string|null);

        /** SendRoundResultResponse time */
        time?: (string|null);

        /** SendRoundResultResponse currentRound */
        currentRound?: (number|null);

        /** SendRoundResultResponse cardCount */
        cardCount?: (number[]|null);

        /** SendRoundResultResponse users */
        users?: (ttz.IUser[]|null);
    }

    /** Represents a SendRoundResultResponse. */
    class SendRoundResultResponse implements ISendRoundResultResponse {

        /**
         * Constructs a new SendRoundResultResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendRoundResultResponse);

        /** SendRoundResultResponse tableId. */
        public tableId: string;

        /** SendRoundResultResponse zhuangPos. */
        public zhuangPos: number;

        /** SendRoundResultResponse state. */
        public state: number;

        /** SendRoundResultResponse gameInfo. */
        public gameInfo: string;

        /** SendRoundResultResponse time. */
        public time: string;

        /** SendRoundResultResponse currentRound. */
        public currentRound: number;

        /** SendRoundResultResponse cardCount. */
        public cardCount: number[];

        /** SendRoundResultResponse users. */
        public users: ttz.IUser[];

        /**
         * Creates a new SendRoundResultResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRoundResultResponse instance
         */
        public static create(properties?: ttz.ISendRoundResultResponse): ttz.SendRoundResultResponse;

        /**
         * Encodes the specified SendRoundResultResponse message. Does not implicitly {@link ttz.SendRoundResultResponse.verify|verify} messages.
         * @param message SendRoundResultResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendRoundResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRoundResultResponse message, length delimited. Does not implicitly {@link ttz.SendRoundResultResponse.verify|verify} messages.
         * @param message SendRoundResultResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendRoundResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendRoundResultResponse;

        /**
         * Decodes a SendRoundResultResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRoundResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendRoundResultResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendRoundResultResponse;

        /**
         * Creates a plain object from a SendRoundResultResponse message. Also converts values to other types if specified.
         * @param message SendRoundResultResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendRoundResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRoundResultResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCardsResponse. */
    interface ISendCardsResponse {

        /** SendCardsResponse table */
        table?: (ttz.ITableInfoResponse|null);
    }

    /** Represents a SendCardsResponse. */
    class SendCardsResponse implements ISendCardsResponse {

        /**
         * Constructs a new SendCardsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendCardsResponse);

        /** SendCardsResponse table. */
        public table?: (ttz.ITableInfoResponse|null);

        /**
         * Creates a new SendCardsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCardsResponse instance
         */
        public static create(properties?: ttz.ISendCardsResponse): ttz.SendCardsResponse;

        /**
         * Encodes the specified SendCardsResponse message. Does not implicitly {@link ttz.SendCardsResponse.verify|verify} messages.
         * @param message SendCardsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendCardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCardsResponse message, length delimited. Does not implicitly {@link ttz.SendCardsResponse.verify|verify} messages.
         * @param message SendCardsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendCardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendCardsResponse;

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendCardsResponse;

        /**
         * Verifies a SendCardsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCardsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCardsResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendCardsResponse;

        /**
         * Creates a plain object from a SendCardsResponse message. Also converts values to other types if specified.
         * @param message SendCardsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendCardsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCardsResponse to JSON.
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
        constructor(properties?: ttz.ISendReconnectQuitResponse);

        /** SendReconnectQuitResponse userId. */
        public userId: number;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReconnectQuitResponse instance
         */
        public static create(properties?: ttz.ISendReconnectQuitResponse): ttz.SendReconnectQuitResponse;

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link ttz.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link ttz.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendReconnectQuitResponse;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendReconnectQuitResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendReconnectQuitResponse;

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @param message SendReconnectQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendReconnectQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReconnectQuitResponse to JSON.
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

        /** UserReconnectResponse gameInfo */
        gameInfo?: (string|null);

        /** UserReconnectResponse state */
        state?: (number|null);

        /** UserReconnectResponse currentRound */
        currentRound?: (number|null);

        /** UserReconnectResponse totalRound */
        totalRound?: (number|null);

        /** UserReconnectResponse cardCount */
        cardCount?: (number[]|null);

        /** UserReconnectResponse dice */
        dice?: (number[]|null);

        /** UserReconnectResponse sendCardPos */
        sendCardPos?: (number|null);

        /** UserReconnectResponse users */
        users?: (ttz.IUser[]|null);
    }

    /** Represents a UserReconnectResponse. */
    class UserReconnectResponse implements IUserReconnectResponse {

        /**
         * Constructs a new UserReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IUserReconnectResponse);

        /** UserReconnectResponse tableId. */
        public tableId: string;

        /** UserReconnectResponse seq. */
        public seq: string;

        /** UserReconnectResponse gameId. */
        public gameId: number;

        /** UserReconnectResponse zhuangPos. */
        public zhuangPos: number;

        /** UserReconnectResponse gameInfo. */
        public gameInfo: string;

        /** UserReconnectResponse state. */
        public state: number;

        /** UserReconnectResponse currentRound. */
        public currentRound: number;

        /** UserReconnectResponse totalRound. */
        public totalRound: number;

        /** UserReconnectResponse cardCount. */
        public cardCount: number[];

        /** UserReconnectResponse dice. */
        public dice: number[];

        /** UserReconnectResponse sendCardPos. */
        public sendCardPos: number;

        /** UserReconnectResponse users. */
        public users: ttz.IUser[];

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectResponse instance
         */
        public static create(properties?: ttz.IUserReconnectResponse): ttz.UserReconnectResponse;

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link ttz.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link ttz.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.UserReconnectResponse;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.UserReconnectResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.UserReconnectResponse;

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @param message UserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.UserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectResponse to JSON.
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
        constructor(properties?: ttz.ISendUserReconnectResponse);

        /** SendUserReconnectResponse userId. */
        public userId: number;

        /** SendUserReconnectResponse onLine. */
        public onLine: number;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserReconnectResponse instance
         */
        public static create(properties?: ttz.ISendUserReconnectResponse): ttz.SendUserReconnectResponse;

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link ttz.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link ttz.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendUserReconnectResponse;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendUserReconnectResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendUserReconnectResponse;

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @param message SendUserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendUserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserReconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserQuitResponse. */
    interface ISendUserQuitResponse {

        /** SendUserQuitResponse userId */
        userId?: (number|null);

        /** SendUserQuitResponse isOwnerQuit */
        isOwnerQuit?: (boolean|null);

        /** SendUserQuitResponse nickname */
        nickname?: (string|null);

        /** SendUserQuitResponse position */
        position?: (number|null);

        /** SendUserQuitResponse message */
        message?: (string|null);

        /** SendUserQuitResponse tableId */
        tableId?: (string|null);
    }

    /** Represents a SendUserQuitResponse. */
    class SendUserQuitResponse implements ISendUserQuitResponse {

        /**
         * Constructs a new SendUserQuitResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendUserQuitResponse);

        /** SendUserQuitResponse userId. */
        public userId: number;

        /** SendUserQuitResponse isOwnerQuit. */
        public isOwnerQuit: boolean;

        /** SendUserQuitResponse nickname. */
        public nickname: string;

        /** SendUserQuitResponse position. */
        public position: number;

        /** SendUserQuitResponse message. */
        public message: string;

        /** SendUserQuitResponse tableId. */
        public tableId: string;

        /**
         * Creates a new SendUserQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserQuitResponse instance
         */
        public static create(properties?: ttz.ISendUserQuitResponse): ttz.SendUserQuitResponse;

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link ttz.SendUserQuitResponse.verify|verify} messages.
         * @param message SendUserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link ttz.SendUserQuitResponse.verify|verify} messages.
         * @param message SendUserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendUserQuitResponse;

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendUserQuitResponse;

        /**
         * Verifies a SendUserQuitResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserQuitResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendUserQuitResponse;

        /**
         * Creates a plain object from a SendUserQuitResponse message. Also converts values to other types if specified.
         * @param message SendUserQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendUserQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserQuitResponse to JSON.
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
        constructor(properties?: ttz.ISendMessageResponse);

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
        public static create(properties?: ttz.ISendMessageResponse): ttz.SendMessageResponse;

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link ttz.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link ttz.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendMessageResponse;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendMessageResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendMessageResponse;

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @param message SendMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendMessageResponse to JSON.
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
        constructor(properties?: ttz.ISendCoinRefreshResponse);

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
        public static create(properties?: ttz.ISendCoinRefreshResponse): ttz.SendCoinRefreshResponse;

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link ttz.SendCoinRefreshResponse.verify|verify} messages.
         * @param message SendCoinRefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendCoinRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link ttz.SendCoinRefreshResponse.verify|verify} messages.
         * @param message SendCoinRefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendCoinRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendCoinRefreshResponse;

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendCoinRefreshResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendCoinRefreshResponse;

        /**
         * Creates a plain object from a SendCoinRefreshResponse message. Also converts values to other types if specified.
         * @param message SendCoinRefreshResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendCoinRefreshResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCoinRefreshResponse to JSON.
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
        constructor(properties?: ttz.ISendUserOnBackResponse);

        /** SendUserOnBackResponse userId. */
        public userId: number;

        /** SendUserOnBackResponse leaveState. */
        public leaveState: number;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserOnBackResponse instance
         */
        public static create(properties?: ttz.ISendUserOnBackResponse): ttz.SendUserOnBackResponse;

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link ttz.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link ttz.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendUserOnBackResponse;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendUserOnBackResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendUserOnBackResponse;

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @param message SendUserOnBackResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendUserOnBackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserOnBackResponse to JSON.
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
        users?: (ttz.IUser[]|null);
    }

    /** Represents a QiangZhuangResponse. */
    class QiangZhuangResponse implements IQiangZhuangResponse {

        /**
         * Constructs a new QiangZhuangResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IQiangZhuangResponse);

        /** QiangZhuangResponse userId. */
        public userId: number;

        /** QiangZhuangResponse state. */
        public state: number;

        /** QiangZhuangResponse users. */
        public users: ttz.IUser[];

        /**
         * Creates a new QiangZhuangResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QiangZhuangResponse instance
         */
        public static create(properties?: ttz.IQiangZhuangResponse): ttz.QiangZhuangResponse;

        /**
         * Encodes the specified QiangZhuangResponse message. Does not implicitly {@link ttz.QiangZhuangResponse.verify|verify} messages.
         * @param message QiangZhuangResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IQiangZhuangResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QiangZhuangResponse message, length delimited. Does not implicitly {@link ttz.QiangZhuangResponse.verify|verify} messages.
         * @param message QiangZhuangResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IQiangZhuangResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.QiangZhuangResponse;

        /**
         * Decodes a QiangZhuangResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QiangZhuangResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.QiangZhuangResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.QiangZhuangResponse;

        /**
         * Creates a plain object from a QiangZhuangResponse message. Also converts values to other types if specified.
         * @param message QiangZhuangResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.QiangZhuangResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QiangZhuangResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DelayQuitOfflineResponse. */
    interface IDelayQuitOfflineResponse {

        /** DelayQuitOfflineResponse userId */
        userId?: (number|null);
    }

    /** Represents a DelayQuitOfflineResponse. */
    class DelayQuitOfflineResponse implements IDelayQuitOfflineResponse {

        /**
         * Constructs a new DelayQuitOfflineResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IDelayQuitOfflineResponse);

        /** DelayQuitOfflineResponse userId. */
        public userId: number;

        /**
         * Creates a new DelayQuitOfflineResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayQuitOfflineResponse instance
         */
        public static create(properties?: ttz.IDelayQuitOfflineResponse): ttz.DelayQuitOfflineResponse;

        /**
         * Encodes the specified DelayQuitOfflineResponse message. Does not implicitly {@link ttz.DelayQuitOfflineResponse.verify|verify} messages.
         * @param message DelayQuitOfflineResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IDelayQuitOfflineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayQuitOfflineResponse message, length delimited. Does not implicitly {@link ttz.DelayQuitOfflineResponse.verify|verify} messages.
         * @param message DelayQuitOfflineResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IDelayQuitOfflineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayQuitOfflineResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayQuitOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.DelayQuitOfflineResponse;

        /**
         * Decodes a DelayQuitOfflineResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayQuitOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.DelayQuitOfflineResponse;

        /**
         * Verifies a DelayQuitOfflineResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DelayQuitOfflineResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DelayQuitOfflineResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.DelayQuitOfflineResponse;

        /**
         * Creates a plain object from a DelayQuitOfflineResponse message. Also converts values to other types if specified.
         * @param message DelayQuitOfflineResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.DelayQuitOfflineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayQuitOfflineResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendDiamondChangeResponse. */
    interface ISendDiamondChangeResponse {

        /** SendDiamondChangeResponse userId */
        userId?: (number|null);

        /** SendDiamondChangeResponse diamond */
        diamond?: (number|null);
    }

    /** Represents a SendDiamondChangeResponse. */
    class SendDiamondChangeResponse implements ISendDiamondChangeResponse {

        /**
         * Constructs a new SendDiamondChangeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendDiamondChangeResponse);

        /** SendDiamondChangeResponse userId. */
        public userId: number;

        /** SendDiamondChangeResponse diamond. */
        public diamond: number;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDiamondChangeResponse instance
         */
        public static create(properties?: ttz.ISendDiamondChangeResponse): ttz.SendDiamondChangeResponse;

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link ttz.SendDiamondChangeResponse.verify|verify} messages.
         * @param message SendDiamondChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendDiamondChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link ttz.SendDiamondChangeResponse.verify|verify} messages.
         * @param message SendDiamondChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendDiamondChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendDiamondChangeResponse;

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendDiamondChangeResponse;

        /**
         * Verifies a SendDiamondChangeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendDiamondChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendDiamondChangeResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendDiamondChangeResponse;

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @param message SendDiamondChangeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendDiamondChangeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDiamondChangeResponse to JSON.
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
        constructor(properties?: ttz.IDelayCheckResponse);

        /** DelayCheckResponse content. */
        public content: string;

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckResponse instance
         */
        public static create(properties?: ttz.IDelayCheckResponse): ttz.DelayCheckResponse;

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link ttz.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link ttz.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.DelayCheckResponse;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.DelayCheckResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.DelayCheckResponse;

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @param message DelayCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.DelayCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendNoticeClientDismissResponse. */
    interface ISendNoticeClientDismissResponse {

        /** SendNoticeClientDismissResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendNoticeClientDismissResponse. */
    class SendNoticeClientDismissResponse implements ISendNoticeClientDismissResponse {

        /**
         * Constructs a new SendNoticeClientDismissResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendNoticeClientDismissResponse);

        /** SendNoticeClientDismissResponse userId. */
        public userId: number;

        /**
         * Creates a new SendNoticeClientDismissResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendNoticeClientDismissResponse instance
         */
        public static create(properties?: ttz.ISendNoticeClientDismissResponse): ttz.SendNoticeClientDismissResponse;

        /**
         * Encodes the specified SendNoticeClientDismissResponse message. Does not implicitly {@link ttz.SendNoticeClientDismissResponse.verify|verify} messages.
         * @param message SendNoticeClientDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendNoticeClientDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendNoticeClientDismissResponse message, length delimited. Does not implicitly {@link ttz.SendNoticeClientDismissResponse.verify|verify} messages.
         * @param message SendNoticeClientDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendNoticeClientDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendNoticeClientDismissResponse;

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendNoticeClientDismissResponse;

        /**
         * Verifies a SendNoticeClientDismissResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendNoticeClientDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendNoticeClientDismissResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendNoticeClientDismissResponse;

        /**
         * Creates a plain object from a SendNoticeClientDismissResponse message. Also converts values to other types if specified.
         * @param message SendNoticeClientDismissResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendNoticeClientDismissResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendNoticeClientDismissResponse to JSON.
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

        /** SendRemainTimeResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendRemainTimeResponse. */
    class SendRemainTimeResponse implements ISendRemainTimeResponse {

        /**
         * Constructs a new SendRemainTimeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendRemainTimeResponse);

        /** SendRemainTimeResponse time. */
        public time: number;

        /** SendRemainTimeResponse type. */
        public type: number;

        /** SendRemainTimeResponse userId. */
        public userId: number;

        /**
         * Creates a new SendRemainTimeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRemainTimeResponse instance
         */
        public static create(properties?: ttz.ISendRemainTimeResponse): ttz.SendRemainTimeResponse;

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link ttz.SendRemainTimeResponse.verify|verify} messages.
         * @param message SendRemainTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendRemainTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link ttz.SendRemainTimeResponse.verify|verify} messages.
         * @param message SendRemainTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendRemainTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendRemainTimeResponse;

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendRemainTimeResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendRemainTimeResponse;

        /**
         * Creates a plain object from a SendRemainTimeResponse message. Also converts values to other types if specified.
         * @param message SendRemainTimeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendRemainTimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRemainTimeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserQuitByAdminResponse. */
    interface ISendUserQuitByAdminResponse {

        /** SendUserQuitByAdminResponse userId */
        userId?: (number|null);
    }

    /** Represents a SendUserQuitByAdminResponse. */
    class SendUserQuitByAdminResponse implements ISendUserQuitByAdminResponse {

        /**
         * Constructs a new SendUserQuitByAdminResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendUserQuitByAdminResponse);

        /** SendUserQuitByAdminResponse userId. */
        public userId: number;

        /**
         * Creates a new SendUserQuitByAdminResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserQuitByAdminResponse instance
         */
        public static create(properties?: ttz.ISendUserQuitByAdminResponse): ttz.SendUserQuitByAdminResponse;

        /**
         * Encodes the specified SendUserQuitByAdminResponse message. Does not implicitly {@link ttz.SendUserQuitByAdminResponse.verify|verify} messages.
         * @param message SendUserQuitByAdminResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendUserQuitByAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQuitByAdminResponse message, length delimited. Does not implicitly {@link ttz.SendUserQuitByAdminResponse.verify|verify} messages.
         * @param message SendUserQuitByAdminResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendUserQuitByAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendUserQuitByAdminResponse;

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendUserQuitByAdminResponse;

        /**
         * Verifies a SendUserQuitByAdminResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserQuitByAdminResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserQuitByAdminResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendUserQuitByAdminResponse;

        /**
         * Creates a plain object from a SendUserQuitByAdminResponse message. Also converts values to other types if specified.
         * @param message SendUserQuitByAdminResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendUserQuitByAdminResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserQuitByAdminResponse to JSON.
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
        constructor(properties?: ttz.ISendHeartBeatResponse);

        /** SendHeartBeatResponse currentTime. */
        public currentTime: (number|Long);

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendHeartBeatResponse instance
         */
        public static create(properties?: ttz.ISendHeartBeatResponse): ttz.SendHeartBeatResponse;

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link ttz.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link ttz.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendHeartBeatResponse;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendHeartBeatResponse;

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
        public static fromObject(object: { [k: string]: any }): ttz.SendHeartBeatResponse;

        /**
         * Creates a plain object from a SendHeartBeatResponse message. Also converts values to other types if specified.
         * @param message SendHeartBeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendHeartBeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendHeartBeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForcedOfflineResponse. */
    interface IForcedOfflineResponse {
    }

    /** Represents a ForcedOfflineResponse. */
    class ForcedOfflineResponse implements IForcedOfflineResponse {

        /**
         * Constructs a new ForcedOfflineResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IForcedOfflineResponse);

        /**
         * Creates a new ForcedOfflineResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForcedOfflineResponse instance
         */
        public static create(properties?: ttz.IForcedOfflineResponse): ttz.ForcedOfflineResponse;

        /**
         * Encodes the specified ForcedOfflineResponse message. Does not implicitly {@link ttz.ForcedOfflineResponse.verify|verify} messages.
         * @param message ForcedOfflineResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IForcedOfflineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForcedOfflineResponse message, length delimited. Does not implicitly {@link ttz.ForcedOfflineResponse.verify|verify} messages.
         * @param message ForcedOfflineResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IForcedOfflineResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForcedOfflineResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForcedOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.ForcedOfflineResponse;

        /**
         * Decodes a ForcedOfflineResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForcedOfflineResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.ForcedOfflineResponse;

        /**
         * Verifies a ForcedOfflineResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForcedOfflineResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForcedOfflineResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.ForcedOfflineResponse;

        /**
         * Creates a plain object from a ForcedOfflineResponse message. Also converts values to other types if specified.
         * @param message ForcedOfflineResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.ForcedOfflineResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForcedOfflineResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserCardResponse. */
    interface ISendUserCardResponse {

        /** SendUserCardResponse disc */
        disc?: (number[]|null);
    }

    /** Represents a SendUserCardResponse. */
    class SendUserCardResponse implements ISendUserCardResponse {

        /**
         * Constructs a new SendUserCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.ISendUserCardResponse);

        /** SendUserCardResponse disc. */
        public disc: number[];

        /**
         * Creates a new SendUserCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserCardResponse instance
         */
        public static create(properties?: ttz.ISendUserCardResponse): ttz.SendUserCardResponse;

        /**
         * Encodes the specified SendUserCardResponse message. Does not implicitly {@link ttz.SendUserCardResponse.verify|verify} messages.
         * @param message SendUserCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.ISendUserCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserCardResponse message, length delimited. Does not implicitly {@link ttz.SendUserCardResponse.verify|verify} messages.
         * @param message SendUserCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.ISendUserCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.SendUserCardResponse;

        /**
         * Decodes a SendUserCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.SendUserCardResponse;

        /**
         * Verifies a SendUserCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserCardResponse
         */
        public static fromObject(object: { [k: string]: any }): ttz.SendUserCardResponse;

        /**
         * Creates a plain object from a SendUserCardResponse message. Also converts values to other types if specified.
         * @param message SendUserCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.SendUserCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (ttz.Request.CMD|null);

        /** Request joinTableRequest */
        joinTableRequest?: (ttz.IJoinTableRequest|null);

        /** Request userReadyRequest */
        userReadyRequest?: (ttz.IUserReadyRequest|null);

        /** Request userReconnectRequest */
        userReconnectRequest?: (ttz.IUserReconnectRequest|null);

        /** Request userQuitRequest */
        userQuitRequest?: (ttz.IUserQuitRequest|null);

        /** Request messageRequest */
        messageRequest?: (ttz.IMessageRequest|null);

        /** Request userOnBackRequest */
        userOnBackRequest?: (ttz.IUserOnBackRequest|null);

        /** Request delayCheckRequest */
        delayCheckRequest?: (ttz.IDelayCheckRequest|null);

        /** Request kickedOutRequest */
        kickedOutRequest?: (ttz.IKickedOutRequest|null);

        /** Request qiangZhuangRequest */
        qiangZhuangRequest?: (ttz.IQiangZhuangRequest|null);

        /** Request betRequest */
        betRequest?: (ttz.IBetRequest|null);

        /** Request noticePushFrCenterRequest */
        noticePushFrCenterRequest?: (ttz.INoticePushFrCenterRequest|null);

        /** Request hallRefreshCoinRequest */
        hallRefreshCoinRequest?: (ttz.IHallRefreshCoinRequest|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IRequest);

        /** Request cmd. */
        public cmd: ttz.Request.CMD;

        /** Request joinTableRequest. */
        public joinTableRequest?: (ttz.IJoinTableRequest|null);

        /** Request userReadyRequest. */
        public userReadyRequest?: (ttz.IUserReadyRequest|null);

        /** Request userReconnectRequest. */
        public userReconnectRequest?: (ttz.IUserReconnectRequest|null);

        /** Request userQuitRequest. */
        public userQuitRequest?: (ttz.IUserQuitRequest|null);

        /** Request messageRequest. */
        public messageRequest?: (ttz.IMessageRequest|null);

        /** Request userOnBackRequest. */
        public userOnBackRequest?: (ttz.IUserOnBackRequest|null);

        /** Request delayCheckRequest. */
        public delayCheckRequest?: (ttz.IDelayCheckRequest|null);

        /** Request kickedOutRequest. */
        public kickedOutRequest?: (ttz.IKickedOutRequest|null);

        /** Request qiangZhuangRequest. */
        public qiangZhuangRequest?: (ttz.IQiangZhuangRequest|null);

        /** Request betRequest. */
        public betRequest?: (ttz.IBetRequest|null);

        /** Request noticePushFrCenterRequest. */
        public noticePushFrCenterRequest?: (ttz.INoticePushFrCenterRequest|null);

        /** Request hallRefreshCoinRequest. */
        public hallRefreshCoinRequest?: (ttz.IHallRefreshCoinRequest|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: ttz.IRequest): ttz.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link ttz.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link ttz.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.Request;

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
        public static fromObject(object: { [k: string]: any }): ttz.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            QIANG_ZHUANG = 2024,
            SEND_ZHUANG = 2023,
            BET = 2012,
            JOIN_TABLE = 2002,
            SEND_JOIN_TABLE = 2003,
            USER_READY = 2006,
            SEND_USER_READY = 2007,
            SEND_USER_INFO = 2058,
            SEND_USER_CARD = 2059,
            SEND_CARDS = 2009,
            USER_RECONNECT = 2030,
            SEND_RECONNECT_QUIT = 2035,
            SEND_USER_RECONNECT = 2031,
            USER_QUIT = 2044,
            SEND_USER_QUIT = 2045,
            MESSAGE = 2060,
            SEND_MESSAGE = 2061,
            SEND_COIN_REFRESH = 2062,
            USER_ONBACK = 2080,
            SEND_USER_ONBACK = 2081,
            SEND_DIAMOND_CHANGE = 2071,
            DELAY_CHECK = 20010,
            Get_User_Info = 2046,
            SEND_ROUND_RESULT = 2015,
            FORCE_OFFLINE = 3000,
            DELAYQUIT_OFFLINE_RESP = 3003,
            KICKEDOUT = 4001,
            SEND_NOTICE_CLIENT_DISMISS = 21002,
            SEND_REMAIN_TIME = 20015,
            SEND_USERQUIT_BY_ADMIN = 21003,
            SEND_HEART_BEAT = 10000,
            NOTICE_PUSH_RESP = 30002
        }
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response error */
        error?: (ttz.Response.ErrorCode|null);

        /** Response serverTime */
        serverTime?: (number|Long|null);

        /** Response cmd */
        cmd?: (ttz.Request.CMD|null);

        /** Response joinTableResponse */
        joinTableResponse?: (ttz.IJoinTableResponse|null);

        /** Response tableInfoResponse */
        tableInfoResponse?: (ttz.ITableInfoResponse|null);

        /** Response qiangZhuangResponse */
        qiangZhuangResponse?: (ttz.IQiangZhuangResponse|null);

        /** Response betResponse */
        betResponse?: (ttz.IBetResponse|null);

        /** Response userReconnectResponse */
        userReconnectResponse?: (ttz.IUserReconnectResponse|null);

        /** Response delayCheckResponse */
        delayCheckResponse?: (ttz.IDelayCheckResponse|null);

        /** Response kickedOutResponse */
        kickedOutResponse?: (ttz.IKickedOutResponse|null);

        /** Response userQuitResponse */
        userQuitResponse?: (ttz.IUserQuitResponse|null);

        /** Response sendJoinTableResponse */
        sendJoinTableResponse?: (ttz.ISendJoinTableResponse|null);

        /** Response sendUserReadyResponse */
        sendUserReadyResponse?: (ttz.ISendUserReadyResponse|null);

        /** Response sendCardsResponse */
        sendCardsResponse?: (ttz.ISendCardsResponse|null);

        /** Response sendReconnectQuitResponse */
        sendReconnectQuitResponse?: (ttz.ISendReconnectQuitResponse|null);

        /** Response sendUserReconnectResponse */
        sendUserReconnectResponse?: (ttz.ISendUserReconnectResponse|null);

        /** Response sendUserQuitResponse */
        sendUserQuitResponse?: (ttz.ISendUserQuitResponse|null);

        /** Response sendMessageResponse */
        sendMessageResponse?: (ttz.ISendMessageResponse|null);

        /** Response sendUserOnBackResponse */
        sendUserOnBackResponse?: (ttz.ISendUserOnBackResponse|null);

        /** Response sendDiamondChangeResponse */
        sendDiamondChangeResponse?: (ttz.ISendDiamondChangeResponse|null);

        /** Response sendRemainTimeResponse */
        sendRemainTimeResponse?: (ttz.ISendRemainTimeResponse|null);

        /** Response sendNoticeClientDismissResponse */
        sendNoticeClientDismissResponse?: (ttz.ISendNoticeClientDismissResponse|null);

        /** Response sendRoundResultResponse */
        sendRoundResultResponse?: (ttz.ISendRoundResultResponse|null);

        /** Response sendUserQuitByAdminResponse */
        sendUserQuitByAdminResponse?: (ttz.ISendUserQuitByAdminResponse|null);

        /** Response sendCoinRefreshResponse */
        sendCoinRefreshResponse?: (ttz.ISendCoinRefreshResponse|null);

        /** Response sendBetResponse */
        sendBetResponse?: (ttz.ISendBetResponse|null);

        /** Response sendHeartBeatResponse */
        sendHeartBeatResponse?: (ttz.ISendHeartBeatResponse|null);

        /** Response delayQuitOfflineResponse */
        delayQuitOfflineResponse?: (ttz.IDelayQuitOfflineResponse|null);

        /** Response sendUserCardResponse */
        sendUserCardResponse?: (ttz.ISendUserCardResponse|null);

        /** Response noticePushFrCenterResponse */
        noticePushFrCenterResponse?: (ttz.INoticePushFrCenterResponse|null);

        /** Response hallRefreshCoinResponse */
        hallRefreshCoinResponse?: (ttz.IHallRefreshCoinResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: ttz.IResponse);

        /** Response error. */
        public error: ttz.Response.ErrorCode;

        /** Response serverTime. */
        public serverTime: (number|Long);

        /** Response cmd. */
        public cmd: ttz.Request.CMD;

        /** Response joinTableResponse. */
        public joinTableResponse?: (ttz.IJoinTableResponse|null);

        /** Response tableInfoResponse. */
        public tableInfoResponse?: (ttz.ITableInfoResponse|null);

        /** Response qiangZhuangResponse. */
        public qiangZhuangResponse?: (ttz.IQiangZhuangResponse|null);

        /** Response betResponse. */
        public betResponse?: (ttz.IBetResponse|null);

        /** Response userReconnectResponse. */
        public userReconnectResponse?: (ttz.IUserReconnectResponse|null);

        /** Response delayCheckResponse. */
        public delayCheckResponse?: (ttz.IDelayCheckResponse|null);

        /** Response kickedOutResponse. */
        public kickedOutResponse?: (ttz.IKickedOutResponse|null);

        /** Response userQuitResponse. */
        public userQuitResponse?: (ttz.IUserQuitResponse|null);

        /** Response sendJoinTableResponse. */
        public sendJoinTableResponse?: (ttz.ISendJoinTableResponse|null);

        /** Response sendUserReadyResponse. */
        public sendUserReadyResponse?: (ttz.ISendUserReadyResponse|null);

        /** Response sendCardsResponse. */
        public sendCardsResponse?: (ttz.ISendCardsResponse|null);

        /** Response sendReconnectQuitResponse. */
        public sendReconnectQuitResponse?: (ttz.ISendReconnectQuitResponse|null);

        /** Response sendUserReconnectResponse. */
        public sendUserReconnectResponse?: (ttz.ISendUserReconnectResponse|null);

        /** Response sendUserQuitResponse. */
        public sendUserQuitResponse?: (ttz.ISendUserQuitResponse|null);

        /** Response sendMessageResponse. */
        public sendMessageResponse?: (ttz.ISendMessageResponse|null);

        /** Response sendUserOnBackResponse. */
        public sendUserOnBackResponse?: (ttz.ISendUserOnBackResponse|null);

        /** Response sendDiamondChangeResponse. */
        public sendDiamondChangeResponse?: (ttz.ISendDiamondChangeResponse|null);

        /** Response sendRemainTimeResponse. */
        public sendRemainTimeResponse?: (ttz.ISendRemainTimeResponse|null);

        /** Response sendNoticeClientDismissResponse. */
        public sendNoticeClientDismissResponse?: (ttz.ISendNoticeClientDismissResponse|null);

        /** Response sendRoundResultResponse. */
        public sendRoundResultResponse?: (ttz.ISendRoundResultResponse|null);

        /** Response sendUserQuitByAdminResponse. */
        public sendUserQuitByAdminResponse?: (ttz.ISendUserQuitByAdminResponse|null);

        /** Response sendCoinRefreshResponse. */
        public sendCoinRefreshResponse?: (ttz.ISendCoinRefreshResponse|null);

        /** Response sendBetResponse. */
        public sendBetResponse?: (ttz.ISendBetResponse|null);

        /** Response sendHeartBeatResponse. */
        public sendHeartBeatResponse?: (ttz.ISendHeartBeatResponse|null);

        /** Response delayQuitOfflineResponse. */
        public delayQuitOfflineResponse?: (ttz.IDelayQuitOfflineResponse|null);

        /** Response sendUserCardResponse. */
        public sendUserCardResponse?: (ttz.ISendUserCardResponse|null);

        /** Response noticePushFrCenterResponse. */
        public noticePushFrCenterResponse?: (ttz.INoticePushFrCenterResponse|null);

        /** Response hallRefreshCoinResponse. */
        public hallRefreshCoinResponse?: (ttz.IHallRefreshCoinResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: ttz.IResponse): ttz.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link ttz.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ttz.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link ttz.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ttz.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ttz.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ttz.Response;

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
        public static fromObject(object: { [k: string]: any }): ttz.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ttz.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            CREAT_TABLE_ERROR = 3003,
            ACCOUNT_NOT_ENOUGH = 3006,
            TABLE_NOT_FIND_ERROR = 3008,
            GAME_START_ERROR = 3061,
            QIANG_ZHUANG_ERROR = 3075,
            USER_BET_ERROR = 3077,
            TABLE_NO_POSITION = 3009,
            NOT_IN_TABLE = 3011,
            USER_READYNUM_ERROR = 3010,
            USER_READY_ERROR = 3012,
            DINGQUE_TABLESTATE_ERROR = 3058,
            DINGQUE_USERSTATE_ERROR = 3059,
            USER_NOT_HAVE_CARD = 3019,
            NOT_ALLOW_QUIT = 3014,
            WAITING_RESPONSE = 3043,
            RE_JOIN_TABLE_ERROR = 3026,
            ROOM_LIST_ERROR = 3091,
            JOIN_TABLE_ERROR = 3007,
            USER_AUTO_ERROR = 3306,
            USER_QUIT_ERROR = 3013,
            RECONNET_ERROR = 3025,
            SEND_MESSAGE_ERROR = 3040,
            USER_ONBACK_ERROR = 3056,
            DELAY_CHECK_ERROR = 3201,
            USER_NOT_FOUND_ERROR = 3005,
            CHANNELID_GAMENO_ERROR = 3092,
            FORCED_OFFLINE = 30001,
            USER_BAN = 30002,
            NO_RECHARGE_ERROR = 30923
        }
    }
}
