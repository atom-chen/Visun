/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.luck = (function() {

    var luck = {};

    luck.SendReward = (function() {

        function SendReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SendReward.prototype.Type = 0;
        SendReward.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendReward.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SendReward.create = function create(properties) {
            return new SendReward(properties);
        };

        SendReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(8).int32(message.Type);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(16).int64(message.Count);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(24).int64(message.Money);
            return writer;
        };

        SendReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SendReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.SendReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Count = reader.int64();
                    break;
                case 3:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SendReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SendReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        SendReward.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.SendReward)
                return object;
            var message = new $root.luck.SendReward();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
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

        SendReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        SendReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendReward;
    })();

    luck.SendRewardResp = (function() {

        function SendRewardResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        SendRewardResp.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.Type = 0;
        SendRewardResp.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        SendRewardResp.prototype.StartTimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SendRewardResp.prototype.WaitTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SendRewardResp.create = function create(properties) {
            return new SendRewardResp(properties);
        };

        SendRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(8).int64(message.ID);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(16).int32(message.Type);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(24).int64(message.Count);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(32).int64(message.Money);
            if (message.TimeStamp != null && Object.hasOwnProperty.call(message, "TimeStamp"))
                writer.uint32(40).int64(message.TimeStamp);
            if (message.SenderID != null && Object.hasOwnProperty.call(message, "SenderID"))
                writer.uint32(48).uint64(message.SenderID);
            if (message.StartTimeStamp != null && Object.hasOwnProperty.call(message, "StartTimeStamp"))
                writer.uint32(56).int64(message.StartTimeStamp);
            if (message.WaitTime != null && Object.hasOwnProperty.call(message, "WaitTime"))
                writer.uint32(64).int64(message.WaitTime);
            return writer;
        };

        SendRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        SendRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.SendRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.Type = reader.int32();
                    break;
                case 3:
                    message.Count = reader.int64();
                    break;
                case 4:
                    message.Money = reader.int64();
                    break;
                case 5:
                    message.TimeStamp = reader.int64();
                    break;
                case 6:
                    message.SenderID = reader.uint64();
                    break;
                case 7:
                    message.StartTimeStamp = reader.int64();
                    break;
                case 8:
                    message.WaitTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        SendRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        SendRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (!$util.isInteger(message.TimeStamp) && !(message.TimeStamp && $util.isInteger(message.TimeStamp.low) && $util.isInteger(message.TimeStamp.high)))
                    return "TimeStamp: integer|Long expected";
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (!$util.isInteger(message.StartTimeStamp) && !(message.StartTimeStamp && $util.isInteger(message.StartTimeStamp.low) && $util.isInteger(message.StartTimeStamp.high)))
                    return "StartTimeStamp: integer|Long expected";
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (!$util.isInteger(message.WaitTime) && !(message.WaitTime && $util.isInteger(message.WaitTime.low) && $util.isInteger(message.WaitTime.high)))
                    return "WaitTime: integer|Long expected";
            return null;
        };

        SendRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.SendRewardResp)
                return object;
            var message = new $root.luck.SendRewardResp();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.TimeStamp != null)
                if ($util.Long)
                    (message.TimeStamp = $util.Long.fromValue(object.TimeStamp)).unsigned = false;
                else if (typeof object.TimeStamp === "string")
                    message.TimeStamp = parseInt(object.TimeStamp, 10);
                else if (typeof object.TimeStamp === "number")
                    message.TimeStamp = object.TimeStamp;
                else if (typeof object.TimeStamp === "object")
                    message.TimeStamp = new $util.LongBits(object.TimeStamp.low >>> 0, object.TimeStamp.high >>> 0).toNumber();
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = true;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber(true);
            if (object.StartTimeStamp != null)
                if ($util.Long)
                    (message.StartTimeStamp = $util.Long.fromValue(object.StartTimeStamp)).unsigned = false;
                else if (typeof object.StartTimeStamp === "string")
                    message.StartTimeStamp = parseInt(object.StartTimeStamp, 10);
                else if (typeof object.StartTimeStamp === "number")
                    message.StartTimeStamp = object.StartTimeStamp;
                else if (typeof object.StartTimeStamp === "object")
                    message.StartTimeStamp = new $util.LongBits(object.StartTimeStamp.low >>> 0, object.StartTimeStamp.high >>> 0).toNumber();
            if (object.WaitTime != null)
                if ($util.Long)
                    (message.WaitTime = $util.Long.fromValue(object.WaitTime)).unsigned = false;
                else if (typeof object.WaitTime === "string")
                    message.WaitTime = parseInt(object.WaitTime, 10);
                else if (typeof object.WaitTime === "number")
                    message.WaitTime = object.WaitTime;
                else if (typeof object.WaitTime === "object")
                    message.WaitTime = new $util.LongBits(object.WaitTime.low >>> 0, object.WaitTime.high >>> 0).toNumber();
            return message;
        };

        SendRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartTimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WaitTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WaitTime = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.TimeStamp != null && message.hasOwnProperty("TimeStamp"))
                if (typeof message.TimeStamp === "number")
                    object.TimeStamp = options.longs === String ? String(message.TimeStamp) : message.TimeStamp;
                else
                    object.TimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.TimeStamp) : options.longs === Number ? new $util.LongBits(message.TimeStamp.low >>> 0, message.TimeStamp.high >>> 0).toNumber() : message.TimeStamp;
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber(true) : message.SenderID;
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (typeof message.StartTimeStamp === "number")
                    object.StartTimeStamp = options.longs === String ? String(message.StartTimeStamp) : message.StartTimeStamp;
                else
                    object.StartTimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.StartTimeStamp) : options.longs === Number ? new $util.LongBits(message.StartTimeStamp.low >>> 0, message.StartTimeStamp.high >>> 0).toNumber() : message.StartTimeStamp;
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (typeof message.WaitTime === "number")
                    object.WaitTime = options.longs === String ? String(message.WaitTime) : message.WaitTime;
                else
                    object.WaitTime = options.longs === String ? $util.Long.prototype.toString.call(message.WaitTime) : options.longs === Number ? new $util.LongBits(message.WaitTime.low >>> 0, message.WaitTime.high >>> 0).toNumber() : message.WaitTime;
            return object;
        };

        SendRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendRewardResp;
    })();

    luck.GetReward = (function() {

        function GetReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetReward.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GetReward.create = function create(properties) {
            return new GetReward(properties);
        };

        GetReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(8).int64(message.ID);
            return writer;
        };

        GetReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.GetReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            return null;
        };

        GetReward.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.GetReward)
                return object;
            var message = new $root.luck.GetReward();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            return message;
        };

        GetReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            return object;
        };

        GetReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetReward;
    })();

    luck.GetRewardResp = (function() {

        function GetRewardResp(properties) {
            this.MoneyList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        GetRewardResp.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.SenderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        GetRewardResp.prototype.StartTimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.WaitTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.Type = 0;
        GetRewardResp.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.RemainCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.RemainMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.BestMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.BestMoneyIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GetRewardResp.prototype.MoneyList = $util.emptyArray;

        GetRewardResp.create = function create(properties) {
            return new GetRewardResp(properties);
        };

        GetRewardResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(8).int64(message.ID);
            if (message.SenderID != null && Object.hasOwnProperty.call(message, "SenderID"))
                writer.uint32(16).uint64(message.SenderID);
            if (message.StartTimeStamp != null && Object.hasOwnProperty.call(message, "StartTimeStamp"))
                writer.uint32(24).int64(message.StartTimeStamp);
            if (message.WaitTime != null && Object.hasOwnProperty.call(message, "WaitTime"))
                writer.uint32(32).int64(message.WaitTime);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(40).int32(message.Type);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(48).int64(message.Count);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(56).int64(message.Money);
            if (message.RemainCount != null && Object.hasOwnProperty.call(message, "RemainCount"))
                writer.uint32(64).int64(message.RemainCount);
            if (message.RemainMoney != null && Object.hasOwnProperty.call(message, "RemainMoney"))
                writer.uint32(72).int64(message.RemainMoney);
            if (message.BestMoney != null && Object.hasOwnProperty.call(message, "BestMoney"))
                writer.uint32(80).int64(message.BestMoney);
            if (message.BestMoneyIndex != null && Object.hasOwnProperty.call(message, "BestMoneyIndex"))
                writer.uint32(88).int64(message.BestMoneyIndex);
            if (message.MoneyList != null && message.MoneyList.length) {
                writer.uint32(98).fork();
                for (var i = 0; i < message.MoneyList.length; ++i)
                    writer.int64(message.MoneyList[i]);
                writer.ldelim();
            }
            return writer;
        };

        GetRewardResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        GetRewardResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.GetRewardResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int64();
                    break;
                case 2:
                    message.SenderID = reader.uint64();
                    break;
                case 3:
                    message.StartTimeStamp = reader.int64();
                    break;
                case 4:
                    message.WaitTime = reader.int64();
                    break;
                case 5:
                    message.Type = reader.int32();
                    break;
                case 6:
                    message.Count = reader.int64();
                    break;
                case 7:
                    message.Money = reader.int64();
                    break;
                case 8:
                    message.RemainCount = reader.int64();
                    break;
                case 9:
                    message.RemainMoney = reader.int64();
                    break;
                case 10:
                    message.BestMoney = reader.int64();
                    break;
                case 11:
                    message.BestMoneyIndex = reader.int64();
                    break;
                case 12:
                    if (!(message.MoneyList && message.MoneyList.length))
                        message.MoneyList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.MoneyList.push(reader.int64());
                    } else
                        message.MoneyList.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        GetRewardResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        GetRewardResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                    return "ID: integer|Long expected";
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (!$util.isInteger(message.SenderID) && !(message.SenderID && $util.isInteger(message.SenderID.low) && $util.isInteger(message.SenderID.high)))
                    return "SenderID: integer|Long expected";
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (!$util.isInteger(message.StartTimeStamp) && !(message.StartTimeStamp && $util.isInteger(message.StartTimeStamp.low) && $util.isInteger(message.StartTimeStamp.high)))
                    return "StartTimeStamp: integer|Long expected";
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (!$util.isInteger(message.WaitTime) && !(message.WaitTime && $util.isInteger(message.WaitTime.low) && $util.isInteger(message.WaitTime.high)))
                    return "WaitTime: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                if (!$util.isInteger(message.RemainCount) && !(message.RemainCount && $util.isInteger(message.RemainCount.low) && $util.isInteger(message.RemainCount.high)))
                    return "RemainCount: integer|Long expected";
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                if (!$util.isInteger(message.RemainMoney) && !(message.RemainMoney && $util.isInteger(message.RemainMoney.low) && $util.isInteger(message.RemainMoney.high)))
                    return "RemainMoney: integer|Long expected";
            if (message.BestMoney != null && message.hasOwnProperty("BestMoney"))
                if (!$util.isInteger(message.BestMoney) && !(message.BestMoney && $util.isInteger(message.BestMoney.low) && $util.isInteger(message.BestMoney.high)))
                    return "BestMoney: integer|Long expected";
            if (message.BestMoneyIndex != null && message.hasOwnProperty("BestMoneyIndex"))
                if (!$util.isInteger(message.BestMoneyIndex) && !(message.BestMoneyIndex && $util.isInteger(message.BestMoneyIndex.low) && $util.isInteger(message.BestMoneyIndex.high)))
                    return "BestMoneyIndex: integer|Long expected";
            if (message.MoneyList != null && message.hasOwnProperty("MoneyList")) {
                if (!Array.isArray(message.MoneyList))
                    return "MoneyList: array expected";
                for (var i = 0; i < message.MoneyList.length; ++i)
                    if (!$util.isInteger(message.MoneyList[i]) && !(message.MoneyList[i] && $util.isInteger(message.MoneyList[i].low) && $util.isInteger(message.MoneyList[i].high)))
                        return "MoneyList: integer|Long[] expected";
            }
            return null;
        };

        GetRewardResp.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.GetRewardResp)
                return object;
            var message = new $root.luck.GetRewardResp();
            if (object.ID != null)
                if ($util.Long)
                    (message.ID = $util.Long.fromValue(object.ID)).unsigned = false;
                else if (typeof object.ID === "string")
                    message.ID = parseInt(object.ID, 10);
                else if (typeof object.ID === "number")
                    message.ID = object.ID;
                else if (typeof object.ID === "object")
                    message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber();
            if (object.SenderID != null)
                if ($util.Long)
                    (message.SenderID = $util.Long.fromValue(object.SenderID)).unsigned = true;
                else if (typeof object.SenderID === "string")
                    message.SenderID = parseInt(object.SenderID, 10);
                else if (typeof object.SenderID === "number")
                    message.SenderID = object.SenderID;
                else if (typeof object.SenderID === "object")
                    message.SenderID = new $util.LongBits(object.SenderID.low >>> 0, object.SenderID.high >>> 0).toNumber(true);
            if (object.StartTimeStamp != null)
                if ($util.Long)
                    (message.StartTimeStamp = $util.Long.fromValue(object.StartTimeStamp)).unsigned = false;
                else if (typeof object.StartTimeStamp === "string")
                    message.StartTimeStamp = parseInt(object.StartTimeStamp, 10);
                else if (typeof object.StartTimeStamp === "number")
                    message.StartTimeStamp = object.StartTimeStamp;
                else if (typeof object.StartTimeStamp === "object")
                    message.StartTimeStamp = new $util.LongBits(object.StartTimeStamp.low >>> 0, object.StartTimeStamp.high >>> 0).toNumber();
            if (object.WaitTime != null)
                if ($util.Long)
                    (message.WaitTime = $util.Long.fromValue(object.WaitTime)).unsigned = false;
                else if (typeof object.WaitTime === "string")
                    message.WaitTime = parseInt(object.WaitTime, 10);
                else if (typeof object.WaitTime === "number")
                    message.WaitTime = object.WaitTime;
                else if (typeof object.WaitTime === "object")
                    message.WaitTime = new $util.LongBits(object.WaitTime.low >>> 0, object.WaitTime.high >>> 0).toNumber();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.RemainCount != null)
                if ($util.Long)
                    (message.RemainCount = $util.Long.fromValue(object.RemainCount)).unsigned = false;
                else if (typeof object.RemainCount === "string")
                    message.RemainCount = parseInt(object.RemainCount, 10);
                else if (typeof object.RemainCount === "number")
                    message.RemainCount = object.RemainCount;
                else if (typeof object.RemainCount === "object")
                    message.RemainCount = new $util.LongBits(object.RemainCount.low >>> 0, object.RemainCount.high >>> 0).toNumber();
            if (object.RemainMoney != null)
                if ($util.Long)
                    (message.RemainMoney = $util.Long.fromValue(object.RemainMoney)).unsigned = false;
                else if (typeof object.RemainMoney === "string")
                    message.RemainMoney = parseInt(object.RemainMoney, 10);
                else if (typeof object.RemainMoney === "number")
                    message.RemainMoney = object.RemainMoney;
                else if (typeof object.RemainMoney === "object")
                    message.RemainMoney = new $util.LongBits(object.RemainMoney.low >>> 0, object.RemainMoney.high >>> 0).toNumber();
            if (object.BestMoney != null)
                if ($util.Long)
                    (message.BestMoney = $util.Long.fromValue(object.BestMoney)).unsigned = false;
                else if (typeof object.BestMoney === "string")
                    message.BestMoney = parseInt(object.BestMoney, 10);
                else if (typeof object.BestMoney === "number")
                    message.BestMoney = object.BestMoney;
                else if (typeof object.BestMoney === "object")
                    message.BestMoney = new $util.LongBits(object.BestMoney.low >>> 0, object.BestMoney.high >>> 0).toNumber();
            if (object.BestMoneyIndex != null)
                if ($util.Long)
                    (message.BestMoneyIndex = $util.Long.fromValue(object.BestMoneyIndex)).unsigned = false;
                else if (typeof object.BestMoneyIndex === "string")
                    message.BestMoneyIndex = parseInt(object.BestMoneyIndex, 10);
                else if (typeof object.BestMoneyIndex === "number")
                    message.BestMoneyIndex = object.BestMoneyIndex;
                else if (typeof object.BestMoneyIndex === "object")
                    message.BestMoneyIndex = new $util.LongBits(object.BestMoneyIndex.low >>> 0, object.BestMoneyIndex.high >>> 0).toNumber();
            if (object.MoneyList) {
                if (!Array.isArray(object.MoneyList))
                    throw TypeError(".luck.GetRewardResp.MoneyList: array expected");
                message.MoneyList = [];
                for (var i = 0; i < object.MoneyList.length; ++i)
                    if ($util.Long)
                        (message.MoneyList[i] = $util.Long.fromValue(object.MoneyList[i])).unsigned = false;
                    else if (typeof object.MoneyList[i] === "string")
                        message.MoneyList[i] = parseInt(object.MoneyList[i], 10);
                    else if (typeof object.MoneyList[i] === "number")
                        message.MoneyList[i] = object.MoneyList[i];
                    else if (typeof object.MoneyList[i] === "object")
                        message.MoneyList[i] = new $util.LongBits(object.MoneyList[i].low >>> 0, object.MoneyList[i].high >>> 0).toNumber();
            }
            return message;
        };

        GetRewardResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.MoneyList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.SenderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SenderID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartTimeStamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTimeStamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WaitTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WaitTime = options.longs === String ? "0" : 0;
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RemainCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RemainCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RemainMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RemainMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BestMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BestMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BestMoneyIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BestMoneyIndex = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (typeof message.ID === "number")
                    object.ID = options.longs === String ? String(message.ID) : message.ID;
                else
                    object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber() : message.ID;
            if (message.SenderID != null && message.hasOwnProperty("SenderID"))
                if (typeof message.SenderID === "number")
                    object.SenderID = options.longs === String ? String(message.SenderID) : message.SenderID;
                else
                    object.SenderID = options.longs === String ? $util.Long.prototype.toString.call(message.SenderID) : options.longs === Number ? new $util.LongBits(message.SenderID.low >>> 0, message.SenderID.high >>> 0).toNumber(true) : message.SenderID;
            if (message.StartTimeStamp != null && message.hasOwnProperty("StartTimeStamp"))
                if (typeof message.StartTimeStamp === "number")
                    object.StartTimeStamp = options.longs === String ? String(message.StartTimeStamp) : message.StartTimeStamp;
                else
                    object.StartTimeStamp = options.longs === String ? $util.Long.prototype.toString.call(message.StartTimeStamp) : options.longs === Number ? new $util.LongBits(message.StartTimeStamp.low >>> 0, message.StartTimeStamp.high >>> 0).toNumber() : message.StartTimeStamp;
            if (message.WaitTime != null && message.hasOwnProperty("WaitTime"))
                if (typeof message.WaitTime === "number")
                    object.WaitTime = options.longs === String ? String(message.WaitTime) : message.WaitTime;
                else
                    object.WaitTime = options.longs === String ? $util.Long.prototype.toString.call(message.WaitTime) : options.longs === Number ? new $util.LongBits(message.WaitTime.low >>> 0, message.WaitTime.high >>> 0).toNumber() : message.WaitTime;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.RemainCount != null && message.hasOwnProperty("RemainCount"))
                if (typeof message.RemainCount === "number")
                    object.RemainCount = options.longs === String ? String(message.RemainCount) : message.RemainCount;
                else
                    object.RemainCount = options.longs === String ? $util.Long.prototype.toString.call(message.RemainCount) : options.longs === Number ? new $util.LongBits(message.RemainCount.low >>> 0, message.RemainCount.high >>> 0).toNumber() : message.RemainCount;
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                if (typeof message.RemainMoney === "number")
                    object.RemainMoney = options.longs === String ? String(message.RemainMoney) : message.RemainMoney;
                else
                    object.RemainMoney = options.longs === String ? $util.Long.prototype.toString.call(message.RemainMoney) : options.longs === Number ? new $util.LongBits(message.RemainMoney.low >>> 0, message.RemainMoney.high >>> 0).toNumber() : message.RemainMoney;
            if (message.BestMoney != null && message.hasOwnProperty("BestMoney"))
                if (typeof message.BestMoney === "number")
                    object.BestMoney = options.longs === String ? String(message.BestMoney) : message.BestMoney;
                else
                    object.BestMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BestMoney) : options.longs === Number ? new $util.LongBits(message.BestMoney.low >>> 0, message.BestMoney.high >>> 0).toNumber() : message.BestMoney;
            if (message.BestMoneyIndex != null && message.hasOwnProperty("BestMoneyIndex"))
                if (typeof message.BestMoneyIndex === "number")
                    object.BestMoneyIndex = options.longs === String ? String(message.BestMoneyIndex) : message.BestMoneyIndex;
                else
                    object.BestMoneyIndex = options.longs === String ? $util.Long.prototype.toString.call(message.BestMoneyIndex) : options.longs === Number ? new $util.LongBits(message.BestMoneyIndex.low >>> 0, message.BestMoneyIndex.high >>> 0).toNumber() : message.BestMoneyIndex;
            if (message.MoneyList && message.MoneyList.length) {
                object.MoneyList = [];
                for (var j = 0; j < message.MoneyList.length; ++j)
                    if (typeof message.MoneyList[j] === "number")
                        object.MoneyList[j] = options.longs === String ? String(message.MoneyList[j]) : message.MoneyList[j];
                    else
                        object.MoneyList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.MoneyList[j]) : options.longs === Number ? new $util.LongBits(message.MoneyList[j].low >>> 0, message.MoneyList[j].high >>> 0).toNumber() : message.MoneyList[j];
            }
            return object;
        };

        GetRewardResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetRewardResp;
    })();

    luck.RollDice = (function() {

        function RollDice(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RollDice.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RollDice.create = function create(properties) {
            return new RollDice(properties);
        };

        RollDice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(8).int64(message.Count);
            return writer;
        };

        RollDice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RollDice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.RollDice();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RollDice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RollDice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            return null;
        };

        RollDice.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.RollDice)
                return object;
            var message = new $root.luck.RollDice();
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            return message;
        };

        RollDice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            return object;
        };

        RollDice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RollDice;
    })();

    luck.RollDiceResp = (function() {

        function RollDiceResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RollDiceResp.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RollDiceResp.prototype.Numbers = $util.newBuffer([]);

        RollDiceResp.create = function create(properties) {
            return new RollDiceResp(properties);
        };

        RollDiceResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(8).int64(message.Count);
            if (message.Numbers != null && Object.hasOwnProperty.call(message, "Numbers"))
                writer.uint32(18).bytes(message.Numbers);
            return writer;
        };

        RollDiceResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RollDiceResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.luck.RollDiceResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Count = reader.int64();
                    break;
                case 2:
                    message.Numbers = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RollDiceResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RollDiceResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Numbers != null && message.hasOwnProperty("Numbers"))
                if (!(message.Numbers && typeof message.Numbers.length === "number" || $util.isString(message.Numbers)))
                    return "Numbers: buffer expected";
            return null;
        };

        RollDiceResp.fromObject = function fromObject(object) {
            if (object instanceof $root.luck.RollDiceResp)
                return object;
            var message = new $root.luck.RollDiceResp();
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Numbers != null)
                if (typeof object.Numbers === "string")
                    $util.base64.decode(object.Numbers, message.Numbers = $util.newBuffer($util.base64.length(object.Numbers)), 0);
                else if (object.Numbers.length)
                    message.Numbers = object.Numbers;
            return message;
        };

        RollDiceResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Numbers = "";
                else {
                    object.Numbers = [];
                    if (options.bytes !== Array)
                        object.Numbers = $util.newBuffer(object.Numbers);
                }
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Numbers != null && message.hasOwnProperty("Numbers"))
                object.Numbers = options.bytes === String ? $util.base64.encode(message.Numbers, 0, message.Numbers.length) : options.bytes === Array ? Array.prototype.slice.call(message.Numbers) : message.Numbers;
            return object;
        };

        RollDiceResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RollDiceResp;
    })();

    return luck;
})();

module.exports = $root;
