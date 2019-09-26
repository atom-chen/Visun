import * as $protobuf from "protobufjs";
/** Namespace login. */
export namespace login {

    /** CMD enum. */
    enum CMD {
        Msg_HeartReq = 5000,
        Msg_HeartResp = 5001,
        Msg_SysError = 5002,
        CheckTokenReq = 5003,
        MovedGateNot = 5004,
        CheckTokenRes = 5005,
        Msg_GsPackage = 10000,
        Msg_UserLogInResp = 10001
    }

    /** Properties of a HeartReq. */
    interface IHeartReq {
    }

    /** Represents a HeartReq. */
    class HeartReq implements IHeartReq {

        /**
         * Constructs a new HeartReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IHeartReq);

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartReq instance
         */
        public static create(properties?: login.IHeartReq): login.HeartReq;

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link login.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link login.HeartReq.verify|verify} messages.
         * @param message HeartReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IHeartReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.HeartReq;

        /**
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.HeartReq;

        /**
         * Verifies a HeartReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartReq
         */
        public static fromObject(object: { [k: string]: any }): login.HeartReq;

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @param message HeartReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.HeartReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartResp. */
    interface IHeartResp {

        /** HeartResp serverTime */
        serverTime?: (number|Long|null);
    }

    /** Represents a HeartResp. */
    class HeartResp implements IHeartResp {

        /**
         * Constructs a new HeartResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IHeartResp);

        /** HeartResp serverTime. */
        public serverTime: (number|Long);

        /**
         * Creates a new HeartResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartResp instance
         */
        public static create(properties?: login.IHeartResp): login.HeartResp;

        /**
         * Encodes the specified HeartResp message. Does not implicitly {@link login.HeartResp.verify|verify} messages.
         * @param message HeartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IHeartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartResp message, length delimited. Does not implicitly {@link login.HeartResp.verify|verify} messages.
         * @param message HeartResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IHeartResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.HeartResp;

        /**
         * Decodes a HeartResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.HeartResp;

        /**
         * Verifies a HeartResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartResp
         */
        public static fromObject(object: { [k: string]: any }): login.HeartResp;

        /**
         * Creates a plain object from a HeartResp message. Also converts values to other types if specified.
         * @param message HeartResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.HeartResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckTokenRequest. */
    interface ICheckTokenRequest {

        /** CheckTokenRequest uid */
        uid?: (number|Long|null);

        /** CheckTokenRequest token */
        token?: (string|null);
    }

    /** Represents a CheckTokenRequest. */
    class CheckTokenRequest implements ICheckTokenRequest {

        /**
         * Constructs a new CheckTokenRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ICheckTokenRequest);

        /** CheckTokenRequest uid. */
        public uid: (number|Long);

        /** CheckTokenRequest token. */
        public token: string;

        /**
         * Creates a new CheckTokenRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckTokenRequest instance
         */
        public static create(properties?: login.ICheckTokenRequest): login.CheckTokenRequest;

        /**
         * Encodes the specified CheckTokenRequest message. Does not implicitly {@link login.CheckTokenRequest.verify|verify} messages.
         * @param message CheckTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ICheckTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckTokenRequest message, length delimited. Does not implicitly {@link login.CheckTokenRequest.verify|verify} messages.
         * @param message CheckTokenRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ICheckTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckTokenRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.CheckTokenRequest;

        /**
         * Decodes a CheckTokenRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.CheckTokenRequest;

        /**
         * Verifies a CheckTokenRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckTokenRequest
         */
        public static fromObject(object: { [k: string]: any }): login.CheckTokenRequest;

        /**
         * Creates a plain object from a CheckTokenRequest message. Also converts values to other types if specified.
         * @param message CheckTokenRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.CheckTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckTokenRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CheckTokenResponse. */
    interface ICheckTokenResponse {
    }

    /** Represents a CheckTokenResponse. */
    class CheckTokenResponse implements ICheckTokenResponse {

        /**
         * Constructs a new CheckTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ICheckTokenResponse);

        /**
         * Creates a new CheckTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CheckTokenResponse instance
         */
        public static create(properties?: login.ICheckTokenResponse): login.CheckTokenResponse;

        /**
         * Encodes the specified CheckTokenResponse message. Does not implicitly {@link login.CheckTokenResponse.verify|verify} messages.
         * @param message CheckTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ICheckTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CheckTokenResponse message, length delimited. Does not implicitly {@link login.CheckTokenResponse.verify|verify} messages.
         * @param message CheckTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ICheckTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CheckTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CheckTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.CheckTokenResponse;

        /**
         * Decodes a CheckTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CheckTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.CheckTokenResponse;

        /**
         * Verifies a CheckTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CheckTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CheckTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): login.CheckTokenResponse;

        /**
         * Creates a plain object from a CheckTokenResponse message. Also converts values to other types if specified.
         * @param message CheckTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.CheckTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CheckTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MovedGateNotice. */
    interface IMovedGateNotice {

        /** MovedGateNotice wsUri */
        wsUri?: (string|null);
    }

    /** Represents a MovedGateNotice. */
    class MovedGateNotice implements IMovedGateNotice {

        /**
         * Constructs a new MovedGateNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IMovedGateNotice);

        /** MovedGateNotice wsUri. */
        public wsUri: string;

        /**
         * Creates a new MovedGateNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MovedGateNotice instance
         */
        public static create(properties?: login.IMovedGateNotice): login.MovedGateNotice;

        /**
         * Encodes the specified MovedGateNotice message. Does not implicitly {@link login.MovedGateNotice.verify|verify} messages.
         * @param message MovedGateNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IMovedGateNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MovedGateNotice message, length delimited. Does not implicitly {@link login.MovedGateNotice.verify|verify} messages.
         * @param message MovedGateNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IMovedGateNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MovedGateNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MovedGateNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.MovedGateNotice;

        /**
         * Decodes a MovedGateNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MovedGateNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.MovedGateNotice;

        /**
         * Verifies a MovedGateNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MovedGateNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MovedGateNotice
         */
        public static fromObject(object: { [k: string]: any }): login.MovedGateNotice;

        /**
         * Creates a plain object from a MovedGateNotice message. Also converts values to other types if specified.
         * @param message MovedGateNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.MovedGateNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MovedGateNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GsPackage. */
    interface IGsPackage {

        /** GsPackage enBody */
        enBody?: (Uint8Array|null);

        /** GsPackage sign */
        sign?: (string|null);
    }

    /** Represents a GsPackage. */
    class GsPackage implements IGsPackage {

        /**
         * Constructs a new GsPackage.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGsPackage);

        /** GsPackage enBody. */
        public enBody: Uint8Array;

        /** GsPackage sign. */
        public sign: string;

        /**
         * Creates a new GsPackage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GsPackage instance
         */
        public static create(properties?: login.IGsPackage): login.GsPackage;

        /**
         * Encodes the specified GsPackage message. Does not implicitly {@link login.GsPackage.verify|verify} messages.
         * @param message GsPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGsPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GsPackage message, length delimited. Does not implicitly {@link login.GsPackage.verify|verify} messages.
         * @param message GsPackage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGsPackage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GsPackage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GsPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.GsPackage;

        /**
         * Decodes a GsPackage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GsPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.GsPackage;

        /**
         * Verifies a GsPackage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GsPackage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GsPackage
         */
        public static fromObject(object: { [k: string]: any }): login.GsPackage;

        /**
         * Creates a plain object from a GsPackage message. Also converts values to other types if specified.
         * @param message GsPackage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.GsPackage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GsPackage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo memberId */
        memberId?: (number|Long|null);

        /** UserInfo memberAccount */
        memberAccount?: (string|null);

        /** UserInfo memberName */
        memberName?: (string|null);

        /** UserInfo merchantId */
        merchantId?: (number|Long|null);

        /** UserInfo merchantMemberId */
        merchantMemberId?: (number|Long|null);

        /** UserInfo merchantName */
        merchantName?: (string|null);

        /** UserInfo merchantAccount */
        merchantAccount?: (string|null);

        /** UserInfo memberStatus */
        memberStatus?: (number|null);

        /** UserInfo identity */
        identity?: (string|null);

        /** UserInfo memberAvatar */
        memberAvatar?: (string|null);

        /** UserInfo token */
        token?: (string|null);

        /** UserInfo money */
        money?: (string|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IUserInfo);

        /** UserInfo memberId. */
        public memberId: (number|Long);

        /** UserInfo memberAccount. */
        public memberAccount: string;

        /** UserInfo memberName. */
        public memberName: string;

        /** UserInfo merchantId. */
        public merchantId: (number|Long);

        /** UserInfo merchantMemberId. */
        public merchantMemberId: (number|Long);

        /** UserInfo merchantName. */
        public merchantName: string;

        /** UserInfo merchantAccount. */
        public merchantAccount: string;

        /** UserInfo memberStatus. */
        public memberStatus: number;

        /** UserInfo identity. */
        public identity: string;

        /** UserInfo memberAvatar. */
        public memberAvatar: string;

        /** UserInfo token. */
        public token: string;

        /** UserInfo money. */
        public money: string;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: login.IUserInfo): login.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.UserInfo;

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
        public static fromObject(object: { [k: string]: any }): login.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogInReq. */
    interface IUserLogInReq {

        /** UserLogInReq address */
        address?: (string|null);

        /** UserLogInReq logType */
        logType?: (number|null);

        /** UserLogInReq memberId */
        memberId?: (number|Long|null);

        /** UserLogInReq memberLoginDevice */
        memberLoginDevice?: (number|null);

        /** UserLogInReq memberLoginIp */
        memberLoginIp?: (string|null);

        /** UserLogInReq memberLoginTime */
        memberLoginTime?: (string|null);

        /** UserLogInReq memberLogOutTime */
        memberLogOutTime?: (string|null);

        /** UserLogInReq merchantId */
        merchantId?: (number|Long|null);

        /** UserLogInReq merchantMemberId */
        merchantMemberId?: (number|Long|null);

        /** UserLogInReq merchantName */
        merchantName?: (string|null);

        /** UserLogInReq remark */
        remark?: (string|null);

        /** UserLogInReq token */
        token?: (string|null);

        /** UserLogInReq ipAddress */
        ipAddress?: (string|null);
    }

    /** Represents a UserLogInReq. */
    class UserLogInReq implements IUserLogInReq {

        /**
         * Constructs a new UserLogInReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IUserLogInReq);

        /** UserLogInReq address. */
        public address: string;

        /** UserLogInReq logType. */
        public logType: number;

        /** UserLogInReq memberId. */
        public memberId: (number|Long);

        /** UserLogInReq memberLoginDevice. */
        public memberLoginDevice: number;

        /** UserLogInReq memberLoginIp. */
        public memberLoginIp: string;

        /** UserLogInReq memberLoginTime. */
        public memberLoginTime: string;

        /** UserLogInReq memberLogOutTime. */
        public memberLogOutTime: string;

        /** UserLogInReq merchantId. */
        public merchantId: (number|Long);

        /** UserLogInReq merchantMemberId. */
        public merchantMemberId: (number|Long);

        /** UserLogInReq merchantName. */
        public merchantName: string;

        /** UserLogInReq remark. */
        public remark: string;

        /** UserLogInReq token. */
        public token: string;

        /** UserLogInReq ipAddress. */
        public ipAddress: string;

        /**
         * Creates a new UserLogInReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogInReq instance
         */
        public static create(properties?: login.IUserLogInReq): login.UserLogInReq;

        /**
         * Encodes the specified UserLogInReq message. Does not implicitly {@link login.UserLogInReq.verify|verify} messages.
         * @param message UserLogInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IUserLogInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogInReq message, length delimited. Does not implicitly {@link login.UserLogInReq.verify|verify} messages.
         * @param message UserLogInReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IUserLogInReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogInReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.UserLogInReq;

        /**
         * Decodes a UserLogInReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.UserLogInReq;

        /**
         * Verifies a UserLogInReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLogInReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLogInReq
         */
        public static fromObject(object: { [k: string]: any }): login.UserLogInReq;

        /**
         * Creates a plain object from a UserLogInReq message. Also converts values to other types if specified.
         * @param message UserLogInReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.UserLogInReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogInReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogInResp. */
    interface IUserLogInResp {

        /** UserLogInResp code */
        code?: (number|null);

        /** UserLogInResp msg */
        msg?: (string|null);

        /** UserLogInResp data */
        data?: (login.IUserInfo|null);
    }

    /** Represents a UserLogInResp. */
    class UserLogInResp implements IUserLogInResp {

        /**
         * Constructs a new UserLogInResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IUserLogInResp);

        /** UserLogInResp code. */
        public code: number;

        /** UserLogInResp msg. */
        public msg: string;

        /** UserLogInResp data. */
        public data?: (login.IUserInfo|null);

        /**
         * Creates a new UserLogInResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogInResp instance
         */
        public static create(properties?: login.IUserLogInResp): login.UserLogInResp;

        /**
         * Encodes the specified UserLogInResp message. Does not implicitly {@link login.UserLogInResp.verify|verify} messages.
         * @param message UserLogInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IUserLogInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogInResp message, length delimited. Does not implicitly {@link login.UserLogInResp.verify|verify} messages.
         * @param message UserLogInResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IUserLogInResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogInResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): login.UserLogInResp;

        /**
         * Decodes a UserLogInResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): login.UserLogInResp;

        /**
         * Verifies a UserLogInResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLogInResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLogInResp
         */
        public static fromObject(object: { [k: string]: any }): login.UserLogInResp;

        /**
         * Creates a plain object from a UserLogInResp message. Also converts values to other types if specified.
         * @param message UserLogInResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: login.UserLogInResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogInResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
