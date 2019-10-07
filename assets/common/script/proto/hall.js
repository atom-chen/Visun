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
     * CMD enum.
     * @name hallgw.CMD
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
     * @property {number} Msg_DisableGame=20008 Msg_DisableGame value
     * @property {number} Msg_BroadcastNotice=80000 Msg_BroadcastNotice value
     * @property {number} Msg_BroadcastMarquee=80001 Msg_BroadcastMarquee value
     * @property {number} Msg_BroadcastPopup=80002 Msg_BroadcastPopup value
     * @property {number} Msg_BroadcastGameConfigModify=80003 Msg_BroadcastGameConfigModify value
     */
    hallgw.CMD = (function() {
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
        values[valuesById[20008] = "Msg_DisableGame"] = 20008;
        values[valuesById[80000] = "Msg_BroadcastNotice"] = 80000;
        values[valuesById[80001] = "Msg_BroadcastMarquee"] = 80001;
        values[valuesById[80002] = "Msg_BroadcastPopup"] = 80002;
        values[valuesById[80003] = "Msg_BroadcastGameConfigModify"] = 80003;
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
     * @property {number} MsgGetGameConfigRespRedisOperErr=4 MsgGetGameConfigRespRedisOperErr value
     * @property {number} MsgChangeHeadRespCallMemberServiceErr=5 MsgChangeHeadRespCallMemberServiceErr value
     */
    hallgw.RespErr = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "RespErr_Unknown"] = 0;
        values[valuesById[1] = "ReqFormatErr"] = 1;
        values[valuesById[2] = "MsgGetUserInfoRespRedisOperErr"] = 2;
        values[valuesById[3] = "MsgGetGameListRespDBOperErr"] = 3;
        values[valuesById[4] = "MsgGetGameConfigRespRedisOperErr"] = 4;
        values[valuesById[5] = "MsgChangeHeadRespCallMemberServiceErr"] = 5;
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
         * @property {string|null} [Name] MsgGetUserInfoResp Name
         * @property {number|null} [Coin] MsgGetUserInfoResp Coin
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
         * MsgGetUserInfoResp Name.
         * @member {string} Name
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Name = "";

        /**
         * MsgGetUserInfoResp Coin.
         * @member {number} Coin
         * @memberof hallgw.MsgGetUserInfoResp
         * @instance
         */
        MsgGetUserInfoResp.prototype.Coin = 0;

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
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.Coin);
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Head);
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
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Coin = reader.double();
                    break;
                case 4:
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
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (typeof message.Coin !== "number")
                    return "Coin: number expected";
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
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Coin != null)
                message.Coin = Number(object.Coin);
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
                object.Name = "";
                object.Coin = 0;
                object.Head = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                object.Coin = options.json && !isFinite(message.Coin) ? String(message.Coin) : message.Coin;
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
         * @property {number|Long|null} [Id] GameInfo Id
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
         * @member {number|Long} Id
         * @memberof hallgw.GameInfo
         * @instance
         */
        GameInfo.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
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
                    message.Id = reader.int64();
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
                if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                    return "Id: integer|Long expected";
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
                if ($util.Long)
                    (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                else if (typeof object.Id === "string")
                    message.Id = parseInt(object.Id, 10);
                else if (typeof object.Id === "number")
                    message.Id = object.Id;
                else if (typeof object.Id === "object")
                    message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Id = options.longs === String ? "0" : 0;
                object.Name = "";
                object.State = 0;
                object.HaveRoomList = 0;
                object.RoomList = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (typeof message.Id === "number")
                    object.Id = options.longs === String ? String(message.Id) : message.Id;
                else
                    object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
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
         * @property {number|null} [Code] MsgChangeHeadResp Code
         * @property {string|null} [Msg] MsgChangeHeadResp Msg
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
         * MsgChangeHeadResp Code.
         * @member {number} Code
         * @memberof hallgw.MsgChangeHeadResp
         * @instance
         */
        MsgChangeHeadResp.prototype.Code = 0;

        /**
         * MsgChangeHeadResp Msg.
         * @member {string} Msg
         * @memberof hallgw.MsgChangeHeadResp
         * @instance
         */
        MsgChangeHeadResp.prototype.Msg = "";

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
            if (message.Code != null && message.hasOwnProperty("Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
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
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
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
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
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
            var message = new $root.hallgw.MsgChangeHeadResp();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
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
        MsgChangeHeadResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
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

    hallgw.Game = (function() {

        /**
         * Properties of a Game.
         * @memberof hallgw
         * @interface IGame
         * @property {number|Long|null} [Id] Game Id
         * @property {string|null} [Name] Game Name
         */

        /**
         * Constructs a new Game.
         * @memberof hallgw
         * @classdesc Represents a Game.
         * @implements IGame
         * @constructor
         * @param {hallgw.IGame=} [properties] Properties to set
         */
        function Game(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Game Id.
         * @member {number|Long} Id
         * @memberof hallgw.Game
         * @instance
         */
        Game.prototype.Id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Game Name.
         * @member {string} Name
         * @memberof hallgw.Game
         * @instance
         */
        Game.prototype.Name = "";

        /**
         * Creates a new Game instance using the specified properties.
         * @function create
         * @memberof hallgw.Game
         * @static
         * @param {hallgw.IGame=} [properties] Properties to set
         * @returns {hallgw.Game} Game instance
         */
        Game.create = function create(properties) {
            return new Game(properties);
        };

        /**
         * Encodes the specified Game message. Does not implicitly {@link hallgw.Game.verify|verify} messages.
         * @function encode
         * @memberof hallgw.Game
         * @static
         * @param {hallgw.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified Game message, length delimited. Does not implicitly {@link hallgw.Game.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.Game
         * @static
         * @param {hallgw.IGame} message Game message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Game.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Game message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.Game();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Game message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.Game
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.Game} Game
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Game.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Game message.
         * @function verify
         * @memberof hallgw.Game
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Game.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id) && !(message.Id && $util.isInteger(message.Id.low) && $util.isInteger(message.Id.high)))
                    return "Id: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        /**
         * Creates a Game message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.Game
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.Game} Game
         */
        Game.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.Game)
                return object;
            var message = new $root.hallgw.Game();
            if (object.Id != null)
                if ($util.Long)
                    (message.Id = $util.Long.fromValue(object.Id)).unsigned = false;
                else if (typeof object.Id === "string")
                    message.Id = parseInt(object.Id, 10);
                else if (typeof object.Id === "number")
                    message.Id = object.Id;
                else if (typeof object.Id === "object")
                    message.Id = new $util.LongBits(object.Id.low >>> 0, object.Id.high >>> 0).toNumber();
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a Game message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.Game
         * @static
         * @param {hallgw.Game} message Game
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Game.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Id = options.longs === String ? "0" : 0;
                object.Name = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (typeof message.Id === "number")
                    object.Id = options.longs === String ? String(message.Id) : message.Id;
                else
                    object.Id = options.longs === String ? $util.Long.prototype.toString.call(message.Id) : options.longs === Number ? new $util.LongBits(message.Id.low >>> 0, message.Id.high >>> 0).toNumber() : message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this Game to JSON.
         * @function toJSON
         * @memberof hallgw.Game
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Game.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Game;
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

    hallgw.GameLabel = (function() {

        /**
         * Properties of a GameLabel.
         * @memberof hallgw
         * @interface IGameLabel
         * @property {number|null} [Id] GameLabel Id
         * @property {string|null} [Name] GameLabel Name
         */

        /**
         * Constructs a new GameLabel.
         * @memberof hallgw
         * @classdesc Represents a GameLabel.
         * @implements IGameLabel
         * @constructor
         * @param {hallgw.IGameLabel=} [properties] Properties to set
         */
        function GameLabel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLabel Id.
         * @member {number} Id
         * @memberof hallgw.GameLabel
         * @instance
         */
        GameLabel.prototype.Id = 0;

        /**
         * GameLabel Name.
         * @member {string} Name
         * @memberof hallgw.GameLabel
         * @instance
         */
        GameLabel.prototype.Name = "";

        /**
         * Creates a new GameLabel instance using the specified properties.
         * @function create
         * @memberof hallgw.GameLabel
         * @static
         * @param {hallgw.IGameLabel=} [properties] Properties to set
         * @returns {hallgw.GameLabel} GameLabel instance
         */
        GameLabel.create = function create(properties) {
            return new GameLabel(properties);
        };

        /**
         * Encodes the specified GameLabel message. Does not implicitly {@link hallgw.GameLabel.verify|verify} messages.
         * @function encode
         * @memberof hallgw.GameLabel
         * @static
         * @param {hallgw.IGameLabel} message GameLabel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLabel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && message.hasOwnProperty("Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified GameLabel message, length delimited. Does not implicitly {@link hallgw.GameLabel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.GameLabel
         * @static
         * @param {hallgw.IGameLabel} message GameLabel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLabel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLabel message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.GameLabel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.GameLabel} GameLabel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLabel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.GameLabel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLabel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.GameLabel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.GameLabel} GameLabel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLabel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLabel message.
         * @function verify
         * @memberof hallgw.GameLabel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLabel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Id != null && message.hasOwnProperty("Id"))
                if (!$util.isInteger(message.Id))
                    return "Id: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        /**
         * Creates a GameLabel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.GameLabel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.GameLabel} GameLabel
         */
        GameLabel.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.GameLabel)
                return object;
            var message = new $root.hallgw.GameLabel();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a GameLabel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.GameLabel
         * @static
         * @param {hallgw.GameLabel} message GameLabel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLabel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Name = "";
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this GameLabel to JSON.
         * @function toJSON
         * @memberof hallgw.GameLabel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLabel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLabel;
    })();

    hallgw.GameRelation = (function() {

        /**
         * Properties of a GameRelation.
         * @memberof hallgw
         * @interface IGameRelation
         * @property {number|Long|null} [GameId] GameRelation GameId
         * @property {number|null} [GameTypeId] GameRelation GameTypeId
         * @property {number|null} [GameLabelId] GameRelation GameLabelId
         * @property {number|null} [GameOrder] GameRelation GameOrder
         * @property {string|null} [Rooms] GameRelation Rooms
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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameRelation GameId.
         * @member {number|Long} GameId
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
         * GameRelation GameOrder.
         * @member {number} GameOrder
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.GameOrder = 0;

        /**
         * GameRelation Rooms.
         * @member {string} Rooms
         * @memberof hallgw.GameRelation
         * @instance
         */
        GameRelation.prototype.Rooms = "";

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
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.GameId);
            if (message.GameTypeId != null && message.hasOwnProperty("GameTypeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameTypeId);
            if (message.GameLabelId != null && message.hasOwnProperty("GameLabelId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameLabelId);
            if (message.GameOrder != null && message.hasOwnProperty("GameOrder"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.GameOrder);
            if (message.Rooms != null && message.hasOwnProperty("Rooms"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Rooms);
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
                    message.GameId = reader.int64();
                    break;
                case 2:
                    message.GameTypeId = reader.int32();
                    break;
                case 3:
                    message.GameLabelId = reader.int32();
                    break;
                case 4:
                    message.GameOrder = reader.int32();
                    break;
                case 5:
                    message.Rooms = reader.string();
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
                if (!$util.isInteger(message.GameId) && !(message.GameId && $util.isInteger(message.GameId.low) && $util.isInteger(message.GameId.high)))
                    return "GameId: integer|Long expected";
            if (message.GameTypeId != null && message.hasOwnProperty("GameTypeId"))
                if (!$util.isInteger(message.GameTypeId))
                    return "GameTypeId: integer expected";
            if (message.GameLabelId != null && message.hasOwnProperty("GameLabelId"))
                if (!$util.isInteger(message.GameLabelId))
                    return "GameLabelId: integer expected";
            if (message.GameOrder != null && message.hasOwnProperty("GameOrder"))
                if (!$util.isInteger(message.GameOrder))
                    return "GameOrder: integer expected";
            if (message.Rooms != null && message.hasOwnProperty("Rooms"))
                if (!$util.isString(message.Rooms))
                    return "Rooms: string expected";
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
                if ($util.Long)
                    (message.GameId = $util.Long.fromValue(object.GameId)).unsigned = false;
                else if (typeof object.GameId === "string")
                    message.GameId = parseInt(object.GameId, 10);
                else if (typeof object.GameId === "number")
                    message.GameId = object.GameId;
                else if (typeof object.GameId === "object")
                    message.GameId = new $util.LongBits(object.GameId.low >>> 0, object.GameId.high >>> 0).toNumber();
            if (object.GameTypeId != null)
                message.GameTypeId = object.GameTypeId | 0;
            if (object.GameLabelId != null)
                message.GameLabelId = object.GameLabelId | 0;
            if (object.GameOrder != null)
                message.GameOrder = object.GameOrder | 0;
            if (object.Rooms != null)
                message.Rooms = String(object.Rooms);
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
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GameId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameId = options.longs === String ? "0" : 0;
                object.GameTypeId = 0;
                object.GameLabelId = 0;
                object.GameOrder = 0;
                object.Rooms = "";
            }
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (typeof message.GameId === "number")
                    object.GameId = options.longs === String ? String(message.GameId) : message.GameId;
                else
                    object.GameId = options.longs === String ? $util.Long.prototype.toString.call(message.GameId) : options.longs === Number ? new $util.LongBits(message.GameId.low >>> 0, message.GameId.high >>> 0).toNumber() : message.GameId;
            if (message.GameTypeId != null && message.hasOwnProperty("GameTypeId"))
                object.GameTypeId = message.GameTypeId;
            if (message.GameLabelId != null && message.hasOwnProperty("GameLabelId"))
                object.GameLabelId = message.GameLabelId;
            if (message.GameOrder != null && message.hasOwnProperty("GameOrder"))
                object.GameOrder = message.GameOrder;
            if (message.Rooms != null && message.hasOwnProperty("Rooms"))
                object.Rooms = message.Rooms;
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
         * @property {number|Long|null} [PlatformId] GameConfig PlatformId
         * @property {Array.<hallgw.IGame>|null} [Game] GameConfig Game
         * @property {Array.<hallgw.IGameType>|null} [Type] GameConfig Type
         * @property {Array.<hallgw.IGameLabel>|null} [Label] GameConfig Label
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
            this.Game = [];
            this.Type = [];
            this.Label = [];
            this.Relation = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameConfig PlatformId.
         * @member {number|Long} PlatformId
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.PlatformId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameConfig Game.
         * @member {Array.<hallgw.IGame>} Game
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.Game = $util.emptyArray;

        /**
         * GameConfig Type.
         * @member {Array.<hallgw.IGameType>} Type
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.Type = $util.emptyArray;

        /**
         * GameConfig Label.
         * @member {Array.<hallgw.IGameLabel>} Label
         * @memberof hallgw.GameConfig
         * @instance
         */
        GameConfig.prototype.Label = $util.emptyArray;

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
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.PlatformId);
            if (message.Game != null && message.Game.length)
                for (var i = 0; i < message.Game.length; ++i)
                    $root.hallgw.Game.encode(message.Game[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Type != null && message.Type.length)
                for (var i = 0; i < message.Type.length; ++i)
                    $root.hallgw.GameType.encode(message.Type[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Label != null && message.Label.length)
                for (var i = 0; i < message.Label.length; ++i)
                    $root.hallgw.GameLabel.encode(message.Label[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.Relation != null && message.Relation.length)
                for (var i = 0; i < message.Relation.length; ++i)
                    $root.hallgw.GameRelation.encode(message.Relation[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                    message.PlatformId = reader.int64();
                    break;
                case 2:
                    if (!(message.Game && message.Game.length))
                        message.Game = [];
                    message.Game.push($root.hallgw.Game.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.Type && message.Type.length))
                        message.Type = [];
                    message.Type.push($root.hallgw.GameType.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.Label && message.Label.length))
                        message.Label = [];
                    message.Label.push($root.hallgw.GameLabel.decode(reader, reader.uint32()));
                    break;
                case 5:
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
                if (!$util.isInteger(message.PlatformId) && !(message.PlatformId && $util.isInteger(message.PlatformId.low) && $util.isInteger(message.PlatformId.high)))
                    return "PlatformId: integer|Long expected";
            if (message.Game != null && message.hasOwnProperty("Game")) {
                if (!Array.isArray(message.Game))
                    return "Game: array expected";
                for (var i = 0; i < message.Game.length; ++i) {
                    var error = $root.hallgw.Game.verify(message.Game[i]);
                    if (error)
                        return "Game." + error;
                }
            }
            if (message.Type != null && message.hasOwnProperty("Type")) {
                if (!Array.isArray(message.Type))
                    return "Type: array expected";
                for (var i = 0; i < message.Type.length; ++i) {
                    var error = $root.hallgw.GameType.verify(message.Type[i]);
                    if (error)
                        return "Type." + error;
                }
            }
            if (message.Label != null && message.hasOwnProperty("Label")) {
                if (!Array.isArray(message.Label))
                    return "Label: array expected";
                for (var i = 0; i < message.Label.length; ++i) {
                    var error = $root.hallgw.GameLabel.verify(message.Label[i]);
                    if (error)
                        return "Label." + error;
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
                if ($util.Long)
                    (message.PlatformId = $util.Long.fromValue(object.PlatformId)).unsigned = false;
                else if (typeof object.PlatformId === "string")
                    message.PlatformId = parseInt(object.PlatformId, 10);
                else if (typeof object.PlatformId === "number")
                    message.PlatformId = object.PlatformId;
                else if (typeof object.PlatformId === "object")
                    message.PlatformId = new $util.LongBits(object.PlatformId.low >>> 0, object.PlatformId.high >>> 0).toNumber();
            if (object.Game) {
                if (!Array.isArray(object.Game))
                    throw TypeError(".hallgw.GameConfig.Game: array expected");
                message.Game = [];
                for (var i = 0; i < object.Game.length; ++i) {
                    if (typeof object.Game[i] !== "object")
                        throw TypeError(".hallgw.GameConfig.Game: object expected");
                    message.Game[i] = $root.hallgw.Game.fromObject(object.Game[i]);
                }
            }
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
            if (object.Label) {
                if (!Array.isArray(object.Label))
                    throw TypeError(".hallgw.GameConfig.Label: array expected");
                message.Label = [];
                for (var i = 0; i < object.Label.length; ++i) {
                    if (typeof object.Label[i] !== "object")
                        throw TypeError(".hallgw.GameConfig.Label: object expected");
                    message.Label[i] = $root.hallgw.GameLabel.fromObject(object.Label[i]);
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
                object.Game = [];
                object.Type = [];
                object.Label = [];
                object.Relation = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlatformId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformId = options.longs === String ? "0" : 0;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (typeof message.PlatformId === "number")
                    object.PlatformId = options.longs === String ? String(message.PlatformId) : message.PlatformId;
                else
                    object.PlatformId = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformId) : options.longs === Number ? new $util.LongBits(message.PlatformId.low >>> 0, message.PlatformId.high >>> 0).toNumber() : message.PlatformId;
            if (message.Game && message.Game.length) {
                object.Game = [];
                for (var j = 0; j < message.Game.length; ++j)
                    object.Game[j] = $root.hallgw.Game.toObject(message.Game[j], options);
            }
            if (message.Type && message.Type.length) {
                object.Type = [];
                for (var j = 0; j < message.Type.length; ++j)
                    object.Type[j] = $root.hallgw.GameType.toObject(message.Type[j], options);
            }
            if (message.Label && message.Label.length) {
                object.Label = [];
                for (var j = 0; j < message.Label.length; ++j)
                    object.Label[j] = $root.hallgw.GameLabel.toObject(message.Label[j], options);
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
         * @property {number|Long|null} [PlatformId] MsgGetGameConfigReq PlatformId
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
         * MsgGetGameConfigReq PlatformId.
         * @member {number|Long} PlatformId
         * @memberof hallgw.MsgGetGameConfigReq
         * @instance
         */
        MsgGetGameConfigReq.prototype.PlatformId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

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
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.PlatformId);
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
                case 1:
                    message.PlatformId = reader.int64();
                    break;
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
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (!$util.isInteger(message.PlatformId) && !(message.PlatformId && $util.isInteger(message.PlatformId.low) && $util.isInteger(message.PlatformId.high)))
                    return "PlatformId: integer|Long expected";
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
            var message = new $root.hallgw.MsgGetGameConfigReq();
            if (object.PlatformId != null)
                if ($util.Long)
                    (message.PlatformId = $util.Long.fromValue(object.PlatformId)).unsigned = false;
                else if (typeof object.PlatformId === "string")
                    message.PlatformId = parseInt(object.PlatformId, 10);
                else if (typeof object.PlatformId === "number")
                    message.PlatformId = object.PlatformId;
                else if (typeof object.PlatformId === "object")
                    message.PlatformId = new $util.LongBits(object.PlatformId.low >>> 0, object.PlatformId.high >>> 0).toNumber();
            return message;
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
        MsgGetGameConfigReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlatformId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformId = options.longs === String ? "0" : 0;
            if (message.PlatformId != null && message.hasOwnProperty("PlatformId"))
                if (typeof message.PlatformId === "number")
                    object.PlatformId = options.longs === String ? String(message.PlatformId) : message.PlatformId;
                else
                    object.PlatformId = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformId) : options.longs === Number ? new $util.LongBits(message.PlatformId.low >>> 0, message.PlatformId.high >>> 0).toNumber() : message.PlatformId;
            return object;
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
         * @property {hallgw.IGameConfig|null} [GameConfig] MsgGetGameConfigResp GameConfig
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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgGetGameConfigResp GameConfig.
         * @member {hallgw.IGameConfig|null|undefined} GameConfig
         * @memberof hallgw.MsgGetGameConfigResp
         * @instance
         */
        MsgGetGameConfigResp.prototype.GameConfig = null;

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
            if (message.GameConfig != null && message.hasOwnProperty("GameConfig"))
                $root.hallgw.GameConfig.encode(message.GameConfig, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                var error = $root.hallgw.GameConfig.verify(message.GameConfig);
                if (error)
                    return "GameConfig." + error;
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
            if (object.GameConfig != null) {
                if (typeof object.GameConfig !== "object")
                    throw TypeError(".hallgw.MsgGetGameConfigResp.GameConfig: object expected");
                message.GameConfig = $root.hallgw.GameConfig.fromObject(object.GameConfig);
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
            if (options.defaults)
                object.GameConfig = null;
            if (message.GameConfig != null && message.hasOwnProperty("GameConfig"))
                object.GameConfig = $root.hallgw.GameConfig.toObject(message.GameConfig, options);
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

    hallgw.MsgMarqueeNotice = (function() {

        /**
         * Properties of a MsgMarqueeNotice.
         * @memberof hallgw
         * @interface IMsgMarqueeNotice
         * @property {Array.<number|Long>|null} [PlatformIDs] MsgMarqueeNotice PlatformIDs
         * @property {Array.<number|Long>|null} [GameIDs] MsgMarqueeNotice GameIDs
         * @property {boolean|null} [IsToHall] MsgMarqueeNotice IsToHall
         * @property {string|null} [Content] MsgMarqueeNotice Content
         */

        /**
         * Constructs a new MsgMarqueeNotice.
         * @memberof hallgw
         * @classdesc Represents a MsgMarqueeNotice.
         * @implements IMsgMarqueeNotice
         * @constructor
         * @param {hallgw.IMsgMarqueeNotice=} [properties] Properties to set
         */
        function MsgMarqueeNotice(properties) {
            this.PlatformIDs = [];
            this.GameIDs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgMarqueeNotice PlatformIDs.
         * @member {Array.<number|Long>} PlatformIDs
         * @memberof hallgw.MsgMarqueeNotice
         * @instance
         */
        MsgMarqueeNotice.prototype.PlatformIDs = $util.emptyArray;

        /**
         * MsgMarqueeNotice GameIDs.
         * @member {Array.<number|Long>} GameIDs
         * @memberof hallgw.MsgMarqueeNotice
         * @instance
         */
        MsgMarqueeNotice.prototype.GameIDs = $util.emptyArray;

        /**
         * MsgMarqueeNotice IsToHall.
         * @member {boolean} IsToHall
         * @memberof hallgw.MsgMarqueeNotice
         * @instance
         */
        MsgMarqueeNotice.prototype.IsToHall = false;

        /**
         * MsgMarqueeNotice Content.
         * @member {string} Content
         * @memberof hallgw.MsgMarqueeNotice
         * @instance
         */
        MsgMarqueeNotice.prototype.Content = "";

        /**
         * Creates a new MsgMarqueeNotice instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {hallgw.IMsgMarqueeNotice=} [properties] Properties to set
         * @returns {hallgw.MsgMarqueeNotice} MsgMarqueeNotice instance
         */
        MsgMarqueeNotice.create = function create(properties) {
            return new MsgMarqueeNotice(properties);
        };

        /**
         * Encodes the specified MsgMarqueeNotice message. Does not implicitly {@link hallgw.MsgMarqueeNotice.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {hallgw.IMsgMarqueeNotice} message MsgMarqueeNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgMarqueeNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlatformIDs != null && message.PlatformIDs.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.PlatformIDs.length; ++i)
                    writer.int64(message.PlatformIDs[i]);
                writer.ldelim();
            }
            if (message.GameIDs != null && message.GameIDs.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.GameIDs.length; ++i)
                    writer.int64(message.GameIDs[i]);
                writer.ldelim();
            }
            if (message.IsToHall != null && message.hasOwnProperty("IsToHall"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsToHall);
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified MsgMarqueeNotice message, length delimited. Does not implicitly {@link hallgw.MsgMarqueeNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {hallgw.IMsgMarqueeNotice} message MsgMarqueeNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgMarqueeNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgMarqueeNotice message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgMarqueeNotice} MsgMarqueeNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgMarqueeNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgMarqueeNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.PlatformIDs && message.PlatformIDs.length))
                        message.PlatformIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.PlatformIDs.push(reader.int64());
                    } else
                        message.PlatformIDs.push(reader.int64());
                    break;
                case 2:
                    if (!(message.GameIDs && message.GameIDs.length))
                        message.GameIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.GameIDs.push(reader.int64());
                    } else
                        message.GameIDs.push(reader.int64());
                    break;
                case 3:
                    message.IsToHall = reader.bool();
                    break;
                case 4:
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
         * Decodes a MsgMarqueeNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgMarqueeNotice} MsgMarqueeNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgMarqueeNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgMarqueeNotice message.
         * @function verify
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgMarqueeNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PlatformIDs != null && message.hasOwnProperty("PlatformIDs")) {
                if (!Array.isArray(message.PlatformIDs))
                    return "PlatformIDs: array expected";
                for (var i = 0; i < message.PlatformIDs.length; ++i)
                    if (!$util.isInteger(message.PlatformIDs[i]) && !(message.PlatformIDs[i] && $util.isInteger(message.PlatformIDs[i].low) && $util.isInteger(message.PlatformIDs[i].high)))
                        return "PlatformIDs: integer|Long[] expected";
            }
            if (message.GameIDs != null && message.hasOwnProperty("GameIDs")) {
                if (!Array.isArray(message.GameIDs))
                    return "GameIDs: array expected";
                for (var i = 0; i < message.GameIDs.length; ++i)
                    if (!$util.isInteger(message.GameIDs[i]) && !(message.GameIDs[i] && $util.isInteger(message.GameIDs[i].low) && $util.isInteger(message.GameIDs[i].high)))
                        return "GameIDs: integer|Long[] expected";
            }
            if (message.IsToHall != null && message.hasOwnProperty("IsToHall"))
                if (typeof message.IsToHall !== "boolean")
                    return "IsToHall: boolean expected";
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a MsgMarqueeNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgMarqueeNotice} MsgMarqueeNotice
         */
        MsgMarqueeNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgMarqueeNotice)
                return object;
            var message = new $root.hallgw.MsgMarqueeNotice();
            if (object.PlatformIDs) {
                if (!Array.isArray(object.PlatformIDs))
                    throw TypeError(".hallgw.MsgMarqueeNotice.PlatformIDs: array expected");
                message.PlatformIDs = [];
                for (var i = 0; i < object.PlatformIDs.length; ++i)
                    if ($util.Long)
                        (message.PlatformIDs[i] = $util.Long.fromValue(object.PlatformIDs[i])).unsigned = false;
                    else if (typeof object.PlatformIDs[i] === "string")
                        message.PlatformIDs[i] = parseInt(object.PlatformIDs[i], 10);
                    else if (typeof object.PlatformIDs[i] === "number")
                        message.PlatformIDs[i] = object.PlatformIDs[i];
                    else if (typeof object.PlatformIDs[i] === "object")
                        message.PlatformIDs[i] = new $util.LongBits(object.PlatformIDs[i].low >>> 0, object.PlatformIDs[i].high >>> 0).toNumber();
            }
            if (object.GameIDs) {
                if (!Array.isArray(object.GameIDs))
                    throw TypeError(".hallgw.MsgMarqueeNotice.GameIDs: array expected");
                message.GameIDs = [];
                for (var i = 0; i < object.GameIDs.length; ++i)
                    if ($util.Long)
                        (message.GameIDs[i] = $util.Long.fromValue(object.GameIDs[i])).unsigned = false;
                    else if (typeof object.GameIDs[i] === "string")
                        message.GameIDs[i] = parseInt(object.GameIDs[i], 10);
                    else if (typeof object.GameIDs[i] === "number")
                        message.GameIDs[i] = object.GameIDs[i];
                    else if (typeof object.GameIDs[i] === "object")
                        message.GameIDs[i] = new $util.LongBits(object.GameIDs[i].low >>> 0, object.GameIDs[i].high >>> 0).toNumber();
            }
            if (object.IsToHall != null)
                message.IsToHall = Boolean(object.IsToHall);
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a MsgMarqueeNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgMarqueeNotice
         * @static
         * @param {hallgw.MsgMarqueeNotice} message MsgMarqueeNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgMarqueeNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.PlatformIDs = [];
                object.GameIDs = [];
            }
            if (options.defaults) {
                object.IsToHall = false;
                object.Content = "";
            }
            if (message.PlatformIDs && message.PlatformIDs.length) {
                object.PlatformIDs = [];
                for (var j = 0; j < message.PlatformIDs.length; ++j)
                    if (typeof message.PlatformIDs[j] === "number")
                        object.PlatformIDs[j] = options.longs === String ? String(message.PlatformIDs[j]) : message.PlatformIDs[j];
                    else
                        object.PlatformIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformIDs[j]) : options.longs === Number ? new $util.LongBits(message.PlatformIDs[j].low >>> 0, message.PlatformIDs[j].high >>> 0).toNumber() : message.PlatformIDs[j];
            }
            if (message.GameIDs && message.GameIDs.length) {
                object.GameIDs = [];
                for (var j = 0; j < message.GameIDs.length; ++j)
                    if (typeof message.GameIDs[j] === "number")
                        object.GameIDs[j] = options.longs === String ? String(message.GameIDs[j]) : message.GameIDs[j];
                    else
                        object.GameIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.GameIDs[j]) : options.longs === Number ? new $util.LongBits(message.GameIDs[j].low >>> 0, message.GameIDs[j].high >>> 0).toNumber() : message.GameIDs[j];
            }
            if (message.IsToHall != null && message.hasOwnProperty("IsToHall"))
                object.IsToHall = message.IsToHall;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this MsgMarqueeNotice to JSON.
         * @function toJSON
         * @memberof hallgw.MsgMarqueeNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgMarqueeNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgMarqueeNotice;
    })();

    hallgw.MsgPopupNotice = (function() {

        /**
         * Properties of a MsgPopupNotice.
         * @memberof hallgw
         * @interface IMsgPopupNotice
         * @property {number|null} [KindID] MsgPopupNotice KindID
         * @property {Array.<number|Long>|null} [GameIDs] MsgPopupNotice GameIDs
         * @property {string|null} [Content] MsgPopupNotice Content
         */

        /**
         * Constructs a new MsgPopupNotice.
         * @memberof hallgw
         * @classdesc Represents a MsgPopupNotice.
         * @implements IMsgPopupNotice
         * @constructor
         * @param {hallgw.IMsgPopupNotice=} [properties] Properties to set
         */
        function MsgPopupNotice(properties) {
            this.GameIDs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgPopupNotice KindID.
         * @member {number} KindID
         * @memberof hallgw.MsgPopupNotice
         * @instance
         */
        MsgPopupNotice.prototype.KindID = 0;

        /**
         * MsgPopupNotice GameIDs.
         * @member {Array.<number|Long>} GameIDs
         * @memberof hallgw.MsgPopupNotice
         * @instance
         */
        MsgPopupNotice.prototype.GameIDs = $util.emptyArray;

        /**
         * MsgPopupNotice Content.
         * @member {string} Content
         * @memberof hallgw.MsgPopupNotice
         * @instance
         */
        MsgPopupNotice.prototype.Content = "";

        /**
         * Creates a new MsgPopupNotice instance using the specified properties.
         * @function create
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {hallgw.IMsgPopupNotice=} [properties] Properties to set
         * @returns {hallgw.MsgPopupNotice} MsgPopupNotice instance
         */
        MsgPopupNotice.create = function create(properties) {
            return new MsgPopupNotice(properties);
        };

        /**
         * Encodes the specified MsgPopupNotice message. Does not implicitly {@link hallgw.MsgPopupNotice.verify|verify} messages.
         * @function encode
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {hallgw.IMsgPopupNotice} message MsgPopupNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgPopupNotice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.KindID);
            if (message.GameIDs != null && message.GameIDs.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.GameIDs.length; ++i)
                    writer.int64(message.GameIDs[i]);
                writer.ldelim();
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified MsgPopupNotice message, length delimited. Does not implicitly {@link hallgw.MsgPopupNotice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {hallgw.IMsgPopupNotice} message MsgPopupNotice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgPopupNotice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgPopupNotice message from the specified reader or buffer.
         * @function decode
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hallgw.MsgPopupNotice} MsgPopupNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgPopupNotice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hallgw.MsgPopupNotice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.KindID = reader.int32();
                    break;
                case 2:
                    if (!(message.GameIDs && message.GameIDs.length))
                        message.GameIDs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.GameIDs.push(reader.int64());
                    } else
                        message.GameIDs.push(reader.int64());
                    break;
                case 3:
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
         * Decodes a MsgPopupNotice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hallgw.MsgPopupNotice} MsgPopupNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgPopupNotice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgPopupNotice message.
         * @function verify
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgPopupNotice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                if (!$util.isInteger(message.KindID))
                    return "KindID: integer expected";
            if (message.GameIDs != null && message.hasOwnProperty("GameIDs")) {
                if (!Array.isArray(message.GameIDs))
                    return "GameIDs: array expected";
                for (var i = 0; i < message.GameIDs.length; ++i)
                    if (!$util.isInteger(message.GameIDs[i]) && !(message.GameIDs[i] && $util.isInteger(message.GameIDs[i].low) && $util.isInteger(message.GameIDs[i].high)))
                        return "GameIDs: integer|Long[] expected";
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                if (!$util.isString(message.Content))
                    return "Content: string expected";
            return null;
        };

        /**
         * Creates a MsgPopupNotice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hallgw.MsgPopupNotice} MsgPopupNotice
         */
        MsgPopupNotice.fromObject = function fromObject(object) {
            if (object instanceof $root.hallgw.MsgPopupNotice)
                return object;
            var message = new $root.hallgw.MsgPopupNotice();
            if (object.KindID != null)
                message.KindID = object.KindID | 0;
            if (object.GameIDs) {
                if (!Array.isArray(object.GameIDs))
                    throw TypeError(".hallgw.MsgPopupNotice.GameIDs: array expected");
                message.GameIDs = [];
                for (var i = 0; i < object.GameIDs.length; ++i)
                    if ($util.Long)
                        (message.GameIDs[i] = $util.Long.fromValue(object.GameIDs[i])).unsigned = false;
                    else if (typeof object.GameIDs[i] === "string")
                        message.GameIDs[i] = parseInt(object.GameIDs[i], 10);
                    else if (typeof object.GameIDs[i] === "number")
                        message.GameIDs[i] = object.GameIDs[i];
                    else if (typeof object.GameIDs[i] === "object")
                        message.GameIDs[i] = new $util.LongBits(object.GameIDs[i].low >>> 0, object.GameIDs[i].high >>> 0).toNumber();
            }
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a MsgPopupNotice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hallgw.MsgPopupNotice
         * @static
         * @param {hallgw.MsgPopupNotice} message MsgPopupNotice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgPopupNotice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GameIDs = [];
            if (options.defaults) {
                object.KindID = 0;
                object.Content = "";
            }
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                object.KindID = message.KindID;
            if (message.GameIDs && message.GameIDs.length) {
                object.GameIDs = [];
                for (var j = 0; j < message.GameIDs.length; ++j)
                    if (typeof message.GameIDs[j] === "number")
                        object.GameIDs[j] = options.longs === String ? String(message.GameIDs[j]) : message.GameIDs[j];
                    else
                        object.GameIDs[j] = options.longs === String ? $util.Long.prototype.toString.call(message.GameIDs[j]) : options.longs === Number ? new $util.LongBits(message.GameIDs[j].low >>> 0, message.GameIDs[j].high >>> 0).toNumber() : message.GameIDs[j];
            }
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this MsgPopupNotice to JSON.
         * @function toJSON
         * @memberof hallgw.MsgPopupNotice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgPopupNotice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgPopupNotice;
    })();

    return hallgw;
})();

module.exports = $root;
