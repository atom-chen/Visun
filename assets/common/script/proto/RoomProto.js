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

    /**
     * CMD enum.
     * @name room.CMD
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} JOIN_ROOM_REQ=30000 JOIN_ROOM_REQ value
     * @property {number} JOIN_ROOM_RES=30001 JOIN_ROOM_RES value
     * @property {number} GET_FROM_GATE=30002 GET_FROM_GATE value
     * @property {number} SEND_TO_GATE=30003 SEND_TO_GATE value
     */
    room.CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[30000] = "JOIN_ROOM_REQ"] = 30000;
        values[valuesById[30001] = "JOIN_ROOM_RES"] = 30001;
        values[valuesById[30002] = "GET_FROM_GATE"] = 30002;
        values[valuesById[30003] = "SEND_TO_GATE"] = 30003;
        return values;
    })();

    room.User = (function() {

        /**
         * Properties of a User.
         * @memberof room
         * @interface IUser
         * @property {number|null} [userid] User userid
         * @property {number|null} [tableType] User tableType
         * @property {string|null} [tableId] User tableId
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
         * User userid.
         * @member {number} userid
         * @memberof room.User
         * @instance
         */
        User.prototype.userid = 0;

        /**
         * User tableType.
         * @member {number} tableType
         * @memberof room.User
         * @instance
         */
        User.prototype.tableType = 0;

        /**
         * User tableId.
         * @member {string} tableId
         * @memberof room.User
         * @instance
         */
        User.prototype.tableId = "";

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
            if (message.userid != null && message.hasOwnProperty("userid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userid);
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.tableType);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            if (message.gameNo != null && message.hasOwnProperty("gameNo"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gameNo);
            if (message.gameNum != null && message.hasOwnProperty("gameNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gameNum);
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
                    message.userid = reader.int32();
                    break;
                case 2:
                    message.tableType = reader.int32();
                    break;
                case 3:
                    message.tableId = reader.string();
                    break;
                case 4:
                    message.gameNo = reader.int32();
                    break;
                case 5:
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
            if (message.userid != null && message.hasOwnProperty("userid"))
                if (!$util.isInteger(message.userid))
                    return "userid: integer expected";
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                if (!$util.isInteger(message.tableType))
                    return "tableType: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
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
            if (object.userid != null)
                message.userid = object.userid | 0;
            if (object.tableType != null)
                message.tableType = object.tableType | 0;
            if (object.tableId != null)
                message.tableId = String(object.tableId);
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
                object.userid = 0;
                object.tableType = 0;
                object.tableId = "";
                object.gameNo = 0;
                object.gameNum = 0;
            }
            if (message.userid != null && message.hasOwnProperty("userid"))
                object.userid = message.userid;
            if (message.tableType != null && message.hasOwnProperty("tableType"))
                object.tableType = message.tableType;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
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

    room.JoinTableRequest = (function() {

        /**
         * Properties of a JoinTableRequest.
         * @memberof room
         * @interface IJoinTableRequest
         * @property {room.IUser|null} [user] JoinTableRequest user
         */

        /**
         * Constructs a new JoinTableRequest.
         * @memberof room
         * @classdesc Represents a JoinTableRequest.
         * @implements IJoinTableRequest
         * @constructor
         * @param {room.IJoinTableRequest=} [properties] Properties to set
         */
        function JoinTableRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableRequest user.
         * @member {room.IUser|null|undefined} user
         * @memberof room.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.user = null;

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @function create
         * @memberof room.JoinTableRequest
         * @static
         * @param {room.IJoinTableRequest=} [properties] Properties to set
         * @returns {room.JoinTableRequest} JoinTableRequest instance
         */
        JoinTableRequest.create = function create(properties) {
            return new JoinTableRequest(properties);
        };

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link room.JoinTableRequest.verify|verify} messages.
         * @function encode
         * @memberof room.JoinTableRequest
         * @static
         * @param {room.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.room.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link room.JoinTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.JoinTableRequest
         * @static
         * @param {room.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof room.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.JoinTableRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.room.User.decode(reader, reader.uint32());
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
         * @memberof room.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.JoinTableRequest} JoinTableRequest
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
         * @memberof room.JoinTableRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.room.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.JoinTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.JoinTableRequest} JoinTableRequest
         */
        JoinTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.room.JoinTableRequest)
                return object;
            var message = new $root.room.JoinTableRequest();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".room.JoinTableRequest.user: object expected");
                message.user = $root.room.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.JoinTableRequest
         * @static
         * @param {room.JoinTableRequest} message JoinTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.room.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this JoinTableRequest to JSON.
         * @function toJSON
         * @memberof room.JoinTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableRequest;
    })();

    room.JoinTableResponse = (function() {

        /**
         * Properties of a JoinTableResponse.
         * @memberof room
         * @interface IJoinTableResponse
         * @property {room.IUser|null} [user] JoinTableResponse user
         * @property {room.AssignMode|null} [assignMode] JoinTableResponse assignMode
         */

        /**
         * Constructs a new JoinTableResponse.
         * @memberof room
         * @classdesc Represents a JoinTableResponse.
         * @implements IJoinTableResponse
         * @constructor
         * @param {room.IJoinTableResponse=} [properties] Properties to set
         */
        function JoinTableResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableResponse user.
         * @member {room.IUser|null|undefined} user
         * @memberof room.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.user = null;

        /**
         * JoinTableResponse assignMode.
         * @member {room.AssignMode} assignMode
         * @memberof room.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.assignMode = 0;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @function create
         * @memberof room.JoinTableResponse
         * @static
         * @param {room.IJoinTableResponse=} [properties] Properties to set
         * @returns {room.JoinTableResponse} JoinTableResponse instance
         */
        JoinTableResponse.create = function create(properties) {
            return new JoinTableResponse(properties);
        };

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link room.JoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof room.JoinTableResponse
         * @static
         * @param {room.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.room.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.assignMode != null && message.hasOwnProperty("assignMode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.assignMode);
            return writer;
        };

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link room.JoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof room.JoinTableResponse
         * @static
         * @param {room.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof room.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {room.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.room.JoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.room.User.decode(reader, reader.uint32());
                    break;
                case 2:
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
         * Decodes a JoinTableResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof room.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {room.JoinTableResponse} JoinTableResponse
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
         * @memberof room.JoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof room.JoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {room.JoinTableResponse} JoinTableResponse
         */
        JoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.room.JoinTableResponse)
                return object;
            var message = new $root.room.JoinTableResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".room.JoinTableResponse.user: object expected");
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
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof room.JoinTableResponse
         * @static
         * @param {room.JoinTableResponse} message JoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                object.assignMode = options.enums === String ? "IMMEDIATELY" : 0;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.room.User.toObject(message.user, options);
            if (message.assignMode != null && message.hasOwnProperty("assignMode"))
                object.assignMode = options.enums === String ? $root.room.AssignMode[message.assignMode] : message.assignMode;
            return object;
        };

        /**
         * Converts this JoinTableResponse to JSON.
         * @function toJSON
         * @memberof room.JoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResponse;
    })();

    return room;
})();

module.exports = $root;
