/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gamecomm = (function() {

    var gamecomm = {};

    gamecomm.ErrorResult = (function() {

        function ErrorResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ErrorResult.prototype.ReqId = 0;
        ErrorResult.prototype.ErrCode = 0;
        ErrorResult.prototype.Hints = "";

        ErrorResult.create = function create(properties) {
            return new ErrorResult(properties);
        };

        ErrorResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ReqId != null && message.hasOwnProperty("ReqId"))
                writer.uint32(8).int32(message.ReqId);
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                writer.uint32(16).int32(message.ErrCode);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            return writer;
        };

        ErrorResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ErrorResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.ErrorResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ReqId = reader.int32();
                    break;
                case 2:
                    message.ErrCode = reader.int32();
                    break;
                case 3:
                    message.Hints = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ErrorResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ErrorResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ReqId != null && message.hasOwnProperty("ReqId"))
                if (!$util.isInteger(message.ReqId))
                    return "ReqId: integer expected";
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                if (!$util.isInteger(message.ErrCode))
                    return "ErrCode: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        ErrorResult.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.ErrorResult)
                return object;
            var message = new $root.gamecomm.ErrorResult();
            if (object.ReqId != null)
                message.ReqId = object.ReqId | 0;
            if (object.ErrCode != null)
                message.ErrCode = object.ErrCode | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        ErrorResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ReqId = 0;
                object.ErrCode = 0;
                object.Hints = "";
            }
            if (message.ReqId != null && message.hasOwnProperty("ReqId"))
                object.ReqId = message.ReqId;
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = message.ErrCode;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        ErrorResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ErrorResult;
    })();

    gamecomm.PlayerInfo = (function() {

        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.Name = "";
        PlayerInfo.prototype.Sex = 0;
        PlayerInfo.prototype.VipLevel = 0;
        PlayerInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerInfo.prototype.Head = "";

        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(18).string(message.Name);
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                writer.uint32(24).int32(message.Sex);
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                writer.uint32(32).int32(message.VipLevel);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(40).int64(message.Money);
            if (message.Head != null && message.hasOwnProperty("Head"))
                writer.uint32(50).string(message.Head);
            return writer;
        };

        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Sex = reader.int32();
                    break;
                case 4:
                    message.VipLevel = reader.int32();
                    break;
                case 5:
                    message.Money = reader.int64();
                    break;
                case 6:
                    message.Head = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                if (!$util.isInteger(message.VipLevel))
                    return "VipLevel: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.Head != null && message.hasOwnProperty("Head"))
                if (!$util.isString(message.Head))
                    return "Head: string expected";
            return null;
        };

        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.PlayerInfo)
                return object;
            var message = new $root.gamecomm.PlayerInfo();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.VipLevel != null)
                message.VipLevel = object.VipLevel | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Head != null)
                message.Head = String(object.Head);
            return message;
        };

        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.Name = "";
                object.Sex = 0;
                object.VipLevel = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Head = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.VipLevel != null && message.hasOwnProperty("VipLevel"))
                object.VipLevel = message.VipLevel;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Head != null && message.hasOwnProperty("Head"))
                object.Head = message.Head;
            return object;
        };

        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    gamecomm.PlayerList = (function() {

        function PlayerList(properties) {
            this.AllInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerList.prototype.AllInfos = $util.emptyArray;

        PlayerList.create = function create(properties) {
            return new PlayerList(properties);
        };

        PlayerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllInfos != null && message.AllInfos.length)
                for (var i = 0; i < message.AllInfos.length; ++i)
                    $root.gamecomm.PlayerInfo.encode(message.AllInfos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        PlayerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.PlayerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllInfos && message.AllInfos.length))
                        message.AllInfos = [];
                    message.AllInfos.push($root.gamecomm.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PlayerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PlayerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllInfos != null && message.hasOwnProperty("AllInfos")) {
                if (!Array.isArray(message.AllInfos))
                    return "AllInfos: array expected";
                for (var i = 0; i < message.AllInfos.length; ++i) {
                    var error = $root.gamecomm.PlayerInfo.verify(message.AllInfos[i]);
                    if (error)
                        return "AllInfos." + error;
                }
            }
            return null;
        };

        PlayerList.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.PlayerList)
                return object;
            var message = new $root.gamecomm.PlayerList();
            if (object.AllInfos) {
                if (!Array.isArray(object.AllInfos))
                    throw TypeError(".gamecomm.PlayerList.AllInfos: array expected");
                message.AllInfos = [];
                for (var i = 0; i < object.AllInfos.length; ++i) {
                    if (typeof object.AllInfos[i] !== "object")
                        throw TypeError(".gamecomm.PlayerList.AllInfos: object expected");
                    message.AllInfos[i] = $root.gamecomm.PlayerInfo.fromObject(object.AllInfos[i]);
                }
            }
            return message;
        };

        PlayerList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AllInfos = [];
            if (message.AllInfos && message.AllInfos.length) {
                object.AllInfos = [];
                for (var j = 0; j < message.AllInfos.length; ++j)
                    object.AllInfos[j] = $root.gamecomm.PlayerInfo.toObject(message.AllInfos[j], options);
            }
            return object;
        };

        PlayerList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerList;
    })();

    gamecomm.ReqEnterGame = (function() {

        function ReqEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqEnterGame.prototype.GameType = 0;

        ReqEnterGame.create = function create(properties) {
            return new ReqEnterGame(properties);
        };

        ReqEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            return writer;
        };

        ReqEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.ReqEnterGame();
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

        ReqEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            return null;
        };

        ReqEnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.ReqEnterGame)
                return object;
            var message = new $root.gamecomm.ReqEnterGame();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            return message;
        };

        ReqEnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameType = 0;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            return object;
        };

        ReqEnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqEnterGame;
    })();

    gamecomm.RespEnterGame = (function() {

        function RespEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespEnterGame.prototype.IsSuccess = 0;
        RespEnterGame.prototype.Reason = "";

        RespEnterGame.create = function create(properties) {
            return new RespEnterGame(properties);
        };

        RespEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsSuccess != null && message.hasOwnProperty("IsSuccess"))
                writer.uint32(8).int32(message.IsSuccess);
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                writer.uint32(18).string(message.Reason);
            return writer;
        };

        RespEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.RespEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsSuccess = reader.int32();
                    break;
                case 2:
                    message.Reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsSuccess != null && message.hasOwnProperty("IsSuccess"))
                if (!$util.isInteger(message.IsSuccess))
                    return "IsSuccess: integer expected";
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                if (!$util.isString(message.Reason))
                    return "Reason: string expected";
            return null;
        };

        RespEnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.RespEnterGame)
                return object;
            var message = new $root.gamecomm.RespEnterGame();
            if (object.IsSuccess != null)
                message.IsSuccess = object.IsSuccess | 0;
            if (object.Reason != null)
                message.Reason = String(object.Reason);
            return message;
        };

        RespEnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.IsSuccess = 0;
                object.Reason = "";
            }
            if (message.IsSuccess != null && message.hasOwnProperty("IsSuccess"))
                object.IsSuccess = message.IsSuccess;
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                object.Reason = message.Reason;
            return object;
        };

        RespEnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespEnterGame;
    })();

    gamecomm.ReqExitGame = (function() {

        function ReqExitGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqExitGame.prototype.GameType = 0;

        ReqExitGame.create = function create(properties) {
            return new ReqExitGame(properties);
        };

        ReqExitGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(8).uint32(message.GameType);
            return writer;
        };

        ReqExitGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqExitGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.ReqExitGame();
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

        ReqExitGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqExitGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            return null;
        };

        ReqExitGame.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.ReqExitGame)
                return object;
            var message = new $root.gamecomm.ReqExitGame();
            if (object.GameType != null)
                message.GameType = object.GameType >>> 0;
            return message;
        };

        ReqExitGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameType = 0;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            return object;
        };

        ReqExitGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqExitGame;
    })();

    gamecomm.RespExitGame = (function() {

        function RespExitGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespExitGame.prototype.IsSuccess = 0;
        RespExitGame.prototype.Reason = "";

        RespExitGame.create = function create(properties) {
            return new RespExitGame(properties);
        };

        RespExitGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsSuccess != null && message.hasOwnProperty("IsSuccess"))
                writer.uint32(8).int32(message.IsSuccess);
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                writer.uint32(18).string(message.Reason);
            return writer;
        };

        RespExitGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespExitGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gamecomm.RespExitGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsSuccess = reader.int32();
                    break;
                case 2:
                    message.Reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespExitGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespExitGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsSuccess != null && message.hasOwnProperty("IsSuccess"))
                if (!$util.isInteger(message.IsSuccess))
                    return "IsSuccess: integer expected";
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                if (!$util.isString(message.Reason))
                    return "Reason: string expected";
            return null;
        };

        RespExitGame.fromObject = function fromObject(object) {
            if (object instanceof $root.gamecomm.RespExitGame)
                return object;
            var message = new $root.gamecomm.RespExitGame();
            if (object.IsSuccess != null)
                message.IsSuccess = object.IsSuccess | 0;
            if (object.Reason != null)
                message.Reason = String(object.Reason);
            return message;
        };

        RespExitGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.IsSuccess = 0;
                object.Reason = "";
            }
            if (message.IsSuccess != null && message.hasOwnProperty("IsSuccess"))
                object.IsSuccess = message.IsSuccess;
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                object.Reason = message.Reason;
            return object;
        };

        RespExitGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespExitGame;
    })();

    return gamecomm;
})();

module.exports = $root;
