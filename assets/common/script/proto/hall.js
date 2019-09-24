/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.hallgw = (function() {

    /**
     * Namespace hallgw.
     * @exports hallgw
     * @namespace
     */
    var hallgw = {};

    /**
     * HallMsgId enum.
     * @name hallgw.HallMsgId
     * @enum {string}
     * @property {number} Msg_Unknown=0 Msg_Unknown value
     * @property {number} Msg_HeartReq=5000 Msg_HeartReq value
     * @property {number} Msg_HeartResp=5001 Msg_HeartResp value
     * @property {number} Msg_UserInfoReq=20000 Msg_UserInfoReq value
     * @property {number} Msg_UserInfoResp=20001 Msg_UserInfoResp value
     * @property {number} Msg_GameListReq=20002 Msg_GameListReq value
     * @property {number} Msg_GameListResp=20003 Msg_GameListResp value
     * @property {number} Msg_NoticeNotify=20004 Msg_NoticeNotify value
     */
    hallgw.HallMsgId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Msg_Unknown"] = 0;
        values[valuesById[5000] = "Msg_HeartReq"] = 5000;
        values[valuesById[5001] = "Msg_HeartResp"] = 5001;
        values[valuesById[20000] = "Msg_UserInfoReq"] = 20000;
        values[valuesById[20001] = "Msg_UserInfoResp"] = 20001;
        values[valuesById[20002] = "Msg_GameListReq"] = 20002;
        values[valuesById[20003] = "Msg_GameListResp"] = 20003;
        values[valuesById[20004] = "Msg_NoticeNotify"] = 20004;
        return values;
    })();

    hallgw.HeartReq = (function() {

        /**
         * Properties of a HeartReq.
         * @memberof hallgw
         * @interface IHeartReq
         */

        /**
         * Constructs a new HeartReq.
         * @memberof hallgw
         * @classdesc Represents a HeartReq.
         * @implements IHeartReq
         * @constructor
         * @param {hallgw.IHeartReq=} [properties] Properties to set
         */
        function HeartReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartReq instance using the specified properties.
         * @function create
         * @memberof hallgw.HeartReq
         * @static
         * @param {hallgw.IHeartReq=} [properties] Properties to set
         * @returns {hallgw.HeartReq} HeartReq instance
         */
        HeartReq.create = function create(properties) {
            return new HeartReq(properties);
        };

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link hallgw.HeartReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.HeartReq
         * @static
         * @param {hallgw.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link hallgw.HeartReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.HeartReq
         * @static
         * @param {hallgw.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.HeartReq();
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
         * Decodes a HeartReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartReq message.
         * @function verify
         * @memberof hallgw.HeartReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.HeartReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.HeartReq} HeartReq
         */
        HeartReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.HeartReq)
                return object;
            return new $root.hallgw.HeartReq();
        };

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.HeartReq
         * @static
         * @param {hallgw.HeartReq} message HeartReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartReq to JSON.
         * @function toJSON
         * @memberof hallgw.HeartReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartReq;
    })();

    hallgw.HeartResp = (function() {

        /**
         * Properties of a HeartResp.
         * @memberof hallgw
         * @interface IHeartResp
         * @property {number|Long|null} [serverTime] HeartResp serverTime
         */

        /**
         * Constructs a new HeartResp.
         * @memberof hallgw
         * @classdesc Represents a HeartResp.
         * @implements IHeartResp
         * @constructor
         * @param {hallgw.IHeartResp=} [properties] Properties to set
         */
        function HeartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartResp serverTime.
         * @member {number|Long} serverTime
         * @memberof hallgw.HeartResp
         * @instance
         */
        HeartResp.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartResp instance using the specified properties.
         * @function create
         * @memberof hallgw.HeartResp
         * @static
         * @param {hallgw.IHeartResp=} [properties] Properties to set
         * @returns {hallgw.HeartResp} HeartResp instance
         */
        HeartResp.create = function create(properties) {
            return new HeartResp(properties);
        };

        /**
         * Encodes the specified HeartResp message. Does not implicitly {@link hallgw.HeartResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.HeartResp
         * @static
         * @param {hallgw.IHeartResp} message HeartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified HeartResp message, length delimited. Does not implicitly {@link hallgw.HeartResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.HeartResp
         * @static
         * @param {hallgw.IHeartResp} message HeartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.HeartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.HeartResp} HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.HeartResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.HeartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.HeartResp} HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartResp message.
         * @function verify
         * @memberof hallgw.HeartResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                    return "serverTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a HeartResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.HeartResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.HeartResp} HeartResp
         */
        HeartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.HeartResp)
                return object;
            var message = new $root.hallgw.HeartResp();
            if (object.serverTime != null)
                if ($util.Long)
                    (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = false;
                else if (typeof object.serverTime === "string")
                    message.serverTime = parseInt(object.serverTime, 10);
                else if (typeof object.serverTime === "number")
                    message.serverTime = object.serverTime;
                else if (typeof object.serverTime === "object")
                    message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HeartResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.HeartResp
         * @static
         * @param {hallgw.HeartResp} message HeartResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTime = options.longs === String ? "0" : 0;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            return object;
        };

        /**
         * Converts this HeartResp to JSON.
         * @function toJSON
         * @memberof hallgw.HeartResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartResp;
    })();

    /**
     * RespErr enum.
     * @name hallgw.RespErr
     * @enum {string}
     * @property {number} RespErr_Unknown=0 RespErr_Unknown value
     * @property {number} ReqFormatErr=1 ReqFormatErr value
     * @property {number} UserInfoRespRedisOperErr=2 UserInfoRespRedisOperErr value
     * @property {number} GameListRespDBOperErr=3 GameListRespDBOperErr value
     */
    hallgw.RespErr = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RespErr_Unknown"] = 0;
        values[valuesById[1] = "ReqFormatErr"] = 1;
        values[valuesById[2] = "UserInfoRespRedisOperErr"] = 2;
        values[valuesById[3] = "GameListRespDBOperErr"] = 3;
        return values;
    })();

    hallgw.UserInfoReq = (function() {

        /**
         * Properties of a UserInfoReq.
         * @memberof hallgw
         * @interface IUserInfoReq
         * @property {number|null} [Id] UserInfoReq Id
         */

        /**
         * Constructs a new UserInfoReq.
         * @memberof hallgw
         * @classdesc Represents a UserInfoReq.
         * @implements IUserInfoReq
         * @constructor
         * @param {hallgw.IUserInfoReq=} [properties] Properties to set
         */
        function UserInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoReq Id.
         * @member {number} Id
         * @memberof hallgw.UserInfoReq
         * @instance
         */
        UserInfoReq.prototype.Id = 0;

        /**
         * Creates a new UserInfoReq instance using the specified properties.
         * @function create
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {hallgw.IUserInfoReq=} [properties] Properties to set
         * @returns {hallgw.UserInfoReq} UserInfoReq instance
         */
        UserInfoReq.create = function create(properties) {
            return new UserInfoReq(properties);
        };

        /**
         * Encodes the specified UserInfoReq message. Does not implicitly {@link hallgw.UserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {hallgw.IUserInfoReq} message UserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            return writer;
        };

        /**
         * Encodes the specified UserInfoReq message, length delimited. Does not implicitly {@link hallgw.UserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {hallgw.IUserInfoReq} message UserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.UserInfoReq} UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.UserInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.UserInfoReq} UserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoReq message.
         * @function verify
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            return null;
        };

        /**
         * Creates a UserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.UserInfoReq} UserInfoReq
         */
        UserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.UserInfoReq)
                return object;
            var message = new $root.hallgw.UserInfoReq();
            if (object.Id != null)
                message.Id = object.Id | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.UserInfoReq
         * @static
         * @param {hallgw.UserInfoReq} message UserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Id = 0;
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            return object;
        };

        /**
         * Converts this UserInfoReq to JSON.
         * @function toJSON
         * @memberof hallgw.UserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfoReq;
    })();

    hallgw.UserInfoResp = (function() {

        /**
         * Properties of a UserInfoResp.
         * @memberof hallgw
         * @interface IUserInfoResp
         * @property {number|null} [Id] UserInfoResp Id
         * @property {string|null} [Account] UserInfoResp Account
         * @property {string|null} [Name] UserInfoResp Name
         * @property {number|Long|null} [Coin] UserInfoResp Coin
         * @property {string|null} [Head] UserInfoResp Head
         */

        /**
         * Constructs a new UserInfoResp.
         * @memberof hallgw
         * @classdesc Represents a UserInfoResp.
         * @implements IUserInfoResp
         * @constructor
         * @param {hallgw.IUserInfoResp=} [properties] Properties to set
         */
        function UserInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfoResp Id.
         * @member {number} Id
         * @memberof hallgw.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.Id = 0;

        /**
         * UserInfoResp Account.
         * @member {string} Account
         * @memberof hallgw.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.Account = "";

        /**
         * UserInfoResp Name.
         * @member {string} Name
         * @memberof hallgw.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.Name = "";

        /**
         * UserInfoResp Coin.
         * @member {number|Long} Coin
         * @memberof hallgw.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfoResp Head.
         * @member {string} Head
         * @memberof hallgw.UserInfoResp
         * @instance
         */
        UserInfoResp.prototype.Head = "";

        /**
         * Creates a new UserInfoResp instance using the specified properties.
         * @function create
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {hallgw.IUserInfoResp=} [properties] Properties to set
         * @returns {hallgw.UserInfoResp} UserInfoResp instance
         */
        UserInfoResp.create = function create(properties) {
            return new UserInfoResp(properties);
        };

        /**
         * Encodes the specified UserInfoResp message. Does not implicitly {@link hallgw.UserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {hallgw.IUserInfoResp} message UserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Account != null && message.hasOwnProperty("Account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Account);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Name);
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Coin);
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Head);
            return writer;
        };

        /**
         * Encodes the specified UserInfoResp message, length delimited. Does not implicitly {@link hallgw.UserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {hallgw.IUserInfoResp} message UserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.UserInfoResp} UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.UserInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Account = reader.string();
                    break;
                case 3:
                    message.Name = reader.string();
                    break;
                case 4:
                    message.Coin = reader.int64();
                    break;
                case 5:
                    message.Head = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.UserInfoResp} UserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfoResp message.
         * @function verify
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (!$util.isInteger(message.Coin) && !(message.Coin && $util.isInteger(message.Coin.low) && $util.isInteger(message.Coin.high)))
                    return "Coin: integer|Long expected";
            if (message.Head != null && message.hasOwnProperty("Head"))
                if (!$util.isString(message.Head))
                    return "Head: string expected";
            return null;
        };

        /**
         * Creates a UserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.UserInfoResp} UserInfoResp
         */
        UserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.UserInfoResp)
                return object;
            var message = new $root.hallgw.UserInfoResp();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Account != null)
                message.Account = String(object.Account);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Coin != null)
                if ($util.Long)
                    (message.Coin = $util.Long.fromValue(object.Coin)).unsigned = false;
                else if (typeof object.Coin === "string")
                    message.Coin = parseInt(object.Coin, 10);
                else if (typeof object.Coin === "number")
                    message.Coin = object.Coin;
                else if (typeof object.Coin === "object")
                    message.Coin = new $util.LongBits(object.Coin.low >>> 0, object.Coin.high >>> 0).toNumber();
            if (object.Head != null)
                message.Head = String(object.Head);
            return message;
        };

        /**
         * Creates a plain object from a UserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.UserInfoResp
         * @static
         * @param {hallgw.UserInfoResp} message UserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Account = "";
                object.Name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Coin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Coin = options.longs === String ? "0" : 0;
                object.Head = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (typeof message.Coin === "number")
                    object.Coin = options.longs === String ? String(message.Coin) : message.Coin;
                else
                    object.Coin = options.longs === String ? $util.Long.prototype.toString.call(message.Coin) : options.longs === Number ? new $util.LongBits(message.Coin.low >>> 0, message.Coin.high >>> 0).toNumber() : message.Coin;
            if (message.Head != null && message.hasOwnProperty("Head"))
                object.Head = message.Head;
            return object;
        };

        /**
         * Converts this UserInfoResp to JSON.
         * @function toJSON
         * @memberof hallgw.UserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfoResp;
    })();

    hallgw.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof hallgw
         * @interface IGameInfo
         * @property {number|null} [Id] GameInfo Id
         * @property {string|null} [Name] GameInfo Name
         * @property {number|null} [Type] GameInfo Type
         * @property {number|null} [State] GameInfo State
         * @property {number|null} [Tag] GameInfo Tag
         * @property {number|null} [HaveRoomList] GameInfo HaveRoomList
         * @property {string|null} [RoomList] GameInfo RoomList
         */

        /**
         * Constructs a new GameInfo.
         * @memberof hallgw
         * @classdesc Represents a GameInfo.
         * @implements IGameInfo
         * @constructor
         * @param {hallgw.IGameInfo=} [properties] Properties to set
         */
        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameInfo Id.
         * @member {number} Id
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.Id = 0;

        /**
         * GameInfo Name.
         * @member {string} Name
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.Name = "";

        /**
         * GameInfo Type.
         * @member {number} Type
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.Type = 0;

        /**
         * GameInfo State.
         * @member {number} State
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.State = 0;

        /**
         * GameInfo Tag.
         * @member {number} Tag
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.Tag = 0;

        /**
         * GameInfo HaveRoomList.
         * @member {number} HaveRoomList
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.HaveRoomList = 0;

        /**
         * GameInfo RoomList.
         * @member {string} RoomList
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.RoomList = "";

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @function create
         * @memberof hallgw.GameInfo
         * @static
         * @param {hallgw.IGameInfo=} [properties] Properties to set
         * @returns {hallgw.GameInfo} GameInfo instance
         */
        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link hallgw.GameInfo.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameInfo
         * @static
         * @param {hallgw.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.State);
            if (message.Tag != null && message.hasOwnProperty("Tag"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Tag);
            if (message.HaveRoomList != null && message.hasOwnProperty("HaveRoomList"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.HaveRoomList);
            if (message.RoomList != null && message.hasOwnProperty("RoomList"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.RoomList);
            return writer;
        };

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link hallgw.GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameInfo
         * @static
         * @param {hallgw.IGameInfo} message GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Type = reader.int32();
                    break;
                case 4:
                    message.State = reader.int32();
                    break;
                case 5:
                    message.Tag = reader.int32();
                    break;
                case 6:
                    message.HaveRoomList = reader.int32();
                    break;
                case 7:
                    message.RoomList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameInfo} GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameInfo message.
         * @function verify
         * @memberof hallgw.GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Tag != null && message.hasOwnProperty("Tag"))
                if (!$util.isInteger(message.Tag))
                    return "Tag: integer expected";
            if (message.HaveRoomList != null && message.hasOwnProperty("HaveRoomList"))
                if (!$util.isInteger(message.HaveRoomList))
                    return "HaveRoomList: integer expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList"))
                if (!$util.isString(message.RoomList))
                    return "RoomList: string expected";
            return null;
        };

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameInfo} GameInfo
         */
        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameInfo)
                return object;
            var message = new $root.hallgw.GameInfo();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Tag != null)
                message.Tag = object.Tag | 0;
            if (object.HaveRoomList != null)
                message.HaveRoomList = object.HaveRoomList | 0;
            if (object.RoomList != null)
                message.RoomList = String(object.RoomList);
            return message;
        };

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameInfo
         * @static
         * @param {hallgw.GameInfo} message GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Name = "";
                object.Type = 0;
                object.State = 0;
                object.Tag = 0;
                object.HaveRoomList = 0;
                object.RoomList = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Tag != null && message.hasOwnProperty("Tag"))
                object.Tag = message.Tag;
            if (message.HaveRoomList != null && message.hasOwnProperty("HaveRoomList"))
                object.HaveRoomList = message.HaveRoomList;
            if (message.RoomList != null && message.hasOwnProperty("RoomList"))
                object.RoomList = message.RoomList;
            return object;
        };

        /**
         * Converts this GameInfo to JSON.
         * @function toJSON
         * @memberof hallgw.GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    hallgw.GameListReq = (function() {

        /**
         * Properties of a GameListReq.
         * @memberof hallgw
         * @interface IGameListReq
         */

        /**
         * Constructs a new GameListReq.
         * @memberof hallgw
         * @classdesc Represents a GameListReq.
         * @implements IGameListReq
         * @constructor
         * @param {hallgw.IGameListReq=} [properties] Properties to set
         */
        function GameListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GameListReq instance using the specified properties.
         * @function create
         * @memberof hallgw.GameListReq
         * @static
         * @param {hallgw.IGameListReq=} [properties] Properties to set
         * @returns {hallgw.GameListReq} GameListReq instance
         */
        GameListReq.create = function create(properties) {
            return new GameListReq(properties);
        };

        /**
         * Encodes the specified GameListReq message. Does not implicitly {@link hallgw.GameListReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameListReq
         * @static
         * @param {hallgw.IGameListReq} message GameListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GameListReq message, length delimited. Does not implicitly {@link hallgw.GameListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameListReq
         * @static
         * @param {hallgw.IGameListReq} message GameListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameListReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameListReq} GameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameListReq();
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
         * Decodes a GameListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameListReq} GameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameListReq message.
         * @function verify
         * @memberof hallgw.GameListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GameListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameListReq} GameListReq
         */
        GameListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameListReq)
                return object;
            return new $root.hallgw.GameListReq();
        };

        /**
         * Creates a plain object from a GameListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameListReq
         * @static
         * @param {hallgw.GameListReq} message GameListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameListReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GameListReq to JSON.
         * @function toJSON
         * @memberof hallgw.GameListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameListReq;
    })();

    hallgw.GameListResp = (function() {

        /**
         * Properties of a GameListResp.
         * @memberof hallgw
         * @interface IGameListResp
         * @property {Array.<hallgw.IGameInfo>|null} [List] GameListResp List
         */

        /**
         * Constructs a new GameListResp.
         * @memberof hallgw
         * @classdesc Represents a GameListResp.
         * @implements IGameListResp
         * @constructor
         * @param {hallgw.IGameListResp=} [properties] Properties to set
         */
        function GameListResp(properties) {
            this.List = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameListResp List.
         * @member {Array.<hallgw.IGameInfo>} List
         * @memberof hallgw.GameListResp
         * @instance
         */
        GameListResp.prototype.List = $util.emptyArray;

        /**
         * Creates a new GameListResp instance using the specified properties.
         * @function create
         * @memberof hallgw.GameListResp
         * @static
         * @param {hallgw.IGameListResp=} [properties] Properties to set
         * @returns {hallgw.GameListResp} GameListResp instance
         */
        GameListResp.create = function create(properties) {
            return new GameListResp(properties);
        };

        /**
         * Encodes the specified GameListResp message. Does not implicitly {@link hallgw.GameListResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameListResp
         * @static
         * @param {hallgw.IGameListResp} message GameListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.List != null && message.List.length)
                for (var i = 0; i < message.List.length; ++i)
                    $root.hallgw.GameInfo.encode(message.List[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameListResp message, length delimited. Does not implicitly {@link hallgw.GameListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameListResp
         * @static
         * @param {hallgw.IGameListResp} message GameListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameListResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameListResp} GameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.List && message.List.length))
                        message.List = [];
                    message.List.push($root.hallgw.GameInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameListResp} GameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameListResp message.
         * @function verify
         * @memberof hallgw.GameListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.List != null && message.hasOwnProperty("List")) {
                if (!Array.isArray(message.List))
                    return "List: array expected";
                for (var i = 0; i < message.List.length; ++i) {
                    var error = $root.hallgw.GameInfo.verify(message.List[i]);
                    if (error)
                        return "List." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameListResp} GameListResp
         */
        GameListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameListResp)
                return object;
            var message = new $root.hallgw.GameListResp();
            if (object.List) {
                if (!Array.isArray(object.List))
                    throw TypeError(".hallgw.GameListResp.List: array expected");
                message.List = [];
                for (var i = 0; i < object.List.length; ++i) {
                    if (typeof object.List[i] !== "object")
                        throw TypeError(".hallgw.GameListResp.List: object expected");
                    message.List[i] = $root.hallgw.GameInfo.fromObject(object.List[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameListResp
         * @static
         * @param {hallgw.GameListResp} message GameListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.List = [];
            if (message.List && message.List.length) {
                object.List = [];
                for (var j = 0; j < message.List.length; ++j)
                    object.List[j] = $root.hallgw.GameInfo.toObject(message.List[j], options);
            }
            return object;
        };

        /**
         * Converts this GameListResp to JSON.
         * @function toJSON
         * @memberof hallgw.GameListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameListResp;
    })();

    hallgw.NoticeNotify = (function() {

        /**
         * Properties of a NoticeNotify.
         * @memberof hallgw
         * @interface INoticeNotify
         * @property {string|null} [Content] NoticeNotify Content
         */

        /**
         * Constructs a new NoticeNotify.
         * @memberof hallgw
         * @classdesc Represents a NoticeNotify.
         * @implements INoticeNotify
         * @constructor
         * @param {hallgw.INoticeNotify=} [properties] Properties to set
         */
        function NoticeNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoticeNotify Content.
         * @member {string} Content
         * @memberof hallgw.NoticeNotify
         * @instance
         */
        NoticeNotify.prototype.Content = "";

        /**
         * Creates a new NoticeNotify instance using the specified properties.
         * @function create
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {hallgw.INoticeNotify=} [properties] Properties to set
         * @returns {hallgw.NoticeNotify} NoticeNotify instance
         */
        NoticeNotify.create = function create(properties) {
            return new NoticeNotify(properties);
        };

        /**
         * Encodes the specified NoticeNotify message. Does not implicitly {@link hallgw.NoticeNotify.verify|verify} messages.
         * @function encode
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {hallgw.INoticeNotify} message NoticeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticeNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified NoticeNotify message, length delimited. Does not implicitly {@link hallgw.NoticeNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {hallgw.INoticeNotify} message NoticeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticeNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoticeNotify message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.NoticeNotify} NoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticeNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.NoticeNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoticeNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.NoticeNotify} NoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticeNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoticeNotify message.
         * @function verify
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoticeNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a NoticeNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.NoticeNotify} NoticeNotify
         */
        NoticeNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.NoticeNotify)
                return object;
            var message = new $root.hallgw.NoticeNotify();
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a NoticeNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.NoticeNotify
         * @static
         * @param {hallgw.NoticeNotify} message NoticeNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoticeNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Content = "";
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this NoticeNotify to JSON.
         * @function toJSON
         * @memberof hallgw.NoticeNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoticeNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NoticeNotify;
    })();

    return hallgw;
})();

module.exports = $root;
