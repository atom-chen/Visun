/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.baccarat = (function() {

    var baccarat = {};

    baccarat.GameBaccaratEnter = (function() {

        function GameBaccaratEnter(properties) {
            this.Chips = [];
            this.AwardAreas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratEnter.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBaccaratEnter.prototype.Chips = $util.emptyArray;
        GameBaccaratEnter.prototype.AwardAreas = $util.emptyArray;
        GameBaccaratEnter.prototype.FreeTime = 0;
        GameBaccaratEnter.prototype.BetTime = 0;
        GameBaccaratEnter.prototype.OpenTime = 0;
        GameBaccaratEnter.prototype.Free = null;
        GameBaccaratEnter.prototype.Start = null;
        GameBaccaratEnter.prototype.Playing = null;
        GameBaccaratEnter.prototype.Over = null;

        GameBaccaratEnter.create = function create(properties) {
            return new GameBaccaratEnter(properties);
        };

        GameBaccaratEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.Chips != null && message.Chips.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.Chips.length; ++i)
                    writer.int32(message.Chips[i]);
                writer.ldelim();
            }
            if (message.AwardAreas != null && message.AwardAreas.length)
                for (var i = 0; i < message.AwardAreas.length; ++i)
                    writer.uint32(26).bytes(message.AwardAreas[i]);
            if (message.FreeTime != null && message.hasOwnProperty("FreeTime"))
                writer.uint32(32).uint32(message.FreeTime);
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                writer.uint32(40).uint32(message.BetTime);
            if (message.OpenTime != null && message.hasOwnProperty("OpenTime"))
                writer.uint32(48).uint32(message.OpenTime);
            if (message.Free != null && message.hasOwnProperty("Free"))
                $root.gamecomm.GameStateFree.encode(message.Free, writer.uint32(58).fork()).ldelim();
            if (message.Start != null && message.hasOwnProperty("Start"))
                $root.gamecomm.GameStateStart.encode(message.Start, writer.uint32(66).fork()).ldelim();
            if (message.Playing != null && message.hasOwnProperty("Playing"))
                $root.gamecomm.GameStatePlaying.encode(message.Playing, writer.uint32(74).fork()).ldelim();
            if (message.Over != null && message.hasOwnProperty("Over"))
                $root.gamecomm.GameStateOver.encode(message.Over, writer.uint32(82).fork()).ldelim();
            return writer;
        };

        GameBaccaratEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 2:
                    if (!(message.Chips && message.Chips.length))
                        message.Chips = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Chips.push(reader.int32());
                    } else
                        message.Chips.push(reader.int32());
                    break;
                case 3:
                    if (!(message.AwardAreas && message.AwardAreas.length))
                        message.AwardAreas = [];
                    message.AwardAreas.push(reader.bytes());
                    break;
                case 4:
                    message.FreeTime = reader.uint32();
                    break;
                case 5:
                    message.BetTime = reader.uint32();
                    break;
                case 6:
                    message.OpenTime = reader.uint32();
                    break;
                case 7:
                    message.Free = $root.gamecomm.GameStateFree.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.Start = $root.gamecomm.GameStateStart.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.Playing = $root.gamecomm.GameStatePlaying.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.Over = $root.gamecomm.GameStateOver.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBaccaratEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
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
            if (message.Free != null && message.hasOwnProperty("Free")) {
                var error = $root.gamecomm.GameStateFree.verify(message.Free);
                if (error)
                    return "Free." + error;
            }
            if (message.Start != null && message.hasOwnProperty("Start")) {
                var error = $root.gamecomm.GameStateStart.verify(message.Start);
                if (error)
                    return "Start." + error;
            }
            if (message.Playing != null && message.hasOwnProperty("Playing")) {
                var error = $root.gamecomm.GameStatePlaying.verify(message.Playing);
                if (error)
                    return "Playing." + error;
            }
            if (message.Over != null && message.hasOwnProperty("Over")) {
                var error = $root.gamecomm.GameStateOver.verify(message.Over);
                if (error)
                    return "Over." + error;
            }
            return null;
        };

        GameBaccaratEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratEnter)
                return object;
            var message = new $root.baccarat.GameBaccaratEnter();
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
                    throw TypeError(".baccarat.GameBaccaratEnter.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AwardAreas) {
                if (!Array.isArray(object.AwardAreas))
                    throw TypeError(".baccarat.GameBaccaratEnter.AwardAreas: array expected");
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
            if (object.Free != null) {
                if (typeof object.Free !== "object")
                    throw TypeError(".baccarat.GameBaccaratEnter.Free: object expected");
                message.Free = $root.gamecomm.GameStateFree.fromObject(object.Free);
            }
            if (object.Start != null) {
                if (typeof object.Start !== "object")
                    throw TypeError(".baccarat.GameBaccaratEnter.Start: object expected");
                message.Start = $root.gamecomm.GameStateStart.fromObject(object.Start);
            }
            if (object.Playing != null) {
                if (typeof object.Playing !== "object")
                    throw TypeError(".baccarat.GameBaccaratEnter.Playing: object expected");
                message.Playing = $root.gamecomm.GameStatePlaying.fromObject(object.Playing);
            }
            if (object.Over != null) {
                if (typeof object.Over !== "object")
                    throw TypeError(".baccarat.GameBaccaratEnter.Over: object expected");
                message.Over = $root.gamecomm.GameStateOver.fromObject(object.Over);
            }
            return message;
        };

        GameBaccaratEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Chips = [];
                object.AwardAreas = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.FreeTime = 0;
                object.BetTime = 0;
                object.OpenTime = 0;
                object.Free = null;
                object.Start = null;
                object.Playing = null;
                object.Over = null;
            }
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
            if (message.Free != null && message.hasOwnProperty("Free"))
                object.Free = $root.gamecomm.GameStateFree.toObject(message.Free, options);
            if (message.Start != null && message.hasOwnProperty("Start"))
                object.Start = $root.gamecomm.GameStateStart.toObject(message.Start, options);
            if (message.Playing != null && message.hasOwnProperty("Playing"))
                object.Playing = $root.gamecomm.GameStatePlaying.toObject(message.Playing, options);
            if (message.Over != null && message.hasOwnProperty("Over"))
                object.Over = $root.gamecomm.GameStateOver.toObject(message.Over, options);
            return object;
        };

        GameBaccaratEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratEnter;
    })();

    baccarat.GameBaccaratHost = (function() {

        function GameBaccaratHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratHost.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameBaccaratHost.prototype.IsWant = false;

        GameBaccaratHost.create = function create(properties) {
            return new GameBaccaratHost(properties);
        };

        GameBaccaratHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        GameBaccaratHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratHost();
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

        GameBaccaratHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratHost.verify = function verify(message) {
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

        GameBaccaratHost.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratHost)
                return object;
            var message = new $root.baccarat.GameBaccaratHost();
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

        GameBaccaratHost.toObject = function toObject(message, options) {
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

        GameBaccaratHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratHost;
    })();

    baccarat.GameBaccaratSuperHost = (function() {

        function GameBaccaratSuperHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratSuperHost.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameBaccaratSuperHost.prototype.IsWant = false;

        GameBaccaratSuperHost.create = function create(properties) {
            return new GameBaccaratSuperHost(properties);
        };

        GameBaccaratSuperHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        GameBaccaratSuperHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratSuperHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratSuperHost();
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

        GameBaccaratSuperHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratSuperHost.verify = function verify(message) {
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

        GameBaccaratSuperHost.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratSuperHost)
                return object;
            var message = new $root.baccarat.GameBaccaratSuperHost();
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

        GameBaccaratSuperHost.toObject = function toObject(message, options) {
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

        GameBaccaratSuperHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratSuperHost;
    })();

    baccarat.GameBaccaratBet = (function() {

        function GameBaccaratBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratBet.prototype.BetArea = 0;
        GameBaccaratBet.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameBaccaratBet.create = function create(properties) {
            return new GameBaccaratBet(properties);
        };

        GameBaccaratBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                writer.uint32(8).int32(message.BetArea);
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                writer.uint32(16).int64(message.BetScore);
            return writer;
        };

        GameBaccaratBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratBet();
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

        GameBaccaratBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratBet.verify = function verify(message) {
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

        GameBaccaratBet.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratBet)
                return object;
            var message = new $root.baccarat.GameBaccaratBet();
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

        GameBaccaratBet.toObject = function toObject(message, options) {
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

        GameBaccaratBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratBet;
    })();

    baccarat.GameBaccaratBetResult = (function() {

        function GameBaccaratBetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratBetResult.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameBaccaratBetResult.prototype.BetArea = 0;
        GameBaccaratBetResult.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBaccaratBetResult.prototype.State = 0;
        GameBaccaratBetResult.prototype.Hints = "";

        GameBaccaratBetResult.create = function create(properties) {
            return new GameBaccaratBetResult(properties);
        };

        GameBaccaratBetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(16).int32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(26).string(message.Hints);
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                writer.uint32(32).int32(message.BetArea);
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                writer.uint32(40).int64(message.BetScore);
            return writer;
        };

        GameBaccaratBetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratBetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratBetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 4:
                    message.BetArea = reader.int32();
                    break;
                case 5:
                    message.BetScore = reader.int64();
                    break;
                case 2:
                    message.State = reader.int32();
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

        GameBaccaratBetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratBetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                if (!$util.isInteger(message.BetArea))
                    return "BetArea: integer expected";
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (!$util.isInteger(message.BetScore) && !(message.BetScore && $util.isInteger(message.BetScore.low) && $util.isInteger(message.BetScore.high)))
                    return "BetScore: integer|Long expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        GameBaccaratBetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratBetResult)
                return object;
            var message = new $root.baccarat.GameBaccaratBetResult();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
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
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        GameBaccaratBetResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.State = 0;
                object.Hints = "";
                object.BetArea = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetScore = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                object.BetArea = message.BetArea;
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (typeof message.BetScore === "number")
                    object.BetScore = options.longs === String ? String(message.BetScore) : message.BetScore;
                else
                    object.BetScore = options.longs === String ? $util.Long.prototype.toString.call(message.BetScore) : options.longs === Number ? new $util.LongBits(message.BetScore.low >>> 0, message.BetScore.high >>> 0).toNumber() : message.BetScore;
            return object;
        };

        GameBaccaratBetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratBetResult;
    })();

    baccarat.GameBaccaratOver = (function() {

        function GameBaccaratOver(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratOver.prototype.AwardArea = $util.newBuffer([]);
        GameBaccaratOver.prototype.PlayerCard = $util.newBuffer([]);
        GameBaccaratOver.prototype.BankerCard = $util.newBuffer([]);

        GameBaccaratOver.create = function create(properties) {
            return new GameBaccaratOver(properties);
        };

        GameBaccaratOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                writer.uint32(10).bytes(message.AwardArea);
            if (message.PlayerCard != null && message.hasOwnProperty("PlayerCard"))
                writer.uint32(18).bytes(message.PlayerCard);
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                writer.uint32(26).bytes(message.BankerCard);
            return writer;
        };

        GameBaccaratOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AwardArea = reader.bytes();
                    break;
                case 2:
                    message.PlayerCard = reader.bytes();
                    break;
                case 3:
                    message.BankerCard = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBaccaratOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                if (!(message.AwardArea && typeof message.AwardArea.length === "number" || $util.isString(message.AwardArea)))
                    return "AwardArea: buffer expected";
            if (message.PlayerCard != null && message.hasOwnProperty("PlayerCard"))
                if (!(message.PlayerCard && typeof message.PlayerCard.length === "number" || $util.isString(message.PlayerCard)))
                    return "PlayerCard: buffer expected";
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                if (!(message.BankerCard && typeof message.BankerCard.length === "number" || $util.isString(message.BankerCard)))
                    return "BankerCard: buffer expected";
            return null;
        };

        GameBaccaratOver.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratOver)
                return object;
            var message = new $root.baccarat.GameBaccaratOver();
            if (object.AwardArea != null)
                if (typeof object.AwardArea === "string")
                    $util.base64.decode(object.AwardArea, message.AwardArea = $util.newBuffer($util.base64.length(object.AwardArea)), 0);
                else if (object.AwardArea.length)
                    message.AwardArea = object.AwardArea;
            if (object.PlayerCard != null)
                if (typeof object.PlayerCard === "string")
                    $util.base64.decode(object.PlayerCard, message.PlayerCard = $util.newBuffer($util.base64.length(object.PlayerCard)), 0);
                else if (object.PlayerCard.length)
                    message.PlayerCard = object.PlayerCard;
            if (object.BankerCard != null)
                if (typeof object.BankerCard === "string")
                    $util.base64.decode(object.BankerCard, message.BankerCard = $util.newBuffer($util.base64.length(object.BankerCard)), 0);
                else if (object.BankerCard.length)
                    message.BankerCard = object.BankerCard;
            return message;
        };

        GameBaccaratOver.toObject = function toObject(message, options) {
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
                    object.PlayerCard = "";
                else {
                    object.PlayerCard = [];
                    if (options.bytes !== Array)
                        object.PlayerCard = $util.newBuffer(object.PlayerCard);
                }
                if (options.bytes === String)
                    object.BankerCard = "";
                else {
                    object.BankerCard = [];
                    if (options.bytes !== Array)
                        object.BankerCard = $util.newBuffer(object.BankerCard);
                }
            }
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                object.AwardArea = options.bytes === String ? $util.base64.encode(message.AwardArea, 0, message.AwardArea.length) : options.bytes === Array ? Array.prototype.slice.call(message.AwardArea) : message.AwardArea;
            if (message.PlayerCard != null && message.hasOwnProperty("PlayerCard"))
                object.PlayerCard = options.bytes === String ? $util.base64.encode(message.PlayerCard, 0, message.PlayerCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.PlayerCard) : message.PlayerCard;
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                object.BankerCard = options.bytes === String ? $util.base64.encode(message.BankerCard, 0, message.BankerCard.length) : options.bytes === Array ? Array.prototype.slice.call(message.BankerCard) : message.BankerCard;
            return object;
        };

        GameBaccaratOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratOver;
    })();

    baccarat.GameBaccaratCheckout = (function() {

        function GameBaccaratCheckout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBaccaratCheckout.prototype.Acquire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameBaccaratCheckout.create = function create(properties) {
            return new GameBaccaratCheckout(properties);
        };

        GameBaccaratCheckout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                writer.uint32(8).int64(message.Acquire);
            return writer;
        };

        GameBaccaratCheckout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBaccaratCheckout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.baccarat.GameBaccaratCheckout();
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

        GameBaccaratCheckout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBaccaratCheckout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (!$util.isInteger(message.Acquire) && !(message.Acquire && $util.isInteger(message.Acquire.low) && $util.isInteger(message.Acquire.high)))
                    return "Acquire: integer|Long expected";
            return null;
        };

        GameBaccaratCheckout.fromObject = function fromObject(object) {
            if (object instanceof $root.baccarat.GameBaccaratCheckout)
                return object;
            var message = new $root.baccarat.GameBaccaratCheckout();
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

        GameBaccaratCheckout.toObject = function toObject(message, options) {
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

        GameBaccaratCheckout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBaccaratCheckout;
    })();

    return baccarat;
})();

module.exports = $root;