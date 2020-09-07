/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.brcowcow = (function() {

    var brcowcow = {};

    brcowcow.BrcowcowSceneResp = (function() {

        function BrcowcowSceneResp(properties) {
            this.Chips = [];
            this.AwardAreas = [];
            this.AreaBets = [];
            this.MyBets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowSceneResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BrcowcowSceneResp.prototype.Chips = $util.emptyArray;
        BrcowcowSceneResp.prototype.AwardAreas = $util.emptyArray;
        BrcowcowSceneResp.prototype.AreaBets = $util.emptyArray;
        BrcowcowSceneResp.prototype.MyBets = $util.emptyArray;
        BrcowcowSceneResp.prototype.Inning = "";
        BrcowcowSceneResp.prototype.AllPlayers = null;

        BrcowcowSceneResp.create = function create(properties) {
            return new BrcowcowSceneResp(properties);
        };

        BrcowcowSceneResp.encode = function encode(message, writer) {
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
                $root.gamecomm.PlayerListInfo.encode(message.AllPlayers, writer.uint32(58).fork()).ldelim();
            return writer;
        };

        BrcowcowSceneResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowSceneResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowSceneResp();
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
                case 6:
                    message.Inning = reader.string();
                    break;
                case 7:
                    message.AllPlayers = $root.gamecomm.PlayerListInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowSceneResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowSceneResp.verify = function verify(message) {
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
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                if (!$util.isString(message.Inning))
                    return "Inning: string expected";
            if (message.AllPlayers != null && message.hasOwnProperty("AllPlayers")) {
                var error = $root.gamecomm.PlayerListInfo.verify(message.AllPlayers);
                if (error)
                    return "AllPlayers." + error;
            }
            return null;
        };

        BrcowcowSceneResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowSceneResp)
                return object;
            var message = new $root.brcowcow.BrcowcowSceneResp();
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
                    throw TypeError(".brcowcow.BrcowcowSceneResp.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AwardAreas) {
                if (!Array.isArray(object.AwardAreas))
                    throw TypeError(".brcowcow.BrcowcowSceneResp.AwardAreas: array expected");
                message.AwardAreas = [];
                for (var i = 0; i < object.AwardAreas.length; ++i)
                    if (typeof object.AwardAreas[i] === "string")
                        $util.base64.decode(object.AwardAreas[i], message.AwardAreas[i] = $util.newBuffer($util.base64.length(object.AwardAreas[i])), 0);
                    else if (object.AwardAreas[i].length)
                        message.AwardAreas[i] = object.AwardAreas[i];
            }
            if (object.AreaBets) {
                if (!Array.isArray(object.AreaBets))
                    throw TypeError(".brcowcow.BrcowcowSceneResp.AreaBets: array expected");
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
                    throw TypeError(".brcowcow.BrcowcowSceneResp.MyBets: array expected");
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
            if (object.Inning != null)
                message.Inning = String(object.Inning);
            if (object.AllPlayers != null) {
                if (typeof object.AllPlayers !== "object")
                    throw TypeError(".brcowcow.BrcowcowSceneResp.AllPlayers: object expected");
                message.AllPlayers = $root.gamecomm.PlayerListInfo.fromObject(object.AllPlayers);
            }
            return message;
        };

        BrcowcowSceneResp.toObject = function toObject(message, options) {
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
                object.AllPlayers = $root.gamecomm.PlayerListInfo.toObject(message.AllPlayers, options);
            return object;
        };

        BrcowcowSceneResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowSceneResp;
    })();

    brcowcow.BrcowcowStateFreeResp = (function() {

        function BrcowcowStateFreeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowStateFreeResp.prototype.Times = null;

        BrcowcowStateFreeResp.create = function create(properties) {
            return new BrcowcowStateFreeResp(properties);
        };

        BrcowcowStateFreeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        BrcowcowStateFreeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowStateFreeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowStateFreeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowStateFreeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowStateFreeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        BrcowcowStateFreeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowStateFreeResp)
                return object;
            var message = new $root.brcowcow.BrcowcowStateFreeResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".brcowcow.BrcowcowStateFreeResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        BrcowcowStateFreeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        BrcowcowStateFreeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowStateFreeResp;
    })();

    brcowcow.BrcowcowStateStartResp = (function() {

        function BrcowcowStateStartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowStateStartResp.prototype.Times = null;

        BrcowcowStateStartResp.create = function create(properties) {
            return new BrcowcowStateStartResp(properties);
        };

        BrcowcowStateStartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        BrcowcowStateStartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowStateStartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowStateStartResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowStateStartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowStateStartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        BrcowcowStateStartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowStateStartResp)
                return object;
            var message = new $root.brcowcow.BrcowcowStateStartResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".brcowcow.BrcowcowStateStartResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        BrcowcowStateStartResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        BrcowcowStateStartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowStateStartResp;
    })();

    brcowcow.BrcowcowStatePlayingResp = (function() {

        function BrcowcowStatePlayingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowStatePlayingResp.prototype.Times = null;

        BrcowcowStatePlayingResp.create = function create(properties) {
            return new BrcowcowStatePlayingResp(properties);
        };

        BrcowcowStatePlayingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        BrcowcowStatePlayingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowStatePlayingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowStatePlayingResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowStatePlayingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        BrcowcowStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowStatePlayingResp)
                return object;
            var message = new $root.brcowcow.BrcowcowStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".brcowcow.BrcowcowStatePlayingResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        BrcowcowStatePlayingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        BrcowcowStatePlayingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowStatePlayingResp;
    })();

    brcowcow.BrcowcowStateOpenResp = (function() {

        function BrcowcowStateOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowStateOpenResp.prototype.Times = null;
        BrcowcowStateOpenResp.prototype.OpenInfo = null;

        BrcowcowStateOpenResp.create = function create(properties) {
            return new BrcowcowStateOpenResp(properties);
        };

        BrcowcowStateOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.OpenInfo != null && Object.hasOwnProperty.call(message, "OpenInfo"))
                $root.brcowcow.BrcowcowOpenResp.encode(message.OpenInfo, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        BrcowcowStateOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowStateOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowStateOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.OpenInfo = $root.brcowcow.BrcowcowOpenResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowStateOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowStateOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo")) {
                var error = $root.brcowcow.BrcowcowOpenResp.verify(message.OpenInfo);
                if (error)
                    return "OpenInfo." + error;
            }
            return null;
        };

        BrcowcowStateOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowStateOpenResp)
                return object;
            var message = new $root.brcowcow.BrcowcowStateOpenResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".brcowcow.BrcowcowStateOpenResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            if (object.OpenInfo != null) {
                if (typeof object.OpenInfo !== "object")
                    throw TypeError(".brcowcow.BrcowcowStateOpenResp.OpenInfo: object expected");
                message.OpenInfo = $root.brcowcow.BrcowcowOpenResp.fromObject(object.OpenInfo);
            }
            return message;
        };

        BrcowcowStateOpenResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.OpenInfo = null;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo"))
                object.OpenInfo = $root.brcowcow.BrcowcowOpenResp.toObject(message.OpenInfo, options);
            return object;
        };

        BrcowcowStateOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowStateOpenResp;
    })();

    brcowcow.BrcowcowStateOverResp = (function() {

        function BrcowcowStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowStateOverResp.prototype.Times = null;

        BrcowcowStateOverResp.create = function create(properties) {
            return new BrcowcowStateOverResp(properties);
        };

        BrcowcowStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        BrcowcowStateOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowStateOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowStateOverResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowStateOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowStateOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        BrcowcowStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowStateOverResp)
                return object;
            var message = new $root.brcowcow.BrcowcowStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".brcowcow.BrcowcowStateOverResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        BrcowcowStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        BrcowcowStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowStateOverResp;
    })();

    brcowcow.BrcowcowBetReq = (function() {

        function BrcowcowBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowBetReq.prototype.Area = 0;
        BrcowcowBetReq.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        BrcowcowBetReq.create = function create(properties) {
            return new BrcowcowBetReq(properties);
        };

        BrcowcowBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                writer.uint32(8).int32(message.Area);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(16).int64(message.Gold);
            return writer;
        };

        BrcowcowBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowBetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Area = reader.int32();
                    break;
                case 2:
                    message.Gold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowBetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Area != null && message.hasOwnProperty("Area"))
                if (!$util.isInteger(message.Area))
                    return "Area: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            return null;
        };

        BrcowcowBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowBetReq)
                return object;
            var message = new $root.brcowcow.BrcowcowBetReq();
            if (object.Area != null)
                message.Area = object.Area | 0;
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
            return message;
        };

        BrcowcowBetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Area = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
            }
            if (message.Area != null && message.hasOwnProperty("Area"))
                object.Area = message.Area;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            return object;
        };

        BrcowcowBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowBetReq;
    })();

    brcowcow.BrcowcowBetResp = (function() {

        function BrcowcowBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowBetResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BrcowcowBetResp.prototype.Area = 0;
        BrcowcowBetResp.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        BrcowcowBetResp.create = function create(properties) {
            return new BrcowcowBetResp(properties);
        };

        BrcowcowBetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                writer.uint32(16).int32(message.Area);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(24).int64(message.Gold);
            return writer;
        };

        BrcowcowBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowBetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
                    break;
                case 2:
                    message.Area = reader.int32();
                    break;
                case 3:
                    message.Gold = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowBetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.Area != null && message.hasOwnProperty("Area"))
                if (!$util.isInteger(message.Area))
                    return "Area: integer expected";
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (!$util.isInteger(message.Gold) && !(message.Gold && $util.isInteger(message.Gold.low) && $util.isInteger(message.Gold.high)))
                    return "Gold: integer|Long expected";
            return null;
        };

        BrcowcowBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowBetResp)
                return object;
            var message = new $root.brcowcow.BrcowcowBetResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            if (object.Area != null)
                message.Area = object.Area | 0;
            if (object.Gold != null)
                if ($util.Long)
                    (message.Gold = $util.Long.fromValue(object.Gold)).unsigned = false;
                else if (typeof object.Gold === "string")
                    message.Gold = parseInt(object.Gold, 10);
                else if (typeof object.Gold === "number")
                    message.Gold = object.Gold;
                else if (typeof object.Gold === "object")
                    message.Gold = new $util.LongBits(object.Gold.low >>> 0, object.Gold.high >>> 0).toNumber();
            return message;
        };

        BrcowcowBetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.Area = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Gold = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.Area != null && message.hasOwnProperty("Area"))
                object.Area = message.Area;
            if (message.Gold != null && message.hasOwnProperty("Gold"))
                if (typeof message.Gold === "number")
                    object.Gold = options.longs === String ? String(message.Gold) : message.Gold;
                else
                    object.Gold = options.longs === String ? $util.Long.prototype.toString.call(message.Gold) : options.longs === Number ? new $util.LongBits(message.Gold.low >>> 0, message.Gold.high >>> 0).toNumber() : message.Gold;
            return object;
        };

        BrcowcowBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowBetResp;
    })();

    brcowcow.BrcowcowOpenResp = (function() {

        function BrcowcowOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowOpenResp.prototype.AwardArea = $util.newBuffer([]);
        BrcowcowOpenResp.prototype.TianCard = null;
        BrcowcowOpenResp.prototype.XuanCard = null;
        BrcowcowOpenResp.prototype.DiCard = null;
        BrcowcowOpenResp.prototype.HuangCard = null;

        BrcowcowOpenResp.create = function create(properties) {
            return new BrcowcowOpenResp(properties);
        };

        BrcowcowOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardArea != null && Object.hasOwnProperty.call(message, "AwardArea"))
                writer.uint32(10).bytes(message.AwardArea);
            if (message.TianCard != null && Object.hasOwnProperty.call(message, "TianCard"))
                $root.gamecomm.CardInfo.encode(message.TianCard, writer.uint32(26).fork()).ldelim();
            if (message.XuanCard != null && Object.hasOwnProperty.call(message, "XuanCard"))
                $root.gamecomm.CardInfo.encode(message.XuanCard, writer.uint32(34).fork()).ldelim();
            if (message.DiCard != null && Object.hasOwnProperty.call(message, "DiCard"))
                $root.gamecomm.CardInfo.encode(message.DiCard, writer.uint32(42).fork()).ldelim();
            if (message.HuangCard != null && Object.hasOwnProperty.call(message, "HuangCard"))
                $root.gamecomm.CardInfo.encode(message.HuangCard, writer.uint32(50).fork()).ldelim();
            return writer;
        };

        BrcowcowOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AwardArea = reader.bytes();
                    break;
                case 3:
                    message.TianCard = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.XuanCard = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.DiCard = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.HuangCard = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                if (!(message.AwardArea && typeof message.AwardArea.length === "number" || $util.isString(message.AwardArea)))
                    return "AwardArea: buffer expected";
            if (message.TianCard != null && message.hasOwnProperty("TianCard")) {
                var error = $root.gamecomm.CardInfo.verify(message.TianCard);
                if (error)
                    return "TianCard." + error;
            }
            if (message.XuanCard != null && message.hasOwnProperty("XuanCard")) {
                var error = $root.gamecomm.CardInfo.verify(message.XuanCard);
                if (error)
                    return "XuanCard." + error;
            }
            if (message.DiCard != null && message.hasOwnProperty("DiCard")) {
                var error = $root.gamecomm.CardInfo.verify(message.DiCard);
                if (error)
                    return "DiCard." + error;
            }
            if (message.HuangCard != null && message.hasOwnProperty("HuangCard")) {
                var error = $root.gamecomm.CardInfo.verify(message.HuangCard);
                if (error)
                    return "HuangCard." + error;
            }
            return null;
        };

        BrcowcowOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowOpenResp)
                return object;
            var message = new $root.brcowcow.BrcowcowOpenResp();
            if (object.AwardArea != null)
                if (typeof object.AwardArea === "string")
                    $util.base64.decode(object.AwardArea, message.AwardArea = $util.newBuffer($util.base64.length(object.AwardArea)), 0);
                else if (object.AwardArea.length)
                    message.AwardArea = object.AwardArea;
            if (object.TianCard != null) {
                if (typeof object.TianCard !== "object")
                    throw TypeError(".brcowcow.BrcowcowOpenResp.TianCard: object expected");
                message.TianCard = $root.gamecomm.CardInfo.fromObject(object.TianCard);
            }
            if (object.XuanCard != null) {
                if (typeof object.XuanCard !== "object")
                    throw TypeError(".brcowcow.BrcowcowOpenResp.XuanCard: object expected");
                message.XuanCard = $root.gamecomm.CardInfo.fromObject(object.XuanCard);
            }
            if (object.DiCard != null) {
                if (typeof object.DiCard !== "object")
                    throw TypeError(".brcowcow.BrcowcowOpenResp.DiCard: object expected");
                message.DiCard = $root.gamecomm.CardInfo.fromObject(object.DiCard);
            }
            if (object.HuangCard != null) {
                if (typeof object.HuangCard !== "object")
                    throw TypeError(".brcowcow.BrcowcowOpenResp.HuangCard: object expected");
                message.HuangCard = $root.gamecomm.CardInfo.fromObject(object.HuangCard);
            }
            return message;
        };

        BrcowcowOpenResp.toObject = function toObject(message, options) {
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
                object.TianCard = null;
                object.XuanCard = null;
                object.DiCard = null;
                object.HuangCard = null;
            }
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                object.AwardArea = options.bytes === String ? $util.base64.encode(message.AwardArea, 0, message.AwardArea.length) : options.bytes === Array ? Array.prototype.slice.call(message.AwardArea) : message.AwardArea;
            if (message.TianCard != null && message.hasOwnProperty("TianCard"))
                object.TianCard = $root.gamecomm.CardInfo.toObject(message.TianCard, options);
            if (message.XuanCard != null && message.hasOwnProperty("XuanCard"))
                object.XuanCard = $root.gamecomm.CardInfo.toObject(message.XuanCard, options);
            if (message.DiCard != null && message.hasOwnProperty("DiCard"))
                object.DiCard = $root.gamecomm.CardInfo.toObject(message.DiCard, options);
            if (message.HuangCard != null && message.hasOwnProperty("HuangCard"))
                object.HuangCard = $root.gamecomm.CardInfo.toObject(message.HuangCard, options);
            return object;
        };

        BrcowcowOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowOpenResp;
    })();

    brcowcow.BrcowcowOverResp = (function() {

        function BrcowcowOverResp(properties) {
            this.TotalSettlement = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowOverResp.prototype.MySettlement = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BrcowcowOverResp.prototype.TotalSettlement = $util.emptyArray;

        BrcowcowOverResp.create = function create(properties) {
            return new BrcowcowOverResp(properties);
        };

        BrcowcowOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MySettlement != null && Object.hasOwnProperty.call(message, "MySettlement"))
                writer.uint32(8).int64(message.MySettlement);
            if (message.TotalSettlement != null && message.TotalSettlement.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.TotalSettlement.length; ++i)
                    writer.int64(message.TotalSettlement[i]);
                writer.ldelim();
            }
            return writer;
        };

        BrcowcowOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowOverResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MySettlement = reader.int64();
                    break;
                case 2:
                    if (!(message.TotalSettlement && message.TotalSettlement.length))
                        message.TotalSettlement = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TotalSettlement.push(reader.int64());
                    } else
                        message.TotalSettlement.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MySettlement != null && message.hasOwnProperty("MySettlement"))
                if (!$util.isInteger(message.MySettlement) && !(message.MySettlement && $util.isInteger(message.MySettlement.low) && $util.isInteger(message.MySettlement.high)))
                    return "MySettlement: integer|Long expected";
            if (message.TotalSettlement != null && message.hasOwnProperty("TotalSettlement")) {
                if (!Array.isArray(message.TotalSettlement))
                    return "TotalSettlement: array expected";
                for (var i = 0; i < message.TotalSettlement.length; ++i)
                    if (!$util.isInteger(message.TotalSettlement[i]) && !(message.TotalSettlement[i] && $util.isInteger(message.TotalSettlement[i].low) && $util.isInteger(message.TotalSettlement[i].high)))
                        return "TotalSettlement: integer|Long[] expected";
            }
            return null;
        };

        BrcowcowOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowOverResp)
                return object;
            var message = new $root.brcowcow.BrcowcowOverResp();
            if (object.MySettlement != null)
                if ($util.Long)
                    (message.MySettlement = $util.Long.fromValue(object.MySettlement)).unsigned = false;
                else if (typeof object.MySettlement === "string")
                    message.MySettlement = parseInt(object.MySettlement, 10);
                else if (typeof object.MySettlement === "number")
                    message.MySettlement = object.MySettlement;
                else if (typeof object.MySettlement === "object")
                    message.MySettlement = new $util.LongBits(object.MySettlement.low >>> 0, object.MySettlement.high >>> 0).toNumber();
            if (object.TotalSettlement) {
                if (!Array.isArray(object.TotalSettlement))
                    throw TypeError(".brcowcow.BrcowcowOverResp.TotalSettlement: array expected");
                message.TotalSettlement = [];
                for (var i = 0; i < object.TotalSettlement.length; ++i)
                    if ($util.Long)
                        (message.TotalSettlement[i] = $util.Long.fromValue(object.TotalSettlement[i])).unsigned = false;
                    else if (typeof object.TotalSettlement[i] === "string")
                        message.TotalSettlement[i] = parseInt(object.TotalSettlement[i], 10);
                    else if (typeof object.TotalSettlement[i] === "number")
                        message.TotalSettlement[i] = object.TotalSettlement[i];
                    else if (typeof object.TotalSettlement[i] === "object")
                        message.TotalSettlement[i] = new $util.LongBits(object.TotalSettlement[i].low >>> 0, object.TotalSettlement[i].high >>> 0).toNumber();
            }
            return message;
        };

        BrcowcowOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TotalSettlement = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MySettlement = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MySettlement = options.longs === String ? "0" : 0;
            if (message.MySettlement != null && message.hasOwnProperty("MySettlement"))
                if (typeof message.MySettlement === "number")
                    object.MySettlement = options.longs === String ? String(message.MySettlement) : message.MySettlement;
                else
                    object.MySettlement = options.longs === String ? $util.Long.prototype.toString.call(message.MySettlement) : options.longs === Number ? new $util.LongBits(message.MySettlement.low >>> 0, message.MySettlement.high >>> 0).toNumber() : message.MySettlement;
            if (message.TotalSettlement && message.TotalSettlement.length) {
                object.TotalSettlement = [];
                for (var j = 0; j < message.TotalSettlement.length; ++j)
                    if (typeof message.TotalSettlement[j] === "number")
                        object.TotalSettlement[j] = options.longs === String ? String(message.TotalSettlement[j]) : message.TotalSettlement[j];
                    else
                        object.TotalSettlement[j] = options.longs === String ? $util.Long.prototype.toString.call(message.TotalSettlement[j]) : options.longs === Number ? new $util.LongBits(message.TotalSettlement[j].low >>> 0, message.TotalSettlement[j].high >>> 0).toNumber() : message.TotalSettlement[j];
            }
            return object;
        };

        BrcowcowOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowOverResp;
    })();

    brcowcow.BrcowcowHostReq = (function() {

        function BrcowcowHostReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowHostReq.prototype.IsWant = false;

        BrcowcowHostReq.create = function create(properties) {
            return new BrcowcowHostReq(properties);
        };

        BrcowcowHostReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        BrcowcowHostReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowHostReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowHostReq();
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

        BrcowcowHostReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowHostReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        BrcowcowHostReq.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowHostReq)
                return object;
            var message = new $root.brcowcow.BrcowcowHostReq();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        BrcowcowHostReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        BrcowcowHostReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowHostReq;
    })();

    brcowcow.BrcowcowHostResp = (function() {

        function BrcowcowHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowHostResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        BrcowcowHostResp.prototype.IsWant = false;

        BrcowcowHostResp.create = function create(properties) {
            return new BrcowcowHostResp(properties);
        };

        BrcowcowHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        BrcowcowHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowHostResp();
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

        BrcowcowHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowHostResp.verify = function verify(message) {
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

        BrcowcowHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowHostResp)
                return object;
            var message = new $root.brcowcow.BrcowcowHostResp();
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

        BrcowcowHostResp.toObject = function toObject(message, options) {
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

        BrcowcowHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowHostResp;
    })();

    brcowcow.BrcowcowHostListReq = (function() {

        function BrcowcowHostListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowHostListReq.create = function create(properties) {
            return new BrcowcowHostListReq(properties);
        };

        BrcowcowHostListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        BrcowcowHostListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowHostListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowHostListReq();
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

        BrcowcowHostListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowHostListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        BrcowcowHostListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowHostListReq)
                return object;
            return new $root.brcowcow.BrcowcowHostListReq();
        };

        BrcowcowHostListReq.toObject = function toObject() {
            return {};
        };

        BrcowcowHostListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowHostListReq;
    })();

    brcowcow.BrcowcowHostListResp = (function() {

        function BrcowcowHostListResp(properties) {
            this.Waitlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        BrcowcowHostListResp.prototype.CurHost = null;
        BrcowcowHostListResp.prototype.Waitlist = $util.emptyArray;

        BrcowcowHostListResp.create = function create(properties) {
            return new BrcowcowHostListResp(properties);
        };

        BrcowcowHostListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurHost != null && Object.hasOwnProperty.call(message, "CurHost"))
                $root.gamecomm.PlayerInfo.encode(message.CurHost, writer.uint32(10).fork()).ldelim();
            if (message.Waitlist != null && message.Waitlist.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.Waitlist.length; ++i)
                    writer.uint64(message.Waitlist[i]);
                writer.ldelim();
            }
            return writer;
        };

        BrcowcowHostListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        BrcowcowHostListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.BrcowcowHostListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurHost = $root.gamecomm.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.Waitlist && message.Waitlist.length))
                        message.Waitlist = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Waitlist.push(reader.uint64());
                    } else
                        message.Waitlist.push(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        BrcowcowHostListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        BrcowcowHostListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurHost != null && message.hasOwnProperty("CurHost")) {
                var error = $root.gamecomm.PlayerInfo.verify(message.CurHost);
                if (error)
                    return "CurHost." + error;
            }
            if (message.Waitlist != null && message.hasOwnProperty("Waitlist")) {
                if (!Array.isArray(message.Waitlist))
                    return "Waitlist: array expected";
                for (var i = 0; i < message.Waitlist.length; ++i)
                    if (!$util.isInteger(message.Waitlist[i]) && !(message.Waitlist[i] && $util.isInteger(message.Waitlist[i].low) && $util.isInteger(message.Waitlist[i].high)))
                        return "Waitlist: integer|Long[] expected";
            }
            return null;
        };

        BrcowcowHostListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.BrcowcowHostListResp)
                return object;
            var message = new $root.brcowcow.BrcowcowHostListResp();
            if (object.CurHost != null) {
                if (typeof object.CurHost !== "object")
                    throw TypeError(".brcowcow.BrcowcowHostListResp.CurHost: object expected");
                message.CurHost = $root.gamecomm.PlayerInfo.fromObject(object.CurHost);
            }
            if (object.Waitlist) {
                if (!Array.isArray(object.Waitlist))
                    throw TypeError(".brcowcow.BrcowcowHostListResp.Waitlist: array expected");
                message.Waitlist = [];
                for (var i = 0; i < object.Waitlist.length; ++i)
                    if ($util.Long)
                        (message.Waitlist[i] = $util.Long.fromValue(object.Waitlist[i])).unsigned = true;
                    else if (typeof object.Waitlist[i] === "string")
                        message.Waitlist[i] = parseInt(object.Waitlist[i], 10);
                    else if (typeof object.Waitlist[i] === "number")
                        message.Waitlist[i] = object.Waitlist[i];
                    else if (typeof object.Waitlist[i] === "object")
                        message.Waitlist[i] = new $util.LongBits(object.Waitlist[i].low >>> 0, object.Waitlist[i].high >>> 0).toNumber(true);
            }
            return message;
        };

        BrcowcowHostListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Waitlist = [];
            if (options.defaults)
                object.CurHost = null;
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                object.CurHost = $root.gamecomm.PlayerInfo.toObject(message.CurHost, options);
            if (message.Waitlist && message.Waitlist.length) {
                object.Waitlist = [];
                for (var j = 0; j < message.Waitlist.length; ++j)
                    if (typeof message.Waitlist[j] === "number")
                        object.Waitlist[j] = options.longs === String ? String(message.Waitlist[j]) : message.Waitlist[j];
                    else
                        object.Waitlist[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Waitlist[j]) : options.longs === Number ? new $util.LongBits(message.Waitlist[j].low >>> 0, message.Waitlist[j].high >>> 0).toNumber(true) : message.Waitlist[j];
            }
            return object;
        };

        BrcowcowHostListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BrcowcowHostListResp;
    })();

    return brcowcow;
})();

module.exports = $root;