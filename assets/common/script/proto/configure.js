/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.configure = (function() {

    var configure = {};

    configure.GameInfo = (function() {

        function GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameInfo.prototype.GameType = 0;
        GameInfo.prototype.Name = "";
        GameInfo.prototype.State = 0;
        GameInfo.prototype.PlayerCount = 0;

        GameInfo.create = function create(properties) {
            return new GameInfo(properties);
        };

        GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(18).string(message.Name);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(24).int32(message.State);
            if (message.PlayerCount != null && message.hasOwnProperty("PlayerCount"))
                writer.uint32(32).uint32(message.PlayerCount);
            return writer;
        };

        GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.configure.GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.State = reader.int32();
                    break;
                case 4:
                    message.PlayerCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.PlayerCount != null && message.hasOwnProperty("PlayerCount"))
                if (!$util.isInteger(message.PlayerCount))
                    return "PlayerCount: integer expected";
            return null;
        };

        GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.configure.GameInfo)
                return object;
            var message = new $root.configure.GameInfo();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.State != null)
                message.State = object.State | 0;
            if (object.PlayerCount != null)
                message.PlayerCount = object.PlayerCount >>> 0;
            return message;
        };

        GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameType = 0;
                object.Name = "";
                object.State = 0;
                object.PlayerCount = 0;
            }
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.PlayerCount != null && message.hasOwnProperty("PlayerCount"))
                object.PlayerCount = message.PlayerCount;
            return object;
        };

        GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameInfo;
    })();

    configure.RoomDesc = (function() {

        function RoomDesc(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomDesc.prototype.GameType = 0;
        RoomDesc.prototype.GameId = 0;
        RoomDesc.prototype.Name = "";
        RoomDesc.prototype.BaseScore = 0;
        RoomDesc.prototype.RountCount = 0;
        RoomDesc.prototype.MinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RoomDesc.prototype.MaxMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RoomDesc.prototype.MaxFighter = 0;
        RoomDesc.prototype.MaxAudience = 0;

        RoomDesc.create = function create(properties) {
            return new RoomDesc(properties);
        };

        RoomDesc.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                writer.uint32(16).uint32(message.GameId);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(26).string(message.Name);
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                writer.uint32(32).int32(message.BaseScore);
            if (message.RountCount != null && message.hasOwnProperty("RountCount"))
                writer.uint32(40).int32(message.RountCount);
            if (message.MinMoney != null && message.hasOwnProperty("MinMoney"))
                writer.uint32(48).int64(message.MinMoney);
            if (message.MaxMoney != null && message.hasOwnProperty("MaxMoney"))
                writer.uint32(56).int64(message.MaxMoney);
            if (message.MaxFighter != null && message.hasOwnProperty("MaxFighter"))
                writer.uint32(64).int32(message.MaxFighter);
            if (message.MaxAudience != null && message.hasOwnProperty("MaxAudience"))
                writer.uint32(72).int32(message.MaxAudience);
            return writer;
        };

        RoomDesc.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomDesc.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.configure.RoomDesc();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                case 2:
                    message.GameId = reader.uint32();
                    break;
                case 3:
                    message.Name = reader.string();
                    break;
                case 4:
                    message.BaseScore = reader.int32();
                    break;
                case 5:
                    message.RountCount = reader.int32();
                    break;
                case 6:
                    message.MinMoney = reader.int64();
                    break;
                case 7:
                    message.MaxMoney = reader.int64();
                    break;
                case 8:
                    message.MaxFighter = reader.int32();
                    break;
                case 9:
                    message.MaxAudience = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomDesc.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomDesc.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId))
                    return "GameId: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                if (!$util.isInteger(message.BaseScore))
                    return "BaseScore: integer expected";
            if (message.RountCount != null && message.hasOwnProperty("RountCount"))
                if (!$util.isInteger(message.RountCount))
                    return "RountCount: integer expected";
            if (message.MinMoney != null && message.hasOwnProperty("MinMoney"))
                if (!$util.isInteger(message.MinMoney) && !(message.MinMoney && $util.isInteger(message.MinMoney.low) && $util.isInteger(message.MinMoney.high)))
                    return "MinMoney: integer|Long expected";
            if (message.MaxMoney != null && message.hasOwnProperty("MaxMoney"))
                if (!$util.isInteger(message.MaxMoney) && !(message.MaxMoney && $util.isInteger(message.MaxMoney.low) && $util.isInteger(message.MaxMoney.high)))
                    return "MaxMoney: integer|Long expected";
            if (message.MaxFighter != null && message.hasOwnProperty("MaxFighter"))
                if (!$util.isInteger(message.MaxFighter))
                    return "MaxFighter: integer expected";
            if (message.MaxAudience != null && message.hasOwnProperty("MaxAudience"))
                if (!$util.isInteger(message.MaxAudience))
                    return "MaxAudience: integer expected";
            return null;
        };

        RoomDesc.fromObject = function fromObject(object) {
            if (object instanceof $root.configure.RoomDesc)
                return object;
            var message = new $root.configure.RoomDesc();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            if (object.GameId != null)
                message.GameId = object.GameId >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            if (object.RountCount != null)
                message.RountCount = object.RountCount | 0;
            if (object.MinMoney != null)
                if ($util.Long)
                    (message.MinMoney = $util.Long.fromValue(object.MinMoney)).unsigned = false;
                else if (typeof object.MinMoney === "string")
                    message.MinMoney = parseInt(object.MinMoney, 10);
                else if (typeof object.MinMoney === "number")
                    message.MinMoney = object.MinMoney;
                else if (typeof object.MinMoney === "object")
                    message.MinMoney = new $util.LongBits(object.MinMoney.low >>> 0, object.MinMoney.high >>> 0).toNumber();
            if (object.MaxMoney != null)
                if ($util.Long)
                    (message.MaxMoney = $util.Long.fromValue(object.MaxMoney)).unsigned = false;
                else if (typeof object.MaxMoney === "string")
                    message.MaxMoney = parseInt(object.MaxMoney, 10);
                else if (typeof object.MaxMoney === "number")
                    message.MaxMoney = object.MaxMoney;
                else if (typeof object.MaxMoney === "object")
                    message.MaxMoney = new $util.LongBits(object.MaxMoney.low >>> 0, object.MaxMoney.high >>> 0).toNumber();
            if (object.MaxFighter != null)
                message.MaxFighter = object.MaxFighter | 0;
            if (object.MaxAudience != null)
                message.MaxAudience = object.MaxAudience | 0;
            return message;
        };

        RoomDesc.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameType = 0;
                object.GameId = 0;
                object.Name = "";
                object.BaseScore = 0;
                object.RountCount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MaxMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MaxMoney = options.longs === String ? "0" : 0;
                object.MaxFighter = 0;
                object.MaxAudience = 0;
            }
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                object.GameId = message.GameId;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            if (message.RountCount != null && message.hasOwnProperty("RountCount"))
                object.RountCount = message.RountCount;
            if (message.MinMoney != null && message.hasOwnProperty("MinMoney"))
                if (typeof message.MinMoney === "number")
                    object.MinMoney = options.longs === String ? String(message.MinMoney) : message.MinMoney;
                else
                    object.MinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.MinMoney) : options.longs === Number ? new $util.LongBits(message.MinMoney.low >>> 0, message.MinMoney.high >>> 0).toNumber() : message.MinMoney;
            if (message.MaxMoney != null && message.hasOwnProperty("MaxMoney"))
                if (typeof message.MaxMoney === "number")
                    object.MaxMoney = options.longs === String ? String(message.MaxMoney) : message.MaxMoney;
                else
                    object.MaxMoney = options.longs === String ? $util.Long.prototype.toString.call(message.MaxMoney) : options.longs === Number ? new $util.LongBits(message.MaxMoney.low >>> 0, message.MaxMoney.high >>> 0).toNumber() : message.MaxMoney;
            if (message.MaxFighter != null && message.hasOwnProperty("MaxFighter"))
                object.MaxFighter = message.MaxFighter;
            if (message.MaxAudience != null && message.hasOwnProperty("MaxAudience"))
                object.MaxAudience = message.MaxAudience;
            return object;
        };

        RoomDesc.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomDesc;
    })();

    configure.GameListReq = (function() {

        function GameListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameListReq.create = function create(properties) {
            return new GameListReq(properties);
        };

        GameListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.configure.GameListReq();
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

        GameListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.configure.GameListReq)
                return object;
            return new $root.configure.GameListReq();
        };

        GameListReq.toObject = function toObject() {
            return {};
        };

        GameListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameListReq;
    })();

    configure.GameListResp = (function() {

        function GameListResp(properties) {
            this.GameList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameListResp.prototype.GameList = $util.emptyArray;

        GameListResp.create = function create(properties) {
            return new GameListResp(properties);
        };

        GameListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameList != null && message.GameList.length)
                for (var i = 0; i < message.GameList.length; ++i)
                    $root.configure.GameInfo.encode(message.GameList[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.configure.GameListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GameList && message.GameList.length))
                        message.GameList = [];
                    message.GameList.push($root.configure.GameInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameList != null && message.hasOwnProperty("GameList")) {
                if (!Array.isArray(message.GameList))
                    return "GameList: array expected";
                for (var i = 0; i < message.GameList.length; ++i) {
                    var error = $root.configure.GameInfo.verify(message.GameList[i]);
                    if (error)
                        return "GameList." + error;
                }
            }
            return null;
        };

        GameListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.configure.GameListResp)
                return object;
            var message = new $root.configure.GameListResp();
            if (object.GameList) {
                if (!Array.isArray(object.GameList))
                    throw TypeError(".configure.GameListResp.GameList: array expected");
                message.GameList = [];
                for (var i = 0; i < object.GameList.length; ++i) {
                    if (typeof object.GameList[i] !== "object")
                        throw TypeError(".configure.GameListResp.GameList: object expected");
                    message.GameList[i] = $root.configure.GameInfo.fromObject(object.GameList[i]);
                }
            }
            return message;
        };

        GameListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GameList = [];
            if (message.GameList && message.GameList.length) {
                object.GameList = [];
                for (var j = 0; j < message.GameList.length; ++j)
                    object.GameList[j] = $root.configure.GameInfo.toObject(message.GameList[j], options);
            }
            return object;
        };

        GameListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameListResp;
    })();

    configure.RoomListReq = (function() {

        function RoomListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomListReq.prototype.GameType = 0;

        RoomListReq.create = function create(properties) {
            return new RoomListReq(properties);
        };

        RoomListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            return writer;
        };

        RoomListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.configure.RoomListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            return null;
        };

        RoomListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.configure.RoomListReq)
                return object;
            var message = new $root.configure.RoomListReq();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            return message;
        };

        RoomListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameType = 0;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            return object;
        };

        RoomListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListReq;
    })();

    configure.RoomListResp = (function() {

        function RoomListResp(properties) {
            this.RoomList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RoomListResp.prototype.GameType = 0;
        RoomListResp.prototype.RoomList = $util.emptyArray;

        RoomListResp.create = function create(properties) {
            return new RoomListResp(properties);
        };

        RoomListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            if (message.RoomList != null && message.RoomList.length)
                for (var i = 0; i < message.RoomList.length; ++i)
                    $root.configure.RoomDesc.encode(message.RoomList[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        RoomListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RoomListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.configure.RoomListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameType = reader.uint32();
                    break;
                case 2:
                    if (!(message.RoomList && message.RoomList.length))
                        message.RoomList = [];
                    message.RoomList.push($root.configure.RoomDesc.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RoomListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RoomListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            if (message.RoomList != null && message.hasOwnProperty("RoomList")) {
                if (!Array.isArray(message.RoomList))
                    return "RoomList: array expected";
                for (var i = 0; i < message.RoomList.length; ++i) {
                    var error = $root.configure.RoomDesc.verify(message.RoomList[i]);
                    if (error)
                        return "RoomList." + error;
                }
            }
            return null;
        };

        RoomListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.configure.RoomListResp)
                return object;
            var message = new $root.configure.RoomListResp();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            if (object.RoomList) {
                if (!Array.isArray(object.RoomList))
                    throw TypeError(".configure.RoomListResp.RoomList: array expected");
                message.RoomList = [];
                for (var i = 0; i < object.RoomList.length; ++i) {
                    if (typeof object.RoomList[i] !== "object")
                        throw TypeError(".configure.RoomListResp.RoomList: object expected");
                    message.RoomList[i] = $root.configure.RoomDesc.fromObject(object.RoomList[i]);
                }
            }
            return message;
        };

        RoomListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RoomList = [];
            if (options.defaults)
                object.GameType = 0;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.RoomList && message.RoomList.length) {
                object.RoomList = [];
                for (var j = 0; j < message.RoomList.length; ++j)
                    object.RoomList[j] = $root.configure.RoomDesc.toObject(message.RoomList[j], options);
            }
            return object;
        };

        RoomListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomListResp;
    })();

    return configure;
})();

module.exports = $root;
