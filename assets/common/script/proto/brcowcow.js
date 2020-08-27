/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.brcowcow = (function() {

    var brcowcow = {};

    brcowcow.GameBrcowcowEnterResp = (function() {

        function GameBrcowcowEnterResp(properties) {
            this.AreaBets = [];
            this.MyBets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowEnterResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBrcowcowEnterResp.prototype.AreaBets = $util.emptyArray;
        GameBrcowcowEnterResp.prototype.MyBets = $util.emptyArray;
        GameBrcowcowEnterResp.prototype.GameState = null;

        GameBrcowcowEnterResp.create = function create(properties) {
            return new GameBrcowcowEnterResp(properties);
        };

        GameBrcowcowEnterResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(8).int64(message.TimeStamp);
            if (message.AreaBets != null && message.AreaBets.length) {
                writer.uint32(34).fork();
                for (var i = 0; i < message.AreaBets.length; ++i)
                    writer.uint64(message.AreaBets[i]);
                writer.ldelim();
            }
            if (message.MyBets != null && message.MyBets.length) {
                writer.uint32(42).fork();
                for (var i = 0; i < message.MyBets.length; ++i)
                    writer.uint64(message.MyBets[i]);
                writer.ldelim();
            }
            if (message.GameState != null && Object.hasOwnProperty.call(message, "GameState"))
                $root.brcowcow.GameBrcowcowStateResp.encode(message.GameState, writer.uint32(50).fork()).ldelim();
            return writer;
        };

        GameBrcowcowEnterResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowEnterResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowEnterResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeStamp = reader.int64();
                    break;
                case 4:
                    if (!(message.AreaBets && message.AreaBets.length))
                        message.AreaBets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AreaBets.push(reader.uint64());
                    } else
                        message.AreaBets.push(reader.uint64());
                    break;
                case 5:
                    if (!(message.MyBets && message.MyBets.length))
                        message.MyBets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.MyBets.push(reader.uint64());
                    } else
                        message.MyBets.push(reader.uint64());
                    break;
                case 6:
                    message.GameState = $root.brcowcow.GameBrcowcowStateResp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowEnterResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowEnterResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
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
            if (message.GameState != null && message.hasOwnProperty("GameState")) {
                var error = $root.brcowcow.GameBrcowcowStateResp.verify(message.GameState);
                if (error)
                    return "GameState." + error;
            }
            return null;
        };

        GameBrcowcowEnterResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowEnterResp)
                return object;
            var message = new $root.brcowcow.GameBrcowcowEnterResp();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.AreaBets) {
                if (!Array.isArray(object.AreaBets))
                    throw TypeError(".brcowcow.GameBrcowcowEnterResp.AreaBets: array expected");
                message.AreaBets = [];
                for (var i = 0; i < object.AreaBets.length; ++i)
                    if ($util.Long)
                        (message.AreaBets[i] = $util.Long.fromValue(object.AreaBets[i])).unsigned = true;
                    else if (typeof object.AreaBets[i] === "string")
                        message.AreaBets[i] = parseInt(object.AreaBets[i], 10);
                    else if (typeof object.AreaBets[i] === "number")
                        message.AreaBets[i] = object.AreaBets[i];
                    else if (typeof object.AreaBets[i] === "object")
                        message.AreaBets[i] = new $util.LongBits(object.AreaBets[i].low >>> 0, object.AreaBets[i].high >>> 0).toNumber(true);
            }
            if (object.MyBets) {
                if (!Array.isArray(object.MyBets))
                    throw TypeError(".brcowcow.GameBrcowcowEnterResp.MyBets: array expected");
                message.MyBets = [];
                for (var i = 0; i < object.MyBets.length; ++i)
                    if ($util.Long)
                        (message.MyBets[i] = $util.Long.fromValue(object.MyBets[i])).unsigned = true;
                    else if (typeof object.MyBets[i] === "string")
                        message.MyBets[i] = parseInt(object.MyBets[i], 10);
                    else if (typeof object.MyBets[i] === "number")
                        message.MyBets[i] = object.MyBets[i];
                    else if (typeof object.MyBets[i] === "object")
                        message.MyBets[i] = new $util.LongBits(object.MyBets[i].low >>> 0, object.MyBets[i].high >>> 0).toNumber(true);
            }
            if (object.GameState != null) {
                if (typeof object.GameState !== "object")
                    throw TypeError(".brcowcow.GameBrcowcowEnterResp.GameState: object expected");
                message.GameState = $root.brcowcow.GameBrcowcowStateResp.fromObject(object.GameState);
            }
            return message;
        };

        GameBrcowcowEnterResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AreaBets = [];
                object.MyBets = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                object.GameState = null;
            }
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.AreaBets && message.AreaBets.length) {
                object.AreaBets = [];
                for (var j = 0; j < message.AreaBets.length; ++j)
                    if (typeof message.AreaBets[j] === "number")
                        object.AreaBets[j] = options.longs === String ? String(message.AreaBets[j]) : message.AreaBets[j];
                    else
                        object.AreaBets[j] = options.longs === String ? $util.Long.prototype.toString.call(message.AreaBets[j]) : options.longs === Number ? new $util.LongBits(message.AreaBets[j].low >>> 0, message.AreaBets[j].high >>> 0).toNumber(true) : message.AreaBets[j];
            }
            if (message.MyBets && message.MyBets.length) {
                object.MyBets = [];
                for (var j = 0; j < message.MyBets.length; ++j)
                    if (typeof message.MyBets[j] === "number")
                        object.MyBets[j] = options.longs === String ? String(message.MyBets[j]) : message.MyBets[j];
                    else
                        object.MyBets[j] = options.longs === String ? $util.Long.prototype.toString.call(message.MyBets[j]) : options.longs === Number ? new $util.LongBits(message.MyBets[j].low >>> 0, message.MyBets[j].high >>> 0).toNumber(true) : message.MyBets[j];
            }
            if (message.GameState != null && message.hasOwnProperty("GameState"))
                object.GameState = $root.brcowcow.GameBrcowcowStateResp.toObject(message.GameState, options);
            return object;
        };

        GameBrcowcowEnterResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowEnterResp;
    })();

    brcowcow.GameBrcowcowStateResp = (function() {

        function GameBrcowcowStateResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowStateResp.prototype.CurState = 0;
        GameBrcowcowStateResp.prototype.CurStateTimeout = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GameBrcowcowStateResp.create = function create(properties) {
            return new GameBrcowcowStateResp(properties);
        };

        GameBrcowcowStateResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurState != null && Object.hasOwnProperty.call(message, "CurState"))
                writer.uint32(8).uint32(message.CurState);
            if (message.CurStateTimeout != null && Object.hasOwnProperty.call(message, "CurStateTimeout"))
                writer.uint32(16).uint64(message.CurStateTimeout);
            return writer;
        };

        GameBrcowcowStateResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowStateResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowStateResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurState = reader.uint32();
                    break;
                case 2:
                    message.CurStateTimeout = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowStateResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowStateResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurState != null && message.hasOwnProperty("CurState"))
                if (!$util.isInteger(message.CurState))
                    return "CurState: integer expected";
            if (message.CurStateTimeout != null && message.hasOwnProperty("CurStateTimeout"))
                if (!$util.isInteger(message.CurStateTimeout) && !(message.CurStateTimeout && $util.isInteger(message.CurStateTimeout.low) && $util.isInteger(message.CurStateTimeout.high)))
                    return "CurStateTimeout: integer|Long expected";
            return null;
        };

        GameBrcowcowStateResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowStateResp)
                return object;
            var message = new $root.brcowcow.GameBrcowcowStateResp();
            if (object.CurState != null)
                message.CurState = object.CurState >>> 0;
            if (object.CurStateTimeout != null)
                if ($util.Long)
                    (message.CurStateTimeout = $util.Long.fromValue(object.CurStateTimeout)).unsigned = true;
                else if (typeof object.CurStateTimeout === "string")
                    message.CurStateTimeout = parseInt(object.CurStateTimeout, 10);
                else if (typeof object.CurStateTimeout === "number")
                    message.CurStateTimeout = object.CurStateTimeout;
                else if (typeof object.CurStateTimeout === "object")
                    message.CurStateTimeout = new $util.LongBits(object.CurStateTimeout.low >>> 0, object.CurStateTimeout.high >>> 0).toNumber(true);
            return message;
        };

        GameBrcowcowStateResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CurState = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.CurStateTimeout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurStateTimeout = options.longs === String ? "0" : 0;
            }
            if (message.CurState != null && message.hasOwnProperty("CurState"))
                object.CurState = message.CurState;
            if (message.CurStateTimeout != null && message.hasOwnProperty("CurStateTimeout"))
                if (typeof message.CurStateTimeout === "number")
                    object.CurStateTimeout = options.longs === String ? String(message.CurStateTimeout) : message.CurStateTimeout;
                else
                    object.CurStateTimeout = options.longs === String ? $util.Long.prototype.toString.call(message.CurStateTimeout) : options.longs === Number ? new $util.LongBits(message.CurStateTimeout.low >>> 0, message.CurStateTimeout.high >>> 0).toNumber(true) : message.CurStateTimeout;
            return object;
        };

        GameBrcowcowStateResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowStateResp;
    })();

    brcowcow.GameBrcowcowBetReq = (function() {

        function GameBrcowcowBetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowBetReq.prototype.AreaId = 0;
        GameBrcowcowBetReq.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GameBrcowcowBetReq.create = function create(properties) {
            return new GameBrcowcowBetReq(properties);
        };

        GameBrcowcowBetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AreaId != null && Object.hasOwnProperty.call(message, "AreaId"))
                writer.uint32(8).int32(message.AreaId);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(16).uint64(message.Money);
            return writer;
        };

        GameBrcowcowBetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowBetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowBetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AreaId = reader.int32();
                    break;
                case 2:
                    message.Money = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowBetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowBetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                if (!$util.isInteger(message.AreaId))
                    return "AreaId: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        GameBrcowcowBetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowBetReq)
                return object;
            var message = new $root.brcowcow.GameBrcowcowBetReq();
            if (object.AreaId != null)
                message.AreaId = object.AreaId | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = true;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber(true);
            return message;
        };

        GameBrcowcowBetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AreaId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                object.AreaId = message.AreaId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber(true) : message.Money;
            return object;
        };

        GameBrcowcowBetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowBetReq;
    })();

    brcowcow.GameBrcowcowBetResp = (function() {

        function GameBrcowcowBetResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowBetResp.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameBrcowcowBetResp.prototype.AreaId = 0;
        GameBrcowcowBetResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        GameBrcowcowBetResp.create = function create(properties) {
            return new GameBrcowcowBetResp(properties);
        };

        GameBrcowcowBetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.AreaId != null && Object.hasOwnProperty.call(message, "AreaId"))
                writer.uint32(16).int32(message.AreaId);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(24).uint64(message.Money);
            return writer;
        };

        GameBrcowcowBetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowBetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowBetResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
                    break;
                case 2:
                    message.AreaId = reader.int32();
                    break;
                case 3:
                    message.Money = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowBetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowBetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                if (!$util.isInteger(message.AreaId))
                    return "AreaId: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        GameBrcowcowBetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowBetResp)
                return object;
            var message = new $root.brcowcow.GameBrcowcowBetResp();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            if (object.AreaId != null)
                message.AreaId = object.AreaId | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = true;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber(true);
            return message;
        };

        GameBrcowcowBetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.AreaId = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                object.AreaId = message.AreaId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber(true) : message.Money;
            return object;
        };

        GameBrcowcowBetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowBetResp;
    })();

    brcowcow.GameBrcowcowOverResp = (function() {

        function GameBrcowcowOverResp(properties) {
            this.Cards = [];
            this.TotalSettlement = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowOverResp.prototype.Cards = $util.emptyArray;
        GameBrcowcowOverResp.prototype.AreaResult = $util.newBuffer([]);
        GameBrcowcowOverResp.prototype.TotalSettlement = $util.emptyArray;
        GameBrcowcowOverResp.prototype.MySettlement = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameBrcowcowOverResp.create = function create(properties) {
            return new GameBrcowcowOverResp(properties);
        };

        GameBrcowcowOverResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.gamecomm.CardInfo.encode(message.Cards[i], writer.uint32(10).fork()).ldelim();
            if (message.AreaResult != null && Object.hasOwnProperty.call(message, "AreaResult"))
                writer.uint32(18).bytes(message.AreaResult);
            if (message.TotalSettlement != null && message.TotalSettlement.length) {
                writer.uint32(26).fork();
                for (var i = 0; i < message.TotalSettlement.length; ++i)
                    writer.int64(message.TotalSettlement[i]);
                writer.ldelim();
            }
            if (message.MySettlement != null && Object.hasOwnProperty.call(message, "MySettlement"))
                writer.uint32(32).int64(message.MySettlement);
            return writer;
        };

        GameBrcowcowOverResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowOverResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowOverResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.gamecomm.CardInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.AreaResult = reader.bytes();
                    break;
                case 3:
                    if (!(message.TotalSettlement && message.TotalSettlement.length))
                        message.TotalSettlement = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.TotalSettlement.push(reader.int64());
                    } else
                        message.TotalSettlement.push(reader.int64());
                    break;
                case 4:
                    message.MySettlement = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowOverResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowOverResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.gamecomm.CardInfo.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (message.AreaResult != null && message.hasOwnProperty("AreaResult"))
                if (!(message.AreaResult && typeof message.AreaResult.length === "number" || $util.isString(message.AreaResult)))
                    return "AreaResult: buffer expected";
            if (message.TotalSettlement != null && message.hasOwnProperty("TotalSettlement")) {
                if (!Array.isArray(message.TotalSettlement))
                    return "TotalSettlement: array expected";
                for (var i = 0; i < message.TotalSettlement.length; ++i)
                    if (!$util.isInteger(message.TotalSettlement[i]) && !(message.TotalSettlement[i] && $util.isInteger(message.TotalSettlement[i].low) && $util.isInteger(message.TotalSettlement[i].high)))
                        return "TotalSettlement: integer|Long[] expected";
            }
            if (message.MySettlement != null && message.hasOwnProperty("MySettlement"))
                if (!$util.isInteger(message.MySettlement) && !(message.MySettlement && $util.isInteger(message.MySettlement.low) && $util.isInteger(message.MySettlement.high)))
                    return "MySettlement: integer|Long expected";
            return null;
        };

        GameBrcowcowOverResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowOverResp)
                return object;
            var message = new $root.brcowcow.GameBrcowcowOverResp();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".brcowcow.GameBrcowcowOverResp.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".brcowcow.GameBrcowcowOverResp.Cards: object expected");
                    message.Cards[i] = $root.gamecomm.CardInfo.fromObject(object.Cards[i]);
                }
            }
            if (object.AreaResult != null)
                if (typeof object.AreaResult === "string")
                    $util.base64.decode(object.AreaResult, message.AreaResult = $util.newBuffer($util.base64.length(object.AreaResult)), 0);
                else if (object.AreaResult.length)
                    message.AreaResult = object.AreaResult;
            if (object.TotalSettlement) {
                if (!Array.isArray(object.TotalSettlement))
                    throw TypeError(".brcowcow.GameBrcowcowOverResp.TotalSettlement: array expected");
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
            if (object.MySettlement != null)
                if ($util.Long)
                    (message.MySettlement = $util.Long.fromValue(object.MySettlement)).unsigned = false;
                else if (typeof object.MySettlement === "string")
                    message.MySettlement = parseInt(object.MySettlement, 10);
                else if (typeof object.MySettlement === "number")
                    message.MySettlement = object.MySettlement;
                else if (typeof object.MySettlement === "object")
                    message.MySettlement = new $util.LongBits(object.MySettlement.low >>> 0, object.MySettlement.high >>> 0).toNumber();
            return message;
        };

        GameBrcowcowOverResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Cards = [];
                object.TotalSettlement = [];
            }
            if (options.defaults) {
                if (options.bytes === String)
                    object.AreaResult = "";
                else {
                    object.AreaResult = [];
                    if (options.bytes !== Array)
                        object.AreaResult = $util.newBuffer(object.AreaResult);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MySettlement = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MySettlement = options.longs === String ? "0" : 0;
            }
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.gamecomm.CardInfo.toObject(message.Cards[j], options);
            }
            if (message.AreaResult != null && message.hasOwnProperty("AreaResult"))
                object.AreaResult = options.bytes === String ? $util.base64.encode(message.AreaResult, 0, message.AreaResult.length) : options.bytes === Array ? Array.prototype.slice.call(message.AreaResult) : message.AreaResult;
            if (message.TotalSettlement && message.TotalSettlement.length) {
                object.TotalSettlement = [];
                for (var j = 0; j < message.TotalSettlement.length; ++j)
                    if (typeof message.TotalSettlement[j] === "number")
                        object.TotalSettlement[j] = options.longs === String ? String(message.TotalSettlement[j]) : message.TotalSettlement[j];
                    else
                        object.TotalSettlement[j] = options.longs === String ? $util.Long.prototype.toString.call(message.TotalSettlement[j]) : options.longs === Number ? new $util.LongBits(message.TotalSettlement[j].low >>> 0, message.TotalSettlement[j].high >>> 0).toNumber() : message.TotalSettlement[j];
            }
            if (message.MySettlement != null && message.hasOwnProperty("MySettlement"))
                if (typeof message.MySettlement === "number")
                    object.MySettlement = options.longs === String ? String(message.MySettlement) : message.MySettlement;
                else
                    object.MySettlement = options.longs === String ? $util.Long.prototype.toString.call(message.MySettlement) : options.longs === Number ? new $util.LongBits(message.MySettlement.low >>> 0, message.MySettlement.high >>> 0).toNumber() : message.MySettlement;
            return object;
        };

        GameBrcowcowOverResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowOverResp;
    })();

    brcowcow.GameBrcowcowHistoryReq = (function() {

        function GameBrcowcowHistoryReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowHistoryReq.prototype.GameId = 0;

        GameBrcowcowHistoryReq.create = function create(properties) {
            return new GameBrcowcowHistoryReq(properties);
        };

        GameBrcowcowHistoryReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameId != null && Object.hasOwnProperty.call(message, "GameId"))
                writer.uint32(8).int32(message.GameId);
            return writer;
        };

        GameBrcowcowHistoryReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowHistoryReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowHistoryReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowHistoryReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowHistoryReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId))
                    return "GameId: integer expected";
            return null;
        };

        GameBrcowcowHistoryReq.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowHistoryReq)
                return object;
            var message = new $root.brcowcow.GameBrcowcowHistoryReq();
            if (object.GameId != null)
                message.GameId = object.GameId | 0;
            return message;
        };

        GameBrcowcowHistoryReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameId = 0;
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                object.GameId = message.GameId;
            return object;
        };

        GameBrcowcowHistoryReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowHistoryReq;
    })();

    brcowcow.GameBrcowcowHistoryResp = (function() {

        function GameBrcowcowHistoryResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowHistoryResp.prototype.GameId = 0;

        GameBrcowcowHistoryResp.create = function create(properties) {
            return new GameBrcowcowHistoryResp(properties);
        };

        GameBrcowcowHistoryResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameId != null && Object.hasOwnProperty.call(message, "GameId"))
                writer.uint32(8).int32(message.GameId);
            return writer;
        };

        GameBrcowcowHistoryResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowHistoryResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowHistoryResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GameBrcowcowHistoryResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowHistoryResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                if (!$util.isInteger(message.GameId))
                    return "GameId: integer expected";
            return null;
        };

        GameBrcowcowHistoryResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowHistoryResp)
                return object;
            var message = new $root.brcowcow.GameBrcowcowHistoryResp();
            if (object.GameId != null)
                message.GameId = object.GameId | 0;
            return message;
        };

        GameBrcowcowHistoryResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameId = 0;
            if (message.GameId != null && message.hasOwnProperty("GameId"))
                object.GameId = message.GameId;
            return object;
        };

        GameBrcowcowHistoryResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowHistoryResp;
    })();

    brcowcow.GameBrcowcowHost = (function() {

        function GameBrcowcowHost(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowHost.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GameBrcowcowHost.prototype.IsWant = false;

        GameBrcowcowHost.create = function create(properties) {
            return new GameBrcowcowHost(properties);
        };

        GameBrcowcowHost.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.IsWant != null && Object.hasOwnProperty.call(message, "IsWant"))
                writer.uint32(16).bool(message.IsWant);
            return writer;
        };

        GameBrcowcowHost.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowHost.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowHost();
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

        GameBrcowcowHost.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowHost.verify = function verify(message) {
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

        GameBrcowcowHost.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowHost)
                return object;
            var message = new $root.brcowcow.GameBrcowcowHost();
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

        GameBrcowcowHost.toObject = function toObject(message, options) {
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

        GameBrcowcowHost.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowHost;
    })();

    brcowcow.GameBrcowcowHostListReq = (function() {

        function GameBrcowcowHostListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowHostListReq.create = function create(properties) {
            return new GameBrcowcowHostListReq(properties);
        };

        GameBrcowcowHostListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        GameBrcowcowHostListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowHostListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowHostListReq();
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

        GameBrcowcowHostListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowHostListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        GameBrcowcowHostListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowHostListReq)
                return object;
            return new $root.brcowcow.GameBrcowcowHostListReq();
        };

        GameBrcowcowHostListReq.toObject = function toObject() {
            return {};
        };

        GameBrcowcowHostListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowHostListReq;
    })();

    brcowcow.GameBrcowcowHostListResp = (function() {

        function GameBrcowcowHostListResp(properties) {
            this.Waitlist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GameBrcowcowHostListResp.prototype.CurHost = null;
        GameBrcowcowHostListResp.prototype.Waitlist = $util.emptyArray;

        GameBrcowcowHostListResp.create = function create(properties) {
            return new GameBrcowcowHostListResp(properties);
        };

        GameBrcowcowHostListResp.encode = function encode(message, writer) {
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

        GameBrcowcowHostListResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GameBrcowcowHostListResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.GameBrcowcowHostListResp();
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

        GameBrcowcowHostListResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GameBrcowcowHostListResp.verify = function verify(message) {
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

        GameBrcowcowHostListResp.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.GameBrcowcowHostListResp)
                return object;
            var message = new $root.brcowcow.GameBrcowcowHostListResp();
            if (object.CurHost != null) {
                if (typeof object.CurHost !== "object")
                    throw TypeError(".brcowcow.GameBrcowcowHostListResp.CurHost: object expected");
                message.CurHost = $root.gamecomm.PlayerInfo.fromObject(object.CurHost);
            }
            if (object.Waitlist) {
                if (!Array.isArray(object.Waitlist))
                    throw TypeError(".brcowcow.GameBrcowcowHostListResp.Waitlist: array expected");
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

        GameBrcowcowHostListResp.toObject = function toObject(message, options) {
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

        GameBrcowcowHostListResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBrcowcowHostListResp;
    })();

    return brcowcow;
})();

module.exports = $root;