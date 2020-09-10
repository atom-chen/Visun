/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tbcowcow = (function() {

    var tbcowcow = {};

    tbcowcow.TbcowcowPlayer = (function() {

        function TbcowcowPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowPlayer.prototype.MyInfo = null;
        TbcowcowPlayer.prototype.Cards = null;

        TbcowcowPlayer.create = function create(properties) {
            return new TbcowcowPlayer(properties);
        };

        TbcowcowPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MyInfo != null && Object.hasOwnProperty.call(message, "MyInfo"))
                $root.gamecomm.PlayerInfo.encode(message.MyInfo, writer.uint32(10).fork()).ldelim();
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.gamecomm.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        TbcowcowPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MyInfo = $root.gamecomm.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Cards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TbcowcowPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MyInfo != null && message.hasOwnProperty("MyInfo")) {
                var error = $root.gamecomm.PlayerInfo.verify(message.MyInfo);
                if (error)
                    return "MyInfo." + error;
            }
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.gamecomm.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        TbcowcowPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowPlayer)
                return object;
            var message = new $root.tbcowcow.TbcowcowPlayer();
            if (object.MyInfo != null) {
                if (typeof object.MyInfo !== "object")
                    throw TypeError(".tbcowcow.TbcowcowPlayer.MyInfo: object expected");
                message.MyInfo = $root.gamecomm.PlayerInfo.fromObject(object.MyInfo);
            }
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".tbcowcow.TbcowcowPlayer.Cards: object expected");
                message.Cards = $root.gamecomm.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        TbcowcowPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MyInfo = null;
                object.Cards = null;
            }
            if (message.MyInfo != null && message.hasOwnProperty("MyInfo"))
                object.MyInfo = $root.gamecomm.PlayerInfo.toObject(message.MyInfo, options);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        TbcowcowPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowPlayer;
    })();

    tbcowcow.TbcowcowSceneResp = (function() {

        function TbcowcowSceneResp(properties) {
            this.Chips = [];
            this.AreaBets = [];
            this.MyBets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowSceneResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TbcowcowSceneResp.prototype.Chips = $util.emptyArray;
        TbcowcowSceneResp.prototype.AreaBets = $util.emptyArray;
        TbcowcowSceneResp.prototype.MyBets = $util.emptyArray;
        TbcowcowSceneResp.prototype.Inning = "";
        TbcowcowSceneResp.prototype.AllPlayers = null;

        TbcowcowSceneResp.create = function create(properties) {
            return new TbcowcowSceneResp(properties);
        };

        TbcowcowSceneResp.encode = function encode(message, writer) {
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

        TbcowcowSceneResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowSceneResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowSceneResp();
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

        TbcowcowSceneResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowSceneResp.verify = function verify(message) {
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

        TbcowcowSceneResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowSceneResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowSceneResp();
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
                    throw TypeError(".tbcowcow.TbcowcowSceneResp.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AreaBets) {
                if (!Array.isArray(object.AreaBets))
                    throw TypeError(".tbcowcow.TbcowcowSceneResp.AreaBets: array expected");
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
                    throw TypeError(".tbcowcow.TbcowcowSceneResp.MyBets: array expected");
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
                    throw TypeError(".tbcowcow.TbcowcowSceneResp.AllPlayers: object expected");
                message.AllPlayers = $root.gamecomm.PlayerListInfo.fromObject(object.AllPlayers);
            }
            return message;
        };

        TbcowcowSceneResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Chips = [];
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

        TbcowcowSceneResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowSceneResp;
    })();

    tbcowcow.TbcowcowStateFreeResp = (function() {

        function TbcowcowStateFreeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowStateFreeResp.prototype.Times = null;

        TbcowcowStateFreeResp.create = function create(properties) {
            return new TbcowcowStateFreeResp(properties);
        };

        TbcowcowStateFreeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TbcowcowStateFreeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowStateFreeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowStateFreeResp();
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

        TbcowcowStateFreeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowStateFreeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        TbcowcowStateFreeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowStateFreeResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowStateFreeResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStateFreeResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        TbcowcowStateFreeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        TbcowcowStateFreeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowStateFreeResp;
    })();

    tbcowcow.TbcowcowStatePlayingResp = (function() {

        function TbcowcowStatePlayingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowStatePlayingResp.prototype.Times = null;

        TbcowcowStatePlayingResp.create = function create(properties) {
            return new TbcowcowStatePlayingResp(properties);
        };

        TbcowcowStatePlayingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TbcowcowStatePlayingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowStatePlayingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowStatePlayingResp();
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

        TbcowcowStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowStatePlayingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        TbcowcowStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowStatePlayingResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStatePlayingResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        TbcowcowStatePlayingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        TbcowcowStatePlayingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowStatePlayingResp;
    })();

    tbcowcow.TbcowcowStateDealResp = (function() {

        function TbcowcowStateDealResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowStateDealResp.prototype.Times = null;
        TbcowcowStateDealResp.prototype.Cards = null;

        TbcowcowStateDealResp.create = function create(properties) {
            return new TbcowcowStateDealResp(properties);
        };

        TbcowcowStateDealResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.gamecomm.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        TbcowcowStateDealResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowStateDealResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowStateDealResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Cards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TbcowcowStateDealResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowStateDealResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.gamecomm.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        TbcowcowStateDealResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowStateDealResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowStateDealResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStateDealResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStateDealResp.Cards: object expected");
                message.Cards = $root.gamecomm.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        TbcowcowStateDealResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.Cards = null;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        TbcowcowStateDealResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowStateDealResp;
    })();

    tbcowcow.TbcowcowStateOpenResp = (function() {

        function TbcowcowStateOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowStateOpenResp.prototype.Times = null;
        TbcowcowStateOpenResp.prototype.OpenInfo = null;

        TbcowcowStateOpenResp.create = function create(properties) {
            return new TbcowcowStateOpenResp(properties);
        };

        TbcowcowStateOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.OpenInfo != null && Object.hasOwnProperty.call(message, "OpenInfo"))
                $root.tbcowcow.TbcowcowOpenResp.encode(message.OpenInfo, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        TbcowcowStateOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowStateOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowStateOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.OpenInfo = $root.tbcowcow.TbcowcowOpenResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TbcowcowStateOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowStateOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo")) {
                var error = $root.tbcowcow.TbcowcowOpenResp.verify(message.OpenInfo);
                if (error)
                    return "OpenInfo." + error;
            }
            return null;
        };

        TbcowcowStateOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowStateOpenResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowStateOpenResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStateOpenResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            if (object.OpenInfo != null) {
                if (typeof object.OpenInfo !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStateOpenResp.OpenInfo: object expected");
                message.OpenInfo = $root.tbcowcow.TbcowcowOpenResp.fromObject(object.OpenInfo);
            }
            return message;
        };

        TbcowcowStateOpenResp.toObject = function toObject(message, options) {
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
                object.OpenInfo = $root.tbcowcow.TbcowcowOpenResp.toObject(message.OpenInfo, options);
            return object;
        };

        TbcowcowStateOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowStateOpenResp;
    })();

    tbcowcow.TbcowcowStateOverResp = (function() {

        function TbcowcowStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowStateOverResp.prototype.Times = null;

        TbcowcowStateOverResp.create = function create(properties) {
            return new TbcowcowStateOverResp(properties);
        };

        TbcowcowStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        TbcowcowStateOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowStateOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowStateOverResp();
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

        TbcowcowStateOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowStateOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        TbcowcowStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowStateOverResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".tbcowcow.TbcowcowStateOverResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        TbcowcowStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        TbcowcowStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowStateOverResp;
    })();

    tbcowcow.TbcowcowReadyReq = (function() {

        function TbcowcowReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowReadyReq.prototype.IsReady = false;

        TbcowcowReadyReq.create = function create(properties) {
            return new TbcowcowReadyReq(properties);
        };

        TbcowcowReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                writer.uint32(8).bool(message.IsReady);
            return writer;
        };

        TbcowcowReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsReady = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TbcowcowReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            return null;
        };

        TbcowcowReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowReadyReq)
                return object;
            var message = new $root.tbcowcow.TbcowcowReadyReq();
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            return message;
        };

        TbcowcowReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsReady = false;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            return object;
        };

        TbcowcowReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowReadyReq;
    })();

    tbcowcow.TbcowcowReadyResp = (function() {

        function TbcowcowReadyResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowReadyResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        TbcowcowReadyResp.create = function create(properties) {
            return new TbcowcowReadyResp(properties);
        };

        TbcowcowReadyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            return writer;
        };

        TbcowcowReadyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowReadyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowReadyResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TbcowcowReadyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowReadyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            return null;
        };

        TbcowcowReadyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowReadyResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowReadyResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            return message;
        };

        TbcowcowReadyResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            return object;
        };

        TbcowcowReadyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowReadyResp;
    })();

    tbcowcow.TbcowcowBetReq = (function() {

        function TbcowcowBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowBetReq.prototype.BetArea = 0;
        TbcowcowBetReq.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TbcowcowBetReq.create = function create(properties) {
            return new TbcowcowBetReq(properties);
        };

        TbcowcowBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && Object.hasOwnProperty.call(message, "BetArea"))
                writer.uint32(16).int32(message.BetArea);
            if (message.BetScore != null && Object.hasOwnProperty.call(message, "BetScore"))
                writer.uint32(24).int64(message.BetScore);
            return writer;
        };

        TbcowcowBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowBetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
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

        TbcowcowBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowBetReq.verify = function verify(message) {
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

        TbcowcowBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowBetReq)
                return object;
            var message = new $root.tbcowcow.TbcowcowBetReq();
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

        TbcowcowBetReq.toObject = function toObject(message, options) {
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

        TbcowcowBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowBetReq;
    })();

    tbcowcow.TbcowcowBetResp = (function() {

        function TbcowcowBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowBetResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TbcowcowBetResp.prototype.BetArea = 0;
        TbcowcowBetResp.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TbcowcowBetResp.create = function create(properties) {
            return new TbcowcowBetResp(properties);
        };

        TbcowcowBetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.BetArea != null && Object.hasOwnProperty.call(message, "BetArea"))
                writer.uint32(16).int32(message.BetArea);
            if (message.BetScore != null && Object.hasOwnProperty.call(message, "BetScore"))
                writer.uint32(24).int64(message.BetScore);
            return writer;
        };

        TbcowcowBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowBetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
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

        TbcowcowBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowBetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                if (!$util.isInteger(message.BetArea))
                    return "BetArea: integer expected";
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (!$util.isInteger(message.BetScore) && !(message.BetScore && $util.isInteger(message.BetScore.low) && $util.isInteger(message.BetScore.high)))
                    return "BetScore: integer|Long expected";
            return null;
        };

        TbcowcowBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowBetResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowBetResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
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

        TbcowcowBetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.BetArea = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetScore = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.BetArea != null && message.hasOwnProperty("BetArea"))
                object.BetArea = message.BetArea;
            if (message.BetScore != null && message.hasOwnProperty("BetScore"))
                if (typeof message.BetScore === "number")
                    object.BetScore = options.longs === String ? String(message.BetScore) : message.BetScore;
                else
                    object.BetScore = options.longs === String ? $util.Long.prototype.toString.call(message.BetScore) : options.longs === Number ? new $util.LongBits(message.BetScore.low >>> 0, message.BetScore.high >>> 0).toNumber() : message.BetScore;
            return object;
        };

        TbcowcowBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowBetResp;
    })();

    tbcowcow.TbcowcowOpenResp = (function() {

        function TbcowcowOpenResp(properties) {
            this.Infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowOpenResp.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        TbcowcowOpenResp.prototype.Infos = $util.emptyArray;

        TbcowcowOpenResp.create = function create(properties) {
            return new TbcowcowOpenResp(properties);
        };

        TbcowcowOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.WinnerId != null && Object.hasOwnProperty.call(message, "WinnerId"))
                writer.uint32(8).uint64(message.WinnerId);
            if (message.Infos != null && message.Infos.length)
                for (var i = 0; i < message.Infos.length; ++i)
                    $root.tbcowcow.TbcowcowPlayer.encode(message.Infos[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        TbcowcowOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.WinnerId = reader.uint64();
                    break;
                case 2:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.tbcowcow.TbcowcowPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        TbcowcowOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos))
                    return "Infos: array expected";
                for (var i = 0; i < message.Infos.length; ++i) {
                    var error = $root.tbcowcow.TbcowcowPlayer.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        TbcowcowOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowOpenResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowOpenResp();
            if (object.WinnerId != null)
                if ($util.Long)
                    (message.WinnerId = $util.Long.fromValue(object.WinnerId)).unsigned = true;
                else if (typeof object.WinnerId === "string")
                    message.WinnerId = parseInt(object.WinnerId, 10);
                else if (typeof object.WinnerId === "number")
                    message.WinnerId = object.WinnerId;
                else if (typeof object.WinnerId === "object")
                    message.WinnerId = new $util.LongBits(object.WinnerId.low >>> 0, object.WinnerId.high >>> 0).toNumber(true);
            if (object.Infos) {
                if (!Array.isArray(object.Infos))
                    throw TypeError(".tbcowcow.TbcowcowOpenResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".tbcowcow.TbcowcowOpenResp.Infos: object expected");
                    message.Infos[i] = $root.tbcowcow.TbcowcowPlayer.fromObject(object.Infos[i]);
                }
            }
            return message;
        };

        TbcowcowOpenResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Infos = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.WinnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinnerId = options.longs === String ? "0" : 0;
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (typeof message.WinnerId === "number")
                    object.WinnerId = options.longs === String ? String(message.WinnerId) : message.WinnerId;
                else
                    object.WinnerId = options.longs === String ? $util.Long.prototype.toString.call(message.WinnerId) : options.longs === Number ? new $util.LongBits(message.WinnerId.low >>> 0, message.WinnerId.high >>> 0).toNumber(true) : message.WinnerId;
            if (message.Infos && message.Infos.length) {
                object.Infos = [];
                for (var j = 0; j < message.Infos.length; ++j)
                    object.Infos[j] = $root.tbcowcow.TbcowcowPlayer.toObject(message.Infos[j], options);
            }
            return object;
        };

        TbcowcowOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowOpenResp;
    })();

    tbcowcow.TbcowcowOverResp = (function() {

        function TbcowcowOverResp(properties) {
            this.TotalSettlement = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        TbcowcowOverResp.prototype.MySettlement = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TbcowcowOverResp.prototype.TotalSettlement = $util.emptyArray;

        TbcowcowOverResp.create = function create(properties) {
            return new TbcowcowOverResp(properties);
        };

        TbcowcowOverResp.encode = function encode(message, writer) {
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

        TbcowcowOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        TbcowcowOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tbcowcow.TbcowcowOverResp();
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

        TbcowcowOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        TbcowcowOverResp.verify = function verify(message) {
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

        TbcowcowOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.tbcowcow.TbcowcowOverResp)
                return object;
            var message = new $root.tbcowcow.TbcowcowOverResp();
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
                    throw TypeError(".tbcowcow.TbcowcowOverResp.TotalSettlement: array expected");
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

        TbcowcowOverResp.toObject = function toObject(message, options) {
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

        TbcowcowOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TbcowcowOverResp;
    })();

    return tbcowcow;
})();

module.exports = $root;