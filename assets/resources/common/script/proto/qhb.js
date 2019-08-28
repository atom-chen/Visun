/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.qhb = (function() {

    /**
     * Namespace qhb.
     * @exports qhb
     * @namespace
     */
    var qhb = {};

    qhb.Reply = (function() {

        /**
         * Properties of a Reply.
         * @memberof qhb
         * @interface IReply
         * @property {number|null} [code] Reply code
         * @property {string|null} [msg] Reply msg
         */

        /**
         * Constructs a new Reply.
         * @memberof qhb
         * @classdesc Represents a Reply.
         * @implements IReply
         * @constructor
         * @param {qhb.IReply=} [properties] Properties to set
         */
        function Reply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reply code.
         * @member {number} code
         * @memberof qhb.Reply
         * @instance
         */
        Reply.prototype.code = 0;

        /**
         * Reply msg.
         * @member {string} msg
         * @memberof qhb.Reply
         * @instance
         */
        Reply.prototype.msg = "";

        /**
         * Creates a new Reply instance using the specified properties.
         * @function create
         * @memberof qhb.Reply
         * @static
         * @param {qhb.IReply=} [properties] Properties to set
         * @returns {qhb.Reply} Reply instance
         */
        Reply.create = function create(properties) {
            return new Reply(properties);
        };

        /**
         * Encodes the specified Reply message. Does not implicitly {@link qhb.Reply.verify|verify} messages.
         * @function encode
         * @memberof qhb.Reply
         * @static
         * @param {qhb.IReply} message Reply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified Reply message, length delimited. Does not implicitly {@link qhb.Reply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.Reply
         * @static
         * @param {qhb.IReply} message Reply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reply message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.Reply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.Reply} Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.Reply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.Reply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.Reply} Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reply message.
         * @function verify
         * @memberof qhb.Reply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a Reply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.Reply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.Reply} Reply
         */
        Reply.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.Reply)
                return object;
            var message = new $root.qhb.Reply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a Reply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.Reply
         * @static
         * @param {qhb.Reply} message Reply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this Reply to JSON.
         * @function toJSON
         * @memberof qhb.Reply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reply;
    })();

    qhb.IntArr = (function() {

        /**
         * Properties of an IntArr.
         * @memberof qhb
         * @interface IIntArr
         * @property {Array.<number>|null} [arr] IntArr arr
         */

        /**
         * Constructs a new IntArr.
         * @memberof qhb
         * @classdesc Represents an IntArr.
         * @implements IIntArr
         * @constructor
         * @param {qhb.IIntArr=} [properties] Properties to set
         */
        function IntArr(properties) {
            this.arr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntArr arr.
         * @member {Array.<number>} arr
         * @memberof qhb.IntArr
         * @instance
         */
        IntArr.prototype.arr = $util.emptyArray;

        /**
         * Creates a new IntArr instance using the specified properties.
         * @function create
         * @memberof qhb.IntArr
         * @static
         * @param {qhb.IIntArr=} [properties] Properties to set
         * @returns {qhb.IntArr} IntArr instance
         */
        IntArr.create = function create(properties) {
            return new IntArr(properties);
        };

        /**
         * Encodes the specified IntArr message. Does not implicitly {@link qhb.IntArr.verify|verify} messages.
         * @function encode
         * @memberof qhb.IntArr
         * @static
         * @param {qhb.IIntArr} message IntArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.arr != null && message.arr.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.arr.length; ++i)
                    writer.int32(message.arr[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified IntArr message, length delimited. Does not implicitly {@link qhb.IntArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.IntArr
         * @static
         * @param {qhb.IIntArr} message IntArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntArr message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.IntArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.IntArr} IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.IntArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.arr && message.arr.length))
                        message.arr = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.arr.push(reader.int32());
                    } else
                        message.arr.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IntArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.IntArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.IntArr} IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntArr message.
         * @function verify
         * @memberof qhb.IntArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.arr != null && message.hasOwnProperty("arr")) {
                if (!Array.isArray(message.arr))
                    return "arr: array expected";
                for (var i = 0; i < message.arr.length; ++i)
                    if (!$util.isInteger(message.arr[i]))
                        return "arr: integer[] expected";
            }
            return null;
        };

        /**
         * Creates an IntArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.IntArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.IntArr} IntArr
         */
        IntArr.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.IntArr)
                return object;
            var message = new $root.qhb.IntArr();
            if (object.arr) {
                if (!Array.isArray(object.arr))
                    throw TypeError(".qhb.IntArr.arr: array expected");
                message.arr = [];
                for (var i = 0; i < object.arr.length; ++i)
                    message.arr[i] = object.arr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an IntArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.IntArr
         * @static
         * @param {qhb.IntArr} message IntArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.arr = [];
            if (message.arr && message.arr.length) {
                object.arr = [];
                for (var j = 0; j < message.arr.length; ++j)
                    object.arr[j] = message.arr[j];
            }
            return object;
        };

        /**
         * Converts this IntArr to JSON.
         * @function toJSON
         * @memberof qhb.IntArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IntArr;
    })();

    qhb.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof qhb
         * @interface IPlayer
         * @property {number|null} [userId] Player userId
         * @property {string|null} [nickName] Player nickName
         * @property {string|null} [headImg] Player headImg
         * @property {number|null} [sex] Player sex
         * @property {string|null} [ip] Player ip
         * @property {number|null} [isApply] Player isApply
         * @property {number|null} [coin] Player coin
         * @property {number|null} [state] Player state
         * @property {boolean|null} [canDeal] Player canDeal
         * @property {number|null} [currentScore] Player currentScore
         * @property {number|null} [revenue] Player revenue
         * @property {number|null} [totalScore] Player totalScore
         * @property {number|null} [bagBoom] Player bagBoom
         * @property {number|null} [bagMoney] Player bagMoney
         * @property {number|null} [money] Player money
         */

        /**
         * Constructs a new Player.
         * @memberof qhb
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {qhb.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player userId.
         * @member {number} userId
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.userId = 0;

        /**
         * Player nickName.
         * @member {string} nickName
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.nickName = "";

        /**
         * Player headImg.
         * @member {string} headImg
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.headImg = "";

        /**
         * Player sex.
         * @member {number} sex
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.sex = 0;

        /**
         * Player ip.
         * @member {string} ip
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.ip = "";

        /**
         * Player isApply.
         * @member {number} isApply
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.isApply = 0;

        /**
         * Player coin.
         * @member {number} coin
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.coin = 0;

        /**
         * Player state.
         * @member {number} state
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.state = 0;

        /**
         * Player canDeal.
         * @member {boolean} canDeal
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.canDeal = false;

        /**
         * Player currentScore.
         * @member {number} currentScore
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.currentScore = 0;

        /**
         * Player revenue.
         * @member {number} revenue
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.revenue = 0;

        /**
         * Player totalScore.
         * @member {number} totalScore
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.totalScore = 0;

        /**
         * Player bagBoom.
         * @member {number} bagBoom
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.bagBoom = 0;

        /**
         * Player bagMoney.
         * @member {number} bagMoney
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.bagMoney = 0;

        /**
         * Player money.
         * @member {number} money
         * @memberof qhb.Player
         * @instance
         */
        Player.prototype.money = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof qhb.Player
         * @static
         * @param {qhb.IPlayer=} [properties] Properties to set
         * @returns {qhb.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link qhb.Player.verify|verify} messages.
         * @function encode
         * @memberof qhb.Player
         * @static
         * @param {qhb.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickName);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ip);
            if (message.isApply != null && message.hasOwnProperty("isApply"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isApply);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.coin);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.state);
            if (message.canDeal != null && message.hasOwnProperty("canDeal"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.canDeal);
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.currentScore);
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.revenue);
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                writer.uint32(/* id 12, wireType 1 =*/97).double(message.totalScore);
            if (message.bagBoom != null && message.hasOwnProperty("bagBoom"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.bagBoom);
            if (message.bagMoney != null && message.hasOwnProperty("bagMoney"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.bagMoney);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.money);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link qhb.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.Player
         * @static
         * @param {qhb.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.nickName = reader.string();
                    break;
                case 3:
                    message.headImg = reader.string();
                    break;
                case 4:
                    message.sex = reader.int32();
                    break;
                case 5:
                    message.ip = reader.string();
                    break;
                case 6:
                    message.isApply = reader.int32();
                    break;
                case 7:
                    message.coin = reader.double();
                    break;
                case 8:
                    message.state = reader.int32();
                    break;
                case 9:
                    message.canDeal = reader.bool();
                    break;
                case 10:
                    message.currentScore = reader.double();
                    break;
                case 11:
                    message.revenue = reader.double();
                    break;
                case 12:
                    message.totalScore = reader.double();
                    break;
                case 13:
                    message.bagBoom = reader.int32();
                    break;
                case 14:
                    message.bagMoney = reader.int32();
                    break;
                case 15:
                    message.money = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof qhb.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.isApply != null && message.hasOwnProperty("isApply"))
                if (!$util.isInteger(message.isApply))
                    return "isApply: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.canDeal != null && message.hasOwnProperty("canDeal"))
                if (typeof message.canDeal !== "boolean")
                    return "canDeal: boolean expected";
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                if (typeof message.currentScore !== "number")
                    return "currentScore: number expected";
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                if (typeof message.revenue !== "number")
                    return "revenue: number expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (typeof message.totalScore !== "number")
                    return "totalScore: number expected";
            if (message.bagBoom != null && message.hasOwnProperty("bagBoom"))
                if (!$util.isInteger(message.bagBoom))
                    return "bagBoom: integer expected";
            if (message.bagMoney != null && message.hasOwnProperty("bagMoney"))
                if (!$util.isInteger(message.bagMoney))
                    return "bagMoney: integer expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money))
                    return "money: integer expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.Player)
                return object;
            var message = new $root.qhb.Player();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.isApply != null)
                message.isApply = object.isApply | 0;
            if (object.coin != null)
                message.coin = Number(object.coin);
            if (object.state != null)
                message.state = object.state | 0;
            if (object.canDeal != null)
                message.canDeal = Boolean(object.canDeal);
            if (object.currentScore != null)
                message.currentScore = Number(object.currentScore);
            if (object.revenue != null)
                message.revenue = Number(object.revenue);
            if (object.totalScore != null)
                message.totalScore = Number(object.totalScore);
            if (object.bagBoom != null)
                message.bagBoom = object.bagBoom | 0;
            if (object.bagMoney != null)
                message.bagMoney = object.bagMoney | 0;
            if (object.money != null)
                message.money = object.money | 0;
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.Player
         * @static
         * @param {qhb.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.nickName = "";
                object.headImg = "";
                object.sex = 0;
                object.ip = "";
                object.isApply = 0;
                object.coin = 0;
                object.state = 0;
                object.canDeal = false;
                object.currentScore = 0;
                object.revenue = 0;
                object.totalScore = 0;
                object.bagBoom = 0;
                object.bagMoney = 0;
                object.money = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.isApply != null && message.hasOwnProperty("isApply"))
                object.isApply = message.isApply;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.canDeal != null && message.hasOwnProperty("canDeal"))
                object.canDeal = message.canDeal;
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                object.currentScore = options.json && !isFinite(message.currentScore) ? String(message.currentScore) : message.currentScore;
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                object.revenue = options.json && !isFinite(message.revenue) ? String(message.revenue) : message.revenue;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = options.json && !isFinite(message.totalScore) ? String(message.totalScore) : message.totalScore;
            if (message.bagBoom != null && message.hasOwnProperty("bagBoom"))
                object.bagBoom = message.bagBoom;
            if (message.bagMoney != null && message.hasOwnProperty("bagMoney"))
                object.bagMoney = message.bagMoney;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof qhb.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    qhb.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof qhb
         * @interface ITableInfo
         * @property {string|null} [tableId] TableInfo tableId
         * @property {string|null} [seq] TableInfo seq
         * @property {number|null} [gameId] TableInfo gameId
         * @property {number|null} [gameNo] TableInfo gameNo
         * @property {number|null} [minLimit] TableInfo minLimit
         * @property {number|null} [maxLimit] TableInfo maxLimit
         * @property {Array.<number>|null} [bagMoneys] TableInfo bagMoneys
         * @property {number|null} [mult] TableInfo mult
         * @property {number|null} [state] TableInfo state
         * @property {number|null} [bagNum] TableInfo bagNum
         * @property {Array.<qhb.IPlayer>|null} [bingoUsers] TableInfo bingoUsers
         * @property {number|null} [currentMoney] TableInfo currentMoney
         * @property {number|null} [currentBoom] TableInfo currentBoom
         * @property {string|null} [bankerName] TableInfo bankerName
         * @property {string|null} [bankerHeadImg] TableInfo bankerHeadImg
         * @property {number|null} [bankerCoin] TableInfo bankerCoin
         * @property {number|null} [selfIndexInApplyList] TableInfo selfIndexInApplyList
         * @property {qhb.IPlayer|null} [selfInfo] TableInfo selfInfo
         */

        /**
         * Constructs a new TableInfo.
         * @memberof qhb
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {qhb.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            this.bagMoneys = [];
            this.bingoUsers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo tableId.
         * @member {string} tableId
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.tableId = "";

        /**
         * TableInfo seq.
         * @member {string} seq
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.seq = "";

        /**
         * TableInfo gameId.
         * @member {number} gameId
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.gameId = 0;

        /**
         * TableInfo gameNo.
         * @member {number} gameNo
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.gameNo = 0;

        /**
         * TableInfo minLimit.
         * @member {number} minLimit
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.minLimit = 0;

        /**
         * TableInfo maxLimit.
         * @member {number} maxLimit
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.maxLimit = 0;

        /**
         * TableInfo bagMoneys.
         * @member {Array.<number>} bagMoneys
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.bagMoneys = $util.emptyArray;

        /**
         * TableInfo mult.
         * @member {number} mult
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.mult = 0;

        /**
         * TableInfo state.
         * @member {number} state
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.state = 0;

        /**
         * TableInfo bagNum.
         * @member {number} bagNum
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.bagNum = 0;

        /**
         * TableInfo bingoUsers.
         * @member {Array.<qhb.IPlayer>} bingoUsers
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.bingoUsers = $util.emptyArray;

        /**
         * TableInfo currentMoney.
         * @member {number} currentMoney
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.currentMoney = 0;

        /**
         * TableInfo currentBoom.
         * @member {number} currentBoom
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.currentBoom = 0;

        /**
         * TableInfo bankerName.
         * @member {string} bankerName
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.bankerName = "";

        /**
         * TableInfo bankerHeadImg.
         * @member {string} bankerHeadImg
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.bankerHeadImg = "";

        /**
         * TableInfo bankerCoin.
         * @member {number} bankerCoin
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.bankerCoin = 0;

        /**
         * TableInfo selfIndexInApplyList.
         * @member {number} selfIndexInApplyList
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.selfIndexInApplyList = 0;

        /**
         * TableInfo selfInfo.
         * @member {qhb.IPlayer|null|undefined} selfInfo
         * @memberof qhb.TableInfo
         * @instance
         */
        TableInfo.prototype.selfInfo = null;

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof qhb.TableInfo
         * @static
         * @param {qhb.ITableInfo=} [properties] Properties to set
         * @returns {qhb.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link qhb.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof qhb.TableInfo
         * @static
         * @param {qhb.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.tableId);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.seq);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gameId);
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gameNo);
            if (message.minLimit != null && message.hasOwnProperty("minLimit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.minLimit);
            if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.maxLimit);
            if (message.bagMoneys != null && message.bagMoneys.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.bagMoneys.length; ++i)
                    writer.int32(message.bagMoneys[i]);
                writer.ldelim();
            }
            if (message.mult != null && message.hasOwnProperty("mult"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.mult);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.state);
            if (message.bagNum != null && message.hasOwnProperty("bagNum"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.bagNum);
            if (message.bingoUsers != null && message.bingoUsers.length)
                for (var i = 0; i < message.bingoUsers.length; ++i)
                    $root.qhb.Player.encode(message.bingoUsers[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.currentMoney != null && message.hasOwnProperty("currentMoney"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.currentMoney);
            if (message.currentBoom != null && message.hasOwnProperty("currentBoom"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.currentBoom);
            if (message.bankerName != null && message.hasOwnProperty("bankerName"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.bankerName);
            if (message.bankerHeadImg != null && message.hasOwnProperty("bankerHeadImg"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.bankerHeadImg);
            if (message.bankerCoin != null && message.hasOwnProperty("bankerCoin"))
                writer.uint32(/* id 16, wireType 1 =*/129).double(message.bankerCoin);
            if (message.selfIndexInApplyList != null && message.hasOwnProperty("selfIndexInApplyList"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.selfIndexInApplyList);
            if (message.selfInfo != null && message.hasOwnProperty("selfInfo"))
                $root.qhb.Player.encode(message.selfInfo, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link qhb.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.TableInfo
         * @static
         * @param {qhb.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.TableInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableId = reader.string();
                    break;
                case 2:
                    message.seq = reader.string();
                    break;
                case 3:
                    message.gameId = reader.int32();
                    break;
                case 4:
                    message.gameNo = reader.int32();
                    break;
                case 5:
                    message.minLimit = reader.int32();
                    break;
                case 6:
                    message.maxLimit = reader.int32();
                    break;
                case 7:
                    if (!(message.bagMoneys && message.bagMoneys.length))
                        message.bagMoneys = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.bagMoneys.push(reader.int32());
                    } else
                        message.bagMoneys.push(reader.int32());
                    break;
                case 8:
                    message.mult = reader.int32();
                    break;
                case 9:
                    message.state = reader.int32();
                    break;
                case 10:
                    message.bagNum = reader.int32();
                    break;
                case 11:
                    if (!(message.bingoUsers && message.bingoUsers.length))
                        message.bingoUsers = [];
                    message.bingoUsers.push($root.qhb.Player.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.currentMoney = reader.int32();
                    break;
                case 13:
                    message.currentBoom = reader.int32();
                    break;
                case 14:
                    message.bankerName = reader.string();
                    break;
                case 15:
                    message.bankerHeadImg = reader.string();
                    break;
                case 16:
                    message.bankerCoin = reader.double();
                    break;
                case 17:
                    message.selfIndexInApplyList = reader.int32();
                    break;
                case 18:
                    message.selfInfo = $root.qhb.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfo message.
         * @function verify
         * @memberof qhb.TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isString(message.seq))
                    return "seq: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isInteger(message.gameId))
                    return "gameId: integer expected";
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                if (!$util.isInteger(message.gameNo))
                    return "gameNo: integer expected";
            if (message.minLimit != null && message.hasOwnProperty("minLimit"))
                if (!$util.isInteger(message.minLimit))
                    return "minLimit: integer expected";
            if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
                if (!$util.isInteger(message.maxLimit))
                    return "maxLimit: integer expected";
            if (message.bagMoneys != null && message.hasOwnProperty("bagMoneys")) {
                if (!Array.isArray(message.bagMoneys))
                    return "bagMoneys: array expected";
                for (var i = 0; i < message.bagMoneys.length; ++i)
                    if (!$util.isInteger(message.bagMoneys[i]))
                        return "bagMoneys: integer[] expected";
            }
            if (message.mult != null && message.hasOwnProperty("mult"))
                if (!$util.isInteger(message.mult))
                    return "mult: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.bagNum != null && message.hasOwnProperty("bagNum"))
                if (!$util.isInteger(message.bagNum))
                    return "bagNum: integer expected";
            if (message.bingoUsers != null && message.hasOwnProperty("bingoUsers")) {
                if (!Array.isArray(message.bingoUsers))
                    return "bingoUsers: array expected";
                for (var i = 0; i < message.bingoUsers.length; ++i) {
                    var error = $root.qhb.Player.verify(message.bingoUsers[i]);
                    if (error)
                        return "bingoUsers." + error;
                }
            }
            if (message.currentMoney != null && message.hasOwnProperty("currentMoney"))
                if (!$util.isInteger(message.currentMoney))
                    return "currentMoney: integer expected";
            if (message.currentBoom != null && message.hasOwnProperty("currentBoom"))
                if (!$util.isInteger(message.currentBoom))
                    return "currentBoom: integer expected";
            if (message.bankerName != null && message.hasOwnProperty("bankerName"))
                if (!$util.isString(message.bankerName))
                    return "bankerName: string expected";
            if (message.bankerHeadImg != null && message.hasOwnProperty("bankerHeadImg"))
                if (!$util.isString(message.bankerHeadImg))
                    return "bankerHeadImg: string expected";
            if (message.bankerCoin != null && message.hasOwnProperty("bankerCoin"))
                if (typeof message.bankerCoin !== "number")
                    return "bankerCoin: number expected";
            if (message.selfIndexInApplyList != null && message.hasOwnProperty("selfIndexInApplyList"))
                if (!$util.isInteger(message.selfIndexInApplyList))
                    return "selfIndexInApplyList: integer expected";
            if (message.selfInfo != null && message.hasOwnProperty("selfInfo")) {
                var error = $root.qhb.Player.verify(message.selfInfo);
                if (error)
                    return "selfInfo." + error;
            }
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.TableInfo)
                return object;
            var message = new $root.qhb.TableInfo();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.seq != null)
                message.seq = String(object.seq);
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.gameNo != null)
                message.gameNo = object.gameNo | 0;
            if (object.minLimit != null)
                message.minLimit = object.minLimit | 0;
            if (object.maxLimit != null)
                message.maxLimit = object.maxLimit | 0;
            if (object.bagMoneys) {
                if (!Array.isArray(object.bagMoneys))
                    throw TypeError(".qhb.TableInfo.bagMoneys: array expected");
                message.bagMoneys = [];
                for (var i = 0; i < object.bagMoneys.length; ++i)
                    message.bagMoneys[i] = object.bagMoneys[i] | 0;
            }
            if (object.mult != null)
                message.mult = object.mult | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.bagNum != null)
                message.bagNum = object.bagNum | 0;
            if (object.bingoUsers) {
                if (!Array.isArray(object.bingoUsers))
                    throw TypeError(".qhb.TableInfo.bingoUsers: array expected");
                message.bingoUsers = [];
                for (var i = 0; i < object.bingoUsers.length; ++i) {
                    if (typeof object.bingoUsers[i] !== "object")
                        throw TypeError(".qhb.TableInfo.bingoUsers: object expected");
                    message.bingoUsers[i] = $root.qhb.Player.fromObject(object.bingoUsers[i]);
                }
            }
            if (object.currentMoney != null)
                message.currentMoney = object.currentMoney | 0;
            if (object.currentBoom != null)
                message.currentBoom = object.currentBoom | 0;
            if (object.bankerName != null)
                message.bankerName = String(object.bankerName);
            if (object.bankerHeadImg != null)
                message.bankerHeadImg = String(object.bankerHeadImg);
            if (object.bankerCoin != null)
                message.bankerCoin = Number(object.bankerCoin);
            if (object.selfIndexInApplyList != null)
                message.selfIndexInApplyList = object.selfIndexInApplyList | 0;
            if (object.selfInfo != null) {
                if (typeof object.selfInfo !== "object")
                    throw TypeError(".qhb.TableInfo.selfInfo: object expected");
                message.selfInfo = $root.qhb.Player.fromObject(object.selfInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.TableInfo
         * @static
         * @param {qhb.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.bagMoneys = [];
                object.bingoUsers = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.gameId = 0;
                object.gameNo = 0;
                object.minLimit = 0;
                object.maxLimit = 0;
                object.mult = 0;
                object.state = 0;
                object.bagNum = 0;
                object.currentMoney = 0;
                object.currentBoom = 0;
                object.bankerName = "";
                object.bankerHeadImg = "";
                object.bankerCoin = 0;
                object.selfIndexInApplyList = 0;
                object.selfInfo = null;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                object.gameNo = message.gameNo;
            if (message.minLimit != null && message.hasOwnProperty("minLimit"))
                object.minLimit = message.minLimit;
            if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
                object.maxLimit = message.maxLimit;
            if (message.bagMoneys && message.bagMoneys.length) {
                object.bagMoneys = [];
                for (var j = 0; j < message.bagMoneys.length; ++j)
                    object.bagMoneys[j] = message.bagMoneys[j];
            }
            if (message.mult != null && message.hasOwnProperty("mult"))
                object.mult = message.mult;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.bagNum != null && message.hasOwnProperty("bagNum"))
                object.bagNum = message.bagNum;
            if (message.bingoUsers && message.bingoUsers.length) {
                object.bingoUsers = [];
                for (var j = 0; j < message.bingoUsers.length; ++j)
                    object.bingoUsers[j] = $root.qhb.Player.toObject(message.bingoUsers[j], options);
            }
            if (message.currentMoney != null && message.hasOwnProperty("currentMoney"))
                object.currentMoney = message.currentMoney;
            if (message.currentBoom != null && message.hasOwnProperty("currentBoom"))
                object.currentBoom = message.currentBoom;
            if (message.bankerName != null && message.hasOwnProperty("bankerName"))
                object.bankerName = message.bankerName;
            if (message.bankerHeadImg != null && message.hasOwnProperty("bankerHeadImg"))
                object.bankerHeadImg = message.bankerHeadImg;
            if (message.bankerCoin != null && message.hasOwnProperty("bankerCoin"))
                object.bankerCoin = options.json && !isFinite(message.bankerCoin) ? String(message.bankerCoin) : message.bankerCoin;
            if (message.selfIndexInApplyList != null && message.hasOwnProperty("selfIndexInApplyList"))
                object.selfIndexInApplyList = message.selfIndexInApplyList;
            if (message.selfInfo != null && message.hasOwnProperty("selfInfo"))
                object.selfInfo = $root.qhb.Player.toObject(message.selfInfo, options);
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof qhb.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    qhb.TableOutCard = (function() {

        /**
         * Properties of a TableOutCard.
         * @memberof qhb
         * @interface ITableOutCard
         * @property {number|null} [type] TableOutCard type
         * @property {Array.<number>|null} [handCards] TableOutCard handCards
         * @property {Array.<number>|null} [cardsNum] TableOutCard cardsNum
         * @property {number|null} [pos] TableOutCard pos
         * @property {number|null} [userPos] TableOutCard userPos
         * @property {number|null} [index] TableOutCard index
         * @property {boolean|null} [hasStopped] TableOutCard hasStopped
         * @property {number|null} [betCoin] TableOutCard betCoin
         */

        /**
         * Constructs a new TableOutCard.
         * @memberof qhb
         * @classdesc Represents a TableOutCard.
         * @implements ITableOutCard
         * @constructor
         * @param {qhb.ITableOutCard=} [properties] Properties to set
         */
        function TableOutCard(properties) {
            this.handCards = [];
            this.cardsNum = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableOutCard type.
         * @member {number} type
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.type = 0;

        /**
         * TableOutCard handCards.
         * @member {Array.<number>} handCards
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.handCards = $util.emptyArray;

        /**
         * TableOutCard cardsNum.
         * @member {Array.<number>} cardsNum
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.cardsNum = $util.emptyArray;

        /**
         * TableOutCard pos.
         * @member {number} pos
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.pos = 0;

        /**
         * TableOutCard userPos.
         * @member {number} userPos
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.userPos = 0;

        /**
         * TableOutCard index.
         * @member {number} index
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.index = 0;

        /**
         * TableOutCard hasStopped.
         * @member {boolean} hasStopped
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.hasStopped = false;

        /**
         * TableOutCard betCoin.
         * @member {number} betCoin
         * @memberof qhb.TableOutCard
         * @instance
         */
        TableOutCard.prototype.betCoin = 0;

        /**
         * Creates a new TableOutCard instance using the specified properties.
         * @function create
         * @memberof qhb.TableOutCard
         * @static
         * @param {qhb.ITableOutCard=} [properties] Properties to set
         * @returns {qhb.TableOutCard} TableOutCard instance
         */
        TableOutCard.create = function create(properties) {
            return new TableOutCard(properties);
        };

        /**
         * Encodes the specified TableOutCard message. Does not implicitly {@link qhb.TableOutCard.verify|verify} messages.
         * @function encode
         * @memberof qhb.TableOutCard
         * @static
         * @param {qhb.ITableOutCard} message TableOutCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableOutCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.handCards != null && message.handCards.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.handCards.length; ++i)
                    writer.int32(message.handCards[i]);
                writer.ldelim();
            }
            if (message.cardsNum != null && message.cardsNum.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.cardsNum.length; ++i)
                    writer.int32(message.cardsNum[i]);
                writer.ldelim();
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pos);
            if (message.userPos != null && message.hasOwnProperty("userPos"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.userPos);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.index);
            if (message.hasStopped != null && message.hasOwnProperty("hasStopped"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.hasStopped);
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.betCoin);
            return writer;
        };

        /**
         * Encodes the specified TableOutCard message, length delimited. Does not implicitly {@link qhb.TableOutCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.TableOutCard
         * @static
         * @param {qhb.ITableOutCard} message TableOutCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableOutCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableOutCard message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.TableOutCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.TableOutCard} TableOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableOutCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.TableOutCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
                    if (!(message.cardsNum && message.cardsNum.length))
                        message.cardsNum = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardsNum.push(reader.int32());
                    } else
                        message.cardsNum.push(reader.int32());
                    break;
                case 4:
                    message.pos = reader.int32();
                    break;
                case 5:
                    message.userPos = reader.int32();
                    break;
                case 6:
                    message.index = reader.int32();
                    break;
                case 7:
                    message.hasStopped = reader.bool();
                    break;
                case 8:
                    message.betCoin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableOutCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.TableOutCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.TableOutCard} TableOutCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableOutCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableOutCard message.
         * @function verify
         * @memberof qhb.TableOutCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableOutCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.handCards != null && message.hasOwnProperty("handCards")) {
                if (!Array.isArray(message.handCards))
                    return "handCards: array expected";
                for (var i = 0; i < message.handCards.length; ++i)
                    if (!$util.isInteger(message.handCards[i]))
                        return "handCards: integer[] expected";
            }
            if (message.cardsNum != null && message.hasOwnProperty("cardsNum")) {
                if (!Array.isArray(message.cardsNum))
                    return "cardsNum: array expected";
                for (var i = 0; i < message.cardsNum.length; ++i)
                    if (!$util.isInteger(message.cardsNum[i]))
                        return "cardsNum: integer[] expected";
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            if (message.userPos != null && message.hasOwnProperty("userPos"))
                if (!$util.isInteger(message.userPos))
                    return "userPos: integer expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isInteger(message.index))
                    return "index: integer expected";
            if (message.hasStopped != null && message.hasOwnProperty("hasStopped"))
                if (typeof message.hasStopped !== "boolean")
                    return "hasStopped: boolean expected";
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                if (!$util.isInteger(message.betCoin))
                    return "betCoin: integer expected";
            return null;
        };

        /**
         * Creates a TableOutCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.TableOutCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.TableOutCard} TableOutCard
         */
        TableOutCard.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.TableOutCard)
                return object;
            var message = new $root.qhb.TableOutCard();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.handCards) {
                if (!Array.isArray(object.handCards))
                    throw TypeError(".qhb.TableOutCard.handCards: array expected");
                message.handCards = [];
                for (var i = 0; i < object.handCards.length; ++i)
                    message.handCards[i] = object.handCards[i] | 0;
            }
            if (object.cardsNum) {
                if (!Array.isArray(object.cardsNum))
                    throw TypeError(".qhb.TableOutCard.cardsNum: array expected");
                message.cardsNum = [];
                for (var i = 0; i < object.cardsNum.length; ++i)
                    message.cardsNum[i] = object.cardsNum[i] | 0;
            }
            if (object.pos != null)
                message.pos = object.pos | 0;
            if (object.userPos != null)
                message.userPos = object.userPos | 0;
            if (object.index != null)
                message.index = object.index | 0;
            if (object.hasStopped != null)
                message.hasStopped = Boolean(object.hasStopped);
            if (object.betCoin != null)
                message.betCoin = object.betCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a TableOutCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.TableOutCard
         * @static
         * @param {qhb.TableOutCard} message TableOutCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableOutCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.handCards = [];
                object.cardsNum = [];
            }
            if (options.defaults) {
                object.type = 0;
                object.pos = 0;
                object.userPos = 0;
                object.index = 0;
                object.hasStopped = false;
                object.betCoin = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.handCards && message.handCards.length) {
                object.handCards = [];
                for (var j = 0; j < message.handCards.length; ++j)
                    object.handCards[j] = message.handCards[j];
            }
            if (message.cardsNum && message.cardsNum.length) {
                object.cardsNum = [];
                for (var j = 0; j < message.cardsNum.length; ++j)
                    object.cardsNum[j] = message.cardsNum[j];
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            if (message.userPos != null && message.hasOwnProperty("userPos"))
                object.userPos = message.userPos;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            if (message.hasStopped != null && message.hasOwnProperty("hasStopped"))
                object.hasStopped = message.hasStopped;
            if (message.betCoin != null && message.hasOwnProperty("betCoin"))
                object.betCoin = message.betCoin;
            return object;
        };

        /**
         * Converts this TableOutCard to JSON.
         * @function toJSON
         * @memberof qhb.TableOutCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableOutCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableOutCard;
    })();

    qhb.Prize = (function() {

        /**
         * Properties of a Prize.
         * @memberof qhb
         * @interface IPrize
         * @property {string|null} [one] Prize one
         * @property {string|null} [two] Prize two
         */

        /**
         * Constructs a new Prize.
         * @memberof qhb
         * @classdesc Represents a Prize.
         * @implements IPrize
         * @constructor
         * @param {qhb.IPrize=} [properties] Properties to set
         */
        function Prize(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Prize one.
         * @member {string} one
         * @memberof qhb.Prize
         * @instance
         */
        Prize.prototype.one = "";

        /**
         * Prize two.
         * @member {string} two
         * @memberof qhb.Prize
         * @instance
         */
        Prize.prototype.two = "";

        /**
         * Creates a new Prize instance using the specified properties.
         * @function create
         * @memberof qhb.Prize
         * @static
         * @param {qhb.IPrize=} [properties] Properties to set
         * @returns {qhb.Prize} Prize instance
         */
        Prize.create = function create(properties) {
            return new Prize(properties);
        };

        /**
         * Encodes the specified Prize message. Does not implicitly {@link qhb.Prize.verify|verify} messages.
         * @function encode
         * @memberof qhb.Prize
         * @static
         * @param {qhb.IPrize} message Prize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Prize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.one != null && message.hasOwnProperty("one"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.one);
            if (message.two != null && message.hasOwnProperty("two"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.two);
            return writer;
        };

        /**
         * Encodes the specified Prize message, length delimited. Does not implicitly {@link qhb.Prize.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.Prize
         * @static
         * @param {qhb.IPrize} message Prize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Prize.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Prize message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.Prize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.Prize} Prize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Prize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.Prize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.one = reader.string();
                    break;
                case 2:
                    message.two = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Prize message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.Prize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.Prize} Prize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Prize.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Prize message.
         * @function verify
         * @memberof qhb.Prize
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Prize.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.one != null && message.hasOwnProperty("one"))
                if (!$util.isString(message.one))
                    return "one: string expected";
            if (message.two != null && message.hasOwnProperty("two"))
                if (!$util.isString(message.two))
                    return "two: string expected";
            return null;
        };

        /**
         * Creates a Prize message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.Prize
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.Prize} Prize
         */
        Prize.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.Prize)
                return object;
            var message = new $root.qhb.Prize();
            if (object.one != null)
                message.one = String(object.one);
            if (object.two != null)
                message.two = String(object.two);
            return message;
        };

        /**
         * Creates a plain object from a Prize message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.Prize
         * @static
         * @param {qhb.Prize} message Prize
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Prize.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.one = "";
                object.two = "";
            }
            if (message.one != null && message.hasOwnProperty("one"))
                object.one = message.one;
            if (message.two != null && message.hasOwnProperty("two"))
                object.two = message.two;
            return object;
        };

        /**
         * Converts this Prize to JSON.
         * @function toJSON
         * @memberof qhb.Prize
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Prize.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Prize;
    })();

    qhb.c2s_delayCheck = (function() {

        /**
         * Properties of a c2s_delayCheck.
         * @memberof qhb
         * @interface Ic2s_delayCheck
         */

        /**
         * Constructs a new c2s_delayCheck.
         * @memberof qhb
         * @classdesc Represents a c2s_delayCheck.
         * @implements Ic2s_delayCheck
         * @constructor
         * @param {qhb.Ic2s_delayCheck=} [properties] Properties to set
         */
        function c2s_delayCheck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_delayCheck instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {qhb.Ic2s_delayCheck=} [properties] Properties to set
         * @returns {qhb.c2s_delayCheck} c2s_delayCheck instance
         */
        c2s_delayCheck.create = function create(properties) {
            return new c2s_delayCheck(properties);
        };

        /**
         * Encodes the specified c2s_delayCheck message. Does not implicitly {@link qhb.c2s_delayCheck.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {qhb.Ic2s_delayCheck} message c2s_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_delayCheck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_delayCheck message, length delimited. Does not implicitly {@link qhb.c2s_delayCheck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {qhb.Ic2s_delayCheck} message c2s_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_delayCheck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_delayCheck message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_delayCheck} c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_delayCheck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_delayCheck();
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
         * Decodes a c2s_delayCheck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_delayCheck} c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_delayCheck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_delayCheck message.
         * @function verify
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_delayCheck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_delayCheck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_delayCheck} c2s_delayCheck
         */
        c2s_delayCheck.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_delayCheck)
                return object;
            return new $root.qhb.c2s_delayCheck();
        };

        /**
         * Creates a plain object from a c2s_delayCheck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_delayCheck
         * @static
         * @param {qhb.c2s_delayCheck} message c2s_delayCheck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_delayCheck.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_delayCheck to JSON.
         * @function toJSON
         * @memberof qhb.c2s_delayCheck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_delayCheck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_delayCheck;
    })();

    qhb.s2c_delayCheck = (function() {

        /**
         * Properties of a s2c_delayCheck.
         * @memberof qhb
         * @interface Is2c_delayCheck
         * @property {qhb.IReply|null} [ret] s2c_delayCheck ret
         */

        /**
         * Constructs a new s2c_delayCheck.
         * @memberof qhb
         * @classdesc Represents a s2c_delayCheck.
         * @implements Is2c_delayCheck
         * @constructor
         * @param {qhb.Is2c_delayCheck=} [properties] Properties to set
         */
        function s2c_delayCheck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_delayCheck ret.
         * @member {qhb.IReply|null|undefined} ret
         * @memberof qhb.s2c_delayCheck
         * @instance
         */
        s2c_delayCheck.prototype.ret = null;

        /**
         * Creates a new s2c_delayCheck instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {qhb.Is2c_delayCheck=} [properties] Properties to set
         * @returns {qhb.s2c_delayCheck} s2c_delayCheck instance
         */
        s2c_delayCheck.create = function create(properties) {
            return new s2c_delayCheck(properties);
        };

        /**
         * Encodes the specified s2c_delayCheck message. Does not implicitly {@link qhb.s2c_delayCheck.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {qhb.Is2c_delayCheck} message s2c_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_delayCheck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.qhb.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_delayCheck message, length delimited. Does not implicitly {@link qhb.s2c_delayCheck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {qhb.Is2c_delayCheck} message s2c_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_delayCheck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_delayCheck} s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_delayCheck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_delayCheck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.qhb.Reply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_delayCheck} s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_delayCheck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_delayCheck message.
         * @function verify
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_delayCheck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.qhb.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_delayCheck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_delayCheck} s2c_delayCheck
         */
        s2c_delayCheck.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_delayCheck)
                return object;
            var message = new $root.qhb.s2c_delayCheck();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".qhb.s2c_delayCheck.ret: object expected");
                message.ret = $root.qhb.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_delayCheck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_delayCheck
         * @static
         * @param {qhb.s2c_delayCheck} message s2c_delayCheck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_delayCheck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = null;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.qhb.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_delayCheck to JSON.
         * @function toJSON
         * @memberof qhb.s2c_delayCheck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_delayCheck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_delayCheck;
    })();

    qhb.c2s_foucedOffline = (function() {

        /**
         * Properties of a c2s_foucedOffline.
         * @memberof qhb
         * @interface Ic2s_foucedOffline
         * @property {number|null} [userId] c2s_foucedOffline userId
         */

        /**
         * Constructs a new c2s_foucedOffline.
         * @memberof qhb
         * @classdesc Represents a c2s_foucedOffline.
         * @implements Ic2s_foucedOffline
         * @constructor
         * @param {qhb.Ic2s_foucedOffline=} [properties] Properties to set
         */
        function c2s_foucedOffline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_foucedOffline userId.
         * @member {number} userId
         * @memberof qhb.c2s_foucedOffline
         * @instance
         */
        c2s_foucedOffline.prototype.userId = 0;

        /**
         * Creates a new c2s_foucedOffline instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {qhb.Ic2s_foucedOffline=} [properties] Properties to set
         * @returns {qhb.c2s_foucedOffline} c2s_foucedOffline instance
         */
        c2s_foucedOffline.create = function create(properties) {
            return new c2s_foucedOffline(properties);
        };

        /**
         * Encodes the specified c2s_foucedOffline message. Does not implicitly {@link qhb.c2s_foucedOffline.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {qhb.Ic2s_foucedOffline} message c2s_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_foucedOffline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified c2s_foucedOffline message, length delimited. Does not implicitly {@link qhb.c2s_foucedOffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {qhb.Ic2s_foucedOffline} message c2s_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_foucedOffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_foucedOffline message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_foucedOffline} c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_foucedOffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_foucedOffline();
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
         * Decodes a c2s_foucedOffline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_foucedOffline} c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_foucedOffline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_foucedOffline message.
         * @function verify
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_foucedOffline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a c2s_foucedOffline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_foucedOffline} c2s_foucedOffline
         */
        c2s_foucedOffline.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_foucedOffline)
                return object;
            var message = new $root.qhb.c2s_foucedOffline();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_foucedOffline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_foucedOffline
         * @static
         * @param {qhb.c2s_foucedOffline} message c2s_foucedOffline
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_foucedOffline.toObject = function toObject(message, options) {
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
         * Converts this c2s_foucedOffline to JSON.
         * @function toJSON
         * @memberof qhb.c2s_foucedOffline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_foucedOffline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_foucedOffline;
    })();

    qhb.s2c_foucedOffline = (function() {

        /**
         * Properties of a s2c_foucedOffline.
         * @memberof qhb
         * @interface Is2c_foucedOffline
         * @property {qhb.IReply|null} [ret] s2c_foucedOffline ret
         */

        /**
         * Constructs a new s2c_foucedOffline.
         * @memberof qhb
         * @classdesc Represents a s2c_foucedOffline.
         * @implements Is2c_foucedOffline
         * @constructor
         * @param {qhb.Is2c_foucedOffline=} [properties] Properties to set
         */
        function s2c_foucedOffline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_foucedOffline ret.
         * @member {qhb.IReply|null|undefined} ret
         * @memberof qhb.s2c_foucedOffline
         * @instance
         */
        s2c_foucedOffline.prototype.ret = null;

        /**
         * Creates a new s2c_foucedOffline instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {qhb.Is2c_foucedOffline=} [properties] Properties to set
         * @returns {qhb.s2c_foucedOffline} s2c_foucedOffline instance
         */
        s2c_foucedOffline.create = function create(properties) {
            return new s2c_foucedOffline(properties);
        };

        /**
         * Encodes the specified s2c_foucedOffline message. Does not implicitly {@link qhb.s2c_foucedOffline.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {qhb.Is2c_foucedOffline} message s2c_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_foucedOffline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.qhb.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_foucedOffline message, length delimited. Does not implicitly {@link qhb.s2c_foucedOffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {qhb.Is2c_foucedOffline} message s2c_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_foucedOffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_foucedOffline} s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_foucedOffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_foucedOffline();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.qhb.Reply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_foucedOffline} s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_foucedOffline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_foucedOffline message.
         * @function verify
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_foucedOffline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.qhb.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_foucedOffline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_foucedOffline} s2c_foucedOffline
         */
        s2c_foucedOffline.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_foucedOffline)
                return object;
            var message = new $root.qhb.s2c_foucedOffline();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".qhb.s2c_foucedOffline.ret: object expected");
                message.ret = $root.qhb.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_foucedOffline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_foucedOffline
         * @static
         * @param {qhb.s2c_foucedOffline} message s2c_foucedOffline
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_foucedOffline.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = null;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.qhb.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_foucedOffline to JSON.
         * @function toJSON
         * @memberof qhb.s2c_foucedOffline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_foucedOffline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_foucedOffline;
    })();

    qhb.c2s_adminKickedOut = (function() {

        /**
         * Properties of a c2s_adminKickedOut.
         * @memberof qhb
         * @interface Ic2s_adminKickedOut
         * @property {number|null} [userId] c2s_adminKickedOut userId
         */

        /**
         * Constructs a new c2s_adminKickedOut.
         * @memberof qhb
         * @classdesc Represents a c2s_adminKickedOut.
         * @implements Ic2s_adminKickedOut
         * @constructor
         * @param {qhb.Ic2s_adminKickedOut=} [properties] Properties to set
         */
        function c2s_adminKickedOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_adminKickedOut userId.
         * @member {number} userId
         * @memberof qhb.c2s_adminKickedOut
         * @instance
         */
        c2s_adminKickedOut.prototype.userId = 0;

        /**
         * Creates a new c2s_adminKickedOut instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {qhb.Ic2s_adminKickedOut=} [properties] Properties to set
         * @returns {qhb.c2s_adminKickedOut} c2s_adminKickedOut instance
         */
        c2s_adminKickedOut.create = function create(properties) {
            return new c2s_adminKickedOut(properties);
        };

        /**
         * Encodes the specified c2s_adminKickedOut message. Does not implicitly {@link qhb.c2s_adminKickedOut.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {qhb.Ic2s_adminKickedOut} message c2s_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_adminKickedOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified c2s_adminKickedOut message, length delimited. Does not implicitly {@link qhb.c2s_adminKickedOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {qhb.Ic2s_adminKickedOut} message c2s_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_adminKickedOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_adminKickedOut} c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_adminKickedOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_adminKickedOut();
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
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_adminKickedOut} c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_adminKickedOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_adminKickedOut message.
         * @function verify
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_adminKickedOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a c2s_adminKickedOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_adminKickedOut} c2s_adminKickedOut
         */
        c2s_adminKickedOut.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_adminKickedOut)
                return object;
            var message = new $root.qhb.c2s_adminKickedOut();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_adminKickedOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_adminKickedOut
         * @static
         * @param {qhb.c2s_adminKickedOut} message c2s_adminKickedOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_adminKickedOut.toObject = function toObject(message, options) {
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
         * Converts this c2s_adminKickedOut to JSON.
         * @function toJSON
         * @memberof qhb.c2s_adminKickedOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_adminKickedOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_adminKickedOut;
    })();

    qhb.s2c_adminKickedOut = (function() {

        /**
         * Properties of a s2c_adminKickedOut.
         * @memberof qhb
         * @interface Is2c_adminKickedOut
         * @property {qhb.IReply|null} [ret] s2c_adminKickedOut ret
         */

        /**
         * Constructs a new s2c_adminKickedOut.
         * @memberof qhb
         * @classdesc Represents a s2c_adminKickedOut.
         * @implements Is2c_adminKickedOut
         * @constructor
         * @param {qhb.Is2c_adminKickedOut=} [properties] Properties to set
         */
        function s2c_adminKickedOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_adminKickedOut ret.
         * @member {qhb.IReply|null|undefined} ret
         * @memberof qhb.s2c_adminKickedOut
         * @instance
         */
        s2c_adminKickedOut.prototype.ret = null;

        /**
         * Creates a new s2c_adminKickedOut instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {qhb.Is2c_adminKickedOut=} [properties] Properties to set
         * @returns {qhb.s2c_adminKickedOut} s2c_adminKickedOut instance
         */
        s2c_adminKickedOut.create = function create(properties) {
            return new s2c_adminKickedOut(properties);
        };

        /**
         * Encodes the specified s2c_adminKickedOut message. Does not implicitly {@link qhb.s2c_adminKickedOut.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {qhb.Is2c_adminKickedOut} message s2c_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_adminKickedOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.qhb.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_adminKickedOut message, length delimited. Does not implicitly {@link qhb.s2c_adminKickedOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {qhb.Is2c_adminKickedOut} message s2c_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_adminKickedOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_adminKickedOut} s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_adminKickedOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_adminKickedOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.qhb.Reply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_adminKickedOut} s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_adminKickedOut.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_adminKickedOut message.
         * @function verify
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_adminKickedOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.qhb.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_adminKickedOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_adminKickedOut} s2c_adminKickedOut
         */
        s2c_adminKickedOut.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_adminKickedOut)
                return object;
            var message = new $root.qhb.s2c_adminKickedOut();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".qhb.s2c_adminKickedOut.ret: object expected");
                message.ret = $root.qhb.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_adminKickedOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_adminKickedOut
         * @static
         * @param {qhb.s2c_adminKickedOut} message s2c_adminKickedOut
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_adminKickedOut.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = null;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.qhb.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_adminKickedOut to JSON.
         * @function toJSON
         * @memberof qhb.s2c_adminKickedOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_adminKickedOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_adminKickedOut;
    })();

    qhb.c2s_refreshCoin = (function() {

        /**
         * Properties of a c2s_refreshCoin.
         * @memberof qhb
         * @interface Ic2s_refreshCoin
         * @property {number|null} [userId] c2s_refreshCoin userId
         * @property {number|null} [type] c2s_refreshCoin type
         * @property {number|null} [coin] c2s_refreshCoin coin
         */

        /**
         * Constructs a new c2s_refreshCoin.
         * @memberof qhb
         * @classdesc Represents a c2s_refreshCoin.
         * @implements Ic2s_refreshCoin
         * @constructor
         * @param {qhb.Ic2s_refreshCoin=} [properties] Properties to set
         */
        function c2s_refreshCoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_refreshCoin userId.
         * @member {number} userId
         * @memberof qhb.c2s_refreshCoin
         * @instance
         */
        c2s_refreshCoin.prototype.userId = 0;

        /**
         * c2s_refreshCoin type.
         * @member {number} type
         * @memberof qhb.c2s_refreshCoin
         * @instance
         */
        c2s_refreshCoin.prototype.type = 0;

        /**
         * c2s_refreshCoin coin.
         * @member {number} coin
         * @memberof qhb.c2s_refreshCoin
         * @instance
         */
        c2s_refreshCoin.prototype.coin = 0;

        /**
         * Creates a new c2s_refreshCoin instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {qhb.Ic2s_refreshCoin=} [properties] Properties to set
         * @returns {qhb.c2s_refreshCoin} c2s_refreshCoin instance
         */
        c2s_refreshCoin.create = function create(properties) {
            return new c2s_refreshCoin(properties);
        };

        /**
         * Encodes the specified c2s_refreshCoin message. Does not implicitly {@link qhb.c2s_refreshCoin.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {qhb.Ic2s_refreshCoin} message c2s_refreshCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_refreshCoin.encode = function encode(message, writer) {
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
         * Encodes the specified c2s_refreshCoin message, length delimited. Does not implicitly {@link qhb.c2s_refreshCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {qhb.Ic2s_refreshCoin} message c2s_refreshCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_refreshCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_refreshCoin message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_refreshCoin} c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_refreshCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_refreshCoin();
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
         * Decodes a c2s_refreshCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_refreshCoin} c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_refreshCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_refreshCoin message.
         * @function verify
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_refreshCoin.verify = function verify(message) {
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
         * Creates a c2s_refreshCoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_refreshCoin} c2s_refreshCoin
         */
        c2s_refreshCoin.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_refreshCoin)
                return object;
            var message = new $root.qhb.c2s_refreshCoin();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_refreshCoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_refreshCoin
         * @static
         * @param {qhb.c2s_refreshCoin} message c2s_refreshCoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_refreshCoin.toObject = function toObject(message, options) {
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
         * Converts this c2s_refreshCoin to JSON.
         * @function toJSON
         * @memberof qhb.c2s_refreshCoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_refreshCoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_refreshCoin;
    })();

    qhb.s2c_refreshCoin = (function() {

        /**
         * Properties of a s2c_refreshCoin.
         * @memberof qhb
         * @interface Is2c_refreshCoin
         * @property {number|null} [userId] s2c_refreshCoin userId
         * @property {number|null} [coin] s2c_refreshCoin coin
         * @property {boolean|null} [isInTable] s2c_refreshCoin isInTable
         * @property {number|null} [type] s2c_refreshCoin type
         * @property {number|null} [addCoin] s2c_refreshCoin addCoin
         */

        /**
         * Constructs a new s2c_refreshCoin.
         * @memberof qhb
         * @classdesc Represents a s2c_refreshCoin.
         * @implements Is2c_refreshCoin
         * @constructor
         * @param {qhb.Is2c_refreshCoin=} [properties] Properties to set
         */
        function s2c_refreshCoin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_refreshCoin userId.
         * @member {number} userId
         * @memberof qhb.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.userId = 0;

        /**
         * s2c_refreshCoin coin.
         * @member {number} coin
         * @memberof qhb.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.coin = 0;

        /**
         * s2c_refreshCoin isInTable.
         * @member {boolean} isInTable
         * @memberof qhb.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.isInTable = false;

        /**
         * s2c_refreshCoin type.
         * @member {number} type
         * @memberof qhb.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.type = 0;

        /**
         * s2c_refreshCoin addCoin.
         * @member {number} addCoin
         * @memberof qhb.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.addCoin = 0;

        /**
         * Creates a new s2c_refreshCoin instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {qhb.Is2c_refreshCoin=} [properties] Properties to set
         * @returns {qhb.s2c_refreshCoin} s2c_refreshCoin instance
         */
        s2c_refreshCoin.create = function create(properties) {
            return new s2c_refreshCoin(properties);
        };

        /**
         * Encodes the specified s2c_refreshCoin message. Does not implicitly {@link qhb.s2c_refreshCoin.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {qhb.Is2c_refreshCoin} message s2c_refreshCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_refreshCoin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coin);
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isInTable);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            if (message.addCoin != null && message.hasOwnProperty("addCoin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.addCoin);
            return writer;
        };

        /**
         * Encodes the specified s2c_refreshCoin message, length delimited. Does not implicitly {@link qhb.s2c_refreshCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {qhb.Is2c_refreshCoin} message s2c_refreshCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_refreshCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_refreshCoin} s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_refreshCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_refreshCoin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.coin = reader.int32();
                    break;
                case 3:
                    message.isInTable = reader.bool();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                case 5:
                    message.addCoin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_refreshCoin} s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_refreshCoin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_refreshCoin message.
         * @function verify
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_refreshCoin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                if (typeof message.isInTable !== "boolean")
                    return "isInTable: boolean expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.addCoin != null && message.hasOwnProperty("addCoin"))
                if (!$util.isInteger(message.addCoin))
                    return "addCoin: integer expected";
            return null;
        };

        /**
         * Creates a s2c_refreshCoin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_refreshCoin} s2c_refreshCoin
         */
        s2c_refreshCoin.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_refreshCoin)
                return object;
            var message = new $root.qhb.s2c_refreshCoin();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            if (object.isInTable != null)
                message.isInTable = Boolean(object.isInTable);
            if (object.type != null)
                message.type = object.type | 0;
            if (object.addCoin != null)
                message.addCoin = object.addCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_refreshCoin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_refreshCoin
         * @static
         * @param {qhb.s2c_refreshCoin} message s2c_refreshCoin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_refreshCoin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.coin = 0;
                object.isInTable = false;
                object.type = 0;
                object.addCoin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            if (message.isInTable != null && message.hasOwnProperty("isInTable"))
                object.isInTable = message.isInTable;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.addCoin != null && message.hasOwnProperty("addCoin"))
                object.addCoin = message.addCoin;
            return object;
        };

        /**
         * Converts this s2c_refreshCoin to JSON.
         * @function toJSON
         * @memberof qhb.s2c_refreshCoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_refreshCoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_refreshCoin;
    })();

    qhb.c2s_apply = (function() {

        /**
         * Properties of a c2s_apply.
         * @memberof qhb
         * @interface Ic2s_apply
         * @property {number|null} [boom] c2s_apply boom
         * @property {number|null} [money] c2s_apply money
         * @property {number|null} [totalCount] c2s_apply totalCount
         */

        /**
         * Constructs a new c2s_apply.
         * @memberof qhb
         * @classdesc Represents a c2s_apply.
         * @implements Ic2s_apply
         * @constructor
         * @param {qhb.Ic2s_apply=} [properties] Properties to set
         */
        function c2s_apply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_apply boom.
         * @member {number} boom
         * @memberof qhb.c2s_apply
         * @instance
         */
        c2s_apply.prototype.boom = 0;

        /**
         * c2s_apply money.
         * @member {number} money
         * @memberof qhb.c2s_apply
         * @instance
         */
        c2s_apply.prototype.money = 0;

        /**
         * c2s_apply totalCount.
         * @member {number} totalCount
         * @memberof qhb.c2s_apply
         * @instance
         */
        c2s_apply.prototype.totalCount = 0;

        /**
         * Creates a new c2s_apply instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_apply
         * @static
         * @param {qhb.Ic2s_apply=} [properties] Properties to set
         * @returns {qhb.c2s_apply} c2s_apply instance
         */
        c2s_apply.create = function create(properties) {
            return new c2s_apply(properties);
        };

        /**
         * Encodes the specified c2s_apply message. Does not implicitly {@link qhb.c2s_apply.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_apply
         * @static
         * @param {qhb.Ic2s_apply} message c2s_apply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_apply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.boom != null && message.hasOwnProperty("boom"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.boom);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.money);
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalCount);
            return writer;
        };

        /**
         * Encodes the specified c2s_apply message, length delimited. Does not implicitly {@link qhb.c2s_apply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_apply
         * @static
         * @param {qhb.Ic2s_apply} message c2s_apply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_apply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_apply message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_apply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_apply} c2s_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_apply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_apply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.boom = reader.int32();
                    break;
                case 2:
                    message.money = reader.int32();
                    break;
                case 3:
                    message.totalCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_apply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_apply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_apply} c2s_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_apply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_apply message.
         * @function verify
         * @memberof qhb.c2s_apply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_apply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.boom != null && message.hasOwnProperty("boom"))
                if (!$util.isInteger(message.boom))
                    return "boom: integer expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money))
                    return "money: integer expected";
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                if (!$util.isInteger(message.totalCount))
                    return "totalCount: integer expected";
            return null;
        };

        /**
         * Creates a c2s_apply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_apply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_apply} c2s_apply
         */
        c2s_apply.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_apply)
                return object;
            var message = new $root.qhb.c2s_apply();
            if (object.boom != null)
                message.boom = object.boom | 0;
            if (object.money != null)
                message.money = object.money | 0;
            if (object.totalCount != null)
                message.totalCount = object.totalCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_apply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_apply
         * @static
         * @param {qhb.c2s_apply} message c2s_apply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_apply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.boom = 0;
                object.money = 0;
                object.totalCount = 0;
            }
            if (message.boom != null && message.hasOwnProperty("boom"))
                object.boom = message.boom;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            return object;
        };

        /**
         * Converts this c2s_apply to JSON.
         * @function toJSON
         * @memberof qhb.c2s_apply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_apply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_apply;
    })();

    qhb.s2c_apply = (function() {

        /**
         * Properties of a s2c_apply.
         * @memberof qhb
         * @interface Is2c_apply
         * @property {number|null} [boom] s2c_apply boom
         * @property {number|null} [money] s2c_apply money
         * @property {number|null} [totalCount] s2c_apply totalCount
         * @property {number|null} [userId] s2c_apply userId
         * @property {string|null} [nickName] s2c_apply nickName
         * @property {string|null} [headImg] s2c_apply headImg
         * @property {number|null} [coin] s2c_apply coin
         */

        /**
         * Constructs a new s2c_apply.
         * @memberof qhb
         * @classdesc Represents a s2c_apply.
         * @implements Is2c_apply
         * @constructor
         * @param {qhb.Is2c_apply=} [properties] Properties to set
         */
        function s2c_apply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_apply boom.
         * @member {number} boom
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.boom = 0;

        /**
         * s2c_apply money.
         * @member {number} money
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.money = 0;

        /**
         * s2c_apply totalCount.
         * @member {number} totalCount
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.totalCount = 0;

        /**
         * s2c_apply userId.
         * @member {number} userId
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.userId = 0;

        /**
         * s2c_apply nickName.
         * @member {string} nickName
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.nickName = "";

        /**
         * s2c_apply headImg.
         * @member {string} headImg
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.headImg = "";

        /**
         * s2c_apply coin.
         * @member {number} coin
         * @memberof qhb.s2c_apply
         * @instance
         */
        s2c_apply.prototype.coin = 0;

        /**
         * Creates a new s2c_apply instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_apply
         * @static
         * @param {qhb.Is2c_apply=} [properties] Properties to set
         * @returns {qhb.s2c_apply} s2c_apply instance
         */
        s2c_apply.create = function create(properties) {
            return new s2c_apply(properties);
        };

        /**
         * Encodes the specified s2c_apply message. Does not implicitly {@link qhb.s2c_apply.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_apply
         * @static
         * @param {qhb.Is2c_apply} message s2c_apply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_apply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.boom != null && message.hasOwnProperty("boom"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.boom);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.money);
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalCount);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.userId);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickName);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.headImg);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.coin);
            return writer;
        };

        /**
         * Encodes the specified s2c_apply message, length delimited. Does not implicitly {@link qhb.s2c_apply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_apply
         * @static
         * @param {qhb.Is2c_apply} message s2c_apply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_apply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_apply message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_apply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_apply} s2c_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_apply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_apply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.boom = reader.int32();
                    break;
                case 2:
                    message.money = reader.int32();
                    break;
                case 3:
                    message.totalCount = reader.int32();
                    break;
                case 4:
                    message.userId = reader.int32();
                    break;
                case 5:
                    message.nickName = reader.string();
                    break;
                case 6:
                    message.headImg = reader.string();
                    break;
                case 7:
                    message.coin = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_apply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_apply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_apply} s2c_apply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_apply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_apply message.
         * @function verify
         * @memberof qhb.s2c_apply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_apply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.boom != null && message.hasOwnProperty("boom"))
                if (!$util.isInteger(message.boom))
                    return "boom: integer expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money))
                    return "money: integer expected";
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                if (!$util.isInteger(message.totalCount))
                    return "totalCount: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            return null;
        };

        /**
         * Creates a s2c_apply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_apply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_apply} s2c_apply
         */
        s2c_apply.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_apply)
                return object;
            var message = new $root.qhb.s2c_apply();
            if (object.boom != null)
                message.boom = object.boom | 0;
            if (object.money != null)
                message.money = object.money | 0;
            if (object.totalCount != null)
                message.totalCount = object.totalCount | 0;
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.coin != null)
                message.coin = Number(object.coin);
            return message;
        };

        /**
         * Creates a plain object from a s2c_apply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_apply
         * @static
         * @param {qhb.s2c_apply} message s2c_apply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_apply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.boom = 0;
                object.money = 0;
                object.totalCount = 0;
                object.userId = 0;
                object.nickName = "";
                object.headImg = "";
                object.coin = 0;
            }
            if (message.boom != null && message.hasOwnProperty("boom"))
                object.boom = message.boom;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            return object;
        };

        /**
         * Converts this s2c_apply to JSON.
         * @function toJSON
         * @memberof qhb.s2c_apply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_apply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_apply;
    })();

    qhb.c2s_disApply = (function() {

        /**
         * Properties of a c2s_disApply.
         * @memberof qhb
         * @interface Ic2s_disApply
         */

        /**
         * Constructs a new c2s_disApply.
         * @memberof qhb
         * @classdesc Represents a c2s_disApply.
         * @implements Ic2s_disApply
         * @constructor
         * @param {qhb.Ic2s_disApply=} [properties] Properties to set
         */
        function c2s_disApply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_disApply instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_disApply
         * @static
         * @param {qhb.Ic2s_disApply=} [properties] Properties to set
         * @returns {qhb.c2s_disApply} c2s_disApply instance
         */
        c2s_disApply.create = function create(properties) {
            return new c2s_disApply(properties);
        };

        /**
         * Encodes the specified c2s_disApply message. Does not implicitly {@link qhb.c2s_disApply.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_disApply
         * @static
         * @param {qhb.Ic2s_disApply} message c2s_disApply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_disApply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_disApply message, length delimited. Does not implicitly {@link qhb.c2s_disApply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_disApply
         * @static
         * @param {qhb.Ic2s_disApply} message c2s_disApply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_disApply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_disApply message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_disApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_disApply} c2s_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_disApply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_disApply();
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
         * Decodes a c2s_disApply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_disApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_disApply} c2s_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_disApply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_disApply message.
         * @function verify
         * @memberof qhb.c2s_disApply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_disApply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_disApply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_disApply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_disApply} c2s_disApply
         */
        c2s_disApply.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_disApply)
                return object;
            return new $root.qhb.c2s_disApply();
        };

        /**
         * Creates a plain object from a c2s_disApply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_disApply
         * @static
         * @param {qhb.c2s_disApply} message c2s_disApply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_disApply.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_disApply to JSON.
         * @function toJSON
         * @memberof qhb.c2s_disApply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_disApply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_disApply;
    })();

    qhb.s2c_disApply = (function() {

        /**
         * Properties of a s2c_disApply.
         * @memberof qhb
         * @interface Is2c_disApply
         * @property {number|null} [coin] s2c_disApply coin
         */

        /**
         * Constructs a new s2c_disApply.
         * @memberof qhb
         * @classdesc Represents a s2c_disApply.
         * @implements Is2c_disApply
         * @constructor
         * @param {qhb.Is2c_disApply=} [properties] Properties to set
         */
        function s2c_disApply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_disApply coin.
         * @member {number} coin
         * @memberof qhb.s2c_disApply
         * @instance
         */
        s2c_disApply.prototype.coin = 0;

        /**
         * Creates a new s2c_disApply instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_disApply
         * @static
         * @param {qhb.Is2c_disApply=} [properties] Properties to set
         * @returns {qhb.s2c_disApply} s2c_disApply instance
         */
        s2c_disApply.create = function create(properties) {
            return new s2c_disApply(properties);
        };

        /**
         * Encodes the specified s2c_disApply message. Does not implicitly {@link qhb.s2c_disApply.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_disApply
         * @static
         * @param {qhb.Is2c_disApply} message s2c_disApply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_disApply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.coin);
            return writer;
        };

        /**
         * Encodes the specified s2c_disApply message, length delimited. Does not implicitly {@link qhb.s2c_disApply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_disApply
         * @static
         * @param {qhb.Is2c_disApply} message s2c_disApply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_disApply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_disApply message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_disApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_disApply} s2c_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_disApply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_disApply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coin = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_disApply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_disApply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_disApply} s2c_disApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_disApply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_disApply message.
         * @function verify
         * @memberof qhb.s2c_disApply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_disApply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            return null;
        };

        /**
         * Creates a s2c_disApply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_disApply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_disApply} s2c_disApply
         */
        s2c_disApply.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_disApply)
                return object;
            var message = new $root.qhb.s2c_disApply();
            if (object.coin != null)
                message.coin = Number(object.coin);
            return message;
        };

        /**
         * Creates a plain object from a s2c_disApply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_disApply
         * @static
         * @param {qhb.s2c_disApply} message s2c_disApply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_disApply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.coin = 0;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            return object;
        };

        /**
         * Converts this s2c_disApply to JSON.
         * @function toJSON
         * @memberof qhb.s2c_disApply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_disApply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_disApply;
    })();

    qhb.c2s_joinTable = (function() {

        /**
         * Properties of a c2s_joinTable.
         * @memberof qhb
         * @interface Ic2s_joinTable
         * @property {string|null} [sid] c2s_joinTable sid
         * @property {number|null} [tableType] c2s_joinTable tableType
         */

        /**
         * Constructs a new c2s_joinTable.
         * @memberof qhb
         * @classdesc Represents a c2s_joinTable.
         * @implements Ic2s_joinTable
         * @constructor
         * @param {qhb.Ic2s_joinTable=} [properties] Properties to set
         */
        function c2s_joinTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_joinTable sid.
         * @member {string} sid
         * @memberof qhb.c2s_joinTable
         * @instance
         */
        c2s_joinTable.prototype.sid = "";

        /**
         * c2s_joinTable tableType.
         * @member {number} tableType
         * @memberof qhb.c2s_joinTable
         * @instance
         */
        c2s_joinTable.prototype.tableType = 0;

        /**
         * Creates a new c2s_joinTable instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {qhb.Ic2s_joinTable=} [properties] Properties to set
         * @returns {qhb.c2s_joinTable} c2s_joinTable instance
         */
        c2s_joinTable.create = function create(properties) {
            return new c2s_joinTable(properties);
        };

        /**
         * Encodes the specified c2s_joinTable message. Does not implicitly {@link qhb.c2s_joinTable.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {qhb.Ic2s_joinTable} message c2s_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_joinTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableType);
            return writer;
        };

        /**
         * Encodes the specified c2s_joinTable message, length delimited. Does not implicitly {@link qhb.c2s_joinTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {qhb.Ic2s_joinTable} message c2s_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_joinTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_joinTable} c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_joinTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_joinTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
                    break;
                case 2:
                    message.tableType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_joinTable} c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_joinTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_joinTable message.
         * @function verify
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_joinTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                if (!$util.isInteger(message.tableType))
                    return "tableType: integer expected";
            return null;
        };

        /**
         * Creates a c2s_joinTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_joinTable} c2s_joinTable
         */
        c2s_joinTable.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_joinTable)
                return object;
            var message = new $root.qhb.c2s_joinTable();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.tableType != null)
                message.tableType = object.tableType | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_joinTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_joinTable
         * @static
         * @param {qhb.c2s_joinTable} message c2s_joinTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_joinTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sid = "";
                object.tableType = 0;
            }
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                object.tableType = message.tableType;
            return object;
        };

        /**
         * Converts this c2s_joinTable to JSON.
         * @function toJSON
         * @memberof qhb.c2s_joinTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_joinTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_joinTable;
    })();

    qhb.s2c_joinTable = (function() {

        /**
         * Properties of a s2c_joinTable.
         * @memberof qhb
         * @interface Is2c_joinTable
         * @property {qhb.ITableInfo|null} [tableInfo] s2c_joinTable tableInfo
         */

        /**
         * Constructs a new s2c_joinTable.
         * @memberof qhb
         * @classdesc Represents a s2c_joinTable.
         * @implements Is2c_joinTable
         * @constructor
         * @param {qhb.Is2c_joinTable=} [properties] Properties to set
         */
        function s2c_joinTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_joinTable tableInfo.
         * @member {qhb.ITableInfo|null|undefined} tableInfo
         * @memberof qhb.s2c_joinTable
         * @instance
         */
        s2c_joinTable.prototype.tableInfo = null;

        /**
         * Creates a new s2c_joinTable instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {qhb.Is2c_joinTable=} [properties] Properties to set
         * @returns {qhb.s2c_joinTable} s2c_joinTable instance
         */
        s2c_joinTable.create = function create(properties) {
            return new s2c_joinTable(properties);
        };

        /**
         * Encodes the specified s2c_joinTable message. Does not implicitly {@link qhb.s2c_joinTable.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {qhb.Is2c_joinTable} message s2c_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_joinTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                $root.qhb.TableInfo.encode(message.tableInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_joinTable message, length delimited. Does not implicitly {@link qhb.s2c_joinTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {qhb.Is2c_joinTable} message s2c_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_joinTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_joinTable} s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_joinTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_joinTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableInfo = $root.qhb.TableInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_joinTable} s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_joinTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_joinTable message.
         * @function verify
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_joinTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo")) {
                var error = $root.qhb.TableInfo.verify(message.tableInfo);
                if (error)
                    return "tableInfo." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_joinTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_joinTable} s2c_joinTable
         */
        s2c_joinTable.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_joinTable)
                return object;
            var message = new $root.qhb.s2c_joinTable();
            if (object.tableInfo != null) {
                if (typeof object.tableInfo !== "object")
                    throw TypeError(".qhb.s2c_joinTable.tableInfo: object expected");
                message.tableInfo = $root.qhb.TableInfo.fromObject(object.tableInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_joinTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_joinTable
         * @static
         * @param {qhb.s2c_joinTable} message s2c_joinTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_joinTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableInfo = null;
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                object.tableInfo = $root.qhb.TableInfo.toObject(message.tableInfo, options);
            return object;
        };

        /**
         * Converts this s2c_joinTable to JSON.
         * @function toJSON
         * @memberof qhb.s2c_joinTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_joinTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_joinTable;
    })();

    qhb.c2s_getUserList = (function() {

        /**
         * Properties of a c2s_getUserList.
         * @memberof qhb
         * @interface Ic2s_getUserList
         * @property {number|null} [type] c2s_getUserList type
         */

        /**
         * Constructs a new c2s_getUserList.
         * @memberof qhb
         * @classdesc Represents a c2s_getUserList.
         * @implements Ic2s_getUserList
         * @constructor
         * @param {qhb.Ic2s_getUserList=} [properties] Properties to set
         */
        function c2s_getUserList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_getUserList type.
         * @member {number} type
         * @memberof qhb.c2s_getUserList
         * @instance
         */
        c2s_getUserList.prototype.type = 0;

        /**
         * Creates a new c2s_getUserList instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {qhb.Ic2s_getUserList=} [properties] Properties to set
         * @returns {qhb.c2s_getUserList} c2s_getUserList instance
         */
        c2s_getUserList.create = function create(properties) {
            return new c2s_getUserList(properties);
        };

        /**
         * Encodes the specified c2s_getUserList message. Does not implicitly {@link qhb.c2s_getUserList.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {qhb.Ic2s_getUserList} message c2s_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_getUserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified c2s_getUserList message, length delimited. Does not implicitly {@link qhb.c2s_getUserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {qhb.Ic2s_getUserList} message c2s_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_getUserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_getUserList} c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_getUserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_getUserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_getUserList} c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_getUserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_getUserList message.
         * @function verify
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_getUserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a c2s_getUserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_getUserList} c2s_getUserList
         */
        c2s_getUserList.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_getUserList)
                return object;
            var message = new $root.qhb.c2s_getUserList();
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_getUserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_getUserList
         * @static
         * @param {qhb.c2s_getUserList} message c2s_getUserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_getUserList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this c2s_getUserList to JSON.
         * @function toJSON
         * @memberof qhb.c2s_getUserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_getUserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_getUserList;
    })();

    qhb.s2c_getUserList = (function() {

        /**
         * Properties of a s2c_getUserList.
         * @memberof qhb
         * @interface Is2c_getUserList
         * @property {Array.<qhb.IPlayer>|null} [users] s2c_getUserList users
         * @property {qhb.IPlayer|null} [selfInfo] s2c_getUserList selfInfo
         */

        /**
         * Constructs a new s2c_getUserList.
         * @memberof qhb
         * @classdesc Represents a s2c_getUserList.
         * @implements Is2c_getUserList
         * @constructor
         * @param {qhb.Is2c_getUserList=} [properties] Properties to set
         */
        function s2c_getUserList(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_getUserList users.
         * @member {Array.<qhb.IPlayer>} users
         * @memberof qhb.s2c_getUserList
         * @instance
         */
        s2c_getUserList.prototype.users = $util.emptyArray;

        /**
         * s2c_getUserList selfInfo.
         * @member {qhb.IPlayer|null|undefined} selfInfo
         * @memberof qhb.s2c_getUserList
         * @instance
         */
        s2c_getUserList.prototype.selfInfo = null;

        /**
         * Creates a new s2c_getUserList instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {qhb.Is2c_getUserList=} [properties] Properties to set
         * @returns {qhb.s2c_getUserList} s2c_getUserList instance
         */
        s2c_getUserList.create = function create(properties) {
            return new s2c_getUserList(properties);
        };

        /**
         * Encodes the specified s2c_getUserList message. Does not implicitly {@link qhb.s2c_getUserList.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {qhb.Is2c_getUserList} message s2c_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_getUserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.qhb.Player.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.selfInfo != null && message.hasOwnProperty("selfInfo"))
                $root.qhb.Player.encode(message.selfInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_getUserList message, length delimited. Does not implicitly {@link qhb.s2c_getUserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {qhb.Is2c_getUserList} message s2c_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_getUserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_getUserList} s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_getUserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_getUserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.qhb.Player.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.selfInfo = $root.qhb.Player.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_getUserList} s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_getUserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_getUserList message.
         * @function verify
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_getUserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.qhb.Player.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.selfInfo != null && message.hasOwnProperty("selfInfo")) {
                var error = $root.qhb.Player.verify(message.selfInfo);
                if (error)
                    return "selfInfo." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_getUserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_getUserList} s2c_getUserList
         */
        s2c_getUserList.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_getUserList)
                return object;
            var message = new $root.qhb.s2c_getUserList();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".qhb.s2c_getUserList.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".qhb.s2c_getUserList.users: object expected");
                    message.users[i] = $root.qhb.Player.fromObject(object.users[i]);
                }
            }
            if (object.selfInfo != null) {
                if (typeof object.selfInfo !== "object")
                    throw TypeError(".qhb.s2c_getUserList.selfInfo: object expected");
                message.selfInfo = $root.qhb.Player.fromObject(object.selfInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_getUserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_getUserList
         * @static
         * @param {qhb.s2c_getUserList} message s2c_getUserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_getUserList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults)
                object.selfInfo = null;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.qhb.Player.toObject(message.users[j], options);
            }
            if (message.selfInfo != null && message.hasOwnProperty("selfInfo"))
                object.selfInfo = $root.qhb.Player.toObject(message.selfInfo, options);
            return object;
        };

        /**
         * Converts this s2c_getUserList to JSON.
         * @function toJSON
         * @memberof qhb.s2c_getUserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_getUserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_getUserList;
    })();

    qhb.c2s_qiang = (function() {

        /**
         * Properties of a c2s_qiang.
         * @memberof qhb
         * @interface Ic2s_qiang
         */

        /**
         * Constructs a new c2s_qiang.
         * @memberof qhb
         * @classdesc Represents a c2s_qiang.
         * @implements Ic2s_qiang
         * @constructor
         * @param {qhb.Ic2s_qiang=} [properties] Properties to set
         */
        function c2s_qiang(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_qiang instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_qiang
         * @static
         * @param {qhb.Ic2s_qiang=} [properties] Properties to set
         * @returns {qhb.c2s_qiang} c2s_qiang instance
         */
        c2s_qiang.create = function create(properties) {
            return new c2s_qiang(properties);
        };

        /**
         * Encodes the specified c2s_qiang message. Does not implicitly {@link qhb.c2s_qiang.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_qiang
         * @static
         * @param {qhb.Ic2s_qiang} message c2s_qiang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_qiang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_qiang message, length delimited. Does not implicitly {@link qhb.c2s_qiang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_qiang
         * @static
         * @param {qhb.Ic2s_qiang} message c2s_qiang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_qiang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_qiang message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_qiang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_qiang} c2s_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_qiang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_qiang();
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
         * Decodes a c2s_qiang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_qiang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_qiang} c2s_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_qiang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_qiang message.
         * @function verify
         * @memberof qhb.c2s_qiang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_qiang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_qiang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_qiang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_qiang} c2s_qiang
         */
        c2s_qiang.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_qiang)
                return object;
            return new $root.qhb.c2s_qiang();
        };

        /**
         * Creates a plain object from a c2s_qiang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_qiang
         * @static
         * @param {qhb.c2s_qiang} message c2s_qiang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_qiang.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_qiang to JSON.
         * @function toJSON
         * @memberof qhb.c2s_qiang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_qiang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_qiang;
    })();

    qhb.s2c_qiang = (function() {

        /**
         * Properties of a s2c_qiang.
         * @memberof qhb
         * @interface Is2c_qiang
         * @property {number|null} [money] s2c_qiang money
         * @property {number|null} [coin] s2c_qiang coin
         */

        /**
         * Constructs a new s2c_qiang.
         * @memberof qhb
         * @classdesc Represents a s2c_qiang.
         * @implements Is2c_qiang
         * @constructor
         * @param {qhb.Is2c_qiang=} [properties] Properties to set
         */
        function s2c_qiang(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_qiang money.
         * @member {number} money
         * @memberof qhb.s2c_qiang
         * @instance
         */
        s2c_qiang.prototype.money = 0;

        /**
         * s2c_qiang coin.
         * @member {number} coin
         * @memberof qhb.s2c_qiang
         * @instance
         */
        s2c_qiang.prototype.coin = 0;

        /**
         * Creates a new s2c_qiang instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_qiang
         * @static
         * @param {qhb.Is2c_qiang=} [properties] Properties to set
         * @returns {qhb.s2c_qiang} s2c_qiang instance
         */
        s2c_qiang.create = function create(properties) {
            return new s2c_qiang(properties);
        };

        /**
         * Encodes the specified s2c_qiang message. Does not implicitly {@link qhb.s2c_qiang.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_qiang
         * @static
         * @param {qhb.Is2c_qiang} message s2c_qiang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_qiang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.money);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.coin);
            return writer;
        };

        /**
         * Encodes the specified s2c_qiang message, length delimited. Does not implicitly {@link qhb.s2c_qiang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_qiang
         * @static
         * @param {qhb.Is2c_qiang} message s2c_qiang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_qiang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_qiang message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_qiang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_qiang} s2c_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_qiang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_qiang();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.money = reader.double();
                    break;
                case 2:
                    message.coin = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_qiang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_qiang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_qiang} s2c_qiang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_qiang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_qiang message.
         * @function verify
         * @memberof qhb.s2c_qiang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_qiang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money !== "number")
                    return "money: number expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            return null;
        };

        /**
         * Creates a s2c_qiang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_qiang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_qiang} s2c_qiang
         */
        s2c_qiang.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_qiang)
                return object;
            var message = new $root.qhb.s2c_qiang();
            if (object.money != null)
                message.money = Number(object.money);
            if (object.coin != null)
                message.coin = Number(object.coin);
            return message;
        };

        /**
         * Creates a plain object from a s2c_qiang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_qiang
         * @static
         * @param {qhb.s2c_qiang} message s2c_qiang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_qiang.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.money = 0;
                object.coin = 0;
            }
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = options.json && !isFinite(message.money) ? String(message.money) : message.money;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            return object;
        };

        /**
         * Converts this s2c_qiang to JSON.
         * @function toJSON
         * @memberof qhb.s2c_qiang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_qiang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_qiang;
    })();

    qhb.s2c_qiangPush = (function() {

        /**
         * Properties of a s2c_qiangPush.
         * @memberof qhb
         * @interface Is2c_qiangPush
         * @property {number|null} [money] s2c_qiangPush money
         * @property {number|null} [userId] s2c_qiangPush userId
         * @property {string|null} [headImg] s2c_qiangPush headImg
         * @property {string|null} [nickName] s2c_qiangPush nickName
         */

        /**
         * Constructs a new s2c_qiangPush.
         * @memberof qhb
         * @classdesc Represents a s2c_qiangPush.
         * @implements Is2c_qiangPush
         * @constructor
         * @param {qhb.Is2c_qiangPush=} [properties] Properties to set
         */
        function s2c_qiangPush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_qiangPush money.
         * @member {number} money
         * @memberof qhb.s2c_qiangPush
         * @instance
         */
        s2c_qiangPush.prototype.money = 0;

        /**
         * s2c_qiangPush userId.
         * @member {number} userId
         * @memberof qhb.s2c_qiangPush
         * @instance
         */
        s2c_qiangPush.prototype.userId = 0;

        /**
         * s2c_qiangPush headImg.
         * @member {string} headImg
         * @memberof qhb.s2c_qiangPush
         * @instance
         */
        s2c_qiangPush.prototype.headImg = "";

        /**
         * s2c_qiangPush nickName.
         * @member {string} nickName
         * @memberof qhb.s2c_qiangPush
         * @instance
         */
        s2c_qiangPush.prototype.nickName = "";

        /**
         * Creates a new s2c_qiangPush instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {qhb.Is2c_qiangPush=} [properties] Properties to set
         * @returns {qhb.s2c_qiangPush} s2c_qiangPush instance
         */
        s2c_qiangPush.create = function create(properties) {
            return new s2c_qiangPush(properties);
        };

        /**
         * Encodes the specified s2c_qiangPush message. Does not implicitly {@link qhb.s2c_qiangPush.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {qhb.Is2c_qiangPush} message s2c_qiangPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_qiangPush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.money);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.userId);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.headImg);
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickName);
            return writer;
        };

        /**
         * Encodes the specified s2c_qiangPush message, length delimited. Does not implicitly {@link qhb.s2c_qiangPush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {qhb.Is2c_qiangPush} message s2c_qiangPush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_qiangPush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_qiangPush message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_qiangPush} s2c_qiangPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_qiangPush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_qiangPush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.money = reader.double();
                    break;
                case 2:
                    message.userId = reader.int32();
                    break;
                case 3:
                    message.headImg = reader.string();
                    break;
                case 4:
                    message.nickName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_qiangPush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_qiangPush} s2c_qiangPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_qiangPush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_qiangPush message.
         * @function verify
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_qiangPush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money !== "number")
                    return "money: number expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            return null;
        };

        /**
         * Creates a s2c_qiangPush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_qiangPush} s2c_qiangPush
         */
        s2c_qiangPush.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_qiangPush)
                return object;
            var message = new $root.qhb.s2c_qiangPush();
            if (object.money != null)
                message.money = Number(object.money);
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            return message;
        };

        /**
         * Creates a plain object from a s2c_qiangPush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_qiangPush
         * @static
         * @param {qhb.s2c_qiangPush} message s2c_qiangPush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_qiangPush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.money = 0;
                object.userId = 0;
                object.headImg = "";
                object.nickName = "";
            }
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = options.json && !isFinite(message.money) ? String(message.money) : message.money;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            return object;
        };

        /**
         * Converts this s2c_qiangPush to JSON.
         * @function toJSON
         * @memberof qhb.s2c_qiangPush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_qiangPush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_qiangPush;
    })();

    qhb.c2s_reconnect = (function() {

        /**
         * Properties of a c2s_reconnect.
         * @memberof qhb
         * @interface Ic2s_reconnect
         * @property {number|null} [userId] c2s_reconnect userId
         */

        /**
         * Constructs a new c2s_reconnect.
         * @memberof qhb
         * @classdesc Represents a c2s_reconnect.
         * @implements Ic2s_reconnect
         * @constructor
         * @param {qhb.Ic2s_reconnect=} [properties] Properties to set
         */
        function c2s_reconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_reconnect userId.
         * @member {number} userId
         * @memberof qhb.c2s_reconnect
         * @instance
         */
        c2s_reconnect.prototype.userId = 0;

        /**
         * Creates a new c2s_reconnect instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {qhb.Ic2s_reconnect=} [properties] Properties to set
         * @returns {qhb.c2s_reconnect} c2s_reconnect instance
         */
        c2s_reconnect.create = function create(properties) {
            return new c2s_reconnect(properties);
        };

        /**
         * Encodes the specified c2s_reconnect message. Does not implicitly {@link qhb.c2s_reconnect.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {qhb.Ic2s_reconnect} message c2s_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_reconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified c2s_reconnect message, length delimited. Does not implicitly {@link qhb.c2s_reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {qhb.Ic2s_reconnect} message c2s_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_reconnect} c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_reconnect();
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
         * Decodes a c2s_reconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_reconnect} c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_reconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_reconnect message.
         * @function verify
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_reconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a c2s_reconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_reconnect} c2s_reconnect
         */
        c2s_reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_reconnect)
                return object;
            var message = new $root.qhb.c2s_reconnect();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_reconnect
         * @static
         * @param {qhb.c2s_reconnect} message c2s_reconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_reconnect.toObject = function toObject(message, options) {
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
         * Converts this c2s_reconnect to JSON.
         * @function toJSON
         * @memberof qhb.c2s_reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_reconnect;
    })();

    qhb.s2c_reconnect = (function() {

        /**
         * Properties of a s2c_reconnect.
         * @memberof qhb
         * @interface Is2c_reconnect
         * @property {qhb.ITableInfo|null} [tableInfo] s2c_reconnect tableInfo
         */

        /**
         * Constructs a new s2c_reconnect.
         * @memberof qhb
         * @classdesc Represents a s2c_reconnect.
         * @implements Is2c_reconnect
         * @constructor
         * @param {qhb.Is2c_reconnect=} [properties] Properties to set
         */
        function s2c_reconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_reconnect tableInfo.
         * @member {qhb.ITableInfo|null|undefined} tableInfo
         * @memberof qhb.s2c_reconnect
         * @instance
         */
        s2c_reconnect.prototype.tableInfo = null;

        /**
         * Creates a new s2c_reconnect instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {qhb.Is2c_reconnect=} [properties] Properties to set
         * @returns {qhb.s2c_reconnect} s2c_reconnect instance
         */
        s2c_reconnect.create = function create(properties) {
            return new s2c_reconnect(properties);
        };

        /**
         * Encodes the specified s2c_reconnect message. Does not implicitly {@link qhb.s2c_reconnect.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {qhb.Is2c_reconnect} message s2c_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_reconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                $root.qhb.TableInfo.encode(message.tableInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_reconnect message, length delimited. Does not implicitly {@link qhb.s2c_reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {qhb.Is2c_reconnect} message s2c_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_reconnect} s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_reconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableInfo = $root.qhb.TableInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_reconnect} s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_reconnect.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_reconnect message.
         * @function verify
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_reconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo")) {
                var error = $root.qhb.TableInfo.verify(message.tableInfo);
                if (error)
                    return "tableInfo." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_reconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_reconnect} s2c_reconnect
         */
        s2c_reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_reconnect)
                return object;
            var message = new $root.qhb.s2c_reconnect();
            if (object.tableInfo != null) {
                if (typeof object.tableInfo !== "object")
                    throw TypeError(".qhb.s2c_reconnect.tableInfo: object expected");
                message.tableInfo = $root.qhb.TableInfo.fromObject(object.tableInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_reconnect
         * @static
         * @param {qhb.s2c_reconnect} message s2c_reconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_reconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.tableInfo = null;
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                object.tableInfo = $root.qhb.TableInfo.toObject(message.tableInfo, options);
            return object;
        };

        /**
         * Converts this s2c_reconnect to JSON.
         * @function toJSON
         * @memberof qhb.s2c_reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_reconnect;
    })();

    qhb.c2s_userOnBack = (function() {

        /**
         * Properties of a c2s_userOnBack.
         * @memberof qhb
         * @interface Ic2s_userOnBack
         * @property {number|null} [onBack] c2s_userOnBack onBack
         */

        /**
         * Constructs a new c2s_userOnBack.
         * @memberof qhb
         * @classdesc Represents a c2s_userOnBack.
         * @implements Ic2s_userOnBack
         * @constructor
         * @param {qhb.Ic2s_userOnBack=} [properties] Properties to set
         */
        function c2s_userOnBack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_userOnBack onBack.
         * @member {number} onBack
         * @memberof qhb.c2s_userOnBack
         * @instance
         */
        c2s_userOnBack.prototype.onBack = 0;

        /**
         * Creates a new c2s_userOnBack instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {qhb.Ic2s_userOnBack=} [properties] Properties to set
         * @returns {qhb.c2s_userOnBack} c2s_userOnBack instance
         */
        c2s_userOnBack.create = function create(properties) {
            return new c2s_userOnBack(properties);
        };

        /**
         * Encodes the specified c2s_userOnBack message. Does not implicitly {@link qhb.c2s_userOnBack.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {qhb.Ic2s_userOnBack} message c2s_userOnBack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userOnBack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.onBack != null && message.hasOwnProperty("onBack"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.onBack);
            return writer;
        };

        /**
         * Encodes the specified c2s_userOnBack message, length delimited. Does not implicitly {@link qhb.c2s_userOnBack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {qhb.Ic2s_userOnBack} message c2s_userOnBack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userOnBack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_userOnBack message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_userOnBack} c2s_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userOnBack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_userOnBack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.onBack = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_userOnBack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_userOnBack} c2s_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userOnBack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_userOnBack message.
         * @function verify
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_userOnBack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.onBack != null && message.hasOwnProperty("onBack"))
                if (!$util.isInteger(message.onBack))
                    return "onBack: integer expected";
            return null;
        };

        /**
         * Creates a c2s_userOnBack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_userOnBack} c2s_userOnBack
         */
        c2s_userOnBack.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_userOnBack)
                return object;
            var message = new $root.qhb.c2s_userOnBack();
            if (object.onBack != null)
                message.onBack = object.onBack | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_userOnBack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_userOnBack
         * @static
         * @param {qhb.c2s_userOnBack} message c2s_userOnBack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_userOnBack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.onBack = 0;
            if (message.onBack != null && message.hasOwnProperty("onBack"))
                object.onBack = message.onBack;
            return object;
        };

        /**
         * Converts this c2s_userOnBack to JSON.
         * @function toJSON
         * @memberof qhb.c2s_userOnBack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_userOnBack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_userOnBack;
    })();

    qhb.s2c_userOnBack = (function() {

        /**
         * Properties of a s2c_userOnBack.
         * @memberof qhb
         * @interface Is2c_userOnBack
         * @property {number|null} [userId] s2c_userOnBack userId
         */

        /**
         * Constructs a new s2c_userOnBack.
         * @memberof qhb
         * @classdesc Represents a s2c_userOnBack.
         * @implements Is2c_userOnBack
         * @constructor
         * @param {qhb.Is2c_userOnBack=} [properties] Properties to set
         */
        function s2c_userOnBack(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_userOnBack userId.
         * @member {number} userId
         * @memberof qhb.s2c_userOnBack
         * @instance
         */
        s2c_userOnBack.prototype.userId = 0;

        /**
         * Creates a new s2c_userOnBack instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {qhb.Is2c_userOnBack=} [properties] Properties to set
         * @returns {qhb.s2c_userOnBack} s2c_userOnBack instance
         */
        s2c_userOnBack.create = function create(properties) {
            return new s2c_userOnBack(properties);
        };

        /**
         * Encodes the specified s2c_userOnBack message. Does not implicitly {@link qhb.s2c_userOnBack.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {qhb.Is2c_userOnBack} message s2c_userOnBack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userOnBack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified s2c_userOnBack message, length delimited. Does not implicitly {@link qhb.s2c_userOnBack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {qhb.Is2c_userOnBack} message s2c_userOnBack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userOnBack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_userOnBack message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_userOnBack} s2c_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userOnBack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_userOnBack();
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
         * Decodes a s2c_userOnBack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_userOnBack} s2c_userOnBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userOnBack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_userOnBack message.
         * @function verify
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_userOnBack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a s2c_userOnBack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_userOnBack} s2c_userOnBack
         */
        s2c_userOnBack.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_userOnBack)
                return object;
            var message = new $root.qhb.s2c_userOnBack();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_userOnBack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_userOnBack
         * @static
         * @param {qhb.s2c_userOnBack} message s2c_userOnBack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_userOnBack.toObject = function toObject(message, options) {
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
         * Converts this s2c_userOnBack to JSON.
         * @function toJSON
         * @memberof qhb.s2c_userOnBack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_userOnBack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_userOnBack;
    })();

    qhb.c2s_userQuit = (function() {

        /**
         * Properties of a c2s_userQuit.
         * @memberof qhb
         * @interface Ic2s_userQuit
         */

        /**
         * Constructs a new c2s_userQuit.
         * @memberof qhb
         * @classdesc Represents a c2s_userQuit.
         * @implements Ic2s_userQuit
         * @constructor
         * @param {qhb.Ic2s_userQuit=} [properties] Properties to set
         */
        function c2s_userQuit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_userQuit instance using the specified properties.
         * @function create
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {qhb.Ic2s_userQuit=} [properties] Properties to set
         * @returns {qhb.c2s_userQuit} c2s_userQuit instance
         */
        c2s_userQuit.create = function create(properties) {
            return new c2s_userQuit(properties);
        };

        /**
         * Encodes the specified c2s_userQuit message. Does not implicitly {@link qhb.c2s_userQuit.verify|verify} messages.
         * @function encode
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {qhb.Ic2s_userQuit} message c2s_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userQuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_userQuit message, length delimited. Does not implicitly {@link qhb.c2s_userQuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {qhb.Ic2s_userQuit} message c2s_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userQuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_userQuit message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.c2s_userQuit} c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userQuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.c2s_userQuit();
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
         * Decodes a c2s_userQuit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.c2s_userQuit} c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userQuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_userQuit message.
         * @function verify
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_userQuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_userQuit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.c2s_userQuit} c2s_userQuit
         */
        c2s_userQuit.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.c2s_userQuit)
                return object;
            return new $root.qhb.c2s_userQuit();
        };

        /**
         * Creates a plain object from a c2s_userQuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.c2s_userQuit
         * @static
         * @param {qhb.c2s_userQuit} message c2s_userQuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_userQuit.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_userQuit to JSON.
         * @function toJSON
         * @memberof qhb.c2s_userQuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_userQuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_userQuit;
    })();

    qhb.s2c_userQuit = (function() {

        /**
         * Properties of a s2c_userQuit.
         * @memberof qhb
         * @interface Is2c_userQuit
         * @property {number|null} [userId] s2c_userQuit userId
         */

        /**
         * Constructs a new s2c_userQuit.
         * @memberof qhb
         * @classdesc Represents a s2c_userQuit.
         * @implements Is2c_userQuit
         * @constructor
         * @param {qhb.Is2c_userQuit=} [properties] Properties to set
         */
        function s2c_userQuit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_userQuit userId.
         * @member {number} userId
         * @memberof qhb.s2c_userQuit
         * @instance
         */
        s2c_userQuit.prototype.userId = 0;

        /**
         * Creates a new s2c_userQuit instance using the specified properties.
         * @function create
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {qhb.Is2c_userQuit=} [properties] Properties to set
         * @returns {qhb.s2c_userQuit} s2c_userQuit instance
         */
        s2c_userQuit.create = function create(properties) {
            return new s2c_userQuit(properties);
        };

        /**
         * Encodes the specified s2c_userQuit message. Does not implicitly {@link qhb.s2c_userQuit.verify|verify} messages.
         * @function encode
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {qhb.Is2c_userQuit} message s2c_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userQuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified s2c_userQuit message, length delimited. Does not implicitly {@link qhb.s2c_userQuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {qhb.Is2c_userQuit} message s2c_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userQuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_userQuit message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.s2c_userQuit} s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userQuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.s2c_userQuit();
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
         * Decodes a s2c_userQuit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.s2c_userQuit} s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userQuit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_userQuit message.
         * @function verify
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_userQuit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            return null;
        };

        /**
         * Creates a s2c_userQuit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.s2c_userQuit} s2c_userQuit
         */
        s2c_userQuit.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.s2c_userQuit)
                return object;
            var message = new $root.qhb.s2c_userQuit();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a s2c_userQuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.s2c_userQuit
         * @static
         * @param {qhb.s2c_userQuit} message s2c_userQuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_userQuit.toObject = function toObject(message, options) {
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
         * Converts this s2c_userQuit to JSON.
         * @function toJSON
         * @memberof qhb.s2c_userQuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_userQuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_userQuit;
    })();

    qhb.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof qhb
         * @interface IRequest
         * @property {qhb.Request.CMD|null} [cmd] Request cmd
         * @property {qhb.Ic2s_apply|null} [apply] Request apply
         * @property {qhb.Ic2s_disApply|null} [disApply] Request disApply
         * @property {qhb.Ic2s_joinTable|null} [joinTable] Request joinTable
         * @property {qhb.Ic2s_getUserList|null} [getUserList] Request getUserList
         * @property {qhb.Ic2s_qiang|null} [qiang] Request qiang
         * @property {qhb.Ic2s_reconnect|null} [reconnect] Request reconnect
         * @property {qhb.Ic2s_userOnBack|null} [userOnBack] Request userOnBack
         * @property {qhb.Ic2s_userQuit|null} [userQuit] Request userQuit
         */

        /**
         * Constructs a new Request.
         * @memberof qhb
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {qhb.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {qhb.Request.CMD} cmd
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request apply.
         * @member {qhb.Ic2s_apply|null|undefined} apply
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.apply = null;

        /**
         * Request disApply.
         * @member {qhb.Ic2s_disApply|null|undefined} disApply
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.disApply = null;

        /**
         * Request joinTable.
         * @member {qhb.Ic2s_joinTable|null|undefined} joinTable
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.joinTable = null;

        /**
         * Request getUserList.
         * @member {qhb.Ic2s_getUserList|null|undefined} getUserList
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.getUserList = null;

        /**
         * Request qiang.
         * @member {qhb.Ic2s_qiang|null|undefined} qiang
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.qiang = null;

        /**
         * Request reconnect.
         * @member {qhb.Ic2s_reconnect|null|undefined} reconnect
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.reconnect = null;

        /**
         * Request userOnBack.
         * @member {qhb.Ic2s_userOnBack|null|undefined} userOnBack
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.userOnBack = null;

        /**
         * Request userQuit.
         * @member {qhb.Ic2s_userQuit|null|undefined} userQuit
         * @memberof qhb.Request
         * @instance
         */
        Request.prototype.userQuit = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof qhb.Request
         * @static
         * @param {qhb.IRequest=} [properties] Properties to set
         * @returns {qhb.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link qhb.Request.verify|verify} messages.
         * @function encode
         * @memberof qhb.Request
         * @static
         * @param {qhb.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.apply != null && message.hasOwnProperty("apply"))
                $root.qhb.c2s_apply.encode(message.apply, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.disApply != null && message.hasOwnProperty("disApply"))
                $root.qhb.c2s_disApply.encode(message.disApply, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.joinTable != null && message.hasOwnProperty("joinTable"))
                $root.qhb.c2s_joinTable.encode(message.joinTable, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.getUserList != null && message.hasOwnProperty("getUserList"))
                $root.qhb.c2s_getUserList.encode(message.getUserList, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                $root.qhb.c2s_qiang.encode(message.qiang, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.reconnect != null && message.hasOwnProperty("reconnect"))
                $root.qhb.c2s_reconnect.encode(message.reconnect, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.userOnBack != null && message.hasOwnProperty("userOnBack"))
                $root.qhb.c2s_userOnBack.encode(message.userOnBack, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.userQuit != null && message.hasOwnProperty("userQuit"))
                $root.qhb.c2s_userQuit.encode(message.userQuit, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link qhb.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.Request
         * @static
         * @param {qhb.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.apply = $root.qhb.c2s_apply.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.disApply = $root.qhb.c2s_disApply.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.joinTable = $root.qhb.c2s_joinTable.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.getUserList = $root.qhb.c2s_getUserList.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.qiang = $root.qhb.c2s_qiang.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.reconnect = $root.qhb.c2s_reconnect.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userOnBack = $root.qhb.c2s_userOnBack.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.userQuit = $root.qhb.c2s_userQuit.decode(reader, reader.uint32());
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
         * @memberof qhb.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.Request} Request
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
         * @memberof qhb.Request
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
                case 2004:
                case 2005:
                case 2006:
                case 2007:
                case 20006:
                case 20007:
                case 2020:
                case 2021:
                case 2000:
                case 2001:
                case 2003:
                case 2030:
                case 2031:
                case 2080:
                case 2081:
                case 2044:
                case 2045:
                    break;
                }
            if (message.apply != null && message.hasOwnProperty("apply")) {
                var error = $root.qhb.c2s_apply.verify(message.apply);
                if (error)
                    return "apply." + error;
            }
            if (message.disApply != null && message.hasOwnProperty("disApply")) {
                var error = $root.qhb.c2s_disApply.verify(message.disApply);
                if (error)
                    return "disApply." + error;
            }
            if (message.joinTable != null && message.hasOwnProperty("joinTable")) {
                var error = $root.qhb.c2s_joinTable.verify(message.joinTable);
                if (error)
                    return "joinTable." + error;
            }
            if (message.getUserList != null && message.hasOwnProperty("getUserList")) {
                var error = $root.qhb.c2s_getUserList.verify(message.getUserList);
                if (error)
                    return "getUserList." + error;
            }
            if (message.qiang != null && message.hasOwnProperty("qiang")) {
                var error = $root.qhb.c2s_qiang.verify(message.qiang);
                if (error)
                    return "qiang." + error;
            }
            if (message.reconnect != null && message.hasOwnProperty("reconnect")) {
                var error = $root.qhb.c2s_reconnect.verify(message.reconnect);
                if (error)
                    return "reconnect." + error;
            }
            if (message.userOnBack != null && message.hasOwnProperty("userOnBack")) {
                var error = $root.qhb.c2s_userOnBack.verify(message.userOnBack);
                if (error)
                    return "userOnBack." + error;
            }
            if (message.userQuit != null && message.hasOwnProperty("userQuit")) {
                var error = $root.qhb.c2s_userQuit.verify(message.userQuit);
                if (error)
                    return "userQuit." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.Request)
                return object;
            var message = new $root.qhb.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "APPLY_REQ":
            case 2004:
                message.cmd = 2004;
                break;
            case "APPLY_RESP":
            case 2005:
                message.cmd = 2005;
                break;
            case "DISAPPLY_REQ":
            case 2006:
                message.cmd = 2006;
                break;
            case "DISAPPLY_RESP":
            case 2007:
                message.cmd = 2007;
                break;
            case "JOIN_COIN_TABLE_REQ":
            case 20006:
                message.cmd = 20006;
                break;
            case "JOIN_COIN_TABLE_RESP":
            case 20007:
                message.cmd = 20007;
                break;
            case "GET_USERLIST_REQ":
            case 2020:
                message.cmd = 2020;
                break;
            case "GET_USERLIST_RESP":
            case 2021:
                message.cmd = 2021;
                break;
            case "QIANG_REQ":
            case 2000:
                message.cmd = 2000;
                break;
            case "QIANG_RESP":
            case 2001:
                message.cmd = 2001;
                break;
            case "PUSHBET_RESP":
            case 2003:
                message.cmd = 2003;
                break;
            case "PUSH_USER_RECONNECT_REQ":
            case 2030:
                message.cmd = 2030;
                break;
            case "PUSH_USER_RECONNECT_RESP":
            case 2031:
                message.cmd = 2031;
                break;
            case "USER_ONBACK_REQ":
            case 2080:
                message.cmd = 2080;
                break;
            case "USER_ONBACK_RESP":
            case 2081:
                message.cmd = 2081;
                break;
            case "USER_QUIT_REQ":
            case 2044:
                message.cmd = 2044;
                break;
            case "USER_QUIT_RESP":
            case 2045:
                message.cmd = 2045;
                break;
            }
            if (object.apply != null) {
                if (typeof object.apply !== "object")
                    throw TypeError(".qhb.Request.apply: object expected");
                message.apply = $root.qhb.c2s_apply.fromObject(object.apply);
            }
            if (object.disApply != null) {
                if (typeof object.disApply !== "object")
                    throw TypeError(".qhb.Request.disApply: object expected");
                message.disApply = $root.qhb.c2s_disApply.fromObject(object.disApply);
            }
            if (object.joinTable != null) {
                if (typeof object.joinTable !== "object")
                    throw TypeError(".qhb.Request.joinTable: object expected");
                message.joinTable = $root.qhb.c2s_joinTable.fromObject(object.joinTable);
            }
            if (object.getUserList != null) {
                if (typeof object.getUserList !== "object")
                    throw TypeError(".qhb.Request.getUserList: object expected");
                message.getUserList = $root.qhb.c2s_getUserList.fromObject(object.getUserList);
            }
            if (object.qiang != null) {
                if (typeof object.qiang !== "object")
                    throw TypeError(".qhb.Request.qiang: object expected");
                message.qiang = $root.qhb.c2s_qiang.fromObject(object.qiang);
            }
            if (object.reconnect != null) {
                if (typeof object.reconnect !== "object")
                    throw TypeError(".qhb.Request.reconnect: object expected");
                message.reconnect = $root.qhb.c2s_reconnect.fromObject(object.reconnect);
            }
            if (object.userOnBack != null) {
                if (typeof object.userOnBack !== "object")
                    throw TypeError(".qhb.Request.userOnBack: object expected");
                message.userOnBack = $root.qhb.c2s_userOnBack.fromObject(object.userOnBack);
            }
            if (object.userQuit != null) {
                if (typeof object.userQuit !== "object")
                    throw TypeError(".qhb.Request.userQuit: object expected");
                message.userQuit = $root.qhb.c2s_userQuit.fromObject(object.userQuit);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.Request
         * @static
         * @param {qhb.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.apply = null;
                object.disApply = null;
                object.joinTable = null;
                object.getUserList = null;
                object.qiang = null;
                object.reconnect = null;
                object.userOnBack = null;
                object.userQuit = null;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.qhb.Request.CMD[message.cmd] : message.cmd;
            if (message.apply != null && message.hasOwnProperty("apply"))
                object.apply = $root.qhb.c2s_apply.toObject(message.apply, options);
            if (message.disApply != null && message.hasOwnProperty("disApply"))
                object.disApply = $root.qhb.c2s_disApply.toObject(message.disApply, options);
            if (message.joinTable != null && message.hasOwnProperty("joinTable"))
                object.joinTable = $root.qhb.c2s_joinTable.toObject(message.joinTable, options);
            if (message.getUserList != null && message.hasOwnProperty("getUserList"))
                object.getUserList = $root.qhb.c2s_getUserList.toObject(message.getUserList, options);
            if (message.qiang != null && message.hasOwnProperty("qiang"))
                object.qiang = $root.qhb.c2s_qiang.toObject(message.qiang, options);
            if (message.reconnect != null && message.hasOwnProperty("reconnect"))
                object.reconnect = $root.qhb.c2s_reconnect.toObject(message.reconnect, options);
            if (message.userOnBack != null && message.hasOwnProperty("userOnBack"))
                object.userOnBack = $root.qhb.c2s_userOnBack.toObject(message.userOnBack, options);
            if (message.userQuit != null && message.hasOwnProperty("userQuit"))
                object.userQuit = $root.qhb.c2s_userQuit.toObject(message.userQuit, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof qhb.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name qhb.Request.CMD
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} APPLY_REQ=2004 APPLY_REQ value
         * @property {number} APPLY_RESP=2005 APPLY_RESP value
         * @property {number} DISAPPLY_REQ=2006 取消申请埋雷
         * @property {number} DISAPPLY_RESP=2007 DISAPPLY_RESP value
         * @property {number} JOIN_COIN_TABLE_REQ=20006 加入牌桌请求
         * @property {number} JOIN_COIN_TABLE_RESP=20007 JOIN_COIN_TABLE_RESP value
         * @property {number} GET_USERLIST_REQ=2020 获取玩家列表
         * @property {number} GET_USERLIST_RESP=2021 GET_USERLIST_RESP value
         * @property {number} QIANG_REQ=2000 抢红包请求
         * @property {number} QIANG_RESP=2001 QIANG_RESP value
         * @property {number} PUSHBET_RESP=2003 玩家抢红包推送
         * @property {number} PUSH_USER_RECONNECT_REQ=2030 玩家点击重新连接2030
         * @property {number} PUSH_USER_RECONNECT_RESP=2031 PUSH_USER_RECONNECT_RESP value
         * @property {number} USER_ONBACK_REQ=2080 用户退后台
         * @property {number} USER_ONBACK_RESP=2081 USER_ONBACK_RESP value
         * @property {number} USER_QUIT_REQ=2044 玩家退出
         * @property {number} USER_QUIT_RESP=2045 USER_QUIT_RESP value
         */
        Request.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[2004] = "APPLY_REQ"] = 2004;
            values[valuesById[2005] = "APPLY_RESP"] = 2005;
            values[valuesById[2006] = "DISAPPLY_REQ"] = 2006;
            values[valuesById[2007] = "DISAPPLY_RESP"] = 2007;
            values[valuesById[20006] = "JOIN_COIN_TABLE_REQ"] = 20006;
            values[valuesById[20007] = "JOIN_COIN_TABLE_RESP"] = 20007;
            values[valuesById[2020] = "GET_USERLIST_REQ"] = 2020;
            values[valuesById[2021] = "GET_USERLIST_RESP"] = 2021;
            values[valuesById[2000] = "QIANG_REQ"] = 2000;
            values[valuesById[2001] = "QIANG_RESP"] = 2001;
            values[valuesById[2003] = "PUSHBET_RESP"] = 2003;
            values[valuesById[2030] = "PUSH_USER_RECONNECT_REQ"] = 2030;
            values[valuesById[2031] = "PUSH_USER_RECONNECT_RESP"] = 2031;
            values[valuesById[2080] = "USER_ONBACK_REQ"] = 2080;
            values[valuesById[2081] = "USER_ONBACK_RESP"] = 2081;
            values[valuesById[2044] = "USER_QUIT_REQ"] = 2044;
            values[valuesById[2045] = "USER_QUIT_RESP"] = 2045;
            return values;
        })();

        return Request;
    })();

    qhb.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof qhb
         * @interface IResponse
         * @property {qhb.Response.ErrorCode|null} [error] Response error
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {qhb.Request.CMD|null} [cmd] Response cmd
         * @property {qhb.IReply|null} [ret] Response ret
         * @property {qhb.Is2c_apply|null} [sendApply] Response sendApply
         * @property {qhb.Is2c_disApply|null} [sendDisApply] Response sendDisApply
         * @property {qhb.Is2c_joinTable|null} [sendJoinTable] Response sendJoinTable
         * @property {qhb.Is2c_getUserList|null} [sendGetUserList] Response sendGetUserList
         * @property {qhb.Is2c_qiang|null} [sendQiang] Response sendQiang
         * @property {qhb.Is2c_qiangPush|null} [sendQiangPush] Response sendQiangPush
         * @property {qhb.Is2c_reconnect|null} [sendReconnect] Response sendReconnect
         * @property {qhb.Is2c_userOnBack|null} [sendUserOnBack] Response sendUserOnBack
         * @property {qhb.Is2c_userQuit|null} [sendUserQuit] Response sendUserQuit
         */

        /**
         * Constructs a new Response.
         * @memberof qhb
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {qhb.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response error.
         * @member {qhb.Response.ErrorCode} error
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.error = 0;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {qhb.Request.CMD} cmd
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response ret.
         * @member {qhb.IReply|null|undefined} ret
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.ret = null;

        /**
         * Response sendApply.
         * @member {qhb.Is2c_apply|null|undefined} sendApply
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendApply = null;

        /**
         * Response sendDisApply.
         * @member {qhb.Is2c_disApply|null|undefined} sendDisApply
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendDisApply = null;

        /**
         * Response sendJoinTable.
         * @member {qhb.Is2c_joinTable|null|undefined} sendJoinTable
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendJoinTable = null;

        /**
         * Response sendGetUserList.
         * @member {qhb.Is2c_getUserList|null|undefined} sendGetUserList
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendGetUserList = null;

        /**
         * Response sendQiang.
         * @member {qhb.Is2c_qiang|null|undefined} sendQiang
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendQiang = null;

        /**
         * Response sendQiangPush.
         * @member {qhb.Is2c_qiangPush|null|undefined} sendQiangPush
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendQiangPush = null;

        /**
         * Response sendReconnect.
         * @member {qhb.Is2c_reconnect|null|undefined} sendReconnect
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendReconnect = null;

        /**
         * Response sendUserOnBack.
         * @member {qhb.Is2c_userOnBack|null|undefined} sendUserOnBack
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendUserOnBack = null;

        /**
         * Response sendUserQuit.
         * @member {qhb.Is2c_userQuit|null|undefined} sendUserQuit
         * @memberof qhb.Response
         * @instance
         */
        Response.prototype.sendUserQuit = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof qhb.Response
         * @static
         * @param {qhb.IResponse=} [properties] Properties to set
         * @returns {qhb.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link qhb.Response.verify|verify} messages.
         * @function encode
         * @memberof qhb.Response
         * @static
         * @param {qhb.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.serverTime);
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cmd);
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.qhb.Reply.encode(message.ret, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.sendApply != null && message.hasOwnProperty("sendApply"))
                $root.qhb.s2c_apply.encode(message.sendApply, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.sendDisApply != null && message.hasOwnProperty("sendDisApply"))
                $root.qhb.s2c_disApply.encode(message.sendDisApply, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.sendJoinTable != null && message.hasOwnProperty("sendJoinTable"))
                $root.qhb.s2c_joinTable.encode(message.sendJoinTable, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.sendGetUserList != null && message.hasOwnProperty("sendGetUserList"))
                $root.qhb.s2c_getUserList.encode(message.sendGetUserList, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.sendQiang != null && message.hasOwnProperty("sendQiang"))
                $root.qhb.s2c_qiang.encode(message.sendQiang, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.sendQiangPush != null && message.hasOwnProperty("sendQiangPush"))
                $root.qhb.s2c_qiangPush.encode(message.sendQiangPush, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.sendReconnect != null && message.hasOwnProperty("sendReconnect"))
                $root.qhb.s2c_reconnect.encode(message.sendReconnect, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.sendUserOnBack != null && message.hasOwnProperty("sendUserOnBack"))
                $root.qhb.s2c_userOnBack.encode(message.sendUserOnBack, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.sendUserQuit != null && message.hasOwnProperty("sendUserQuit"))
                $root.qhb.s2c_userQuit.encode(message.sendUserQuit, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link qhb.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof qhb.Response
         * @static
         * @param {qhb.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof qhb.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {qhb.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qhb.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.serverTime = reader.int64();
                    break;
                case 3:
                    message.cmd = reader.int32();
                    break;
                case 4:
                    message.ret = $root.qhb.Reply.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.sendApply = $root.qhb.s2c_apply.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.sendDisApply = $root.qhb.s2c_disApply.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.sendJoinTable = $root.qhb.s2c_joinTable.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.sendGetUserList = $root.qhb.s2c_getUserList.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.sendQiang = $root.qhb.s2c_qiang.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.sendQiangPush = $root.qhb.s2c_qiangPush.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.sendReconnect = $root.qhb.s2c_reconnect.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.sendUserOnBack = $root.qhb.s2c_userOnBack.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.sendUserQuit = $root.qhb.s2c_userQuit.decode(reader, reader.uint32());
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
         * @memberof qhb.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {qhb.Response} Response
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
         * @memberof qhb.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 3084:
                case 3008:
                case 3091:
                case 30002:
                case 3011:
                case 3004:
                case 3085:
                case 3082:
                case 3007:
                case 3001:
                case 3003:
                case 3083:
                case 3087:
                case 3081:
                case 3089:
                case 3088:
                case 3025:
                case 30001:
                case 3056:
                case 3013:
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
                case 2004:
                case 2005:
                case 2006:
                case 2007:
                case 20006:
                case 20007:
                case 2020:
                case 2021:
                case 2000:
                case 2001:
                case 2003:
                case 2030:
                case 2031:
                case 2080:
                case 2081:
                case 2044:
                case 2045:
                    break;
                }
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.qhb.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            if (message.sendApply != null && message.hasOwnProperty("sendApply")) {
                var error = $root.qhb.s2c_apply.verify(message.sendApply);
                if (error)
                    return "sendApply." + error;
            }
            if (message.sendDisApply != null && message.hasOwnProperty("sendDisApply")) {
                var error = $root.qhb.s2c_disApply.verify(message.sendDisApply);
                if (error)
                    return "sendDisApply." + error;
            }
            if (message.sendJoinTable != null && message.hasOwnProperty("sendJoinTable")) {
                var error = $root.qhb.s2c_joinTable.verify(message.sendJoinTable);
                if (error)
                    return "sendJoinTable." + error;
            }
            if (message.sendGetUserList != null && message.hasOwnProperty("sendGetUserList")) {
                var error = $root.qhb.s2c_getUserList.verify(message.sendGetUserList);
                if (error)
                    return "sendGetUserList." + error;
            }
            if (message.sendQiang != null && message.hasOwnProperty("sendQiang")) {
                var error = $root.qhb.s2c_qiang.verify(message.sendQiang);
                if (error)
                    return "sendQiang." + error;
            }
            if (message.sendQiangPush != null && message.hasOwnProperty("sendQiangPush")) {
                var error = $root.qhb.s2c_qiangPush.verify(message.sendQiangPush);
                if (error)
                    return "sendQiangPush." + error;
            }
            if (message.sendReconnect != null && message.hasOwnProperty("sendReconnect")) {
                var error = $root.qhb.s2c_reconnect.verify(message.sendReconnect);
                if (error)
                    return "sendReconnect." + error;
            }
            if (message.sendUserOnBack != null && message.hasOwnProperty("sendUserOnBack")) {
                var error = $root.qhb.s2c_userOnBack.verify(message.sendUserOnBack);
                if (error)
                    return "sendUserOnBack." + error;
            }
            if (message.sendUserQuit != null && message.hasOwnProperty("sendUserQuit")) {
                var error = $root.qhb.s2c_userQuit.verify(message.sendUserQuit);
                if (error)
                    return "sendUserQuit." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof qhb.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {qhb.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.qhb.Response)
                return object;
            var message = new $root.qhb.Response();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "APPLY_ERROR":
            case 3084:
                message.error = 3084;
                break;
            case "TABLE_NOT_FOIND_ERROR":
            case 3008:
                message.error = 3008;
                break;
            case "NO_CHARGE_ERROR":
            case 3091:
                message.error = 3091;
                break;
            case "USERBAN":
            case 30002:
                message.error = 30002;
                break;
            case "NOT_IN_TABLE":
            case 3011:
                message.error = 3011;
                break;
            case "ACCOUNT_NOT_ENOUGH_ERROR":
            case 3004:
                message.error = 3004;
                break;
            case "APPLY_HAS_ERROR":
            case 3085:
                message.error = 3085;
                break;
            case "QIANG_ERROR":
            case 3082:
                message.error = 3082;
                break;
            case "JOIN_TABLE_ERROR":
            case 3007:
                message.error = 3007;
                break;
            case "USER_LOGIN_ERROR":
            case 3001:
                message.error = 3001;
                break;
            case "CHANNELID_GAMENO_ERROR":
            case 3003:
                message.error = 3003;
                break;
            case "JOIN_MAX_ERROR":
            case 3083:
                message.error = 3083;
                break;
            case "DISAPPLY_ERROR":
            case 3087:
                message.error = 3087;
                break;
            case "GETUSERLIST_ERROR":
            case 3081:
                message.error = 3081;
                break;
            case "QIANG_STATE_ERROR":
            case 3089:
                message.error = 3089;
                break;
            case "QIANG_SELF_ERROR":
            case 3088:
                message.error = 3088;
                break;
            case "RECONNET_ERROR":
            case 3025:
                message.error = 3025;
                break;
            case "FOUCEDOFFLINE":
            case 30001:
                message.error = 30001;
                break;
            case "USER_ONBACK_ERROR":
            case 3056:
                message.error = 3056;
                break;
            case "TABLE_QUIT_ERROR":
            case 3013:
                message.error = 3013;
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
            case "APPLY_REQ":
            case 2004:
                message.cmd = 2004;
                break;
            case "APPLY_RESP":
            case 2005:
                message.cmd = 2005;
                break;
            case "DISAPPLY_REQ":
            case 2006:
                message.cmd = 2006;
                break;
            case "DISAPPLY_RESP":
            case 2007:
                message.cmd = 2007;
                break;
            case "JOIN_COIN_TABLE_REQ":
            case 20006:
                message.cmd = 20006;
                break;
            case "JOIN_COIN_TABLE_RESP":
            case 20007:
                message.cmd = 20007;
                break;
            case "GET_USERLIST_REQ":
            case 2020:
                message.cmd = 2020;
                break;
            case "GET_USERLIST_RESP":
            case 2021:
                message.cmd = 2021;
                break;
            case "QIANG_REQ":
            case 2000:
                message.cmd = 2000;
                break;
            case "QIANG_RESP":
            case 2001:
                message.cmd = 2001;
                break;
            case "PUSHBET_RESP":
            case 2003:
                message.cmd = 2003;
                break;
            case "PUSH_USER_RECONNECT_REQ":
            case 2030:
                message.cmd = 2030;
                break;
            case "PUSH_USER_RECONNECT_RESP":
            case 2031:
                message.cmd = 2031;
                break;
            case "USER_ONBACK_REQ":
            case 2080:
                message.cmd = 2080;
                break;
            case "USER_ONBACK_RESP":
            case 2081:
                message.cmd = 2081;
                break;
            case "USER_QUIT_REQ":
            case 2044:
                message.cmd = 2044;
                break;
            case "USER_QUIT_RESP":
            case 2045:
                message.cmd = 2045;
                break;
            }
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".qhb.Response.ret: object expected");
                message.ret = $root.qhb.Reply.fromObject(object.ret);
            }
            if (object.sendApply != null) {
                if (typeof object.sendApply !== "object")
                    throw TypeError(".qhb.Response.sendApply: object expected");
                message.sendApply = $root.qhb.s2c_apply.fromObject(object.sendApply);
            }
            if (object.sendDisApply != null) {
                if (typeof object.sendDisApply !== "object")
                    throw TypeError(".qhb.Response.sendDisApply: object expected");
                message.sendDisApply = $root.qhb.s2c_disApply.fromObject(object.sendDisApply);
            }
            if (object.sendJoinTable != null) {
                if (typeof object.sendJoinTable !== "object")
                    throw TypeError(".qhb.Response.sendJoinTable: object expected");
                message.sendJoinTable = $root.qhb.s2c_joinTable.fromObject(object.sendJoinTable);
            }
            if (object.sendGetUserList != null) {
                if (typeof object.sendGetUserList !== "object")
                    throw TypeError(".qhb.Response.sendGetUserList: object expected");
                message.sendGetUserList = $root.qhb.s2c_getUserList.fromObject(object.sendGetUserList);
            }
            if (object.sendQiang != null) {
                if (typeof object.sendQiang !== "object")
                    throw TypeError(".qhb.Response.sendQiang: object expected");
                message.sendQiang = $root.qhb.s2c_qiang.fromObject(object.sendQiang);
            }
            if (object.sendQiangPush != null) {
                if (typeof object.sendQiangPush !== "object")
                    throw TypeError(".qhb.Response.sendQiangPush: object expected");
                message.sendQiangPush = $root.qhb.s2c_qiangPush.fromObject(object.sendQiangPush);
            }
            if (object.sendReconnect != null) {
                if (typeof object.sendReconnect !== "object")
                    throw TypeError(".qhb.Response.sendReconnect: object expected");
                message.sendReconnect = $root.qhb.s2c_reconnect.fromObject(object.sendReconnect);
            }
            if (object.sendUserOnBack != null) {
                if (typeof object.sendUserOnBack !== "object")
                    throw TypeError(".qhb.Response.sendUserOnBack: object expected");
                message.sendUserOnBack = $root.qhb.s2c_userOnBack.fromObject(object.sendUserOnBack);
            }
            if (object.sendUserQuit != null) {
                if (typeof object.sendUserQuit !== "object")
                    throw TypeError(".qhb.Response.sendUserQuit: object expected");
                message.sendUserQuit = $root.qhb.s2c_userQuit.fromObject(object.sendUserQuit);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof qhb.Response
         * @static
         * @param {qhb.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "NO_ERROR" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.ret = null;
                object.sendApply = null;
                object.sendDisApply = null;
                object.sendJoinTable = null;
                object.sendGetUserList = null;
                object.sendQiang = null;
                object.sendQiangPush = null;
                object.sendReconnect = null;
                object.sendUserOnBack = null;
                object.sendUserQuit = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.qhb.Response.ErrorCode[message.error] : message.error;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.qhb.Request.CMD[message.cmd] : message.cmd;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.qhb.Reply.toObject(message.ret, options);
            if (message.sendApply != null && message.hasOwnProperty("sendApply"))
                object.sendApply = $root.qhb.s2c_apply.toObject(message.sendApply, options);
            if (message.sendDisApply != null && message.hasOwnProperty("sendDisApply"))
                object.sendDisApply = $root.qhb.s2c_disApply.toObject(message.sendDisApply, options);
            if (message.sendJoinTable != null && message.hasOwnProperty("sendJoinTable"))
                object.sendJoinTable = $root.qhb.s2c_joinTable.toObject(message.sendJoinTable, options);
            if (message.sendGetUserList != null && message.hasOwnProperty("sendGetUserList"))
                object.sendGetUserList = $root.qhb.s2c_getUserList.toObject(message.sendGetUserList, options);
            if (message.sendQiang != null && message.hasOwnProperty("sendQiang"))
                object.sendQiang = $root.qhb.s2c_qiang.toObject(message.sendQiang, options);
            if (message.sendQiangPush != null && message.hasOwnProperty("sendQiangPush"))
                object.sendQiangPush = $root.qhb.s2c_qiangPush.toObject(message.sendQiangPush, options);
            if (message.sendReconnect != null && message.hasOwnProperty("sendReconnect"))
                object.sendReconnect = $root.qhb.s2c_reconnect.toObject(message.sendReconnect, options);
            if (message.sendUserOnBack != null && message.hasOwnProperty("sendUserOnBack"))
                object.sendUserOnBack = $root.qhb.s2c_userOnBack.toObject(message.sendUserOnBack, options);
            if (message.sendUserQuit != null && message.hasOwnProperty("sendUserQuit"))
                object.sendUserQuit = $root.qhb.s2c_userQuit.toObject(message.sendUserQuit, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof qhb.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name qhb.Response.ErrorCode
         * @enum {string}
         * @property {number} NO_ERROR=0 NO_ERROR value
         * @property {number} APPLY_ERROR=3084 APPLY_ERROR value
         * @property {number} TABLE_NOT_FOIND_ERROR=3008 TABLE_NOT_FOIND_ERROR value
         * @property {number} NO_CHARGE_ERROR=3091 NO_CHARGE_ERROR value
         * @property {number} USERBAN=30002 USERBAN value
         * @property {number} NOT_IN_TABLE=3011 NOT_IN_TABLE value
         * @property {number} ACCOUNT_NOT_ENOUGH_ERROR=3004 ACCOUNT_NOT_ENOUGH_ERROR value
         * @property {number} APPLY_HAS_ERROR=3085 APPLY_HAS_ERROR value
         * @property {number} QIANG_ERROR=3082 QIANG_ERROR value
         * @property {number} JOIN_TABLE_ERROR=3007 JOIN_TABLE_ERROR value
         * @property {number} USER_LOGIN_ERROR=3001 USER_LOGIN_ERROR value
         * @property {number} CHANNELID_GAMENO_ERROR=3003 CHANNELID_GAMENO_ERROR value
         * @property {number} JOIN_MAX_ERROR=3083 JOIN_MAX_ERROR value
         * @property {number} DISAPPLY_ERROR=3087 DISAPPLY_ERROR value
         * @property {number} GETUSERLIST_ERROR=3081 GETUSERLIST_ERROR value
         * @property {number} QIANG_STATE_ERROR=3089 QIANG_STATE_ERROR value
         * @property {number} QIANG_SELF_ERROR=3088 QIANG_SELF_ERROR value
         * @property {number} RECONNET_ERROR=3025 RECONNET_ERROR value
         * @property {number} FOUCEDOFFLINE=30001 FOUCEDOFFLINE value
         * @property {number} USER_ONBACK_ERROR=3056 USER_ONBACK_ERROR value
         * @property {number} TABLE_QUIT_ERROR=3013 TABLE_QUIT_ERROR value
         */
        Response.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NO_ERROR"] = 0;
            values[valuesById[3084] = "APPLY_ERROR"] = 3084;
            values[valuesById[3008] = "TABLE_NOT_FOIND_ERROR"] = 3008;
            values[valuesById[3091] = "NO_CHARGE_ERROR"] = 3091;
            values[valuesById[30002] = "USERBAN"] = 30002;
            values[valuesById[3011] = "NOT_IN_TABLE"] = 3011;
            values[valuesById[3004] = "ACCOUNT_NOT_ENOUGH_ERROR"] = 3004;
            values[valuesById[3085] = "APPLY_HAS_ERROR"] = 3085;
            values[valuesById[3082] = "QIANG_ERROR"] = 3082;
            values[valuesById[3007] = "JOIN_TABLE_ERROR"] = 3007;
            values[valuesById[3001] = "USER_LOGIN_ERROR"] = 3001;
            values[valuesById[3003] = "CHANNELID_GAMENO_ERROR"] = 3003;
            values[valuesById[3083] = "JOIN_MAX_ERROR"] = 3083;
            values[valuesById[3087] = "DISAPPLY_ERROR"] = 3087;
            values[valuesById[3081] = "GETUSERLIST_ERROR"] = 3081;
            values[valuesById[3089] = "QIANG_STATE_ERROR"] = 3089;
            values[valuesById[3088] = "QIANG_SELF_ERROR"] = 3088;
            values[valuesById[3025] = "RECONNET_ERROR"] = 3025;
            values[valuesById[30001] = "FOUCEDOFFLINE"] = 30001;
            values[valuesById[3056] = "USER_ONBACK_ERROR"] = 3056;
            values[valuesById[3013] = "TABLE_QUIT_ERROR"] = 3013;
            return values;
        })();

        return Response;
    })();

    return qhb;
})();

module.exports = $root;
