/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SdkProto = (function() {

    /**
     * Namespace SdkProto.
     * @exports SdkProto
     * @namespace
     */
    var SdkProto = {};

    SdkProto.User = (function() {

        /**
         * Properties of a User.
         * @memberof SdkProto
         * @interface IUser
         * @property {string|null} [sessionId] User sessionId
         * @property {number|null} [userId] User userId
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [headImg] User headImg
         * @property {number|null} [sex] User sex
         * @property {string|null} [openid] User openid
         * @property {number|null} [diamond] User diamond
         * @property {number|null} [coin] User coin
         * @property {number|null} [ticket] User ticket
         * @property {number|null} [bankcoin] User bankcoin
         * @property {string|null} [userName] User userName
         * @property {string|null} [aliAccount] User aliAccount
         * @property {number|null} [userType] User userType
         * @property {string|null} [aliName] User aliName
         * @property {string|null} [bankAccount] User bankAccount
         * @property {string|null} [bankName] User bankName
         * @property {string|null} [ip] User ip
         * @property {number|null} [bindStatus] User bindStatus
         * @property {string|null} [phone] User phone
         * @property {number|null} [level] User level
         * @property {number|null} [isInTable] User isInTable
         * @property {string|null} [addr] User addr
         * @property {number|null} [gameId] User gameId
         * @property {string|null} [pos] User pos
         * @property {boolean|null} [showAd] User showAd
         * @property {boolean|null} [isNewUser] User isNewUser
         * @property {number|null} [registerCoin] User registerCoin
         * @property {number|null} [bindphoneCoin] User bindphoneCoin
         * @property {number|null} [fissionCoin] User fissionCoin
         * @property {number|null} [bannerAlert] User bannerAlert
         * @property {number|null} [agent] User agent
         * @property {number|null} [isBind] User isBind
         * @property {number|null} [isRecharge] User isRecharge
         */

        /**
         * Constructs a new User.
         * @memberof SdkProto
         * @classdesc 基础对象 ***********************
         * @implements IUser
         * @constructor
         * @param {SdkProto.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User sessionId.
         * @member {string} sessionId
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.sessionId = "";

        /**
         * User userId.
         * @member {number} userId
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User headImg.
         * @member {string} headImg
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.headImg = "";

        /**
         * User sex.
         * @member {number} sex
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User openid.
         * @member {string} openid
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.openid = "";

        /**
         * User diamond.
         * @member {number} diamond
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.diamond = 0;

        /**
         * User coin.
         * @member {number} coin
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.coin = 0;

        /**
         * User ticket.
         * @member {number} ticket
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.ticket = 0;

        /**
         * User bankcoin.
         * @member {number} bankcoin
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.bankcoin = 0;

        /**
         * User userName.
         * @member {string} userName
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.userName = "";

        /**
         * User aliAccount.
         * @member {string} aliAccount
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.aliAccount = "";

        /**
         * User userType.
         * @member {number} userType
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.userType = 0;

        /**
         * User aliName.
         * @member {string} aliName
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.aliName = "";

        /**
         * User bankAccount.
         * @member {string} bankAccount
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.bankAccount = "";

        /**
         * User bankName.
         * @member {string} bankName
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.bankName = "";

        /**
         * User ip.
         * @member {string} ip
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.ip = "";

        /**
         * User bindStatus.
         * @member {number} bindStatus
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.bindStatus = 0;

        /**
         * User phone.
         * @member {string} phone
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.phone = "";

        /**
         * User level.
         * @member {number} level
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.level = 0;

        /**
         * User isInTable.
         * @member {number} isInTable
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.isInTable = 0;

        /**
         * User addr.
         * @member {string} addr
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.addr = "";

        /**
         * User gameId.
         * @member {number} gameId
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.gameId = 0;

        /**
         * User pos.
         * @member {string} pos
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.pos = "";

        /**
         * User showAd.
         * @member {boolean} showAd
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.showAd = false;

        /**
         * User isNewUser.
         * @member {boolean} isNewUser
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.isNewUser = false;

        /**
         * User registerCoin.
         * @member {number} registerCoin
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.registerCoin = 0;

        /**
         * User bindphoneCoin.
         * @member {number} bindphoneCoin
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.bindphoneCoin = 0;

        /**
         * User fissionCoin.
         * @member {number} fissionCoin
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.fissionCoin = 0;

        /**
         * User bannerAlert.
         * @member {number} bannerAlert
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.bannerAlert = 0;

        /**
         * User agent.
         * @member {number} agent
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.agent = 0;

        /**
         * User isBind.
         * @member {number} isBind
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.isBind = 0;

        /**
         * User isRecharge.
         * @member {number} isRecharge
         * @memberof SdkProto.User
         * @instance
         */
        User.prototype.isRecharge = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof SdkProto.User
         * @static
         * @param {SdkProto.IUser=} [properties] Properties to set
         * @returns {SdkProto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link SdkProto.User.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.User
         * @static
         * @param {SdkProto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.headImg);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sex);
            if (message.openid != null && message.hasOwnProperty("openid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.openid);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.diamond);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.coin);
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.ticket);
            if (message.bankcoin != null && message.hasOwnProperty("bankcoin"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.bankcoin);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userName);
            if (message.aliAccount != null && message.hasOwnProperty("aliAccount"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.aliAccount);
            if (message.userType != null && message.hasOwnProperty("userType"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.userType);
            if (message.aliName != null && message.hasOwnProperty("aliName"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.aliName);
            if (message.bankAccount != null && message.hasOwnProperty("bankAccount"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.bankAccount);
            if (message.bankName != null && message.hasOwnProperty("bankName"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.bankName);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.ip);
            if (message.bindStatus != null && message.hasOwnProperty("bindStatus"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.bindStatus);
            if (message.phone != null && message.hasOwnProperty("phone"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.phone);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.level);
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.isInTable);
            if (message.addr != null && message.hasOwnProperty("addr"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.addr);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.gameId);
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.pos);
            if (message.showAd != null && message.hasOwnProperty("showAd"))
                writer.uint32(/* id 25, wireType 0 =*/200).bool(message.showAd);
            if (message.isNewUser != null && message.hasOwnProperty("isNewUser"))
                writer.uint32(/* id 26, wireType 0 =*/208).bool(message.isNewUser);
            if (message.registerCoin != null && message.hasOwnProperty("registerCoin"))
                writer.uint32(/* id 27, wireType 1 =*/217).double(message.registerCoin);
            if (message.bindphoneCoin != null && message.hasOwnProperty("bindphoneCoin"))
                writer.uint32(/* id 28, wireType 1 =*/225).double(message.bindphoneCoin);
            if (message.fissionCoin != null && message.hasOwnProperty("fissionCoin"))
                writer.uint32(/* id 29, wireType 1 =*/233).double(message.fissionCoin);
            if (message.bannerAlert != null && message.hasOwnProperty("bannerAlert"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.bannerAlert);
            if (message.agent != null && message.hasOwnProperty("agent"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.agent);
            if (message.isBind != null && message.hasOwnProperty("isBind"))
                writer.uint32(/* id 32, wireType 0 =*/256).int32(message.isBind);
            if (message.isRecharge != null && message.hasOwnProperty("isRecharge"))
                writer.uint32(/* id 33, wireType 0 =*/264).int32(message.isRecharge);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link SdkProto.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.User
         * @static
         * @param {SdkProto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.string();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.headImg = reader.string();
                    break;
                case 5:
                    message.sex = reader.int32();
                    break;
                case 6:
                    message.openid = reader.string();
                    break;
                case 7:
                    message.diamond = reader.double();
                    break;
                case 8:
                    message.coin = reader.double();
                    break;
                case 9:
                    message.ticket = reader.int32();
                    break;
                case 10:
                    message.bankcoin = reader.double();
                    break;
                case 11:
                    message.userName = reader.string();
                    break;
                case 12:
                    message.aliAccount = reader.string();
                    break;
                case 13:
                    message.userType = reader.int32();
                    break;
                case 14:
                    message.aliName = reader.string();
                    break;
                case 15:
                    message.bankAccount = reader.string();
                    break;
                case 16:
                    message.bankName = reader.string();
                    break;
                case 17:
                    message.ip = reader.string();
                    break;
                case 18:
                    message.bindStatus = reader.int32();
                    break;
                case 19:
                    message.phone = reader.string();
                    break;
                case 20:
                    message.level = reader.int32();
                    break;
                case 21:
                    message.isInTable = reader.int32();
                    break;
                case 22:
                    message.addr = reader.string();
                    break;
                case 23:
                    message.gameId = reader.int32();
                    break;
                case 24:
                    message.pos = reader.string();
                    break;
                case 25:
                    message.showAd = reader.bool();
                    break;
                case 26:
                    message.isNewUser = reader.bool();
                    break;
                case 27:
                    message.registerCoin = reader.double();
                    break;
                case 28:
                    message.bindphoneCoin = reader.double();
                    break;
                case 29:
                    message.fissionCoin = reader.double();
                    break;
                case 30:
                    message.bannerAlert = reader.int32();
                    break;
                case 31:
                    message.agent = reader.int32();
                    break;
                case 32:
                    message.isBind = reader.int32();
                    break;
                case 33:
                    message.isRecharge = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof SdkProto.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.openid != null && message.hasOwnProperty("openid"))
                if (!$util.isString(message.openid))
                    return "openid: string expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (typeof message.diamond !== "number")
                    return "diamond: number expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isInteger(message.ticket))
                    return "ticket: integer expected";
            if (message.bankcoin != null && message.hasOwnProperty("bankcoin"))
                if (typeof message.bankcoin !== "number")
                    return "bankcoin: number expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.aliAccount != null && message.hasOwnProperty("aliAccount"))
                if (!$util.isString(message.aliAccount))
                    return "aliAccount: string expected";
            if (message.userType != null && message.hasOwnProperty("userType"))
                if (!$util.isInteger(message.userType))
                    return "userType: integer expected";
            if (message.aliName != null && message.hasOwnProperty("aliName"))
                if (!$util.isString(message.aliName))
                    return "aliName: string expected";
            if (message.bankAccount != null && message.hasOwnProperty("bankAccount"))
                if (!$util.isString(message.bankAccount))
                    return "bankAccount: string expected";
            if (message.bankName != null && message.hasOwnProperty("bankName"))
                if (!$util.isString(message.bankName))
                    return "bankName: string expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.bindStatus != null && message.hasOwnProperty("bindStatus"))
                if (!$util.isInteger(message.bindStatus))
                    return "bindStatus: integer expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                if (!$util.isInteger(message.isInTable))
                    return "isInTable: integer expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isString(message.pos))
                    return "pos: string expected";
            if (message.showAd != null && message.hasOwnProperty("showAd"))
                if (typeof message.showAd !== "boolean")
                    return "showAd: boolean expected";
            if (message.isNewUser != null && message.hasOwnProperty("isNewUser"))
                if (typeof message.isNewUser !== "boolean")
                    return "isNewUser: boolean expected";
            if (message.registerCoin != null && message.hasOwnProperty("registerCoin"))
                if (typeof message.registerCoin !== "number")
                    return "registerCoin: number expected";
            if (message.bindphoneCoin != null && message.hasOwnProperty("bindphoneCoin"))
                if (typeof message.bindphoneCoin !== "number")
                    return "bindphoneCoin: number expected";
            if (message.fissionCoin != null && message.hasOwnProperty("fissionCoin"))
                if (typeof message.fissionCoin !== "number")
                    return "fissionCoin: number expected";
            if (message.bannerAlert != null && message.hasOwnProperty("bannerAlert"))
                if (!$util.isInteger(message.bannerAlert))
                    return "bannerAlert: integer expected";
            if (message.agent != null && message.hasOwnProperty("agent"))
                if (!$util.isInteger(message.agent))
                    return "agent: integer expected";
            if (message.isBind != null && message.hasOwnProperty("isBind"))
                if (!$util.isInteger(message.isBind))
                    return "isBind: integer expected";
            if (message.isRecharge != null && message.hasOwnProperty("isRecharge"))
                if (!$util.isInteger(message.isRecharge))
                    return "isRecharge: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.User)
                return object;
            var message = new $root.SdkProto.User();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.openid != null)
                message.openid = String(object.openid);
            if (object.diamond != null)
                message.diamond = Number(object.diamond);
            if (object.coin != null)
                message.coin = Number(object.coin);
            if (object.ticket != null)
                message.ticket = object.ticket | 0;
            if (object.bankcoin != null)
                message.bankcoin = Number(object.bankcoin);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.aliAccount != null)
                message.aliAccount = String(object.aliAccount);
            if (object.userType != null)
                message.userType = object.userType | 0;
            if (object.aliName != null)
                message.aliName = String(object.aliName);
            if (object.bankAccount != null)
                message.bankAccount = String(object.bankAccount);
            if (object.bankName != null)
                message.bankName = String(object.bankName);
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.bindStatus != null)
                message.bindStatus = object.bindStatus | 0;
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.isInTable != null)
                message.isInTable = object.isInTable | 0;
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.pos != null)
                message.pos = String(object.pos);
            if (object.showAd != null)
                message.showAd = Boolean(object.showAd);
            if (object.isNewUser != null)
                message.isNewUser = Boolean(object.isNewUser);
            if (object.registerCoin != null)
                message.registerCoin = Number(object.registerCoin);
            if (object.bindphoneCoin != null)
                message.bindphoneCoin = Number(object.bindphoneCoin);
            if (object.fissionCoin != null)
                message.fissionCoin = Number(object.fissionCoin);
            if (object.bannerAlert != null)
                message.bannerAlert = object.bannerAlert | 0;
            if (object.agent != null)
                message.agent = object.agent | 0;
            if (object.isBind != null)
                message.isBind = object.isBind | 0;
            if (object.isRecharge != null)
                message.isRecharge = object.isRecharge | 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.User
         * @static
         * @param {SdkProto.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = "";
                object.userId = 0;
                object.nickname = "";
                object.headImg = "";
                object.sex = 0;
                object.openid = "";
                object.diamond = 0;
                object.coin = 0;
                object.ticket = 0;
                object.bankcoin = 0;
                object.userName = "";
                object.aliAccount = "";
                object.userType = 0;
                object.aliName = "";
                object.bankAccount = "";
                object.bankName = "";
                object.ip = "";
                object.bindStatus = 0;
                object.phone = "";
                object.level = 0;
                object.isInTable = 0;
                object.addr = "";
                object.gameId = 0;
                object.pos = "";
                object.showAd = false;
                object.isNewUser = false;
                object.registerCoin = 0;
                object.bindphoneCoin = 0;
                object.fissionCoin = 0;
                object.bannerAlert = 0;
                object.agent = 0;
                object.isBind = 0;
                object.isRecharge = 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.openid != null && message.hasOwnProperty("openid"))
                object.openid = message.openid;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = options.json && !isFinite(message.diamond) ? String(message.diamond) : message.diamond;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            if (message.bankcoin != null && message.hasOwnProperty("bankcoin"))
                object.bankcoin = options.json && !isFinite(message.bankcoin) ? String(message.bankcoin) : message.bankcoin;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.aliAccount != null && message.hasOwnProperty("aliAccount"))
                object.aliAccount = message.aliAccount;
            if (message.userType != null && message.hasOwnProperty("userType"))
                object.userType = message.userType;
            if (message.aliName != null && message.hasOwnProperty("aliName"))
                object.aliName = message.aliName;
            if (message.bankAccount != null && message.hasOwnProperty("bankAccount"))
                object.bankAccount = message.bankAccount;
            if (message.bankName != null && message.hasOwnProperty("bankName"))
                object.bankName = message.bankName;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.bindStatus != null && message.hasOwnProperty("bindStatus"))
                object.bindStatus = message.bindStatus;
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                object.isInTable = message.isInTable;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            if (message.showAd != null && message.hasOwnProperty("showAd"))
                object.showAd = message.showAd;
            if (message.isNewUser != null && message.hasOwnProperty("isNewUser"))
                object.isNewUser = message.isNewUser;
            if (message.registerCoin != null && message.hasOwnProperty("registerCoin"))
                object.registerCoin = options.json && !isFinite(message.registerCoin) ? String(message.registerCoin) : message.registerCoin;
            if (message.bindphoneCoin != null && message.hasOwnProperty("bindphoneCoin"))
                object.bindphoneCoin = options.json && !isFinite(message.bindphoneCoin) ? String(message.bindphoneCoin) : message.bindphoneCoin;
            if (message.fissionCoin != null && message.hasOwnProperty("fissionCoin"))
                object.fissionCoin = options.json && !isFinite(message.fissionCoin) ? String(message.fissionCoin) : message.fissionCoin;
            if (message.bannerAlert != null && message.hasOwnProperty("bannerAlert"))
                object.bannerAlert = message.bannerAlert;
            if (message.agent != null && message.hasOwnProperty("agent"))
                object.agent = message.agent;
            if (message.isBind != null && message.hasOwnProperty("isBind"))
                object.isBind = message.isBind;
            if (message.isRecharge != null && message.hasOwnProperty("isRecharge"))
                object.isRecharge = message.isRecharge;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof SdkProto.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    SdkProto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof SdkProto
         * @interface IUserInfo
         * @property {number|null} [isInTable] UserInfo isInTable
         * @property {string|null} [addr] UserInfo addr
         * @property {number|null} [baseBankCoin] UserInfo baseBankCoin
         * @property {number|null} [dailyRecharge] UserInfo dailyRecharge
         * @property {number|null} [dailyRechargeMax] UserInfo dailyRechargeMax
         */

        /**
         * Constructs a new UserInfo.
         * @memberof SdkProto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {SdkProto.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo isInTable.
         * @member {number} isInTable
         * @memberof SdkProto.UserInfo
         * @instance
         */
        UserInfo.prototype.isInTable = 0;

        /**
         * UserInfo addr.
         * @member {string} addr
         * @memberof SdkProto.UserInfo
         * @instance
         */
        UserInfo.prototype.addr = "";

        /**
         * UserInfo baseBankCoin.
         * @member {number} baseBankCoin
         * @memberof SdkProto.UserInfo
         * @instance
         */
        UserInfo.prototype.baseBankCoin = 0;

        /**
         * UserInfo dailyRecharge.
         * @member {number} dailyRecharge
         * @memberof SdkProto.UserInfo
         * @instance
         */
        UserInfo.prototype.dailyRecharge = 0;

        /**
         * UserInfo dailyRechargeMax.
         * @member {number} dailyRechargeMax
         * @memberof SdkProto.UserInfo
         * @instance
         */
        UserInfo.prototype.dailyRechargeMax = 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserInfo
         * @static
         * @param {SdkProto.IUserInfo=} [properties] Properties to set
         * @returns {SdkProto.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link SdkProto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserInfo
         * @static
         * @param {SdkProto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isInTable);
            if (message.addr != null && message.hasOwnProperty("addr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.addr);
            if (message.baseBankCoin != null && message.hasOwnProperty("baseBankCoin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.baseBankCoin);
            if (message.dailyRecharge != null && message.hasOwnProperty("dailyRecharge"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.dailyRecharge);
            if (message.dailyRechargeMax != null && message.hasOwnProperty("dailyRechargeMax"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dailyRechargeMax);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link SdkProto.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserInfo
         * @static
         * @param {SdkProto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isInTable = reader.int32();
                    break;
                case 2:
                    message.addr = reader.string();
                    break;
                case 3:
                    message.baseBankCoin = reader.int32();
                    break;
                case 4:
                    message.dailyRecharge = reader.float();
                    break;
                case 5:
                    message.dailyRechargeMax = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof SdkProto.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                if (!$util.isInteger(message.isInTable))
                    return "isInTable: integer expected";
            if (message.addr != null && message.hasOwnProperty("addr"))
                if (!$util.isString(message.addr))
                    return "addr: string expected";
            if (message.baseBankCoin != null && message.hasOwnProperty("baseBankCoin"))
                if (!$util.isInteger(message.baseBankCoin))
                    return "baseBankCoin: integer expected";
            if (message.dailyRecharge != null && message.hasOwnProperty("dailyRecharge"))
                if (typeof message.dailyRecharge !== "number")
                    return "dailyRecharge: number expected";
            if (message.dailyRechargeMax != null && message.hasOwnProperty("dailyRechargeMax"))
                if (!$util.isInteger(message.dailyRechargeMax))
                    return "dailyRechargeMax: integer expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserInfo)
                return object;
            var message = new $root.SdkProto.UserInfo();
            if (object.isInTable != null)
                message.isInTable = object.isInTable | 0;
            if (object.addr != null)
                message.addr = String(object.addr);
            if (object.baseBankCoin != null)
                message.baseBankCoin = object.baseBankCoin | 0;
            if (object.dailyRecharge != null)
                message.dailyRecharge = Number(object.dailyRecharge);
            if (object.dailyRechargeMax != null)
                message.dailyRechargeMax = object.dailyRechargeMax | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserInfo
         * @static
         * @param {SdkProto.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isInTable = 0;
                object.addr = "";
                object.baseBankCoin = 0;
                object.dailyRecharge = 0;
                object.dailyRechargeMax = 0;
            }
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                object.isInTable = message.isInTable;
            if (message.addr != null && message.hasOwnProperty("addr"))
                object.addr = message.addr;
            if (message.baseBankCoin != null && message.hasOwnProperty("baseBankCoin"))
                object.baseBankCoin = message.baseBankCoin;
            if (message.dailyRecharge != null && message.hasOwnProperty("dailyRecharge"))
                object.dailyRecharge = options.json && !isFinite(message.dailyRecharge) ? String(message.dailyRecharge) : message.dailyRecharge;
            if (message.dailyRechargeMax != null && message.hasOwnProperty("dailyRechargeMax"))
                object.dailyRechargeMax = message.dailyRechargeMax;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof SdkProto.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    SdkProto.UserReady = (function() {

        /**
         * Properties of a UserReady.
         * @memberof SdkProto
         * @interface IUserReady
         * @property {number|null} [userId] UserReady userId
         * @property {number|null} [state] UserReady state
         */

        /**
         * Constructs a new UserReady.
         * @memberof SdkProto
         * @classdesc Represents a UserReady.
         * @implements IUserReady
         * @constructor
         * @param {SdkProto.IUserReady=} [properties] Properties to set
         */
        function UserReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReady userId.
         * @member {number} userId
         * @memberof SdkProto.UserReady
         * @instance
         */
        UserReady.prototype.userId = 0;

        /**
         * UserReady state.
         * @member {number} state
         * @memberof SdkProto.UserReady
         * @instance
         */
        UserReady.prototype.state = 0;

        /**
         * Creates a new UserReady instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserReady
         * @static
         * @param {SdkProto.IUserReady=} [properties] Properties to set
         * @returns {SdkProto.UserReady} UserReady instance
         */
        UserReady.create = function create(properties) {
            return new UserReady(properties);
        };

        /**
         * Encodes the specified UserReady message. Does not implicitly {@link SdkProto.UserReady.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserReady
         * @static
         * @param {SdkProto.IUserReady} message UserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified UserReady message, length delimited. Does not implicitly {@link SdkProto.UserReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserReady
         * @static
         * @param {SdkProto.IUserReady} message UserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReady message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserReady} UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReady message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserReady} UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReady message.
         * @function verify
         * @memberof SdkProto.UserReady
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        /**
         * Creates a UserReady message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserReady} UserReady
         */
        UserReady.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserReady)
                return object;
            var message = new $root.SdkProto.UserReady();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserReady
         * @static
         * @param {SdkProto.UserReady} message UserReady
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this UserReady to JSON.
         * @function toJSON
         * @memberof SdkProto.UserReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReady;
    })();

    SdkProto.ResultData = (function() {

        /**
         * Properties of a ResultData.
         * @memberof SdkProto
         * @interface IResultData
         * @property {number|null} [isOver] ResultData isOver
         * @property {string|null} [time] ResultData time
         * @property {number|null} [winners] ResultData winners
         * @property {number|null} [springInfo] ResultData springInfo
         */

        /**
         * Constructs a new ResultData.
         * @memberof SdkProto
         * @classdesc Represents a ResultData.
         * @implements IResultData
         * @constructor
         * @param {SdkProto.IResultData=} [properties] Properties to set
         */
        function ResultData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResultData isOver.
         * @member {number} isOver
         * @memberof SdkProto.ResultData
         * @instance
         */
        ResultData.prototype.isOver = 0;

        /**
         * ResultData time.
         * @member {string} time
         * @memberof SdkProto.ResultData
         * @instance
         */
        ResultData.prototype.time = "";

        /**
         * ResultData winners.
         * @member {number} winners
         * @memberof SdkProto.ResultData
         * @instance
         */
        ResultData.prototype.winners = 0;

        /**
         * ResultData springInfo.
         * @member {number} springInfo
         * @memberof SdkProto.ResultData
         * @instance
         */
        ResultData.prototype.springInfo = 0;

        /**
         * Creates a new ResultData instance using the specified properties.
         * @function create
         * @memberof SdkProto.ResultData
         * @static
         * @param {SdkProto.IResultData=} [properties] Properties to set
         * @returns {SdkProto.ResultData} ResultData instance
         */
        ResultData.create = function create(properties) {
            return new ResultData(properties);
        };

        /**
         * Encodes the specified ResultData message. Does not implicitly {@link SdkProto.ResultData.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.ResultData
         * @static
         * @param {SdkProto.IResultData} message ResultData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.isOver);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.time);
            if (message.winners != null && message.hasOwnProperty("winners"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.winners);
            if (message.springInfo != null && message.hasOwnProperty("springInfo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.springInfo);
            return writer;
        };

        /**
         * Encodes the specified ResultData message, length delimited. Does not implicitly {@link SdkProto.ResultData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.ResultData
         * @static
         * @param {SdkProto.IResultData} message ResultData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultData message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.ResultData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.ResultData} ResultData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.ResultData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isOver = reader.int32();
                    break;
                case 2:
                    message.time = reader.string();
                    break;
                case 3:
                    message.winners = reader.int32();
                    break;
                case 4:
                    message.springInfo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResultData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.ResultData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.ResultData} ResultData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResultData message.
         * @function verify
         * @memberof SdkProto.ResultData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResultData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                if (!$util.isInteger(message.isOver))
                    return "isOver: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.winners != null && message.hasOwnProperty("winners"))
                if (!$util.isInteger(message.winners))
                    return "winners: integer expected";
            if (message.springInfo != null && message.hasOwnProperty("springInfo"))
                if (!$util.isInteger(message.springInfo))
                    return "springInfo: integer expected";
            return null;
        };

        /**
         * Creates a ResultData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.ResultData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.ResultData} ResultData
         */
        ResultData.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.ResultData)
                return object;
            var message = new $root.SdkProto.ResultData();
            if (object.isOver != null)
                message.isOver = object.isOver | 0;
            if (object.time != null)
                message.time = String(object.time);
            if (object.winners != null)
                message.winners = object.winners | 0;
            if (object.springInfo != null)
                message.springInfo = object.springInfo | 0;
            return message;
        };

        /**
         * Creates a plain object from a ResultData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.ResultData
         * @static
         * @param {SdkProto.ResultData} message ResultData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResultData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isOver = 0;
                object.time = "";
                object.winners = 0;
                object.springInfo = 0;
            }
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                object.isOver = message.isOver;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.winners != null && message.hasOwnProperty("winners"))
                object.winners = message.winners;
            if (message.springInfo != null && message.hasOwnProperty("springInfo"))
                object.springInfo = message.springInfo;
            return object;
        };

        /**
         * Converts this ResultData to JSON.
         * @function toJSON
         * @memberof SdkProto.ResultData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResultData;
    })();

    SdkProto.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof SdkProto
         * @interface ILoginRequest
         * @property {string|null} [phoneOrUsername] LoginRequest phoneOrUsername
         * @property {string|null} [psword] LoginRequest psword
         * @property {string|null} [deviceID] LoginRequest deviceID
         * @property {number|null} [channelId] LoginRequest channelId
         * @property {string|null} [agentCode] LoginRequest agentCode
         * @property {number|null} [platformId] LoginRequest platformId
         */

        /**
         * Constructs a new LoginRequest.
         * @memberof SdkProto
         * @classdesc 请求对象 ***********************
         * @implements ILoginRequest
         * @constructor
         * @param {SdkProto.ILoginRequest=} [properties] Properties to set
         */
        function LoginRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRequest phoneOrUsername.
         * @member {string} phoneOrUsername
         * @memberof SdkProto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.phoneOrUsername = "";

        /**
         * LoginRequest psword.
         * @member {string} psword
         * @memberof SdkProto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.psword = "";

        /**
         * LoginRequest deviceID.
         * @member {string} deviceID
         * @memberof SdkProto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceID = "";

        /**
         * LoginRequest channelId.
         * @member {number} channelId
         * @memberof SdkProto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.channelId = 0;

        /**
         * LoginRequest agentCode.
         * @member {string} agentCode
         * @memberof SdkProto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.agentCode = "";

        /**
         * LoginRequest platformId.
         * @member {number} platformId
         * @memberof SdkProto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.platformId = 0;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {SdkProto.ILoginRequest=} [properties] Properties to set
         * @returns {SdkProto.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link SdkProto.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {SdkProto.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phoneOrUsername != null && message.hasOwnProperty("phoneOrUsername"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneOrUsername);
            if (message.psword != null && message.hasOwnProperty("psword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.psword);
            if (message.deviceID != null && message.hasOwnProperty("deviceID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceID);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.channelId);
            if (message.agentCode != null && message.hasOwnProperty("agentCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.agentCode);
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.platformId);
            return writer;
        };

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link SdkProto.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {SdkProto.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.LoginRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phoneOrUsername = reader.string();
                    break;
                case 2:
                    message.psword = reader.string();
                    break;
                case 3:
                    message.deviceID = reader.string();
                    break;
                case 4:
                    message.channelId = reader.int32();
                    break;
                case 5:
                    message.agentCode = reader.string();
                    break;
                case 6:
                    message.platformId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRequest message.
         * @function verify
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phoneOrUsername != null && message.hasOwnProperty("phoneOrUsername"))
                if (!$util.isString(message.phoneOrUsername))
                    return "phoneOrUsername: string expected";
            if (message.psword != null && message.hasOwnProperty("psword"))
                if (!$util.isString(message.psword))
                    return "psword: string expected";
            if (message.deviceID != null && message.hasOwnProperty("deviceID"))
                if (!$util.isString(message.deviceID))
                    return "deviceID: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isInteger(message.channelId))
                    return "channelId: integer expected";
            if (message.agentCode != null && message.hasOwnProperty("agentCode"))
                if (!$util.isString(message.agentCode))
                    return "agentCode: string expected";
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                if (!$util.isInteger(message.platformId))
                    return "platformId: integer expected";
            return null;
        };

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.LoginRequest)
                return object;
            var message = new $root.SdkProto.LoginRequest();
            if (object.phoneOrUsername != null)
                message.phoneOrUsername = String(object.phoneOrUsername);
            if (object.psword != null)
                message.psword = String(object.psword);
            if (object.deviceID != null)
                message.deviceID = String(object.deviceID);
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            if (object.agentCode != null)
                message.agentCode = String(object.agentCode);
            if (object.platformId != null)
                message.platformId = object.platformId | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.LoginRequest
         * @static
         * @param {SdkProto.LoginRequest} message LoginRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phoneOrUsername = "";
                object.psword = "";
                object.deviceID = "";
                object.channelId = 0;
                object.agentCode = "";
                object.platformId = 0;
            }
            if (message.phoneOrUsername != null && message.hasOwnProperty("phoneOrUsername"))
                object.phoneOrUsername = message.phoneOrUsername;
            if (message.psword != null && message.hasOwnProperty("psword"))
                object.psword = message.psword;
            if (message.deviceID != null && message.hasOwnProperty("deviceID"))
                object.deviceID = message.deviceID;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.agentCode != null && message.hasOwnProperty("agentCode"))
                object.agentCode = message.agentCode;
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                object.platformId = message.platformId;
            return object;
        };

        /**
         * Converts this LoginRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    SdkProto.RegisterPhoneRequest = (function() {

        /**
         * Properties of a RegisterPhoneRequest.
         * @memberof SdkProto
         * @interface IRegisterPhoneRequest
         * @property {string|null} [phone] RegisterPhoneRequest phone
         * @property {string|null} [psword] RegisterPhoneRequest psword
         * @property {string|null} [msgCode] RegisterPhoneRequest msgCode
         */

        /**
         * Constructs a new RegisterPhoneRequest.
         * @memberof SdkProto
         * @classdesc Represents a RegisterPhoneRequest.
         * @implements IRegisterPhoneRequest
         * @constructor
         * @param {SdkProto.IRegisterPhoneRequest=} [properties] Properties to set
         */
        function RegisterPhoneRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterPhoneRequest phone.
         * @member {string} phone
         * @memberof SdkProto.RegisterPhoneRequest
         * @instance
         */
        RegisterPhoneRequest.prototype.phone = "";

        /**
         * RegisterPhoneRequest psword.
         * @member {string} psword
         * @memberof SdkProto.RegisterPhoneRequest
         * @instance
         */
        RegisterPhoneRequest.prototype.psword = "";

        /**
         * RegisterPhoneRequest msgCode.
         * @member {string} msgCode
         * @memberof SdkProto.RegisterPhoneRequest
         * @instance
         */
        RegisterPhoneRequest.prototype.msgCode = "";

        /**
         * Creates a new RegisterPhoneRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {SdkProto.IRegisterPhoneRequest=} [properties] Properties to set
         * @returns {SdkProto.RegisterPhoneRequest} RegisterPhoneRequest instance
         */
        RegisterPhoneRequest.create = function create(properties) {
            return new RegisterPhoneRequest(properties);
        };

        /**
         * Encodes the specified RegisterPhoneRequest message. Does not implicitly {@link SdkProto.RegisterPhoneRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {SdkProto.IRegisterPhoneRequest} message RegisterPhoneRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPhoneRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.phone != null && message.hasOwnProperty("phone"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone);
            if (message.psword != null && message.hasOwnProperty("psword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.psword);
            if (message.msgCode != null && message.hasOwnProperty("msgCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.msgCode);
            return writer;
        };

        /**
         * Encodes the specified RegisterPhoneRequest message, length delimited. Does not implicitly {@link SdkProto.RegisterPhoneRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {SdkProto.IRegisterPhoneRequest} message RegisterPhoneRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPhoneRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterPhoneRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.RegisterPhoneRequest} RegisterPhoneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPhoneRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.RegisterPhoneRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.phone = reader.string();
                    break;
                case 2:
                    message.psword = reader.string();
                    break;
                case 3:
                    message.msgCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterPhoneRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.RegisterPhoneRequest} RegisterPhoneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPhoneRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterPhoneRequest message.
         * @function verify
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterPhoneRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            if (message.psword != null && message.hasOwnProperty("psword"))
                if (!$util.isString(message.psword))
                    return "psword: string expected";
            if (message.msgCode != null && message.hasOwnProperty("msgCode"))
                if (!$util.isString(message.msgCode))
                    return "msgCode: string expected";
            return null;
        };

        /**
         * Creates a RegisterPhoneRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.RegisterPhoneRequest} RegisterPhoneRequest
         */
        RegisterPhoneRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.RegisterPhoneRequest)
                return object;
            var message = new $root.SdkProto.RegisterPhoneRequest();
            if (object.phone != null)
                message.phone = String(object.phone);
            if (object.psword != null)
                message.psword = String(object.psword);
            if (object.msgCode != null)
                message.msgCode = String(object.msgCode);
            return message;
        };

        /**
         * Creates a plain object from a RegisterPhoneRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.RegisterPhoneRequest
         * @static
         * @param {SdkProto.RegisterPhoneRequest} message RegisterPhoneRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterPhoneRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.phone = "";
                object.psword = "";
                object.msgCode = "";
            }
            if (message.phone != null && message.hasOwnProperty("phone"))
                object.phone = message.phone;
            if (message.psword != null && message.hasOwnProperty("psword"))
                object.psword = message.psword;
            if (message.msgCode != null && message.hasOwnProperty("msgCode"))
                object.msgCode = message.msgCode;
            return object;
        };

        /**
         * Converts this RegisterPhoneRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.RegisterPhoneRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterPhoneRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterPhoneRequest;
    })();

    SdkProto.GetUserInfoRequest = (function() {

        /**
         * Properties of a GetUserInfoRequest.
         * @memberof SdkProto
         * @interface IGetUserInfoRequest
         * @property {number|null} [userId] GetUserInfoRequest userId
         */

        /**
         * Constructs a new GetUserInfoRequest.
         * @memberof SdkProto
         * @classdesc Represents a GetUserInfoRequest.
         * @implements IGetUserInfoRequest
         * @constructor
         * @param {SdkProto.IGetUserInfoRequest=} [properties] Properties to set
         */
        function GetUserInfoRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserInfoRequest userId.
         * @member {number} userId
         * @memberof SdkProto.GetUserInfoRequest
         * @instance
         */
        GetUserInfoRequest.prototype.userId = 0;

        /**
         * Creates a new GetUserInfoRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {SdkProto.IGetUserInfoRequest=} [properties] Properties to set
         * @returns {SdkProto.GetUserInfoRequest} GetUserInfoRequest instance
         */
        GetUserInfoRequest.create = function create(properties) {
            return new GetUserInfoRequest(properties);
        };

        /**
         * Encodes the specified GetUserInfoRequest message. Does not implicitly {@link SdkProto.GetUserInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {SdkProto.IGetUserInfoRequest} message GetUserInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetUserInfoRequest message, length delimited. Does not implicitly {@link SdkProto.GetUserInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {SdkProto.IGetUserInfoRequest} message GetUserInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.GetUserInfoRequest} GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.GetUserInfoRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.GetUserInfoRequest} GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserInfoRequest message.
         * @function verify
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserInfoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a GetUserInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.GetUserInfoRequest} GetUserInfoRequest
         */
        GetUserInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.GetUserInfoRequest)
                return object;
            var message = new $root.SdkProto.GetUserInfoRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.GetUserInfoRequest
         * @static
         * @param {SdkProto.GetUserInfoRequest} message GetUserInfoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserInfoRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GetUserInfoRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.GetUserInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoRequest;
    })();

    SdkProto.CoinBankRequest = (function() {

        /**
         * Properties of a CoinBankRequest.
         * @memberof SdkProto
         * @interface ICoinBankRequest
         * @property {number|null} [userId] CoinBankRequest userId
         * @property {number|null} [type] CoinBankRequest type
         * @property {number|null} [coin] CoinBankRequest coin
         */

        /**
         * Constructs a new CoinBankRequest.
         * @memberof SdkProto
         * @classdesc Represents a CoinBankRequest.
         * @implements ICoinBankRequest
         * @constructor
         * @param {SdkProto.ICoinBankRequest=} [properties] Properties to set
         */
        function CoinBankRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CoinBankRequest userId.
         * @member {number} userId
         * @memberof SdkProto.CoinBankRequest
         * @instance
         */
        CoinBankRequest.prototype.userId = 0;

        /**
         * CoinBankRequest type.
         * @member {number} type
         * @memberof SdkProto.CoinBankRequest
         * @instance
         */
        CoinBankRequest.prototype.type = 0;

        /**
         * CoinBankRequest coin.
         * @member {number} coin
         * @memberof SdkProto.CoinBankRequest
         * @instance
         */
        CoinBankRequest.prototype.coin = 0;

        /**
         * Creates a new CoinBankRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {SdkProto.ICoinBankRequest=} [properties] Properties to set
         * @returns {SdkProto.CoinBankRequest} CoinBankRequest instance
         */
        CoinBankRequest.create = function create(properties) {
            return new CoinBankRequest(properties);
        };

        /**
         * Encodes the specified CoinBankRequest message. Does not implicitly {@link SdkProto.CoinBankRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {SdkProto.ICoinBankRequest} message CoinBankRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.coin);
            return writer;
        };

        /**
         * Encodes the specified CoinBankRequest message, length delimited. Does not implicitly {@link SdkProto.CoinBankRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {SdkProto.ICoinBankRequest} message CoinBankRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CoinBankRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.CoinBankRequest} CoinBankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CoinBankRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.CoinBankRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CoinBankRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.CoinBankRequest} CoinBankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CoinBankRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CoinBankRequest message.
         * @function verify
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CoinBankRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            return null;
        };

        /**
         * Creates a CoinBankRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.CoinBankRequest} CoinBankRequest
         */
        CoinBankRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.CoinBankRequest)
                return object;
            var message = new $root.SdkProto.CoinBankRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            return message;
        };

        /**
         * Creates a plain object from a CoinBankRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.CoinBankRequest
         * @static
         * @param {SdkProto.CoinBankRequest} message CoinBankRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoinBankRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.type = 0;
                object.coin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            return object;
        };

        /**
         * Converts this CoinBankRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.CoinBankRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoinBankRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoinBankRequest;
    })();

    SdkProto.ChangeSignRequest = (function() {

        /**
         * Properties of a ChangeSignRequest.
         * @memberof SdkProto
         * @interface IChangeSignRequest
         * @property {string|null} [sid] ChangeSignRequest sid
         * @property {string|null} [sign] ChangeSignRequest sign
         */

        /**
         * Constructs a new ChangeSignRequest.
         * @memberof SdkProto
         * @classdesc Represents a ChangeSignRequest.
         * @implements IChangeSignRequest
         * @constructor
         * @param {SdkProto.IChangeSignRequest=} [properties] Properties to set
         */
        function ChangeSignRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChangeSignRequest sid.
         * @member {string} sid
         * @memberof SdkProto.ChangeSignRequest
         * @instance
         */
        ChangeSignRequest.prototype.sid = "";

        /**
         * ChangeSignRequest sign.
         * @member {string} sign
         * @memberof SdkProto.ChangeSignRequest
         * @instance
         */
        ChangeSignRequest.prototype.sign = "";

        /**
         * Creates a new ChangeSignRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {SdkProto.IChangeSignRequest=} [properties] Properties to set
         * @returns {SdkProto.ChangeSignRequest} ChangeSignRequest instance
         */
        ChangeSignRequest.create = function create(properties) {
            return new ChangeSignRequest(properties);
        };

        /**
         * Encodes the specified ChangeSignRequest message. Does not implicitly {@link SdkProto.ChangeSignRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {SdkProto.IChangeSignRequest} message ChangeSignRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sign);
            return writer;
        };

        /**
         * Encodes the specified ChangeSignRequest message, length delimited. Does not implicitly {@link SdkProto.ChangeSignRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {SdkProto.IChangeSignRequest} message ChangeSignRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeSignRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.ChangeSignRequest} ChangeSignRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSignRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.ChangeSignRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.sign = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeSignRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.ChangeSignRequest} ChangeSignRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSignRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeSignRequest message.
         * @function verify
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeSignRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            return null;
        };

        /**
         * Creates a ChangeSignRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.ChangeSignRequest} ChangeSignRequest
         */
        ChangeSignRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.ChangeSignRequest)
                return object;
            var message = new $root.SdkProto.ChangeSignRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.sign != null)
                message.sign = String(object.sign);
            return message;
        };

        /**
         * Creates a plain object from a ChangeSignRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.ChangeSignRequest
         * @static
         * @param {SdkProto.ChangeSignRequest} message ChangeSignRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeSignRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sid = "";
                object.sign = "";
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            return object;
        };

        /**
         * Converts this ChangeSignRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.ChangeSignRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeSignRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeSignRequest;
    })();

    SdkProto.TestDeviceIDRequest = (function() {

        /**
         * Properties of a TestDeviceIDRequest.
         * @memberof SdkProto
         * @interface ITestDeviceIDRequest
         * @property {string|null} [deviceID] TestDeviceIDRequest deviceID
         * @property {number|null} [channelId] TestDeviceIDRequest channelId
         * @property {number|null} [platformId] TestDeviceIDRequest platformId
         * @property {string|null} [agentCode] TestDeviceIDRequest agentCode
         */

        /**
         * Constructs a new TestDeviceIDRequest.
         * @memberof SdkProto
         * @classdesc Represents a TestDeviceIDRequest.
         * @implements ITestDeviceIDRequest
         * @constructor
         * @param {SdkProto.ITestDeviceIDRequest=} [properties] Properties to set
         */
        function TestDeviceIDRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestDeviceIDRequest deviceID.
         * @member {string} deviceID
         * @memberof SdkProto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.deviceID = "";

        /**
         * TestDeviceIDRequest channelId.
         * @member {number} channelId
         * @memberof SdkProto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.channelId = 0;

        /**
         * TestDeviceIDRequest platformId.
         * @member {number} platformId
         * @memberof SdkProto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.platformId = 0;

        /**
         * TestDeviceIDRequest agentCode.
         * @member {string} agentCode
         * @memberof SdkProto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.agentCode = "";

        /**
         * Creates a new TestDeviceIDRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {SdkProto.ITestDeviceIDRequest=} [properties] Properties to set
         * @returns {SdkProto.TestDeviceIDRequest} TestDeviceIDRequest instance
         */
        TestDeviceIDRequest.create = function create(properties) {
            return new TestDeviceIDRequest(properties);
        };

        /**
         * Encodes the specified TestDeviceIDRequest message. Does not implicitly {@link SdkProto.TestDeviceIDRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {SdkProto.ITestDeviceIDRequest} message TestDeviceIDRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceID != null && message.hasOwnProperty("deviceID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceID);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channelId);
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platformId);
            if (message.agentCode != null && message.hasOwnProperty("agentCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.agentCode);
            return writer;
        };

        /**
         * Encodes the specified TestDeviceIDRequest message, length delimited. Does not implicitly {@link SdkProto.TestDeviceIDRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {SdkProto.ITestDeviceIDRequest} message TestDeviceIDRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestDeviceIDRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.TestDeviceIDRequest} TestDeviceIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestDeviceIDRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.TestDeviceIDRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceID = reader.string();
                    break;
                case 2:
                    message.channelId = reader.int32();
                    break;
                case 3:
                    message.platformId = reader.int32();
                    break;
                case 4:
                    message.agentCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestDeviceIDRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.TestDeviceIDRequest} TestDeviceIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestDeviceIDRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestDeviceIDRequest message.
         * @function verify
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestDeviceIDRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceID != null && message.hasOwnProperty("deviceID"))
                if (!$util.isString(message.deviceID))
                    return "deviceID: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isInteger(message.channelId))
                    return "channelId: integer expected";
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                if (!$util.isInteger(message.platformId))
                    return "platformId: integer expected";
            if (message.agentCode != null && message.hasOwnProperty("agentCode"))
                if (!$util.isString(message.agentCode))
                    return "agentCode: string expected";
            return null;
        };

        /**
         * Creates a TestDeviceIDRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.TestDeviceIDRequest} TestDeviceIDRequest
         */
        TestDeviceIDRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.TestDeviceIDRequest)
                return object;
            var message = new $root.SdkProto.TestDeviceIDRequest();
            if (object.deviceID != null)
                message.deviceID = String(object.deviceID);
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            if (object.platformId != null)
                message.platformId = object.platformId | 0;
            if (object.agentCode != null)
                message.agentCode = String(object.agentCode);
            return message;
        };

        /**
         * Creates a plain object from a TestDeviceIDRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.TestDeviceIDRequest
         * @static
         * @param {SdkProto.TestDeviceIDRequest} message TestDeviceIDRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestDeviceIDRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceID = "";
                object.channelId = 0;
                object.platformId = 0;
                object.agentCode = "";
            }
            if (message.deviceID != null && message.hasOwnProperty("deviceID"))
                object.deviceID = message.deviceID;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.platformId != null && message.hasOwnProperty("platformId"))
                object.platformId = message.platformId;
            if (message.agentCode != null && message.hasOwnProperty("agentCode"))
                object.agentCode = message.agentCode;
            return object;
        };

        /**
         * Converts this TestDeviceIDRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.TestDeviceIDRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestDeviceIDRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestDeviceIDRequest;
    })();

    SdkProto.CreateTableRequest = (function() {

        /**
         * Properties of a CreateTableRequest.
         * @memberof SdkProto
         * @interface ICreateTableRequest
         * @property {string|null} [sid] CreateTableRequest sid
         * @property {string|null} [tableId] CreateTableRequest tableId
         * @property {string|null} [gps] CreateTableRequest gps
         */

        /**
         * Constructs a new CreateTableRequest.
         * @memberof SdkProto
         * @classdesc Represents a CreateTableRequest.
         * @implements ICreateTableRequest
         * @constructor
         * @param {SdkProto.ICreateTableRequest=} [properties] Properties to set
         */
        function CreateTableRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateTableRequest sid.
         * @member {string} sid
         * @memberof SdkProto.CreateTableRequest
         * @instance
         */
        CreateTableRequest.prototype.sid = "";

        /**
         * CreateTableRequest tableId.
         * @member {string} tableId
         * @memberof SdkProto.CreateTableRequest
         * @instance
         */
        CreateTableRequest.prototype.tableId = "";

        /**
         * CreateTableRequest gps.
         * @member {string} gps
         * @memberof SdkProto.CreateTableRequest
         * @instance
         */
        CreateTableRequest.prototype.gps = "";

        /**
         * Creates a new CreateTableRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {SdkProto.ICreateTableRequest=} [properties] Properties to set
         * @returns {SdkProto.CreateTableRequest} CreateTableRequest instance
         */
        CreateTableRequest.create = function create(properties) {
            return new CreateTableRequest(properties);
        };

        /**
         * Encodes the specified CreateTableRequest message. Does not implicitly {@link SdkProto.CreateTableRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {SdkProto.ICreateTableRequest} message CreateTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            if (message.gps != null && message.hasOwnProperty("gps"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gps);
            return writer;
        };

        /**
         * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link SdkProto.CreateTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {SdkProto.ICreateTableRequest} message CreateTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.CreateTableRequest} CreateTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.CreateTableRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.gps = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateTableRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.CreateTableRequest} CreateTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateTableRequest message.
         * @function verify
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateTableRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gps != null && message.hasOwnProperty("gps"))
                if (!$util.isString(message.gps))
                    return "gps: string expected";
            return null;
        };

        /**
         * Creates a CreateTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.CreateTableRequest} CreateTableRequest
         */
        CreateTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.CreateTableRequest)
                return object;
            var message = new $root.SdkProto.CreateTableRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gps != null)
                message.gps = String(object.gps);
            return message;
        };

        /**
         * Creates a plain object from a CreateTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.CreateTableRequest
         * @static
         * @param {SdkProto.CreateTableRequest} message CreateTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTableRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sid = "";
                object.tableId = "";
                object.gps = "";
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gps != null && message.hasOwnProperty("gps"))
                object.gps = message.gps;
            return object;
        };

        /**
         * Converts this CreateTableRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.CreateTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTableRequest;
    })();

    SdkProto.JoinTableRequest = (function() {

        /**
         * Properties of a JoinTableRequest.
         * @memberof SdkProto
         * @interface IJoinTableRequest
         * @property {string|null} [sid] JoinTableRequest sid
         * @property {string|null} [tableId] JoinTableRequest tableId
         * @property {string|null} [gps] JoinTableRequest gps
         */

        /**
         * Constructs a new JoinTableRequest.
         * @memberof SdkProto
         * @classdesc Represents a JoinTableRequest.
         * @implements IJoinTableRequest
         * @constructor
         * @param {SdkProto.IJoinTableRequest=} [properties] Properties to set
         */
        function JoinTableRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableRequest sid.
         * @member {string} sid
         * @memberof SdkProto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.sid = "";

        /**
         * JoinTableRequest tableId.
         * @member {string} tableId
         * @memberof SdkProto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.tableId = "";

        /**
         * JoinTableRequest gps.
         * @member {string} gps
         * @memberof SdkProto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.gps = "";

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {SdkProto.IJoinTableRequest=} [properties] Properties to set
         * @returns {SdkProto.JoinTableRequest} JoinTableRequest instance
         */
        JoinTableRequest.create = function create(properties) {
            return new JoinTableRequest(properties);
        };

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link SdkProto.JoinTableRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {SdkProto.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tableId);
            if (message.gps != null && message.hasOwnProperty("gps"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gps);
            return writer;
        };

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link SdkProto.JoinTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {SdkProto.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.JoinTableRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.tableId = reader.string();
                    break;
                case 3:
                    message.gps = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinTableRequest message.
         * @function verify
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gps != null && message.hasOwnProperty("gps"))
                if (!$util.isString(message.gps))
                    return "gps: string expected";
            return null;
        };

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.JoinTableRequest} JoinTableRequest
         */
        JoinTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.JoinTableRequest)
                return object;
            var message = new $root.SdkProto.JoinTableRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gps != null)
                message.gps = String(object.gps);
            return message;
        };

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.JoinTableRequest
         * @static
         * @param {SdkProto.JoinTableRequest} message JoinTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sid = "";
                object.tableId = "";
                object.gps = "";
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gps != null && message.hasOwnProperty("gps"))
                object.gps = message.gps;
            return object;
        };

        /**
         * Converts this JoinTableRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.JoinTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableRequest;
    })();

    SdkProto.UserReadyRequest = (function() {

        /**
         * Properties of a UserReadyRequest.
         * @memberof SdkProto
         * @interface IUserReadyRequest
         */

        /**
         * Constructs a new UserReadyRequest.
         * @memberof SdkProto
         * @classdesc Represents a UserReadyRequest.
         * @implements IUserReadyRequest
         * @constructor
         * @param {SdkProto.IUserReadyRequest=} [properties] Properties to set
         */
        function UserReadyRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserReadyRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {SdkProto.IUserReadyRequest=} [properties] Properties to set
         * @returns {SdkProto.UserReadyRequest} UserReadyRequest instance
         */
        UserReadyRequest.create = function create(properties) {
            return new UserReadyRequest(properties);
        };

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link SdkProto.UserReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {SdkProto.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link SdkProto.UserReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {SdkProto.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserReadyRequest} UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserReadyRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserReadyRequest} UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReadyRequest message.
         * @function verify
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReadyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserReadyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserReadyRequest} UserReadyRequest
         */
        UserReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserReadyRequest)
                return object;
            return new $root.SdkProto.UserReadyRequest();
        };

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserReadyRequest
         * @static
         * @param {SdkProto.UserReadyRequest} message UserReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserReadyRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.UserReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyRequest;
    })();

    SdkProto.DisCardRequest = (function() {

        /**
         * Properties of a DisCardRequest.
         * @memberof SdkProto
         * @interface IDisCardRequest
         * @property {Array.<number>|null} [outCard] DisCardRequest outCard
         */

        /**
         * Constructs a new DisCardRequest.
         * @memberof SdkProto
         * @classdesc Represents a DisCardRequest.
         * @implements IDisCardRequest
         * @constructor
         * @param {SdkProto.IDisCardRequest=} [properties] Properties to set
         */
        function DisCardRequest(properties) {
            this.outCard = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DisCardRequest outCard.
         * @member {Array.<number>} outCard
         * @memberof SdkProto.DisCardRequest
         * @instance
         */
        DisCardRequest.prototype.outCard = $util.emptyArray;

        /**
         * Creates a new DisCardRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {SdkProto.IDisCardRequest=} [properties] Properties to set
         * @returns {SdkProto.DisCardRequest} DisCardRequest instance
         */
        DisCardRequest.create = function create(properties) {
            return new DisCardRequest(properties);
        };

        /**
         * Encodes the specified DisCardRequest message. Does not implicitly {@link SdkProto.DisCardRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {SdkProto.IDisCardRequest} message DisCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisCardRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.outCard != null && message.outCard.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.outCard.length; ++i)
                    writer.int32(message.outCard[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified DisCardRequest message, length delimited. Does not implicitly {@link SdkProto.DisCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {SdkProto.IDisCardRequest} message DisCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.DisCardRequest} DisCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.DisCardRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.outCard && message.outCard.length))
                        message.outCard = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.outCard.push(reader.int32());
                    } else
                        message.outCard.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DisCardRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.DisCardRequest} DisCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisCardRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DisCardRequest message.
         * @function verify
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DisCardRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.outCard != null && message.hasOwnProperty("outCard")) {
                if (!Array.isArray(message.outCard))
                    return "outCard: array expected";
                for (var i = 0; i < message.outCard.length; ++i)
                    if (!$util.isInteger(message.outCard[i]))
                        return "outCard: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a DisCardRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.DisCardRequest} DisCardRequest
         */
        DisCardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.DisCardRequest)
                return object;
            var message = new $root.SdkProto.DisCardRequest();
            if (object.outCard) {
                if (!Array.isArray(object.outCard))
                    throw TypeError(".SdkProto.DisCardRequest.outCard: array expected");
                message.outCard = [];
                for (var i = 0; i < object.outCard.length; ++i)
                    message.outCard[i] = object.outCard[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DisCardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.DisCardRequest
         * @static
         * @param {SdkProto.DisCardRequest} message DisCardRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DisCardRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.outCard = [];
            if (message.outCard && message.outCard.length) {
                object.outCard = [];
                for (var j = 0; j < message.outCard.length; ++j)
                    object.outCard[j] = message.outCard[j];
            }
            return object;
        };

        /**
         * Converts this DisCardRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.DisCardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisCardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DisCardRequest;
    })();

    SdkProto.PassPaiRequest = (function() {

        /**
         * Properties of a PassPaiRequest.
         * @memberof SdkProto
         * @interface IPassPaiRequest
         */

        /**
         * Constructs a new PassPaiRequest.
         * @memberof SdkProto
         * @classdesc Represents a PassPaiRequest.
         * @implements IPassPaiRequest
         * @constructor
         * @param {SdkProto.IPassPaiRequest=} [properties] Properties to set
         */
        function PassPaiRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PassPaiRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {SdkProto.IPassPaiRequest=} [properties] Properties to set
         * @returns {SdkProto.PassPaiRequest} PassPaiRequest instance
         */
        PassPaiRequest.create = function create(properties) {
            return new PassPaiRequest(properties);
        };

        /**
         * Encodes the specified PassPaiRequest message. Does not implicitly {@link SdkProto.PassPaiRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {SdkProto.IPassPaiRequest} message PassPaiRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassPaiRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PassPaiRequest message, length delimited. Does not implicitly {@link SdkProto.PassPaiRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {SdkProto.IPassPaiRequest} message PassPaiRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassPaiRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PassPaiRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.PassPaiRequest} PassPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassPaiRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.PassPaiRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PassPaiRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.PassPaiRequest} PassPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassPaiRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PassPaiRequest message.
         * @function verify
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PassPaiRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PassPaiRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.PassPaiRequest} PassPaiRequest
         */
        PassPaiRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.PassPaiRequest)
                return object;
            return new $root.SdkProto.PassPaiRequest();
        };

        /**
         * Creates a plain object from a PassPaiRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.PassPaiRequest
         * @static
         * @param {SdkProto.PassPaiRequest} message PassPaiRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PassPaiRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PassPaiRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.PassPaiRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PassPaiRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PassPaiRequest;
    })();

    SdkProto.UserQDZRequest = (function() {

        /**
         * Properties of a UserQDZRequest.
         * @memberof SdkProto
         * @interface IUserQDZRequest
         * @property {number|null} [score] UserQDZRequest score
         */

        /**
         * Constructs a new UserQDZRequest.
         * @memberof SdkProto
         * @classdesc Represents a UserQDZRequest.
         * @implements IUserQDZRequest
         * @constructor
         * @param {SdkProto.IUserQDZRequest=} [properties] Properties to set
         */
        function UserQDZRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserQDZRequest score.
         * @member {number} score
         * @memberof SdkProto.UserQDZRequest
         * @instance
         */
        UserQDZRequest.prototype.score = 0;

        /**
         * Creates a new UserQDZRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {SdkProto.IUserQDZRequest=} [properties] Properties to set
         * @returns {SdkProto.UserQDZRequest} UserQDZRequest instance
         */
        UserQDZRequest.create = function create(properties) {
            return new UserQDZRequest(properties);
        };

        /**
         * Encodes the specified UserQDZRequest message. Does not implicitly {@link SdkProto.UserQDZRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {SdkProto.IUserQDZRequest} message UserQDZRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQDZRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.score);
            return writer;
        };

        /**
         * Encodes the specified UserQDZRequest message, length delimited. Does not implicitly {@link SdkProto.UserQDZRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {SdkProto.IUserQDZRequest} message UserQDZRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQDZRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQDZRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserQDZRequest} UserQDZRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQDZRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserQDZRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserQDZRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserQDZRequest} UserQDZRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQDZRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserQDZRequest message.
         * @function verify
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserQDZRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            return null;
        };

        /**
         * Creates a UserQDZRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserQDZRequest} UserQDZRequest
         */
        UserQDZRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserQDZRequest)
                return object;
            var message = new $root.SdkProto.UserQDZRequest();
            if (object.score != null)
                message.score = object.score | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserQDZRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserQDZRequest
         * @static
         * @param {SdkProto.UserQDZRequest} message UserQDZRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQDZRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.score = 0;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            return object;
        };

        /**
         * Converts this UserQDZRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.UserQDZRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQDZRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQDZRequest;
    })();

    SdkProto.UserMPRequest = (function() {

        /**
         * Properties of a UserMPRequest.
         * @memberof SdkProto
         * @interface IUserMPRequest
         * @property {number|null} [showAll] UserMPRequest showAll
         */

        /**
         * Constructs a new UserMPRequest.
         * @memberof SdkProto
         * @classdesc Represents a UserMPRequest.
         * @implements IUserMPRequest
         * @constructor
         * @param {SdkProto.IUserMPRequest=} [properties] Properties to set
         */
        function UserMPRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMPRequest showAll.
         * @member {number} showAll
         * @memberof SdkProto.UserMPRequest
         * @instance
         */
        UserMPRequest.prototype.showAll = 0;

        /**
         * Creates a new UserMPRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {SdkProto.IUserMPRequest=} [properties] Properties to set
         * @returns {SdkProto.UserMPRequest} UserMPRequest instance
         */
        UserMPRequest.create = function create(properties) {
            return new UserMPRequest(properties);
        };

        /**
         * Encodes the specified UserMPRequest message. Does not implicitly {@link SdkProto.UserMPRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {SdkProto.IUserMPRequest} message UserMPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMPRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.showAll != null && message.hasOwnProperty("showAll"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.showAll);
            return writer;
        };

        /**
         * Encodes the specified UserMPRequest message, length delimited. Does not implicitly {@link SdkProto.UserMPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {SdkProto.IUserMPRequest} message UserMPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserMPRequest} UserMPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserMPRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.showAll = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMPRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserMPRequest} UserMPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMPRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMPRequest message.
         * @function verify
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMPRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.showAll != null && message.hasOwnProperty("showAll"))
                if (!$util.isInteger(message.showAll))
                    return "showAll: integer expected";
            return null;
        };

        /**
         * Creates a UserMPRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserMPRequest} UserMPRequest
         */
        UserMPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserMPRequest)
                return object;
            var message = new $root.SdkProto.UserMPRequest();
            if (object.showAll != null)
                message.showAll = object.showAll | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserMPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserMPRequest
         * @static
         * @param {SdkProto.UserMPRequest} message UserMPRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMPRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.showAll = 0;
            if (message.showAll != null && message.hasOwnProperty("showAll"))
                object.showAll = message.showAll;
            return object;
        };

        /**
         * Converts this UserMPRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.UserMPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMPRequest;
    })();

    SdkProto.UserReconnectRequest = (function() {

        /**
         * Properties of a UserReconnectRequest.
         * @memberof SdkProto
         * @interface IUserReconnectRequest
         * @property {number|null} [userId] UserReconnectRequest userId
         */

        /**
         * Constructs a new UserReconnectRequest.
         * @memberof SdkProto
         * @classdesc Represents a UserReconnectRequest.
         * @implements IUserReconnectRequest
         * @constructor
         * @param {SdkProto.IUserReconnectRequest=} [properties] Properties to set
         */
        function UserReconnectRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReconnectRequest userId.
         * @member {number} userId
         * @memberof SdkProto.UserReconnectRequest
         * @instance
         */
        UserReconnectRequest.prototype.userId = 0;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {SdkProto.IUserReconnectRequest=} [properties] Properties to set
         * @returns {SdkProto.UserReconnectRequest} UserReconnectRequest instance
         */
        UserReconnectRequest.create = function create(properties) {
            return new UserReconnectRequest(properties);
        };

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link SdkProto.UserReconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {SdkProto.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link SdkProto.UserReconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {SdkProto.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserReconnectRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReconnectRequest message.
         * @function verify
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReconnectRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a UserReconnectRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserReconnectRequest} UserReconnectRequest
         */
        UserReconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserReconnectRequest)
                return object;
            var message = new $root.SdkProto.UserReconnectRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserReconnectRequest
         * @static
         * @param {SdkProto.UserReconnectRequest} message UserReconnectRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReconnectRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this UserReconnectRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.UserReconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectRequest;
    })();

    SdkProto.ApplyDismissRequest = (function() {

        /**
         * Properties of an ApplyDismissRequest.
         * @memberof SdkProto
         * @interface IApplyDismissRequest
         */

        /**
         * Constructs a new ApplyDismissRequest.
         * @memberof SdkProto
         * @classdesc Represents an ApplyDismissRequest.
         * @implements IApplyDismissRequest
         * @constructor
         * @param {SdkProto.IApplyDismissRequest=} [properties] Properties to set
         */
        function ApplyDismissRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ApplyDismissRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {SdkProto.IApplyDismissRequest=} [properties] Properties to set
         * @returns {SdkProto.ApplyDismissRequest} ApplyDismissRequest instance
         */
        ApplyDismissRequest.create = function create(properties) {
            return new ApplyDismissRequest(properties);
        };

        /**
         * Encodes the specified ApplyDismissRequest message. Does not implicitly {@link SdkProto.ApplyDismissRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {SdkProto.IApplyDismissRequest} message ApplyDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ApplyDismissRequest message, length delimited. Does not implicitly {@link SdkProto.ApplyDismissRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {SdkProto.IApplyDismissRequest} message ApplyDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDismissRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.ApplyDismissRequest} ApplyDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.ApplyDismissRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApplyDismissRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.ApplyDismissRequest} ApplyDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyDismissRequest message.
         * @function verify
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyDismissRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ApplyDismissRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.ApplyDismissRequest} ApplyDismissRequest
         */
        ApplyDismissRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.ApplyDismissRequest)
                return object;
            return new $root.SdkProto.ApplyDismissRequest();
        };

        /**
         * Creates a plain object from an ApplyDismissRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.ApplyDismissRequest
         * @static
         * @param {SdkProto.ApplyDismissRequest} message ApplyDismissRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDismissRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ApplyDismissRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.ApplyDismissRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDismissRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApplyDismissRequest;
    })();

    SdkProto.AgreeDismissRequest = (function() {

        /**
         * Properties of an AgreeDismissRequest.
         * @memberof SdkProto
         * @interface IAgreeDismissRequest
         * @property {number|null} [agree] AgreeDismissRequest agree
         */

        /**
         * Constructs a new AgreeDismissRequest.
         * @memberof SdkProto
         * @classdesc Represents an AgreeDismissRequest.
         * @implements IAgreeDismissRequest
         * @constructor
         * @param {SdkProto.IAgreeDismissRequest=} [properties] Properties to set
         */
        function AgreeDismissRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgreeDismissRequest agree.
         * @member {number} agree
         * @memberof SdkProto.AgreeDismissRequest
         * @instance
         */
        AgreeDismissRequest.prototype.agree = 0;

        /**
         * Creates a new AgreeDismissRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {SdkProto.IAgreeDismissRequest=} [properties] Properties to set
         * @returns {SdkProto.AgreeDismissRequest} AgreeDismissRequest instance
         */
        AgreeDismissRequest.create = function create(properties) {
            return new AgreeDismissRequest(properties);
        };

        /**
         * Encodes the specified AgreeDismissRequest message. Does not implicitly {@link SdkProto.AgreeDismissRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {SdkProto.IAgreeDismissRequest} message AgreeDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeDismissRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agree != null && message.hasOwnProperty("agree"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.agree);
            return writer;
        };

        /**
         * Encodes the specified AgreeDismissRequest message, length delimited. Does not implicitly {@link SdkProto.AgreeDismissRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {SdkProto.IAgreeDismissRequest} message AgreeDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeDismissRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgreeDismissRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.AgreeDismissRequest} AgreeDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeDismissRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.AgreeDismissRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.agree = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgreeDismissRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.AgreeDismissRequest} AgreeDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeDismissRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgreeDismissRequest message.
         * @function verify
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgreeDismissRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agree != null && message.hasOwnProperty("agree"))
                if (!$util.isInteger(message.agree))
                    return "agree: integer expected";
            return null;
        };

        /**
         * Creates an AgreeDismissRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.AgreeDismissRequest} AgreeDismissRequest
         */
        AgreeDismissRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.AgreeDismissRequest)
                return object;
            var message = new $root.SdkProto.AgreeDismissRequest();
            if (object.agree != null)
                message.agree = object.agree | 0;
            return message;
        };

        /**
         * Creates a plain object from an AgreeDismissRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.AgreeDismissRequest
         * @static
         * @param {SdkProto.AgreeDismissRequest} message AgreeDismissRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgreeDismissRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.agree = 0;
            if (message.agree != null && message.hasOwnProperty("agree"))
                object.agree = message.agree;
            return object;
        };

        /**
         * Converts this AgreeDismissRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.AgreeDismissRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgreeDismissRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AgreeDismissRequest;
    })();

    SdkProto.UserQuitRequest = (function() {

        /**
         * Properties of a UserQuitRequest.
         * @memberof SdkProto
         * @interface IUserQuitRequest
         */

        /**
         * Constructs a new UserQuitRequest.
         * @memberof SdkProto
         * @classdesc Represents a UserQuitRequest.
         * @implements IUserQuitRequest
         * @constructor
         * @param {SdkProto.IUserQuitRequest=} [properties] Properties to set
         */
        function UserQuitRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserQuitRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {SdkProto.IUserQuitRequest=} [properties] Properties to set
         * @returns {SdkProto.UserQuitRequest} UserQuitRequest instance
         */
        UserQuitRequest.create = function create(properties) {
            return new UserQuitRequest(properties);
        };

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link SdkProto.UserQuitRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {SdkProto.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link SdkProto.UserQuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {SdkProto.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserQuitRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserQuitRequest message.
         * @function verify
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserQuitRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserQuitRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserQuitRequest} UserQuitRequest
         */
        UserQuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserQuitRequest)
                return object;
            return new $root.SdkProto.UserQuitRequest();
        };

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserQuitRequest
         * @static
         * @param {SdkProto.UserQuitRequest} message UserQuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserQuitRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.UserQuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitRequest;
    })();

    SdkProto.MessageRequest = (function() {

        /**
         * Properties of a MessageRequest.
         * @memberof SdkProto
         * @interface IMessageRequest
         * @property {string|null} [content] MessageRequest content
         * @property {number|null} [toUserId] MessageRequest toUserId
         */

        /**
         * Constructs a new MessageRequest.
         * @memberof SdkProto
         * @classdesc Represents a MessageRequest.
         * @implements IMessageRequest
         * @constructor
         * @param {SdkProto.IMessageRequest=} [properties] Properties to set
         */
        function MessageRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageRequest content.
         * @member {string} content
         * @memberof SdkProto.MessageRequest
         * @instance
         */
        MessageRequest.prototype.content = "";

        /**
         * MessageRequest toUserId.
         * @member {number} toUserId
         * @memberof SdkProto.MessageRequest
         * @instance
         */
        MessageRequest.prototype.toUserId = 0;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {SdkProto.IMessageRequest=} [properties] Properties to set
         * @returns {SdkProto.MessageRequest} MessageRequest instance
         */
        MessageRequest.create = function create(properties) {
            return new MessageRequest(properties);
        };

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link SdkProto.MessageRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {SdkProto.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toUserId);
            return writer;
        };

        /**
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link SdkProto.MessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {SdkProto.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.MessageRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.toUserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageRequest message.
         * @function verify
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                if (!$util.isInteger(message.toUserId))
                    return "toUserId: integer expected";
            return null;
        };

        /**
         * Creates a MessageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.MessageRequest} MessageRequest
         */
        MessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.MessageRequest)
                return object;
            var message = new $root.SdkProto.MessageRequest();
            if (object.content != null)
                message.content = String(object.content);
            if (object.toUserId != null)
                message.toUserId = object.toUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.MessageRequest
         * @static
         * @param {SdkProto.MessageRequest} message MessageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.toUserId = 0;
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                object.toUserId = message.toUserId;
            return object;
        };

        /**
         * Converts this MessageRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.MessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageRequest;
    })();

    SdkProto.UserOnBackRequest = (function() {

        /**
         * Properties of a UserOnBackRequest.
         * @memberof SdkProto
         * @interface IUserOnBackRequest
         * @property {number|null} [leaveState] UserOnBackRequest leaveState
         */

        /**
         * Constructs a new UserOnBackRequest.
         * @memberof SdkProto
         * @classdesc Represents a UserOnBackRequest.
         * @implements IUserOnBackRequest
         * @constructor
         * @param {SdkProto.IUserOnBackRequest=} [properties] Properties to set
         */
        function UserOnBackRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOnBackRequest leaveState.
         * @member {number} leaveState
         * @memberof SdkProto.UserOnBackRequest
         * @instance
         */
        UserOnBackRequest.prototype.leaveState = 0;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {SdkProto.IUserOnBackRequest=} [properties] Properties to set
         * @returns {SdkProto.UserOnBackRequest} UserOnBackRequest instance
         */
        UserOnBackRequest.create = function create(properties) {
            return new UserOnBackRequest(properties);
        };

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link SdkProto.UserOnBackRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {SdkProto.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.leaveState);
            return writer;
        };

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link SdkProto.UserOnBackRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {SdkProto.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserOnBackRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.leaveState = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOnBackRequest message.
         * @function verify
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOnBackRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                if (!$util.isInteger(message.leaveState))
                    return "leaveState: integer expected";
            return null;
        };

        /**
         * Creates a UserOnBackRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserOnBackRequest} UserOnBackRequest
         */
        UserOnBackRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserOnBackRequest)
                return object;
            var message = new $root.SdkProto.UserOnBackRequest();
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserOnBackRequest
         * @static
         * @param {SdkProto.UserOnBackRequest} message UserOnBackRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOnBackRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.leaveState = 0;
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                object.leaveState = message.leaveState;
            return object;
        };

        /**
         * Converts this UserOnBackRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.UserOnBackRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOnBackRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserOnBackRequest;
    })();

    SdkProto.DelayCheckRequest = (function() {

        /**
         * Properties of a DelayCheckRequest.
         * @memberof SdkProto
         * @interface IDelayCheckRequest
         * @property {string|null} [content] DelayCheckRequest content
         */

        /**
         * Constructs a new DelayCheckRequest.
         * @memberof SdkProto
         * @classdesc Represents a DelayCheckRequest.
         * @implements IDelayCheckRequest
         * @constructor
         * @param {SdkProto.IDelayCheckRequest=} [properties] Properties to set
         */
        function DelayCheckRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelayCheckRequest content.
         * @member {string} content
         * @memberof SdkProto.DelayCheckRequest
         * @instance
         */
        DelayCheckRequest.prototype.content = "";

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {SdkProto.IDelayCheckRequest=} [properties] Properties to set
         * @returns {SdkProto.DelayCheckRequest} DelayCheckRequest instance
         */
        DelayCheckRequest.create = function create(properties) {
            return new DelayCheckRequest(properties);
        };

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link SdkProto.DelayCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {SdkProto.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link SdkProto.DelayCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {SdkProto.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.DelayCheckRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelayCheckRequest message.
         * @function verify
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelayCheckRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a DelayCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.DelayCheckRequest} DelayCheckRequest
         */
        DelayCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.DelayCheckRequest)
                return object;
            var message = new $root.SdkProto.DelayCheckRequest();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.DelayCheckRequest
         * @static
         * @param {SdkProto.DelayCheckRequest} message DelayCheckRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelayCheckRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this DelayCheckRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.DelayCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckRequest;
    })();

    SdkProto.CancelAutoRequest = (function() {

        /**
         * Properties of a CancelAutoRequest.
         * @memberof SdkProto
         * @interface ICancelAutoRequest
         */

        /**
         * Constructs a new CancelAutoRequest.
         * @memberof SdkProto
         * @classdesc Represents a CancelAutoRequest.
         * @implements ICancelAutoRequest
         * @constructor
         * @param {SdkProto.ICancelAutoRequest=} [properties] Properties to set
         */
        function CancelAutoRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CancelAutoRequest instance using the specified properties.
         * @function create
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {SdkProto.ICancelAutoRequest=} [properties] Properties to set
         * @returns {SdkProto.CancelAutoRequest} CancelAutoRequest instance
         */
        CancelAutoRequest.create = function create(properties) {
            return new CancelAutoRequest(properties);
        };

        /**
         * Encodes the specified CancelAutoRequest message. Does not implicitly {@link SdkProto.CancelAutoRequest.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {SdkProto.ICancelAutoRequest} message CancelAutoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelAutoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelAutoRequest message, length delimited. Does not implicitly {@link SdkProto.CancelAutoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {SdkProto.ICancelAutoRequest} message CancelAutoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelAutoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelAutoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.CancelAutoRequest} CancelAutoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelAutoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.CancelAutoRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelAutoRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.CancelAutoRequest} CancelAutoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelAutoRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelAutoRequest message.
         * @function verify
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelAutoRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CancelAutoRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.CancelAutoRequest} CancelAutoRequest
         */
        CancelAutoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.CancelAutoRequest)
                return object;
            return new $root.SdkProto.CancelAutoRequest();
        };

        /**
         * Creates a plain object from a CancelAutoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.CancelAutoRequest
         * @static
         * @param {SdkProto.CancelAutoRequest} message CancelAutoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelAutoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CancelAutoRequest to JSON.
         * @function toJSON
         * @memberof SdkProto.CancelAutoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelAutoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelAutoRequest;
    })();

    SdkProto.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof SdkProto
         * @interface IRequest
         * @property {SdkProto.Request.CMD|null} [cmd] Request cmd
         * @property {SdkProto.ILoginRequest|null} [loginRequest] Request loginRequest
         * @property {SdkProto.IRegisterPhoneRequest|null} [registerPhone] Request registerPhone
         * @property {SdkProto.IGetUserInfoRequest|null} [getUserInfoRequest] Request getUserInfoRequest
         * @property {SdkProto.ICoinBankRequest|null} [coinBankRequest] Request coinBankRequest
         * @property {SdkProto.IChangeSignRequest|null} [changeSignRequest] Request changeSignRequest
         * @property {SdkProto.ITestDeviceIDRequest|null} [testDeviceIDRequest] Request testDeviceIDRequest
         * @property {SdkProto.IUserMPRequest|null} [userMPRequest] Request userMPRequest
         * @property {SdkProto.IPassPaiRequest|null} [passPaiRequest] Request passPaiRequest
         * @property {SdkProto.IUserReconnectRequest|null} [userReconnectRequest] Request userReconnectRequest
         * @property {SdkProto.IApplyDismissRequest|null} [applyDismissRequest] Request applyDismissRequest
         * @property {SdkProto.IAgreeDismissRequest|null} [agreeDismissRequest] Request agreeDismissRequest
         * @property {SdkProto.IUserQuitRequest|null} [userQuitRequest] Request userQuitRequest
         * @property {SdkProto.IMessageRequest|null} [messageRequest] Request messageRequest
         * @property {SdkProto.IUserOnBackRequest|null} [userOnBackRequest] Request userOnBackRequest
         * @property {SdkProto.IDelayCheckRequest|null} [delayCheckRequest] Request delayCheckRequest
         * @property {SdkProto.ICancelAutoRequest|null} [cancelAutoRequest] Request cancelAutoRequest
         */

        /**
         * Constructs a new Request.
         * @memberof SdkProto
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {SdkProto.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {SdkProto.Request.CMD} cmd
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request loginRequest.
         * @member {SdkProto.ILoginRequest|null|undefined} loginRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.loginRequest = null;

        /**
         * Request registerPhone.
         * @member {SdkProto.IRegisterPhoneRequest|null|undefined} registerPhone
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.registerPhone = null;

        /**
         * Request getUserInfoRequest.
         * @member {SdkProto.IGetUserInfoRequest|null|undefined} getUserInfoRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.getUserInfoRequest = null;

        /**
         * Request coinBankRequest.
         * @member {SdkProto.ICoinBankRequest|null|undefined} coinBankRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.coinBankRequest = null;

        /**
         * Request changeSignRequest.
         * @member {SdkProto.IChangeSignRequest|null|undefined} changeSignRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.changeSignRequest = null;

        /**
         * Request testDeviceIDRequest.
         * @member {SdkProto.ITestDeviceIDRequest|null|undefined} testDeviceIDRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.testDeviceIDRequest = null;

        /**
         * Request userMPRequest.
         * @member {SdkProto.IUserMPRequest|null|undefined} userMPRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.userMPRequest = null;

        /**
         * Request passPaiRequest.
         * @member {SdkProto.IPassPaiRequest|null|undefined} passPaiRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.passPaiRequest = null;

        /**
         * Request userReconnectRequest.
         * @member {SdkProto.IUserReconnectRequest|null|undefined} userReconnectRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.userReconnectRequest = null;

        /**
         * Request applyDismissRequest.
         * @member {SdkProto.IApplyDismissRequest|null|undefined} applyDismissRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.applyDismissRequest = null;

        /**
         * Request agreeDismissRequest.
         * @member {SdkProto.IAgreeDismissRequest|null|undefined} agreeDismissRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.agreeDismissRequest = null;

        /**
         * Request userQuitRequest.
         * @member {SdkProto.IUserQuitRequest|null|undefined} userQuitRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.userQuitRequest = null;

        /**
         * Request messageRequest.
         * @member {SdkProto.IMessageRequest|null|undefined} messageRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.messageRequest = null;

        /**
         * Request userOnBackRequest.
         * @member {SdkProto.IUserOnBackRequest|null|undefined} userOnBackRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.userOnBackRequest = null;

        /**
         * Request delayCheckRequest.
         * @member {SdkProto.IDelayCheckRequest|null|undefined} delayCheckRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.delayCheckRequest = null;

        /**
         * Request cancelAutoRequest.
         * @member {SdkProto.ICancelAutoRequest|null|undefined} cancelAutoRequest
         * @memberof SdkProto.Request
         * @instance
         */
        Request.prototype.cancelAutoRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof SdkProto.Request
         * @static
         * @param {SdkProto.IRequest=} [properties] Properties to set
         * @returns {SdkProto.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link SdkProto.Request.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.Request
         * @static
         * @param {SdkProto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                $root.SdkProto.LoginRequest.encode(message.loginRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.registerPhone != null && message.hasOwnProperty("registerPhone"))
                $root.SdkProto.RegisterPhoneRequest.encode(message.registerPhone, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.getUserInfoRequest != null && message.hasOwnProperty("getUserInfoRequest"))
                $root.SdkProto.GetUserInfoRequest.encode(message.getUserInfoRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.coinBankRequest != null && message.hasOwnProperty("coinBankRequest"))
                $root.SdkProto.CoinBankRequest.encode(message.coinBankRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.changeSignRequest != null && message.hasOwnProperty("changeSignRequest"))
                $root.SdkProto.ChangeSignRequest.encode(message.changeSignRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.testDeviceIDRequest != null && message.hasOwnProperty("testDeviceIDRequest"))
                $root.SdkProto.TestDeviceIDRequest.encode(message.testDeviceIDRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.userMPRequest != null && message.hasOwnProperty("userMPRequest"))
                $root.SdkProto.UserMPRequest.encode(message.userMPRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.passPaiRequest != null && message.hasOwnProperty("passPaiRequest"))
                $root.SdkProto.PassPaiRequest.encode(message.passPaiRequest, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                $root.SdkProto.UserReconnectRequest.encode(message.userReconnectRequest, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.applyDismissRequest != null && message.hasOwnProperty("applyDismissRequest"))
                $root.SdkProto.ApplyDismissRequest.encode(message.applyDismissRequest, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.agreeDismissRequest != null && message.hasOwnProperty("agreeDismissRequest"))
                $root.SdkProto.AgreeDismissRequest.encode(message.agreeDismissRequest, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                $root.SdkProto.UserQuitRequest.encode(message.userQuitRequest, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                $root.SdkProto.MessageRequest.encode(message.messageRequest, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                $root.SdkProto.UserOnBackRequest.encode(message.userOnBackRequest, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                $root.SdkProto.DelayCheckRequest.encode(message.delayCheckRequest, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.cancelAutoRequest != null && message.hasOwnProperty("cancelAutoRequest"))
                $root.SdkProto.CancelAutoRequest.encode(message.cancelAutoRequest, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link SdkProto.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.Request
         * @static
         * @param {SdkProto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.loginRequest = $root.SdkProto.LoginRequest.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.registerPhone = $root.SdkProto.RegisterPhoneRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.getUserInfoRequest = $root.SdkProto.GetUserInfoRequest.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.coinBankRequest = $root.SdkProto.CoinBankRequest.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.changeSignRequest = $root.SdkProto.ChangeSignRequest.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.testDeviceIDRequest = $root.SdkProto.TestDeviceIDRequest.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userMPRequest = $root.SdkProto.UserMPRequest.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.passPaiRequest = $root.SdkProto.PassPaiRequest.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.userReconnectRequest = $root.SdkProto.UserReconnectRequest.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.applyDismissRequest = $root.SdkProto.ApplyDismissRequest.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.agreeDismissRequest = $root.SdkProto.AgreeDismissRequest.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.userQuitRequest = $root.SdkProto.UserQuitRequest.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.messageRequest = $root.SdkProto.MessageRequest.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.userOnBackRequest = $root.SdkProto.UserOnBackRequest.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.delayCheckRequest = $root.SdkProto.DelayCheckRequest.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.cancelAutoRequest = $root.SdkProto.CancelAutoRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof SdkProto.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 2000:
                case 2002:
                case 2003:
                case 2004:
                case 2005:
                case 2006:
                case 2007:
                case 2009:
                case 2010:
                case 2011:
                case 2022:
                case 2023:
                case 2030:
                case 2035:
                case 2031:
                case 2040:
                case 2041:
                case 2042:
                case 2043:
                case 2047:
                case 2044:
                case 2045:
                case 2060:
                case 2061:
                case 2062:
                case 2080:
                case 2081:
                case 2015:
                case 2100:
                case 2101:
                case 2102:
                case 2200:
                case 2201:
                case 2202:
                case 2017:
                case 2071:
                case 2083:
                case 20012:
                case 20013:
                case 20010:
                case 2046:
                case 21002:
                case 20015:
                case 21003:
                case 10000:
                    break;
                }
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
                var error = $root.SdkProto.LoginRequest.verify(message.loginRequest);
                if (error)
                    return "loginRequest." + error;
            }
            if (message.registerPhone != null && message.hasOwnProperty("registerPhone")) {
                var error = $root.SdkProto.RegisterPhoneRequest.verify(message.registerPhone);
                if (error)
                    return "registerPhone." + error;
            }
            if (message.getUserInfoRequest != null && message.hasOwnProperty("getUserInfoRequest")) {
                var error = $root.SdkProto.GetUserInfoRequest.verify(message.getUserInfoRequest);
                if (error)
                    return "getUserInfoRequest." + error;
            }
            if (message.coinBankRequest != null && message.hasOwnProperty("coinBankRequest")) {
                var error = $root.SdkProto.CoinBankRequest.verify(message.coinBankRequest);
                if (error)
                    return "coinBankRequest." + error;
            }
            if (message.changeSignRequest != null && message.hasOwnProperty("changeSignRequest")) {
                var error = $root.SdkProto.ChangeSignRequest.verify(message.changeSignRequest);
                if (error)
                    return "changeSignRequest." + error;
            }
            if (message.testDeviceIDRequest != null && message.hasOwnProperty("testDeviceIDRequest")) {
                var error = $root.SdkProto.TestDeviceIDRequest.verify(message.testDeviceIDRequest);
                if (error)
                    return "testDeviceIDRequest." + error;
            }
            if (message.userMPRequest != null && message.hasOwnProperty("userMPRequest")) {
                var error = $root.SdkProto.UserMPRequest.verify(message.userMPRequest);
                if (error)
                    return "userMPRequest." + error;
            }
            if (message.passPaiRequest != null && message.hasOwnProperty("passPaiRequest")) {
                var error = $root.SdkProto.PassPaiRequest.verify(message.passPaiRequest);
                if (error)
                    return "passPaiRequest." + error;
            }
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest")) {
                var error = $root.SdkProto.UserReconnectRequest.verify(message.userReconnectRequest);
                if (error)
                    return "userReconnectRequest." + error;
            }
            if (message.applyDismissRequest != null && message.hasOwnProperty("applyDismissRequest")) {
                var error = $root.SdkProto.ApplyDismissRequest.verify(message.applyDismissRequest);
                if (error)
                    return "applyDismissRequest." + error;
            }
            if (message.agreeDismissRequest != null && message.hasOwnProperty("agreeDismissRequest")) {
                var error = $root.SdkProto.AgreeDismissRequest.verify(message.agreeDismissRequest);
                if (error)
                    return "agreeDismissRequest." + error;
            }
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest")) {
                var error = $root.SdkProto.UserQuitRequest.verify(message.userQuitRequest);
                if (error)
                    return "userQuitRequest." + error;
            }
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest")) {
                var error = $root.SdkProto.MessageRequest.verify(message.messageRequest);
                if (error)
                    return "messageRequest." + error;
            }
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest")) {
                var error = $root.SdkProto.UserOnBackRequest.verify(message.userOnBackRequest);
                if (error)
                    return "userOnBackRequest." + error;
            }
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest")) {
                var error = $root.SdkProto.DelayCheckRequest.verify(message.delayCheckRequest);
                if (error)
                    return "delayCheckRequest." + error;
            }
            if (message.cancelAutoRequest != null && message.hasOwnProperty("cancelAutoRequest")) {
                var error = $root.SdkProto.CancelAutoRequest.verify(message.cancelAutoRequest);
                if (error)
                    return "cancelAutoRequest." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.Request)
                return object;
            var message = new $root.SdkProto.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "Login":
            case 2000:
                message.cmd = 2000;
                break;
            case "RegisterPhone":
            case 2002:
                message.cmd = 2002;
                break;
            case "GetUserInfo":
            case 2003:
                message.cmd = 2003;
                break;
            case "CoinBank":
            case 2004:
                message.cmd = 2004;
                break;
            case "ChangeSign":
            case 2005:
                message.cmd = 2005;
                break;
            case "TestDeviceID":
            case 2006:
                message.cmd = 2006;
                break;
            case "SEND_USER_READY":
            case 2007:
                message.cmd = 2007;
                break;
            case "SEND_CARDS":
            case 2009:
                message.cmd = 2009;
                break;
            case "DIS_CARD":
            case 2010:
                message.cmd = 2010;
                break;
            case "SEND_DIS_CARD":
            case 2011:
                message.cmd = 2011;
                break;
            case "PASS_PAI":
            case 2022:
                message.cmd = 2022;
                break;
            case "SEND_PASS_PAI":
            case 2023:
                message.cmd = 2023;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "APPLY_DISMISS":
            case 2040:
                message.cmd = 2040;
                break;
            case "SEND_APPLY_DISMISS":
            case 2041:
                message.cmd = 2041;
                break;
            case "AGREE_DISMISS":
            case 2042:
                message.cmd = 2042;
                break;
            case "SEND_AGREE_DISMISS":
            case 2043:
                message.cmd = 2043;
                break;
            case "SEND_DISMISS_RESULT":
            case 2047:
                message.cmd = 2047;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "SEND_USER_QUIT":
            case 2045:
                message.cmd = 2045;
                break;
            case "MESSAGE":
            case 2060:
                message.cmd = 2060;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "SEND_COIN_REFRESH":
            case 2062:
                message.cmd = 2062;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_ROUND_RECORD":
            case 2015:
                message.cmd = 2015;
                break;
            case "USER_QDZ":
            case 2100:
                message.cmd = 2100;
                break;
            case "SEND_USER_QDZ":
            case 2101:
                message.cmd = 2101;
                break;
            case "SEND_USER_QDZ2":
            case 2102:
                message.cmd = 2102;
                break;
            case "USER_MP":
            case 2200:
                message.cmd = 2200;
                break;
            case "SEND_USER_MP":
            case 2201:
                message.cmd = 2201;
                break;
            case "SEND_USER_MP2":
            case 2202:
                message.cmd = 2202;
                break;
            case "SEND_GAME_OVER":
            case 2017:
                message.cmd = 2017;
                break;
            case "SEND_DIAMOND_CHANGE":
            case 2071:
                message.cmd = 2071;
                break;
            case "USER_DAO_RECORD":
            case 2083:
                message.cmd = 2083;
                break;
            case "CANCEL_AUTO":
            case 20012:
                message.cmd = 20012;
                break;
            case "SEND_CANCEL_AUTO":
            case 20013:
                message.cmd = 20013;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "Get_User_Info":
            case 2046:
                message.cmd = 2046;
                break;
            case "SEND_NOTICE_CLIENT_DISMISS":
            case 21002:
                message.cmd = 21002;
                break;
            case "SEND_REMAIN_TIME":
            case 20015:
                message.cmd = 20015;
                break;
            case "SEND_USERQUIT_BY_ADMIN":
            case 21003:
                message.cmd = 21003;
                break;
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            }
            if (object.loginRequest != null) {
                if (typeof object.loginRequest !== "object")
                    throw TypeError(".SdkProto.Request.loginRequest: object expected");
                message.loginRequest = $root.SdkProto.LoginRequest.fromObject(object.loginRequest);
            }
            if (object.registerPhone != null) {
                if (typeof object.registerPhone !== "object")
                    throw TypeError(".SdkProto.Request.registerPhone: object expected");
                message.registerPhone = $root.SdkProto.RegisterPhoneRequest.fromObject(object.registerPhone);
            }
            if (object.getUserInfoRequest != null) {
                if (typeof object.getUserInfoRequest !== "object")
                    throw TypeError(".SdkProto.Request.getUserInfoRequest: object expected");
                message.getUserInfoRequest = $root.SdkProto.GetUserInfoRequest.fromObject(object.getUserInfoRequest);
            }
            if (object.coinBankRequest != null) {
                if (typeof object.coinBankRequest !== "object")
                    throw TypeError(".SdkProto.Request.coinBankRequest: object expected");
                message.coinBankRequest = $root.SdkProto.CoinBankRequest.fromObject(object.coinBankRequest);
            }
            if (object.changeSignRequest != null) {
                if (typeof object.changeSignRequest !== "object")
                    throw TypeError(".SdkProto.Request.changeSignRequest: object expected");
                message.changeSignRequest = $root.SdkProto.ChangeSignRequest.fromObject(object.changeSignRequest);
            }
            if (object.testDeviceIDRequest != null) {
                if (typeof object.testDeviceIDRequest !== "object")
                    throw TypeError(".SdkProto.Request.testDeviceIDRequest: object expected");
                message.testDeviceIDRequest = $root.SdkProto.TestDeviceIDRequest.fromObject(object.testDeviceIDRequest);
            }
            if (object.userMPRequest != null) {
                if (typeof object.userMPRequest !== "object")
                    throw TypeError(".SdkProto.Request.userMPRequest: object expected");
                message.userMPRequest = $root.SdkProto.UserMPRequest.fromObject(object.userMPRequest);
            }
            if (object.passPaiRequest != null) {
                if (typeof object.passPaiRequest !== "object")
                    throw TypeError(".SdkProto.Request.passPaiRequest: object expected");
                message.passPaiRequest = $root.SdkProto.PassPaiRequest.fromObject(object.passPaiRequest);
            }
            if (object.userReconnectRequest != null) {
                if (typeof object.userReconnectRequest !== "object")
                    throw TypeError(".SdkProto.Request.userReconnectRequest: object expected");
                message.userReconnectRequest = $root.SdkProto.UserReconnectRequest.fromObject(object.userReconnectRequest);
            }
            if (object.applyDismissRequest != null) {
                if (typeof object.applyDismissRequest !== "object")
                    throw TypeError(".SdkProto.Request.applyDismissRequest: object expected");
                message.applyDismissRequest = $root.SdkProto.ApplyDismissRequest.fromObject(object.applyDismissRequest);
            }
            if (object.agreeDismissRequest != null) {
                if (typeof object.agreeDismissRequest !== "object")
                    throw TypeError(".SdkProto.Request.agreeDismissRequest: object expected");
                message.agreeDismissRequest = $root.SdkProto.AgreeDismissRequest.fromObject(object.agreeDismissRequest);
            }
            if (object.userQuitRequest != null) {
                if (typeof object.userQuitRequest !== "object")
                    throw TypeError(".SdkProto.Request.userQuitRequest: object expected");
                message.userQuitRequest = $root.SdkProto.UserQuitRequest.fromObject(object.userQuitRequest);
            }
            if (object.messageRequest != null) {
                if (typeof object.messageRequest !== "object")
                    throw TypeError(".SdkProto.Request.messageRequest: object expected");
                message.messageRequest = $root.SdkProto.MessageRequest.fromObject(object.messageRequest);
            }
            if (object.userOnBackRequest != null) {
                if (typeof object.userOnBackRequest !== "object")
                    throw TypeError(".SdkProto.Request.userOnBackRequest: object expected");
                message.userOnBackRequest = $root.SdkProto.UserOnBackRequest.fromObject(object.userOnBackRequest);
            }
            if (object.delayCheckRequest != null) {
                if (typeof object.delayCheckRequest !== "object")
                    throw TypeError(".SdkProto.Request.delayCheckRequest: object expected");
                message.delayCheckRequest = $root.SdkProto.DelayCheckRequest.fromObject(object.delayCheckRequest);
            }
            if (object.cancelAutoRequest != null) {
                if (typeof object.cancelAutoRequest !== "object")
                    throw TypeError(".SdkProto.Request.cancelAutoRequest: object expected");
                message.cancelAutoRequest = $root.SdkProto.CancelAutoRequest.fromObject(object.cancelAutoRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.Request
         * @static
         * @param {SdkProto.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.loginRequest = null;
                object.registerPhone = null;
                object.getUserInfoRequest = null;
                object.coinBankRequest = null;
                object.changeSignRequest = null;
                object.testDeviceIDRequest = null;
                object.userMPRequest = null;
                object.passPaiRequest = null;
                object.userReconnectRequest = null;
                object.applyDismissRequest = null;
                object.agreeDismissRequest = null;
                object.userQuitRequest = null;
                object.messageRequest = null;
                object.userOnBackRequest = null;
                object.delayCheckRequest = null;
                object.cancelAutoRequest = null;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.SdkProto.Request.CMD[message.cmd] : message.cmd;
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                object.loginRequest = $root.SdkProto.LoginRequest.toObject(message.loginRequest, options);
            if (message.registerPhone != null && message.hasOwnProperty("registerPhone"))
                object.registerPhone = $root.SdkProto.RegisterPhoneRequest.toObject(message.registerPhone, options);
            if (message.getUserInfoRequest != null && message.hasOwnProperty("getUserInfoRequest"))
                object.getUserInfoRequest = $root.SdkProto.GetUserInfoRequest.toObject(message.getUserInfoRequest, options);
            if (message.coinBankRequest != null && message.hasOwnProperty("coinBankRequest"))
                object.coinBankRequest = $root.SdkProto.CoinBankRequest.toObject(message.coinBankRequest, options);
            if (message.changeSignRequest != null && message.hasOwnProperty("changeSignRequest"))
                object.changeSignRequest = $root.SdkProto.ChangeSignRequest.toObject(message.changeSignRequest, options);
            if (message.testDeviceIDRequest != null && message.hasOwnProperty("testDeviceIDRequest"))
                object.testDeviceIDRequest = $root.SdkProto.TestDeviceIDRequest.toObject(message.testDeviceIDRequest, options);
            if (message.userMPRequest != null && message.hasOwnProperty("userMPRequest"))
                object.userMPRequest = $root.SdkProto.UserMPRequest.toObject(message.userMPRequest, options);
            if (message.passPaiRequest != null && message.hasOwnProperty("passPaiRequest"))
                object.passPaiRequest = $root.SdkProto.PassPaiRequest.toObject(message.passPaiRequest, options);
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                object.userReconnectRequest = $root.SdkProto.UserReconnectRequest.toObject(message.userReconnectRequest, options);
            if (message.applyDismissRequest != null && message.hasOwnProperty("applyDismissRequest"))
                object.applyDismissRequest = $root.SdkProto.ApplyDismissRequest.toObject(message.applyDismissRequest, options);
            if (message.agreeDismissRequest != null && message.hasOwnProperty("agreeDismissRequest"))
                object.agreeDismissRequest = $root.SdkProto.AgreeDismissRequest.toObject(message.agreeDismissRequest, options);
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                object.userQuitRequest = $root.SdkProto.UserQuitRequest.toObject(message.userQuitRequest, options);
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                object.messageRequest = $root.SdkProto.MessageRequest.toObject(message.messageRequest, options);
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                object.userOnBackRequest = $root.SdkProto.UserOnBackRequest.toObject(message.userOnBackRequest, options);
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                object.delayCheckRequest = $root.SdkProto.DelayCheckRequest.toObject(message.delayCheckRequest, options);
            if (message.cancelAutoRequest != null && message.hasOwnProperty("cancelAutoRequest"))
                object.cancelAutoRequest = $root.SdkProto.CancelAutoRequest.toObject(message.cancelAutoRequest, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof SdkProto.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name SdkProto.Request.CMD
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} Login=2000 Login value
         * @property {number} RegisterPhone=2002 RegisterPhone value
         * @property {number} GetUserInfo=2003 GetUserInfo value
         * @property {number} CoinBank=2004 CoinBank value
         * @property {number} ChangeSign=2005 ChangeSign value
         * @property {number} TestDeviceID=2006 TestDeviceID value
         * @property {number} SEND_USER_READY=2007 SEND_USER_READY value
         * @property {number} SEND_CARDS=2009 SEND_CARDS value
         * @property {number} DIS_CARD=2010 DIS_CARD value
         * @property {number} SEND_DIS_CARD=2011 SEND_DIS_CARD value
         * @property {number} PASS_PAI=2022 PASS_PAI value
         * @property {number} SEND_PASS_PAI=2023 SEND_PASS_PAI value
         * @property {number} USER_RECONNECT=2030 USER_RECONNECT value
         * @property {number} SEND_RECONNECT_QUIT=2035 SEND_RECONNECT_QUIT value
         * @property {number} SEND_USER_RECONNECT=2031 SEND_USER_RECONNECT value
         * @property {number} APPLY_DISMISS=2040 APPLY_DISMISS value
         * @property {number} SEND_APPLY_DISMISS=2041 SEND_APPLY_DISMISS value
         * @property {number} AGREE_DISMISS=2042 AGREE_DISMISS value
         * @property {number} SEND_AGREE_DISMISS=2043 SEND_AGREE_DISMISS value
         * @property {number} SEND_DISMISS_RESULT=2047 SEND_DISMISS_RESULT value
         * @property {number} USER_QUIT=2044 USER_QUIT value
         * @property {number} SEND_USER_QUIT=2045 SEND_USER_QUIT value
         * @property {number} MESSAGE=2060 MESSAGE value
         * @property {number} SEND_MESSAGE=2061 SEND_MESSAGE value
         * @property {number} SEND_COIN_REFRESH=2062 SEND_COIN_REFRESH value
         * @property {number} USER_ONBACK=2080 USER_ONBACK value
         * @property {number} SEND_USER_ONBACK=2081 SEND_USER_ONBACK value
         * @property {number} SEND_ROUND_RECORD=2015 SEND_ROUND_RECORD value
         * @property {number} USER_QDZ=2100 USER_QDZ value
         * @property {number} SEND_USER_QDZ=2101 SEND_USER_QDZ value
         * @property {number} SEND_USER_QDZ2=2102 SEND_USER_QDZ2 value
         * @property {number} USER_MP=2200 USER_MP value
         * @property {number} SEND_USER_MP=2201 SEND_USER_MP value
         * @property {number} SEND_USER_MP2=2202 SEND_USER_MP2 value
         * @property {number} SEND_GAME_OVER=2017 SEND_GAME_OVER value
         * @property {number} SEND_DIAMOND_CHANGE=2071 SEND_DIAMOND_CHANGE value
         * @property {number} USER_DAO_RECORD=2083 USER_DAO_RECORD value
         * @property {number} CANCEL_AUTO=20012 CANCEL_AUTO value
         * @property {number} SEND_CANCEL_AUTO=20013 SEND_CANCEL_AUTO value
         * @property {number} DELAY_CHECK=20010 DELAY_CHECK value
         * @property {number} Get_User_Info=2046 Get_User_Info value
         * @property {number} SEND_NOTICE_CLIENT_DISMISS=21002 SEND_NOTICE_CLIENT_DISMISS value
         * @property {number} SEND_REMAIN_TIME=20015 SEND_REMAIN_TIME value
         * @property {number} SEND_USERQUIT_BY_ADMIN=21003 SEND_USERQUIT_BY_ADMIN value
         * @property {number} SEND_HEART_BEAT=10000 SEND_HEART_BEAT value
         */
        Request.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[2000] = "Login"] = 2000;
            values[valuesById[2002] = "RegisterPhone"] = 2002;
            values[valuesById[2003] = "GetUserInfo"] = 2003;
            values[valuesById[2004] = "CoinBank"] = 2004;
            values[valuesById[2005] = "ChangeSign"] = 2005;
            values[valuesById[2006] = "TestDeviceID"] = 2006;
            values[valuesById[2007] = "SEND_USER_READY"] = 2007;
            values[valuesById[2009] = "SEND_CARDS"] = 2009;
            values[valuesById[2010] = "DIS_CARD"] = 2010;
            values[valuesById[2011] = "SEND_DIS_CARD"] = 2011;
            values[valuesById[2022] = "PASS_PAI"] = 2022;
            values[valuesById[2023] = "SEND_PASS_PAI"] = 2023;
            values[valuesById[2030] = "USER_RECONNECT"] = 2030;
            values[valuesById[2035] = "SEND_RECONNECT_QUIT"] = 2035;
            values[valuesById[2031] = "SEND_USER_RECONNECT"] = 2031;
            values[valuesById[2040] = "APPLY_DISMISS"] = 2040;
            values[valuesById[2041] = "SEND_APPLY_DISMISS"] = 2041;
            values[valuesById[2042] = "AGREE_DISMISS"] = 2042;
            values[valuesById[2043] = "SEND_AGREE_DISMISS"] = 2043;
            values[valuesById[2047] = "SEND_DISMISS_RESULT"] = 2047;
            values[valuesById[2044] = "USER_QUIT"] = 2044;
            values[valuesById[2045] = "SEND_USER_QUIT"] = 2045;
            values[valuesById[2060] = "MESSAGE"] = 2060;
            values[valuesById[2061] = "SEND_MESSAGE"] = 2061;
            values[valuesById[2062] = "SEND_COIN_REFRESH"] = 2062;
            values[valuesById[2080] = "USER_ONBACK"] = 2080;
            values[valuesById[2081] = "SEND_USER_ONBACK"] = 2081;
            values[valuesById[2015] = "SEND_ROUND_RECORD"] = 2015;
            values[valuesById[2100] = "USER_QDZ"] = 2100;
            values[valuesById[2101] = "SEND_USER_QDZ"] = 2101;
            values[valuesById[2102] = "SEND_USER_QDZ2"] = 2102;
            values[valuesById[2200] = "USER_MP"] = 2200;
            values[valuesById[2201] = "SEND_USER_MP"] = 2201;
            values[valuesById[2202] = "SEND_USER_MP2"] = 2202;
            values[valuesById[2017] = "SEND_GAME_OVER"] = 2017;
            values[valuesById[2071] = "SEND_DIAMOND_CHANGE"] = 2071;
            values[valuesById[2083] = "USER_DAO_RECORD"] = 2083;
            values[valuesById[20012] = "CANCEL_AUTO"] = 20012;
            values[valuesById[20013] = "SEND_CANCEL_AUTO"] = 20013;
            values[valuesById[20010] = "DELAY_CHECK"] = 20010;
            values[valuesById[2046] = "Get_User_Info"] = 2046;
            values[valuesById[21002] = "SEND_NOTICE_CLIENT_DISMISS"] = 21002;
            values[valuesById[20015] = "SEND_REMAIN_TIME"] = 20015;
            values[valuesById[21003] = "SEND_USERQUIT_BY_ADMIN"] = 21003;
            values[valuesById[10000] = "SEND_HEART_BEAT"] = 10000;
            return values;
        })();

        return Request;
    })();

    SdkProto.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof SdkProto
         * @interface ILoginResponse
         * @property {SdkProto.IUser|null} [user] LoginResponse user
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof SdkProto
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {SdkProto.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse user.
         * @member {SdkProto.IUser|null|undefined} user
         * @memberof SdkProto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.user = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {SdkProto.ILoginResponse=} [properties] Properties to set
         * @returns {SdkProto.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link SdkProto.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {SdkProto.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.SdkProto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link SdkProto.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {SdkProto.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.SdkProto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResponse message.
         * @function verify
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.SdkProto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.LoginResponse)
                return object;
            var message = new $root.SdkProto.LoginResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".SdkProto.LoginResponse.user: object expected");
                message.user = $root.SdkProto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.LoginResponse
         * @static
         * @param {SdkProto.LoginResponse} message LoginResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.SdkProto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    SdkProto.RegisterPhoneRespone = (function() {

        /**
         * Properties of a RegisterPhoneRespone.
         * @memberof SdkProto
         * @interface IRegisterPhoneRespone
         * @property {number|null} [username] RegisterPhoneRespone username
         */

        /**
         * Constructs a new RegisterPhoneRespone.
         * @memberof SdkProto
         * @classdesc Represents a RegisterPhoneRespone.
         * @implements IRegisterPhoneRespone
         * @constructor
         * @param {SdkProto.IRegisterPhoneRespone=} [properties] Properties to set
         */
        function RegisterPhoneRespone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterPhoneRespone username.
         * @member {number} username
         * @memberof SdkProto.RegisterPhoneRespone
         * @instance
         */
        RegisterPhoneRespone.prototype.username = 0;

        /**
         * Creates a new RegisterPhoneRespone instance using the specified properties.
         * @function create
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {SdkProto.IRegisterPhoneRespone=} [properties] Properties to set
         * @returns {SdkProto.RegisterPhoneRespone} RegisterPhoneRespone instance
         */
        RegisterPhoneRespone.create = function create(properties) {
            return new RegisterPhoneRespone(properties);
        };

        /**
         * Encodes the specified RegisterPhoneRespone message. Does not implicitly {@link SdkProto.RegisterPhoneRespone.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {SdkProto.IRegisterPhoneRespone} message RegisterPhoneRespone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPhoneRespone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.username);
            return writer;
        };

        /**
         * Encodes the specified RegisterPhoneRespone message, length delimited. Does not implicitly {@link SdkProto.RegisterPhoneRespone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {SdkProto.IRegisterPhoneRespone} message RegisterPhoneRespone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPhoneRespone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterPhoneRespone message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.RegisterPhoneRespone} RegisterPhoneRespone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPhoneRespone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.RegisterPhoneRespone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterPhoneRespone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.RegisterPhoneRespone} RegisterPhoneRespone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPhoneRespone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterPhoneRespone message.
         * @function verify
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterPhoneRespone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isInteger(message.username))
                    return "username: integer expected";
            return null;
        };

        /**
         * Creates a RegisterPhoneRespone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.RegisterPhoneRespone} RegisterPhoneRespone
         */
        RegisterPhoneRespone.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.RegisterPhoneRespone)
                return object;
            var message = new $root.SdkProto.RegisterPhoneRespone();
            if (object.username != null)
                message.username = object.username | 0;
            return message;
        };

        /**
         * Creates a plain object from a RegisterPhoneRespone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.RegisterPhoneRespone
         * @static
         * @param {SdkProto.RegisterPhoneRespone} message RegisterPhoneRespone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterPhoneRespone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = 0;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this RegisterPhoneRespone to JSON.
         * @function toJSON
         * @memberof SdkProto.RegisterPhoneRespone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterPhoneRespone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterPhoneRespone;
    })();

    SdkProto.GetUserInfoResponse = (function() {

        /**
         * Properties of a GetUserInfoResponse.
         * @memberof SdkProto
         * @interface IGetUserInfoResponse
         * @property {SdkProto.IUserInfo|null} [userInfo] GetUserInfoResponse userInfo
         */

        /**
         * Constructs a new GetUserInfoResponse.
         * @memberof SdkProto
         * @classdesc Represents a GetUserInfoResponse.
         * @implements IGetUserInfoResponse
         * @constructor
         * @param {SdkProto.IGetUserInfoResponse=} [properties] Properties to set
         */
        function GetUserInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserInfoResponse userInfo.
         * @member {SdkProto.IUserInfo|null|undefined} userInfo
         * @memberof SdkProto.GetUserInfoResponse
         * @instance
         */
        GetUserInfoResponse.prototype.userInfo = null;

        /**
         * Creates a new GetUserInfoResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {SdkProto.IGetUserInfoResponse=} [properties] Properties to set
         * @returns {SdkProto.GetUserInfoResponse} GetUserInfoResponse instance
         */
        GetUserInfoResponse.create = function create(properties) {
            return new GetUserInfoResponse(properties);
        };

        /**
         * Encodes the specified GetUserInfoResponse message. Does not implicitly {@link SdkProto.GetUserInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {SdkProto.IGetUserInfoResponse} message GetUserInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                $root.SdkProto.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUserInfoResponse message, length delimited. Does not implicitly {@link SdkProto.GetUserInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {SdkProto.IGetUserInfoResponse} message GetUserInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.GetUserInfoResponse} GetUserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.GetUserInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userInfo = $root.SdkProto.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserInfoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.GetUserInfoResponse} GetUserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserInfoResponse message.
         * @function verify
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.SdkProto.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates a GetUserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.GetUserInfoResponse} GetUserInfoResponse
         */
        GetUserInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.GetUserInfoResponse)
                return object;
            var message = new $root.SdkProto.GetUserInfoResponse();
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".SdkProto.GetUserInfoResponse.userInfo: object expected");
                message.userInfo = $root.SdkProto.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.GetUserInfoResponse
         * @static
         * @param {SdkProto.GetUserInfoResponse} message GetUserInfoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserInfoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userInfo = null;
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                object.userInfo = $root.SdkProto.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this GetUserInfoResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.GetUserInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoResponse;
    })();

    SdkProto.CoinBankResponse = (function() {

        /**
         * Properties of a CoinBankResponse.
         * @memberof SdkProto
         * @interface ICoinBankResponse
         */

        /**
         * Constructs a new CoinBankResponse.
         * @memberof SdkProto
         * @classdesc Represents a CoinBankResponse.
         * @implements ICoinBankResponse
         * @constructor
         * @param {SdkProto.ICoinBankResponse=} [properties] Properties to set
         */
        function CoinBankResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CoinBankResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {SdkProto.ICoinBankResponse=} [properties] Properties to set
         * @returns {SdkProto.CoinBankResponse} CoinBankResponse instance
         */
        CoinBankResponse.create = function create(properties) {
            return new CoinBankResponse(properties);
        };

        /**
         * Encodes the specified CoinBankResponse message. Does not implicitly {@link SdkProto.CoinBankResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {SdkProto.ICoinBankResponse} message CoinBankResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CoinBankResponse message, length delimited. Does not implicitly {@link SdkProto.CoinBankResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {SdkProto.ICoinBankResponse} message CoinBankResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CoinBankResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.CoinBankResponse} CoinBankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CoinBankResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.CoinBankResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CoinBankResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.CoinBankResponse} CoinBankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CoinBankResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CoinBankResponse message.
         * @function verify
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CoinBankResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CoinBankResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.CoinBankResponse} CoinBankResponse
         */
        CoinBankResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.CoinBankResponse)
                return object;
            return new $root.SdkProto.CoinBankResponse();
        };

        /**
         * Creates a plain object from a CoinBankResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.CoinBankResponse
         * @static
         * @param {SdkProto.CoinBankResponse} message CoinBankResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoinBankResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CoinBankResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.CoinBankResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoinBankResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoinBankResponse;
    })();

    SdkProto.ChangeSignResponse = (function() {

        /**
         * Properties of a ChangeSignResponse.
         * @memberof SdkProto
         * @interface IChangeSignResponse
         */

        /**
         * Constructs a new ChangeSignResponse.
         * @memberof SdkProto
         * @classdesc Represents a ChangeSignResponse.
         * @implements IChangeSignResponse
         * @constructor
         * @param {SdkProto.IChangeSignResponse=} [properties] Properties to set
         */
        function ChangeSignResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ChangeSignResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {SdkProto.IChangeSignResponse=} [properties] Properties to set
         * @returns {SdkProto.ChangeSignResponse} ChangeSignResponse instance
         */
        ChangeSignResponse.create = function create(properties) {
            return new ChangeSignResponse(properties);
        };

        /**
         * Encodes the specified ChangeSignResponse message. Does not implicitly {@link SdkProto.ChangeSignResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {SdkProto.IChangeSignResponse} message ChangeSignResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ChangeSignResponse message, length delimited. Does not implicitly {@link SdkProto.ChangeSignResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {SdkProto.IChangeSignResponse} message ChangeSignResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeSignResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.ChangeSignResponse} ChangeSignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSignResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.ChangeSignResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChangeSignResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.ChangeSignResponse} ChangeSignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSignResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChangeSignResponse message.
         * @function verify
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChangeSignResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ChangeSignResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.ChangeSignResponse} ChangeSignResponse
         */
        ChangeSignResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.ChangeSignResponse)
                return object;
            return new $root.SdkProto.ChangeSignResponse();
        };

        /**
         * Creates a plain object from a ChangeSignResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.ChangeSignResponse
         * @static
         * @param {SdkProto.ChangeSignResponse} message ChangeSignResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeSignResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ChangeSignResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.ChangeSignResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeSignResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeSignResponse;
    })();

    SdkProto.TestDeviceIDResponse = (function() {

        /**
         * Properties of a TestDeviceIDResponse.
         * @memberof SdkProto
         * @interface ITestDeviceIDResponse
         */

        /**
         * Constructs a new TestDeviceIDResponse.
         * @memberof SdkProto
         * @classdesc Represents a TestDeviceIDResponse.
         * @implements ITestDeviceIDResponse
         * @constructor
         * @param {SdkProto.ITestDeviceIDResponse=} [properties] Properties to set
         */
        function TestDeviceIDResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TestDeviceIDResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {SdkProto.ITestDeviceIDResponse=} [properties] Properties to set
         * @returns {SdkProto.TestDeviceIDResponse} TestDeviceIDResponse instance
         */
        TestDeviceIDResponse.create = function create(properties) {
            return new TestDeviceIDResponse(properties);
        };

        /**
         * Encodes the specified TestDeviceIDResponse message. Does not implicitly {@link SdkProto.TestDeviceIDResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {SdkProto.ITestDeviceIDResponse} message TestDeviceIDResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestDeviceIDResponse message, length delimited. Does not implicitly {@link SdkProto.TestDeviceIDResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {SdkProto.ITestDeviceIDResponse} message TestDeviceIDResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestDeviceIDResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.TestDeviceIDResponse} TestDeviceIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestDeviceIDResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.TestDeviceIDResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestDeviceIDResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.TestDeviceIDResponse} TestDeviceIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestDeviceIDResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestDeviceIDResponse message.
         * @function verify
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestDeviceIDResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TestDeviceIDResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.TestDeviceIDResponse} TestDeviceIDResponse
         */
        TestDeviceIDResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.TestDeviceIDResponse)
                return object;
            return new $root.SdkProto.TestDeviceIDResponse();
        };

        /**
         * Creates a plain object from a TestDeviceIDResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.TestDeviceIDResponse
         * @static
         * @param {SdkProto.TestDeviceIDResponse} message TestDeviceIDResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestDeviceIDResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestDeviceIDResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.TestDeviceIDResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestDeviceIDResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestDeviceIDResponse;
    })();

    SdkProto.CreateTableResponse = (function() {

        /**
         * Properties of a CreateTableResponse.
         * @memberof SdkProto
         * @interface ICreateTableResponse
         * @property {string|null} [tableId] CreateTableResponse tableId
         * @property {number|null} [gameId] CreateTableResponse gameId
         * @property {number|null} [state] CreateTableResponse state
         * @property {number|null} [owner] CreateTableResponse owner
         * @property {number|null} [currentRound] CreateTableResponse currentRound
         * @property {number|null} [totalRound] CreateTableResponse totalRound
         * @property {string|null} [gameInfo] CreateTableResponse gameInfo
         * @property {number|null} [applicant] CreateTableResponse applicant
         * @property {number|null} [applyTime] CreateTableResponse applyTime
         * @property {number|Long|null} [startApplyTime] CreateTableResponse startApplyTime
         * @property {Array.<SdkProto.IUser>|null} [users] CreateTableResponse users
         */

        /**
         * Constructs a new CreateTableResponse.
         * @memberof SdkProto
         * @classdesc Represents a CreateTableResponse.
         * @implements ICreateTableResponse
         * @constructor
         * @param {SdkProto.ICreateTableResponse=} [properties] Properties to set
         */
        function CreateTableResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateTableResponse tableId.
         * @member {string} tableId
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.tableId = "";

        /**
         * CreateTableResponse gameId.
         * @member {number} gameId
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.gameId = 0;

        /**
         * CreateTableResponse state.
         * @member {number} state
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.state = 0;

        /**
         * CreateTableResponse owner.
         * @member {number} owner
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.owner = 0;

        /**
         * CreateTableResponse currentRound.
         * @member {number} currentRound
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.currentRound = 0;

        /**
         * CreateTableResponse totalRound.
         * @member {number} totalRound
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.totalRound = 0;

        /**
         * CreateTableResponse gameInfo.
         * @member {string} gameInfo
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.gameInfo = "";

        /**
         * CreateTableResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.applicant = 0;

        /**
         * CreateTableResponse applyTime.
         * @member {number} applyTime
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.applyTime = 0;

        /**
         * CreateTableResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateTableResponse users.
         * @member {Array.<SdkProto.IUser>} users
         * @memberof SdkProto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new CreateTableResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {SdkProto.ICreateTableResponse=} [properties] Properties to set
         * @returns {SdkProto.CreateTableResponse} CreateTableResponse instance
         */
        CreateTableResponse.create = function create(properties) {
            return new CreateTableResponse(properties);
        };

        /**
         * Encodes the specified CreateTableResponse message. Does not implicitly {@link SdkProto.CreateTableResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {SdkProto.ICreateTableResponse} message CreateTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.owner);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalRound);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gameInfo);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.applicant);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.startApplyTime);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.User.encode(message.users[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link SdkProto.CreateTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {SdkProto.ICreateTableResponse} message CreateTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.CreateTableResponse} CreateTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.CreateTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.owner = reader.int32();
                    break;
                case 5:
                    message.currentRound = reader.int32();
                    break;
                case 6:
                    message.totalRound = reader.int32();
                    break;
                case 7:
                    message.gameInfo = reader.string();
                    break;
                case 8:
                    message.applicant = reader.int32();
                    break;
                case 9:
                    message.applyTime = reader.int32();
                    break;
                case 10:
                    message.startApplyTime = reader.int64();
                    break;
                case 11:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.CreateTableResponse} CreateTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateTableResponse message.
         * @function verify
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.CreateTableResponse} CreateTableResponse
         */
        CreateTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.CreateTableResponse)
                return object;
            var message = new $root.SdkProto.CreateTableResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.CreateTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.CreateTableResponse.users: object expected");
                    message.users[i] = $root.SdkProto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.CreateTableResponse
         * @static
         * @param {SdkProto.CreateTableResponse} message CreateTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.gameId = 0;
                object.state = 0;
                object.owner = 0;
                object.currentRound = 0;
                object.totalRound = 0;
                object.gameInfo = "";
                object.applicant = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this CreateTableResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.CreateTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTableResponse;
    })();

    SdkProto.JoinTableResponse = (function() {

        /**
         * Properties of a JoinTableResponse.
         * @memberof SdkProto
         * @interface IJoinTableResponse
         * @property {string|null} [tableId] JoinTableResponse tableId
         * @property {number|null} [gameId] JoinTableResponse gameId
         * @property {number|null} [state] JoinTableResponse state
         * @property {number|null} [owner] JoinTableResponse owner
         * @property {number|null} [currentRound] JoinTableResponse currentRound
         * @property {number|null} [totalRound] JoinTableResponse totalRound
         * @property {string|null} [gameInfo] JoinTableResponse gameInfo
         * @property {number|null} [applicant] JoinTableResponse applicant
         * @property {number|null} [applyTime] JoinTableResponse applyTime
         * @property {number|Long|null} [startApplyTime] JoinTableResponse startApplyTime
         * @property {Array.<SdkProto.IUser>|null} [users] JoinTableResponse users
         */

        /**
         * Constructs a new JoinTableResponse.
         * @memberof SdkProto
         * @classdesc Represents a JoinTableResponse.
         * @implements IJoinTableResponse
         * @constructor
         * @param {SdkProto.IJoinTableResponse=} [properties] Properties to set
         */
        function JoinTableResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableResponse tableId.
         * @member {string} tableId
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.tableId = "";

        /**
         * JoinTableResponse gameId.
         * @member {number} gameId
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameId = 0;

        /**
         * JoinTableResponse state.
         * @member {number} state
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.state = 0;

        /**
         * JoinTableResponse owner.
         * @member {number} owner
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.owner = 0;

        /**
         * JoinTableResponse currentRound.
         * @member {number} currentRound
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.currentRound = 0;

        /**
         * JoinTableResponse totalRound.
         * @member {number} totalRound
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.totalRound = 0;

        /**
         * JoinTableResponse gameInfo.
         * @member {string} gameInfo
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameInfo = "";

        /**
         * JoinTableResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.applicant = 0;

        /**
         * JoinTableResponse applyTime.
         * @member {number} applyTime
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.applyTime = 0;

        /**
         * JoinTableResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JoinTableResponse users.
         * @member {Array.<SdkProto.IUser>} users
         * @memberof SdkProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {SdkProto.IJoinTableResponse=} [properties] Properties to set
         * @returns {SdkProto.JoinTableResponse} JoinTableResponse instance
         */
        JoinTableResponse.create = function create(properties) {
            return new JoinTableResponse(properties);
        };

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link SdkProto.JoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {SdkProto.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.owner);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalRound);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gameInfo);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.applicant);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.startApplyTime);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.User.encode(message.users[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link SdkProto.JoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {SdkProto.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.JoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.owner = reader.int32();
                    break;
                case 5:
                    message.currentRound = reader.int32();
                    break;
                case 6:
                    message.totalRound = reader.int32();
                    break;
                case 7:
                    message.gameInfo = reader.string();
                    break;
                case 8:
                    message.applicant = reader.int32();
                    break;
                case 9:
                    message.applyTime = reader.int32();
                    break;
                case 10:
                    message.startApplyTime = reader.int64();
                    break;
                case 11:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinTableResponse message.
         * @function verify
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.JoinTableResponse} JoinTableResponse
         */
        JoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.JoinTableResponse)
                return object;
            var message = new $root.SdkProto.JoinTableResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.JoinTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.JoinTableResponse.users: object expected");
                    message.users[i] = $root.SdkProto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.JoinTableResponse
         * @static
         * @param {SdkProto.JoinTableResponse} message JoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.tableId = "";
                object.gameId = 0;
                object.state = 0;
                object.owner = 0;
                object.currentRound = 0;
                object.totalRound = 0;
                object.gameInfo = "";
                object.applicant = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinTableResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.JoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResponse;
    })();

    SdkProto.SendJoinTableResponse = (function() {

        /**
         * Properties of a SendJoinTableResponse.
         * @memberof SdkProto
         * @interface ISendJoinTableResponse
         * @property {SdkProto.IUser|null} [user] SendJoinTableResponse user
         */

        /**
         * Constructs a new SendJoinTableResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendJoinTableResponse.
         * @implements ISendJoinTableResponse
         * @constructor
         * @param {SdkProto.ISendJoinTableResponse=} [properties] Properties to set
         */
        function SendJoinTableResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendJoinTableResponse user.
         * @member {SdkProto.IUser|null|undefined} user
         * @memberof SdkProto.SendJoinTableResponse
         * @instance
         */
        SendJoinTableResponse.prototype.user = null;

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {SdkProto.ISendJoinTableResponse=} [properties] Properties to set
         * @returns {SdkProto.SendJoinTableResponse} SendJoinTableResponse instance
         */
        SendJoinTableResponse.create = function create(properties) {
            return new SendJoinTableResponse(properties);
        };

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link SdkProto.SendJoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {SdkProto.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.SdkProto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link SdkProto.SendJoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {SdkProto.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendJoinTableResponse} SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendJoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendJoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.SdkProto.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendJoinTableResponse} SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendJoinTableResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendJoinTableResponse message.
         * @function verify
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendJoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.SdkProto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a SendJoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendJoinTableResponse} SendJoinTableResponse
         */
        SendJoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendJoinTableResponse)
                return object;
            var message = new $root.SdkProto.SendJoinTableResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".SdkProto.SendJoinTableResponse.user: object expected");
                message.user = $root.SdkProto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendJoinTableResponse
         * @static
         * @param {SdkProto.SendJoinTableResponse} message SendJoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendJoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.SdkProto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this SendJoinTableResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendJoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendJoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendJoinTableResponse;
    })();

    SdkProto.SendUserReadyResponse = (function() {

        /**
         * Properties of a SendUserReadyResponse.
         * @memberof SdkProto
         * @interface ISendUserReadyResponse
         * @property {number|null} [userId] SendUserReadyResponse userId
         * @property {number|null} [state] SendUserReadyResponse state
         * @property {Array.<SdkProto.IUserReady>|null} [users] SendUserReadyResponse users
         */

        /**
         * Constructs a new SendUserReadyResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserReadyResponse.
         * @implements ISendUserReadyResponse
         * @constructor
         * @param {SdkProto.ISendUserReadyResponse=} [properties] Properties to set
         */
        function SendUserReadyResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserReadyResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.userId = 0;

        /**
         * SendUserReadyResponse state.
         * @member {number} state
         * @memberof SdkProto.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.state = 0;

        /**
         * SendUserReadyResponse users.
         * @member {Array.<SdkProto.IUserReady>} users
         * @memberof SdkProto.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendUserReadyResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {SdkProto.ISendUserReadyResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserReadyResponse} SendUserReadyResponse instance
         */
        SendUserReadyResponse.create = function create(properties) {
            return new SendUserReadyResponse(properties);
        };

        /**
         * Encodes the specified SendUserReadyResponse message. Does not implicitly {@link SdkProto.SendUserReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {SdkProto.ISendUserReadyResponse} message SendUserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReadyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.UserReady.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendUserReadyResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {SdkProto.ISendUserReadyResponse} message SendUserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserReadyResponse} SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserReadyResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.state = reader.int32();
                    break;
                case 3:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.UserReady.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserReadyResponse} SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReadyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserReadyResponse message.
         * @function verify
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserReadyResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.UserReady.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendUserReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserReadyResponse} SendUserReadyResponse
         */
        SendUserReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserReadyResponse)
                return object;
            var message = new $root.SdkProto.SendUserReadyResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.SendUserReadyResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.SendUserReadyResponse.users: object expected");
                    message.users[i] = $root.SdkProto.UserReady.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendUserReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserReadyResponse
         * @static
         * @param {SdkProto.SendUserReadyResponse} message SendUserReadyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserReadyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.UserReady.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendUserReadyResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReadyResponse;
    })();

    SdkProto.SendCardsResponse = (function() {

        /**
         * Properties of a SendCardsResponse.
         * @memberof SdkProto
         * @interface ISendCardsResponse
         * @property {number|null} [zhuangPos] SendCardsResponse zhuangPos
         * @property {number|null} [currentRound] SendCardsResponse currentRound
         * @property {number|null} [state] SendCardsResponse state
         * @property {number|null} [nextDiscardPos] SendCardsResponse nextDiscardPos
         * @property {string|null} [gameInfo] SendCardsResponse gameInfo
         * @property {number|null} [totalRound] SendCardsResponse totalRound
         * @property {Array.<SdkProto.IUser>|null} [users] SendCardsResponse users
         * @property {number|null} [piaoPai] SendCardsResponse piaoPai
         * @property {number|null} [piaoPaiPosition] SendCardsResponse piaoPaiPosition
         */

        /**
         * Constructs a new SendCardsResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendCardsResponse.
         * @implements ISendCardsResponse
         * @constructor
         * @param {SdkProto.ISendCardsResponse=} [properties] Properties to set
         */
        function SendCardsResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendCardsResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.zhuangPos = 0;

        /**
         * SendCardsResponse currentRound.
         * @member {number} currentRound
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.currentRound = 0;

        /**
         * SendCardsResponse state.
         * @member {number} state
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.state = 0;

        /**
         * SendCardsResponse nextDiscardPos.
         * @member {number} nextDiscardPos
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.nextDiscardPos = 0;

        /**
         * SendCardsResponse gameInfo.
         * @member {string} gameInfo
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.gameInfo = "";

        /**
         * SendCardsResponse totalRound.
         * @member {number} totalRound
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.totalRound = 0;

        /**
         * SendCardsResponse users.
         * @member {Array.<SdkProto.IUser>} users
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.users = $util.emptyArray;

        /**
         * SendCardsResponse piaoPai.
         * @member {number} piaoPai
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.piaoPai = 0;

        /**
         * SendCardsResponse piaoPaiPosition.
         * @member {number} piaoPaiPosition
         * @memberof SdkProto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.piaoPaiPosition = 0;

        /**
         * Creates a new SendCardsResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {SdkProto.ISendCardsResponse=} [properties] Properties to set
         * @returns {SdkProto.SendCardsResponse} SendCardsResponse instance
         */
        SendCardsResponse.create = function create(properties) {
            return new SendCardsResponse(properties);
        };

        /**
         * Encodes the specified SendCardsResponse message. Does not implicitly {@link SdkProto.SendCardsResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {SdkProto.ISendCardsResponse} message SendCardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCardsResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.zhuangPos);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.currentRound);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.nextDiscardPos);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.gameInfo);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalRound);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.User.encode(message.users[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.piaoPai != null && message.hasOwnProperty("piaoPai"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.piaoPai);
            if (message.piaoPaiPosition != null && message.hasOwnProperty("piaoPaiPosition"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.piaoPaiPosition);
            return writer;
        };

        /**
         * Encodes the specified SendCardsResponse message, length delimited. Does not implicitly {@link SdkProto.SendCardsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {SdkProto.ISendCardsResponse} message SendCardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCardsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendCardsResponse} SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCardsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendCardsResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.zhuangPos = reader.int32();
                    break;
                case 2:
                    message.currentRound = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.nextDiscardPos = reader.int32();
                    break;
                case 5:
                    message.gameInfo = reader.string();
                    break;
                case 6:
                    message.totalRound = reader.int32();
                    break;
                case 7:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.User.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.piaoPai = reader.int32();
                    break;
                case 9:
                    message.piaoPaiPosition = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendCardsResponse} SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCardsResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendCardsResponse message.
         * @function verify
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendCardsResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                if (!$util.isInteger(message.nextDiscardPos))
                    return "nextDiscardPos: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.piaoPai != null && message.hasOwnProperty("piaoPai"))
                if (!$util.isInteger(message.piaoPai))
                    return "piaoPai: integer expected";
            if (message.piaoPaiPosition != null && message.hasOwnProperty("piaoPaiPosition"))
                if (!$util.isInteger(message.piaoPaiPosition))
                    return "piaoPaiPosition: integer expected";
            return null;
        };

        /**
         * Creates a SendCardsResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendCardsResponse} SendCardsResponse
         */
        SendCardsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendCardsResponse)
                return object;
            var message = new $root.SdkProto.SendCardsResponse();
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.nextDiscardPos != null)
                message.nextDiscardPos = object.nextDiscardPos | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.SendCardsResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.SendCardsResponse.users: object expected");
                    message.users[i] = $root.SdkProto.User.fromObject(object.users[i]);
                }
            }
            if (object.piaoPai != null)
                message.piaoPai = object.piaoPai | 0;
            if (object.piaoPaiPosition != null)
                message.piaoPaiPosition = object.piaoPaiPosition | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendCardsResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendCardsResponse
         * @static
         * @param {SdkProto.SendCardsResponse} message SendCardsResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendCardsResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.zhuangPos = 0;
                object.currentRound = 0;
                object.state = 0;
                object.nextDiscardPos = 0;
                object.gameInfo = "";
                object.totalRound = 0;
                object.piaoPai = 0;
                object.piaoPaiPosition = 0;
            }
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                object.nextDiscardPos = message.nextDiscardPos;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.User.toObject(message.users[j], options);
            }
            if (message.piaoPai != null && message.hasOwnProperty("piaoPai"))
                object.piaoPai = message.piaoPai;
            if (message.piaoPaiPosition != null && message.hasOwnProperty("piaoPaiPosition"))
                object.piaoPaiPosition = message.piaoPaiPosition;
            return object;
        };

        /**
         * Converts this SendCardsResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendCardsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCardsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCardsResponse;
    })();

    SdkProto.SendDisCardResponse = (function() {

        /**
         * Properties of a SendDisCardResponse.
         * @memberof SdkProto
         * @interface ISendDisCardResponse
         * @property {number|null} [userId] SendDisCardResponse userId
         * @property {Array.<number>|null} [handCards] SendDisCardResponse handCards
         * @property {Array.<number>|null} [outCards] SendDisCardResponse outCards
         * @property {Array.<number>|null} [changeCards] SendDisCardResponse changeCards
         * @property {number|null} [nextPlayer] SendDisCardResponse nextPlayer
         * @property {number|null} [lastPlayer] SendDisCardResponse lastPlayer
         * @property {number|null} [currTimes] SendDisCardResponse currTimes
         */

        /**
         * Constructs a new SendDisCardResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendDisCardResponse.
         * @implements ISendDisCardResponse
         * @constructor
         * @param {SdkProto.ISendDisCardResponse=} [properties] Properties to set
         */
        function SendDisCardResponse(properties) {
            this.handCards = [];
            this.outCards = [];
            this.changeCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDisCardResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.userId = 0;

        /**
         * SendDisCardResponse handCards.
         * @member {Array.<number>} handCards
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.handCards = $util.emptyArray;

        /**
         * SendDisCardResponse outCards.
         * @member {Array.<number>} outCards
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.outCards = $util.emptyArray;

        /**
         * SendDisCardResponse changeCards.
         * @member {Array.<number>} changeCards
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.changeCards = $util.emptyArray;

        /**
         * SendDisCardResponse nextPlayer.
         * @member {number} nextPlayer
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.nextPlayer = 0;

        /**
         * SendDisCardResponse lastPlayer.
         * @member {number} lastPlayer
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.lastPlayer = 0;

        /**
         * SendDisCardResponse currTimes.
         * @member {number} currTimes
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.currTimes = 0;

        /**
         * Creates a new SendDisCardResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {SdkProto.ISendDisCardResponse=} [properties] Properties to set
         * @returns {SdkProto.SendDisCardResponse} SendDisCardResponse instance
         */
        SendDisCardResponse.create = function create(properties) {
            return new SendDisCardResponse(properties);
        };

        /**
         * Encodes the specified SendDisCardResponse message. Does not implicitly {@link SdkProto.SendDisCardResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {SdkProto.ISendDisCardResponse} message SendDisCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDisCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.handCards != null && message.handCards.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.handCards.length; ++i)
                    writer.int32(message.handCards[i]);
                writer.ldelim();
            }
            if (message.outCards != null && message.outCards.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.outCards.length; ++i)
                    writer.int32(message.outCards[i]);
                writer.ldelim();
            }
            if (message.changeCards != null && message.changeCards.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.changeCards.length; ++i)
                    writer.int32(message.changeCards[i]);
                writer.ldelim();
            }
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nextPlayer);
            if (message.lastPlayer != null && message.hasOwnProperty("lastPlayer"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.lastPlayer);
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.currTimes);
            return writer;
        };

        /**
         * Encodes the specified SendDisCardResponse message, length delimited. Does not implicitly {@link SdkProto.SendDisCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {SdkProto.ISendDisCardResponse} message SendDisCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDisCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDisCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendDisCardResponse} SendDisCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDisCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendDisCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.handCards.push(reader.int32());
                    } else
                        message.handCards.push(reader.int32());
                    break;
                case 3:
                    if (!(message.outCards && message.outCards.length))
                        message.outCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.outCards.push(reader.int32());
                    } else
                        message.outCards.push(reader.int32());
                    break;
                case 4:
                    if (!(message.changeCards && message.changeCards.length))
                        message.changeCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.changeCards.push(reader.int32());
                    } else
                        message.changeCards.push(reader.int32());
                    break;
                case 5:
                    message.nextPlayer = reader.int32();
                    break;
                case 6:
                    message.lastPlayer = reader.int32();
                    break;
                case 7:
                    message.currTimes = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendDisCardResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendDisCardResponse} SendDisCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDisCardResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDisCardResponse message.
         * @function verify
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDisCardResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.handCards != null && message.hasOwnProperty("handCards")) {
                if (!Array.isArray(message.handCards))
                    return "handCards: array expected";
                for (var i = 0; i < message.handCards.length; ++i)
                    if (!$util.isInteger(message.handCards[i]))
                        return "handCards: integer[] expected";
            }
            if (message.outCards != null && message.hasOwnProperty("outCards")) {
                if (!Array.isArray(message.outCards))
                    return "outCards: array expected";
                for (var i = 0; i < message.outCards.length; ++i)
                    if (!$util.isInteger(message.outCards[i]))
                        return "outCards: integer[] expected";
            }
            if (message.changeCards != null && message.hasOwnProperty("changeCards")) {
                if (!Array.isArray(message.changeCards))
                    return "changeCards: array expected";
                for (var i = 0; i < message.changeCards.length; ++i)
                    if (!$util.isInteger(message.changeCards[i]))
                        return "changeCards: integer[] expected";
            }
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                if (!$util.isInteger(message.nextPlayer))
                    return "nextPlayer: integer expected";
            if (message.lastPlayer != null && message.hasOwnProperty("lastPlayer"))
                if (!$util.isInteger(message.lastPlayer))
                    return "lastPlayer: integer expected";
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                if (!$util.isInteger(message.currTimes))
                    return "currTimes: integer expected";
            return null;
        };

        /**
         * Creates a SendDisCardResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendDisCardResponse} SendDisCardResponse
         */
        SendDisCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendDisCardResponse)
                return object;
            var message = new $root.SdkProto.SendDisCardResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.handCards) {
                if (!Array.isArray(object.handCards))
                    throw TypeError(".SdkProto.SendDisCardResponse.handCards: array expected");
                message.handCards = [];
                for (var i = 0; i < object.handCards.length; ++i)
                    message.handCards[i] = object.handCards[i] | 0;
            }
            if (object.outCards) {
                if (!Array.isArray(object.outCards))
                    throw TypeError(".SdkProto.SendDisCardResponse.outCards: array expected");
                message.outCards = [];
                for (var i = 0; i < object.outCards.length; ++i)
                    message.outCards[i] = object.outCards[i] | 0;
            }
            if (object.changeCards) {
                if (!Array.isArray(object.changeCards))
                    throw TypeError(".SdkProto.SendDisCardResponse.changeCards: array expected");
                message.changeCards = [];
                for (var i = 0; i < object.changeCards.length; ++i)
                    message.changeCards[i] = object.changeCards[i] | 0;
            }
            if (object.nextPlayer != null)
                message.nextPlayer = object.nextPlayer | 0;
            if (object.lastPlayer != null)
                message.lastPlayer = object.lastPlayer | 0;
            if (object.currTimes != null)
                message.currTimes = object.currTimes | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDisCardResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendDisCardResponse
         * @static
         * @param {SdkProto.SendDisCardResponse} message SendDisCardResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDisCardResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.handCards = [];
                object.outCards = [];
                object.changeCards = [];
            }
            if (options.defaults) {
                object.userId = 0;
                object.nextPlayer = 0;
                object.lastPlayer = 0;
                object.currTimes = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.handCards && message.handCards.length) {
                object.handCards = [];
                for (var j = 0; j < message.handCards.length; ++j)
                    object.handCards[j] = message.handCards[j];
            }
            if (message.outCards && message.outCards.length) {
                object.outCards = [];
                for (var j = 0; j < message.outCards.length; ++j)
                    object.outCards[j] = message.outCards[j];
            }
            if (message.changeCards && message.changeCards.length) {
                object.changeCards = [];
                for (var j = 0; j < message.changeCards.length; ++j)
                    object.changeCards[j] = message.changeCards[j];
            }
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                object.nextPlayer = message.nextPlayer;
            if (message.lastPlayer != null && message.hasOwnProperty("lastPlayer"))
                object.lastPlayer = message.lastPlayer;
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                object.currTimes = message.currTimes;
            return object;
        };

        /**
         * Converts this SendDisCardResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendDisCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDisCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDisCardResponse;
    })();

    SdkProto.SendPassPaiResponse = (function() {

        /**
         * Properties of a SendPassPaiResponse.
         * @memberof SdkProto
         * @interface ISendPassPaiResponse
         * @property {number|null} [userId] SendPassPaiResponse userId
         * @property {number|null} [nextPlayer] SendPassPaiResponse nextPlayer
         * @property {number|null} [lastPlayer] SendPassPaiResponse lastPlayer
         */

        /**
         * Constructs a new SendPassPaiResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendPassPaiResponse.
         * @implements ISendPassPaiResponse
         * @constructor
         * @param {SdkProto.ISendPassPaiResponse=} [properties] Properties to set
         */
        function SendPassPaiResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPassPaiResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendPassPaiResponse
         * @instance
         */
        SendPassPaiResponse.prototype.userId = 0;

        /**
         * SendPassPaiResponse nextPlayer.
         * @member {number} nextPlayer
         * @memberof SdkProto.SendPassPaiResponse
         * @instance
         */
        SendPassPaiResponse.prototype.nextPlayer = 0;

        /**
         * SendPassPaiResponse lastPlayer.
         * @member {number} lastPlayer
         * @memberof SdkProto.SendPassPaiResponse
         * @instance
         */
        SendPassPaiResponse.prototype.lastPlayer = 0;

        /**
         * Creates a new SendPassPaiResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {SdkProto.ISendPassPaiResponse=} [properties] Properties to set
         * @returns {SdkProto.SendPassPaiResponse} SendPassPaiResponse instance
         */
        SendPassPaiResponse.create = function create(properties) {
            return new SendPassPaiResponse(properties);
        };

        /**
         * Encodes the specified SendPassPaiResponse message. Does not implicitly {@link SdkProto.SendPassPaiResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {SdkProto.ISendPassPaiResponse} message SendPassPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPassPaiResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nextPlayer);
            if (message.lastPlayer != null && message.hasOwnProperty("lastPlayer"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.lastPlayer);
            return writer;
        };

        /**
         * Encodes the specified SendPassPaiResponse message, length delimited. Does not implicitly {@link SdkProto.SendPassPaiResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {SdkProto.ISendPassPaiResponse} message SendPassPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPassPaiResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPassPaiResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendPassPaiResponse} SendPassPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPassPaiResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendPassPaiResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.nextPlayer = reader.int32();
                    break;
                case 3:
                    message.lastPlayer = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendPassPaiResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendPassPaiResponse} SendPassPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPassPaiResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPassPaiResponse message.
         * @function verify
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPassPaiResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                if (!$util.isInteger(message.nextPlayer))
                    return "nextPlayer: integer expected";
            if (message.lastPlayer != null && message.hasOwnProperty("lastPlayer"))
                if (!$util.isInteger(message.lastPlayer))
                    return "lastPlayer: integer expected";
            return null;
        };

        /**
         * Creates a SendPassPaiResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendPassPaiResponse} SendPassPaiResponse
         */
        SendPassPaiResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendPassPaiResponse)
                return object;
            var message = new $root.SdkProto.SendPassPaiResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nextPlayer != null)
                message.nextPlayer = object.nextPlayer | 0;
            if (object.lastPlayer != null)
                message.lastPlayer = object.lastPlayer | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPassPaiResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendPassPaiResponse
         * @static
         * @param {SdkProto.SendPassPaiResponse} message SendPassPaiResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPassPaiResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.nextPlayer = 0;
                object.lastPlayer = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nextPlayer != null && message.hasOwnProperty("nextPlayer"))
                object.nextPlayer = message.nextPlayer;
            if (message.lastPlayer != null && message.hasOwnProperty("lastPlayer"))
                object.lastPlayer = message.lastPlayer;
            return object;
        };

        /**
         * Converts this SendPassPaiResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendPassPaiResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPassPaiResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendPassPaiResponse;
    })();

    SdkProto.SendReconnectQuitResponse = (function() {

        /**
         * Properties of a SendReconnectQuitResponse.
         * @memberof SdkProto
         * @interface ISendReconnectQuitResponse
         * @property {number|null} [userId] SendReconnectQuitResponse userId
         */

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendReconnectQuitResponse.
         * @implements ISendReconnectQuitResponse
         * @constructor
         * @param {SdkProto.ISendReconnectQuitResponse=} [properties] Properties to set
         */
        function SendReconnectQuitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendReconnectQuitResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendReconnectQuitResponse
         * @instance
         */
        SendReconnectQuitResponse.prototype.userId = 0;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {SdkProto.ISendReconnectQuitResponse=} [properties] Properties to set
         * @returns {SdkProto.SendReconnectQuitResponse} SendReconnectQuitResponse instance
         */
        SendReconnectQuitResponse.create = function create(properties) {
            return new SendReconnectQuitResponse(properties);
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link SdkProto.SendReconnectQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {SdkProto.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link SdkProto.SendReconnectQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {SdkProto.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendReconnectQuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendReconnectQuitResponse message.
         * @function verify
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendReconnectQuitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendReconnectQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendReconnectQuitResponse} SendReconnectQuitResponse
         */
        SendReconnectQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendReconnectQuitResponse)
                return object;
            var message = new $root.SdkProto.SendReconnectQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendReconnectQuitResponse
         * @static
         * @param {SdkProto.SendReconnectQuitResponse} message SendReconnectQuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendReconnectQuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendReconnectQuitResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendReconnectQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReconnectQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReconnectQuitResponse;
    })();

    SdkProto.UserReconnectResponse = (function() {

        /**
         * Properties of a UserReconnectResponse.
         * @memberof SdkProto
         * @interface IUserReconnectResponse
         * @property {string|null} [tableId] UserReconnectResponse tableId
         * @property {number|null} [gameId] UserReconnectResponse gameId
         * @property {number|null} [state] UserReconnectResponse state
         * @property {number|null} [owner] UserReconnectResponse owner
         * @property {number|null} [currentRound] UserReconnectResponse currentRound
         * @property {number|null} [totalRound] UserReconnectResponse totalRound
         * @property {string|null} [gameInfo] UserReconnectResponse gameInfo
         * @property {number|null} [applicant] UserReconnectResponse applicant
         * @property {number|null} [applyTime] UserReconnectResponse applyTime
         * @property {number|Long|null} [startApplyTime] UserReconnectResponse startApplyTime
         * @property {number|null} [zhuangPos] UserReconnectResponse zhuangPos
         * @property {number|null} [discardPos] UserReconnectResponse discardPos
         * @property {number|null} [nextDiscardPos] UserReconnectResponse nextDiscardPos
         * @property {number|null} [curQDZPos] UserReconnectResponse curQDZPos
         * @property {number|null} [godCard] UserReconnectResponse godCard
         * @property {Array.<number>|null} [leftCards] UserReconnectResponse leftCards
         * @property {Array.<number>|null} [callScoreInfo] UserReconnectResponse callScoreInfo
         * @property {number|null} [currBaseScore] UserReconnectResponse currBaseScore
         * @property {number|null} [currTimes] UserReconnectResponse currTimes
         * @property {SdkProto.IResultData|null} [resultData] UserReconnectResponse resultData
         * @property {Array.<SdkProto.IUser>|null} [users] UserReconnectResponse users
         * @property {number|null} [beilv] UserReconnectResponse beilv
         * @property {number|null} [passPaiCount] UserReconnectResponse passPaiCount
         */

        /**
         * Constructs a new UserReconnectResponse.
         * @memberof SdkProto
         * @classdesc Represents a UserReconnectResponse.
         * @implements IUserReconnectResponse
         * @constructor
         * @param {SdkProto.IUserReconnectResponse=} [properties] Properties to set
         */
        function UserReconnectResponse(properties) {
            this.leftCards = [];
            this.callScoreInfo = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReconnectResponse tableId.
         * @member {string} tableId
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.tableId = "";

        /**
         * UserReconnectResponse gameId.
         * @member {number} gameId
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameId = 0;

        /**
         * UserReconnectResponse state.
         * @member {number} state
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.state = 0;

        /**
         * UserReconnectResponse owner.
         * @member {number} owner
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.owner = 0;

        /**
         * UserReconnectResponse currentRound.
         * @member {number} currentRound
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currentRound = 0;

        /**
         * UserReconnectResponse totalRound.
         * @member {number} totalRound
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.totalRound = 0;

        /**
         * UserReconnectResponse gameInfo.
         * @member {string} gameInfo
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameInfo = "";

        /**
         * UserReconnectResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.applicant = 0;

        /**
         * UserReconnectResponse applyTime.
         * @member {number} applyTime
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.applyTime = 0;

        /**
         * UserReconnectResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserReconnectResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.zhuangPos = 0;

        /**
         * UserReconnectResponse discardPos.
         * @member {number} discardPos
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.discardPos = 0;

        /**
         * UserReconnectResponse nextDiscardPos.
         * @member {number} nextDiscardPos
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.nextDiscardPos = 0;

        /**
         * UserReconnectResponse curQDZPos.
         * @member {number} curQDZPos
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.curQDZPos = 0;

        /**
         * UserReconnectResponse godCard.
         * @member {number} godCard
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.godCard = 0;

        /**
         * UserReconnectResponse leftCards.
         * @member {Array.<number>} leftCards
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.leftCards = $util.emptyArray;

        /**
         * UserReconnectResponse callScoreInfo.
         * @member {Array.<number>} callScoreInfo
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.callScoreInfo = $util.emptyArray;

        /**
         * UserReconnectResponse currBaseScore.
         * @member {number} currBaseScore
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currBaseScore = 0;

        /**
         * UserReconnectResponse currTimes.
         * @member {number} currTimes
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currTimes = 0;

        /**
         * UserReconnectResponse resultData.
         * @member {SdkProto.IResultData|null|undefined} resultData
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.resultData = null;

        /**
         * UserReconnectResponse users.
         * @member {Array.<SdkProto.IUser>} users
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.users = $util.emptyArray;

        /**
         * UserReconnectResponse beilv.
         * @member {number} beilv
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.beilv = 0;

        /**
         * UserReconnectResponse passPaiCount.
         * @member {number} passPaiCount
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.passPaiCount = 0;

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {SdkProto.IUserReconnectResponse=} [properties] Properties to set
         * @returns {SdkProto.UserReconnectResponse} UserReconnectResponse instance
         */
        UserReconnectResponse.create = function create(properties) {
            return new UserReconnectResponse(properties);
        };

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link SdkProto.UserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {SdkProto.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.owner);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalRound);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gameInfo);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.applicant);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.startApplyTime);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.zhuangPos);
            if (message.discardPos != null && message.hasOwnProperty("discardPos"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.discardPos);
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.nextDiscardPos);
            if (message.curQDZPos != null && message.hasOwnProperty("curQDZPos"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.curQDZPos);
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.godCard);
            if (message.leftCards != null && message.leftCards.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (var i = 0; i < message.leftCards.length; ++i)
                    writer.int32(message.leftCards[i]);
                writer.ldelim();
            }
            if (message.callScoreInfo != null && message.callScoreInfo.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (var i = 0; i < message.callScoreInfo.length; ++i)
                    writer.int32(message.callScoreInfo[i]);
                writer.ldelim();
            }
            if (message.currBaseScore != null && message.hasOwnProperty("currBaseScore"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.currBaseScore);
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.currTimes);
            if (message.resultData != null && message.hasOwnProperty("resultData"))
                $root.SdkProto.ResultData.encode(message.resultData, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.User.encode(message.users[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.beilv != null && message.hasOwnProperty("beilv"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.beilv);
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.passPaiCount);
            return writer;
        };

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link SdkProto.UserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {SdkProto.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.UserReconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.owner = reader.int32();
                    break;
                case 5:
                    message.currentRound = reader.int32();
                    break;
                case 6:
                    message.totalRound = reader.int32();
                    break;
                case 7:
                    message.gameInfo = reader.string();
                    break;
                case 8:
                    message.applicant = reader.int32();
                    break;
                case 9:
                    message.applyTime = reader.int32();
                    break;
                case 10:
                    message.startApplyTime = reader.int64();
                    break;
                case 11:
                    message.zhuangPos = reader.int32();
                    break;
                case 12:
                    message.discardPos = reader.int32();
                    break;
                case 13:
                    message.nextDiscardPos = reader.int32();
                    break;
                case 14:
                    message.curQDZPos = reader.int32();
                    break;
                case 15:
                    message.godCard = reader.int32();
                    break;
                case 16:
                    if (!(message.leftCards && message.leftCards.length))
                        message.leftCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.leftCards.push(reader.int32());
                    } else
                        message.leftCards.push(reader.int32());
                    break;
                case 17:
                    if (!(message.callScoreInfo && message.callScoreInfo.length))
                        message.callScoreInfo = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.callScoreInfo.push(reader.int32());
                    } else
                        message.callScoreInfo.push(reader.int32());
                    break;
                case 18:
                    message.currBaseScore = reader.int32();
                    break;
                case 19:
                    message.currTimes = reader.int32();
                    break;
                case 20:
                    message.resultData = $root.SdkProto.ResultData.decode(reader, reader.uint32());
                    break;
                case 21:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.User.decode(reader, reader.uint32()));
                    break;
                case 22:
                    message.beilv = reader.int32();
                    break;
                case 23:
                    message.passPaiCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserReconnectResponse message.
         * @function verify
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.discardPos != null && message.hasOwnProperty("discardPos"))
                if (!$util.isInteger(message.discardPos))
                    return "discardPos: integer expected";
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                if (!$util.isInteger(message.nextDiscardPos))
                    return "nextDiscardPos: integer expected";
            if (message.curQDZPos != null && message.hasOwnProperty("curQDZPos"))
                if (!$util.isInteger(message.curQDZPos))
                    return "curQDZPos: integer expected";
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                if (!$util.isInteger(message.godCard))
                    return "godCard: integer expected";
            if (message.leftCards != null && message.hasOwnProperty("leftCards")) {
                if (!Array.isArray(message.leftCards))
                    return "leftCards: array expected";
                for (var i = 0; i < message.leftCards.length; ++i)
                    if (!$util.isInteger(message.leftCards[i]))
                        return "leftCards: integer[] expected";
            }
            if (message.callScoreInfo != null && message.hasOwnProperty("callScoreInfo")) {
                if (!Array.isArray(message.callScoreInfo))
                    return "callScoreInfo: array expected";
                for (var i = 0; i < message.callScoreInfo.length; ++i)
                    if (!$util.isInteger(message.callScoreInfo[i]))
                        return "callScoreInfo: integer[] expected";
            }
            if (message.currBaseScore != null && message.hasOwnProperty("currBaseScore"))
                if (!$util.isInteger(message.currBaseScore))
                    return "currBaseScore: integer expected";
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                if (!$util.isInteger(message.currTimes))
                    return "currTimes: integer expected";
            if (message.resultData != null && message.hasOwnProperty("resultData")) {
                var error = $root.SdkProto.ResultData.verify(message.resultData);
                if (error)
                    return "resultData." + error;
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.beilv != null && message.hasOwnProperty("beilv"))
                if (!$util.isInteger(message.beilv))
                    return "beilv: integer expected";
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                if (!$util.isInteger(message.passPaiCount))
                    return "passPaiCount: integer expected";
            return null;
        };

        /**
         * Creates a UserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.UserReconnectResponse} UserReconnectResponse
         */
        UserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.UserReconnectResponse)
                return object;
            var message = new $root.SdkProto.UserReconnectResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.discardPos != null)
                message.discardPos = object.discardPos | 0;
            if (object.nextDiscardPos != null)
                message.nextDiscardPos = object.nextDiscardPos | 0;
            if (object.curQDZPos != null)
                message.curQDZPos = object.curQDZPos | 0;
            if (object.godCard != null)
                message.godCard = object.godCard | 0;
            if (object.leftCards) {
                if (!Array.isArray(object.leftCards))
                    throw TypeError(".SdkProto.UserReconnectResponse.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.callScoreInfo) {
                if (!Array.isArray(object.callScoreInfo))
                    throw TypeError(".SdkProto.UserReconnectResponse.callScoreInfo: array expected");
                message.callScoreInfo = [];
                for (var i = 0; i < object.callScoreInfo.length; ++i)
                    message.callScoreInfo[i] = object.callScoreInfo[i] | 0;
            }
            if (object.currBaseScore != null)
                message.currBaseScore = object.currBaseScore | 0;
            if (object.currTimes != null)
                message.currTimes = object.currTimes | 0;
            if (object.resultData != null) {
                if (typeof object.resultData !== "object")
                    throw TypeError(".SdkProto.UserReconnectResponse.resultData: object expected");
                message.resultData = $root.SdkProto.ResultData.fromObject(object.resultData);
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.UserReconnectResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.UserReconnectResponse.users: object expected");
                    message.users[i] = $root.SdkProto.User.fromObject(object.users[i]);
                }
            }
            if (object.beilv != null)
                message.beilv = object.beilv | 0;
            if (object.passPaiCount != null)
                message.passPaiCount = object.passPaiCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.UserReconnectResponse
         * @static
         * @param {SdkProto.UserReconnectResponse} message UserReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.leftCards = [];
                object.callScoreInfo = [];
                object.users = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.gameId = 0;
                object.state = 0;
                object.owner = 0;
                object.currentRound = 0;
                object.totalRound = 0;
                object.gameInfo = "";
                object.applicant = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
                object.zhuangPos = 0;
                object.discardPos = 0;
                object.nextDiscardPos = 0;
                object.curQDZPos = 0;
                object.godCard = 0;
                object.currBaseScore = 0;
                object.currTimes = 0;
                object.resultData = null;
                object.beilv = 0;
                object.passPaiCount = 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.discardPos != null && message.hasOwnProperty("discardPos"))
                object.discardPos = message.discardPos;
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                object.nextDiscardPos = message.nextDiscardPos;
            if (message.curQDZPos != null && message.hasOwnProperty("curQDZPos"))
                object.curQDZPos = message.curQDZPos;
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                object.godCard = message.godCard;
            if (message.leftCards && message.leftCards.length) {
                object.leftCards = [];
                for (var j = 0; j < message.leftCards.length; ++j)
                    object.leftCards[j] = message.leftCards[j];
            }
            if (message.callScoreInfo && message.callScoreInfo.length) {
                object.callScoreInfo = [];
                for (var j = 0; j < message.callScoreInfo.length; ++j)
                    object.callScoreInfo[j] = message.callScoreInfo[j];
            }
            if (message.currBaseScore != null && message.hasOwnProperty("currBaseScore"))
                object.currBaseScore = message.currBaseScore;
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                object.currTimes = message.currTimes;
            if (message.resultData != null && message.hasOwnProperty("resultData"))
                object.resultData = $root.SdkProto.ResultData.toObject(message.resultData, options);
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.User.toObject(message.users[j], options);
            }
            if (message.beilv != null && message.hasOwnProperty("beilv"))
                object.beilv = message.beilv;
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                object.passPaiCount = message.passPaiCount;
            return object;
        };

        /**
         * Converts this UserReconnectResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.UserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectResponse;
    })();

    SdkProto.SendUserReconnectResponse = (function() {

        /**
         * Properties of a SendUserReconnectResponse.
         * @memberof SdkProto
         * @interface ISendUserReconnectResponse
         * @property {number|null} [userId] SendUserReconnectResponse userId
         * @property {number|null} [onLine] SendUserReconnectResponse onLine
         */

        /**
         * Constructs a new SendUserReconnectResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserReconnectResponse.
         * @implements ISendUserReconnectResponse
         * @constructor
         * @param {SdkProto.ISendUserReconnectResponse=} [properties] Properties to set
         */
        function SendUserReconnectResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserReconnectResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.userId = 0;

        /**
         * SendUserReconnectResponse onLine.
         * @member {number} onLine
         * @memberof SdkProto.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.onLine = 0;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {SdkProto.ISendUserReconnectResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserReconnectResponse} SendUserReconnectResponse instance
         */
        SendUserReconnectResponse.create = function create(properties) {
            return new SendUserReconnectResponse(properties);
        };

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link SdkProto.SendUserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {SdkProto.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onLine);
            return writer;
        };

        /**
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {SdkProto.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserReconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.onLine = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserReconnectResponse message.
         * @function verify
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserReconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                if (!$util.isInteger(message.onLine))
                    return "onLine: integer expected";
            return null;
        };

        /**
         * Creates a SendUserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserReconnectResponse} SendUserReconnectResponse
         */
        SendUserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserReconnectResponse)
                return object;
            var message = new $root.SdkProto.SendUserReconnectResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserReconnectResponse
         * @static
         * @param {SdkProto.SendUserReconnectResponse} message SendUserReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.onLine = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                object.onLine = message.onLine;
            return object;
        };

        /**
         * Converts this SendUserReconnectResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReconnectResponse;
    })();

    SdkProto.SendApplyDismissResponse = (function() {

        /**
         * Properties of a SendApplyDismissResponse.
         * @memberof SdkProto
         * @interface ISendApplyDismissResponse
         * @property {number|null} [userId] SendApplyDismissResponse userId
         * @property {number|null} [applicant] SendApplyDismissResponse applicant
         * @property {number|null} [agree] SendApplyDismissResponse agree
         * @property {number|null} [applyTime] SendApplyDismissResponse applyTime
         * @property {number|Long|null} [startApplyTime] SendApplyDismissResponse startApplyTime
         */

        /**
         * Constructs a new SendApplyDismissResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendApplyDismissResponse.
         * @implements ISendApplyDismissResponse
         * @constructor
         * @param {SdkProto.ISendApplyDismissResponse=} [properties] Properties to set
         */
        function SendApplyDismissResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendApplyDismissResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.userId = 0;

        /**
         * SendApplyDismissResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.applicant = 0;

        /**
         * SendApplyDismissResponse agree.
         * @member {number} agree
         * @memberof SdkProto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.agree = 0;

        /**
         * SendApplyDismissResponse applyTime.
         * @member {number} applyTime
         * @memberof SdkProto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.applyTime = 0;

        /**
         * SendApplyDismissResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof SdkProto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendApplyDismissResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {SdkProto.ISendApplyDismissResponse=} [properties] Properties to set
         * @returns {SdkProto.SendApplyDismissResponse} SendApplyDismissResponse instance
         */
        SendApplyDismissResponse.create = function create(properties) {
            return new SendApplyDismissResponse(properties);
        };

        /**
         * Encodes the specified SendApplyDismissResponse message. Does not implicitly {@link SdkProto.SendApplyDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {SdkProto.ISendApplyDismissResponse} message SendApplyDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendApplyDismissResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.applicant);
            if (message.agree != null && message.hasOwnProperty("agree"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.agree);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.startApplyTime);
            return writer;
        };

        /**
         * Encodes the specified SendApplyDismissResponse message, length delimited. Does not implicitly {@link SdkProto.SendApplyDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {SdkProto.ISendApplyDismissResponse} message SendApplyDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendApplyDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendApplyDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendApplyDismissResponse} SendApplyDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendApplyDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendApplyDismissResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.applicant = reader.int32();
                    break;
                case 3:
                    message.agree = reader.int32();
                    break;
                case 4:
                    message.applyTime = reader.int32();
                    break;
                case 5:
                    message.startApplyTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendApplyDismissResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendApplyDismissResponse} SendApplyDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendApplyDismissResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendApplyDismissResponse message.
         * @function verify
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendApplyDismissResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.agree != null && message.hasOwnProperty("agree"))
                if (!$util.isInteger(message.agree))
                    return "agree: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a SendApplyDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendApplyDismissResponse} SendApplyDismissResponse
         */
        SendApplyDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendApplyDismissResponse)
                return object;
            var message = new $root.SdkProto.SendApplyDismissResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.agree != null)
                message.agree = object.agree | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SendApplyDismissResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendApplyDismissResponse
         * @static
         * @param {SdkProto.SendApplyDismissResponse} message SendApplyDismissResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendApplyDismissResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.applicant = 0;
                object.agree = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.agree != null && message.hasOwnProperty("agree"))
                object.agree = message.agree;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            return object;
        };

        /**
         * Converts this SendApplyDismissResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendApplyDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendApplyDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendApplyDismissResponse;
    })();

    SdkProto.SendAgreeDismissResponse = (function() {

        /**
         * Properties of a SendAgreeDismissResponse.
         * @memberof SdkProto
         * @interface ISendAgreeDismissResponse
         * @property {number|null} [agree] SendAgreeDismissResponse agree
         * @property {number|null} [userId] SendAgreeDismissResponse userId
         * @property {number|null} [applicant] SendAgreeDismissResponse applicant
         */

        /**
         * Constructs a new SendAgreeDismissResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendAgreeDismissResponse.
         * @implements ISendAgreeDismissResponse
         * @constructor
         * @param {SdkProto.ISendAgreeDismissResponse=} [properties] Properties to set
         */
        function SendAgreeDismissResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendAgreeDismissResponse agree.
         * @member {number} agree
         * @memberof SdkProto.SendAgreeDismissResponse
         * @instance
         */
        SendAgreeDismissResponse.prototype.agree = 0;

        /**
         * SendAgreeDismissResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendAgreeDismissResponse
         * @instance
         */
        SendAgreeDismissResponse.prototype.userId = 0;

        /**
         * SendAgreeDismissResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.SendAgreeDismissResponse
         * @instance
         */
        SendAgreeDismissResponse.prototype.applicant = 0;

        /**
         * Creates a new SendAgreeDismissResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {SdkProto.ISendAgreeDismissResponse=} [properties] Properties to set
         * @returns {SdkProto.SendAgreeDismissResponse} SendAgreeDismissResponse instance
         */
        SendAgreeDismissResponse.create = function create(properties) {
            return new SendAgreeDismissResponse(properties);
        };

        /**
         * Encodes the specified SendAgreeDismissResponse message. Does not implicitly {@link SdkProto.SendAgreeDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {SdkProto.ISendAgreeDismissResponse} message SendAgreeDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendAgreeDismissResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agree != null && message.hasOwnProperty("agree"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.agree);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.applicant);
            return writer;
        };

        /**
         * Encodes the specified SendAgreeDismissResponse message, length delimited. Does not implicitly {@link SdkProto.SendAgreeDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {SdkProto.ISendAgreeDismissResponse} message SendAgreeDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendAgreeDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendAgreeDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendAgreeDismissResponse} SendAgreeDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendAgreeDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendAgreeDismissResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.agree = reader.int32();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                case 3:
                    message.applicant = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendAgreeDismissResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendAgreeDismissResponse} SendAgreeDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendAgreeDismissResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendAgreeDismissResponse message.
         * @function verify
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendAgreeDismissResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agree != null && message.hasOwnProperty("agree"))
                if (!$util.isInteger(message.agree))
                    return "agree: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            return null;
        };

        /**
         * Creates a SendAgreeDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendAgreeDismissResponse} SendAgreeDismissResponse
         */
        SendAgreeDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendAgreeDismissResponse)
                return object;
            var message = new $root.SdkProto.SendAgreeDismissResponse();
            if (object.agree != null)
                message.agree = object.agree | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendAgreeDismissResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendAgreeDismissResponse
         * @static
         * @param {SdkProto.SendAgreeDismissResponse} message SendAgreeDismissResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendAgreeDismissResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.agree = 0;
                object.userId = 0;
                object.applicant = 0;
            }
            if (message.agree != null && message.hasOwnProperty("agree"))
                object.agree = message.agree;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            return object;
        };

        /**
         * Converts this SendAgreeDismissResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendAgreeDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendAgreeDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendAgreeDismissResponse;
    })();

    SdkProto.SendDismissResultResponse = (function() {

        /**
         * Properties of a SendDismissResultResponse.
         * @memberof SdkProto
         * @interface ISendDismissResultResponse
         * @property {number|null} [applicant] SendDismissResultResponse applicant
         * @property {number|null} [res] SendDismissResultResponse res
         * @property {number|null} [notAgreeUserId] SendDismissResultResponse notAgreeUserId
         */

        /**
         * Constructs a new SendDismissResultResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendDismissResultResponse.
         * @implements ISendDismissResultResponse
         * @constructor
         * @param {SdkProto.ISendDismissResultResponse=} [properties] Properties to set
         */
        function SendDismissResultResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDismissResultResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.SendDismissResultResponse
         * @instance
         */
        SendDismissResultResponse.prototype.applicant = 0;

        /**
         * SendDismissResultResponse res.
         * @member {number} res
         * @memberof SdkProto.SendDismissResultResponse
         * @instance
         */
        SendDismissResultResponse.prototype.res = 0;

        /**
         * SendDismissResultResponse notAgreeUserId.
         * @member {number} notAgreeUserId
         * @memberof SdkProto.SendDismissResultResponse
         * @instance
         */
        SendDismissResultResponse.prototype.notAgreeUserId = 0;

        /**
         * Creates a new SendDismissResultResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {SdkProto.ISendDismissResultResponse=} [properties] Properties to set
         * @returns {SdkProto.SendDismissResultResponse} SendDismissResultResponse instance
         */
        SendDismissResultResponse.create = function create(properties) {
            return new SendDismissResultResponse(properties);
        };

        /**
         * Encodes the specified SendDismissResultResponse message. Does not implicitly {@link SdkProto.SendDismissResultResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {SdkProto.ISendDismissResultResponse} message SendDismissResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDismissResultResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.applicant);
            if (message.res != null && message.hasOwnProperty("res"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.res);
            if (message.notAgreeUserId != null && message.hasOwnProperty("notAgreeUserId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.notAgreeUserId);
            return writer;
        };

        /**
         * Encodes the specified SendDismissResultResponse message, length delimited. Does not implicitly {@link SdkProto.SendDismissResultResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {SdkProto.ISendDismissResultResponse} message SendDismissResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDismissResultResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDismissResultResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendDismissResultResponse} SendDismissResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDismissResultResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendDismissResultResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.applicant = reader.int32();
                    break;
                case 2:
                    message.res = reader.int32();
                    break;
                case 3:
                    message.notAgreeUserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendDismissResultResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendDismissResultResponse} SendDismissResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDismissResultResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDismissResultResponse message.
         * @function verify
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDismissResultResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.res != null && message.hasOwnProperty("res"))
                if (!$util.isInteger(message.res))
                    return "res: integer expected";
            if (message.notAgreeUserId != null && message.hasOwnProperty("notAgreeUserId"))
                if (!$util.isInteger(message.notAgreeUserId))
                    return "notAgreeUserId: integer expected";
            return null;
        };

        /**
         * Creates a SendDismissResultResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendDismissResultResponse} SendDismissResultResponse
         */
        SendDismissResultResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendDismissResultResponse)
                return object;
            var message = new $root.SdkProto.SendDismissResultResponse();
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.res != null)
                message.res = object.res | 0;
            if (object.notAgreeUserId != null)
                message.notAgreeUserId = object.notAgreeUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDismissResultResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendDismissResultResponse
         * @static
         * @param {SdkProto.SendDismissResultResponse} message SendDismissResultResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDismissResultResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.applicant = 0;
                object.res = 0;
                object.notAgreeUserId = 0;
            }
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.res != null && message.hasOwnProperty("res"))
                object.res = message.res;
            if (message.notAgreeUserId != null && message.hasOwnProperty("notAgreeUserId"))
                object.notAgreeUserId = message.notAgreeUserId;
            return object;
        };

        /**
         * Converts this SendDismissResultResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendDismissResultResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDismissResultResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDismissResultResponse;
    })();

    SdkProto.SendUserQuitResponse = (function() {

        /**
         * Properties of a SendUserQuitResponse.
         * @memberof SdkProto
         * @interface ISendUserQuitResponse
         * @property {number|null} [userId] SendUserQuitResponse userId
         * @property {boolean|null} [isOwnerQuit] SendUserQuitResponse isOwnerQuit
         * @property {string|null} [nickname] SendUserQuitResponse nickname
         * @property {number|null} [position] SendUserQuitResponse position
         * @property {string|null} [message] SendUserQuitResponse message
         * @property {string|null} [tableId] SendUserQuitResponse tableId
         */

        /**
         * Constructs a new SendUserQuitResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserQuitResponse.
         * @implements ISendUserQuitResponse
         * @constructor
         * @param {SdkProto.ISendUserQuitResponse=} [properties] Properties to set
         */
        function SendUserQuitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserQuitResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.userId = 0;

        /**
         * SendUserQuitResponse isOwnerQuit.
         * @member {boolean} isOwnerQuit
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.isOwnerQuit = false;

        /**
         * SendUserQuitResponse nickname.
         * @member {string} nickname
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.nickname = "";

        /**
         * SendUserQuitResponse position.
         * @member {number} position
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.position = 0;

        /**
         * SendUserQuitResponse message.
         * @member {string} message
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.message = "";

        /**
         * SendUserQuitResponse tableId.
         * @member {string} tableId
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.tableId = "";

        /**
         * Creates a new SendUserQuitResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {SdkProto.ISendUserQuitResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserQuitResponse} SendUserQuitResponse instance
         */
        SendUserQuitResponse.create = function create(properties) {
            return new SendUserQuitResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link SdkProto.SendUserQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {SdkProto.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.isOwnerQuit != null && message.hasOwnProperty("isOwnerQuit"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOwnerQuit);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.position);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.message);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.tableId);
            return writer;
        };

        /**
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {SdkProto.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserQuitResponse} SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserQuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.isOwnerQuit = reader.bool();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                case 4:
                    message.position = reader.int32();
                    break;
                case 5:
                    message.message = reader.string();
                    break;
                case 6:
                    message.tableId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserQuitResponse} SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserQuitResponse message.
         * @function verify
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserQuitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.isOwnerQuit != null && message.hasOwnProperty("isOwnerQuit"))
                if (typeof message.isOwnerQuit !== "boolean")
                    return "isOwnerQuit: boolean expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            return null;
        };

        /**
         * Creates a SendUserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserQuitResponse} SendUserQuitResponse
         */
        SendUserQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserQuitResponse)
                return object;
            var message = new $root.SdkProto.SendUserQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.isOwnerQuit != null)
                message.isOwnerQuit = Boolean(object.isOwnerQuit);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.position != null)
                message.position = object.position | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            return message;
        };

        /**
         * Creates a plain object from a SendUserQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserQuitResponse
         * @static
         * @param {SdkProto.SendUserQuitResponse} message SendUserQuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.isOwnerQuit = false;
                object.nickname = "";
                object.position = 0;
                object.message = "";
                object.tableId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.isOwnerQuit != null && message.hasOwnProperty("isOwnerQuit"))
                object.isOwnerQuit = message.isOwnerQuit;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            return object;
        };

        /**
         * Converts this SendUserQuitResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitResponse;
    })();

    SdkProto.SendMessageResponse = (function() {

        /**
         * Properties of a SendMessageResponse.
         * @memberof SdkProto
         * @interface ISendMessageResponse
         * @property {number|null} [userId] SendMessageResponse userId
         * @property {string|null} [content] SendMessageResponse content
         * @property {number|null} [toUserId] SendMessageResponse toUserId
         */

        /**
         * Constructs a new SendMessageResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendMessageResponse.
         * @implements ISendMessageResponse
         * @constructor
         * @param {SdkProto.ISendMessageResponse=} [properties] Properties to set
         */
        function SendMessageResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.userId = 0;

        /**
         * SendMessageResponse content.
         * @member {string} content
         * @memberof SdkProto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.content = "";

        /**
         * SendMessageResponse toUserId.
         * @member {number} toUserId
         * @memberof SdkProto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.toUserId = 0;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {SdkProto.ISendMessageResponse=} [properties] Properties to set
         * @returns {SdkProto.SendMessageResponse} SendMessageResponse instance
         */
        SendMessageResponse.create = function create(properties) {
            return new SendMessageResponse(properties);
        };

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link SdkProto.SendMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {SdkProto.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.toUserId);
            return writer;
        };

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link SdkProto.SendMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {SdkProto.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendMessageResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                case 3:
                    message.toUserId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessageResponse message.
         * @function verify
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                if (!$util.isInteger(message.toUserId))
                    return "toUserId: integer expected";
            return null;
        };

        /**
         * Creates a SendMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendMessageResponse} SendMessageResponse
         */
        SendMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendMessageResponse)
                return object;
            var message = new $root.SdkProto.SendMessageResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.toUserId != null)
                message.toUserId = object.toUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendMessageResponse
         * @static
         * @param {SdkProto.SendMessageResponse} message SendMessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.content = "";
                object.toUserId = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                object.toUserId = message.toUserId;
            return object;
        };

        /**
         * Converts this SendMessageResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMessageResponse;
    })();

    SdkProto.SendCoinRefreshResponse = (function() {

        /**
         * Properties of a SendCoinRefreshResponse.
         * @memberof SdkProto
         * @interface ISendCoinRefreshResponse
         * @property {number|null} [userId] SendCoinRefreshResponse userId
         * @property {number|null} [coin] SendCoinRefreshResponse coin
         */

        /**
         * Constructs a new SendCoinRefreshResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendCoinRefreshResponse.
         * @implements ISendCoinRefreshResponse
         * @constructor
         * @param {SdkProto.ISendCoinRefreshResponse=} [properties] Properties to set
         */
        function SendCoinRefreshResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendCoinRefreshResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.userId = 0;

        /**
         * SendCoinRefreshResponse coin.
         * @member {number} coin
         * @memberof SdkProto.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.coin = 0;

        /**
         * Creates a new SendCoinRefreshResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {SdkProto.ISendCoinRefreshResponse=} [properties] Properties to set
         * @returns {SdkProto.SendCoinRefreshResponse} SendCoinRefreshResponse instance
         */
        SendCoinRefreshResponse.create = function create(properties) {
            return new SendCoinRefreshResponse(properties);
        };

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link SdkProto.SendCoinRefreshResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {SdkProto.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinRefreshResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coin);
            return writer;
        };

        /**
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link SdkProto.SendCoinRefreshResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {SdkProto.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinRefreshResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendCoinRefreshResponse} SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinRefreshResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendCoinRefreshResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.coin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendCoinRefreshResponse} SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinRefreshResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendCoinRefreshResponse message.
         * @function verify
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendCoinRefreshResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            return null;
        };

        /**
         * Creates a SendCoinRefreshResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendCoinRefreshResponse} SendCoinRefreshResponse
         */
        SendCoinRefreshResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendCoinRefreshResponse)
                return object;
            var message = new $root.SdkProto.SendCoinRefreshResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendCoinRefreshResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendCoinRefreshResponse
         * @static
         * @param {SdkProto.SendCoinRefreshResponse} message SendCoinRefreshResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendCoinRefreshResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.coin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            return object;
        };

        /**
         * Converts this SendCoinRefreshResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendCoinRefreshResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCoinRefreshResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCoinRefreshResponse;
    })();

    SdkProto.SendUserOnBackResponse = (function() {

        /**
         * Properties of a SendUserOnBackResponse.
         * @memberof SdkProto
         * @interface ISendUserOnBackResponse
         * @property {number|null} [userId] SendUserOnBackResponse userId
         * @property {number|null} [leaveState] SendUserOnBackResponse leaveState
         */

        /**
         * Constructs a new SendUserOnBackResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserOnBackResponse.
         * @implements ISendUserOnBackResponse
         * @constructor
         * @param {SdkProto.ISendUserOnBackResponse=} [properties] Properties to set
         */
        function SendUserOnBackResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserOnBackResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.userId = 0;

        /**
         * SendUserOnBackResponse leaveState.
         * @member {number} leaveState
         * @memberof SdkProto.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.leaveState = 0;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {SdkProto.ISendUserOnBackResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserOnBackResponse} SendUserOnBackResponse instance
         */
        SendUserOnBackResponse.create = function create(properties) {
            return new SendUserOnBackResponse(properties);
        };

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link SdkProto.SendUserOnBackResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {SdkProto.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.leaveState);
            return writer;
        };

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserOnBackResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {SdkProto.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserOnBackResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.leaveState = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserOnBackResponse message.
         * @function verify
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserOnBackResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                if (!$util.isInteger(message.leaveState))
                    return "leaveState: integer expected";
            return null;
        };

        /**
         * Creates a SendUserOnBackResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserOnBackResponse} SendUserOnBackResponse
         */
        SendUserOnBackResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserOnBackResponse)
                return object;
            var message = new $root.SdkProto.SendUserOnBackResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserOnBackResponse
         * @static
         * @param {SdkProto.SendUserOnBackResponse} message SendUserOnBackResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserOnBackResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.leaveState = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.leaveState != null && message.hasOwnProperty("leaveState"))
                object.leaveState = message.leaveState;
            return object;
        };

        /**
         * Converts this SendUserOnBackResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserOnBackResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserOnBackResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserOnBackResponse;
    })();

    SdkProto.SendRoundRecordResponse = (function() {

        /**
         * Properties of a SendRoundRecordResponse.
         * @memberof SdkProto
         * @interface ISendRoundRecordResponse
         * @property {string|null} [tableId] SendRoundRecordResponse tableId
         * @property {number|null} [gameId] SendRoundRecordResponse gameId
         * @property {number|null} [state] SendRoundRecordResponse state
         * @property {number|null} [owner] SendRoundRecordResponse owner
         * @property {number|null} [currentRound] SendRoundRecordResponse currentRound
         * @property {number|null} [totalRound] SendRoundRecordResponse totalRound
         * @property {string|null} [gameInfo] SendRoundRecordResponse gameInfo
         * @property {number|null} [applicant] SendRoundRecordResponse applicant
         * @property {number|null} [applyTime] SendRoundRecordResponse applyTime
         * @property {number|Long|null} [startApplyTime] SendRoundRecordResponse startApplyTime
         * @property {number|null} [zhuangPos] SendRoundRecordResponse zhuangPos
         * @property {number|null} [discardPos] SendRoundRecordResponse discardPos
         * @property {number|null} [nextDiscardPos] SendRoundRecordResponse nextDiscardPos
         * @property {number|null} [curQDZPos] SendRoundRecordResponse curQDZPos
         * @property {number|null} [godCard] SendRoundRecordResponse godCard
         * @property {Array.<number>|null} [leftCards] SendRoundRecordResponse leftCards
         * @property {Array.<number>|null} [callScoreInfo] SendRoundRecordResponse callScoreInfo
         * @property {number|null} [currBaseScore] SendRoundRecordResponse currBaseScore
         * @property {number|null} [currTimes] SendRoundRecordResponse currTimes
         * @property {number|null} [isOver] SendRoundRecordResponse isOver
         * @property {string|null} [time] SendRoundRecordResponse time
         * @property {number|null} [winners] SendRoundRecordResponse winners
         * @property {number|null} [springInfo] SendRoundRecordResponse springInfo
         * @property {Array.<SdkProto.IUser>|null} [users] SendRoundRecordResponse users
         */

        /**
         * Constructs a new SendRoundRecordResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendRoundRecordResponse.
         * @implements ISendRoundRecordResponse
         * @constructor
         * @param {SdkProto.ISendRoundRecordResponse=} [properties] Properties to set
         */
        function SendRoundRecordResponse(properties) {
            this.leftCards = [];
            this.callScoreInfo = [];
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendRoundRecordResponse tableId.
         * @member {string} tableId
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.tableId = "";

        /**
         * SendRoundRecordResponse gameId.
         * @member {number} gameId
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.gameId = 0;

        /**
         * SendRoundRecordResponse state.
         * @member {number} state
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.state = 0;

        /**
         * SendRoundRecordResponse owner.
         * @member {number} owner
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.owner = 0;

        /**
         * SendRoundRecordResponse currentRound.
         * @member {number} currentRound
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.currentRound = 0;

        /**
         * SendRoundRecordResponse totalRound.
         * @member {number} totalRound
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.totalRound = 0;

        /**
         * SendRoundRecordResponse gameInfo.
         * @member {string} gameInfo
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.gameInfo = "";

        /**
         * SendRoundRecordResponse applicant.
         * @member {number} applicant
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.applicant = 0;

        /**
         * SendRoundRecordResponse applyTime.
         * @member {number} applyTime
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.applyTime = 0;

        /**
         * SendRoundRecordResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendRoundRecordResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.zhuangPos = 0;

        /**
         * SendRoundRecordResponse discardPos.
         * @member {number} discardPos
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.discardPos = 0;

        /**
         * SendRoundRecordResponse nextDiscardPos.
         * @member {number} nextDiscardPos
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.nextDiscardPos = 0;

        /**
         * SendRoundRecordResponse curQDZPos.
         * @member {number} curQDZPos
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.curQDZPos = 0;

        /**
         * SendRoundRecordResponse godCard.
         * @member {number} godCard
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.godCard = 0;

        /**
         * SendRoundRecordResponse leftCards.
         * @member {Array.<number>} leftCards
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.leftCards = $util.emptyArray;

        /**
         * SendRoundRecordResponse callScoreInfo.
         * @member {Array.<number>} callScoreInfo
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.callScoreInfo = $util.emptyArray;

        /**
         * SendRoundRecordResponse currBaseScore.
         * @member {number} currBaseScore
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.currBaseScore = 0;

        /**
         * SendRoundRecordResponse currTimes.
         * @member {number} currTimes
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.currTimes = 0;

        /**
         * SendRoundRecordResponse isOver.
         * @member {number} isOver
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.isOver = 0;

        /**
         * SendRoundRecordResponse time.
         * @member {string} time
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.time = "";

        /**
         * SendRoundRecordResponse winners.
         * @member {number} winners
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.winners = 0;

        /**
         * SendRoundRecordResponse springInfo.
         * @member {number} springInfo
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.springInfo = 0;

        /**
         * SendRoundRecordResponse users.
         * @member {Array.<SdkProto.IUser>} users
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendRoundRecordResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {SdkProto.ISendRoundRecordResponse=} [properties] Properties to set
         * @returns {SdkProto.SendRoundRecordResponse} SendRoundRecordResponse instance
         */
        SendRoundRecordResponse.create = function create(properties) {
            return new SendRoundRecordResponse(properties);
        };

        /**
         * Encodes the specified SendRoundRecordResponse message. Does not implicitly {@link SdkProto.SendRoundRecordResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {SdkProto.ISendRoundRecordResponse} message SendRoundRecordResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundRecordResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.gameId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.owner);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.currentRound);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.totalRound);
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.gameInfo);
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.applicant);
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.applyTime);
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.startApplyTime);
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.zhuangPos);
            if (message.discardPos != null && message.hasOwnProperty("discardPos"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.discardPos);
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.nextDiscardPos);
            if (message.curQDZPos != null && message.hasOwnProperty("curQDZPos"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.curQDZPos);
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.godCard);
            if (message.leftCards != null && message.leftCards.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (var i = 0; i < message.leftCards.length; ++i)
                    writer.int32(message.leftCards[i]);
                writer.ldelim();
            }
            if (message.callScoreInfo != null && message.callScoreInfo.length) {
                writer.uint32(/* id 17, wireType 2 =*/138).fork();
                for (var i = 0; i < message.callScoreInfo.length; ++i)
                    writer.int32(message.callScoreInfo[i]);
                writer.ldelim();
            }
            if (message.currBaseScore != null && message.hasOwnProperty("currBaseScore"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.currBaseScore);
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.currTimes);
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.isOver);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.time);
            if (message.winners != null && message.hasOwnProperty("winners"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.winners);
            if (message.springInfo != null && message.hasOwnProperty("springInfo"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.springInfo);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.User.encode(message.users[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendRoundRecordResponse message, length delimited. Does not implicitly {@link SdkProto.SendRoundRecordResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {SdkProto.ISendRoundRecordResponse} message SendRoundRecordResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundRecordResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRoundRecordResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendRoundRecordResponse} SendRoundRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRoundRecordResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendRoundRecordResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.gameId = reader.int32();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.owner = reader.int32();
                    break;
                case 5:
                    message.currentRound = reader.int32();
                    break;
                case 6:
                    message.totalRound = reader.int32();
                    break;
                case 7:
                    message.gameInfo = reader.string();
                    break;
                case 8:
                    message.applicant = reader.int32();
                    break;
                case 9:
                    message.applyTime = reader.int32();
                    break;
                case 10:
                    message.startApplyTime = reader.int64();
                    break;
                case 11:
                    message.zhuangPos = reader.int32();
                    break;
                case 12:
                    message.discardPos = reader.int32();
                    break;
                case 13:
                    message.nextDiscardPos = reader.int32();
                    break;
                case 14:
                    message.curQDZPos = reader.int32();
                    break;
                case 15:
                    message.godCard = reader.int32();
                    break;
                case 16:
                    if (!(message.leftCards && message.leftCards.length))
                        message.leftCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.leftCards.push(reader.int32());
                    } else
                        message.leftCards.push(reader.int32());
                    break;
                case 17:
                    if (!(message.callScoreInfo && message.callScoreInfo.length))
                        message.callScoreInfo = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.callScoreInfo.push(reader.int32());
                    } else
                        message.callScoreInfo.push(reader.int32());
                    break;
                case 18:
                    message.currBaseScore = reader.int32();
                    break;
                case 19:
                    message.currTimes = reader.int32();
                    break;
                case 20:
                    message.isOver = reader.int32();
                    break;
                case 21:
                    message.time = reader.string();
                    break;
                case 22:
                    message.winners = reader.int32();
                    break;
                case 23:
                    message.springInfo = reader.int32();
                    break;
                case 24:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendRoundRecordResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendRoundRecordResponse} SendRoundRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRoundRecordResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendRoundRecordResponse message.
         * @function verify
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendRoundRecordResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                if (!$util.isString(message.gameInfo))
                    return "gameInfo: string expected";
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                if (!$util.isInteger(message.applicant))
                    return "applicant: integer expected";
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                if (!$util.isInteger(message.applyTime))
                    return "applyTime: integer expected";
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (!$util.isInteger(message.startApplyTime) && !(message.startApplyTime && $util.isInteger(message.startApplyTime.low) && $util.isInteger(message.startApplyTime.high)))
                    return "startApplyTime: integer|Long expected";
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                if (!$util.isInteger(message.zhuangPos))
                    return "zhuangPos: integer expected";
            if (message.discardPos != null && message.hasOwnProperty("discardPos"))
                if (!$util.isInteger(message.discardPos))
                    return "discardPos: integer expected";
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                if (!$util.isInteger(message.nextDiscardPos))
                    return "nextDiscardPos: integer expected";
            if (message.curQDZPos != null && message.hasOwnProperty("curQDZPos"))
                if (!$util.isInteger(message.curQDZPos))
                    return "curQDZPos: integer expected";
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                if (!$util.isInteger(message.godCard))
                    return "godCard: integer expected";
            if (message.leftCards != null && message.hasOwnProperty("leftCards")) {
                if (!Array.isArray(message.leftCards))
                    return "leftCards: array expected";
                for (var i = 0; i < message.leftCards.length; ++i)
                    if (!$util.isInteger(message.leftCards[i]))
                        return "leftCards: integer[] expected";
            }
            if (message.callScoreInfo != null && message.hasOwnProperty("callScoreInfo")) {
                if (!Array.isArray(message.callScoreInfo))
                    return "callScoreInfo: array expected";
                for (var i = 0; i < message.callScoreInfo.length; ++i)
                    if (!$util.isInteger(message.callScoreInfo[i]))
                        return "callScoreInfo: integer[] expected";
            }
            if (message.currBaseScore != null && message.hasOwnProperty("currBaseScore"))
                if (!$util.isInteger(message.currBaseScore))
                    return "currBaseScore: integer expected";
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                if (!$util.isInteger(message.currTimes))
                    return "currTimes: integer expected";
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                if (!$util.isInteger(message.isOver))
                    return "isOver: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.winners != null && message.hasOwnProperty("winners"))
                if (!$util.isInteger(message.winners))
                    return "winners: integer expected";
            if (message.springInfo != null && message.hasOwnProperty("springInfo"))
                if (!$util.isInteger(message.springInfo))
                    return "springInfo: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendRoundRecordResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendRoundRecordResponse} SendRoundRecordResponse
         */
        SendRoundRecordResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendRoundRecordResponse)
                return object;
            var message = new $root.SdkProto.SendRoundRecordResponse();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.gameInfo != null)
                message.gameInfo = String(object.gameInfo);
            if (object.applicant != null)
                message.applicant = object.applicant | 0;
            if (object.applyTime != null)
                message.applyTime = object.applyTime | 0;
            if (object.startApplyTime != null)
                if ($util.Long)
                    (message.startApplyTime = $util.Long.fromValue(object.startApplyTime)).unsigned = false;
                else if (typeof object.startApplyTime === "string")
                    message.startApplyTime = parseInt(object.startApplyTime, 10);
                else if (typeof object.startApplyTime === "number")
                    message.startApplyTime = object.startApplyTime;
                else if (typeof object.startApplyTime === "object")
                    message.startApplyTime = new $util.LongBits(object.startApplyTime.low >>> 0, object.startApplyTime.high >>> 0).toNumber();
            if (object.zhuangPos != null)
                message.zhuangPos = object.zhuangPos | 0;
            if (object.discardPos != null)
                message.discardPos = object.discardPos | 0;
            if (object.nextDiscardPos != null)
                message.nextDiscardPos = object.nextDiscardPos | 0;
            if (object.curQDZPos != null)
                message.curQDZPos = object.curQDZPos | 0;
            if (object.godCard != null)
                message.godCard = object.godCard | 0;
            if (object.leftCards) {
                if (!Array.isArray(object.leftCards))
                    throw TypeError(".SdkProto.SendRoundRecordResponse.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.callScoreInfo) {
                if (!Array.isArray(object.callScoreInfo))
                    throw TypeError(".SdkProto.SendRoundRecordResponse.callScoreInfo: array expected");
                message.callScoreInfo = [];
                for (var i = 0; i < object.callScoreInfo.length; ++i)
                    message.callScoreInfo[i] = object.callScoreInfo[i] | 0;
            }
            if (object.currBaseScore != null)
                message.currBaseScore = object.currBaseScore | 0;
            if (object.currTimes != null)
                message.currTimes = object.currTimes | 0;
            if (object.isOver != null)
                message.isOver = object.isOver | 0;
            if (object.time != null)
                message.time = String(object.time);
            if (object.winners != null)
                message.winners = object.winners | 0;
            if (object.springInfo != null)
                message.springInfo = object.springInfo | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.SendRoundRecordResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.SendRoundRecordResponse.users: object expected");
                    message.users[i] = $root.SdkProto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendRoundRecordResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendRoundRecordResponse
         * @static
         * @param {SdkProto.SendRoundRecordResponse} message SendRoundRecordResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendRoundRecordResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.leftCards = [];
                object.callScoreInfo = [];
                object.users = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.gameId = 0;
                object.state = 0;
                object.owner = 0;
                object.currentRound = 0;
                object.totalRound = 0;
                object.gameInfo = "";
                object.applicant = 0;
                object.applyTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.startApplyTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.startApplyTime = options.longs === String ? "0" : 0;
                object.zhuangPos = 0;
                object.discardPos = 0;
                object.nextDiscardPos = 0;
                object.curQDZPos = 0;
                object.godCard = 0;
                object.currBaseScore = 0;
                object.currTimes = 0;
                object.isOver = 0;
                object.time = "";
                object.winners = 0;
                object.springInfo = 0;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.gameInfo != null && message.hasOwnProperty("gameInfo"))
                object.gameInfo = message.gameInfo;
            if (message.applicant != null && message.hasOwnProperty("applicant"))
                object.applicant = message.applicant;
            if (message.applyTime != null && message.hasOwnProperty("applyTime"))
                object.applyTime = message.applyTime;
            if (message.startApplyTime != null && message.hasOwnProperty("startApplyTime"))
                if (typeof message.startApplyTime === "number")
                    object.startApplyTime = options.longs === String ? String(message.startApplyTime) : message.startApplyTime;
                else
                    object.startApplyTime = options.longs === String ? $util.Long.prototype.toString.call(message.startApplyTime) : options.longs === Number ? new $util.LongBits(message.startApplyTime.low >>> 0, message.startApplyTime.high >>> 0).toNumber() : message.startApplyTime;
            if (message.zhuangPos != null && message.hasOwnProperty("zhuangPos"))
                object.zhuangPos = message.zhuangPos;
            if (message.discardPos != null && message.hasOwnProperty("discardPos"))
                object.discardPos = message.discardPos;
            if (message.nextDiscardPos != null && message.hasOwnProperty("nextDiscardPos"))
                object.nextDiscardPos = message.nextDiscardPos;
            if (message.curQDZPos != null && message.hasOwnProperty("curQDZPos"))
                object.curQDZPos = message.curQDZPos;
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                object.godCard = message.godCard;
            if (message.leftCards && message.leftCards.length) {
                object.leftCards = [];
                for (var j = 0; j < message.leftCards.length; ++j)
                    object.leftCards[j] = message.leftCards[j];
            }
            if (message.callScoreInfo && message.callScoreInfo.length) {
                object.callScoreInfo = [];
                for (var j = 0; j < message.callScoreInfo.length; ++j)
                    object.callScoreInfo[j] = message.callScoreInfo[j];
            }
            if (message.currBaseScore != null && message.hasOwnProperty("currBaseScore"))
                object.currBaseScore = message.currBaseScore;
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                object.currTimes = message.currTimes;
            if (message.isOver != null && message.hasOwnProperty("isOver"))
                object.isOver = message.isOver;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.winners != null && message.hasOwnProperty("winners"))
                object.winners = message.winners;
            if (message.springInfo != null && message.hasOwnProperty("springInfo"))
                object.springInfo = message.springInfo;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendRoundRecordResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendRoundRecordResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRoundRecordResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRoundRecordResponse;
    })();

    SdkProto.SendGameOverResponse = (function() {

        /**
         * Properties of a SendGameOverResponse.
         * @memberof SdkProto
         * @interface ISendGameOverResponse
         * @property {number|null} [state] SendGameOverResponse state
         * @property {number|null} [owner] SendGameOverResponse owner
         * @property {number|null} [totalRound] SendGameOverResponse totalRound
         * @property {number|null} [currentRound] SendGameOverResponse currentRound
         * @property {string|null} [time] SendGameOverResponse time
         * @property {number|null} [agId] SendGameOverResponse agId
         * @property {number|null} [ruleId] SendGameOverResponse ruleId
         * @property {Array.<SdkProto.IUser>|null} [users] SendGameOverResponse users
         */

        /**
         * Constructs a new SendGameOverResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendGameOverResponse.
         * @implements ISendGameOverResponse
         * @constructor
         * @param {SdkProto.ISendGameOverResponse=} [properties] Properties to set
         */
        function SendGameOverResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendGameOverResponse state.
         * @member {number} state
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.state = 0;

        /**
         * SendGameOverResponse owner.
         * @member {number} owner
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.owner = 0;

        /**
         * SendGameOverResponse totalRound.
         * @member {number} totalRound
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.totalRound = 0;

        /**
         * SendGameOverResponse currentRound.
         * @member {number} currentRound
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.currentRound = 0;

        /**
         * SendGameOverResponse time.
         * @member {string} time
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.time = "";

        /**
         * SendGameOverResponse agId.
         * @member {number} agId
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.agId = 0;

        /**
         * SendGameOverResponse ruleId.
         * @member {number} ruleId
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.ruleId = 0;

        /**
         * SendGameOverResponse users.
         * @member {Array.<SdkProto.IUser>} users
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendGameOverResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {SdkProto.ISendGameOverResponse=} [properties] Properties to set
         * @returns {SdkProto.SendGameOverResponse} SendGameOverResponse instance
         */
        SendGameOverResponse.create = function create(properties) {
            return new SendGameOverResponse(properties);
        };

        /**
         * Encodes the specified SendGameOverResponse message. Does not implicitly {@link SdkProto.SendGameOverResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {SdkProto.ISendGameOverResponse} message SendGameOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGameOverResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.owner != null && message.hasOwnProperty("owner"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.owner);
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalRound);
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.currentRound);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.time);
            if (message.agId != null && message.hasOwnProperty("agId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.agId);
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ruleId);
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.SdkProto.User.encode(message.users[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendGameOverResponse message, length delimited. Does not implicitly {@link SdkProto.SendGameOverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {SdkProto.ISendGameOverResponse} message SendGameOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGameOverResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendGameOverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendGameOverResponse} SendGameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGameOverResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendGameOverResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.owner = reader.int32();
                    break;
                case 3:
                    message.totalRound = reader.int32();
                    break;
                case 4:
                    message.currentRound = reader.int32();
                    break;
                case 5:
                    message.time = reader.string();
                    break;
                case 6:
                    message.agId = reader.int32();
                    break;
                case 7:
                    message.ruleId = reader.int32();
                    break;
                case 8:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.SdkProto.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendGameOverResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendGameOverResponse} SendGameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGameOverResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendGameOverResponse message.
         * @function verify
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendGameOverResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner))
                    return "owner: integer expected";
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                if (!$util.isInteger(message.totalRound))
                    return "totalRound: integer expected";
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isString(message.time))
                    return "time: string expected";
            if (message.agId != null && message.hasOwnProperty("agId"))
                if (!$util.isInteger(message.agId))
                    return "agId: integer expected";
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                if (!$util.isInteger(message.ruleId))
                    return "ruleId: integer expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.SdkProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendGameOverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendGameOverResponse} SendGameOverResponse
         */
        SendGameOverResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendGameOverResponse)
                return object;
            var message = new $root.SdkProto.SendGameOverResponse();
            if (object.state != null)
                message.state = object.state | 0;
            if (object.owner != null)
                message.owner = object.owner | 0;
            if (object.totalRound != null)
                message.totalRound = object.totalRound | 0;
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.time != null)
                message.time = String(object.time);
            if (object.agId != null)
                message.agId = object.agId | 0;
            if (object.ruleId != null)
                message.ruleId = object.ruleId | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".SdkProto.SendGameOverResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".SdkProto.SendGameOverResponse.users: object expected");
                    message.users[i] = $root.SdkProto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendGameOverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendGameOverResponse
         * @static
         * @param {SdkProto.SendGameOverResponse} message SendGameOverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendGameOverResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults) {
                object.state = 0;
                object.owner = 0;
                object.totalRound = 0;
                object.currentRound = 0;
                object.time = "";
                object.agId = 0;
                object.ruleId = 0;
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.owner != null && message.hasOwnProperty("owner"))
                object.owner = message.owner;
            if (message.totalRound != null && message.hasOwnProperty("totalRound"))
                object.totalRound = message.totalRound;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.agId != null && message.hasOwnProperty("agId"))
                object.agId = message.agId;
            if (message.ruleId != null && message.hasOwnProperty("ruleId"))
                object.ruleId = message.ruleId;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.SdkProto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendGameOverResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendGameOverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendGameOverResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendGameOverResponse;
    })();

    SdkProto.SendUserQDZResponse = (function() {

        /**
         * Properties of a SendUserQDZResponse.
         * @memberof SdkProto
         * @interface ISendUserQDZResponse
         * @property {number|null} [round] SendUserQDZResponse round
         * @property {number|null} [difen] SendUserQDZResponse difen
         * @property {number|null} [score] SendUserQDZResponse score
         * @property {number|null} [position] SendUserQDZResponse position
         * @property {number|null} [nextPosition] SendUserQDZResponse nextPosition
         * @property {number|null} [lastPosition] SendUserQDZResponse lastPosition
         * @property {number|null} [passPaiCount] SendUserQDZResponse passPaiCount
         */

        /**
         * Constructs a new SendUserQDZResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserQDZResponse.
         * @implements ISendUserQDZResponse
         * @constructor
         * @param {SdkProto.ISendUserQDZResponse=} [properties] Properties to set
         */
        function SendUserQDZResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserQDZResponse round.
         * @member {number} round
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.round = 0;

        /**
         * SendUserQDZResponse difen.
         * @member {number} difen
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.difen = 0;

        /**
         * SendUserQDZResponse score.
         * @member {number} score
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.score = 0;

        /**
         * SendUserQDZResponse position.
         * @member {number} position
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.position = 0;

        /**
         * SendUserQDZResponse nextPosition.
         * @member {number} nextPosition
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.nextPosition = 0;

        /**
         * SendUserQDZResponse lastPosition.
         * @member {number} lastPosition
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.lastPosition = 0;

        /**
         * SendUserQDZResponse passPaiCount.
         * @member {number} passPaiCount
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.passPaiCount = 0;

        /**
         * Creates a new SendUserQDZResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {SdkProto.ISendUserQDZResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserQDZResponse} SendUserQDZResponse instance
         */
        SendUserQDZResponse.create = function create(properties) {
            return new SendUserQDZResponse(properties);
        };

        /**
         * Encodes the specified SendUserQDZResponse message. Does not implicitly {@link SdkProto.SendUserQDZResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {SdkProto.ISendUserQDZResponse} message SendUserQDZResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQDZResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
            if (message.difen != null && message.hasOwnProperty("difen"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.difen);
            if (message.score != null && message.hasOwnProperty("score"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.score);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.position);
            if (message.nextPosition != null && message.hasOwnProperty("nextPosition"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.nextPosition);
            if (message.lastPosition != null && message.hasOwnProperty("lastPosition"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.lastPosition);
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.passPaiCount);
            return writer;
        };

        /**
         * Encodes the specified SendUserQDZResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserQDZResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {SdkProto.ISendUserQDZResponse} message SendUserQDZResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQDZResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQDZResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserQDZResponse} SendUserQDZResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQDZResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserQDZResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.difen = reader.int32();
                    break;
                case 3:
                    message.score = reader.int32();
                    break;
                case 4:
                    message.position = reader.int32();
                    break;
                case 5:
                    message.nextPosition = reader.int32();
                    break;
                case 6:
                    message.lastPosition = reader.int32();
                    break;
                case 7:
                    message.passPaiCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserQDZResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserQDZResponse} SendUserQDZResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQDZResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserQDZResponse message.
         * @function verify
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserQDZResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.difen != null && message.hasOwnProperty("difen"))
                if (!$util.isInteger(message.difen))
                    return "difen: integer expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (!$util.isInteger(message.score))
                    return "score: integer expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.nextPosition != null && message.hasOwnProperty("nextPosition"))
                if (!$util.isInteger(message.nextPosition))
                    return "nextPosition: integer expected";
            if (message.lastPosition != null && message.hasOwnProperty("lastPosition"))
                if (!$util.isInteger(message.lastPosition))
                    return "lastPosition: integer expected";
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                if (!$util.isInteger(message.passPaiCount))
                    return "passPaiCount: integer expected";
            return null;
        };

        /**
         * Creates a SendUserQDZResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserQDZResponse} SendUserQDZResponse
         */
        SendUserQDZResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserQDZResponse)
                return object;
            var message = new $root.SdkProto.SendUserQDZResponse();
            if (object.round != null)
                message.round = object.round | 0;
            if (object.difen != null)
                message.difen = object.difen | 0;
            if (object.score != null)
                message.score = object.score | 0;
            if (object.position != null)
                message.position = object.position | 0;
            if (object.nextPosition != null)
                message.nextPosition = object.nextPosition | 0;
            if (object.lastPosition != null)
                message.lastPosition = object.lastPosition | 0;
            if (object.passPaiCount != null)
                message.passPaiCount = object.passPaiCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserQDZResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserQDZResponse
         * @static
         * @param {SdkProto.SendUserQDZResponse} message SendUserQDZResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQDZResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.round = 0;
                object.difen = 0;
                object.score = 0;
                object.position = 0;
                object.nextPosition = 0;
                object.lastPosition = 0;
                object.passPaiCount = 0;
            }
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.difen != null && message.hasOwnProperty("difen"))
                object.difen = message.difen;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = message.score;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.nextPosition != null && message.hasOwnProperty("nextPosition"))
                object.nextPosition = message.nextPosition;
            if (message.lastPosition != null && message.hasOwnProperty("lastPosition"))
                object.lastPosition = message.lastPosition;
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                object.passPaiCount = message.passPaiCount;
            return object;
        };

        /**
         * Converts this SendUserQDZResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserQDZResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQDZResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQDZResponse;
    })();

    SdkProto.SendUserQDZ2Response = (function() {

        /**
         * Properties of a SendUserQDZ2Response.
         * @memberof SdkProto
         * @interface ISendUserQDZ2Response
         * @property {number|null} [round] SendUserQDZ2Response round
         * @property {number|null} [difen] SendUserQDZ2Response difen
         * @property {number|null} [position] SendUserQDZ2Response position
         * @property {number|null} [godCard] SendUserQDZ2Response godCard
         * @property {Array.<number>|null} [leftCards] SendUserQDZ2Response leftCards
         * @property {Array.<number>|null} [lordHandCards] SendUserQDZ2Response lordHandCards
         */

        /**
         * Constructs a new SendUserQDZ2Response.
         * @memberof SdkProto
         * @classdesc Represents a SendUserQDZ2Response.
         * @implements ISendUserQDZ2Response
         * @constructor
         * @param {SdkProto.ISendUserQDZ2Response=} [properties] Properties to set
         */
        function SendUserQDZ2Response(properties) {
            this.leftCards = [];
            this.lordHandCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserQDZ2Response round.
         * @member {number} round
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.round = 0;

        /**
         * SendUserQDZ2Response difen.
         * @member {number} difen
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.difen = 0;

        /**
         * SendUserQDZ2Response position.
         * @member {number} position
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.position = 0;

        /**
         * SendUserQDZ2Response godCard.
         * @member {number} godCard
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.godCard = 0;

        /**
         * SendUserQDZ2Response leftCards.
         * @member {Array.<number>} leftCards
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.leftCards = $util.emptyArray;

        /**
         * SendUserQDZ2Response lordHandCards.
         * @member {Array.<number>} lordHandCards
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.lordHandCards = $util.emptyArray;

        /**
         * Creates a new SendUserQDZ2Response instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {SdkProto.ISendUserQDZ2Response=} [properties] Properties to set
         * @returns {SdkProto.SendUserQDZ2Response} SendUserQDZ2Response instance
         */
        SendUserQDZ2Response.create = function create(properties) {
            return new SendUserQDZ2Response(properties);
        };

        /**
         * Encodes the specified SendUserQDZ2Response message. Does not implicitly {@link SdkProto.SendUserQDZ2Response.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {SdkProto.ISendUserQDZ2Response} message SendUserQDZ2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQDZ2Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
            if (message.difen != null && message.hasOwnProperty("difen"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.difen);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.godCard);
            if (message.leftCards != null && message.leftCards.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.leftCards.length; ++i)
                    writer.int32(message.leftCards[i]);
                writer.ldelim();
            }
            if (message.lordHandCards != null && message.lordHandCards.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.lordHandCards.length; ++i)
                    writer.int32(message.lordHandCards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified SendUserQDZ2Response message, length delimited. Does not implicitly {@link SdkProto.SendUserQDZ2Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {SdkProto.ISendUserQDZ2Response} message SendUserQDZ2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQDZ2Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQDZ2Response message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserQDZ2Response} SendUserQDZ2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQDZ2Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserQDZ2Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.difen = reader.int32();
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 4:
                    message.godCard = reader.int32();
                    break;
                case 5:
                    if (!(message.leftCards && message.leftCards.length))
                        message.leftCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.leftCards.push(reader.int32());
                    } else
                        message.leftCards.push(reader.int32());
                    break;
                case 6:
                    if (!(message.lordHandCards && message.lordHandCards.length))
                        message.lordHandCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.lordHandCards.push(reader.int32());
                    } else
                        message.lordHandCards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserQDZ2Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserQDZ2Response} SendUserQDZ2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQDZ2Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserQDZ2Response message.
         * @function verify
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserQDZ2Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.difen != null && message.hasOwnProperty("difen"))
                if (!$util.isInteger(message.difen))
                    return "difen: integer expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                if (!$util.isInteger(message.godCard))
                    return "godCard: integer expected";
            if (message.leftCards != null && message.hasOwnProperty("leftCards")) {
                if (!Array.isArray(message.leftCards))
                    return "leftCards: array expected";
                for (var i = 0; i < message.leftCards.length; ++i)
                    if (!$util.isInteger(message.leftCards[i]))
                        return "leftCards: integer[] expected";
            }
            if (message.lordHandCards != null && message.hasOwnProperty("lordHandCards")) {
                if (!Array.isArray(message.lordHandCards))
                    return "lordHandCards: array expected";
                for (var i = 0; i < message.lordHandCards.length; ++i)
                    if (!$util.isInteger(message.lordHandCards[i]))
                        return "lordHandCards: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a SendUserQDZ2Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserQDZ2Response} SendUserQDZ2Response
         */
        SendUserQDZ2Response.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserQDZ2Response)
                return object;
            var message = new $root.SdkProto.SendUserQDZ2Response();
            if (object.round != null)
                message.round = object.round | 0;
            if (object.difen != null)
                message.difen = object.difen | 0;
            if (object.position != null)
                message.position = object.position | 0;
            if (object.godCard != null)
                message.godCard = object.godCard | 0;
            if (object.leftCards) {
                if (!Array.isArray(object.leftCards))
                    throw TypeError(".SdkProto.SendUserQDZ2Response.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.lordHandCards) {
                if (!Array.isArray(object.lordHandCards))
                    throw TypeError(".SdkProto.SendUserQDZ2Response.lordHandCards: array expected");
                message.lordHandCards = [];
                for (var i = 0; i < object.lordHandCards.length; ++i)
                    message.lordHandCards[i] = object.lordHandCards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SendUserQDZ2Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserQDZ2Response
         * @static
         * @param {SdkProto.SendUserQDZ2Response} message SendUserQDZ2Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQDZ2Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.leftCards = [];
                object.lordHandCards = [];
            }
            if (options.defaults) {
                object.round = 0;
                object.difen = 0;
                object.position = 0;
                object.godCard = 0;
            }
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.difen != null && message.hasOwnProperty("difen"))
                object.difen = message.difen;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                object.godCard = message.godCard;
            if (message.leftCards && message.leftCards.length) {
                object.leftCards = [];
                for (var j = 0; j < message.leftCards.length; ++j)
                    object.leftCards[j] = message.leftCards[j];
            }
            if (message.lordHandCards && message.lordHandCards.length) {
                object.lordHandCards = [];
                for (var j = 0; j < message.lordHandCards.length; ++j)
                    object.lordHandCards[j] = message.lordHandCards[j];
            }
            return object;
        };

        /**
         * Converts this SendUserQDZ2Response to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserQDZ2Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQDZ2Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQDZ2Response;
    })();

    SdkProto.SendUserMPResponse = (function() {

        /**
         * Properties of a SendUserMPResponse.
         * @memberof SdkProto
         * @interface ISendUserMPResponse
         * @property {number|null} [showAll] SendUserMPResponse showAll
         * @property {Array.<number>|null} [cards] SendUserMPResponse cards
         * @property {number|null} [position] SendUserMPResponse position
         * @property {number|null} [currTimes] SendUserMPResponse currTimes
         */

        /**
         * Constructs a new SendUserMPResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserMPResponse.
         * @implements ISendUserMPResponse
         * @constructor
         * @param {SdkProto.ISendUserMPResponse=} [properties] Properties to set
         */
        function SendUserMPResponse(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserMPResponse showAll.
         * @member {number} showAll
         * @memberof SdkProto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.showAll = 0;

        /**
         * SendUserMPResponse cards.
         * @member {Array.<number>} cards
         * @memberof SdkProto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.cards = $util.emptyArray;

        /**
         * SendUserMPResponse position.
         * @member {number} position
         * @memberof SdkProto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.position = 0;

        /**
         * SendUserMPResponse currTimes.
         * @member {number} currTimes
         * @memberof SdkProto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.currTimes = 0;

        /**
         * Creates a new SendUserMPResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {SdkProto.ISendUserMPResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserMPResponse} SendUserMPResponse instance
         */
        SendUserMPResponse.create = function create(properties) {
            return new SendUserMPResponse(properties);
        };

        /**
         * Encodes the specified SendUserMPResponse message. Does not implicitly {@link SdkProto.SendUserMPResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {SdkProto.ISendUserMPResponse} message SendUserMPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserMPResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.showAll != null && message.hasOwnProperty("showAll"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.showAll);
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.currTimes);
            return writer;
        };

        /**
         * Encodes the specified SendUserMPResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserMPResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {SdkProto.ISendUserMPResponse} message SendUserMPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserMPResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserMPResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserMPResponse} SendUserMPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserMPResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserMPResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.showAll = reader.int32();
                    break;
                case 2:
                    if (!(message.cards && message.cards.length))
                        message.cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cards.push(reader.int32());
                    } else
                        message.cards.push(reader.int32());
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 4:
                    message.currTimes = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserMPResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserMPResponse} SendUserMPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserMPResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserMPResponse message.
         * @function verify
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserMPResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.showAll != null && message.hasOwnProperty("showAll"))
                if (!$util.isInteger(message.showAll))
                    return "showAll: integer expected";
            if (message.cards != null && message.hasOwnProperty("cards")) {
                if (!Array.isArray(message.cards))
                    return "cards: array expected";
                for (var i = 0; i < message.cards.length; ++i)
                    if (!$util.isInteger(message.cards[i]))
                        return "cards: integer[] expected";
            }
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                if (!$util.isInteger(message.currTimes))
                    return "currTimes: integer expected";
            return null;
        };

        /**
         * Creates a SendUserMPResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserMPResponse} SendUserMPResponse
         */
        SendUserMPResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserMPResponse)
                return object;
            var message = new $root.SdkProto.SendUserMPResponse();
            if (object.showAll != null)
                message.showAll = object.showAll | 0;
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".SdkProto.SendUserMPResponse.cards: array expected");
                message.cards = [];
                for (var i = 0; i < object.cards.length; ++i)
                    message.cards[i] = object.cards[i] | 0;
            }
            if (object.position != null)
                message.position = object.position | 0;
            if (object.currTimes != null)
                message.currTimes = object.currTimes | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserMPResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserMPResponse
         * @static
         * @param {SdkProto.SendUserMPResponse} message SendUserMPResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserMPResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.cards = [];
            if (options.defaults) {
                object.showAll = 0;
                object.position = 0;
                object.currTimes = 0;
            }
            if (message.showAll != null && message.hasOwnProperty("showAll"))
                object.showAll = message.showAll;
            if (message.cards && message.cards.length) {
                object.cards = [];
                for (var j = 0; j < message.cards.length; ++j)
                    object.cards[j] = message.cards[j];
            }
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.currTimes != null && message.hasOwnProperty("currTimes"))
                object.currTimes = message.currTimes;
            return object;
        };

        /**
         * Converts this SendUserMPResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserMPResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserMPResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserMPResponse;
    })();

    SdkProto.SendUserMP2Response = (function() {

        /**
         * Properties of a SendUserMP2Response.
         * @memberof SdkProto
         * @interface ISendUserMP2Response
         * @property {number|null} [round] SendUserMP2Response round
         * @property {number|null} [difen] SendUserMP2Response difen
         * @property {number|null} [position] SendUserMP2Response position
         * @property {number|null} [godCard] SendUserMP2Response godCard
         * @property {Array.<number>|null} [leftCards] SendUserMP2Response leftCards
         * @property {boolean|null} [start] SendUserMP2Response start
         */

        /**
         * Constructs a new SendUserMP2Response.
         * @memberof SdkProto
         * @classdesc Represents a SendUserMP2Response.
         * @implements ISendUserMP2Response
         * @constructor
         * @param {SdkProto.ISendUserMP2Response=} [properties] Properties to set
         */
        function SendUserMP2Response(properties) {
            this.leftCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserMP2Response round.
         * @member {number} round
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.round = 0;

        /**
         * SendUserMP2Response difen.
         * @member {number} difen
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.difen = 0;

        /**
         * SendUserMP2Response position.
         * @member {number} position
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.position = 0;

        /**
         * SendUserMP2Response godCard.
         * @member {number} godCard
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.godCard = 0;

        /**
         * SendUserMP2Response leftCards.
         * @member {Array.<number>} leftCards
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.leftCards = $util.emptyArray;

        /**
         * SendUserMP2Response start.
         * @member {boolean} start
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.start = false;

        /**
         * Creates a new SendUserMP2Response instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {SdkProto.ISendUserMP2Response=} [properties] Properties to set
         * @returns {SdkProto.SendUserMP2Response} SendUserMP2Response instance
         */
        SendUserMP2Response.create = function create(properties) {
            return new SendUserMP2Response(properties);
        };

        /**
         * Encodes the specified SendUserMP2Response message. Does not implicitly {@link SdkProto.SendUserMP2Response.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {SdkProto.ISendUserMP2Response} message SendUserMP2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserMP2Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.round != null && message.hasOwnProperty("round"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.round);
            if (message.difen != null && message.hasOwnProperty("difen"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.difen);
            if (message.position != null && message.hasOwnProperty("position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.godCard);
            if (message.leftCards != null && message.leftCards.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.leftCards.length; ++i)
                    writer.int32(message.leftCards[i]);
                writer.ldelim();
            }
            if (message.start != null && message.hasOwnProperty("start"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.start);
            return writer;
        };

        /**
         * Encodes the specified SendUserMP2Response message, length delimited. Does not implicitly {@link SdkProto.SendUserMP2Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {SdkProto.ISendUserMP2Response} message SendUserMP2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserMP2Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserMP2Response message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserMP2Response} SendUserMP2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserMP2Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserMP2Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.round = reader.int32();
                    break;
                case 2:
                    message.difen = reader.int32();
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 4:
                    message.godCard = reader.int32();
                    break;
                case 5:
                    if (!(message.leftCards && message.leftCards.length))
                        message.leftCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.leftCards.push(reader.int32());
                    } else
                        message.leftCards.push(reader.int32());
                    break;
                case 6:
                    message.start = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserMP2Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserMP2Response} SendUserMP2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserMP2Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserMP2Response message.
         * @function verify
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserMP2Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.round != null && message.hasOwnProperty("round"))
                if (!$util.isInteger(message.round))
                    return "round: integer expected";
            if (message.difen != null && message.hasOwnProperty("difen"))
                if (!$util.isInteger(message.difen))
                    return "difen: integer expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                if (!$util.isInteger(message.godCard))
                    return "godCard: integer expected";
            if (message.leftCards != null && message.hasOwnProperty("leftCards")) {
                if (!Array.isArray(message.leftCards))
                    return "leftCards: array expected";
                for (var i = 0; i < message.leftCards.length; ++i)
                    if (!$util.isInteger(message.leftCards[i]))
                        return "leftCards: integer[] expected";
            }
            if (message.start != null && message.hasOwnProperty("start"))
                if (typeof message.start !== "boolean")
                    return "start: boolean expected";
            return null;
        };

        /**
         * Creates a SendUserMP2Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserMP2Response} SendUserMP2Response
         */
        SendUserMP2Response.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserMP2Response)
                return object;
            var message = new $root.SdkProto.SendUserMP2Response();
            if (object.round != null)
                message.round = object.round | 0;
            if (object.difen != null)
                message.difen = object.difen | 0;
            if (object.position != null)
                message.position = object.position | 0;
            if (object.godCard != null)
                message.godCard = object.godCard | 0;
            if (object.leftCards) {
                if (!Array.isArray(object.leftCards))
                    throw TypeError(".SdkProto.SendUserMP2Response.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.start != null)
                message.start = Boolean(object.start);
            return message;
        };

        /**
         * Creates a plain object from a SendUserMP2Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserMP2Response
         * @static
         * @param {SdkProto.SendUserMP2Response} message SendUserMP2Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserMP2Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.leftCards = [];
            if (options.defaults) {
                object.round = 0;
                object.difen = 0;
                object.position = 0;
                object.godCard = 0;
                object.start = false;
            }
            if (message.round != null && message.hasOwnProperty("round"))
                object.round = message.round;
            if (message.difen != null && message.hasOwnProperty("difen"))
                object.difen = message.difen;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.godCard != null && message.hasOwnProperty("godCard"))
                object.godCard = message.godCard;
            if (message.leftCards && message.leftCards.length) {
                object.leftCards = [];
                for (var j = 0; j < message.leftCards.length; ++j)
                    object.leftCards[j] = message.leftCards[j];
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            return object;
        };

        /**
         * Converts this SendUserMP2Response to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserMP2Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserMP2Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserMP2Response;
    })();

    SdkProto.SendDiamondChangeResponse = (function() {

        /**
         * Properties of a SendDiamondChangeResponse.
         * @memberof SdkProto
         * @interface ISendDiamondChangeResponse
         * @property {number|null} [userId] SendDiamondChangeResponse userId
         * @property {number|null} [diamond] SendDiamondChangeResponse diamond
         */

        /**
         * Constructs a new SendDiamondChangeResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendDiamondChangeResponse.
         * @implements ISendDiamondChangeResponse
         * @constructor
         * @param {SdkProto.ISendDiamondChangeResponse=} [properties] Properties to set
         */
        function SendDiamondChangeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendDiamondChangeResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.userId = 0;

        /**
         * SendDiamondChangeResponse diamond.
         * @member {number} diamond
         * @memberof SdkProto.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.diamond = 0;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {SdkProto.ISendDiamondChangeResponse=} [properties] Properties to set
         * @returns {SdkProto.SendDiamondChangeResponse} SendDiamondChangeResponse instance
         */
        SendDiamondChangeResponse.create = function create(properties) {
            return new SendDiamondChangeResponse(properties);
        };

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link SdkProto.SendDiamondChangeResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {SdkProto.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDiamondChangeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.diamond);
            return writer;
        };

        /**
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link SdkProto.SendDiamondChangeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {SdkProto.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDiamondChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendDiamondChangeResponse} SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDiamondChangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendDiamondChangeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.diamond = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendDiamondChangeResponse} SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDiamondChangeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendDiamondChangeResponse message.
         * @function verify
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendDiamondChangeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond))
                    return "diamond: integer expected";
            return null;
        };

        /**
         * Creates a SendDiamondChangeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendDiamondChangeResponse} SendDiamondChangeResponse
         */
        SendDiamondChangeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendDiamondChangeResponse)
                return object;
            var message = new $root.SdkProto.SendDiamondChangeResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendDiamondChangeResponse
         * @static
         * @param {SdkProto.SendDiamondChangeResponse} message SendDiamondChangeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendDiamondChangeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.diamond = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                object.diamond = message.diamond;
            return object;
        };

        /**
         * Converts this SendDiamondChangeResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendDiamondChangeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDiamondChangeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDiamondChangeResponse;
    })();

    SdkProto.SendCancelAutoResponse = (function() {

        /**
         * Properties of a SendCancelAutoResponse.
         * @memberof SdkProto
         * @interface ISendCancelAutoResponse
         * @property {number|null} [userId] SendCancelAutoResponse userId
         * @property {boolean|null} [isAuto] SendCancelAutoResponse isAuto
         */

        /**
         * Constructs a new SendCancelAutoResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendCancelAutoResponse.
         * @implements ISendCancelAutoResponse
         * @constructor
         * @param {SdkProto.ISendCancelAutoResponse=} [properties] Properties to set
         */
        function SendCancelAutoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendCancelAutoResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendCancelAutoResponse
         * @instance
         */
        SendCancelAutoResponse.prototype.userId = 0;

        /**
         * SendCancelAutoResponse isAuto.
         * @member {boolean} isAuto
         * @memberof SdkProto.SendCancelAutoResponse
         * @instance
         */
        SendCancelAutoResponse.prototype.isAuto = false;

        /**
         * Creates a new SendCancelAutoResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {SdkProto.ISendCancelAutoResponse=} [properties] Properties to set
         * @returns {SdkProto.SendCancelAutoResponse} SendCancelAutoResponse instance
         */
        SendCancelAutoResponse.create = function create(properties) {
            return new SendCancelAutoResponse(properties);
        };

        /**
         * Encodes the specified SendCancelAutoResponse message. Does not implicitly {@link SdkProto.SendCancelAutoResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {SdkProto.ISendCancelAutoResponse} message SendCancelAutoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCancelAutoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isAuto);
            return writer;
        };

        /**
         * Encodes the specified SendCancelAutoResponse message, length delimited. Does not implicitly {@link SdkProto.SendCancelAutoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {SdkProto.ISendCancelAutoResponse} message SendCancelAutoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCancelAutoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCancelAutoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendCancelAutoResponse} SendCancelAutoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCancelAutoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendCancelAutoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.isAuto = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendCancelAutoResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendCancelAutoResponse} SendCancelAutoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCancelAutoResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendCancelAutoResponse message.
         * @function verify
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendCancelAutoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                if (typeof message.isAuto !== "boolean")
                    return "isAuto: boolean expected";
            return null;
        };

        /**
         * Creates a SendCancelAutoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendCancelAutoResponse} SendCancelAutoResponse
         */
        SendCancelAutoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendCancelAutoResponse)
                return object;
            var message = new $root.SdkProto.SendCancelAutoResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.isAuto != null)
                message.isAuto = Boolean(object.isAuto);
            return message;
        };

        /**
         * Creates a plain object from a SendCancelAutoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendCancelAutoResponse
         * @static
         * @param {SdkProto.SendCancelAutoResponse} message SendCancelAutoResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendCancelAutoResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.isAuto = false;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.isAuto != null && message.hasOwnProperty("isAuto"))
                object.isAuto = message.isAuto;
            return object;
        };

        /**
         * Converts this SendCancelAutoResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendCancelAutoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCancelAutoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCancelAutoResponse;
    })();

    SdkProto.DelayCheckResponse = (function() {

        /**
         * Properties of a DelayCheckResponse.
         * @memberof SdkProto
         * @interface IDelayCheckResponse
         * @property {string|null} [content] DelayCheckResponse content
         */

        /**
         * Constructs a new DelayCheckResponse.
         * @memberof SdkProto
         * @classdesc Represents a DelayCheckResponse.
         * @implements IDelayCheckResponse
         * @constructor
         * @param {SdkProto.IDelayCheckResponse=} [properties] Properties to set
         */
        function DelayCheckResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DelayCheckResponse content.
         * @member {string} content
         * @memberof SdkProto.DelayCheckResponse
         * @instance
         */
        DelayCheckResponse.prototype.content = "";

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {SdkProto.IDelayCheckResponse=} [properties] Properties to set
         * @returns {SdkProto.DelayCheckResponse} DelayCheckResponse instance
         */
        DelayCheckResponse.create = function create(properties) {
            return new DelayCheckResponse(properties);
        };

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link SdkProto.DelayCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {SdkProto.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link SdkProto.DelayCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {SdkProto.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.DelayCheckResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DelayCheckResponse message.
         * @function verify
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DelayCheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a DelayCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.DelayCheckResponse} DelayCheckResponse
         */
        DelayCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.DelayCheckResponse)
                return object;
            var message = new $root.SdkProto.DelayCheckResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.DelayCheckResponse
         * @static
         * @param {SdkProto.DelayCheckResponse} message DelayCheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DelayCheckResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this DelayCheckResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.DelayCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckResponse;
    })();

    SdkProto.SendNoticeClientDismissResponse = (function() {

        /**
         * Properties of a SendNoticeClientDismissResponse.
         * @memberof SdkProto
         * @interface ISendNoticeClientDismissResponse
         * @property {number|null} [userId] SendNoticeClientDismissResponse userId
         */

        /**
         * Constructs a new SendNoticeClientDismissResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendNoticeClientDismissResponse.
         * @implements ISendNoticeClientDismissResponse
         * @constructor
         * @param {SdkProto.ISendNoticeClientDismissResponse=} [properties] Properties to set
         */
        function SendNoticeClientDismissResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendNoticeClientDismissResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @instance
         */
        SendNoticeClientDismissResponse.prototype.userId = 0;

        /**
         * Creates a new SendNoticeClientDismissResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {SdkProto.ISendNoticeClientDismissResponse=} [properties] Properties to set
         * @returns {SdkProto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse instance
         */
        SendNoticeClientDismissResponse.create = function create(properties) {
            return new SendNoticeClientDismissResponse(properties);
        };

        /**
         * Encodes the specified SendNoticeClientDismissResponse message. Does not implicitly {@link SdkProto.SendNoticeClientDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {SdkProto.ISendNoticeClientDismissResponse} message SendNoticeClientDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendNoticeClientDismissResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendNoticeClientDismissResponse message, length delimited. Does not implicitly {@link SdkProto.SendNoticeClientDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {SdkProto.ISendNoticeClientDismissResponse} message SendNoticeClientDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendNoticeClientDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendNoticeClientDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendNoticeClientDismissResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendNoticeClientDismissResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendNoticeClientDismissResponse message.
         * @function verify
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendNoticeClientDismissResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendNoticeClientDismissResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         */
        SendNoticeClientDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendNoticeClientDismissResponse)
                return object;
            var message = new $root.SdkProto.SendNoticeClientDismissResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendNoticeClientDismissResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @static
         * @param {SdkProto.SendNoticeClientDismissResponse} message SendNoticeClientDismissResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendNoticeClientDismissResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendNoticeClientDismissResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendNoticeClientDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendNoticeClientDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendNoticeClientDismissResponse;
    })();

    SdkProto.SendRemainTimeResponse = (function() {

        /**
         * Properties of a SendRemainTimeResponse.
         * @memberof SdkProto
         * @interface ISendRemainTimeResponse
         * @property {number|null} [time] SendRemainTimeResponse time
         * @property {number|null} [type] SendRemainTimeResponse type
         * @property {number|null} [userId] SendRemainTimeResponse userId
         */

        /**
         * Constructs a new SendRemainTimeResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendRemainTimeResponse.
         * @implements ISendRemainTimeResponse
         * @constructor
         * @param {SdkProto.ISendRemainTimeResponse=} [properties] Properties to set
         */
        function SendRemainTimeResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendRemainTimeResponse time.
         * @member {number} time
         * @memberof SdkProto.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.time = 0;

        /**
         * SendRemainTimeResponse type.
         * @member {number} type
         * @memberof SdkProto.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.type = 0;

        /**
         * SendRemainTimeResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.userId = 0;

        /**
         * Creates a new SendRemainTimeResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {SdkProto.ISendRemainTimeResponse=} [properties] Properties to set
         * @returns {SdkProto.SendRemainTimeResponse} SendRemainTimeResponse instance
         */
        SendRemainTimeResponse.create = function create(properties) {
            return new SendRemainTimeResponse(properties);
        };

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link SdkProto.SendRemainTimeResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {SdkProto.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRemainTimeResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link SdkProto.SendRemainTimeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {SdkProto.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRemainTimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendRemainTimeResponse} SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRemainTimeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendRemainTimeResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.time = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendRemainTimeResponse} SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRemainTimeResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendRemainTimeResponse message.
         * @function verify
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendRemainTimeResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendRemainTimeResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendRemainTimeResponse} SendRemainTimeResponse
         */
        SendRemainTimeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendRemainTimeResponse)
                return object;
            var message = new $root.SdkProto.SendRemainTimeResponse();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendRemainTimeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendRemainTimeResponse
         * @static
         * @param {SdkProto.SendRemainTimeResponse} message SendRemainTimeResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendRemainTimeResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.time = 0;
                object.type = 0;
                object.userId = 0;
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendRemainTimeResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendRemainTimeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRemainTimeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRemainTimeResponse;
    })();

    SdkProto.SendUserQuitByAdminResponse = (function() {

        /**
         * Properties of a SendUserQuitByAdminResponse.
         * @memberof SdkProto
         * @interface ISendUserQuitByAdminResponse
         * @property {number|null} [userId] SendUserQuitByAdminResponse userId
         */

        /**
         * Constructs a new SendUserQuitByAdminResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendUserQuitByAdminResponse.
         * @implements ISendUserQuitByAdminResponse
         * @constructor
         * @param {SdkProto.ISendUserQuitByAdminResponse=} [properties] Properties to set
         */
        function SendUserQuitByAdminResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserQuitByAdminResponse userId.
         * @member {number} userId
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @instance
         */
        SendUserQuitByAdminResponse.prototype.userId = 0;

        /**
         * Creates a new SendUserQuitByAdminResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {SdkProto.ISendUserQuitByAdminResponse=} [properties] Properties to set
         * @returns {SdkProto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse instance
         */
        SendUserQuitByAdminResponse.create = function create(properties) {
            return new SendUserQuitByAdminResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitByAdminResponse message. Does not implicitly {@link SdkProto.SendUserQuitByAdminResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {SdkProto.ISendUserQuitByAdminResponse} message SendUserQuitByAdminResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitByAdminResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendUserQuitByAdminResponse message, length delimited. Does not implicitly {@link SdkProto.SendUserQuitByAdminResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {SdkProto.ISendUserQuitByAdminResponse} message SendUserQuitByAdminResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitByAdminResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitByAdminResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendUserQuitByAdminResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitByAdminResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserQuitByAdminResponse message.
         * @function verify
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserQuitByAdminResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a SendUserQuitByAdminResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         */
        SendUserQuitByAdminResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendUserQuitByAdminResponse)
                return object;
            var message = new $root.SdkProto.SendUserQuitByAdminResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserQuitByAdminResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @static
         * @param {SdkProto.SendUserQuitByAdminResponse} message SendUserQuitByAdminResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQuitByAdminResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this SendUserQuitByAdminResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendUserQuitByAdminResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitByAdminResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitByAdminResponse;
    })();

    SdkProto.SendHeartBeatResponse = (function() {

        /**
         * Properties of a SendHeartBeatResponse.
         * @memberof SdkProto
         * @interface ISendHeartBeatResponse
         * @property {number|Long|null} [currentTime] SendHeartBeatResponse currentTime
         */

        /**
         * Constructs a new SendHeartBeatResponse.
         * @memberof SdkProto
         * @classdesc Represents a SendHeartBeatResponse.
         * @implements ISendHeartBeatResponse
         * @constructor
         * @param {SdkProto.ISendHeartBeatResponse=} [properties] Properties to set
         */
        function SendHeartBeatResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendHeartBeatResponse currentTime.
         * @member {number|Long} currentTime
         * @memberof SdkProto.SendHeartBeatResponse
         * @instance
         */
        SendHeartBeatResponse.prototype.currentTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @function create
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {SdkProto.ISendHeartBeatResponse=} [properties] Properties to set
         * @returns {SdkProto.SendHeartBeatResponse} SendHeartBeatResponse instance
         */
        SendHeartBeatResponse.create = function create(properties) {
            return new SendHeartBeatResponse(properties);
        };

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link SdkProto.SendHeartBeatResponse.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {SdkProto.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.currentTime);
            return writer;
        };

        /**
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link SdkProto.SendHeartBeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {SdkProto.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.SendHeartBeatResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.currentTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendHeartBeatResponse message.
         * @function verify
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendHeartBeatResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                if (!$util.isInteger(message.currentTime) && !(message.currentTime && $util.isInteger(message.currentTime.low) && $util.isInteger(message.currentTime.high)))
                    return "currentTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a SendHeartBeatResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.SendHeartBeatResponse} SendHeartBeatResponse
         */
        SendHeartBeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.SendHeartBeatResponse)
                return object;
            var message = new $root.SdkProto.SendHeartBeatResponse();
            if (object.currentTime != null)
                if ($util.Long)
                    (message.currentTime = $util.Long.fromValue(object.currentTime)).unsigned = false;
                else if (typeof object.currentTime === "string")
                    message.currentTime = parseInt(object.currentTime, 10);
                else if (typeof object.currentTime === "number")
                    message.currentTime = object.currentTime;
                else if (typeof object.currentTime === "object")
                    message.currentTime = new $util.LongBits(object.currentTime.low >>> 0, object.currentTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SendHeartBeatResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.SendHeartBeatResponse
         * @static
         * @param {SdkProto.SendHeartBeatResponse} message SendHeartBeatResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendHeartBeatResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.currentTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currentTime = options.longs === String ? "0" : 0;
            if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                if (typeof message.currentTime === "number")
                    object.currentTime = options.longs === String ? String(message.currentTime) : message.currentTime;
                else
                    object.currentTime = options.longs === String ? $util.Long.prototype.toString.call(message.currentTime) : options.longs === Number ? new $util.LongBits(message.currentTime.low >>> 0, message.currentTime.high >>> 0).toNumber() : message.currentTime;
            return object;
        };

        /**
         * Converts this SendHeartBeatResponse to JSON.
         * @function toJSON
         * @memberof SdkProto.SendHeartBeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendHeartBeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendHeartBeatResponse;
    })();

    SdkProto.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof SdkProto
         * @interface IResponse
         * @property {string|null} [msg] Response msg
         * @property {SdkProto.Response.ErrorCode|null} [code] Response code
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {SdkProto.Request.CMD|null} [cmd] Response cmd
         * @property {SdkProto.ILoginResponse|null} [loginResponse] Response loginResponse
         * @property {SdkProto.IRegisterPhoneRespone|null} [registerPhoneResponse] Response registerPhoneResponse
         * @property {SdkProto.IGetUserInfoResponse|null} [getUserInfoResponse] Response getUserInfoResponse
         * @property {SdkProto.ICoinBankResponse|null} [coinBankResponse] Response coinBankResponse
         * @property {SdkProto.IChangeSignResponse|null} [changeSignResponse] Response changeSignResponse
         * @property {SdkProto.ISendDisCardResponse|null} [sendDisCardResponse] Response sendDisCardResponse
         * @property {SdkProto.ISendPassPaiResponse|null} [sendPassPaiResponse] Response sendPassPaiResponse
         * @property {SdkProto.ISendUserQDZResponse|null} [sendUserQDZResponse] Response sendUserQDZResponse
         * @property {SdkProto.ISendUserQDZ2Response|null} [sendUserQDZ2Response] Response sendUserQDZ2Response
         * @property {SdkProto.ISendUserMPResponse|null} [sendUserMPResponse] Response sendUserMPResponse
         * @property {SdkProto.ISendUserMP2Response|null} [sendUserMP2Response] Response sendUserMP2Response
         * @property {SdkProto.ISendRoundRecordResponse|null} [sendRoundRecordResponse] Response sendRoundRecordResponse
         * @property {SdkProto.ISendReconnectQuitResponse|null} [sendReconnectQuitResponse] Response sendReconnectQuitResponse
         * @property {SdkProto.IUserReconnectResponse|null} [userReconnectResponse] Response userReconnectResponse
         * @property {SdkProto.ISendUserReconnectResponse|null} [sendUserReconnectResponse] Response sendUserReconnectResponse
         * @property {SdkProto.ISendApplyDismissResponse|null} [sendApplyDismissResponse] Response sendApplyDismissResponse
         * @property {SdkProto.ISendAgreeDismissResponse|null} [sendAgreeDismissResponse] Response sendAgreeDismissResponse
         * @property {SdkProto.ISendDismissResultResponse|null} [sendDismissResultResponse] Response sendDismissResultResponse
         * @property {SdkProto.ISendUserQuitResponse|null} [sendUserQuitResponse] Response sendUserQuitResponse
         * @property {SdkProto.ISendMessageResponse|null} [sendMessageResponse] Response sendMessageResponse
         * @property {SdkProto.ISendUserOnBackResponse|null} [sendUserOnBackResponse] Response sendUserOnBackResponse
         * @property {SdkProto.ISendGameOverResponse|null} [sendGameOverResponse] Response sendGameOverResponse
         * @property {SdkProto.ISendDiamondChangeResponse|null} [sendDiamondChangeResponse] Response sendDiamondChangeResponse
         * @property {SdkProto.ISendCancelAutoResponse|null} [sendCancelAutoResponse] Response sendCancelAutoResponse
         * @property {SdkProto.IDelayCheckResponse|null} [delayCheckResponse] Response delayCheckResponse
         * @property {SdkProto.ISendRemainTimeResponse|null} [sendRemainTimeResponse] Response sendRemainTimeResponse
         * @property {SdkProto.ISendNoticeClientDismissResponse|null} [sendNoticeClientDismissResponse] Response sendNoticeClientDismissResponse
         * @property {SdkProto.ISendUserQuitByAdminResponse|null} [sendUserQuitByAdminResponse] Response sendUserQuitByAdminResponse
         * @property {SdkProto.ISendCoinRefreshResponse|null} [sendCoinRefreshResponse] Response sendCoinRefreshResponse
         * @property {SdkProto.ISendHeartBeatResponse|null} [sendHeartBeatResponse] Response sendHeartBeatResponse
         */

        /**
         * Constructs a new Response.
         * @memberof SdkProto
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {SdkProto.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response msg.
         * @member {string} msg
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.msg = "OK";

        /**
         * Response code.
         * @member {SdkProto.Response.ErrorCode} code
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.code = 200;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {SdkProto.Request.CMD} cmd
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response loginResponse.
         * @member {SdkProto.ILoginResponse|null|undefined} loginResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.loginResponse = null;

        /**
         * Response registerPhoneResponse.
         * @member {SdkProto.IRegisterPhoneRespone|null|undefined} registerPhoneResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.registerPhoneResponse = null;

        /**
         * Response getUserInfoResponse.
         * @member {SdkProto.IGetUserInfoResponse|null|undefined} getUserInfoResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.getUserInfoResponse = null;

        /**
         * Response coinBankResponse.
         * @member {SdkProto.ICoinBankResponse|null|undefined} coinBankResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.coinBankResponse = null;

        /**
         * Response changeSignResponse.
         * @member {SdkProto.IChangeSignResponse|null|undefined} changeSignResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.changeSignResponse = null;

        /**
         * Response sendDisCardResponse.
         * @member {SdkProto.ISendDisCardResponse|null|undefined} sendDisCardResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendDisCardResponse = null;

        /**
         * Response sendPassPaiResponse.
         * @member {SdkProto.ISendPassPaiResponse|null|undefined} sendPassPaiResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendPassPaiResponse = null;

        /**
         * Response sendUserQDZResponse.
         * @member {SdkProto.ISendUserQDZResponse|null|undefined} sendUserQDZResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserQDZResponse = null;

        /**
         * Response sendUserQDZ2Response.
         * @member {SdkProto.ISendUserQDZ2Response|null|undefined} sendUserQDZ2Response
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserQDZ2Response = null;

        /**
         * Response sendUserMPResponse.
         * @member {SdkProto.ISendUserMPResponse|null|undefined} sendUserMPResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserMPResponse = null;

        /**
         * Response sendUserMP2Response.
         * @member {SdkProto.ISendUserMP2Response|null|undefined} sendUserMP2Response
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserMP2Response = null;

        /**
         * Response sendRoundRecordResponse.
         * @member {SdkProto.ISendRoundRecordResponse|null|undefined} sendRoundRecordResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendRoundRecordResponse = null;

        /**
         * Response sendReconnectQuitResponse.
         * @member {SdkProto.ISendReconnectQuitResponse|null|undefined} sendReconnectQuitResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendReconnectQuitResponse = null;

        /**
         * Response userReconnectResponse.
         * @member {SdkProto.IUserReconnectResponse|null|undefined} userReconnectResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.userReconnectResponse = null;

        /**
         * Response sendUserReconnectResponse.
         * @member {SdkProto.ISendUserReconnectResponse|null|undefined} sendUserReconnectResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserReconnectResponse = null;

        /**
         * Response sendApplyDismissResponse.
         * @member {SdkProto.ISendApplyDismissResponse|null|undefined} sendApplyDismissResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendApplyDismissResponse = null;

        /**
         * Response sendAgreeDismissResponse.
         * @member {SdkProto.ISendAgreeDismissResponse|null|undefined} sendAgreeDismissResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendAgreeDismissResponse = null;

        /**
         * Response sendDismissResultResponse.
         * @member {SdkProto.ISendDismissResultResponse|null|undefined} sendDismissResultResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendDismissResultResponse = null;

        /**
         * Response sendUserQuitResponse.
         * @member {SdkProto.ISendUserQuitResponse|null|undefined} sendUserQuitResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserQuitResponse = null;

        /**
         * Response sendMessageResponse.
         * @member {SdkProto.ISendMessageResponse|null|undefined} sendMessageResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendMessageResponse = null;

        /**
         * Response sendUserOnBackResponse.
         * @member {SdkProto.ISendUserOnBackResponse|null|undefined} sendUserOnBackResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserOnBackResponse = null;

        /**
         * Response sendGameOverResponse.
         * @member {SdkProto.ISendGameOverResponse|null|undefined} sendGameOverResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendGameOverResponse = null;

        /**
         * Response sendDiamondChangeResponse.
         * @member {SdkProto.ISendDiamondChangeResponse|null|undefined} sendDiamondChangeResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendDiamondChangeResponse = null;

        /**
         * Response sendCancelAutoResponse.
         * @member {SdkProto.ISendCancelAutoResponse|null|undefined} sendCancelAutoResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendCancelAutoResponse = null;

        /**
         * Response delayCheckResponse.
         * @member {SdkProto.IDelayCheckResponse|null|undefined} delayCheckResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.delayCheckResponse = null;

        /**
         * Response sendRemainTimeResponse.
         * @member {SdkProto.ISendRemainTimeResponse|null|undefined} sendRemainTimeResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendRemainTimeResponse = null;

        /**
         * Response sendNoticeClientDismissResponse.
         * @member {SdkProto.ISendNoticeClientDismissResponse|null|undefined} sendNoticeClientDismissResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendNoticeClientDismissResponse = null;

        /**
         * Response sendUserQuitByAdminResponse.
         * @member {SdkProto.ISendUserQuitByAdminResponse|null|undefined} sendUserQuitByAdminResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendUserQuitByAdminResponse = null;

        /**
         * Response sendCoinRefreshResponse.
         * @member {SdkProto.ISendCoinRefreshResponse|null|undefined} sendCoinRefreshResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendCoinRefreshResponse = null;

        /**
         * Response sendHeartBeatResponse.
         * @member {SdkProto.ISendHeartBeatResponse|null|undefined} sendHeartBeatResponse
         * @memberof SdkProto.Response
         * @instance
         */
        Response.prototype.sendHeartBeatResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof SdkProto.Response
         * @static
         * @param {SdkProto.IResponse=} [properties] Properties to set
         * @returns {SdkProto.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link SdkProto.Response.verify|verify} messages.
         * @function encode
         * @memberof SdkProto.Response
         * @static
         * @param {SdkProto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.serverTime);
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cmd);
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                $root.SdkProto.LoginResponse.encode(message.loginResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.registerPhoneResponse != null && message.hasOwnProperty("registerPhoneResponse"))
                $root.SdkProto.RegisterPhoneRespone.encode(message.registerPhoneResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.getUserInfoResponse != null && message.hasOwnProperty("getUserInfoResponse"))
                $root.SdkProto.GetUserInfoResponse.encode(message.getUserInfoResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.coinBankResponse != null && message.hasOwnProperty("coinBankResponse"))
                $root.SdkProto.CoinBankResponse.encode(message.coinBankResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.changeSignResponse != null && message.hasOwnProperty("changeSignResponse"))
                $root.SdkProto.ChangeSignResponse.encode(message.changeSignResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.sendDisCardResponse != null && message.hasOwnProperty("sendDisCardResponse"))
                $root.SdkProto.SendDisCardResponse.encode(message.sendDisCardResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.sendPassPaiResponse != null && message.hasOwnProperty("sendPassPaiResponse"))
                $root.SdkProto.SendPassPaiResponse.encode(message.sendPassPaiResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.sendUserQDZResponse != null && message.hasOwnProperty("sendUserQDZResponse"))
                $root.SdkProto.SendUserQDZResponse.encode(message.sendUserQDZResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.sendUserQDZ2Response != null && message.hasOwnProperty("sendUserQDZ2Response"))
                $root.SdkProto.SendUserQDZ2Response.encode(message.sendUserQDZ2Response, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.sendUserMPResponse != null && message.hasOwnProperty("sendUserMPResponse"))
                $root.SdkProto.SendUserMPResponse.encode(message.sendUserMPResponse, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.sendUserMP2Response != null && message.hasOwnProperty("sendUserMP2Response"))
                $root.SdkProto.SendUserMP2Response.encode(message.sendUserMP2Response, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.sendRoundRecordResponse != null && message.hasOwnProperty("sendRoundRecordResponse"))
                $root.SdkProto.SendRoundRecordResponse.encode(message.sendRoundRecordResponse, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                $root.SdkProto.SendReconnectQuitResponse.encode(message.sendReconnectQuitResponse, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                $root.SdkProto.UserReconnectResponse.encode(message.userReconnectResponse, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                $root.SdkProto.SendUserReconnectResponse.encode(message.sendUserReconnectResponse, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.sendApplyDismissResponse != null && message.hasOwnProperty("sendApplyDismissResponse"))
                $root.SdkProto.SendApplyDismissResponse.encode(message.sendApplyDismissResponse, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.sendAgreeDismissResponse != null && message.hasOwnProperty("sendAgreeDismissResponse"))
                $root.SdkProto.SendAgreeDismissResponse.encode(message.sendAgreeDismissResponse, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.sendDismissResultResponse != null && message.hasOwnProperty("sendDismissResultResponse"))
                $root.SdkProto.SendDismissResultResponse.encode(message.sendDismissResultResponse, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                $root.SdkProto.SendUserQuitResponse.encode(message.sendUserQuitResponse, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                $root.SdkProto.SendMessageResponse.encode(message.sendMessageResponse, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                $root.SdkProto.SendUserOnBackResponse.encode(message.sendUserOnBackResponse, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.sendGameOverResponse != null && message.hasOwnProperty("sendGameOverResponse"))
                $root.SdkProto.SendGameOverResponse.encode(message.sendGameOverResponse, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                $root.SdkProto.SendDiamondChangeResponse.encode(message.sendDiamondChangeResponse, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.sendCancelAutoResponse != null && message.hasOwnProperty("sendCancelAutoResponse"))
                $root.SdkProto.SendCancelAutoResponse.encode(message.sendCancelAutoResponse, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                $root.SdkProto.DelayCheckResponse.encode(message.delayCheckResponse, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                $root.SdkProto.SendRemainTimeResponse.encode(message.sendRemainTimeResponse, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse"))
                $root.SdkProto.SendNoticeClientDismissResponse.encode(message.sendNoticeClientDismissResponse, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse"))
                $root.SdkProto.SendUserQuitByAdminResponse.encode(message.sendUserQuitByAdminResponse, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                $root.SdkProto.SendCoinRefreshResponse.encode(message.sendCoinRefreshResponse, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                $root.SdkProto.SendHeartBeatResponse.encode(message.sendHeartBeatResponse, writer.uint32(/* id 233, wireType 2 =*/1866).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link SdkProto.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SdkProto.Response
         * @static
         * @param {SdkProto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof SdkProto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SdkProto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SdkProto.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.serverTime = reader.int64();
                    break;
                case 4:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.loginResponse = $root.SdkProto.LoginResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.registerPhoneResponse = $root.SdkProto.RegisterPhoneRespone.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.getUserInfoResponse = $root.SdkProto.GetUserInfoResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.coinBankResponse = $root.SdkProto.CoinBankResponse.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.changeSignResponse = $root.SdkProto.ChangeSignResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.sendDisCardResponse = $root.SdkProto.SendDisCardResponse.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.sendPassPaiResponse = $root.SdkProto.SendPassPaiResponse.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.sendUserQDZResponse = $root.SdkProto.SendUserQDZResponse.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.sendUserQDZ2Response = $root.SdkProto.SendUserQDZ2Response.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.sendUserMPResponse = $root.SdkProto.SendUserMPResponse.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.sendUserMP2Response = $root.SdkProto.SendUserMP2Response.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.sendRoundRecordResponse = $root.SdkProto.SendRoundRecordResponse.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.sendReconnectQuitResponse = $root.SdkProto.SendReconnectQuitResponse.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.userReconnectResponse = $root.SdkProto.UserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.sendUserReconnectResponse = $root.SdkProto.SendUserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.sendApplyDismissResponse = $root.SdkProto.SendApplyDismissResponse.decode(reader, reader.uint32());
                    break;
                case 29:
                    message.sendAgreeDismissResponse = $root.SdkProto.SendAgreeDismissResponse.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.sendDismissResultResponse = $root.SdkProto.SendDismissResultResponse.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.sendUserQuitResponse = $root.SdkProto.SendUserQuitResponse.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.sendMessageResponse = $root.SdkProto.SendMessageResponse.decode(reader, reader.uint32());
                    break;
                case 33:
                    message.sendUserOnBackResponse = $root.SdkProto.SendUserOnBackResponse.decode(reader, reader.uint32());
                    break;
                case 34:
                    message.sendGameOverResponse = $root.SdkProto.SendGameOverResponse.decode(reader, reader.uint32());
                    break;
                case 35:
                    message.sendDiamondChangeResponse = $root.SdkProto.SendDiamondChangeResponse.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.sendCancelAutoResponse = $root.SdkProto.SendCancelAutoResponse.decode(reader, reader.uint32());
                    break;
                case 37:
                    message.delayCheckResponse = $root.SdkProto.DelayCheckResponse.decode(reader, reader.uint32());
                    break;
                case 38:
                    message.sendRemainTimeResponse = $root.SdkProto.SendRemainTimeResponse.decode(reader, reader.uint32());
                    break;
                case 39:
                    message.sendNoticeClientDismissResponse = $root.SdkProto.SendNoticeClientDismissResponse.decode(reader, reader.uint32());
                    break;
                case 40:
                    message.sendUserQuitByAdminResponse = $root.SdkProto.SendUserQuitByAdminResponse.decode(reader, reader.uint32());
                    break;
                case 41:
                    message.sendCoinRefreshResponse = $root.SdkProto.SendCoinRefreshResponse.decode(reader, reader.uint32());
                    break;
                case 233:
                    message.sendHeartBeatResponse = $root.SdkProto.SendHeartBeatResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SdkProto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SdkProto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof SdkProto.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 200:
                case 400:
                case 401:
                case 402:
                case 403:
                case 404:
                case 405:
                case 406:
                case 444:
                case 407:
                case 408:
                case 409:
                case 410:
                case 443:
                case 411:
                case 412:
                case 413:
                case 414:
                case 415:
                case 416:
                case 417:
                case 418:
                case 419:
                case 420:
                case 421:
                case 422:
                case 423:
                case 424:
                case 425:
                case 426:
                case 427:
                case 428:
                case 429:
                case 430:
                case 431:
                case 432:
                case 433:
                case 434:
                case 435:
                case 437:
                case 438:
                case 439:
                case 440:
                case 441:
                case 450:
                case 500:
                case 600:
                case 601:
                case 602:
                case 603:
                case 604:
                case 605:
                case 613:
                case 614:
                case 606:
                case 607:
                case 608:
                case 609:
                case 610:
                case 611:
                case 612:
                case 619:
                    break;
                }
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 2000:
                case 2002:
                case 2003:
                case 2004:
                case 2005:
                case 2006:
                case 2007:
                case 2009:
                case 2010:
                case 2011:
                case 2022:
                case 2023:
                case 2030:
                case 2035:
                case 2031:
                case 2040:
                case 2041:
                case 2042:
                case 2043:
                case 2047:
                case 2044:
                case 2045:
                case 2060:
                case 2061:
                case 2062:
                case 2080:
                case 2081:
                case 2015:
                case 2100:
                case 2101:
                case 2102:
                case 2200:
                case 2201:
                case 2202:
                case 2017:
                case 2071:
                case 2083:
                case 20012:
                case 20013:
                case 20010:
                case 2046:
                case 21002:
                case 20015:
                case 21003:
                case 10000:
                    break;
                }
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse")) {
                var error = $root.SdkProto.LoginResponse.verify(message.loginResponse);
                if (error)
                    return "loginResponse." + error;
            }
            if (message.registerPhoneResponse != null && message.hasOwnProperty("registerPhoneResponse")) {
                var error = $root.SdkProto.RegisterPhoneRespone.verify(message.registerPhoneResponse);
                if (error)
                    return "registerPhoneResponse." + error;
            }
            if (message.getUserInfoResponse != null && message.hasOwnProperty("getUserInfoResponse")) {
                var error = $root.SdkProto.GetUserInfoResponse.verify(message.getUserInfoResponse);
                if (error)
                    return "getUserInfoResponse." + error;
            }
            if (message.coinBankResponse != null && message.hasOwnProperty("coinBankResponse")) {
                var error = $root.SdkProto.CoinBankResponse.verify(message.coinBankResponse);
                if (error)
                    return "coinBankResponse." + error;
            }
            if (message.changeSignResponse != null && message.hasOwnProperty("changeSignResponse")) {
                var error = $root.SdkProto.ChangeSignResponse.verify(message.changeSignResponse);
                if (error)
                    return "changeSignResponse." + error;
            }
            if (message.sendDisCardResponse != null && message.hasOwnProperty("sendDisCardResponse")) {
                var error = $root.SdkProto.SendDisCardResponse.verify(message.sendDisCardResponse);
                if (error)
                    return "sendDisCardResponse." + error;
            }
            if (message.sendPassPaiResponse != null && message.hasOwnProperty("sendPassPaiResponse")) {
                var error = $root.SdkProto.SendPassPaiResponse.verify(message.sendPassPaiResponse);
                if (error)
                    return "sendPassPaiResponse." + error;
            }
            if (message.sendUserQDZResponse != null && message.hasOwnProperty("sendUserQDZResponse")) {
                var error = $root.SdkProto.SendUserQDZResponse.verify(message.sendUserQDZResponse);
                if (error)
                    return "sendUserQDZResponse." + error;
            }
            if (message.sendUserQDZ2Response != null && message.hasOwnProperty("sendUserQDZ2Response")) {
                var error = $root.SdkProto.SendUserQDZ2Response.verify(message.sendUserQDZ2Response);
                if (error)
                    return "sendUserQDZ2Response." + error;
            }
            if (message.sendUserMPResponse != null && message.hasOwnProperty("sendUserMPResponse")) {
                var error = $root.SdkProto.SendUserMPResponse.verify(message.sendUserMPResponse);
                if (error)
                    return "sendUserMPResponse." + error;
            }
            if (message.sendUserMP2Response != null && message.hasOwnProperty("sendUserMP2Response")) {
                var error = $root.SdkProto.SendUserMP2Response.verify(message.sendUserMP2Response);
                if (error)
                    return "sendUserMP2Response." + error;
            }
            if (message.sendRoundRecordResponse != null && message.hasOwnProperty("sendRoundRecordResponse")) {
                var error = $root.SdkProto.SendRoundRecordResponse.verify(message.sendRoundRecordResponse);
                if (error)
                    return "sendRoundRecordResponse." + error;
            }
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse")) {
                var error = $root.SdkProto.SendReconnectQuitResponse.verify(message.sendReconnectQuitResponse);
                if (error)
                    return "sendReconnectQuitResponse." + error;
            }
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse")) {
                var error = $root.SdkProto.UserReconnectResponse.verify(message.userReconnectResponse);
                if (error)
                    return "userReconnectResponse." + error;
            }
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse")) {
                var error = $root.SdkProto.SendUserReconnectResponse.verify(message.sendUserReconnectResponse);
                if (error)
                    return "sendUserReconnectResponse." + error;
            }
            if (message.sendApplyDismissResponse != null && message.hasOwnProperty("sendApplyDismissResponse")) {
                var error = $root.SdkProto.SendApplyDismissResponse.verify(message.sendApplyDismissResponse);
                if (error)
                    return "sendApplyDismissResponse." + error;
            }
            if (message.sendAgreeDismissResponse != null && message.hasOwnProperty("sendAgreeDismissResponse")) {
                var error = $root.SdkProto.SendAgreeDismissResponse.verify(message.sendAgreeDismissResponse);
                if (error)
                    return "sendAgreeDismissResponse." + error;
            }
            if (message.sendDismissResultResponse != null && message.hasOwnProperty("sendDismissResultResponse")) {
                var error = $root.SdkProto.SendDismissResultResponse.verify(message.sendDismissResultResponse);
                if (error)
                    return "sendDismissResultResponse." + error;
            }
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse")) {
                var error = $root.SdkProto.SendUserQuitResponse.verify(message.sendUserQuitResponse);
                if (error)
                    return "sendUserQuitResponse." + error;
            }
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse")) {
                var error = $root.SdkProto.SendMessageResponse.verify(message.sendMessageResponse);
                if (error)
                    return "sendMessageResponse." + error;
            }
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse")) {
                var error = $root.SdkProto.SendUserOnBackResponse.verify(message.sendUserOnBackResponse);
                if (error)
                    return "sendUserOnBackResponse." + error;
            }
            if (message.sendGameOverResponse != null && message.hasOwnProperty("sendGameOverResponse")) {
                var error = $root.SdkProto.SendGameOverResponse.verify(message.sendGameOverResponse);
                if (error)
                    return "sendGameOverResponse." + error;
            }
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse")) {
                var error = $root.SdkProto.SendDiamondChangeResponse.verify(message.sendDiamondChangeResponse);
                if (error)
                    return "sendDiamondChangeResponse." + error;
            }
            if (message.sendCancelAutoResponse != null && message.hasOwnProperty("sendCancelAutoResponse")) {
                var error = $root.SdkProto.SendCancelAutoResponse.verify(message.sendCancelAutoResponse);
                if (error)
                    return "sendCancelAutoResponse." + error;
            }
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse")) {
                var error = $root.SdkProto.DelayCheckResponse.verify(message.delayCheckResponse);
                if (error)
                    return "delayCheckResponse." + error;
            }
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse")) {
                var error = $root.SdkProto.SendRemainTimeResponse.verify(message.sendRemainTimeResponse);
                if (error)
                    return "sendRemainTimeResponse." + error;
            }
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse")) {
                var error = $root.SdkProto.SendNoticeClientDismissResponse.verify(message.sendNoticeClientDismissResponse);
                if (error)
                    return "sendNoticeClientDismissResponse." + error;
            }
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse")) {
                var error = $root.SdkProto.SendUserQuitByAdminResponse.verify(message.sendUserQuitByAdminResponse);
                if (error)
                    return "sendUserQuitByAdminResponse." + error;
            }
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse")) {
                var error = $root.SdkProto.SendCoinRefreshResponse.verify(message.sendCoinRefreshResponse);
                if (error)
                    return "sendCoinRefreshResponse." + error;
            }
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse")) {
                var error = $root.SdkProto.SendHeartBeatResponse.verify(message.sendHeartBeatResponse);
                if (error)
                    return "sendHeartBeatResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SdkProto.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SdkProto.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.SdkProto.Response)
                return object;
            var message = new $root.SdkProto.Response();
            if (object.msg != null)
                message.msg = String(object.msg);
            switch (object.code) {
            case "OK":
            case 200:
                message.code = 200;
                break;
            case "DATA_CHECK_FAIL":
            case 400:
                message.code = 400;
                break;
            case "USER_NO_EXSIT":
            case 401:
                message.code = 401;
                break;
            case "USER_EXSITS":
            case 402:
                message.code = 402;
                break;
            case "PASSWORD_ERROR":
            case 403:
                message.code = 403;
                break;
            case "CLIENT_ERROR":
            case 404:
                message.code = 404;
                break;
            case "USERNAME_NO_VALID":
            case 405:
                message.code = 405;
                break;
            case "PASSWORD_NO_VALID":
            case 406:
                message.code = 406;
                break;
            case "PASSWORD_NO_VALID_NOTSAME":
            case 444:
                message.code = 444;
                break;
            case "SESSION_EXPIRE":
            case 407:
                message.code = 407;
                break;
            case "APP_NO_EXSIT":
            case 408:
                message.code = 408;
                break;
            case "SIGN_ERROR":
            case 409:
                message.code = 409;
                break;
            case "GET_SMS_FAILURE":
            case 410:
                message.code = 410;
                break;
            case "GET_SMS_TIME_FAILURE":
            case 443:
                message.code = 443;
                break;
            case "SMS_VERIFY_CODE_EXPIRE":
            case 411:
                message.code = 411;
                break;
            case "SMS_VERIFY_CODE_ERROR":
            case 412:
                message.code = 412;
                break;
            case "MOBILE_FORMAT_ERROR":
            case 413:
                message.code = 413;
                break;
            case "MOBILE_BINDED":
            case 414:
                message.code = 414;
                break;
            case "APP_NOT_EXSIT":
            case 415:
                message.code = 415;
                break;
            case "MOBILE_UNBOUND":
            case 416:
                message.code = 416;
                break;
            case "SMS_VERIFY_CODE_SENT":
            case 417:
                message.code = 417;
                break;
            case "NICKNAME_NOT_NULL":
            case 418:
                message.code = 418;
                break;
            case "INPUT_MOBILE":
            case 419:
                message.code = 419;
                break;
            case "INPUT_USERNAME":
            case 420:
                message.code = 420;
                break;
            case "INPUT_PASSWORD":
            case 421:
                message.code = 421;
                break;
            case "INPUT_SMS_CODE":
            case 422:
                message.code = 422;
                break;
            case "ORDER_NO_ERROR":
            case 423:
                message.code = 423;
                break;
            case "ORDER_REPEAT_ERROR":
            case 424:
                message.code = 424;
                break;
            case "WX_ACCESS_TOKEN_ERROR":
            case 425:
                message.code = 425;
                break;
            case "OPERATION_FAILED":
            case 426:
                message.code = 426;
                break;
            case "DONOT_IS_ME":
            case 427:
                message.code = 427;
                break;
            case "BIND_CODE_ERROR":
            case 428:
                message.code = 428;
                break;
            case "LOGIN_ERROR":
            case 429:
                message.code = 429;
                break;
            case "NOT_IN_AGENT":
            case 430:
                message.code = 430;
                break;
            case "EXIST_IN_AGENT":
            case 431:
                message.code = 431;
                break;
            case "APPLY_IN_AGENT":
            case 432:
                message.code = 432;
                break;
            case "AGENT_NOT_EXIST":
            case 433:
                message.code = 433;
                break;
            case "AGENT_NOT_MANAGER":
            case 434:
                message.code = 434;
                break;
            case "USER_NOT_APPLY":
            case 435:
                message.code = 435;
                break;
            case "CARD_HAS_USED":
            case 437:
                message.code = 437;
                break;
            case "AGENT_MAX_COUNT":
            case 438:
                message.code = 438;
                break;
            case "CREATE_THE_SAME_ERROR":
            case 439:
                message.code = 439;
                break;
            case "RULE_NOT_HAVE":
            case 440:
                message.code = 440;
                break;
            case "SLOT_ALREADY_HAVE":
            case 441:
                message.code = 441;
                break;
            case "PLAY_BACK_CODE_ERROR":
            case 450:
                message.code = 450;
                break;
            case "SYSTEM_ERROR":
            case 500:
                message.code = 500;
                break;
            case "PLAY_DISK_ERROR":
            case 600:
                message.code = 600;
                break;
            case "EMAIL_ERROR":
            case 601:
                message.code = 601;
                break;
            case "CONTENT_ERROR":
            case 602:
                message.code = 602;
                break;
            case "LENGTH_ERROR":
            case 603:
                message.code = 603;
                break;
            case "PLAY_IN_GAME":
            case 604:
                message.code = 604;
                break;
            case "HAS_ALIPAY_ACCOUNT":
            case 605:
                message.code = 605;
                break;
            case "HAS_BANK_ACCOUNT":
            case 613:
                message.code = 613;
                break;
            case "HAS_PHONE_ACCOUNT":
            case 614:
                message.code = 614;
                break;
            case "CHANGE_ERROR":
            case 606:
                message.code = 606;
                break;
            case "CHANGE_REFUND_ERROR":
            case 607:
                message.code = 607;
                break;
            case "BANK_COIN_ERROR":
            case 608:
                message.code = 608;
                break;
            case "CHANGE_GAME_TURNOVER_ERROR":
            case 609:
                message.code = 609;
                break;
            case "BIND_ALI_ERROR":
            case 610:
                message.code = 610;
                break;
            case "BIND_BANK_ERROR":
            case 611:
                message.code = 611;
                break;
            case "COIN_CANNOT_NULL":
            case 612:
                message.code = 612;
                break;
            case "PERSON_LOGIN_ERROR":
            case 619:
                message.code = 619;
                break;
            }
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "Login":
            case 2000:
                message.cmd = 2000;
                break;
            case "RegisterPhone":
            case 2002:
                message.cmd = 2002;
                break;
            case "GetUserInfo":
            case 2003:
                message.cmd = 2003;
                break;
            case "CoinBank":
            case 2004:
                message.cmd = 2004;
                break;
            case "ChangeSign":
            case 2005:
                message.cmd = 2005;
                break;
            case "TestDeviceID":
            case 2006:
                message.cmd = 2006;
                break;
            case "SEND_USER_READY":
            case 2007:
                message.cmd = 2007;
                break;
            case "SEND_CARDS":
            case 2009:
                message.cmd = 2009;
                break;
            case "DIS_CARD":
            case 2010:
                message.cmd = 2010;
                break;
            case "SEND_DIS_CARD":
            case 2011:
                message.cmd = 2011;
                break;
            case "PASS_PAI":
            case 2022:
                message.cmd = 2022;
                break;
            case "SEND_PASS_PAI":
            case 2023:
                message.cmd = 2023;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "APPLY_DISMISS":
            case 2040:
                message.cmd = 2040;
                break;
            case "SEND_APPLY_DISMISS":
            case 2041:
                message.cmd = 2041;
                break;
            case "AGREE_DISMISS":
            case 2042:
                message.cmd = 2042;
                break;
            case "SEND_AGREE_DISMISS":
            case 2043:
                message.cmd = 2043;
                break;
            case "SEND_DISMISS_RESULT":
            case 2047:
                message.cmd = 2047;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "SEND_USER_QUIT":
            case 2045:
                message.cmd = 2045;
                break;
            case "MESSAGE":
            case 2060:
                message.cmd = 2060;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "SEND_COIN_REFRESH":
            case 2062:
                message.cmd = 2062;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_ROUND_RECORD":
            case 2015:
                message.cmd = 2015;
                break;
            case "USER_QDZ":
            case 2100:
                message.cmd = 2100;
                break;
            case "SEND_USER_QDZ":
            case 2101:
                message.cmd = 2101;
                break;
            case "SEND_USER_QDZ2":
            case 2102:
                message.cmd = 2102;
                break;
            case "USER_MP":
            case 2200:
                message.cmd = 2200;
                break;
            case "SEND_USER_MP":
            case 2201:
                message.cmd = 2201;
                break;
            case "SEND_USER_MP2":
            case 2202:
                message.cmd = 2202;
                break;
            case "SEND_GAME_OVER":
            case 2017:
                message.cmd = 2017;
                break;
            case "SEND_DIAMOND_CHANGE":
            case 2071:
                message.cmd = 2071;
                break;
            case "USER_DAO_RECORD":
            case 2083:
                message.cmd = 2083;
                break;
            case "CANCEL_AUTO":
            case 20012:
                message.cmd = 20012;
                break;
            case "SEND_CANCEL_AUTO":
            case 20013:
                message.cmd = 20013;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "Get_User_Info":
            case 2046:
                message.cmd = 2046;
                break;
            case "SEND_NOTICE_CLIENT_DISMISS":
            case 21002:
                message.cmd = 21002;
                break;
            case "SEND_REMAIN_TIME":
            case 20015:
                message.cmd = 20015;
                break;
            case "SEND_USERQUIT_BY_ADMIN":
            case 21003:
                message.cmd = 21003;
                break;
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            }
            if (object.loginResponse != null) {
                if (typeof object.loginResponse !== "object")
                    throw TypeError(".SdkProto.Response.loginResponse: object expected");
                message.loginResponse = $root.SdkProto.LoginResponse.fromObject(object.loginResponse);
            }
            if (object.registerPhoneResponse != null) {
                if (typeof object.registerPhoneResponse !== "object")
                    throw TypeError(".SdkProto.Response.registerPhoneResponse: object expected");
                message.registerPhoneResponse = $root.SdkProto.RegisterPhoneRespone.fromObject(object.registerPhoneResponse);
            }
            if (object.getUserInfoResponse != null) {
                if (typeof object.getUserInfoResponse !== "object")
                    throw TypeError(".SdkProto.Response.getUserInfoResponse: object expected");
                message.getUserInfoResponse = $root.SdkProto.GetUserInfoResponse.fromObject(object.getUserInfoResponse);
            }
            if (object.coinBankResponse != null) {
                if (typeof object.coinBankResponse !== "object")
                    throw TypeError(".SdkProto.Response.coinBankResponse: object expected");
                message.coinBankResponse = $root.SdkProto.CoinBankResponse.fromObject(object.coinBankResponse);
            }
            if (object.changeSignResponse != null) {
                if (typeof object.changeSignResponse !== "object")
                    throw TypeError(".SdkProto.Response.changeSignResponse: object expected");
                message.changeSignResponse = $root.SdkProto.ChangeSignResponse.fromObject(object.changeSignResponse);
            }
            if (object.sendDisCardResponse != null) {
                if (typeof object.sendDisCardResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendDisCardResponse: object expected");
                message.sendDisCardResponse = $root.SdkProto.SendDisCardResponse.fromObject(object.sendDisCardResponse);
            }
            if (object.sendPassPaiResponse != null) {
                if (typeof object.sendPassPaiResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendPassPaiResponse: object expected");
                message.sendPassPaiResponse = $root.SdkProto.SendPassPaiResponse.fromObject(object.sendPassPaiResponse);
            }
            if (object.sendUserQDZResponse != null) {
                if (typeof object.sendUserQDZResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendUserQDZResponse: object expected");
                message.sendUserQDZResponse = $root.SdkProto.SendUserQDZResponse.fromObject(object.sendUserQDZResponse);
            }
            if (object.sendUserQDZ2Response != null) {
                if (typeof object.sendUserQDZ2Response !== "object")
                    throw TypeError(".SdkProto.Response.sendUserQDZ2Response: object expected");
                message.sendUserQDZ2Response = $root.SdkProto.SendUserQDZ2Response.fromObject(object.sendUserQDZ2Response);
            }
            if (object.sendUserMPResponse != null) {
                if (typeof object.sendUserMPResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendUserMPResponse: object expected");
                message.sendUserMPResponse = $root.SdkProto.SendUserMPResponse.fromObject(object.sendUserMPResponse);
            }
            if (object.sendUserMP2Response != null) {
                if (typeof object.sendUserMP2Response !== "object")
                    throw TypeError(".SdkProto.Response.sendUserMP2Response: object expected");
                message.sendUserMP2Response = $root.SdkProto.SendUserMP2Response.fromObject(object.sendUserMP2Response);
            }
            if (object.sendRoundRecordResponse != null) {
                if (typeof object.sendRoundRecordResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendRoundRecordResponse: object expected");
                message.sendRoundRecordResponse = $root.SdkProto.SendRoundRecordResponse.fromObject(object.sendRoundRecordResponse);
            }
            if (object.sendReconnectQuitResponse != null) {
                if (typeof object.sendReconnectQuitResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendReconnectQuitResponse: object expected");
                message.sendReconnectQuitResponse = $root.SdkProto.SendReconnectQuitResponse.fromObject(object.sendReconnectQuitResponse);
            }
            if (object.userReconnectResponse != null) {
                if (typeof object.userReconnectResponse !== "object")
                    throw TypeError(".SdkProto.Response.userReconnectResponse: object expected");
                message.userReconnectResponse = $root.SdkProto.UserReconnectResponse.fromObject(object.userReconnectResponse);
            }
            if (object.sendUserReconnectResponse != null) {
                if (typeof object.sendUserReconnectResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendUserReconnectResponse: object expected");
                message.sendUserReconnectResponse = $root.SdkProto.SendUserReconnectResponse.fromObject(object.sendUserReconnectResponse);
            }
            if (object.sendApplyDismissResponse != null) {
                if (typeof object.sendApplyDismissResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendApplyDismissResponse: object expected");
                message.sendApplyDismissResponse = $root.SdkProto.SendApplyDismissResponse.fromObject(object.sendApplyDismissResponse);
            }
            if (object.sendAgreeDismissResponse != null) {
                if (typeof object.sendAgreeDismissResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendAgreeDismissResponse: object expected");
                message.sendAgreeDismissResponse = $root.SdkProto.SendAgreeDismissResponse.fromObject(object.sendAgreeDismissResponse);
            }
            if (object.sendDismissResultResponse != null) {
                if (typeof object.sendDismissResultResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendDismissResultResponse: object expected");
                message.sendDismissResultResponse = $root.SdkProto.SendDismissResultResponse.fromObject(object.sendDismissResultResponse);
            }
            if (object.sendUserQuitResponse != null) {
                if (typeof object.sendUserQuitResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendUserQuitResponse: object expected");
                message.sendUserQuitResponse = $root.SdkProto.SendUserQuitResponse.fromObject(object.sendUserQuitResponse);
            }
            if (object.sendMessageResponse != null) {
                if (typeof object.sendMessageResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendMessageResponse: object expected");
                message.sendMessageResponse = $root.SdkProto.SendMessageResponse.fromObject(object.sendMessageResponse);
            }
            if (object.sendUserOnBackResponse != null) {
                if (typeof object.sendUserOnBackResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendUserOnBackResponse: object expected");
                message.sendUserOnBackResponse = $root.SdkProto.SendUserOnBackResponse.fromObject(object.sendUserOnBackResponse);
            }
            if (object.sendGameOverResponse != null) {
                if (typeof object.sendGameOverResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendGameOverResponse: object expected");
                message.sendGameOverResponse = $root.SdkProto.SendGameOverResponse.fromObject(object.sendGameOverResponse);
            }
            if (object.sendDiamondChangeResponse != null) {
                if (typeof object.sendDiamondChangeResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendDiamondChangeResponse: object expected");
                message.sendDiamondChangeResponse = $root.SdkProto.SendDiamondChangeResponse.fromObject(object.sendDiamondChangeResponse);
            }
            if (object.sendCancelAutoResponse != null) {
                if (typeof object.sendCancelAutoResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendCancelAutoResponse: object expected");
                message.sendCancelAutoResponse = $root.SdkProto.SendCancelAutoResponse.fromObject(object.sendCancelAutoResponse);
            }
            if (object.delayCheckResponse != null) {
                if (typeof object.delayCheckResponse !== "object")
                    throw TypeError(".SdkProto.Response.delayCheckResponse: object expected");
                message.delayCheckResponse = $root.SdkProto.DelayCheckResponse.fromObject(object.delayCheckResponse);
            }
            if (object.sendRemainTimeResponse != null) {
                if (typeof object.sendRemainTimeResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendRemainTimeResponse: object expected");
                message.sendRemainTimeResponse = $root.SdkProto.SendRemainTimeResponse.fromObject(object.sendRemainTimeResponse);
            }
            if (object.sendNoticeClientDismissResponse != null) {
                if (typeof object.sendNoticeClientDismissResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendNoticeClientDismissResponse: object expected");
                message.sendNoticeClientDismissResponse = $root.SdkProto.SendNoticeClientDismissResponse.fromObject(object.sendNoticeClientDismissResponse);
            }
            if (object.sendUserQuitByAdminResponse != null) {
                if (typeof object.sendUserQuitByAdminResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendUserQuitByAdminResponse: object expected");
                message.sendUserQuitByAdminResponse = $root.SdkProto.SendUserQuitByAdminResponse.fromObject(object.sendUserQuitByAdminResponse);
            }
            if (object.sendCoinRefreshResponse != null) {
                if (typeof object.sendCoinRefreshResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendCoinRefreshResponse: object expected");
                message.sendCoinRefreshResponse = $root.SdkProto.SendCoinRefreshResponse.fromObject(object.sendCoinRefreshResponse);
            }
            if (object.sendHeartBeatResponse != null) {
                if (typeof object.sendHeartBeatResponse !== "object")
                    throw TypeError(".SdkProto.Response.sendHeartBeatResponse: object expected");
                message.sendHeartBeatResponse = $root.SdkProto.SendHeartBeatResponse.fromObject(object.sendHeartBeatResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SdkProto.Response
         * @static
         * @param {SdkProto.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msg = "OK";
                object.code = options.enums === String ? "OK" : 200;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.loginResponse = null;
                object.registerPhoneResponse = null;
                object.getUserInfoResponse = null;
                object.coinBankResponse = null;
                object.changeSignResponse = null;
                object.sendDisCardResponse = null;
                object.sendPassPaiResponse = null;
                object.sendUserQDZResponse = null;
                object.sendUserQDZ2Response = null;
                object.sendUserMPResponse = null;
                object.sendUserMP2Response = null;
                object.sendRoundRecordResponse = null;
                object.sendReconnectQuitResponse = null;
                object.userReconnectResponse = null;
                object.sendUserReconnectResponse = null;
                object.sendApplyDismissResponse = null;
                object.sendAgreeDismissResponse = null;
                object.sendDismissResultResponse = null;
                object.sendUserQuitResponse = null;
                object.sendMessageResponse = null;
                object.sendUserOnBackResponse = null;
                object.sendGameOverResponse = null;
                object.sendDiamondChangeResponse = null;
                object.sendCancelAutoResponse = null;
                object.delayCheckResponse = null;
                object.sendRemainTimeResponse = null;
                object.sendNoticeClientDismissResponse = null;
                object.sendUserQuitByAdminResponse = null;
                object.sendCoinRefreshResponse = null;
                object.sendHeartBeatResponse = null;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.SdkProto.Response.ErrorCode[message.code] : message.code;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.SdkProto.Request.CMD[message.cmd] : message.cmd;
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                object.loginResponse = $root.SdkProto.LoginResponse.toObject(message.loginResponse, options);
            if (message.registerPhoneResponse != null && message.hasOwnProperty("registerPhoneResponse"))
                object.registerPhoneResponse = $root.SdkProto.RegisterPhoneRespone.toObject(message.registerPhoneResponse, options);
            if (message.getUserInfoResponse != null && message.hasOwnProperty("getUserInfoResponse"))
                object.getUserInfoResponse = $root.SdkProto.GetUserInfoResponse.toObject(message.getUserInfoResponse, options);
            if (message.coinBankResponse != null && message.hasOwnProperty("coinBankResponse"))
                object.coinBankResponse = $root.SdkProto.CoinBankResponse.toObject(message.coinBankResponse, options);
            if (message.changeSignResponse != null && message.hasOwnProperty("changeSignResponse"))
                object.changeSignResponse = $root.SdkProto.ChangeSignResponse.toObject(message.changeSignResponse, options);
            if (message.sendDisCardResponse != null && message.hasOwnProperty("sendDisCardResponse"))
                object.sendDisCardResponse = $root.SdkProto.SendDisCardResponse.toObject(message.sendDisCardResponse, options);
            if (message.sendPassPaiResponse != null && message.hasOwnProperty("sendPassPaiResponse"))
                object.sendPassPaiResponse = $root.SdkProto.SendPassPaiResponse.toObject(message.sendPassPaiResponse, options);
            if (message.sendUserQDZResponse != null && message.hasOwnProperty("sendUserQDZResponse"))
                object.sendUserQDZResponse = $root.SdkProto.SendUserQDZResponse.toObject(message.sendUserQDZResponse, options);
            if (message.sendUserQDZ2Response != null && message.hasOwnProperty("sendUserQDZ2Response"))
                object.sendUserQDZ2Response = $root.SdkProto.SendUserQDZ2Response.toObject(message.sendUserQDZ2Response, options);
            if (message.sendUserMPResponse != null && message.hasOwnProperty("sendUserMPResponse"))
                object.sendUserMPResponse = $root.SdkProto.SendUserMPResponse.toObject(message.sendUserMPResponse, options);
            if (message.sendUserMP2Response != null && message.hasOwnProperty("sendUserMP2Response"))
                object.sendUserMP2Response = $root.SdkProto.SendUserMP2Response.toObject(message.sendUserMP2Response, options);
            if (message.sendRoundRecordResponse != null && message.hasOwnProperty("sendRoundRecordResponse"))
                object.sendRoundRecordResponse = $root.SdkProto.SendRoundRecordResponse.toObject(message.sendRoundRecordResponse, options);
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                object.sendReconnectQuitResponse = $root.SdkProto.SendReconnectQuitResponse.toObject(message.sendReconnectQuitResponse, options);
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                object.userReconnectResponse = $root.SdkProto.UserReconnectResponse.toObject(message.userReconnectResponse, options);
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                object.sendUserReconnectResponse = $root.SdkProto.SendUserReconnectResponse.toObject(message.sendUserReconnectResponse, options);
            if (message.sendApplyDismissResponse != null && message.hasOwnProperty("sendApplyDismissResponse"))
                object.sendApplyDismissResponse = $root.SdkProto.SendApplyDismissResponse.toObject(message.sendApplyDismissResponse, options);
            if (message.sendAgreeDismissResponse != null && message.hasOwnProperty("sendAgreeDismissResponse"))
                object.sendAgreeDismissResponse = $root.SdkProto.SendAgreeDismissResponse.toObject(message.sendAgreeDismissResponse, options);
            if (message.sendDismissResultResponse != null && message.hasOwnProperty("sendDismissResultResponse"))
                object.sendDismissResultResponse = $root.SdkProto.SendDismissResultResponse.toObject(message.sendDismissResultResponse, options);
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                object.sendUserQuitResponse = $root.SdkProto.SendUserQuitResponse.toObject(message.sendUserQuitResponse, options);
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                object.sendMessageResponse = $root.SdkProto.SendMessageResponse.toObject(message.sendMessageResponse, options);
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                object.sendUserOnBackResponse = $root.SdkProto.SendUserOnBackResponse.toObject(message.sendUserOnBackResponse, options);
            if (message.sendGameOverResponse != null && message.hasOwnProperty("sendGameOverResponse"))
                object.sendGameOverResponse = $root.SdkProto.SendGameOverResponse.toObject(message.sendGameOverResponse, options);
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                object.sendDiamondChangeResponse = $root.SdkProto.SendDiamondChangeResponse.toObject(message.sendDiamondChangeResponse, options);
            if (message.sendCancelAutoResponse != null && message.hasOwnProperty("sendCancelAutoResponse"))
                object.sendCancelAutoResponse = $root.SdkProto.SendCancelAutoResponse.toObject(message.sendCancelAutoResponse, options);
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                object.delayCheckResponse = $root.SdkProto.DelayCheckResponse.toObject(message.delayCheckResponse, options);
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                object.sendRemainTimeResponse = $root.SdkProto.SendRemainTimeResponse.toObject(message.sendRemainTimeResponse, options);
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse"))
                object.sendNoticeClientDismissResponse = $root.SdkProto.SendNoticeClientDismissResponse.toObject(message.sendNoticeClientDismissResponse, options);
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse"))
                object.sendUserQuitByAdminResponse = $root.SdkProto.SendUserQuitByAdminResponse.toObject(message.sendUserQuitByAdminResponse, options);
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                object.sendCoinRefreshResponse = $root.SdkProto.SendCoinRefreshResponse.toObject(message.sendCoinRefreshResponse, options);
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                object.sendHeartBeatResponse = $root.SdkProto.SendHeartBeatResponse.toObject(message.sendHeartBeatResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof SdkProto.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name SdkProto.Response.ErrorCode
         * @enum {string}
         * @property {number} OK=200 OK value
         * @property {number} DATA_CHECK_FAIL=400 DATA_CHECK_FAIL value
         * @property {number} USER_NO_EXSIT=401 USER_NO_EXSIT value
         * @property {number} USER_EXSITS=402 USER_EXSITS value
         * @property {number} PASSWORD_ERROR=403 PASSWORD_ERROR value
         * @property {number} CLIENT_ERROR=404 CLIENT_ERROR value
         * @property {number} USERNAME_NO_VALID=405 USERNAME_NO_VALID value
         * @property {number} PASSWORD_NO_VALID=406 PASSWORD_NO_VALID value
         * @property {number} PASSWORD_NO_VALID_NOTSAME=444 PASSWORD_NO_VALID_NOTSAME value
         * @property {number} SESSION_EXPIRE=407 SESSION_EXPIRE value
         * @property {number} APP_NO_EXSIT=408 APP_NO_EXSIT value
         * @property {number} SIGN_ERROR=409 SIGN_ERROR value
         * @property {number} GET_SMS_FAILURE=410 GET_SMS_FAILURE value
         * @property {number} GET_SMS_TIME_FAILURE=443 GET_SMS_TIME_FAILURE value
         * @property {number} SMS_VERIFY_CODE_EXPIRE=411 SMS_VERIFY_CODE_EXPIRE value
         * @property {number} SMS_VERIFY_CODE_ERROR=412 SMS_VERIFY_CODE_ERROR value
         * @property {number} MOBILE_FORMAT_ERROR=413 MOBILE_FORMAT_ERROR value
         * @property {number} MOBILE_BINDED=414 MOBILE_BINDED value
         * @property {number} APP_NOT_EXSIT=415 APP_NOT_EXSIT value
         * @property {number} MOBILE_UNBOUND=416 MOBILE_UNBOUND value
         * @property {number} SMS_VERIFY_CODE_SENT=417 SMS_VERIFY_CODE_SENT value
         * @property {number} NICKNAME_NOT_NULL=418 NICKNAME_NOT_NULL value
         * @property {number} INPUT_MOBILE=419 INPUT_MOBILE value
         * @property {number} INPUT_USERNAME=420 INPUT_USERNAME value
         * @property {number} INPUT_PASSWORD=421 INPUT_PASSWORD value
         * @property {number} INPUT_SMS_CODE=422 INPUT_SMS_CODE value
         * @property {number} ORDER_NO_ERROR=423 ORDER_NO_ERROR value
         * @property {number} ORDER_REPEAT_ERROR=424 ORDER_REPEAT_ERROR value
         * @property {number} WX_ACCESS_TOKEN_ERROR=425 WX_ACCESS_TOKEN_ERROR value
         * @property {number} OPERATION_FAILED=426 OPERATION_FAILED value
         * @property {number} DONOT_IS_ME=427 DONOT_IS_ME value
         * @property {number} BIND_CODE_ERROR=428 BIND_CODE_ERROR value
         * @property {number} LOGIN_ERROR=429 LOGIN_ERROR value
         * @property {number} NOT_IN_AGENT=430 NOT_IN_AGENT value
         * @property {number} EXIST_IN_AGENT=431 EXIST_IN_AGENT value
         * @property {number} APPLY_IN_AGENT=432 APPLY_IN_AGENT value
         * @property {number} AGENT_NOT_EXIST=433 AGENT_NOT_EXIST value
         * @property {number} AGENT_NOT_MANAGER=434 AGENT_NOT_MANAGER value
         * @property {number} USER_NOT_APPLY=435 USER_NOT_APPLY value
         * @property {number} CARD_HAS_USED=437 CARD_HAS_USED value
         * @property {number} AGENT_MAX_COUNT=438 AGENT_MAX_COUNT value
         * @property {number} CREATE_THE_SAME_ERROR=439 CREATE_THE_SAME_ERROR value
         * @property {number} RULE_NOT_HAVE=440 RULE_NOT_HAVE value
         * @property {number} SLOT_ALREADY_HAVE=441 SLOT_ALREADY_HAVE value
         * @property {number} PLAY_BACK_CODE_ERROR=450 PLAY_BACK_CODE_ERROR value
         * @property {number} SYSTEM_ERROR=500 SYSTEM_ERROR value
         * @property {number} PLAY_DISK_ERROR=600 PLAY_DISK_ERROR value
         * @property {number} EMAIL_ERROR=601 EMAIL_ERROR value
         * @property {number} CONTENT_ERROR=602 CONTENT_ERROR value
         * @property {number} LENGTH_ERROR=603 LENGTH_ERROR value
         * @property {number} PLAY_IN_GAME=604 PLAY_IN_GAME value
         * @property {number} HAS_ALIPAY_ACCOUNT=605 HAS_ALIPAY_ACCOUNT value
         * @property {number} HAS_BANK_ACCOUNT=613 HAS_BANK_ACCOUNT value
         * @property {number} HAS_PHONE_ACCOUNT=614 HAS_PHONE_ACCOUNT value
         * @property {number} CHANGE_ERROR=606 CHANGE_ERROR value
         * @property {number} CHANGE_REFUND_ERROR=607 CHANGE_REFUND_ERROR value
         * @property {number} BANK_COIN_ERROR=608 BANK_COIN_ERROR value
         * @property {number} CHANGE_GAME_TURNOVER_ERROR=609 CHANGE_GAME_TURNOVER_ERROR value
         * @property {number} BIND_ALI_ERROR=610 BIND_ALI_ERROR value
         * @property {number} BIND_BANK_ERROR=611 BIND_BANK_ERROR value
         * @property {number} COIN_CANNOT_NULL=612 COIN_CANNOT_NULL value
         * @property {number} PERSON_LOGIN_ERROR=619 PERSON_LOGIN_ERROR value
         */
        Response.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[200] = "OK"] = 200;
            values[valuesById[400] = "DATA_CHECK_FAIL"] = 400;
            values[valuesById[401] = "USER_NO_EXSIT"] = 401;
            values[valuesById[402] = "USER_EXSITS"] = 402;
            values[valuesById[403] = "PASSWORD_ERROR"] = 403;
            values[valuesById[404] = "CLIENT_ERROR"] = 404;
            values[valuesById[405] = "USERNAME_NO_VALID"] = 405;
            values[valuesById[406] = "PASSWORD_NO_VALID"] = 406;
            values[valuesById[444] = "PASSWORD_NO_VALID_NOTSAME"] = 444;
            values[valuesById[407] = "SESSION_EXPIRE"] = 407;
            values[valuesById[408] = "APP_NO_EXSIT"] = 408;
            values[valuesById[409] = "SIGN_ERROR"] = 409;
            values[valuesById[410] = "GET_SMS_FAILURE"] = 410;
            values[valuesById[443] = "GET_SMS_TIME_FAILURE"] = 443;
            values[valuesById[411] = "SMS_VERIFY_CODE_EXPIRE"] = 411;
            values[valuesById[412] = "SMS_VERIFY_CODE_ERROR"] = 412;
            values[valuesById[413] = "MOBILE_FORMAT_ERROR"] = 413;
            values[valuesById[414] = "MOBILE_BINDED"] = 414;
            values[valuesById[415] = "APP_NOT_EXSIT"] = 415;
            values[valuesById[416] = "MOBILE_UNBOUND"] = 416;
            values[valuesById[417] = "SMS_VERIFY_CODE_SENT"] = 417;
            values[valuesById[418] = "NICKNAME_NOT_NULL"] = 418;
            values[valuesById[419] = "INPUT_MOBILE"] = 419;
            values[valuesById[420] = "INPUT_USERNAME"] = 420;
            values[valuesById[421] = "INPUT_PASSWORD"] = 421;
            values[valuesById[422] = "INPUT_SMS_CODE"] = 422;
            values[valuesById[423] = "ORDER_NO_ERROR"] = 423;
            values[valuesById[424] = "ORDER_REPEAT_ERROR"] = 424;
            values[valuesById[425] = "WX_ACCESS_TOKEN_ERROR"] = 425;
            values[valuesById[426] = "OPERATION_FAILED"] = 426;
            values[valuesById[427] = "DONOT_IS_ME"] = 427;
            values[valuesById[428] = "BIND_CODE_ERROR"] = 428;
            values[valuesById[429] = "LOGIN_ERROR"] = 429;
            values[valuesById[430] = "NOT_IN_AGENT"] = 430;
            values[valuesById[431] = "EXIST_IN_AGENT"] = 431;
            values[valuesById[432] = "APPLY_IN_AGENT"] = 432;
            values[valuesById[433] = "AGENT_NOT_EXIST"] = 433;
            values[valuesById[434] = "AGENT_NOT_MANAGER"] = 434;
            values[valuesById[435] = "USER_NOT_APPLY"] = 435;
            values[valuesById[437] = "CARD_HAS_USED"] = 437;
            values[valuesById[438] = "AGENT_MAX_COUNT"] = 438;
            values[valuesById[439] = "CREATE_THE_SAME_ERROR"] = 439;
            values[valuesById[440] = "RULE_NOT_HAVE"] = 440;
            values[valuesById[441] = "SLOT_ALREADY_HAVE"] = 441;
            values[valuesById[450] = "PLAY_BACK_CODE_ERROR"] = 450;
            values[valuesById[500] = "SYSTEM_ERROR"] = 500;
            values[valuesById[600] = "PLAY_DISK_ERROR"] = 600;
            values[valuesById[601] = "EMAIL_ERROR"] = 601;
            values[valuesById[602] = "CONTENT_ERROR"] = 602;
            values[valuesById[603] = "LENGTH_ERROR"] = 603;
            values[valuesById[604] = "PLAY_IN_GAME"] = 604;
            values[valuesById[605] = "HAS_ALIPAY_ACCOUNT"] = 605;
            values[valuesById[613] = "HAS_BANK_ACCOUNT"] = 613;
            values[valuesById[614] = "HAS_PHONE_ACCOUNT"] = 614;
            values[valuesById[606] = "CHANGE_ERROR"] = 606;
            values[valuesById[607] = "CHANGE_REFUND_ERROR"] = 607;
            values[valuesById[608] = "BANK_COIN_ERROR"] = 608;
            values[valuesById[609] = "CHANGE_GAME_TURNOVER_ERROR"] = 609;
            values[valuesById[610] = "BIND_ALI_ERROR"] = 610;
            values[valuesById[611] = "BIND_BANK_ERROR"] = 611;
            values[valuesById[612] = "COIN_CANNOT_NULL"] = 612;
            values[valuesById[619] = "PERSON_LOGIN_ERROR"] = 619;
            return values;
        })();

        return Response;
    })();

    return SdkProto;
})();

module.exports = $root;
