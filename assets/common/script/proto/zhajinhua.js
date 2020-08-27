/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.zhajinhua = (function() {

    var zhajinhua = {};

    zhajinhua.FighterInfo = (function() {

        function FighterInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        FighterInfo.prototype.UserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        FighterInfo.prototype.SeatId = 0;
        FighterInfo.prototype.FightState = 0;
        FighterInfo.prototype.IsSee = false;
        FighterInfo.prototype.RecentBetMoney = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        FighterInfo.prototype.TotalBetMoney = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        FighterInfo.prototype.Cards = null;

        FighterInfo.create = function create(properties) {
            return new FighterInfo(properties);
        };

        FighterInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(8).uint64(message.UserId);
            if (message.SeatId != null && Object.hasOwnProperty.call(message, "SeatId"))
                writer.uint32(16).int32(message.SeatId);
            if (message.FightState != null && Object.hasOwnProperty.call(message, "FightState"))
                writer.uint32(24).int32(message.FightState);
            if (message.IsSee != null && Object.hasOwnProperty.call(message, "IsSee"))
                writer.uint32(32).bool(message.IsSee);
            if (message.RecentBetMoney != null && Object.hasOwnProperty.call(message, "RecentBetMoney"))
                writer.uint32(40).uint64(message.RecentBetMoney);
            if (message.TotalBetMoney != null && Object.hasOwnProperty.call(message, "TotalBetMoney"))
                writer.uint32(48).uint64(message.TotalBetMoney);
            if (message.Cards != null && Object.hasOwnProperty.call(message, "Cards"))
                $root.gamecomm.CardInfo.encode(message.Cards, writer.uint32(58).fork()).ldelim();
            return writer;
        };

        FighterInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        FighterInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.zhajinhua.FighterInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserId = reader.uint64();
                    break;
                case 2:
                    message.SeatId = reader.int32();
                    break;
                case 3:
                    message.FightState = reader.int32();
                    break;
                case 4:
                    message.IsSee = reader.bool();
                    break;
                case 5:
                    message.RecentBetMoney = reader.uint64();
                    break;
                case 6:
                    message.TotalBetMoney = reader.uint64();
                    break;
                case 7:
                    message.Cards = $root.gamecomm.CardInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        FighterInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        FighterInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (!$util.isInteger(message.UserId) && !(message.UserId && $util.isInteger(message.UserId.low) && $util.isInteger(message.UserId.high)))
                    return "UserId: integer|Long expected";
            if (message.SeatId != null && message.hasOwnProperty("SeatId"))
                if (!$util.isInteger(message.SeatId))
                    return "SeatId: integer expected";
            if (message.FightState != null && message.hasOwnProperty("FightState"))
                if (!$util.isInteger(message.FightState))
                    return "FightState: integer expected";
            if (message.IsSee != null && message.hasOwnProperty("IsSee"))
                if (typeof message.IsSee !== "boolean")
                    return "IsSee: boolean expected";
            if (message.RecentBetMoney != null && message.hasOwnProperty("RecentBetMoney"))
                if (!$util.isInteger(message.RecentBetMoney) && !(message.RecentBetMoney && $util.isInteger(message.RecentBetMoney.low) && $util.isInteger(message.RecentBetMoney.high)))
                    return "RecentBetMoney: integer|Long expected";
            if (message.TotalBetMoney != null && message.hasOwnProperty("TotalBetMoney"))
                if (!$util.isInteger(message.TotalBetMoney) && !(message.TotalBetMoney && $util.isInteger(message.TotalBetMoney.low) && $util.isInteger(message.TotalBetMoney.high)))
                    return "TotalBetMoney: integer|Long expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                var error = $root.gamecomm.CardInfo.verify(message.Cards);
                if (error)
                    return "Cards." + error;
            }
            return null;
        };

        FighterInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.zhajinhua.FighterInfo)
                return object;
            var message = new $root.zhajinhua.FighterInfo();
            if (object.UserId != null)
                if ($util.Long)
                    (message.UserId = $util.Long.fromValue(object.UserId)).unsigned = true;
                else if (typeof object.UserId === "string")
                    message.UserId = parseInt(object.UserId, 10);
                else if (typeof object.UserId === "number")
                    message.UserId = object.UserId;
                else if (typeof object.UserId === "object")
                    message.UserId = new $util.LongBits(object.UserId.low >>> 0, object.UserId.high >>> 0).toNumber(true);
            if (object.SeatId != null)
                message.SeatId = object.SeatId | 0;
            if (object.FightState != null)
                message.FightState = object.FightState | 0;
            if (object.IsSee != null)
                message.IsSee = Boolean(object.IsSee);
            if (object.RecentBetMoney != null)
                if ($util.Long)
                    (message.RecentBetMoney = $util.Long.fromValue(object.RecentBetMoney)).unsigned = true;
                else if (typeof object.RecentBetMoney === "string")
                    message.RecentBetMoney = parseInt(object.RecentBetMoney, 10);
                else if (typeof object.RecentBetMoney === "number")
                    message.RecentBetMoney = object.RecentBetMoney;
                else if (typeof object.RecentBetMoney === "object")
                    message.RecentBetMoney = new $util.LongBits(object.RecentBetMoney.low >>> 0, object.RecentBetMoney.high >>> 0).toNumber(true);
            if (object.TotalBetMoney != null)
                if ($util.Long)
                    (message.TotalBetMoney = $util.Long.fromValue(object.TotalBetMoney)).unsigned = true;
                else if (typeof object.TotalBetMoney === "string")
                    message.TotalBetMoney = parseInt(object.TotalBetMoney, 10);
                else if (typeof object.TotalBetMoney === "number")
                    message.TotalBetMoney = object.TotalBetMoney;
                else if (typeof object.TotalBetMoney === "object")
                    message.TotalBetMoney = new $util.LongBits(object.TotalBetMoney.low >>> 0, object.TotalBetMoney.high >>> 0).toNumber(true);
            if (object.Cards != null) {
                if (typeof object.Cards !== "object")
                    throw TypeError(".zhajinhua.FighterInfo.Cards: object expected");
                message.Cards = $root.gamecomm.CardInfo.fromObject(object.Cards);
            }
            return message;
        };

        FighterInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.UserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserId = options.longs === String ? "0" : 0;
                object.SeatId = 0;
                object.FightState = 0;
                object.IsSee = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.RecentBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RecentBetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TotalBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalBetMoney = options.longs === String ? "0" : 0;
                object.Cards = null;
            }
            if (message.UserId != null && message.hasOwnProperty("UserId"))
                if (typeof message.UserId === "number")
                    object.UserId = options.longs === String ? String(message.UserId) : message.UserId;
                else
                    object.UserId = options.longs === String ? $util.Long.prototype.toString.call(message.UserId) : options.longs === Number ? new $util.LongBits(message.UserId.low >>> 0, message.UserId.high >>> 0).toNumber(true) : message.UserId;
            if (message.SeatId != null && message.hasOwnProperty("SeatId"))
                object.SeatId = message.SeatId;
            if (message.FightState != null && message.hasOwnProperty("FightState"))
                object.FightState = message.FightState;
            if (message.IsSee != null && message.hasOwnProperty("IsSee"))
                object.IsSee = message.IsSee;
            if (message.RecentBetMoney != null && message.hasOwnProperty("RecentBetMoney"))
                if (typeof message.RecentBetMoney === "number")
                    object.RecentBetMoney = options.longs === String ? String(message.RecentBetMoney) : message.RecentBetMoney;
                else
                    object.RecentBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.RecentBetMoney) : options.longs === Number ? new $util.LongBits(message.RecentBetMoney.low >>> 0, message.RecentBetMoney.high >>> 0).toNumber(true) : message.RecentBetMoney;
            if (message.TotalBetMoney != null && message.hasOwnProperty("TotalBetMoney"))
                if (typeof message.TotalBetMoney === "number")
                    object.TotalBetMoney = options.longs === String ? String(message.TotalBetMoney) : message.TotalBetMoney;
                else
                    object.TotalBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBetMoney) : options.longs === Number ? new $util.LongBits(message.TotalBetMoney.low >>> 0, message.TotalBetMoney.high >>> 0).toNumber(true) : message.TotalBetMoney;
            if (message.Cards != null && message.hasOwnProperty("Cards"))
                object.Cards = $root.gamecomm.CardInfo.toObject(message.Cards, options);
            return object;
        };

        FighterInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FighterInfo;
    })();

    return zhajinhua;
})();

module.exports = $root;