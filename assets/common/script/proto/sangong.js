/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.sangong = (function() {

    var sangong = {};

    sangong.SangongPlayer = (function() {

        function SangongPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongPlayer.prototype.MyInfo = null;
        SangongPlayer.prototype.Cards = null;

        SangongPlayer.create = function create(properties) {
            return new SangongPlayer(properties);
        };

        SangongPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MyInfo != null && Object.hasOwnProperty.call(message, "MyInfo"))
                $root.go.PlayerInfo.encode(message.MyInfo, writer.uint32(10).fork()).ldelim();
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.go.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        SangongPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.MyInfo = $root.go.PlayerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Cards = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MyInfo != null && message.hasOwnProperty("MyInfo")) {
                var error = $root.go.PlayerInfo.verify(message.MyInfo);
                if (error)
                    return "MyInfo." + error;
            }
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.go.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        SangongPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongPlayer)
                return object;
            var message = new $root.sangong.SangongPlayer();
            if (object.MyInfo != null) {
                if (typeof object.MyInfo !== "object")
                    throw TypeError(".sangong.SangongPlayer.MyInfo: object expected");
                message.MyInfo = $root.go.PlayerInfo.fromObject(object.MyInfo);
            }
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".sangong.SangongPlayer.Cards: object expected");
                message.Cards = $root.go.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        SangongPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.MyInfo = null;
                object.Cards = null;
            }
            if (message.MyInfo != null && message.hasOwnProperty("MyInfo"))
                object.MyInfo = $root.go.PlayerInfo.toObject(message.MyInfo, options);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.go.CardInfo.toObject(message.Cards, options);
            return object;
        };

        SangongPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongPlayer;
    })();

    sangong.SangongSceneResp = (function() {

        function SangongSceneResp(properties) {
            this.Chips = [];
            this.AreaBets = [];
            this.MyBets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongSceneResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SangongSceneResp.prototype.Chips = $util.emptyArray;
        SangongSceneResp.prototype.AreaBets = $util.emptyArray;
        SangongSceneResp.prototype.MyBets = $util.emptyArray;
        SangongSceneResp.prototype.Inning = "";
        SangongSceneResp.prototype.AllPlayers = null;
        SangongSceneResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        SangongSceneResp.create = function create(properties) {
            return new SangongSceneResp(properties);
        };

        SangongSceneResp.encode = function encode(message, writer) {
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
                $root.go.PlayerListInfo.encode(message.AllPlayers, writer.uint32(58).fork()).ldelim();
            if (message.HostID != null && Object.hasOwnProperty.call(message, "HostID"))
                writer.uint32(64).uint64(message.HostID);
            return writer;
        };

        SangongSceneResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongSceneResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongSceneResp();
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
                    message.AllPlayers = $root.go.PlayerListInfo.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.HostID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongSceneResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongSceneResp.verify = function verify(message) {
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
                var error = $root.go.PlayerListInfo.verify(message.AllPlayers);
                if (error)
                    return "AllPlayers." + error;
            }
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            return null;
        };

        SangongSceneResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongSceneResp)
                return object;
            var message = new $root.sangong.SangongSceneResp();
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
                    throw TypeError(".sangong.SangongSceneResp.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AreaBets) {
                if (!Array.isArray(object.AreaBets))
                    throw TypeError(".sangong.SangongSceneResp.AreaBets: array expected");
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
                    throw TypeError(".sangong.SangongSceneResp.MyBets: array expected");
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
                    throw TypeError(".sangong.SangongSceneResp.AllPlayers: object expected");
                message.AllPlayers = $root.go.PlayerListInfo.fromObject(object.AllPlayers);
            }
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            return message;
        };

        SangongSceneResp.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
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
                object.AllPlayers = $root.go.PlayerListInfo.toObject(message.AllPlayers, options);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            return object;
        };

        SangongSceneResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongSceneResp;
    })();

    sangong.SangongStateFreeResp = (function() {

        function SangongStateFreeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStateFreeResp.prototype.Times = null;
        SangongStateFreeResp.prototype.Inning = "";

        SangongStateFreeResp.create = function create(properties) {
            return new SangongStateFreeResp(properties);
        };

        SangongStateFreeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.Inning != null && Object.hasOwnProperty.call(message, "Inning"))
                writer.uint32(18).string(message.Inning);
            return writer;
        };

        SangongStateFreeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStateFreeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStateFreeResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Inning = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongStateFreeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStateFreeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                if (!$util.isString(message.Inning))
                    return "Inning: string expected";
            return null;
        };

        SangongStateFreeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStateFreeResp)
                return object;
            var message = new $root.sangong.SangongStateFreeResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStateFreeResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.Inning != null)
                message.Inning = String(object.Inning);
            return message;
        };

        SangongStateFreeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.Inning = "";
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.Inning != null && message.hasOwnProperty("Inning"))
                object.Inning = message.Inning;
            return object;
        };

        SangongStateFreeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStateFreeResp;
    })();

    sangong.SangongStateCallResp = (function() {

        function SangongStateCallResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStateCallResp.prototype.Times = null;

        SangongStateCallResp.create = function create(properties) {
            return new SangongStateCallResp(properties);
        };

        SangongStateCallResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        SangongStateCallResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStateCallResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStateCallResp();
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

        SangongStateCallResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStateCallResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        SangongStateCallResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStateCallResp)
                return object;
            var message = new $root.sangong.SangongStateCallResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStateCallResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        SangongStateCallResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        SangongStateCallResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStateCallResp;
    })();

    sangong.SangongStateDecideResp = (function() {

        function SangongStateDecideResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStateDecideResp.prototype.Times = null;
        SangongStateDecideResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        SangongStateDecideResp.create = function create(properties) {
            return new SangongStateDecideResp(properties);
        };

        SangongStateDecideResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.HostID != null && Object.hasOwnProperty.call(message, "HostID"))
                writer.uint32(16).uint64(message.HostID);
            return writer;
        };

        SangongStateDecideResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStateDecideResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStateDecideResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.HostID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongStateDecideResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStateDecideResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            return null;
        };

        SangongStateDecideResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStateDecideResp)
                return object;
            var message = new $root.sangong.SangongStateDecideResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStateDecideResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            return message;
        };

        SangongStateDecideResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            return object;
        };

        SangongStateDecideResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStateDecideResp;
    })();

    sangong.SangongStatePlayingResp = (function() {

        function SangongStatePlayingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStatePlayingResp.prototype.Times = null;

        SangongStatePlayingResp.create = function create(properties) {
            return new SangongStatePlayingResp(properties);
        };

        SangongStatePlayingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        SangongStatePlayingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStatePlayingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStatePlayingResp();
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

        SangongStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStatePlayingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        SangongStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStatePlayingResp)
                return object;
            var message = new $root.sangong.SangongStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStatePlayingResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        SangongStatePlayingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        SangongStatePlayingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStatePlayingResp;
    })();

    sangong.SangongStateDealResp = (function() {

        function SangongStateDealResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStateDealResp.prototype.Times = null;
        SangongStateDealResp.prototype.Cards = null;

        SangongStateDealResp.create = function create(properties) {
            return new SangongStateDealResp(properties);
        };

        SangongStateDealResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.go.CardInfo.encode(message.Cards, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        SangongStateDealResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStateDealResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStateDealResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Cards = $root.go.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongStateDealResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStateDealResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.go.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        SangongStateDealResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStateDealResp)
                return object;
            var message = new $root.sangong.SangongStateDealResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStateDealResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".sangong.SangongStateDealResp.Cards: object expected");
                message.Cards = $root.go.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        SangongStateDealResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Times = null;
                object.Cards = null;
            }
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.go.CardInfo.toObject(message.Cards, options);
            return object;
        };

        SangongStateDealResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStateDealResp;
    })();

    sangong.SangongStateOpenResp = (function() {

        function SangongStateOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStateOpenResp.prototype.Times = null;
        SangongStateOpenResp.prototype.OpenInfo = null;

        SangongStateOpenResp.create = function create(properties) {
            return new SangongStateOpenResp(properties);
        };

        SangongStateOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.OpenInfo != null && Object.hasOwnProperty.call(message, "OpenInfo"))
                $root.sangong.SangongOpenResp.encode(message.OpenInfo, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        SangongStateOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStateOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStateOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.go.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.OpenInfo = $root.sangong.SangongOpenResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongStateOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStateOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo")) {
                var error = $root.sangong.SangongOpenResp.verify(message.OpenInfo);
                if (error)
                    return "OpenInfo." + error;
            }
            return null;
        };

        SangongStateOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStateOpenResp)
                return object;
            var message = new $root.sangong.SangongStateOpenResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStateOpenResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            if (object.OpenInfo != null) {
                if (typeof object.OpenInfo !== "object")
                    throw TypeError(".sangong.SangongStateOpenResp.OpenInfo: object expected");
                message.OpenInfo = $root.sangong.SangongOpenResp.fromObject(object.OpenInfo);
            }
            return message;
        };

        SangongStateOpenResp.toObject = function toObject(message, options) {
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
                object.OpenInfo = $root.sangong.SangongOpenResp.toObject(message.OpenInfo, options);
            return object;
        };

        SangongStateOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStateOpenResp;
    })();

    sangong.SangongStateOverResp = (function() {

        function SangongStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongStateOverResp.prototype.Times = null;

        SangongStateOverResp.create = function create(properties) {
            return new SangongStateOverResp(properties);
        };

        SangongStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.go.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        SangongStateOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongStateOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongStateOverResp();
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

        SangongStateOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongStateOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.go.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        SangongStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongStateOverResp)
                return object;
            var message = new $root.sangong.SangongStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".sangong.SangongStateOverResp.Times: object expected");
                message.Times = $root.go.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        SangongStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.go.TimeInfo.toObject(message.Times, options);
            return object;
        };

        SangongStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongStateOverResp;
    })();

    sangong.SangongReadyReq = (function() {

        function SangongReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongReadyReq.prototype.IsReady = false;

        SangongReadyReq.create = function create(properties) {
            return new SangongReadyReq(properties);
        };

        SangongReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                writer.uint32(8).bool(message.IsReady);
            return writer;
        };

        SangongReadyReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongReadyReq();
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

        SangongReadyReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongReadyReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                if (typeof message.IsReady !== "boolean")
                    return "IsReady: boolean expected";
            return null;
        };

        SangongReadyReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongReadyReq)
                return object;
            var message = new $root.sangong.SangongReadyReq();
            if (object.IsReady != null)
                message.IsReady = Boolean(object.IsReady);
            return message;
        };

        SangongReadyReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsReady = false;
            if (message.IsReady != null && message.hasOwnProperty("IsReady"))
                object.IsReady = message.IsReady;
            return object;
        };

        SangongReadyReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongReadyReq;
    })();

    sangong.SangongReadyResp = (function() {

        function SangongReadyResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongReadyResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        SangongReadyResp.create = function create(properties) {
            return new SangongReadyResp(properties);
        };

        SangongReadyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            return writer;
        };

        SangongReadyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongReadyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongReadyResp();
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

        SangongReadyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongReadyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            return null;
        };

        SangongReadyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongReadyResp)
                return object;
            var message = new $root.sangong.SangongReadyResp();
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

        SangongReadyResp.toObject = function toObject(message, options) {
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

        SangongReadyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongReadyResp;
    })();

    sangong.SangongBetReq = (function() {

        function SangongBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongBetReq.prototype.BetArea = 0;
        SangongBetReq.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SangongBetReq.create = function create(properties) {
            return new SangongBetReq(properties);
        };

        SangongBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && Object.hasOwnProperty.call(message, "BetArea"))
                writer.uint32(16).int32(message.BetArea);
            if (message.BetScore != null && Object.hasOwnProperty.call(message, "BetScore"))
                writer.uint32(24).int64(message.BetScore);
            return writer;
        };

        SangongBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongBetReq();
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

        SangongBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongBetReq.verify = function verify(message) {
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

        SangongBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongBetReq)
                return object;
            var message = new $root.sangong.SangongBetReq();
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

        SangongBetReq.toObject = function toObject(message, options) {
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

        SangongBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongBetReq;
    })();

    sangong.SangongBetResp = (function() {

        function SangongBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongBetResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SangongBetResp.prototype.BetArea = 0;
        SangongBetResp.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SangongBetResp.create = function create(properties) {
            return new SangongBetResp(properties);
        };

        SangongBetResp.encode = function encode(message, writer) {
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

        SangongBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongBetResp();
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

        SangongBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongBetResp.verify = function verify(message) {
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

        SangongBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongBetResp)
                return object;
            var message = new $root.sangong.SangongBetResp();
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

        SangongBetResp.toObject = function toObject(message, options) {
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

        SangongBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongBetResp;
    })();

    sangong.SangongOpenResp = (function() {

        function SangongOpenResp(properties) {
            this.Infos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongOpenResp.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SangongOpenResp.prototype.Infos = $util.emptyArray;

        SangongOpenResp.create = function create(properties) {
            return new SangongOpenResp(properties);
        };

        SangongOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.WinnerId != null && Object.hasOwnProperty.call(message, "WinnerId"))
                writer.uint32(8).uint64(message.WinnerId);
            if (message.Infos != null && message.Infos.length)
                for (var i = 0; i < message.Infos.length; ++i)
                    $root.sangong.SangongPlayer.encode(message.Infos[i], writer.uint32(18).fork()).ldelim();
            return writer;
        };

        SangongOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.WinnerId = reader.uint64();
                    break;
                case 2:
                    if (!(message.Infos && message.Infos.length))
                        message.Infos = [];
                    message.Infos.push($root.sangong.SangongPlayer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SangongOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            if (message.Infos != null && message.hasOwnProperty("Infos")) {
                if (!Array.isArray(message.Infos))
                    return "Infos: array expected";
                for (var i = 0; i < message.Infos.length; ++i) {
                    var error = $root.sangong.SangongPlayer.verify(message.Infos[i]);
                    if (error)
                        return "Infos." + error;
                }
            }
            return null;
        };

        SangongOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongOpenResp)
                return object;
            var message = new $root.sangong.SangongOpenResp();
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
                    throw TypeError(".sangong.SangongOpenResp.Infos: array expected");
                message.Infos = [];
                for (var i = 0; i < object.Infos.length; ++i) {
                    if (typeof object.Infos[i] !== "object")
                        throw TypeError(".sangong.SangongOpenResp.Infos: object expected");
                    message.Infos[i] = $root.sangong.SangongPlayer.fromObject(object.Infos[i]);
                }
            }
            return message;
        };

        SangongOpenResp.toObject = function toObject(message, options) {
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
                    object.Infos[j] = $root.sangong.SangongPlayer.toObject(message.Infos[j], options);
            }
            return object;
        };

        SangongOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongOpenResp;
    })();

    sangong.SangongOverResp = (function() {

        function SangongOverResp(properties) {
            this.TotalSettlement = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongOverResp.prototype.MySettlement = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SangongOverResp.prototype.TotalSettlement = $util.emptyArray;

        SangongOverResp.create = function create(properties) {
            return new SangongOverResp(properties);
        };

        SangongOverResp.encode = function encode(message, writer) {
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

        SangongOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongOverResp();
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

        SangongOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongOverResp.verify = function verify(message) {
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

        SangongOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongOverResp)
                return object;
            var message = new $root.sangong.SangongOverResp();
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
                    throw TypeError(".sangong.SangongOverResp.TotalSettlement: array expected");
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

        SangongOverResp.toObject = function toObject(message, options) {
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

        SangongOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongOverResp;
    })();

    sangong.SangongHostReq = (function() {

        function SangongHostReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongHostReq.prototype.IsWant = false;

        SangongHostReq.create = function create(properties) {
            return new SangongHostReq(properties);
        };

        SangongHostReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        SangongHostReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongHostReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongHostReq();
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

        SangongHostReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongHostReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        SangongHostReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongHostReq)
                return object;
            var message = new $root.sangong.SangongHostReq();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        SangongHostReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        SangongHostReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongHostReq;
    })();

    sangong.SangongHostResp = (function() {

        function SangongHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongHostResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SangongHostResp.prototype.IsWant = false;

        SangongHostResp.create = function create(properties) {
            return new SangongHostResp(properties);
        };

        SangongHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        SangongHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongHostResp();
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

        SangongHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongHostResp.verify = function verify(message) {
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

        SangongHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongHostResp)
                return object;
            var message = new $root.sangong.SangongHostResp();
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

        SangongHostResp.toObject = function toObject(message, options) {
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

        SangongHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongHostResp;
    })();

    sangong.SangongHostListReq = (function() {

        function SangongHostListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongHostListReq.create = function create(properties) {
            return new SangongHostListReq(properties);
        };

        SangongHostListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        SangongHostListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongHostListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongHostListReq();
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

        SangongHostListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongHostListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        SangongHostListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongHostListReq)
                return object;
            return new $root.sangong.SangongHostListReq();
        };

        SangongHostListReq.toObject = function toObject() {
            return {};
        };

        SangongHostListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongHostListReq;
    })();

    sangong.SangongHostListResp = (function() {

        function SangongHostListResp(properties) {
            this.Waitlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SangongHostListResp.prototype.CurHost = null;
        SangongHostListResp.prototype.Waitlist = $util.emptyArray;

        SangongHostListResp.create = function create(properties) {
            return new SangongHostListResp(properties);
        };

        SangongHostListResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurHost != null && Object.hasOwnProperty.call(message, "CurHost"))
                $root.go.PlayerInfo.encode(message.CurHost, writer.uint32(10).fork()).ldelim();
            if (message.Waitlist != null && message.Waitlist.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.Waitlist.length; ++i)
                    writer.uint64(message.Waitlist[i]);
                writer.ldelim();
            }
            return writer;
        };

        SangongHostListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SangongHostListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.sangong.SangongHostListResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurHost = $root.go.PlayerInfo.decode(reader, reader.uint32());
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

        SangongHostListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SangongHostListResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurHost != null && message.hasOwnProperty("CurHost")) {
                var error = $root.go.PlayerInfo.verify(message.CurHost);
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

        SangongHostListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.sangong.SangongHostListResp)
                return object;
            var message = new $root.sangong.SangongHostListResp();
            if (object.CurHost != null) {
                if (typeof object.CurHost !== "object")
                    throw TypeError(".sangong.SangongHostListResp.CurHost: object expected");
                message.CurHost = $root.go.PlayerInfo.fromObject(object.CurHost);
            }
            if (object.Waitlist) {
                if (!Array.isArray(object.Waitlist))
                    throw TypeError(".sangong.SangongHostListResp.Waitlist: array expected");
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

        SangongHostListResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Waitlist = [];
            if (options.defaults)
                object.CurHost = null;
            if (message.CurHost != null && message.hasOwnProperty("CurHost"))
                object.CurHost = $root.go.PlayerInfo.toObject(message.CurHost, options);
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

        SangongHostListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SangongHostListResp;
    })();

    return sangong;
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

    go.GameModel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "General"] = 0;
        values[valuesById[1] = "Fight"] = 1;
        values[valuesById[2] = "Multiplayer"] = 2;
        values[valuesById[3] = "RoomCard"] = 3;
        values[valuesById[4] = "Guess"] = 4;
        values[valuesById[5] = "GamesCity"] = 5;
        values[valuesById[6] = "DualMeet"] = 6;
        values[valuesById[7] = "Sport"] = 7;
        values[valuesById[8] = "Smart"] = 8;
        values[valuesById[9] = "RPG"] = 9;
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

    go.ConfigInfo = (function() {

        function ConfigInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ConfigInfo.prototype.Name = "";
        ConfigInfo.prototype.Password = "";
        ConfigInfo.prototype.EnterScore = 0;
        ConfigInfo.prototype.LessScore = 0;
        ConfigInfo.prototype.PlayScore = 0;
        ConfigInfo.prototype.MaxChair = 0;
        ConfigInfo.prototype.Amount = 0;
        ConfigInfo.prototype.Commission = 0;

        ConfigInfo.create = function create(properties) {
            return new ConfigInfo(properties);
        };

        ConfigInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(10).string(message.Name);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(18).string(message.Password);
            if (message.EnterScore != null && Object.hasOwnProperty.call(message, "EnterScore"))
                writer.uint32(24).uint32(message.EnterScore);
            if (message.LessScore != null && Object.hasOwnProperty.call(message, "LessScore"))
                writer.uint32(32).uint32(message.LessScore);
            if (message.PlayScore != null && Object.hasOwnProperty.call(message, "PlayScore"))
                writer.uint32(40).uint32(message.PlayScore);
            if (message.Amount != null && Object.hasOwnProperty.call(message, "Amount"))
                writer.uint32(48).uint32(message.Amount);
            if (message.MaxChair != null && Object.hasOwnProperty.call(message, "MaxChair"))
                writer.uint32(56).uint32(message.MaxChair);
            if (message.Commission != null && Object.hasOwnProperty.call(message, "Commission"))
                writer.uint32(64).uint32(message.Commission);
            return writer;
        };

        ConfigInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ConfigInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.ConfigInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                case 3:
                    message.EnterScore = reader.uint32();
                    break;
                case 4:
                    message.LessScore = reader.uint32();
                    break;
                case 5:
                    message.PlayScore = reader.uint32();
                    break;
                case 7:
                    message.MaxChair = reader.uint32();
                    break;
                case 6:
                    message.Amount = reader.uint32();
                    break;
                case 8:
                    message.Commission = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ConfigInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ConfigInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                if (!$util.isInteger(message.EnterScore))
                    return "EnterScore: integer expected";
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                if (!$util.isInteger(message.LessScore))
                    return "LessScore: integer expected";
            if (message.PlayScore != null && message.hasOwnProperty("PlayScore"))
                if (!$util.isInteger(message.PlayScore))
                    return "PlayScore: integer expected";
            if (message.MaxChair != null && message.hasOwnProperty("MaxChair"))
                if (!$util.isInteger(message.MaxChair))
                    return "MaxChair: integer expected";
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (!$util.isInteger(message.Amount))
                    return "Amount: integer expected";
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                if (!$util.isInteger(message.Commission))
                    return "Commission: integer expected";
            return null;
        };

        ConfigInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.go.ConfigInfo)
                return object;
            var message = new $root.go.ConfigInfo();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.EnterScore != null)
                message.EnterScore = object.EnterScore >>> 0;
            if (object.LessScore != null)
                message.LessScore = object.LessScore >>> 0;
            if (object.PlayScore != null)
                message.PlayScore = object.PlayScore >>> 0;
            if (object.MaxChair != null)
                message.MaxChair = object.MaxChair >>> 0;
            if (object.Amount != null)
                message.Amount = object.Amount >>> 0;
            if (object.Commission != null)
                message.Commission = object.Commission >>> 0;
            return message;
        };

        ConfigInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Password = "";
                object.EnterScore = 0;
                object.LessScore = 0;
                object.PlayScore = 0;
                object.Amount = 0;
                object.MaxChair = 0;
                object.Commission = 0;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.EnterScore != null && message.hasOwnProperty("EnterScore"))
                object.EnterScore = message.EnterScore;
            if (message.LessScore != null && message.hasOwnProperty("LessScore"))
                object.LessScore = message.LessScore;
            if (message.PlayScore != null && message.hasOwnProperty("PlayScore"))
                object.PlayScore = message.PlayScore;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                object.Amount = message.Amount;
            if (message.MaxChair != null && message.hasOwnProperty("MaxChair"))
                object.MaxChair = message.MaxChair;
            if (message.Commission != null && message.hasOwnProperty("Commission"))
                object.Commission = message.Commission;
            return object;
        };

        ConfigInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConfigInfo;
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

    go.SettingGameReq = (function() {

        function SettingGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SettingGameReq.prototype.Model = 0;
        SettingGameReq.prototype.KindID = 0;
        SettingGameReq.prototype.Info = null;

        SettingGameReq.create = function create(properties) {
            return new SettingGameReq(properties);
        };

        SettingGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Model != null && Object.hasOwnProperty.call(message, "Model"))
                writer.uint32(8).int32(message.Model);
            if (message.KindID != null && Object.hasOwnProperty.call(message, "KindID"))
                writer.uint32(16).uint32(message.KindID);
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.go.ConfigInfo.encode(message.Info, writer.uint32(34).fork()).ldelim();
            return writer;
        };

        SettingGameReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SettingGameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.SettingGameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Model = reader.int32();
                    break;
                case 2:
                    message.KindID = reader.uint32();
                    break;
                case 4:
                    message.Info = $root.go.ConfigInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SettingGameReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SettingGameReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Model != null && message.hasOwnProperty("Model"))
                switch (message.Model) {
                default:
                    return "Model: enum value expected";
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
                    break;
                }
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                if (!$util.isInteger(message.KindID))
                    return "KindID: integer expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.go.ConfigInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        SettingGameReq.fromObject = function fromObject(object) {
            if (object instanceof $root.go.SettingGameReq)
                return object;
            var message = new $root.go.SettingGameReq();
            switch (object.Model) {
            case "General":
            case 0:
                message.Model = 0;
                break;
            case "Fight":
            case 1:
                message.Model = 1;
                break;
            case "Multiplayer":
            case 2:
                message.Model = 2;
                break;
            case "RoomCard":
            case 3:
                message.Model = 3;
                break;
            case "Guess":
            case 4:
                message.Model = 4;
                break;
            case "GamesCity":
            case 5:
                message.Model = 5;
                break;
            case "DualMeet":
            case 6:
                message.Model = 6;
                break;
            case "Sport":
            case 7:
                message.Model = 7;
                break;
            case "Smart":
            case 8:
                message.Model = 8;
                break;
            case "RPG":
            case 9:
                message.Model = 9;
                break;
            }
            if (object.KindID != null)
                message.KindID = object.KindID >>> 0;
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".go.SettingGameReq.Info: object expected");
                message.Info = $root.go.ConfigInfo.fromObject(object.Info);
            }
            return message;
        };

        SettingGameReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Model = options.enums === String ? "General" : 0;
                object.KindID = 0;
                object.Info = null;
            }
            if (message.Model != null && message.hasOwnProperty("Model"))
                object.Model = options.enums === String ? $root.go.GameModel[message.Model] : message.Model;
            if (message.KindID != null && message.hasOwnProperty("KindID"))
                object.KindID = message.KindID;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.go.ConfigInfo.toObject(message.Info, options);
            return object;
        };

        SettingGameReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingGameReq;
    })();

    go.SettingGameResp = (function() {

        function SettingGameResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SettingGameResp.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SettingGameResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SettingGameResp.prototype.Info = null;

        SettingGameResp.create = function create(properties) {
            return new SettingGameResp(properties);
        };

        SettingGameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.HostID != null && Object.hasOwnProperty.call(message, "HostID"))
                writer.uint32(16).uint64(message.HostID);
            if (message.Info != null && Object.hasOwnProperty.call(message, "Info"))
                $root.go.ConfigInfo.encode(message.Info, writer.uint32(26).fork()).ldelim();
            return writer;
        };

        SettingGameResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SettingGameResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.go.SettingGameResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.uint64();
                    break;
                case 2:
                    message.HostID = reader.uint64();
                    break;
                case 3:
                    message.Info = $root.go.ConfigInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SettingGameResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SettingGameResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID) && !(message.GameID && $util.isInteger(message.GameID.low) && $util.isInteger(message.GameID.high)))
                    return "GameID: integer|Long expected";
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            if (message.Info != null && message.hasOwnProperty("Info")) {
                var error = $root.go.ConfigInfo.verify(message.Info);
                if (error)
                    return "Info." + error;
            }
            return null;
        };

        SettingGameResp.fromObject = function fromObject(object) {
            if (object instanceof $root.go.SettingGameResp)
                return object;
            var message = new $root.go.SettingGameResp();
            if (object.GameID != null)
                if ($util.Long)
                    (message.GameID = $util.Long.fromValue(object.GameID)).unsigned = true;
                else if (typeof object.GameID === "string")
                    message.GameID = parseInt(object.GameID, 10);
                else if (typeof object.GameID === "number")
                    message.GameID = object.GameID;
                else if (typeof object.GameID === "object")
                    message.GameID = new $util.LongBits(object.GameID.low >>> 0, object.GameID.high >>> 0).toNumber(true);
            if (object.HostID != null)
                if ($util.Long)
                    (message.HostID = $util.Long.fromValue(object.HostID)).unsigned = true;
                else if (typeof object.HostID === "string")
                    message.HostID = parseInt(object.HostID, 10);
                else if (typeof object.HostID === "number")
                    message.HostID = object.HostID;
                else if (typeof object.HostID === "object")
                    message.HostID = new $util.LongBits(object.HostID.low >>> 0, object.HostID.high >>> 0).toNumber(true);
            if (object.Info != null) {
                if (typeof object.Info !== "object")
                    throw TypeError(".go.SettingGameResp.Info: object expected");
                message.Info = $root.go.ConfigInfo.fromObject(object.Info);
            }
            return message;
        };

        SettingGameResp.toObject = function toObject(message, options) {
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
                    object.HostID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HostID = options.longs === String ? "0" : 0;
                object.Info = null;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            if (message.Info != null && message.hasOwnProperty("Info"))
                object.Info = $root.go.ConfigInfo.toObject(message.Info, options);
            return object;
        };

        SettingGameResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingGameResp;
    })();

    go.EnterGameReq = (function() {

        function EnterGameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        EnterGameReq.prototype.GameID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        EnterGameReq.prototype.GameKey = "";

        EnterGameReq.create = function create(properties) {
            return new EnterGameReq(properties);
        };

        EnterGameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.GameKey != null && Object.hasOwnProperty.call(message, "GameKey"))
                writer.uint32(18).string(message.GameKey);
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
                    message.GameKey = reader.string();
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
            if (message.GameKey != null && message.hasOwnProperty("GameKey"))
                if (!$util.isString(message.GameKey))
                    return "GameKey: string expected";
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
            if (object.GameKey != null)
                message.GameKey = String(object.GameKey);
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
                object.GameKey = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
            if (message.GameKey != null && message.hasOwnProperty("GameKey"))
                object.GameKey = message.GameKey;
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
        EnterGameResp.prototype.UserInfo = null;

        EnterGameResp.create = function create(properties) {
            return new EnterGameResp(properties);
        };

        EnterGameResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.UserInfo != null && Object.hasOwnProperty.call(message, "UserInfo"))
                $root.go.PlayerInfo.encode(message.UserInfo, writer.uint32(18).fork()).ldelim();
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
                object.UserInfo = null;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (typeof message.GameID === "number")
                    object.GameID = options.longs === String ? String(message.GameID) : message.GameID;
                else
                    object.GameID = options.longs === String ? $util.Long.prototype.toString.call(message.GameID) : options.longs === Number ? new $util.LongBits(message.GameID.low >>> 0, message.GameID.high >>> 0).toNumber(true) : message.GameID;
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
        ChangeTableResp.prototype.TableID = 0;
        ChangeTableResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ChangeTableResp.create = function create(properties) {
            return new ChangeTableResp(properties);
        };

        ChangeTableResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(8).uint64(message.GameID);
            if (message.TableID != null && Object.hasOwnProperty.call(message, "TableID"))
                writer.uint32(16).uint32(message.TableID);
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
                    message.TableID = reader.uint32();
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
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
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
            if (object.TableID != null)
                message.TableID = object.TableID >>> 0;
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
                object.TableID = 0;
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
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
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

    return go;
})();

module.exports = $root;
