/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.fishLord = (function() {

    var fishLord = {};

    fishLord.GameFishLordEnter = (function() {

        function GameFishLordEnter(properties) {
            this.AwardAreas = [];
            this.players = [];
            this.Chips = [];
            this.Odds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameFishLordEnter.prototype.AwardAreas = $util.emptyArray;
        GameFishLordEnter.prototype.players = $util.emptyArray;
        GameFishLordEnter.prototype.Countdown = 0;
        GameFishLordEnter.prototype.Chips = $util.emptyArray;
        GameFishLordEnter.prototype.Odds = $util.emptyArray;
        GameFishLordEnter.prototype.BankerScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameFishLordEnter.prototype.PlayerScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameFishLordEnter.prototype.Acquire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameFishLordEnter.create = function create(properties) {
            return new GameFishLordEnter(properties);
        };

        GameFishLordEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardAreas != null && message.AwardAreas.length) {
                writer.uint32(10).fork();
                for (var i = 0; i < message.AwardAreas.length; ++i)
                    writer.int32(message.AwardAreas[i]);
                writer.ldelim();
            }
            if (message.players != null && message.players.length)
                for (var i = 0; i < message.players.length; ++i)
                    writer.uint32(18).string(message.players[i]);
            if (message.Countdown != null && message.hasOwnProperty("Countdown"))
                writer.uint32(24).int32(message.Countdown);
            if (message.Chips != null && message.Chips.length) {
                writer.uint32(34).fork();
                for (var i = 0; i < message.Chips.length; ++i)
                    writer.int32(message.Chips[i]);
                writer.ldelim();
            }
            if (message.Odds != null && message.Odds.length) {
                writer.uint32(42).fork();
                for (var i = 0; i < message.Odds.length; ++i)
                    writer.int32(message.Odds[i]);
                writer.ldelim();
            }
            if (message.BankerScore != null && message.hasOwnProperty("BankerScore"))
                writer.uint32(48).int64(message.BankerScore);
            if (message.PlayerScore != null && message.hasOwnProperty("PlayerScore"))
                writer.uint32(56).int64(message.PlayerScore);
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                writer.uint32(64).int64(message.Acquire);
            return writer;
        };

        GameFishLordEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameFishLordEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fishLord.GameFishLordEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AwardAreas && message.AwardAreas.length))
                        message.AwardAreas = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AwardAreas.push(reader.int32());
                    } else
                        message.AwardAreas.push(reader.int32());
                    break;
                case 2:
                    if (!(message.players && message.players.length))
                        message.players = [];
                    message.players.push(reader.string());
                    break;
                case 3:
                    message.Countdown = reader.int32();
                    break;
                case 4:
                    if (!(message.Chips && message.Chips.length))
                        message.Chips = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Chips.push(reader.int32());
                    } else
                        message.Chips.push(reader.int32());
                    break;
                case 5:
                    if (!(message.Odds && message.Odds.length))
                        message.Odds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Odds.push(reader.int32());
                    } else
                        message.Odds.push(reader.int32());
                    break;
                case 6:
                    message.BankerScore = reader.int64();
                    break;
                case 7:
                    message.PlayerScore = reader.int64();
                    break;
                case 8:
                    message.Acquire = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameFishLordEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameFishLordEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardAreas != null && message.hasOwnProperty("AwardAreas")) {
                if (!Array.isArray(message.AwardAreas))
                    return "AwardAreas: array expected";
                for (var i = 0; i < message.AwardAreas.length; ++i)
                    if (!$util.isInteger(message.AwardAreas[i]))
                        return "AwardAreas: integer[] expected";
            }
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!Array.isArray(message.players))
                    return "players: array expected";
                for (var i = 0; i < message.players.length; ++i)
                    if (!$util.isString(message.players[i]))
                        return "players: string[] expected";
            }
            if (message.Countdown != null && message.hasOwnProperty("Countdown"))
                if (!$util.isInteger(message.Countdown))
                    return "Countdown: integer expected";
            if (message.Chips != null && message.hasOwnProperty("Chips")) {
                if (!Array.isArray(message.Chips))
                    return "Chips: array expected";
                for (var i = 0; i < message.Chips.length; ++i)
                    if (!$util.isInteger(message.Chips[i]))
                        return "Chips: integer[] expected";
            }
            if (message.Odds != null && message.hasOwnProperty("Odds")) {
                if (!Array.isArray(message.Odds))
                    return "Odds: array expected";
                for (var i = 0; i < message.Odds.length; ++i)
                    if (!$util.isInteger(message.Odds[i]))
                        return "Odds: integer[] expected";
            }
            if (message.BankerScore != null && message.hasOwnProperty("BankerScore"))
                if (!$util.isInteger(message.BankerScore) && !(message.BankerScore && $util.isInteger(message.BankerScore.low) && $util.isInteger(message.BankerScore.high)))
                    return "BankerScore: integer|Long expected";
            if (message.PlayerScore != null && message.hasOwnProperty("PlayerScore"))
                if (!$util.isInteger(message.PlayerScore) && !(message.PlayerScore && $util.isInteger(message.PlayerScore.low) && $util.isInteger(message.PlayerScore.high)))
                    return "PlayerScore: integer|Long expected";
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (!$util.isInteger(message.Acquire) && !(message.Acquire && $util.isInteger(message.Acquire.low) && $util.isInteger(message.Acquire.high)))
                    return "Acquire: integer|Long expected";
            return null;
        };

        GameFishLordEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.fishLord.GameFishLordEnter)
                return object;
            var message = new $root.fishLord.GameFishLordEnter();
            if (object.AwardAreas) {
                if (!Array.isArray(object.AwardAreas))
                    throw TypeError(".fishLord.GameFishLordEnter.AwardAreas: array expected");
                message.AwardAreas = [];
                for (var i = 0; i < object.AwardAreas.length; ++i)
                    message.AwardAreas[i] = object.AwardAreas[i] | 0;
            }
            if (object.players) {
                if (!Array.isArray(object.players))
                    throw TypeError(".fishLord.GameFishLordEnter.players: array expected");
                message.players = [];
                for (var i = 0; i < object.players.length; ++i)
                    message.players[i] = String(object.players[i]);
            }
            if (object.Countdown != null)
                message.Countdown = object.Countdown | 0;
            if (object.Chips) {
                if (!Array.isArray(object.Chips))
                    throw TypeError(".fishLord.GameFishLordEnter.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.Odds) {
                if (!Array.isArray(object.Odds))
                    throw TypeError(".fishLord.GameFishLordEnter.Odds: array expected");
                message.Odds = [];
                for (var i = 0; i < object.Odds.length; ++i)
                    message.Odds[i] = object.Odds[i] | 0;
            }
            if (object.BankerScore != null)
                if ($util.Long)
                    (message.BankerScore = $util.Long.fromValue(object.BankerScore)).unsigned = false;
                else if (typeof object.BankerScore === "string")
                    message.BankerScore = parseInt(object.BankerScore, 10);
                else if (typeof object.BankerScore === "number")
                    message.BankerScore = object.BankerScore;
                else if (typeof object.BankerScore === "object")
                    message.BankerScore = new $util.LongBits(object.BankerScore.low >>> 0, object.BankerScore.high >>> 0).toNumber();
            if (object.PlayerScore != null)
                if ($util.Long)
                    (message.PlayerScore = $util.Long.fromValue(object.PlayerScore)).unsigned = false;
                else if (typeof object.PlayerScore === "string")
                    message.PlayerScore = parseInt(object.PlayerScore, 10);
                else if (typeof object.PlayerScore === "number")
                    message.PlayerScore = object.PlayerScore;
                else if (typeof object.PlayerScore === "object")
                    message.PlayerScore = new $util.LongBits(object.PlayerScore.low >>> 0, object.PlayerScore.high >>> 0).toNumber();
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

        GameFishLordEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AwardAreas = [];
                object.players = [];
                object.Chips = [];
                object.Odds = [];
            }
            if (options.defaults) {
                object.Countdown = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BankerScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BankerScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlayerScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlayerScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Acquire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Acquire = options.longs === String ? "0" : 0;
            }
            if (message.AwardAreas && message.AwardAreas.length) {
                object.AwardAreas = [];
                for (var j = 0; j < message.AwardAreas.length; ++j)
                    object.AwardAreas[j] = message.AwardAreas[j];
            }
            if (message.players && message.players.length) {
                object.players = [];
                for (var j = 0; j < message.players.length; ++j)
                    object.players[j] = message.players[j];
            }
            if (message.Countdown != null && message.hasOwnProperty("Countdown"))
                object.Countdown = message.Countdown;
            if (message.Chips && message.Chips.length) {
                object.Chips = [];
                for (var j = 0; j < message.Chips.length; ++j)
                    object.Chips[j] = message.Chips[j];
            }
            if (message.Odds && message.Odds.length) {
                object.Odds = [];
                for (var j = 0; j < message.Odds.length; ++j)
                    object.Odds[j] = message.Odds[j];
            }
            if (message.BankerScore != null && message.hasOwnProperty("BankerScore"))
                if (typeof message.BankerScore === "number")
                    object.BankerScore = options.longs === String ? String(message.BankerScore) : message.BankerScore;
                else
                    object.BankerScore = options.longs === String ? $util.Long.prototype.toString.call(message.BankerScore) : options.longs === Number ? new $util.LongBits(message.BankerScore.low >>> 0, message.BankerScore.high >>> 0).toNumber() : message.BankerScore;
            if (message.PlayerScore != null && message.hasOwnProperty("PlayerScore"))
                if (typeof message.PlayerScore === "number")
                    object.PlayerScore = options.longs === String ? String(message.PlayerScore) : message.PlayerScore;
                else
                    object.PlayerScore = options.longs === String ? $util.Long.prototype.toString.call(message.PlayerScore) : options.longs === Number ? new $util.LongBits(message.PlayerScore.low >>> 0, message.PlayerScore.high >>> 0).toNumber() : message.PlayerScore;
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (typeof message.Acquire === "number")
                    object.Acquire = options.longs === String ? String(message.Acquire) : message.Acquire;
                else
                    object.Acquire = options.longs === String ? $util.Long.prototype.toString.call(message.Acquire) : options.longs === Number ? new $util.LongBits(message.Acquire.low >>> 0, message.Acquire.high >>> 0).toNumber() : message.Acquire;
            return object;
        };

        GameFishLordEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameFishLordEnter;
    })();

    fishLord.GameFishLordPlaying = (function() {

        function GameFishLordPlaying(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameFishLordPlaying.prototype.BetArea = 0;
        GameFishLordPlaying.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameFishLordPlaying.create = function create(properties) {
            return new GameFishLordPlaying(properties);
        };

        GameFishLordPlaying.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                writer.uint32(8).int32(message.BetArea);
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                writer.uint32(16).int64(message.BetScore);
            return writer;
        };

        GameFishLordPlaying.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameFishLordPlaying.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fishLord.GameFishLordPlaying();
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

        GameFishLordPlaying.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameFishLordPlaying.verify = function verify(message) {
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

        GameFishLordPlaying.fromObject = function fromObject(object) {
            if (object instanceof $root.fishLord.GameFishLordPlaying)
                return object;
            var message = new $root.fishLord.GameFishLordPlaying();
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

        GameFishLordPlaying.toObject = function toObject(message, options) {
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

        GameFishLordPlaying.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameFishLordPlaying;
    })();

    fishLord.GameFishLordBetResult = (function() {

        function GameFishLordBetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameFishLordBetResult.prototype.State = 0;
        GameFishLordBetResult.prototype.Hints = "";

        GameFishLordBetResult.create = function create(properties) {
            return new GameFishLordBetResult(properties);
        };

        GameFishLordBetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(8).int32(message.State);
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                writer.uint32(18).string(message.Hints);
            return writer;
        };

        GameFishLordBetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameFishLordBetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fishLord.GameFishLordBetResult();
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

        GameFishLordBetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameFishLordBetResult.verify = function verify(message) {
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

        GameFishLordBetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.fishLord.GameFishLordBetResult)
                return object;
            var message = new $root.fishLord.GameFishLordBetResult();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        GameFishLordBetResult.toObject = function toObject(message, options) {
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

        GameFishLordBetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameFishLordBetResult;
    })();

    fishLord.GameFishLordOver = (function() {

        function GameFishLordOver(properties) {
            this.AwardArea = [];
            this.PlayerCard = [];
            this.BankerCard = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameFishLordOver.prototype.AwardArea = $util.emptyArray;
        GameFishLordOver.prototype.PlayerCard = $util.emptyArray;
        GameFishLordOver.prototype.BankerCard = $util.emptyArray;
        GameFishLordOver.prototype.Acquire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameFishLordOver.create = function create(properties) {
            return new GameFishLordOver(properties);
        };

        GameFishLordOver.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardArea != null && message.AwardArea.length) {
                writer.uint32(10).fork();
                for (var i = 0; i < message.AwardArea.length; ++i)
                    writer.int32(message.AwardArea[i]);
                writer.ldelim();
            }
            if (message.PlayerCard != null && message.PlayerCard.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.PlayerCard.length; ++i)
                    writer.int32(message.PlayerCard[i]);
                writer.ldelim();
            }
            if (message.BankerCard != null && message.BankerCard.length) {
                writer.uint32(26).fork();
                for (var i = 0; i < message.BankerCard.length; ++i)
                    writer.int32(message.BankerCard[i]);
                writer.ldelim();
            }
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                writer.uint32(32).int64(message.Acquire);
            return writer;
        };

        GameFishLordOver.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameFishLordOver.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.fishLord.GameFishLordOver();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AwardArea && message.AwardArea.length))
                        message.AwardArea = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AwardArea.push(reader.int32());
                    } else
                        message.AwardArea.push(reader.int32());
                    break;
                case 2:
                    if (!(message.PlayerCard && message.PlayerCard.length))
                        message.PlayerCard = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.PlayerCard.push(reader.int32());
                    } else
                        message.PlayerCard.push(reader.int32());
                    break;
                case 3:
                    if (!(message.BankerCard && message.BankerCard.length))
                        message.BankerCard = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BankerCard.push(reader.int32());
                    } else
                        message.BankerCard.push(reader.int32());
                    break;
                case 4:
                    message.Acquire = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameFishLordOver.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameFishLordOver.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea")) {
                if (!Array.isArray(message.AwardArea))
                    return "AwardArea: array expected";
                for (var i = 0; i < message.AwardArea.length; ++i)
                    if (!$util.isInteger(message.AwardArea[i]))
                        return "AwardArea: integer[] expected";
            }
            if (message.PlayerCard != null && message.hasOwnProperty("PlayerCard")) {
                if (!Array.isArray(message.PlayerCard))
                    return "PlayerCard: array expected";
                for (var i = 0; i < message.PlayerCard.length; ++i)
                    if (!$util.isInteger(message.PlayerCard[i]))
                        return "PlayerCard: integer[] expected";
            }
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard")) {
                if (!Array.isArray(message.BankerCard))
                    return "BankerCard: array expected";
                for (var i = 0; i < message.BankerCard.length; ++i)
                    if (!$util.isInteger(message.BankerCard[i]))
                        return "BankerCard: integer[] expected";
            }
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (!$util.isInteger(message.Acquire) && !(message.Acquire && $util.isInteger(message.Acquire.low) && $util.isInteger(message.Acquire.high)))
                    return "Acquire: integer|Long expected";
            return null;
        };

        GameFishLordOver.fromObject = function fromObject(object) {
            if (object instanceof $root.fishLord.GameFishLordOver)
                return object;
            var message = new $root.fishLord.GameFishLordOver();
            if (object.AwardArea) {
                if (!Array.isArray(object.AwardArea))
                    throw TypeError(".fishLord.GameFishLordOver.AwardArea: array expected");
                message.AwardArea = [];
                for (var i = 0; i < object.AwardArea.length; ++i)
                    message.AwardArea[i] = object.AwardArea[i] | 0;
            }
            if (object.PlayerCard) {
                if (!Array.isArray(object.PlayerCard))
                    throw TypeError(".fishLord.GameFishLordOver.PlayerCard: array expected");
                message.PlayerCard = [];
                for (var i = 0; i < object.PlayerCard.length; ++i)
                    message.PlayerCard[i] = object.PlayerCard[i] | 0;
            }
            if (object.BankerCard) {
                if (!Array.isArray(object.BankerCard))
                    throw TypeError(".fishLord.GameFishLordOver.BankerCard: array expected");
                message.BankerCard = [];
                for (var i = 0; i < object.BankerCard.length; ++i)
                    message.BankerCard[i] = object.BankerCard[i] | 0;
            }
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

        GameFishLordOver.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AwardArea = [];
                object.PlayerCard = [];
                object.BankerCard = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Acquire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Acquire = options.longs === String ? "0" : 0;
            if (message.AwardArea && message.AwardArea.length) {
                object.AwardArea = [];
                for (var j = 0; j < message.AwardArea.length; ++j)
                    object.AwardArea[j] = message.AwardArea[j];
            }
            if (message.PlayerCard && message.PlayerCard.length) {
                object.PlayerCard = [];
                for (var j = 0; j < message.PlayerCard.length; ++j)
                    object.PlayerCard[j] = message.PlayerCard[j];
            }
            if (message.BankerCard && message.BankerCard.length) {
                object.BankerCard = [];
                for (var j = 0; j < message.BankerCard.length; ++j)
                    object.BankerCard[j] = message.BankerCard[j];
            }
            if (message.Acquire != null && message.hasOwnProperty("Acquire"))
                if (typeof message.Acquire === "number")
                    object.Acquire = options.longs === String ? String(message.Acquire) : message.Acquire;
                else
                    object.Acquire = options.longs === String ? $util.Long.prototype.toString.call(message.Acquire) : options.longs === Number ? new $util.LongBits(message.Acquire.low >>> 0, message.Acquire.high >>> 0).toNumber() : message.Acquire;
            return object;
        };

        GameFishLordOver.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameFishLordOver;
    })();

    return fishLord;
})();

module.exports = $root;
