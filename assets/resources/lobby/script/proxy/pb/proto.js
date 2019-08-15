/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.User = (function() {

        /**
         * Properties of a User.
         * @memberof proto
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
         * @memberof proto
         * @classdesc 基础对象 ***********************
         * @implements IUser
         * @constructor
         * @param {proto.IUser=} [properties] Properties to set
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
         * @memberof proto.User
         * @instance
         */
        User.prototype.sessionId = "";

        /**
         * User userId.
         * @member {number} userId
         * @memberof proto.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof proto.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User headImg.
         * @member {string} headImg
         * @memberof proto.User
         * @instance
         */
        User.prototype.headImg = "";

        /**
         * User sex.
         * @member {number} sex
         * @memberof proto.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User openid.
         * @member {string} openid
         * @memberof proto.User
         * @instance
         */
        User.prototype.openid = "";

        /**
         * User diamond.
         * @member {number} diamond
         * @memberof proto.User
         * @instance
         */
        User.prototype.diamond = 0;

        /**
         * User coin.
         * @member {number} coin
         * @memberof proto.User
         * @instance
         */
        User.prototype.coin = 0;

        /**
         * User ticket.
         * @member {number} ticket
         * @memberof proto.User
         * @instance
         */
        User.prototype.ticket = 0;

        /**
         * User bankcoin.
         * @member {number} bankcoin
         * @memberof proto.User
         * @instance
         */
        User.prototype.bankcoin = 0;

        /**
         * User userName.
         * @member {string} userName
         * @memberof proto.User
         * @instance
         */
        User.prototype.userName = "";

        /**
         * User aliAccount.
         * @member {string} aliAccount
         * @memberof proto.User
         * @instance
         */
        User.prototype.aliAccount = "";

        /**
         * User userType.
         * @member {number} userType
         * @memberof proto.User
         * @instance
         */
        User.prototype.userType = 0;

        /**
         * User aliName.
         * @member {string} aliName
         * @memberof proto.User
         * @instance
         */
        User.prototype.aliName = "";

        /**
         * User bankAccount.
         * @member {string} bankAccount
         * @memberof proto.User
         * @instance
         */
        User.prototype.bankAccount = "";

        /**
         * User bankName.
         * @member {string} bankName
         * @memberof proto.User
         * @instance
         */
        User.prototype.bankName = "";

        /**
         * User ip.
         * @member {string} ip
         * @memberof proto.User
         * @instance
         */
        User.prototype.ip = "";

        /**
         * User bindStatus.
         * @member {number} bindStatus
         * @memberof proto.User
         * @instance
         */
        User.prototype.bindStatus = 0;

        /**
         * User phone.
         * @member {string} phone
         * @memberof proto.User
         * @instance
         */
        User.prototype.phone = "";

        /**
         * User level.
         * @member {number} level
         * @memberof proto.User
         * @instance
         */
        User.prototype.level = 0;

        /**
         * User isInTable.
         * @member {number} isInTable
         * @memberof proto.User
         * @instance
         */
        User.prototype.isInTable = 0;

        /**
         * User addr.
         * @member {string} addr
         * @memberof proto.User
         * @instance
         */
        User.prototype.addr = "";

        /**
         * User gameId.
         * @member {number} gameId
         * @memberof proto.User
         * @instance
         */
        User.prototype.gameId = 0;

        /**
         * User pos.
         * @member {string} pos
         * @memberof proto.User
         * @instance
         */
        User.prototype.pos = "";

        /**
         * User showAd.
         * @member {boolean} showAd
         * @memberof proto.User
         * @instance
         */
        User.prototype.showAd = false;

        /**
         * User isNewUser.
         * @member {boolean} isNewUser
         * @memberof proto.User
         * @instance
         */
        User.prototype.isNewUser = false;

        /**
         * User registerCoin.
         * @member {number} registerCoin
         * @memberof proto.User
         * @instance
         */
        User.prototype.registerCoin = 0;

        /**
         * User bindphoneCoin.
         * @member {number} bindphoneCoin
         * @memberof proto.User
         * @instance
         */
        User.prototype.bindphoneCoin = 0;

        /**
         * User fissionCoin.
         * @member {number} fissionCoin
         * @memberof proto.User
         * @instance
         */
        User.prototype.fissionCoin = 0;

        /**
         * User bannerAlert.
         * @member {number} bannerAlert
         * @memberof proto.User
         * @instance
         */
        User.prototype.bannerAlert = 0;

        /**
         * User agent.
         * @member {number} agent
         * @memberof proto.User
         * @instance
         */
        User.prototype.agent = 0;

        /**
         * User isBind.
         * @member {number} isBind
         * @memberof proto.User
         * @instance
         */
        User.prototype.isBind = 0;

        /**
         * User isRecharge.
         * @member {number} isRecharge
         * @memberof proto.User
         * @instance
         */
        User.prototype.isRecharge = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof proto.User
         * @static
         * @param {proto.IUser=} [properties] Properties to set
         * @returns {proto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link proto.User.verify|verify} messages.
         * @function encode
         * @memberof proto.User
         * @static
         * @param {proto.IUser} message User message or plain object to encode
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
         * Encodes the specified User message, length delimited. Does not implicitly {@link proto.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.User
         * @static
         * @param {proto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.User();
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
         * @memberof proto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.User} User
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
         * @memberof proto.User
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
         * @memberof proto.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.User)
                return object;
            var message = new $root.proto.User();
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
         * @memberof proto.User
         * @static
         * @param {proto.User} message User
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
         * @memberof proto.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    proto.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof proto
         * @interface IUserInfo
         * @property {number|null} [isInTable] UserInfo isInTable
         * @property {string|null} [addr] UserInfo addr
         * @property {number|null} [baseBankCoin] UserInfo baseBankCoin
         * @property {number|null} [dailyRecharge] UserInfo dailyRecharge
         * @property {number|null} [dailyRechargeMax] UserInfo dailyRechargeMax
         */

        /**
         * Constructs a new UserInfo.
         * @memberof proto
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {proto.IUserInfo=} [properties] Properties to set
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
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.isInTable = 0;

        /**
         * UserInfo addr.
         * @member {string} addr
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.addr = "";

        /**
         * UserInfo baseBankCoin.
         * @member {number} baseBankCoin
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.baseBankCoin = 0;

        /**
         * UserInfo dailyRecharge.
         * @member {number} dailyRecharge
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.dailyRecharge = 0;

        /**
         * UserInfo dailyRechargeMax.
         * @member {number} dailyRechargeMax
         * @memberof proto.UserInfo
         * @instance
         */
        UserInfo.prototype.dailyRechargeMax = 0;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof proto.UserInfo
         * @static
         * @param {proto.IUserInfo=} [properties] Properties to set
         * @returns {proto.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.UserInfo
         * @static
         * @param {proto.IUserInfo} message UserInfo message or plain object to encode
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
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link proto.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserInfo
         * @static
         * @param {proto.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserInfo();
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
         * @memberof proto.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserInfo} UserInfo
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
         * @memberof proto.UserInfo
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
         * @memberof proto.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserInfo)
                return object;
            var message = new $root.proto.UserInfo();
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
         * @memberof proto.UserInfo
         * @static
         * @param {proto.UserInfo} message UserInfo
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
         * @memberof proto.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    proto.UserReady = (function() {

        /**
         * Properties of a UserReady.
         * @memberof proto
         * @interface IUserReady
         * @property {number|null} [userId] UserReady userId
         * @property {number|null} [state] UserReady state
         */

        /**
         * Constructs a new UserReady.
         * @memberof proto
         * @classdesc Represents a UserReady.
         * @implements IUserReady
         * @constructor
         * @param {proto.IUserReady=} [properties] Properties to set
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
         * @memberof proto.UserReady
         * @instance
         */
        UserReady.prototype.userId = 0;

        /**
         * UserReady state.
         * @member {number} state
         * @memberof proto.UserReady
         * @instance
         */
        UserReady.prototype.state = 0;

        /**
         * Creates a new UserReady instance using the specified properties.
         * @function create
         * @memberof proto.UserReady
         * @static
         * @param {proto.IUserReady=} [properties] Properties to set
         * @returns {proto.UserReady} UserReady instance
         */
        UserReady.create = function create(properties) {
            return new UserReady(properties);
        };

        /**
         * Encodes the specified UserReady message. Does not implicitly {@link proto.UserReady.verify|verify} messages.
         * @function encode
         * @memberof proto.UserReady
         * @static
         * @param {proto.IUserReady} message UserReady message or plain object to encode
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
         * Encodes the specified UserReady message, length delimited. Does not implicitly {@link proto.UserReady.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserReady
         * @static
         * @param {proto.IUserReady} message UserReady message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReady message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserReady} UserReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserReady();
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
         * @memberof proto.UserReady
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserReady} UserReady
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
         * @memberof proto.UserReady
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
         * @memberof proto.UserReady
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserReady} UserReady
         */
        UserReady.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserReady)
                return object;
            var message = new $root.proto.UserReady();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReady message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserReady
         * @static
         * @param {proto.UserReady} message UserReady
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
         * @memberof proto.UserReady
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReady;
    })();

    proto.ResultData = (function() {

        /**
         * Properties of a ResultData.
         * @memberof proto
         * @interface IResultData
         * @property {number|null} [isOver] ResultData isOver
         * @property {string|null} [time] ResultData time
         * @property {number|null} [winners] ResultData winners
         * @property {number|null} [springInfo] ResultData springInfo
         */

        /**
         * Constructs a new ResultData.
         * @memberof proto
         * @classdesc Represents a ResultData.
         * @implements IResultData
         * @constructor
         * @param {proto.IResultData=} [properties] Properties to set
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
         * @memberof proto.ResultData
         * @instance
         */
        ResultData.prototype.isOver = 0;

        /**
         * ResultData time.
         * @member {string} time
         * @memberof proto.ResultData
         * @instance
         */
        ResultData.prototype.time = "";

        /**
         * ResultData winners.
         * @member {number} winners
         * @memberof proto.ResultData
         * @instance
         */
        ResultData.prototype.winners = 0;

        /**
         * ResultData springInfo.
         * @member {number} springInfo
         * @memberof proto.ResultData
         * @instance
         */
        ResultData.prototype.springInfo = 0;

        /**
         * Creates a new ResultData instance using the specified properties.
         * @function create
         * @memberof proto.ResultData
         * @static
         * @param {proto.IResultData=} [properties] Properties to set
         * @returns {proto.ResultData} ResultData instance
         */
        ResultData.create = function create(properties) {
            return new ResultData(properties);
        };

        /**
         * Encodes the specified ResultData message. Does not implicitly {@link proto.ResultData.verify|verify} messages.
         * @function encode
         * @memberof proto.ResultData
         * @static
         * @param {proto.IResultData} message ResultData message or plain object to encode
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
         * Encodes the specified ResultData message, length delimited. Does not implicitly {@link proto.ResultData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ResultData
         * @static
         * @param {proto.IResultData} message ResultData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResultData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResultData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResultData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ResultData} ResultData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResultData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ResultData();
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
         * @memberof proto.ResultData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ResultData} ResultData
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
         * @memberof proto.ResultData
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
         * @memberof proto.ResultData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ResultData} ResultData
         */
        ResultData.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ResultData)
                return object;
            var message = new $root.proto.ResultData();
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
         * @memberof proto.ResultData
         * @static
         * @param {proto.ResultData} message ResultData
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
         * @memberof proto.ResultData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResultData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ResultData;
    })();

    proto.LoginRequest = (function() {

        /**
         * Properties of a LoginRequest.
         * @memberof proto
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
         * @memberof proto
         * @classdesc 请求对象 ***********************
         * @implements ILoginRequest
         * @constructor
         * @param {proto.ILoginRequest=} [properties] Properties to set
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
         * @memberof proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.phoneOrUsername = "";

        /**
         * LoginRequest psword.
         * @member {string} psword
         * @memberof proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.psword = "";

        /**
         * LoginRequest deviceID.
         * @member {string} deviceID
         * @memberof proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.deviceID = "";

        /**
         * LoginRequest channelId.
         * @member {number} channelId
         * @memberof proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.channelId = 0;

        /**
         * LoginRequest agentCode.
         * @member {string} agentCode
         * @memberof proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.agentCode = "";

        /**
         * LoginRequest platformId.
         * @member {number} platformId
         * @memberof proto.LoginRequest
         * @instance
         */
        LoginRequest.prototype.platformId = 0;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @function create
         * @memberof proto.LoginRequest
         * @static
         * @param {proto.ILoginRequest=} [properties] Properties to set
         * @returns {proto.LoginRequest} LoginRequest instance
         */
        LoginRequest.create = function create(properties) {
            return new LoginRequest(properties);
        };

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link proto.LoginRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.LoginRequest
         * @static
         * @param {proto.ILoginRequest} message LoginRequest message or plain object to encode
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
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link proto.LoginRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.LoginRequest
         * @static
         * @param {proto.ILoginRequest} message LoginRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.LoginRequest} LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LoginRequest();
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
         * @memberof proto.LoginRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.LoginRequest} LoginRequest
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
         * @memberof proto.LoginRequest
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
         * @memberof proto.LoginRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.LoginRequest} LoginRequest
         */
        LoginRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.LoginRequest)
                return object;
            var message = new $root.proto.LoginRequest();
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
         * @memberof proto.LoginRequest
         * @static
         * @param {proto.LoginRequest} message LoginRequest
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
         * @memberof proto.LoginRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRequest;
    })();

    proto.RegisterPhoneRequest = (function() {

        /**
         * Properties of a RegisterPhoneRequest.
         * @memberof proto
         * @interface IRegisterPhoneRequest
         * @property {string|null} [phone] RegisterPhoneRequest phone
         * @property {string|null} [psword] RegisterPhoneRequest psword
         * @property {string|null} [msgCode] RegisterPhoneRequest msgCode
         */

        /**
         * Constructs a new RegisterPhoneRequest.
         * @memberof proto
         * @classdesc Represents a RegisterPhoneRequest.
         * @implements IRegisterPhoneRequest
         * @constructor
         * @param {proto.IRegisterPhoneRequest=} [properties] Properties to set
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
         * @memberof proto.RegisterPhoneRequest
         * @instance
         */
        RegisterPhoneRequest.prototype.phone = "";

        /**
         * RegisterPhoneRequest psword.
         * @member {string} psword
         * @memberof proto.RegisterPhoneRequest
         * @instance
         */
        RegisterPhoneRequest.prototype.psword = "";

        /**
         * RegisterPhoneRequest msgCode.
         * @member {string} msgCode
         * @memberof proto.RegisterPhoneRequest
         * @instance
         */
        RegisterPhoneRequest.prototype.msgCode = "";

        /**
         * Creates a new RegisterPhoneRequest instance using the specified properties.
         * @function create
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {proto.IRegisterPhoneRequest=} [properties] Properties to set
         * @returns {proto.RegisterPhoneRequest} RegisterPhoneRequest instance
         */
        RegisterPhoneRequest.create = function create(properties) {
            return new RegisterPhoneRequest(properties);
        };

        /**
         * Encodes the specified RegisterPhoneRequest message. Does not implicitly {@link proto.RegisterPhoneRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {proto.IRegisterPhoneRequest} message RegisterPhoneRequest message or plain object to encode
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
         * Encodes the specified RegisterPhoneRequest message, length delimited. Does not implicitly {@link proto.RegisterPhoneRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {proto.IRegisterPhoneRequest} message RegisterPhoneRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPhoneRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterPhoneRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RegisterPhoneRequest} RegisterPhoneRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPhoneRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RegisterPhoneRequest();
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
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RegisterPhoneRequest} RegisterPhoneRequest
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
         * @memberof proto.RegisterPhoneRequest
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
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RegisterPhoneRequest} RegisterPhoneRequest
         */
        RegisterPhoneRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RegisterPhoneRequest)
                return object;
            var message = new $root.proto.RegisterPhoneRequest();
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
         * @memberof proto.RegisterPhoneRequest
         * @static
         * @param {proto.RegisterPhoneRequest} message RegisterPhoneRequest
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
         * @memberof proto.RegisterPhoneRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterPhoneRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterPhoneRequest;
    })();

    proto.GetUserInfoRequest = (function() {

        /**
         * Properties of a GetUserInfoRequest.
         * @memberof proto
         * @interface IGetUserInfoRequest
         * @property {number|null} [userId] GetUserInfoRequest userId
         */

        /**
         * Constructs a new GetUserInfoRequest.
         * @memberof proto
         * @classdesc Represents a GetUserInfoRequest.
         * @implements IGetUserInfoRequest
         * @constructor
         * @param {proto.IGetUserInfoRequest=} [properties] Properties to set
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
         * @memberof proto.GetUserInfoRequest
         * @instance
         */
        GetUserInfoRequest.prototype.userId = 0;

        /**
         * Creates a new GetUserInfoRequest instance using the specified properties.
         * @function create
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {proto.IGetUserInfoRequest=} [properties] Properties to set
         * @returns {proto.GetUserInfoRequest} GetUserInfoRequest instance
         */
        GetUserInfoRequest.create = function create(properties) {
            return new GetUserInfoRequest(properties);
        };

        /**
         * Encodes the specified GetUserInfoRequest message. Does not implicitly {@link proto.GetUserInfoRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {proto.IGetUserInfoRequest} message GetUserInfoRequest message or plain object to encode
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
         * Encodes the specified GetUserInfoRequest message, length delimited. Does not implicitly {@link proto.GetUserInfoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {proto.IGetUserInfoRequest} message GetUserInfoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserInfoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GetUserInfoRequest} GetUserInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GetUserInfoRequest();
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
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GetUserInfoRequest} GetUserInfoRequest
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
         * @memberof proto.GetUserInfoRequest
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
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GetUserInfoRequest} GetUserInfoRequest
         */
        GetUserInfoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GetUserInfoRequest)
                return object;
            var message = new $root.proto.GetUserInfoRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GetUserInfoRequest
         * @static
         * @param {proto.GetUserInfoRequest} message GetUserInfoRequest
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
         * @memberof proto.GetUserInfoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoRequest;
    })();

    proto.CoinBankRequest = (function() {

        /**
         * Properties of a CoinBankRequest.
         * @memberof proto
         * @interface ICoinBankRequest
         * @property {number|null} [userId] CoinBankRequest userId
         * @property {number|null} [type] CoinBankRequest type
         * @property {number|null} [coin] CoinBankRequest coin
         */

        /**
         * Constructs a new CoinBankRequest.
         * @memberof proto
         * @classdesc Represents a CoinBankRequest.
         * @implements ICoinBankRequest
         * @constructor
         * @param {proto.ICoinBankRequest=} [properties] Properties to set
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
         * @memberof proto.CoinBankRequest
         * @instance
         */
        CoinBankRequest.prototype.userId = 0;

        /**
         * CoinBankRequest type.
         * @member {number} type
         * @memberof proto.CoinBankRequest
         * @instance
         */
        CoinBankRequest.prototype.type = 0;

        /**
         * CoinBankRequest coin.
         * @member {number} coin
         * @memberof proto.CoinBankRequest
         * @instance
         */
        CoinBankRequest.prototype.coin = 0;

        /**
         * Creates a new CoinBankRequest instance using the specified properties.
         * @function create
         * @memberof proto.CoinBankRequest
         * @static
         * @param {proto.ICoinBankRequest=} [properties] Properties to set
         * @returns {proto.CoinBankRequest} CoinBankRequest instance
         */
        CoinBankRequest.create = function create(properties) {
            return new CoinBankRequest(properties);
        };

        /**
         * Encodes the specified CoinBankRequest message. Does not implicitly {@link proto.CoinBankRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.CoinBankRequest
         * @static
         * @param {proto.ICoinBankRequest} message CoinBankRequest message or plain object to encode
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
         * Encodes the specified CoinBankRequest message, length delimited. Does not implicitly {@link proto.CoinBankRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CoinBankRequest
         * @static
         * @param {proto.ICoinBankRequest} message CoinBankRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CoinBankRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CoinBankRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CoinBankRequest} CoinBankRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CoinBankRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CoinBankRequest();
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
         * @memberof proto.CoinBankRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CoinBankRequest} CoinBankRequest
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
         * @memberof proto.CoinBankRequest
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
         * @memberof proto.CoinBankRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CoinBankRequest} CoinBankRequest
         */
        CoinBankRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CoinBankRequest)
                return object;
            var message = new $root.proto.CoinBankRequest();
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
         * @memberof proto.CoinBankRequest
         * @static
         * @param {proto.CoinBankRequest} message CoinBankRequest
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
         * @memberof proto.CoinBankRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoinBankRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoinBankRequest;
    })();

    proto.ChangeSignRequest = (function() {

        /**
         * Properties of a ChangeSignRequest.
         * @memberof proto
         * @interface IChangeSignRequest
         * @property {string|null} [sid] ChangeSignRequest sid
         * @property {string|null} [sign] ChangeSignRequest sign
         */

        /**
         * Constructs a new ChangeSignRequest.
         * @memberof proto
         * @classdesc Represents a ChangeSignRequest.
         * @implements IChangeSignRequest
         * @constructor
         * @param {proto.IChangeSignRequest=} [properties] Properties to set
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
         * @memberof proto.ChangeSignRequest
         * @instance
         */
        ChangeSignRequest.prototype.sid = "";

        /**
         * ChangeSignRequest sign.
         * @member {string} sign
         * @memberof proto.ChangeSignRequest
         * @instance
         */
        ChangeSignRequest.prototype.sign = "";

        /**
         * Creates a new ChangeSignRequest instance using the specified properties.
         * @function create
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {proto.IChangeSignRequest=} [properties] Properties to set
         * @returns {proto.ChangeSignRequest} ChangeSignRequest instance
         */
        ChangeSignRequest.create = function create(properties) {
            return new ChangeSignRequest(properties);
        };

        /**
         * Encodes the specified ChangeSignRequest message. Does not implicitly {@link proto.ChangeSignRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {proto.IChangeSignRequest} message ChangeSignRequest message or plain object to encode
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
         * Encodes the specified ChangeSignRequest message, length delimited. Does not implicitly {@link proto.ChangeSignRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {proto.IChangeSignRequest} message ChangeSignRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeSignRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ChangeSignRequest} ChangeSignRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSignRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ChangeSignRequest();
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
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ChangeSignRequest} ChangeSignRequest
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
         * @memberof proto.ChangeSignRequest
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
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ChangeSignRequest} ChangeSignRequest
         */
        ChangeSignRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ChangeSignRequest)
                return object;
            var message = new $root.proto.ChangeSignRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.sign != null)
                message.sign = String(object.sign);
            return message;
        };

        /**
         * Creates a plain object from a ChangeSignRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ChangeSignRequest
         * @static
         * @param {proto.ChangeSignRequest} message ChangeSignRequest
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
         * @memberof proto.ChangeSignRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeSignRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeSignRequest;
    })();

    proto.TestDeviceIDRequest = (function() {

        /**
         * Properties of a TestDeviceIDRequest.
         * @memberof proto
         * @interface ITestDeviceIDRequest
         * @property {string|null} [deviceID] TestDeviceIDRequest deviceID
         * @property {number|null} [channelId] TestDeviceIDRequest channelId
         * @property {number|null} [platformId] TestDeviceIDRequest platformId
         * @property {string|null} [agentCode] TestDeviceIDRequest agentCode
         */

        /**
         * Constructs a new TestDeviceIDRequest.
         * @memberof proto
         * @classdesc Represents a TestDeviceIDRequest.
         * @implements ITestDeviceIDRequest
         * @constructor
         * @param {proto.ITestDeviceIDRequest=} [properties] Properties to set
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
         * @memberof proto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.deviceID = "";

        /**
         * TestDeviceIDRequest channelId.
         * @member {number} channelId
         * @memberof proto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.channelId = 0;

        /**
         * TestDeviceIDRequest platformId.
         * @member {number} platformId
         * @memberof proto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.platformId = 0;

        /**
         * TestDeviceIDRequest agentCode.
         * @member {string} agentCode
         * @memberof proto.TestDeviceIDRequest
         * @instance
         */
        TestDeviceIDRequest.prototype.agentCode = "";

        /**
         * Creates a new TestDeviceIDRequest instance using the specified properties.
         * @function create
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {proto.ITestDeviceIDRequest=} [properties] Properties to set
         * @returns {proto.TestDeviceIDRequest} TestDeviceIDRequest instance
         */
        TestDeviceIDRequest.create = function create(properties) {
            return new TestDeviceIDRequest(properties);
        };

        /**
         * Encodes the specified TestDeviceIDRequest message. Does not implicitly {@link proto.TestDeviceIDRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {proto.ITestDeviceIDRequest} message TestDeviceIDRequest message or plain object to encode
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
         * Encodes the specified TestDeviceIDRequest message, length delimited. Does not implicitly {@link proto.TestDeviceIDRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {proto.ITestDeviceIDRequest} message TestDeviceIDRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestDeviceIDRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TestDeviceIDRequest} TestDeviceIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestDeviceIDRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TestDeviceIDRequest();
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
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TestDeviceIDRequest} TestDeviceIDRequest
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
         * @memberof proto.TestDeviceIDRequest
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
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TestDeviceIDRequest} TestDeviceIDRequest
         */
        TestDeviceIDRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TestDeviceIDRequest)
                return object;
            var message = new $root.proto.TestDeviceIDRequest();
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
         * @memberof proto.TestDeviceIDRequest
         * @static
         * @param {proto.TestDeviceIDRequest} message TestDeviceIDRequest
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
         * @memberof proto.TestDeviceIDRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestDeviceIDRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestDeviceIDRequest;
    })();

    proto.CreateTableRequest = (function() {

        /**
         * Properties of a CreateTableRequest.
         * @memberof proto
         * @interface ICreateTableRequest
         * @property {string|null} [sid] CreateTableRequest sid
         * @property {string|null} [tableId] CreateTableRequest tableId
         * @property {string|null} [gps] CreateTableRequest gps
         */

        /**
         * Constructs a new CreateTableRequest.
         * @memberof proto
         * @classdesc Represents a CreateTableRequest.
         * @implements ICreateTableRequest
         * @constructor
         * @param {proto.ICreateTableRequest=} [properties] Properties to set
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
         * @memberof proto.CreateTableRequest
         * @instance
         */
        CreateTableRequest.prototype.sid = "";

        /**
         * CreateTableRequest tableId.
         * @member {string} tableId
         * @memberof proto.CreateTableRequest
         * @instance
         */
        CreateTableRequest.prototype.tableId = "";

        /**
         * CreateTableRequest gps.
         * @member {string} gps
         * @memberof proto.CreateTableRequest
         * @instance
         */
        CreateTableRequest.prototype.gps = "";

        /**
         * Creates a new CreateTableRequest instance using the specified properties.
         * @function create
         * @memberof proto.CreateTableRequest
         * @static
         * @param {proto.ICreateTableRequest=} [properties] Properties to set
         * @returns {proto.CreateTableRequest} CreateTableRequest instance
         */
        CreateTableRequest.create = function create(properties) {
            return new CreateTableRequest(properties);
        };

        /**
         * Encodes the specified CreateTableRequest message. Does not implicitly {@link proto.CreateTableRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.CreateTableRequest
         * @static
         * @param {proto.ICreateTableRequest} message CreateTableRequest message or plain object to encode
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
         * Encodes the specified CreateTableRequest message, length delimited. Does not implicitly {@link proto.CreateTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CreateTableRequest
         * @static
         * @param {proto.ICreateTableRequest} message CreateTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CreateTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CreateTableRequest} CreateTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CreateTableRequest();
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
         * @memberof proto.CreateTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CreateTableRequest} CreateTableRequest
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
         * @memberof proto.CreateTableRequest
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
         * @memberof proto.CreateTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CreateTableRequest} CreateTableRequest
         */
        CreateTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CreateTableRequest)
                return object;
            var message = new $root.proto.CreateTableRequest();
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
         * @memberof proto.CreateTableRequest
         * @static
         * @param {proto.CreateTableRequest} message CreateTableRequest
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
         * @memberof proto.CreateTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTableRequest;
    })();

    proto.JoinTableRequest = (function() {

        /**
         * Properties of a JoinTableRequest.
         * @memberof proto
         * @interface IJoinTableRequest
         * @property {string|null} [sid] JoinTableRequest sid
         * @property {string|null} [tableId] JoinTableRequest tableId
         * @property {string|null} [gps] JoinTableRequest gps
         */

        /**
         * Constructs a new JoinTableRequest.
         * @memberof proto
         * @classdesc Represents a JoinTableRequest.
         * @implements IJoinTableRequest
         * @constructor
         * @param {proto.IJoinTableRequest=} [properties] Properties to set
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
         * @memberof proto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.sid = "";

        /**
         * JoinTableRequest tableId.
         * @member {string} tableId
         * @memberof proto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.tableId = "";

        /**
         * JoinTableRequest gps.
         * @member {string} gps
         * @memberof proto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.gps = "";

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @function create
         * @memberof proto.JoinTableRequest
         * @static
         * @param {proto.IJoinTableRequest=} [properties] Properties to set
         * @returns {proto.JoinTableRequest} JoinTableRequest instance
         */
        JoinTableRequest.create = function create(properties) {
            return new JoinTableRequest(properties);
        };

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link proto.JoinTableRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.JoinTableRequest
         * @static
         * @param {proto.IJoinTableRequest} message JoinTableRequest message or plain object to encode
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
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link proto.JoinTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.JoinTableRequest
         * @static
         * @param {proto.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.JoinTableRequest();
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
         * @memberof proto.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.JoinTableRequest} JoinTableRequest
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
         * @memberof proto.JoinTableRequest
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
         * @memberof proto.JoinTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.JoinTableRequest} JoinTableRequest
         */
        JoinTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.JoinTableRequest)
                return object;
            var message = new $root.proto.JoinTableRequest();
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
         * @memberof proto.JoinTableRequest
         * @static
         * @param {proto.JoinTableRequest} message JoinTableRequest
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
         * @memberof proto.JoinTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableRequest;
    })();

    proto.UserReadyRequest = (function() {

        /**
         * Properties of a UserReadyRequest.
         * @memberof proto
         * @interface IUserReadyRequest
         */

        /**
         * Constructs a new UserReadyRequest.
         * @memberof proto
         * @classdesc Represents a UserReadyRequest.
         * @implements IUserReadyRequest
         * @constructor
         * @param {proto.IUserReadyRequest=} [properties] Properties to set
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
         * @memberof proto.UserReadyRequest
         * @static
         * @param {proto.IUserReadyRequest=} [properties] Properties to set
         * @returns {proto.UserReadyRequest} UserReadyRequest instance
         */
        UserReadyRequest.create = function create(properties) {
            return new UserReadyRequest(properties);
        };

        /**
         * Encodes the specified UserReadyRequest message. Does not implicitly {@link proto.UserReadyRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UserReadyRequest
         * @static
         * @param {proto.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserReadyRequest message, length delimited. Does not implicitly {@link proto.UserReadyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserReadyRequest
         * @static
         * @param {proto.IUserReadyRequest} message UserReadyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReadyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReadyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserReadyRequest} UserReadyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReadyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserReadyRequest();
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
         * @memberof proto.UserReadyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserReadyRequest} UserReadyRequest
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
         * @memberof proto.UserReadyRequest
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
         * @memberof proto.UserReadyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserReadyRequest} UserReadyRequest
         */
        UserReadyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserReadyRequest)
                return object;
            return new $root.proto.UserReadyRequest();
        };

        /**
         * Creates a plain object from a UserReadyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserReadyRequest
         * @static
         * @param {proto.UserReadyRequest} message UserReadyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReadyRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserReadyRequest to JSON.
         * @function toJSON
         * @memberof proto.UserReadyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReadyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReadyRequest;
    })();

    proto.DisCardRequest = (function() {

        /**
         * Properties of a DisCardRequest.
         * @memberof proto
         * @interface IDisCardRequest
         * @property {Array.<number>|null} [outCard] DisCardRequest outCard
         */

        /**
         * Constructs a new DisCardRequest.
         * @memberof proto
         * @classdesc Represents a DisCardRequest.
         * @implements IDisCardRequest
         * @constructor
         * @param {proto.IDisCardRequest=} [properties] Properties to set
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
         * @memberof proto.DisCardRequest
         * @instance
         */
        DisCardRequest.prototype.outCard = $util.emptyArray;

        /**
         * Creates a new DisCardRequest instance using the specified properties.
         * @function create
         * @memberof proto.DisCardRequest
         * @static
         * @param {proto.IDisCardRequest=} [properties] Properties to set
         * @returns {proto.DisCardRequest} DisCardRequest instance
         */
        DisCardRequest.create = function create(properties) {
            return new DisCardRequest(properties);
        };

        /**
         * Encodes the specified DisCardRequest message. Does not implicitly {@link proto.DisCardRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.DisCardRequest
         * @static
         * @param {proto.IDisCardRequest} message DisCardRequest message or plain object to encode
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
         * Encodes the specified DisCardRequest message, length delimited. Does not implicitly {@link proto.DisCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.DisCardRequest
         * @static
         * @param {proto.IDisCardRequest} message DisCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DisCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DisCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.DisCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.DisCardRequest} DisCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DisCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.DisCardRequest();
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
         * @memberof proto.DisCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.DisCardRequest} DisCardRequest
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
         * @memberof proto.DisCardRequest
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
         * @memberof proto.DisCardRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.DisCardRequest} DisCardRequest
         */
        DisCardRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.DisCardRequest)
                return object;
            var message = new $root.proto.DisCardRequest();
            if (object.outCard) {
                if (!Array.isArray(object.outCard))
                    throw TypeError(".proto.DisCardRequest.outCard: array expected");
                message.outCard = [];
                for (var i = 0; i < object.outCard.length; ++i)
                    message.outCard[i] = object.outCard[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a DisCardRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.DisCardRequest
         * @static
         * @param {proto.DisCardRequest} message DisCardRequest
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
         * @memberof proto.DisCardRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DisCardRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DisCardRequest;
    })();

    proto.PassPaiRequest = (function() {

        /**
         * Properties of a PassPaiRequest.
         * @memberof proto
         * @interface IPassPaiRequest
         */

        /**
         * Constructs a new PassPaiRequest.
         * @memberof proto
         * @classdesc Represents a PassPaiRequest.
         * @implements IPassPaiRequest
         * @constructor
         * @param {proto.IPassPaiRequest=} [properties] Properties to set
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
         * @memberof proto.PassPaiRequest
         * @static
         * @param {proto.IPassPaiRequest=} [properties] Properties to set
         * @returns {proto.PassPaiRequest} PassPaiRequest instance
         */
        PassPaiRequest.create = function create(properties) {
            return new PassPaiRequest(properties);
        };

        /**
         * Encodes the specified PassPaiRequest message. Does not implicitly {@link proto.PassPaiRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.PassPaiRequest
         * @static
         * @param {proto.IPassPaiRequest} message PassPaiRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassPaiRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PassPaiRequest message, length delimited. Does not implicitly {@link proto.PassPaiRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.PassPaiRequest
         * @static
         * @param {proto.IPassPaiRequest} message PassPaiRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PassPaiRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PassPaiRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PassPaiRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.PassPaiRequest} PassPaiRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PassPaiRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PassPaiRequest();
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
         * @memberof proto.PassPaiRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.PassPaiRequest} PassPaiRequest
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
         * @memberof proto.PassPaiRequest
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
         * @memberof proto.PassPaiRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.PassPaiRequest} PassPaiRequest
         */
        PassPaiRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.PassPaiRequest)
                return object;
            return new $root.proto.PassPaiRequest();
        };

        /**
         * Creates a plain object from a PassPaiRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.PassPaiRequest
         * @static
         * @param {proto.PassPaiRequest} message PassPaiRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PassPaiRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PassPaiRequest to JSON.
         * @function toJSON
         * @memberof proto.PassPaiRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PassPaiRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PassPaiRequest;
    })();

    proto.UserQDZRequest = (function() {

        /**
         * Properties of a UserQDZRequest.
         * @memberof proto
         * @interface IUserQDZRequest
         * @property {number|null} [score] UserQDZRequest score
         */

        /**
         * Constructs a new UserQDZRequest.
         * @memberof proto
         * @classdesc Represents a UserQDZRequest.
         * @implements IUserQDZRequest
         * @constructor
         * @param {proto.IUserQDZRequest=} [properties] Properties to set
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
         * @memberof proto.UserQDZRequest
         * @instance
         */
        UserQDZRequest.prototype.score = 0;

        /**
         * Creates a new UserQDZRequest instance using the specified properties.
         * @function create
         * @memberof proto.UserQDZRequest
         * @static
         * @param {proto.IUserQDZRequest=} [properties] Properties to set
         * @returns {proto.UserQDZRequest} UserQDZRequest instance
         */
        UserQDZRequest.create = function create(properties) {
            return new UserQDZRequest(properties);
        };

        /**
         * Encodes the specified UserQDZRequest message. Does not implicitly {@link proto.UserQDZRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UserQDZRequest
         * @static
         * @param {proto.IUserQDZRequest} message UserQDZRequest message or plain object to encode
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
         * Encodes the specified UserQDZRequest message, length delimited. Does not implicitly {@link proto.UserQDZRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserQDZRequest
         * @static
         * @param {proto.IUserQDZRequest} message UserQDZRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQDZRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQDZRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserQDZRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserQDZRequest} UserQDZRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQDZRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserQDZRequest();
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
         * @memberof proto.UserQDZRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserQDZRequest} UserQDZRequest
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
         * @memberof proto.UserQDZRequest
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
         * @memberof proto.UserQDZRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserQDZRequest} UserQDZRequest
         */
        UserQDZRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserQDZRequest)
                return object;
            var message = new $root.proto.UserQDZRequest();
            if (object.score != null)
                message.score = object.score | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserQDZRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserQDZRequest
         * @static
         * @param {proto.UserQDZRequest} message UserQDZRequest
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
         * @memberof proto.UserQDZRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQDZRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQDZRequest;
    })();

    proto.UserMPRequest = (function() {

        /**
         * Properties of a UserMPRequest.
         * @memberof proto
         * @interface IUserMPRequest
         * @property {number|null} [showAll] UserMPRequest showAll
         */

        /**
         * Constructs a new UserMPRequest.
         * @memberof proto
         * @classdesc Represents a UserMPRequest.
         * @implements IUserMPRequest
         * @constructor
         * @param {proto.IUserMPRequest=} [properties] Properties to set
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
         * @memberof proto.UserMPRequest
         * @instance
         */
        UserMPRequest.prototype.showAll = 0;

        /**
         * Creates a new UserMPRequest instance using the specified properties.
         * @function create
         * @memberof proto.UserMPRequest
         * @static
         * @param {proto.IUserMPRequest=} [properties] Properties to set
         * @returns {proto.UserMPRequest} UserMPRequest instance
         */
        UserMPRequest.create = function create(properties) {
            return new UserMPRequest(properties);
        };

        /**
         * Encodes the specified UserMPRequest message. Does not implicitly {@link proto.UserMPRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UserMPRequest
         * @static
         * @param {proto.IUserMPRequest} message UserMPRequest message or plain object to encode
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
         * Encodes the specified UserMPRequest message, length delimited. Does not implicitly {@link proto.UserMPRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserMPRequest
         * @static
         * @param {proto.IUserMPRequest} message UserMPRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMPRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMPRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserMPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserMPRequest} UserMPRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMPRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserMPRequest();
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
         * @memberof proto.UserMPRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserMPRequest} UserMPRequest
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
         * @memberof proto.UserMPRequest
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
         * @memberof proto.UserMPRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserMPRequest} UserMPRequest
         */
        UserMPRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserMPRequest)
                return object;
            var message = new $root.proto.UserMPRequest();
            if (object.showAll != null)
                message.showAll = object.showAll | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserMPRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserMPRequest
         * @static
         * @param {proto.UserMPRequest} message UserMPRequest
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
         * @memberof proto.UserMPRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMPRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMPRequest;
    })();

    proto.UserReconnectRequest = (function() {

        /**
         * Properties of a UserReconnectRequest.
         * @memberof proto
         * @interface IUserReconnectRequest
         * @property {number|null} [userId] UserReconnectRequest userId
         */

        /**
         * Constructs a new UserReconnectRequest.
         * @memberof proto
         * @classdesc Represents a UserReconnectRequest.
         * @implements IUserReconnectRequest
         * @constructor
         * @param {proto.IUserReconnectRequest=} [properties] Properties to set
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
         * @memberof proto.UserReconnectRequest
         * @instance
         */
        UserReconnectRequest.prototype.userId = 0;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @function create
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {proto.IUserReconnectRequest=} [properties] Properties to set
         * @returns {proto.UserReconnectRequest} UserReconnectRequest instance
         */
        UserReconnectRequest.create = function create(properties) {
            return new UserReconnectRequest(properties);
        };

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link proto.UserReconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {proto.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
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
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link proto.UserReconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {proto.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserReconnectRequest();
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
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserReconnectRequest} UserReconnectRequest
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
         * @memberof proto.UserReconnectRequest
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
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserReconnectRequest} UserReconnectRequest
         */
        UserReconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserReconnectRequest)
                return object;
            var message = new $root.proto.UserReconnectRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserReconnectRequest
         * @static
         * @param {proto.UserReconnectRequest} message UserReconnectRequest
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
         * @memberof proto.UserReconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectRequest;
    })();

    proto.ApplyDismissRequest = (function() {

        /**
         * Properties of an ApplyDismissRequest.
         * @memberof proto
         * @interface IApplyDismissRequest
         */

        /**
         * Constructs a new ApplyDismissRequest.
         * @memberof proto
         * @classdesc Represents an ApplyDismissRequest.
         * @implements IApplyDismissRequest
         * @constructor
         * @param {proto.IApplyDismissRequest=} [properties] Properties to set
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
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {proto.IApplyDismissRequest=} [properties] Properties to set
         * @returns {proto.ApplyDismissRequest} ApplyDismissRequest instance
         */
        ApplyDismissRequest.create = function create(properties) {
            return new ApplyDismissRequest(properties);
        };

        /**
         * Encodes the specified ApplyDismissRequest message. Does not implicitly {@link proto.ApplyDismissRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {proto.IApplyDismissRequest} message ApplyDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ApplyDismissRequest message, length delimited. Does not implicitly {@link proto.ApplyDismissRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {proto.IApplyDismissRequest} message ApplyDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyDismissRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyDismissRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ApplyDismissRequest} ApplyDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyDismissRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ApplyDismissRequest();
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
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ApplyDismissRequest} ApplyDismissRequest
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
         * @memberof proto.ApplyDismissRequest
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
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ApplyDismissRequest} ApplyDismissRequest
         */
        ApplyDismissRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ApplyDismissRequest)
                return object;
            return new $root.proto.ApplyDismissRequest();
        };

        /**
         * Creates a plain object from an ApplyDismissRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ApplyDismissRequest
         * @static
         * @param {proto.ApplyDismissRequest} message ApplyDismissRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyDismissRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ApplyDismissRequest to JSON.
         * @function toJSON
         * @memberof proto.ApplyDismissRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyDismissRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApplyDismissRequest;
    })();

    proto.AgreeDismissRequest = (function() {

        /**
         * Properties of an AgreeDismissRequest.
         * @memberof proto
         * @interface IAgreeDismissRequest
         * @property {number|null} [agree] AgreeDismissRequest agree
         */

        /**
         * Constructs a new AgreeDismissRequest.
         * @memberof proto
         * @classdesc Represents an AgreeDismissRequest.
         * @implements IAgreeDismissRequest
         * @constructor
         * @param {proto.IAgreeDismissRequest=} [properties] Properties to set
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
         * @memberof proto.AgreeDismissRequest
         * @instance
         */
        AgreeDismissRequest.prototype.agree = 0;

        /**
         * Creates a new AgreeDismissRequest instance using the specified properties.
         * @function create
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {proto.IAgreeDismissRequest=} [properties] Properties to set
         * @returns {proto.AgreeDismissRequest} AgreeDismissRequest instance
         */
        AgreeDismissRequest.create = function create(properties) {
            return new AgreeDismissRequest(properties);
        };

        /**
         * Encodes the specified AgreeDismissRequest message. Does not implicitly {@link proto.AgreeDismissRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {proto.IAgreeDismissRequest} message AgreeDismissRequest message or plain object to encode
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
         * Encodes the specified AgreeDismissRequest message, length delimited. Does not implicitly {@link proto.AgreeDismissRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {proto.IAgreeDismissRequest} message AgreeDismissRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgreeDismissRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgreeDismissRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.AgreeDismissRequest} AgreeDismissRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgreeDismissRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.AgreeDismissRequest();
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
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.AgreeDismissRequest} AgreeDismissRequest
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
         * @memberof proto.AgreeDismissRequest
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
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.AgreeDismissRequest} AgreeDismissRequest
         */
        AgreeDismissRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.AgreeDismissRequest)
                return object;
            var message = new $root.proto.AgreeDismissRequest();
            if (object.agree != null)
                message.agree = object.agree | 0;
            return message;
        };

        /**
         * Creates a plain object from an AgreeDismissRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.AgreeDismissRequest
         * @static
         * @param {proto.AgreeDismissRequest} message AgreeDismissRequest
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
         * @memberof proto.AgreeDismissRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgreeDismissRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AgreeDismissRequest;
    })();

    proto.UserQuitRequest = (function() {

        /**
         * Properties of a UserQuitRequest.
         * @memberof proto
         * @interface IUserQuitRequest
         */

        /**
         * Constructs a new UserQuitRequest.
         * @memberof proto
         * @classdesc Represents a UserQuitRequest.
         * @implements IUserQuitRequest
         * @constructor
         * @param {proto.IUserQuitRequest=} [properties] Properties to set
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
         * @memberof proto.UserQuitRequest
         * @static
         * @param {proto.IUserQuitRequest=} [properties] Properties to set
         * @returns {proto.UserQuitRequest} UserQuitRequest instance
         */
        UserQuitRequest.create = function create(properties) {
            return new UserQuitRequest(properties);
        };

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link proto.UserQuitRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UserQuitRequest
         * @static
         * @param {proto.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link proto.UserQuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserQuitRequest
         * @static
         * @param {proto.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserQuitRequest();
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
         * @memberof proto.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserQuitRequest} UserQuitRequest
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
         * @memberof proto.UserQuitRequest
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
         * @memberof proto.UserQuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserQuitRequest} UserQuitRequest
         */
        UserQuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserQuitRequest)
                return object;
            return new $root.proto.UserQuitRequest();
        };

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserQuitRequest
         * @static
         * @param {proto.UserQuitRequest} message UserQuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserQuitRequest to JSON.
         * @function toJSON
         * @memberof proto.UserQuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitRequest;
    })();

    proto.MessageRequest = (function() {

        /**
         * Properties of a MessageRequest.
         * @memberof proto
         * @interface IMessageRequest
         * @property {string|null} [content] MessageRequest content
         * @property {number|null} [toUserId] MessageRequest toUserId
         */

        /**
         * Constructs a new MessageRequest.
         * @memberof proto
         * @classdesc Represents a MessageRequest.
         * @implements IMessageRequest
         * @constructor
         * @param {proto.IMessageRequest=} [properties] Properties to set
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
         * @memberof proto.MessageRequest
         * @instance
         */
        MessageRequest.prototype.content = "";

        /**
         * MessageRequest toUserId.
         * @member {number} toUserId
         * @memberof proto.MessageRequest
         * @instance
         */
        MessageRequest.prototype.toUserId = 0;

        /**
         * Creates a new MessageRequest instance using the specified properties.
         * @function create
         * @memberof proto.MessageRequest
         * @static
         * @param {proto.IMessageRequest=} [properties] Properties to set
         * @returns {proto.MessageRequest} MessageRequest instance
         */
        MessageRequest.create = function create(properties) {
            return new MessageRequest(properties);
        };

        /**
         * Encodes the specified MessageRequest message. Does not implicitly {@link proto.MessageRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.MessageRequest
         * @static
         * @param {proto.IMessageRequest} message MessageRequest message or plain object to encode
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
         * Encodes the specified MessageRequest message, length delimited. Does not implicitly {@link proto.MessageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.MessageRequest
         * @static
         * @param {proto.IMessageRequest} message MessageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.MessageRequest} MessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.MessageRequest();
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
         * @memberof proto.MessageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.MessageRequest} MessageRequest
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
         * @memberof proto.MessageRequest
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
         * @memberof proto.MessageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.MessageRequest} MessageRequest
         */
        MessageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.MessageRequest)
                return object;
            var message = new $root.proto.MessageRequest();
            if (object.content != null)
                message.content = String(object.content);
            if (object.toUserId != null)
                message.toUserId = object.toUserId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MessageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.MessageRequest
         * @static
         * @param {proto.MessageRequest} message MessageRequest
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
         * @memberof proto.MessageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageRequest;
    })();

    proto.UserOnBackRequest = (function() {

        /**
         * Properties of a UserOnBackRequest.
         * @memberof proto
         * @interface IUserOnBackRequest
         * @property {number|null} [leaveState] UserOnBackRequest leaveState
         */

        /**
         * Constructs a new UserOnBackRequest.
         * @memberof proto
         * @classdesc Represents a UserOnBackRequest.
         * @implements IUserOnBackRequest
         * @constructor
         * @param {proto.IUserOnBackRequest=} [properties] Properties to set
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
         * @memberof proto.UserOnBackRequest
         * @instance
         */
        UserOnBackRequest.prototype.leaveState = 0;

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @function create
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {proto.IUserOnBackRequest=} [properties] Properties to set
         * @returns {proto.UserOnBackRequest} UserOnBackRequest instance
         */
        UserOnBackRequest.create = function create(properties) {
            return new UserOnBackRequest(properties);
        };

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link proto.UserOnBackRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {proto.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
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
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link proto.UserOnBackRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {proto.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserOnBackRequest();
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
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserOnBackRequest} UserOnBackRequest
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
         * @memberof proto.UserOnBackRequest
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
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserOnBackRequest} UserOnBackRequest
         */
        UserOnBackRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserOnBackRequest)
                return object;
            var message = new $root.proto.UserOnBackRequest();
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.UserOnBackRequest
         * @static
         * @param {proto.UserOnBackRequest} message UserOnBackRequest
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
         * @memberof proto.UserOnBackRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOnBackRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserOnBackRequest;
    })();

    proto.DelayCheckRequest = (function() {

        /**
         * Properties of a DelayCheckRequest.
         * @memberof proto
         * @interface IDelayCheckRequest
         * @property {string|null} [content] DelayCheckRequest content
         */

        /**
         * Constructs a new DelayCheckRequest.
         * @memberof proto
         * @classdesc Represents a DelayCheckRequest.
         * @implements IDelayCheckRequest
         * @constructor
         * @param {proto.IDelayCheckRequest=} [properties] Properties to set
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
         * @memberof proto.DelayCheckRequest
         * @instance
         */
        DelayCheckRequest.prototype.content = "";

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @function create
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {proto.IDelayCheckRequest=} [properties] Properties to set
         * @returns {proto.DelayCheckRequest} DelayCheckRequest instance
         */
        DelayCheckRequest.create = function create(properties) {
            return new DelayCheckRequest(properties);
        };

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link proto.DelayCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {proto.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
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
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link proto.DelayCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {proto.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.DelayCheckRequest();
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
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.DelayCheckRequest} DelayCheckRequest
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
         * @memberof proto.DelayCheckRequest
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
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.DelayCheckRequest} DelayCheckRequest
         */
        DelayCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.DelayCheckRequest)
                return object;
            var message = new $root.proto.DelayCheckRequest();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.DelayCheckRequest
         * @static
         * @param {proto.DelayCheckRequest} message DelayCheckRequest
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
         * @memberof proto.DelayCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckRequest;
    })();

    proto.CancelAutoRequest = (function() {

        /**
         * Properties of a CancelAutoRequest.
         * @memberof proto
         * @interface ICancelAutoRequest
         */

        /**
         * Constructs a new CancelAutoRequest.
         * @memberof proto
         * @classdesc Represents a CancelAutoRequest.
         * @implements ICancelAutoRequest
         * @constructor
         * @param {proto.ICancelAutoRequest=} [properties] Properties to set
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
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {proto.ICancelAutoRequest=} [properties] Properties to set
         * @returns {proto.CancelAutoRequest} CancelAutoRequest instance
         */
        CancelAutoRequest.create = function create(properties) {
            return new CancelAutoRequest(properties);
        };

        /**
         * Encodes the specified CancelAutoRequest message. Does not implicitly {@link proto.CancelAutoRequest.verify|verify} messages.
         * @function encode
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {proto.ICancelAutoRequest} message CancelAutoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelAutoRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CancelAutoRequest message, length delimited. Does not implicitly {@link proto.CancelAutoRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {proto.ICancelAutoRequest} message CancelAutoRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelAutoRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelAutoRequest message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CancelAutoRequest} CancelAutoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelAutoRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CancelAutoRequest();
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
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CancelAutoRequest} CancelAutoRequest
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
         * @memberof proto.CancelAutoRequest
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
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CancelAutoRequest} CancelAutoRequest
         */
        CancelAutoRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CancelAutoRequest)
                return object;
            return new $root.proto.CancelAutoRequest();
        };

        /**
         * Creates a plain object from a CancelAutoRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CancelAutoRequest
         * @static
         * @param {proto.CancelAutoRequest} message CancelAutoRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelAutoRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CancelAutoRequest to JSON.
         * @function toJSON
         * @memberof proto.CancelAutoRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelAutoRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelAutoRequest;
    })();

    proto.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof proto
         * @interface IRequest
         * @property {proto.Request.CMD|null} [cmd] Request cmd
         * @property {proto.ILoginRequest|null} [loginRequest] Request loginRequest
         * @property {proto.IRegisterPhoneRequest|null} [registerPhone] Request registerPhone
         * @property {proto.IGetUserInfoRequest|null} [getUserInfoRequest] Request getUserInfoRequest
         * @property {proto.ICoinBankRequest|null} [coinBankRequest] Request coinBankRequest
         * @property {proto.IChangeSignRequest|null} [changeSignRequest] Request changeSignRequest
         * @property {proto.ITestDeviceIDRequest|null} [testDeviceIDRequest] Request testDeviceIDRequest
         * @property {proto.IUserMPRequest|null} [userMPRequest] Request userMPRequest
         * @property {proto.IPassPaiRequest|null} [passPaiRequest] Request passPaiRequest
         * @property {proto.IUserReconnectRequest|null} [userReconnectRequest] Request userReconnectRequest
         * @property {proto.IApplyDismissRequest|null} [applyDismissRequest] Request applyDismissRequest
         * @property {proto.IAgreeDismissRequest|null} [agreeDismissRequest] Request agreeDismissRequest
         * @property {proto.IUserQuitRequest|null} [userQuitRequest] Request userQuitRequest
         * @property {proto.IMessageRequest|null} [messageRequest] Request messageRequest
         * @property {proto.IUserOnBackRequest|null} [userOnBackRequest] Request userOnBackRequest
         * @property {proto.IDelayCheckRequest|null} [delayCheckRequest] Request delayCheckRequest
         * @property {proto.ICancelAutoRequest|null} [cancelAutoRequest] Request cancelAutoRequest
         */

        /**
         * Constructs a new Request.
         * @memberof proto
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {proto.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {proto.Request.CMD} cmd
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request loginRequest.
         * @member {proto.ILoginRequest|null|undefined} loginRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.loginRequest = null;

        /**
         * Request registerPhone.
         * @member {proto.IRegisterPhoneRequest|null|undefined} registerPhone
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.registerPhone = null;

        /**
         * Request getUserInfoRequest.
         * @member {proto.IGetUserInfoRequest|null|undefined} getUserInfoRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.getUserInfoRequest = null;

        /**
         * Request coinBankRequest.
         * @member {proto.ICoinBankRequest|null|undefined} coinBankRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.coinBankRequest = null;

        /**
         * Request changeSignRequest.
         * @member {proto.IChangeSignRequest|null|undefined} changeSignRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.changeSignRequest = null;

        /**
         * Request testDeviceIDRequest.
         * @member {proto.ITestDeviceIDRequest|null|undefined} testDeviceIDRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.testDeviceIDRequest = null;

        /**
         * Request userMPRequest.
         * @member {proto.IUserMPRequest|null|undefined} userMPRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.userMPRequest = null;

        /**
         * Request passPaiRequest.
         * @member {proto.IPassPaiRequest|null|undefined} passPaiRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.passPaiRequest = null;

        /**
         * Request userReconnectRequest.
         * @member {proto.IUserReconnectRequest|null|undefined} userReconnectRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.userReconnectRequest = null;

        /**
         * Request applyDismissRequest.
         * @member {proto.IApplyDismissRequest|null|undefined} applyDismissRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.applyDismissRequest = null;

        /**
         * Request agreeDismissRequest.
         * @member {proto.IAgreeDismissRequest|null|undefined} agreeDismissRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.agreeDismissRequest = null;

        /**
         * Request userQuitRequest.
         * @member {proto.IUserQuitRequest|null|undefined} userQuitRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.userQuitRequest = null;

        /**
         * Request messageRequest.
         * @member {proto.IMessageRequest|null|undefined} messageRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.messageRequest = null;

        /**
         * Request userOnBackRequest.
         * @member {proto.IUserOnBackRequest|null|undefined} userOnBackRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.userOnBackRequest = null;

        /**
         * Request delayCheckRequest.
         * @member {proto.IDelayCheckRequest|null|undefined} delayCheckRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.delayCheckRequest = null;

        /**
         * Request cancelAutoRequest.
         * @member {proto.ICancelAutoRequest|null|undefined} cancelAutoRequest
         * @memberof proto.Request
         * @instance
         */
        Request.prototype.cancelAutoRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof proto.Request
         * @static
         * @param {proto.IRequest=} [properties] Properties to set
         * @returns {proto.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link proto.Request.verify|verify} messages.
         * @function encode
         * @memberof proto.Request
         * @static
         * @param {proto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                $root.proto.LoginRequest.encode(message.loginRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.registerPhone != null && message.hasOwnProperty("registerPhone"))
                $root.proto.RegisterPhoneRequest.encode(message.registerPhone, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.getUserInfoRequest != null && message.hasOwnProperty("getUserInfoRequest"))
                $root.proto.GetUserInfoRequest.encode(message.getUserInfoRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.coinBankRequest != null && message.hasOwnProperty("coinBankRequest"))
                $root.proto.CoinBankRequest.encode(message.coinBankRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.changeSignRequest != null && message.hasOwnProperty("changeSignRequest"))
                $root.proto.ChangeSignRequest.encode(message.changeSignRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.testDeviceIDRequest != null && message.hasOwnProperty("testDeviceIDRequest"))
                $root.proto.TestDeviceIDRequest.encode(message.testDeviceIDRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.userMPRequest != null && message.hasOwnProperty("userMPRequest"))
                $root.proto.UserMPRequest.encode(message.userMPRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.passPaiRequest != null && message.hasOwnProperty("passPaiRequest"))
                $root.proto.PassPaiRequest.encode(message.passPaiRequest, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                $root.proto.UserReconnectRequest.encode(message.userReconnectRequest, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.applyDismissRequest != null && message.hasOwnProperty("applyDismissRequest"))
                $root.proto.ApplyDismissRequest.encode(message.applyDismissRequest, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.agreeDismissRequest != null && message.hasOwnProperty("agreeDismissRequest"))
                $root.proto.AgreeDismissRequest.encode(message.agreeDismissRequest, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                $root.proto.UserQuitRequest.encode(message.userQuitRequest, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                $root.proto.MessageRequest.encode(message.messageRequest, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                $root.proto.UserOnBackRequest.encode(message.userOnBackRequest, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                $root.proto.DelayCheckRequest.encode(message.delayCheckRequest, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.cancelAutoRequest != null && message.hasOwnProperty("cancelAutoRequest"))
                $root.proto.CancelAutoRequest.encode(message.cancelAutoRequest, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link proto.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Request
         * @static
         * @param {proto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.loginRequest = $root.proto.LoginRequest.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.registerPhone = $root.proto.RegisterPhoneRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.getUserInfoRequest = $root.proto.GetUserInfoRequest.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.coinBankRequest = $root.proto.CoinBankRequest.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.changeSignRequest = $root.proto.ChangeSignRequest.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.testDeviceIDRequest = $root.proto.TestDeviceIDRequest.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userMPRequest = $root.proto.UserMPRequest.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.passPaiRequest = $root.proto.PassPaiRequest.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.userReconnectRequest = $root.proto.UserReconnectRequest.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.applyDismissRequest = $root.proto.ApplyDismissRequest.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.agreeDismissRequest = $root.proto.AgreeDismissRequest.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.userQuitRequest = $root.proto.UserQuitRequest.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.messageRequest = $root.proto.MessageRequest.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.userOnBackRequest = $root.proto.UserOnBackRequest.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.delayCheckRequest = $root.proto.DelayCheckRequest.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.cancelAutoRequest = $root.proto.CancelAutoRequest.decode(reader, reader.uint32());
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
         * @memberof proto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Request} Request
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
         * @memberof proto.Request
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
                var error = $root.proto.LoginRequest.verify(message.loginRequest);
                if (error)
                    return "loginRequest." + error;
            }
            if (message.registerPhone != null && message.hasOwnProperty("registerPhone")) {
                var error = $root.proto.RegisterPhoneRequest.verify(message.registerPhone);
                if (error)
                    return "registerPhone." + error;
            }
            if (message.getUserInfoRequest != null && message.hasOwnProperty("getUserInfoRequest")) {
                var error = $root.proto.GetUserInfoRequest.verify(message.getUserInfoRequest);
                if (error)
                    return "getUserInfoRequest." + error;
            }
            if (message.coinBankRequest != null && message.hasOwnProperty("coinBankRequest")) {
                var error = $root.proto.CoinBankRequest.verify(message.coinBankRequest);
                if (error)
                    return "coinBankRequest." + error;
            }
            if (message.changeSignRequest != null && message.hasOwnProperty("changeSignRequest")) {
                var error = $root.proto.ChangeSignRequest.verify(message.changeSignRequest);
                if (error)
                    return "changeSignRequest." + error;
            }
            if (message.testDeviceIDRequest != null && message.hasOwnProperty("testDeviceIDRequest")) {
                var error = $root.proto.TestDeviceIDRequest.verify(message.testDeviceIDRequest);
                if (error)
                    return "testDeviceIDRequest." + error;
            }
            if (message.userMPRequest != null && message.hasOwnProperty("userMPRequest")) {
                var error = $root.proto.UserMPRequest.verify(message.userMPRequest);
                if (error)
                    return "userMPRequest." + error;
            }
            if (message.passPaiRequest != null && message.hasOwnProperty("passPaiRequest")) {
                var error = $root.proto.PassPaiRequest.verify(message.passPaiRequest);
                if (error)
                    return "passPaiRequest." + error;
            }
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest")) {
                var error = $root.proto.UserReconnectRequest.verify(message.userReconnectRequest);
                if (error)
                    return "userReconnectRequest." + error;
            }
            if (message.applyDismissRequest != null && message.hasOwnProperty("applyDismissRequest")) {
                var error = $root.proto.ApplyDismissRequest.verify(message.applyDismissRequest);
                if (error)
                    return "applyDismissRequest." + error;
            }
            if (message.agreeDismissRequest != null && message.hasOwnProperty("agreeDismissRequest")) {
                var error = $root.proto.AgreeDismissRequest.verify(message.agreeDismissRequest);
                if (error)
                    return "agreeDismissRequest." + error;
            }
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest")) {
                var error = $root.proto.UserQuitRequest.verify(message.userQuitRequest);
                if (error)
                    return "userQuitRequest." + error;
            }
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest")) {
                var error = $root.proto.MessageRequest.verify(message.messageRequest);
                if (error)
                    return "messageRequest." + error;
            }
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest")) {
                var error = $root.proto.UserOnBackRequest.verify(message.userOnBackRequest);
                if (error)
                    return "userOnBackRequest." + error;
            }
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest")) {
                var error = $root.proto.DelayCheckRequest.verify(message.delayCheckRequest);
                if (error)
                    return "delayCheckRequest." + error;
            }
            if (message.cancelAutoRequest != null && message.hasOwnProperty("cancelAutoRequest")) {
                var error = $root.proto.CancelAutoRequest.verify(message.cancelAutoRequest);
                if (error)
                    return "cancelAutoRequest." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Request)
                return object;
            var message = new $root.proto.Request();
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
                    throw TypeError(".proto.Request.loginRequest: object expected");
                message.loginRequest = $root.proto.LoginRequest.fromObject(object.loginRequest);
            }
            if (object.registerPhone != null) {
                if (typeof object.registerPhone !== "object")
                    throw TypeError(".proto.Request.registerPhone: object expected");
                message.registerPhone = $root.proto.RegisterPhoneRequest.fromObject(object.registerPhone);
            }
            if (object.getUserInfoRequest != null) {
                if (typeof object.getUserInfoRequest !== "object")
                    throw TypeError(".proto.Request.getUserInfoRequest: object expected");
                message.getUserInfoRequest = $root.proto.GetUserInfoRequest.fromObject(object.getUserInfoRequest);
            }
            if (object.coinBankRequest != null) {
                if (typeof object.coinBankRequest !== "object")
                    throw TypeError(".proto.Request.coinBankRequest: object expected");
                message.coinBankRequest = $root.proto.CoinBankRequest.fromObject(object.coinBankRequest);
            }
            if (object.changeSignRequest != null) {
                if (typeof object.changeSignRequest !== "object")
                    throw TypeError(".proto.Request.changeSignRequest: object expected");
                message.changeSignRequest = $root.proto.ChangeSignRequest.fromObject(object.changeSignRequest);
            }
            if (object.testDeviceIDRequest != null) {
                if (typeof object.testDeviceIDRequest !== "object")
                    throw TypeError(".proto.Request.testDeviceIDRequest: object expected");
                message.testDeviceIDRequest = $root.proto.TestDeviceIDRequest.fromObject(object.testDeviceIDRequest);
            }
            if (object.userMPRequest != null) {
                if (typeof object.userMPRequest !== "object")
                    throw TypeError(".proto.Request.userMPRequest: object expected");
                message.userMPRequest = $root.proto.UserMPRequest.fromObject(object.userMPRequest);
            }
            if (object.passPaiRequest != null) {
                if (typeof object.passPaiRequest !== "object")
                    throw TypeError(".proto.Request.passPaiRequest: object expected");
                message.passPaiRequest = $root.proto.PassPaiRequest.fromObject(object.passPaiRequest);
            }
            if (object.userReconnectRequest != null) {
                if (typeof object.userReconnectRequest !== "object")
                    throw TypeError(".proto.Request.userReconnectRequest: object expected");
                message.userReconnectRequest = $root.proto.UserReconnectRequest.fromObject(object.userReconnectRequest);
            }
            if (object.applyDismissRequest != null) {
                if (typeof object.applyDismissRequest !== "object")
                    throw TypeError(".proto.Request.applyDismissRequest: object expected");
                message.applyDismissRequest = $root.proto.ApplyDismissRequest.fromObject(object.applyDismissRequest);
            }
            if (object.agreeDismissRequest != null) {
                if (typeof object.agreeDismissRequest !== "object")
                    throw TypeError(".proto.Request.agreeDismissRequest: object expected");
                message.agreeDismissRequest = $root.proto.AgreeDismissRequest.fromObject(object.agreeDismissRequest);
            }
            if (object.userQuitRequest != null) {
                if (typeof object.userQuitRequest !== "object")
                    throw TypeError(".proto.Request.userQuitRequest: object expected");
                message.userQuitRequest = $root.proto.UserQuitRequest.fromObject(object.userQuitRequest);
            }
            if (object.messageRequest != null) {
                if (typeof object.messageRequest !== "object")
                    throw TypeError(".proto.Request.messageRequest: object expected");
                message.messageRequest = $root.proto.MessageRequest.fromObject(object.messageRequest);
            }
            if (object.userOnBackRequest != null) {
                if (typeof object.userOnBackRequest !== "object")
                    throw TypeError(".proto.Request.userOnBackRequest: object expected");
                message.userOnBackRequest = $root.proto.UserOnBackRequest.fromObject(object.userOnBackRequest);
            }
            if (object.delayCheckRequest != null) {
                if (typeof object.delayCheckRequest !== "object")
                    throw TypeError(".proto.Request.delayCheckRequest: object expected");
                message.delayCheckRequest = $root.proto.DelayCheckRequest.fromObject(object.delayCheckRequest);
            }
            if (object.cancelAutoRequest != null) {
                if (typeof object.cancelAutoRequest !== "object")
                    throw TypeError(".proto.Request.cancelAutoRequest: object expected");
                message.cancelAutoRequest = $root.proto.CancelAutoRequest.fromObject(object.cancelAutoRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Request
         * @static
         * @param {proto.Request} message Request
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
                object.cmd = options.enums === String ? $root.proto.Request.CMD[message.cmd] : message.cmd;
            if (message.loginRequest != null && message.hasOwnProperty("loginRequest"))
                object.loginRequest = $root.proto.LoginRequest.toObject(message.loginRequest, options);
            if (message.registerPhone != null && message.hasOwnProperty("registerPhone"))
                object.registerPhone = $root.proto.RegisterPhoneRequest.toObject(message.registerPhone, options);
            if (message.getUserInfoRequest != null && message.hasOwnProperty("getUserInfoRequest"))
                object.getUserInfoRequest = $root.proto.GetUserInfoRequest.toObject(message.getUserInfoRequest, options);
            if (message.coinBankRequest != null && message.hasOwnProperty("coinBankRequest"))
                object.coinBankRequest = $root.proto.CoinBankRequest.toObject(message.coinBankRequest, options);
            if (message.changeSignRequest != null && message.hasOwnProperty("changeSignRequest"))
                object.changeSignRequest = $root.proto.ChangeSignRequest.toObject(message.changeSignRequest, options);
            if (message.testDeviceIDRequest != null && message.hasOwnProperty("testDeviceIDRequest"))
                object.testDeviceIDRequest = $root.proto.TestDeviceIDRequest.toObject(message.testDeviceIDRequest, options);
            if (message.userMPRequest != null && message.hasOwnProperty("userMPRequest"))
                object.userMPRequest = $root.proto.UserMPRequest.toObject(message.userMPRequest, options);
            if (message.passPaiRequest != null && message.hasOwnProperty("passPaiRequest"))
                object.passPaiRequest = $root.proto.PassPaiRequest.toObject(message.passPaiRequest, options);
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                object.userReconnectRequest = $root.proto.UserReconnectRequest.toObject(message.userReconnectRequest, options);
            if (message.applyDismissRequest != null && message.hasOwnProperty("applyDismissRequest"))
                object.applyDismissRequest = $root.proto.ApplyDismissRequest.toObject(message.applyDismissRequest, options);
            if (message.agreeDismissRequest != null && message.hasOwnProperty("agreeDismissRequest"))
                object.agreeDismissRequest = $root.proto.AgreeDismissRequest.toObject(message.agreeDismissRequest, options);
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                object.userQuitRequest = $root.proto.UserQuitRequest.toObject(message.userQuitRequest, options);
            if (message.messageRequest != null && message.hasOwnProperty("messageRequest"))
                object.messageRequest = $root.proto.MessageRequest.toObject(message.messageRequest, options);
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                object.userOnBackRequest = $root.proto.UserOnBackRequest.toObject(message.userOnBackRequest, options);
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                object.delayCheckRequest = $root.proto.DelayCheckRequest.toObject(message.delayCheckRequest, options);
            if (message.cancelAutoRequest != null && message.hasOwnProperty("cancelAutoRequest"))
                object.cancelAutoRequest = $root.proto.CancelAutoRequest.toObject(message.cancelAutoRequest, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof proto.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name proto.Request.CMD
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

    proto.LoginResponse = (function() {

        /**
         * Properties of a LoginResponse.
         * @memberof proto
         * @interface ILoginResponse
         * @property {proto.IUser|null} [user] LoginResponse user
         */

        /**
         * Constructs a new LoginResponse.
         * @memberof proto
         * @classdesc Represents a LoginResponse.
         * @implements ILoginResponse
         * @constructor
         * @param {proto.ILoginResponse=} [properties] Properties to set
         */
        function LoginResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResponse user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.LoginResponse
         * @instance
         */
        LoginResponse.prototype.user = null;

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @function create
         * @memberof proto.LoginResponse
         * @static
         * @param {proto.ILoginResponse=} [properties] Properties to set
         * @returns {proto.LoginResponse} LoginResponse instance
         */
        LoginResponse.create = function create(properties) {
            return new LoginResponse(properties);
        };

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link proto.LoginResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.LoginResponse
         * @static
         * @param {proto.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link proto.LoginResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.LoginResponse
         * @static
         * @param {proto.ILoginResponse} message LoginResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.LoginResponse} LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.LoginResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
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
         * @memberof proto.LoginResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.LoginResponse} LoginResponse
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
         * @memberof proto.LoginResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.LoginResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.LoginResponse} LoginResponse
         */
        LoginResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.LoginResponse)
                return object;
            var message = new $root.proto.LoginResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.LoginResponse.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.LoginResponse
         * @static
         * @param {proto.LoginResponse} message LoginResponse
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
                object.user = $root.proto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this LoginResponse to JSON.
         * @function toJSON
         * @memberof proto.LoginResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResponse;
    })();

    proto.RegisterPhoneRespone = (function() {

        /**
         * Properties of a RegisterPhoneRespone.
         * @memberof proto
         * @interface IRegisterPhoneRespone
         * @property {number|null} [username] RegisterPhoneRespone username
         */

        /**
         * Constructs a new RegisterPhoneRespone.
         * @memberof proto
         * @classdesc Represents a RegisterPhoneRespone.
         * @implements IRegisterPhoneRespone
         * @constructor
         * @param {proto.IRegisterPhoneRespone=} [properties] Properties to set
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
         * @memberof proto.RegisterPhoneRespone
         * @instance
         */
        RegisterPhoneRespone.prototype.username = 0;

        /**
         * Creates a new RegisterPhoneRespone instance using the specified properties.
         * @function create
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {proto.IRegisterPhoneRespone=} [properties] Properties to set
         * @returns {proto.RegisterPhoneRespone} RegisterPhoneRespone instance
         */
        RegisterPhoneRespone.create = function create(properties) {
            return new RegisterPhoneRespone(properties);
        };

        /**
         * Encodes the specified RegisterPhoneRespone message. Does not implicitly {@link proto.RegisterPhoneRespone.verify|verify} messages.
         * @function encode
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {proto.IRegisterPhoneRespone} message RegisterPhoneRespone message or plain object to encode
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
         * Encodes the specified RegisterPhoneRespone message, length delimited. Does not implicitly {@link proto.RegisterPhoneRespone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {proto.IRegisterPhoneRespone} message RegisterPhoneRespone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPhoneRespone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterPhoneRespone message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.RegisterPhoneRespone} RegisterPhoneRespone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPhoneRespone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RegisterPhoneRespone();
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
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.RegisterPhoneRespone} RegisterPhoneRespone
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
         * @memberof proto.RegisterPhoneRespone
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
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.RegisterPhoneRespone} RegisterPhoneRespone
         */
        RegisterPhoneRespone.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.RegisterPhoneRespone)
                return object;
            var message = new $root.proto.RegisterPhoneRespone();
            if (object.username != null)
                message.username = object.username | 0;
            return message;
        };

        /**
         * Creates a plain object from a RegisterPhoneRespone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.RegisterPhoneRespone
         * @static
         * @param {proto.RegisterPhoneRespone} message RegisterPhoneRespone
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
         * @memberof proto.RegisterPhoneRespone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterPhoneRespone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterPhoneRespone;
    })();

    proto.GetUserInfoResponse = (function() {

        /**
         * Properties of a GetUserInfoResponse.
         * @memberof proto
         * @interface IGetUserInfoResponse
         * @property {proto.IUserInfo|null} [userInfo] GetUserInfoResponse userInfo
         */

        /**
         * Constructs a new GetUserInfoResponse.
         * @memberof proto
         * @classdesc Represents a GetUserInfoResponse.
         * @implements IGetUserInfoResponse
         * @constructor
         * @param {proto.IGetUserInfoResponse=} [properties] Properties to set
         */
        function GetUserInfoResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserInfoResponse userInfo.
         * @member {proto.IUserInfo|null|undefined} userInfo
         * @memberof proto.GetUserInfoResponse
         * @instance
         */
        GetUserInfoResponse.prototype.userInfo = null;

        /**
         * Creates a new GetUserInfoResponse instance using the specified properties.
         * @function create
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {proto.IGetUserInfoResponse=} [properties] Properties to set
         * @returns {proto.GetUserInfoResponse} GetUserInfoResponse instance
         */
        GetUserInfoResponse.create = function create(properties) {
            return new GetUserInfoResponse(properties);
        };

        /**
         * Encodes the specified GetUserInfoResponse message. Does not implicitly {@link proto.GetUserInfoResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {proto.IGetUserInfoResponse} message GetUserInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                $root.proto.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUserInfoResponse message, length delimited. Does not implicitly {@link proto.GetUserInfoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {proto.IGetUserInfoResponse} message GetUserInfoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserInfoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserInfoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.GetUserInfoResponse} GetUserInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserInfoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.GetUserInfoResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userInfo = $root.proto.UserInfo.decode(reader, reader.uint32());
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
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.GetUserInfoResponse} GetUserInfoResponse
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
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserInfoResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInfo != null && message.hasOwnProperty("userInfo")) {
                var error = $root.proto.UserInfo.verify(message.userInfo);
                if (error)
                    return "userInfo." + error;
            }
            return null;
        };

        /**
         * Creates a GetUserInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.GetUserInfoResponse} GetUserInfoResponse
         */
        GetUserInfoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.GetUserInfoResponse)
                return object;
            var message = new $root.proto.GetUserInfoResponse();
            if (object.userInfo != null) {
                if (typeof object.userInfo !== "object")
                    throw TypeError(".proto.GetUserInfoResponse.userInfo: object expected");
                message.userInfo = $root.proto.UserInfo.fromObject(object.userInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserInfoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.GetUserInfoResponse
         * @static
         * @param {proto.GetUserInfoResponse} message GetUserInfoResponse
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
                object.userInfo = $root.proto.UserInfo.toObject(message.userInfo, options);
            return object;
        };

        /**
         * Converts this GetUserInfoResponse to JSON.
         * @function toJSON
         * @memberof proto.GetUserInfoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserInfoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserInfoResponse;
    })();

    proto.CoinBankResponse = (function() {

        /**
         * Properties of a CoinBankResponse.
         * @memberof proto
         * @interface ICoinBankResponse
         */

        /**
         * Constructs a new CoinBankResponse.
         * @memberof proto
         * @classdesc Represents a CoinBankResponse.
         * @implements ICoinBankResponse
         * @constructor
         * @param {proto.ICoinBankResponse=} [properties] Properties to set
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
         * @memberof proto.CoinBankResponse
         * @static
         * @param {proto.ICoinBankResponse=} [properties] Properties to set
         * @returns {proto.CoinBankResponse} CoinBankResponse instance
         */
        CoinBankResponse.create = function create(properties) {
            return new CoinBankResponse(properties);
        };

        /**
         * Encodes the specified CoinBankResponse message. Does not implicitly {@link proto.CoinBankResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.CoinBankResponse
         * @static
         * @param {proto.ICoinBankResponse} message CoinBankResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CoinBankResponse message, length delimited. Does not implicitly {@link proto.CoinBankResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CoinBankResponse
         * @static
         * @param {proto.ICoinBankResponse} message CoinBankResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CoinBankResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CoinBankResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CoinBankResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CoinBankResponse} CoinBankResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CoinBankResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CoinBankResponse();
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
         * @memberof proto.CoinBankResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CoinBankResponse} CoinBankResponse
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
         * @memberof proto.CoinBankResponse
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
         * @memberof proto.CoinBankResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CoinBankResponse} CoinBankResponse
         */
        CoinBankResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CoinBankResponse)
                return object;
            return new $root.proto.CoinBankResponse();
        };

        /**
         * Creates a plain object from a CoinBankResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CoinBankResponse
         * @static
         * @param {proto.CoinBankResponse} message CoinBankResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CoinBankResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CoinBankResponse to JSON.
         * @function toJSON
         * @memberof proto.CoinBankResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CoinBankResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CoinBankResponse;
    })();

    proto.ChangeSignResponse = (function() {

        /**
         * Properties of a ChangeSignResponse.
         * @memberof proto
         * @interface IChangeSignResponse
         */

        /**
         * Constructs a new ChangeSignResponse.
         * @memberof proto
         * @classdesc Represents a ChangeSignResponse.
         * @implements IChangeSignResponse
         * @constructor
         * @param {proto.IChangeSignResponse=} [properties] Properties to set
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
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {proto.IChangeSignResponse=} [properties] Properties to set
         * @returns {proto.ChangeSignResponse} ChangeSignResponse instance
         */
        ChangeSignResponse.create = function create(properties) {
            return new ChangeSignResponse(properties);
        };

        /**
         * Encodes the specified ChangeSignResponse message. Does not implicitly {@link proto.ChangeSignResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {proto.IChangeSignResponse} message ChangeSignResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ChangeSignResponse message, length delimited. Does not implicitly {@link proto.ChangeSignResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {proto.IChangeSignResponse} message ChangeSignResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChangeSignResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChangeSignResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ChangeSignResponse} ChangeSignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChangeSignResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ChangeSignResponse();
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
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ChangeSignResponse} ChangeSignResponse
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
         * @memberof proto.ChangeSignResponse
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
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ChangeSignResponse} ChangeSignResponse
         */
        ChangeSignResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ChangeSignResponse)
                return object;
            return new $root.proto.ChangeSignResponse();
        };

        /**
         * Creates a plain object from a ChangeSignResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ChangeSignResponse
         * @static
         * @param {proto.ChangeSignResponse} message ChangeSignResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChangeSignResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ChangeSignResponse to JSON.
         * @function toJSON
         * @memberof proto.ChangeSignResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChangeSignResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeSignResponse;
    })();

    proto.TestDeviceIDResponse = (function() {

        /**
         * Properties of a TestDeviceIDResponse.
         * @memberof proto
         * @interface ITestDeviceIDResponse
         */

        /**
         * Constructs a new TestDeviceIDResponse.
         * @memberof proto
         * @classdesc Represents a TestDeviceIDResponse.
         * @implements ITestDeviceIDResponse
         * @constructor
         * @param {proto.ITestDeviceIDResponse=} [properties] Properties to set
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
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {proto.ITestDeviceIDResponse=} [properties] Properties to set
         * @returns {proto.TestDeviceIDResponse} TestDeviceIDResponse instance
         */
        TestDeviceIDResponse.create = function create(properties) {
            return new TestDeviceIDResponse(properties);
        };

        /**
         * Encodes the specified TestDeviceIDResponse message. Does not implicitly {@link proto.TestDeviceIDResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {proto.ITestDeviceIDResponse} message TestDeviceIDResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestDeviceIDResponse message, length delimited. Does not implicitly {@link proto.TestDeviceIDResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {proto.ITestDeviceIDResponse} message TestDeviceIDResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestDeviceIDResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestDeviceIDResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TestDeviceIDResponse} TestDeviceIDResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestDeviceIDResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TestDeviceIDResponse();
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
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TestDeviceIDResponse} TestDeviceIDResponse
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
         * @memberof proto.TestDeviceIDResponse
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
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TestDeviceIDResponse} TestDeviceIDResponse
         */
        TestDeviceIDResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TestDeviceIDResponse)
                return object;
            return new $root.proto.TestDeviceIDResponse();
        };

        /**
         * Creates a plain object from a TestDeviceIDResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TestDeviceIDResponse
         * @static
         * @param {proto.TestDeviceIDResponse} message TestDeviceIDResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestDeviceIDResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestDeviceIDResponse to JSON.
         * @function toJSON
         * @memberof proto.TestDeviceIDResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestDeviceIDResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestDeviceIDResponse;
    })();

    proto.CreateTableResponse = (function() {

        /**
         * Properties of a CreateTableResponse.
         * @memberof proto
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
         * @property {Array.<proto.IUser>|null} [users] CreateTableResponse users
         */

        /**
         * Constructs a new CreateTableResponse.
         * @memberof proto
         * @classdesc Represents a CreateTableResponse.
         * @implements ICreateTableResponse
         * @constructor
         * @param {proto.ICreateTableResponse=} [properties] Properties to set
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
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.tableId = "";

        /**
         * CreateTableResponse gameId.
         * @member {number} gameId
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.gameId = 0;

        /**
         * CreateTableResponse state.
         * @member {number} state
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.state = 0;

        /**
         * CreateTableResponse owner.
         * @member {number} owner
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.owner = 0;

        /**
         * CreateTableResponse currentRound.
         * @member {number} currentRound
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.currentRound = 0;

        /**
         * CreateTableResponse totalRound.
         * @member {number} totalRound
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.totalRound = 0;

        /**
         * CreateTableResponse gameInfo.
         * @member {string} gameInfo
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.gameInfo = "";

        /**
         * CreateTableResponse applicant.
         * @member {number} applicant
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.applicant = 0;

        /**
         * CreateTableResponse applyTime.
         * @member {number} applyTime
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.applyTime = 0;

        /**
         * CreateTableResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateTableResponse users.
         * @member {Array.<proto.IUser>} users
         * @memberof proto.CreateTableResponse
         * @instance
         */
        CreateTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new CreateTableResponse instance using the specified properties.
         * @function create
         * @memberof proto.CreateTableResponse
         * @static
         * @param {proto.ICreateTableResponse=} [properties] Properties to set
         * @returns {proto.CreateTableResponse} CreateTableResponse instance
         */
        CreateTableResponse.create = function create(properties) {
            return new CreateTableResponse(properties);
        };

        /**
         * Encodes the specified CreateTableResponse message. Does not implicitly {@link proto.CreateTableResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.CreateTableResponse
         * @static
         * @param {proto.ICreateTableResponse} message CreateTableResponse message or plain object to encode
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
                    $root.proto.User.encode(message.users[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateTableResponse message, length delimited. Does not implicitly {@link proto.CreateTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.CreateTableResponse
         * @static
         * @param {proto.ICreateTableResponse} message CreateTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CreateTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.CreateTableResponse} CreateTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.CreateTableResponse();
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
                    message.users.push($root.proto.User.decode(reader, reader.uint32()));
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
         * @memberof proto.CreateTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.CreateTableResponse} CreateTableResponse
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
         * @memberof proto.CreateTableResponse
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
                    var error = $root.proto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CreateTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.CreateTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.CreateTableResponse} CreateTableResponse
         */
        CreateTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.CreateTableResponse)
                return object;
            var message = new $root.proto.CreateTableResponse();
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
                    throw TypeError(".proto.CreateTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.CreateTableResponse.users: object expected");
                    message.users[i] = $root.proto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.CreateTableResponse
         * @static
         * @param {proto.CreateTableResponse} message CreateTableResponse
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
                    object.users[j] = $root.proto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this CreateTableResponse to JSON.
         * @function toJSON
         * @memberof proto.CreateTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateTableResponse;
    })();

    proto.JoinTableResponse = (function() {

        /**
         * Properties of a JoinTableResponse.
         * @memberof proto
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
         * @property {Array.<proto.IUser>|null} [users] JoinTableResponse users
         */

        /**
         * Constructs a new JoinTableResponse.
         * @memberof proto
         * @classdesc Represents a JoinTableResponse.
         * @implements IJoinTableResponse
         * @constructor
         * @param {proto.IJoinTableResponse=} [properties] Properties to set
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
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.tableId = "";

        /**
         * JoinTableResponse gameId.
         * @member {number} gameId
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameId = 0;

        /**
         * JoinTableResponse state.
         * @member {number} state
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.state = 0;

        /**
         * JoinTableResponse owner.
         * @member {number} owner
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.owner = 0;

        /**
         * JoinTableResponse currentRound.
         * @member {number} currentRound
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.currentRound = 0;

        /**
         * JoinTableResponse totalRound.
         * @member {number} totalRound
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.totalRound = 0;

        /**
         * JoinTableResponse gameInfo.
         * @member {string} gameInfo
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.gameInfo = "";

        /**
         * JoinTableResponse applicant.
         * @member {number} applicant
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.applicant = 0;

        /**
         * JoinTableResponse applyTime.
         * @member {number} applyTime
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.applyTime = 0;

        /**
         * JoinTableResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JoinTableResponse users.
         * @member {Array.<proto.IUser>} users
         * @memberof proto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @function create
         * @memberof proto.JoinTableResponse
         * @static
         * @param {proto.IJoinTableResponse=} [properties] Properties to set
         * @returns {proto.JoinTableResponse} JoinTableResponse instance
         */
        JoinTableResponse.create = function create(properties) {
            return new JoinTableResponse(properties);
        };

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link proto.JoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.JoinTableResponse
         * @static
         * @param {proto.IJoinTableResponse} message JoinTableResponse message or plain object to encode
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
                    $root.proto.User.encode(message.users[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link proto.JoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.JoinTableResponse
         * @static
         * @param {proto.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.JoinTableResponse();
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
                    message.users.push($root.proto.User.decode(reader, reader.uint32()));
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
         * @memberof proto.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.JoinTableResponse} JoinTableResponse
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
         * @memberof proto.JoinTableResponse
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
                    var error = $root.proto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.JoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.JoinTableResponse} JoinTableResponse
         */
        JoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.JoinTableResponse)
                return object;
            var message = new $root.proto.JoinTableResponse();
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
                    throw TypeError(".proto.JoinTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.JoinTableResponse.users: object expected");
                    message.users[i] = $root.proto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.JoinTableResponse
         * @static
         * @param {proto.JoinTableResponse} message JoinTableResponse
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
                    object.users[j] = $root.proto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinTableResponse to JSON.
         * @function toJSON
         * @memberof proto.JoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResponse;
    })();

    proto.SendJoinTableResponse = (function() {

        /**
         * Properties of a SendJoinTableResponse.
         * @memberof proto
         * @interface ISendJoinTableResponse
         * @property {proto.IUser|null} [user] SendJoinTableResponse user
         */

        /**
         * Constructs a new SendJoinTableResponse.
         * @memberof proto
         * @classdesc Represents a SendJoinTableResponse.
         * @implements ISendJoinTableResponse
         * @constructor
         * @param {proto.ISendJoinTableResponse=} [properties] Properties to set
         */
        function SendJoinTableResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendJoinTableResponse user.
         * @member {proto.IUser|null|undefined} user
         * @memberof proto.SendJoinTableResponse
         * @instance
         */
        SendJoinTableResponse.prototype.user = null;

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {proto.ISendJoinTableResponse=} [properties] Properties to set
         * @returns {proto.SendJoinTableResponse} SendJoinTableResponse instance
         */
        SendJoinTableResponse.create = function create(properties) {
            return new SendJoinTableResponse(properties);
        };

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link proto.SendJoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {proto.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.proto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link proto.SendJoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {proto.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendJoinTableResponse} SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendJoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendJoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.proto.User.decode(reader, reader.uint32());
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
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendJoinTableResponse} SendJoinTableResponse
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
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendJoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.proto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a SendJoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendJoinTableResponse} SendJoinTableResponse
         */
        SendJoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendJoinTableResponse)
                return object;
            var message = new $root.proto.SendJoinTableResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".proto.SendJoinTableResponse.user: object expected");
                message.user = $root.proto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendJoinTableResponse
         * @static
         * @param {proto.SendJoinTableResponse} message SendJoinTableResponse
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
                object.user = $root.proto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this SendJoinTableResponse to JSON.
         * @function toJSON
         * @memberof proto.SendJoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendJoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendJoinTableResponse;
    })();

    proto.SendUserReadyResponse = (function() {

        /**
         * Properties of a SendUserReadyResponse.
         * @memberof proto
         * @interface ISendUserReadyResponse
         * @property {number|null} [userId] SendUserReadyResponse userId
         * @property {number|null} [state] SendUserReadyResponse state
         * @property {Array.<proto.IUserReady>|null} [users] SendUserReadyResponse users
         */

        /**
         * Constructs a new SendUserReadyResponse.
         * @memberof proto
         * @classdesc Represents a SendUserReadyResponse.
         * @implements ISendUserReadyResponse
         * @constructor
         * @param {proto.ISendUserReadyResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.userId = 0;

        /**
         * SendUserReadyResponse state.
         * @member {number} state
         * @memberof proto.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.state = 0;

        /**
         * SendUserReadyResponse users.
         * @member {Array.<proto.IUserReady>} users
         * @memberof proto.SendUserReadyResponse
         * @instance
         */
        SendUserReadyResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendUserReadyResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {proto.ISendUserReadyResponse=} [properties] Properties to set
         * @returns {proto.SendUserReadyResponse} SendUserReadyResponse instance
         */
        SendUserReadyResponse.create = function create(properties) {
            return new SendUserReadyResponse(properties);
        };

        /**
         * Encodes the specified SendUserReadyResponse message. Does not implicitly {@link proto.SendUserReadyResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {proto.ISendUserReadyResponse} message SendUserReadyResponse message or plain object to encode
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
                    $root.proto.UserReady.encode(message.users[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendUserReadyResponse message, length delimited. Does not implicitly {@link proto.SendUserReadyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {proto.ISendUserReadyResponse} message SendUserReadyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReadyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReadyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserReadyResponse} SendUserReadyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReadyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserReadyResponse();
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
                    message.users.push($root.proto.UserReady.decode(reader, reader.uint32()));
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
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserReadyResponse} SendUserReadyResponse
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
         * @memberof proto.SendUserReadyResponse
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
                    var error = $root.proto.UserReady.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendUserReadyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserReadyResponse} SendUserReadyResponse
         */
        SendUserReadyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserReadyResponse)
                return object;
            var message = new $root.proto.SendUserReadyResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".proto.SendUserReadyResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.SendUserReadyResponse.users: object expected");
                    message.users[i] = $root.proto.UserReady.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendUserReadyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendUserReadyResponse
         * @static
         * @param {proto.SendUserReadyResponse} message SendUserReadyResponse
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
                    object.users[j] = $root.proto.UserReady.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendUserReadyResponse to JSON.
         * @function toJSON
         * @memberof proto.SendUserReadyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReadyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReadyResponse;
    })();

    proto.SendCardsResponse = (function() {

        /**
         * Properties of a SendCardsResponse.
         * @memberof proto
         * @interface ISendCardsResponse
         * @property {number|null} [zhuangPos] SendCardsResponse zhuangPos
         * @property {number|null} [currentRound] SendCardsResponse currentRound
         * @property {number|null} [state] SendCardsResponse state
         * @property {number|null} [nextDiscardPos] SendCardsResponse nextDiscardPos
         * @property {string|null} [gameInfo] SendCardsResponse gameInfo
         * @property {number|null} [totalRound] SendCardsResponse totalRound
         * @property {Array.<proto.IUser>|null} [users] SendCardsResponse users
         * @property {number|null} [piaoPai] SendCardsResponse piaoPai
         * @property {number|null} [piaoPaiPosition] SendCardsResponse piaoPaiPosition
         */

        /**
         * Constructs a new SendCardsResponse.
         * @memberof proto
         * @classdesc Represents a SendCardsResponse.
         * @implements ISendCardsResponse
         * @constructor
         * @param {proto.ISendCardsResponse=} [properties] Properties to set
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
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.zhuangPos = 0;

        /**
         * SendCardsResponse currentRound.
         * @member {number} currentRound
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.currentRound = 0;

        /**
         * SendCardsResponse state.
         * @member {number} state
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.state = 0;

        /**
         * SendCardsResponse nextDiscardPos.
         * @member {number} nextDiscardPos
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.nextDiscardPos = 0;

        /**
         * SendCardsResponse gameInfo.
         * @member {string} gameInfo
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.gameInfo = "";

        /**
         * SendCardsResponse totalRound.
         * @member {number} totalRound
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.totalRound = 0;

        /**
         * SendCardsResponse users.
         * @member {Array.<proto.IUser>} users
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.users = $util.emptyArray;

        /**
         * SendCardsResponse piaoPai.
         * @member {number} piaoPai
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.piaoPai = 0;

        /**
         * SendCardsResponse piaoPaiPosition.
         * @member {number} piaoPaiPosition
         * @memberof proto.SendCardsResponse
         * @instance
         */
        SendCardsResponse.prototype.piaoPaiPosition = 0;

        /**
         * Creates a new SendCardsResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendCardsResponse
         * @static
         * @param {proto.ISendCardsResponse=} [properties] Properties to set
         * @returns {proto.SendCardsResponse} SendCardsResponse instance
         */
        SendCardsResponse.create = function create(properties) {
            return new SendCardsResponse(properties);
        };

        /**
         * Encodes the specified SendCardsResponse message. Does not implicitly {@link proto.SendCardsResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendCardsResponse
         * @static
         * @param {proto.ISendCardsResponse} message SendCardsResponse message or plain object to encode
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
                    $root.proto.User.encode(message.users[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.piaoPai != null && message.hasOwnProperty("piaoPai"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.piaoPai);
            if (message.piaoPaiPosition != null && message.hasOwnProperty("piaoPaiPosition"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.piaoPaiPosition);
            return writer;
        };

        /**
         * Encodes the specified SendCardsResponse message, length delimited. Does not implicitly {@link proto.SendCardsResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendCardsResponse
         * @static
         * @param {proto.ISendCardsResponse} message SendCardsResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCardsResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCardsResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendCardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendCardsResponse} SendCardsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCardsResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendCardsResponse();
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
                    message.users.push($root.proto.User.decode(reader, reader.uint32()));
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
         * @memberof proto.SendCardsResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendCardsResponse} SendCardsResponse
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
         * @memberof proto.SendCardsResponse
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
                    var error = $root.proto.User.verify(message.users[i]);
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
         * @memberof proto.SendCardsResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendCardsResponse} SendCardsResponse
         */
        SendCardsResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendCardsResponse)
                return object;
            var message = new $root.proto.SendCardsResponse();
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
                    throw TypeError(".proto.SendCardsResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.SendCardsResponse.users: object expected");
                    message.users[i] = $root.proto.User.fromObject(object.users[i]);
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
         * @memberof proto.SendCardsResponse
         * @static
         * @param {proto.SendCardsResponse} message SendCardsResponse
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
                    object.users[j] = $root.proto.User.toObject(message.users[j], options);
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
         * @memberof proto.SendCardsResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCardsResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCardsResponse;
    })();

    proto.SendDisCardResponse = (function() {

        /**
         * Properties of a SendDisCardResponse.
         * @memberof proto
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
         * @memberof proto
         * @classdesc Represents a SendDisCardResponse.
         * @implements ISendDisCardResponse
         * @constructor
         * @param {proto.ISendDisCardResponse=} [properties] Properties to set
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
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.userId = 0;

        /**
         * SendDisCardResponse handCards.
         * @member {Array.<number>} handCards
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.handCards = $util.emptyArray;

        /**
         * SendDisCardResponse outCards.
         * @member {Array.<number>} outCards
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.outCards = $util.emptyArray;

        /**
         * SendDisCardResponse changeCards.
         * @member {Array.<number>} changeCards
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.changeCards = $util.emptyArray;

        /**
         * SendDisCardResponse nextPlayer.
         * @member {number} nextPlayer
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.nextPlayer = 0;

        /**
         * SendDisCardResponse lastPlayer.
         * @member {number} lastPlayer
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.lastPlayer = 0;

        /**
         * SendDisCardResponse currTimes.
         * @member {number} currTimes
         * @memberof proto.SendDisCardResponse
         * @instance
         */
        SendDisCardResponse.prototype.currTimes = 0;

        /**
         * Creates a new SendDisCardResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {proto.ISendDisCardResponse=} [properties] Properties to set
         * @returns {proto.SendDisCardResponse} SendDisCardResponse instance
         */
        SendDisCardResponse.create = function create(properties) {
            return new SendDisCardResponse(properties);
        };

        /**
         * Encodes the specified SendDisCardResponse message. Does not implicitly {@link proto.SendDisCardResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {proto.ISendDisCardResponse} message SendDisCardResponse message or plain object to encode
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
         * Encodes the specified SendDisCardResponse message, length delimited. Does not implicitly {@link proto.SendDisCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {proto.ISendDisCardResponse} message SendDisCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDisCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDisCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendDisCardResponse} SendDisCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDisCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendDisCardResponse();
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
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendDisCardResponse} SendDisCardResponse
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
         * @memberof proto.SendDisCardResponse
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
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendDisCardResponse} SendDisCardResponse
         */
        SendDisCardResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendDisCardResponse)
                return object;
            var message = new $root.proto.SendDisCardResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.handCards) {
                if (!Array.isArray(object.handCards))
                    throw TypeError(".proto.SendDisCardResponse.handCards: array expected");
                message.handCards = [];
                for (var i = 0; i < object.handCards.length; ++i)
                    message.handCards[i] = object.handCards[i] | 0;
            }
            if (object.outCards) {
                if (!Array.isArray(object.outCards))
                    throw TypeError(".proto.SendDisCardResponse.outCards: array expected");
                message.outCards = [];
                for (var i = 0; i < object.outCards.length; ++i)
                    message.outCards[i] = object.outCards[i] | 0;
            }
            if (object.changeCards) {
                if (!Array.isArray(object.changeCards))
                    throw TypeError(".proto.SendDisCardResponse.changeCards: array expected");
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
         * @memberof proto.SendDisCardResponse
         * @static
         * @param {proto.SendDisCardResponse} message SendDisCardResponse
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
         * @memberof proto.SendDisCardResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDisCardResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDisCardResponse;
    })();

    proto.SendPassPaiResponse = (function() {

        /**
         * Properties of a SendPassPaiResponse.
         * @memberof proto
         * @interface ISendPassPaiResponse
         * @property {number|null} [userId] SendPassPaiResponse userId
         * @property {number|null} [nextPlayer] SendPassPaiResponse nextPlayer
         * @property {number|null} [lastPlayer] SendPassPaiResponse lastPlayer
         */

        /**
         * Constructs a new SendPassPaiResponse.
         * @memberof proto
         * @classdesc Represents a SendPassPaiResponse.
         * @implements ISendPassPaiResponse
         * @constructor
         * @param {proto.ISendPassPaiResponse=} [properties] Properties to set
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
         * @memberof proto.SendPassPaiResponse
         * @instance
         */
        SendPassPaiResponse.prototype.userId = 0;

        /**
         * SendPassPaiResponse nextPlayer.
         * @member {number} nextPlayer
         * @memberof proto.SendPassPaiResponse
         * @instance
         */
        SendPassPaiResponse.prototype.nextPlayer = 0;

        /**
         * SendPassPaiResponse lastPlayer.
         * @member {number} lastPlayer
         * @memberof proto.SendPassPaiResponse
         * @instance
         */
        SendPassPaiResponse.prototype.lastPlayer = 0;

        /**
         * Creates a new SendPassPaiResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {proto.ISendPassPaiResponse=} [properties] Properties to set
         * @returns {proto.SendPassPaiResponse} SendPassPaiResponse instance
         */
        SendPassPaiResponse.create = function create(properties) {
            return new SendPassPaiResponse(properties);
        };

        /**
         * Encodes the specified SendPassPaiResponse message. Does not implicitly {@link proto.SendPassPaiResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {proto.ISendPassPaiResponse} message SendPassPaiResponse message or plain object to encode
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
         * Encodes the specified SendPassPaiResponse message, length delimited. Does not implicitly {@link proto.SendPassPaiResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {proto.ISendPassPaiResponse} message SendPassPaiResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPassPaiResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPassPaiResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendPassPaiResponse} SendPassPaiResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPassPaiResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendPassPaiResponse();
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
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendPassPaiResponse} SendPassPaiResponse
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
         * @memberof proto.SendPassPaiResponse
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
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendPassPaiResponse} SendPassPaiResponse
         */
        SendPassPaiResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendPassPaiResponse)
                return object;
            var message = new $root.proto.SendPassPaiResponse();
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
         * @memberof proto.SendPassPaiResponse
         * @static
         * @param {proto.SendPassPaiResponse} message SendPassPaiResponse
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
         * @memberof proto.SendPassPaiResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPassPaiResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendPassPaiResponse;
    })();

    proto.SendReconnectQuitResponse = (function() {

        /**
         * Properties of a SendReconnectQuitResponse.
         * @memberof proto
         * @interface ISendReconnectQuitResponse
         * @property {number|null} [userId] SendReconnectQuitResponse userId
         */

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @memberof proto
         * @classdesc Represents a SendReconnectQuitResponse.
         * @implements ISendReconnectQuitResponse
         * @constructor
         * @param {proto.ISendReconnectQuitResponse=} [properties] Properties to set
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
         * @memberof proto.SendReconnectQuitResponse
         * @instance
         */
        SendReconnectQuitResponse.prototype.userId = 0;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {proto.ISendReconnectQuitResponse=} [properties] Properties to set
         * @returns {proto.SendReconnectQuitResponse} SendReconnectQuitResponse instance
         */
        SendReconnectQuitResponse.create = function create(properties) {
            return new SendReconnectQuitResponse(properties);
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link proto.SendReconnectQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {proto.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
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
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link proto.SendReconnectQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {proto.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendReconnectQuitResponse();
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
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendReconnectQuitResponse} SendReconnectQuitResponse
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
         * @memberof proto.SendReconnectQuitResponse
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
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendReconnectQuitResponse} SendReconnectQuitResponse
         */
        SendReconnectQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendReconnectQuitResponse)
                return object;
            var message = new $root.proto.SendReconnectQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendReconnectQuitResponse
         * @static
         * @param {proto.SendReconnectQuitResponse} message SendReconnectQuitResponse
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
         * @memberof proto.SendReconnectQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReconnectQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReconnectQuitResponse;
    })();

    proto.UserReconnectResponse = (function() {

        /**
         * Properties of a UserReconnectResponse.
         * @memberof proto
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
         * @property {proto.IResultData|null} [resultData] UserReconnectResponse resultData
         * @property {Array.<proto.IUser>|null} [users] UserReconnectResponse users
         * @property {number|null} [beilv] UserReconnectResponse beilv
         * @property {number|null} [passPaiCount] UserReconnectResponse passPaiCount
         */

        /**
         * Constructs a new UserReconnectResponse.
         * @memberof proto
         * @classdesc Represents a UserReconnectResponse.
         * @implements IUserReconnectResponse
         * @constructor
         * @param {proto.IUserReconnectResponse=} [properties] Properties to set
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
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.tableId = "";

        /**
         * UserReconnectResponse gameId.
         * @member {number} gameId
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameId = 0;

        /**
         * UserReconnectResponse state.
         * @member {number} state
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.state = 0;

        /**
         * UserReconnectResponse owner.
         * @member {number} owner
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.owner = 0;

        /**
         * UserReconnectResponse currentRound.
         * @member {number} currentRound
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currentRound = 0;

        /**
         * UserReconnectResponse totalRound.
         * @member {number} totalRound
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.totalRound = 0;

        /**
         * UserReconnectResponse gameInfo.
         * @member {string} gameInfo
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.gameInfo = "";

        /**
         * UserReconnectResponse applicant.
         * @member {number} applicant
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.applicant = 0;

        /**
         * UserReconnectResponse applyTime.
         * @member {number} applyTime
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.applyTime = 0;

        /**
         * UserReconnectResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserReconnectResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.zhuangPos = 0;

        /**
         * UserReconnectResponse discardPos.
         * @member {number} discardPos
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.discardPos = 0;

        /**
         * UserReconnectResponse nextDiscardPos.
         * @member {number} nextDiscardPos
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.nextDiscardPos = 0;

        /**
         * UserReconnectResponse curQDZPos.
         * @member {number} curQDZPos
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.curQDZPos = 0;

        /**
         * UserReconnectResponse godCard.
         * @member {number} godCard
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.godCard = 0;

        /**
         * UserReconnectResponse leftCards.
         * @member {Array.<number>} leftCards
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.leftCards = $util.emptyArray;

        /**
         * UserReconnectResponse callScoreInfo.
         * @member {Array.<number>} callScoreInfo
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.callScoreInfo = $util.emptyArray;

        /**
         * UserReconnectResponse currBaseScore.
         * @member {number} currBaseScore
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currBaseScore = 0;

        /**
         * UserReconnectResponse currTimes.
         * @member {number} currTimes
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.currTimes = 0;

        /**
         * UserReconnectResponse resultData.
         * @member {proto.IResultData|null|undefined} resultData
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.resultData = null;

        /**
         * UserReconnectResponse users.
         * @member {Array.<proto.IUser>} users
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.users = $util.emptyArray;

        /**
         * UserReconnectResponse beilv.
         * @member {number} beilv
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.beilv = 0;

        /**
         * UserReconnectResponse passPaiCount.
         * @member {number} passPaiCount
         * @memberof proto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.passPaiCount = 0;

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {proto.IUserReconnectResponse=} [properties] Properties to set
         * @returns {proto.UserReconnectResponse} UserReconnectResponse instance
         */
        UserReconnectResponse.create = function create(properties) {
            return new UserReconnectResponse(properties);
        };

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link proto.UserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {proto.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
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
                $root.proto.ResultData.encode(message.resultData, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.proto.User.encode(message.users[i], writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.beilv != null && message.hasOwnProperty("beilv"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.beilv);
            if (message.passPaiCount != null && message.hasOwnProperty("passPaiCount"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.passPaiCount);
            return writer;
        };

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link proto.UserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {proto.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UserReconnectResponse();
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
                    message.resultData = $root.proto.ResultData.decode(reader, reader.uint32());
                    break;
                case 21:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.proto.User.decode(reader, reader.uint32()));
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
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.UserReconnectResponse} UserReconnectResponse
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
         * @memberof proto.UserReconnectResponse
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
                var error = $root.proto.ResultData.verify(message.resultData);
                if (error)
                    return "resultData." + error;
            }
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.proto.User.verify(message.users[i]);
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
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.UserReconnectResponse} UserReconnectResponse
         */
        UserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.UserReconnectResponse)
                return object;
            var message = new $root.proto.UserReconnectResponse();
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
                    throw TypeError(".proto.UserReconnectResponse.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.callScoreInfo) {
                if (!Array.isArray(object.callScoreInfo))
                    throw TypeError(".proto.UserReconnectResponse.callScoreInfo: array expected");
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
                    throw TypeError(".proto.UserReconnectResponse.resultData: object expected");
                message.resultData = $root.proto.ResultData.fromObject(object.resultData);
            }
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".proto.UserReconnectResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.UserReconnectResponse.users: object expected");
                    message.users[i] = $root.proto.User.fromObject(object.users[i]);
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
         * @memberof proto.UserReconnectResponse
         * @static
         * @param {proto.UserReconnectResponse} message UserReconnectResponse
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
                object.resultData = $root.proto.ResultData.toObject(message.resultData, options);
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.proto.User.toObject(message.users[j], options);
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
         * @memberof proto.UserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectResponse;
    })();

    proto.SendUserReconnectResponse = (function() {

        /**
         * Properties of a SendUserReconnectResponse.
         * @memberof proto
         * @interface ISendUserReconnectResponse
         * @property {number|null} [userId] SendUserReconnectResponse userId
         * @property {number|null} [onLine] SendUserReconnectResponse onLine
         */

        /**
         * Constructs a new SendUserReconnectResponse.
         * @memberof proto
         * @classdesc Represents a SendUserReconnectResponse.
         * @implements ISendUserReconnectResponse
         * @constructor
         * @param {proto.ISendUserReconnectResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.userId = 0;

        /**
         * SendUserReconnectResponse onLine.
         * @member {number} onLine
         * @memberof proto.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.onLine = 0;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {proto.ISendUserReconnectResponse=} [properties] Properties to set
         * @returns {proto.SendUserReconnectResponse} SendUserReconnectResponse instance
         */
        SendUserReconnectResponse.create = function create(properties) {
            return new SendUserReconnectResponse(properties);
        };

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link proto.SendUserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {proto.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
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
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link proto.SendUserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {proto.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserReconnectResponse();
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
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserReconnectResponse} SendUserReconnectResponse
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
         * @memberof proto.SendUserReconnectResponse
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
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserReconnectResponse} SendUserReconnectResponse
         */
        SendUserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserReconnectResponse)
                return object;
            var message = new $root.proto.SendUserReconnectResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendUserReconnectResponse
         * @static
         * @param {proto.SendUserReconnectResponse} message SendUserReconnectResponse
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
         * @memberof proto.SendUserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReconnectResponse;
    })();

    proto.SendApplyDismissResponse = (function() {

        /**
         * Properties of a SendApplyDismissResponse.
         * @memberof proto
         * @interface ISendApplyDismissResponse
         * @property {number|null} [userId] SendApplyDismissResponse userId
         * @property {number|null} [applicant] SendApplyDismissResponse applicant
         * @property {number|null} [agree] SendApplyDismissResponse agree
         * @property {number|null} [applyTime] SendApplyDismissResponse applyTime
         * @property {number|Long|null} [startApplyTime] SendApplyDismissResponse startApplyTime
         */

        /**
         * Constructs a new SendApplyDismissResponse.
         * @memberof proto
         * @classdesc Represents a SendApplyDismissResponse.
         * @implements ISendApplyDismissResponse
         * @constructor
         * @param {proto.ISendApplyDismissResponse=} [properties] Properties to set
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
         * @memberof proto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.userId = 0;

        /**
         * SendApplyDismissResponse applicant.
         * @member {number} applicant
         * @memberof proto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.applicant = 0;

        /**
         * SendApplyDismissResponse agree.
         * @member {number} agree
         * @memberof proto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.agree = 0;

        /**
         * SendApplyDismissResponse applyTime.
         * @member {number} applyTime
         * @memberof proto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.applyTime = 0;

        /**
         * SendApplyDismissResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof proto.SendApplyDismissResponse
         * @instance
         */
        SendApplyDismissResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendApplyDismissResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {proto.ISendApplyDismissResponse=} [properties] Properties to set
         * @returns {proto.SendApplyDismissResponse} SendApplyDismissResponse instance
         */
        SendApplyDismissResponse.create = function create(properties) {
            return new SendApplyDismissResponse(properties);
        };

        /**
         * Encodes the specified SendApplyDismissResponse message. Does not implicitly {@link proto.SendApplyDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {proto.ISendApplyDismissResponse} message SendApplyDismissResponse message or plain object to encode
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
         * Encodes the specified SendApplyDismissResponse message, length delimited. Does not implicitly {@link proto.SendApplyDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {proto.ISendApplyDismissResponse} message SendApplyDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendApplyDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendApplyDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendApplyDismissResponse} SendApplyDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendApplyDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendApplyDismissResponse();
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
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendApplyDismissResponse} SendApplyDismissResponse
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
         * @memberof proto.SendApplyDismissResponse
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
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendApplyDismissResponse} SendApplyDismissResponse
         */
        SendApplyDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendApplyDismissResponse)
                return object;
            var message = new $root.proto.SendApplyDismissResponse();
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
         * @memberof proto.SendApplyDismissResponse
         * @static
         * @param {proto.SendApplyDismissResponse} message SendApplyDismissResponse
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
         * @memberof proto.SendApplyDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendApplyDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendApplyDismissResponse;
    })();

    proto.SendAgreeDismissResponse = (function() {

        /**
         * Properties of a SendAgreeDismissResponse.
         * @memberof proto
         * @interface ISendAgreeDismissResponse
         * @property {number|null} [agree] SendAgreeDismissResponse agree
         * @property {number|null} [userId] SendAgreeDismissResponse userId
         * @property {number|null} [applicant] SendAgreeDismissResponse applicant
         */

        /**
         * Constructs a new SendAgreeDismissResponse.
         * @memberof proto
         * @classdesc Represents a SendAgreeDismissResponse.
         * @implements ISendAgreeDismissResponse
         * @constructor
         * @param {proto.ISendAgreeDismissResponse=} [properties] Properties to set
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
         * @memberof proto.SendAgreeDismissResponse
         * @instance
         */
        SendAgreeDismissResponse.prototype.agree = 0;

        /**
         * SendAgreeDismissResponse userId.
         * @member {number} userId
         * @memberof proto.SendAgreeDismissResponse
         * @instance
         */
        SendAgreeDismissResponse.prototype.userId = 0;

        /**
         * SendAgreeDismissResponse applicant.
         * @member {number} applicant
         * @memberof proto.SendAgreeDismissResponse
         * @instance
         */
        SendAgreeDismissResponse.prototype.applicant = 0;

        /**
         * Creates a new SendAgreeDismissResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {proto.ISendAgreeDismissResponse=} [properties] Properties to set
         * @returns {proto.SendAgreeDismissResponse} SendAgreeDismissResponse instance
         */
        SendAgreeDismissResponse.create = function create(properties) {
            return new SendAgreeDismissResponse(properties);
        };

        /**
         * Encodes the specified SendAgreeDismissResponse message. Does not implicitly {@link proto.SendAgreeDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {proto.ISendAgreeDismissResponse} message SendAgreeDismissResponse message or plain object to encode
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
         * Encodes the specified SendAgreeDismissResponse message, length delimited. Does not implicitly {@link proto.SendAgreeDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {proto.ISendAgreeDismissResponse} message SendAgreeDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendAgreeDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendAgreeDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendAgreeDismissResponse} SendAgreeDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendAgreeDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendAgreeDismissResponse();
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
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendAgreeDismissResponse} SendAgreeDismissResponse
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
         * @memberof proto.SendAgreeDismissResponse
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
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendAgreeDismissResponse} SendAgreeDismissResponse
         */
        SendAgreeDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendAgreeDismissResponse)
                return object;
            var message = new $root.proto.SendAgreeDismissResponse();
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
         * @memberof proto.SendAgreeDismissResponse
         * @static
         * @param {proto.SendAgreeDismissResponse} message SendAgreeDismissResponse
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
         * @memberof proto.SendAgreeDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendAgreeDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendAgreeDismissResponse;
    })();

    proto.SendDismissResultResponse = (function() {

        /**
         * Properties of a SendDismissResultResponse.
         * @memberof proto
         * @interface ISendDismissResultResponse
         * @property {number|null} [applicant] SendDismissResultResponse applicant
         * @property {number|null} [res] SendDismissResultResponse res
         * @property {number|null} [notAgreeUserId] SendDismissResultResponse notAgreeUserId
         */

        /**
         * Constructs a new SendDismissResultResponse.
         * @memberof proto
         * @classdesc Represents a SendDismissResultResponse.
         * @implements ISendDismissResultResponse
         * @constructor
         * @param {proto.ISendDismissResultResponse=} [properties] Properties to set
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
         * @memberof proto.SendDismissResultResponse
         * @instance
         */
        SendDismissResultResponse.prototype.applicant = 0;

        /**
         * SendDismissResultResponse res.
         * @member {number} res
         * @memberof proto.SendDismissResultResponse
         * @instance
         */
        SendDismissResultResponse.prototype.res = 0;

        /**
         * SendDismissResultResponse notAgreeUserId.
         * @member {number} notAgreeUserId
         * @memberof proto.SendDismissResultResponse
         * @instance
         */
        SendDismissResultResponse.prototype.notAgreeUserId = 0;

        /**
         * Creates a new SendDismissResultResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {proto.ISendDismissResultResponse=} [properties] Properties to set
         * @returns {proto.SendDismissResultResponse} SendDismissResultResponse instance
         */
        SendDismissResultResponse.create = function create(properties) {
            return new SendDismissResultResponse(properties);
        };

        /**
         * Encodes the specified SendDismissResultResponse message. Does not implicitly {@link proto.SendDismissResultResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {proto.ISendDismissResultResponse} message SendDismissResultResponse message or plain object to encode
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
         * Encodes the specified SendDismissResultResponse message, length delimited. Does not implicitly {@link proto.SendDismissResultResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {proto.ISendDismissResultResponse} message SendDismissResultResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDismissResultResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDismissResultResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendDismissResultResponse} SendDismissResultResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDismissResultResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendDismissResultResponse();
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
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendDismissResultResponse} SendDismissResultResponse
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
         * @memberof proto.SendDismissResultResponse
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
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendDismissResultResponse} SendDismissResultResponse
         */
        SendDismissResultResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendDismissResultResponse)
                return object;
            var message = new $root.proto.SendDismissResultResponse();
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
         * @memberof proto.SendDismissResultResponse
         * @static
         * @param {proto.SendDismissResultResponse} message SendDismissResultResponse
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
         * @memberof proto.SendDismissResultResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDismissResultResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDismissResultResponse;
    })();

    proto.SendUserQuitResponse = (function() {

        /**
         * Properties of a SendUserQuitResponse.
         * @memberof proto
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
         * @memberof proto
         * @classdesc Represents a SendUserQuitResponse.
         * @implements ISendUserQuitResponse
         * @constructor
         * @param {proto.ISendUserQuitResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.userId = 0;

        /**
         * SendUserQuitResponse isOwnerQuit.
         * @member {boolean} isOwnerQuit
         * @memberof proto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.isOwnerQuit = false;

        /**
         * SendUserQuitResponse nickname.
         * @member {string} nickname
         * @memberof proto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.nickname = "";

        /**
         * SendUserQuitResponse position.
         * @member {number} position
         * @memberof proto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.position = 0;

        /**
         * SendUserQuitResponse message.
         * @member {string} message
         * @memberof proto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.message = "";

        /**
         * SendUserQuitResponse tableId.
         * @member {string} tableId
         * @memberof proto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.tableId = "";

        /**
         * Creates a new SendUserQuitResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {proto.ISendUserQuitResponse=} [properties] Properties to set
         * @returns {proto.SendUserQuitResponse} SendUserQuitResponse instance
         */
        SendUserQuitResponse.create = function create(properties) {
            return new SendUserQuitResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link proto.SendUserQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {proto.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
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
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link proto.SendUserQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {proto.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserQuitResponse} SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserQuitResponse();
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
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserQuitResponse} SendUserQuitResponse
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
         * @memberof proto.SendUserQuitResponse
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
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserQuitResponse} SendUserQuitResponse
         */
        SendUserQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserQuitResponse)
                return object;
            var message = new $root.proto.SendUserQuitResponse();
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
         * @memberof proto.SendUserQuitResponse
         * @static
         * @param {proto.SendUserQuitResponse} message SendUserQuitResponse
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
         * @memberof proto.SendUserQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitResponse;
    })();

    proto.SendMessageResponse = (function() {

        /**
         * Properties of a SendMessageResponse.
         * @memberof proto
         * @interface ISendMessageResponse
         * @property {number|null} [userId] SendMessageResponse userId
         * @property {string|null} [content] SendMessageResponse content
         * @property {number|null} [toUserId] SendMessageResponse toUserId
         */

        /**
         * Constructs a new SendMessageResponse.
         * @memberof proto
         * @classdesc Represents a SendMessageResponse.
         * @implements ISendMessageResponse
         * @constructor
         * @param {proto.ISendMessageResponse=} [properties] Properties to set
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
         * @memberof proto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.userId = 0;

        /**
         * SendMessageResponse content.
         * @member {string} content
         * @memberof proto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.content = "";

        /**
         * SendMessageResponse toUserId.
         * @member {number} toUserId
         * @memberof proto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.toUserId = 0;

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendMessageResponse
         * @static
         * @param {proto.ISendMessageResponse=} [properties] Properties to set
         * @returns {proto.SendMessageResponse} SendMessageResponse instance
         */
        SendMessageResponse.create = function create(properties) {
            return new SendMessageResponse(properties);
        };

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link proto.SendMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendMessageResponse
         * @static
         * @param {proto.ISendMessageResponse} message SendMessageResponse message or plain object to encode
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
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link proto.SendMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendMessageResponse
         * @static
         * @param {proto.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendMessageResponse();
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
         * @memberof proto.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendMessageResponse} SendMessageResponse
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
         * @memberof proto.SendMessageResponse
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
         * @memberof proto.SendMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendMessageResponse} SendMessageResponse
         */
        SendMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendMessageResponse)
                return object;
            var message = new $root.proto.SendMessageResponse();
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
         * @memberof proto.SendMessageResponse
         * @static
         * @param {proto.SendMessageResponse} message SendMessageResponse
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
         * @memberof proto.SendMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMessageResponse;
    })();

    proto.SendCoinRefreshResponse = (function() {

        /**
         * Properties of a SendCoinRefreshResponse.
         * @memberof proto
         * @interface ISendCoinRefreshResponse
         * @property {number|null} [userId] SendCoinRefreshResponse userId
         * @property {number|null} [coin] SendCoinRefreshResponse coin
         */

        /**
         * Constructs a new SendCoinRefreshResponse.
         * @memberof proto
         * @classdesc Represents a SendCoinRefreshResponse.
         * @implements ISendCoinRefreshResponse
         * @constructor
         * @param {proto.ISendCoinRefreshResponse=} [properties] Properties to set
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
         * @memberof proto.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.userId = 0;

        /**
         * SendCoinRefreshResponse coin.
         * @member {number} coin
         * @memberof proto.SendCoinRefreshResponse
         * @instance
         */
        SendCoinRefreshResponse.prototype.coin = 0;

        /**
         * Creates a new SendCoinRefreshResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {proto.ISendCoinRefreshResponse=} [properties] Properties to set
         * @returns {proto.SendCoinRefreshResponse} SendCoinRefreshResponse instance
         */
        SendCoinRefreshResponse.create = function create(properties) {
            return new SendCoinRefreshResponse(properties);
        };

        /**
         * Encodes the specified SendCoinRefreshResponse message. Does not implicitly {@link proto.SendCoinRefreshResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {proto.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
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
         * Encodes the specified SendCoinRefreshResponse message, length delimited. Does not implicitly {@link proto.SendCoinRefreshResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {proto.ISendCoinRefreshResponse} message SendCoinRefreshResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCoinRefreshResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCoinRefreshResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendCoinRefreshResponse} SendCoinRefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCoinRefreshResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendCoinRefreshResponse();
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
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendCoinRefreshResponse} SendCoinRefreshResponse
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
         * @memberof proto.SendCoinRefreshResponse
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
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendCoinRefreshResponse} SendCoinRefreshResponse
         */
        SendCoinRefreshResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendCoinRefreshResponse)
                return object;
            var message = new $root.proto.SendCoinRefreshResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendCoinRefreshResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendCoinRefreshResponse
         * @static
         * @param {proto.SendCoinRefreshResponse} message SendCoinRefreshResponse
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
         * @memberof proto.SendCoinRefreshResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCoinRefreshResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCoinRefreshResponse;
    })();

    proto.SendUserOnBackResponse = (function() {

        /**
         * Properties of a SendUserOnBackResponse.
         * @memberof proto
         * @interface ISendUserOnBackResponse
         * @property {number|null} [userId] SendUserOnBackResponse userId
         * @property {number|null} [leaveState] SendUserOnBackResponse leaveState
         */

        /**
         * Constructs a new SendUserOnBackResponse.
         * @memberof proto
         * @classdesc Represents a SendUserOnBackResponse.
         * @implements ISendUserOnBackResponse
         * @constructor
         * @param {proto.ISendUserOnBackResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.userId = 0;

        /**
         * SendUserOnBackResponse leaveState.
         * @member {number} leaveState
         * @memberof proto.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.leaveState = 0;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {proto.ISendUserOnBackResponse=} [properties] Properties to set
         * @returns {proto.SendUserOnBackResponse} SendUserOnBackResponse instance
         */
        SendUserOnBackResponse.create = function create(properties) {
            return new SendUserOnBackResponse(properties);
        };

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link proto.SendUserOnBackResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {proto.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
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
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link proto.SendUserOnBackResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {proto.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserOnBackResponse();
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
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserOnBackResponse} SendUserOnBackResponse
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
         * @memberof proto.SendUserOnBackResponse
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
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserOnBackResponse} SendUserOnBackResponse
         */
        SendUserOnBackResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserOnBackResponse)
                return object;
            var message = new $root.proto.SendUserOnBackResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.leaveState != null)
                message.leaveState = object.leaveState | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendUserOnBackResponse
         * @static
         * @param {proto.SendUserOnBackResponse} message SendUserOnBackResponse
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
         * @memberof proto.SendUserOnBackResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserOnBackResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserOnBackResponse;
    })();

    proto.SendRoundRecordResponse = (function() {

        /**
         * Properties of a SendRoundRecordResponse.
         * @memberof proto
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
         * @property {Array.<proto.IUser>|null} [users] SendRoundRecordResponse users
         */

        /**
         * Constructs a new SendRoundRecordResponse.
         * @memberof proto
         * @classdesc Represents a SendRoundRecordResponse.
         * @implements ISendRoundRecordResponse
         * @constructor
         * @param {proto.ISendRoundRecordResponse=} [properties] Properties to set
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
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.tableId = "";

        /**
         * SendRoundRecordResponse gameId.
         * @member {number} gameId
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.gameId = 0;

        /**
         * SendRoundRecordResponse state.
         * @member {number} state
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.state = 0;

        /**
         * SendRoundRecordResponse owner.
         * @member {number} owner
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.owner = 0;

        /**
         * SendRoundRecordResponse currentRound.
         * @member {number} currentRound
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.currentRound = 0;

        /**
         * SendRoundRecordResponse totalRound.
         * @member {number} totalRound
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.totalRound = 0;

        /**
         * SendRoundRecordResponse gameInfo.
         * @member {string} gameInfo
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.gameInfo = "";

        /**
         * SendRoundRecordResponse applicant.
         * @member {number} applicant
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.applicant = 0;

        /**
         * SendRoundRecordResponse applyTime.
         * @member {number} applyTime
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.applyTime = 0;

        /**
         * SendRoundRecordResponse startApplyTime.
         * @member {number|Long} startApplyTime
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.startApplyTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendRoundRecordResponse zhuangPos.
         * @member {number} zhuangPos
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.zhuangPos = 0;

        /**
         * SendRoundRecordResponse discardPos.
         * @member {number} discardPos
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.discardPos = 0;

        /**
         * SendRoundRecordResponse nextDiscardPos.
         * @member {number} nextDiscardPos
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.nextDiscardPos = 0;

        /**
         * SendRoundRecordResponse curQDZPos.
         * @member {number} curQDZPos
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.curQDZPos = 0;

        /**
         * SendRoundRecordResponse godCard.
         * @member {number} godCard
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.godCard = 0;

        /**
         * SendRoundRecordResponse leftCards.
         * @member {Array.<number>} leftCards
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.leftCards = $util.emptyArray;

        /**
         * SendRoundRecordResponse callScoreInfo.
         * @member {Array.<number>} callScoreInfo
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.callScoreInfo = $util.emptyArray;

        /**
         * SendRoundRecordResponse currBaseScore.
         * @member {number} currBaseScore
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.currBaseScore = 0;

        /**
         * SendRoundRecordResponse currTimes.
         * @member {number} currTimes
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.currTimes = 0;

        /**
         * SendRoundRecordResponse isOver.
         * @member {number} isOver
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.isOver = 0;

        /**
         * SendRoundRecordResponse time.
         * @member {string} time
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.time = "";

        /**
         * SendRoundRecordResponse winners.
         * @member {number} winners
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.winners = 0;

        /**
         * SendRoundRecordResponse springInfo.
         * @member {number} springInfo
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.springInfo = 0;

        /**
         * SendRoundRecordResponse users.
         * @member {Array.<proto.IUser>} users
         * @memberof proto.SendRoundRecordResponse
         * @instance
         */
        SendRoundRecordResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendRoundRecordResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {proto.ISendRoundRecordResponse=} [properties] Properties to set
         * @returns {proto.SendRoundRecordResponse} SendRoundRecordResponse instance
         */
        SendRoundRecordResponse.create = function create(properties) {
            return new SendRoundRecordResponse(properties);
        };

        /**
         * Encodes the specified SendRoundRecordResponse message. Does not implicitly {@link proto.SendRoundRecordResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {proto.ISendRoundRecordResponse} message SendRoundRecordResponse message or plain object to encode
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
                    $root.proto.User.encode(message.users[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendRoundRecordResponse message, length delimited. Does not implicitly {@link proto.SendRoundRecordResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {proto.ISendRoundRecordResponse} message SendRoundRecordResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRoundRecordResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRoundRecordResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendRoundRecordResponse} SendRoundRecordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRoundRecordResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendRoundRecordResponse();
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
                    message.users.push($root.proto.User.decode(reader, reader.uint32()));
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
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendRoundRecordResponse} SendRoundRecordResponse
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
         * @memberof proto.SendRoundRecordResponse
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
                    var error = $root.proto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendRoundRecordResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendRoundRecordResponse} SendRoundRecordResponse
         */
        SendRoundRecordResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendRoundRecordResponse)
                return object;
            var message = new $root.proto.SendRoundRecordResponse();
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
                    throw TypeError(".proto.SendRoundRecordResponse.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.callScoreInfo) {
                if (!Array.isArray(object.callScoreInfo))
                    throw TypeError(".proto.SendRoundRecordResponse.callScoreInfo: array expected");
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
                    throw TypeError(".proto.SendRoundRecordResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.SendRoundRecordResponse.users: object expected");
                    message.users[i] = $root.proto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendRoundRecordResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendRoundRecordResponse
         * @static
         * @param {proto.SendRoundRecordResponse} message SendRoundRecordResponse
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
                    object.users[j] = $root.proto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendRoundRecordResponse to JSON.
         * @function toJSON
         * @memberof proto.SendRoundRecordResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRoundRecordResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRoundRecordResponse;
    })();

    proto.SendGameOverResponse = (function() {

        /**
         * Properties of a SendGameOverResponse.
         * @memberof proto
         * @interface ISendGameOverResponse
         * @property {number|null} [state] SendGameOverResponse state
         * @property {number|null} [owner] SendGameOverResponse owner
         * @property {number|null} [totalRound] SendGameOverResponse totalRound
         * @property {number|null} [currentRound] SendGameOverResponse currentRound
         * @property {string|null} [time] SendGameOverResponse time
         * @property {number|null} [agId] SendGameOverResponse agId
         * @property {number|null} [ruleId] SendGameOverResponse ruleId
         * @property {Array.<proto.IUser>|null} [users] SendGameOverResponse users
         */

        /**
         * Constructs a new SendGameOverResponse.
         * @memberof proto
         * @classdesc Represents a SendGameOverResponse.
         * @implements ISendGameOverResponse
         * @constructor
         * @param {proto.ISendGameOverResponse=} [properties] Properties to set
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
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.state = 0;

        /**
         * SendGameOverResponse owner.
         * @member {number} owner
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.owner = 0;

        /**
         * SendGameOverResponse totalRound.
         * @member {number} totalRound
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.totalRound = 0;

        /**
         * SendGameOverResponse currentRound.
         * @member {number} currentRound
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.currentRound = 0;

        /**
         * SendGameOverResponse time.
         * @member {string} time
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.time = "";

        /**
         * SendGameOverResponse agId.
         * @member {number} agId
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.agId = 0;

        /**
         * SendGameOverResponse ruleId.
         * @member {number} ruleId
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.ruleId = 0;

        /**
         * SendGameOverResponse users.
         * @member {Array.<proto.IUser>} users
         * @memberof proto.SendGameOverResponse
         * @instance
         */
        SendGameOverResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new SendGameOverResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {proto.ISendGameOverResponse=} [properties] Properties to set
         * @returns {proto.SendGameOverResponse} SendGameOverResponse instance
         */
        SendGameOverResponse.create = function create(properties) {
            return new SendGameOverResponse(properties);
        };

        /**
         * Encodes the specified SendGameOverResponse message. Does not implicitly {@link proto.SendGameOverResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {proto.ISendGameOverResponse} message SendGameOverResponse message or plain object to encode
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
                    $root.proto.User.encode(message.users[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendGameOverResponse message, length delimited. Does not implicitly {@link proto.SendGameOverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {proto.ISendGameOverResponse} message SendGameOverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendGameOverResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendGameOverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendGameOverResponse} SendGameOverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendGameOverResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendGameOverResponse();
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
                    message.users.push($root.proto.User.decode(reader, reader.uint32()));
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
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendGameOverResponse} SendGameOverResponse
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
         * @memberof proto.SendGameOverResponse
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
                    var error = $root.proto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SendGameOverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendGameOverResponse} SendGameOverResponse
         */
        SendGameOverResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendGameOverResponse)
                return object;
            var message = new $root.proto.SendGameOverResponse();
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
                    throw TypeError(".proto.SendGameOverResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".proto.SendGameOverResponse.users: object expected");
                    message.users[i] = $root.proto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SendGameOverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendGameOverResponse
         * @static
         * @param {proto.SendGameOverResponse} message SendGameOverResponse
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
                    object.users[j] = $root.proto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this SendGameOverResponse to JSON.
         * @function toJSON
         * @memberof proto.SendGameOverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendGameOverResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendGameOverResponse;
    })();

    proto.SendUserQDZResponse = (function() {

        /**
         * Properties of a SendUserQDZResponse.
         * @memberof proto
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
         * @memberof proto
         * @classdesc Represents a SendUserQDZResponse.
         * @implements ISendUserQDZResponse
         * @constructor
         * @param {proto.ISendUserQDZResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.round = 0;

        /**
         * SendUserQDZResponse difen.
         * @member {number} difen
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.difen = 0;

        /**
         * SendUserQDZResponse score.
         * @member {number} score
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.score = 0;

        /**
         * SendUserQDZResponse position.
         * @member {number} position
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.position = 0;

        /**
         * SendUserQDZResponse nextPosition.
         * @member {number} nextPosition
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.nextPosition = 0;

        /**
         * SendUserQDZResponse lastPosition.
         * @member {number} lastPosition
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.lastPosition = 0;

        /**
         * SendUserQDZResponse passPaiCount.
         * @member {number} passPaiCount
         * @memberof proto.SendUserQDZResponse
         * @instance
         */
        SendUserQDZResponse.prototype.passPaiCount = 0;

        /**
         * Creates a new SendUserQDZResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {proto.ISendUserQDZResponse=} [properties] Properties to set
         * @returns {proto.SendUserQDZResponse} SendUserQDZResponse instance
         */
        SendUserQDZResponse.create = function create(properties) {
            return new SendUserQDZResponse(properties);
        };

        /**
         * Encodes the specified SendUserQDZResponse message. Does not implicitly {@link proto.SendUserQDZResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {proto.ISendUserQDZResponse} message SendUserQDZResponse message or plain object to encode
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
         * Encodes the specified SendUserQDZResponse message, length delimited. Does not implicitly {@link proto.SendUserQDZResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {proto.ISendUserQDZResponse} message SendUserQDZResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQDZResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQDZResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserQDZResponse} SendUserQDZResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQDZResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserQDZResponse();
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
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserQDZResponse} SendUserQDZResponse
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
         * @memberof proto.SendUserQDZResponse
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
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserQDZResponse} SendUserQDZResponse
         */
        SendUserQDZResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserQDZResponse)
                return object;
            var message = new $root.proto.SendUserQDZResponse();
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
         * @memberof proto.SendUserQDZResponse
         * @static
         * @param {proto.SendUserQDZResponse} message SendUserQDZResponse
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
         * @memberof proto.SendUserQDZResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQDZResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQDZResponse;
    })();

    proto.SendUserQDZ2Response = (function() {

        /**
         * Properties of a SendUserQDZ2Response.
         * @memberof proto
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
         * @memberof proto
         * @classdesc Represents a SendUserQDZ2Response.
         * @implements ISendUserQDZ2Response
         * @constructor
         * @param {proto.ISendUserQDZ2Response=} [properties] Properties to set
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
         * @memberof proto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.round = 0;

        /**
         * SendUserQDZ2Response difen.
         * @member {number} difen
         * @memberof proto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.difen = 0;

        /**
         * SendUserQDZ2Response position.
         * @member {number} position
         * @memberof proto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.position = 0;

        /**
         * SendUserQDZ2Response godCard.
         * @member {number} godCard
         * @memberof proto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.godCard = 0;

        /**
         * SendUserQDZ2Response leftCards.
         * @member {Array.<number>} leftCards
         * @memberof proto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.leftCards = $util.emptyArray;

        /**
         * SendUserQDZ2Response lordHandCards.
         * @member {Array.<number>} lordHandCards
         * @memberof proto.SendUserQDZ2Response
         * @instance
         */
        SendUserQDZ2Response.prototype.lordHandCards = $util.emptyArray;

        /**
         * Creates a new SendUserQDZ2Response instance using the specified properties.
         * @function create
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {proto.ISendUserQDZ2Response=} [properties] Properties to set
         * @returns {proto.SendUserQDZ2Response} SendUserQDZ2Response instance
         */
        SendUserQDZ2Response.create = function create(properties) {
            return new SendUserQDZ2Response(properties);
        };

        /**
         * Encodes the specified SendUserQDZ2Response message. Does not implicitly {@link proto.SendUserQDZ2Response.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {proto.ISendUserQDZ2Response} message SendUserQDZ2Response message or plain object to encode
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
         * Encodes the specified SendUserQDZ2Response message, length delimited. Does not implicitly {@link proto.SendUserQDZ2Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {proto.ISendUserQDZ2Response} message SendUserQDZ2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQDZ2Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQDZ2Response message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserQDZ2Response} SendUserQDZ2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQDZ2Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserQDZ2Response();
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
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserQDZ2Response} SendUserQDZ2Response
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
         * @memberof proto.SendUserQDZ2Response
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
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserQDZ2Response} SendUserQDZ2Response
         */
        SendUserQDZ2Response.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserQDZ2Response)
                return object;
            var message = new $root.proto.SendUserQDZ2Response();
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
                    throw TypeError(".proto.SendUserQDZ2Response.leftCards: array expected");
                message.leftCards = [];
                for (var i = 0; i < object.leftCards.length; ++i)
                    message.leftCards[i] = object.leftCards[i] | 0;
            }
            if (object.lordHandCards) {
                if (!Array.isArray(object.lordHandCards))
                    throw TypeError(".proto.SendUserQDZ2Response.lordHandCards: array expected");
                message.lordHandCards = [];
                for (var i = 0; i < object.lordHandCards.length; ++i)
                    message.lordHandCards[i] = object.lordHandCards[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SendUserQDZ2Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendUserQDZ2Response
         * @static
         * @param {proto.SendUserQDZ2Response} message SendUserQDZ2Response
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
         * @memberof proto.SendUserQDZ2Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQDZ2Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQDZ2Response;
    })();

    proto.SendUserMPResponse = (function() {

        /**
         * Properties of a SendUserMPResponse.
         * @memberof proto
         * @interface ISendUserMPResponse
         * @property {number|null} [showAll] SendUserMPResponse showAll
         * @property {Array.<number>|null} [cards] SendUserMPResponse cards
         * @property {number|null} [position] SendUserMPResponse position
         * @property {number|null} [currTimes] SendUserMPResponse currTimes
         */

        /**
         * Constructs a new SendUserMPResponse.
         * @memberof proto
         * @classdesc Represents a SendUserMPResponse.
         * @implements ISendUserMPResponse
         * @constructor
         * @param {proto.ISendUserMPResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.showAll = 0;

        /**
         * SendUserMPResponse cards.
         * @member {Array.<number>} cards
         * @memberof proto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.cards = $util.emptyArray;

        /**
         * SendUserMPResponse position.
         * @member {number} position
         * @memberof proto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.position = 0;

        /**
         * SendUserMPResponse currTimes.
         * @member {number} currTimes
         * @memberof proto.SendUserMPResponse
         * @instance
         */
        SendUserMPResponse.prototype.currTimes = 0;

        /**
         * Creates a new SendUserMPResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {proto.ISendUserMPResponse=} [properties] Properties to set
         * @returns {proto.SendUserMPResponse} SendUserMPResponse instance
         */
        SendUserMPResponse.create = function create(properties) {
            return new SendUserMPResponse(properties);
        };

        /**
         * Encodes the specified SendUserMPResponse message. Does not implicitly {@link proto.SendUserMPResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {proto.ISendUserMPResponse} message SendUserMPResponse message or plain object to encode
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
         * Encodes the specified SendUserMPResponse message, length delimited. Does not implicitly {@link proto.SendUserMPResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {proto.ISendUserMPResponse} message SendUserMPResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserMPResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserMPResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserMPResponse} SendUserMPResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserMPResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserMPResponse();
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
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserMPResponse} SendUserMPResponse
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
         * @memberof proto.SendUserMPResponse
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
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserMPResponse} SendUserMPResponse
         */
        SendUserMPResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserMPResponse)
                return object;
            var message = new $root.proto.SendUserMPResponse();
            if (object.showAll != null)
                message.showAll = object.showAll | 0;
            if (object.cards) {
                if (!Array.isArray(object.cards))
                    throw TypeError(".proto.SendUserMPResponse.cards: array expected");
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
         * @memberof proto.SendUserMPResponse
         * @static
         * @param {proto.SendUserMPResponse} message SendUserMPResponse
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
         * @memberof proto.SendUserMPResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserMPResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserMPResponse;
    })();

    proto.SendUserMP2Response = (function() {

        /**
         * Properties of a SendUserMP2Response.
         * @memberof proto
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
         * @memberof proto
         * @classdesc Represents a SendUserMP2Response.
         * @implements ISendUserMP2Response
         * @constructor
         * @param {proto.ISendUserMP2Response=} [properties] Properties to set
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
         * @memberof proto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.round = 0;

        /**
         * SendUserMP2Response difen.
         * @member {number} difen
         * @memberof proto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.difen = 0;

        /**
         * SendUserMP2Response position.
         * @member {number} position
         * @memberof proto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.position = 0;

        /**
         * SendUserMP2Response godCard.
         * @member {number} godCard
         * @memberof proto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.godCard = 0;

        /**
         * SendUserMP2Response leftCards.
         * @member {Array.<number>} leftCards
         * @memberof proto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.leftCards = $util.emptyArray;

        /**
         * SendUserMP2Response start.
         * @member {boolean} start
         * @memberof proto.SendUserMP2Response
         * @instance
         */
        SendUserMP2Response.prototype.start = false;

        /**
         * Creates a new SendUserMP2Response instance using the specified properties.
         * @function create
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {proto.ISendUserMP2Response=} [properties] Properties to set
         * @returns {proto.SendUserMP2Response} SendUserMP2Response instance
         */
        SendUserMP2Response.create = function create(properties) {
            return new SendUserMP2Response(properties);
        };

        /**
         * Encodes the specified SendUserMP2Response message. Does not implicitly {@link proto.SendUserMP2Response.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {proto.ISendUserMP2Response} message SendUserMP2Response message or plain object to encode
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
         * Encodes the specified SendUserMP2Response message, length delimited. Does not implicitly {@link proto.SendUserMP2Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {proto.ISendUserMP2Response} message SendUserMP2Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserMP2Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserMP2Response message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserMP2Response} SendUserMP2Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserMP2Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserMP2Response();
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
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserMP2Response} SendUserMP2Response
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
         * @memberof proto.SendUserMP2Response
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
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserMP2Response} SendUserMP2Response
         */
        SendUserMP2Response.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserMP2Response)
                return object;
            var message = new $root.proto.SendUserMP2Response();
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
                    throw TypeError(".proto.SendUserMP2Response.leftCards: array expected");
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
         * @memberof proto.SendUserMP2Response
         * @static
         * @param {proto.SendUserMP2Response} message SendUserMP2Response
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
         * @memberof proto.SendUserMP2Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserMP2Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserMP2Response;
    })();

    proto.SendDiamondChangeResponse = (function() {

        /**
         * Properties of a SendDiamondChangeResponse.
         * @memberof proto
         * @interface ISendDiamondChangeResponse
         * @property {number|null} [userId] SendDiamondChangeResponse userId
         * @property {number|null} [diamond] SendDiamondChangeResponse diamond
         */

        /**
         * Constructs a new SendDiamondChangeResponse.
         * @memberof proto
         * @classdesc Represents a SendDiamondChangeResponse.
         * @implements ISendDiamondChangeResponse
         * @constructor
         * @param {proto.ISendDiamondChangeResponse=} [properties] Properties to set
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
         * @memberof proto.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.userId = 0;

        /**
         * SendDiamondChangeResponse diamond.
         * @member {number} diamond
         * @memberof proto.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.diamond = 0;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {proto.ISendDiamondChangeResponse=} [properties] Properties to set
         * @returns {proto.SendDiamondChangeResponse} SendDiamondChangeResponse instance
         */
        SendDiamondChangeResponse.create = function create(properties) {
            return new SendDiamondChangeResponse(properties);
        };

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link proto.SendDiamondChangeResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {proto.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
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
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link proto.SendDiamondChangeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {proto.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDiamondChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendDiamondChangeResponse} SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDiamondChangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendDiamondChangeResponse();
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
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendDiamondChangeResponse} SendDiamondChangeResponse
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
         * @memberof proto.SendDiamondChangeResponse
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
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendDiamondChangeResponse} SendDiamondChangeResponse
         */
        SendDiamondChangeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendDiamondChangeResponse)
                return object;
            var message = new $root.proto.SendDiamondChangeResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendDiamondChangeResponse
         * @static
         * @param {proto.SendDiamondChangeResponse} message SendDiamondChangeResponse
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
         * @memberof proto.SendDiamondChangeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDiamondChangeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDiamondChangeResponse;
    })();

    proto.SendCancelAutoResponse = (function() {

        /**
         * Properties of a SendCancelAutoResponse.
         * @memberof proto
         * @interface ISendCancelAutoResponse
         * @property {number|null} [userId] SendCancelAutoResponse userId
         * @property {boolean|null} [isAuto] SendCancelAutoResponse isAuto
         */

        /**
         * Constructs a new SendCancelAutoResponse.
         * @memberof proto
         * @classdesc Represents a SendCancelAutoResponse.
         * @implements ISendCancelAutoResponse
         * @constructor
         * @param {proto.ISendCancelAutoResponse=} [properties] Properties to set
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
         * @memberof proto.SendCancelAutoResponse
         * @instance
         */
        SendCancelAutoResponse.prototype.userId = 0;

        /**
         * SendCancelAutoResponse isAuto.
         * @member {boolean} isAuto
         * @memberof proto.SendCancelAutoResponse
         * @instance
         */
        SendCancelAutoResponse.prototype.isAuto = false;

        /**
         * Creates a new SendCancelAutoResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {proto.ISendCancelAutoResponse=} [properties] Properties to set
         * @returns {proto.SendCancelAutoResponse} SendCancelAutoResponse instance
         */
        SendCancelAutoResponse.create = function create(properties) {
            return new SendCancelAutoResponse(properties);
        };

        /**
         * Encodes the specified SendCancelAutoResponse message. Does not implicitly {@link proto.SendCancelAutoResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {proto.ISendCancelAutoResponse} message SendCancelAutoResponse message or plain object to encode
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
         * Encodes the specified SendCancelAutoResponse message, length delimited. Does not implicitly {@link proto.SendCancelAutoResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {proto.ISendCancelAutoResponse} message SendCancelAutoResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendCancelAutoResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendCancelAutoResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendCancelAutoResponse} SendCancelAutoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendCancelAutoResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendCancelAutoResponse();
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
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendCancelAutoResponse} SendCancelAutoResponse
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
         * @memberof proto.SendCancelAutoResponse
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
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendCancelAutoResponse} SendCancelAutoResponse
         */
        SendCancelAutoResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendCancelAutoResponse)
                return object;
            var message = new $root.proto.SendCancelAutoResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.isAuto != null)
                message.isAuto = Boolean(object.isAuto);
            return message;
        };

        /**
         * Creates a plain object from a SendCancelAutoResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendCancelAutoResponse
         * @static
         * @param {proto.SendCancelAutoResponse} message SendCancelAutoResponse
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
         * @memberof proto.SendCancelAutoResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendCancelAutoResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendCancelAutoResponse;
    })();

    proto.DelayCheckResponse = (function() {

        /**
         * Properties of a DelayCheckResponse.
         * @memberof proto
         * @interface IDelayCheckResponse
         * @property {string|null} [content] DelayCheckResponse content
         */

        /**
         * Constructs a new DelayCheckResponse.
         * @memberof proto
         * @classdesc Represents a DelayCheckResponse.
         * @implements IDelayCheckResponse
         * @constructor
         * @param {proto.IDelayCheckResponse=} [properties] Properties to set
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
         * @memberof proto.DelayCheckResponse
         * @instance
         */
        DelayCheckResponse.prototype.content = "";

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @function create
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {proto.IDelayCheckResponse=} [properties] Properties to set
         * @returns {proto.DelayCheckResponse} DelayCheckResponse instance
         */
        DelayCheckResponse.create = function create(properties) {
            return new DelayCheckResponse(properties);
        };

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link proto.DelayCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {proto.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
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
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link proto.DelayCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {proto.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.DelayCheckResponse();
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
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.DelayCheckResponse} DelayCheckResponse
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
         * @memberof proto.DelayCheckResponse
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
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.DelayCheckResponse} DelayCheckResponse
         */
        DelayCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.DelayCheckResponse)
                return object;
            var message = new $root.proto.DelayCheckResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.DelayCheckResponse
         * @static
         * @param {proto.DelayCheckResponse} message DelayCheckResponse
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
         * @memberof proto.DelayCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckResponse;
    })();

    proto.SendNoticeClientDismissResponse = (function() {

        /**
         * Properties of a SendNoticeClientDismissResponse.
         * @memberof proto
         * @interface ISendNoticeClientDismissResponse
         * @property {number|null} [userId] SendNoticeClientDismissResponse userId
         */

        /**
         * Constructs a new SendNoticeClientDismissResponse.
         * @memberof proto
         * @classdesc Represents a SendNoticeClientDismissResponse.
         * @implements ISendNoticeClientDismissResponse
         * @constructor
         * @param {proto.ISendNoticeClientDismissResponse=} [properties] Properties to set
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
         * @memberof proto.SendNoticeClientDismissResponse
         * @instance
         */
        SendNoticeClientDismissResponse.prototype.userId = 0;

        /**
         * Creates a new SendNoticeClientDismissResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {proto.ISendNoticeClientDismissResponse=} [properties] Properties to set
         * @returns {proto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse instance
         */
        SendNoticeClientDismissResponse.create = function create(properties) {
            return new SendNoticeClientDismissResponse(properties);
        };

        /**
         * Encodes the specified SendNoticeClientDismissResponse message. Does not implicitly {@link proto.SendNoticeClientDismissResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {proto.ISendNoticeClientDismissResponse} message SendNoticeClientDismissResponse message or plain object to encode
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
         * Encodes the specified SendNoticeClientDismissResponse message, length delimited. Does not implicitly {@link proto.SendNoticeClientDismissResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {proto.ISendNoticeClientDismissResponse} message SendNoticeClientDismissResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendNoticeClientDismissResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendNoticeClientDismissResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendNoticeClientDismissResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendNoticeClientDismissResponse();
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
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
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
         * @memberof proto.SendNoticeClientDismissResponse
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
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendNoticeClientDismissResponse} SendNoticeClientDismissResponse
         */
        SendNoticeClientDismissResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendNoticeClientDismissResponse)
                return object;
            var message = new $root.proto.SendNoticeClientDismissResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendNoticeClientDismissResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendNoticeClientDismissResponse
         * @static
         * @param {proto.SendNoticeClientDismissResponse} message SendNoticeClientDismissResponse
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
         * @memberof proto.SendNoticeClientDismissResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendNoticeClientDismissResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendNoticeClientDismissResponse;
    })();

    proto.SendRemainTimeResponse = (function() {

        /**
         * Properties of a SendRemainTimeResponse.
         * @memberof proto
         * @interface ISendRemainTimeResponse
         * @property {number|null} [time] SendRemainTimeResponse time
         * @property {number|null} [type] SendRemainTimeResponse type
         * @property {number|null} [userId] SendRemainTimeResponse userId
         */

        /**
         * Constructs a new SendRemainTimeResponse.
         * @memberof proto
         * @classdesc Represents a SendRemainTimeResponse.
         * @implements ISendRemainTimeResponse
         * @constructor
         * @param {proto.ISendRemainTimeResponse=} [properties] Properties to set
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
         * @memberof proto.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.time = 0;

        /**
         * SendRemainTimeResponse type.
         * @member {number} type
         * @memberof proto.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.type = 0;

        /**
         * SendRemainTimeResponse userId.
         * @member {number} userId
         * @memberof proto.SendRemainTimeResponse
         * @instance
         */
        SendRemainTimeResponse.prototype.userId = 0;

        /**
         * Creates a new SendRemainTimeResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {proto.ISendRemainTimeResponse=} [properties] Properties to set
         * @returns {proto.SendRemainTimeResponse} SendRemainTimeResponse instance
         */
        SendRemainTimeResponse.create = function create(properties) {
            return new SendRemainTimeResponse(properties);
        };

        /**
         * Encodes the specified SendRemainTimeResponse message. Does not implicitly {@link proto.SendRemainTimeResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {proto.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
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
         * Encodes the specified SendRemainTimeResponse message, length delimited. Does not implicitly {@link proto.SendRemainTimeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {proto.ISendRemainTimeResponse} message SendRemainTimeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRemainTimeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRemainTimeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendRemainTimeResponse} SendRemainTimeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRemainTimeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendRemainTimeResponse();
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
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendRemainTimeResponse} SendRemainTimeResponse
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
         * @memberof proto.SendRemainTimeResponse
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
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendRemainTimeResponse} SendRemainTimeResponse
         */
        SendRemainTimeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendRemainTimeResponse)
                return object;
            var message = new $root.proto.SendRemainTimeResponse();
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
         * @memberof proto.SendRemainTimeResponse
         * @static
         * @param {proto.SendRemainTimeResponse} message SendRemainTimeResponse
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
         * @memberof proto.SendRemainTimeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRemainTimeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRemainTimeResponse;
    })();

    proto.SendUserQuitByAdminResponse = (function() {

        /**
         * Properties of a SendUserQuitByAdminResponse.
         * @memberof proto
         * @interface ISendUserQuitByAdminResponse
         * @property {number|null} [userId] SendUserQuitByAdminResponse userId
         */

        /**
         * Constructs a new SendUserQuitByAdminResponse.
         * @memberof proto
         * @classdesc Represents a SendUserQuitByAdminResponse.
         * @implements ISendUserQuitByAdminResponse
         * @constructor
         * @param {proto.ISendUserQuitByAdminResponse=} [properties] Properties to set
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
         * @memberof proto.SendUserQuitByAdminResponse
         * @instance
         */
        SendUserQuitByAdminResponse.prototype.userId = 0;

        /**
         * Creates a new SendUserQuitByAdminResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {proto.ISendUserQuitByAdminResponse=} [properties] Properties to set
         * @returns {proto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse instance
         */
        SendUserQuitByAdminResponse.create = function create(properties) {
            return new SendUserQuitByAdminResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitByAdminResponse message. Does not implicitly {@link proto.SendUserQuitByAdminResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {proto.ISendUserQuitByAdminResponse} message SendUserQuitByAdminResponse message or plain object to encode
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
         * Encodes the specified SendUserQuitByAdminResponse message, length delimited. Does not implicitly {@link proto.SendUserQuitByAdminResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {proto.ISendUserQuitByAdminResponse} message SendUserQuitByAdminResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitByAdminResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitByAdminResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitByAdminResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendUserQuitByAdminResponse();
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
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
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
         * @memberof proto.SendUserQuitByAdminResponse
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
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendUserQuitByAdminResponse} SendUserQuitByAdminResponse
         */
        SendUserQuitByAdminResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendUserQuitByAdminResponse)
                return object;
            var message = new $root.proto.SendUserQuitByAdminResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserQuitByAdminResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.SendUserQuitByAdminResponse
         * @static
         * @param {proto.SendUserQuitByAdminResponse} message SendUserQuitByAdminResponse
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
         * @memberof proto.SendUserQuitByAdminResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitByAdminResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitByAdminResponse;
    })();

    proto.SendHeartBeatResponse = (function() {

        /**
         * Properties of a SendHeartBeatResponse.
         * @memberof proto
         * @interface ISendHeartBeatResponse
         * @property {number|Long|null} [currentTime] SendHeartBeatResponse currentTime
         */

        /**
         * Constructs a new SendHeartBeatResponse.
         * @memberof proto
         * @classdesc Represents a SendHeartBeatResponse.
         * @implements ISendHeartBeatResponse
         * @constructor
         * @param {proto.ISendHeartBeatResponse=} [properties] Properties to set
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
         * @memberof proto.SendHeartBeatResponse
         * @instance
         */
        SendHeartBeatResponse.prototype.currentTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @function create
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {proto.ISendHeartBeatResponse=} [properties] Properties to set
         * @returns {proto.SendHeartBeatResponse} SendHeartBeatResponse instance
         */
        SendHeartBeatResponse.create = function create(properties) {
            return new SendHeartBeatResponse(properties);
        };

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link proto.SendHeartBeatResponse.verify|verify} messages.
         * @function encode
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {proto.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
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
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link proto.SendHeartBeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {proto.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SendHeartBeatResponse();
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
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.SendHeartBeatResponse} SendHeartBeatResponse
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
         * @memberof proto.SendHeartBeatResponse
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
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.SendHeartBeatResponse} SendHeartBeatResponse
         */
        SendHeartBeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.SendHeartBeatResponse)
                return object;
            var message = new $root.proto.SendHeartBeatResponse();
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
         * @memberof proto.SendHeartBeatResponse
         * @static
         * @param {proto.SendHeartBeatResponse} message SendHeartBeatResponse
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
         * @memberof proto.SendHeartBeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendHeartBeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendHeartBeatResponse;
    })();

    proto.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof proto
         * @interface IResponse
         * @property {string|null} [msg] Response msg
         * @property {proto.Response.ErrorCode|null} [code] Response code
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {proto.Request.CMD|null} [cmd] Response cmd
         * @property {proto.ILoginResponse|null} [loginResponse] Response loginResponse
         * @property {proto.IRegisterPhoneRespone|null} [registerPhoneResponse] Response registerPhoneResponse
         * @property {proto.IGetUserInfoResponse|null} [getUserInfoResponse] Response getUserInfoResponse
         * @property {proto.ICoinBankResponse|null} [coinBankResponse] Response coinBankResponse
         * @property {proto.IChangeSignResponse|null} [changeSignResponse] Response changeSignResponse
         * @property {proto.ISendDisCardResponse|null} [sendDisCardResponse] Response sendDisCardResponse
         * @property {proto.ISendPassPaiResponse|null} [sendPassPaiResponse] Response sendPassPaiResponse
         * @property {proto.ISendUserQDZResponse|null} [sendUserQDZResponse] Response sendUserQDZResponse
         * @property {proto.ISendUserQDZ2Response|null} [sendUserQDZ2Response] Response sendUserQDZ2Response
         * @property {proto.ISendUserMPResponse|null} [sendUserMPResponse] Response sendUserMPResponse
         * @property {proto.ISendUserMP2Response|null} [sendUserMP2Response] Response sendUserMP2Response
         * @property {proto.ISendRoundRecordResponse|null} [sendRoundRecordResponse] Response sendRoundRecordResponse
         * @property {proto.ISendReconnectQuitResponse|null} [sendReconnectQuitResponse] Response sendReconnectQuitResponse
         * @property {proto.IUserReconnectResponse|null} [userReconnectResponse] Response userReconnectResponse
         * @property {proto.ISendUserReconnectResponse|null} [sendUserReconnectResponse] Response sendUserReconnectResponse
         * @property {proto.ISendApplyDismissResponse|null} [sendApplyDismissResponse] Response sendApplyDismissResponse
         * @property {proto.ISendAgreeDismissResponse|null} [sendAgreeDismissResponse] Response sendAgreeDismissResponse
         * @property {proto.ISendDismissResultResponse|null} [sendDismissResultResponse] Response sendDismissResultResponse
         * @property {proto.ISendUserQuitResponse|null} [sendUserQuitResponse] Response sendUserQuitResponse
         * @property {proto.ISendMessageResponse|null} [sendMessageResponse] Response sendMessageResponse
         * @property {proto.ISendUserOnBackResponse|null} [sendUserOnBackResponse] Response sendUserOnBackResponse
         * @property {proto.ISendGameOverResponse|null} [sendGameOverResponse] Response sendGameOverResponse
         * @property {proto.ISendDiamondChangeResponse|null} [sendDiamondChangeResponse] Response sendDiamondChangeResponse
         * @property {proto.ISendCancelAutoResponse|null} [sendCancelAutoResponse] Response sendCancelAutoResponse
         * @property {proto.IDelayCheckResponse|null} [delayCheckResponse] Response delayCheckResponse
         * @property {proto.ISendRemainTimeResponse|null} [sendRemainTimeResponse] Response sendRemainTimeResponse
         * @property {proto.ISendNoticeClientDismissResponse|null} [sendNoticeClientDismissResponse] Response sendNoticeClientDismissResponse
         * @property {proto.ISendUserQuitByAdminResponse|null} [sendUserQuitByAdminResponse] Response sendUserQuitByAdminResponse
         * @property {proto.ISendCoinRefreshResponse|null} [sendCoinRefreshResponse] Response sendCoinRefreshResponse
         * @property {proto.ISendHeartBeatResponse|null} [sendHeartBeatResponse] Response sendHeartBeatResponse
         */

        /**
         * Constructs a new Response.
         * @memberof proto
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {proto.IResponse=} [properties] Properties to set
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
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.msg = "OK";

        /**
         * Response code.
         * @member {proto.Response.ErrorCode} code
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.code = 200;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {proto.Request.CMD} cmd
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response loginResponse.
         * @member {proto.ILoginResponse|null|undefined} loginResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.loginResponse = null;

        /**
         * Response registerPhoneResponse.
         * @member {proto.IRegisterPhoneRespone|null|undefined} registerPhoneResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.registerPhoneResponse = null;

        /**
         * Response getUserInfoResponse.
         * @member {proto.IGetUserInfoResponse|null|undefined} getUserInfoResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.getUserInfoResponse = null;

        /**
         * Response coinBankResponse.
         * @member {proto.ICoinBankResponse|null|undefined} coinBankResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.coinBankResponse = null;

        /**
         * Response changeSignResponse.
         * @member {proto.IChangeSignResponse|null|undefined} changeSignResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.changeSignResponse = null;

        /**
         * Response sendDisCardResponse.
         * @member {proto.ISendDisCardResponse|null|undefined} sendDisCardResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendDisCardResponse = null;

        /**
         * Response sendPassPaiResponse.
         * @member {proto.ISendPassPaiResponse|null|undefined} sendPassPaiResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendPassPaiResponse = null;

        /**
         * Response sendUserQDZResponse.
         * @member {proto.ISendUserQDZResponse|null|undefined} sendUserQDZResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserQDZResponse = null;

        /**
         * Response sendUserQDZ2Response.
         * @member {proto.ISendUserQDZ2Response|null|undefined} sendUserQDZ2Response
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserQDZ2Response = null;

        /**
         * Response sendUserMPResponse.
         * @member {proto.ISendUserMPResponse|null|undefined} sendUserMPResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserMPResponse = null;

        /**
         * Response sendUserMP2Response.
         * @member {proto.ISendUserMP2Response|null|undefined} sendUserMP2Response
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserMP2Response = null;

        /**
         * Response sendRoundRecordResponse.
         * @member {proto.ISendRoundRecordResponse|null|undefined} sendRoundRecordResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendRoundRecordResponse = null;

        /**
         * Response sendReconnectQuitResponse.
         * @member {proto.ISendReconnectQuitResponse|null|undefined} sendReconnectQuitResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendReconnectQuitResponse = null;

        /**
         * Response userReconnectResponse.
         * @member {proto.IUserReconnectResponse|null|undefined} userReconnectResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.userReconnectResponse = null;

        /**
         * Response sendUserReconnectResponse.
         * @member {proto.ISendUserReconnectResponse|null|undefined} sendUserReconnectResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserReconnectResponse = null;

        /**
         * Response sendApplyDismissResponse.
         * @member {proto.ISendApplyDismissResponse|null|undefined} sendApplyDismissResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendApplyDismissResponse = null;

        /**
         * Response sendAgreeDismissResponse.
         * @member {proto.ISendAgreeDismissResponse|null|undefined} sendAgreeDismissResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendAgreeDismissResponse = null;

        /**
         * Response sendDismissResultResponse.
         * @member {proto.ISendDismissResultResponse|null|undefined} sendDismissResultResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendDismissResultResponse = null;

        /**
         * Response sendUserQuitResponse.
         * @member {proto.ISendUserQuitResponse|null|undefined} sendUserQuitResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserQuitResponse = null;

        /**
         * Response sendMessageResponse.
         * @member {proto.ISendMessageResponse|null|undefined} sendMessageResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendMessageResponse = null;

        /**
         * Response sendUserOnBackResponse.
         * @member {proto.ISendUserOnBackResponse|null|undefined} sendUserOnBackResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserOnBackResponse = null;

        /**
         * Response sendGameOverResponse.
         * @member {proto.ISendGameOverResponse|null|undefined} sendGameOverResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendGameOverResponse = null;

        /**
         * Response sendDiamondChangeResponse.
         * @member {proto.ISendDiamondChangeResponse|null|undefined} sendDiamondChangeResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendDiamondChangeResponse = null;

        /**
         * Response sendCancelAutoResponse.
         * @member {proto.ISendCancelAutoResponse|null|undefined} sendCancelAutoResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendCancelAutoResponse = null;

        /**
         * Response delayCheckResponse.
         * @member {proto.IDelayCheckResponse|null|undefined} delayCheckResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.delayCheckResponse = null;

        /**
         * Response sendRemainTimeResponse.
         * @member {proto.ISendRemainTimeResponse|null|undefined} sendRemainTimeResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendRemainTimeResponse = null;

        /**
         * Response sendNoticeClientDismissResponse.
         * @member {proto.ISendNoticeClientDismissResponse|null|undefined} sendNoticeClientDismissResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendNoticeClientDismissResponse = null;

        /**
         * Response sendUserQuitByAdminResponse.
         * @member {proto.ISendUserQuitByAdminResponse|null|undefined} sendUserQuitByAdminResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendUserQuitByAdminResponse = null;

        /**
         * Response sendCoinRefreshResponse.
         * @member {proto.ISendCoinRefreshResponse|null|undefined} sendCoinRefreshResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendCoinRefreshResponse = null;

        /**
         * Response sendHeartBeatResponse.
         * @member {proto.ISendHeartBeatResponse|null|undefined} sendHeartBeatResponse
         * @memberof proto.Response
         * @instance
         */
        Response.prototype.sendHeartBeatResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof proto.Response
         * @static
         * @param {proto.IResponse=} [properties] Properties to set
         * @returns {proto.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link proto.Response.verify|verify} messages.
         * @function encode
         * @memberof proto.Response
         * @static
         * @param {proto.IResponse} message Response message or plain object to encode
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
                $root.proto.LoginResponse.encode(message.loginResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.registerPhoneResponse != null && message.hasOwnProperty("registerPhoneResponse"))
                $root.proto.RegisterPhoneRespone.encode(message.registerPhoneResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.getUserInfoResponse != null && message.hasOwnProperty("getUserInfoResponse"))
                $root.proto.GetUserInfoResponse.encode(message.getUserInfoResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.coinBankResponse != null && message.hasOwnProperty("coinBankResponse"))
                $root.proto.CoinBankResponse.encode(message.coinBankResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.changeSignResponse != null && message.hasOwnProperty("changeSignResponse"))
                $root.proto.ChangeSignResponse.encode(message.changeSignResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.sendDisCardResponse != null && message.hasOwnProperty("sendDisCardResponse"))
                $root.proto.SendDisCardResponse.encode(message.sendDisCardResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.sendPassPaiResponse != null && message.hasOwnProperty("sendPassPaiResponse"))
                $root.proto.SendPassPaiResponse.encode(message.sendPassPaiResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.sendUserQDZResponse != null && message.hasOwnProperty("sendUserQDZResponse"))
                $root.proto.SendUserQDZResponse.encode(message.sendUserQDZResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.sendUserQDZ2Response != null && message.hasOwnProperty("sendUserQDZ2Response"))
                $root.proto.SendUserQDZ2Response.encode(message.sendUserQDZ2Response, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.sendUserMPResponse != null && message.hasOwnProperty("sendUserMPResponse"))
                $root.proto.SendUserMPResponse.encode(message.sendUserMPResponse, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.sendUserMP2Response != null && message.hasOwnProperty("sendUserMP2Response"))
                $root.proto.SendUserMP2Response.encode(message.sendUserMP2Response, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.sendRoundRecordResponse != null && message.hasOwnProperty("sendRoundRecordResponse"))
                $root.proto.SendRoundRecordResponse.encode(message.sendRoundRecordResponse, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                $root.proto.SendReconnectQuitResponse.encode(message.sendReconnectQuitResponse, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                $root.proto.UserReconnectResponse.encode(message.userReconnectResponse, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                $root.proto.SendUserReconnectResponse.encode(message.sendUserReconnectResponse, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
            if (message.sendApplyDismissResponse != null && message.hasOwnProperty("sendApplyDismissResponse"))
                $root.proto.SendApplyDismissResponse.encode(message.sendApplyDismissResponse, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.sendAgreeDismissResponse != null && message.hasOwnProperty("sendAgreeDismissResponse"))
                $root.proto.SendAgreeDismissResponse.encode(message.sendAgreeDismissResponse, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.sendDismissResultResponse != null && message.hasOwnProperty("sendDismissResultResponse"))
                $root.proto.SendDismissResultResponse.encode(message.sendDismissResultResponse, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                $root.proto.SendUserQuitResponse.encode(message.sendUserQuitResponse, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                $root.proto.SendMessageResponse.encode(message.sendMessageResponse, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                $root.proto.SendUserOnBackResponse.encode(message.sendUserOnBackResponse, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
            if (message.sendGameOverResponse != null && message.hasOwnProperty("sendGameOverResponse"))
                $root.proto.SendGameOverResponse.encode(message.sendGameOverResponse, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                $root.proto.SendDiamondChangeResponse.encode(message.sendDiamondChangeResponse, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
            if (message.sendCancelAutoResponse != null && message.hasOwnProperty("sendCancelAutoResponse"))
                $root.proto.SendCancelAutoResponse.encode(message.sendCancelAutoResponse, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                $root.proto.DelayCheckResponse.encode(message.delayCheckResponse, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                $root.proto.SendRemainTimeResponse.encode(message.sendRemainTimeResponse, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse"))
                $root.proto.SendNoticeClientDismissResponse.encode(message.sendNoticeClientDismissResponse, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse"))
                $root.proto.SendUserQuitByAdminResponse.encode(message.sendUserQuitByAdminResponse, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                $root.proto.SendCoinRefreshResponse.encode(message.sendCoinRefreshResponse, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                $root.proto.SendHeartBeatResponse.encode(message.sendHeartBeatResponse, writer.uint32(/* id 233, wireType 2 =*/1866).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link proto.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Response
         * @static
         * @param {proto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Response();
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
                    message.loginResponse = $root.proto.LoginResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.registerPhoneResponse = $root.proto.RegisterPhoneRespone.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.getUserInfoResponse = $root.proto.GetUserInfoResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.coinBankResponse = $root.proto.CoinBankResponse.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.changeSignResponse = $root.proto.ChangeSignResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.sendDisCardResponse = $root.proto.SendDisCardResponse.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.sendPassPaiResponse = $root.proto.SendPassPaiResponse.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.sendUserQDZResponse = $root.proto.SendUserQDZResponse.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.sendUserQDZ2Response = $root.proto.SendUserQDZ2Response.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.sendUserMPResponse = $root.proto.SendUserMPResponse.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.sendUserMP2Response = $root.proto.SendUserMP2Response.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.sendRoundRecordResponse = $root.proto.SendRoundRecordResponse.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.sendReconnectQuitResponse = $root.proto.SendReconnectQuitResponse.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.userReconnectResponse = $root.proto.UserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 27:
                    message.sendUserReconnectResponse = $root.proto.SendUserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 28:
                    message.sendApplyDismissResponse = $root.proto.SendApplyDismissResponse.decode(reader, reader.uint32());
                    break;
                case 29:
                    message.sendAgreeDismissResponse = $root.proto.SendAgreeDismissResponse.decode(reader, reader.uint32());
                    break;
                case 30:
                    message.sendDismissResultResponse = $root.proto.SendDismissResultResponse.decode(reader, reader.uint32());
                    break;
                case 31:
                    message.sendUserQuitResponse = $root.proto.SendUserQuitResponse.decode(reader, reader.uint32());
                    break;
                case 32:
                    message.sendMessageResponse = $root.proto.SendMessageResponse.decode(reader, reader.uint32());
                    break;
                case 33:
                    message.sendUserOnBackResponse = $root.proto.SendUserOnBackResponse.decode(reader, reader.uint32());
                    break;
                case 34:
                    message.sendGameOverResponse = $root.proto.SendGameOverResponse.decode(reader, reader.uint32());
                    break;
                case 35:
                    message.sendDiamondChangeResponse = $root.proto.SendDiamondChangeResponse.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.sendCancelAutoResponse = $root.proto.SendCancelAutoResponse.decode(reader, reader.uint32());
                    break;
                case 37:
                    message.delayCheckResponse = $root.proto.DelayCheckResponse.decode(reader, reader.uint32());
                    break;
                case 38:
                    message.sendRemainTimeResponse = $root.proto.SendRemainTimeResponse.decode(reader, reader.uint32());
                    break;
                case 39:
                    message.sendNoticeClientDismissResponse = $root.proto.SendNoticeClientDismissResponse.decode(reader, reader.uint32());
                    break;
                case 40:
                    message.sendUserQuitByAdminResponse = $root.proto.SendUserQuitByAdminResponse.decode(reader, reader.uint32());
                    break;
                case 41:
                    message.sendCoinRefreshResponse = $root.proto.SendCoinRefreshResponse.decode(reader, reader.uint32());
                    break;
                case 233:
                    message.sendHeartBeatResponse = $root.proto.SendHeartBeatResponse.decode(reader, reader.uint32());
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
         * @memberof proto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Response} Response
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
         * @memberof proto.Response
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
                var error = $root.proto.LoginResponse.verify(message.loginResponse);
                if (error)
                    return "loginResponse." + error;
            }
            if (message.registerPhoneResponse != null && message.hasOwnProperty("registerPhoneResponse")) {
                var error = $root.proto.RegisterPhoneRespone.verify(message.registerPhoneResponse);
                if (error)
                    return "registerPhoneResponse." + error;
            }
            if (message.getUserInfoResponse != null && message.hasOwnProperty("getUserInfoResponse")) {
                var error = $root.proto.GetUserInfoResponse.verify(message.getUserInfoResponse);
                if (error)
                    return "getUserInfoResponse." + error;
            }
            if (message.coinBankResponse != null && message.hasOwnProperty("coinBankResponse")) {
                var error = $root.proto.CoinBankResponse.verify(message.coinBankResponse);
                if (error)
                    return "coinBankResponse." + error;
            }
            if (message.changeSignResponse != null && message.hasOwnProperty("changeSignResponse")) {
                var error = $root.proto.ChangeSignResponse.verify(message.changeSignResponse);
                if (error)
                    return "changeSignResponse." + error;
            }
            if (message.sendDisCardResponse != null && message.hasOwnProperty("sendDisCardResponse")) {
                var error = $root.proto.SendDisCardResponse.verify(message.sendDisCardResponse);
                if (error)
                    return "sendDisCardResponse." + error;
            }
            if (message.sendPassPaiResponse != null && message.hasOwnProperty("sendPassPaiResponse")) {
                var error = $root.proto.SendPassPaiResponse.verify(message.sendPassPaiResponse);
                if (error)
                    return "sendPassPaiResponse." + error;
            }
            if (message.sendUserQDZResponse != null && message.hasOwnProperty("sendUserQDZResponse")) {
                var error = $root.proto.SendUserQDZResponse.verify(message.sendUserQDZResponse);
                if (error)
                    return "sendUserQDZResponse." + error;
            }
            if (message.sendUserQDZ2Response != null && message.hasOwnProperty("sendUserQDZ2Response")) {
                var error = $root.proto.SendUserQDZ2Response.verify(message.sendUserQDZ2Response);
                if (error)
                    return "sendUserQDZ2Response." + error;
            }
            if (message.sendUserMPResponse != null && message.hasOwnProperty("sendUserMPResponse")) {
                var error = $root.proto.SendUserMPResponse.verify(message.sendUserMPResponse);
                if (error)
                    return "sendUserMPResponse." + error;
            }
            if (message.sendUserMP2Response != null && message.hasOwnProperty("sendUserMP2Response")) {
                var error = $root.proto.SendUserMP2Response.verify(message.sendUserMP2Response);
                if (error)
                    return "sendUserMP2Response." + error;
            }
            if (message.sendRoundRecordResponse != null && message.hasOwnProperty("sendRoundRecordResponse")) {
                var error = $root.proto.SendRoundRecordResponse.verify(message.sendRoundRecordResponse);
                if (error)
                    return "sendRoundRecordResponse." + error;
            }
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse")) {
                var error = $root.proto.SendReconnectQuitResponse.verify(message.sendReconnectQuitResponse);
                if (error)
                    return "sendReconnectQuitResponse." + error;
            }
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse")) {
                var error = $root.proto.UserReconnectResponse.verify(message.userReconnectResponse);
                if (error)
                    return "userReconnectResponse." + error;
            }
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse")) {
                var error = $root.proto.SendUserReconnectResponse.verify(message.sendUserReconnectResponse);
                if (error)
                    return "sendUserReconnectResponse." + error;
            }
            if (message.sendApplyDismissResponse != null && message.hasOwnProperty("sendApplyDismissResponse")) {
                var error = $root.proto.SendApplyDismissResponse.verify(message.sendApplyDismissResponse);
                if (error)
                    return "sendApplyDismissResponse." + error;
            }
            if (message.sendAgreeDismissResponse != null && message.hasOwnProperty("sendAgreeDismissResponse")) {
                var error = $root.proto.SendAgreeDismissResponse.verify(message.sendAgreeDismissResponse);
                if (error)
                    return "sendAgreeDismissResponse." + error;
            }
            if (message.sendDismissResultResponse != null && message.hasOwnProperty("sendDismissResultResponse")) {
                var error = $root.proto.SendDismissResultResponse.verify(message.sendDismissResultResponse);
                if (error)
                    return "sendDismissResultResponse." + error;
            }
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse")) {
                var error = $root.proto.SendUserQuitResponse.verify(message.sendUserQuitResponse);
                if (error)
                    return "sendUserQuitResponse." + error;
            }
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse")) {
                var error = $root.proto.SendMessageResponse.verify(message.sendMessageResponse);
                if (error)
                    return "sendMessageResponse." + error;
            }
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse")) {
                var error = $root.proto.SendUserOnBackResponse.verify(message.sendUserOnBackResponse);
                if (error)
                    return "sendUserOnBackResponse." + error;
            }
            if (message.sendGameOverResponse != null && message.hasOwnProperty("sendGameOverResponse")) {
                var error = $root.proto.SendGameOverResponse.verify(message.sendGameOverResponse);
                if (error)
                    return "sendGameOverResponse." + error;
            }
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse")) {
                var error = $root.proto.SendDiamondChangeResponse.verify(message.sendDiamondChangeResponse);
                if (error)
                    return "sendDiamondChangeResponse." + error;
            }
            if (message.sendCancelAutoResponse != null && message.hasOwnProperty("sendCancelAutoResponse")) {
                var error = $root.proto.SendCancelAutoResponse.verify(message.sendCancelAutoResponse);
                if (error)
                    return "sendCancelAutoResponse." + error;
            }
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse")) {
                var error = $root.proto.DelayCheckResponse.verify(message.delayCheckResponse);
                if (error)
                    return "delayCheckResponse." + error;
            }
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse")) {
                var error = $root.proto.SendRemainTimeResponse.verify(message.sendRemainTimeResponse);
                if (error)
                    return "sendRemainTimeResponse." + error;
            }
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse")) {
                var error = $root.proto.SendNoticeClientDismissResponse.verify(message.sendNoticeClientDismissResponse);
                if (error)
                    return "sendNoticeClientDismissResponse." + error;
            }
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse")) {
                var error = $root.proto.SendUserQuitByAdminResponse.verify(message.sendUserQuitByAdminResponse);
                if (error)
                    return "sendUserQuitByAdminResponse." + error;
            }
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse")) {
                var error = $root.proto.SendCoinRefreshResponse.verify(message.sendCoinRefreshResponse);
                if (error)
                    return "sendCoinRefreshResponse." + error;
            }
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse")) {
                var error = $root.proto.SendHeartBeatResponse.verify(message.sendHeartBeatResponse);
                if (error)
                    return "sendHeartBeatResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Response)
                return object;
            var message = new $root.proto.Response();
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
                    throw TypeError(".proto.Response.loginResponse: object expected");
                message.loginResponse = $root.proto.LoginResponse.fromObject(object.loginResponse);
            }
            if (object.registerPhoneResponse != null) {
                if (typeof object.registerPhoneResponse !== "object")
                    throw TypeError(".proto.Response.registerPhoneResponse: object expected");
                message.registerPhoneResponse = $root.proto.RegisterPhoneRespone.fromObject(object.registerPhoneResponse);
            }
            if (object.getUserInfoResponse != null) {
                if (typeof object.getUserInfoResponse !== "object")
                    throw TypeError(".proto.Response.getUserInfoResponse: object expected");
                message.getUserInfoResponse = $root.proto.GetUserInfoResponse.fromObject(object.getUserInfoResponse);
            }
            if (object.coinBankResponse != null) {
                if (typeof object.coinBankResponse !== "object")
                    throw TypeError(".proto.Response.coinBankResponse: object expected");
                message.coinBankResponse = $root.proto.CoinBankResponse.fromObject(object.coinBankResponse);
            }
            if (object.changeSignResponse != null) {
                if (typeof object.changeSignResponse !== "object")
                    throw TypeError(".proto.Response.changeSignResponse: object expected");
                message.changeSignResponse = $root.proto.ChangeSignResponse.fromObject(object.changeSignResponse);
            }
            if (object.sendDisCardResponse != null) {
                if (typeof object.sendDisCardResponse !== "object")
                    throw TypeError(".proto.Response.sendDisCardResponse: object expected");
                message.sendDisCardResponse = $root.proto.SendDisCardResponse.fromObject(object.sendDisCardResponse);
            }
            if (object.sendPassPaiResponse != null) {
                if (typeof object.sendPassPaiResponse !== "object")
                    throw TypeError(".proto.Response.sendPassPaiResponse: object expected");
                message.sendPassPaiResponse = $root.proto.SendPassPaiResponse.fromObject(object.sendPassPaiResponse);
            }
            if (object.sendUserQDZResponse != null) {
                if (typeof object.sendUserQDZResponse !== "object")
                    throw TypeError(".proto.Response.sendUserQDZResponse: object expected");
                message.sendUserQDZResponse = $root.proto.SendUserQDZResponse.fromObject(object.sendUserQDZResponse);
            }
            if (object.sendUserQDZ2Response != null) {
                if (typeof object.sendUserQDZ2Response !== "object")
                    throw TypeError(".proto.Response.sendUserQDZ2Response: object expected");
                message.sendUserQDZ2Response = $root.proto.SendUserQDZ2Response.fromObject(object.sendUserQDZ2Response);
            }
            if (object.sendUserMPResponse != null) {
                if (typeof object.sendUserMPResponse !== "object")
                    throw TypeError(".proto.Response.sendUserMPResponse: object expected");
                message.sendUserMPResponse = $root.proto.SendUserMPResponse.fromObject(object.sendUserMPResponse);
            }
            if (object.sendUserMP2Response != null) {
                if (typeof object.sendUserMP2Response !== "object")
                    throw TypeError(".proto.Response.sendUserMP2Response: object expected");
                message.sendUserMP2Response = $root.proto.SendUserMP2Response.fromObject(object.sendUserMP2Response);
            }
            if (object.sendRoundRecordResponse != null) {
                if (typeof object.sendRoundRecordResponse !== "object")
                    throw TypeError(".proto.Response.sendRoundRecordResponse: object expected");
                message.sendRoundRecordResponse = $root.proto.SendRoundRecordResponse.fromObject(object.sendRoundRecordResponse);
            }
            if (object.sendReconnectQuitResponse != null) {
                if (typeof object.sendReconnectQuitResponse !== "object")
                    throw TypeError(".proto.Response.sendReconnectQuitResponse: object expected");
                message.sendReconnectQuitResponse = $root.proto.SendReconnectQuitResponse.fromObject(object.sendReconnectQuitResponse);
            }
            if (object.userReconnectResponse != null) {
                if (typeof object.userReconnectResponse !== "object")
                    throw TypeError(".proto.Response.userReconnectResponse: object expected");
                message.userReconnectResponse = $root.proto.UserReconnectResponse.fromObject(object.userReconnectResponse);
            }
            if (object.sendUserReconnectResponse != null) {
                if (typeof object.sendUserReconnectResponse !== "object")
                    throw TypeError(".proto.Response.sendUserReconnectResponse: object expected");
                message.sendUserReconnectResponse = $root.proto.SendUserReconnectResponse.fromObject(object.sendUserReconnectResponse);
            }
            if (object.sendApplyDismissResponse != null) {
                if (typeof object.sendApplyDismissResponse !== "object")
                    throw TypeError(".proto.Response.sendApplyDismissResponse: object expected");
                message.sendApplyDismissResponse = $root.proto.SendApplyDismissResponse.fromObject(object.sendApplyDismissResponse);
            }
            if (object.sendAgreeDismissResponse != null) {
                if (typeof object.sendAgreeDismissResponse !== "object")
                    throw TypeError(".proto.Response.sendAgreeDismissResponse: object expected");
                message.sendAgreeDismissResponse = $root.proto.SendAgreeDismissResponse.fromObject(object.sendAgreeDismissResponse);
            }
            if (object.sendDismissResultResponse != null) {
                if (typeof object.sendDismissResultResponse !== "object")
                    throw TypeError(".proto.Response.sendDismissResultResponse: object expected");
                message.sendDismissResultResponse = $root.proto.SendDismissResultResponse.fromObject(object.sendDismissResultResponse);
            }
            if (object.sendUserQuitResponse != null) {
                if (typeof object.sendUserQuitResponse !== "object")
                    throw TypeError(".proto.Response.sendUserQuitResponse: object expected");
                message.sendUserQuitResponse = $root.proto.SendUserQuitResponse.fromObject(object.sendUserQuitResponse);
            }
            if (object.sendMessageResponse != null) {
                if (typeof object.sendMessageResponse !== "object")
                    throw TypeError(".proto.Response.sendMessageResponse: object expected");
                message.sendMessageResponse = $root.proto.SendMessageResponse.fromObject(object.sendMessageResponse);
            }
            if (object.sendUserOnBackResponse != null) {
                if (typeof object.sendUserOnBackResponse !== "object")
                    throw TypeError(".proto.Response.sendUserOnBackResponse: object expected");
                message.sendUserOnBackResponse = $root.proto.SendUserOnBackResponse.fromObject(object.sendUserOnBackResponse);
            }
            if (object.sendGameOverResponse != null) {
                if (typeof object.sendGameOverResponse !== "object")
                    throw TypeError(".proto.Response.sendGameOverResponse: object expected");
                message.sendGameOverResponse = $root.proto.SendGameOverResponse.fromObject(object.sendGameOverResponse);
            }
            if (object.sendDiamondChangeResponse != null) {
                if (typeof object.sendDiamondChangeResponse !== "object")
                    throw TypeError(".proto.Response.sendDiamondChangeResponse: object expected");
                message.sendDiamondChangeResponse = $root.proto.SendDiamondChangeResponse.fromObject(object.sendDiamondChangeResponse);
            }
            if (object.sendCancelAutoResponse != null) {
                if (typeof object.sendCancelAutoResponse !== "object")
                    throw TypeError(".proto.Response.sendCancelAutoResponse: object expected");
                message.sendCancelAutoResponse = $root.proto.SendCancelAutoResponse.fromObject(object.sendCancelAutoResponse);
            }
            if (object.delayCheckResponse != null) {
                if (typeof object.delayCheckResponse !== "object")
                    throw TypeError(".proto.Response.delayCheckResponse: object expected");
                message.delayCheckResponse = $root.proto.DelayCheckResponse.fromObject(object.delayCheckResponse);
            }
            if (object.sendRemainTimeResponse != null) {
                if (typeof object.sendRemainTimeResponse !== "object")
                    throw TypeError(".proto.Response.sendRemainTimeResponse: object expected");
                message.sendRemainTimeResponse = $root.proto.SendRemainTimeResponse.fromObject(object.sendRemainTimeResponse);
            }
            if (object.sendNoticeClientDismissResponse != null) {
                if (typeof object.sendNoticeClientDismissResponse !== "object")
                    throw TypeError(".proto.Response.sendNoticeClientDismissResponse: object expected");
                message.sendNoticeClientDismissResponse = $root.proto.SendNoticeClientDismissResponse.fromObject(object.sendNoticeClientDismissResponse);
            }
            if (object.sendUserQuitByAdminResponse != null) {
                if (typeof object.sendUserQuitByAdminResponse !== "object")
                    throw TypeError(".proto.Response.sendUserQuitByAdminResponse: object expected");
                message.sendUserQuitByAdminResponse = $root.proto.SendUserQuitByAdminResponse.fromObject(object.sendUserQuitByAdminResponse);
            }
            if (object.sendCoinRefreshResponse != null) {
                if (typeof object.sendCoinRefreshResponse !== "object")
                    throw TypeError(".proto.Response.sendCoinRefreshResponse: object expected");
                message.sendCoinRefreshResponse = $root.proto.SendCoinRefreshResponse.fromObject(object.sendCoinRefreshResponse);
            }
            if (object.sendHeartBeatResponse != null) {
                if (typeof object.sendHeartBeatResponse !== "object")
                    throw TypeError(".proto.Response.sendHeartBeatResponse: object expected");
                message.sendHeartBeatResponse = $root.proto.SendHeartBeatResponse.fromObject(object.sendHeartBeatResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Response
         * @static
         * @param {proto.Response} message Response
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
                object.code = options.enums === String ? $root.proto.Response.ErrorCode[message.code] : message.code;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.proto.Request.CMD[message.cmd] : message.cmd;
            if (message.loginResponse != null && message.hasOwnProperty("loginResponse"))
                object.loginResponse = $root.proto.LoginResponse.toObject(message.loginResponse, options);
            if (message.registerPhoneResponse != null && message.hasOwnProperty("registerPhoneResponse"))
                object.registerPhoneResponse = $root.proto.RegisterPhoneRespone.toObject(message.registerPhoneResponse, options);
            if (message.getUserInfoResponse != null && message.hasOwnProperty("getUserInfoResponse"))
                object.getUserInfoResponse = $root.proto.GetUserInfoResponse.toObject(message.getUserInfoResponse, options);
            if (message.coinBankResponse != null && message.hasOwnProperty("coinBankResponse"))
                object.coinBankResponse = $root.proto.CoinBankResponse.toObject(message.coinBankResponse, options);
            if (message.changeSignResponse != null && message.hasOwnProperty("changeSignResponse"))
                object.changeSignResponse = $root.proto.ChangeSignResponse.toObject(message.changeSignResponse, options);
            if (message.sendDisCardResponse != null && message.hasOwnProperty("sendDisCardResponse"))
                object.sendDisCardResponse = $root.proto.SendDisCardResponse.toObject(message.sendDisCardResponse, options);
            if (message.sendPassPaiResponse != null && message.hasOwnProperty("sendPassPaiResponse"))
                object.sendPassPaiResponse = $root.proto.SendPassPaiResponse.toObject(message.sendPassPaiResponse, options);
            if (message.sendUserQDZResponse != null && message.hasOwnProperty("sendUserQDZResponse"))
                object.sendUserQDZResponse = $root.proto.SendUserQDZResponse.toObject(message.sendUserQDZResponse, options);
            if (message.sendUserQDZ2Response != null && message.hasOwnProperty("sendUserQDZ2Response"))
                object.sendUserQDZ2Response = $root.proto.SendUserQDZ2Response.toObject(message.sendUserQDZ2Response, options);
            if (message.sendUserMPResponse != null && message.hasOwnProperty("sendUserMPResponse"))
                object.sendUserMPResponse = $root.proto.SendUserMPResponse.toObject(message.sendUserMPResponse, options);
            if (message.sendUserMP2Response != null && message.hasOwnProperty("sendUserMP2Response"))
                object.sendUserMP2Response = $root.proto.SendUserMP2Response.toObject(message.sendUserMP2Response, options);
            if (message.sendRoundRecordResponse != null && message.hasOwnProperty("sendRoundRecordResponse"))
                object.sendRoundRecordResponse = $root.proto.SendRoundRecordResponse.toObject(message.sendRoundRecordResponse, options);
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                object.sendReconnectQuitResponse = $root.proto.SendReconnectQuitResponse.toObject(message.sendReconnectQuitResponse, options);
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                object.userReconnectResponse = $root.proto.UserReconnectResponse.toObject(message.userReconnectResponse, options);
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                object.sendUserReconnectResponse = $root.proto.SendUserReconnectResponse.toObject(message.sendUserReconnectResponse, options);
            if (message.sendApplyDismissResponse != null && message.hasOwnProperty("sendApplyDismissResponse"))
                object.sendApplyDismissResponse = $root.proto.SendApplyDismissResponse.toObject(message.sendApplyDismissResponse, options);
            if (message.sendAgreeDismissResponse != null && message.hasOwnProperty("sendAgreeDismissResponse"))
                object.sendAgreeDismissResponse = $root.proto.SendAgreeDismissResponse.toObject(message.sendAgreeDismissResponse, options);
            if (message.sendDismissResultResponse != null && message.hasOwnProperty("sendDismissResultResponse"))
                object.sendDismissResultResponse = $root.proto.SendDismissResultResponse.toObject(message.sendDismissResultResponse, options);
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                object.sendUserQuitResponse = $root.proto.SendUserQuitResponse.toObject(message.sendUserQuitResponse, options);
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                object.sendMessageResponse = $root.proto.SendMessageResponse.toObject(message.sendMessageResponse, options);
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                object.sendUserOnBackResponse = $root.proto.SendUserOnBackResponse.toObject(message.sendUserOnBackResponse, options);
            if (message.sendGameOverResponse != null && message.hasOwnProperty("sendGameOverResponse"))
                object.sendGameOverResponse = $root.proto.SendGameOverResponse.toObject(message.sendGameOverResponse, options);
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                object.sendDiamondChangeResponse = $root.proto.SendDiamondChangeResponse.toObject(message.sendDiamondChangeResponse, options);
            if (message.sendCancelAutoResponse != null && message.hasOwnProperty("sendCancelAutoResponse"))
                object.sendCancelAutoResponse = $root.proto.SendCancelAutoResponse.toObject(message.sendCancelAutoResponse, options);
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                object.delayCheckResponse = $root.proto.DelayCheckResponse.toObject(message.delayCheckResponse, options);
            if (message.sendRemainTimeResponse != null && message.hasOwnProperty("sendRemainTimeResponse"))
                object.sendRemainTimeResponse = $root.proto.SendRemainTimeResponse.toObject(message.sendRemainTimeResponse, options);
            if (message.sendNoticeClientDismissResponse != null && message.hasOwnProperty("sendNoticeClientDismissResponse"))
                object.sendNoticeClientDismissResponse = $root.proto.SendNoticeClientDismissResponse.toObject(message.sendNoticeClientDismissResponse, options);
            if (message.sendUserQuitByAdminResponse != null && message.hasOwnProperty("sendUserQuitByAdminResponse"))
                object.sendUserQuitByAdminResponse = $root.proto.SendUserQuitByAdminResponse.toObject(message.sendUserQuitByAdminResponse, options);
            if (message.sendCoinRefreshResponse != null && message.hasOwnProperty("sendCoinRefreshResponse"))
                object.sendCoinRefreshResponse = $root.proto.SendCoinRefreshResponse.toObject(message.sendCoinRefreshResponse, options);
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                object.sendHeartBeatResponse = $root.proto.SendHeartBeatResponse.toObject(message.sendHeartBeatResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof proto.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name proto.Response.ErrorCode
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

    proto.TestPB = (function() {

        /**
         * Properties of a TestPB.
         * @memberof proto
         * @interface ITestPB
         * @property {string|null} [name] TestPB name
         * @property {string|null} [pwd] TestPB pwd
         */

        /**
         * Constructs a new TestPB.
         * @memberof proto
         * @classdesc Represents a TestPB.
         * @implements ITestPB
         * @constructor
         * @param {proto.ITestPB=} [properties] Properties to set
         */
        function TestPB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestPB name.
         * @member {string} name
         * @memberof proto.TestPB
         * @instance
         */
        TestPB.prototype.name = "";

        /**
         * TestPB pwd.
         * @member {string} pwd
         * @memberof proto.TestPB
         * @instance
         */
        TestPB.prototype.pwd = "";

        /**
         * Creates a new TestPB instance using the specified properties.
         * @function create
         * @memberof proto.TestPB
         * @static
         * @param {proto.ITestPB=} [properties] Properties to set
         * @returns {proto.TestPB} TestPB instance
         */
        TestPB.create = function create(properties) {
            return new TestPB(properties);
        };

        /**
         * Encodes the specified TestPB message. Does not implicitly {@link proto.TestPB.verify|verify} messages.
         * @function encode
         * @memberof proto.TestPB
         * @static
         * @param {proto.ITestPB} message TestPB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestPB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pwd);
            return writer;
        };

        /**
         * Encodes the specified TestPB message, length delimited. Does not implicitly {@link proto.TestPB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.TestPB
         * @static
         * @param {proto.ITestPB} message TestPB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestPB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestPB message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TestPB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.TestPB} TestPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestPB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.TestPB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestPB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.TestPB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.TestPB} TestPB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestPB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestPB message.
         * @function verify
         * @memberof proto.TestPB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestPB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                if (!$util.isString(message.pwd))
                    return "pwd: string expected";
            return null;
        };

        /**
         * Creates a TestPB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.TestPB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.TestPB} TestPB
         */
        TestPB.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.TestPB)
                return object;
            var message = new $root.proto.TestPB();
            if (object.name != null)
                message.name = String(object.name);
            if (object.pwd != null)
                message.pwd = String(object.pwd);
            return message;
        };

        /**
         * Creates a plain object from a TestPB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.TestPB
         * @static
         * @param {proto.TestPB} message TestPB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestPB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.pwd = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.pwd != null && message.hasOwnProperty("pwd"))
                object.pwd = message.pwd;
            return object;
        };

        /**
         * Converts this TestPB to JSON.
         * @function toJSON
         * @memberof proto.TestPB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestPB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestPB;
    })();

    return proto;
})();

module.exports = $root;
