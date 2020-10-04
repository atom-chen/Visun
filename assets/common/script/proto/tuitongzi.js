/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tuitongzi = (function() {

    var tuitongzi = {};

    tuitongzi.TuitongziSceneResp = (function() {

        function TuitongziSceneResp(properties) {
            this.Chips = [];
            this.AwardAreas = [];
            this.AreaBets = [];
            this.MyBets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziSceneResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TuitongziSceneResp.prototype.Inning = "";
        TuitongziSceneResp.prototype.Chips = $util.emptyArray;
        TuitongziSceneResp.prototype.AwardAreas = $util.emptyArray;
        TuitongziSceneResp.prototype.AreaBets = $util.emptyArray;
        TuitongziSceneResp.prototype.MyBets = $util.emptyArray;
        TuitongziSceneResp.prototype.AllPlayers = null;
        TuitongziSceneResp.prototype.RemainCount = 0;
        TuitongziSceneResp.prototype.StartArea = 0;

        TuitongziSceneResp.create = function create(properties) {
            return new TuitongziSceneResp(properties);
        };

        TuitongziSceneResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
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
            if (message.AreaBets != null && message.AreaBets.length) {
                writer.uint32(34).fork();
                for (var i = 0; i < message.AreaBets.length; ++i)
                    writer.int64(message.AreaBets[i]);
                writer.ldelim();
            }
            if (message.MyBets != null && message.MyBets.length) {
                writer.uint32(42).fork();
                for (var i = 0; i < message.MyBets.length; ++i)
                    writer.int64(message.MyBets[i]);
                writer.ldelim();
            }
            if (message.Inning != null && Object.hasOwnProperty.call(message, "Inning"))
                writer.uint32(50).string(message.Inning);
            if (message.AllPlayers != null && Object.hasOwnProperty.call(message, "AllPlayers"))
                $root.go.PlayerListInfo.encode(message.AllPlayers, writer.uint32(58).fork()).ldelim();
            if (message.RemainCount != null && Object.hasOwnProperty.call(message, "RemainCount"))
                writer.uint32(64).int32(message.RemainCount);
            if (message.StartArea != null && Object.hasOwnProperty.call(message, "StartArea"))
                writer.uint32(72).int32(message.StartArea);
            return writer;
        };

        TuitongziSceneResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziSceneResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziSceneResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 6:
                    message.Inning = reader.string();
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
                    if (!(message.AreaBets && message.AreaBets.length))
                        message.AreaBets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AreaBets.push(reader.int64());
                    } else
                        message.AreaBets.push(reader.int64());
                    break;
                case 5:
                    if (!(message.MyBets && message.MyBets.length))
                        message.MyBets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.MyBets.push(reader.int64());
                    } else
                        message.MyBets.push(reader.int64());
                    break;
                case 7:
                    message.AllPlayers = $root.go.PlayerListInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.RemainCount = reader.int32();
                    break;
                case 9:
                    message.StartArea = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziSceneResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziSceneResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                if (!$util.isString(message.Inning))
                    return "Inning: string expected";
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
            if (message.AreaBets != null && message.hasOwnProperty("AreaBets")) {
                if (!Array.isArray(message.AreaBets))
                    return "AreaBets: array expected";
                for (var i = 0; i < message.AreaBets.length; ++i)
                    if (!$util.isInteger(message.AreaBets[i]) && !(message.AreaBets[i] && $util.isInteger(message.AreaBets[i].low) && $util.isInteger(message.AreaBets[i].high)))
                        return "AreaBets: integer|Long[] expected";
            }
            if (message.MyBets != null && message.hasOwnProperty("MyBets")) {
                if (!Array.isArray(message.MyBets))
                    return "MyBets: array expected";
                for (var i = 0; i < message.MyBets.length; ++i)
                    if (!$util.isInteger(message.MyBets[i]) && !(message.MyBets[i] && $util.isInteger(message.MyBets[i].low) && $util.isInteger(message.MyBets[i].high)))
                        return "MyBets: integer|Long[] expected";
            }
            if (message.AllPlayers != null && message.hasOwnProperty("AllPlayers")) {
                var error = $root.go.PlayerListInfo.verify(message.AllPlayers);
                if (error)
                    return "AllPlayers." + error;
            }
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                if (!$util.isInteger(message.RemainCount))
                    return "RemainCount: integer expected";
            if (message.StartArea != null && message.hasOwnProperty("StartArea"))
                if (!$util.isInteger(message.StartArea))
                    return "StartArea: integer expected";
            return null;
        };

        TuitongziSceneResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziSceneResp)
                return object;
            var message = new $root.tuitongzi.TuitongziSceneResp();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.Inning != null)
                message.Inning = String(object.Inning);
            if (object.Chips) {
                if (!Array.isArray(object.Chips))
                    throw TypeError(".tuitongzi.TuitongziSceneResp.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AwardAreas) {
                if (!Array.isArray(object.AwardAreas))
                    throw TypeError(".tuitongzi.TuitongziSceneResp.AwardAreas: array expected");
                message.AwardAreas = [];
                for (var i = 0; i < object.AwardAreas.length; ++i)
                    if (typeof object.AwardAreas[i] === "string")
                        $util.base64.decode(object.AwardAreas[i], message.AwardAreas[i] = $util.newBuffer($util.base64.length(object.AwardAreas[i])), 0);
                    else if (object.AwardAreas[i].length)
                        message.AwardAreas[i] = object.AwardAreas[i];
            }
            if (object.AreaBets) {
                if (!Array.isArray(object.AreaBets))
                    throw TypeError(".tuitongzi.TuitongziSceneResp.AreaBets: array expected");
                message.AreaBets = [];
                for (var i = 0; i < object.AreaBets.length; ++i)
                    if ($util.Long)
                        (message.AreaBets[i] = $util.Long.fromValue(object.AreaBets[i])).unsigned = false;
                    else if (typeof object.AreaBets[i] === "string")
                        message.AreaBets[i] = parseInt(object.AreaBets[i], 10);
                    else if (typeof object.AreaBets[i] === "number")
                        message.AreaBets[i] = object.AreaBets[i];
                    else if (typeof object.AreaBets[i] === "object")
                        message.AreaBets[i] = new $util.LongBits(object.AreaBets[i].low >>> 0, object.AreaBets[i].high >>> 0).toNumber();
            }
            if (object.MyBets) {
                if (!Array.isArray(object.MyBets))
                    throw TypeError(".tuitongzi.TuitongziSceneResp.MyBets: array expected");
                message.MyBets = [];
                for (var i = 0; i < object.MyBets.length; ++i)
                    if ($util.Long)
                        (message.MyBets[i] = $util.Long.fromValue(object.MyBets[i])).unsigned = false;
                    else if (typeof object.MyBets[i] === "string")
                        message.MyBets[i] = parseInt(object.MyBets[i], 10);
                    else if (typeof object.MyBets[i] === "number")
                        message.MyBets[i] = object.MyBets[i];
                    else if (typeof object.MyBets[i] === "object")
                        message.MyBets[i] = new $util.LongBits(object.MyBets[i].low >>> 0, object.MyBets[i].high >>> 0).toNumber();
            }
            if (object.AllPlayers != null) {
                if (typeof object.AllPlayers !== "object")
                    throw TypeError(".tuitongzi.TuitongziSceneResp.AllPlayers: object expected");
                message.AllPlayers = $root.go.PlayerListInfo.fromObject(object.AllPlayers);
            }
            if (object.RemainCount != null)
                message.RemainCount = object.RemainCount | 0;
            if (object.StartArea != null)
                message.StartArea = object.StartArea | 0;
            return message;
        };

        TuitongziSceneResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Chips = [];
                object.AwardAreas = [];
                object.AreaBets = [];
                object.MyBets = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.Inning = "";
                object.AllPlayers = null;
                object.RemainCount = 0;
                object.StartArea = 0;
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
            if (message.AreaBets && message.AreaBets.length) {
                object.AreaBets = [];
                for (var j = 0; j < message.AreaBets.length; ++j)
                    if (typeof message.AreaBets[j] === "number")
                        object.AreaBets[j] = options.longs === String ? String(message.AreaBets[j]) : message.AreaBets[j];
                    else
                        object.AreaBets[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AreaBets[j]) : options.longs === Number ? new $util.LongBits(message.AreaBets[j].low >>> 0, message.AreaBets[j].high >>> 0).toNumber() : message.AreaBets[j];
            }
            if (message.MyBets && message.MyBets.length) {
                object.MyBets = [];
                for (var j = 0; j < message.MyBets.length; ++j)
                    if (typeof message.MyBets[j] === "number")
                        object.MyBets[j] = options.longs === String ? String(message.MyBets[j]) : message.MyBets[j];
                    else
                        object.MyBets[j] = options.longs === String ? $util.Long.prototype.toString.call(message.MyBets[j]) : options.longs === Number ? new $util.LongBits(message.MyBets[j].low >>> 0, message.MyBets[j].high >>> 0).toNumber() : message.MyBets[j];
            }
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                object.Inning = message.Inning;
            if (message.AllPlayers != null && message.hasOwnProperty("AllPlayers"))
                object.AllPlayers = $root.go.PlayerListInfo.toObject(message.AllPlayers, options);
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                object.RemainCount = message.RemainCount;
            if (message.StartArea != null && message.hasOwnProperty("StartArea"))
                object.StartArea = message.StartArea;
            return object;
        };

        TuitongziSceneResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziSceneResp;
    })();

    tuitongzi.TuitongziStateStartResp = (function() {

        function TuitongziStateStartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziStateStartResp.prototype.Times = null;
        TuitongziStateStartResp.prototype.StartArea = 0;
        TuitongziStateStartResp.prototype.Dice = $util.newBuffer([]);
        TuitongziStateStartResp.prototype.Inning = "";

        TuitongziStateStartResp.create = function create(properties) {
            return new TuitongziStateStartResp(properties);
        };

        TuitongziStateStartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.StartArea != null && Object.hasOwnProperty.call(message, "StartArea"))
                writer.uint32(16).int32(message.StartArea);
            if (message.Dice != null && Object.hasOwnProperty.call(message, "Dice"))
                writer.uint32(26).bytes(message.Dice);
            if (message.Inning != null && Object.hasOwnProperty.call(message, "Inning"))
                writer.uint32(34).string(message.Inning);
            return writer;
        };

        TuitongziStateStartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziStateStartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziStateStartResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.StartArea = reader.int32();
                    break;
                case 3:
                    message.Dice = reader.bytes();
                    break;
                case 4:
                    message.Inning = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziStateStartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziStateStartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.StartArea != null && message.hasOwnProperty("StartArea"))
                if (!$util.isInteger(message.StartArea))
                    return "StartArea: integer expected";
            if (message.Dice != null && message.hasOwnProperty("Dice"))
                if (!(message.Dice && typeof message.Dice.length === "number" || $util.isString(message.Dice)))
                    return "Dice: buffer expected";
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                if (!$util.isString(message.Inning))
                    return "Inning: string expected";
            return null;
        };

        TuitongziStateStartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziStateStartResp)
                return object;
            var message = new $root.tuitongzi.TuitongziStateStartResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tuitongzi.TuitongziStateStartResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.StartArea != null)
                message.StartArea = object.StartArea | 0;
            if (object.Dice != null)
                if (typeof object.Dice === "string")
                    $util.base64.decode(object.Dice, message.Dice = $util.newBuffer($util.base64.length(object.Dice)), 0);
                else if (object.Dice.length)
                    message.Dice = object.Dice;
            if (object.Inning != null)
                message.Inning = String(object.Inning);
            return message;
        };

        TuitongziStateStartResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.StartArea = 0;
                if (options.bytes === String)
                    object.Dice = "";
                else {
                    object.Dice = [];
                    if (options.bytes !== Array)
                        object.Dice = $util.newBuffer(object.Dice);
                }
                object.Inning = "";
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.StartArea != null && message.hasOwnProperty("StartArea"))
                object.StartArea = message.StartArea;
            if (message.Dice != null && message.hasOwnProperty("Dice"))
                object.Dice = options.bytes === String ? $util.base64.encode(message.Dice, 0, message.Dice.length) : options.bytes === Array ? Array.prototype.slice.call(message.Dice) : message.Dice;
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                object.Inning = message.Inning;
            return object;
        };

        TuitongziStateStartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziStateStartResp;
    })();

    tuitongzi.TuitongziStatePlayingResp = (function() {

        function TuitongziStatePlayingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziStatePlayingResp.prototype.Times = null;

        TuitongziStatePlayingResp.create = function create(properties) {
            return new TuitongziStatePlayingResp(properties);
        };

        TuitongziStatePlayingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TuitongziStatePlayingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziStatePlayingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziStatePlayingResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziStatePlayingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        TuitongziStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziStatePlayingResp)
                return object;
            var message = new $root.tuitongzi.TuitongziStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tuitongzi.TuitongziStatePlayingResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        TuitongziStatePlayingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        TuitongziStatePlayingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziStatePlayingResp;
    })();

    tuitongzi.TuitongziStateOpenResp = (function() {

        function TuitongziStateOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziStateOpenResp.prototype.Times = null;
        TuitongziStateOpenResp.prototype.OpenInfo = null;

        TuitongziStateOpenResp.create = function create(properties) {
            return new TuitongziStateOpenResp(properties);
        };

        TuitongziStateOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.OpenInfo != null && Object.hasOwnProperty.call(message, "OpenInfo"))
                $root.tuitongzi.TuitongziOpenResp.encode(message.OpenInfo, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        TuitongziStateOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziStateOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziStateOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.OpenInfo = $root.tuitongzi.TuitongziOpenResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziStateOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziStateOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo")) {
                var error = $root.tuitongzi.TuitongziOpenResp.verify(message.OpenInfo);
                if (error)
                    return "OpenInfo." + error;
            }
            return null;
        };

        TuitongziStateOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziStateOpenResp)
                return object;
            var message = new $root.tuitongzi.TuitongziStateOpenResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tuitongzi.TuitongziStateOpenResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.OpenInfo != null) {
                if (typeof object.OpenInfo !== "object")
                    throw TypeError(".tuitongzi.TuitongziStateOpenResp.OpenInfo: object expected");
                message.OpenInfo = $root.tuitongzi.TuitongziOpenResp.fromObject(object.OpenInfo);
            }
            return message;
        };

        TuitongziStateOpenResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.OpenInfo = null;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo"))
                object.OpenInfo = $root.tuitongzi.TuitongziOpenResp.toObject(message.OpenInfo, options);
            return object;
        };

        TuitongziStateOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziStateOpenResp;
    })();

    tuitongzi.TuitongziStateOverResp = (function() {

        function TuitongziStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziStateOverResp.prototype.Times = null;

        TuitongziStateOverResp.create = function create(properties) {
            return new TuitongziStateOverResp(properties);
        };

        TuitongziStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TuitongziStateOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziStateOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziStateOverResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziStateOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziStateOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        TuitongziStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziStateOverResp)
                return object;
            var message = new $root.tuitongzi.TuitongziStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tuitongzi.TuitongziStateOverResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        TuitongziStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        TuitongziStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziStateOverResp;
    })();

    tuitongzi.TuitongziBetReq = (function() {

        function TuitongziBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziBetReq.prototype.BetArea = 0;
        TuitongziBetReq.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TuitongziBetReq.create = function create(properties) {
            return new TuitongziBetReq(properties);
        };

        TuitongziBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && Object.hasOwnProperty.call(message, "BetArea"))
                writer.uint32(8).int32(message.BetArea);
            if (message.BetScore != null && Object.hasOwnProperty.call(message, "BetScore"))
                writer.uint32(16).int64(message.BetScore);
            return writer;
        };

        TuitongziBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziBetReq();
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

        TuitongziBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziBetReq.verify = function verify(message) {
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

        TuitongziBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziBetReq)
                return object;
            var message = new $root.tuitongzi.TuitongziBetReq();
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

        TuitongziBetReq.toObject = function toObject(message, options) {
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

        TuitongziBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziBetReq;
    })();

    tuitongzi.TuitongziBetResp = (function() {

        function TuitongziBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziBetResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TuitongziBetResp.prototype.BetArea = 0;
        TuitongziBetResp.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TuitongziBetResp.create = function create(properties) {
            return new TuitongziBetResp(properties);
        };

        TuitongziBetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.BetArea != null && Object.hasOwnProperty.call(message, "BetArea"))
                writer.uint32(16).int32(message.BetArea);
            if (message.BetScore != null && Object.hasOwnProperty.call(message, "BetScore"))
                writer.uint32(24).int64(message.BetScore);
            return writer;
        };

        TuitongziBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziBetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.BetArea = reader.int32();
                    break;
                case 3:
                    message.BetScore = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziBetResp.verify = function verify(message) {
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
            return null;
        };

        TuitongziBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziBetResp)
                return object;
            var message = new $root.tuitongzi.TuitongziBetResp();
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
            return message;
        };

        TuitongziBetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
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
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                object.BetArea = message.BetArea;
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (typeof message.BetScore === "number")
                    object.BetScore = options.longs === String ? String(message.BetScore) : message.BetScore;
                else
                    object.BetScore = options.longs === String ? $util.Long.prototype.toString.call(message.BetScore) : options.longs === Number ? new $util.LongBits(message.BetScore.low >>> 0, message.BetScore.high >>> 0).toNumber() : message.BetScore;
            return object;
        };

        TuitongziBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziBetResp;
    })();

    tuitongzi.TuitongziOpenResp = (function() {

        function TuitongziOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziOpenResp.prototype.AwardArea = $util.newBuffer([]);
        TuitongziOpenResp.prototype.BankerCard = null;
        TuitongziOpenResp.prototype.ShunCard = null;
        TuitongziOpenResp.prototype.TianCard = null;
        TuitongziOpenResp.prototype.DiCard = null;

        TuitongziOpenResp.create = function create(properties) {
            return new TuitongziOpenResp(properties);
        };

        TuitongziOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardArea != null && Object.hasOwnProperty.call(message, "AwardArea"))
                writer.uint32(10).bytes(message.AwardArea);
            if (message.BankerCard != null && Object.hasOwnProperty.call(message, "BankerCard"))
                $root.go.CardInfo.encode(message.BankerCard, writer.uint32(18).fork()).ldelim();
            if (message.ShunCard != null && Object.hasOwnProperty.call(message, "ShunCard"))
                $root.go.CardInfo.encode(message.ShunCard, writer.uint32(26).fork()).ldelim();
            if (message.TianCard != null && Object.hasOwnProperty.call(message, "TianCard"))
                $root.go.CardInfo.encode(message.TianCard, writer.uint32(34).fork()).ldelim();
            if (message.DiCard != null && Object.hasOwnProperty.call(message, "DiCard"))
                $root.go.CardInfo.encode(message.DiCard, writer.uint32(42).fork()).ldelim();
            return writer;
        };

        TuitongziOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AwardArea = reader.bytes();
                    break;
                case 2:
                    message.BankerCard = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ShunCard = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.TianCard = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.DiCard = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                if (!(message.AwardArea && typeof message.AwardArea.length === "number" || $util.isString(message.AwardArea)))
                    return "AwardArea: buffer expected";
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard")) {
                var error = $root.go.CardInfo.verify(message.BankerCard);
                if (error)
                    return "BankerCard." + error;
            }
            if (message.ShunCard != null && message.hasOwnProperty("ShunCard")) {
                var error = $root.go.CardInfo.verify(message.ShunCard);
                if (error)
                    return "ShunCard." + error;
            }
            if (message.TianCard != null && message.hasOwnProperty("TianCard")) {
                var error = $root.go.CardInfo.verify(message.TianCard);
                if (error)
                    return "TianCard." + error;
            }
            if (message.DiCard != null && message.hasOwnProperty("DiCard")) {
                var error = $root.go.CardInfo.verify(message.DiCard);
                if (error)
                    return "DiCard." + error;
            }
            return null;
        };

        TuitongziOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziOpenResp)
                return object;
            var message = new $root.tuitongzi.TuitongziOpenResp();
            if (object.AwardArea != null)
                if (typeof object.AwardArea === "string")
                    $util.base64.decode(object.AwardArea, message.AwardArea = $util.newBuffer($util.base64.length(object.AwardArea)), 0);
                else if (object.AwardArea.length)
                    message.AwardArea = object.AwardArea;
            if (object.BankerCard != null) {
                if (typeof object.BankerCard !== "object")
                    throw TypeError(".tuitongzi.TuitongziOpenResp.BankerCard: object expected");
                message.BankerCard = $root.go.CardInfo.fromObject(object.BankerCard);
            }
            if (object.ShunCard != null) {
                if (typeof object.ShunCard !== "object")
                    throw TypeError(".tuitongzi.TuitongziOpenResp.ShunCard: object expected");
                message.ShunCard = $root.go.CardInfo.fromObject(object.ShunCard);
            }
            if (object.TianCard != null) {
                if (typeof object.TianCard !== "object")
                    throw TypeError(".tuitongzi.TuitongziOpenResp.TianCard: object expected");
                message.TianCard = $root.go.CardInfo.fromObject(object.TianCard);
            }
            if (object.DiCard != null) {
                if (typeof object.DiCard !== "object")
                    throw TypeError(".tuitongzi.TuitongziOpenResp.DiCard: object expected");
                message.DiCard = $root.go.CardInfo.fromObject(object.DiCard);
            }
            return message;
        };

        TuitongziOpenResp.toObject = function toObject(message, options) {
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
                object.BankerCard = null;
                object.ShunCard = null;
                object.TianCard = null;
                object.DiCard = null;
            }
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                object.AwardArea = options.bytes === String ? $util.base64.encode(message.AwardArea, 0, message.AwardArea.length) : options.bytes === Array ? Array.prototype.slice.call(message.AwardArea) : message.AwardArea;
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                object.BankerCard = $root.go.CardInfo.toObject(message.BankerCard, options);
            if (message.ShunCard != null && message.hasOwnProperty("ShunCard"))
                object.ShunCard = $root.go.CardInfo.toObject(message.ShunCard, options);
            if (message.TianCard != null && message.hasOwnProperty("TianCard"))
                object.TianCard = $root.go.CardInfo.toObject(message.TianCard, options);
            if (message.DiCard != null && message.hasOwnProperty("DiCard"))
                object.DiCard = $root.go.CardInfo.toObject(message.DiCard, options);
            return object;
        };

        TuitongziOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziOpenResp;
    })();

    tuitongzi.TuitongziCheckoutResp = (function() {

        function TuitongziCheckoutResp(properties) {
            this.Acquires = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziCheckoutResp.prototype.MyAcquire = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TuitongziCheckoutResp.prototype.Acquires = $util.emptyArray;

        TuitongziCheckoutResp.create = function create(properties) {
            return new TuitongziCheckoutResp(properties);
        };

        TuitongziCheckoutResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MyAcquire != null && Object.hasOwnProperty.call(message, "MyAcquire"))
                writer.uint32(8).int64(message.MyAcquire);
            if (message.Acquires != null && message.Acquires.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.Acquires.length; ++i)
                    writer.int64(message.Acquires[i]);
                writer.ldelim();
            }
            return writer;
        };

        TuitongziCheckoutResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziCheckoutResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziCheckoutResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MyAcquire = reader.int64();
                    break;
                case 2:
                    if (!(message.Acquires && message.Acquires.length))
                        message.Acquires = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Acquires.push(reader.int64());
                    } else
                        message.Acquires.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziCheckoutResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziCheckoutResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MyAcquire != null && message.hasOwnProperty("MyAcquire"))
                if (!$util.isInteger(message.MyAcquire) && !(message.MyAcquire && $util.isInteger(message.MyAcquire.low) && $util.isInteger(message.MyAcquire.high)))
                    return "MyAcquire: integer|Long expected";
            if (message.Acquires != null && message.hasOwnProperty("Acquires")) {
                if (!Array.isArray(message.Acquires))
                    return "Acquires: array expected";
                for (var i = 0; i < message.Acquires.length; ++i)
                    if (!$util.isInteger(message.Acquires[i]) && !(message.Acquires[i] && $util.isInteger(message.Acquires[i].low) && $util.isInteger(message.Acquires[i].high)))
                        return "Acquires: integer|Long[] expected";
            }
            return null;
        };

        TuitongziCheckoutResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziCheckoutResp)
                return object;
            var message = new $root.tuitongzi.TuitongziCheckoutResp();
            if (object.MyAcquire != null)
                if ($util.Long)
                    (message.MyAcquire = $util.Long.fromValue(object.MyAcquire)).unsigned = false;
                else if (typeof object.MyAcquire === "string")
                    message.MyAcquire = parseInt(object.MyAcquire, 10);
                else if (typeof object.MyAcquire === "number")
                    message.MyAcquire = object.MyAcquire;
                else if (typeof object.MyAcquire === "object")
                    message.MyAcquire = new $util.LongBits(object.MyAcquire.low >>> 0, object.MyAcquire.high >>> 0).toNumber();
            if (object.Acquires) {
                if (!Array.isArray(object.Acquires))
                    throw TypeError(".tuitongzi.TuitongziCheckoutResp.Acquires: array expected");
                message.Acquires = [];
                for (var i = 0; i < object.Acquires.length; ++i)
                    if ($util.Long)
                        (message.Acquires[i] = $util.Long.fromValue(object.Acquires[i])).unsigned = false;
                    else if (typeof object.Acquires[i] === "string")
                        message.Acquires[i] = parseInt(object.Acquires[i], 10);
                    else if (typeof object.Acquires[i] === "number")
                        message.Acquires[i] = object.Acquires[i];
                    else if (typeof object.Acquires[i] === "object")
                        message.Acquires[i] = new $util.LongBits(object.Acquires[i].low >>> 0, object.Acquires[i].high >>> 0).toNumber();
            }
            return message;
        };

        TuitongziCheckoutResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Acquires = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MyAcquire = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MyAcquire = options.longs === String ? "0" : 0;
            if (message.MyAcquire != null && message.hasOwnProperty("MyAcquire"))
                if (typeof message.MyAcquire === "number")
                    object.MyAcquire = options.longs === String ? String(message.MyAcquire) : message.MyAcquire;
                else
                    object.MyAcquire = options.longs === String ? $util.Long.prototype.toString.call(message.MyAcquire) : options.longs === Number ? new $util.LongBits(message.MyAcquire.low >>> 0, message.MyAcquire.high >>> 0).toNumber() : message.MyAcquire;
            if (message.Acquires && message.Acquires.length) {
                object.Acquires = [];
                for (var j = 0; j < message.Acquires.length; ++j)
                    if (typeof message.Acquires[j] === "number")
                        object.Acquires[j] = options.longs === String ? String(message.Acquires[j]) : message.Acquires[j];
                    else
                        object.Acquires[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Acquires[j]) : options.longs === Number ? new $util.LongBits(message.Acquires[j].low >>> 0, message.Acquires[j].high >>> 0).toNumber() : message.Acquires[j];
            }
            return object;
        };

        TuitongziCheckoutResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziCheckoutResp;
    })();

    tuitongzi.TuitongziHostReq = (function() {

        function TuitongziHostReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziHostReq.prototype.IsWant = false;

        TuitongziHostReq.create = function create(properties) {
            return new TuitongziHostReq(properties);
        };

        TuitongziHostReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        TuitongziHostReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziHostReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziHostReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsWant = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziHostReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziHostReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        TuitongziHostReq.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziHostReq)
                return object;
            var message = new $root.tuitongzi.TuitongziHostReq();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        TuitongziHostReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        TuitongziHostReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziHostReq;
    })();

    tuitongzi.TuitongziHostResp = (function() {

        function TuitongziHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziHostResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TuitongziHostResp.prototype.IsWant = false;

        TuitongziHostResp.create = function create(properties) {
            return new TuitongziHostResp(properties);
        };

        TuitongziHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        TuitongziHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziHostResp();
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

        TuitongziHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziHostResp.verify = function verify(message) {
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

        TuitongziHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziHostResp)
                return object;
            var message = new $root.tuitongzi.TuitongziHostResp();
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

        TuitongziHostResp.toObject = function toObject(message, options) {
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

        TuitongziHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziHostResp;
    })();

    tuitongzi.TuitongziSuperHostReq = (function() {

        function TuitongziSuperHostReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziSuperHostReq.prototype.IsWant = false;

        TuitongziSuperHostReq.create = function create(properties) {
            return new TuitongziSuperHostReq(properties);
        };

        TuitongziSuperHostReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        TuitongziSuperHostReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziSuperHostReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziSuperHostReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsWant = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TuitongziSuperHostReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziSuperHostReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        TuitongziSuperHostReq.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziSuperHostReq)
                return object;
            var message = new $root.tuitongzi.TuitongziSuperHostReq();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        TuitongziSuperHostReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        TuitongziSuperHostReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziSuperHostReq;
    })();

    tuitongzi.TuitongziSuperHostResp = (function() {

        function TuitongziSuperHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TuitongziSuperHostResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TuitongziSuperHostResp.prototype.IsWant = false;

        TuitongziSuperHostResp.create = function create(properties) {
            return new TuitongziSuperHostResp(properties);
        };

        TuitongziSuperHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        TuitongziSuperHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TuitongziSuperHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tuitongzi.TuitongziSuperHostResp();
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

        TuitongziSuperHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TuitongziSuperHostResp.verify = function verify(message) {
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

        TuitongziSuperHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tuitongzi.TuitongziSuperHostResp)
                return object;
            var message = new $root.tuitongzi.TuitongziSuperHostResp();
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

        TuitongziSuperHostResp.toObject = function toObject(message, options) {
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

        TuitongziSuperHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TuitongziSuperHostResp;
    })();

    return tuitongzi;
})();

$root.go = (function() {

    var go = {};

    go.PlayerState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PlayerLookOn"] = 0;
        values[valuesById[1] = "PlayerSitDown"] = 1;
        values[valuesById[2] = "PlayerAgree"] = 2;
        values[valuesById[3] = "PlayerPlaying"] = 3;
        values[valuesById[4] = "PlayerPickUp"] = 4;
        values[valuesById[5] = "PlayerCall"] = 5;
        values[valuesById[6] = "PlayerFollow"] = 6;
        values[valuesById[7] = "PlayerRaise"] = 7;
        values[valuesById[8] = "PlayerLook"] = 8;
        values[valuesById[9] = "PlayerCompare"] = 9;
        values[valuesById[10] = "PlayerCompareLose"] = 10;
        values[valuesById[11] = "PlayerOutCard"] = 11;
        values[valuesById[12] = "PlayerPass"] = 12;
        values[valuesById[13] = "PlayerChi"] = 13;
        values[valuesById[14] = "PlayerPong"] = 14;
        values[valuesById[15] = "PlayerMingGang"] = 15;
        values[valuesById[16] = "PlayerAnGang"] = 16;
        values[valuesById[17] = "PlayerTing"] = 17;
        values[valuesById[18] = "PlayerHu"] = 18;
        values[valuesById[19] = "PlayerZiMo"] = 19;
        values[valuesById[98] = "PlayerGiveUp"] = 98;
        values[valuesById[99] = "PlayerStandUp"] = 99;
        return values;
    })();

    go.PlayerInfo = (function() {

        function PlayerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.Name = "";
        PlayerInfo.prototype.FaceID = 0;
        PlayerInfo.prototype.Age = 0;
        PlayerInfo.prototype.Sex = 0;
        PlayerInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerInfo.prototype.Level = 0;
        PlayerInfo.prototype.Account = "";
        PlayerInfo.prototype.Sate = 0;
        PlayerInfo.prototype.PlatformID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.RoomNum = 0;
        PlayerInfo.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        PlayerInfo.prototype.TableID = 0;
        PlayerInfo.prototype.ChairID = 0;

        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(18).string(message.Name);
            if (message.Age != null && Object.hasOwnProperty.call(message, "Age"))
                writer.uint32(24).uint32(message.Age);
            if (message.Sex != null && Object.hasOwnProperty.call(message, "Sex"))
                writer.uint32(32).uint32(message.Sex);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(40).int64(message.Gold);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(48).uint32(message.Level);
            if (message.Account != null && Object.hasOwnProperty.call(message, "Account"))
                writer.uint32(58).string(message.Account);
            if (message.Sate != null && Object.hasOwnProperty.call(message, "Sate"))
                writer.uint32(64).int32(message.Sate);
            if (message.PlatformID != null && Object.hasOwnProperty.call(message, "PlatformID"))
                writer.uint32(72).uint64(message.PlatformID);
            if (message.RoomNum != null && Object.hasOwnProperty.call(message, "RoomNum"))
                writer.uint32(80).uint32(message.RoomNum);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(88).uint64(message.GameID);
            if (message.TableID != null && Object.hasOwnProperty.call(message, "TableID"))
                writer.uint32(96).uint32(message.TableID);
            if (message.ChairID != null && Object.hasOwnProperty.call(message, "ChairID"))
                writer.uint32(104).uint32(message.ChairID);
            if (message.FaceID != null && Object.hasOwnProperty.call(message, "FaceID"))
                writer.uint32(112).uint32(message.FaceID);
            return writer;
        };

        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 14:
                    message.FaceID = reader.uint32();
                    break;
                case 3:
                    message.Age = reader.uint32();
                    break;
                case 4:
                    message.Sex = reader.uint32();
                    break;
                case 5:
                    message.Gold = reader.int64();
                    break;
                case 6:
                    message.Level = reader.uint32();
                    break;
                case 7:
                    message.Account = reader.string();
                    break;
                case 8:
                    message.Sate = reader.int32();
                    break;
                case 9:
                    message.PlatformID = reader.uint64();
                    break;
                case 10:
                    message.RoomNum = reader.uint32();
                    break;
                case 11:
                    message.GameID = reader.uint64();
                    break;
                case 12:
                    message.TableID = reader.uint32();
                    break;
                case 13:
                    message.ChairID = reader.uint32();
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
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.Age != null && message.hasOwnProperty("Age"))
                if (!$util.isInteger(message.Age))
                    return "Age: integer expected";
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                if (!$util.isInteger(message.Sex))
                    return "Sex: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Account != null && message.hasOwnProperty("Account"))
                if (!$util.isString(message.Account))
                    return "Account: string expected";
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                switch (message.Sate) {
                default:
                    return "Sate: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 98:
                case 99:
                    break;
                }
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (!$util.isInteger(message.PlatformID) && !(message.PlatformID && $util.isInteger(message.PlatformID.low) && $util.isInteger(message.PlatformID.high)))
                    return "PlatformID: integer|Long expected";
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                if (!$util.isInteger(message.RoomNum))
                    return "RoomNum: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                if (!$util.isInteger(message.ChairID))
                    return "ChairID: integer expected";
            return null;
        };

        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.PlayerInfo)
                return object;
            var message = new $root.go.PlayerInfo();
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
            if (object.FaceID != null)
                message.FaceID = object.FaceID >>> 0;
            if (object.Age != null)
                message.Age = object.Age >>> 0;
            if (object.Sex != null)
                message.Sex = object.Sex >>> 0;
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level = object.Level >>> 0;
            if (object.Account != null)
                message.Account = String(object.Account);
            switch (object.Sate) {
            case "PlayerLookOn":
            case 0:
                message.Sate = 0;
                break;
            case "PlayerSitDown":
            case 1:
                message.Sate = 1;
                break;
            case "PlayerAgree":
            case 2:
                message.Sate = 2;
                break;
            case "PlayerPlaying":
            case 3:
                message.Sate = 3;
                break;
            case "PlayerPickUp":
            case 4:
                message.Sate = 4;
                break;
            case "PlayerCall":
            case 5:
                message.Sate = 5;
                break;
            case "PlayerFollow":
            case 6:
                message.Sate = 6;
                break;
            case "PlayerRaise":
            case 7:
                message.Sate = 7;
                break;
            case "PlayerLook":
            case 8:
                message.Sate = 8;
                break;
            case "PlayerCompare":
            case 9:
                message.Sate = 9;
                break;
            case "PlayerCompareLose":
            case 10:
                message.Sate = 10;
                break;
            case "PlayerOutCard":
            case 11:
                message.Sate = 11;
                break;
            case "PlayerPass":
            case 12:
                message.Sate = 12;
                break;
            case "PlayerChi":
            case 13:
                message.Sate = 13;
                break;
            case "PlayerPong":
            case 14:
                message.Sate = 14;
                break;
            case "PlayerMingGang":
            case 15:
                message.Sate = 15;
                break;
            case "PlayerAnGang":
            case 16:
                message.Sate = 16;
                break;
            case "PlayerTing":
            case 17:
                message.Sate = 17;
                break;
            case "PlayerHu":
            case 18:
                message.Sate = 18;
                break;
            case "PlayerZiMo":
            case 19:
                message.Sate = 19;
                break;
            case "PlayerGiveUp":
            case 98:
                message.Sate = 98;
                break;
            case "PlayerStandUp":
            case 99:
                message.Sate = 99;
                break;
            }
            if (object.PlatformID != null)
                if ($util.Long)
                    (message.PlatformID = $util.Long.fromValue(object.PlatformID)).unsigned = true;
                else if (typeof object.PlatformID === "string")
                    message.PlatformID = parseInt(object.PlatformID, 10);
                else if (typeof object.PlatformID === "number")
                    message.PlatformID = object.PlatformID;
                else if (typeof object.PlatformID === "object")
                    message.PlatformID = new $util.LongBits(object.PlatformID.low >>> 0, object.PlatformID.high >>> 0).toNumber(true);
            if (object.RoomNum != null)
                message.RoomNum = object.RoomNum >>> 0;
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.TableID != null)
                message.TableID = object.TableID >>> 0;
            if (object.ChairID != null)
                message.ChairID = object.ChairID >>> 0;
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
                object.Age = 0;
                object.Sex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
                object.Level = 0;
                object.Account = "";
                object.Sate = options.enums === String ? "PlayerLookOn" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.PlatformID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformID = options.longs === String ? "0" : 0;
                object.RoomNum = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                object.TableID = 0;
                object.ChairID = 0;
                object.FaceID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Age != null && message.hasOwnProperty("Age"))
                object.Age = message.Age;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Account != null && message.hasOwnProperty("Account"))
                object.Account = message.Account;
            if (message.Sate != null && message.hasOwnProperty("Sate"))
                object.Sate = options.enums === String ? $root.go.PlayerState[message.Sate] : message.Sate;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                if (typeof message.PlatformID === "number")
                    object.PlatformID = options.longs === String ? String(message.PlatformID) : message.PlatformID;
                else
                    object.PlatformID = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformID) : options.longs === Number ? new $util.LongBits(message.PlatformID.low >>> 0, message.PlatformID.high >>> 0).toNumber(true) : message.PlatformID;
            if (message.RoomNum != null && message.hasOwnProperty("RoomNum"))
                object.RoomNum = message.RoomNum;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                object.ChairID = message.ChairID;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            return object;
        };

        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    go.CardInfo = (function() {

        function CardInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        CardInfo.prototype.Cards = $util.newBuffer([]);
        CardInfo.prototype.CardType = 0;
        CardInfo.prototype.CardValue = 0;

        CardInfo.create = function create(properties) {
            return new CardInfo(properties);
        };

        CardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                writer.uint32(10).bytes(message.Cards);
            if (message.CardType != null && Object.hasOwnProperty.call(message, "CardType"))
                writer.uint32(16).int32(message.CardType);
            if (message.CardValue != null && Object.hasOwnProperty.call(message, "CardValue"))
                writer.uint32(24).int32(message.CardValue);
            return writer;
        };

        CardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        CardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.CardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Cards = reader.bytes();
                    break;
                case 2:
                    message.CardType = reader.int32();
                    break;
                case 3:
                    message.CardValue = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        CardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        CardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                if (!(message.Cards && typeof message.Cards.length === "number" || $util.isString(message.Cards)))
                    return "Cards: buffer expected";
            if (message.CardType != null && message.hasOwnProperty("CardType"))
                if (!$util.isInteger(message.CardType))
                    return "CardType: integer expected";
            if (message.CardValue != null && message.hasOwnProperty("CardValue"))
                if (!$util.isInteger(message.CardValue))
                    return "CardValue: integer expected";
            return null;
        };

        CardInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.CardInfo)
                return object;
            var message = new $root.go.CardInfo();
            if (object.Cards != null)
                if (typeof object.Cards === "string")
                    $util.base64.decode(object.Cards, message.Cards = $util.newBuffer($util.base64.length(object.Cards)), 0);
                else if (object.Cards.length)
                    message.Cards = object.Cards;
            if (object.CardType != null)
                message.CardType = object.CardType | 0;
            if (object.CardValue != null)
                message.CardValue = object.CardValue | 0;
            return message;
        };

        CardInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Cards = "";
                else {
                    object.Cards = [];
                    if (options.bytes !== Array)
                        object.Cards = $util.newBuffer(object.Cards);
                }
                object.CardType = 0;
                object.CardValue = 0;
            }
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = options.bytes === String ? $util.base64.encode(message.Cards, 0, message.Cards.length) : options.bytes === Array ? Array.prototype.slice.call(message.Cards) : message.Cards;
            if (message.CardType != null && message.hasOwnProperty("CardType"))
                object.CardType = message.CardType;
            if (message.CardValue != null && message.hasOwnProperty("CardValue"))
                object.CardValue = message.CardValue;
            return object;
        };

        CardInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CardInfo;
    })();

    go.TimeInfo = (function() {

        function TimeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TimeInfo.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TimeInfo.prototype.WaitTime = 0;
        TimeInfo.prototype.OutTime = 0;
        TimeInfo.prototype.TotalTime = 0;

        TimeInfo.create = function create(properties) {
            return new TimeInfo(properties);
        };

        TimeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.WaitTime != null && Object.hasOwnProperty.call(message, "WaitTime"))
                writer.uint32(16).int32(message.WaitTime);
            if (message.OutTime != null && Object.hasOwnProperty.call(message, "OutTime"))
                writer.uint32(24).int32(message.OutTime);
            if (message.TotalTime != null && Object.hasOwnProperty.call(message, "TotalTime"))
                writer.uint32(32).int32(message.TotalTime);
            return writer;
        };

        TimeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TimeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.TimeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 2:
                    message.WaitTime = reader.int32();
                    break;
                case 3:
                    message.OutTime = reader.int32();
                    break;
                case 4:
                    message.TotalTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TimeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TimeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (!$util.isInteger(message.WaitTime))
                    return "WaitTime: integer expected";
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                if (!$util.isInteger(message.OutTime))
                    return "OutTime: integer expected";
            if (message.TotalTime != null && message.hasOwnProperty("TotalTime"))
                if (!$util.isInteger(message.TotalTime))
                    return "TotalTime: integer expected";
            return null;
        };

        TimeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.TimeInfo)
                return object;
            var message = new $root.go.TimeInfo();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.WaitTime != null)
                message.WaitTime = object.WaitTime | 0;
            if (object.OutTime != null)
                message.OutTime = object.OutTime | 0;
            if (object.TotalTime != null)
                message.TotalTime = object.TotalTime | 0;
            return message;
        };

        TimeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.WaitTime = 0;
                object.OutTime = 0;
                object.TotalTime = 0;
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                object.WaitTime = message.WaitTime;
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                object.OutTime = message.OutTime;
            if (message.TotalTime != null && message.hasOwnProperty("TotalTime"))
                object.TotalTime = message.TotalTime;
            return object;
        };

        TimeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TimeInfo;
    })();

    go.AreaInfo = (function() {

        function AreaInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        AreaInfo.prototype.ID = 0;
        AreaInfo.prototype.MyGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AreaInfo.prototype.TotalGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AreaInfo.prototype.AcquireGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        AreaInfo.create = function create(properties) {
            return new AreaInfo(properties);
        };

        AreaInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(8).int32(message.ID);
            if (message.MyGold != null && Object.hasOwnProperty.call(message, "MyGold"))
                writer.uint32(16).int64(message.MyGold);
            if (message.TotalGold != null && Object.hasOwnProperty.call(message, "TotalGold"))
                writer.uint32(24).int64(message.TotalGold);
            if (message.AcquireGold != null && Object.hasOwnProperty.call(message, "AcquireGold"))
                writer.uint32(32).int64(message.AcquireGold);
            return writer;
        };

        AreaInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        AreaInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.AreaInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.MyGold = reader.int64();
                    break;
                case 3:
                    message.TotalGold = reader.int64();
                    break;
                case 4:
                    message.AcquireGold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        AreaInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        AreaInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.MyGold != null && message.hasOwnProperty("MyGold"))
                if (!$util.isInteger(message.MyGold) && !(message.MyGold && $util.isInteger(message.MyGold.low) && $util.isInteger(message.MyGold.high)))
                    return "MyGold: integer|Long expected";
            if (message.TotalGold != null && message.hasOwnProperty("TotalGold"))
                if (!$util.isInteger(message.TotalGold) && !(message.TotalGold && $util.isInteger(message.TotalGold.low) && $util.isInteger(message.TotalGold.high)))
                    return "TotalGold: integer|Long expected";
            if (message.AcquireGold != null && message.hasOwnProperty("AcquireGold"))
                if (!$util.isInteger(message.AcquireGold) && !(message.AcquireGold && $util.isInteger(message.AcquireGold.low) && $util.isInteger(message.AcquireGold.high)))
                    return "AcquireGold: integer|Long expected";
            return null;
        };

        AreaInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.AreaInfo)
                return object;
            var message = new $root.go.AreaInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.MyGold != null)
                if ($util.Long)
                    (message.MyGold = $util.Long.fromValue(object.MyGold)).unsigned = false;
                else if (typeof object.MyGold === "string")
                    message.MyGold = parseInt(object.MyGold, 10);
                else if (typeof object.MyGold === "number")
                    message.MyGold = object.MyGold;
                else if (typeof object.MyGold === "object")
                    message.MyGold = new $util.LongBits(object.MyGold.low >>> 0, object.MyGold.high >>> 0).toNumber();
            if (object.TotalGold != null)
                if ($util.Long)
                    (message.TotalGold = $util.Long.fromValue(object.TotalGold)).unsigned = false;
                else if (typeof object.TotalGold === "string")
                    message.TotalGold = parseInt(object.TotalGold, 10);
                else if (typeof object.TotalGold === "number")
                    message.TotalGold = object.TotalGold;
                else if (typeof object.TotalGold === "object")
                    message.TotalGold = new $util.LongBits(object.TotalGold.low >>> 0, object.TotalGold.high >>> 0).toNumber();
            if (object.AcquireGold != null)
                if ($util.Long)
                    (message.AcquireGold = $util.Long.fromValue(object.AcquireGold)).unsigned = false;
                else if (typeof object.AcquireGold === "string")
                    message.AcquireGold = parseInt(object.AcquireGold, 10);
                else if (typeof object.AcquireGold === "number")
                    message.AcquireGold = object.AcquireGold;
                else if (typeof object.AcquireGold === "object")
                    message.AcquireGold = new $util.LongBits(object.AcquireGold.low >>> 0, object.AcquireGold.high >>> 0).toNumber();
            return message;
        };

        AreaInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MyGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MyGold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalGold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AcquireGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AcquireGold = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.MyGold != null && message.hasOwnProperty("MyGold"))
                if (typeof message.MyGold === "number")
                    object.MyGold = options.longs === String ? String(message.MyGold) : message.MyGold;
                else
                    object.MyGold = options.longs === String ? $util.Long.prototype.toString.call(message.MyGold) : options.longs === Number ? new $util.LongBits(message.MyGold.low >>> 0, message.MyGold.high >>> 0).toNumber() : message.MyGold;
            if (message.TotalGold != null && message.hasOwnProperty("TotalGold"))
                if (typeof message.TotalGold === "number")
                    object.TotalGold = options.longs === String ? String(message.TotalGold) : message.TotalGold;
                else
                    object.TotalGold = options.longs === String ? $util.Long.prototype.toString.call(message.TotalGold) : options.longs === Number ? new $util.LongBits(message.TotalGold.low >>> 0, message.TotalGold.high >>> 0).toNumber() : message.TotalGold;
            if (message.AcquireGold != null && message.hasOwnProperty("AcquireGold"))
                if (typeof message.AcquireGold === "number")
                    object.AcquireGold = options.longs === String ? String(message.AcquireGold) : message.AcquireGold;
                else
                    object.AcquireGold = options.longs === String ? $util.Long.prototype.toString.call(message.AcquireGold) : options.longs === Number ? new $util.LongBits(message.AcquireGold.low >>> 0, message.AcquireGold.high >>> 0).toNumber() : message.AcquireGold;
            return object;
        };

        AreaInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AreaInfo;
    })();

    go.InningInfo = (function() {

        function InningInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        InningInfo.prototype.Number = "";
        InningInfo.prototype.Name = "";
        InningInfo.prototype.Level = 0;
        InningInfo.prototype.Payoff = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        InningInfo.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        InningInfo.create = function create(properties) {
            return new InningInfo(properties);
        };

        InningInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Number != null && Object.hasOwnProperty.call(message, "Number"))
                writer.uint32(10).string(message.Number);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(18).string(message.Name);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(24).int32(message.Level);
            if (message.Payoff != null && Object.hasOwnProperty.call(message, "Payoff"))
                writer.uint32(32).int64(message.Payoff);
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(40).int64(message.TimeStamp);
            return writer;
        };

        InningInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        InningInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.InningInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Number = reader.string();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Level = reader.int32();
                    break;
                case 4:
                    message.Payoff = reader.int64();
                    break;
                case 5:
                    message.TimeStamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        InningInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        InningInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Number != null && message.hasOwnProperty("Number"))
                if (!$util.isString(message.Number))
                    return "Number: string expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isInteger(message.Level))
                    return "Level: integer expected";
            if (message.Payoff != null && message.hasOwnProperty("Payoff"))
                if (!$util.isInteger(message.Payoff) && !(message.Payoff && $util.isInteger(message.Payoff.low) && $util.isInteger(message.Payoff.high)))
                    return "Payoff: integer|Long expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            return null;
        };

        InningInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.InningInfo)
                return object;
            var message = new $root.go.InningInfo();
            if (object.Number != null)
                message.Number = String(object.Number);
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Level != null)
                message.Level = object.Level | 0;
            if (object.Payoff != null)
                if ($util.Long)
                    (message.Payoff = $util.Long.fromValue(object.Payoff)).unsigned = false;
                else if (typeof object.Payoff === "string")
                    message.Payoff = parseInt(object.Payoff, 10);
                else if (typeof object.Payoff === "number")
                    message.Payoff = object.Payoff;
                else if (typeof object.Payoff === "object")
                    message.Payoff = new $util.LongBits(object.Payoff.low >>> 0, object.Payoff.high >>> 0).toNumber();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            return message;
        };

        InningInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Number = "";
                object.Name = "";
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Payoff = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Payoff = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
            }
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.Payoff != null && message.hasOwnProperty("Payoff"))
                if (typeof message.Payoff === "number")
                    object.Payoff = options.longs === String ? String(message.Payoff) : message.Payoff;
                else
                    object.Payoff = options.longs === String ? $util.Long.prototype.toString.call(message.Payoff) : options.longs === Number ? new $util.LongBits(message.Payoff.low >>> 0, message.Payoff.high >>> 0).toNumber() : message.Payoff;
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            return object;
        };

        InningInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InningInfo;
    })();

    go.PlayerListInfo = (function() {

        function PlayerListInfo(properties) {
            this.AllInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerListInfo.prototype.AllInfos = $util.emptyArray;

        PlayerListInfo.create = function create(properties) {
            return new PlayerListInfo(properties);
        };

        PlayerListInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllInfos != null && message.AllInfos.length)
                for (var i = 0; i < message.AllInfos.length; ++i)
                    $root.go.PlayerInfo.encode(message.AllInfos[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        PlayerListInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerListInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.PlayerListInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllInfos && message.AllInfos.length))
                        message.AllInfos = [];
                    message.AllInfos.push($root.go.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PlayerListInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PlayerListInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllInfos != null && message.hasOwnProperty("AllInfos")) {
                if (!Array.isArray(message.AllInfos))
                    return "AllInfos: array expected";
                for (var i = 0; i < message.AllInfos.length; ++i) {
                    var error = $root.go.PlayerInfo.verify(message.AllInfos[i]);
                    if (error)
                        return "AllInfos." + error;
                }
            }
            return null;
        };

        PlayerListInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.PlayerListInfo)
                return object;
            var message = new $root.go.PlayerListInfo();
            if (object.AllInfos) {
                if (!Array.isArray(object.AllInfos))
                    throw TypeError(".go.PlayerListInfo.AllInfos: array expected");
                message.AllInfos = [];
                for (var i = 0; i < object.AllInfos.length; ++i) {
                    if (typeof object.AllInfos[i] !== "object")
                        throw TypeError(".go.PlayerListInfo.AllInfos: object expected");
                    message.AllInfos[i] = $root.go.PlayerInfo.fromObject(object.AllInfos[i]);
                }
            }
            return message;
        };

        PlayerListInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AllInfos = [];
            if (message.AllInfos && message.AllInfos.length) {
                object.AllInfos = [];
                for (var j = 0; j < message.AllInfos.length; ++j)
                    object.AllInfos[j] = $root.go.PlayerInfo.toObject(message.AllInfos[j], options);
            }
            return object;
        };

        PlayerListInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerListInfo;
    })();

    go.GoldChangeInfo = (function() {

        function GoldChangeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GoldChangeInfo.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GoldChangeInfo.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GoldChangeInfo.prototype.AlterGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GoldChangeInfo.prototype.Code = 0;
        GoldChangeInfo.prototype.Reason = "";

        GoldChangeInfo.create = function create(properties) {
            return new GoldChangeInfo(properties);
        };

        GoldChangeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(16).int64(message.Gold);
            if (message.AlterGold != null && Object.hasOwnProperty.call(message, "AlterGold"))
                writer.uint32(24).int64(message.AlterGold);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(32).uint32(message.Code);
            if (message.Reason != null && Object.hasOwnProperty.call(message, "Reason"))
                writer.uint32(42).string(message.Reason);
            return writer;
        };

        GoldChangeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GoldChangeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GoldChangeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Gold = reader.int64();
                    break;
                case 3:
                    message.AlterGold = reader.int64();
                    break;
                case 4:
                    message.Code = reader.uint32();
                    break;
                case 5:
                    message.Reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GoldChangeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GoldChangeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            if (message.AlterGold != null && message.hasOwnProperty("AlterGold"))
                if (!$util.isInteger(message.AlterGold) && !(message.AlterGold && $util.isInteger(message.AlterGold.low) && $util.isInteger(message.AlterGold.high)))
                    return "AlterGold: integer|Long expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                if (!$util.isString(message.Reason))
                    return "Reason: string expected";
            return null;
        };

        GoldChangeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GoldChangeInfo)
                return object;
            var message = new $root.go.GoldChangeInfo();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
            if (object.AlterGold != null)
                if ($util.Long)
                    (message.AlterGold = $util.Long.fromValue(object.AlterGold)).unsigned = false;
                else if (typeof object.AlterGold === "string")
                    message.AlterGold = parseInt(object.AlterGold, 10);
                else if (typeof object.AlterGold === "number")
                    message.AlterGold = object.AlterGold;
                else if (typeof object.AlterGold === "object")
                    message.AlterGold = new $util.LongBits(object.AlterGold.low >>> 0, object.AlterGold.high >>> 0).toNumber();
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Reason != null)
                message.Reason = String(object.Reason);
            return message;
        };

        GoldChangeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AlterGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AlterGold = options.longs === String ? "0" : 0;
                object.Code = 0;
                object.Reason = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            if (message.AlterGold != null && message.hasOwnProperty("AlterGold"))
                if (typeof message.AlterGold === "number")
                    object.AlterGold = options.longs === String ? String(message.AlterGold) : message.AlterGold;
                else
                    object.AlterGold = options.longs === String ? $util.Long.prototype.toString.call(message.AlterGold) : options.longs === Number ? new $util.LongBits(message.AlterGold.low >>> 0, message.AlterGold.high >>> 0).toNumber() : message.AlterGold;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Reason != null && message.hasOwnProperty("Reason"))
                object.Reason = message.Reason;
            return object;
        };

        GoldChangeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GoldChangeInfo;
    })();

    go.PlayerRecord = (function() {

        function PlayerRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        PlayerRecord.prototype.User = null;
        PlayerRecord.prototype.Twice = 0;
        PlayerRecord.prototype.Ranking = 0;
        PlayerRecord.prototype.Bankroll = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerRecord.prototype.WinLos = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerRecord.create = function create(properties) {
            return new PlayerRecord(properties);
        };

        PlayerRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.User != null && Object.hasOwnProperty.call(message, "User"))
                $root.go.PlayerInfo.encode(message.User, writer.uint32(10).fork()).ldelim();
            if (message.Twice != null && Object.hasOwnProperty.call(message, "Twice"))
                writer.uint32(16).int32(message.Twice);
            if (message.Ranking != null && Object.hasOwnProperty.call(message, "Ranking"))
                writer.uint32(24).int32(message.Ranking);
            if (message.Bankroll != null && Object.hasOwnProperty.call(message, "Bankroll"))
                writer.uint32(32).int64(message.Bankroll);
            if (message.WinLos != null && Object.hasOwnProperty.call(message, "WinLos"))
                writer.uint32(40).int64(message.WinLos);
            return writer;
        };

        PlayerRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        PlayerRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.PlayerRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.go.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Twice = reader.int32();
                    break;
                case 3:
                    message.Ranking = reader.int32();
                    break;
                case 4:
                    message.Bankroll = reader.int64();
                    break;
                case 5:
                    message.WinLos = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        PlayerRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        PlayerRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.User != null && message.hasOwnProperty("User")) {
                var error = $root.go.PlayerInfo.verify(message.User);
                if (error)
                    return "User." + error;
            }
            if (message.Twice != null && message.hasOwnProperty("Twice"))
                if (!$util.isInteger(message.Twice))
                    return "Twice: integer expected";
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                if (!$util.isInteger(message.Ranking))
                    return "Ranking: integer expected";
            if (message.Bankroll != null && message.hasOwnProperty("Bankroll"))
                if (!$util.isInteger(message.Bankroll) && !(message.Bankroll && $util.isInteger(message.Bankroll.low) && $util.isInteger(message.Bankroll.high)))
                    return "Bankroll: integer|Long expected";
            if (message.WinLos != null && message.hasOwnProperty("WinLos"))
                if (!$util.isInteger(message.WinLos) && !(message.WinLos && $util.isInteger(message.WinLos.low) && $util.isInteger(message.WinLos.high)))
                    return "WinLos: integer|Long expected";
            return null;
        };

        PlayerRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.go.PlayerRecord)
                return object;
            var message = new $root.go.PlayerRecord();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".go.PlayerRecord.User: object expected");
                message.User = $root.go.PlayerInfo.fromObject(object.User);
            }
            if (object.Twice != null)
                message.Twice = object.Twice | 0;
            if (object.Ranking != null)
                message.Ranking = object.Ranking | 0;
            if (object.Bankroll != null)
                if ($util.Long)
                    (message.Bankroll = $util.Long.fromValue(object.Bankroll)).unsigned = false;
                else if (typeof object.Bankroll === "string")
                    message.Bankroll = parseInt(object.Bankroll, 10);
                else if (typeof object.Bankroll === "number")
                    message.Bankroll = object.Bankroll;
                else if (typeof object.Bankroll === "object")
                    message.Bankroll = new $util.LongBits(object.Bankroll.low >>> 0, object.Bankroll.high >>> 0).toNumber();
            if (object.WinLos != null)
                if ($util.Long)
                    (message.WinLos = $util.Long.fromValue(object.WinLos)).unsigned = false;
                else if (typeof object.WinLos === "string")
                    message.WinLos = parseInt(object.WinLos, 10);
                else if (typeof object.WinLos === "number")
                    message.WinLos = object.WinLos;
                else if (typeof object.WinLos === "object")
                    message.WinLos = new $util.LongBits(object.WinLos.low >>> 0, object.WinLos.high >>> 0).toNumber();
            return message;
        };

        PlayerRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.User = null;
                object.Twice = 0;
                object.Ranking = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bankroll = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bankroll = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLos = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLos = options.longs === String ? "0" : 0;
            }
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.go.PlayerInfo.toObject(message.User, options);
            if (message.Twice != null && message.hasOwnProperty("Twice"))
                object.Twice = message.Twice;
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                object.Ranking = message.Ranking;
            if (message.Bankroll != null && message.hasOwnProperty("Bankroll"))
                if (typeof message.Bankroll === "number")
                    object.Bankroll = options.longs === String ? String(message.Bankroll) : message.Bankroll;
                else
                    object.Bankroll = options.longs === String ? $util.Long.prototype.toString.call(message.Bankroll) : options.longs === Number ? new $util.LongBits(message.Bankroll.low >>> 0, message.Bankroll.high >>> 0).toNumber() : message.Bankroll;
            if (message.WinLos != null && message.hasOwnProperty("WinLos"))
                if (typeof message.WinLos === "number")
                    object.WinLos = options.longs === String ? String(message.WinLos) : message.WinLos;
                else
                    object.WinLos = options.longs === String ? $util.Long.prototype.toString.call(message.WinLos) : options.longs === Number ? new $util.LongBits(message.WinLos.low >>> 0, message.WinLos.high >>> 0).toNumber() : message.WinLos;
            return object;
        };

        PlayerRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerRecord;
    })();

    go.GameRecord = (function() {

        function GameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameRecord.prototype.CardInfo = null;
        GameRecord.prototype.IsWon = false;

        GameRecord.create = function create(properties) {
            return new GameRecord(properties);
        };

        GameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CardInfo != null && Object.hasOwnProperty.call(message, "CardInfo"))
                $root.go.CardInfo.encode(message.CardInfo, writer.uint32(10).fork()).ldelim();
            if (message.IsWon != null && Object.hasOwnProperty.call(message, "IsWon"))
                writer.uint32(24).bool(message.IsWon);
            return writer;
        };

        GameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GameRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CardInfo = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.IsWon = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CardInfo != null && message.hasOwnProperty("CardInfo")) {
                var error = $root.go.CardInfo.verify(message.CardInfo);
                if (error)
                    return "CardInfo." + error;
            }
            if (message.IsWon != null && message.hasOwnProperty("IsWon"))
                if (typeof message.IsWon !== "boolean")
                    return "IsWon: boolean expected";
            return null;
        };

        GameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GameRecord)
                return object;
            var message = new $root.go.GameRecord();
            if (object.CardInfo != null) {
                if (typeof object.CardInfo !== "object")
                    throw TypeError(".go.GameRecord.CardInfo: object expected");
                message.CardInfo = $root.go.CardInfo.fromObject(object.CardInfo);
            }
            if (object.IsWon != null)
                message.IsWon = Boolean(object.IsWon);
            return message;
        };

        GameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CardInfo = null;
                object.IsWon = false;
            }
            if (message.CardInfo != null && message.hasOwnProperty("CardInfo"))
                object.CardInfo = $root.go.CardInfo.toObject(message.CardInfo, options);
            if (message.IsWon != null && message.hasOwnProperty("IsWon"))
                object.IsWon = message.IsWon;
            return object;
        };

        GameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecord;
    })();

    go.GameRecordList = (function() {

        function GameRecordList(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameRecordList.prototype.list = $util.emptyArray;

        GameRecordList.create = function create(properties) {
            return new GameRecordList(properties);
        };

        GameRecordList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.go.GameRecord.encode(message.list[i], writer.uint32(10).fork()).ldelim();
            return writer;
        };

        GameRecordList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameRecordList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GameRecordList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.go.GameRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameRecordList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameRecordList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.go.GameRecord.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        GameRecordList.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GameRecordList)
                return object;
            var message = new $root.go.GameRecordList();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".go.GameRecordList.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".go.GameRecordList.list: object expected");
                    message.list[i] = $root.go.GameRecord.fromObject(object.list[i]);
                }
            }
            return message;
        };

        GameRecordList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.go.GameRecord.toObject(message.list[j], options);
            }
            return object;
        };

        GameRecordList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameRecordList;
    })();

    go.EnterGameReq = (function() {

        function EnterGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterGameReq.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        EnterGameReq.prototype.TableNum = 0;
        EnterGameReq.prototype.Password = "";
        EnterGameReq.prototype.ChairNum = 0;

        EnterGameReq.create = function create(properties) {
            return new EnterGameReq(properties);
        };

        EnterGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.TableNum != null && Object.hasOwnProperty.call(message, "TableNum"))
                writer.uint32(16).uint32(message.TableNum);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(26).string(message.Password);
            if (message.ChairNum != null && Object.hasOwnProperty.call(message, "ChairNum"))
                writer.uint32(32).uint32(message.ChairNum);
            return writer;
        };

        EnterGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.EnterGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                case 2:
                    message.TableNum = reader.uint32();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                case 4:
                    message.ChairNum = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        EnterGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.TableNum != null && message.hasOwnProperty("TableNum"))
                if (!$util.isInteger(message.TableNum))
                    return "TableNum: integer expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.ChairNum != null && message.hasOwnProperty("ChairNum"))
                if (!$util.isInteger(message.ChairNum))
                    return "ChairNum: integer expected";
            return null;
        };

        EnterGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.go.EnterGameReq)
                return object;
            var message = new $root.go.EnterGameReq();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.TableNum != null)
                message.TableNum = object.TableNum >>> 0;
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.ChairNum != null)
                message.ChairNum = object.ChairNum >>> 0;
            return message;
        };

        EnterGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                object.TableNum = 0;
                object.Password = "";
                object.ChairNum = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.TableNum != null && message.hasOwnProperty("TableNum"))
                object.TableNum = message.TableNum;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.ChairNum != null && message.hasOwnProperty("ChairNum"))
                object.ChairNum = message.ChairNum;
            return object;
        };

        EnterGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGameReq;
    })();

    go.EnterGameResp = (function() {

        function EnterGameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterGameResp.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        EnterGameResp.prototype.TableNum = 0;
        EnterGameResp.prototype.ChairNum = 0;
        EnterGameResp.prototype.UserInfo = null;

        EnterGameResp.create = function create(properties) {
            return new EnterGameResp(properties);
        };

        EnterGameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.TableNum != null && Object.hasOwnProperty.call(message, "TableNum"))
                writer.uint32(16).uint32(message.TableNum);
            if (message.ChairNum != null && Object.hasOwnProperty.call(message, "ChairNum"))
                writer.uint32(24).uint32(message.ChairNum);
            if (message.UserInfo != null && Object.hasOwnProperty.call(message, "UserInfo"))
                $root.go.PlayerInfo.encode(message.UserInfo, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        EnterGameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        EnterGameResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.EnterGameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                case 2:
                    message.TableNum = reader.uint32();
                    break;
                case 3:
                    message.ChairNum = reader.uint32();
                    break;
                case 4:
                    message.UserInfo = $root.go.PlayerInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        EnterGameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        EnterGameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.TableNum != null && message.hasOwnProperty("TableNum"))
                if (!$util.isInteger(message.TableNum))
                    return "TableNum: integer expected";
            if (message.ChairNum != null && message.hasOwnProperty("ChairNum"))
                if (!$util.isInteger(message.ChairNum))
                    return "ChairNum: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                var error = $root.go.PlayerInfo.verify(message.UserInfo);
                if (error)
                    return "UserInfo." + error;
            }
            return null;
        };

        EnterGameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.EnterGameResp)
                return object;
            var message = new $root.go.EnterGameResp();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.TableNum != null)
                message.TableNum = object.TableNum >>> 0;
            if (object.ChairNum != null)
                message.ChairNum = object.ChairNum >>> 0;
            if (object.UserInfo != null) {
                if (typeof object.UserInfo !== "object")
                    throw TypeError(".go.EnterGameResp.UserInfo: object expected");
                message.UserInfo = $root.go.PlayerInfo.fromObject(object.UserInfo);
            }
            return message;
        };

        EnterGameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                object.TableNum = 0;
                object.ChairNum = 0;
                object.UserInfo = null;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.TableNum != null && message.hasOwnProperty("TableNum"))
                object.TableNum = message.TableNum;
            if (message.ChairNum != null && message.hasOwnProperty("ChairNum"))
                object.ChairNum = message.ChairNum;
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.go.PlayerInfo.toObject(message.UserInfo, options);
            return object;
        };

        EnterGameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterGameResp;
    })();

    go.ExitGameReq = (function() {

        function ExitGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ExitGameReq.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ExitGameReq.create = function create(properties) {
            return new ExitGameReq(properties);
        };

        ExitGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            return writer;
        };

        ExitGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ExitGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ExitGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ExitGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ExitGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            return null;
        };

        ExitGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ExitGameReq)
                return object;
            var message = new $root.go.ExitGameReq();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            return message;
        };

        ExitGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            return object;
        };

        ExitGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitGameReq;
    })();

    go.ExitGameResp = (function() {

        function ExitGameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ExitGameResp.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ExitGameResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ExitGameResp.create = function create(properties) {
            return new ExitGameResp(properties);
        };

        ExitGameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(16).uint64(message.UserID);
            return writer;
        };

        ExitGameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ExitGameResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ExitGameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                case 2:
                    message.UserID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ExitGameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ExitGameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        ExitGameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ExitGameResp)
                return object;
            var message = new $root.go.ExitGameResp();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            return message;
        };

        ExitGameResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        ExitGameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ExitGameResp;
    })();

    go.ChangeTableReq = (function() {

        function ChangeTableReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ChangeTableReq.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ChangeTableReq.create = function create(properties) {
            return new ChangeTableReq(properties);
        };

        ChangeTableReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            return writer;
        };

        ChangeTableReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ChangeTableReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ChangeTableReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ChangeTableReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ChangeTableReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            return null;
        };

        ChangeTableReq.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ChangeTableReq)
                return object;
            var message = new $root.go.ChangeTableReq();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            return message;
        };

        ChangeTableReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            return object;
        };

        ChangeTableReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeTableReq;
    })();

    go.ChangeTableResp = (function() {

        function ChangeTableResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ChangeTableResp.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        ChangeTableResp.prototype.TableNum = 0;
        ChangeTableResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ChangeTableResp.create = function create(properties) {
            return new ChangeTableResp(properties);
        };

        ChangeTableResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.TableNum != null && Object.hasOwnProperty.call(message, "TableNum"))
                writer.uint32(16).uint32(message.TableNum);
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(24).uint64(message.UserID);
            return writer;
        };

        ChangeTableResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ChangeTableResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ChangeTableResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                case 2:
                    message.TableNum = reader.uint32();
                    break;
                case 3:
                    message.UserID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ChangeTableResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ChangeTableResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.TableNum != null && message.hasOwnProperty("TableNum"))
                if (!$util.isInteger(message.TableNum))
                    return "TableNum: integer expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        ChangeTableResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ChangeTableResp)
                return object;
            var message = new $root.go.ChangeTableResp();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.TableNum != null)
                message.TableNum = object.TableNum >>> 0;
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            return message;
        };

        ChangeTableResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                object.TableNum = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.TableNum != null && message.hasOwnProperty("TableNum"))
                object.TableNum = message.TableNum;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        ChangeTableResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChangeTableResp;
    })();

    go.BeOutResp = (function() {

        function BeOutResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BeOutResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BeOutResp.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BeOutResp.prototype.Code = 0;
        BeOutResp.prototype.Hints = "";

        BeOutResp.create = function create(properties) {
            return new BeOutResp(properties);
        };

        BeOutResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(16).uint64(message.GameID);
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(24).uint32(message.Code);
            if (message.Hints != null && Object.hasOwnProperty.call(message, "Hints"))
                writer.uint32(34).string(message.Hints);
            return writer;
        };

        BeOutResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BeOutResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.BeOutResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.GameID = reader.uint64();
                    break;
                case 3:
                    message.Code = reader.uint32();
                    break;
                case 4:
                    message.Hints = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BeOutResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BeOutResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                if (!$util.isInteger(message.Code))
                    return "Code: integer expected";
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                if (!$util.isString(message.Hints))
                    return "Hints: string expected";
            return null;
        };

        BeOutResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.BeOutResp)
                return object;
            var message = new $root.go.BeOutResp();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.Code != null)
                message.Code = object.Code >>> 0;
            if (object.Hints != null)
                message.Hints = String(object.Hints);
            return message;
        };

        BeOutResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
                object.Code = 0;
                object.Hints = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Hints != null && message.hasOwnProperty("Hints"))
                object.Hints = message.Hints;
            return object;
        };

        BeOutResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeOutResp;
    })();

    go.GetInningsInfoReq = (function() {

        function GetInningsInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetInningsInfoReq.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GetInningsInfoReq.create = function create(properties) {
            return new GetInningsInfoReq(properties);
        };

        GetInningsInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            return writer;
        };

        GetInningsInfoReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetInningsInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GetInningsInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetInningsInfoReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetInningsInfoReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            return null;
        };

        GetInningsInfoReq.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GetInningsInfoReq)
                return object;
            var message = new $root.go.GetInningsInfoReq();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            return message;
        };

        GetInningsInfoReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            return object;
        };

        GetInningsInfoReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetInningsInfoReq;
    })();

    go.GetInningsInfoResp = (function() {

        function GetInningsInfoResp(properties) {
            this.Innings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetInningsInfoResp.prototype.Innings = $util.emptyArray;
        GetInningsInfoResp.prototype.PageNum = 0;

        GetInningsInfoResp.create = function create(properties) {
            return new GetInningsInfoResp(properties);
        };

        GetInningsInfoResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Innings != null && message.Innings.length)
                for (var i = 0; i < message.Innings.length; ++i)
                    $root.go.InningInfo.encode(message.Innings[i], writer.uint32(10).fork()).ldelim();
            if (message.PageNum != null && Object.hasOwnProperty.call(message, "PageNum"))
                writer.uint32(16).int32(message.PageNum);
            return writer;
        };

        GetInningsInfoResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetInningsInfoResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GetInningsInfoResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Innings && message.Innings.length))
                        message.Innings = [];
                    message.Innings.push($root.go.InningInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.PageNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetInningsInfoResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetInningsInfoResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Innings != null && message.hasOwnProperty("Innings")) {
                if (!Array.isArray(message.Innings))
                    return "Innings: array expected";
                for (var i = 0; i < message.Innings.length; ++i) {
                    var error = $root.go.InningInfo.verify(message.Innings[i]);
                    if (error)
                        return "Innings." + error;
                }
            }
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                if (!$util.isInteger(message.PageNum))
                    return "PageNum: integer expected";
            return null;
        };

        GetInningsInfoResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GetInningsInfoResp)
                return object;
            var message = new $root.go.GetInningsInfoResp();
            if (object.Innings) {
                if (!Array.isArray(object.Innings))
                    throw TypeError(".go.GetInningsInfoResp.Innings: array expected");
                message.Innings = [];
                for (var i = 0; i < object.Innings.length; ++i) {
                    if (typeof object.Innings[i] !== "object")
                        throw TypeError(".go.GetInningsInfoResp.Innings: object expected");
                    message.Innings[i] = $root.go.InningInfo.fromObject(object.Innings[i]);
                }
            }
            if (object.PageNum != null)
                message.PageNum = object.PageNum | 0;
            return message;
        };

        GetInningsInfoResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Innings = [];
            if (options.defaults)
                object.PageNum = 0;
            if (message.Innings && message.Innings.length) {
                object.Innings = [];
                for (var j = 0; j < message.Innings.length; ++j)
                    object.Innings[j] = $root.go.InningInfo.toObject(message.Innings[j], options);
            }
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                object.PageNum = message.PageNum;
            return object;
        };

        GetInningsInfoResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetInningsInfoResp;
    })();

    go.GameOverReq = (function() {

        function GameOverReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameOverReq.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GameOverReq.create = function create(properties) {
            return new GameOverReq(properties);
        };

        GameOverReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            return writer;
        };

        GameOverReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameOverReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GameOverReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameOverReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameOverReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            return null;
        };

        GameOverReq.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GameOverReq)
                return object;
            var message = new $root.go.GameOverReq();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            return message;
        };

        GameOverReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.GameID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameID = options.longs === String ? "0" : 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            return object;
        };

        GameOverReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameOverReq;
    })();

    go.GameOverResp = (function() {

        function GameOverResp(properties) {
            this.Innings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameOverResp.prototype.Innings = $util.emptyArray;
        GameOverResp.prototype.PageNum = 0;

        GameOverResp.create = function create(properties) {
            return new GameOverResp(properties);
        };

        GameOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Innings != null && message.Innings.length)
                for (var i = 0; i < message.Innings.length; ++i)
                    $root.go.InningInfo.encode(message.Innings[i], writer.uint32(10).fork()).ldelim();
            if (message.PageNum != null && Object.hasOwnProperty.call(message, "PageNum"))
                writer.uint32(16).int32(message.PageNum);
            return writer;
        };

        GameOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.GameOverResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Innings && message.Innings.length))
                        message.Innings = [];
                    message.Innings.push($root.go.InningInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.PageNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Innings != null && message.hasOwnProperty("Innings")) {
                if (!Array.isArray(message.Innings))
                    return "Innings: array expected";
                for (var i = 0; i < message.Innings.length; ++i) {
                    var error = $root.go.InningInfo.verify(message.Innings[i]);
                    if (error)
                        return "Innings." + error;
                }
            }
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                if (!$util.isInteger(message.PageNum))
                    return "PageNum: integer expected";
            return null;
        };

        GameOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.GameOverResp)
                return object;
            var message = new $root.go.GameOverResp();
            if (object.Innings) {
                if (!Array.isArray(object.Innings))
                    throw TypeError(".go.GameOverResp.Innings: array expected");
                message.Innings = [];
                for (var i = 0; i < object.Innings.length; ++i) {
                    if (typeof object.Innings[i] !== "object")
                        throw TypeError(".go.GameOverResp.Innings: object expected");
                    message.Innings[i] = $root.go.InningInfo.fromObject(object.Innings[i]);
                }
            }
            if (object.PageNum != null)
                message.PageNum = object.PageNum | 0;
            return message;
        };

        GameOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Innings = [];
            if (options.defaults)
                object.PageNum = 0;
            if (message.Innings && message.Innings.length) {
                object.Innings = [];
                for (var j = 0; j < message.Innings.length; ++j)
                    object.Innings[j] = $root.go.InningInfo.toObject(message.Innings[j], options);
            }
            if (message.PageNum != null && message.hasOwnProperty("PageNum"))
                object.PageNum = message.PageNum;
            return object;
        };

        GameOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameOverResp;
    })();

    return go;
})();

module.exports = $root;
