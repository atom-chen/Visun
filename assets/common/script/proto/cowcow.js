/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.cowcow = (function() {

    var cowcow = {};

    cowcow.GameCowcowEnter = (function() {

        function GameCowcowEnter(properties) {
            this.Chips = [];
            this.AwardAreas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowEnter.prototype.UserInfo = null;
        GameCowcowEnter.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameCowcowEnter.prototype.Chips = $util.emptyArray;
        GameCowcowEnter.prototype.AwardAreas = $util.emptyArray;
        GameCowcowEnter.prototype.FreeTime = 0;
        GameCowcowEnter.prototype.BetTime = 0;
        GameCowcowEnter.prototype.OpenTime = 0;

        GameCowcowEnter.create = function create(properties) {
            return new GameCowcowEnter(properties);
        };

        GameCowcowEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                $root.gamecomm.PlayerInfo.encode(message.UserInfo, writer.uint32(10).fork()).ldelim();
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                writer.uint32(16).int64(message.TimeStamp);
            if (message.Chips != null && message.Chips.length) {
                writer.uint32(26).fork();
                for (var i = 0; i < message.Chips.length; ++i)
                    writer.int32(message.Chips[i]);
                writer.ldelim();
            }
            if (message.AwardAreas != null && message.AwardAreas.length)
                for (var i = 0; i < message.AwardAreas.length; ++i)
                    writer.uint32(34).bytes(message.AwardAreas[i]);
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                writer.uint32(40).uint32(message.FreeTime);
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                writer.uint32(48).uint32(message.BetTime);
            if (message.OpenTime != null && message.hasOwnProperty("OpenTime"))
                writer.uint32(56).uint32(message.OpenTime);
            return writer;
        };

        GameCowcowEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserInfo = $root.gamecomm.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.TimeStamp = reader.int64();
                    break;
                case 3:
                    if (!(message.Chips && message.Chips.length))
                        message.Chips = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Chips.push(reader.int32());
                    } else
                        message.Chips.push(reader.int32());
                    break;
                case 4:
                    if (!(message.AwardAreas && message.AwardAreas.length))
                        message.AwardAreas = [];
                    message.AwardAreas.push(reader.bytes());
                    break;
                case 5:
                    message.FreeTime = reader.uint32();
                    break;
                case 6:
                    message.BetTime = reader.uint32();
                    break;
                case 7:
                    message.OpenTime = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                var error = $root.gamecomm.PlayerInfo.verify(message.UserInfo);
                if (error)
                    return "UserInfo." + error;
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.Chips != null && message.hasOwnProperty("Chips")) {
                if (!Array.isArray(message.Chips))
                    return "Chips: array expected";
                for (var i = 0; i < message.Chips.length; ++i)
                    if (!$util.isInteger(message.Chips[i]))
                        return "Chips: integer[] expected";
            }
            if (message.AwardAreas != null && message.hasOwnProperty("AwardAreas")) {
                if (!Array.isArray(message.AwardAreas))
                    return "AwardAreas: array expected";
                for (var i = 0; i < message.AwardAreas.length; ++i)
                    if (!(message.AwardAreas[i] && typeof message.AwardAreas[i].length === "number" || $util.isString(message.AwardAreas[i])))
                        return "AwardAreas: buffer[] expected";
            }
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                if (!$util.isInteger(message.FreeTime))
                    return "FreeTime: integer expected";
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                if (!$util.isInteger(message.BetTime))
                    return "BetTime: integer expected";
            if (message.OpenTime != null && message.hasOwnProperty("OpenTime"))
                if (!$util.isInteger(message.OpenTime))
                    return "OpenTime: integer expected";
            return null;
        };

        GameCowcowEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowEnter)
                return object;
            var message = new $root.cowcow.GameCowcowEnter();
            if (object.UserInfo != null) {
                if (typeof object.UserInfo !== "object")
                    throw TypeError(".cowcow.GameCowcowEnter.UserInfo: object expected");
                message.UserInfo = $root.gamecomm.PlayerInfo.fromObject(object.UserInfo);
            }
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.Chips) {
                if (!Array.isArray(object.Chips))
                    throw TypeError(".cowcow.GameCowcowEnter.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AwardAreas) {
                if (!Array.isArray(object.AwardAreas))
                    throw TypeError(".cowcow.GameCowcowEnter.AwardAreas: array expected");
                message.AwardAreas = [];
                for (var i = 0; i < object.AwardAreas.length; ++i)
                    if (typeof object.AwardAreas[i] === "string")
                        $util.base64.decode(object.AwardAreas[i], message.AwardAreas[i] = $util.newBuffer($util.base64.length(object.AwardAreas[i])), 0);
                    else if (object.AwardAreas[i].length)
                        message.AwardAreas[i] = object.AwardAreas[i];
            }
            if (object.FreeTime != null)
                message.FreeTime = object.FreeTime >>> 0;
            if (object.BetTime != null)
                message.BetTime = object.BetTime >>> 0;
            if (object.OpenTime != null)
                message.OpenTime = object.OpenTime >>> 0;
            return message;
        };

        GameCowcowEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Chips = [];
                object.AwardAreas = [];
            }
            if (options.defaults) {
                object.UserInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.FreeTime = 0;
                object.BetTime = 0;
                object.OpenTime = 0;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.gamecomm.PlayerInfo.toObject(message.UserInfo, options);
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.Chips && message.Chips.length) {
                object.Chips = [];
                for (var j = 0; j < message.Chips.length; ++j)
                    object.Chips[j] = message.Chips[j];
            }
            if (message.AwardAreas && message.AwardAreas.length) {
                object.AwardAreas = [];
                for (var j = 0; j < message.AwardAreas.length; ++j)
                    object.AwardAreas[j] = options.bytes === String ? $util.base64.encode(message.AwardAreas[j], 0, message.AwardAreas[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.AwardAreas[j]) : message.AwardAreas[j];
            }
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                object.FreeTime = message.FreeTime;
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                object.BetTime = message.BetTime;
            if (message.OpenTime != null && message.hasOwnProperty("OpenTime"))
                object.OpenTime = message.OpenTime;
            return object;
        };

        GameCowcowEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowEnter;
    })();

    cowcow.GameCowcowHost = (function() {

        function GameCowcowHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowHost.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameCowcowHost.prototype.IsWant = false;

        GameCowcowHost.create = function create(properties) {
            return new GameCowcowHost(properties);
        };

        GameCowcowHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        GameCowcowHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowHost();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.IsWant = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowHost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        GameCowcowHost.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowHost)
                return object;
            var message = new $root.cowcow.GameCowcowHost();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        GameCowcowHost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsWant = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        GameCowcowHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowHost;
    })();

    cowcow.GameCowcowSuperHost = (function() {

        function GameCowcowSuperHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowSuperHost.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameCowcowSuperHost.prototype.IsWant = false;

        GameCowcowSuperHost.create = function create(properties) {
            return new GameCowcowSuperHost(properties);
        };

        GameCowcowSuperHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        GameCowcowSuperHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowSuperHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowSuperHost();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.IsWant = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowSuperHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowSuperHost.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        GameCowcowSuperHost.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowSuperHost)
                return object;
            var message = new $root.cowcow.GameCowcowSuperHost();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        GameCowcowSuperHost.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.IsWant = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        GameCowcowSuperHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowSuperHost;
    })();

    cowcow.GameCowcowPlaying = (function() {

        function GameCowcowPlaying(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowPlaying.prototype.BetArea = 0;
        GameCowcowPlaying.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameCowcowPlaying.create = function create(properties) {
            return new GameCowcowPlaying(properties);
        };

        GameCowcowPlaying.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                writer.uint32(8).int32(message.BetArea);
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                writer.uint32(16).int64(message.BetScore);
            return writer;
        };

        GameCowcowPlaying.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowPlaying.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowPlaying();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BetArea = reader.int32();
                    break;
                case 2:
                    message.BetScore = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowPlaying.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowPlaying.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                if (!$util.isInteger(message.BetArea))
                    return "BetArea: integer expected";
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (!$util.isInteger(message.BetScore) && !(message.BetScore && $util.isInteger(message.BetScore.low) && $util.isInteger(message.BetScore.high)))
                    return "BetScore: integer|Long expected";
            return null;
        };

        GameCowcowPlaying.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowPlaying)
                return object;
            var message = new $root.cowcow.GameCowcowPlaying();
            if (object.BetArea != null)
                message.BetArea = object.BetArea | 0;
            if (object.BetScore != null)
                if ($util.Long)
                    (message.BetScore = $util.Long.fromValue(object.BetScore)).unsigned = false;
                else if (typeof object.BetScore === "string")
                    message.BetScore = parseInt(object.BetScore, 10);
                else if (typeof object.BetScore === "number")
                    message.BetScore = object.BetScore;
                else if (typeof object.BetScore === "object")
                    message.BetScore = new $util.LongBits(object.BetScore.low >>> 0, object.BetScore.high >>> 0).toNumber();
            return message;
        };

        GameCowcowPlaying.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BetArea = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetScore = options.longs === String ? "0" : 0;
            }
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                object.BetArea = message.BetArea;
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (typeof message.BetScore === "number")
                    object.BetScore = options.longs === String ? String(message.BetScore) : message.BetScore;
                else
                    object.BetScore = options.longs === String ? $util.Long.prototype.toString.call(message.BetScore) : options.longs === Number ? new $util.LongBits(message.BetScore.low >>> 0, message.BetScore.high >>> 0).toNumber() : message.BetScore;
            return object;
        };

        GameCowcowPlaying.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowPlaying;
    })();

    cowcow.GameCowcowBetResult = (function() {

        function GameCowcowBetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowBetResult.prototype.State = 0;
        GameCowcowBetResult.prototype.Hints = "";

        GameCowcowBetResult.create = function create(properties) {
            return new GameCowcowBetResult(properties);
        };

        GameCowcowBetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).int32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        GameCowcowBetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowBetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowBetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
                    break;
                case 2:
                    message.Hints = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowBetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowBetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        GameCowcowBetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowBetResult)
                return object;
            var message = new $root.cowcow.GameCowcowBetResult();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        GameCowcowBetResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.State = 0;
                object.Hints = "";
            }
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        GameCowcowBetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowBetResult;
    })();

    cowcow.GameCowcowOver = (function() {

        function GameCowcowOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowOver.prototype.AwardArea = $util.newBuffer([]);
        GameCowcowOver.prototype.BankerCard = $util.newBuffer([]);
        GameCowcowOver.prototype.TianCard = $util.newBuffer([]);
        GameCowcowOver.prototype.XuanCard = $util.newBuffer([]);
        GameCowcowOver.prototype.DiCard = $util.newBuffer([]);
        GameCowcowOver.prototype.HuangCard = $util.newBuffer([]);
        GameCowcowOver.prototype.CardValue = $util.newBuffer([]);

        GameCowcowOver.create = function create(properties) {
            return new GameCowcowOver(properties);
        };

        GameCowcowOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                writer.uint32(10).bytes(message.AwardArea);
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                writer.uint32(18).bytes(message.BankerCard);
            if (message.TianCard != null && message.hasOwnProperty("TianCard"))
                writer.uint32(26).bytes(message.TianCard);
            if (message.XuanCard != null && message.hasOwnProperty("XuanCard"))
                writer.uint32(34).bytes(message.XuanCard);
            if (message.DiCard != null && message.hasOwnProperty("DiCard"))
                writer.uint32(42).bytes(message.DiCard);
            if (message.HuangCard != null && message.hasOwnProperty("HuangCard"))
                writer.uint32(50).bytes(message.HuangCard);
            if (message.CardValue != null && message.hasOwnProperty("CardValue"))
                writer.uint32(58).bytes(message.CardValue);
            return writer;
        };

        GameCowcowOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AwardArea = reader.bytes();
                    break;
                case 2:
                    message.BankerCard = reader.bytes();
                    break;
                case 3:
                    message.TianCard = reader.bytes();
                    break;
                case 4:
                    message.XuanCard = reader.bytes();
                    break;
                case 5:
                    message.DiCard = reader.bytes();
                    break;
                case 6:
                    message.HuangCard = reader.bytes();
                    break;
                case 7:
                    message.CardValue = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                if (!(message.AwardArea && typeof message.AwardArea.length === "number" || $util.isString(message.AwardArea)))
                    return "AwardArea: buffer expected";
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                if (!(message.BankerCard && typeof message.BankerCard.length === "number" || $util.isString(message.BankerCard)))
                    return "BankerCard: buffer expected";
            if (message.TianCard != null && message.hasOwnProperty("TianCard"))
                if (!(message.TianCard && typeof message.TianCard.length === "number" || $util.isString(message.TianCard)))
                    return "TianCard: buffer expected";
            if (message.XuanCard != null && message.hasOwnProperty("XuanCard"))
                if (!(message.XuanCard && typeof message.XuanCard.length === "number" || $util.isString(message.XuanCard)))
                    return "XuanCard: buffer expected";
            if (message.DiCard != null && message.hasOwnProperty("DiCard"))
                if (!(message.DiCard && typeof message.DiCard.length === "number" || $util.isString(message.DiCard)))
                    return "DiCard: buffer expected";
            if (message.HuangCard != null && message.hasOwnProperty("HuangCard"))
                if (!(message.HuangCard && typeof message.HuangCard.length === "number" || $util.isString(message.HuangCard)))
                    return "HuangCard: buffer expected";
            if (message.CardValue != null && message.hasOwnProperty("CardValue"))
                if (!(message.CardValue && typeof message.CardValue.length === "number" || $util.isString(message.CardValue)))
                    return "CardValue: buffer expected";
            return null;
        };

        GameCowcowOver.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowOver)
                return object;
            var message = new $root.cowcow.GameCowcowOver();
            if (object.AwardArea != null)
                if (typeof object.AwardArea === "string")
                    $util.base64.decode(object.AwardArea, message.AwardArea = $util.newBuffer($util.base64.length(object.AwardArea)), 0);
                else if (object.AwardArea.length)
                    message.AwardArea = object.AwardArea;
            if (object.BankerCard != null)
                if (typeof object.BankerCard === "string")
                    $util.base64.decode(object.BankerCard, message.BankerCard = $util.newBuffer($util.base64.length(object.BankerCard)), 0);
                else if (object.BankerCard.length)
                    message.BankerCard = object.BankerCard;
            if (object.TianCard != null)
                if (typeof object.TianCard === "string")
                    $util.base64.decode(object.TianCard, message.TianCard = $util.newBuffer($util.base64.length(object.TianCard)), 0);
                else if (object.TianCard.length)
                    message.TianCard = object.TianCard;
            if (object.XuanCard != null)
                if (typeof object.XuanCard === "string")
                    $util.base64.decode(object.XuanCard, message.XuanCard = $util.newBuffer($util.base64.length(object.XuanCard)), 0);
                else if (object.XuanCard.length)
                    message.XuanCard = object.XuanCard;
            if (object.DiCard != null)
                if (typeof object.DiCard === "string")
                    $util.base64.decode(object.DiCard, message.DiCard = $util.newBuffer($util.base64.length(object.DiCard)), 0);
                else if (object.DiCard.length)
                    message.DiCard = object.DiCard;
            if (object.HuangCard != null)
                if (typeof object.HuangCard === "string")
                    $util.base64.decode(object.HuangCard, message.HuangCard = $util.newBuffer($util.base64.length(object.HuangCard)), 0);
                else if (object.HuangCard.length)
                    message.HuangCard = object.HuangCard;
            if (object.CardValue != null)
                if (typeof object.CardValue === "string")
                    $util.base64.decode(object.CardValue, message.CardValue = $util.newBuffer($util.base64.length(object.CardValue)), 0);
                else if (object.CardValue.length)
                    message.CardValue = object.CardValue;
            return message;
        };

        GameCowcowOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.AwardArea = "";
                else {
                    object.AwardArea = [];
                    if (options.bytes !== Array)
                        object.AwardArea = $util.newBuffer(object.AwardArea);
                }
                if (options.bytes === String)
                    object.BankerCard = "";
                else {
                    object.BankerCard = [];
                    if (options.bytes !== Array)
                        object.BankerCard = $util.newBuffer(object.BankerCard);
                }
                if (options.bytes === String)
                    object.TianCard = "";
                else {
                    object.TianCard = [];
                    if (options.bytes !== Array)
                        object.TianCard = $util.newBuffer(object.TianCard);
                }
                if (options.bytes === String)
                    object.XuanCard = "";
                else {
                    object.XuanCard = [];
                    if (options.bytes !== Array)
                        object.XuanCard = $util.newBuffer(object.XuanCard);
                }
                if (options.bytes === String)
                    object.DiCard = "";
                else {
                    object.DiCard = [];
                    if (options.bytes !== Array)
                        object.DiCard = $util.newBuffer(object.DiCard);
                }
                if (options.bytes === String)
                    object.HuangCard = "";
                else {
                    object.HuangCard = [];
                    if (options.bytes !== Array)
                        object.HuangCard = $util.newBuffer(object.HuangCard);
                }
                if (options.bytes === String)
                    object.CardValue = "";
                else {
                    object.CardValue = [];
                    if (options.bytes !== Array)
                        object.CardValue = $util.newBuffer(object.CardValue);
                }
            }
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                object.AwardArea = options.bytes === String ? $util.base64.encode(message.AwardArea, 0, message.AwardArea.length) : options.bytes === Array ? Array.prototype.slice.call(message.AwardArea) : message.AwardArea;
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                object.BankerCard = options.bytes === String ? $util.base64.encode(message.BankerCard, 0, message.BankerCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.BankerCard) : message.BankerCard;
            if (message.TianCard != null && message.hasOwnProperty("TianCard"))
                object.TianCard = options.bytes === String ? $util.base64.encode(message.TianCard, 0, message.TianCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.TianCard) : message.TianCard;
            if (message.XuanCard != null && message.hasOwnProperty("XuanCard"))
                object.XuanCard = options.bytes === String ? $util.base64.encode(message.XuanCard, 0, message.XuanCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.XuanCard) : message.XuanCard;
            if (message.DiCard != null && message.hasOwnProperty("DiCard"))
                object.DiCard = options.bytes === String ? $util.base64.encode(message.DiCard, 0, message.DiCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.DiCard) : message.DiCard;
            if (message.HuangCard != null && message.hasOwnProperty("HuangCard"))
                object.HuangCard = options.bytes === String ? $util.base64.encode(message.HuangCard, 0, message.HuangCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.HuangCard) : message.HuangCard;
            if (message.CardValue != null && message.hasOwnProperty("CardValue"))
                object.CardValue = options.bytes === String ? $util.base64.encode(message.CardValue, 0, message.CardValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.CardValue) : message.CardValue;
            return object;
        };

        GameCowcowOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowOver;
    })();

    cowcow.GameCowcowCheckout = (function() {

        function GameCowcowCheckout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameCowcowCheckout.prototype.Acquire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameCowcowCheckout.create = function create(properties) {
            return new GameCowcowCheckout(properties);
        };

        GameCowcowCheckout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                writer.uint32(8).int64(message.Acquire);
            return writer;
        };

        GameCowcowCheckout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameCowcowCheckout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.cowcow.GameCowcowCheckout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Acquire = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameCowcowCheckout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameCowcowCheckout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (!$util.isInteger(message.Acquire) && !(message.Acquire && $util.isInteger(message.Acquire.low) && $util.isInteger(message.Acquire.high)))
                    return "Acquire: integer|Long expected";
            return null;
        };

        GameCowcowCheckout.fromObject = function fromObject(object) {
            if (object instanceof $root.cowcow.GameCowcowCheckout)
                return object;
            var message = new $root.cowcow.GameCowcowCheckout();
            if (object.Acquire != null)
                if ($util.Long)
                    (message.Acquire = $util.Long.fromValue(object.Acquire)).unsigned = false;
                else if (typeof object.Acquire === "string")
                    message.Acquire = parseInt(object.Acquire, 10);
                else if (typeof object.Acquire === "number")
                    message.Acquire = object.Acquire;
                else if (typeof object.Acquire === "object")
                    message.Acquire = new $util.LongBits(object.Acquire.low >>> 0, object.Acquire.high >>> 0).toNumber();
            return message;
        };

        GameCowcowCheckout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Acquire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Acquire = options.longs === String ? "0" : 0;
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (typeof message.Acquire === "number")
                    object.Acquire = options.longs === String ? String(message.Acquire) : message.Acquire;
                else
                    object.Acquire = options.longs === String ? $util.Long.prototype.toString.call(message.Acquire) : options.longs === Number ? new $util.LongBits(message.Acquire.low >>> 0, message.Acquire.high >>> 0).toNumber() : message.Acquire;
            return object;
        };

        GameCowcowCheckout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCowcowCheckout;
    })();

    return cowcow;
})();

module.exports = $root;