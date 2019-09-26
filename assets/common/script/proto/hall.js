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
     * @property {number} Msg_GetUserInfoReq=20000 Msg_GetUserInfoReq value
     * @property {number} Msg_GetUserInfoResp=20001 Msg_GetUserInfoResp value
     * @property {number} Msg_GetGameListReq=20002 Msg_GetGameListReq value
     * @property {number} Msg_GetGameListResp=20003 Msg_GetGameListResp value
     * @property {number} Msg_GetGameConfigReq=20004 Msg_GetGameConfigReq value
     * @property {number} Msg_GetGameConfigResp=20005 Msg_GetGameConfigResp value
     * @property {number} Msg_ChangeHeadReq=20006 Msg_ChangeHeadReq value
     * @property {number} Msg_ChangeHeadResp=20007 Msg_ChangeHeadResp value
     * @property {number} Msg_BroadcastNotice=80000 Msg_BroadcastNotice value
     */
    hallgw.HallMsgId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Msg_Unknown"] = 0;
        values[valuesById[20000] = "Msg_GetUserInfoReq"] = 20000;
        values[valuesById[20001] = "Msg_GetUserInfoResp"] = 20001;
        values[valuesById[20002] = "Msg_GetGameListReq"] = 20002;
        values[valuesById[20003] = "Msg_GetGameListResp"] = 20003;
        values[valuesById[20004] = "Msg_GetGameConfigReq"] = 20004;
        values[valuesById[20005] = "Msg_GetGameConfigResp"] = 20005;
        values[valuesById[20006] = "Msg_ChangeHeadReq"] = 20006;
        values[valuesById[20007] = "Msg_ChangeHeadResp"] = 20007;
        values[valuesById[80000] = "Msg_BroadcastNotice"] = 80000;
        return values;
    })();

    /**
     * RespErr enum.
     * @name hallgw.RespErr
     * @enum {string}
     * @property {number} RespErr_Unknown=0 RespErr_Unknown value
     * @property {number} ReqFormatErr=1 ReqFormatErr value
     * @property {number} MsgGetUserInfoRespRedisOperErr=2 MsgGetUserInfoRespRedisOperErr value
     * @property {number} MsgGetGameListRespDBOperErr=3 MsgGetGameListRespDBOperErr value
     * @property {number} MsgGetGameConfigRespRpcBackErr=4 MsgGetGameConfigRespRpcBackErr value
     * @property {number} MsgGetGameConfigRespFormatErr=5 MsgGetGameConfigRespFormatErr value
     */
    hallgw.RespErr = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RespErr_Unknown"] = 0;
        values[valuesById[1] = "ReqFormatErr"] = 1;
        values[valuesById[2] = "MsgGetUserInfoRespRedisOperErr"] = 2;
        values[valuesById[3] = "MsgGetGameListRespDBOperErr"] = 3;
        values[valuesById[4] = "MsgGetGameConfigRespRpcBackErr"] = 4;
        values[valuesById[5] = "MsgGetGameConfigRespFormatErr"] = 5;
        return values;
    })();

    hallgw.MsgGetUserInfoReq = (function() {

        /**
         * Properties of a MsgGetUserInfoReq.
         * @memberof hallgw
         * @interface IMsgGetUserInfoReq
         * @property {number|null} [Id] MsgGetUserInfoReq Id
         */

        /**
         * Constructs a new MsgGetUserInfoReq.
         * @memberof hallgw
         * @classdesc Represents a MsgGetUserInfoReq.
         * @implements IMsgGetUserInfoReq
         * @constructor
         * @param {hallgw.IMsgGetUserInfoReq=} [properties] Properties to set
         */
        function MsgGetUserInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgGetUserInfoReq Id.
         * @member {number} Id
         * @memberof hallgw.MsgGetUserInfoReq
         * @instance
         */
        MsgGetUserInfoReq.prototype.Id = 0;

        /**
         * Creates a new MsgGetUserInfoReq instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {hallgw.IMsgGetUserInfoReq=} [properties] Properties to set
         * @returns {hallgw.MsgGetUserInfoReq} MsgGetUserInfoReq instance
         */
        MsgGetUserInfoReq.create = function create(properties) {
            return new MsgGetUserInfoReq(properties);
        };

        /**
         * Encodes the specified MsgGetUserInfoReq message. Does not implicitly {@link hallgw.MsgGetUserInfoReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {hallgw.IMsgGetUserInfoReq} message MsgGetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetUserInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            return writer;
        };

        /**
         * Encodes the specified MsgGetUserInfoReq message, length delimited. Does not implicitly {@link hallgw.MsgGetUserInfoReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {hallgw.IMsgGetUserInfoReq} message MsgGetUserInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetUserInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGetUserInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgGetUserInfoReq} MsgGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetUserInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgGetUserInfoReq();
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
         * Decodes a MsgGetUserInfoReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgGetUserInfoReq} MsgGetUserInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetUserInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGetUserInfoReq message.
         * @function verify
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGetUserInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            return null;
        };

        /**
         * Creates a MsgGetUserInfoReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgGetUserInfoReq} MsgGetUserInfoReq
         */
        MsgGetUserInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgGetUserInfoReq)
                return object;
            var message = new $root.hallgw.MsgGetUserInfoReq();
            if (object.Id != null)
                message.Id = object.Id | 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgGetUserInfoReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgGetUserInfoReq
         * @static
         * @param {hallgw.MsgGetUserInfoReq} message MsgGetUserInfoReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGetUserInfoReq.toObject = function toObject(message, options) {
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
         * Converts this MsgGetUserInfoReq to JSON.
         * @function toJSON
         * @memberof hallgw.MsgGetUserInfoReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGetUserInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGetUserInfoReq;
    })();

    hallgw.MsgGetUserInfoResp = (function() {

        /**
         * Properties of a MsgGetUserInfoResp.
         * @memberof hallgw
         * @interface IMsgGetUserInfoResp
         * @property {number|null} [Id] MsgGetUserInfoResp Id
         * @property {string|null} [Account] MsgGetUserInfoResp Account
         * @property {string|null} [Name] MsgGetUserInfoResp Name
         * @property {number|Long|null} [Coin] MsgGetUserInfoResp Coin
         * @property {string|null} [Head] MsgGetUserInfoResp Head
         */

        /**
         * Constructs a new MsgGetUserInfoResp.
         * @memberof hallgw
         * @classdesc Represents a MsgGetUserInfoResp.
         * @implements IMsgGetUserInfoResp
         * @constructor
         * @param {hallgw.IMsgGetUserInfoResp=} [properties] Properties to set
         */
        function MsgGetUserInfoResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgGetUserInfoResp Id.
         * @member {number} Id
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Id = 0;

        /**
         * MsgGetUserInfoResp Account.
         * @member {string} Account
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Account = "";

        /**
         * MsgGetUserInfoResp Name.
         * @member {string} Name
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Name = "";

        /**
         * MsgGetUserInfoResp Coin.
         * @member {number|Long} Coin
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgGetUserInfoResp Head.
         * @member {string} Head
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Head = "";

        /**
         * Creates a new MsgGetUserInfoResp instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {hallgw.IMsgGetUserInfoResp=} [properties] Properties to set
         * @returns {hallgw.MsgGetUserInfoResp} MsgGetUserInfoResp instance
         */
        MsgGetUserInfoResp.create = function create(properties) {
            return new MsgGetUserInfoResp(properties);
        };

        /**
         * Encodes the specified MsgGetUserInfoResp message. Does not implicitly {@link hallgw.MsgGetUserInfoResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {hallgw.IMsgGetUserInfoResp} message MsgGetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetUserInfoResp.encode = function encode(message, writer) {
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
         * Encodes the specified MsgGetUserInfoResp message, length delimited. Does not implicitly {@link hallgw.MsgGetUserInfoResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {hallgw.IMsgGetUserInfoResp} message MsgGetUserInfoResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetUserInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGetUserInfoResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgGetUserInfoResp} MsgGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetUserInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgGetUserInfoResp();
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
         * Decodes a MsgGetUserInfoResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgGetUserInfoResp} MsgGetUserInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetUserInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGetUserInfoResp message.
         * @function verify
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGetUserInfoResp.verify = function verify(message) {
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
         * Creates a MsgGetUserInfoResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgGetUserInfoResp} MsgGetUserInfoResp
         */
        MsgGetUserInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgGetUserInfoResp)
                return object;
            var message = new $root.hallgw.MsgGetUserInfoResp();
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
         * Creates a plain object from a MsgGetUserInfoResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgGetUserInfoResp
         * @static
         * @param {hallgw.MsgGetUserInfoResp} message MsgGetUserInfoResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGetUserInfoResp.toObject = function toObject(message, options) {
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
         * Converts this MsgGetUserInfoResp to JSON.
         * @function toJSON
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGetUserInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGetUserInfoResp;
    })();

    hallgw.GameInfo = (function() {

        /**
         * Properties of a GameInfo.
         * @memberof hallgw
         * @interface IGameInfo
         * @property {number|null} [Id] GameInfo Id
         * @property {string|null} [Name] GameInfo Name
         * @property {number|null} [State] GameInfo State
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
         * GameInfo State.
         * @member {number} State
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.State = 0;

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
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.State);
            if (message.HaveRoomList != null && message.hasOwnProperty("HaveRoomList"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.HaveRoomList);
            if (message.RoomList != null && message.hasOwnProperty("RoomList"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.RoomList);
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
                    message.State = reader.int32();
                    break;
                case 4:
                    message.HaveRoomList = reader.int32();
                    break;
                case 5:
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
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
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
            if (object.State != null)
                message.State = object.State | 0;
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
                object.State = 0;
                object.HaveRoomList = 0;
                object.RoomList = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
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

    hallgw.MsgGetGameListReq = (function() {

        /**
         * Properties of a MsgGetGameListReq.
         * @memberof hallgw
         * @interface IMsgGetGameListReq
         */

        /**
         * Constructs a new MsgGetGameListReq.
         * @memberof hallgw
         * @classdesc Represents a MsgGetGameListReq.
         * @implements IMsgGetGameListReq
         * @constructor
         * @param {hallgw.IMsgGetGameListReq=} [properties] Properties to set
         */
        function MsgGetGameListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MsgGetGameListReq instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {hallgw.IMsgGetGameListReq=} [properties] Properties to set
         * @returns {hallgw.MsgGetGameListReq} MsgGetGameListReq instance
         */
        MsgGetGameListReq.create = function create(properties) {
            return new MsgGetGameListReq(properties);
        };

        /**
         * Encodes the specified MsgGetGameListReq message. Does not implicitly {@link hallgw.MsgGetGameListReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {hallgw.IMsgGetGameListReq} message MsgGetGameListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MsgGetGameListReq message, length delimited. Does not implicitly {@link hallgw.MsgGetGameListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {hallgw.IMsgGetGameListReq} message MsgGetGameListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGetGameListReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgGetGameListReq} MsgGetGameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgGetGameListReq();
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
         * Decodes a MsgGetGameListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgGetGameListReq} MsgGetGameListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGetGameListReq message.
         * @function verify
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGetGameListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MsgGetGameListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgGetGameListReq} MsgGetGameListReq
         */
        MsgGetGameListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgGetGameListReq)
                return object;
            return new $root.hallgw.MsgGetGameListReq();
        };

        /**
         * Creates a plain object from a MsgGetGameListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgGetGameListReq
         * @static
         * @param {hallgw.MsgGetGameListReq} message MsgGetGameListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGetGameListReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MsgGetGameListReq to JSON.
         * @function toJSON
         * @memberof hallgw.MsgGetGameListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGetGameListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGetGameListReq;
    })();

    hallgw.MsgGetGameListResp = (function() {

        /**
         * Properties of a MsgGetGameListResp.
         * @memberof hallgw
         * @interface IMsgGetGameListResp
         * @property {Array.<hallgw.IGameInfo>|null} [List] MsgGetGameListResp List
         */

        /**
         * Constructs a new MsgGetGameListResp.
         * @memberof hallgw
         * @classdesc Represents a MsgGetGameListResp.
         * @implements IMsgGetGameListResp
         * @constructor
         * @param {hallgw.IMsgGetGameListResp=} [properties] Properties to set
         */
        function MsgGetGameListResp(properties) {
            this.List = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgGetGameListResp List.
         * @member {Array.<hallgw.IGameInfo>} List
         * @memberof hallgw.MsgGetGameListResp
         * @instance
         */
        MsgGetGameListResp.prototype.List = $util.emptyArray;

        /**
         * Creates a new MsgGetGameListResp instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {hallgw.IMsgGetGameListResp=} [properties] Properties to set
         * @returns {hallgw.MsgGetGameListResp} MsgGetGameListResp instance
         */
        MsgGetGameListResp.create = function create(properties) {
            return new MsgGetGameListResp(properties);
        };

        /**
         * Encodes the specified MsgGetGameListResp message. Does not implicitly {@link hallgw.MsgGetGameListResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {hallgw.IMsgGetGameListResp} message MsgGetGameListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.List != null && message.List.length)
                for (var i = 0; i < message.List.length; ++i)
                    $root.hallgw.GameInfo.encode(message.List[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgGetGameListResp message, length delimited. Does not implicitly {@link hallgw.MsgGetGameListResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {hallgw.IMsgGetGameListResp} message MsgGetGameListResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGetGameListResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgGetGameListResp} MsgGetGameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgGetGameListResp();
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
         * Decodes a MsgGetGameListResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgGetGameListResp} MsgGetGameListResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGetGameListResp message.
         * @function verify
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGetGameListResp.verify = function verify(message) {
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
         * Creates a MsgGetGameListResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgGetGameListResp} MsgGetGameListResp
         */
        MsgGetGameListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgGetGameListResp)
                return object;
            var message = new $root.hallgw.MsgGetGameListResp();
            if (object.List) {
                if (!Array.isArray(object.List))
                    throw TypeError(".hallgw.MsgGetGameListResp.List: array expected");
                message.List = [];
                for (var i = 0; i < object.List.length; ++i) {
                    if (typeof object.List[i] !== "object")
                        throw TypeError(".hallgw.MsgGetGameListResp.List: object expected");
                    message.List[i] = $root.hallgw.GameInfo.fromObject(object.List[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgGetGameListResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgGetGameListResp
         * @static
         * @param {hallgw.MsgGetGameListResp} message MsgGetGameListResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGetGameListResp.toObject = function toObject(message, options) {
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
         * Converts this MsgGetGameListResp to JSON.
         * @function toJSON
         * @memberof hallgw.MsgGetGameListResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGetGameListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGetGameListResp;
    })();

    hallgw.MsgChangeHeadReq = (function() {

        /**
         * Properties of a MsgChangeHeadReq.
         * @memberof hallgw
         * @interface IMsgChangeHeadReq
         * @property {number|Long|null} [UserId] MsgChangeHeadReq UserId
         * @property {string|null} [Head] MsgChangeHeadReq Head
         */

        /**
         * Constructs a new MsgChangeHeadReq.
         * @memberof hallgw
         * @classdesc Represents a MsgChangeHeadReq.
         * @implements IMsgChangeHeadReq
         * @constructor
         * @param {hallgw.IMsgChangeHeadReq=} [properties] Properties to set
         */
        function MsgChangeHeadReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgChangeHeadReq UserId.
         * @member {number|Long} UserId
         * @memberof hallgw.MsgChangeHeadReq
         * @instance
         */
        MsgChangeHeadReq.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgChangeHeadReq Head.
         * @member {string} Head
         * @memberof hallgw.MsgChangeHeadReq
         * @instance
         */
        MsgChangeHeadReq.prototype.Head = "";

        /**
         * Creates a new MsgChangeHeadReq instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {hallgw.IMsgChangeHeadReq=} [properties] Properties to set
         * @returns {hallgw.MsgChangeHeadReq} MsgChangeHeadReq instance
         */
        MsgChangeHeadReq.create = function create(properties) {
            return new MsgChangeHeadReq(properties);
        };

        /**
         * Encodes the specified MsgChangeHeadReq message. Does not implicitly {@link hallgw.MsgChangeHeadReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {hallgw.IMsgChangeHeadReq} message MsgChangeHeadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgChangeHeadReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserId);
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Head);
            return writer;
        };

        /**
         * Encodes the specified MsgChangeHeadReq message, length delimited. Does not implicitly {@link hallgw.MsgChangeHeadReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {hallgw.IMsgChangeHeadReq} message MsgChangeHeadReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgChangeHeadReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgChangeHeadReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgChangeHeadReq} MsgChangeHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgChangeHeadReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgChangeHeadReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.int64();
                    break;
                case 2:
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
         * Decodes a MsgChangeHeadReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgChangeHeadReq} MsgChangeHeadReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgChangeHeadReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgChangeHeadReq message.
         * @function verify
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgChangeHeadReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.Head != null && message.hasOwnProperty("Head"))
                if (!$util.isString(message.Head))
                    return "Head: string expected";
            return null;
        };

        /**
         * Creates a MsgChangeHeadReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgChangeHeadReq} MsgChangeHeadReq
         */
        MsgChangeHeadReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgChangeHeadReq)
                return object;
            var message = new $root.hallgw.MsgChangeHeadReq();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = false;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber();
            if (object.Head != null)
                message.Head = String(object.Head);
            return message;
        };

        /**
         * Creates a plain object from a MsgChangeHeadReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgChangeHeadReq
         * @static
         * @param {hallgw.MsgChangeHeadReq} message MsgChangeHeadReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgChangeHeadReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.Head = "";
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber() : message.UserId;
            if (message.Head != null && message.hasOwnProperty("Head"))
                object.Head = message.Head;
            return object;
        };

        /**
         * Converts this MsgChangeHeadReq to JSON.
         * @function toJSON
         * @memberof hallgw.MsgChangeHeadReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgChangeHeadReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgChangeHeadReq;
    })();

    hallgw.MsgChangeHeadResp = (function() {

        /**
         * Properties of a MsgChangeHeadResp.
         * @memberof hallgw
         * @interface IMsgChangeHeadResp
         */

        /**
         * Constructs a new MsgChangeHeadResp.
         * @memberof hallgw
         * @classdesc Represents a MsgChangeHeadResp.
         * @implements IMsgChangeHeadResp
         * @constructor
         * @param {hallgw.IMsgChangeHeadResp=} [properties] Properties to set
         */
        function MsgChangeHeadResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MsgChangeHeadResp instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {hallgw.IMsgChangeHeadResp=} [properties] Properties to set
         * @returns {hallgw.MsgChangeHeadResp} MsgChangeHeadResp instance
         */
        MsgChangeHeadResp.create = function create(properties) {
            return new MsgChangeHeadResp(properties);
        };

        /**
         * Encodes the specified MsgChangeHeadResp message. Does not implicitly {@link hallgw.MsgChangeHeadResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {hallgw.IMsgChangeHeadResp} message MsgChangeHeadResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgChangeHeadResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MsgChangeHeadResp message, length delimited. Does not implicitly {@link hallgw.MsgChangeHeadResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {hallgw.IMsgChangeHeadResp} message MsgChangeHeadResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgChangeHeadResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgChangeHeadResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgChangeHeadResp} MsgChangeHeadResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgChangeHeadResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgChangeHeadResp();
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
         * Decodes a MsgChangeHeadResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgChangeHeadResp} MsgChangeHeadResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgChangeHeadResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgChangeHeadResp message.
         * @function verify
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgChangeHeadResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MsgChangeHeadResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgChangeHeadResp} MsgChangeHeadResp
         */
        MsgChangeHeadResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgChangeHeadResp)
                return object;
            return new $root.hallgw.MsgChangeHeadResp();
        };

        /**
         * Creates a plain object from a MsgChangeHeadResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgChangeHeadResp
         * @static
         * @param {hallgw.MsgChangeHeadResp} message MsgChangeHeadResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgChangeHeadResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MsgChangeHeadResp to JSON.
         * @function toJSON
         * @memberof hallgw.MsgChangeHeadResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgChangeHeadResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgChangeHeadResp;
    })();

    hallgw.MsgNoticeNotify = (function() {

        /**
         * Properties of a MsgNoticeNotify.
         * @memberof hallgw
         * @interface IMsgNoticeNotify
         * @property {number|null} [Platform] MsgNoticeNotify Platform
         * @property {string|null} [Content] MsgNoticeNotify Content
         * @property {number|null} [RollCount] MsgNoticeNotify RollCount
         * @property {number|null} [DisplayDuration] MsgNoticeNotify DisplayDuration
         */

        /**
         * Constructs a new MsgNoticeNotify.
         * @memberof hallgw
         * @classdesc Represents a MsgNoticeNotify.
         * @implements IMsgNoticeNotify
         * @constructor
         * @param {hallgw.IMsgNoticeNotify=} [properties] Properties to set
         */
        function MsgNoticeNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgNoticeNotify Platform.
         * @member {number} Platform
         * @memberof hallgw.MsgNoticeNotify
         * @instance
         */
        MsgNoticeNotify.prototype.Platform = 0;

        /**
         * MsgNoticeNotify Content.
         * @member {string} Content
         * @memberof hallgw.MsgNoticeNotify
         * @instance
         */
        MsgNoticeNotify.prototype.Content = "";

        /**
         * MsgNoticeNotify RollCount.
         * @member {number} RollCount
         * @memberof hallgw.MsgNoticeNotify
         * @instance
         */
        MsgNoticeNotify.prototype.RollCount = 0;

        /**
         * MsgNoticeNotify DisplayDuration.
         * @member {number} DisplayDuration
         * @memberof hallgw.MsgNoticeNotify
         * @instance
         */
        MsgNoticeNotify.prototype.DisplayDuration = 0;

        /**
         * Creates a new MsgNoticeNotify instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {hallgw.IMsgNoticeNotify=} [properties] Properties to set
         * @returns {hallgw.MsgNoticeNotify} MsgNoticeNotify instance
         */
        MsgNoticeNotify.create = function create(properties) {
            return new MsgNoticeNotify(properties);
        };

        /**
         * Encodes the specified MsgNoticeNotify message. Does not implicitly {@link hallgw.MsgNoticeNotify.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {hallgw.IMsgNoticeNotify} message MsgNoticeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgNoticeNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Platform);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Content);
            if (message.RollCount != null && message.hasOwnProperty("RollCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.RollCount);
            if (message.DisplayDuration != null && message.hasOwnProperty("DisplayDuration"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.DisplayDuration);
            return writer;
        };

        /**
         * Encodes the specified MsgNoticeNotify message, length delimited. Does not implicitly {@link hallgw.MsgNoticeNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {hallgw.IMsgNoticeNotify} message MsgNoticeNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgNoticeNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgNoticeNotify message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgNoticeNotify} MsgNoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgNoticeNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgNoticeNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Platform = reader.int32();
                    break;
                case 2:
                    message.Content = reader.string();
                    break;
                case 3:
                    message.RollCount = reader.int32();
                    break;
                case 4:
                    message.DisplayDuration = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgNoticeNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgNoticeNotify} MsgNoticeNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgNoticeNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgNoticeNotify message.
         * @function verify
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgNoticeNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                if (!$util.isInteger(message.Platform))
                    return "Platform: integer expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            if (message.RollCount != null && message.hasOwnProperty("RollCount"))
                if (!$util.isInteger(message.RollCount))
                    return "RollCount: integer expected";
            if (message.DisplayDuration != null && message.hasOwnProperty("DisplayDuration"))
                if (!$util.isInteger(message.DisplayDuration))
                    return "DisplayDuration: integer expected";
            return null;
        };

        /**
         * Creates a MsgNoticeNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgNoticeNotify} MsgNoticeNotify
         */
        MsgNoticeNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgNoticeNotify)
                return object;
            var message = new $root.hallgw.MsgNoticeNotify();
            if (object.Platform != null)
                message.Platform = object.Platform | 0;
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.RollCount != null)
                message.RollCount = object.RollCount | 0;
            if (object.DisplayDuration != null)
                message.DisplayDuration = object.DisplayDuration | 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgNoticeNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgNoticeNotify
         * @static
         * @param {hallgw.MsgNoticeNotify} message MsgNoticeNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgNoticeNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Platform = 0;
                object.Content = "";
                object.RollCount = 0;
                object.DisplayDuration = 0;
            }
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                object.Platform = message.Platform;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.RollCount != null && message.hasOwnProperty("RollCount"))
                object.RollCount = message.RollCount;
            if (message.DisplayDuration != null && message.hasOwnProperty("DisplayDuration"))
                object.DisplayDuration = message.DisplayDuration;
            return object;
        };

        /**
         * Converts this MsgNoticeNotify to JSON.
         * @function toJSON
         * @memberof hallgw.MsgNoticeNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgNoticeNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgNoticeNotify;
    })();

    hallgw.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof hallgw
         * @interface IRoomInfo
         * @property {number|null} [RoomId] RoomInfo RoomId
         * @property {string|null} [RoomName] RoomInfo RoomName
         * @property {number|Long|null} [MinCost] RoomInfo MinCost
         * @property {number|Long|null} [MaxCost] RoomInfo MaxCost
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof hallgw
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {hallgw.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo RoomId.
         * @member {number} RoomId
         * @memberof hallgw.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomId = 0;

        /**
         * RoomInfo RoomName.
         * @member {string} RoomName
         * @memberof hallgw.RoomInfo
         * @instance
         */
        RoomInfo.prototype.RoomName = "";

        /**
         * RoomInfo MinCost.
         * @member {number|Long} MinCost
         * @memberof hallgw.RoomInfo
         * @instance
         */
        RoomInfo.prototype.MinCost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoomInfo MaxCost.
         * @member {number|Long} MaxCost
         * @memberof hallgw.RoomInfo
         * @instance
         */
        RoomInfo.prototype.MaxCost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof hallgw.RoomInfo
         * @static
         * @param {hallgw.IRoomInfo=} [properties] Properties to set
         * @returns {hallgw.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link hallgw.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof hallgw.RoomInfo
         * @static
         * @param {hallgw.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.RoomName);
            if (message.MinCost != null && message.hasOwnProperty("MinCost"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.MinCost);
            if (message.MaxCost != null && message.hasOwnProperty("MaxCost"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.MaxCost);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link hallgw.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.RoomInfo
         * @static
         * @param {hallgw.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RoomId = reader.int32();
                    break;
                case 2:
                    message.RoomName = reader.string();
                    break;
                case 3:
                    message.MinCost = reader.int64();
                    break;
                case 4:
                    message.MaxCost = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof hallgw.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                if (!$util.isInteger(message.RoomId))
                    return "RoomId: integer expected";
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                if (!$util.isString(message.RoomName))
                    return "RoomName: string expected";
            if (message.MinCost != null && message.hasOwnProperty("MinCost"))
                if (!$util.isInteger(message.MinCost) && !(message.MinCost && $util.isInteger(message.MinCost.low) && $util.isInteger(message.MinCost.high)))
                    return "MinCost: integer|Long expected";
            if (message.MaxCost != null && message.hasOwnProperty("MaxCost"))
                if (!$util.isInteger(message.MaxCost) && !(message.MaxCost && $util.isInteger(message.MaxCost.low) && $util.isInteger(message.MaxCost.high)))
                    return "MaxCost: integer|Long expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.RoomInfo)
                return object;
            var message = new $root.hallgw.RoomInfo();
            if (object.RoomId != null)
                message.RoomId = object.RoomId | 0;
            if (object.RoomName != null)
                message.RoomName = String(object.RoomName);
            if (object.MinCost != null)
                if ($util.Long)
                    (message.MinCost = $util.Long.fromValue(object.MinCost)).unsigned = false;
                else if (typeof object.MinCost === "string")
                    message.MinCost = parseInt(object.MinCost, 10);
                else if (typeof object.MinCost === "number")
                    message.MinCost = object.MinCost;
                else if (typeof object.MinCost === "object")
                    message.MinCost = new $util.LongBits(object.MinCost.low >>> 0, object.MinCost.high >>> 0).toNumber();
            if (object.MaxCost != null)
                if ($util.Long)
                    (message.MaxCost = $util.Long.fromValue(object.MaxCost)).unsigned = false;
                else if (typeof object.MaxCost === "string")
                    message.MaxCost = parseInt(object.MaxCost, 10);
                else if (typeof object.MaxCost === "number")
                    message.MaxCost = object.MaxCost;
                else if (typeof object.MaxCost === "object")
                    message.MaxCost = new $util.LongBits(object.MaxCost.low >>> 0, object.MaxCost.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.RoomInfo
         * @static
         * @param {hallgw.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RoomId = 0;
                object.RoomName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MinCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinCost = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MaxCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MaxCost = options.longs === String ? "0" : 0;
            }
            if (message.RoomId != null && message.hasOwnProperty("RoomId"))
                object.RoomId = message.RoomId;
            if (message.RoomName != null && message.hasOwnProperty("RoomName"))
                object.RoomName = message.RoomName;
            if (message.MinCost != null && message.hasOwnProperty("MinCost"))
                if (typeof message.MinCost === "number")
                    object.MinCost = options.longs === String ? String(message.MinCost) : message.MinCost;
                else
                    object.MinCost = options.longs === String ? $util.Long.prototype.toString.call(message.MinCost) : options.longs === Number ? new $util.LongBits(message.MinCost.low >>> 0, message.MinCost.high >>> 0).toNumber() : message.MinCost;
            if (message.MaxCost != null && message.hasOwnProperty("MaxCost"))
                if (typeof message.MaxCost === "number")
                    object.MaxCost = options.longs === String ? String(message.MaxCost) : message.MaxCost;
                else
                    object.MaxCost = options.longs === String ? $util.Long.prototype.toString.call(message.MaxCost) : options.longs === Number ? new $util.LongBits(message.MaxCost.low >>> 0, message.MaxCost.high >>> 0).toNumber() : message.MaxCost;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof hallgw.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    hallgw.GameType = (function() {

        /**
         * Properties of a GameType.
         * @memberof hallgw
         * @interface IGameType
         * @property {number|null} [Id] GameType Id
         * @property {string|null} [Name] GameType Name
         * @property {number|null} [Order] GameType Order
         */

        /**
         * Constructs a new GameType.
         * @memberof hallgw
         * @classdesc Represents a GameType.
         * @implements IGameType
         * @constructor
         * @param {hallgw.IGameType=} [properties] Properties to set
         */
        function GameType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameType Id.
         * @member {number} Id
         * @memberof hallgw.GameType
         * @instance
         */
        GameType.prototype.Id = 0;

        /**
         * GameType Name.
         * @member {string} Name
         * @memberof hallgw.GameType
         * @instance
         */
        GameType.prototype.Name = "";

        /**
         * GameType Order.
         * @member {number} Order
         * @memberof hallgw.GameType
         * @instance
         */
        GameType.prototype.Order = 0;

        /**
         * Creates a new GameType instance using the specified properties.
         * @function create
         * @memberof hallgw.GameType
         * @static
         * @param {hallgw.IGameType=} [properties] Properties to set
         * @returns {hallgw.GameType} GameType instance
         */
        GameType.create = function create(properties) {
            return new GameType(properties);
        };

        /**
         * Encodes the specified GameType message. Does not implicitly {@link hallgw.GameType.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameType
         * @static
         * @param {hallgw.IGameType} message GameType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Order != null && message.hasOwnProperty("Order"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Order);
            return writer;
        };

        /**
         * Encodes the specified GameType message, length delimited. Does not implicitly {@link hallgw.GameType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameType
         * @static
         * @param {hallgw.IGameType} message GameType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameType message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameType} GameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameType();
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
                    message.Order = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameType} GameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameType message.
         * @function verify
         * @memberof hallgw.GameType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Order != null && message.hasOwnProperty("Order"))
                if (!$util.isInteger(message.Order))
                    return "Order: integer expected";
            return null;
        };

        /**
         * Creates a GameType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameType} GameType
         */
        GameType.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameType)
                return object;
            var message = new $root.hallgw.GameType();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Order != null)
                message.Order = object.Order | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameType
         * @static
         * @param {hallgw.GameType} message GameType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Name = "";
                object.Order = 0;
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Order != null && message.hasOwnProperty("Order"))
                object.Order = message.Order;
            return object;
        };

        /**
         * Converts this GameType to JSON.
         * @function toJSON
         * @memberof hallgw.GameType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameType;
    })();

    hallgw.GameRelation = (function() {

        /**
         * Properties of a GameRelation.
         * @memberof hallgw
         * @interface IGameRelation
         * @property {number|null} [GameId] GameRelation GameId
         * @property {string|null} [GameName] GameRelation GameName
         * @property {number|null} [GameTypeId] GameRelation GameTypeId
         * @property {number|null} [GameLabelId] GameRelation GameLabelId
         * @property {string|null} [GameLabelName] GameRelation GameLabelName
         * @property {number|null} [GameOrder] GameRelation GameOrder
         * @property {Array.<hallgw.IRoomInfo>|null} [RoomList] GameRelation RoomList
         */

        /**
         * Constructs a new GameRelation.
         * @memberof hallgw
         * @classdesc Represents a GameRelation.
         * @implements IGameRelation
         * @constructor
         * @param {hallgw.IGameRelation=} [properties] Properties to set
         */
        function GameRelation(properties) {
            this.RoomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRelation GameId.
         * @member {number} GameId
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameId = 0;

        /**
         * GameRelation GameName.
         * @member {string} GameName
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameName = "";

        /**
         * GameRelation GameTypeId.
         * @member {number} GameTypeId
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameTypeId = 0;

        /**
         * GameRelation GameLabelId.
         * @member {number} GameLabelId
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameLabelId = 0;

        /**
         * GameRelation GameLabelName.
         * @member {string} GameLabelName
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameLabelName = "";

        /**
         * GameRelation GameOrder.
         * @member {number} GameOrder
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameOrder = 0;

        /**
         * GameRelation RoomList.
         * @member {Array.<hallgw.IRoomInfo>} RoomList
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.RoomList = $util.emptyArray;

        /**
         * Creates a new GameRelation instance using the specified properties.
         * @function create
         * @memberof hallgw.GameRelation
         * @static
         * @param {hallgw.IGameRelation=} [properties] Properties to set
         * @returns {hallgw.GameRelation} GameRelation instance
         */
        GameRelation.create = function create(properties) {
            return new GameRelation(properties);
        };

        /**
         * Encodes the specified GameRelation message. Does not implicitly {@link hallgw.GameRelation.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameRelation
         * @static
         * @param {hallgw.IGameRelation} message GameRelation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRelation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameId);
            if (message.GameName != null && message.hasOwnProperty("GameName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.GameName);
            if (message.GameTypeId != null && message.hasOwnProperty("GameTypeId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameTypeId);
            if (message.GameLabelId != null && message.hasOwnProperty("GameLabelId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.GameLabelId);
            if (message.GameLabelName != null && message.hasOwnProperty("GameLabelName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.GameLabelName);
            if (message.GameOrder != null && message.hasOwnProperty("GameOrder"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.GameOrder);
            if (message.RoomList != null && message.RoomList.length)
                for (var i = 0; i < message.RoomList.length; ++i)
                    $root.hallgw.RoomInfo.encode(message.RoomList[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameRelation message, length delimited. Does not implicitly {@link hallgw.GameRelation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameRelation
         * @static
         * @param {hallgw.IGameRelation} message GameRelation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameRelation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameRelation message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameRelation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameRelation} GameRelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRelation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameRelation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameId = reader.int32();
                    break;
                case 2:
                    message.GameName = reader.string();
                    break;
                case 3:
                    message.GameTypeId = reader.int32();
                    break;
                case 4:
                    message.GameLabelId = reader.int32();
                    break;
                case 5:
                    message.GameLabelName = reader.string();
                    break;
                case 6:
                    message.GameOrder = reader.int32();
                    break;
                case 7:
                    if (!(message.RoomList && message.RoomList.length))
                        message.RoomList = [];
                    message.RoomList.push($root.hallgw.RoomInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameRelation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameRelation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameRelation} GameRelation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameRelation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameRelation message.
         * @function verify
         * @memberof hallgw.GameRelation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameRelation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId))
                    return "GameId: integer expected";
            if (message.GameName != null && message.hasOwnProperty("GameName"))
                if (!$util.isString(message.GameName))
                    return "GameName: string expected";
            if (message.GameTypeId != null && message.hasOwnProperty("GameTypeId"))
                if (!$util.isInteger(message.GameTypeId))
                    return "GameTypeId: integer expected";
            if (message.GameLabelId != null && message.hasOwnProperty("GameLabelId"))
                if (!$util.isInteger(message.GameLabelId))
                    return "GameLabelId: integer expected";
            if (message.GameLabelName != null && message.hasOwnProperty("GameLabelName"))
                if (!$util.isString(message.GameLabelName))
                    return "GameLabelName: string expected";
            if (message.GameOrder != null && message.hasOwnProperty("GameOrder"))
                if (!$util.isInteger(message.GameOrder))
                    return "GameOrder: integer expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList")) {
                if (!Array.isArray(message.RoomList))
                    return "RoomList: array expected";
                for (var i = 0; i < message.RoomList.length; ++i) {
                    var error = $root.hallgw.RoomInfo.verify(message.RoomList[i]);
                    if (error)
                        return "RoomList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameRelation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameRelation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameRelation} GameRelation
         */
        GameRelation.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameRelation)
                return object;
            var message = new $root.hallgw.GameRelation();
            if (object.GameId != null)
                message.GameId = object.GameId | 0;
            if (object.GameName != null)
                message.GameName = String(object.GameName);
            if (object.GameTypeId != null)
                message.GameTypeId = object.GameTypeId | 0;
            if (object.GameLabelId != null)
                message.GameLabelId = object.GameLabelId | 0;
            if (object.GameLabelName != null)
                message.GameLabelName = String(object.GameLabelName);
            if (object.GameOrder != null)
                message.GameOrder = object.GameOrder | 0;
            if (object.RoomList) {
                if (!Array.isArray(object.RoomList))
                    throw TypeError(".hallgw.GameRelation.RoomList: array expected");
                message.RoomList = [];
                for (var i = 0; i < object.RoomList.length; ++i) {
                    if (typeof object.RoomList[i] !== "object")
                        throw TypeError(".hallgw.GameRelation.RoomList: object expected");
                    message.RoomList[i] = $root.hallgw.RoomInfo.fromObject(object.RoomList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameRelation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameRelation
         * @static
         * @param {hallgw.GameRelation} message GameRelation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameRelation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RoomList = [];
            if (options.defaults) {
                object.GameId = 0;
                object.GameName = "";
                object.GameTypeId = 0;
                object.GameLabelId = 0;
                object.GameLabelName = "";
                object.GameOrder = 0;
            }
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                object.GameId = message.GameId;
            if (message.GameName != null && message.hasOwnProperty("GameName"))
                object.GameName = message.GameName;
            if (message.GameTypeId != null && message.hasOwnProperty("GameTypeId"))
                object.GameTypeId = message.GameTypeId;
            if (message.GameLabelId != null && message.hasOwnProperty("GameLabelId"))
                object.GameLabelId = message.GameLabelId;
            if (message.GameLabelName != null && message.hasOwnProperty("GameLabelName"))
                object.GameLabelName = message.GameLabelName;
            if (message.GameOrder != null && message.hasOwnProperty("GameOrder"))
                object.GameOrder = message.GameOrder;
            if (message.RoomList && message.RoomList.length) {
                object.RoomList = [];
                for (var j = 0; j < message.RoomList.length; ++j)
                    object.RoomList[j] = $root.hallgw.RoomInfo.toObject(message.RoomList[j], options);
            }
            return object;
        };

        /**
         * Converts this GameRelation to JSON.
         * @function toJSON
         * @memberof hallgw.GameRelation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameRelation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRelation;
    })();

    hallgw.GameConfig = (function() {

        /**
         * Properties of a GameConfig.
         * @memberof hallgw
         * @interface IGameConfig
         * @property {number|null} [PlatformId] GameConfig PlatformId
         * @property {Array.<hallgw.IGameType>|null} [Type] GameConfig Type
         * @property {Array.<hallgw.IGameRelation>|null} [Relation] GameConfig Relation
         */

        /**
         * Constructs a new GameConfig.
         * @memberof hallgw
         * @classdesc Represents a GameConfig.
         * @implements IGameConfig
         * @constructor
         * @param {hallgw.IGameConfig=} [properties] Properties to set
         */
        function GameConfig(properties) {
            this.Type = [];
            this.Relation = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfig PlatformId.
         * @member {number} PlatformId
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.PlatformId = 0;

        /**
         * GameConfig Type.
         * @member {Array.<hallgw.IGameType>} Type
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.Type = $util.emptyArray;

        /**
         * GameConfig Relation.
         * @member {Array.<hallgw.IGameRelation>} Relation
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.Relation = $util.emptyArray;

        /**
         * Creates a new GameConfig instance using the specified properties.
         * @function create
         * @memberof hallgw.GameConfig
         * @static
         * @param {hallgw.IGameConfig=} [properties] Properties to set
         * @returns {hallgw.GameConfig} GameConfig instance
         */
        GameConfig.create = function create(properties) {
            return new GameConfig(properties);
        };

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link hallgw.GameConfig.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameConfig
         * @static
         * @param {hallgw.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PlatformId);
            if (message.Type != null && message.Type.length)
                for (var i = 0; i < message.Type.length; ++i)
                    $root.hallgw.GameType.encode(message.Type[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Relation != null && message.Relation.length)
                for (var i = 0; i < message.Relation.length; ++i)
                    $root.hallgw.GameRelation.encode(message.Relation[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameConfig message, length delimited. Does not implicitly {@link hallgw.GameConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameConfig
         * @static
         * @param {hallgw.IGameConfig} message GameConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PlatformId = reader.int32();
                    break;
                case 2:
                    if (!(message.Type && message.Type.length))
                        message.Type = [];
                    message.Type.push($root.hallgw.GameType.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.Relation && message.Relation.length))
                        message.Relation = [];
                    message.Relation.push($root.hallgw.GameRelation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameConfig} GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameConfig message.
         * @function verify
         * @memberof hallgw.GameConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId))
                    return "PlatformId: integer expected";
            if (message.Type != null && message.hasOwnProperty("Type")) {
                if (!Array.isArray(message.Type))
                    return "Type: array expected";
                for (var i = 0; i < message.Type.length; ++i) {
                    var error = $root.hallgw.GameType.verify(message.Type[i]);
                    if (error)
                        return "Type." + error;
                }
            }
            if (message.Relation != null && message.hasOwnProperty("Relation")) {
                if (!Array.isArray(message.Relation))
                    return "Relation: array expected";
                for (var i = 0; i < message.Relation.length; ++i) {
                    var error = $root.hallgw.GameRelation.verify(message.Relation[i]);
                    if (error)
                        return "Relation." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameConfig} GameConfig
         */
        GameConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameConfig)
                return object;
            var message = new $root.hallgw.GameConfig();
            if (object.PlatformId != null)
                message.PlatformId = object.PlatformId | 0;
            if (object.Type) {
                if (!Array.isArray(object.Type))
                    throw TypeError(".hallgw.GameConfig.Type: array expected");
                message.Type = [];
                for (var i = 0; i < object.Type.length; ++i) {
                    if (typeof object.Type[i] !== "object")
                        throw TypeError(".hallgw.GameConfig.Type: object expected");
                    message.Type[i] = $root.hallgw.GameType.fromObject(object.Type[i]);
                }
            }
            if (object.Relation) {
                if (!Array.isArray(object.Relation))
                    throw TypeError(".hallgw.GameConfig.Relation: array expected");
                message.Relation = [];
                for (var i = 0; i < object.Relation.length; ++i) {
                    if (typeof object.Relation[i] !== "object")
                        throw TypeError(".hallgw.GameConfig.Relation: object expected");
                    message.Relation[i] = $root.hallgw.GameRelation.fromObject(object.Relation[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameConfig
         * @static
         * @param {hallgw.GameConfig} message GameConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Type = [];
                object.Relation = [];
            }
            if (options.defaults)
                object.PlatformId = 0;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                object.PlatformId = message.PlatformId;
            if (message.Type && message.Type.length) {
                object.Type = [];
                for (var j = 0; j < message.Type.length; ++j)
                    object.Type[j] = $root.hallgw.GameType.toObject(message.Type[j], options);
            }
            if (message.Relation && message.Relation.length) {
                object.Relation = [];
                for (var j = 0; j < message.Relation.length; ++j)
                    object.Relation[j] = $root.hallgw.GameRelation.toObject(message.Relation[j], options);
            }
            return object;
        };

        /**
         * Converts this GameConfig to JSON.
         * @function toJSON
         * @memberof hallgw.GameConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameConfig;
    })();

    hallgw.MsgGetGameConfigReq = (function() {

        /**
         * Properties of a MsgGetGameConfigReq.
         * @memberof hallgw
         * @interface IMsgGetGameConfigReq
         */

        /**
         * Constructs a new MsgGetGameConfigReq.
         * @memberof hallgw
         * @classdesc Represents a MsgGetGameConfigReq.
         * @implements IMsgGetGameConfigReq
         * @constructor
         * @param {hallgw.IMsgGetGameConfigReq=} [properties] Properties to set
         */
        function MsgGetGameConfigReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new MsgGetGameConfigReq instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {hallgw.IMsgGetGameConfigReq=} [properties] Properties to set
         * @returns {hallgw.MsgGetGameConfigReq} MsgGetGameConfigReq instance
         */
        MsgGetGameConfigReq.create = function create(properties) {
            return new MsgGetGameConfigReq(properties);
        };

        /**
         * Encodes the specified MsgGetGameConfigReq message. Does not implicitly {@link hallgw.MsgGetGameConfigReq.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {hallgw.IMsgGetGameConfigReq} message MsgGetGameConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameConfigReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified MsgGetGameConfigReq message, length delimited. Does not implicitly {@link hallgw.MsgGetGameConfigReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {hallgw.IMsgGetGameConfigReq} message MsgGetGameConfigReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameConfigReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGetGameConfigReq message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgGetGameConfigReq} MsgGetGameConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameConfigReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgGetGameConfigReq();
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
         * Decodes a MsgGetGameConfigReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgGetGameConfigReq} MsgGetGameConfigReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameConfigReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGetGameConfigReq message.
         * @function verify
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGetGameConfigReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a MsgGetGameConfigReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgGetGameConfigReq} MsgGetGameConfigReq
         */
        MsgGetGameConfigReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgGetGameConfigReq)
                return object;
            return new $root.hallgw.MsgGetGameConfigReq();
        };

        /**
         * Creates a plain object from a MsgGetGameConfigReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgGetGameConfigReq
         * @static
         * @param {hallgw.MsgGetGameConfigReq} message MsgGetGameConfigReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGetGameConfigReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this MsgGetGameConfigReq to JSON.
         * @function toJSON
         * @memberof hallgw.MsgGetGameConfigReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGetGameConfigReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGetGameConfigReq;
    })();

    hallgw.MsgGetGameConfigResp = (function() {

        /**
         * Properties of a MsgGetGameConfigResp.
         * @memberof hallgw
         * @interface IMsgGetGameConfigResp
         * @property {Array.<hallgw.IGameConfig>|null} [GameConfig] MsgGetGameConfigResp GameConfig
         */

        /**
         * Constructs a new MsgGetGameConfigResp.
         * @memberof hallgw
         * @classdesc Represents a MsgGetGameConfigResp.
         * @implements IMsgGetGameConfigResp
         * @constructor
         * @param {hallgw.IMsgGetGameConfigResp=} [properties] Properties to set
         */
        function MsgGetGameConfigResp(properties) {
            this.GameConfig = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgGetGameConfigResp GameConfig.
         * @member {Array.<hallgw.IGameConfig>} GameConfig
         * @memberof hallgw.MsgGetGameConfigResp
         * @instance
         */
        MsgGetGameConfigResp.prototype.GameConfig = $util.emptyArray;

        /**
         * Creates a new MsgGetGameConfigResp instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {hallgw.IMsgGetGameConfigResp=} [properties] Properties to set
         * @returns {hallgw.MsgGetGameConfigResp} MsgGetGameConfigResp instance
         */
        MsgGetGameConfigResp.create = function create(properties) {
            return new MsgGetGameConfigResp(properties);
        };

        /**
         * Encodes the specified MsgGetGameConfigResp message. Does not implicitly {@link hallgw.MsgGetGameConfigResp.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {hallgw.IMsgGetGameConfigResp} message MsgGetGameConfigResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameConfigResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameConfig != null && message.GameConfig.length)
                for (var i = 0; i < message.GameConfig.length; ++i)
                    $root.hallgw.GameConfig.encode(message.GameConfig[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgGetGameConfigResp message, length delimited. Does not implicitly {@link hallgw.MsgGetGameConfigResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {hallgw.IMsgGetGameConfigResp} message MsgGetGameConfigResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgGetGameConfigResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgGetGameConfigResp message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgGetGameConfigResp} MsgGetGameConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameConfigResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgGetGameConfigResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GameConfig && message.GameConfig.length))
                        message.GameConfig = [];
                    message.GameConfig.push($root.hallgw.GameConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgGetGameConfigResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgGetGameConfigResp} MsgGetGameConfigResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgGetGameConfigResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgGetGameConfigResp message.
         * @function verify
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgGetGameConfigResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameConfig != null && message.hasOwnProperty("GameConfig")) {
                if (!Array.isArray(message.GameConfig))
                    return "GameConfig: array expected";
                for (var i = 0; i < message.GameConfig.length; ++i) {
                    var error = $root.hallgw.GameConfig.verify(message.GameConfig[i]);
                    if (error)
                        return "GameConfig." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MsgGetGameConfigResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgGetGameConfigResp} MsgGetGameConfigResp
         */
        MsgGetGameConfigResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgGetGameConfigResp)
                return object;
            var message = new $root.hallgw.MsgGetGameConfigResp();
            if (object.GameConfig) {
                if (!Array.isArray(object.GameConfig))
                    throw TypeError(".hallgw.MsgGetGameConfigResp.GameConfig: array expected");
                message.GameConfig = [];
                for (var i = 0; i < object.GameConfig.length; ++i) {
                    if (typeof object.GameConfig[i] !== "object")
                        throw TypeError(".hallgw.MsgGetGameConfigResp.GameConfig: object expected");
                    message.GameConfig[i] = $root.hallgw.GameConfig.fromObject(object.GameConfig[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgGetGameConfigResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgGetGameConfigResp
         * @static
         * @param {hallgw.MsgGetGameConfigResp} message MsgGetGameConfigResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgGetGameConfigResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GameConfig = [];
            if (message.GameConfig && message.GameConfig.length) {
                object.GameConfig = [];
                for (var j = 0; j < message.GameConfig.length; ++j)
                    object.GameConfig[j] = $root.hallgw.GameConfig.toObject(message.GameConfig[j], options);
            }
            return object;
        };

        /**
         * Converts this MsgGetGameConfigResp to JSON.
         * @function toJSON
         * @memberof hallgw.MsgGetGameConfigResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgGetGameConfigResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgGetGameConfigResp;
    })();

    hallgw.MsgModifyGameConfigNotify = (function() {

        /**
         * Properties of a MsgModifyGameConfigNotify.
         * @memberof hallgw
         * @interface IMsgModifyGameConfigNotify
         * @property {hallgw.IGameConfig|null} [GameConfig] MsgModifyGameConfigNotify GameConfig
         */

        /**
         * Constructs a new MsgModifyGameConfigNotify.
         * @memberof hallgw
         * @classdesc Represents a MsgModifyGameConfigNotify.
         * @implements IMsgModifyGameConfigNotify
         * @constructor
         * @param {hallgw.IMsgModifyGameConfigNotify=} [properties] Properties to set
         */
        function MsgModifyGameConfigNotify(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgModifyGameConfigNotify GameConfig.
         * @member {hallgw.IGameConfig|null|undefined} GameConfig
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @instance
         */
        MsgModifyGameConfigNotify.prototype.GameConfig = null;

        /**
         * Creates a new MsgModifyGameConfigNotify instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {hallgw.IMsgModifyGameConfigNotify=} [properties] Properties to set
         * @returns {hallgw.MsgModifyGameConfigNotify} MsgModifyGameConfigNotify instance
         */
        MsgModifyGameConfigNotify.create = function create(properties) {
            return new MsgModifyGameConfigNotify(properties);
        };

        /**
         * Encodes the specified MsgModifyGameConfigNotify message. Does not implicitly {@link hallgw.MsgModifyGameConfigNotify.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {hallgw.IMsgModifyGameConfigNotify} message MsgModifyGameConfigNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgModifyGameConfigNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameConfig != null && message.hasOwnProperty("GameConfig"))
                $root.hallgw.GameConfig.encode(message.GameConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MsgModifyGameConfigNotify message, length delimited. Does not implicitly {@link hallgw.MsgModifyGameConfigNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {hallgw.IMsgModifyGameConfigNotify} message MsgModifyGameConfigNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgModifyGameConfigNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgModifyGameConfigNotify message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgModifyGameConfigNotify} MsgModifyGameConfigNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgModifyGameConfigNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgModifyGameConfigNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameConfig = $root.hallgw.GameConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgModifyGameConfigNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgModifyGameConfigNotify} MsgModifyGameConfigNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgModifyGameConfigNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgModifyGameConfigNotify message.
         * @function verify
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgModifyGameConfigNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameConfig != null && message.hasOwnProperty("GameConfig")) {
                var error = $root.hallgw.GameConfig.verify(message.GameConfig);
                if (error)
                    return "GameConfig." + error;
            }
            return null;
        };

        /**
         * Creates a MsgModifyGameConfigNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgModifyGameConfigNotify} MsgModifyGameConfigNotify
         */
        MsgModifyGameConfigNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgModifyGameConfigNotify)
                return object;
            var message = new $root.hallgw.MsgModifyGameConfigNotify();
            if (object.GameConfig != null) {
                if (typeof object.GameConfig !== "object")
                    throw TypeError(".hallgw.MsgModifyGameConfigNotify.GameConfig: object expected");
                message.GameConfig = $root.hallgw.GameConfig.fromObject(object.GameConfig);
            }
            return message;
        };

        /**
         * Creates a plain object from a MsgModifyGameConfigNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @static
         * @param {hallgw.MsgModifyGameConfigNotify} message MsgModifyGameConfigNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgModifyGameConfigNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameConfig = null;
            if (message.GameConfig != null && message.hasOwnProperty("GameConfig"))
                object.GameConfig = $root.hallgw.GameConfig.toObject(message.GameConfig, options);
            return object;
        };

        /**
         * Converts this MsgModifyGameConfigNotify to JSON.
         * @function toJSON
         * @memberof hallgw.MsgModifyGameConfigNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgModifyGameConfigNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgModifyGameConfigNotify;
    })();

    return hallgw;
})();

module.exports = $root;
