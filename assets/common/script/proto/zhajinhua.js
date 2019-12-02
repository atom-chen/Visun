/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.zhajinhua = (function() {

    var zhajinhua = {};

    zhajinhua.ReqZhajinhuaReady = (function() {

        function ReqZhajinhuaReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqZhajinhuaReady.create = function create(properties) {
            return new ReqZhajinhuaReady(properties);
        };

        ReqZhajinhuaReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        ReqZhajinhuaReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqZhajinhuaReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ReqZhajinhuaReady();
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

        ReqZhajinhuaReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqZhajinhuaReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        ReqZhajinhuaReady.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ReqZhajinhuaReady)
                return object;
            return new $root.zhajinhua.ReqZhajinhuaReady();
        };

        ReqZhajinhuaReady.toObject = function toObject() {
            return {};
        };

        ReqZhajinhuaReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqZhajinhuaReady;
    })();

    zhajinhua.RespZhajinhuaReady = (function() {

        function RespZhajinhuaReady(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespZhajinhuaReady.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        RespZhajinhuaReady.create = function create(properties) {
            return new RespZhajinhuaReady(properties);
        };

        RespZhajinhuaReady.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            return writer;
        };

        RespZhajinhuaReady.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespZhajinhuaReady.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.RespZhajinhuaReady();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespZhajinhuaReady.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespZhajinhuaReady.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        RespZhajinhuaReady.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.RespZhajinhuaReady)
                return object;
            var message = new $root.zhajinhua.RespZhajinhuaReady();
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

        RespZhajinhuaReady.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        RespZhajinhuaReady.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespZhajinhuaReady;
    })();

    zhajinhua.ReqZhajinhuaFollow = (function() {

        function ReqZhajinhuaFollow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqZhajinhuaFollow.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ReqZhajinhuaFollow.create = function create(properties) {
            return new ReqZhajinhuaFollow(properties);
        };

        ReqZhajinhuaFollow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(8).int64(message.Money);
            return writer;
        };

        ReqZhajinhuaFollow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqZhajinhuaFollow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ReqZhajinhuaFollow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqZhajinhuaFollow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqZhajinhuaFollow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        ReqZhajinhuaFollow.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ReqZhajinhuaFollow)
                return object;
            var message = new $root.zhajinhua.ReqZhajinhuaFollow();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            return message;
        };

        ReqZhajinhuaFollow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        ReqZhajinhuaFollow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqZhajinhuaFollow;
    })();

    zhajinhua.RespZhajinhuaFollow = (function() {

        function RespZhajinhuaFollow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespZhajinhuaFollow.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RespZhajinhuaFollow.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RespZhajinhuaFollow.create = function create(properties) {
            return new RespZhajinhuaFollow(properties);
        };

        RespZhajinhuaFollow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(16).int64(message.Money);
            return writer;
        };

        RespZhajinhuaFollow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespZhajinhuaFollow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.RespZhajinhuaFollow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespZhajinhuaFollow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespZhajinhuaFollow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        RespZhajinhuaFollow.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.RespZhajinhuaFollow)
                return object;
            var message = new $root.zhajinhua.RespZhajinhuaFollow();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            return message;
        };

        RespZhajinhuaFollow.toObject = function toObject(message, options) {
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
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        RespZhajinhuaFollow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespZhajinhuaFollow;
    })();

    zhajinhua.ReqZhajinhuaRaise = (function() {

        function ReqZhajinhuaRaise(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqZhajinhuaRaise.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ReqZhajinhuaRaise.create = function create(properties) {
            return new ReqZhajinhuaRaise(properties);
        };

        ReqZhajinhuaRaise.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(8).int64(message.Money);
            return writer;
        };

        ReqZhajinhuaRaise.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqZhajinhuaRaise.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ReqZhajinhuaRaise();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqZhajinhuaRaise.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqZhajinhuaRaise.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        ReqZhajinhuaRaise.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ReqZhajinhuaRaise)
                return object;
            var message = new $root.zhajinhua.ReqZhajinhuaRaise();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            return message;
        };

        ReqZhajinhuaRaise.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        ReqZhajinhuaRaise.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqZhajinhuaRaise;
    })();

    zhajinhua.RespZhajinhuaRaise = (function() {

        function RespZhajinhuaRaise(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespZhajinhuaRaise.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RespZhajinhuaRaise.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RespZhajinhuaRaise.create = function create(properties) {
            return new RespZhajinhuaRaise(properties);
        };

        RespZhajinhuaRaise.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(16).int64(message.Money);
            return writer;
        };

        RespZhajinhuaRaise.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespZhajinhuaRaise.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.RespZhajinhuaRaise();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespZhajinhuaRaise.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespZhajinhuaRaise.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        RespZhajinhuaRaise.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.RespZhajinhuaRaise)
                return object;
            var message = new $root.zhajinhua.RespZhajinhuaRaise();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            return message;
        };

        RespZhajinhuaRaise.toObject = function toObject(message, options) {
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
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        RespZhajinhuaRaise.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespZhajinhuaRaise;
    })();

    zhajinhua.ReqZhajinhuaLook = (function() {

        function ReqZhajinhuaLook(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqZhajinhuaLook.create = function create(properties) {
            return new ReqZhajinhuaLook(properties);
        };

        ReqZhajinhuaLook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        ReqZhajinhuaLook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqZhajinhuaLook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ReqZhajinhuaLook();
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

        ReqZhajinhuaLook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqZhajinhuaLook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        ReqZhajinhuaLook.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ReqZhajinhuaLook)
                return object;
            return new $root.zhajinhua.ReqZhajinhuaLook();
        };

        ReqZhajinhuaLook.toObject = function toObject() {
            return {};
        };

        ReqZhajinhuaLook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqZhajinhuaLook;
    })();

    zhajinhua.RespZhajinhuaLook = (function() {

        function RespZhajinhuaLook(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespZhajinhuaLook.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RespZhajinhuaLook.prototype.Cards = $util.emptyArray;

        RespZhajinhuaLook.create = function create(properties) {
            return new RespZhajinhuaLook(properties);
        };

        RespZhajinhuaLook.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.Cards != null && message.Cards.length) {
                writer.uint32(18).fork();
                for (var i = 0; i < message.Cards.length; ++i)
                    writer.int32(message.Cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        RespZhajinhuaLook.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespZhajinhuaLook.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.RespZhajinhuaLook();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Cards.push(reader.int32());
                    } else
                        message.Cards.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespZhajinhuaLook.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespZhajinhuaLook.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i)
                    if (!$util.isInteger(message.Cards[i]))
                        return "Cards: integer[] expected";
            }
            return null;
        };

        RespZhajinhuaLook.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.RespZhajinhuaLook)
                return object;
            var message = new $root.zhajinhua.RespZhajinhuaLook();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".zhajinhua.RespZhajinhuaLook.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i)
                    message.Cards[i] = object.Cards[i] | 0;
            }
            return message;
        };

        RespZhajinhuaLook.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = message.Cards[j];
            }
            return object;
        };

        RespZhajinhuaLook.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespZhajinhuaLook;
    })();

    zhajinhua.ReqZhajinhuaCompare = (function() {

        function ReqZhajinhuaCompare(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqZhajinhuaCompare.prototype.HitId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        ReqZhajinhuaCompare.create = function create(properties) {
            return new ReqZhajinhuaCompare(properties);
        };

        ReqZhajinhuaCompare.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                writer.uint32(8).uint64(message.HitId);
            return writer;
        };

        ReqZhajinhuaCompare.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqZhajinhuaCompare.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ReqZhajinhuaCompare();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HitId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqZhajinhuaCompare.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqZhajinhuaCompare.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                if (!$util.isInteger(message.HitId) && !(message.HitId && $util.isInteger(message.HitId.low) && $util.isInteger(message.HitId.high)))
                    return "HitId: integer|Long expected";
            return null;
        };

        ReqZhajinhuaCompare.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ReqZhajinhuaCompare)
                return object;
            var message = new $root.zhajinhua.ReqZhajinhuaCompare();
            if (object.HitId != null)
                if ($util.Long)
                    (message.HitId = $util.Long.fromValue(object.HitId)).unsigned = true;
                else if (typeof object.HitId === "string")
                    message.HitId = parseInt(object.HitId, 10);
                else if (typeof object.HitId === "number")
                    message.HitId = object.HitId;
                else if (typeof object.HitId === "object")
                    message.HitId = new $util.LongBits(object.HitId.low >>> 0, object.HitId.high >>> 0).toNumber(true);
            return message;
        };

        ReqZhajinhuaCompare.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HitId = options.longs === String ? "0" : 0;
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                if (typeof message.HitId === "number")
                    object.HitId = options.longs === String ? String(message.HitId) : message.HitId;
                else
                    object.HitId = options.longs === String ? $util.Long.prototype.toString.call(message.HitId) : options.longs === Number ? new $util.LongBits(message.HitId.low >>> 0, message.HitId.high >>> 0).toNumber(true) : message.HitId;
            return object;
        };

        ReqZhajinhuaCompare.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqZhajinhuaCompare;
    })();

    zhajinhua.RespZhajinhuaCompare = (function() {

        function RespZhajinhuaCompare(properties) {
            this.AttackerCards = [];
            this.HitCards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespZhajinhuaCompare.prototype.AttackerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RespZhajinhuaCompare.prototype.HitId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RespZhajinhuaCompare.prototype.AttackerCards = $util.emptyArray;
        RespZhajinhuaCompare.prototype.HitCards = $util.emptyArray;
        RespZhajinhuaCompare.prototype.AttackerCardType = 0;
        RespZhajinhuaCompare.prototype.HitCardType = 0;
        RespZhajinhuaCompare.prototype.WinnerId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        RespZhajinhuaCompare.create = function create(properties) {
            return new RespZhajinhuaCompare(properties);
        };

        RespZhajinhuaCompare.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AttackerId != null && message.hasOwnProperty("AttackerId"))
                writer.uint32(8).uint64(message.AttackerId);
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                writer.uint32(16).uint64(message.HitId);
            if (message.AttackerCards != null && message.AttackerCards.length) {
                writer.uint32(26).fork();
                for (var i = 0; i < message.AttackerCards.length; ++i)
                    writer.int32(message.AttackerCards[i]);
                writer.ldelim();
            }
            if (message.HitCards != null && message.HitCards.length) {
                writer.uint32(34).fork();
                for (var i = 0; i < message.HitCards.length; ++i)
                    writer.int32(message.HitCards[i]);
                writer.ldelim();
            }
            if (message.AttackerCardType != null && message.hasOwnProperty("AttackerCardType"))
                writer.uint32(40).int32(message.AttackerCardType);
            if (message.HitCardType != null && message.hasOwnProperty("HitCardType"))
                writer.uint32(48).int32(message.HitCardType);
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                writer.uint32(56).uint64(message.WinnerId);
            return writer;
        };

        RespZhajinhuaCompare.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespZhajinhuaCompare.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.RespZhajinhuaCompare();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AttackerId = reader.uint64();
                    break;
                case 2:
                    message.HitId = reader.uint64();
                    break;
                case 3:
                    if (!(message.AttackerCards && message.AttackerCards.length))
                        message.AttackerCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AttackerCards.push(reader.int32());
                    } else
                        message.AttackerCards.push(reader.int32());
                    break;
                case 4:
                    if (!(message.HitCards && message.HitCards.length))
                        message.HitCards = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.HitCards.push(reader.int32());
                    } else
                        message.HitCards.push(reader.int32());
                    break;
                case 5:
                    message.AttackerCardType = reader.int32();
                    break;
                case 6:
                    message.HitCardType = reader.int32();
                    break;
                case 7:
                    message.WinnerId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespZhajinhuaCompare.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespZhajinhuaCompare.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AttackerId != null && message.hasOwnProperty("AttackerId"))
                if (!$util.isInteger(message.AttackerId) && !(message.AttackerId && $util.isInteger(message.AttackerId.low) && $util.isInteger(message.AttackerId.high)))
                    return "AttackerId: integer|Long expected";
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                if (!$util.isInteger(message.HitId) && !(message.HitId && $util.isInteger(message.HitId.low) && $util.isInteger(message.HitId.high)))
                    return "HitId: integer|Long expected";
            if (message.AttackerCards != null && message.hasOwnProperty("AttackerCards")) {
                if (!Array.isArray(message.AttackerCards))
                    return "AttackerCards: array expected";
                for (var i = 0; i < message.AttackerCards.length; ++i)
                    if (!$util.isInteger(message.AttackerCards[i]))
                        return "AttackerCards: integer[] expected";
            }
            if (message.HitCards != null && message.hasOwnProperty("HitCards")) {
                if (!Array.isArray(message.HitCards))
                    return "HitCards: array expected";
                for (var i = 0; i < message.HitCards.length; ++i)
                    if (!$util.isInteger(message.HitCards[i]))
                        return "HitCards: integer[] expected";
            }
            if (message.AttackerCardType != null && message.hasOwnProperty("AttackerCardType"))
                if (!$util.isInteger(message.AttackerCardType))
                    return "AttackerCardType: integer expected";
            if (message.HitCardType != null && message.hasOwnProperty("HitCardType"))
                if (!$util.isInteger(message.HitCardType))
                    return "HitCardType: integer expected";
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (!$util.isInteger(message.WinnerId) && !(message.WinnerId && $util.isInteger(message.WinnerId.low) && $util.isInteger(message.WinnerId.high)))
                    return "WinnerId: integer|Long expected";
            return null;
        };

        RespZhajinhuaCompare.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.RespZhajinhuaCompare)
                return object;
            var message = new $root.zhajinhua.RespZhajinhuaCompare();
            if (object.AttackerId != null)
                if ($util.Long)
                    (message.AttackerId = $util.Long.fromValue(object.AttackerId)).unsigned = true;
                else if (typeof object.AttackerId === "string")
                    message.AttackerId = parseInt(object.AttackerId, 10);
                else if (typeof object.AttackerId === "number")
                    message.AttackerId = object.AttackerId;
                else if (typeof object.AttackerId === "object")
                    message.AttackerId = new $util.LongBits(object.AttackerId.low >>> 0, object.AttackerId.high >>> 0).toNumber(true);
            if (object.HitId != null)
                if ($util.Long)
                    (message.HitId = $util.Long.fromValue(object.HitId)).unsigned = true;
                else if (typeof object.HitId === "string")
                    message.HitId = parseInt(object.HitId, 10);
                else if (typeof object.HitId === "number")
                    message.HitId = object.HitId;
                else if (typeof object.HitId === "object")
                    message.HitId = new $util.LongBits(object.HitId.low >>> 0, object.HitId.high >>> 0).toNumber(true);
            if (object.AttackerCards) {
                if (!Array.isArray(object.AttackerCards))
                    throw TypeError(".zhajinhua.RespZhajinhuaCompare.AttackerCards: array expected");
                message.AttackerCards = [];
                for (var i = 0; i < object.AttackerCards.length; ++i)
                    message.AttackerCards[i] = object.AttackerCards[i] | 0;
            }
            if (object.HitCards) {
                if (!Array.isArray(object.HitCards))
                    throw TypeError(".zhajinhua.RespZhajinhuaCompare.HitCards: array expected");
                message.HitCards = [];
                for (var i = 0; i < object.HitCards.length; ++i)
                    message.HitCards[i] = object.HitCards[i] | 0;
            }
            if (object.AttackerCardType != null)
                message.AttackerCardType = object.AttackerCardType | 0;
            if (object.HitCardType != null)
                message.HitCardType = object.HitCardType | 0;
            if (object.WinnerId != null)
                if ($util.Long)
                    (message.WinnerId = $util.Long.fromValue(object.WinnerId)).unsigned = true;
                else if (typeof object.WinnerId === "string")
                    message.WinnerId = parseInt(object.WinnerId, 10);
                else if (typeof object.WinnerId === "number")
                    message.WinnerId = object.WinnerId;
                else if (typeof object.WinnerId === "object")
                    message.WinnerId = new $util.LongBits(object.WinnerId.low >>> 0, object.WinnerId.high >>> 0).toNumber(true);
            return message;
        };

        RespZhajinhuaCompare.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AttackerCards = [];
                object.HitCards = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.AttackerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AttackerId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HitId = options.longs === String ? "0" : 0;
                object.AttackerCardType = 0;
                object.HitCardType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.WinnerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinnerId = options.longs === String ? "0" : 0;
            }
            if (message.AttackerId != null && message.hasOwnProperty("AttackerId"))
                if (typeof message.AttackerId === "number")
                    object.AttackerId = options.longs === String ? String(message.AttackerId) : message.AttackerId;
                else
                    object.AttackerId = options.longs === String ? $util.Long.prototype.toString.call(message.AttackerId) : options.longs === Number ? new $util.LongBits(message.AttackerId.low >>> 0, message.AttackerId.high >>> 0).toNumber(true) : message.AttackerId;
            if (message.HitId != null && message.hasOwnProperty("HitId"))
                if (typeof message.HitId === "number")
                    object.HitId = options.longs === String ? String(message.HitId) : message.HitId;
                else
                    object.HitId = options.longs === String ? $util.Long.prototype.toString.call(message.HitId) : options.longs === Number ? new $util.LongBits(message.HitId.low >>> 0, message.HitId.high >>> 0).toNumber(true) : message.HitId;
            if (message.AttackerCards && message.AttackerCards.length) {
                object.AttackerCards = [];
                for (var j = 0; j < message.AttackerCards.length; ++j)
                    object.AttackerCards[j] = message.AttackerCards[j];
            }
            if (message.HitCards && message.HitCards.length) {
                object.HitCards = [];
                for (var j = 0; j < message.HitCards.length; ++j)
                    object.HitCards[j] = message.HitCards[j];
            }
            if (message.AttackerCardType != null && message.hasOwnProperty("AttackerCardType"))
                object.AttackerCardType = message.AttackerCardType;
            if (message.HitCardType != null && message.hasOwnProperty("HitCardType"))
                object.HitCardType = message.HitCardType;
            if (message.WinnerId != null && message.hasOwnProperty("WinnerId"))
                if (typeof message.WinnerId === "number")
                    object.WinnerId = options.longs === String ? String(message.WinnerId) : message.WinnerId;
                else
                    object.WinnerId = options.longs === String ? $util.Long.prototype.toString.call(message.WinnerId) : options.longs === Number ? new $util.LongBits(message.WinnerId.low >>> 0, message.WinnerId.high >>> 0).toNumber(true) : message.WinnerId;
            return object;
        };

        RespZhajinhuaCompare.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespZhajinhuaCompare;
    })();

    zhajinhua.ReqZhajinhuaGiveup = (function() {

        function ReqZhajinhuaGiveup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqZhajinhuaGiveup.create = function create(properties) {
            return new ReqZhajinhuaGiveup(properties);
        };

        ReqZhajinhuaGiveup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        ReqZhajinhuaGiveup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqZhajinhuaGiveup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.ReqZhajinhuaGiveup();
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

        ReqZhajinhuaGiveup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqZhajinhuaGiveup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        ReqZhajinhuaGiveup.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.ReqZhajinhuaGiveup)
                return object;
            return new $root.zhajinhua.ReqZhajinhuaGiveup();
        };

        ReqZhajinhuaGiveup.toObject = function toObject() {
            return {};
        };

        ReqZhajinhuaGiveup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqZhajinhuaGiveup;
    })();

    zhajinhua.RespZhajinhuaGiveup = (function() {

        function RespZhajinhuaGiveup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespZhajinhuaGiveup.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        RespZhajinhuaGiveup.create = function create(properties) {
            return new RespZhajinhuaGiveup(properties);
        };

        RespZhajinhuaGiveup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            return writer;
        };

        RespZhajinhuaGiveup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespZhajinhuaGiveup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.RespZhajinhuaGiveup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespZhajinhuaGiveup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespZhajinhuaGiveup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            return null;
        };

        RespZhajinhuaGiveup.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.RespZhajinhuaGiveup)
                return object;
            var message = new $root.zhajinhua.RespZhajinhuaGiveup();
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

        RespZhajinhuaGiveup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            return object;
        };

        RespZhajinhuaGiveup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespZhajinhuaGiveup;
    })();

    return zhajinhua;
})();

module.exports = $root;
