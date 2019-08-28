/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bjl = (function() {

    /**
     * Namespace bjl.
     * @exports bjl
     * @namespace
     */
    var bjl = {};

    bjl.Reply = (function() {

        /**
         * Properties of a Reply.
         * @memberof bjl
         * @interface IReply
         * @property {number|null} [code] Reply code
         * @property {string|null} [msg] Reply msg
         */

        /**
         * Constructs a new Reply.
         * @memberof bjl
         * @classdesc Represents a Reply.
         * @implements IReply
         * @constructor
         * @param {bjl.IReply=} [properties] Properties to set
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
         * @memberof bjl.Reply
         * @instance
         */
        Reply.prototype.code = 0;

        /**
         * Reply msg.
         * @member {string} msg
         * @memberof bjl.Reply
         * @instance
         */
        Reply.prototype.msg = "";

        /**
         * Creates a new Reply instance using the specified properties.
         * @function create
         * @memberof bjl.Reply
         * @static
         * @param {bjl.IReply=} [properties] Properties to set
         * @returns {bjl.Reply} Reply instance
         */
        Reply.create = function create(properties) {
            return new Reply(properties);
        };

        /**
         * Encodes the specified Reply message. Does not implicitly {@link bjl.Reply.verify|verify} messages.
         * @function encode
         * @memberof bjl.Reply
         * @static
         * @param {bjl.IReply} message Reply message or plain object to encode
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
         * Encodes the specified Reply message, length delimited. Does not implicitly {@link bjl.Reply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.Reply
         * @static
         * @param {bjl.IReply} message Reply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reply message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.Reply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.Reply} Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reply.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.Reply();
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
         * @memberof bjl.Reply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.Reply} Reply
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
         * @memberof bjl.Reply
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
         * @memberof bjl.Reply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.Reply} Reply
         */
        Reply.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.Reply)
                return object;
            var message = new $root.bjl.Reply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a Reply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.Reply
         * @static
         * @param {bjl.Reply} message Reply
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
         * @memberof bjl.Reply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reply;
    })();

    bjl.IntArr = (function() {

        /**
         * Properties of an IntArr.
         * @memberof bjl
         * @interface IIntArr
         * @property {Array.<number>|null} [arr] IntArr arr
         */

        /**
         * Constructs a new IntArr.
         * @memberof bjl
         * @classdesc Represents an IntArr.
         * @implements IIntArr
         * @constructor
         * @param {bjl.IIntArr=} [properties] Properties to set
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
         * @memberof bjl.IntArr
         * @instance
         */
        IntArr.prototype.arr = $util.emptyArray;

        /**
         * Creates a new IntArr instance using the specified properties.
         * @function create
         * @memberof bjl.IntArr
         * @static
         * @param {bjl.IIntArr=} [properties] Properties to set
         * @returns {bjl.IntArr} IntArr instance
         */
        IntArr.create = function create(properties) {
            return new IntArr(properties);
        };

        /**
         * Encodes the specified IntArr message. Does not implicitly {@link bjl.IntArr.verify|verify} messages.
         * @function encode
         * @memberof bjl.IntArr
         * @static
         * @param {bjl.IIntArr} message IntArr message or plain object to encode
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
         * Encodes the specified IntArr message, length delimited. Does not implicitly {@link bjl.IntArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.IntArr
         * @static
         * @param {bjl.IIntArr} message IntArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntArr message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.IntArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.IntArr} IntArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.IntArr();
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
         * @memberof bjl.IntArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.IntArr} IntArr
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
         * @memberof bjl.IntArr
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
         * @memberof bjl.IntArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.IntArr} IntArr
         */
        IntArr.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.IntArr)
                return object;
            var message = new $root.bjl.IntArr();
            if (object.arr) {
                if (!Array.isArray(object.arr))
                    throw TypeError(".bjl.IntArr.arr: array expected");
                message.arr = [];
                for (var i = 0; i < object.arr.length; ++i)
                    message.arr[i] = object.arr[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from an IntArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.IntArr
         * @static
         * @param {bjl.IntArr} message IntArr
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
         * @memberof bjl.IntArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IntArr;
    })();

    bjl.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof bjl
         * @interface IPlayer
         * @property {number|null} [userId] Player userId
         * @property {string|null} [nickName] Player nickName
         * @property {string|null} [headImg] Player headImg
         * @property {number|null} [sex] Player sex
         * @property {Array.<number>|null} [betCoin] Player betCoin
         * @property {number|null} [currentScore] Player currentScore
         * @property {number|null} [totalScore] Player totalScore
         * @property {number|null} [revenue] Player revenue
         * @property {number|null} [coin] Player coin
         */

        /**
         * Constructs a new Player.
         * @memberof bjl
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {bjl.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            this.betCoin = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player userId.
         * @member {number} userId
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.userId = 0;

        /**
         * Player nickName.
         * @member {string} nickName
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.nickName = "";

        /**
         * Player headImg.
         * @member {string} headImg
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.headImg = "";

        /**
         * Player sex.
         * @member {number} sex
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.sex = 0;

        /**
         * Player betCoin.
         * @member {Array.<number>} betCoin
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.betCoin = $util.emptyArray;

        /**
         * Player currentScore.
         * @member {number} currentScore
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.currentScore = 0;

        /**
         * Player totalScore.
         * @member {number} totalScore
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.totalScore = 0;

        /**
         * Player revenue.
         * @member {number} revenue
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.revenue = 0;

        /**
         * Player coin.
         * @member {number} coin
         * @memberof bjl.Player
         * @instance
         */
        Player.prototype.coin = 0;

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof bjl.Player
         * @static
         * @param {bjl.IPlayer=} [properties] Properties to set
         * @returns {bjl.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link bjl.Player.verify|verify} messages.
         * @function encode
         * @memberof bjl.Player
         * @static
         * @param {bjl.IPlayer} message Player message or plain object to encode
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
            if (message.betCoin != null && message.betCoin.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.betCoin.length; ++i)
                    writer.int32(message.betCoin[i]);
                writer.ldelim();
            }
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.currentScore);
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.totalScore);
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.revenue);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.coin);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link bjl.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.Player
         * @static
         * @param {bjl.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.Player();
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
                    if (!(message.betCoin && message.betCoin.length))
                        message.betCoin = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.betCoin.push(reader.int32());
                    } else
                        message.betCoin.push(reader.int32());
                    break;
                case 6:
                    message.currentScore = reader.double();
                    break;
                case 7:
                    message.totalScore = reader.double();
                    break;
                case 8:
                    message.revenue = reader.double();
                    break;
                case 9:
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
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.Player} Player
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
         * @memberof bjl.Player
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
            if (message.betCoin != null && message.hasOwnProperty("betCoin")) {
                if (!Array.isArray(message.betCoin))
                    return "betCoin: array expected";
                for (var i = 0; i < message.betCoin.length; ++i)
                    if (!$util.isInteger(message.betCoin[i]))
                        return "betCoin: integer[] expected";
            }
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                if (typeof message.currentScore !== "number")
                    return "currentScore: number expected";
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                if (typeof message.totalScore !== "number")
                    return "totalScore: number expected";
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                if (typeof message.revenue !== "number")
                    return "revenue: number expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (typeof message.coin !== "number")
                    return "coin: number expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.Player)
                return object;
            var message = new $root.bjl.Player();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.betCoin) {
                if (!Array.isArray(object.betCoin))
                    throw TypeError(".bjl.Player.betCoin: array expected");
                message.betCoin = [];
                for (var i = 0; i < object.betCoin.length; ++i)
                    message.betCoin[i] = object.betCoin[i] | 0;
            }
            if (object.currentScore != null)
                message.currentScore = Number(object.currentScore);
            if (object.totalScore != null)
                message.totalScore = Number(object.totalScore);
            if (object.revenue != null)
                message.revenue = Number(object.revenue);
            if (object.coin != null)
                message.coin = Number(object.coin);
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.Player
         * @static
         * @param {bjl.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.betCoin = [];
            if (options.defaults) {
                object.userId = 0;
                object.nickName = "";
                object.headImg = "";
                object.sex = 0;
                object.currentScore = 0;
                object.totalScore = 0;
                object.revenue = 0;
                object.coin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.betCoin && message.betCoin.length) {
                object.betCoin = [];
                for (var j = 0; j < message.betCoin.length; ++j)
                    object.betCoin[j] = message.betCoin[j];
            }
            if (message.currentScore != null && message.hasOwnProperty("currentScore"))
                object.currentScore = options.json && !isFinite(message.currentScore) ? String(message.currentScore) : message.currentScore;
            if (message.totalScore != null && message.hasOwnProperty("totalScore"))
                object.totalScore = options.json && !isFinite(message.totalScore) ? String(message.totalScore) : message.totalScore;
            if (message.revenue != null && message.hasOwnProperty("revenue"))
                object.revenue = options.json && !isFinite(message.revenue) ? String(message.revenue) : message.revenue;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = options.json && !isFinite(message.coin) ? String(message.coin) : message.coin;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof bjl.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    bjl.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof bjl
         * @interface ITableInfo
         * @property {string|null} [tableId] TableInfo tableId
         * @property {string|null} [seq] TableInfo seq
         * @property {number|null} [currentRound] TableInfo currentRound
         * @property {number|null} [gameId] TableInfo gameId
         * @property {number|null} [gameNo] TableInfo gameNo
         * @property {number|null} [minLimit] TableInfo minLimit
         * @property {number|null} [maxLimit] TableInfo maxLimit
         * @property {Array.<number>|null} [allowBet] TableInfo allowBet
         * @property {Array.<number>|null} [cardA] TableInfo cardA
         * @property {Array.<number>|null} [cardB] TableInfo cardB
         * @property {number|null} [numA] TableInfo numA
         * @property {number|null} [numB] TableInfo numB
         * @property {Array.<number>|null} [mult] TableInfo mult
         * @property {number|null} [state] TableInfo state
         * @property {Array.<number>|null} [totalBet] TableInfo totalBet
         * @property {Array.<number>|null} [winPoss] TableInfo winPoss
         * @property {Array.<bjl.IIntArr>|null} [winPosRecord] TableInfo winPosRecord
         * @property {number|null} [remainCardsNum] TableInfo remainCardsNum
         * @property {bjl.IPlayer|null} [player] TableInfo player
         * @property {Array.<bjl.IPlayer>|null} [richManList] TableInfo richManList
         */

        /**
         * Constructs a new TableInfo.
         * @memberof bjl
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {bjl.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            this.allowBet = [];
            this.cardA = [];
            this.cardB = [];
            this.mult = [];
            this.totalBet = [];
            this.winPoss = [];
            this.winPosRecord = [];
            this.richManList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo tableId.
         * @member {string} tableId
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.tableId = "";

        /**
         * TableInfo seq.
         * @member {string} seq
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.seq = "";

        /**
         * TableInfo currentRound.
         * @member {number} currentRound
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.currentRound = 0;

        /**
         * TableInfo gameId.
         * @member {number} gameId
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.gameId = 0;

        /**
         * TableInfo gameNo.
         * @member {number} gameNo
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.gameNo = 0;

        /**
         * TableInfo minLimit.
         * @member {number} minLimit
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.minLimit = 0;

        /**
         * TableInfo maxLimit.
         * @member {number} maxLimit
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.maxLimit = 0;

        /**
         * TableInfo allowBet.
         * @member {Array.<number>} allowBet
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.allowBet = $util.emptyArray;

        /**
         * TableInfo cardA.
         * @member {Array.<number>} cardA
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.cardA = $util.emptyArray;

        /**
         * TableInfo cardB.
         * @member {Array.<number>} cardB
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.cardB = $util.emptyArray;

        /**
         * TableInfo numA.
         * @member {number} numA
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.numA = 0;

        /**
         * TableInfo numB.
         * @member {number} numB
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.numB = 0;

        /**
         * TableInfo mult.
         * @member {Array.<number>} mult
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.mult = $util.emptyArray;

        /**
         * TableInfo state.
         * @member {number} state
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.state = 0;

        /**
         * TableInfo totalBet.
         * @member {Array.<number>} totalBet
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.totalBet = $util.emptyArray;

        /**
         * TableInfo winPoss.
         * @member {Array.<number>} winPoss
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.winPoss = $util.emptyArray;

        /**
         * TableInfo winPosRecord.
         * @member {Array.<bjl.IIntArr>} winPosRecord
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.winPosRecord = $util.emptyArray;

        /**
         * TableInfo remainCardsNum.
         * @member {number} remainCardsNum
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.remainCardsNum = 0;

        /**
         * TableInfo player.
         * @member {bjl.IPlayer|null|undefined} player
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.player = null;

        /**
         * TableInfo richManList.
         * @member {Array.<bjl.IPlayer>} richManList
         * @memberof bjl.TableInfo
         * @instance
         */
        TableInfo.prototype.richManList = $util.emptyArray;

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof bjl.TableInfo
         * @static
         * @param {bjl.ITableInfo=} [properties] Properties to set
         * @returns {bjl.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link bjl.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof bjl.TableInfo
         * @static
         * @param {bjl.ITableInfo} message TableInfo message or plain object to encode
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
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.currentRound);
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gameId);
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameNo);
            if (message.minLimit != null && message.hasOwnProperty("minLimit"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.minLimit);
            if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.maxLimit);
            if (message.allowBet != null && message.allowBet.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.allowBet.length; ++i)
                    writer.int32(message.allowBet[i]);
                writer.ldelim();
            }
            if (message.cardA != null && message.cardA.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.cardA.length; ++i)
                    writer.int32(message.cardA[i]);
                writer.ldelim();
            }
            if (message.cardB != null && message.cardB.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.cardB.length; ++i)
                    writer.int32(message.cardB[i]);
                writer.ldelim();
            }
            if (message.numA != null && message.hasOwnProperty("numA"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.numA);
            if (message.numB != null && message.hasOwnProperty("numB"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.numB);
            if (message.mult != null && message.mult.length) {
                writer.uint32(/* id 13, wireType 2 =*/106).fork();
                for (var i = 0; i < message.mult.length; ++i)
                    writer.int32(message.mult[i]);
                writer.ldelim();
            }
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.state);
            if (message.totalBet != null && message.totalBet.length) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork();
                for (var i = 0; i < message.totalBet.length; ++i)
                    writer.int32(message.totalBet[i]);
                writer.ldelim();
            }
            if (message.winPoss != null && message.winPoss.length) {
                writer.uint32(/* id 16, wireType 2 =*/130).fork();
                for (var i = 0; i < message.winPoss.length; ++i)
                    writer.int32(message.winPoss[i]);
                writer.ldelim();
            }
            if (message.winPosRecord != null && message.winPosRecord.length)
                for (var i = 0; i < message.winPosRecord.length; ++i)
                    $root.bjl.IntArr.encode(message.winPosRecord[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.remainCardsNum);
            if (message.player != null && message.hasOwnProperty("player"))
                $root.bjl.Player.encode(message.player, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.richManList != null && message.richManList.length)
                for (var i = 0; i < message.richManList.length; ++i)
                    $root.bjl.Player.encode(message.richManList[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link bjl.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.TableInfo
         * @static
         * @param {bjl.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.TableInfo();
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
                    message.currentRound = reader.int32();
                    break;
                case 4:
                    message.gameId = reader.int32();
                    break;
                case 5:
                    message.gameNo = reader.int32();
                    break;
                case 6:
                    message.minLimit = reader.int32();
                    break;
                case 7:
                    message.maxLimit = reader.int32();
                    break;
                case 8:
                    if (!(message.allowBet && message.allowBet.length))
                        message.allowBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.allowBet.push(reader.int32());
                    } else
                        message.allowBet.push(reader.int32());
                    break;
                case 9:
                    if (!(message.cardA && message.cardA.length))
                        message.cardA = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardA.push(reader.int32());
                    } else
                        message.cardA.push(reader.int32());
                    break;
                case 10:
                    if (!(message.cardB && message.cardB.length))
                        message.cardB = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardB.push(reader.int32());
                    } else
                        message.cardB.push(reader.int32());
                    break;
                case 11:
                    message.numA = reader.int32();
                    break;
                case 12:
                    message.numB = reader.int32();
                    break;
                case 13:
                    if (!(message.mult && message.mult.length))
                        message.mult = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.mult.push(reader.int32());
                    } else
                        message.mult.push(reader.int32());
                    break;
                case 14:
                    message.state = reader.int32();
                    break;
                case 15:
                    if (!(message.totalBet && message.totalBet.length))
                        message.totalBet = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.totalBet.push(reader.int32());
                    } else
                        message.totalBet.push(reader.int32());
                    break;
                case 16:
                    if (!(message.winPoss && message.winPoss.length))
                        message.winPoss = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.winPoss.push(reader.int32());
                    } else
                        message.winPoss.push(reader.int32());
                    break;
                case 17:
                    if (!(message.winPosRecord && message.winPosRecord.length))
                        message.winPosRecord = [];
                    message.winPosRecord.push($root.bjl.IntArr.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.remainCardsNum = reader.int32();
                    break;
                case 19:
                    message.player = $root.bjl.Player.decode(reader, reader.uint32());
                    break;
                case 20:
                    if (!(message.richManList && message.richManList.length))
                        message.richManList = [];
                    message.richManList.push($root.bjl.Player.decode(reader, reader.uint32()));
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
         * @memberof bjl.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.TableInfo} TableInfo
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
         * @memberof bjl.TableInfo
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
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                if (!$util.isInteger(message.currentRound))
                    return "currentRound: integer expected";
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
            if (message.allowBet != null && message.hasOwnProperty("allowBet")) {
                if (!Array.isArray(message.allowBet))
                    return "allowBet: array expected";
                for (var i = 0; i < message.allowBet.length; ++i)
                    if (!$util.isInteger(message.allowBet[i]))
                        return "allowBet: integer[] expected";
            }
            if (message.cardA != null && message.hasOwnProperty("cardA")) {
                if (!Array.isArray(message.cardA))
                    return "cardA: array expected";
                for (var i = 0; i < message.cardA.length; ++i)
                    if (!$util.isInteger(message.cardA[i]))
                        return "cardA: integer[] expected";
            }
            if (message.cardB != null && message.hasOwnProperty("cardB")) {
                if (!Array.isArray(message.cardB))
                    return "cardB: array expected";
                for (var i = 0; i < message.cardB.length; ++i)
                    if (!$util.isInteger(message.cardB[i]))
                        return "cardB: integer[] expected";
            }
            if (message.numA != null && message.hasOwnProperty("numA"))
                if (!$util.isInteger(message.numA))
                    return "numA: integer expected";
            if (message.numB != null && message.hasOwnProperty("numB"))
                if (!$util.isInteger(message.numB))
                    return "numB: integer expected";
            if (message.mult != null && message.hasOwnProperty("mult")) {
                if (!Array.isArray(message.mult))
                    return "mult: array expected";
                for (var i = 0; i < message.mult.length; ++i)
                    if (!$util.isInteger(message.mult[i]))
                        return "mult: integer[] expected";
            }
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.totalBet != null && message.hasOwnProperty("totalBet")) {
                if (!Array.isArray(message.totalBet))
                    return "totalBet: array expected";
                for (var i = 0; i < message.totalBet.length; ++i)
                    if (!$util.isInteger(message.totalBet[i]))
                        return "totalBet: integer[] expected";
            }
            if (message.winPoss != null && message.hasOwnProperty("winPoss")) {
                if (!Array.isArray(message.winPoss))
                    return "winPoss: array expected";
                for (var i = 0; i < message.winPoss.length; ++i)
                    if (!$util.isInteger(message.winPoss[i]))
                        return "winPoss: integer[] expected";
            }
            if (message.winPosRecord != null && message.hasOwnProperty("winPosRecord")) {
                if (!Array.isArray(message.winPosRecord))
                    return "winPosRecord: array expected";
                for (var i = 0; i < message.winPosRecord.length; ++i) {
                    var error = $root.bjl.IntArr.verify(message.winPosRecord[i]);
                    if (error)
                        return "winPosRecord." + error;
                }
            }
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                if (!$util.isInteger(message.remainCardsNum))
                    return "remainCardsNum: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.bjl.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.richManList != null && message.hasOwnProperty("richManList")) {
                if (!Array.isArray(message.richManList))
                    return "richManList: array expected";
                for (var i = 0; i < message.richManList.length; ++i) {
                    var error = $root.bjl.Player.verify(message.richManList[i]);
                    if (error)
                        return "richManList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.TableInfo)
                return object;
            var message = new $root.bjl.TableInfo();
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.seq != null)
                message.seq = String(object.seq);
            if (object.currentRound != null)
                message.currentRound = object.currentRound | 0;
            if (object.gameId != null)
                message.gameId = object.gameId | 0;
            if (object.gameNo != null)
                message.gameNo = object.gameNo | 0;
            if (object.minLimit != null)
                message.minLimit = object.minLimit | 0;
            if (object.maxLimit != null)
                message.maxLimit = object.maxLimit | 0;
            if (object.allowBet) {
                if (!Array.isArray(object.allowBet))
                    throw TypeError(".bjl.TableInfo.allowBet: array expected");
                message.allowBet = [];
                for (var i = 0; i < object.allowBet.length; ++i)
                    message.allowBet[i] = object.allowBet[i] | 0;
            }
            if (object.cardA) {
                if (!Array.isArray(object.cardA))
                    throw TypeError(".bjl.TableInfo.cardA: array expected");
                message.cardA = [];
                for (var i = 0; i < object.cardA.length; ++i)
                    message.cardA[i] = object.cardA[i] | 0;
            }
            if (object.cardB) {
                if (!Array.isArray(object.cardB))
                    throw TypeError(".bjl.TableInfo.cardB: array expected");
                message.cardB = [];
                for (var i = 0; i < object.cardB.length; ++i)
                    message.cardB[i] = object.cardB[i] | 0;
            }
            if (object.numA != null)
                message.numA = object.numA | 0;
            if (object.numB != null)
                message.numB = object.numB | 0;
            if (object.mult) {
                if (!Array.isArray(object.mult))
                    throw TypeError(".bjl.TableInfo.mult: array expected");
                message.mult = [];
                for (var i = 0; i < object.mult.length; ++i)
                    message.mult[i] = object.mult[i] | 0;
            }
            if (object.state != null)
                message.state = object.state | 0;
            if (object.totalBet) {
                if (!Array.isArray(object.totalBet))
                    throw TypeError(".bjl.TableInfo.totalBet: array expected");
                message.totalBet = [];
                for (var i = 0; i < object.totalBet.length; ++i)
                    message.totalBet[i] = object.totalBet[i] | 0;
            }
            if (object.winPoss) {
                if (!Array.isArray(object.winPoss))
                    throw TypeError(".bjl.TableInfo.winPoss: array expected");
                message.winPoss = [];
                for (var i = 0; i < object.winPoss.length; ++i)
                    message.winPoss[i] = object.winPoss[i] | 0;
            }
            if (object.winPosRecord) {
                if (!Array.isArray(object.winPosRecord))
                    throw TypeError(".bjl.TableInfo.winPosRecord: array expected");
                message.winPosRecord = [];
                for (var i = 0; i < object.winPosRecord.length; ++i) {
                    if (typeof object.winPosRecord[i] !== "object")
                        throw TypeError(".bjl.TableInfo.winPosRecord: object expected");
                    message.winPosRecord[i] = $root.bjl.IntArr.fromObject(object.winPosRecord[i]);
                }
            }
            if (object.remainCardsNum != null)
                message.remainCardsNum = object.remainCardsNum | 0;
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".bjl.TableInfo.player: object expected");
                message.player = $root.bjl.Player.fromObject(object.player);
            }
            if (object.richManList) {
                if (!Array.isArray(object.richManList))
                    throw TypeError(".bjl.TableInfo.richManList: array expected");
                message.richManList = [];
                for (var i = 0; i < object.richManList.length; ++i) {
                    if (typeof object.richManList[i] !== "object")
                        throw TypeError(".bjl.TableInfo.richManList: object expected");
                    message.richManList[i] = $root.bjl.Player.fromObject(object.richManList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.TableInfo
         * @static
         * @param {bjl.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.allowBet = [];
                object.cardA = [];
                object.cardB = [];
                object.mult = [];
                object.totalBet = [];
                object.winPoss = [];
                object.winPosRecord = [];
                object.richManList = [];
            }
            if (options.defaults) {
                object.tableId = "";
                object.seq = "";
                object.currentRound = 0;
                object.gameId = 0;
                object.gameNo = 0;
                object.minLimit = 0;
                object.maxLimit = 0;
                object.numA = 0;
                object.numB = 0;
                object.state = 0;
                object.remainCardsNum = 0;
                object.player = null;
            }
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            if (message.currentRound != null && message.hasOwnProperty("currentRound"))
                object.currentRound = message.currentRound;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                object.gameNo = message.gameNo;
            if (message.minLimit != null && message.hasOwnProperty("minLimit"))
                object.minLimit = message.minLimit;
            if (message.maxLimit != null && message.hasOwnProperty("maxLimit"))
                object.maxLimit = message.maxLimit;
            if (message.allowBet && message.allowBet.length) {
                object.allowBet = [];
                for (var j = 0; j < message.allowBet.length; ++j)
                    object.allowBet[j] = message.allowBet[j];
            }
            if (message.cardA && message.cardA.length) {
                object.cardA = [];
                for (var j = 0; j < message.cardA.length; ++j)
                    object.cardA[j] = message.cardA[j];
            }
            if (message.cardB && message.cardB.length) {
                object.cardB = [];
                for (var j = 0; j < message.cardB.length; ++j)
                    object.cardB[j] = message.cardB[j];
            }
            if (message.numA != null && message.hasOwnProperty("numA"))
                object.numA = message.numA;
            if (message.numB != null && message.hasOwnProperty("numB"))
                object.numB = message.numB;
            if (message.mult && message.mult.length) {
                object.mult = [];
                for (var j = 0; j < message.mult.length; ++j)
                    object.mult[j] = message.mult[j];
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.totalBet && message.totalBet.length) {
                object.totalBet = [];
                for (var j = 0; j < message.totalBet.length; ++j)
                    object.totalBet[j] = message.totalBet[j];
            }
            if (message.winPoss && message.winPoss.length) {
                object.winPoss = [];
                for (var j = 0; j < message.winPoss.length; ++j)
                    object.winPoss[j] = message.winPoss[j];
            }
            if (message.winPosRecord && message.winPosRecord.length) {
                object.winPosRecord = [];
                for (var j = 0; j < message.winPosRecord.length; ++j)
                    object.winPosRecord[j] = $root.bjl.IntArr.toObject(message.winPosRecord[j], options);
            }
            if (message.remainCardsNum != null && message.hasOwnProperty("remainCardsNum"))
                object.remainCardsNum = message.remainCardsNum;
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.bjl.Player.toObject(message.player, options);
            if (message.richManList && message.richManList.length) {
                object.richManList = [];
                for (var j = 0; j < message.richManList.length; ++j)
                    object.richManList[j] = $root.bjl.Player.toObject(message.richManList[j], options);
            }
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof bjl.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    bjl.c2s_delayCheck = (function() {

        /**
         * Properties of a c2s_delayCheck.
         * @memberof bjl
         * @interface Ic2s_delayCheck
         */

        /**
         * Constructs a new c2s_delayCheck.
         * @memberof bjl
         * @classdesc Represents a c2s_delayCheck.
         * @implements Ic2s_delayCheck
         * @constructor
         * @param {bjl.Ic2s_delayCheck=} [properties] Properties to set
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
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {bjl.Ic2s_delayCheck=} [properties] Properties to set
         * @returns {bjl.c2s_delayCheck} c2s_delayCheck instance
         */
        c2s_delayCheck.create = function create(properties) {
            return new c2s_delayCheck(properties);
        };

        /**
         * Encodes the specified c2s_delayCheck message. Does not implicitly {@link bjl.c2s_delayCheck.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {bjl.Ic2s_delayCheck} message c2s_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_delayCheck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_delayCheck message, length delimited. Does not implicitly {@link bjl.c2s_delayCheck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {bjl.Ic2s_delayCheck} message c2s_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_delayCheck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_delayCheck message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_delayCheck} c2s_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_delayCheck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_delayCheck();
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
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_delayCheck} c2s_delayCheck
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
         * @memberof bjl.c2s_delayCheck
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
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_delayCheck} c2s_delayCheck
         */
        c2s_delayCheck.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_delayCheck)
                return object;
            return new $root.bjl.c2s_delayCheck();
        };

        /**
         * Creates a plain object from a c2s_delayCheck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_delayCheck
         * @static
         * @param {bjl.c2s_delayCheck} message c2s_delayCheck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_delayCheck.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_delayCheck to JSON.
         * @function toJSON
         * @memberof bjl.c2s_delayCheck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_delayCheck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_delayCheck;
    })();

    bjl.s2c_delayCheck = (function() {

        /**
         * Properties of a s2c_delayCheck.
         * @memberof bjl
         * @interface Is2c_delayCheck
         * @property {bjl.IReply|null} [ret] s2c_delayCheck ret
         */

        /**
         * Constructs a new s2c_delayCheck.
         * @memberof bjl
         * @classdesc Represents a s2c_delayCheck.
         * @implements Is2c_delayCheck
         * @constructor
         * @param {bjl.Is2c_delayCheck=} [properties] Properties to set
         */
        function s2c_delayCheck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_delayCheck ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_delayCheck
         * @instance
         */
        s2c_delayCheck.prototype.ret = null;

        /**
         * Creates a new s2c_delayCheck instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {bjl.Is2c_delayCheck=} [properties] Properties to set
         * @returns {bjl.s2c_delayCheck} s2c_delayCheck instance
         */
        s2c_delayCheck.create = function create(properties) {
            return new s2c_delayCheck(properties);
        };

        /**
         * Encodes the specified s2c_delayCheck message. Does not implicitly {@link bjl.s2c_delayCheck.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {bjl.Is2c_delayCheck} message s2c_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_delayCheck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_delayCheck message, length delimited. Does not implicitly {@link bjl.s2c_delayCheck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {bjl.Is2c_delayCheck} message s2c_delayCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_delayCheck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_delayCheck message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_delayCheck} s2c_delayCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_delayCheck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_delayCheck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
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
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_delayCheck} s2c_delayCheck
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
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_delayCheck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_delayCheck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_delayCheck} s2c_delayCheck
         */
        s2c_delayCheck.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_delayCheck)
                return object;
            var message = new $root.bjl.s2c_delayCheck();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_delayCheck.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_delayCheck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_delayCheck
         * @static
         * @param {bjl.s2c_delayCheck} message s2c_delayCheck
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
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_delayCheck to JSON.
         * @function toJSON
         * @memberof bjl.s2c_delayCheck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_delayCheck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_delayCheck;
    })();

    bjl.c2s_foucedOffline = (function() {

        /**
         * Properties of a c2s_foucedOffline.
         * @memberof bjl
         * @interface Ic2s_foucedOffline
         * @property {number|null} [userId] c2s_foucedOffline userId
         */

        /**
         * Constructs a new c2s_foucedOffline.
         * @memberof bjl
         * @classdesc Represents a c2s_foucedOffline.
         * @implements Ic2s_foucedOffline
         * @constructor
         * @param {bjl.Ic2s_foucedOffline=} [properties] Properties to set
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
         * @memberof bjl.c2s_foucedOffline
         * @instance
         */
        c2s_foucedOffline.prototype.userId = 0;

        /**
         * Creates a new c2s_foucedOffline instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {bjl.Ic2s_foucedOffline=} [properties] Properties to set
         * @returns {bjl.c2s_foucedOffline} c2s_foucedOffline instance
         */
        c2s_foucedOffline.create = function create(properties) {
            return new c2s_foucedOffline(properties);
        };

        /**
         * Encodes the specified c2s_foucedOffline message. Does not implicitly {@link bjl.c2s_foucedOffline.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {bjl.Ic2s_foucedOffline} message c2s_foucedOffline message or plain object to encode
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
         * Encodes the specified c2s_foucedOffline message, length delimited. Does not implicitly {@link bjl.c2s_foucedOffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {bjl.Ic2s_foucedOffline} message c2s_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_foucedOffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_foucedOffline message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_foucedOffline} c2s_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_foucedOffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_foucedOffline();
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
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_foucedOffline} c2s_foucedOffline
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
         * @memberof bjl.c2s_foucedOffline
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
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_foucedOffline} c2s_foucedOffline
         */
        c2s_foucedOffline.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_foucedOffline)
                return object;
            var message = new $root.bjl.c2s_foucedOffline();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_foucedOffline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_foucedOffline
         * @static
         * @param {bjl.c2s_foucedOffline} message c2s_foucedOffline
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
         * @memberof bjl.c2s_foucedOffline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_foucedOffline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_foucedOffline;
    })();

    bjl.s2c_foucedOffline = (function() {

        /**
         * Properties of a s2c_foucedOffline.
         * @memberof bjl
         * @interface Is2c_foucedOffline
         * @property {bjl.IReply|null} [ret] s2c_foucedOffline ret
         */

        /**
         * Constructs a new s2c_foucedOffline.
         * @memberof bjl
         * @classdesc Represents a s2c_foucedOffline.
         * @implements Is2c_foucedOffline
         * @constructor
         * @param {bjl.Is2c_foucedOffline=} [properties] Properties to set
         */
        function s2c_foucedOffline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_foucedOffline ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_foucedOffline
         * @instance
         */
        s2c_foucedOffline.prototype.ret = null;

        /**
         * Creates a new s2c_foucedOffline instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {bjl.Is2c_foucedOffline=} [properties] Properties to set
         * @returns {bjl.s2c_foucedOffline} s2c_foucedOffline instance
         */
        s2c_foucedOffline.create = function create(properties) {
            return new s2c_foucedOffline(properties);
        };

        /**
         * Encodes the specified s2c_foucedOffline message. Does not implicitly {@link bjl.s2c_foucedOffline.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {bjl.Is2c_foucedOffline} message s2c_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_foucedOffline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_foucedOffline message, length delimited. Does not implicitly {@link bjl.s2c_foucedOffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {bjl.Is2c_foucedOffline} message s2c_foucedOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_foucedOffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_foucedOffline message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_foucedOffline} s2c_foucedOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_foucedOffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_foucedOffline();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
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
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_foucedOffline} s2c_foucedOffline
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
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_foucedOffline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_foucedOffline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_foucedOffline} s2c_foucedOffline
         */
        s2c_foucedOffline.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_foucedOffline)
                return object;
            var message = new $root.bjl.s2c_foucedOffline();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_foucedOffline.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_foucedOffline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_foucedOffline
         * @static
         * @param {bjl.s2c_foucedOffline} message s2c_foucedOffline
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
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_foucedOffline to JSON.
         * @function toJSON
         * @memberof bjl.s2c_foucedOffline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_foucedOffline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_foucedOffline;
    })();

    bjl.c2s_adminKickedOut = (function() {

        /**
         * Properties of a c2s_adminKickedOut.
         * @memberof bjl
         * @interface Ic2s_adminKickedOut
         * @property {number|null} [userId] c2s_adminKickedOut userId
         */

        /**
         * Constructs a new c2s_adminKickedOut.
         * @memberof bjl
         * @classdesc Represents a c2s_adminKickedOut.
         * @implements Ic2s_adminKickedOut
         * @constructor
         * @param {bjl.Ic2s_adminKickedOut=} [properties] Properties to set
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
         * @memberof bjl.c2s_adminKickedOut
         * @instance
         */
        c2s_adminKickedOut.prototype.userId = 0;

        /**
         * Creates a new c2s_adminKickedOut instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {bjl.Ic2s_adminKickedOut=} [properties] Properties to set
         * @returns {bjl.c2s_adminKickedOut} c2s_adminKickedOut instance
         */
        c2s_adminKickedOut.create = function create(properties) {
            return new c2s_adminKickedOut(properties);
        };

        /**
         * Encodes the specified c2s_adminKickedOut message. Does not implicitly {@link bjl.c2s_adminKickedOut.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {bjl.Ic2s_adminKickedOut} message c2s_adminKickedOut message or plain object to encode
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
         * Encodes the specified c2s_adminKickedOut message, length delimited. Does not implicitly {@link bjl.c2s_adminKickedOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {bjl.Ic2s_adminKickedOut} message c2s_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_adminKickedOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_adminKickedOut message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_adminKickedOut} c2s_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_adminKickedOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_adminKickedOut();
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
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_adminKickedOut} c2s_adminKickedOut
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
         * @memberof bjl.c2s_adminKickedOut
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
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_adminKickedOut} c2s_adminKickedOut
         */
        c2s_adminKickedOut.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_adminKickedOut)
                return object;
            var message = new $root.bjl.c2s_adminKickedOut();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_adminKickedOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_adminKickedOut
         * @static
         * @param {bjl.c2s_adminKickedOut} message c2s_adminKickedOut
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
         * @memberof bjl.c2s_adminKickedOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_adminKickedOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_adminKickedOut;
    })();

    bjl.s2c_adminKickedOut = (function() {

        /**
         * Properties of a s2c_adminKickedOut.
         * @memberof bjl
         * @interface Is2c_adminKickedOut
         * @property {bjl.IReply|null} [ret] s2c_adminKickedOut ret
         */

        /**
         * Constructs a new s2c_adminKickedOut.
         * @memberof bjl
         * @classdesc Represents a s2c_adminKickedOut.
         * @implements Is2c_adminKickedOut
         * @constructor
         * @param {bjl.Is2c_adminKickedOut=} [properties] Properties to set
         */
        function s2c_adminKickedOut(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_adminKickedOut ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_adminKickedOut
         * @instance
         */
        s2c_adminKickedOut.prototype.ret = null;

        /**
         * Creates a new s2c_adminKickedOut instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {bjl.Is2c_adminKickedOut=} [properties] Properties to set
         * @returns {bjl.s2c_adminKickedOut} s2c_adminKickedOut instance
         */
        s2c_adminKickedOut.create = function create(properties) {
            return new s2c_adminKickedOut(properties);
        };

        /**
         * Encodes the specified s2c_adminKickedOut message. Does not implicitly {@link bjl.s2c_adminKickedOut.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {bjl.Is2c_adminKickedOut} message s2c_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_adminKickedOut.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_adminKickedOut message, length delimited. Does not implicitly {@link bjl.s2c_adminKickedOut.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {bjl.Is2c_adminKickedOut} message s2c_adminKickedOut message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_adminKickedOut.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_adminKickedOut message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_adminKickedOut} s2c_adminKickedOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_adminKickedOut.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_adminKickedOut();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
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
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_adminKickedOut} s2c_adminKickedOut
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
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_adminKickedOut.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_adminKickedOut message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_adminKickedOut} s2c_adminKickedOut
         */
        s2c_adminKickedOut.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_adminKickedOut)
                return object;
            var message = new $root.bjl.s2c_adminKickedOut();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_adminKickedOut.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_adminKickedOut message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_adminKickedOut
         * @static
         * @param {bjl.s2c_adminKickedOut} message s2c_adminKickedOut
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
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_adminKickedOut to JSON.
         * @function toJSON
         * @memberof bjl.s2c_adminKickedOut
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_adminKickedOut.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_adminKickedOut;
    })();

    bjl.c2s_refreshCoin = (function() {

        /**
         * Properties of a c2s_refreshCoin.
         * @memberof bjl
         * @interface Ic2s_refreshCoin
         * @property {number|null} [userId] c2s_refreshCoin userId
         * @property {number|null} [type] c2s_refreshCoin type
         * @property {number|null} [coin] c2s_refreshCoin coin
         */

        /**
         * Constructs a new c2s_refreshCoin.
         * @memberof bjl
         * @classdesc Represents a c2s_refreshCoin.
         * @implements Ic2s_refreshCoin
         * @constructor
         * @param {bjl.Ic2s_refreshCoin=} [properties] Properties to set
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
         * @memberof bjl.c2s_refreshCoin
         * @instance
         */
        c2s_refreshCoin.prototype.userId = 0;

        /**
         * c2s_refreshCoin type.
         * @member {number} type
         * @memberof bjl.c2s_refreshCoin
         * @instance
         */
        c2s_refreshCoin.prototype.type = 0;

        /**
         * c2s_refreshCoin coin.
         * @member {number} coin
         * @memberof bjl.c2s_refreshCoin
         * @instance
         */
        c2s_refreshCoin.prototype.coin = 0;

        /**
         * Creates a new c2s_refreshCoin instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {bjl.Ic2s_refreshCoin=} [properties] Properties to set
         * @returns {bjl.c2s_refreshCoin} c2s_refreshCoin instance
         */
        c2s_refreshCoin.create = function create(properties) {
            return new c2s_refreshCoin(properties);
        };

        /**
         * Encodes the specified c2s_refreshCoin message. Does not implicitly {@link bjl.c2s_refreshCoin.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {bjl.Ic2s_refreshCoin} message c2s_refreshCoin message or plain object to encode
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
         * Encodes the specified c2s_refreshCoin message, length delimited. Does not implicitly {@link bjl.c2s_refreshCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {bjl.Ic2s_refreshCoin} message c2s_refreshCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_refreshCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_refreshCoin message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_refreshCoin} c2s_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_refreshCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_refreshCoin();
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
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_refreshCoin} c2s_refreshCoin
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
         * @memberof bjl.c2s_refreshCoin
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
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_refreshCoin} c2s_refreshCoin
         */
        c2s_refreshCoin.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_refreshCoin)
                return object;
            var message = new $root.bjl.c2s_refreshCoin();
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
         * @memberof bjl.c2s_refreshCoin
         * @static
         * @param {bjl.c2s_refreshCoin} message c2s_refreshCoin
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
         * @memberof bjl.c2s_refreshCoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_refreshCoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_refreshCoin;
    })();

    bjl.s2c_refreshCoin = (function() {

        /**
         * Properties of a s2c_refreshCoin.
         * @memberof bjl
         * @interface Is2c_refreshCoin
         * @property {number|null} [userId] s2c_refreshCoin userId
         * @property {number|null} [coin] s2c_refreshCoin coin
         * @property {boolean|null} [isInTable] s2c_refreshCoin isInTable
         * @property {number|null} [type] s2c_refreshCoin type
         * @property {number|null} [addCoin] s2c_refreshCoin addCoin
         */

        /**
         * Constructs a new s2c_refreshCoin.
         * @memberof bjl
         * @classdesc Represents a s2c_refreshCoin.
         * @implements Is2c_refreshCoin
         * @constructor
         * @param {bjl.Is2c_refreshCoin=} [properties] Properties to set
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
         * @memberof bjl.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.userId = 0;

        /**
         * s2c_refreshCoin coin.
         * @member {number} coin
         * @memberof bjl.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.coin = 0;

        /**
         * s2c_refreshCoin isInTable.
         * @member {boolean} isInTable
         * @memberof bjl.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.isInTable = false;

        /**
         * s2c_refreshCoin type.
         * @member {number} type
         * @memberof bjl.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.type = 0;

        /**
         * s2c_refreshCoin addCoin.
         * @member {number} addCoin
         * @memberof bjl.s2c_refreshCoin
         * @instance
         */
        s2c_refreshCoin.prototype.addCoin = 0;

        /**
         * Creates a new s2c_refreshCoin instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {bjl.Is2c_refreshCoin=} [properties] Properties to set
         * @returns {bjl.s2c_refreshCoin} s2c_refreshCoin instance
         */
        s2c_refreshCoin.create = function create(properties) {
            return new s2c_refreshCoin(properties);
        };

        /**
         * Encodes the specified s2c_refreshCoin message. Does not implicitly {@link bjl.s2c_refreshCoin.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {bjl.Is2c_refreshCoin} message s2c_refreshCoin message or plain object to encode
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
         * Encodes the specified s2c_refreshCoin message, length delimited. Does not implicitly {@link bjl.s2c_refreshCoin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {bjl.Is2c_refreshCoin} message s2c_refreshCoin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_refreshCoin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_refreshCoin message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_refreshCoin} s2c_refreshCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_refreshCoin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_refreshCoin();
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
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_refreshCoin} s2c_refreshCoin
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
         * @memberof bjl.s2c_refreshCoin
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
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_refreshCoin} s2c_refreshCoin
         */
        s2c_refreshCoin.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_refreshCoin)
                return object;
            var message = new $root.bjl.s2c_refreshCoin();
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
         * @memberof bjl.s2c_refreshCoin
         * @static
         * @param {bjl.s2c_refreshCoin} message s2c_refreshCoin
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
         * @memberof bjl.s2c_refreshCoin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_refreshCoin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_refreshCoin;
    })();

    bjl.c2s_bet = (function() {

        /**
         * Properties of a c2s_bet.
         * @memberof bjl
         * @interface Ic2s_bet
         * @property {number|null} [pos] c2s_bet pos
         * @property {number|null} [value] c2s_bet value
         */

        /**
         * Constructs a new c2s_bet.
         * @memberof bjl
         * @classdesc Represents a c2s_bet.
         * @implements Ic2s_bet
         * @constructor
         * @param {bjl.Ic2s_bet=} [properties] Properties to set
         */
        function c2s_bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_bet pos.
         * @member {number} pos
         * @memberof bjl.c2s_bet
         * @instance
         */
        c2s_bet.prototype.pos = 0;

        /**
         * c2s_bet value.
         * @member {number} value
         * @memberof bjl.c2s_bet
         * @instance
         */
        c2s_bet.prototype.value = 0;

        /**
         * Creates a new c2s_bet instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_bet
         * @static
         * @param {bjl.Ic2s_bet=} [properties] Properties to set
         * @returns {bjl.c2s_bet} c2s_bet instance
         */
        c2s_bet.create = function create(properties) {
            return new c2s_bet(properties);
        };

        /**
         * Encodes the specified c2s_bet message. Does not implicitly {@link bjl.c2s_bet.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_bet
         * @static
         * @param {bjl.Ic2s_bet} message c2s_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pos);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
            return writer;
        };

        /**
         * Encodes the specified c2s_bet message, length delimited. Does not implicitly {@link bjl.c2s_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_bet
         * @static
         * @param {bjl.Ic2s_bet} message c2s_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_bet message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_bet} c2s_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pos = reader.int32();
                    break;
                case 2:
                    message.value = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.c2s_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_bet} c2s_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_bet message.
         * @function verify
         * @memberof bjl.c2s_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a c2s_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.c2s_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_bet} c2s_bet
         */
        c2s_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_bet)
                return object;
            var message = new $root.bjl.c2s_bet();
            if (object.pos != null)
                message.pos = object.pos | 0;
            if (object.value != null)
                message.value = object.value | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_bet
         * @static
         * @param {bjl.c2s_bet} message c2s_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pos = 0;
                object.value = 0;
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this c2s_bet to JSON.
         * @function toJSON
         * @memberof bjl.c2s_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_bet;
    })();

    bjl.s2c_bet = (function() {

        /**
         * Properties of a s2c_bet.
         * @memberof bjl
         * @interface Is2c_bet
         * @property {bjl.IPlayer|null} [player] s2c_bet player
         * @property {number|null} [pos] s2c_bet pos
         * @property {number|null} [value] s2c_bet value
         * @property {bjl.IReply|null} [ret] s2c_bet ret
         */

        /**
         * Constructs a new s2c_bet.
         * @memberof bjl
         * @classdesc Represents a s2c_bet.
         * @implements Is2c_bet
         * @constructor
         * @param {bjl.Is2c_bet=} [properties] Properties to set
         */
        function s2c_bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_bet player.
         * @member {bjl.IPlayer|null|undefined} player
         * @memberof bjl.s2c_bet
         * @instance
         */
        s2c_bet.prototype.player = null;

        /**
         * s2c_bet pos.
         * @member {number} pos
         * @memberof bjl.s2c_bet
         * @instance
         */
        s2c_bet.prototype.pos = 0;

        /**
         * s2c_bet value.
         * @member {number} value
         * @memberof bjl.s2c_bet
         * @instance
         */
        s2c_bet.prototype.value = 0;

        /**
         * s2c_bet ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_bet
         * @instance
         */
        s2c_bet.prototype.ret = null;

        /**
         * Creates a new s2c_bet instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_bet
         * @static
         * @param {bjl.Is2c_bet=} [properties] Properties to set
         * @returns {bjl.s2c_bet} s2c_bet instance
         */
        s2c_bet.create = function create(properties) {
            return new s2c_bet(properties);
        };

        /**
         * Encodes the specified s2c_bet message. Does not implicitly {@link bjl.s2c_bet.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_bet
         * @static
         * @param {bjl.Is2c_bet} message s2c_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.player != null && message.hasOwnProperty("player"))
                $root.bjl.Player.encode(message.player, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pos != null && message.hasOwnProperty("pos"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pos);
            if (message.value != null && message.hasOwnProperty("value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.value);
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_bet message, length delimited. Does not implicitly {@link bjl.s2c_bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_bet
         * @static
         * @param {bjl.Is2c_bet} message s2c_bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_bet message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_bet} s2c_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.player = $root.bjl.Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pos = reader.int32();
                    break;
                case 3:
                    message.value = reader.int32();
                    break;
                case 4:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.s2c_bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_bet} s2c_bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_bet message.
         * @function verify
         * @memberof bjl.s2c_bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                var error = $root.bjl.Player.verify(message.player);
                if (error)
                    return "player." + error;
            }
            if (message.pos != null && message.hasOwnProperty("pos"))
                if (!$util.isInteger(message.pos))
                    return "pos: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_bet} s2c_bet
         */
        s2c_bet.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_bet)
                return object;
            var message = new $root.bjl.s2c_bet();
            if (object.player != null) {
                if (typeof object.player !== "object")
                    throw TypeError(".bjl.s2c_bet.player: object expected");
                message.player = $root.bjl.Player.fromObject(object.player);
            }
            if (object.pos != null)
                message.pos = object.pos | 0;
            if (object.value != null)
                message.value = object.value | 0;
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_bet.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_bet
         * @static
         * @param {bjl.s2c_bet} message s2c_bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.player = null;
                object.pos = 0;
                object.value = 0;
                object.ret = null;
            }
            if (message.player != null && message.hasOwnProperty("player"))
                object.player = $root.bjl.Player.toObject(message.player, options);
            if (message.pos != null && message.hasOwnProperty("pos"))
                object.pos = message.pos;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_bet to JSON.
         * @function toJSON
         * @memberof bjl.s2c_bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_bet;
    })();

    bjl.c2s_joinTable = (function() {

        /**
         * Properties of a c2s_joinTable.
         * @memberof bjl
         * @interface Ic2s_joinTable
         * @property {string|null} [sid] c2s_joinTable sid
         * @property {number|null} [tableType] c2s_joinTable tableType
         */

        /**
         * Constructs a new c2s_joinTable.
         * @memberof bjl
         * @classdesc Represents a c2s_joinTable.
         * @implements Ic2s_joinTable
         * @constructor
         * @param {bjl.Ic2s_joinTable=} [properties] Properties to set
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
         * @memberof bjl.c2s_joinTable
         * @instance
         */
        c2s_joinTable.prototype.sid = "";

        /**
         * c2s_joinTable tableType.
         * @member {number} tableType
         * @memberof bjl.c2s_joinTable
         * @instance
         */
        c2s_joinTable.prototype.tableType = 0;

        /**
         * Creates a new c2s_joinTable instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {bjl.Ic2s_joinTable=} [properties] Properties to set
         * @returns {bjl.c2s_joinTable} c2s_joinTable instance
         */
        c2s_joinTable.create = function create(properties) {
            return new c2s_joinTable(properties);
        };

        /**
         * Encodes the specified c2s_joinTable message. Does not implicitly {@link bjl.c2s_joinTable.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {bjl.Ic2s_joinTable} message c2s_joinTable message or plain object to encode
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
         * Encodes the specified c2s_joinTable message, length delimited. Does not implicitly {@link bjl.c2s_joinTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {bjl.Ic2s_joinTable} message c2s_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_joinTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_joinTable message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_joinTable} c2s_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_joinTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_joinTable();
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
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_joinTable} c2s_joinTable
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
         * @memberof bjl.c2s_joinTable
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
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_joinTable} c2s_joinTable
         */
        c2s_joinTable.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_joinTable)
                return object;
            var message = new $root.bjl.c2s_joinTable();
            if (object.sid != null)
                message.sid = String(object.sid);
            if (object.tableType != null)
                message.tableType = object.tableType | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_joinTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_joinTable
         * @static
         * @param {bjl.c2s_joinTable} message c2s_joinTable
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
         * @memberof bjl.c2s_joinTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_joinTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_joinTable;
    })();

    bjl.s2c_joinTable = (function() {

        /**
         * Properties of a s2c_joinTable.
         * @memberof bjl
         * @interface Is2c_joinTable
         * @property {bjl.ITableInfo|null} [tableInfo] s2c_joinTable tableInfo
         * @property {bjl.IReply|null} [ret] s2c_joinTable ret
         */

        /**
         * Constructs a new s2c_joinTable.
         * @memberof bjl
         * @classdesc Represents a s2c_joinTable.
         * @implements Is2c_joinTable
         * @constructor
         * @param {bjl.Is2c_joinTable=} [properties] Properties to set
         */
        function s2c_joinTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_joinTable tableInfo.
         * @member {bjl.ITableInfo|null|undefined} tableInfo
         * @memberof bjl.s2c_joinTable
         * @instance
         */
        s2c_joinTable.prototype.tableInfo = null;

        /**
         * s2c_joinTable ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_joinTable
         * @instance
         */
        s2c_joinTable.prototype.ret = null;

        /**
         * Creates a new s2c_joinTable instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {bjl.Is2c_joinTable=} [properties] Properties to set
         * @returns {bjl.s2c_joinTable} s2c_joinTable instance
         */
        s2c_joinTable.create = function create(properties) {
            return new s2c_joinTable(properties);
        };

        /**
         * Encodes the specified s2c_joinTable message. Does not implicitly {@link bjl.s2c_joinTable.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {bjl.Is2c_joinTable} message s2c_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_joinTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                $root.bjl.TableInfo.encode(message.tableInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_joinTable message, length delimited. Does not implicitly {@link bjl.s2c_joinTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {bjl.Is2c_joinTable} message s2c_joinTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_joinTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_joinTable message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_joinTable} s2c_joinTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_joinTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_joinTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tableInfo = $root.bjl.TableInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
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
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_joinTable} s2c_joinTable
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
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_joinTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo")) {
                var error = $root.bjl.TableInfo.verify(message.tableInfo);
                if (error)
                    return "tableInfo." + error;
            }
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_joinTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_joinTable} s2c_joinTable
         */
        s2c_joinTable.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_joinTable)
                return object;
            var message = new $root.bjl.s2c_joinTable();
            if (object.tableInfo != null) {
                if (typeof object.tableInfo !== "object")
                    throw TypeError(".bjl.s2c_joinTable.tableInfo: object expected");
                message.tableInfo = $root.bjl.TableInfo.fromObject(object.tableInfo);
            }
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_joinTable.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_joinTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_joinTable
         * @static
         * @param {bjl.s2c_joinTable} message s2c_joinTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_joinTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.tableInfo = null;
                object.ret = null;
            }
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                object.tableInfo = $root.bjl.TableInfo.toObject(message.tableInfo, options);
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_joinTable to JSON.
         * @function toJSON
         * @memberof bjl.s2c_joinTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_joinTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_joinTable;
    })();

    bjl.c2s_getUserList = (function() {

        /**
         * Properties of a c2s_getUserList.
         * @memberof bjl
         * @interface Ic2s_getUserList
         */

        /**
         * Constructs a new c2s_getUserList.
         * @memberof bjl
         * @classdesc Represents a c2s_getUserList.
         * @implements Ic2s_getUserList
         * @constructor
         * @param {bjl.Ic2s_getUserList=} [properties] Properties to set
         */
        function c2s_getUserList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_getUserList instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {bjl.Ic2s_getUserList=} [properties] Properties to set
         * @returns {bjl.c2s_getUserList} c2s_getUserList instance
         */
        c2s_getUserList.create = function create(properties) {
            return new c2s_getUserList(properties);
        };

        /**
         * Encodes the specified c2s_getUserList message. Does not implicitly {@link bjl.c2s_getUserList.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {bjl.Ic2s_getUserList} message c2s_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_getUserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_getUserList message, length delimited. Does not implicitly {@link bjl.c2s_getUserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {bjl.Ic2s_getUserList} message c2s_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_getUserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_getUserList message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_getUserList} c2s_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_getUserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_getUserList();
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
         * Decodes a c2s_getUserList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_getUserList} c2s_getUserList
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
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_getUserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_getUserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_getUserList} c2s_getUserList
         */
        c2s_getUserList.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_getUserList)
                return object;
            return new $root.bjl.c2s_getUserList();
        };

        /**
         * Creates a plain object from a c2s_getUserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_getUserList
         * @static
         * @param {bjl.c2s_getUserList} message c2s_getUserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_getUserList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_getUserList to JSON.
         * @function toJSON
         * @memberof bjl.c2s_getUserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_getUserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_getUserList;
    })();

    bjl.s2c_getUserList = (function() {

        /**
         * Properties of a s2c_getUserList.
         * @memberof bjl
         * @interface Is2c_getUserList
         * @property {bjl.IReply|null} [ret] s2c_getUserList ret
         * @property {Array.<bjl.IPlayer>|null} [richManList] s2c_getUserList richManList
         */

        /**
         * Constructs a new s2c_getUserList.
         * @memberof bjl
         * @classdesc Represents a s2c_getUserList.
         * @implements Is2c_getUserList
         * @constructor
         * @param {bjl.Is2c_getUserList=} [properties] Properties to set
         */
        function s2c_getUserList(properties) {
            this.richManList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_getUserList ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_getUserList
         * @instance
         */
        s2c_getUserList.prototype.ret = null;

        /**
         * s2c_getUserList richManList.
         * @member {Array.<bjl.IPlayer>} richManList
         * @memberof bjl.s2c_getUserList
         * @instance
         */
        s2c_getUserList.prototype.richManList = $util.emptyArray;

        /**
         * Creates a new s2c_getUserList instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {bjl.Is2c_getUserList=} [properties] Properties to set
         * @returns {bjl.s2c_getUserList} s2c_getUserList instance
         */
        s2c_getUserList.create = function create(properties) {
            return new s2c_getUserList(properties);
        };

        /**
         * Encodes the specified s2c_getUserList message. Does not implicitly {@link bjl.s2c_getUserList.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {bjl.Is2c_getUserList} message s2c_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_getUserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.richManList != null && message.richManList.length)
                for (var i = 0; i < message.richManList.length; ++i)
                    $root.bjl.Player.encode(message.richManList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_getUserList message, length delimited. Does not implicitly {@link bjl.s2c_getUserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {bjl.Is2c_getUserList} message s2c_getUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_getUserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_getUserList message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_getUserList} s2c_getUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_getUserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_getUserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.richManList && message.richManList.length))
                        message.richManList = [];
                    message.richManList.push($root.bjl.Player.decode(reader, reader.uint32()));
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
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_getUserList} s2c_getUserList
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
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_getUserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            if (message.richManList != null && message.hasOwnProperty("richManList")) {
                if (!Array.isArray(message.richManList))
                    return "richManList: array expected";
                for (var i = 0; i < message.richManList.length; ++i) {
                    var error = $root.bjl.Player.verify(message.richManList[i]);
                    if (error)
                        return "richManList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a s2c_getUserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_getUserList} s2c_getUserList
         */
        s2c_getUserList.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_getUserList)
                return object;
            var message = new $root.bjl.s2c_getUserList();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_getUserList.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            if (object.richManList) {
                if (!Array.isArray(object.richManList))
                    throw TypeError(".bjl.s2c_getUserList.richManList: array expected");
                message.richManList = [];
                for (var i = 0; i < object.richManList.length; ++i) {
                    if (typeof object.richManList[i] !== "object")
                        throw TypeError(".bjl.s2c_getUserList.richManList: object expected");
                    message.richManList[i] = $root.bjl.Player.fromObject(object.richManList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_getUserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_getUserList
         * @static
         * @param {bjl.s2c_getUserList} message s2c_getUserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_getUserList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.richManList = [];
            if (options.defaults)
                object.ret = null;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            if (message.richManList && message.richManList.length) {
                object.richManList = [];
                for (var j = 0; j < message.richManList.length; ++j)
                    object.richManList[j] = $root.bjl.Player.toObject(message.richManList[j], options);
            }
            return object;
        };

        /**
         * Converts this s2c_getUserList to JSON.
         * @function toJSON
         * @memberof bjl.s2c_getUserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_getUserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_getUserList;
    })();

    bjl.c2s_noticePush = (function() {

        /**
         * Properties of a c2s_noticePush.
         * @memberof bjl
         * @interface Ic2s_noticePush
         */

        /**
         * Constructs a new c2s_noticePush.
         * @memberof bjl
         * @classdesc Represents a c2s_noticePush.
         * @implements Ic2s_noticePush
         * @constructor
         * @param {bjl.Ic2s_noticePush=} [properties] Properties to set
         */
        function c2s_noticePush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new c2s_noticePush instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {bjl.Ic2s_noticePush=} [properties] Properties to set
         * @returns {bjl.c2s_noticePush} c2s_noticePush instance
         */
        c2s_noticePush.create = function create(properties) {
            return new c2s_noticePush(properties);
        };

        /**
         * Encodes the specified c2s_noticePush message. Does not implicitly {@link bjl.c2s_noticePush.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {bjl.Ic2s_noticePush} message c2s_noticePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_noticePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_noticePush message, length delimited. Does not implicitly {@link bjl.c2s_noticePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {bjl.Ic2s_noticePush} message c2s_noticePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_noticePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_noticePush message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_noticePush} c2s_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_noticePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_noticePush();
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
         * Decodes a c2s_noticePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_noticePush} c2s_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_noticePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_noticePush message.
         * @function verify
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_noticePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a c2s_noticePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_noticePush} c2s_noticePush
         */
        c2s_noticePush.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_noticePush)
                return object;
            return new $root.bjl.c2s_noticePush();
        };

        /**
         * Creates a plain object from a c2s_noticePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_noticePush
         * @static
         * @param {bjl.c2s_noticePush} message c2s_noticePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_noticePush.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_noticePush to JSON.
         * @function toJSON
         * @memberof bjl.c2s_noticePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_noticePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_noticePush;
    })();

    bjl.s2c_noticePush = (function() {

        /**
         * Properties of a s2c_noticePush.
         * @memberof bjl
         * @interface Is2c_noticePush
         * @property {bjl.IReply|null} [ret] s2c_noticePush ret
         */

        /**
         * Constructs a new s2c_noticePush.
         * @memberof bjl
         * @classdesc Represents a s2c_noticePush.
         * @implements Is2c_noticePush
         * @constructor
         * @param {bjl.Is2c_noticePush=} [properties] Properties to set
         */
        function s2c_noticePush(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_noticePush ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_noticePush
         * @instance
         */
        s2c_noticePush.prototype.ret = null;

        /**
         * Creates a new s2c_noticePush instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {bjl.Is2c_noticePush=} [properties] Properties to set
         * @returns {bjl.s2c_noticePush} s2c_noticePush instance
         */
        s2c_noticePush.create = function create(properties) {
            return new s2c_noticePush(properties);
        };

        /**
         * Encodes the specified s2c_noticePush message. Does not implicitly {@link bjl.s2c_noticePush.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {bjl.Is2c_noticePush} message s2c_noticePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_noticePush.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_noticePush message, length delimited. Does not implicitly {@link bjl.s2c_noticePush.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {bjl.Is2c_noticePush} message s2c_noticePush message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_noticePush.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_noticePush message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_noticePush} s2c_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_noticePush.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_noticePush();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_noticePush message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_noticePush} s2c_noticePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_noticePush.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_noticePush message.
         * @function verify
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_noticePush.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_noticePush message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_noticePush} s2c_noticePush
         */
        s2c_noticePush.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_noticePush)
                return object;
            var message = new $root.bjl.s2c_noticePush();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_noticePush.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_noticePush message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_noticePush
         * @static
         * @param {bjl.s2c_noticePush} message s2c_noticePush
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_noticePush.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = null;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_noticePush to JSON.
         * @function toJSON
         * @memberof bjl.s2c_noticePush
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_noticePush.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_noticePush;
    })();

    bjl.c2s_reconnect = (function() {

        /**
         * Properties of a c2s_reconnect.
         * @memberof bjl
         * @interface Ic2s_reconnect
         * @property {number|null} [userId] c2s_reconnect userId
         */

        /**
         * Constructs a new c2s_reconnect.
         * @memberof bjl
         * @classdesc Represents a c2s_reconnect.
         * @implements Ic2s_reconnect
         * @constructor
         * @param {bjl.Ic2s_reconnect=} [properties] Properties to set
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
         * @memberof bjl.c2s_reconnect
         * @instance
         */
        c2s_reconnect.prototype.userId = 0;

        /**
         * Creates a new c2s_reconnect instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {bjl.Ic2s_reconnect=} [properties] Properties to set
         * @returns {bjl.c2s_reconnect} c2s_reconnect instance
         */
        c2s_reconnect.create = function create(properties) {
            return new c2s_reconnect(properties);
        };

        /**
         * Encodes the specified c2s_reconnect message. Does not implicitly {@link bjl.c2s_reconnect.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {bjl.Ic2s_reconnect} message c2s_reconnect message or plain object to encode
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
         * Encodes the specified c2s_reconnect message, length delimited. Does not implicitly {@link bjl.c2s_reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {bjl.Ic2s_reconnect} message c2s_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_reconnect} c2s_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_reconnect();
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
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_reconnect} c2s_reconnect
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
         * @memberof bjl.c2s_reconnect
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
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_reconnect} c2s_reconnect
         */
        c2s_reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_reconnect)
                return object;
            var message = new $root.bjl.c2s_reconnect();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_reconnect
         * @static
         * @param {bjl.c2s_reconnect} message c2s_reconnect
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
         * @memberof bjl.c2s_reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_reconnect;
    })();

    bjl.s2c_reconnect = (function() {

        /**
         * Properties of a s2c_reconnect.
         * @memberof bjl
         * @interface Is2c_reconnect
         * @property {number|null} [userId] s2c_reconnect userId
         * @property {bjl.ITableInfo|null} [tableInfo] s2c_reconnect tableInfo
         * @property {string|null} [token] s2c_reconnect token
         * @property {bjl.IReply|null} [ret] s2c_reconnect ret
         */

        /**
         * Constructs a new s2c_reconnect.
         * @memberof bjl
         * @classdesc Represents a s2c_reconnect.
         * @implements Is2c_reconnect
         * @constructor
         * @param {bjl.Is2c_reconnect=} [properties] Properties to set
         */
        function s2c_reconnect(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_reconnect userId.
         * @member {number} userId
         * @memberof bjl.s2c_reconnect
         * @instance
         */
        s2c_reconnect.prototype.userId = 0;

        /**
         * s2c_reconnect tableInfo.
         * @member {bjl.ITableInfo|null|undefined} tableInfo
         * @memberof bjl.s2c_reconnect
         * @instance
         */
        s2c_reconnect.prototype.tableInfo = null;

        /**
         * s2c_reconnect token.
         * @member {string} token
         * @memberof bjl.s2c_reconnect
         * @instance
         */
        s2c_reconnect.prototype.token = "";

        /**
         * s2c_reconnect ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_reconnect
         * @instance
         */
        s2c_reconnect.prototype.ret = null;

        /**
         * Creates a new s2c_reconnect instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {bjl.Is2c_reconnect=} [properties] Properties to set
         * @returns {bjl.s2c_reconnect} s2c_reconnect instance
         */
        s2c_reconnect.create = function create(properties) {
            return new s2c_reconnect(properties);
        };

        /**
         * Encodes the specified s2c_reconnect message. Does not implicitly {@link bjl.s2c_reconnect.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {bjl.Is2c_reconnect} message s2c_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_reconnect.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                $root.bjl.TableInfo.encode(message.tableInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_reconnect message, length delimited. Does not implicitly {@link bjl.s2c_reconnect.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {bjl.Is2c_reconnect} message s2c_reconnect message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_reconnect.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_reconnect message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_reconnect} s2c_reconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_reconnect.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_reconnect();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.tableInfo = $root.bjl.TableInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.token = reader.string();
                    break;
                case 4:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
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
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_reconnect} s2c_reconnect
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
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_reconnect.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo")) {
                var error = $root.bjl.TableInfo.verify(message.tableInfo);
                if (error)
                    return "tableInfo." + error;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_reconnect message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_reconnect} s2c_reconnect
         */
        s2c_reconnect.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_reconnect)
                return object;
            var message = new $root.bjl.s2c_reconnect();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.tableInfo != null) {
                if (typeof object.tableInfo !== "object")
                    throw TypeError(".bjl.s2c_reconnect.tableInfo: object expected");
                message.tableInfo = $root.bjl.TableInfo.fromObject(object.tableInfo);
            }
            if (object.token != null)
                message.token = String(object.token);
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_reconnect.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_reconnect message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_reconnect
         * @static
         * @param {bjl.s2c_reconnect} message s2c_reconnect
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_reconnect.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.tableInfo = null;
                object.token = "";
                object.ret = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.tableInfo != null && message.hasOwnProperty("tableInfo"))
                object.tableInfo = $root.bjl.TableInfo.toObject(message.tableInfo, options);
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_reconnect to JSON.
         * @function toJSON
         * @memberof bjl.s2c_reconnect
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_reconnect.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_reconnect;
    })();

    bjl.c2s_userOnback = (function() {

        /**
         * Properties of a c2s_userOnback.
         * @memberof bjl
         * @interface Ic2s_userOnback
         * @property {bjl.IReply|null} [ret] c2s_userOnback ret
         * @property {number|null} [onback] c2s_userOnback onback
         */

        /**
         * Constructs a new c2s_userOnback.
         * @memberof bjl
         * @classdesc Represents a c2s_userOnback.
         * @implements Ic2s_userOnback
         * @constructor
         * @param {bjl.Ic2s_userOnback=} [properties] Properties to set
         */
        function c2s_userOnback(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * c2s_userOnback ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.c2s_userOnback
         * @instance
         */
        c2s_userOnback.prototype.ret = null;

        /**
         * c2s_userOnback onback.
         * @member {number} onback
         * @memberof bjl.c2s_userOnback
         * @instance
         */
        c2s_userOnback.prototype.onback = 0;

        /**
         * Creates a new c2s_userOnback instance using the specified properties.
         * @function create
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {bjl.Ic2s_userOnback=} [properties] Properties to set
         * @returns {bjl.c2s_userOnback} c2s_userOnback instance
         */
        c2s_userOnback.create = function create(properties) {
            return new c2s_userOnback(properties);
        };

        /**
         * Encodes the specified c2s_userOnback message. Does not implicitly {@link bjl.c2s_userOnback.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {bjl.Ic2s_userOnback} message c2s_userOnback message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userOnback.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.onback != null && message.hasOwnProperty("onback"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onback);
            return writer;
        };

        /**
         * Encodes the specified c2s_userOnback message, length delimited. Does not implicitly {@link bjl.c2s_userOnback.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {bjl.Ic2s_userOnback} message c2s_userOnback message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userOnback.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_userOnback message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_userOnback} c2s_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userOnback.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_userOnback();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.onback = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a c2s_userOnback message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_userOnback} c2s_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userOnback.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a c2s_userOnback message.
         * @function verify
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        c2s_userOnback.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            if (message.onback != null && message.hasOwnProperty("onback"))
                if (!$util.isInteger(message.onback))
                    return "onback: integer expected";
            return null;
        };

        /**
         * Creates a c2s_userOnback message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_userOnback} c2s_userOnback
         */
        c2s_userOnback.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_userOnback)
                return object;
            var message = new $root.bjl.c2s_userOnback();
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.c2s_userOnback.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            if (object.onback != null)
                message.onback = object.onback | 0;
            return message;
        };

        /**
         * Creates a plain object from a c2s_userOnback message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_userOnback
         * @static
         * @param {bjl.c2s_userOnback} message c2s_userOnback
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_userOnback.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ret = null;
                object.onback = 0;
            }
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            if (message.onback != null && message.hasOwnProperty("onback"))
                object.onback = message.onback;
            return object;
        };

        /**
         * Converts this c2s_userOnback to JSON.
         * @function toJSON
         * @memberof bjl.c2s_userOnback
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_userOnback.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_userOnback;
    })();

    bjl.s2c_userOnback = (function() {

        /**
         * Properties of a s2c_userOnback.
         * @memberof bjl
         * @interface Is2c_userOnback
         * @property {number|null} [userId] s2c_userOnback userId
         * @property {bjl.IReply|null} [ret] s2c_userOnback ret
         */

        /**
         * Constructs a new s2c_userOnback.
         * @memberof bjl
         * @classdesc Represents a s2c_userOnback.
         * @implements Is2c_userOnback
         * @constructor
         * @param {bjl.Is2c_userOnback=} [properties] Properties to set
         */
        function s2c_userOnback(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * s2c_userOnback userId.
         * @member {number} userId
         * @memberof bjl.s2c_userOnback
         * @instance
         */
        s2c_userOnback.prototype.userId = 0;

        /**
         * s2c_userOnback ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_userOnback
         * @instance
         */
        s2c_userOnback.prototype.ret = null;

        /**
         * Creates a new s2c_userOnback instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {bjl.Is2c_userOnback=} [properties] Properties to set
         * @returns {bjl.s2c_userOnback} s2c_userOnback instance
         */
        s2c_userOnback.create = function create(properties) {
            return new s2c_userOnback(properties);
        };

        /**
         * Encodes the specified s2c_userOnback message. Does not implicitly {@link bjl.s2c_userOnback.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {bjl.Is2c_userOnback} message s2c_userOnback message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userOnback.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_userOnback message, length delimited. Does not implicitly {@link bjl.s2c_userOnback.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {bjl.Is2c_userOnback} message s2c_userOnback message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userOnback.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_userOnback message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_userOnback} s2c_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userOnback.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_userOnback();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a s2c_userOnback message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_userOnback} s2c_userOnback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userOnback.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a s2c_userOnback message.
         * @function verify
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        s2c_userOnback.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_userOnback message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_userOnback} s2c_userOnback
         */
        s2c_userOnback.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_userOnback)
                return object;
            var message = new $root.bjl.s2c_userOnback();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_userOnback.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_userOnback message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_userOnback
         * @static
         * @param {bjl.s2c_userOnback} message s2c_userOnback
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_userOnback.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.ret = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_userOnback to JSON.
         * @function toJSON
         * @memberof bjl.s2c_userOnback
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_userOnback.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_userOnback;
    })();

    bjl.c2s_userQuit = (function() {

        /**
         * Properties of a c2s_userQuit.
         * @memberof bjl
         * @interface Ic2s_userQuit
         */

        /**
         * Constructs a new c2s_userQuit.
         * @memberof bjl
         * @classdesc Represents a c2s_userQuit.
         * @implements Ic2s_userQuit
         * @constructor
         * @param {bjl.Ic2s_userQuit=} [properties] Properties to set
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
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {bjl.Ic2s_userQuit=} [properties] Properties to set
         * @returns {bjl.c2s_userQuit} c2s_userQuit instance
         */
        c2s_userQuit.create = function create(properties) {
            return new c2s_userQuit(properties);
        };

        /**
         * Encodes the specified c2s_userQuit message. Does not implicitly {@link bjl.c2s_userQuit.verify|verify} messages.
         * @function encode
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {bjl.Ic2s_userQuit} message c2s_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userQuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified c2s_userQuit message, length delimited. Does not implicitly {@link bjl.c2s_userQuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {bjl.Ic2s_userQuit} message c2s_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        c2s_userQuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a c2s_userQuit message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.c2s_userQuit} c2s_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        c2s_userQuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.c2s_userQuit();
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
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.c2s_userQuit} c2s_userQuit
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
         * @memberof bjl.c2s_userQuit
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
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.c2s_userQuit} c2s_userQuit
         */
        c2s_userQuit.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.c2s_userQuit)
                return object;
            return new $root.bjl.c2s_userQuit();
        };

        /**
         * Creates a plain object from a c2s_userQuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.c2s_userQuit
         * @static
         * @param {bjl.c2s_userQuit} message c2s_userQuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        c2s_userQuit.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this c2s_userQuit to JSON.
         * @function toJSON
         * @memberof bjl.c2s_userQuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        c2s_userQuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return c2s_userQuit;
    })();

    bjl.s2c_userQuit = (function() {

        /**
         * Properties of a s2c_userQuit.
         * @memberof bjl
         * @interface Is2c_userQuit
         * @property {number|null} [userId] s2c_userQuit userId
         * @property {bjl.IReply|null} [ret] s2c_userQuit ret
         */

        /**
         * Constructs a new s2c_userQuit.
         * @memberof bjl
         * @classdesc Represents a s2c_userQuit.
         * @implements Is2c_userQuit
         * @constructor
         * @param {bjl.Is2c_userQuit=} [properties] Properties to set
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
         * @memberof bjl.s2c_userQuit
         * @instance
         */
        s2c_userQuit.prototype.userId = 0;

        /**
         * s2c_userQuit ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.s2c_userQuit
         * @instance
         */
        s2c_userQuit.prototype.ret = null;

        /**
         * Creates a new s2c_userQuit instance using the specified properties.
         * @function create
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {bjl.Is2c_userQuit=} [properties] Properties to set
         * @returns {bjl.s2c_userQuit} s2c_userQuit instance
         */
        s2c_userQuit.create = function create(properties) {
            return new s2c_userQuit(properties);
        };

        /**
         * Encodes the specified s2c_userQuit message. Does not implicitly {@link bjl.s2c_userQuit.verify|verify} messages.
         * @function encode
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {bjl.Is2c_userQuit} message s2c_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userQuit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.ret != null && message.hasOwnProperty("ret"))
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified s2c_userQuit message, length delimited. Does not implicitly {@link bjl.s2c_userQuit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {bjl.Is2c_userQuit} message s2c_userQuit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        s2c_userQuit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a s2c_userQuit message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.s2c_userQuit} s2c_userQuit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        s2c_userQuit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.s2c_userQuit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
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
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.s2c_userQuit} s2c_userQuit
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
         * @memberof bjl.s2c_userQuit
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
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            return null;
        };

        /**
         * Creates a s2c_userQuit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.s2c_userQuit} s2c_userQuit
         */
        s2c_userQuit.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.s2c_userQuit)
                return object;
            var message = new $root.bjl.s2c_userQuit();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.s2c_userQuit.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            return message;
        };

        /**
         * Creates a plain object from a s2c_userQuit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.s2c_userQuit
         * @static
         * @param {bjl.s2c_userQuit} message s2c_userQuit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        s2c_userQuit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.ret = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            return object;
        };

        /**
         * Converts this s2c_userQuit to JSON.
         * @function toJSON
         * @memberof bjl.s2c_userQuit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        s2c_userQuit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return s2c_userQuit;
    })();

    bjl.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof bjl
         * @interface IRequest
         * @property {bjl.Request.CMD|null} [cmd] Request cmd
         * @property {bjl.Ic2s_bet|null} [bet] Request bet
         * @property {bjl.Ic2s_joinTable|null} [joinTable] Request joinTable
         * @property {bjl.Ic2s_getUserList|null} [getUserList] Request getUserList
         * @property {bjl.Ic2s_noticePush|null} [noticePush] Request noticePush
         * @property {bjl.Ic2s_reconnect|null} [reconnect] Request reconnect
         * @property {bjl.Ic2s_userOnback|null} [userOnback] Request userOnback
         * @property {bjl.Ic2s_userQuit|null} [userQuit] Request userQuit
         */

        /**
         * Constructs a new Request.
         * @memberof bjl
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {bjl.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {bjl.Request.CMD} cmd
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request bet.
         * @member {bjl.Ic2s_bet|null|undefined} bet
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.bet = null;

        /**
         * Request joinTable.
         * @member {bjl.Ic2s_joinTable|null|undefined} joinTable
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.joinTable = null;

        /**
         * Request getUserList.
         * @member {bjl.Ic2s_getUserList|null|undefined} getUserList
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.getUserList = null;

        /**
         * Request noticePush.
         * @member {bjl.Ic2s_noticePush|null|undefined} noticePush
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.noticePush = null;

        /**
         * Request reconnect.
         * @member {bjl.Ic2s_reconnect|null|undefined} reconnect
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.reconnect = null;

        /**
         * Request userOnback.
         * @member {bjl.Ic2s_userOnback|null|undefined} userOnback
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.userOnback = null;

        /**
         * Request userQuit.
         * @member {bjl.Ic2s_userQuit|null|undefined} userQuit
         * @memberof bjl.Request
         * @instance
         */
        Request.prototype.userQuit = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof bjl.Request
         * @static
         * @param {bjl.IRequest=} [properties] Properties to set
         * @returns {bjl.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link bjl.Request.verify|verify} messages.
         * @function encode
         * @memberof bjl.Request
         * @static
         * @param {bjl.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.bet != null && message.hasOwnProperty("bet"))
                $root.bjl.c2s_bet.encode(message.bet, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.joinTable != null && message.hasOwnProperty("joinTable"))
                $root.bjl.c2s_joinTable.encode(message.joinTable, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.getUserList != null && message.hasOwnProperty("getUserList"))
                $root.bjl.c2s_getUserList.encode(message.getUserList, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.noticePush != null && message.hasOwnProperty("noticePush"))
                $root.bjl.c2s_noticePush.encode(message.noticePush, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.reconnect != null && message.hasOwnProperty("reconnect"))
                $root.bjl.c2s_reconnect.encode(message.reconnect, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.userOnback != null && message.hasOwnProperty("userOnback"))
                $root.bjl.c2s_userOnback.encode(message.userOnback, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.userQuit != null && message.hasOwnProperty("userQuit"))
                $root.bjl.c2s_userQuit.encode(message.userQuit, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link bjl.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.Request
         * @static
         * @param {bjl.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.bet = $root.bjl.c2s_bet.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.joinTable = $root.bjl.c2s_joinTable.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.getUserList = $root.bjl.c2s_getUserList.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.noticePush = $root.bjl.c2s_noticePush.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.reconnect = $root.bjl.c2s_reconnect.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userOnback = $root.bjl.c2s_userOnback.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.userQuit = $root.bjl.c2s_userQuit.decode(reader, reader.uint32());
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
         * @memberof bjl.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.Request} Request
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
         * @memberof bjl.Request
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
                case 2010:
                case 20006:
                case 2020:
                case 30002:
                case 2030:
                case 2080:
                case 2044:
                case 3000:
                case 2011:
                case 20007:
                case 2021:
                case 30003:
                case 2031:
                case 2035:
                case 2033:
                case 2081:
                case 2045:
                case 3001:
                    break;
                }
            if (message.bet != null && message.hasOwnProperty("bet")) {
                var error = $root.bjl.c2s_bet.verify(message.bet);
                if (error)
                    return "bet." + error;
            }
            if (message.joinTable != null && message.hasOwnProperty("joinTable")) {
                var error = $root.bjl.c2s_joinTable.verify(message.joinTable);
                if (error)
                    return "joinTable." + error;
            }
            if (message.getUserList != null && message.hasOwnProperty("getUserList")) {
                var error = $root.bjl.c2s_getUserList.verify(message.getUserList);
                if (error)
                    return "getUserList." + error;
            }
            if (message.noticePush != null && message.hasOwnProperty("noticePush")) {
                var error = $root.bjl.c2s_noticePush.verify(message.noticePush);
                if (error)
                    return "noticePush." + error;
            }
            if (message.reconnect != null && message.hasOwnProperty("reconnect")) {
                var error = $root.bjl.c2s_reconnect.verify(message.reconnect);
                if (error)
                    return "reconnect." + error;
            }
            if (message.userOnback != null && message.hasOwnProperty("userOnback")) {
                var error = $root.bjl.c2s_userOnback.verify(message.userOnback);
                if (error)
                    return "userOnback." + error;
            }
            if (message.userQuit != null && message.hasOwnProperty("userQuit")) {
                var error = $root.bjl.c2s_userQuit.verify(message.userQuit);
                if (error)
                    return "userQuit." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.Request)
                return object;
            var message = new $root.bjl.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "BET_REQ":
            case 2010:
                message.cmd = 2010;
                break;
            case "JOIN_COIN_TABLE_REQ":
            case 20006:
                message.cmd = 20006;
                break;
            case "GETUSERLIST_REQ":
            case 2020:
                message.cmd = 2020;
                break;
            case "NOTICE_PUSH_REQ":
            case 30002:
                message.cmd = 30002;
                break;
            case "PUSH_USER_RECONNECT_REQ":
            case 2030:
                message.cmd = 2030;
                break;
            case "USER_ONBACK_REQ":
            case 2080:
                message.cmd = 2080;
                break;
            case "USER_QUIT_REQ":
            case 2044:
                message.cmd = 2044;
                break;
            case "FOUCED_OFFLINE_REQ":
            case 3000:
                message.cmd = 3000;
                break;
            case "SEND_BET_RESP":
            case 2011:
                message.cmd = 2011;
                break;
            case "SEND_JOIN_COIN_TABLE_RESP":
            case 20007:
                message.cmd = 20007;
                break;
            case "SEND_GETUSERLIST_RESP":
            case 2021:
                message.cmd = 2021;
                break;
            case "SEND_NOTICE_PUSH_RESP":
            case 30003:
                message.cmd = 30003;
                break;
            case "SEND_PUSH_USER_RECONNECT_RESP":
            case 2031:
                message.cmd = 2031;
                break;
            case "SEND_PUSH_RECONNECT_QUIT_RESP":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_PUSH_RECONNECT_DATA_RESP":
            case 2033:
                message.cmd = 2033;
                break;
            case "SEND_USER_ONBACK_RESP":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_USER_QUIT_RESP":
            case 2045:
                message.cmd = 2045;
                break;
            case "FOUCED_OFFLINE_RESP":
            case 3001:
                message.cmd = 3001;
                break;
            }
            if (object.bet != null) {
                if (typeof object.bet !== "object")
                    throw TypeError(".bjl.Request.bet: object expected");
                message.bet = $root.bjl.c2s_bet.fromObject(object.bet);
            }
            if (object.joinTable != null) {
                if (typeof object.joinTable !== "object")
                    throw TypeError(".bjl.Request.joinTable: object expected");
                message.joinTable = $root.bjl.c2s_joinTable.fromObject(object.joinTable);
            }
            if (object.getUserList != null) {
                if (typeof object.getUserList !== "object")
                    throw TypeError(".bjl.Request.getUserList: object expected");
                message.getUserList = $root.bjl.c2s_getUserList.fromObject(object.getUserList);
            }
            if (object.noticePush != null) {
                if (typeof object.noticePush !== "object")
                    throw TypeError(".bjl.Request.noticePush: object expected");
                message.noticePush = $root.bjl.c2s_noticePush.fromObject(object.noticePush);
            }
            if (object.reconnect != null) {
                if (typeof object.reconnect !== "object")
                    throw TypeError(".bjl.Request.reconnect: object expected");
                message.reconnect = $root.bjl.c2s_reconnect.fromObject(object.reconnect);
            }
            if (object.userOnback != null) {
                if (typeof object.userOnback !== "object")
                    throw TypeError(".bjl.Request.userOnback: object expected");
                message.userOnback = $root.bjl.c2s_userOnback.fromObject(object.userOnback);
            }
            if (object.userQuit != null) {
                if (typeof object.userQuit !== "object")
                    throw TypeError(".bjl.Request.userQuit: object expected");
                message.userQuit = $root.bjl.c2s_userQuit.fromObject(object.userQuit);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.Request
         * @static
         * @param {bjl.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.bet = null;
                object.joinTable = null;
                object.getUserList = null;
                object.noticePush = null;
                object.reconnect = null;
                object.userOnback = null;
                object.userQuit = null;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.bjl.Request.CMD[message.cmd] : message.cmd;
            if (message.bet != null && message.hasOwnProperty("bet"))
                object.bet = $root.bjl.c2s_bet.toObject(message.bet, options);
            if (message.joinTable != null && message.hasOwnProperty("joinTable"))
                object.joinTable = $root.bjl.c2s_joinTable.toObject(message.joinTable, options);
            if (message.getUserList != null && message.hasOwnProperty("getUserList"))
                object.getUserList = $root.bjl.c2s_getUserList.toObject(message.getUserList, options);
            if (message.noticePush != null && message.hasOwnProperty("noticePush"))
                object.noticePush = $root.bjl.c2s_noticePush.toObject(message.noticePush, options);
            if (message.reconnect != null && message.hasOwnProperty("reconnect"))
                object.reconnect = $root.bjl.c2s_reconnect.toObject(message.reconnect, options);
            if (message.userOnback != null && message.hasOwnProperty("userOnback"))
                object.userOnback = $root.bjl.c2s_userOnback.toObject(message.userOnback, options);
            if (message.userQuit != null && message.hasOwnProperty("userQuit"))
                object.userQuit = $root.bjl.c2s_userQuit.toObject(message.userQuit, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof bjl.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name bjl.Request.CMD
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} BET_REQ=2010 BET_REQ value
         * @property {number} JOIN_COIN_TABLE_REQ=20006 JOIN_COIN_TABLE_REQ value
         * @property {number} GETUSERLIST_REQ=2020 GETUSERLIST_REQ value
         * @property {number} NOTICE_PUSH_REQ=30002 NOTICE_PUSH_REQ value
         * @property {number} PUSH_USER_RECONNECT_REQ=2030 PUSH_USER_RECONNECT_REQ value
         * @property {number} USER_ONBACK_REQ=2080 USER_ONBACK_REQ value
         * @property {number} USER_QUIT_REQ=2044 USER_QUIT_REQ value
         * @property {number} FOUCED_OFFLINE_REQ=3000 FOUCED_OFFLINE_REQ value
         * @property {number} SEND_BET_RESP=2011 SEND_BET_RESP value
         * @property {number} SEND_JOIN_COIN_TABLE_RESP=20007 SEND_JOIN_COIN_TABLE_RESP value
         * @property {number} SEND_GETUSERLIST_RESP=2021 SEND_GETUSERLIST_RESP value
         * @property {number} SEND_NOTICE_PUSH_RESP=30003 SEND_NOTICE_PUSH_RESP value
         * @property {number} SEND_PUSH_USER_RECONNECT_RESP=2031 SEND_PUSH_USER_RECONNECT_RESP value
         * @property {number} SEND_PUSH_RECONNECT_QUIT_RESP=2035 SEND_PUSH_RECONNECT_QUIT_RESP value
         * @property {number} SEND_PUSH_RECONNECT_DATA_RESP=2033 SEND_PUSH_RECONNECT_DATA_RESP value
         * @property {number} SEND_USER_ONBACK_RESP=2081 SEND_USER_ONBACK_RESP value
         * @property {number} SEND_USER_QUIT_RESP=2045 SEND_USER_QUIT_RESP value
         * @property {number} FOUCED_OFFLINE_RESP=3001 FOUCED_OFFLINE_RESP value
         */
        Request.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[2010] = "BET_REQ"] = 2010;
            values[valuesById[20006] = "JOIN_COIN_TABLE_REQ"] = 20006;
            values[valuesById[2020] = "GETUSERLIST_REQ"] = 2020;
            values[valuesById[30002] = "NOTICE_PUSH_REQ"] = 30002;
            values[valuesById[2030] = "PUSH_USER_RECONNECT_REQ"] = 2030;
            values[valuesById[2080] = "USER_ONBACK_REQ"] = 2080;
            values[valuesById[2044] = "USER_QUIT_REQ"] = 2044;
            values[valuesById[3000] = "FOUCED_OFFLINE_REQ"] = 3000;
            values[valuesById[2011] = "SEND_BET_RESP"] = 2011;
            values[valuesById[20007] = "SEND_JOIN_COIN_TABLE_RESP"] = 20007;
            values[valuesById[2021] = "SEND_GETUSERLIST_RESP"] = 2021;
            values[valuesById[30003] = "SEND_NOTICE_PUSH_RESP"] = 30003;
            values[valuesById[2031] = "SEND_PUSH_USER_RECONNECT_RESP"] = 2031;
            values[valuesById[2035] = "SEND_PUSH_RECONNECT_QUIT_RESP"] = 2035;
            values[valuesById[2033] = "SEND_PUSH_RECONNECT_DATA_RESP"] = 2033;
            values[valuesById[2081] = "SEND_USER_ONBACK_RESP"] = 2081;
            values[valuesById[2045] = "SEND_USER_QUIT_RESP"] = 2045;
            values[valuesById[3001] = "FOUCED_OFFLINE_RESP"] = 3001;
            return values;
        })();

        return Request;
    })();

    bjl.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof bjl
         * @interface IResponse
         * @property {bjl.Response.ErrorCode|null} [error] Response error
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {bjl.Request.CMD|null} [cmd] Response cmd
         * @property {bjl.IReply|null} [ret] Response ret
         * @property {bjl.Is2c_bet|null} [sendBet] Response sendBet
         * @property {bjl.Is2c_joinTable|null} [sendJoinTable] Response sendJoinTable
         * @property {bjl.Is2c_getUserList|null} [sendGetUserList] Response sendGetUserList
         * @property {bjl.Is2c_noticePush|null} [sendNoticePush] Response sendNoticePush
         * @property {bjl.Is2c_reconnect|null} [sendReconnect] Response sendReconnect
         * @property {bjl.Is2c_userOnback|null} [sendUserOnback] Response sendUserOnback
         * @property {bjl.Is2c_userQuit|null} [sendUserQuit] Response sendUserQuit
         */

        /**
         * Constructs a new Response.
         * @memberof bjl
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {bjl.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response error.
         * @member {bjl.Response.ErrorCode} error
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.error = 0;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {bjl.Request.CMD} cmd
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response ret.
         * @member {bjl.IReply|null|undefined} ret
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.ret = null;

        /**
         * Response sendBet.
         * @member {bjl.Is2c_bet|null|undefined} sendBet
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendBet = null;

        /**
         * Response sendJoinTable.
         * @member {bjl.Is2c_joinTable|null|undefined} sendJoinTable
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendJoinTable = null;

        /**
         * Response sendGetUserList.
         * @member {bjl.Is2c_getUserList|null|undefined} sendGetUserList
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendGetUserList = null;

        /**
         * Response sendNoticePush.
         * @member {bjl.Is2c_noticePush|null|undefined} sendNoticePush
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendNoticePush = null;

        /**
         * Response sendReconnect.
         * @member {bjl.Is2c_reconnect|null|undefined} sendReconnect
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendReconnect = null;

        /**
         * Response sendUserOnback.
         * @member {bjl.Is2c_userOnback|null|undefined} sendUserOnback
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendUserOnback = null;

        /**
         * Response sendUserQuit.
         * @member {bjl.Is2c_userQuit|null|undefined} sendUserQuit
         * @memberof bjl.Response
         * @instance
         */
        Response.prototype.sendUserQuit = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof bjl.Response
         * @static
         * @param {bjl.IResponse=} [properties] Properties to set
         * @returns {bjl.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link bjl.Response.verify|verify} messages.
         * @function encode
         * @memberof bjl.Response
         * @static
         * @param {bjl.IResponse} message Response message or plain object to encode
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
                $root.bjl.Reply.encode(message.ret, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.sendBet != null && message.hasOwnProperty("sendBet"))
                $root.bjl.s2c_bet.encode(message.sendBet, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.sendJoinTable != null && message.hasOwnProperty("sendJoinTable"))
                $root.bjl.s2c_joinTable.encode(message.sendJoinTable, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.sendGetUserList != null && message.hasOwnProperty("sendGetUserList"))
                $root.bjl.s2c_getUserList.encode(message.sendGetUserList, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.sendNoticePush != null && message.hasOwnProperty("sendNoticePush"))
                $root.bjl.s2c_noticePush.encode(message.sendNoticePush, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.sendReconnect != null && message.hasOwnProperty("sendReconnect"))
                $root.bjl.s2c_reconnect.encode(message.sendReconnect, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.sendUserOnback != null && message.hasOwnProperty("sendUserOnback"))
                $root.bjl.s2c_userOnback.encode(message.sendUserOnback, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.sendUserQuit != null && message.hasOwnProperty("sendUserQuit"))
                $root.bjl.s2c_userQuit.encode(message.sendUserQuit, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link bjl.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bjl.Response
         * @static
         * @param {bjl.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof bjl.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bjl.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.bjl.Response();
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
                    message.ret = $root.bjl.Reply.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.sendBet = $root.bjl.s2c_bet.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.sendJoinTable = $root.bjl.s2c_joinTable.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.sendGetUserList = $root.bjl.s2c_getUserList.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.sendNoticePush = $root.bjl.s2c_noticePush.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.sendReconnect = $root.bjl.s2c_reconnect.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.sendUserOnback = $root.bjl.s2c_userOnback.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.sendUserQuit = $root.bjl.s2c_userQuit.decode(reader, reader.uint32());
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
         * @memberof bjl.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bjl.Response} Response
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
         * @memberof bjl.Response
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
                case 3001:
                case 3003:
                case 3006:
                case 3008:
                case 3076:
                case 3077:
                case 3078:
                case 3079:
                case 3061:
                case 3075:
                case 3009:
                case 3011:
                case 3010:
                case 3012:
                case 3058:
                case 3059:
                case 3019:
                case 3018:
                case 3052:
                case 3014:
                case 3043:
                case 3073:
                case 3200:
                case 3026:
                case 3007:
                case 3306:
                case 3063:
                case 3013:
                case 3025:
                case 3040:
                case 3056:
                case 3201:
                case 3005:
                case 30001:
                case 30002:
                case 30923:
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
                case 2010:
                case 20006:
                case 2020:
                case 30002:
                case 2030:
                case 2080:
                case 2044:
                case 3000:
                case 2011:
                case 20007:
                case 2021:
                case 30003:
                case 2031:
                case 2035:
                case 2033:
                case 2081:
                case 2045:
                case 3001:
                    break;
                }
            if (message.ret != null && message.hasOwnProperty("ret")) {
                var error = $root.bjl.Reply.verify(message.ret);
                if (error)
                    return "ret." + error;
            }
            if (message.sendBet != null && message.hasOwnProperty("sendBet")) {
                var error = $root.bjl.s2c_bet.verify(message.sendBet);
                if (error)
                    return "sendBet." + error;
            }
            if (message.sendJoinTable != null && message.hasOwnProperty("sendJoinTable")) {
                var error = $root.bjl.s2c_joinTable.verify(message.sendJoinTable);
                if (error)
                    return "sendJoinTable." + error;
            }
            if (message.sendGetUserList != null && message.hasOwnProperty("sendGetUserList")) {
                var error = $root.bjl.s2c_getUserList.verify(message.sendGetUserList);
                if (error)
                    return "sendGetUserList." + error;
            }
            if (message.sendNoticePush != null && message.hasOwnProperty("sendNoticePush")) {
                var error = $root.bjl.s2c_noticePush.verify(message.sendNoticePush);
                if (error)
                    return "sendNoticePush." + error;
            }
            if (message.sendReconnect != null && message.hasOwnProperty("sendReconnect")) {
                var error = $root.bjl.s2c_reconnect.verify(message.sendReconnect);
                if (error)
                    return "sendReconnect." + error;
            }
            if (message.sendUserOnback != null && message.hasOwnProperty("sendUserOnback")) {
                var error = $root.bjl.s2c_userOnback.verify(message.sendUserOnback);
                if (error)
                    return "sendUserOnback." + error;
            }
            if (message.sendUserQuit != null && message.hasOwnProperty("sendUserQuit")) {
                var error = $root.bjl.s2c_userQuit.verify(message.sendUserQuit);
                if (error)
                    return "sendUserQuit." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bjl.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bjl.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.bjl.Response)
                return object;
            var message = new $root.bjl.Response();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "USER_LOGIN_ERROR":
            case 3001:
                message.error = 3001;
                break;
            case "CHANNELID_GAMENO_ERROR":
            case 3003:
                message.error = 3003;
                break;
            case "HAS_INTABLE":
            case 3006:
                message.error = 3006;
                break;
            case "TABLE_NOT_FIND_ERROR":
            case 3008:
                message.error = 3008;
                break;
            case "BETCOIN_LIMIT":
            case 3076:
                message.error = 3076;
                break;
            case "USER_BET_ERROR":
            case 3077:
                message.error = 3077;
                break;
            case "USER_BETCOIN_ERROR":
            case 3078:
                message.error = 3078;
                break;
            case "USER_BETPOS_ERROR":
            case 3079:
                message.error = 3079;
                break;
            case "GAME_START_ERROR":
            case 3061:
                message.error = 3061;
                break;
            case "USER_IP_SAME":
            case 3075:
                message.error = 3075;
                break;
            case "TABLE_NO_POSITION":
            case 3009:
                message.error = 3009;
                break;
            case "NOT_IN_TABLE":
            case 3011:
                message.error = 3011;
                break;
            case "USER_READYNUM_ERROR":
            case 3010:
                message.error = 3010;
                break;
            case "USER_READY_ERROR":
            case 3012:
                message.error = 3012;
                break;
            case "DINGQUE_TABLESTATE_ERROR":
            case 3058:
                message.error = 3058;
                break;
            case "DINGQUE_USERSTATE_ERROR":
            case 3059:
                message.error = 3059;
                break;
            case "USER_NOT_HAVE_CARD":
            case 3019:
                message.error = 3019;
                break;
            case "DISCARD_ERROR":
            case 3018:
                message.error = 3018;
                break;
            case "USER_DISCARD_NO_PASS_ERROR":
            case 3052:
                message.error = 3052;
                break;
            case "NOT_ALLOW_QUIT":
            case 3014:
                message.error = 3014;
                break;
            case "WAITING_RESPONSE":
            case 3043:
                message.error = 3043;
                break;
            case "USER_NOTAUTO_ERROR":
            case 3073:
                message.error = 3073;
                break;
            case "USER_MP_ERROR":
            case 3200:
                message.error = 3200;
                break;
            case "RE_JOIN_TABLE_ERROR":
            case 3026:
                message.error = 3026;
                break;
            case "JOIN_TABLE_ERROR":
            case 3007:
                message.error = 3007;
                break;
            case "USER_AUTO_ERROR":
            case 3306:
                message.error = 3306;
                break;
            case "COIN_ENOUGH":
            case 3063:
                message.error = 3063;
                break;
            case "TABLE_QUIT_ERROR":
            case 3013:
                message.error = 3013;
                break;
            case "RECONNET_ERROR":
            case 3025:
                message.error = 3025;
                break;
            case "SEND_MESSAGE_ERROR":
            case 3040:
                message.error = 3040;
                break;
            case "USER_ONBACK_ERROR":
            case 3056:
                message.error = 3056;
                break;
            case "DELAY_CHECK_ERROR":
            case 3201:
                message.error = 3201;
                break;
            case "USER_NOT_FOUND_ERROR":
            case 3005:
                message.error = 3005;
                break;
            case "FOUCEDOFFLINE":
            case 30001:
                message.error = 30001;
                break;
            case "USERBAN":
            case 30002:
                message.error = 30002;
                break;
            case "NO_RECHARGE_ERROR":
            case 30923:
                message.error = 30923;
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
            case "BET_REQ":
            case 2010:
                message.cmd = 2010;
                break;
            case "JOIN_COIN_TABLE_REQ":
            case 20006:
                message.cmd = 20006;
                break;
            case "GETUSERLIST_REQ":
            case 2020:
                message.cmd = 2020;
                break;
            case "NOTICE_PUSH_REQ":
            case 30002:
                message.cmd = 30002;
                break;
            case "PUSH_USER_RECONNECT_REQ":
            case 2030:
                message.cmd = 2030;
                break;
            case "USER_ONBACK_REQ":
            case 2080:
                message.cmd = 2080;
                break;
            case "USER_QUIT_REQ":
            case 2044:
                message.cmd = 2044;
                break;
            case "FOUCED_OFFLINE_REQ":
            case 3000:
                message.cmd = 3000;
                break;
            case "SEND_BET_RESP":
            case 2011:
                message.cmd = 2011;
                break;
            case "SEND_JOIN_COIN_TABLE_RESP":
            case 20007:
                message.cmd = 20007;
                break;
            case "SEND_GETUSERLIST_RESP":
            case 2021:
                message.cmd = 2021;
                break;
            case "SEND_NOTICE_PUSH_RESP":
            case 30003:
                message.cmd = 30003;
                break;
            case "SEND_PUSH_USER_RECONNECT_RESP":
            case 2031:
                message.cmd = 2031;
                break;
            case "SEND_PUSH_RECONNECT_QUIT_RESP":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_PUSH_RECONNECT_DATA_RESP":
            case 2033:
                message.cmd = 2033;
                break;
            case "SEND_USER_ONBACK_RESP":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_USER_QUIT_RESP":
            case 2045:
                message.cmd = 2045;
                break;
            case "FOUCED_OFFLINE_RESP":
            case 3001:
                message.cmd = 3001;
                break;
            }
            if (object.ret != null) {
                if (typeof object.ret !== "object")
                    throw TypeError(".bjl.Response.ret: object expected");
                message.ret = $root.bjl.Reply.fromObject(object.ret);
            }
            if (object.sendBet != null) {
                if (typeof object.sendBet !== "object")
                    throw TypeError(".bjl.Response.sendBet: object expected");
                message.sendBet = $root.bjl.s2c_bet.fromObject(object.sendBet);
            }
            if (object.sendJoinTable != null) {
                if (typeof object.sendJoinTable !== "object")
                    throw TypeError(".bjl.Response.sendJoinTable: object expected");
                message.sendJoinTable = $root.bjl.s2c_joinTable.fromObject(object.sendJoinTable);
            }
            if (object.sendGetUserList != null) {
                if (typeof object.sendGetUserList !== "object")
                    throw TypeError(".bjl.Response.sendGetUserList: object expected");
                message.sendGetUserList = $root.bjl.s2c_getUserList.fromObject(object.sendGetUserList);
            }
            if (object.sendNoticePush != null) {
                if (typeof object.sendNoticePush !== "object")
                    throw TypeError(".bjl.Response.sendNoticePush: object expected");
                message.sendNoticePush = $root.bjl.s2c_noticePush.fromObject(object.sendNoticePush);
            }
            if (object.sendReconnect != null) {
                if (typeof object.sendReconnect !== "object")
                    throw TypeError(".bjl.Response.sendReconnect: object expected");
                message.sendReconnect = $root.bjl.s2c_reconnect.fromObject(object.sendReconnect);
            }
            if (object.sendUserOnback != null) {
                if (typeof object.sendUserOnback !== "object")
                    throw TypeError(".bjl.Response.sendUserOnback: object expected");
                message.sendUserOnback = $root.bjl.s2c_userOnback.fromObject(object.sendUserOnback);
            }
            if (object.sendUserQuit != null) {
                if (typeof object.sendUserQuit !== "object")
                    throw TypeError(".bjl.Response.sendUserQuit: object expected");
                message.sendUserQuit = $root.bjl.s2c_userQuit.fromObject(object.sendUserQuit);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bjl.Response
         * @static
         * @param {bjl.Response} message Response
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
                object.sendBet = null;
                object.sendJoinTable = null;
                object.sendGetUserList = null;
                object.sendNoticePush = null;
                object.sendReconnect = null;
                object.sendUserOnback = null;
                object.sendUserQuit = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.bjl.Response.ErrorCode[message.error] : message.error;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.bjl.Request.CMD[message.cmd] : message.cmd;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = $root.bjl.Reply.toObject(message.ret, options);
            if (message.sendBet != null && message.hasOwnProperty("sendBet"))
                object.sendBet = $root.bjl.s2c_bet.toObject(message.sendBet, options);
            if (message.sendJoinTable != null && message.hasOwnProperty("sendJoinTable"))
                object.sendJoinTable = $root.bjl.s2c_joinTable.toObject(message.sendJoinTable, options);
            if (message.sendGetUserList != null && message.hasOwnProperty("sendGetUserList"))
                object.sendGetUserList = $root.bjl.s2c_getUserList.toObject(message.sendGetUserList, options);
            if (message.sendNoticePush != null && message.hasOwnProperty("sendNoticePush"))
                object.sendNoticePush = $root.bjl.s2c_noticePush.toObject(message.sendNoticePush, options);
            if (message.sendReconnect != null && message.hasOwnProperty("sendReconnect"))
                object.sendReconnect = $root.bjl.s2c_reconnect.toObject(message.sendReconnect, options);
            if (message.sendUserOnback != null && message.hasOwnProperty("sendUserOnback"))
                object.sendUserOnback = $root.bjl.s2c_userOnback.toObject(message.sendUserOnback, options);
            if (message.sendUserQuit != null && message.hasOwnProperty("sendUserQuit"))
                object.sendUserQuit = $root.bjl.s2c_userQuit.toObject(message.sendUserQuit, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof bjl.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name bjl.Response.ErrorCode
         * @enum {string}
         * @property {number} NO_ERROR=0 NO_ERROR value
         * @property {number} USER_LOGIN_ERROR=3001 USER_LOGIN_ERROR value
         * @property {number} CHANNELID_GAMENO_ERROR=3003 CHANNELID_GAMENO_ERROR value
         * @property {number} HAS_INTABLE=3006 HAS_INTABLE value
         * @property {number} TABLE_NOT_FIND_ERROR=3008 TABLE_NOT_FIND_ERROR value
         * @property {number} BETCOIN_LIMIT=3076 BETCOIN_LIMIT value
         * @property {number} USER_BET_ERROR=3077 USER_BET_ERROR value
         * @property {number} USER_BETCOIN_ERROR=3078 USER_BETCOIN_ERROR value
         * @property {number} USER_BETPOS_ERROR=3079 USER_BETPOS_ERROR value
         * @property {number} GAME_START_ERROR=3061 GAME_START_ERROR value
         * @property {number} USER_IP_SAME=3075 USER_IP_SAME value
         * @property {number} TABLE_NO_POSITION=3009 TABLE_NO_POSITION value
         * @property {number} NOT_IN_TABLE=3011 NOT_IN_TABLE value
         * @property {number} USER_READYNUM_ERROR=3010 USER_READYNUM_ERROR value
         * @property {number} USER_READY_ERROR=3012 USER_READY_ERROR value
         * @property {number} DINGQUE_TABLESTATE_ERROR=3058 DINGQUE_TABLESTATE_ERROR value
         * @property {number} DINGQUE_USERSTATE_ERROR=3059 DINGQUE_USERSTATE_ERROR value
         * @property {number} USER_NOT_HAVE_CARD=3019 USER_NOT_HAVE_CARD value
         * @property {number} DISCARD_ERROR=3018 DISCARD_ERROR value
         * @property {number} USER_DISCARD_NO_PASS_ERROR=3052 USER_DISCARD_NO_PASS_ERROR value
         * @property {number} NOT_ALLOW_QUIT=3014 NOT_ALLOW_QUIT value
         * @property {number} WAITING_RESPONSE=3043 WAITING_RESPONSE value
         * @property {number} USER_NOTAUTO_ERROR=3073 USER_NOTAUTO_ERROR value
         * @property {number} USER_MP_ERROR=3200 USER_MP_ERROR value
         * @property {number} RE_JOIN_TABLE_ERROR=3026 RE_JOIN_TABLE_ERROR value
         * @property {number} JOIN_TABLE_ERROR=3007 JOIN_TABLE_ERROR value
         * @property {number} USER_AUTO_ERROR=3306 USER_AUTO_ERROR value
         * @property {number} COIN_ENOUGH=3063 COIN_ENOUGH value
         * @property {number} TABLE_QUIT_ERROR=3013 TABLE_QUIT_ERROR value
         * @property {number} RECONNET_ERROR=3025 RECONNET_ERROR value
         * @property {number} SEND_MESSAGE_ERROR=3040 SEND_MESSAGE_ERROR value
         * @property {number} USER_ONBACK_ERROR=3056 USER_ONBACK_ERROR value
         * @property {number} DELAY_CHECK_ERROR=3201 DELAY_CHECK_ERROR value
         * @property {number} USER_NOT_FOUND_ERROR=3005 USER_NOT_FOUND_ERROR value
         * @property {number} FOUCEDOFFLINE=30001 FOUCEDOFFLINE value
         * @property {number} USERBAN=30002 USERBAN value
         * @property {number} NO_RECHARGE_ERROR=30923 NO_RECHARGE_ERROR value
         */
        Response.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NO_ERROR"] = 0;
            values[valuesById[3001] = "USER_LOGIN_ERROR"] = 3001;
            values[valuesById[3003] = "CHANNELID_GAMENO_ERROR"] = 3003;
            values[valuesById[3006] = "HAS_INTABLE"] = 3006;
            values[valuesById[3008] = "TABLE_NOT_FIND_ERROR"] = 3008;
            values[valuesById[3076] = "BETCOIN_LIMIT"] = 3076;
            values[valuesById[3077] = "USER_BET_ERROR"] = 3077;
            values[valuesById[3078] = "USER_BETCOIN_ERROR"] = 3078;
            values[valuesById[3079] = "USER_BETPOS_ERROR"] = 3079;
            values[valuesById[3061] = "GAME_START_ERROR"] = 3061;
            values[valuesById[3075] = "USER_IP_SAME"] = 3075;
            values[valuesById[3009] = "TABLE_NO_POSITION"] = 3009;
            values[valuesById[3011] = "NOT_IN_TABLE"] = 3011;
            values[valuesById[3010] = "USER_READYNUM_ERROR"] = 3010;
            values[valuesById[3012] = "USER_READY_ERROR"] = 3012;
            values[valuesById[3058] = "DINGQUE_TABLESTATE_ERROR"] = 3058;
            values[valuesById[3059] = "DINGQUE_USERSTATE_ERROR"] = 3059;
            values[valuesById[3019] = "USER_NOT_HAVE_CARD"] = 3019;
            values[valuesById[3018] = "DISCARD_ERROR"] = 3018;
            values[valuesById[3052] = "USER_DISCARD_NO_PASS_ERROR"] = 3052;
            values[valuesById[3014] = "NOT_ALLOW_QUIT"] = 3014;
            values[valuesById[3043] = "WAITING_RESPONSE"] = 3043;
            values[valuesById[3073] = "USER_NOTAUTO_ERROR"] = 3073;
            values[valuesById[3200] = "USER_MP_ERROR"] = 3200;
            values[valuesById[3026] = "RE_JOIN_TABLE_ERROR"] = 3026;
            values[valuesById[3007] = "JOIN_TABLE_ERROR"] = 3007;
            values[valuesById[3306] = "USER_AUTO_ERROR"] = 3306;
            values[valuesById[3063] = "COIN_ENOUGH"] = 3063;
            values[valuesById[3013] = "TABLE_QUIT_ERROR"] = 3013;
            values[valuesById[3025] = "RECONNET_ERROR"] = 3025;
            values[valuesById[3040] = "SEND_MESSAGE_ERROR"] = 3040;
            values[valuesById[3056] = "USER_ONBACK_ERROR"] = 3056;
            values[valuesById[3201] = "DELAY_CHECK_ERROR"] = 3201;
            values[valuesById[3005] = "USER_NOT_FOUND_ERROR"] = 3005;
            values[valuesById[30001] = "FOUCEDOFFLINE"] = 30001;
            values[valuesById[30002] = "USERBAN"] = 30002;
            values[valuesById[30923] = "NO_RECHARGE_ERROR"] = 30923;
            return values;
        })();

        return Response;
    })();

    return bjl;
})();

module.exports = $root;
