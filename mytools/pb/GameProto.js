/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameProto = (function() {

    /**
     * Namespace GameProto.
     * @exports GameProto
     * @namespace
     */
    var GameProto = {};

    GameProto.User = (function() {

        /**
         * Properties of a User.
         * @memberof GameProto
         * @interface IUser
         * @property {number|null} [userId] User userId
         * @property {number|null} [state] User state
         * @property {string|null} [tableId] User tableId
         * @property {string|null} [nickname] User nickname
         * @property {string|null} [headImg] User headImg
         * @property {number|null} [sex] User sex
         * @property {string|null} [ip] User ip
         * @property {number|null} [onLine] User onLine
         * @property {number|null} [coin] User coin
         */

        /**
         * Constructs a new User.
         * @memberof GameProto
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {GameProto.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number} userId
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.userId = 0;

        /**
         * User state.
         * @member {number} state
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.state = 0;

        /**
         * User tableId.
         * @member {string} tableId
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.tableId = "";

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User headImg.
         * @member {string} headImg
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.headImg = "";

        /**
         * User sex.
         * @member {number} sex
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.sex = 0;

        /**
         * User ip.
         * @member {string} ip
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.ip = "";

        /**
         * User onLine.
         * @member {number} onLine
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.onLine = 0;

        /**
         * User coin.
         * @member {number} coin
         * @memberof GameProto.User
         * @instance
         */
        User.prototype.coin = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof GameProto.User
         * @static
         * @param {GameProto.IUser=} [properties] Properties to set
         * @returns {GameProto.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link GameProto.User.verify|verify} messages.
         * @function encode
         * @memberof GameProto.User
         * @static
         * @param {GameProto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.tableId);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nickname);
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.headImg);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.sex);
            if (message.ip != null && message.hasOwnProperty("ip"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ip);
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.onLine);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.coin);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link GameProto.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.User
         * @static
         * @param {GameProto.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.User();
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
                    message.tableId = reader.string();
                    break;
                case 4:
                    message.nickname = reader.string();
                    break;
                case 5:
                    message.headImg = reader.string();
                    break;
                case 6:
                    message.sex = reader.int32();
                    break;
                case 7:
                    message.ip = reader.string();
                    break;
                case 8:
                    message.onLine = reader.int32();
                    break;
                case 9:
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
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.User} User
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
         * @memberof GameProto.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                if (!$util.isString(message.tableId))
                    return "tableId: string expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                if (!$util.isString(message.headImg))
                    return "headImg: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.ip != null && message.hasOwnProperty("ip"))
                if (!$util.isString(message.ip))
                    return "ip: string expected";
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                if (!$util.isInteger(message.onLine))
                    return "onLine: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.User)
                return object;
            var message = new $root.GameProto.User();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.state != null)
                message.state = object.state | 0;
            if (object.tableId != null)
                message.tableId = String(object.tableId);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.headImg != null)
                message.headImg = String(object.headImg);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.ip != null)
                message.ip = String(object.ip);
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.User
         * @static
         * @param {GameProto.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.state = 0;
                object.tableId = "";
                object.nickname = "";
                object.headImg = "";
                object.sex = 0;
                object.ip = "";
                object.onLine = 0;
                object.coin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.tableId != null && message.hasOwnProperty("tableId"))
                object.tableId = message.tableId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.headImg != null && message.hasOwnProperty("headImg"))
                object.headImg = message.headImg;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.ip != null && message.hasOwnProperty("ip"))
                object.ip = message.ip;
            if (message.onLine != null && message.hasOwnProperty("onLine"))
                object.onLine = message.onLine;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof GameProto.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    GameProto.JoinTableRequest = (function() {

        /**
         * Properties of a JoinTableRequest.
         * @memberof GameProto
         * @interface IJoinTableRequest
         * @property {string|null} [sid] JoinTableRequest sid
         */

        /**
         * Constructs a new JoinTableRequest.
         * @memberof GameProto
         * @classdesc Represents a JoinTableRequest.
         * @implements IJoinTableRequest
         * @constructor
         * @param {GameProto.IJoinTableRequest=} [properties] Properties to set
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
         * @memberof GameProto.JoinTableRequest
         * @instance
         */
        JoinTableRequest.prototype.sid = "";

        /**
         * Creates a new JoinTableRequest instance using the specified properties.
         * @function create
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {GameProto.IJoinTableRequest=} [properties] Properties to set
         * @returns {GameProto.JoinTableRequest} JoinTableRequest instance
         */
        JoinTableRequest.create = function create(properties) {
            return new JoinTableRequest(properties);
        };

        /**
         * Encodes the specified JoinTableRequest message. Does not implicitly {@link GameProto.JoinTableRequest.verify|verify} messages.
         * @function encode
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {GameProto.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sid != null && message.hasOwnProperty("sid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sid);
            return writer;
        };

        /**
         * Encodes the specified JoinTableRequest message, length delimited. Does not implicitly {@link GameProto.JoinTableRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {GameProto.IJoinTableRequest} message JoinTableRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.JoinTableRequest} JoinTableRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.JoinTableRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sid = reader.string();
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
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.JoinTableRequest} JoinTableRequest
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
         * @memberof GameProto.JoinTableRequest
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
            return null;
        };

        /**
         * Creates a JoinTableRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.JoinTableRequest} JoinTableRequest
         */
        JoinTableRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.JoinTableRequest)
                return object;
            var message = new $root.GameProto.JoinTableRequest();
            if (object.sid != null)
                message.sid = String(object.sid);
            return message;
        };

        /**
         * Creates a plain object from a JoinTableRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.JoinTableRequest
         * @static
         * @param {GameProto.JoinTableRequest} message JoinTableRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.sid = "";
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            return object;
        };

        /**
         * Converts this JoinTableRequest to JSON.
         * @function toJSON
         * @memberof GameProto.JoinTableRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableRequest;
    })();

    GameProto.HitRequest = (function() {

        /**
         * Properties of a HitRequest.
         * @memberof GameProto
         * @interface IHitRequest
         * @property {number|null} [type] HitRequest type
         */

        /**
         * Constructs a new HitRequest.
         * @memberof GameProto
         * @classdesc Represents a HitRequest.
         * @implements IHitRequest
         * @constructor
         * @param {GameProto.IHitRequest=} [properties] Properties to set
         */
        function HitRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HitRequest type.
         * @member {number} type
         * @memberof GameProto.HitRequest
         * @instance
         */
        HitRequest.prototype.type = 0;

        /**
         * Creates a new HitRequest instance using the specified properties.
         * @function create
         * @memberof GameProto.HitRequest
         * @static
         * @param {GameProto.IHitRequest=} [properties] Properties to set
         * @returns {GameProto.HitRequest} HitRequest instance
         */
        HitRequest.create = function create(properties) {
            return new HitRequest(properties);
        };

        /**
         * Encodes the specified HitRequest message. Does not implicitly {@link GameProto.HitRequest.verify|verify} messages.
         * @function encode
         * @memberof GameProto.HitRequest
         * @static
         * @param {GameProto.IHitRequest} message HitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified HitRequest message, length delimited. Does not implicitly {@link GameProto.HitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.HitRequest
         * @static
         * @param {GameProto.IHitRequest} message HitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.HitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.HitRequest} HitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.HitRequest();
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
         * Decodes a HitRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.HitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.HitRequest} HitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HitRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HitRequest message.
         * @function verify
         * @memberof GameProto.HitRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HitRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a HitRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.HitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.HitRequest} HitRequest
         */
        HitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.HitRequest)
                return object;
            var message = new $root.GameProto.HitRequest();
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a HitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.HitRequest
         * @static
         * @param {GameProto.HitRequest} message HitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HitRequest.toObject = function toObject(message, options) {
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
         * Converts this HitRequest to JSON.
         * @function toJSON
         * @memberof GameProto.HitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HitRequest;
    })();

    GameProto.UserQuitRequest = (function() {

        /**
         * Properties of a UserQuitRequest.
         * @memberof GameProto
         * @interface IUserQuitRequest
         */

        /**
         * Constructs a new UserQuitRequest.
         * @memberof GameProto
         * @classdesc Represents a UserQuitRequest.
         * @implements IUserQuitRequest
         * @constructor
         * @param {GameProto.IUserQuitRequest=} [properties] Properties to set
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
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {GameProto.IUserQuitRequest=} [properties] Properties to set
         * @returns {GameProto.UserQuitRequest} UserQuitRequest instance
         */
        UserQuitRequest.create = function create(properties) {
            return new UserQuitRequest(properties);
        };

        /**
         * Encodes the specified UserQuitRequest message. Does not implicitly {@link GameProto.UserQuitRequest.verify|verify} messages.
         * @function encode
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {GameProto.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserQuitRequest message, length delimited. Does not implicitly {@link GameProto.UserQuitRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {GameProto.IUserQuitRequest} message UserQuitRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.UserQuitRequest} UserQuitRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.UserQuitRequest();
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
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.UserQuitRequest} UserQuitRequest
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
         * @memberof GameProto.UserQuitRequest
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
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.UserQuitRequest} UserQuitRequest
         */
        UserQuitRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.UserQuitRequest)
                return object;
            return new $root.GameProto.UserQuitRequest();
        };

        /**
         * Creates a plain object from a UserQuitRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.UserQuitRequest
         * @static
         * @param {GameProto.UserQuitRequest} message UserQuitRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserQuitRequest to JSON.
         * @function toJSON
         * @memberof GameProto.UserQuitRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitRequest;
    })();

    GameProto.UserOnBackRequest = (function() {

        /**
         * Properties of a UserOnBackRequest.
         * @memberof GameProto
         * @interface IUserOnBackRequest
         */

        /**
         * Constructs a new UserOnBackRequest.
         * @memberof GameProto
         * @classdesc Represents a UserOnBackRequest.
         * @implements IUserOnBackRequest
         * @constructor
         * @param {GameProto.IUserOnBackRequest=} [properties] Properties to set
         */
        function UserOnBackRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new UserOnBackRequest instance using the specified properties.
         * @function create
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {GameProto.IUserOnBackRequest=} [properties] Properties to set
         * @returns {GameProto.UserOnBackRequest} UserOnBackRequest instance
         */
        UserOnBackRequest.create = function create(properties) {
            return new UserOnBackRequest(properties);
        };

        /**
         * Encodes the specified UserOnBackRequest message. Does not implicitly {@link GameProto.UserOnBackRequest.verify|verify} messages.
         * @function encode
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {GameProto.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified UserOnBackRequest message, length delimited. Does not implicitly {@link GameProto.UserOnBackRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {GameProto.IUserOnBackRequest} message UserOnBackRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOnBackRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOnBackRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.UserOnBackRequest} UserOnBackRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOnBackRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.UserOnBackRequest();
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
         * Decodes a UserOnBackRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.UserOnBackRequest} UserOnBackRequest
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
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOnBackRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a UserOnBackRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.UserOnBackRequest} UserOnBackRequest
         */
        UserOnBackRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.UserOnBackRequest)
                return object;
            return new $root.GameProto.UserOnBackRequest();
        };

        /**
         * Creates a plain object from a UserOnBackRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.UserOnBackRequest
         * @static
         * @param {GameProto.UserOnBackRequest} message UserOnBackRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOnBackRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this UserOnBackRequest to JSON.
         * @function toJSON
         * @memberof GameProto.UserOnBackRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOnBackRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserOnBackRequest;
    })();

    GameProto.DelayCheckRequest = (function() {

        /**
         * Properties of a DelayCheckRequest.
         * @memberof GameProto
         * @interface IDelayCheckRequest
         * @property {string|null} [content] DelayCheckRequest content
         */

        /**
         * Constructs a new DelayCheckRequest.
         * @memberof GameProto
         * @classdesc Represents a DelayCheckRequest.
         * @implements IDelayCheckRequest
         * @constructor
         * @param {GameProto.IDelayCheckRequest=} [properties] Properties to set
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
         * @memberof GameProto.DelayCheckRequest
         * @instance
         */
        DelayCheckRequest.prototype.content = "";

        /**
         * Creates a new DelayCheckRequest instance using the specified properties.
         * @function create
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {GameProto.IDelayCheckRequest=} [properties] Properties to set
         * @returns {GameProto.DelayCheckRequest} DelayCheckRequest instance
         */
        DelayCheckRequest.create = function create(properties) {
            return new DelayCheckRequest(properties);
        };

        /**
         * Encodes the specified DelayCheckRequest message. Does not implicitly {@link GameProto.DelayCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {GameProto.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
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
         * Encodes the specified DelayCheckRequest message, length delimited. Does not implicitly {@link GameProto.DelayCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {GameProto.IDelayCheckRequest} message DelayCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.DelayCheckRequest} DelayCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.DelayCheckRequest();
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
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.DelayCheckRequest} DelayCheckRequest
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
         * @memberof GameProto.DelayCheckRequest
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
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.DelayCheckRequest} DelayCheckRequest
         */
        DelayCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.DelayCheckRequest)
                return object;
            var message = new $root.GameProto.DelayCheckRequest();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.DelayCheckRequest
         * @static
         * @param {GameProto.DelayCheckRequest} message DelayCheckRequest
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
         * @memberof GameProto.DelayCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckRequest;
    })();

    GameProto.UserReconnectRequest = (function() {

        /**
         * Properties of a UserReconnectRequest.
         * @memberof GameProto
         * @interface IUserReconnectRequest
         * @property {number|null} [userId] UserReconnectRequest userId
         */

        /**
         * Constructs a new UserReconnectRequest.
         * @memberof GameProto
         * @classdesc Represents a UserReconnectRequest.
         * @implements IUserReconnectRequest
         * @constructor
         * @param {GameProto.IUserReconnectRequest=} [properties] Properties to set
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
         * @memberof GameProto.UserReconnectRequest
         * @instance
         */
        UserReconnectRequest.prototype.userId = 0;

        /**
         * Creates a new UserReconnectRequest instance using the specified properties.
         * @function create
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {GameProto.IUserReconnectRequest=} [properties] Properties to set
         * @returns {GameProto.UserReconnectRequest} UserReconnectRequest instance
         */
        UserReconnectRequest.create = function create(properties) {
            return new UserReconnectRequest(properties);
        };

        /**
         * Encodes the specified UserReconnectRequest message. Does not implicitly {@link GameProto.UserReconnectRequest.verify|verify} messages.
         * @function encode
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {GameProto.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
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
         * Encodes the specified UserReconnectRequest message, length delimited. Does not implicitly {@link GameProto.UserReconnectRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {GameProto.IUserReconnectRequest} message UserReconnectRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.UserReconnectRequest} UserReconnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.UserReconnectRequest();
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
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.UserReconnectRequest} UserReconnectRequest
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
         * @memberof GameProto.UserReconnectRequest
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
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.UserReconnectRequest} UserReconnectRequest
         */
        UserReconnectRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.UserReconnectRequest)
                return object;
            var message = new $root.GameProto.UserReconnectRequest();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.UserReconnectRequest
         * @static
         * @param {GameProto.UserReconnectRequest} message UserReconnectRequest
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
         * @memberof GameProto.UserReconnectRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectRequest;
    })();

    GameProto.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof GameProto
         * @interface IRequest
         * @property {GameProto.Request.CMD|null} [cmd] Request cmd
         * @property {GameProto.IJoinTableRequest|null} [joinTableRequest] Request joinTableRequest
         * @property {GameProto.IHitRequest|null} [hitRequest] Request hitRequest
         * @property {GameProto.IUserQuitRequest|null} [userQuitRequest] Request userQuitRequest
         * @property {GameProto.IDelayCheckRequest|null} [delayCheckRequest] Request delayCheckRequest
         * @property {GameProto.IUserOnBackRequest|null} [userOnBackRequest] Request userOnBackRequest
         * @property {GameProto.IUserReconnectRequest|null} [userReconnectRequest] Request userReconnectRequest
         */

        /**
         * Constructs a new Request.
         * @memberof GameProto
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {GameProto.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {GameProto.Request.CMD} cmd
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request joinTableRequest.
         * @member {GameProto.IJoinTableRequest|null|undefined} joinTableRequest
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.joinTableRequest = null;

        /**
         * Request hitRequest.
         * @member {GameProto.IHitRequest|null|undefined} hitRequest
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.hitRequest = null;

        /**
         * Request userQuitRequest.
         * @member {GameProto.IUserQuitRequest|null|undefined} userQuitRequest
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.userQuitRequest = null;

        /**
         * Request delayCheckRequest.
         * @member {GameProto.IDelayCheckRequest|null|undefined} delayCheckRequest
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.delayCheckRequest = null;

        /**
         * Request userOnBackRequest.
         * @member {GameProto.IUserOnBackRequest|null|undefined} userOnBackRequest
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.userOnBackRequest = null;

        /**
         * Request userReconnectRequest.
         * @member {GameProto.IUserReconnectRequest|null|undefined} userReconnectRequest
         * @memberof GameProto.Request
         * @instance
         */
        Request.prototype.userReconnectRequest = null;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof GameProto.Request
         * @static
         * @param {GameProto.IRequest=} [properties] Properties to set
         * @returns {GameProto.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link GameProto.Request.verify|verify} messages.
         * @function encode
         * @memberof GameProto.Request
         * @static
         * @param {GameProto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.joinTableRequest != null && message.hasOwnProperty("joinTableRequest"))
                $root.GameProto.JoinTableRequest.encode(message.joinTableRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.hitRequest != null && message.hasOwnProperty("hitRequest"))
                $root.GameProto.HitRequest.encode(message.hitRequest, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                $root.GameProto.UserQuitRequest.encode(message.userQuitRequest, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                $root.GameProto.DelayCheckRequest.encode(message.delayCheckRequest, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                $root.GameProto.UserOnBackRequest.encode(message.userOnBackRequest, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                $root.GameProto.UserReconnectRequest.encode(message.userReconnectRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link GameProto.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.Request
         * @static
         * @param {GameProto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.int32();
                    break;
                case 11:
                    message.joinTableRequest = $root.GameProto.JoinTableRequest.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.hitRequest = $root.GameProto.HitRequest.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.userQuitRequest = $root.GameProto.UserQuitRequest.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.delayCheckRequest = $root.GameProto.DelayCheckRequest.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.userOnBackRequest = $root.GameProto.UserOnBackRequest.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.userReconnectRequest = $root.GameProto.UserReconnectRequest.decode(reader, reader.uint32());
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
         * @memberof GameProto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.Request} Request
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
         * @memberof GameProto.Request
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
                case 2002:
                case 2006:
                case 2044:
                case 2080:
                case 20010:
                case 2030:
                case 2005:
                case 2007:
                case 2045:
                case 2061:
                case 2071:
                case 2081:
                case 2031:
                case 2035:
                case 10000:
                    break;
                }
            if (message.joinTableRequest != null && message.hasOwnProperty("joinTableRequest")) {
                var error = $root.GameProto.JoinTableRequest.verify(message.joinTableRequest);
                if (error)
                    return "joinTableRequest." + error;
            }
            if (message.hitRequest != null && message.hasOwnProperty("hitRequest")) {
                var error = $root.GameProto.HitRequest.verify(message.hitRequest);
                if (error)
                    return "hitRequest." + error;
            }
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest")) {
                var error = $root.GameProto.UserQuitRequest.verify(message.userQuitRequest);
                if (error)
                    return "userQuitRequest." + error;
            }
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest")) {
                var error = $root.GameProto.DelayCheckRequest.verify(message.delayCheckRequest);
                if (error)
                    return "delayCheckRequest." + error;
            }
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest")) {
                var error = $root.GameProto.UserOnBackRequest.verify(message.userOnBackRequest);
                if (error)
                    return "userOnBackRequest." + error;
            }
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest")) {
                var error = $root.GameProto.UserReconnectRequest.verify(message.userReconnectRequest);
                if (error)
                    return "userReconnectRequest." + error;
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.Request)
                return object;
            var message = new $root.GameProto.Request();
            switch (object.cmd) {
            case "UNKNOWN":
            case 0:
                message.cmd = 0;
                break;
            case "JOIN_TABLE":
            case 2002:
                message.cmd = 2002;
                break;
            case "HIT":
            case 2006:
                message.cmd = 2006;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_JOIN_TABLE":
            case 2005:
                message.cmd = 2005;
                break;
            case "SEND_HIT":
            case 2007:
                message.cmd = 2007;
                break;
            case "SEND_USER_QUIT":
            case 2045:
                message.cmd = 2045;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "SEND_DIAMOND_CHANGE":
            case 2071:
                message.cmd = 2071;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            }
            if (object.joinTableRequest != null) {
                if (typeof object.joinTableRequest !== "object")
                    throw TypeError(".GameProto.Request.joinTableRequest: object expected");
                message.joinTableRequest = $root.GameProto.JoinTableRequest.fromObject(object.joinTableRequest);
            }
            if (object.hitRequest != null) {
                if (typeof object.hitRequest !== "object")
                    throw TypeError(".GameProto.Request.hitRequest: object expected");
                message.hitRequest = $root.GameProto.HitRequest.fromObject(object.hitRequest);
            }
            if (object.userQuitRequest != null) {
                if (typeof object.userQuitRequest !== "object")
                    throw TypeError(".GameProto.Request.userQuitRequest: object expected");
                message.userQuitRequest = $root.GameProto.UserQuitRequest.fromObject(object.userQuitRequest);
            }
            if (object.delayCheckRequest != null) {
                if (typeof object.delayCheckRequest !== "object")
                    throw TypeError(".GameProto.Request.delayCheckRequest: object expected");
                message.delayCheckRequest = $root.GameProto.DelayCheckRequest.fromObject(object.delayCheckRequest);
            }
            if (object.userOnBackRequest != null) {
                if (typeof object.userOnBackRequest !== "object")
                    throw TypeError(".GameProto.Request.userOnBackRequest: object expected");
                message.userOnBackRequest = $root.GameProto.UserOnBackRequest.fromObject(object.userOnBackRequest);
            }
            if (object.userReconnectRequest != null) {
                if (typeof object.userReconnectRequest !== "object")
                    throw TypeError(".GameProto.Request.userReconnectRequest: object expected");
                message.userReconnectRequest = $root.GameProto.UserReconnectRequest.fromObject(object.userReconnectRequest);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.Request
         * @static
         * @param {GameProto.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.cmd = options.enums === String ? "UNKNOWN" : 0;
                object.joinTableRequest = null;
                object.hitRequest = null;
                object.userQuitRequest = null;
                object.delayCheckRequest = null;
                object.userOnBackRequest = null;
                object.userReconnectRequest = null;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.GameProto.Request.CMD[message.cmd] : message.cmd;
            if (message.joinTableRequest != null && message.hasOwnProperty("joinTableRequest"))
                object.joinTableRequest = $root.GameProto.JoinTableRequest.toObject(message.joinTableRequest, options);
            if (message.hitRequest != null && message.hasOwnProperty("hitRequest"))
                object.hitRequest = $root.GameProto.HitRequest.toObject(message.hitRequest, options);
            if (message.userQuitRequest != null && message.hasOwnProperty("userQuitRequest"))
                object.userQuitRequest = $root.GameProto.UserQuitRequest.toObject(message.userQuitRequest, options);
            if (message.delayCheckRequest != null && message.hasOwnProperty("delayCheckRequest"))
                object.delayCheckRequest = $root.GameProto.DelayCheckRequest.toObject(message.delayCheckRequest, options);
            if (message.userOnBackRequest != null && message.hasOwnProperty("userOnBackRequest"))
                object.userOnBackRequest = $root.GameProto.UserOnBackRequest.toObject(message.userOnBackRequest, options);
            if (message.userReconnectRequest != null && message.hasOwnProperty("userReconnectRequest"))
                object.userReconnectRequest = $root.GameProto.UserReconnectRequest.toObject(message.userReconnectRequest, options);
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof GameProto.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CMD enum.
         * @name GameProto.Request.CMD
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} JOIN_TABLE=2002 JOIN_TABLE value
         * @property {number} HIT=2006 HIT value
         * @property {number} USER_QUIT=2044 USER_QUIT value
         * @property {number} USER_ONBACK=2080 USER_ONBACK value
         * @property {number} DELAY_CHECK=20010 DELAY_CHECK value
         * @property {number} USER_RECONNECT=2030 USER_RECONNECT value
         * @property {number} SEND_JOIN_TABLE=2005 SEND_JOIN_TABLE value
         * @property {number} SEND_HIT=2007 SEND_HIT value
         * @property {number} SEND_USER_QUIT=2045 SEND_USER_QUIT value
         * @property {number} SEND_MESSAGE=2061 SEND_MESSAGE value
         * @property {number} SEND_DIAMOND_CHANGE=2071 SEND_DIAMOND_CHANGE value
         * @property {number} SEND_USER_ONBACK=2081 SEND_USER_ONBACK value
         * @property {number} SEND_USER_RECONNECT=2031 SEND_USER_RECONNECT value
         * @property {number} SEND_RECONNECT_QUIT=2035 SEND_RECONNECT_QUIT value
         * @property {number} SEND_HEART_BEAT=10000 SEND_HEART_BEAT value
         */
        Request.CMD = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[2002] = "JOIN_TABLE"] = 2002;
            values[valuesById[2006] = "HIT"] = 2006;
            values[valuesById[2044] = "USER_QUIT"] = 2044;
            values[valuesById[2080] = "USER_ONBACK"] = 2080;
            values[valuesById[20010] = "DELAY_CHECK"] = 20010;
            values[valuesById[2030] = "USER_RECONNECT"] = 2030;
            values[valuesById[2005] = "SEND_JOIN_TABLE"] = 2005;
            values[valuesById[2007] = "SEND_HIT"] = 2007;
            values[valuesById[2045] = "SEND_USER_QUIT"] = 2045;
            values[valuesById[2061] = "SEND_MESSAGE"] = 2061;
            values[valuesById[2071] = "SEND_DIAMOND_CHANGE"] = 2071;
            values[valuesById[2081] = "SEND_USER_ONBACK"] = 2081;
            values[valuesById[2031] = "SEND_USER_RECONNECT"] = 2031;
            values[valuesById[2035] = "SEND_RECONNECT_QUIT"] = 2035;
            values[valuesById[10000] = "SEND_HEART_BEAT"] = 10000;
            return values;
        })();

        return Request;
    })();

    GameProto.JoinTableResponse = (function() {

        /**
         * Properties of a JoinTableResponse.
         * @memberof GameProto
         * @interface IJoinTableResponse
         * @property {Array.<GameProto.IUser>|null} [users] JoinTableResponse users
         */

        /**
         * Constructs a new JoinTableResponse.
         * @memberof GameProto
         * @classdesc Represents a JoinTableResponse.
         * @implements IJoinTableResponse
         * @constructor
         * @param {GameProto.IJoinTableResponse=} [properties] Properties to set
         */
        function JoinTableResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinTableResponse users.
         * @member {Array.<GameProto.IUser>} users
         * @memberof GameProto.JoinTableResponse
         * @instance
         */
        JoinTableResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new JoinTableResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {GameProto.IJoinTableResponse=} [properties] Properties to set
         * @returns {GameProto.JoinTableResponse} JoinTableResponse instance
         */
        JoinTableResponse.create = function create(properties) {
            return new JoinTableResponse(properties);
        };

        /**
         * Encodes the specified JoinTableResponse message. Does not implicitly {@link GameProto.JoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {GameProto.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.GameProto.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinTableResponse message, length delimited. Does not implicitly {@link GameProto.JoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {GameProto.IJoinTableResponse} message JoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.JoinTableResponse} JoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.JoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.GameProto.User.decode(reader, reader.uint32()));
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
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.JoinTableResponse} JoinTableResponse
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
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.GameProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.JoinTableResponse} JoinTableResponse
         */
        JoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.JoinTableResponse)
                return object;
            var message = new $root.GameProto.JoinTableResponse();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".GameProto.JoinTableResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".GameProto.JoinTableResponse.users: object expected");
                    message.users[i] = $root.GameProto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.JoinTableResponse
         * @static
         * @param {GameProto.JoinTableResponse} message JoinTableResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinTableResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.GameProto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this JoinTableResponse to JSON.
         * @function toJSON
         * @memberof GameProto.JoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinTableResponse;
    })();

    GameProto.SendJoinTableResponse = (function() {

        /**
         * Properties of a SendJoinTableResponse.
         * @memberof GameProto
         * @interface ISendJoinTableResponse
         * @property {GameProto.IUser|null} [user] SendJoinTableResponse user
         */

        /**
         * Constructs a new SendJoinTableResponse.
         * @memberof GameProto
         * @classdesc Represents a SendJoinTableResponse.
         * @implements ISendJoinTableResponse
         * @constructor
         * @param {GameProto.ISendJoinTableResponse=} [properties] Properties to set
         */
        function SendJoinTableResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendJoinTableResponse user.
         * @member {GameProto.IUser|null|undefined} user
         * @memberof GameProto.SendJoinTableResponse
         * @instance
         */
        SendJoinTableResponse.prototype.user = null;

        /**
         * Creates a new SendJoinTableResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {GameProto.ISendJoinTableResponse=} [properties] Properties to set
         * @returns {GameProto.SendJoinTableResponse} SendJoinTableResponse instance
         */
        SendJoinTableResponse.create = function create(properties) {
            return new SendJoinTableResponse(properties);
        };

        /**
         * Encodes the specified SendJoinTableResponse message. Does not implicitly {@link GameProto.SendJoinTableResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {GameProto.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                $root.GameProto.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SendJoinTableResponse message, length delimited. Does not implicitly {@link GameProto.SendJoinTableResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {GameProto.ISendJoinTableResponse} message SendJoinTableResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendJoinTableResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendJoinTableResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendJoinTableResponse} SendJoinTableResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendJoinTableResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendJoinTableResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = $root.GameProto.User.decode(reader, reader.uint32());
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
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendJoinTableResponse} SendJoinTableResponse
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
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendJoinTableResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.GameProto.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a SendJoinTableResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendJoinTableResponse} SendJoinTableResponse
         */
        SendJoinTableResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendJoinTableResponse)
                return object;
            var message = new $root.GameProto.SendJoinTableResponse();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".GameProto.SendJoinTableResponse.user: object expected");
                message.user = $root.GameProto.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a SendJoinTableResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendJoinTableResponse
         * @static
         * @param {GameProto.SendJoinTableResponse} message SendJoinTableResponse
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
                object.user = $root.GameProto.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this SendJoinTableResponse to JSON.
         * @function toJSON
         * @memberof GameProto.SendJoinTableResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendJoinTableResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendJoinTableResponse;
    })();

    GameProto.HitResponse = (function() {

        /**
         * Properties of a HitResponse.
         * @memberof GameProto
         * @interface IHitResponse
         * @property {boolean|null} [success] HitResponse success
         * @property {number|null} [coin] HitResponse coin
         * @property {number|null} [awardCoin] HitResponse awardCoin
         * @property {boolean|null} [crit] HitResponse crit
         */

        /**
         * Constructs a new HitResponse.
         * @memberof GameProto
         * @classdesc Represents a HitResponse.
         * @implements IHitResponse
         * @constructor
         * @param {GameProto.IHitResponse=} [properties] Properties to set
         */
        function HitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HitResponse success.
         * @member {boolean} success
         * @memberof GameProto.HitResponse
         * @instance
         */
        HitResponse.prototype.success = false;

        /**
         * HitResponse coin.
         * @member {number} coin
         * @memberof GameProto.HitResponse
         * @instance
         */
        HitResponse.prototype.coin = 0;

        /**
         * HitResponse awardCoin.
         * @member {number} awardCoin
         * @memberof GameProto.HitResponse
         * @instance
         */
        HitResponse.prototype.awardCoin = 0;

        /**
         * HitResponse crit.
         * @member {boolean} crit
         * @memberof GameProto.HitResponse
         * @instance
         */
        HitResponse.prototype.crit = false;

        /**
         * Creates a new HitResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.HitResponse
         * @static
         * @param {GameProto.IHitResponse=} [properties] Properties to set
         * @returns {GameProto.HitResponse} HitResponse instance
         */
        HitResponse.create = function create(properties) {
            return new HitResponse(properties);
        };

        /**
         * Encodes the specified HitResponse message. Does not implicitly {@link GameProto.HitResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.HitResponse
         * @static
         * @param {GameProto.IHitResponse} message HitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && message.hasOwnProperty("success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coin);
            if (message.awardCoin != null && message.hasOwnProperty("awardCoin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.awardCoin);
            if (message.crit != null && message.hasOwnProperty("crit"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.crit);
            return writer;
        };

        /**
         * Encodes the specified HitResponse message, length delimited. Does not implicitly {@link GameProto.HitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.HitResponse
         * @static
         * @param {GameProto.IHitResponse} message HitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.HitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.HitResponse} HitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.HitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                case 2:
                    message.coin = reader.int32();
                    break;
                case 3:
                    message.awardCoin = reader.int32();
                    break;
                case 4:
                    message.crit = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.HitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.HitResponse} HitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HitResponse message.
         * @function verify
         * @memberof GameProto.HitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            if (message.awardCoin != null && message.hasOwnProperty("awardCoin"))
                if (!$util.isInteger(message.awardCoin))
                    return "awardCoin: integer expected";
            if (message.crit != null && message.hasOwnProperty("crit"))
                if (typeof message.crit !== "boolean")
                    return "crit: boolean expected";
            return null;
        };

        /**
         * Creates a HitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.HitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.HitResponse} HitResponse
         */
        HitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.HitResponse)
                return object;
            var message = new $root.GameProto.HitResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.coin != null)
                message.coin = object.coin | 0;
            if (object.awardCoin != null)
                message.awardCoin = object.awardCoin | 0;
            if (object.crit != null)
                message.crit = Boolean(object.crit);
            return message;
        };

        /**
         * Creates a plain object from a HitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.HitResponse
         * @static
         * @param {GameProto.HitResponse} message HitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.coin = 0;
                object.awardCoin = 0;
                object.crit = false;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            if (message.awardCoin != null && message.hasOwnProperty("awardCoin"))
                object.awardCoin = message.awardCoin;
            if (message.crit != null && message.hasOwnProperty("crit"))
                object.crit = message.crit;
            return object;
        };

        /**
         * Converts this HitResponse to JSON.
         * @function toJSON
         * @memberof GameProto.HitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HitResponse;
    })();

    GameProto.SendHitResponse = (function() {

        /**
         * Properties of a SendHitResponse.
         * @memberof GameProto
         * @interface ISendHitResponse
         * @property {number|null} [userId] SendHitResponse userId
         * @property {number|null} [coin] SendHitResponse coin
         * @property {number|null} [awardCoin] SendHitResponse awardCoin
         */

        /**
         * Constructs a new SendHitResponse.
         * @memberof GameProto
         * @classdesc Represents a SendHitResponse.
         * @implements ISendHitResponse
         * @constructor
         * @param {GameProto.ISendHitResponse=} [properties] Properties to set
         */
        function SendHitResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendHitResponse userId.
         * @member {number} userId
         * @memberof GameProto.SendHitResponse
         * @instance
         */
        SendHitResponse.prototype.userId = 0;

        /**
         * SendHitResponse coin.
         * @member {number} coin
         * @memberof GameProto.SendHitResponse
         * @instance
         */
        SendHitResponse.prototype.coin = 0;

        /**
         * SendHitResponse awardCoin.
         * @member {number} awardCoin
         * @memberof GameProto.SendHitResponse
         * @instance
         */
        SendHitResponse.prototype.awardCoin = 0;

        /**
         * Creates a new SendHitResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {GameProto.ISendHitResponse=} [properties] Properties to set
         * @returns {GameProto.SendHitResponse} SendHitResponse instance
         */
        SendHitResponse.create = function create(properties) {
            return new SendHitResponse(properties);
        };

        /**
         * Encodes the specified SendHitResponse message. Does not implicitly {@link GameProto.SendHitResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {GameProto.ISendHitResponse} message SendHitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.coin != null && message.hasOwnProperty("coin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.coin);
            if (message.awardCoin != null && message.hasOwnProperty("awardCoin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.awardCoin);
            return writer;
        };

        /**
         * Encodes the specified SendHitResponse message, length delimited. Does not implicitly {@link GameProto.SendHitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {GameProto.ISendHitResponse} message SendHitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendHitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendHitResponse} SendHitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendHitResponse();
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
                    message.awardCoin = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendHitResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendHitResponse} SendHitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHitResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendHitResponse message.
         * @function verify
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendHitResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.coin != null && message.hasOwnProperty("coin"))
                if (!$util.isInteger(message.coin))
                    return "coin: integer expected";
            if (message.awardCoin != null && message.hasOwnProperty("awardCoin"))
                if (!$util.isInteger(message.awardCoin))
                    return "awardCoin: integer expected";
            return null;
        };

        /**
         * Creates a SendHitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendHitResponse} SendHitResponse
         */
        SendHitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendHitResponse)
                return object;
            var message = new $root.GameProto.SendHitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.coin != null)
                message.coin = object.coin | 0;
            if (object.awardCoin != null)
                message.awardCoin = object.awardCoin | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendHitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendHitResponse
         * @static
         * @param {GameProto.SendHitResponse} message SendHitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendHitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.coin = 0;
                object.awardCoin = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            if (message.awardCoin != null && message.hasOwnProperty("awardCoin"))
                object.awardCoin = message.awardCoin;
            return object;
        };

        /**
         * Converts this SendHitResponse to JSON.
         * @function toJSON
         * @memberof GameProto.SendHitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendHitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendHitResponse;
    })();

    GameProto.SendUserQuitResponse = (function() {

        /**
         * Properties of a SendUserQuitResponse.
         * @memberof GameProto
         * @interface ISendUserQuitResponse
         * @property {number|null} [userId] SendUserQuitResponse userId
         * @property {string|null} [nickname] SendUserQuitResponse nickname
         * @property {string|null} [message] SendUserQuitResponse message
         */

        /**
         * Constructs a new SendUserQuitResponse.
         * @memberof GameProto
         * @classdesc Represents a SendUserQuitResponse.
         * @implements ISendUserQuitResponse
         * @constructor
         * @param {GameProto.ISendUserQuitResponse=} [properties] Properties to set
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
         * @memberof GameProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.userId = 0;

        /**
         * SendUserQuitResponse nickname.
         * @member {string} nickname
         * @memberof GameProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.nickname = "";

        /**
         * SendUserQuitResponse message.
         * @member {string} message
         * @memberof GameProto.SendUserQuitResponse
         * @instance
         */
        SendUserQuitResponse.prototype.message = "";

        /**
         * Creates a new SendUserQuitResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {GameProto.ISendUserQuitResponse=} [properties] Properties to set
         * @returns {GameProto.SendUserQuitResponse} SendUserQuitResponse instance
         */
        SendUserQuitResponse.create = function create(properties) {
            return new SendUserQuitResponse(properties);
        };

        /**
         * Encodes the specified SendUserQuitResponse message. Does not implicitly {@link GameProto.SendUserQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {GameProto.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified SendUserQuitResponse message, length delimited. Does not implicitly {@link GameProto.SendUserQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {GameProto.ISendUserQuitResponse} message SendUserQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendUserQuitResponse} SendUserQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendUserQuitResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.int32();
                    break;
                case 2:
                    message.nickname = reader.string();
                    break;
                case 3:
                    message.message = reader.string();
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
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendUserQuitResponse} SendUserQuitResponse
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
         * @memberof GameProto.SendUserQuitResponse
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
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a SendUserQuitResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendUserQuitResponse} SendUserQuitResponse
         */
        SendUserQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendUserQuitResponse)
                return object;
            var message = new $root.GameProto.SendUserQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a SendUserQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendUserQuitResponse
         * @static
         * @param {GameProto.SendUserQuitResponse} message SendUserQuitResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserQuitResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.nickname = "";
                object.message = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this SendUserQuitResponse to JSON.
         * @function toJSON
         * @memberof GameProto.SendUserQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserQuitResponse;
    })();

    GameProto.SendDiamondChangeResponse = (function() {

        /**
         * Properties of a SendDiamondChangeResponse.
         * @memberof GameProto
         * @interface ISendDiamondChangeResponse
         * @property {number|null} [userId] SendDiamondChangeResponse userId
         * @property {number|null} [diamond] SendDiamondChangeResponse diamond
         */

        /**
         * Constructs a new SendDiamondChangeResponse.
         * @memberof GameProto
         * @classdesc Represents a SendDiamondChangeResponse.
         * @implements ISendDiamondChangeResponse
         * @constructor
         * @param {GameProto.ISendDiamondChangeResponse=} [properties] Properties to set
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
         * @memberof GameProto.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.userId = 0;

        /**
         * SendDiamondChangeResponse diamond.
         * @member {number} diamond
         * @memberof GameProto.SendDiamondChangeResponse
         * @instance
         */
        SendDiamondChangeResponse.prototype.diamond = 0;

        /**
         * Creates a new SendDiamondChangeResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {GameProto.ISendDiamondChangeResponse=} [properties] Properties to set
         * @returns {GameProto.SendDiamondChangeResponse} SendDiamondChangeResponse instance
         */
        SendDiamondChangeResponse.create = function create(properties) {
            return new SendDiamondChangeResponse(properties);
        };

        /**
         * Encodes the specified SendDiamondChangeResponse message. Does not implicitly {@link GameProto.SendDiamondChangeResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {GameProto.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
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
         * Encodes the specified SendDiamondChangeResponse message, length delimited. Does not implicitly {@link GameProto.SendDiamondChangeResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {GameProto.ISendDiamondChangeResponse} message SendDiamondChangeResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendDiamondChangeResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendDiamondChangeResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendDiamondChangeResponse} SendDiamondChangeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendDiamondChangeResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendDiamondChangeResponse();
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
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendDiamondChangeResponse} SendDiamondChangeResponse
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
         * @memberof GameProto.SendDiamondChangeResponse
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
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendDiamondChangeResponse} SendDiamondChangeResponse
         */
        SendDiamondChangeResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendDiamondChangeResponse)
                return object;
            var message = new $root.GameProto.SendDiamondChangeResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.diamond != null)
                message.diamond = object.diamond | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendDiamondChangeResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendDiamondChangeResponse
         * @static
         * @param {GameProto.SendDiamondChangeResponse} message SendDiamondChangeResponse
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
         * @memberof GameProto.SendDiamondChangeResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendDiamondChangeResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendDiamondChangeResponse;
    })();

    GameProto.SendUserOnBackResponse = (function() {

        /**
         * Properties of a SendUserOnBackResponse.
         * @memberof GameProto
         * @interface ISendUserOnBackResponse
         * @property {number|null} [userId] SendUserOnBackResponse userId
         */

        /**
         * Constructs a new SendUserOnBackResponse.
         * @memberof GameProto
         * @classdesc Represents a SendUserOnBackResponse.
         * @implements ISendUserOnBackResponse
         * @constructor
         * @param {GameProto.ISendUserOnBackResponse=} [properties] Properties to set
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
         * @memberof GameProto.SendUserOnBackResponse
         * @instance
         */
        SendUserOnBackResponse.prototype.userId = 0;

        /**
         * Creates a new SendUserOnBackResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {GameProto.ISendUserOnBackResponse=} [properties] Properties to set
         * @returns {GameProto.SendUserOnBackResponse} SendUserOnBackResponse instance
         */
        SendUserOnBackResponse.create = function create(properties) {
            return new SendUserOnBackResponse(properties);
        };

        /**
         * Encodes the specified SendUserOnBackResponse message. Does not implicitly {@link GameProto.SendUserOnBackResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {GameProto.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userId);
            return writer;
        };

        /**
         * Encodes the specified SendUserOnBackResponse message, length delimited. Does not implicitly {@link GameProto.SendUserOnBackResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {GameProto.ISendUserOnBackResponse} message SendUserOnBackResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserOnBackResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendUserOnBackResponse} SendUserOnBackResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserOnBackResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendUserOnBackResponse();
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
         * Decodes a SendUserOnBackResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendUserOnBackResponse} SendUserOnBackResponse
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
         * @memberof GameProto.SendUserOnBackResponse
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
            return null;
        };

        /**
         * Creates a SendUserOnBackResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendUserOnBackResponse} SendUserOnBackResponse
         */
        SendUserOnBackResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendUserOnBackResponse)
                return object;
            var message = new $root.GameProto.SendUserOnBackResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserOnBackResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendUserOnBackResponse
         * @static
         * @param {GameProto.SendUserOnBackResponse} message SendUserOnBackResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserOnBackResponse.toObject = function toObject(message, options) {
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
         * Converts this SendUserOnBackResponse to JSON.
         * @function toJSON
         * @memberof GameProto.SendUserOnBackResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserOnBackResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserOnBackResponse;
    })();

    GameProto.DelayCheckResponse = (function() {

        /**
         * Properties of a DelayCheckResponse.
         * @memberof GameProto
         * @interface IDelayCheckResponse
         * @property {string|null} [content] DelayCheckResponse content
         */

        /**
         * Constructs a new DelayCheckResponse.
         * @memberof GameProto
         * @classdesc Represents a DelayCheckResponse.
         * @implements IDelayCheckResponse
         * @constructor
         * @param {GameProto.IDelayCheckResponse=} [properties] Properties to set
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
         * @memberof GameProto.DelayCheckResponse
         * @instance
         */
        DelayCheckResponse.prototype.content = "";

        /**
         * Creates a new DelayCheckResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {GameProto.IDelayCheckResponse=} [properties] Properties to set
         * @returns {GameProto.DelayCheckResponse} DelayCheckResponse instance
         */
        DelayCheckResponse.create = function create(properties) {
            return new DelayCheckResponse(properties);
        };

        /**
         * Encodes the specified DelayCheckResponse message. Does not implicitly {@link GameProto.DelayCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {GameProto.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
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
         * Encodes the specified DelayCheckResponse message, length delimited. Does not implicitly {@link GameProto.DelayCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {GameProto.IDelayCheckResponse} message DelayCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DelayCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DelayCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.DelayCheckResponse} DelayCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DelayCheckResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.DelayCheckResponse();
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
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.DelayCheckResponse} DelayCheckResponse
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
         * @memberof GameProto.DelayCheckResponse
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
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.DelayCheckResponse} DelayCheckResponse
         */
        DelayCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.DelayCheckResponse)
                return object;
            var message = new $root.GameProto.DelayCheckResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a DelayCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.DelayCheckResponse
         * @static
         * @param {GameProto.DelayCheckResponse} message DelayCheckResponse
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
         * @memberof GameProto.DelayCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DelayCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DelayCheckResponse;
    })();

    GameProto.SendMessageResponse = (function() {

        /**
         * Properties of a SendMessageResponse.
         * @memberof GameProto
         * @interface ISendMessageResponse
         * @property {string|null} [content] SendMessageResponse content
         */

        /**
         * Constructs a new SendMessageResponse.
         * @memberof GameProto
         * @classdesc Represents a SendMessageResponse.
         * @implements ISendMessageResponse
         * @constructor
         * @param {GameProto.ISendMessageResponse=} [properties] Properties to set
         */
        function SendMessageResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageResponse content.
         * @member {string} content
         * @memberof GameProto.SendMessageResponse
         * @instance
         */
        SendMessageResponse.prototype.content = "";

        /**
         * Creates a new SendMessageResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {GameProto.ISendMessageResponse=} [properties] Properties to set
         * @returns {GameProto.SendMessageResponse} SendMessageResponse instance
         */
        SendMessageResponse.create = function create(properties) {
            return new SendMessageResponse(properties);
        };

        /**
         * Encodes the specified SendMessageResponse message. Does not implicitly {@link GameProto.SendMessageResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {GameProto.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified SendMessageResponse message, length delimited. Does not implicitly {@link GameProto.SendMessageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {GameProto.ISendMessageResponse} message SendMessageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendMessageResponse} SendMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendMessageResponse();
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
         * Decodes a SendMessageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendMessageResponse} SendMessageResponse
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
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a SendMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendMessageResponse} SendMessageResponse
         */
        SendMessageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendMessageResponse)
                return object;
            var message = new $root.GameProto.SendMessageResponse();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a SendMessageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendMessageResponse
         * @static
         * @param {GameProto.SendMessageResponse} message SendMessageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageResponse.toObject = function toObject(message, options) {
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
         * Converts this SendMessageResponse to JSON.
         * @function toJSON
         * @memberof GameProto.SendMessageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendMessageResponse;
    })();

    GameProto.SendUserReconnectResponse = (function() {

        /**
         * Properties of a SendUserReconnectResponse.
         * @memberof GameProto
         * @interface ISendUserReconnectResponse
         * @property {number|null} [userId] SendUserReconnectResponse userId
         * @property {number|null} [onLine] SendUserReconnectResponse onLine
         */

        /**
         * Constructs a new SendUserReconnectResponse.
         * @memberof GameProto
         * @classdesc Represents a SendUserReconnectResponse.
         * @implements ISendUserReconnectResponse
         * @constructor
         * @param {GameProto.ISendUserReconnectResponse=} [properties] Properties to set
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
         * @memberof GameProto.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.userId = 0;

        /**
         * SendUserReconnectResponse onLine.
         * @member {number} onLine
         * @memberof GameProto.SendUserReconnectResponse
         * @instance
         */
        SendUserReconnectResponse.prototype.onLine = 0;

        /**
         * Creates a new SendUserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {GameProto.ISendUserReconnectResponse=} [properties] Properties to set
         * @returns {GameProto.SendUserReconnectResponse} SendUserReconnectResponse instance
         */
        SendUserReconnectResponse.create = function create(properties) {
            return new SendUserReconnectResponse(properties);
        };

        /**
         * Encodes the specified SendUserReconnectResponse message. Does not implicitly {@link GameProto.SendUserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {GameProto.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
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
         * Encodes the specified SendUserReconnectResponse message, length delimited. Does not implicitly {@link GameProto.SendUserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {GameProto.ISendUserReconnectResponse} message SendUserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendUserReconnectResponse} SendUserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendUserReconnectResponse();
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
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendUserReconnectResponse} SendUserReconnectResponse
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
         * @memberof GameProto.SendUserReconnectResponse
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
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendUserReconnectResponse} SendUserReconnectResponse
         */
        SendUserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendUserReconnectResponse)
                return object;
            var message = new $root.GameProto.SendUserReconnectResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            if (object.onLine != null)
                message.onLine = object.onLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendUserReconnectResponse
         * @static
         * @param {GameProto.SendUserReconnectResponse} message SendUserReconnectResponse
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
         * @memberof GameProto.SendUserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserReconnectResponse;
    })();

    GameProto.SendReconnectQuitResponse = (function() {

        /**
         * Properties of a SendReconnectQuitResponse.
         * @memberof GameProto
         * @interface ISendReconnectQuitResponse
         * @property {number|null} [userId] SendReconnectQuitResponse userId
         */

        /**
         * Constructs a new SendReconnectQuitResponse.
         * @memberof GameProto
         * @classdesc Represents a SendReconnectQuitResponse.
         * @implements ISendReconnectQuitResponse
         * @constructor
         * @param {GameProto.ISendReconnectQuitResponse=} [properties] Properties to set
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
         * @memberof GameProto.SendReconnectQuitResponse
         * @instance
         */
        SendReconnectQuitResponse.prototype.userId = 0;

        /**
         * Creates a new SendReconnectQuitResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {GameProto.ISendReconnectQuitResponse=} [properties] Properties to set
         * @returns {GameProto.SendReconnectQuitResponse} SendReconnectQuitResponse instance
         */
        SendReconnectQuitResponse.create = function create(properties) {
            return new SendReconnectQuitResponse(properties);
        };

        /**
         * Encodes the specified SendReconnectQuitResponse message. Does not implicitly {@link GameProto.SendReconnectQuitResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {GameProto.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
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
         * Encodes the specified SendReconnectQuitResponse message, length delimited. Does not implicitly {@link GameProto.SendReconnectQuitResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {GameProto.ISendReconnectQuitResponse} message SendReconnectQuitResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendReconnectQuitResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendReconnectQuitResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendReconnectQuitResponse} SendReconnectQuitResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendReconnectQuitResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendReconnectQuitResponse();
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
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendReconnectQuitResponse} SendReconnectQuitResponse
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
         * @memberof GameProto.SendReconnectQuitResponse
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
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendReconnectQuitResponse} SendReconnectQuitResponse
         */
        SendReconnectQuitResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendReconnectQuitResponse)
                return object;
            var message = new $root.GameProto.SendReconnectQuitResponse();
            if (object.userId != null)
                message.userId = object.userId | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendReconnectQuitResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.SendReconnectQuitResponse
         * @static
         * @param {GameProto.SendReconnectQuitResponse} message SendReconnectQuitResponse
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
         * @memberof GameProto.SendReconnectQuitResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendReconnectQuitResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReconnectQuitResponse;
    })();

    GameProto.UserReconnectResponse = (function() {

        /**
         * Properties of a UserReconnectResponse.
         * @memberof GameProto
         * @interface IUserReconnectResponse
         * @property {Array.<GameProto.IUser>|null} [users] UserReconnectResponse users
         */

        /**
         * Constructs a new UserReconnectResponse.
         * @memberof GameProto
         * @classdesc Represents a UserReconnectResponse.
         * @implements IUserReconnectResponse
         * @constructor
         * @param {GameProto.IUserReconnectResponse=} [properties] Properties to set
         */
        function UserReconnectResponse(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserReconnectResponse users.
         * @member {Array.<GameProto.IUser>} users
         * @memberof GameProto.UserReconnectResponse
         * @instance
         */
        UserReconnectResponse.prototype.users = $util.emptyArray;

        /**
         * Creates a new UserReconnectResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {GameProto.IUserReconnectResponse=} [properties] Properties to set
         * @returns {GameProto.UserReconnectResponse} UserReconnectResponse instance
         */
        UserReconnectResponse.create = function create(properties) {
            return new UserReconnectResponse(properties);
        };

        /**
         * Encodes the specified UserReconnectResponse message. Does not implicitly {@link GameProto.UserReconnectResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {GameProto.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.GameProto.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserReconnectResponse message, length delimited. Does not implicitly {@link GameProto.UserReconnectResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {GameProto.IUserReconnectResponse} message UserReconnectResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserReconnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserReconnectResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.UserReconnectResponse} UserReconnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserReconnectResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.UserReconnectResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.GameProto.User.decode(reader, reader.uint32()));
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
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.UserReconnectResponse} UserReconnectResponse
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
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserReconnectResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.GameProto.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserReconnectResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.UserReconnectResponse} UserReconnectResponse
         */
        UserReconnectResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.UserReconnectResponse)
                return object;
            var message = new $root.GameProto.UserReconnectResponse();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".GameProto.UserReconnectResponse.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".GameProto.UserReconnectResponse.users: object expected");
                    message.users[i] = $root.GameProto.User.fromObject(object.users[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserReconnectResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.UserReconnectResponse
         * @static
         * @param {GameProto.UserReconnectResponse} message UserReconnectResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserReconnectResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.GameProto.User.toObject(message.users[j], options);
            }
            return object;
        };

        /**
         * Converts this UserReconnectResponse to JSON.
         * @function toJSON
         * @memberof GameProto.UserReconnectResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserReconnectResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserReconnectResponse;
    })();

    GameProto.SendHeartBeatResponse = (function() {

        /**
         * Properties of a SendHeartBeatResponse.
         * @memberof GameProto
         * @interface ISendHeartBeatResponse
         * @property {number|Long|null} [currentTime] SendHeartBeatResponse currentTime
         */

        /**
         * Constructs a new SendHeartBeatResponse.
         * @memberof GameProto
         * @classdesc Represents a SendHeartBeatResponse.
         * @implements ISendHeartBeatResponse
         * @constructor
         * @param {GameProto.ISendHeartBeatResponse=} [properties] Properties to set
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
         * @memberof GameProto.SendHeartBeatResponse
         * @instance
         */
        SendHeartBeatResponse.prototype.currentTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SendHeartBeatResponse instance using the specified properties.
         * @function create
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {GameProto.ISendHeartBeatResponse=} [properties] Properties to set
         * @returns {GameProto.SendHeartBeatResponse} SendHeartBeatResponse instance
         */
        SendHeartBeatResponse.create = function create(properties) {
            return new SendHeartBeatResponse(properties);
        };

        /**
         * Encodes the specified SendHeartBeatResponse message. Does not implicitly {@link GameProto.SendHeartBeatResponse.verify|verify} messages.
         * @function encode
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {GameProto.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
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
         * Encodes the specified SendHeartBeatResponse message, length delimited. Does not implicitly {@link GameProto.SendHeartBeatResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {GameProto.ISendHeartBeatResponse} message SendHeartBeatResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendHeartBeatResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendHeartBeatResponse message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.SendHeartBeatResponse} SendHeartBeatResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendHeartBeatResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.SendHeartBeatResponse();
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
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.SendHeartBeatResponse} SendHeartBeatResponse
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
         * @memberof GameProto.SendHeartBeatResponse
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
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.SendHeartBeatResponse} SendHeartBeatResponse
         */
        SendHeartBeatResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.SendHeartBeatResponse)
                return object;
            var message = new $root.GameProto.SendHeartBeatResponse();
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
         * @memberof GameProto.SendHeartBeatResponse
         * @static
         * @param {GameProto.SendHeartBeatResponse} message SendHeartBeatResponse
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
         * @memberof GameProto.SendHeartBeatResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendHeartBeatResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendHeartBeatResponse;
    })();

    GameProto.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof GameProto
         * @interface IResponse
         * @property {GameProto.Response.ErrorCode|null} [error] Response error
         * @property {number|Long|null} [serverTime] Response serverTime
         * @property {GameProto.Request.CMD|null} [cmd] Response cmd
         * @property {GameProto.IJoinTableResponse|null} [joinTableResponse] Response joinTableResponse
         * @property {GameProto.ISendJoinTableResponse|null} [sendJoinTableResponse] Response sendJoinTableResponse
         * @property {GameProto.IHitResponse|null} [hitResponse] Response hitResponse
         * @property {GameProto.ISendHitResponse|null} [sendHitResponse] Response sendHitResponse
         * @property {GameProto.ISendMessageResponse|null} [sendMessageResponse] Response sendMessageResponse
         * @property {GameProto.ISendUserQuitResponse|null} [sendUserQuitResponse] Response sendUserQuitResponse
         * @property {GameProto.ISendDiamondChangeResponse|null} [sendDiamondChangeResponse] Response sendDiamondChangeResponse
         * @property {GameProto.ISendUserOnBackResponse|null} [sendUserOnBackResponse] Response sendUserOnBackResponse
         * @property {GameProto.IDelayCheckResponse|null} [delayCheckResponse] Response delayCheckResponse
         * @property {GameProto.ISendUserReconnectResponse|null} [sendUserReconnectResponse] Response sendUserReconnectResponse
         * @property {GameProto.IUserReconnectResponse|null} [userReconnectResponse] Response userReconnectResponse
         * @property {GameProto.ISendReconnectQuitResponse|null} [sendReconnectQuitResponse] Response sendReconnectQuitResponse
         * @property {GameProto.ISendHeartBeatResponse|null} [sendHeartBeatResponse] Response sendHeartBeatResponse
         */

        /**
         * Constructs a new Response.
         * @memberof GameProto
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {GameProto.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response error.
         * @member {GameProto.Response.ErrorCode} error
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.error = 0;

        /**
         * Response serverTime.
         * @member {number|Long} serverTime
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response cmd.
         * @member {GameProto.Request.CMD} cmd
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response joinTableResponse.
         * @member {GameProto.IJoinTableResponse|null|undefined} joinTableResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.joinTableResponse = null;

        /**
         * Response sendJoinTableResponse.
         * @member {GameProto.ISendJoinTableResponse|null|undefined} sendJoinTableResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendJoinTableResponse = null;

        /**
         * Response hitResponse.
         * @member {GameProto.IHitResponse|null|undefined} hitResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.hitResponse = null;

        /**
         * Response sendHitResponse.
         * @member {GameProto.ISendHitResponse|null|undefined} sendHitResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendHitResponse = null;

        /**
         * Response sendMessageResponse.
         * @member {GameProto.ISendMessageResponse|null|undefined} sendMessageResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendMessageResponse = null;

        /**
         * Response sendUserQuitResponse.
         * @member {GameProto.ISendUserQuitResponse|null|undefined} sendUserQuitResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendUserQuitResponse = null;

        /**
         * Response sendDiamondChangeResponse.
         * @member {GameProto.ISendDiamondChangeResponse|null|undefined} sendDiamondChangeResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendDiamondChangeResponse = null;

        /**
         * Response sendUserOnBackResponse.
         * @member {GameProto.ISendUserOnBackResponse|null|undefined} sendUserOnBackResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendUserOnBackResponse = null;

        /**
         * Response delayCheckResponse.
         * @member {GameProto.IDelayCheckResponse|null|undefined} delayCheckResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.delayCheckResponse = null;

        /**
         * Response sendUserReconnectResponse.
         * @member {GameProto.ISendUserReconnectResponse|null|undefined} sendUserReconnectResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendUserReconnectResponse = null;

        /**
         * Response userReconnectResponse.
         * @member {GameProto.IUserReconnectResponse|null|undefined} userReconnectResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.userReconnectResponse = null;

        /**
         * Response sendReconnectQuitResponse.
         * @member {GameProto.ISendReconnectQuitResponse|null|undefined} sendReconnectQuitResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendReconnectQuitResponse = null;

        /**
         * Response sendHeartBeatResponse.
         * @member {GameProto.ISendHeartBeatResponse|null|undefined} sendHeartBeatResponse
         * @memberof GameProto.Response
         * @instance
         */
        Response.prototype.sendHeartBeatResponse = null;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof GameProto.Response
         * @static
         * @param {GameProto.IResponse=} [properties] Properties to set
         * @returns {GameProto.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link GameProto.Response.verify|verify} messages.
         * @function encode
         * @memberof GameProto.Response
         * @static
         * @param {GameProto.IResponse} message Response message or plain object to encode
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
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse"))
                $root.GameProto.JoinTableResponse.encode(message.joinTableResponse, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.sendJoinTableResponse != null && message.hasOwnProperty("sendJoinTableResponse"))
                $root.GameProto.SendJoinTableResponse.encode(message.sendJoinTableResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.hitResponse != null && message.hasOwnProperty("hitResponse"))
                $root.GameProto.HitResponse.encode(message.hitResponse, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.sendHitResponse != null && message.hasOwnProperty("sendHitResponse"))
                $root.GameProto.SendHitResponse.encode(message.sendHitResponse, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                $root.GameProto.SendMessageResponse.encode(message.sendMessageResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                $root.GameProto.SendUserQuitResponse.encode(message.sendUserQuitResponse, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                $root.GameProto.SendDiamondChangeResponse.encode(message.sendDiamondChangeResponse, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                $root.GameProto.SendUserOnBackResponse.encode(message.sendUserOnBackResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                $root.GameProto.DelayCheckResponse.encode(message.delayCheckResponse, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                $root.GameProto.SendUserReconnectResponse.encode(message.sendUserReconnectResponse, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                $root.GameProto.UserReconnectResponse.encode(message.userReconnectResponse, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                $root.GameProto.SendReconnectQuitResponse.encode(message.sendReconnectQuitResponse, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                $root.GameProto.SendHeartBeatResponse.encode(message.sendHeartBeatResponse, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link GameProto.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameProto.Response
         * @static
         * @param {GameProto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof GameProto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameProto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameProto.Response();
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
                case 11:
                    message.joinTableResponse = $root.GameProto.JoinTableResponse.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.sendJoinTableResponse = $root.GameProto.SendJoinTableResponse.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.hitResponse = $root.GameProto.HitResponse.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.sendHitResponse = $root.GameProto.SendHitResponse.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.sendMessageResponse = $root.GameProto.SendMessageResponse.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.sendUserQuitResponse = $root.GameProto.SendUserQuitResponse.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.sendDiamondChangeResponse = $root.GameProto.SendDiamondChangeResponse.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.sendUserOnBackResponse = $root.GameProto.SendUserOnBackResponse.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.delayCheckResponse = $root.GameProto.DelayCheckResponse.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.sendUserReconnectResponse = $root.GameProto.SendUserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.userReconnectResponse = $root.GameProto.UserReconnectResponse.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.sendReconnectQuitResponse = $root.GameProto.SendReconnectQuitResponse.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.sendHeartBeatResponse = $root.GameProto.SendHeartBeatResponse.decode(reader, reader.uint32());
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
         * @memberof GameProto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameProto.Response} Response
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
         * @memberof GameProto.Response
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
                case 10:
                case 3007:
                case 3008:
                case 3009:
                case 3013:
                case 3025:
                case 3040:
                case 3056:
                case 3201:
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
                case 2002:
                case 2006:
                case 2044:
                case 2080:
                case 20010:
                case 2030:
                case 2005:
                case 2007:
                case 2045:
                case 2061:
                case 2071:
                case 2081:
                case 2031:
                case 2035:
                case 10000:
                    break;
                }
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse")) {
                var error = $root.GameProto.JoinTableResponse.verify(message.joinTableResponse);
                if (error)
                    return "joinTableResponse." + error;
            }
            if (message.sendJoinTableResponse != null && message.hasOwnProperty("sendJoinTableResponse")) {
                var error = $root.GameProto.SendJoinTableResponse.verify(message.sendJoinTableResponse);
                if (error)
                    return "sendJoinTableResponse." + error;
            }
            if (message.hitResponse != null && message.hasOwnProperty("hitResponse")) {
                var error = $root.GameProto.HitResponse.verify(message.hitResponse);
                if (error)
                    return "hitResponse." + error;
            }
            if (message.sendHitResponse != null && message.hasOwnProperty("sendHitResponse")) {
                var error = $root.GameProto.SendHitResponse.verify(message.sendHitResponse);
                if (error)
                    return "sendHitResponse." + error;
            }
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse")) {
                var error = $root.GameProto.SendMessageResponse.verify(message.sendMessageResponse);
                if (error)
                    return "sendMessageResponse." + error;
            }
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse")) {
                var error = $root.GameProto.SendUserQuitResponse.verify(message.sendUserQuitResponse);
                if (error)
                    return "sendUserQuitResponse." + error;
            }
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse")) {
                var error = $root.GameProto.SendDiamondChangeResponse.verify(message.sendDiamondChangeResponse);
                if (error)
                    return "sendDiamondChangeResponse." + error;
            }
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse")) {
                var error = $root.GameProto.SendUserOnBackResponse.verify(message.sendUserOnBackResponse);
                if (error)
                    return "sendUserOnBackResponse." + error;
            }
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse")) {
                var error = $root.GameProto.DelayCheckResponse.verify(message.delayCheckResponse);
                if (error)
                    return "delayCheckResponse." + error;
            }
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse")) {
                var error = $root.GameProto.SendUserReconnectResponse.verify(message.sendUserReconnectResponse);
                if (error)
                    return "sendUserReconnectResponse." + error;
            }
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse")) {
                var error = $root.GameProto.UserReconnectResponse.verify(message.userReconnectResponse);
                if (error)
                    return "userReconnectResponse." + error;
            }
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse")) {
                var error = $root.GameProto.SendReconnectQuitResponse.verify(message.sendReconnectQuitResponse);
                if (error)
                    return "sendReconnectQuitResponse." + error;
            }
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse")) {
                var error = $root.GameProto.SendHeartBeatResponse.verify(message.sendHeartBeatResponse);
                if (error)
                    return "sendHeartBeatResponse." + error;
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameProto.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameProto.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.GameProto.Response)
                return object;
            var message = new $root.GameProto.Response();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "COIN_NOT_ENOUGH":
            case 10:
                message.error = 10;
                break;
            case "JOIN_TABLE_ERROR":
            case 3007:
                message.error = 3007;
                break;
            case "HIT_ERROR":
            case 3008:
                message.error = 3008;
                break;
            case "NOCHARGE_ERROR":
            case 3009:
                message.error = 3009;
                break;
            case "USER_QUIT_ERROR":
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
            case "JOIN_TABLE":
            case 2002:
                message.cmd = 2002;
                break;
            case "HIT":
            case 2006:
                message.cmd = 2006;
                break;
            case "USER_QUIT":
            case 2044:
                message.cmd = 2044;
                break;
            case "USER_ONBACK":
            case 2080:
                message.cmd = 2080;
                break;
            case "DELAY_CHECK":
            case 20010:
                message.cmd = 20010;
                break;
            case "USER_RECONNECT":
            case 2030:
                message.cmd = 2030;
                break;
            case "SEND_JOIN_TABLE":
            case 2005:
                message.cmd = 2005;
                break;
            case "SEND_HIT":
            case 2007:
                message.cmd = 2007;
                break;
            case "SEND_USER_QUIT":
            case 2045:
                message.cmd = 2045;
                break;
            case "SEND_MESSAGE":
            case 2061:
                message.cmd = 2061;
                break;
            case "SEND_DIAMOND_CHANGE":
            case 2071:
                message.cmd = 2071;
                break;
            case "SEND_USER_ONBACK":
            case 2081:
                message.cmd = 2081;
                break;
            case "SEND_USER_RECONNECT":
            case 2031:
                message.cmd = 2031;
                break;
            case "SEND_RECONNECT_QUIT":
            case 2035:
                message.cmd = 2035;
                break;
            case "SEND_HEART_BEAT":
            case 10000:
                message.cmd = 10000;
                break;
            }
            if (object.joinTableResponse != null) {
                if (typeof object.joinTableResponse !== "object")
                    throw TypeError(".GameProto.Response.joinTableResponse: object expected");
                message.joinTableResponse = $root.GameProto.JoinTableResponse.fromObject(object.joinTableResponse);
            }
            if (object.sendJoinTableResponse != null) {
                if (typeof object.sendJoinTableResponse !== "object")
                    throw TypeError(".GameProto.Response.sendJoinTableResponse: object expected");
                message.sendJoinTableResponse = $root.GameProto.SendJoinTableResponse.fromObject(object.sendJoinTableResponse);
            }
            if (object.hitResponse != null) {
                if (typeof object.hitResponse !== "object")
                    throw TypeError(".GameProto.Response.hitResponse: object expected");
                message.hitResponse = $root.GameProto.HitResponse.fromObject(object.hitResponse);
            }
            if (object.sendHitResponse != null) {
                if (typeof object.sendHitResponse !== "object")
                    throw TypeError(".GameProto.Response.sendHitResponse: object expected");
                message.sendHitResponse = $root.GameProto.SendHitResponse.fromObject(object.sendHitResponse);
            }
            if (object.sendMessageResponse != null) {
                if (typeof object.sendMessageResponse !== "object")
                    throw TypeError(".GameProto.Response.sendMessageResponse: object expected");
                message.sendMessageResponse = $root.GameProto.SendMessageResponse.fromObject(object.sendMessageResponse);
            }
            if (object.sendUserQuitResponse != null) {
                if (typeof object.sendUserQuitResponse !== "object")
                    throw TypeError(".GameProto.Response.sendUserQuitResponse: object expected");
                message.sendUserQuitResponse = $root.GameProto.SendUserQuitResponse.fromObject(object.sendUserQuitResponse);
            }
            if (object.sendDiamondChangeResponse != null) {
                if (typeof object.sendDiamondChangeResponse !== "object")
                    throw TypeError(".GameProto.Response.sendDiamondChangeResponse: object expected");
                message.sendDiamondChangeResponse = $root.GameProto.SendDiamondChangeResponse.fromObject(object.sendDiamondChangeResponse);
            }
            if (object.sendUserOnBackResponse != null) {
                if (typeof object.sendUserOnBackResponse !== "object")
                    throw TypeError(".GameProto.Response.sendUserOnBackResponse: object expected");
                message.sendUserOnBackResponse = $root.GameProto.SendUserOnBackResponse.fromObject(object.sendUserOnBackResponse);
            }
            if (object.delayCheckResponse != null) {
                if (typeof object.delayCheckResponse !== "object")
                    throw TypeError(".GameProto.Response.delayCheckResponse: object expected");
                message.delayCheckResponse = $root.GameProto.DelayCheckResponse.fromObject(object.delayCheckResponse);
            }
            if (object.sendUserReconnectResponse != null) {
                if (typeof object.sendUserReconnectResponse !== "object")
                    throw TypeError(".GameProto.Response.sendUserReconnectResponse: object expected");
                message.sendUserReconnectResponse = $root.GameProto.SendUserReconnectResponse.fromObject(object.sendUserReconnectResponse);
            }
            if (object.userReconnectResponse != null) {
                if (typeof object.userReconnectResponse !== "object")
                    throw TypeError(".GameProto.Response.userReconnectResponse: object expected");
                message.userReconnectResponse = $root.GameProto.UserReconnectResponse.fromObject(object.userReconnectResponse);
            }
            if (object.sendReconnectQuitResponse != null) {
                if (typeof object.sendReconnectQuitResponse !== "object")
                    throw TypeError(".GameProto.Response.sendReconnectQuitResponse: object expected");
                message.sendReconnectQuitResponse = $root.GameProto.SendReconnectQuitResponse.fromObject(object.sendReconnectQuitResponse);
            }
            if (object.sendHeartBeatResponse != null) {
                if (typeof object.sendHeartBeatResponse !== "object")
                    throw TypeError(".GameProto.Response.sendHeartBeatResponse: object expected");
                message.sendHeartBeatResponse = $root.GameProto.SendHeartBeatResponse.fromObject(object.sendHeartBeatResponse);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameProto.Response
         * @static
         * @param {GameProto.Response} message Response
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
                object.joinTableResponse = null;
                object.sendJoinTableResponse = null;
                object.hitResponse = null;
                object.sendHitResponse = null;
                object.sendMessageResponse = null;
                object.sendUserQuitResponse = null;
                object.sendDiamondChangeResponse = null;
                object.sendUserOnBackResponse = null;
                object.delayCheckResponse = null;
                object.sendUserReconnectResponse = null;
                object.userReconnectResponse = null;
                object.sendReconnectQuitResponse = null;
                object.sendHeartBeatResponse = null;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.GameProto.Response.ErrorCode[message.error] : message.error;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (typeof message.serverTime === "number")
                    object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
                else
                    object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber() : message.serverTime;
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = options.enums === String ? $root.GameProto.Request.CMD[message.cmd] : message.cmd;
            if (message.joinTableResponse != null && message.hasOwnProperty("joinTableResponse"))
                object.joinTableResponse = $root.GameProto.JoinTableResponse.toObject(message.joinTableResponse, options);
            if (message.sendJoinTableResponse != null && message.hasOwnProperty("sendJoinTableResponse"))
                object.sendJoinTableResponse = $root.GameProto.SendJoinTableResponse.toObject(message.sendJoinTableResponse, options);
            if (message.hitResponse != null && message.hasOwnProperty("hitResponse"))
                object.hitResponse = $root.GameProto.HitResponse.toObject(message.hitResponse, options);
            if (message.sendHitResponse != null && message.hasOwnProperty("sendHitResponse"))
                object.sendHitResponse = $root.GameProto.SendHitResponse.toObject(message.sendHitResponse, options);
            if (message.sendMessageResponse != null && message.hasOwnProperty("sendMessageResponse"))
                object.sendMessageResponse = $root.GameProto.SendMessageResponse.toObject(message.sendMessageResponse, options);
            if (message.sendUserQuitResponse != null && message.hasOwnProperty("sendUserQuitResponse"))
                object.sendUserQuitResponse = $root.GameProto.SendUserQuitResponse.toObject(message.sendUserQuitResponse, options);
            if (message.sendDiamondChangeResponse != null && message.hasOwnProperty("sendDiamondChangeResponse"))
                object.sendDiamondChangeResponse = $root.GameProto.SendDiamondChangeResponse.toObject(message.sendDiamondChangeResponse, options);
            if (message.sendUserOnBackResponse != null && message.hasOwnProperty("sendUserOnBackResponse"))
                object.sendUserOnBackResponse = $root.GameProto.SendUserOnBackResponse.toObject(message.sendUserOnBackResponse, options);
            if (message.delayCheckResponse != null && message.hasOwnProperty("delayCheckResponse"))
                object.delayCheckResponse = $root.GameProto.DelayCheckResponse.toObject(message.delayCheckResponse, options);
            if (message.sendUserReconnectResponse != null && message.hasOwnProperty("sendUserReconnectResponse"))
                object.sendUserReconnectResponse = $root.GameProto.SendUserReconnectResponse.toObject(message.sendUserReconnectResponse, options);
            if (message.userReconnectResponse != null && message.hasOwnProperty("userReconnectResponse"))
                object.userReconnectResponse = $root.GameProto.UserReconnectResponse.toObject(message.userReconnectResponse, options);
            if (message.sendReconnectQuitResponse != null && message.hasOwnProperty("sendReconnectQuitResponse"))
                object.sendReconnectQuitResponse = $root.GameProto.SendReconnectQuitResponse.toObject(message.sendReconnectQuitResponse, options);
            if (message.sendHeartBeatResponse != null && message.hasOwnProperty("sendHeartBeatResponse"))
                object.sendHeartBeatResponse = $root.GameProto.SendHeartBeatResponse.toObject(message.sendHeartBeatResponse, options);
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof GameProto.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * ErrorCode enum.
         * @name GameProto.Response.ErrorCode
         * @enum {string}
         * @property {number} NO_ERROR=0 NO_ERROR value
         * @property {number} COIN_NOT_ENOUGH=10 COIN_NOT_ENOUGH value
         * @property {number} JOIN_TABLE_ERROR=3007 JOIN_TABLE_ERROR value
         * @property {number} HIT_ERROR=3008 HIT_ERROR value
         * @property {number} NOCHARGE_ERROR=3009 NOCHARGE_ERROR value
         * @property {number} USER_QUIT_ERROR=3013 USER_QUIT_ERROR value
         * @property {number} RECONNET_ERROR=3025 RECONNET_ERROR value
         * @property {number} SEND_MESSAGE_ERROR=3040 SEND_MESSAGE_ERROR value
         * @property {number} USER_ONBACK_ERROR=3056 USER_ONBACK_ERROR value
         * @property {number} DELAY_CHECK_ERROR=3201 DELAY_CHECK_ERROR value
         */
        Response.ErrorCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NO_ERROR"] = 0;
            values[valuesById[10] = "COIN_NOT_ENOUGH"] = 10;
            values[valuesById[3007] = "JOIN_TABLE_ERROR"] = 3007;
            values[valuesById[3008] = "HIT_ERROR"] = 3008;
            values[valuesById[3009] = "NOCHARGE_ERROR"] = 3009;
            values[valuesById[3013] = "USER_QUIT_ERROR"] = 3013;
            values[valuesById[3025] = "RECONNET_ERROR"] = 3025;
            values[valuesById[3040] = "SEND_MESSAGE_ERROR"] = 3040;
            values[valuesById[3056] = "USER_ONBACK_ERROR"] = 3056;
            values[valuesById[3201] = "DELAY_CHECK_ERROR"] = 3201;
            return values;
        })();

        return Response;
    })();

    return GameProto;
})();

module.exports = $root;
