import * as $protobuf from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Properties of a User. */
    interface IUser {

        /** User sessionId */
        sessionId?: (string|null);

        /** User userId */
        userId?: (number|null);

        /** User nickname */
        nickname?: (string|null);

        /** User headImg */
        headImg?: (string|null);

        /** User sex */
        sex?: (number|null);

        /** User openid */
        openid?: (string|null);

        /** User diamond */
        diamond?: (number|null);

        /** User coin */
        coin?: (number|null);

        /** User ticket */
        ticket?: (number|null);

        /** User bankcoin */
        bankcoin?: (number|null);

        /** User userName */
        userName?: (string|null);

        /** User aliAccount */
        aliAccount?: (string|null);

        /** User userType */
        userType?: (number|null);

        /** User aliName */
        aliName?: (string|null);

        /** User bankAccount */
        bankAccount?: (string|null);

        /** User bankName */
        bankName?: (string|null);

        /** User ip */
        ip?: (string|null);

        /** User bindStatus */
        bindStatus?: (number|null);

        /** User phone */
        phone?: (string|null);

        /** User level */
        level?: (number|null);

        /** User isInTable */
        isInTable?: (number|null);

        /** User addr */
        addr?: (string|null);

        /** User gameId */
        gameId?: (number|null);

        /** User pos */
        pos?: (string|null);

        /** User showAd */
        showAd?: (boolean|null);

        /** User isNewUser */
        isNewUser?: (boolean|null);

        /** User registerCoin */
        registerCoin?: (number|null);

        /** User bindphoneCoin */
        bindphoneCoin?: (number|null);

        /** User fissionCoin */
        fissionCoin?: (number|null);

        /** User bannerAlert */
        bannerAlert?: (number|null);

        /** User agent */
        agent?: (number|null);

        /** User isBind */
        isBind?: (number|null);

        /** User isRecharge */
        isRecharge?: (number|null);
    }

    /** 基础对象 *********************** */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUser);

        /** User sessionId. */
        public sessionId: string;

        /** User userId. */
        public userId: number;

        /** User nickname. */
        public nickname: string;

        /** User headImg. */
        public headImg: string;

        /** User sex. */
        public sex: number;

        /** User openid. */
        public openid: string;

        /** User diamond. */
        public diamond: number;

        /** User coin. */
        public coin: number;

        /** User ticket. */
        public ticket: number;

        /** User bankcoin. */
        public bankcoin: number;

        /** User userName. */
        public userName: string;

        /** User aliAccount. */
        public aliAccount: string;

        /** User userType. */
        public userType: number;

        /** User aliName. */
        public aliName: string;

        /** User bankAccount. */
        public bankAccount: string;

        /** User bankName. */
        public bankName: string;

        /** User ip. */
        public ip: string;

        /** User bindStatus. */
        public bindStatus: number;

        /** User phone. */
        public phone: string;

        /** User level. */
        public level: number;

        /** User isInTable. */
        public isInTable: number;

        /** User addr. */
        public addr: string;

        /** User gameId. */
        public gameId: number;

        /** User pos. */
        public pos: string;

        /** User showAd. */
        public showAd: boolean;

        /** User isNewUser. */
        public isNewUser: boolean;

        /** User registerCoin. */
        public registerCoin: number;

        /** User bindphoneCoin. */
        public bindphoneCoin: number;

        /** User fissionCoin. */
        public fissionCoin: number;

        /** User bannerAlert. */
        public bannerAlert: number;

        /** User agent. */
        public agent: number;

        /** User isBind. */
        public isBind: number;

        /** User isRecharge. */
        public isRecharge: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: proto.IUser): proto.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.User;

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
        public static fromObject(object: { [k: string]: any }): proto.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo isInTable */
        isInTable?: (number|null);

        /** UserInfo addr */
        addr?: (string|null);

        /** UserInfo baseBankCoin */
        baseBankCoin?: (number|null);

        /** UserInfo dailyRecharge */
        dailyRecharge?: (number|null);

        /** UserInfo dailyRechargeMax */
        dailyRechargeMax?: (number|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUserInfo);

        /** UserInfo isInTable. */
        public isInTable: number;

        /** UserInfo addr. */
        public addr: string;

        /** UserInfo baseBankCoin. */
        public baseBankCoin: number;

        /** UserInfo dailyRecharge. */
        public dailyRecharge: number;

        /** UserInfo dailyRechargeMax. */
        public dailyRechargeMax: number;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: proto.IUserInfo): proto.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
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
        constructor(properties?: proto.IUserReady);

        /** UserReady userId. */
        public userId: number;

        /** UserReady state. */
        public state: number;

        /**
         * Creates a new UserReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReady instance
         */
        public static create(properties?: proto.IUserReady): proto.UserReady;

        /**
         * Encodes the specified UserReady message. Does not implicitly {@link proto.UserReady.verify|verify} messages.
         * @param message UserReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReady message, length delimited. Does not implicitly {@link proto.UserReady.verify|verify} messages.
         * @param message UserReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserReady;

        /**
         * Decodes a UserReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserReady;

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
        public static fromObject(object: { [k: string]: any }): proto.UserReady;

        /**
         * Creates a plain object from a UserReady message. Also converts values to other types if specified.
         * @param message UserReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultData. */
    interface IResultData {

        /** ResultData isOver */
        isOver?: (number|null);

        /** ResultData time */
        time?: (string|null);

        /** ResultData winners */
        winners?: (number|null);

        /** ResultData springInfo */
        springInfo?: (number|null);
    }

    /** Represents a ResultData. */
    class ResultData implements IResultData {

        /**
         * Constructs a new ResultData.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResultData);

        /** ResultData isOver. */
        public isOver: number;

        /** ResultData time. */
        public time: string;

        /** ResultData winners. */
        public winners: number;

        /** ResultData springInfo. */
        public springInfo: number;

        /**
         * Creates a new ResultData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultData instance
         */
        public static create(properties?: proto.IResultData): proto.ResultData;

        /**
         * Encodes the specified ResultData message. Does not implicitly {@link proto.ResultData.verify|verify} messages.
         * @param message ResultData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResultData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultData message, length delimited. Does not implicitly {@link proto.ResultData.verify|verify} messages.
         * @param message ResultData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResultData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ResultData;

        /**
         * Decodes a ResultData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ResultData;

        /**
         * Verifies a ResultData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultData
         */
        public static fromObject(object: { [k: string]: any }): proto.ResultData;

        /**
         * Creates a plain object from a ResultData message. Also converts values to other types if specified.
         * @param message ResultData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ResultData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest phoneOrUsername */
        phoneOrUsername?: (string|null);

        /** LoginRequest psword */
        psword?: (string|null);

        /** LoginRequest deviceID */
        deviceID?: (string|null);

        /** LoginRequest channelId */
        channelId?: (number|null);

        /** LoginRequest agentCode */
        agentCode?: (string|null);

        /** LoginRequest platformId */
        platformId?: (number|null);
    }

    /** 请求对象 *********************** */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILoginRequest);

        /** LoginRequest phoneOrUsername. */
        public phoneOrUsername: string;

        /** LoginRequest psword. */
        public psword: string;

        /** LoginRequest deviceID. */
        public deviceID: string;

        /** LoginRequest channelId. */
        public channelId: number;

        /** LoginRequest agentCode. */
        public agentCode: string;

        /** LoginRequest platformId. */
        public platformId: number;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: proto.ILoginRequest): proto.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link proto.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link proto.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterPhoneRequest. */
    interface IRegisterPhoneRequest {

        /** RegisterPhoneRequest phone */
        phone?: (string|null);

        /** RegisterPhoneRequest psword */
        psword?: (string|null);

        /** RegisterPhoneRequest msgCode */
        msgCode?: (string|null);
    }

    /** Represents a RegisterPhoneRequest. */
    class RegisterPhoneRequest implements IRegisterPhoneRequest {

        /**
         * Constructs a new RegisterPhoneRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRegisterPhoneRequest);

        /** RegisterPhoneRequest phone. */
        public phone: string;

        /** RegisterPhoneRequest psword. */
        public psword: string;

        /** RegisterPhoneRequest msgCode. */
        public msgCode: string;

        /**
         * Creates a new RegisterPhoneRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPhoneRequest instance
         */
        public static create(properties?: proto.IRegisterPhoneRequest): proto.RegisterPhoneRequest;

        /**
         * Encodes the specified RegisterPhoneRequest message. Does not implicitly {@link proto.RegisterPhoneRequest.verify|verify} messages.
         * @param message RegisterPhoneRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRegisterPhoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPhoneRequest message, length delimited. Does not implicitly {@link proto.RegisterPhoneRequest.verify|verify} messages.
         * @param message RegisterPhoneRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRegisterPhoneRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPhoneRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPhoneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RegisterPhoneRequest;

        /**
         * Decodes a RegisterPhoneRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPhoneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RegisterPhoneRequest;

        /**
         * Verifies a RegisterPhoneRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPhoneRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPhoneRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.RegisterPhoneRequest;

        /**
         * Creates a plain object from a RegisterPhoneRequest message. Also converts values to other types if specified.
         * @param message RegisterPhoneRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RegisterPhoneRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPhoneRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserInfoRequest. */
    interface IGetUserInfoRequest {

        /** GetUserInfoRequest userId */
        userId?: (number|null);
    }

    /** Represents a GetUserInfoRequest. */
    class GetUserInfoRequest implements IGetUserInfoRequest {

        /**
         * Constructs a new GetUserInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGetUserInfoRequest);

        /** GetUserInfoRequest userId. */
        public userId: number;

        /**
         * Creates a new GetUserInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoRequest instance
         */
        public static create(properties?: proto.IGetUserInfoRequest): proto.GetUserInfoRequest;

        /**
         * Encodes the specified GetUserInfoRequest message. Does not implicitly {@link proto.GetUserInfoRequest.verify|verify} messages.
         * @param message GetUserInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGetUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoRequest message, length delimited. Does not implicitly {@link proto.GetUserInfoRequest.verify|verify} messages.
         * @param message GetUserInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGetUserInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GetUserInfoRequest;

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GetUserInfoRequest;

        /**
         * Verifies a GetUserInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.GetUserInfoRequest;

        /**
         * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
         * @param message GetUserInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.GetUserInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoinBankRequest. */
    interface ICoinBankRequest {

        /** CoinBankRequest userId */
        userId?: (number|null);

        /** CoinBankRequest type */
        type?: (number|null);

        /** CoinBankRequest coin */
        coin?: (number|null);
    }

    /** Represents a CoinBankRequest. */
    class CoinBankRequest implements ICoinBankRequest {

        /**
         * Constructs a new CoinBankRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICoinBankRequest);

        /** CoinBankRequest userId. */
        public userId: number;

        /** CoinBankRequest type. */
        public type: number;

        /** CoinBankRequest coin. */
        public coin: number;

        /**
         * Creates a new CoinBankRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CoinBankRequest instance
         */
        public static create(properties?: proto.ICoinBankRequest): proto.CoinBankRequest;

        /**
         * Encodes the specified CoinBankRequest message. Does not implicitly {@link proto.CoinBankRequest.verify|verify} messages.
         * @param message CoinBankRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICoinBankRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CoinBankRequest message, length delimited. Does not implicitly {@link proto.CoinBankRequest.verify|verify} messages.
         * @param message CoinBankRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICoinBankRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoinBankRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoinBankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CoinBankRequest;

        /**
         * Decodes a CoinBankRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CoinBankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CoinBankRequest;

        /**
         * Verifies a CoinBankRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CoinBankRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoinBankRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.CoinBankRequest;

        /**
         * Creates a plain object from a CoinBankRequest message. Also converts values to other types if specified.
         * @param message CoinBankRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CoinBankRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoinBankRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeSignRequest. */
    interface IChangeSignRequest {

        /** ChangeSignRequest sid */
        sid?: (string|null);

        /** ChangeSignRequest sign */
        sign?: (string|null);
    }

    /** Represents a ChangeSignRequest. */
    class ChangeSignRequest implements IChangeSignRequest {

        /**
         * Constructs a new ChangeSignRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IChangeSignRequest);

        /** ChangeSignRequest sid. */
        public sid: string;

        /** ChangeSignRequest sign. */
        public sign: string;

        /**
         * Creates a new ChangeSignRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeSignRequest instance
         */
        public static create(properties?: proto.IChangeSignRequest): proto.ChangeSignRequest;

        /**
         * Encodes the specified ChangeSignRequest message. Does not implicitly {@link proto.ChangeSignRequest.verify|verify} messages.
         * @param message ChangeSignRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IChangeSignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeSignRequest message, length delimited. Does not implicitly {@link proto.ChangeSignRequest.verify|verify} messages.
         * @param message ChangeSignRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IChangeSignRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeSignRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeSignRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ChangeSignRequest;

        /**
         * Decodes a ChangeSignRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeSignRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ChangeSignRequest;

        /**
         * Verifies a ChangeSignRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeSignRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeSignRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.ChangeSignRequest;

        /**
         * Creates a plain object from a ChangeSignRequest message. Also converts values to other types if specified.
         * @param message ChangeSignRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ChangeSignRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeSignRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TestDeviceIDRequest. */
    interface ITestDeviceIDRequest {

        /** TestDeviceIDRequest deviceID */
        deviceID?: (string|null);

        /** TestDeviceIDRequest channelId */
        channelId?: (number|null);

        /** TestDeviceIDRequest platformId */
        platformId?: (number|null);

        /** TestDeviceIDRequest agentCode */
        agentCode?: (string|null);
    }

    /** Represents a TestDeviceIDRequest. */
    class TestDeviceIDRequest implements ITestDeviceIDRequest {

        /**
         * Constructs a new TestDeviceIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITestDeviceIDRequest);

        /** TestDeviceIDRequest deviceID. */
        public deviceID: string;

        /** TestDeviceIDRequest channelId. */
        public channelId: number;

        /** TestDeviceIDRequest platformId. */
        public platformId: number;

        /** TestDeviceIDRequest agentCode. */
        public agentCode: string;

        /**
         * Creates a new TestDeviceIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestDeviceIDRequest instance
         */
        public static create(properties?: proto.ITestDeviceIDRequest): proto.TestDeviceIDRequest;

        /**
         * Encodes the specified TestDeviceIDRequest message. Does not implicitly {@link proto.TestDeviceIDRequest.verify|verify} messages.
         * @param message TestDeviceIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITestDeviceIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestDeviceIDRequest message, length delimited. Does not implicitly {@link proto.TestDeviceIDRequest.verify|verify} messages.
         * @param message TestDeviceIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITestDeviceIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestDeviceIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestDeviceIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TestDeviceIDRequest;

        /**
         * Decodes a TestDeviceIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestDeviceIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TestDeviceIDRequest;

        /**
         * Verifies a TestDeviceIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestDeviceIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestDeviceIDRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.TestDeviceIDRequest;

        /**
         * Creates a plain object from a TestDeviceIDRequest message. Also converts values to other types if specified.
         * @param message TestDeviceIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TestDeviceIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestDeviceIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateTableRequest. */
    interface ICreateTableRequest {

        /** CreateTableRequest sid */
        sid?: (string|null);

        /** CreateTableRequest tableId */
        tableId?: (string|null);

        /** CreateTableRequest gps */
        gps?: (string|null);
    }

    /** Represents a CreateTableRequest. */
    class CreateTableRequest implements ICreateTableRequest {

        /**
         * Constructs a new CreateTableRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICreateTableRequest);

        /** CreateTableRequest sid. */
        public sid: string;

        /** CreateTableRequest tableId. */
        public tableId: string;

        /** CreateTableRequest gps. */
        public gps: string;

        /**
         * Creates a new CreateTableRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateTableRequest instance
         */
        public static create(properties?: proto.ICreateTableRequest): proto.CreateTableRequest;

        /**
         * Encodes the specified CreateTableRequest message. Does not implicitly {@link proto.CreateTableRequest.verify|verify} messages.
         * @param message CreateTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link proto.CreateTableRequest.verify|verify} messages.
         * @param message CreateTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICreateTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CreateTableRequest;

        /**
         * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CreateTableRequest;

        /**
         * Verifies a CreateTableRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateTableRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTableRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.CreateTableRequest;

        /**
         * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
         * @param message CreateTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CreateTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTableRequest to JSON.
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
        constructor(properties?: proto.IJoinTableRequest);

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
        public static create(properties?: proto.IJoinTableRequest): proto.JoinTableRequest;

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link proto.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link proto.JoinTableRequest.verify|verify} messages.
         * @param message JoinTableRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IJoinTableRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.JoinTableRequest;

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.JoinTableRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.JoinTableRequest;

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @param message JoinTableRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.JoinTableRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableRequest to JSON.
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
        constructor(properties?: proto.IUserReadyRequest);

        /**
         * Creates a new UserReadyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReadyRequest instance
         */
        public static create(properties?: proto.IUserReadyRequest): proto.UserReadyRequest;

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link proto.UserReadyRequest.verify|verify} messages.
         * @param message UserReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link proto.UserReadyRequest.verify|verify} messages.
         * @param message UserReadyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserReadyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserReadyRequest;

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserReadyRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.UserReadyRequest;

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @param message UserReadyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserReadyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReadyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DisCardRequest. */
    interface IDisCardRequest {

        /** DisCardRequest outCard */
        outCard?: (number[]|null);
    }

    /** Represents a DisCardRequest. */
    class DisCardRequest implements IDisCardRequest {

        /**
         * Constructs a new DisCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IDisCardRequest);

        /** DisCardRequest outCard. */
        public outCard: number[];

        /**
         * Creates a new DisCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisCardRequest instance
         */
        public static create(properties?: proto.IDisCardRequest): proto.DisCardRequest;

        /**
         * Encodes the specified DisCardRequest message. Does not implicitly {@link proto.DisCardRequest.verify|verify} messages.
         * @param message DisCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDisCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisCardRequest message, length delimited. Does not implicitly {@link proto.DisCardRequest.verify|verify} messages.
         * @param message DisCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDisCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DisCardRequest;

        /**
         * Decodes a DisCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DisCardRequest;

        /**
         * Verifies a DisCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisCardRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisCardRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.DisCardRequest;

        /**
         * Creates a plain object from a DisCardRequest message. Also converts values to other types if specified.
         * @param message DisCardRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DisCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisCardRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PassPaiRequest. */
    interface IPassPaiRequest {
    }

    /** Represents a PassPaiRequest. */
    class PassPaiRequest implements IPassPaiRequest {

        /**
         * Constructs a new PassPaiRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPassPaiRequest);

        /**
         * Creates a new PassPaiRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PassPaiRequest instance
         */
        public static create(properties?: proto.IPassPaiRequest): proto.PassPaiRequest;

        /**
         * Encodes the specified PassPaiRequest message. Does not implicitly {@link proto.PassPaiRequest.verify|verify} messages.
         * @param message PassPaiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPassPaiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PassPaiRequest message, length delimited. Does not implicitly {@link proto.PassPaiRequest.verify|verify} messages.
         * @param message PassPaiRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPassPaiRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PassPaiRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PassPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PassPaiRequest;

        /**
         * Decodes a PassPaiRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PassPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PassPaiRequest;

        /**
         * Verifies a PassPaiRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PassPaiRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PassPaiRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.PassPaiRequest;

        /**
         * Creates a plain object from a PassPaiRequest message. Also converts values to other types if specified.
         * @param message PassPaiRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PassPaiRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PassPaiRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserQDZRequest. */
    interface IUserQDZRequest {

        /** UserQDZRequest score */
        score?: (number|null);
    }

    /** Represents a UserQDZRequest. */
    class UserQDZRequest implements IUserQDZRequest {

        /**
         * Constructs a new UserQDZRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUserQDZRequest);

        /** UserQDZRequest score. */
        public score: number;

        /**
         * Creates a new UserQDZRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQDZRequest instance
         */
        public static create(properties?: proto.IUserQDZRequest): proto.UserQDZRequest;

        /**
         * Encodes the specified UserQDZRequest message. Does not implicitly {@link proto.UserQDZRequest.verify|verify} messages.
         * @param message UserQDZRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserQDZRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQDZRequest message, length delimited. Does not implicitly {@link proto.UserQDZRequest.verify|verify} messages.
         * @param message UserQDZRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserQDZRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQDZRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQDZRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserQDZRequest;

        /**
         * Decodes a UserQDZRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQDZRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserQDZRequest;

        /**
         * Verifies a UserQDZRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserQDZRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserQDZRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.UserQDZRequest;

        /**
         * Creates a plain object from a UserQDZRequest message. Also converts values to other types if specified.
         * @param message UserQDZRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserQDZRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQDZRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserMPRequest. */
    interface IUserMPRequest {

        /** UserMPRequest showAll */
        showAll?: (number|null);
    }

    /** Represents a UserMPRequest. */
    class UserMPRequest implements IUserMPRequest {

        /**
         * Constructs a new UserMPRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUserMPRequest);

        /** UserMPRequest showAll. */
        public showAll: number;

        /**
         * Creates a new UserMPRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMPRequest instance
         */
        public static create(properties?: proto.IUserMPRequest): proto.UserMPRequest;

        /**
         * Encodes the specified UserMPRequest message. Does not implicitly {@link proto.UserMPRequest.verify|verify} messages.
         * @param message UserMPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserMPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMPRequest message, length delimited. Does not implicitly {@link proto.UserMPRequest.verify|verify} messages.
         * @param message UserMPRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserMPRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMPRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserMPRequest;

        /**
         * Decodes a UserMPRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserMPRequest;

        /**
         * Verifies a UserMPRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMPRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMPRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.UserMPRequest;

        /**
         * Creates a plain object from a UserMPRequest message. Also converts values to other types if specified.
         * @param message UserMPRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserMPRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMPRequest to JSON.
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
        constructor(properties?: proto.IUserReconnectRequest);

        /** UserReconnectRequest userId. */
        public userId: number;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectRequest instance
         */
        public static create(properties?: proto.IUserReconnectRequest): proto.UserReconnectRequest;

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link proto.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link proto.UserReconnectRequest.verify|verify} messages.
         * @param message UserReconnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserReconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserReconnectRequest;

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserReconnectRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.UserReconnectRequest;

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @param message UserReconnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserReconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserReconnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApplyDismissRequest. */
    interface IApplyDismissRequest {
    }

    /** Represents an ApplyDismissRequest. */
    class ApplyDismissRequest implements IApplyDismissRequest {

        /**
         * Constructs a new ApplyDismissRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IApplyDismissRequest);

        /**
         * Creates a new ApplyDismissRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyDismissRequest instance
         */
        public static create(properties?: proto.IApplyDismissRequest): proto.ApplyDismissRequest;

        /**
         * Encodes the specified ApplyDismissRequest message. Does not implicitly {@link proto.ApplyDismissRequest.verify|verify} messages.
         * @param message ApplyDismissRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IApplyDismissRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyDismissRequest message, length delimited. Does not implicitly {@link proto.ApplyDismissRequest.verify|verify} messages.
         * @param message ApplyDismissRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IApplyDismissRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyDismissRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ApplyDismissRequest;

        /**
         * Decodes an ApplyDismissRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ApplyDismissRequest;

        /**
         * Verifies an ApplyDismissRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyDismissRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyDismissRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.ApplyDismissRequest;

        /**
         * Creates a plain object from an ApplyDismissRequest message. Also converts values to other types if specified.
         * @param message ApplyDismissRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ApplyDismissRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyDismissRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AgreeDismissRequest. */
    interface IAgreeDismissRequest {

        /** AgreeDismissRequest agree */
        agree?: (number|null);
    }

    /** Represents an AgreeDismissRequest. */
    class AgreeDismissRequest implements IAgreeDismissRequest {

        /**
         * Constructs a new AgreeDismissRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IAgreeDismissRequest);

        /** AgreeDismissRequest agree. */
        public agree: number;

        /**
         * Creates a new AgreeDismissRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgreeDismissRequest instance
         */
        public static create(properties?: proto.IAgreeDismissRequest): proto.AgreeDismissRequest;

        /**
         * Encodes the specified AgreeDismissRequest message. Does not implicitly {@link proto.AgreeDismissRequest.verify|verify} messages.
         * @param message AgreeDismissRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IAgreeDismissRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgreeDismissRequest message, length delimited. Does not implicitly {@link proto.AgreeDismissRequest.verify|verify} messages.
         * @param message AgreeDismissRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IAgreeDismissRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgreeDismissRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgreeDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.AgreeDismissRequest;

        /**
         * Decodes an AgreeDismissRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgreeDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.AgreeDismissRequest;

        /**
         * Verifies an AgreeDismissRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgreeDismissRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgreeDismissRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.AgreeDismissRequest;

        /**
         * Creates a plain object from an AgreeDismissRequest message. Also converts values to other types if specified.
         * @param message AgreeDismissRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.AgreeDismissRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgreeDismissRequest to JSON.
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
        constructor(properties?: proto.IUserQuitRequest);

        /**
         * Creates a new UserQuitRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserQuitRequest instance
         */
        public static create(properties?: proto.IUserQuitRequest): proto.UserQuitRequest;

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link proto.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link proto.UserQuitRequest.verify|verify} messages.
         * @param message UserQuitRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserQuitRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserQuitRequest;

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserQuitRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.UserQuitRequest;

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @param message UserQuitRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserQuitRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserQuitRequest to JSON.
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
        constructor(properties?: proto.IMessageRequest);

        /** MessageRequest content. */
        public content: string;

        /** MessageRequest toUserId. */
        public toUserId: number;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageRequest instance
         */
        public static create(properties?: proto.IMessageRequest): proto.MessageRequest;

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link proto.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link proto.MessageRequest.verify|verify} messages.
         * @param message MessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.MessageRequest;

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.MessageRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.MessageRequest;

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @param message MessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.MessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.IUserOnBackRequest);

        /** UserOnBackRequest leaveState. */
        public leaveState: number;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserOnBackRequest instance
         */
        public static create(properties?: proto.IUserOnBackRequest): proto.UserOnBackRequest;

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link proto.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link proto.UserOnBackRequest.verify|verify} messages.
         * @param message UserOnBackRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserOnBackRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserOnBackRequest;

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserOnBackRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.UserOnBackRequest;

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @param message UserOnBackRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserOnBackRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.IDelayCheckRequest);

        /** DelayCheckRequest content. */
        public content: string;

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckRequest instance
         */
        public static create(properties?: proto.IDelayCheckRequest): proto.DelayCheckRequest;

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link proto.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link proto.DelayCheckRequest.verify|verify} messages.
         * @param message DelayCheckRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDelayCheckRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DelayCheckRequest;

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DelayCheckRequest;

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
        public static fromObject(object: { [k: string]: any }): proto.DelayCheckRequest;

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @param message DelayCheckRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DelayCheckRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DelayCheckRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CancelAutoRequest. */
    interface ICancelAutoRequest {
    }

    /** Represents a CancelAutoRequest. */
    class CancelAutoRequest implements ICancelAutoRequest {

        /**
         * Constructs a new CancelAutoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICancelAutoRequest);

        /**
         * Creates a new CancelAutoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CancelAutoRequest instance
         */
        public static create(properties?: proto.ICancelAutoRequest): proto.CancelAutoRequest;

        /**
         * Encodes the specified CancelAutoRequest message. Does not implicitly {@link proto.CancelAutoRequest.verify|verify} messages.
         * @param message CancelAutoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICancelAutoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CancelAutoRequest message, length delimited. Does not implicitly {@link proto.CancelAutoRequest.verify|verify} messages.
         * @param message CancelAutoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICancelAutoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CancelAutoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CancelAutoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CancelAutoRequest;

        /**
         * Decodes a CancelAutoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CancelAutoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CancelAutoRequest;

        /**
         * Verifies a CancelAutoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CancelAutoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CancelAutoRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.CancelAutoRequest;

        /**
         * Creates a plain object from a CancelAutoRequest message. Also converts values to other types if specified.
         * @param message CancelAutoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CancelAutoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CancelAutoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Request. */
    interface IRequest {

        /** Request cmd */
        cmd?: (proto.Request.CMD|null);

        /** Request loginRequest */
        loginRequest?: (proto.ILoginRequest|null);

        /** Request registerPhone */
        registerPhone?: (proto.IRegisterPhoneRequest|null);

        /** Request getUserInfoRequest */
        getUserInfoRequest?: (proto.IGetUserInfoRequest|null);

        /** Request coinBankRequest */
        coinBankRequest?: (proto.ICoinBankRequest|null);

        /** Request changeSignRequest */
        changeSignRequest?: (proto.IChangeSignRequest|null);

        /** Request testDeviceIDRequest */
        testDeviceIDRequest?: (proto.ITestDeviceIDRequest|null);

        /** Request userMPRequest */
        userMPRequest?: (proto.IUserMPRequest|null);

        /** Request passPaiRequest */
        passPaiRequest?: (proto.IPassPaiRequest|null);

        /** Request userReconnectRequest */
        userReconnectRequest?: (proto.IUserReconnectRequest|null);

        /** Request applyDismissRequest */
        applyDismissRequest?: (proto.IApplyDismissRequest|null);

        /** Request agreeDismissRequest */
        agreeDismissRequest?: (proto.IAgreeDismissRequest|null);

        /** Request userQuitRequest */
        userQuitRequest?: (proto.IUserQuitRequest|null);

        /** Request messageRequest */
        messageRequest?: (proto.IMessageRequest|null);

        /** Request userOnBackRequest */
        userOnBackRequest?: (proto.IUserOnBackRequest|null);

        /** Request delayCheckRequest */
        delayCheckRequest?: (proto.IDelayCheckRequest|null);

        /** Request cancelAutoRequest */
        cancelAutoRequest?: (proto.ICancelAutoRequest|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRequest);

        /** Request cmd. */
        public cmd: proto.Request.CMD;

        /** Request loginRequest. */
        public loginRequest?: (proto.ILoginRequest|null);

        /** Request registerPhone. */
        public registerPhone?: (proto.IRegisterPhoneRequest|null);

        /** Request getUserInfoRequest. */
        public getUserInfoRequest?: (proto.IGetUserInfoRequest|null);

        /** Request coinBankRequest. */
        public coinBankRequest?: (proto.ICoinBankRequest|null);

        /** Request changeSignRequest. */
        public changeSignRequest?: (proto.IChangeSignRequest|null);

        /** Request testDeviceIDRequest. */
        public testDeviceIDRequest?: (proto.ITestDeviceIDRequest|null);

        /** Request userMPRequest. */
        public userMPRequest?: (proto.IUserMPRequest|null);

        /** Request passPaiRequest. */
        public passPaiRequest?: (proto.IPassPaiRequest|null);

        /** Request userReconnectRequest. */
        public userReconnectRequest?: (proto.IUserReconnectRequest|null);

        /** Request applyDismissRequest. */
        public applyDismissRequest?: (proto.IApplyDismissRequest|null);

        /** Request agreeDismissRequest. */
        public agreeDismissRequest?: (proto.IAgreeDismissRequest|null);

        /** Request userQuitRequest. */
        public userQuitRequest?: (proto.IUserQuitRequest|null);

        /** Request messageRequest. */
        public messageRequest?: (proto.IMessageRequest|null);

        /** Request userOnBackRequest. */
        public userOnBackRequest?: (proto.IUserOnBackRequest|null);

        /** Request delayCheckRequest. */
        public delayCheckRequest?: (proto.IDelayCheckRequest|null);

        /** Request cancelAutoRequest. */
        public cancelAutoRequest?: (proto.ICancelAutoRequest|null);

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: proto.IRequest): proto.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link proto.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link proto.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Request;

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
        public static fromObject(object: { [k: string]: any }): proto.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
            Login = 2000,
            RegisterPhone = 2002,
            GetUserInfo = 2003,
            CoinBank = 2004,
            ChangeSign = 2005,
            TestDeviceID = 2006,
            SEND_USER_READY = 2007,
            SEND_CARDS = 2009,
            DIS_CARD = 2010,
            SEND_DIS_CARD = 2011,
            PASS_PAI = 2022,
            SEND_PASS_PAI = 2023,
            USER_RECONNECT = 2030,
            SEND_RECONNECT_QUIT = 2035,
            SEND_USER_RECONNECT = 2031,
            APPLY_DISMISS = 2040,
            SEND_APPLY_DISMISS = 2041,
            AGREE_DISMISS = 2042,
            SEND_AGREE_DISMISS = 2043,
            SEND_DISMISS_RESULT = 2047,
            USER_QUIT = 2044,
            SEND_USER_QUIT = 2045,
            MESSAGE = 2060,
            SEND_MESSAGE = 2061,
            SEND_COIN_REFRESH = 2062,
            USER_ONBACK = 2080,
            SEND_USER_ONBACK = 2081,
            SEND_ROUND_RECORD = 2015,
            USER_QDZ = 2100,
            SEND_USER_QDZ = 2101,
            SEND_USER_QDZ2 = 2102,
            USER_MP = 2200,
            SEND_USER_MP = 2201,
            SEND_USER_MP2 = 2202,
            SEND_GAME_OVER = 2017,
            SEND_DIAMOND_CHANGE = 2071,
            USER_DAO_RECORD = 2083,
            CANCEL_AUTO = 20012,
            SEND_CANCEL_AUTO = 20013,
            DELAY_CHECK = 20010,
            Get_User_Info = 2046,
            SEND_NOTICE_CLIENT_DISMISS = 21002,
            SEND_REMAIN_TIME = 20015,
            SEND_USERQUIT_BY_ADMIN = 21003,
            SEND_HEART_BEAT = 10000
        }
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse user */
        user?: (proto.IUser|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILoginResponse);

        /** LoginResponse user. */
        public user?: (proto.IUser|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: proto.ILoginResponse): proto.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link proto.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link proto.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterPhoneRespone. */
    interface IRegisterPhoneRespone {

        /** RegisterPhoneRespone username */
        username?: (number|null);
    }

    /** Represents a RegisterPhoneRespone. */
    class RegisterPhoneRespone implements IRegisterPhoneRespone {

        /**
         * Constructs a new RegisterPhoneRespone.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRegisterPhoneRespone);

        /** RegisterPhoneRespone username. */
        public username: number;

        /**
         * Creates a new RegisterPhoneRespone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterPhoneRespone instance
         */
        public static create(properties?: proto.IRegisterPhoneRespone): proto.RegisterPhoneRespone;

        /**
         * Encodes the specified RegisterPhoneRespone message. Does not implicitly {@link proto.RegisterPhoneRespone.verify|verify} messages.
         * @param message RegisterPhoneRespone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRegisterPhoneRespone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterPhoneRespone message, length delimited. Does not implicitly {@link proto.RegisterPhoneRespone.verify|verify} messages.
         * @param message RegisterPhoneRespone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRegisterPhoneRespone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterPhoneRespone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterPhoneRespone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RegisterPhoneRespone;

        /**
         * Decodes a RegisterPhoneRespone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterPhoneRespone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RegisterPhoneRespone;

        /**
         * Verifies a RegisterPhoneRespone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterPhoneRespone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterPhoneRespone
         */
        public static fromObject(object: { [k: string]: any }): proto.RegisterPhoneRespone;

        /**
         * Creates a plain object from a RegisterPhoneRespone message. Also converts values to other types if specified.
         * @param message RegisterPhoneRespone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RegisterPhoneRespone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterPhoneRespone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserInfoResponse. */
    interface IGetUserInfoResponse {

        /** GetUserInfoResponse userInfo */
        userInfo?: (proto.IUserInfo|null);
    }

    /** Represents a GetUserInfoResponse. */
    class GetUserInfoResponse implements IGetUserInfoResponse {

        /**
         * Constructs a new GetUserInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGetUserInfoResponse);

        /** GetUserInfoResponse userInfo. */
        public userInfo?: (proto.IUserInfo|null);

        /**
         * Creates a new GetUserInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserInfoResponse instance
         */
        public static create(properties?: proto.IGetUserInfoResponse): proto.GetUserInfoResponse;

        /**
         * Encodes the specified GetUserInfoResponse message. Does not implicitly {@link proto.GetUserInfoResponse.verify|verify} messages.
         * @param message GetUserInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGetUserInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserInfoResponse message, length delimited. Does not implicitly {@link proto.GetUserInfoResponse.verify|verify} messages.
         * @param message GetUserInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGetUserInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GetUserInfoResponse;

        /**
         * Decodes a GetUserInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GetUserInfoResponse;

        /**
         * Verifies a GetUserInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.GetUserInfoResponse;

        /**
         * Creates a plain object from a GetUserInfoResponse message. Also converts values to other types if specified.
         * @param message GetUserInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.GetUserInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoinBankResponse. */
    interface ICoinBankResponse {
    }

    /** Represents a CoinBankResponse. */
    class CoinBankResponse implements ICoinBankResponse {

        /**
         * Constructs a new CoinBankResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICoinBankResponse);

        /**
         * Creates a new CoinBankResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CoinBankResponse instance
         */
        public static create(properties?: proto.ICoinBankResponse): proto.CoinBankResponse;

        /**
         * Encodes the specified CoinBankResponse message. Does not implicitly {@link proto.CoinBankResponse.verify|verify} messages.
         * @param message CoinBankResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICoinBankResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CoinBankResponse message, length delimited. Does not implicitly {@link proto.CoinBankResponse.verify|verify} messages.
         * @param message CoinBankResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICoinBankResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoinBankResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoinBankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CoinBankResponse;

        /**
         * Decodes a CoinBankResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CoinBankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CoinBankResponse;

        /**
         * Verifies a CoinBankResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CoinBankResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoinBankResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.CoinBankResponse;

        /**
         * Creates a plain object from a CoinBankResponse message. Also converts values to other types if specified.
         * @param message CoinBankResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CoinBankResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoinBankResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeSignResponse. */
    interface IChangeSignResponse {
    }

    /** Represents a ChangeSignResponse. */
    class ChangeSignResponse implements IChangeSignResponse {

        /**
         * Constructs a new ChangeSignResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IChangeSignResponse);

        /**
         * Creates a new ChangeSignResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeSignResponse instance
         */
        public static create(properties?: proto.IChangeSignResponse): proto.ChangeSignResponse;

        /**
         * Encodes the specified ChangeSignResponse message. Does not implicitly {@link proto.ChangeSignResponse.verify|verify} messages.
         * @param message ChangeSignResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IChangeSignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeSignResponse message, length delimited. Does not implicitly {@link proto.ChangeSignResponse.verify|verify} messages.
         * @param message ChangeSignResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IChangeSignResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeSignResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeSignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ChangeSignResponse;

        /**
         * Decodes a ChangeSignResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeSignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ChangeSignResponse;

        /**
         * Verifies a ChangeSignResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeSignResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeSignResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.ChangeSignResponse;

        /**
         * Creates a plain object from a ChangeSignResponse message. Also converts values to other types if specified.
         * @param message ChangeSignResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ChangeSignResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeSignResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TestDeviceIDResponse. */
    interface ITestDeviceIDResponse {
    }

    /** Represents a TestDeviceIDResponse. */
    class TestDeviceIDResponse implements ITestDeviceIDResponse {

        /**
         * Constructs a new TestDeviceIDResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ITestDeviceIDResponse);

        /**
         * Creates a new TestDeviceIDResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TestDeviceIDResponse instance
         */
        public static create(properties?: proto.ITestDeviceIDResponse): proto.TestDeviceIDResponse;

        /**
         * Encodes the specified TestDeviceIDResponse message. Does not implicitly {@link proto.TestDeviceIDResponse.verify|verify} messages.
         * @param message TestDeviceIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ITestDeviceIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TestDeviceIDResponse message, length delimited. Does not implicitly {@link proto.TestDeviceIDResponse.verify|verify} messages.
         * @param message TestDeviceIDResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ITestDeviceIDResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TestDeviceIDResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TestDeviceIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.TestDeviceIDResponse;

        /**
         * Decodes a TestDeviceIDResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TestDeviceIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.TestDeviceIDResponse;

        /**
         * Verifies a TestDeviceIDResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TestDeviceIDResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TestDeviceIDResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.TestDeviceIDResponse;

        /**
         * Creates a plain object from a TestDeviceIDResponse message. Also converts values to other types if specified.
         * @param message TestDeviceIDResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.TestDeviceIDResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TestDeviceIDResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateTableResponse. */
    interface ICreateTableResponse {

        /** CreateTableResponse tableId */
        tableId?: (string|null);

        /** CreateTableResponse gameId */
        gameId?: (number|null);

        /** CreateTableResponse state */
        state?: (number|null);

        /** CreateTableResponse owner */
        owner?: (number|null);

        /** CreateTableResponse currentRound */
        currentRound?: (number|null);

        /** CreateTableResponse totalRound */
        totalRound?: (number|null);

        /** CreateTableResponse gameInfo */
        gameInfo?: (string|null);

        /** CreateTableResponse applicant */
        applicant?: (number|null);

        /** CreateTableResponse applyTime */
        applyTime?: (number|null);

        /** CreateTableResponse startApplyTime */
        startApplyTime?: (number|Long|null);

        /** CreateTableResponse users */
        users?: (proto.IUser[]|null);
    }

    /** Represents a CreateTableResponse. */
    class CreateTableResponse implements ICreateTableResponse {

        /**
         * Constructs a new CreateTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICreateTableResponse);

        /** CreateTableResponse tableId. */
        public tableId: string;

        /** CreateTableResponse gameId. */
        public gameId: number;

        /** CreateTableResponse state. */
        public state: number;

        /** CreateTableResponse owner. */
        public owner: number;

        /** CreateTableResponse currentRound. */
        public currentRound: number;

        /** CreateTableResponse totalRound. */
        public totalRound: number;

        /** CreateTableResponse gameInfo. */
        public gameInfo: string;

        /** CreateTableResponse applicant. */
        public applicant: number;

        /** CreateTableResponse applyTime. */
        public applyTime: number;

        /** CreateTableResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /** CreateTableResponse users. */
        public users: proto.IUser[];

        /**
         * Creates a new CreateTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateTableResponse instance
         */
        public static create(properties?: proto.ICreateTableResponse): proto.CreateTableResponse;

        /**
         * Encodes the specified CreateTableResponse message. Does not implicitly {@link proto.CreateTableResponse.verify|verify} messages.
         * @param message CreateTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link proto.CreateTableResponse.verify|verify} messages.
         * @param message CreateTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICreateTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.CreateTableResponse;

        /**
         * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.CreateTableResponse;

        /**
         * Verifies a CreateTableResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateTableResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.CreateTableResponse;

        /**
         * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
         * @param message CreateTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.CreateTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinTableResponse. */
    interface IJoinTableResponse {

        /** JoinTableResponse tableId */
        tableId?: (string|null);

        /** JoinTableResponse gameId */
        gameId?: (number|null);

        /** JoinTableResponse state */
        state?: (number|null);

        /** JoinTableResponse owner */
        owner?: (number|null);

        /** JoinTableResponse currentRound */
        currentRound?: (number|null);

        /** JoinTableResponse totalRound */
        totalRound?: (number|null);

        /** JoinTableResponse gameInfo */
        gameInfo?: (string|null);

        /** JoinTableResponse applicant */
        applicant?: (number|null);

        /** JoinTableResponse applyTime */
        applyTime?: (number|null);

        /** JoinTableResponse startApplyTime */
        startApplyTime?: (number|Long|null);

        /** JoinTableResponse users */
        users?: (proto.IUser[]|null);
    }

    /** Represents a JoinTableResponse. */
    class JoinTableResponse implements IJoinTableResponse {

        /**
         * Constructs a new JoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IJoinTableResponse);

        /** JoinTableResponse tableId. */
        public tableId: string;

        /** JoinTableResponse gameId. */
        public gameId: number;

        /** JoinTableResponse state. */
        public state: number;

        /** JoinTableResponse owner. */
        public owner: number;

        /** JoinTableResponse currentRound. */
        public currentRound: number;

        /** JoinTableResponse totalRound. */
        public totalRound: number;

        /** JoinTableResponse gameInfo. */
        public gameInfo: string;

        /** JoinTableResponse applicant. */
        public applicant: number;

        /** JoinTableResponse applyTime. */
        public applyTime: number;

        /** JoinTableResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /** JoinTableResponse users. */
        public users: proto.IUser[];

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinTableResponse instance
         */
        public static create(properties?: proto.IJoinTableResponse): proto.JoinTableResponse;

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link proto.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link proto.JoinTableResponse.verify|verify} messages.
         * @param message JoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.JoinTableResponse;

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.JoinTableResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.JoinTableResponse;

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @param message JoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.JoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinTableResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendJoinTableResponse. */
    interface ISendJoinTableResponse {

        /** SendJoinTableResponse user */
        user?: (proto.IUser|null);
    }

    /** Represents a SendJoinTableResponse. */
    class SendJoinTableResponse implements ISendJoinTableResponse {

        /**
         * Constructs a new SendJoinTableResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendJoinTableResponse);

        /** SendJoinTableResponse user. */
        public user?: (proto.IUser|null);

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendJoinTableResponse instance
         */
        public static create(properties?: proto.ISendJoinTableResponse): proto.SendJoinTableResponse;

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link proto.SendJoinTableResponse.verify|verify} messages.
         * @param message SendJoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link proto.SendJoinTableResponse.verify|verify} messages.
         * @param message SendJoinTableResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendJoinTableResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendJoinTableResponse;

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendJoinTableResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendJoinTableResponse;

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @param message SendJoinTableResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendJoinTableResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        users?: (proto.IUserReady[]|null);
    }

    /** Represents a SendUserReadyResponse. */
    class SendUserReadyResponse implements ISendUserReadyResponse {

        /**
         * Constructs a new SendUserReadyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendUserReadyResponse);

        /** SendUserReadyResponse userId. */
        public userId: number;

        /** SendUserReadyResponse state. */
        public state: number;

        /** SendUserReadyResponse users. */
        public users: proto.IUserReady[];

        /**
         * Creates a new SendUserReadyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserReadyResponse instance
         */
        public static create(properties?: proto.ISendUserReadyResponse): proto.SendUserReadyResponse;

        /**
         * Encodes the specified SendUserReadyResponse message. Does not implicitly {@link proto.SendUserReadyResponse.verify|verify} messages.
         * @param message SendUserReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserReadyResponse message, length delimited. Does not implicitly {@link proto.SendUserReadyResponse.verify|verify} messages.
         * @param message SendUserReadyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserReadyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserReadyResponse;

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserReadyResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendUserReadyResponse;

        /**
         * Creates a plain object from a SendUserReadyResponse message. Also converts values to other types if specified.
         * @param message SendUserReadyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserReadyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserReadyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCardsResponse. */
    interface ISendCardsResponse {

        /** SendCardsResponse zhuangPos */
        zhuangPos?: (number|null);

        /** SendCardsResponse currentRound */
        currentRound?: (number|null);

        /** SendCardsResponse state */
        state?: (number|null);

        /** SendCardsResponse nextDiscardPos */
        nextDiscardPos?: (number|null);

        /** SendCardsResponse gameInfo */
        gameInfo?: (string|null);

        /** SendCardsResponse totalRound */
        totalRound?: (number|null);

        /** SendCardsResponse users */
        users?: (proto.IUser[]|null);

        /** SendCardsResponse piaoPai */
        piaoPai?: (number|null);

        /** SendCardsResponse piaoPaiPosition */
        piaoPaiPosition?: (number|null);
    }

    /** Represents a SendCardsResponse. */
    class SendCardsResponse implements ISendCardsResponse {

        /**
         * Constructs a new SendCardsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendCardsResponse);

        /** SendCardsResponse zhuangPos. */
        public zhuangPos: number;

        /** SendCardsResponse currentRound. */
        public currentRound: number;

        /** SendCardsResponse state. */
        public state: number;

        /** SendCardsResponse nextDiscardPos. */
        public nextDiscardPos: number;

        /** SendCardsResponse gameInfo. */
        public gameInfo: string;

        /** SendCardsResponse totalRound. */
        public totalRound: number;

        /** SendCardsResponse users. */
        public users: proto.IUser[];

        /** SendCardsResponse piaoPai. */
        public piaoPai: number;

        /** SendCardsResponse piaoPaiPosition. */
        public piaoPaiPosition: number;

        /**
         * Creates a new SendCardsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCardsResponse instance
         */
        public static create(properties?: proto.ISendCardsResponse): proto.SendCardsResponse;

        /**
         * Encodes the specified SendCardsResponse message. Does not implicitly {@link proto.SendCardsResponse.verify|verify} messages.
         * @param message SendCardsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendCardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCardsResponse message, length delimited. Does not implicitly {@link proto.SendCardsResponse.verify|verify} messages.
         * @param message SendCardsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendCardsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendCardsResponse;

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendCardsResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendCardsResponse;

        /**
         * Creates a plain object from a SendCardsResponse message. Also converts values to other types if specified.
         * @param message SendCardsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendCardsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCardsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendDisCardResponse. */
    interface ISendDisCardResponse {

        /** SendDisCardResponse userId */
        userId?: (number|null);

        /** SendDisCardResponse handCards */
        handCards?: (number[]|null);

        /** SendDisCardResponse outCards */
        outCards?: (number[]|null);

        /** SendDisCardResponse changeCards */
        changeCards?: (number[]|null);

        /** SendDisCardResponse nextPlayer */
        nextPlayer?: (number|null);

        /** SendDisCardResponse lastPlayer */
        lastPlayer?: (number|null);

        /** SendDisCardResponse currTimes */
        currTimes?: (number|null);
    }

    /** Represents a SendDisCardResponse. */
    class SendDisCardResponse implements ISendDisCardResponse {

        /**
         * Constructs a new SendDisCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendDisCardResponse);

        /** SendDisCardResponse userId. */
        public userId: number;

        /** SendDisCardResponse handCards. */
        public handCards: number[];

        /** SendDisCardResponse outCards. */
        public outCards: number[];

        /** SendDisCardResponse changeCards. */
        public changeCards: number[];

        /** SendDisCardResponse nextPlayer. */
        public nextPlayer: number;

        /** SendDisCardResponse lastPlayer. */
        public lastPlayer: number;

        /** SendDisCardResponse currTimes. */
        public currTimes: number;

        /**
         * Creates a new SendDisCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDisCardResponse instance
         */
        public static create(properties?: proto.ISendDisCardResponse): proto.SendDisCardResponse;

        /**
         * Encodes the specified SendDisCardResponse message. Does not implicitly {@link proto.SendDisCardResponse.verify|verify} messages.
         * @param message SendDisCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendDisCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDisCardResponse message, length delimited. Does not implicitly {@link proto.SendDisCardResponse.verify|verify} messages.
         * @param message SendDisCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendDisCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDisCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDisCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendDisCardResponse;

        /**
         * Decodes a SendDisCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDisCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendDisCardResponse;

        /**
         * Verifies a SendDisCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendDisCardResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendDisCardResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendDisCardResponse;

        /**
         * Creates a plain object from a SendDisCardResponse message. Also converts values to other types if specified.
         * @param message SendDisCardResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendDisCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDisCardResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendPassPaiResponse. */
    interface ISendPassPaiResponse {

        /** SendPassPaiResponse userId */
        userId?: (number|null);

        /** SendPassPaiResponse nextPlayer */
        nextPlayer?: (number|null);

        /** SendPassPaiResponse lastPlayer */
        lastPlayer?: (number|null);
    }

    /** Represents a SendPassPaiResponse. */
    class SendPassPaiResponse implements ISendPassPaiResponse {

        /**
         * Constructs a new SendPassPaiResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendPassPaiResponse);

        /** SendPassPaiResponse userId. */
        public userId: number;

        /** SendPassPaiResponse nextPlayer. */
        public nextPlayer: number;

        /** SendPassPaiResponse lastPlayer. */
        public lastPlayer: number;

        /**
         * Creates a new SendPassPaiResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPassPaiResponse instance
         */
        public static create(properties?: proto.ISendPassPaiResponse): proto.SendPassPaiResponse;

        /**
         * Encodes the specified SendPassPaiResponse message. Does not implicitly {@link proto.SendPassPaiResponse.verify|verify} messages.
         * @param message SendPassPaiResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendPassPaiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPassPaiResponse message, length delimited. Does not implicitly {@link proto.SendPassPaiResponse.verify|verify} messages.
         * @param message SendPassPaiResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendPassPaiResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPassPaiResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPassPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendPassPaiResponse;

        /**
         * Decodes a SendPassPaiResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPassPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendPassPaiResponse;

        /**
         * Verifies a SendPassPaiResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendPassPaiResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendPassPaiResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendPassPaiResponse;

        /**
         * Creates a plain object from a SendPassPaiResponse message. Also converts values to other types if specified.
         * @param message SendPassPaiResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendPassPaiResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPassPaiResponse to JSON.
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
        constructor(properties?: proto.ISendReconnectQuitResponse);

        /** SendReconnectQuitResponse userId. */
        public userId: number;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReconnectQuitResponse instance
         */
        public static create(properties?: proto.ISendReconnectQuitResponse): proto.SendReconnectQuitResponse;

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link proto.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link proto.SendReconnectQuitResponse.verify|verify} messages.
         * @param message SendReconnectQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendReconnectQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendReconnectQuitResponse;

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendReconnectQuitResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendReconnectQuitResponse;

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @param message SendReconnectQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendReconnectQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** UserReconnectResponse gameId */
        gameId?: (number|null);

        /** UserReconnectResponse state */
        state?: (number|null);

        /** UserReconnectResponse owner */
        owner?: (number|null);

        /** UserReconnectResponse currentRound */
        currentRound?: (number|null);

        /** UserReconnectResponse totalRound */
        totalRound?: (number|null);

        /** UserReconnectResponse gameInfo */
        gameInfo?: (string|null);

        /** UserReconnectResponse applicant */
        applicant?: (number|null);

        /** UserReconnectResponse applyTime */
        applyTime?: (number|null);

        /** UserReconnectResponse startApplyTime */
        startApplyTime?: (number|Long|null);

        /** UserReconnectResponse zhuangPos */
        zhuangPos?: (number|null);

        /** UserReconnectResponse discardPos */
        discardPos?: (number|null);

        /** UserReconnectResponse nextDiscardPos */
        nextDiscardPos?: (number|null);

        /** UserReconnectResponse curQDZPos */
        curQDZPos?: (number|null);

        /** UserReconnectResponse godCard */
        godCard?: (number|null);

        /** UserReconnectResponse leftCards */
        leftCards?: (number[]|null);

        /** UserReconnectResponse callScoreInfo */
        callScoreInfo?: (number[]|null);

        /** UserReconnectResponse currBaseScore */
        currBaseScore?: (number|null);

        /** UserReconnectResponse currTimes */
        currTimes?: (number|null);

        /** UserReconnectResponse resultData */
        resultData?: (proto.IResultData|null);

        /** UserReconnectResponse users */
        users?: (proto.IUser[]|null);

        /** UserReconnectResponse beilv */
        beilv?: (number|null);

        /** UserReconnectResponse passPaiCount */
        passPaiCount?: (number|null);
    }

    /** Represents a UserReconnectResponse. */
    class UserReconnectResponse implements IUserReconnectResponse {

        /**
         * Constructs a new UserReconnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUserReconnectResponse);

        /** UserReconnectResponse tableId. */
        public tableId: string;

        /** UserReconnectResponse gameId. */
        public gameId: number;

        /** UserReconnectResponse state. */
        public state: number;

        /** UserReconnectResponse owner. */
        public owner: number;

        /** UserReconnectResponse currentRound. */
        public currentRound: number;

        /** UserReconnectResponse totalRound. */
        public totalRound: number;

        /** UserReconnectResponse gameInfo. */
        public gameInfo: string;

        /** UserReconnectResponse applicant. */
        public applicant: number;

        /** UserReconnectResponse applyTime. */
        public applyTime: number;

        /** UserReconnectResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /** UserReconnectResponse zhuangPos. */
        public zhuangPos: number;

        /** UserReconnectResponse discardPos. */
        public discardPos: number;

        /** UserReconnectResponse nextDiscardPos. */
        public nextDiscardPos: number;

        /** UserReconnectResponse curQDZPos. */
        public curQDZPos: number;

        /** UserReconnectResponse godCard. */
        public godCard: number;

        /** UserReconnectResponse leftCards. */
        public leftCards: number[];

        /** UserReconnectResponse callScoreInfo. */
        public callScoreInfo: number[];

        /** UserReconnectResponse currBaseScore. */
        public currBaseScore: number;

        /** UserReconnectResponse currTimes. */
        public currTimes: number;

        /** UserReconnectResponse resultData. */
        public resultData?: (proto.IResultData|null);

        /** UserReconnectResponse users. */
        public users: proto.IUser[];

        /** UserReconnectResponse beilv. */
        public beilv: number;

        /** UserReconnectResponse passPaiCount. */
        public passPaiCount: number;

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserReconnectResponse instance
         */
        public static create(properties?: proto.IUserReconnectResponse): proto.UserReconnectResponse;

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link proto.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link proto.UserReconnectResponse.verify|verify} messages.
         * @param message UserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UserReconnectResponse;

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UserReconnectResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.UserReconnectResponse;

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @param message UserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendUserReconnectResponse);

        /** SendUserReconnectResponse userId. */
        public userId: number;

        /** SendUserReconnectResponse onLine. */
        public onLine: number;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserReconnectResponse instance
         */
        public static create(properties?: proto.ISendUserReconnectResponse): proto.SendUserReconnectResponse;

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link proto.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link proto.SendUserReconnectResponse.verify|verify} messages.
         * @param message SendUserReconnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserReconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserReconnectResponse;

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserReconnectResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendUserReconnectResponse;

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @param message SendUserReconnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserReconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserReconnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendApplyDismissResponse. */
    interface ISendApplyDismissResponse {

        /** SendApplyDismissResponse userId */
        userId?: (number|null);

        /** SendApplyDismissResponse applicant */
        applicant?: (number|null);

        /** SendApplyDismissResponse agree */
        agree?: (number|null);

        /** SendApplyDismissResponse applyTime */
        applyTime?: (number|null);

        /** SendApplyDismissResponse startApplyTime */
        startApplyTime?: (number|Long|null);
    }

    /** Represents a SendApplyDismissResponse. */
    class SendApplyDismissResponse implements ISendApplyDismissResponse {

        /**
         * Constructs a new SendApplyDismissResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendApplyDismissResponse);

        /** SendApplyDismissResponse userId. */
        public userId: number;

        /** SendApplyDismissResponse applicant. */
        public applicant: number;

        /** SendApplyDismissResponse agree. */
        public agree: number;

        /** SendApplyDismissResponse applyTime. */
        public applyTime: number;

        /** SendApplyDismissResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /**
         * Creates a new SendApplyDismissResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendApplyDismissResponse instance
         */
        public static create(properties?: proto.ISendApplyDismissResponse): proto.SendApplyDismissResponse;

        /**
         * Encodes the specified SendApplyDismissResponse message. Does not implicitly {@link proto.SendApplyDismissResponse.verify|verify} messages.
         * @param message SendApplyDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendApplyDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendApplyDismissResponse message, length delimited. Does not implicitly {@link proto.SendApplyDismissResponse.verify|verify} messages.
         * @param message SendApplyDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendApplyDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendApplyDismissResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendApplyDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendApplyDismissResponse;

        /**
         * Decodes a SendApplyDismissResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendApplyDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendApplyDismissResponse;

        /**
         * Verifies a SendApplyDismissResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendApplyDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendApplyDismissResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendApplyDismissResponse;

        /**
         * Creates a plain object from a SendApplyDismissResponse message. Also converts values to other types if specified.
         * @param message SendApplyDismissResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendApplyDismissResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendApplyDismissResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendAgreeDismissResponse. */
    interface ISendAgreeDismissResponse {

        /** SendAgreeDismissResponse agree */
        agree?: (number|null);

        /** SendAgreeDismissResponse userId */
        userId?: (number|null);

        /** SendAgreeDismissResponse applicant */
        applicant?: (number|null);
    }

    /** Represents a SendAgreeDismissResponse. */
    class SendAgreeDismissResponse implements ISendAgreeDismissResponse {

        /**
         * Constructs a new SendAgreeDismissResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendAgreeDismissResponse);

        /** SendAgreeDismissResponse agree. */
        public agree: number;

        /** SendAgreeDismissResponse userId. */
        public userId: number;

        /** SendAgreeDismissResponse applicant. */
        public applicant: number;

        /**
         * Creates a new SendAgreeDismissResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendAgreeDismissResponse instance
         */
        public static create(properties?: proto.ISendAgreeDismissResponse): proto.SendAgreeDismissResponse;

        /**
         * Encodes the specified SendAgreeDismissResponse message. Does not implicitly {@link proto.SendAgreeDismissResponse.verify|verify} messages.
         * @param message SendAgreeDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendAgreeDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendAgreeDismissResponse message, length delimited. Does not implicitly {@link proto.SendAgreeDismissResponse.verify|verify} messages.
         * @param message SendAgreeDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendAgreeDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendAgreeDismissResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendAgreeDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendAgreeDismissResponse;

        /**
         * Decodes a SendAgreeDismissResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendAgreeDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendAgreeDismissResponse;

        /**
         * Verifies a SendAgreeDismissResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendAgreeDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendAgreeDismissResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendAgreeDismissResponse;

        /**
         * Creates a plain object from a SendAgreeDismissResponse message. Also converts values to other types if specified.
         * @param message SendAgreeDismissResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendAgreeDismissResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendAgreeDismissResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendDismissResultResponse. */
    interface ISendDismissResultResponse {

        /** SendDismissResultResponse applicant */
        applicant?: (number|null);

        /** SendDismissResultResponse res */
        res?: (number|null);

        /** SendDismissResultResponse notAgreeUserId */
        notAgreeUserId?: (number|null);
    }

    /** Represents a SendDismissResultResponse. */
    class SendDismissResultResponse implements ISendDismissResultResponse {

        /**
         * Constructs a new SendDismissResultResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendDismissResultResponse);

        /** SendDismissResultResponse applicant. */
        public applicant: number;

        /** SendDismissResultResponse res. */
        public res: number;

        /** SendDismissResultResponse notAgreeUserId. */
        public notAgreeUserId: number;

        /**
         * Creates a new SendDismissResultResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDismissResultResponse instance
         */
        public static create(properties?: proto.ISendDismissResultResponse): proto.SendDismissResultResponse;

        /**
         * Encodes the specified SendDismissResultResponse message. Does not implicitly {@link proto.SendDismissResultResponse.verify|verify} messages.
         * @param message SendDismissResultResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendDismissResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDismissResultResponse message, length delimited. Does not implicitly {@link proto.SendDismissResultResponse.verify|verify} messages.
         * @param message SendDismissResultResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendDismissResultResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDismissResultResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDismissResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendDismissResultResponse;

        /**
         * Decodes a SendDismissResultResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDismissResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendDismissResultResponse;

        /**
         * Verifies a SendDismissResultResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendDismissResultResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendDismissResultResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendDismissResultResponse;

        /**
         * Creates a plain object from a SendDismissResultResponse message. Also converts values to other types if specified.
         * @param message SendDismissResultResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendDismissResultResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDismissResultResponse to JSON.
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
        constructor(properties?: proto.ISendUserQuitResponse);

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
        public static create(properties?: proto.ISendUserQuitResponse): proto.SendUserQuitResponse;

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link proto.SendUserQuitResponse.verify|verify} messages.
         * @param message SendUserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link proto.SendUserQuitResponse.verify|verify} messages.
         * @param message SendUserQuitResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserQuitResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserQuitResponse;

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserQuitResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendUserQuitResponse;

        /**
         * Creates a plain object from a SendUserQuitResponse message. Also converts values to other types if specified.
         * @param message SendUserQuitResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserQuitResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendMessageResponse);

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
        public static create(properties?: proto.ISendMessageResponse): proto.SendMessageResponse;

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link proto.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link proto.SendMessageResponse.verify|verify} messages.
         * @param message SendMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendMessageResponse;

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendMessageResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendMessageResponse;

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @param message SendMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }

    /** Represents a SendCoinRefreshResponse. */
    class SendCoinRefreshResponse implements ISendCoinRefreshResponse {

        /**
         * Constructs a new SendCoinRefreshResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendCoinRefreshResponse);

        /** SendCoinRefreshResponse userId. */
        public userId: number;

        /** SendCoinRefreshResponse coin. */
        public coin: number;

        /**
         * Creates a new SendCoinRefreshResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCoinRefreshResponse instance
         */
        public static create(properties?: proto.ISendCoinRefreshResponse): proto.SendCoinRefreshResponse;

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link proto.SendCoinRefreshResponse.verify|verify} messages.
         * @param message SendCoinRefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendCoinRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link proto.SendCoinRefreshResponse.verify|verify} messages.
         * @param message SendCoinRefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendCoinRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendCoinRefreshResponse;

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendCoinRefreshResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendCoinRefreshResponse;

        /**
         * Creates a plain object from a SendCoinRefreshResponse message. Also converts values to other types if specified.
         * @param message SendCoinRefreshResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendCoinRefreshResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendUserOnBackResponse);

        /** SendUserOnBackResponse userId. */
        public userId: number;

        /** SendUserOnBackResponse leaveState. */
        public leaveState: number;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserOnBackResponse instance
         */
        public static create(properties?: proto.ISendUserOnBackResponse): proto.SendUserOnBackResponse;

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link proto.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link proto.SendUserOnBackResponse.verify|verify} messages.
         * @param message SendUserOnBackResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserOnBackResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserOnBackResponse;

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserOnBackResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendUserOnBackResponse;

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @param message SendUserOnBackResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserOnBackResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserOnBackResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRoundRecordResponse. */
    interface ISendRoundRecordResponse {

        /** SendRoundRecordResponse tableId */
        tableId?: (string|null);

        /** SendRoundRecordResponse gameId */
        gameId?: (number|null);

        /** SendRoundRecordResponse state */
        state?: (number|null);

        /** SendRoundRecordResponse owner */
        owner?: (number|null);

        /** SendRoundRecordResponse currentRound */
        currentRound?: (number|null);

        /** SendRoundRecordResponse totalRound */
        totalRound?: (number|null);

        /** SendRoundRecordResponse gameInfo */
        gameInfo?: (string|null);

        /** SendRoundRecordResponse applicant */
        applicant?: (number|null);

        /** SendRoundRecordResponse applyTime */
        applyTime?: (number|null);

        /** SendRoundRecordResponse startApplyTime */
        startApplyTime?: (number|Long|null);

        /** SendRoundRecordResponse zhuangPos */
        zhuangPos?: (number|null);

        /** SendRoundRecordResponse discardPos */
        discardPos?: (number|null);

        /** SendRoundRecordResponse nextDiscardPos */
        nextDiscardPos?: (number|null);

        /** SendRoundRecordResponse curQDZPos */
        curQDZPos?: (number|null);

        /** SendRoundRecordResponse godCard */
        godCard?: (number|null);

        /** SendRoundRecordResponse leftCards */
        leftCards?: (number[]|null);

        /** SendRoundRecordResponse callScoreInfo */
        callScoreInfo?: (number[]|null);

        /** SendRoundRecordResponse currBaseScore */
        currBaseScore?: (number|null);

        /** SendRoundRecordResponse currTimes */
        currTimes?: (number|null);

        /** SendRoundRecordResponse isOver */
        isOver?: (number|null);

        /** SendRoundRecordResponse time */
        time?: (string|null);

        /** SendRoundRecordResponse winners */
        winners?: (number|null);

        /** SendRoundRecordResponse springInfo */
        springInfo?: (number|null);

        /** SendRoundRecordResponse users */
        users?: (proto.IUser[]|null);
    }

    /** Represents a SendRoundRecordResponse. */
    class SendRoundRecordResponse implements ISendRoundRecordResponse {

        /**
         * Constructs a new SendRoundRecordResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendRoundRecordResponse);

        /** SendRoundRecordResponse tableId. */
        public tableId: string;

        /** SendRoundRecordResponse gameId. */
        public gameId: number;

        /** SendRoundRecordResponse state. */
        public state: number;

        /** SendRoundRecordResponse owner. */
        public owner: number;

        /** SendRoundRecordResponse currentRound. */
        public currentRound: number;

        /** SendRoundRecordResponse totalRound. */
        public totalRound: number;

        /** SendRoundRecordResponse gameInfo. */
        public gameInfo: string;

        /** SendRoundRecordResponse applicant. */
        public applicant: number;

        /** SendRoundRecordResponse applyTime. */
        public applyTime: number;

        /** SendRoundRecordResponse startApplyTime. */
        public startApplyTime: (number|Long);

        /** SendRoundRecordResponse zhuangPos. */
        public zhuangPos: number;

        /** SendRoundRecordResponse discardPos. */
        public discardPos: number;

        /** SendRoundRecordResponse nextDiscardPos. */
        public nextDiscardPos: number;

        /** SendRoundRecordResponse curQDZPos. */
        public curQDZPos: number;

        /** SendRoundRecordResponse godCard. */
        public godCard: number;

        /** SendRoundRecordResponse leftCards. */
        public leftCards: number[];

        /** SendRoundRecordResponse callScoreInfo. */
        public callScoreInfo: number[];

        /** SendRoundRecordResponse currBaseScore. */
        public currBaseScore: number;

        /** SendRoundRecordResponse currTimes. */
        public currTimes: number;

        /** SendRoundRecordResponse isOver. */
        public isOver: number;

        /** SendRoundRecordResponse time. */
        public time: string;

        /** SendRoundRecordResponse winners. */
        public winners: number;

        /** SendRoundRecordResponse springInfo. */
        public springInfo: number;

        /** SendRoundRecordResponse users. */
        public users: proto.IUser[];

        /**
         * Creates a new SendRoundRecordResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRoundRecordResponse instance
         */
        public static create(properties?: proto.ISendRoundRecordResponse): proto.SendRoundRecordResponse;

        /**
         * Encodes the specified SendRoundRecordResponse message. Does not implicitly {@link proto.SendRoundRecordResponse.verify|verify} messages.
         * @param message SendRoundRecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendRoundRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRoundRecordResponse message, length delimited. Does not implicitly {@link proto.SendRoundRecordResponse.verify|verify} messages.
         * @param message SendRoundRecordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendRoundRecordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRoundRecordResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRoundRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendRoundRecordResponse;

        /**
         * Decodes a SendRoundRecordResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRoundRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendRoundRecordResponse;

        /**
         * Verifies a SendRoundRecordResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendRoundRecordResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendRoundRecordResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendRoundRecordResponse;

        /**
         * Creates a plain object from a SendRoundRecordResponse message. Also converts values to other types if specified.
         * @param message SendRoundRecordResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendRoundRecordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRoundRecordResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendGameOverResponse. */
    interface ISendGameOverResponse {

        /** SendGameOverResponse state */
        state?: (number|null);

        /** SendGameOverResponse owner */
        owner?: (number|null);

        /** SendGameOverResponse totalRound */
        totalRound?: (number|null);

        /** SendGameOverResponse currentRound */
        currentRound?: (number|null);

        /** SendGameOverResponse time */
        time?: (string|null);

        /** SendGameOverResponse agId */
        agId?: (number|null);

        /** SendGameOverResponse ruleId */
        ruleId?: (number|null);

        /** SendGameOverResponse users */
        users?: (proto.IUser[]|null);
    }

    /** Represents a SendGameOverResponse. */
    class SendGameOverResponse implements ISendGameOverResponse {

        /**
         * Constructs a new SendGameOverResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendGameOverResponse);

        /** SendGameOverResponse state. */
        public state: number;

        /** SendGameOverResponse owner. */
        public owner: number;

        /** SendGameOverResponse totalRound. */
        public totalRound: number;

        /** SendGameOverResponse currentRound. */
        public currentRound: number;

        /** SendGameOverResponse time. */
        public time: string;

        /** SendGameOverResponse agId. */
        public agId: number;

        /** SendGameOverResponse ruleId. */
        public ruleId: number;

        /** SendGameOverResponse users. */
        public users: proto.IUser[];

        /**
         * Creates a new SendGameOverResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendGameOverResponse instance
         */
        public static create(properties?: proto.ISendGameOverResponse): proto.SendGameOverResponse;

        /**
         * Encodes the specified SendGameOverResponse message. Does not implicitly {@link proto.SendGameOverResponse.verify|verify} messages.
         * @param message SendGameOverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendGameOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendGameOverResponse message, length delimited. Does not implicitly {@link proto.SendGameOverResponse.verify|verify} messages.
         * @param message SendGameOverResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendGameOverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendGameOverResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendGameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendGameOverResponse;

        /**
         * Decodes a SendGameOverResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendGameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendGameOverResponse;

        /**
         * Verifies a SendGameOverResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendGameOverResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendGameOverResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendGameOverResponse;

        /**
         * Creates a plain object from a SendGameOverResponse message. Also converts values to other types if specified.
         * @param message SendGameOverResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendGameOverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendGameOverResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserQDZResponse. */
    interface ISendUserQDZResponse {

        /** SendUserQDZResponse round */
        round?: (number|null);

        /** SendUserQDZResponse difen */
        difen?: (number|null);

        /** SendUserQDZResponse score */
        score?: (number|null);

        /** SendUserQDZResponse position */
        position?: (number|null);

        /** SendUserQDZResponse nextPosition */
        nextPosition?: (number|null);

        /** SendUserQDZResponse lastPosition */
        lastPosition?: (number|null);

        /** SendUserQDZResponse passPaiCount */
        passPaiCount?: (number|null);
    }

    /** Represents a SendUserQDZResponse. */
    class SendUserQDZResponse implements ISendUserQDZResponse {

        /**
         * Constructs a new SendUserQDZResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendUserQDZResponse);

        /** SendUserQDZResponse round. */
        public round: number;

        /** SendUserQDZResponse difen. */
        public difen: number;

        /** SendUserQDZResponse score. */
        public score: number;

        /** SendUserQDZResponse position. */
        public position: number;

        /** SendUserQDZResponse nextPosition. */
        public nextPosition: number;

        /** SendUserQDZResponse lastPosition. */
        public lastPosition: number;

        /** SendUserQDZResponse passPaiCount. */
        public passPaiCount: number;

        /**
         * Creates a new SendUserQDZResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserQDZResponse instance
         */
        public static create(properties?: proto.ISendUserQDZResponse): proto.SendUserQDZResponse;

        /**
         * Encodes the specified SendUserQDZResponse message. Does not implicitly {@link proto.SendUserQDZResponse.verify|verify} messages.
         * @param message SendUserQDZResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserQDZResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQDZResponse message, length delimited. Does not implicitly {@link proto.SendUserQDZResponse.verify|verify} messages.
         * @param message SendUserQDZResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserQDZResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQDZResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQDZResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserQDZResponse;

        /**
         * Decodes a SendUserQDZResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQDZResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserQDZResponse;

        /**
         * Verifies a SendUserQDZResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserQDZResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserQDZResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendUserQDZResponse;

        /**
         * Creates a plain object from a SendUserQDZResponse message. Also converts values to other types if specified.
         * @param message SendUserQDZResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserQDZResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserQDZResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserQDZ2Response. */
    interface ISendUserQDZ2Response {

        /** SendUserQDZ2Response round */
        round?: (number|null);

        /** SendUserQDZ2Response difen */
        difen?: (number|null);

        /** SendUserQDZ2Response position */
        position?: (number|null);

        /** SendUserQDZ2Response godCard */
        godCard?: (number|null);

        /** SendUserQDZ2Response leftCards */
        leftCards?: (number[]|null);

        /** SendUserQDZ2Response lordHandCards */
        lordHandCards?: (number[]|null);
    }

    /** Represents a SendUserQDZ2Response. */
    class SendUserQDZ2Response implements ISendUserQDZ2Response {

        /**
         * Constructs a new SendUserQDZ2Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendUserQDZ2Response);

        /** SendUserQDZ2Response round. */
        public round: number;

        /** SendUserQDZ2Response difen. */
        public difen: number;

        /** SendUserQDZ2Response position. */
        public position: number;

        /** SendUserQDZ2Response godCard. */
        public godCard: number;

        /** SendUserQDZ2Response leftCards. */
        public leftCards: number[];

        /** SendUserQDZ2Response lordHandCards. */
        public lordHandCards: number[];

        /**
         * Creates a new SendUserQDZ2Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserQDZ2Response instance
         */
        public static create(properties?: proto.ISendUserQDZ2Response): proto.SendUserQDZ2Response;

        /**
         * Encodes the specified SendUserQDZ2Response message. Does not implicitly {@link proto.SendUserQDZ2Response.verify|verify} messages.
         * @param message SendUserQDZ2Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserQDZ2Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQDZ2Response message, length delimited. Does not implicitly {@link proto.SendUserQDZ2Response.verify|verify} messages.
         * @param message SendUserQDZ2Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserQDZ2Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQDZ2Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQDZ2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserQDZ2Response;

        /**
         * Decodes a SendUserQDZ2Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQDZ2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserQDZ2Response;

        /**
         * Verifies a SendUserQDZ2Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserQDZ2Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserQDZ2Response
         */
        public static fromObject(object: { [k: string]: any }): proto.SendUserQDZ2Response;

        /**
         * Creates a plain object from a SendUserQDZ2Response message. Also converts values to other types if specified.
         * @param message SendUserQDZ2Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserQDZ2Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserQDZ2Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserMPResponse. */
    interface ISendUserMPResponse {

        /** SendUserMPResponse showAll */
        showAll?: (number|null);

        /** SendUserMPResponse cards */
        cards?: (number[]|null);

        /** SendUserMPResponse position */
        position?: (number|null);

        /** SendUserMPResponse currTimes */
        currTimes?: (number|null);
    }

    /** Represents a SendUserMPResponse. */
    class SendUserMPResponse implements ISendUserMPResponse {

        /**
         * Constructs a new SendUserMPResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendUserMPResponse);

        /** SendUserMPResponse showAll. */
        public showAll: number;

        /** SendUserMPResponse cards. */
        public cards: number[];

        /** SendUserMPResponse position. */
        public position: number;

        /** SendUserMPResponse currTimes. */
        public currTimes: number;

        /**
         * Creates a new SendUserMPResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserMPResponse instance
         */
        public static create(properties?: proto.ISendUserMPResponse): proto.SendUserMPResponse;

        /**
         * Encodes the specified SendUserMPResponse message. Does not implicitly {@link proto.SendUserMPResponse.verify|verify} messages.
         * @param message SendUserMPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserMPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserMPResponse message, length delimited. Does not implicitly {@link proto.SendUserMPResponse.verify|verify} messages.
         * @param message SendUserMPResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserMPResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserMPResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserMPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserMPResponse;

        /**
         * Decodes a SendUserMPResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserMPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserMPResponse;

        /**
         * Verifies a SendUserMPResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserMPResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserMPResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendUserMPResponse;

        /**
         * Creates a plain object from a SendUserMPResponse message. Also converts values to other types if specified.
         * @param message SendUserMPResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserMPResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserMPResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserMP2Response. */
    interface ISendUserMP2Response {

        /** SendUserMP2Response round */
        round?: (number|null);

        /** SendUserMP2Response difen */
        difen?: (number|null);

        /** SendUserMP2Response position */
        position?: (number|null);

        /** SendUserMP2Response godCard */
        godCard?: (number|null);

        /** SendUserMP2Response leftCards */
        leftCards?: (number[]|null);

        /** SendUserMP2Response start */
        start?: (boolean|null);
    }

    /** Represents a SendUserMP2Response. */
    class SendUserMP2Response implements ISendUserMP2Response {

        /**
         * Constructs a new SendUserMP2Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendUserMP2Response);

        /** SendUserMP2Response round. */
        public round: number;

        /** SendUserMP2Response difen. */
        public difen: number;

        /** SendUserMP2Response position. */
        public position: number;

        /** SendUserMP2Response godCard. */
        public godCard: number;

        /** SendUserMP2Response leftCards. */
        public leftCards: number[];

        /** SendUserMP2Response start. */
        public start: boolean;

        /**
         * Creates a new SendUserMP2Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserMP2Response instance
         */
        public static create(properties?: proto.ISendUserMP2Response): proto.SendUserMP2Response;

        /**
         * Encodes the specified SendUserMP2Response message. Does not implicitly {@link proto.SendUserMP2Response.verify|verify} messages.
         * @param message SendUserMP2Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserMP2Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserMP2Response message, length delimited. Does not implicitly {@link proto.SendUserMP2Response.verify|verify} messages.
         * @param message SendUserMP2Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserMP2Response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserMP2Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserMP2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserMP2Response;

        /**
         * Decodes a SendUserMP2Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserMP2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserMP2Response;

        /**
         * Verifies a SendUserMP2Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserMP2Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserMP2Response
         */
        public static fromObject(object: { [k: string]: any }): proto.SendUserMP2Response;

        /**
         * Creates a plain object from a SendUserMP2Response message. Also converts values to other types if specified.
         * @param message SendUserMP2Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserMP2Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserMP2Response to JSON.
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
        constructor(properties?: proto.ISendDiamondChangeResponse);

        /** SendDiamondChangeResponse userId. */
        public userId: number;

        /** SendDiamondChangeResponse diamond. */
        public diamond: number;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendDiamondChangeResponse instance
         */
        public static create(properties?: proto.ISendDiamondChangeResponse): proto.SendDiamondChangeResponse;

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link proto.SendDiamondChangeResponse.verify|verify} messages.
         * @param message SendDiamondChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendDiamondChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link proto.SendDiamondChangeResponse.verify|verify} messages.
         * @param message SendDiamondChangeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendDiamondChangeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendDiamondChangeResponse;

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendDiamondChangeResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendDiamondChangeResponse;

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @param message SendDiamondChangeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendDiamondChangeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendDiamondChangeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCancelAutoResponse. */
    interface ISendCancelAutoResponse {

        /** SendCancelAutoResponse userId */
        userId?: (number|null);

        /** SendCancelAutoResponse isAuto */
        isAuto?: (boolean|null);
    }

    /** Represents a SendCancelAutoResponse. */
    class SendCancelAutoResponse implements ISendCancelAutoResponse {

        /**
         * Constructs a new SendCancelAutoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISendCancelAutoResponse);

        /** SendCancelAutoResponse userId. */
        public userId: number;

        /** SendCancelAutoResponse isAuto. */
        public isAuto: boolean;

        /**
         * Creates a new SendCancelAutoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCancelAutoResponse instance
         */
        public static create(properties?: proto.ISendCancelAutoResponse): proto.SendCancelAutoResponse;

        /**
         * Encodes the specified SendCancelAutoResponse message. Does not implicitly {@link proto.SendCancelAutoResponse.verify|verify} messages.
         * @param message SendCancelAutoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendCancelAutoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCancelAutoResponse message, length delimited. Does not implicitly {@link proto.SendCancelAutoResponse.verify|verify} messages.
         * @param message SendCancelAutoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendCancelAutoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCancelAutoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCancelAutoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendCancelAutoResponse;

        /**
         * Decodes a SendCancelAutoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCancelAutoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendCancelAutoResponse;

        /**
         * Verifies a SendCancelAutoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCancelAutoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCancelAutoResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SendCancelAutoResponse;

        /**
         * Creates a plain object from a SendCancelAutoResponse message. Also converts values to other types if specified.
         * @param message SendCancelAutoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendCancelAutoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCancelAutoResponse to JSON.
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
        constructor(properties?: proto.IDelayCheckResponse);

        /** DelayCheckResponse content. */
        public content: string;

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DelayCheckResponse instance
         */
        public static create(properties?: proto.IDelayCheckResponse): proto.DelayCheckResponse;

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link proto.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link proto.DelayCheckResponse.verify|verify} messages.
         * @param message DelayCheckResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IDelayCheckResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.DelayCheckResponse;

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.DelayCheckResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.DelayCheckResponse;

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @param message DelayCheckResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.DelayCheckResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendNoticeClientDismissResponse);

        /** SendNoticeClientDismissResponse userId. */
        public userId: number;

        /**
         * Creates a new SendNoticeClientDismissResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendNoticeClientDismissResponse instance
         */
        public static create(properties?: proto.ISendNoticeClientDismissResponse): proto.SendNoticeClientDismissResponse;

        /**
         * Encodes the specified SendNoticeClientDismissResponse message. Does not implicitly {@link proto.SendNoticeClientDismissResponse.verify|verify} messages.
         * @param message SendNoticeClientDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendNoticeClientDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendNoticeClientDismissResponse message, length delimited. Does not implicitly {@link proto.SendNoticeClientDismissResponse.verify|verify} messages.
         * @param message SendNoticeClientDismissResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendNoticeClientDismissResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendNoticeClientDismissResponse;

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendNoticeClientDismissResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendNoticeClientDismissResponse;

        /**
         * Creates a plain object from a SendNoticeClientDismissResponse message. Also converts values to other types if specified.
         * @param message SendNoticeClientDismissResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendNoticeClientDismissResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendRemainTimeResponse);

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
        public static create(properties?: proto.ISendRemainTimeResponse): proto.SendRemainTimeResponse;

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link proto.SendRemainTimeResponse.verify|verify} messages.
         * @param message SendRemainTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendRemainTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link proto.SendRemainTimeResponse.verify|verify} messages.
         * @param message SendRemainTimeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendRemainTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendRemainTimeResponse;

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendRemainTimeResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendRemainTimeResponse;

        /**
         * Creates a plain object from a SendRemainTimeResponse message. Also converts values to other types if specified.
         * @param message SendRemainTimeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendRemainTimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendUserQuitByAdminResponse);

        /** SendUserQuitByAdminResponse userId. */
        public userId: number;

        /**
         * Creates a new SendUserQuitByAdminResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserQuitByAdminResponse instance
         */
        public static create(properties?: proto.ISendUserQuitByAdminResponse): proto.SendUserQuitByAdminResponse;

        /**
         * Encodes the specified SendUserQuitByAdminResponse message. Does not implicitly {@link proto.SendUserQuitByAdminResponse.verify|verify} messages.
         * @param message SendUserQuitByAdminResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendUserQuitByAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserQuitByAdminResponse message, length delimited. Does not implicitly {@link proto.SendUserQuitByAdminResponse.verify|verify} messages.
         * @param message SendUserQuitByAdminResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendUserQuitByAdminResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendUserQuitByAdminResponse;

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendUserQuitByAdminResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendUserQuitByAdminResponse;

        /**
         * Creates a plain object from a SendUserQuitByAdminResponse message. Also converts values to other types if specified.
         * @param message SendUserQuitByAdminResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendUserQuitByAdminResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: proto.ISendHeartBeatResponse);

        /** SendHeartBeatResponse currentTime. */
        public currentTime: (number|Long);

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendHeartBeatResponse instance
         */
        public static create(properties?: proto.ISendHeartBeatResponse): proto.SendHeartBeatResponse;

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link proto.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link proto.SendHeartBeatResponse.verify|verify} messages.
         * @param message SendHeartBeatResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISendHeartBeatResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SendHeartBeatResponse;

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SendHeartBeatResponse;

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
        public static fromObject(object: { [k: string]: any }): proto.SendHeartBeatResponse;

        /**
         * Creates a plain object from a SendHeartBeatResponse message. Also converts values to other types if specified.
         * @param message SendHeartBeatResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SendHeartBeatResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendHeartBeatResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response msg */
        msg?: (string|null);

        /** Response code */
        code?: (proto.Response.ErrorCode|null);

        /** Response serverTime */
        serverTime?: (number|Long|null);

        /** Response cmd */
        cmd?: (proto.Request.CMD|null);

        /** Response loginResponse */
        loginResponse?: (proto.ILoginResponse|null);

        /** Response registerPhoneResponse */
        registerPhoneResponse?: (proto.IRegisterPhoneRespone|null);

        /** Response getUserInfoResponse */
        getUserInfoResponse?: (proto.IGetUserInfoResponse|null);

        /** Response coinBankResponse */
        coinBankResponse?: (proto.ICoinBankResponse|null);

        /** Response changeSignResponse */
        changeSignResponse?: (proto.IChangeSignResponse|null);

        /** Response sendDisCardResponse */
        sendDisCardResponse?: (proto.ISendDisCardResponse|null);

        /** Response sendPassPaiResponse */
        sendPassPaiResponse?: (proto.ISendPassPaiResponse|null);

        /** Response sendUserQDZResponse */
        sendUserQDZResponse?: (proto.ISendUserQDZResponse|null);

        /** Response sendUserQDZ2Response */
        sendUserQDZ2Response?: (proto.ISendUserQDZ2Response|null);

        /** Response sendUserMPResponse */
        sendUserMPResponse?: (proto.ISendUserMPResponse|null);

        /** Response sendUserMP2Response */
        sendUserMP2Response?: (proto.ISendUserMP2Response|null);

        /** Response sendRoundRecordResponse */
        sendRoundRecordResponse?: (proto.ISendRoundRecordResponse|null);

        /** Response sendReconnectQuitResponse */
        sendReconnectQuitResponse?: (proto.ISendReconnectQuitResponse|null);

        /** Response userReconnectResponse */
        userReconnectResponse?: (proto.IUserReconnectResponse|null);

        /** Response sendUserReconnectResponse */
        sendUserReconnectResponse?: (proto.ISendUserReconnectResponse|null);

        /** Response sendApplyDismissResponse */
        sendApplyDismissResponse?: (proto.ISendApplyDismissResponse|null);

        /** Response sendAgreeDismissResponse */
        sendAgreeDismissResponse?: (proto.ISendAgreeDismissResponse|null);

        /** Response sendDismissResultResponse */
        sendDismissResultResponse?: (proto.ISendDismissResultResponse|null);

        /** Response sendUserQuitResponse */
        sendUserQuitResponse?: (proto.ISendUserQuitResponse|null);

        /** Response sendMessageResponse */
        sendMessageResponse?: (proto.ISendMessageResponse|null);

        /** Response sendUserOnBackResponse */
        sendUserOnBackResponse?: (proto.ISendUserOnBackResponse|null);

        /** Response sendGameOverResponse */
        sendGameOverResponse?: (proto.ISendGameOverResponse|null);

        /** Response sendDiamondChangeResponse */
        sendDiamondChangeResponse?: (proto.ISendDiamondChangeResponse|null);

        /** Response sendCancelAutoResponse */
        sendCancelAutoResponse?: (proto.ISendCancelAutoResponse|null);

        /** Response delayCheckResponse */
        delayCheckResponse?: (proto.IDelayCheckResponse|null);

        /** Response sendRemainTimeResponse */
        sendRemainTimeResponse?: (proto.ISendRemainTimeResponse|null);

        /** Response sendNoticeClientDismissResponse */
        sendNoticeClientDismissResponse?: (proto.ISendNoticeClientDismissResponse|null);

        /** Response sendUserQuitByAdminResponse */
        sendUserQuitByAdminResponse?: (proto.ISendUserQuitByAdminResponse|null);

        /** Response sendCoinRefreshResponse */
        sendCoinRefreshResponse?: (proto.ISendCoinRefreshResponse|null);

        /** Response sendHeartBeatResponse */
        sendHeartBeatResponse?: (proto.ISendHeartBeatResponse|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IResponse);

        /** Response msg. */
        public msg: string;

        /** Response code. */
        public code: proto.Response.ErrorCode;

        /** Response serverTime. */
        public serverTime: (number|Long);

        /** Response cmd. */
        public cmd: proto.Request.CMD;

        /** Response loginResponse. */
        public loginResponse?: (proto.ILoginResponse|null);

        /** Response registerPhoneResponse. */
        public registerPhoneResponse?: (proto.IRegisterPhoneRespone|null);

        /** Response getUserInfoResponse. */
        public getUserInfoResponse?: (proto.IGetUserInfoResponse|null);

        /** Response coinBankResponse. */
        public coinBankResponse?: (proto.ICoinBankResponse|null);

        /** Response changeSignResponse. */
        public changeSignResponse?: (proto.IChangeSignResponse|null);

        /** Response sendDisCardResponse. */
        public sendDisCardResponse?: (proto.ISendDisCardResponse|null);

        /** Response sendPassPaiResponse. */
        public sendPassPaiResponse?: (proto.ISendPassPaiResponse|null);

        /** Response sendUserQDZResponse. */
        public sendUserQDZResponse?: (proto.ISendUserQDZResponse|null);

        /** Response sendUserQDZ2Response. */
        public sendUserQDZ2Response?: (proto.ISendUserQDZ2Response|null);

        /** Response sendUserMPResponse. */
        public sendUserMPResponse?: (proto.ISendUserMPResponse|null);

        /** Response sendUserMP2Response. */
        public sendUserMP2Response?: (proto.ISendUserMP2Response|null);

        /** Response sendRoundRecordResponse. */
        public sendRoundRecordResponse?: (proto.ISendRoundRecordResponse|null);

        /** Response sendReconnectQuitResponse. */
        public sendReconnectQuitResponse?: (proto.ISendReconnectQuitResponse|null);

        /** Response userReconnectResponse. */
        public userReconnectResponse?: (proto.IUserReconnectResponse|null);

        /** Response sendUserReconnectResponse. */
        public sendUserReconnectResponse?: (proto.ISendUserReconnectResponse|null);

        /** Response sendApplyDismissResponse. */
        public sendApplyDismissResponse?: (proto.ISendApplyDismissResponse|null);

        /** Response sendAgreeDismissResponse. */
        public sendAgreeDismissResponse?: (proto.ISendAgreeDismissResponse|null);

        /** Response sendDismissResultResponse. */
        public sendDismissResultResponse?: (proto.ISendDismissResultResponse|null);

        /** Response sendUserQuitResponse. */
        public sendUserQuitResponse?: (proto.ISendUserQuitResponse|null);

        /** Response sendMessageResponse. */
        public sendMessageResponse?: (proto.ISendMessageResponse|null);

        /** Response sendUserOnBackResponse. */
        public sendUserOnBackResponse?: (proto.ISendUserOnBackResponse|null);

        /** Response sendGameOverResponse. */
        public sendGameOverResponse?: (proto.ISendGameOverResponse|null);

        /** Response sendDiamondChangeResponse. */
        public sendDiamondChangeResponse?: (proto.ISendDiamondChangeResponse|null);

        /** Response sendCancelAutoResponse. */
        public sendCancelAutoResponse?: (proto.ISendCancelAutoResponse|null);

        /** Response delayCheckResponse. */
        public delayCheckResponse?: (proto.IDelayCheckResponse|null);

        /** Response sendRemainTimeResponse. */
        public sendRemainTimeResponse?: (proto.ISendRemainTimeResponse|null);

        /** Response sendNoticeClientDismissResponse. */
        public sendNoticeClientDismissResponse?: (proto.ISendNoticeClientDismissResponse|null);

        /** Response sendUserQuitByAdminResponse. */
        public sendUserQuitByAdminResponse?: (proto.ISendUserQuitByAdminResponse|null);

        /** Response sendCoinRefreshResponse. */
        public sendCoinRefreshResponse?: (proto.ISendCoinRefreshResponse|null);

        /** Response sendHeartBeatResponse. */
        public sendHeartBeatResponse?: (proto.ISendHeartBeatResponse|null);

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: proto.IResponse): proto.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link proto.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link proto.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Response;

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
        public static fromObject(object: { [k: string]: any }): proto.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Response {

        /** ErrorCode enum. */
        enum ErrorCode {
            OK = 200,
            DATA_CHECK_FAIL = 400,
            USER_NO_EXSIT = 401,
            USER_EXSITS = 402,
            PASSWORD_ERROR = 403,
            CLIENT_ERROR = 404,
            USERNAME_NO_VALID = 405,
            PASSWORD_NO_VALID = 406,
            PASSWORD_NO_VALID_NOTSAME = 444,
            SESSION_EXPIRE = 407,
            APP_NO_EXSIT = 408,
            SIGN_ERROR = 409,
            GET_SMS_FAILURE = 410,
            GET_SMS_TIME_FAILURE = 443,
            SMS_VERIFY_CODE_EXPIRE = 411,
            SMS_VERIFY_CODE_ERROR = 412,
            MOBILE_FORMAT_ERROR = 413,
            MOBILE_BINDED = 414,
            APP_NOT_EXSIT = 415,
            MOBILE_UNBOUND = 416,
            SMS_VERIFY_CODE_SENT = 417,
            NICKNAME_NOT_NULL = 418,
            INPUT_MOBILE = 419,
            INPUT_USERNAME = 420,
            INPUT_PASSWORD = 421,
            INPUT_SMS_CODE = 422,
            ORDER_NO_ERROR = 423,
            ORDER_REPEAT_ERROR = 424,
            WX_ACCESS_TOKEN_ERROR = 425,
            OPERATION_FAILED = 426,
            DONOT_IS_ME = 427,
            BIND_CODE_ERROR = 428,
            LOGIN_ERROR = 429,
            NOT_IN_AGENT = 430,
            EXIST_IN_AGENT = 431,
            APPLY_IN_AGENT = 432,
            AGENT_NOT_EXIST = 433,
            AGENT_NOT_MANAGER = 434,
            USER_NOT_APPLY = 435,
            CARD_HAS_USED = 437,
            AGENT_MAX_COUNT = 438,
            CREATE_THE_SAME_ERROR = 439,
            RULE_NOT_HAVE = 440,
            SLOT_ALREADY_HAVE = 441,
            PLAY_BACK_CODE_ERROR = 450,
            SYSTEM_ERROR = 500,
            PLAY_DISK_ERROR = 600,
            EMAIL_ERROR = 601,
            CONTENT_ERROR = 602,
            LENGTH_ERROR = 603,
            PLAY_IN_GAME = 604,
            HAS_ALIPAY_ACCOUNT = 605,
            HAS_BANK_ACCOUNT = 613,
            HAS_PHONE_ACCOUNT = 614,
            CHANGE_ERROR = 606,
            CHANGE_REFUND_ERROR = 607,
            BANK_COIN_ERROR = 608,
            CHANGE_GAME_TURNOVER_ERROR = 609,
            BIND_ALI_ERROR = 610,
            BIND_BANK_ERROR = 611,
            COIN_CANNOT_NULL = 612,
            PERSON_LOGIN_ERROR = 619
        }
    }
}
