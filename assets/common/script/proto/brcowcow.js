/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.brcowcow = (function() {

    var brcowcow = {};

    brcowcow.ReqBrcowcowBet = (function() {

        function ReqBrcowcowBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        ReqBrcowcowBet.prototype.AreaId = 0;
        ReqBrcowcowBet.prototype.Money = 0;

        ReqBrcowcowBet.create = function create(properties) {
            return new ReqBrcowcowBet(properties);
        };

        ReqBrcowcowBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                writer.uint32(8).int32(message.AreaId);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(16).int32(message.Money);
            return writer;
        };

        ReqBrcowcowBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        ReqBrcowcowBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.ReqBrcowcowBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AreaId = reader.int32();
                    break;
                case 2:
                    message.Money = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        ReqBrcowcowBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        ReqBrcowcowBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                if (!$util.isInteger(message.AreaId))
                    return "AreaId: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money))
                    return "Money: integer expected";
            return null;
        };

        ReqBrcowcowBet.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.ReqBrcowcowBet)
                return object;
            var message = new $root.brcowcow.ReqBrcowcowBet();
            if (object.AreaId != null)
                message.AreaId = object.AreaId | 0;
            if (object.Money != null)
                message.Money = object.Money | 0;
            return message;
        };

        ReqBrcowcowBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AreaId = 0;
                object.Money = 0;
            }
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                object.AreaId = message.AreaId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                object.Money = message.Money;
            return object;
        };

        ReqBrcowcowBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReqBrcowcowBet;
    })();

    brcowcow.RespBrcowcowBet = (function() {

        function RespBrcowcowBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        RespBrcowcowBet.prototype.UserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        RespBrcowcowBet.prototype.AreaId = 0;
        RespBrcowcowBet.prototype.Money = 0;

        RespBrcowcowBet.create = function create(properties) {
            return new RespBrcowcowBet(properties);
        };

        RespBrcowcowBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(8).uint64(message.UserID);
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                writer.uint32(16).int32(message.AreaId);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(24).int32(message.Money);
            return writer;
        };

        RespBrcowcowBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        RespBrcowcowBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brcowcow.RespBrcowcowBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.uint64();
                    break;
                case 2:
                    message.AreaId = reader.int32();
                    break;
                case 3:
                    message.Money = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        RespBrcowcowBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        RespBrcowcowBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID) && !(message.UserID && $util.isInteger(message.UserID.low) && $util.isInteger(message.UserID.high)))
                    return "UserID: integer|Long expected";
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                if (!$util.isInteger(message.AreaId))
                    return "AreaId: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money))
                    return "Money: integer expected";
            return null;
        };

        RespBrcowcowBet.fromObject = function fromObject(object) {
            if (object instanceof $root.brcowcow.RespBrcowcowBet)
                return object;
            var message = new $root.brcowcow.RespBrcowcowBet();
            if (object.UserID != null)
                if ($util.Long)
                    (message.UserID = $util.Long.fromValue(object.UserID)).unsigned = true;
                else if (typeof object.UserID === "string")
                    message.UserID = parseInt(object.UserID, 10);
                else if (typeof object.UserID === "number")
                    message.UserID = object.UserID;
                else if (typeof object.UserID === "object")
                    message.UserID = new $util.LongBits(object.UserID.low >>> 0, object.UserID.high >>> 0).toNumber(true);
            if (object.AreaId != null)
                message.AreaId = object.AreaId | 0;
            if (object.Money != null)
                message.Money = object.Money | 0;
            return message;
        };

        RespBrcowcowBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserID = options.longs === String ? "0" : 0;
                object.AreaId = 0;
                object.Money = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (typeof message.UserID === "number")
                    object.UserID = options.longs === String ? String(message.UserID) : message.UserID;
                else
                    object.UserID = options.longs === String ? $util.Long.prototype.toString.call(message.UserID) : options.longs === Number ? new $util.LongBits(message.UserID.low >>> 0, message.UserID.high >>> 0).toNumber(true) : message.UserID;
            if (message.AreaId != null && message.hasOwnProperty("AreaId"))
                object.AreaId = message.AreaId;
            if (message.Money != null && message.hasOwnProperty("Money"))
                object.Money = message.Money;
            return object;
        };

        RespBrcowcowBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RespBrcowcowBet;
    })();

    return brcowcow;
})();

module.exports = $root;
