/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.room = (function() {

    /**
     * Namespace room.
     * @exports room
     * @namespace
     */
    var room = {};

    room.User = (function() {

        /**
         * Properties of a User.
         * @memberof room
         * @interface IUser
         * @property {number|Long|null} [sessionId] User sessionId
         * @property {number|Long|null} [createTime] User createTime
         * @property {number|Long|null} [updateTime] User updateTime
         * @property {number|null} [userid] User userid
         * @property {string|null} [tableId] User tableId
         * @property {number|null} [channelId] User channelId
         * @property {string|null} [remoteAddr] User remoteAddr
         * @property {number|null} [onBack] User onBack
         * @property {number|null} [gameNo] User gameNo
         * @property {number|null} [gameNum] User gameNum
         */

        /**
         * Constructs a new User.
         * @memberof room
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {room.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User sessionId.
         * @member {number|Long} sessionId
         * @memberof room.User
         * @instance
         */
        User.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User createTime.
         * @member {number|Long} createTime
         * @memberof room.User
         * @instance
         */
        User.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User updateTime.
         * @member {number|Long} updateTime
         * @memberof room.User
         * @instance
         */
        User.prototype.updateTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User userid.
         * @member {number} userid
         * @memberof room.User
         * @instance
         */
        User.prototype.userid = 0;

        /**
         * User tableId.
         * @member {string} tableId
         * @memberof room.User
         * @instance
         */
        User.prototype.tableId = "";

        /**
         * User channelId.
         * @member {number} channelId
         * @memberof room.User
         * @instance
         */
        User.prototype.channelId = 0;

        /**
         * User remoteAddr.
         * @member {string} remoteAddr
         * @memberof room.User
         * @instance
         */
        User.prototype.remoteAddr = "";

        /**
         * User onBack.
         * @member {number} onBack
         * @memberof room.User
         * @instance
         */
        User.prototype.onBack = 0;

        /**
         * User gameNo.
         * @member {number} gameNo
         * @memberof room.User
         * @instance
         */
        User.prototype.gameNo = 0;

        /**
         * User gameNum.
         * @member {number} gameNum
         * @memberof room.User
         * @instance
         */
        User.prototype.gameNum = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof room.User
         * @static
         * @param {room.IUser=} [properties] Properties to set
         * @returns {room.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link room.User.verify|verify} messages.
         * @function encode
         * @memberof room.User
         * @static
         * @param {room.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sessionId);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.createTime);
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.updateTime);
            if (message.userid != null && message.hasOwnProperty("userid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.userid);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tableId);
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.channelId);
            if (message.remoteAddr != null && message.hasOwnProperty("remoteAddr"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.remoteAddr);
            if (message.onBack != null && message.hasOwnProperty("onBack"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.onBack);
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.gameNo);
            if (message.gameNum != null && message.hasOwnProperty("gameNum"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.gameNum);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link room.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.User
         * @static
         * @param {room.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof room.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionId = reader.int64();
                    break;
                case 2:
                    message.createTime = reader.int64();
                    break;
                case 3:
                    message.updateTime = reader.int64();
                    break;
                case 4:
                    message.userid = reader.int32();
                    break;
                case 5:
                    message.tableId = reader.string();
                    break;
                case 7:
                    message.channelId = reader.int32();
                    break;
                case 8:
                    message.remoteAddr = reader.string();
                    break;
                case 9:
                    message.onBack = reader.int32();
                    break;
                case 11:
                    message.gameNo = reader.int32();
                    break;
                case 12:
                    message.gameNum = reader.int32();
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
         * @memberof room.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.User} User
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
         * @memberof room.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                    return "sessionId: integer|Long expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (!$util.isInteger(message.updateTime) && !(message.updateTime && $util.isInteger(message.updateTime.low) && $util.isInteger(message.updateTime.high)))
                    return "updateTime: integer|Long expected";
            if (message.userid != null && message.hasOwnProperty("userid"))
                if (!$util.isInteger(message.userid))
                    return "userid: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isInteger(message.channelId))
                    return "channelId: integer expected";
            if (message.remoteAddr != null && message.hasOwnProperty("remoteAddr"))
                if (!$util.isString(message.remoteAddr))
                    return "remoteAddr: string expected";
            if (message.onBack != null && message.hasOwnProperty("onBack"))
                if (!$util.isInteger(message.onBack))
                    return "onBack: integer expected";
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                if (!$util.isInteger(message.gameNo))
                    return "gameNo: integer expected";
            if (message.gameNum != null && message.hasOwnProperty("gameNum"))
                if (!$util.isInteger(message.gameNum))
                    return "gameNum: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.room.User)
                return object;
            var message = new $root.room.User();
            if (object.sessionId != null)
                if ($util.Long)
                    (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = false;
                else if (typeof object.sessionId === "string")
                    message.sessionId = parseInt(object.sessionId, 10);
                else if (typeof object.sessionId === "number")
                    message.sessionId = object.sessionId;
                else if (typeof object.sessionId === "object")
                    message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber();
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = false;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber();
            if (object.updateTime != null)
                if ($util.Long)
                    (message.updateTime = $util.Long.fromValue(object.updateTime)).unsigned = false;
                else if (typeof object.updateTime === "string")
                    message.updateTime = parseInt(object.updateTime, 10);
                else if (typeof object.updateTime === "number")
                    message.updateTime = object.updateTime;
                else if (typeof object.updateTime === "object")
                    message.updateTime = new $util.LongBits(object.updateTime.low >>> 0, object.updateTime.high >>> 0).toNumber();
            if (object.userid != null)
                message.userid = object.userid | 0;
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.channelId != null)
                message.channelId = object.channelId | 0;
            if (object.remoteAddr != null)
                message.remoteAddr = String(object.remoteAddr);
            if (object.onBack != null)
                message.onBack = object.onBack | 0;
            if (object.gameNo != null)
                message.gameNo = object.gameNo | 0;
            if (object.gameNum != null)
                message.gameNum = object.gameNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.User
         * @static
         * @param {room.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updateTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updateTime = options.longs === String ? "0" : 0;
                object.userid = 0;
                object.tableId = "";
                object.channelId = 0;
                object.remoteAddr = "";
                object.onBack = 0;
                object.gameNo = 0;
                object.gameNum = 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (typeof message.sessionId === "number")
                    object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
                else
                    object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber() : message.sessionId;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber() : message.createTime;
            if (message.updateTime != null && message.hasOwnProperty("updateTime"))
                if (typeof message.updateTime === "number")
                    object.updateTime = options.longs === String ? String(message.updateTime) : message.updateTime;
                else
                    object.updateTime = options.longs === String ? $util.Long.prototype.toString.call(message.updateTime) : options.longs === Number ? new $util.LongBits(message.updateTime.low >>> 0, message.updateTime.high >>> 0).toNumber() : message.updateTime;
            if (message.userid != null && message.hasOwnProperty("userid"))
                object.userid = message.userid;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.remoteAddr != null && message.hasOwnProperty("remoteAddr"))
                object.remoteAddr = message.remoteAddr;
            if (message.onBack != null && message.hasOwnProperty("onBack"))
                object.onBack = message.onBack;
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                object.gameNo = message.gameNo;
            if (message.gameNum != null && message.hasOwnProperty("gameNum"))
                object.gameNum = message.gameNum;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof room.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    room.AssignResponse = (function() {

        /**
         * Properties of an AssignResponse.
         * @memberof room
         * @interface IAssignResponse
         * @property {number|null} [msgid] AssignResponse msgid
         * @property {room.IUser|null} [user] AssignResponse user
         * @property {room.AssignMode|null} [assignMode] AssignResponse assignMode
         */

        /**
         * Constructs a new AssignResponse.
         * @memberof room
         * @classdesc Represents an AssignResponse.
         * @implements IAssignResponse
         * @constructor
         * @param {room.IAssignResponse=} [properties] Properties to set
         */
        function AssignResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssignResponse msgid.
         * @member {number} msgid
         * @memberof room.AssignResponse
         * @instance
         */
        AssignResponse.prototype.msgid = 0;

        /**
         * AssignResponse user.
         * @member {room.IUser|null|undefined} user
         * @memberof room.AssignResponse
         * @instance
         */
        AssignResponse.prototype.user = null;

        /**
         * AssignResponse assignMode.
         * @member {room.AssignMode} assignMode
         * @memberof room.AssignResponse
         * @instance
         */
        AssignResponse.prototype.assignMode = 0;

        /**
         * Creates a new AssignResponse instance using the specified properties.
         * @function create
         * @memberof room.AssignResponse
         * @static
         * @param {room.IAssignResponse=} [properties] Properties to set
         * @returns {room.AssignResponse} AssignResponse instance
         */
        AssignResponse.create = function create(properties) {
            return new AssignResponse(properties);
        };

        /**
         * Encodes the specified AssignResponse message. Does not implicitly {@link room.AssignResponse.verify|verify} messages.
         * @function encode
         * @memberof room.AssignResponse
         * @static
         * @param {room.IAssignResponse} message AssignResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssignResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgid);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.room.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.assignMode != null && message.hasOwnProperty("assignMode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.assignMode);
            return writer;
        };

        /**
         * Encodes the specified AssignResponse message, length delimited. Does not implicitly {@link room.AssignResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.AssignResponse
         * @static
         * @param {room.IAssignResponse} message AssignResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssignResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssignResponse message from the specified reader or buffer.
         * @function decode
         * @memberof room.AssignResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.AssignResponse} AssignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssignResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.AssignResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgid = reader.int32();
                    break;
                case 2:
                    message.user = $root.room.User.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.assignMode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssignResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.AssignResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.AssignResponse} AssignResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssignResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssignResponse message.
         * @function verify
         * @memberof room.AssignResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssignResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                if (!$util.isInteger(message.msgid))
                    return "msgid: integer expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.room.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.assignMode != null && message.hasOwnProperty("assignMode"))
                switch (message.assignMode) {
                default:
                    return "assignMode: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates an AssignResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.AssignResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.AssignResponse} AssignResponse
         */
        AssignResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.room.AssignResponse)
                return object;
            var message = new $root.room.AssignResponse();
            if (object.msgid != null)
                message.msgid = object.msgid | 0;
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".room.AssignResponse.user: object expected");
                message.user = $root.room.User.fromObject(object.user);
            }
            switch (object.assignMode) {
            case "IMMEDIATELY":
            case 0:
                message.assignMode = 0;
                break;
            case "ROOM":
            case 1:
                message.assignMode = 1;
                break;
            case "QUEUE":
            case 2:
                message.assignMode = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an AssignResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.AssignResponse
         * @static
         * @param {room.AssignResponse} message AssignResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssignResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.msgid = 0;
                object.user = null;
                object.assignMode = options.enums === String ? "IMMEDIATELY" : 0;
            }
            if (message.msgid != null && message.hasOwnProperty("msgid"))
                object.msgid = message.msgid;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.room.User.toObject(message.user, options);
            if (message.assignMode != null && message.hasOwnProperty("assignMode"))
                object.assignMode = options.enums === String ? $root.room.AssignMode[message.assignMode] : message.assignMode;
            return object;
        };

        /**
         * Converts this AssignResponse to JSON.
         * @function toJSON
         * @memberof room.AssignResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssignResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssignResponse;
    })();

    /**
     * AssignMode enum.
     * @name room.AssignMode
     * @enum {string}
     * @property {number} IMMEDIATELY=0 IMMEDIATELY value
     * @property {number} ROOM=1 ROOM value
     * @property {number} QUEUE=2 QUEUE value
     */
    room.AssignMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "IMMEDIATELY"] = 0;
        values[valuesById[1] = "ROOM"] = 1;
        values[valuesById[2] = "QUEUE"] = 2;
        return values;
    })();

    room.ServerInfo = (function() {

        /**
         * Properties of a ServerInfo.
         * @memberof room
         * @interface IServerInfo
         * @property {number|null} [roomId] ServerInfo roomId
         * @property {number|null} [tableId] ServerInfo tableId
         * @property {number|null} [User] ServerInfo User
         */

        /**
         * Constructs a new ServerInfo.
         * @memberof room
         * @classdesc Represents a ServerInfo.
         * @implements IServerInfo
         * @constructor
         * @param {room.IServerInfo=} [properties] Properties to set
         */
        function ServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfo roomId.
         * @member {number} roomId
         * @memberof room.ServerInfo
         * @instance
         */
        ServerInfo.prototype.roomId = 0;

        /**
         * ServerInfo tableId.
         * @member {number} tableId
         * @memberof room.ServerInfo
         * @instance
         */
        ServerInfo.prototype.tableId = 0;

        /**
         * ServerInfo User.
         * @member {number} User
         * @memberof room.ServerInfo
         * @instance
         */
        ServerInfo.prototype.User = 0;

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @function create
         * @memberof room.ServerInfo
         * @static
         * @param {room.IServerInfo=} [properties] Properties to set
         * @returns {room.ServerInfo} ServerInfo instance
         */
        ServerInfo.create = function create(properties) {
            return new ServerInfo(properties);
        };

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link room.ServerInfo.verify|verify} messages.
         * @function encode
         * @memberof room.ServerInfo
         * @static
         * @param {room.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableId);
            if (message.User != null && message.hasOwnProperty("User"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.User);
            return writer;
        };

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link room.ServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.ServerInfo
         * @static
         * @param {room.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof room.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.ServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.int32();
                    break;
                case 2:
                    message.tableId = reader.int32();
                    break;
                case 3:
                    message.User = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfo message.
         * @function verify
         * @memberof room.ServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isInteger(message.tableId))
                    return "tableId: integer expected";
            if (message.User != null && message.hasOwnProperty("User"))
                if (!$util.isInteger(message.User))
                    return "User: integer expected";
            return null;
        };

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.ServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.ServerInfo} ServerInfo
         */
        ServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.room.ServerInfo)
                return object;
            var message = new $root.room.ServerInfo();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.tableId != null)
                message.tableId = object.tableId | 0;
            if (object.User != null)
                message.User = object.User | 0;
            return message;
        };

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.ServerInfo
         * @static
         * @param {room.ServerInfo} message ServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.roomId = 0;
                object.tableId = 0;
                object.User = 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = message.User;
            return object;
        };

        /**
         * Converts this ServerInfo to JSON.
         * @function toJSON
         * @memberof room.ServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfo;
    })();

    /**
     * CMD enum.
     * @name room.CMD
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} JOIN_ROOM_REQ=40000 JOIN_ROOM_REQ value
     * @property {number} JOIN_ROOM_RES=40001 JOIN_ROOM_RES value
     * @property {number} GET_FROM_GATE=101 GET_FROM_GATE value
     * @property {number} SEND_TO_GATE=102 SEND_TO_GATE value
     */
    room.CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[40000] = "JOIN_ROOM_REQ"] = 40000;
        values[valuesById[40001] = "JOIN_ROOM_RES"] = 40001;
        values[valuesById[101] = "GET_FROM_GATE"] = 101;
        values[valuesById[102] = "SEND_TO_GATE"] = 102;
        return values;
    })();

    /**
     * ErrorCode enum.
     * @name room.ErrorCode
     * @enum {string}
     * @property {number} NO_ERROR=0 NO_ERROR value
     * @property {number} OK=1 OK value
     * @property {number} NO_GET_DATE_ERROR=2 NO_GET_DATE_ERROR value
     * @property {number} NO_SEND_DATE_ERROR=3 NO_SEND_DATE_ERROR value
     * @property {number} PLAYER_ENOUGH_ERROR=4 PLAYER_ENOUGH_ERROR value
     */
    room.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NO_ERROR"] = 0;
        values[valuesById[1] = "OK"] = 1;
        values[valuesById[2] = "NO_GET_DATE_ERROR"] = 2;
        values[valuesById[3] = "NO_SEND_DATE_ERROR"] = 3;
        values[valuesById[4] = "PLAYER_ENOUGH_ERROR"] = 4;
        return values;
    })();

    room.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof room
         * @interface IRequest
         * @property {room.CMD|null} [cmd] Request cmd
         */

        /**
         * Constructs a new Request.
         * @memberof room
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {room.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {room.CMD} cmd
         * @memberof room.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof room.Request
         * @static
         * @param {room.IRequest=} [properties] Properties to set
         * @returns {room.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link room.Request.verify|verify} messages.
         * @function encode
         * @memberof room.Request
         * @static
         * @param {room.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link room.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.Request
         * @static
         * @param {room.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof room.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
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
         * @memberof room.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.Request} Request
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
         * @memberof room.Request
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
                case 40000:
                case 40001:
                case 101:
                case 102:
                    break;
                }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.room.Request)
                return object;
            var message = new $root.room.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "JOIN_ROOM_REQ":
            case 40000:
                message.cmd = 40000;
                break;
            case "JOIN_ROOM_RES":
            case 40001:
                message.cmd = 40001;
                break;
            case "GET_FROM_GATE":
            case 101:
                message.cmd = 101;
                break;
            case "SEND_TO_GATE":
            case 102:
                message.cmd = 102;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.Request
         * @static
         * @param {room.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.room.CMD[message.cmd] : message.cmd;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof room.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    room.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof room
         * @interface IResponse
         * @property {room.ErrorCode|null} [error] Response error
         * @property {room.CMD|null} [cmd] Response cmd
         * @property {room.IAssignResponse|null} [assignResponse] Response assignResponse
         */

        /**
         * Constructs a new Response.
         * @memberof room
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {room.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response error.
         * @member {room.ErrorCode} error
         * @memberof room.Response
         * @instance
         */
        Response.prototype.error = 0;

        /**
         * Response cmd.
         * @member {room.CMD} cmd
         * @memberof room.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response assignResponse.
         * @member {room.IAssignResponse|null|undefined} assignResponse
         * @memberof room.Response
         * @instance
         */
        Response.prototype.assignResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof room.Response
         * @static
         * @param {room.IResponse=} [properties] Properties to set
         * @returns {room.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link room.Response.verify|verify} messages.
         * @function encode
         * @memberof room.Response
         * @static
         * @param {room.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cmd);
            if (message.assignResponse != null && message.hasOwnProperty("assignResponse"))
                $root.room.AssignResponse.encode(message.assignResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link room.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.Response
         * @static
         * @param {room.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof room.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.Response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.cmd = reader.int32();
                    break;
                case 3:
                    message.assignResponse = $root.room.AssignResponse.decode(reader, reader.uint32());
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
         * @memberof room.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.Response} Response
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
         * @memberof room.Response
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
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                switch (message.cmd) {
                default:
                    return "cmd: enum value expected";
                case 0:
                case 40000:
                case 40001:
                case 101:
                case 102:
                    break;
                }
            if (message.assignResponse != null && message.hasOwnProperty("assignResponse")) {
                var error = $root.room.AssignResponse.verify(message.assignResponse);
                if (error)
                    return "assignResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.room.Response)
                return object;
            var message = new $root.room.Response();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "OK":
            case 1:
                message.error = 1;
                break;
            case "NO_GET_DATE_ERROR":
            case 2:
                message.error = 2;
                break;
            case "NO_SEND_DATE_ERROR":
            case 3:
                message.error = 3;
                break;
            case "PLAYER_ENOUGH_ERROR":
            case 4:
                message.error = 4;
                break;
            }
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "JOIN_ROOM_REQ":
            case 40000:
                message.cmd = 40000;
                break;
            case "JOIN_ROOM_RES":
            case 40001:
                message.cmd = 40001;
                break;
            case "GET_FROM_GATE":
            case 101:
                message.cmd = 101;
                break;
            case "SEND_TO_GATE":
            case 102:
                message.cmd = 102;
                break;
            }
            if (object.assignResponse != null) {
                if (typeof object.assignResponse !== "object")
                    throw TypeError(".room.Response.assignResponse: object expected");
                message.assignResponse = $root.room.AssignResponse.fromObject(object.assignResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.Response
         * @static
         * @param {room.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "NO_ERROR" : 0;
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.assignResponse = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.room.ErrorCode[message.error] : message.error;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.room.CMD[message.cmd] : message.cmd;
            if (message.assignResponse != null && message.hasOwnProperty("assignResponse"))
                object.assignResponse = $root.room.AssignResponse.toObject(message.assignResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof room.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    return room;
})();

module.exports = $root;
