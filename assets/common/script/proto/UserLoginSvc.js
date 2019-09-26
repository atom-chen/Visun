/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.login = (function() {

    /**
     * Namespace login.
     * @exports login
     * @namespace
     */
    var login = {};

    /**
     * CMD enum.
     * @name login.CMD
     * @enum {string}
     * @property {number} Msg_HeartReq=5000 Msg_HeartReq value
     * @property {number} Msg_HeartResp=5001 Msg_HeartResp value
     * @property {number} Msg_SysError=5002 Msg_SysError value
     * @property {number} CheckTokenReq=5003 CheckTokenReq value
     * @property {number} MovedGateNot=5004 MovedGateNot value
     * @property {number} CheckTokenRes=5005 CheckTokenRes value
     * @property {number} Msg_GsPackage=10000 Msg_GsPackage value
     * @property {number} Msg_UserLogInResp=10001 Msg_UserLogInResp value
     */
    login.CMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[5000] = "Msg_HeartReq"] = 5000;
        values[valuesById[5001] = "Msg_HeartResp"] = 5001;
        values[valuesById[5002] = "Msg_SysError"] = 5002;
        values[valuesById[5003] = "CheckTokenReq"] = 5003;
        values[valuesById[5004] = "MovedGateNot"] = 5004;
        values[valuesById[5005] = "CheckTokenRes"] = 5005;
        values[valuesById[10000] = "Msg_GsPackage"] = 10000;
        values[valuesById[10001] = "Msg_UserLogInResp"] = 10001;
        return values;
    })();

    login.HeartReq = (function() {

        /**
         * Properties of a HeartReq.
         * @memberof login
         * @interface IHeartReq
         */

        /**
         * Constructs a new HeartReq.
         * @memberof login
         * @classdesc Represents a HeartReq.
         * @implements IHeartReq
         * @constructor
         * @param {login.IHeartReq=} [properties] Properties to set
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
         * @memberof login.HeartReq
         * @static
         * @param {login.IHeartReq=} [properties] Properties to set
         * @returns {login.HeartReq} HeartReq instance
         */
        HeartReq.create = function create(properties) {
            return new HeartReq(properties);
        };

        /**
         * Encodes the specified HeartReq message. Does not implicitly {@link login.HeartReq.verify|verify} messages.
         * @function encode
         * @memberof login.HeartReq
         * @static
         * @param {login.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartReq message, length delimited. Does not implicitly {@link login.HeartReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.HeartReq
         * @static
         * @param {login.IHeartReq} message HeartReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartReq message from the specified reader or buffer.
         * @function decode
         * @memberof login.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.HeartReq} HeartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.HeartReq();
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
         * @memberof login.HeartReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.HeartReq} HeartReq
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
         * @memberof login.HeartReq
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
         * @memberof login.HeartReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.HeartReq} HeartReq
         */
        HeartReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.HeartReq)
                return object;
            return new $root.login.HeartReq();
        };

        /**
         * Creates a plain object from a HeartReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.HeartReq
         * @static
         * @param {login.HeartReq} message HeartReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartReq to JSON.
         * @function toJSON
         * @memberof login.HeartReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartReq;
    })();

    login.HeartResp = (function() {

        /**
         * Properties of a HeartResp.
         * @memberof login
         * @interface IHeartResp
         * @property {number|Long|null} [serverTime] HeartResp serverTime
         */

        /**
         * Constructs a new HeartResp.
         * @memberof login
         * @classdesc Represents a HeartResp.
         * @implements IHeartResp
         * @constructor
         * @param {login.IHeartResp=} [properties] Properties to set
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
         * @memberof login.HeartResp
         * @instance
         */
        HeartResp.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HeartResp instance using the specified properties.
         * @function create
         * @memberof login.HeartResp
         * @static
         * @param {login.IHeartResp=} [properties] Properties to set
         * @returns {login.HeartResp} HeartResp instance
         */
        HeartResp.create = function create(properties) {
            return new HeartResp(properties);
        };

        /**
         * Encodes the specified HeartResp message. Does not implicitly {@link login.HeartResp.verify|verify} messages.
         * @function encode
         * @memberof login.HeartResp
         * @static
         * @param {login.IHeartResp} message HeartResp message or plain object to encode
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
         * Encodes the specified HeartResp message, length delimited. Does not implicitly {@link login.HeartResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.HeartResp
         * @static
         * @param {login.IHeartResp} message HeartResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartResp message from the specified reader or buffer.
         * @function decode
         * @memberof login.HeartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.HeartResp} HeartResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.HeartResp();
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
         * @memberof login.HeartResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.HeartResp} HeartResp
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
         * @memberof login.HeartResp
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
         * @memberof login.HeartResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.HeartResp} HeartResp
         */
        HeartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.HeartResp)
                return object;
            var message = new $root.login.HeartResp();
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
         * @memberof login.HeartResp
         * @static
         * @param {login.HeartResp} message HeartResp
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
         * @memberof login.HeartResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartResp;
    })();

    login.CheckTokenRequest = (function() {

        /**
         * Properties of a CheckTokenRequest.
         * @memberof login
         * @interface ICheckTokenRequest
         * @property {number|Long|null} [uid] CheckTokenRequest uid
         * @property {string|null} [token] CheckTokenRequest token
         */

        /**
         * Constructs a new CheckTokenRequest.
         * @memberof login
         * @classdesc Represents a CheckTokenRequest.
         * @implements ICheckTokenRequest
         * @constructor
         * @param {login.ICheckTokenRequest=} [properties] Properties to set
         */
        function CheckTokenRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CheckTokenRequest uid.
         * @member {number|Long} uid
         * @memberof login.CheckTokenRequest
         * @instance
         */
        CheckTokenRequest.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CheckTokenRequest token.
         * @member {string} token
         * @memberof login.CheckTokenRequest
         * @instance
         */
        CheckTokenRequest.prototype.token = "";

        /**
         * Creates a new CheckTokenRequest instance using the specified properties.
         * @function create
         * @memberof login.CheckTokenRequest
         * @static
         * @param {login.ICheckTokenRequest=} [properties] Properties to set
         * @returns {login.CheckTokenRequest} CheckTokenRequest instance
         */
        CheckTokenRequest.create = function create(properties) {
            return new CheckTokenRequest(properties);
        };

        /**
         * Encodes the specified CheckTokenRequest message. Does not implicitly {@link login.CheckTokenRequest.verify|verify} messages.
         * @function encode
         * @memberof login.CheckTokenRequest
         * @static
         * @param {login.ICheckTokenRequest} message CheckTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckTokenRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified CheckTokenRequest message, length delimited. Does not implicitly {@link login.CheckTokenRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.CheckTokenRequest
         * @static
         * @param {login.ICheckTokenRequest} message CheckTokenRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckTokenRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckTokenRequest message from the specified reader or buffer.
         * @function decode
         * @memberof login.CheckTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.CheckTokenRequest} CheckTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckTokenRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.CheckTokenRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.int64();
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CheckTokenRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.CheckTokenRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.CheckTokenRequest} CheckTokenRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckTokenRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckTokenRequest message.
         * @function verify
         * @memberof login.CheckTokenRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckTokenRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a CheckTokenRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.CheckTokenRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.CheckTokenRequest} CheckTokenRequest
         */
        CheckTokenRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.login.CheckTokenRequest)
                return object;
            var message = new $root.login.CheckTokenRequest();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a CheckTokenRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.CheckTokenRequest
         * @static
         * @param {login.CheckTokenRequest} message CheckTokenRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckTokenRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.token = "";
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this CheckTokenRequest to JSON.
         * @function toJSON
         * @memberof login.CheckTokenRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckTokenRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckTokenRequest;
    })();

    login.CheckTokenResponse = (function() {

        /**
         * Properties of a CheckTokenResponse.
         * @memberof login
         * @interface ICheckTokenResponse
         */

        /**
         * Constructs a new CheckTokenResponse.
         * @memberof login
         * @classdesc Represents a CheckTokenResponse.
         * @implements ICheckTokenResponse
         * @constructor
         * @param {login.ICheckTokenResponse=} [properties] Properties to set
         */
        function CheckTokenResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CheckTokenResponse instance using the specified properties.
         * @function create
         * @memberof login.CheckTokenResponse
         * @static
         * @param {login.ICheckTokenResponse=} [properties] Properties to set
         * @returns {login.CheckTokenResponse} CheckTokenResponse instance
         */
        CheckTokenResponse.create = function create(properties) {
            return new CheckTokenResponse(properties);
        };

        /**
         * Encodes the specified CheckTokenResponse message. Does not implicitly {@link login.CheckTokenResponse.verify|verify} messages.
         * @function encode
         * @memberof login.CheckTokenResponse
         * @static
         * @param {login.ICheckTokenResponse} message CheckTokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckTokenResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CheckTokenResponse message, length delimited. Does not implicitly {@link login.CheckTokenResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.CheckTokenResponse
         * @static
         * @param {login.ICheckTokenResponse} message CheckTokenResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckTokenResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CheckTokenResponse message from the specified reader or buffer.
         * @function decode
         * @memberof login.CheckTokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.CheckTokenResponse} CheckTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckTokenResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.CheckTokenResponse();
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
         * Decodes a CheckTokenResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.CheckTokenResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.CheckTokenResponse} CheckTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckTokenResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CheckTokenResponse message.
         * @function verify
         * @memberof login.CheckTokenResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckTokenResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CheckTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.CheckTokenResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.CheckTokenResponse} CheckTokenResponse
         */
        CheckTokenResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.login.CheckTokenResponse)
                return object;
            return new $root.login.CheckTokenResponse();
        };

        /**
         * Creates a plain object from a CheckTokenResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.CheckTokenResponse
         * @static
         * @param {login.CheckTokenResponse} message CheckTokenResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckTokenResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CheckTokenResponse to JSON.
         * @function toJSON
         * @memberof login.CheckTokenResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckTokenResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CheckTokenResponse;
    })();

    login.MovedGateNotice = (function() {

        /**
         * Properties of a MovedGateNotice.
         * @memberof login
         * @interface IMovedGateNotice
         * @property {string|null} [wsUri] MovedGateNotice wsUri
         */

        /**
         * Constructs a new MovedGateNotice.
         * @memberof login
         * @classdesc Represents a MovedGateNotice.
         * @implements IMovedGateNotice
         * @constructor
         * @param {login.IMovedGateNotice=} [properties] Properties to set
         */
        function MovedGateNotice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MovedGateNotice wsUri.
         * @member {string} wsUri
         * @memberof login.MovedGateNotice
         * @instance
         */
        MovedGateNotice.prototype.wsUri = "";

        /**
         * Creates a new MovedGateNotice instance using the specified properties.
         * @function create
         * @memberof login.MovedGateNotice
         * @static
         * @param {login.IMovedGateNotice=} [properties] Properties to set
         * @returns {login.MovedGateNotice} MovedGateNotice instance
         */
        MovedGateNotice.create = function create(properties) {
            return new MovedGateNotice(properties);
        };

        /**
         * Encodes the specified MovedGateNotice message. Does not implicitly {@link login.MovedGateNotice.verify|verify} messages.
         * @function encode
         * @memberof login.MovedGateNotice
         * @static
         * @param {login.IMovedGateNotice} message MovedGateNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MovedGateNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wsUri != null && message.hasOwnProperty("wsUri"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.wsUri);
            return writer;
        };

        /**
         * Encodes the specified MovedGateNotice message, length delimited. Does not implicitly {@link login.MovedGateNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.MovedGateNotice
         * @static
         * @param {login.IMovedGateNotice} message MovedGateNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MovedGateNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MovedGateNotice message from the specified reader or buffer.
         * @function decode
         * @memberof login.MovedGateNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.MovedGateNotice} MovedGateNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MovedGateNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.MovedGateNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wsUri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MovedGateNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.MovedGateNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.MovedGateNotice} MovedGateNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MovedGateNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MovedGateNotice message.
         * @function verify
         * @memberof login.MovedGateNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MovedGateNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wsUri != null && message.hasOwnProperty("wsUri"))
                if (!$util.isString(message.wsUri))
                    return "wsUri: string expected";
            return null;
        };

        /**
         * Creates a MovedGateNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.MovedGateNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.MovedGateNotice} MovedGateNotice
         */
        MovedGateNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.login.MovedGateNotice)
                return object;
            var message = new $root.login.MovedGateNotice();
            if (object.wsUri != null)
                message.wsUri = String(object.wsUri);
            return message;
        };

        /**
         * Creates a plain object from a MovedGateNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.MovedGateNotice
         * @static
         * @param {login.MovedGateNotice} message MovedGateNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MovedGateNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.wsUri = "";
            if (message.wsUri != null && message.hasOwnProperty("wsUri"))
                object.wsUri = message.wsUri;
            return object;
        };

        /**
         * Converts this MovedGateNotice to JSON.
         * @function toJSON
         * @memberof login.MovedGateNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MovedGateNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MovedGateNotice;
    })();

    login.GsPackage = (function() {

        /**
         * Properties of a GsPackage.
         * @memberof login
         * @interface IGsPackage
         * @property {Uint8Array|null} [enBody] GsPackage enBody
         * @property {string|null} [sign] GsPackage sign
         */

        /**
         * Constructs a new GsPackage.
         * @memberof login
         * @classdesc Represents a GsPackage.
         * @implements IGsPackage
         * @constructor
         * @param {login.IGsPackage=} [properties] Properties to set
         */
        function GsPackage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GsPackage enBody.
         * @member {Uint8Array} enBody
         * @memberof login.GsPackage
         * @instance
         */
        GsPackage.prototype.enBody = $util.newBuffer([]);

        /**
         * GsPackage sign.
         * @member {string} sign
         * @memberof login.GsPackage
         * @instance
         */
        GsPackage.prototype.sign = "";

        /**
         * Creates a new GsPackage instance using the specified properties.
         * @function create
         * @memberof login.GsPackage
         * @static
         * @param {login.IGsPackage=} [properties] Properties to set
         * @returns {login.GsPackage} GsPackage instance
         */
        GsPackage.create = function create(properties) {
            return new GsPackage(properties);
        };

        /**
         * Encodes the specified GsPackage message. Does not implicitly {@link login.GsPackage.verify|verify} messages.
         * @function encode
         * @memberof login.GsPackage
         * @static
         * @param {login.IGsPackage} message GsPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GsPackage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enBody != null && message.hasOwnProperty("enBody"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.enBody);
            if (message.sign != null && message.hasOwnProperty("sign"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sign);
            return writer;
        };

        /**
         * Encodes the specified GsPackage message, length delimited. Does not implicitly {@link login.GsPackage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.GsPackage
         * @static
         * @param {login.IGsPackage} message GsPackage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GsPackage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GsPackage message from the specified reader or buffer.
         * @function decode
         * @memberof login.GsPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.GsPackage} GsPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GsPackage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GsPackage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.enBody = reader.bytes();
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
         * Decodes a GsPackage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.GsPackage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.GsPackage} GsPackage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GsPackage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GsPackage message.
         * @function verify
         * @memberof login.GsPackage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GsPackage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.enBody != null && message.hasOwnProperty("enBody"))
                if (!(message.enBody && typeof message.enBody.length === "number" || $util.isString(message.enBody)))
                    return "enBody: buffer expected";
            if (message.sign != null && message.hasOwnProperty("sign"))
                if (!$util.isString(message.sign))
                    return "sign: string expected";
            return null;
        };

        /**
         * Creates a GsPackage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.GsPackage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.GsPackage} GsPackage
         */
        GsPackage.fromObject = function fromObject(object) {
            if (object instanceof $root.login.GsPackage)
                return object;
            var message = new $root.login.GsPackage();
            if (object.enBody != null)
                if (typeof object.enBody === "string")
                    $util.base64.decode(object.enBody, message.enBody = $util.newBuffer($util.base64.length(object.enBody)), 0);
                else if (object.enBody.length)
                    message.enBody = object.enBody;
            if (object.sign != null)
                message.sign = String(object.sign);
            return message;
        };

        /**
         * Creates a plain object from a GsPackage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.GsPackage
         * @static
         * @param {login.GsPackage} message GsPackage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GsPackage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.enBody = "";
                else {
                    object.enBody = [];
                    if (options.bytes !== Array)
                        object.enBody = $util.newBuffer(object.enBody);
                }
                object.sign = "";
            }
            if (message.enBody != null && message.hasOwnProperty("enBody"))
                object.enBody = options.bytes === String ? $util.base64.encode(message.enBody, 0, message.enBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.enBody) : message.enBody;
            if (message.sign != null && message.hasOwnProperty("sign"))
                object.sign = message.sign;
            return object;
        };

        /**
         * Converts this GsPackage to JSON.
         * @function toJSON
         * @memberof login.GsPackage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GsPackage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GsPackage;
    })();

    login.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof login
         * @interface IUserInfo
         * @property {number|Long|null} [memberId] UserInfo memberId
         * @property {string|null} [memberAccount] UserInfo memberAccount
         * @property {string|null} [memberName] UserInfo memberName
         * @property {number|Long|null} [merchantId] UserInfo merchantId
         * @property {number|Long|null} [merchantMemberId] UserInfo merchantMemberId
         * @property {string|null} [merchantName] UserInfo merchantName
         * @property {string|null} [merchantAccount] UserInfo merchantAccount
         * @property {number|null} [memberStatus] UserInfo memberStatus
         * @property {string|null} [identity] UserInfo identity
         * @property {string|null} [memberAvatar] UserInfo memberAvatar
         * @property {string|null} [token] UserInfo token
         * @property {string|null} [money] UserInfo money
         */

        /**
         * Constructs a new UserInfo.
         * @memberof login
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {login.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo memberId.
         * @member {number|Long} memberId
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.memberId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo memberAccount.
         * @member {string} memberAccount
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.memberAccount = "";

        /**
         * UserInfo memberName.
         * @member {string} memberName
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.memberName = "";

        /**
         * UserInfo merchantId.
         * @member {number|Long} merchantId
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.merchantId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo merchantMemberId.
         * @member {number|Long} merchantMemberId
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.merchantMemberId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserInfo merchantName.
         * @member {string} merchantName
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.merchantName = "";

        /**
         * UserInfo merchantAccount.
         * @member {string} merchantAccount
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.merchantAccount = "";

        /**
         * UserInfo memberStatus.
         * @member {number} memberStatus
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.memberStatus = 0;

        /**
         * UserInfo identity.
         * @member {string} identity
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.identity = "";

        /**
         * UserInfo memberAvatar.
         * @member {string} memberAvatar
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.memberAvatar = "";

        /**
         * UserInfo token.
         * @member {string} token
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.token = "";

        /**
         * UserInfo money.
         * @member {string} money
         * @memberof login.UserInfo
         * @instance
         */
        UserInfo.prototype.money = "";

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof login.UserInfo
         * @static
         * @param {login.IUserInfo=} [properties] Properties to set
         * @returns {login.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof login.UserInfo
         * @static
         * @param {login.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.memberId);
            if (message.memberAccount != null && message.hasOwnProperty("memberAccount"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.memberAccount);
            if (message.memberName != null && message.hasOwnProperty("memberName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.memberName);
            if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.merchantId);
            if (message.merchantMemberId != null && message.hasOwnProperty("merchantMemberId"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.merchantMemberId);
            if (message.merchantName != null && message.hasOwnProperty("merchantName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.merchantName);
            if (message.merchantAccount != null && message.hasOwnProperty("merchantAccount"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.merchantAccount);
            if (message.memberStatus != null && message.hasOwnProperty("memberStatus"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.memberStatus);
            if (message.identity != null && message.hasOwnProperty("identity"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.identity);
            if (message.memberAvatar != null && message.hasOwnProperty("memberAvatar"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.memberAvatar);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.token);
            if (message.money != null && message.hasOwnProperty("money"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.money);
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link login.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.UserInfo
         * @static
         * @param {login.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof login.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.memberId = reader.int64();
                    break;
                case 2:
                    message.memberAccount = reader.string();
                    break;
                case 3:
                    message.memberName = reader.string();
                    break;
                case 4:
                    message.merchantId = reader.int64();
                    break;
                case 5:
                    message.merchantMemberId = reader.int64();
                    break;
                case 6:
                    message.merchantName = reader.string();
                    break;
                case 7:
                    message.merchantAccount = reader.string();
                    break;
                case 8:
                    message.memberStatus = reader.int32();
                    break;
                case 9:
                    message.identity = reader.string();
                    break;
                case 10:
                    message.memberAvatar = reader.string();
                    break;
                case 11:
                    message.token = reader.string();
                    break;
                case 12:
                    message.money = reader.string();
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
         * @memberof login.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.UserInfo} UserInfo
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
         * @memberof login.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (!$util.isInteger(message.memberId) && !(message.memberId && $util.isInteger(message.memberId.low) && $util.isInteger(message.memberId.high)))
                    return "memberId: integer|Long expected";
            if (message.memberAccount != null && message.hasOwnProperty("memberAccount"))
                if (!$util.isString(message.memberAccount))
                    return "memberAccount: string expected";
            if (message.memberName != null && message.hasOwnProperty("memberName"))
                if (!$util.isString(message.memberName))
                    return "memberName: string expected";
            if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                if (!$util.isInteger(message.merchantId) && !(message.merchantId && $util.isInteger(message.merchantId.low) && $util.isInteger(message.merchantId.high)))
                    return "merchantId: integer|Long expected";
            if (message.merchantMemberId != null && message.hasOwnProperty("merchantMemberId"))
                if (!$util.isInteger(message.merchantMemberId) && !(message.merchantMemberId && $util.isInteger(message.merchantMemberId.low) && $util.isInteger(message.merchantMemberId.high)))
                    return "merchantMemberId: integer|Long expected";
            if (message.merchantName != null && message.hasOwnProperty("merchantName"))
                if (!$util.isString(message.merchantName))
                    return "merchantName: string expected";
            if (message.merchantAccount != null && message.hasOwnProperty("merchantAccount"))
                if (!$util.isString(message.merchantAccount))
                    return "merchantAccount: string expected";
            if (message.memberStatus != null && message.hasOwnProperty("memberStatus"))
                if (!$util.isInteger(message.memberStatus))
                    return "memberStatus: integer expected";
            if (message.identity != null && message.hasOwnProperty("identity"))
                if (!$util.isString(message.identity))
                    return "identity: string expected";
            if (message.memberAvatar != null && message.hasOwnProperty("memberAvatar"))
                if (!$util.isString(message.memberAvatar))
                    return "memberAvatar: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isString(message.money))
                    return "money: string expected";
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.login.UserInfo)
                return object;
            var message = new $root.login.UserInfo();
            if (object.memberId != null)
                if ($util.Long)
                    (message.memberId = $util.Long.fromValue(object.memberId)).unsigned = false;
                else if (typeof object.memberId === "string")
                    message.memberId = parseInt(object.memberId, 10);
                else if (typeof object.memberId === "number")
                    message.memberId = object.memberId;
                else if (typeof object.memberId === "object")
                    message.memberId = new $util.LongBits(object.memberId.low >>> 0, object.memberId.high >>> 0).toNumber();
            if (object.memberAccount != null)
                message.memberAccount = String(object.memberAccount);
            if (object.memberName != null)
                message.memberName = String(object.memberName);
            if (object.merchantId != null)
                if ($util.Long)
                    (message.merchantId = $util.Long.fromValue(object.merchantId)).unsigned = false;
                else if (typeof object.merchantId === "string")
                    message.merchantId = parseInt(object.merchantId, 10);
                else if (typeof object.merchantId === "number")
                    message.merchantId = object.merchantId;
                else if (typeof object.merchantId === "object")
                    message.merchantId = new $util.LongBits(object.merchantId.low >>> 0, object.merchantId.high >>> 0).toNumber();
            if (object.merchantMemberId != null)
                if ($util.Long)
                    (message.merchantMemberId = $util.Long.fromValue(object.merchantMemberId)).unsigned = false;
                else if (typeof object.merchantMemberId === "string")
                    message.merchantMemberId = parseInt(object.merchantMemberId, 10);
                else if (typeof object.merchantMemberId === "number")
                    message.merchantMemberId = object.merchantMemberId;
                else if (typeof object.merchantMemberId === "object")
                    message.merchantMemberId = new $util.LongBits(object.merchantMemberId.low >>> 0, object.merchantMemberId.high >>> 0).toNumber();
            if (object.merchantName != null)
                message.merchantName = String(object.merchantName);
            if (object.merchantAccount != null)
                message.merchantAccount = String(object.merchantAccount);
            if (object.memberStatus != null)
                message.memberStatus = object.memberStatus | 0;
            if (object.identity != null)
                message.identity = String(object.identity);
            if (object.memberAvatar != null)
                message.memberAvatar = String(object.memberAvatar);
            if (object.token != null)
                message.token = String(object.token);
            if (object.money != null)
                message.money = String(object.money);
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.UserInfo
         * @static
         * @param {login.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.memberId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.memberId = options.longs === String ? "0" : 0;
                object.memberAccount = "";
                object.memberName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.merchantId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.merchantId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.merchantMemberId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.merchantMemberId = options.longs === String ? "0" : 0;
                object.merchantName = "";
                object.merchantAccount = "";
                object.memberStatus = 0;
                object.identity = "";
                object.memberAvatar = "";
                object.token = "";
                object.money = "";
            }
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (typeof message.memberId === "number")
                    object.memberId = options.longs === String ? String(message.memberId) : message.memberId;
                else
                    object.memberId = options.longs === String ? $util.Long.prototype.toString.call(message.memberId) : options.longs === Number ? new $util.LongBits(message.memberId.low >>> 0, message.memberId.high >>> 0).toNumber() : message.memberId;
            if (message.memberAccount != null && message.hasOwnProperty("memberAccount"))
                object.memberAccount = message.memberAccount;
            if (message.memberName != null && message.hasOwnProperty("memberName"))
                object.memberName = message.memberName;
            if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                if (typeof message.merchantId === "number")
                    object.merchantId = options.longs === String ? String(message.merchantId) : message.merchantId;
                else
                    object.merchantId = options.longs === String ? $util.Long.prototype.toString.call(message.merchantId) : options.longs === Number ? new $util.LongBits(message.merchantId.low >>> 0, message.merchantId.high >>> 0).toNumber() : message.merchantId;
            if (message.merchantMemberId != null && message.hasOwnProperty("merchantMemberId"))
                if (typeof message.merchantMemberId === "number")
                    object.merchantMemberId = options.longs === String ? String(message.merchantMemberId) : message.merchantMemberId;
                else
                    object.merchantMemberId = options.longs === String ? $util.Long.prototype.toString.call(message.merchantMemberId) : options.longs === Number ? new $util.LongBits(message.merchantMemberId.low >>> 0, message.merchantMemberId.high >>> 0).toNumber() : message.merchantMemberId;
            if (message.merchantName != null && message.hasOwnProperty("merchantName"))
                object.merchantName = message.merchantName;
            if (message.merchantAccount != null && message.hasOwnProperty("merchantAccount"))
                object.merchantAccount = message.merchantAccount;
            if (message.memberStatus != null && message.hasOwnProperty("memberStatus"))
                object.memberStatus = message.memberStatus;
            if (message.identity != null && message.hasOwnProperty("identity"))
                object.identity = message.identity;
            if (message.memberAvatar != null && message.hasOwnProperty("memberAvatar"))
                object.memberAvatar = message.memberAvatar;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof login.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    login.UserLogInReq = (function() {

        /**
         * Properties of a UserLogInReq.
         * @memberof login
         * @interface IUserLogInReq
         * @property {string|null} [address] UserLogInReq address
         * @property {number|null} [logType] UserLogInReq logType
         * @property {number|Long|null} [memberId] UserLogInReq memberId
         * @property {number|null} [memberLoginDevice] UserLogInReq memberLoginDevice
         * @property {string|null} [memberLoginIp] UserLogInReq memberLoginIp
         * @property {string|null} [memberLoginTime] UserLogInReq memberLoginTime
         * @property {string|null} [memberLogOutTime] UserLogInReq memberLogOutTime
         * @property {number|Long|null} [merchantId] UserLogInReq merchantId
         * @property {number|Long|null} [merchantMemberId] UserLogInReq merchantMemberId
         * @property {string|null} [merchantName] UserLogInReq merchantName
         * @property {string|null} [remark] UserLogInReq remark
         * @property {string|null} [token] UserLogInReq token
         * @property {string|null} [ipAddress] UserLogInReq ipAddress
         */

        /**
         * Constructs a new UserLogInReq.
         * @memberof login
         * @classdesc Represents a UserLogInReq.
         * @implements IUserLogInReq
         * @constructor
         * @param {login.IUserLogInReq=} [properties] Properties to set
         */
        function UserLogInReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLogInReq address.
         * @member {string} address
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.address = "";

        /**
         * UserLogInReq logType.
         * @member {number} logType
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.logType = 0;

        /**
         * UserLogInReq memberId.
         * @member {number|Long} memberId
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.memberId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserLogInReq memberLoginDevice.
         * @member {number} memberLoginDevice
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.memberLoginDevice = 0;

        /**
         * UserLogInReq memberLoginIp.
         * @member {string} memberLoginIp
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.memberLoginIp = "";

        /**
         * UserLogInReq memberLoginTime.
         * @member {string} memberLoginTime
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.memberLoginTime = "";

        /**
         * UserLogInReq memberLogOutTime.
         * @member {string} memberLogOutTime
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.memberLogOutTime = "";

        /**
         * UserLogInReq merchantId.
         * @member {number|Long} merchantId
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.merchantId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserLogInReq merchantMemberId.
         * @member {number|Long} merchantMemberId
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.merchantMemberId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserLogInReq merchantName.
         * @member {string} merchantName
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.merchantName = "";

        /**
         * UserLogInReq remark.
         * @member {string} remark
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.remark = "";

        /**
         * UserLogInReq token.
         * @member {string} token
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.token = "";

        /**
         * UserLogInReq ipAddress.
         * @member {string} ipAddress
         * @memberof login.UserLogInReq
         * @instance
         */
        UserLogInReq.prototype.ipAddress = "";

        /**
         * Creates a new UserLogInReq instance using the specified properties.
         * @function create
         * @memberof login.UserLogInReq
         * @static
         * @param {login.IUserLogInReq=} [properties] Properties to set
         * @returns {login.UserLogInReq} UserLogInReq instance
         */
        UserLogInReq.create = function create(properties) {
            return new UserLogInReq(properties);
        };

        /**
         * Encodes the specified UserLogInReq message. Does not implicitly {@link login.UserLogInReq.verify|verify} messages.
         * @function encode
         * @memberof login.UserLogInReq
         * @static
         * @param {login.IUserLogInReq} message UserLogInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogInReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.address != null && message.hasOwnProperty("address"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
            if (message.logType != null && message.hasOwnProperty("logType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.logType);
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.memberId);
            if (message.memberLoginDevice != null && message.hasOwnProperty("memberLoginDevice"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.memberLoginDevice);
            if (message.memberLoginIp != null && message.hasOwnProperty("memberLoginIp"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.memberLoginIp);
            if (message.memberLoginTime != null && message.hasOwnProperty("memberLoginTime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.memberLoginTime);
            if (message.memberLogOutTime != null && message.hasOwnProperty("memberLogOutTime"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.memberLogOutTime);
            if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.merchantId);
            if (message.merchantMemberId != null && message.hasOwnProperty("merchantMemberId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.merchantMemberId);
            if (message.merchantName != null && message.hasOwnProperty("merchantName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.merchantName);
            if (message.remark != null && message.hasOwnProperty("remark"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.remark);
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.token);
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.ipAddress);
            return writer;
        };

        /**
         * Encodes the specified UserLogInReq message, length delimited. Does not implicitly {@link login.UserLogInReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.UserLogInReq
         * @static
         * @param {login.IUserLogInReq} message UserLogInReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogInReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLogInReq message from the specified reader or buffer.
         * @function decode
         * @memberof login.UserLogInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.UserLogInReq} UserLogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogInReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.UserLogInReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.logType = reader.int32();
                    break;
                case 3:
                    message.memberId = reader.int64();
                    break;
                case 4:
                    message.memberLoginDevice = reader.int32();
                    break;
                case 5:
                    message.memberLoginIp = reader.string();
                    break;
                case 6:
                    message.memberLoginTime = reader.string();
                    break;
                case 7:
                    message.memberLogOutTime = reader.string();
                    break;
                case 8:
                    message.merchantId = reader.int64();
                    break;
                case 9:
                    message.merchantMemberId = reader.int64();
                    break;
                case 10:
                    message.merchantName = reader.string();
                    break;
                case 11:
                    message.remark = reader.string();
                    break;
                case 12:
                    message.token = reader.string();
                    break;
                case 13:
                    message.ipAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLogInReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.UserLogInReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.UserLogInReq} UserLogInReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogInReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLogInReq message.
         * @function verify
         * @memberof login.UserLogInReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLogInReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.logType != null && message.hasOwnProperty("logType"))
                if (!$util.isInteger(message.logType))
                    return "logType: integer expected";
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (!$util.isInteger(message.memberId) && !(message.memberId && $util.isInteger(message.memberId.low) && $util.isInteger(message.memberId.high)))
                    return "memberId: integer|Long expected";
            if (message.memberLoginDevice != null && message.hasOwnProperty("memberLoginDevice"))
                if (!$util.isInteger(message.memberLoginDevice))
                    return "memberLoginDevice: integer expected";
            if (message.memberLoginIp != null && message.hasOwnProperty("memberLoginIp"))
                if (!$util.isString(message.memberLoginIp))
                    return "memberLoginIp: string expected";
            if (message.memberLoginTime != null && message.hasOwnProperty("memberLoginTime"))
                if (!$util.isString(message.memberLoginTime))
                    return "memberLoginTime: string expected";
            if (message.memberLogOutTime != null && message.hasOwnProperty("memberLogOutTime"))
                if (!$util.isString(message.memberLogOutTime))
                    return "memberLogOutTime: string expected";
            if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                if (!$util.isInteger(message.merchantId) && !(message.merchantId && $util.isInteger(message.merchantId.low) && $util.isInteger(message.merchantId.high)))
                    return "merchantId: integer|Long expected";
            if (message.merchantMemberId != null && message.hasOwnProperty("merchantMemberId"))
                if (!$util.isInteger(message.merchantMemberId) && !(message.merchantMemberId && $util.isInteger(message.merchantMemberId.low) && $util.isInteger(message.merchantMemberId.high)))
                    return "merchantMemberId: integer|Long expected";
            if (message.merchantName != null && message.hasOwnProperty("merchantName"))
                if (!$util.isString(message.merchantName))
                    return "merchantName: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                if (!$util.isString(message.ipAddress))
                    return "ipAddress: string expected";
            return null;
        };

        /**
         * Creates a UserLogInReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.UserLogInReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.UserLogInReq} UserLogInReq
         */
        UserLogInReq.fromObject = function fromObject(object) {
            if (object instanceof $root.login.UserLogInReq)
                return object;
            var message = new $root.login.UserLogInReq();
            if (object.address != null)
                message.address = String(object.address);
            if (object.logType != null)
                message.logType = object.logType | 0;
            if (object.memberId != null)
                if ($util.Long)
                    (message.memberId = $util.Long.fromValue(object.memberId)).unsigned = false;
                else if (typeof object.memberId === "string")
                    message.memberId = parseInt(object.memberId, 10);
                else if (typeof object.memberId === "number")
                    message.memberId = object.memberId;
                else if (typeof object.memberId === "object")
                    message.memberId = new $util.LongBits(object.memberId.low >>> 0, object.memberId.high >>> 0).toNumber();
            if (object.memberLoginDevice != null)
                message.memberLoginDevice = object.memberLoginDevice | 0;
            if (object.memberLoginIp != null)
                message.memberLoginIp = String(object.memberLoginIp);
            if (object.memberLoginTime != null)
                message.memberLoginTime = String(object.memberLoginTime);
            if (object.memberLogOutTime != null)
                message.memberLogOutTime = String(object.memberLogOutTime);
            if (object.merchantId != null)
                if ($util.Long)
                    (message.merchantId = $util.Long.fromValue(object.merchantId)).unsigned = false;
                else if (typeof object.merchantId === "string")
                    message.merchantId = parseInt(object.merchantId, 10);
                else if (typeof object.merchantId === "number")
                    message.merchantId = object.merchantId;
                else if (typeof object.merchantId === "object")
                    message.merchantId = new $util.LongBits(object.merchantId.low >>> 0, object.merchantId.high >>> 0).toNumber();
            if (object.merchantMemberId != null)
                if ($util.Long)
                    (message.merchantMemberId = $util.Long.fromValue(object.merchantMemberId)).unsigned = false;
                else if (typeof object.merchantMemberId === "string")
                    message.merchantMemberId = parseInt(object.merchantMemberId, 10);
                else if (typeof object.merchantMemberId === "number")
                    message.merchantMemberId = object.merchantMemberId;
                else if (typeof object.merchantMemberId === "object")
                    message.merchantMemberId = new $util.LongBits(object.merchantMemberId.low >>> 0, object.merchantMemberId.high >>> 0).toNumber();
            if (object.merchantName != null)
                message.merchantName = String(object.merchantName);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.token != null)
                message.token = String(object.token);
            if (object.ipAddress != null)
                message.ipAddress = String(object.ipAddress);
            return message;
        };

        /**
         * Creates a plain object from a UserLogInReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.UserLogInReq
         * @static
         * @param {login.UserLogInReq} message UserLogInReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLogInReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.address = "";
                object.logType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.memberId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.memberId = options.longs === String ? "0" : 0;
                object.memberLoginDevice = 0;
                object.memberLoginIp = "";
                object.memberLoginTime = "";
                object.memberLogOutTime = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.merchantId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.merchantId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.merchantMemberId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.merchantMemberId = options.longs === String ? "0" : 0;
                object.merchantName = "";
                object.remark = "";
                object.token = "";
                object.ipAddress = "";
            }
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.logType != null && message.hasOwnProperty("logType"))
                object.logType = message.logType;
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (typeof message.memberId === "number")
                    object.memberId = options.longs === String ? String(message.memberId) : message.memberId;
                else
                    object.memberId = options.longs === String ? $util.Long.prototype.toString.call(message.memberId) : options.longs === Number ? new $util.LongBits(message.memberId.low >>> 0, message.memberId.high >>> 0).toNumber() : message.memberId;
            if (message.memberLoginDevice != null && message.hasOwnProperty("memberLoginDevice"))
                object.memberLoginDevice = message.memberLoginDevice;
            if (message.memberLoginIp != null && message.hasOwnProperty("memberLoginIp"))
                object.memberLoginIp = message.memberLoginIp;
            if (message.memberLoginTime != null && message.hasOwnProperty("memberLoginTime"))
                object.memberLoginTime = message.memberLoginTime;
            if (message.memberLogOutTime != null && message.hasOwnProperty("memberLogOutTime"))
                object.memberLogOutTime = message.memberLogOutTime;
            if (message.merchantId != null && message.hasOwnProperty("merchantId"))
                if (typeof message.merchantId === "number")
                    object.merchantId = options.longs === String ? String(message.merchantId) : message.merchantId;
                else
                    object.merchantId = options.longs === String ? $util.Long.prototype.toString.call(message.merchantId) : options.longs === Number ? new $util.LongBits(message.merchantId.low >>> 0, message.merchantId.high >>> 0).toNumber() : message.merchantId;
            if (message.merchantMemberId != null && message.hasOwnProperty("merchantMemberId"))
                if (typeof message.merchantMemberId === "number")
                    object.merchantMemberId = options.longs === String ? String(message.merchantMemberId) : message.merchantMemberId;
                else
                    object.merchantMemberId = options.longs === String ? $util.Long.prototype.toString.call(message.merchantMemberId) : options.longs === Number ? new $util.LongBits(message.merchantMemberId.low >>> 0, message.merchantMemberId.high >>> 0).toNumber() : message.merchantMemberId;
            if (message.merchantName != null && message.hasOwnProperty("merchantName"))
                object.merchantName = message.merchantName;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
                object.ipAddress = message.ipAddress;
            return object;
        };

        /**
         * Converts this UserLogInReq to JSON.
         * @function toJSON
         * @memberof login.UserLogInReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLogInReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLogInReq;
    })();

    login.UserLogInResp = (function() {

        /**
         * Properties of a UserLogInResp.
         * @memberof login
         * @interface IUserLogInResp
         * @property {number|null} [code] UserLogInResp code
         * @property {string|null} [msg] UserLogInResp msg
         * @property {login.IUserInfo|null} [data] UserLogInResp data
         */

        /**
         * Constructs a new UserLogInResp.
         * @memberof login
         * @classdesc Represents a UserLogInResp.
         * @implements IUserLogInResp
         * @constructor
         * @param {login.IUserLogInResp=} [properties] Properties to set
         */
        function UserLogInResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLogInResp code.
         * @member {number} code
         * @memberof login.UserLogInResp
         * @instance
         */
        UserLogInResp.prototype.code = 0;

        /**
         * UserLogInResp msg.
         * @member {string} msg
         * @memberof login.UserLogInResp
         * @instance
         */
        UserLogInResp.prototype.msg = "";

        /**
         * UserLogInResp data.
         * @member {login.IUserInfo|null|undefined} data
         * @memberof login.UserLogInResp
         * @instance
         */
        UserLogInResp.prototype.data = null;

        /**
         * Creates a new UserLogInResp instance using the specified properties.
         * @function create
         * @memberof login.UserLogInResp
         * @static
         * @param {login.IUserLogInResp=} [properties] Properties to set
         * @returns {login.UserLogInResp} UserLogInResp instance
         */
        UserLogInResp.create = function create(properties) {
            return new UserLogInResp(properties);
        };

        /**
         * Encodes the specified UserLogInResp message. Does not implicitly {@link login.UserLogInResp.verify|verify} messages.
         * @function encode
         * @memberof login.UserLogInResp
         * @static
         * @param {login.IUserLogInResp} message UserLogInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogInResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.hasOwnProperty("data"))
                $root.login.UserInfo.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLogInResp message, length delimited. Does not implicitly {@link login.UserLogInResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.UserLogInResp
         * @static
         * @param {login.IUserLogInResp} message UserLogInResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogInResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLogInResp message from the specified reader or buffer.
         * @function decode
         * @memberof login.UserLogInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.UserLogInResp} UserLogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogInResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.UserLogInResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.data = $root.login.UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLogInResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.UserLogInResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.UserLogInResp} UserLogInResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogInResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLogInResp message.
         * @function verify
         * @memberof login.UserLogInResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLogInResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.login.UserInfo.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a UserLogInResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof login.UserLogInResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {login.UserLogInResp} UserLogInResp
         */
        UserLogInResp.fromObject = function fromObject(object) {
            if (object instanceof $root.login.UserLogInResp)
                return object;
            var message = new $root.login.UserLogInResp();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".login.UserLogInResp.data: object expected");
                message.data = $root.login.UserInfo.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLogInResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof login.UserLogInResp
         * @static
         * @param {login.UserLogInResp} message UserLogInResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLogInResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.data = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.login.UserInfo.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this UserLogInResp to JSON.
         * @function toJSON
         * @memberof login.UserLogInResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLogInResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLogInResp;
    })();

    return login;
})();

module.exports = $root;
