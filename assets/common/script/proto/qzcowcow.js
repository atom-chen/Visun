/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.qzcowcow = (function() {

    var qzcowcow = {};

    qzcowcow.QzcowcowSceneResp = (function() {

        function QzcowcowSceneResp(properties) {
            this.Chips = [];
            this.AwardAreas = [];
            this.AreaBets = [];
            this.MyBets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowSceneResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        QzcowcowSceneResp.prototype.Chips = $util.emptyArray;
        QzcowcowSceneResp.prototype.AwardAreas = $util.emptyArray;
        QzcowcowSceneResp.prototype.AreaBets = $util.emptyArray;
        QzcowcowSceneResp.prototype.MyBets = $util.emptyArray;
        QzcowcowSceneResp.prototype.Inning = "";
        QzcowcowSceneResp.prototype.AllPlayers = null;
        QzcowcowSceneResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        QzcowcowSceneResp.create = function create(properties) {
            return new QzcowcowSceneResp(properties);
        };

        QzcowcowSceneResp.encode = function encode(message, writer) {
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
            if (message.HostID != null && Object.hasOwnProperty.call(message, "HostID"))
                writer.uint32(64).uint64(message.HostID);
            return writer;
        };

        QzcowcowSceneResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowSceneResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowSceneResp();
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

        QzcowcowSceneResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowSceneResp.verify = function verify(message) {
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
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            return null;
        };

        QzcowcowSceneResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowSceneResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowSceneResp();
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
                    throw TypeError(".qzcowcow.QzcowcowSceneResp.Chips: array expected");
                message.Chips = [];
                for (var i = 0; i < object.Chips.length; ++i)
                    message.Chips[i] = object.Chips[i] | 0;
            }
            if (object.AwardAreas) {
                if (!Array.isArray(object.AwardAreas))
                    throw TypeError(".qzcowcow.QzcowcowSceneResp.AwardAreas: array expected");
                message.AwardAreas = [];
                for (var i = 0; i < object.AwardAreas.length; ++i)
                    if (typeof object.AwardAreas[i] === "string")
                        $util.base64.decode(object.AwardAreas[i], message.AwardAreas[i] = $util.newBuffer($util.base64.length(object.AwardAreas[i])), 0);
                    else if (object.AwardAreas[i].length)
                        message.AwardAreas[i] = object.AwardAreas[i];
            }
            if (object.AreaBets) {
                if (!Array.isArray(object.AreaBets))
                    throw TypeError(".qzcowcow.QzcowcowSceneResp.AreaBets: array expected");
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
                    throw TypeError(".qzcowcow.QzcowcowSceneResp.MyBets: array expected");
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
                    throw TypeError(".qzcowcow.QzcowcowSceneResp.AllPlayers: object expected");
                message.AllPlayers = $root.gamecomm.PlayerListInfo.fromObject(object.AllPlayers);
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

        QzcowcowSceneResp.toObject = function toObject(message, options) {
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
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            return object;
        };

        QzcowcowSceneResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowSceneResp;
    })();

    qzcowcow.QzcowcowStateFreeResp = (function() {

        function QzcowcowStateFreeResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowStateFreeResp.prototype.Times = null;

        QzcowcowStateFreeResp.create = function create(properties) {
            return new QzcowcowStateFreeResp(properties);
        };

        QzcowcowStateFreeResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        QzcowcowStateFreeResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowStateFreeResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowStateFreeResp();
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

        QzcowcowStateFreeResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowStateFreeResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        QzcowcowStateFreeResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowStateFreeResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowStateFreeResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".qzcowcow.QzcowcowStateFreeResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        QzcowcowStateFreeResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        QzcowcowStateFreeResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowStateFreeResp;
    })();

    qzcowcow.QzcowcowStateStartResp = (function() {

        function QzcowcowStateStartResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowStateStartResp.prototype.Times = null;
        QzcowcowStateStartResp.prototype.HostID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        QzcowcowStateStartResp.create = function create(properties) {
            return new QzcowcowStateStartResp(properties);
        };

        QzcowcowStateStartResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.HostID != null && Object.hasOwnProperty.call(message, "HostID"))
                writer.uint32(16).uint64(message.HostID);
            return writer;
        };

        QzcowcowStateStartResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowStateStartResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowStateStartResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
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

        QzcowcowStateStartResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowStateStartResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (!$util.isInteger(message.HostID) && !(message.HostID && $util.isInteger(message.HostID.low) && $util.isInteger(message.HostID.high)))
                    return "HostID: integer|Long expected";
            return null;
        };

        QzcowcowStateStartResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowStateStartResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowStateStartResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".qzcowcow.QzcowcowStateStartResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
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

        QzcowcowStateStartResp.toObject = function toObject(message, options) {
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
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            if (message.HostID != null && message.hasOwnProperty("HostID"))
                if (typeof message.HostID === "number")
                    object.HostID = options.longs === String ? String(message.HostID) : message.HostID;
                else
                    object.HostID = options.longs === String ? $util.Long.prototype.toString.call(message.HostID) : options.longs === Number ? new $util.LongBits(message.HostID.low >>> 0, message.HostID.high >>> 0).toNumber(true) : message.HostID;
            return object;
        };

        QzcowcowStateStartResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowStateStartResp;
    })();

    qzcowcow.QzcowcowStatePlayingResp = (function() {

        function QzcowcowStatePlayingResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowStatePlayingResp.prototype.Times = null;

        QzcowcowStatePlayingResp.create = function create(properties) {
            return new QzcowcowStatePlayingResp(properties);
        };

        QzcowcowStatePlayingResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        QzcowcowStatePlayingResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowStatePlayingResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowStatePlayingResp();
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

        QzcowcowStatePlayingResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowStatePlayingResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        QzcowcowStatePlayingResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowStatePlayingResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowStatePlayingResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".qzcowcow.QzcowcowStatePlayingResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        QzcowcowStatePlayingResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        QzcowcowStatePlayingResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowStatePlayingResp;
    })();

    qzcowcow.QzcowcowStateOpenResp = (function() {

        function QzcowcowStateOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowStateOpenResp.prototype.Times = null;
        QzcowcowStateOpenResp.prototype.OpenInfo = null;

        QzcowcowStateOpenResp.create = function create(properties) {
            return new QzcowcowStateOpenResp(properties);
        };

        QzcowcowStateOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            if (message.OpenInfo != null && Object.hasOwnProperty.call(message, "OpenInfo"))
                $root.qzcowcow.QzcowcowOpenResp.encode(message.OpenInfo, writer.uint32(18).fork()).ldelim();
            return writer;
        };

        QzcowcowStateOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowStateOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowStateOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = $root.gamecomm.TimeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.OpenInfo = $root.qzcowcow.QzcowcowOpenResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        QzcowcowStateOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowStateOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            if (message.OpenInfo != null && message.hasOwnProperty("OpenInfo")) {
                var error = $root.qzcowcow.QzcowcowOpenResp.verify(message.OpenInfo);
                if (error)
                    return "OpenInfo." + error;
            }
            return null;
        };

        QzcowcowStateOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowStateOpenResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowStateOpenResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".qzcowcow.QzcowcowStateOpenResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            if (object.OpenInfo != null) {
                if (typeof object.OpenInfo !== "object")
                    throw TypeError(".qzcowcow.QzcowcowStateOpenResp.OpenInfo: object expected");
                message.OpenInfo = $root.qzcowcow.QzcowcowOpenResp.fromObject(object.OpenInfo);
            }
            return message;
        };

        QzcowcowStateOpenResp.toObject = function toObject(message, options) {
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
                object.OpenInfo = $root.qzcowcow.QzcowcowOpenResp.toObject(message.OpenInfo, options);
            return object;
        };

        QzcowcowStateOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowStateOpenResp;
    })();

    qzcowcow.QzcowcowStateOverResp = (function() {

        function QzcowcowStateOverResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowStateOverResp.prototype.Times = null;

        QzcowcowStateOverResp.create = function create(properties) {
            return new QzcowcowStateOverResp(properties);
        };

        QzcowcowStateOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Times != null && Object.hasOwnProperty.call(message, "Times"))
                $root.gamecomm.TimeInfo.encode(message.Times, writer.uint32(10).fork()).ldelim();
            return writer;
        };

        QzcowcowStateOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowStateOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowStateOverResp();
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

        QzcowcowStateOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowStateOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Times != null && message.hasOwnProperty("Times")) {
                var error = $root.gamecomm.TimeInfo.verify(message.Times);
                if (error)
                    return "Times." + error;
            }
            return null;
        };

        QzcowcowStateOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowStateOverResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowStateOverResp();
            if (object.Times != null) {
                if (typeof object.Times !== "object")
                    throw TypeError(".qzcowcow.QzcowcowStateOverResp.Times: object expected");
                message.Times = $root.gamecomm.TimeInfo.fromObject(object.Times);
            }
            return message;
        };

        QzcowcowStateOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = null;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = $root.gamecomm.TimeInfo.toObject(message.Times, options);
            return object;
        };

        QzcowcowStateOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowStateOverResp;
    })();

    qzcowcow.QzcowcowBetReq = (function() {

        function QzcowcowBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowBetReq.prototype.BetArea = 0;
        QzcowcowBetReq.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        QzcowcowBetReq.create = function create(properties) {
            return new QzcowcowBetReq(properties);
        };

        QzcowcowBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArea != null && Object.hasOwnProperty.call(message, "BetArea"))
                writer.uint32(16).int32(message.BetArea);
            if (message.BetScore != null && Object.hasOwnProperty.call(message, "BetScore"))
                writer.uint32(24).int64(message.BetScore);
            return writer;
        };

        QzcowcowBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowBetReq();
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

        QzcowcowBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowBetReq.verify = function verify(message) {
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

        QzcowcowBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowBetReq)
                return object;
            var message = new $root.qzcowcow.QzcowcowBetReq();
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

        QzcowcowBetReq.toObject = function toObject(message, options) {
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

        QzcowcowBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowBetReq;
    })();

    qzcowcow.QzcowcowBetResp = (function() {

        function QzcowcowBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowBetResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        QzcowcowBetResp.prototype.BetArea = 0;
        QzcowcowBetResp.prototype.BetScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        QzcowcowBetResp.create = function create(properties) {
            return new QzcowcowBetResp(properties);
        };

        QzcowcowBetResp.encode = function encode(message, writer) {
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

        QzcowcowBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowBetResp();
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

        QzcowcowBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowBetResp.verify = function verify(message) {
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

        QzcowcowBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowBetResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowBetResp();
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

        QzcowcowBetResp.toObject = function toObject(message, options) {
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

        QzcowcowBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowBetResp;
    })();

    qzcowcow.QzcowcowOpenResp = (function() {

        function QzcowcowOpenResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowOpenResp.prototype.AwardArea = $util.newBuffer([]);
        QzcowcowOpenResp.prototype.BankerCard = null;
        QzcowcowOpenResp.prototype.TianCard = null;
        QzcowcowOpenResp.prototype.XuanCard = null;
        QzcowcowOpenResp.prototype.DiCard = null;
        QzcowcowOpenResp.prototype.HuangCard = null;

        QzcowcowOpenResp.create = function create(properties) {
            return new QzcowcowOpenResp(properties);
        };

        QzcowcowOpenResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AwardArea != null && Object.hasOwnProperty.call(message, "AwardArea"))
                writer.uint32(10).bytes(message.AwardArea);
            if (message.BankerCard != null && Object.hasOwnProperty.call(message, "BankerCard"))
                $root.gamecomm.CardInfo.encode(message.BankerCard, writer.uint32(18).fork()).ldelim();
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

        QzcowcowOpenResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowOpenResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowOpenResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AwardArea = reader.bytes();
                    break;
                case 2:
                    message.BankerCard = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
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

        QzcowcowOpenResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowOpenResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                if (!(message.AwardArea && typeof message.AwardArea.length === "number" || $util.isString(message.AwardArea)))
                    return "AwardArea: buffer expected";
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard")) {
                var error = $root.gamecomm.CardInfo.verify(message.BankerCard);
                if (error)
                    return "BankerCard." + error;
            }
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

        QzcowcowOpenResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowOpenResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowOpenResp();
            if (object.AwardArea != null)
                if (typeof object.AwardArea === "string")
                    $util.base64.decode(object.AwardArea, message.AwardArea = $util.newBuffer($util.base64.length(object.AwardArea)), 0);
                else if (object.AwardArea.length)
                    message.AwardArea = object.AwardArea;
            if (object.BankerCard != null) {
                if (typeof object.BankerCard !== "object")
                    throw TypeError(".qzcowcow.QzcowcowOpenResp.BankerCard: object expected");
                message.BankerCard = $root.gamecomm.CardInfo.fromObject(object.BankerCard);
            }
            if (object.TianCard != null) {
                if (typeof object.TianCard !== "object")
                    throw TypeError(".qzcowcow.QzcowcowOpenResp.TianCard: object expected");
                message.TianCard = $root.gamecomm.CardInfo.fromObject(object.TianCard);
            }
            if (object.XuanCard != null) {
                if (typeof object.XuanCard !== "object")
                    throw TypeError(".qzcowcow.QzcowcowOpenResp.XuanCard: object expected");
                message.XuanCard = $root.gamecomm.CardInfo.fromObject(object.XuanCard);
            }
            if (object.DiCard != null) {
                if (typeof object.DiCard !== "object")
                    throw TypeError(".qzcowcow.QzcowcowOpenResp.DiCard: object expected");
                message.DiCard = $root.gamecomm.CardInfo.fromObject(object.DiCard);
            }
            if (object.HuangCard != null) {
                if (typeof object.HuangCard !== "object")
                    throw TypeError(".qzcowcow.QzcowcowOpenResp.HuangCard: object expected");
                message.HuangCard = $root.gamecomm.CardInfo.fromObject(object.HuangCard);
            }
            return message;
        };

        QzcowcowOpenResp.toObject = function toObject(message, options) {
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
                object.TianCard = null;
                object.XuanCard = null;
                object.DiCard = null;
                object.HuangCard = null;
            }
            if (message.AwardArea != null && message.hasOwnProperty("AwardArea"))
                object.AwardArea = options.bytes === String ? $util.base64.encode(message.AwardArea, 0, message.AwardArea.length) : options.bytes === Array ? Array.prototype.slice.call(message.AwardArea) : message.AwardArea;
            if (message.BankerCard != null && message.hasOwnProperty("BankerCard"))
                object.BankerCard = $root.gamecomm.CardInfo.toObject(message.BankerCard, options);
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

        QzcowcowOpenResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowOpenResp;
    })();

    qzcowcow.QzcowcowOverResp = (function() {

        function QzcowcowOverResp(properties) {
            this.TotalSettlement = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowOverResp.prototype.MySettlement = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        QzcowcowOverResp.prototype.TotalSettlement = $util.emptyArray;

        QzcowcowOverResp.create = function create(properties) {
            return new QzcowcowOverResp(properties);
        };

        QzcowcowOverResp.encode = function encode(message, writer) {
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

        QzcowcowOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowOverResp();
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

        QzcowcowOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowOverResp.verify = function verify(message) {
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

        QzcowcowOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowOverResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowOverResp();
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
                    throw TypeError(".qzcowcow.QzcowcowOverResp.TotalSettlement: array expected");
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

        QzcowcowOverResp.toObject = function toObject(message, options) {
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

        QzcowcowOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowOverResp;
    })();

    qzcowcow.QzcowcowHostReq = (function() {

        function QzcowcowHostReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowHostReq.prototype.IsWant = false;

        QzcowcowHostReq.create = function create(properties) {
            return new QzcowcowHostReq(properties);
        };

        QzcowcowHostReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(8).bool(message.IsWant);
            return writer;
        };

        QzcowcowHostReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowHostReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowHostReq();
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

        QzcowcowHostReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowHostReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                if (typeof message.IsWant !== "boolean")
                    return "IsWant: boolean expected";
            return null;
        };

        QzcowcowHostReq.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowHostReq)
                return object;
            var message = new $root.qzcowcow.QzcowcowHostReq();
            if (object.IsWant != null)
                message.IsWant = Boolean(object.IsWant);
            return message;
        };

        QzcowcowHostReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsWant = false;
            if (message.IsWant != null && message.hasOwnProperty("IsWant"))
                object.IsWant = message.IsWant;
            return object;
        };

        QzcowcowHostReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowHostReq;
    })();

    qzcowcow.QzcowcowHostResp = (function() {

        function QzcowcowHostResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowHostResp.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        QzcowcowHostResp.prototype.IsWant = false;

        QzcowcowHostResp.create = function create(properties) {
            return new QzcowcowHostResp(properties);
        };

        QzcowcowHostResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        QzcowcowHostResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowHostResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowHostResp();
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

        QzcowcowHostResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowHostResp.verify = function verify(message) {
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

        QzcowcowHostResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowHostResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowHostResp();
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

        QzcowcowHostResp.toObject = function toObject(message, options) {
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

        QzcowcowHostResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowHostResp;
    })();

    qzcowcow.QzcowcowHostListReq = (function() {

        function QzcowcowHostListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowHostListReq.create = function create(properties) {
            return new QzcowcowHostListReq(properties);
        };

        QzcowcowHostListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        QzcowcowHostListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowHostListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowHostListReq();
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

        QzcowcowHostListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowHostListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        QzcowcowHostListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowHostListReq)
                return object;
            return new $root.qzcowcow.QzcowcowHostListReq();
        };

        QzcowcowHostListReq.toObject = function toObject() {
            return {};
        };

        QzcowcowHostListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowHostListReq;
    })();

    qzcowcow.QzcowcowHostListResp = (function() {

        function QzcowcowHostListResp(properties) {
            this.Waitlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        QzcowcowHostListResp.prototype.CurHost = null;
        QzcowcowHostListResp.prototype.Waitlist = $util.emptyArray;

        QzcowcowHostListResp.create = function create(properties) {
            return new QzcowcowHostListResp(properties);
        };

        QzcowcowHostListResp.encode = function encode(message, writer) {
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

        QzcowcowHostListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        QzcowcowHostListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.qzcowcow.QzcowcowHostListResp();
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

        QzcowcowHostListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        QzcowcowHostListResp.verify = function verify(message) {
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

        QzcowcowHostListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.qzcowcow.QzcowcowHostListResp)
                return object;
            var message = new $root.qzcowcow.QzcowcowHostListResp();
            if (object.CurHost != null) {
                if (typeof object.CurHost !== "object")
                    throw TypeError(".qzcowcow.QzcowcowHostListResp.CurHost: object expected");
                message.CurHost = $root.gamecomm.PlayerInfo.fromObject(object.CurHost);
            }
            if (object.Waitlist) {
                if (!Array.isArray(object.Waitlist))
                    throw TypeError(".qzcowcow.QzcowcowHostListResp.Waitlist: array expected");
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

        QzcowcowHostListResp.toObject = function toObject(message, options) {
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

        QzcowcowHostListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QzcowcowHostListResp;
    })();

    return qzcowcow;
})();

module.exports = $root;